const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    courseInterest: {
      type: String,
      required: true,
      enum: [
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
      ],
    },
    learningMode: {
      type: String,
      required: true,
      enum: ['classroom', 'hybrid', 'online-support'],
    },
    startPlan: {
      type: String,
      required: true,
      enum: ['immediately', 'within-2-weeks', 'within-1-month', 'just-exploring'],
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    consent: {
      type: Boolean,
      required: true,
      default: false,
    },
    source: {
      type: String,
      default: 'learning-contact',
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'enrolled', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

enquirySchema.index({ createdAt: -1 });

module.exports = mongoose.model('Enquiry', enquirySchema);
