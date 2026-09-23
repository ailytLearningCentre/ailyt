const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

const courseInterestOptions = [
  'spoken-english',
  'confidence-building',
  'interview-skills',
  'ccc',
  'o-level',
  'basic-computers',
  'excel',
  'python',
  'data-analytics',
  'tableau',
  'ignou-bca-mca-support',
  'software-development-internship',
  'ignou-bca-counselling',
  'ignou-mca-counselling',
  'ignou-bca-program-guide',
  'ignou-mca-program-guide',
];

const learningModeOptions = ['classroom', 'hybrid', 'online-support'];
const startPlanOptions = ['immediately', 'within-2-weeks', 'within-1-month', 'just-exploring'];
const statusOptions = ['new', 'contacted', 'enrolled', 'closed'];

const validate = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }
    return next();
  },
];

router.post(
  '/',
  validate([
    body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 120 }),
    body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ max: 25 }),
    body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('courseInterest')
      .isIn(courseInterestOptions)
      .withMessage('Invalid course interest'),
    body('learningMode').isIn(learningModeOptions).withMessage('Invalid learning mode'),
    body('startPlan').isIn(startPlanOptions).withMessage('Invalid start timeline'),
    body('qualification')
      .trim()
      .notEmpty()
      .withMessage('Qualification is required')
      .isLength({ max: 180 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
    body('consent').custom((value) => value === true).withMessage('Consent is required'),
  ]),
  asyncHandler(async (req, res) => {
    const {
      fullName,
      phone,
      email,
      courseInterest,
      learningMode,
      startPlan,
      qualification,
      message,
      consent,
    } = req.body;

    const enquiry = await Enquiry.create({
      fullName,
      phone,
      email,
      courseInterest,
      learningMode,
      startPlan,
      qualification,
      message,
      consent,
      source: 'learning-contact',
      status: 'new',
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: {
        enquiryId: enquiry._id,
        createdAt: enquiry.createdAt,
      },
    });
  })
);

router.get(
  '/',
  validate([
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('status').optional().isIn(statusOptions).withMessage('Invalid status'),
    query('courseInterest').optional().isIn(courseInterestOptions).withMessage('Invalid course interest'),
    query('learningMode').optional().isIn(learningModeOptions).withMessage('Invalid learning mode'),
    query('search').optional().trim().isLength({ max: 100 }).withMessage('Search is too long'),
  ]),
  asyncHandler(async (req, res) => {
    const page = Number.parseInt(req.query.page || '1', 10);
    const limit = Number.parseInt(req.query.limit || '25', 10);
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    if (req.query.courseInterest) filter.courseInterest = req.query.courseInterest;
    if (req.query.learningMode) filter.learningMode = req.query.learningMode;
    if (req.query.search) {
      const escapedSearch = req.query.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filter.$or = [
        { fullName: { $regex: escapedSearch, $options: 'i' } },
        { phone: { $regex: escapedSearch, $options: 'i' } },
        { email: { $regex: escapedSearch, $options: 'i' } },
      ];
    }

    const [enquiries, total, statusCounts] = await Promise.all([
      Enquiry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Enquiry.countDocuments(filter),
      Enquiry.aggregate([
        { $match: filter },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
    ]);

    const summary = { total, new: 0, contacted: 0, enrolled: 0, closed: 0 };
    statusCounts.forEach(({ _id, count }) => {
      if (Object.prototype.hasOwnProperty.call(summary, _id)) summary[_id] = count;
    });

    res.status(200).json({
      success: true,
      message: 'Enquiries fetched successfully',
      data: enquiries,
      summary,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    });
  })
);

router.patch(
  '/:id/status',
  validate([
    param('id').isMongoId().withMessage('Invalid enquiry id'),
    body('status').isIn(statusOptions).withMessage('Invalid status'),
  ]),
  asyncHandler(async (req, res) => {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry status updated successfully',
      data: enquiry,
    });
  })
);

module.exports = router;
