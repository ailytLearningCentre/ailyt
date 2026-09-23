
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';
import '../styles/LearningEnquiries.css';

const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '');

const getFetchErrorMessage = (error, fallbackMessage) => {
  const message = String(error?.message || '').toLowerCase();
  const isNetworkError = error?.name === 'TypeError' || message.includes('failed to fetch');

  if (isNetworkError) {
    return fallbackMessage || 'Unable to load enquiries right now. Please try again later.';
  }

  return fallbackMessage || 'Unable to load enquiries right now. Please try again later.';
};

const courseLabels = {
  'spoken-english': 'Spoken English',
  'confidence-building': 'Confidence Building',
  'interview-skills': 'Interview Skills',
  ccc: 'CCC',
  'o-level': 'O-Level',
  'basic-computers': 'Basic Computers',
  excel: 'Excel',
  python: 'Python',
  'data-analytics': 'Data Analytics',
  tableau: 'Tableau',
  'ignou-bca-mca-support': 'IGNOU BCA / MCA Support',
  'software-development-internship': 'Software Development Internship',
  'ignou-bca-counselling': 'IGNOU BCA Counselling',
  'ignou-mca-counselling': 'IGNOU MCA Counselling',
  'ignou-bca-program-guide': 'IGNOU BCA Program Guide',
  'ignou-mca-program-guide': 'IGNOU MCA Program Guide',
};

const modeLabels = {
  classroom: 'Classroom',
  hybrid: 'Hybrid',
  'online-support': 'Online + Mentor Support',
};

const startPlanLabels = {
  immediately: 'Immediately',
  'within-2-weeks': 'Within 2 weeks',
  'within-1-month': 'Within 1 month',
  'just-exploring': 'Just exploring',
};

const statusOptions = [
  { value: '', label: 'All status' },
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'enrolled', label: 'Enrolled' },
  { value: 'closed', label: 'Closed' },
];

const workflowStatusOptions = statusOptions.filter((option) => option.value);

const courseFilterOptions = [
  { value: '', label: 'All courses' },
  ...Object.entries(courseLabels).map(([value, label]) => ({ value, label })),
];

const modeFilterOptions = [
  { value: '', label: 'All learning modes' },
  ...Object.entries(modeLabels).map(([value, label]) => ({ value, label })),
];

const formatDateTime = (value) => {
  if (!value) {
    return '-';
  }

  return new Date(value).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const LearningEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusUpdateError, setStatusUpdateError] = useState('');
  const [updatingEnquiryId, setUpdatingEnquiryId] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 25,
    total: 0,
    totalPages: 1,
  });
  const [summary, setSummary] = useState({ total: 0, new: 0, contacted: 0, enrolled: 0, closed: 0 });

  useEffect(() => {
    const previousTitle = document.title;
    const robotsTags = [
      ['robots', 'noindex, nofollow'],
      ['googlebot', 'noindex, nofollow'],
    ].map(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      const created = !tag;
      const previousContent = tag?.getAttribute('content') || '';
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
      return { tag, created, previousContent };
    });

    document.title = 'Student Enquiry Dashboard | AILYT Learning Centre';
    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.getAttribute('content') || '';
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', 'Internal AILYT Learning Centre dashboard for reviewing student course enquiries, tracking enquiry status, and managing follow-up actions.');

    return () => {
      document.title = previousTitle;
      robotsTags.forEach(({ tag, created, previousContent }) => {
        if (created) tag.remove();
        else tag.setAttribute('content', previousContent);
      });
      if (createdDescription) description.remove();
      else description.setAttribute('content', previousDescription);
    };
  }, []);

  const fetchEnquiries = useCallback(
    async (page = 1, status = '', course = '', mode = '', searchTerm = '') => {
      setLoading(true);
      setError('');
      setStatusUpdateError('');

      try {
        if (!API_BASE_URL) {
          throw new Error('The enquiry service is not configured.');
        }

        const params = new URLSearchParams({
          page: String(page),
          limit: String(pagination.limit),
        });

        if (status) {
          params.set('status', status);
        }
        if (course) params.set('courseInterest', course);
        if (mode) params.set('learningMode', mode);
        if (searchTerm.trim()) params.set('search', searchTerm.trim());

        const response = await fetch(`${API_BASE_URL}/enquiries?${params.toString()}`);
        let result = {};
        try {
          result = await response.json();
        } catch (parseError) {
          result = {};
        }

        if (!response.ok) {
          throw new Error(result.message || 'Unable to fetch enquiries.');
        }

        setEnquiries(result.data || []);
        setPagination((previous) => ({
          ...previous,
          ...(result.pagination || {}),
        }));
        setSummary(result.summary || { total: 0, new: 0, contacted: 0, enrolled: 0, closed: 0 });
      } catch (fetchError) {
        setError(getFetchErrorMessage(fetchError, 'Unable to load enquiries right now. Please try again.'));
      } finally {
        setLoading(false);
      }
    },
    [pagination.limit]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchEnquiries(1, statusFilter, courseFilter, modeFilter, search);
    }, 250);
    return () => clearTimeout(timer);
  }, [fetchEnquiries, statusFilter, courseFilter, modeFilter, search]);

  const currentPageStats = useMemo(() => {
    return enquiries.reduce(
      (summary, enquiry) => {
        summary.total += 1;
        summary[enquiry.status] = (summary[enquiry.status] || 0) + 1;
        return summary;
      },
      { total: 0, new: 0, contacted: 0, enrolled: 0, closed: 0 }
    );
  }, [enquiries]);

  const handleRefresh = () => {
    fetchEnquiries(pagination.page, statusFilter, courseFilter, modeFilter, search);
  };

  const handleStatusChange = async (enquiryId, nextStatus) => {
    setStatusUpdateError('');
    setUpdatingEnquiryId(enquiryId);

    try {
      if (!API_BASE_URL) {
        throw new Error('The enquiry service is not configured.');
      }

      const response = await fetch(`${API_BASE_URL}/enquiries/${enquiryId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch (parseError) {
        result = {};
      }

      if (!response.ok) {
        throw new Error(result.message || 'Unable to update enquiry status.');
      }

      const previousStatus = enquiries.find((item) => item._id === enquiryId)?.status;

      setEnquiries((previous) =>
        previous.map((enquiry) =>
          enquiry._id === enquiryId ? { ...enquiry, status: nextStatus } : enquiry
        )
      );
      setSummary((previous) => ({
        ...previous,
        [nextStatus]: previous[nextStatus] + 1,
        ...(previousStatus
          ? { [previousStatus]: Math.max(0, previous[previousStatus] - 1) }
          : {}),
      }));
    } catch (updateError) {
      setStatusUpdateError('We could not update the enquiry status. Please try again.');
    } finally {
      setUpdatingEnquiryId('');
    }
  };

  const handlePrev = () => {
    if (pagination.page > 1) {
      fetchEnquiries(pagination.page - 1, statusFilter, courseFilter, modeFilter, search);
    }
  };

  const handleNext = () => {
    if (pagination.page < pagination.totalPages) {
      fetchEnquiries(pagination.page + 1, statusFilter, courseFilter, modeFilter, search);
    }
  };

  return (
    <div className="learning-enquiries-page">
      <section className="learning-contact-hero">
        <div className="section-container">
          <div className="learning-contact-hero-content">
            <div className="learning-contact-hero-text">
              <span className="contact-kicker">Company View</span>
              <h1>Student Enquiry Dashboard</h1>
              <p>Review incoming course enquiries, track follow-up progress and manage student communication from one place.</p>
              <div className="contact-live-tags">
                <span>Total: {pagination.total}</span>
                <span>Showing: {currentPageStats.total}</span>
                <span>Searchable contact records</span>
              </div>
            </div>

            <aside className="learning-contact-hero-card">
              <h3>Enquiry Summary</h3>
              <ul className="contact-next-steps">
                <li>
                  <span>N</span>
                  New: {summary.new}
                </li>
                <li>
                  <span>C</span>
                  Contacted: {summary.contacted}
                </li>
                <li>
                  <span>E</span>
                  Enrolled: {summary.enrolled}
                </li>
                <li>
                  <span>X</span>
                  Closed: {summary.closed}
                </li>
              </ul>
              <Link to="/learning/contact" className="course-link">
                Back to Enquiry Form
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="learning-enquiries-section">
        <div className="section-container">
          <div className="learning-enquiries-summary" aria-label="Enquiry summary">
            {[
              ['Total Enquiries', summary.total],
              ['New', summary.new],
              ['Contacted', summary.contacted],
              ['Enrolled', summary.enrolled],
              ['Closed', summary.closed],
            ].map(([label, value]) => (
              <div className="learning-enquiries-summary-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="learning-enquiries-toolbar">
            <div className="learning-enquiries-filter learning-enquiries-filter-group">
              <label htmlFor="statusFilter">Filter by status</label>
              <select
                id="statusFilter"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option.value || 'all'} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label htmlFor="courseFilter">Course interest</label>
              <select id="courseFilter" value={courseFilter} onChange={(event) => setCourseFilter(event.target.value)}>
                {courseFilterOptions.map((option) => <option key={option.value || 'all-courses'} value={option.value}>{option.label}</option>)}
              </select>
              <label htmlFor="modeFilter">Learning mode</label>
              <select id="modeFilter" value={modeFilter} onChange={(event) => setModeFilter(event.target.value)}>
                {modeFilterOptions.map((option) => <option key={option.value || 'all-modes'} value={option.value}>{option.label}</option>)}
              </select>
              <label htmlFor="enquirySearch">Search contact</label>
              <input id="enquirySearch" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name, phone or email" />
            </div>

            <button
              type="button"
              className="cta-secondary learning-enquiries-refresh"
              onClick={handleRefresh}
              disabled={loading}
            >
              Refresh List
            </button>
          </div>

          {loading && <p className="learning-enquiries-info">Loading enquiries...</p>}
          {error && !loading && <p className="learning-enroll-error">{error}</p>}
          {statusUpdateError && !loading && <p className="learning-enroll-error">{statusUpdateError}</p>}

          {!loading && !error && enquiries.length === 0 && (
            <p className="learning-enquiries-info">No enquiries found for the selected filter.</p>
          )}

          {!loading && !error && enquiries.length > 0 && (
            <div className="learning-enquiries-list">
              {enquiries.map((enquiry) => (
                <article key={enquiry._id} className="learning-enquiry-card">
                  <header className="learning-enquiry-header">
                    <div>
                      <h3>{enquiry.fullName}</h3>
                      <p>{formatDateTime(enquiry.createdAt)}</p>
                    </div>
                    <div className="learning-enquiry-actions">
                      <span className={`learning-enquiry-status status-${enquiry.status}`}>
                        {enquiry.status}
                      </span>
                      <label className="learning-enquiry-status-editor">
                        <span>Update status</span>
                        <select
                          value={enquiry.status}
                          onChange={(event) =>
                            handleStatusChange(enquiry._id, event.target.value)
                          }
                          disabled={updatingEnquiryId === enquiry._id}
                        >
                          {workflowStatusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </header>

                  <div className="learning-enquiry-grid">
                    <p>
                      <strong>Phone:</strong> <a href={`tel:${enquiry.phone}`}>{enquiry.phone}</a>
                    </p>
                    <p>
                      <strong>Email:</strong> <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                    </p>
                    <p>
                      <strong>Course:</strong>{' '}
                      {courseLabels[enquiry.courseInterest] || enquiry.courseInterest}
                    </p>
                    <p>
                      <strong>Mode:</strong> {modeLabels[enquiry.learningMode] || enquiry.learningMode}
                    </p>
                    <p>
                      <strong>Start Plan:</strong>{' '}
                      {startPlanLabels[enquiry.startPlan] || enquiry.startPlan}
                    </p>
                    <p>
                      <strong>Qualification:</strong> {enquiry.qualification}
                    </p>
                  </div>

                  <div className="learning-enquiry-follow-up">
                    <a href={`tel:${enquiry.phone}`}>Call</a>
                    <a href={`mailto:${enquiry.email}`}>Email</a>
                    <a href={`https://wa.me/${String(enquiry.phone).replace(/\D/g, '').replace(/^0/, '91')}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </div>

                  <div className="learning-enquiry-message">
                    <strong>Goal / Message</strong>
                    <p>{enquiry.message}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="learning-enquiries-pagination">
            <button
              type="button"
              className="cta-secondary learning-enquiries-nav-btn"
              onClick={handlePrev}
              disabled={loading || pagination.page <= 1}
            >
              Previous
            </button>
            <p>
              Page {pagination.page} of {pagination.totalPages || 1}
            </p>
            <button
              type="button"
              className="cta-secondary learning-enquiries-nav-btn"
              onClick={handleNext}
              disabled={loading || pagination.page >= pagination.totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningEnquiries;
