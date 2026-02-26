
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getFetchErrorMessage = (error, fallbackMessage) => {
  const message = String(error?.message || '').toLowerCase();
  const isNetworkError = error?.name === 'TypeError' || message.includes('failed to fetch');

  if (isNetworkError) {
    return `Cannot reach backend API at ${API_BASE_URL}. Please start server and verify CORS/API URL.`;
  }

  return error?.message || fallbackMessage || 'Unable to fetch enquiries.';
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

  const fetchEnquiries = useCallback(
    async (page = 1, status = '') => {
      setLoading(true);
      setError('');
      setStatusUpdateError('');

      try {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(pagination.limit),
        });

        if (status) {
          params.set('status', status);
        }

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
      } catch (fetchError) {
        setError(getFetchErrorMessage(fetchError, 'Unable to fetch enquiries.'));
      } finally {
        setLoading(false);
      }
    },
    [pagination.limit]
  );

  useEffect(() => {
    fetchEnquiries(1, statusFilter);
  }, [fetchEnquiries, statusFilter]);

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
    fetchEnquiries(pagination.page, statusFilter);
  };

  const handleStatusChange = async (enquiryId, nextStatus) => {
    setStatusUpdateError('');
    setUpdatingEnquiryId(enquiryId);

    try {
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

      setEnquiries((previous) =>
        previous.map((enquiry) =>
          enquiry._id === enquiryId ? { ...enquiry, status: nextStatus } : enquiry
        )
      );
    } catch (updateError) {
      setStatusUpdateError(getFetchErrorMessage(updateError, 'Unable to update enquiry status.'));
    } finally {
      setUpdatingEnquiryId('');
    }
  };

  const handlePrev = () => {
    if (pagination.page > 1) {
      fetchEnquiries(pagination.page - 1, statusFilter);
    }
  };

  const handleNext = () => {
    if (pagination.page < pagination.totalPages) {
      fetchEnquiries(pagination.page + 1, statusFilter);
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
              <p>
                Track and review all submitted student enrollment enquiries from the Learning
                contact form.
              </p>
              <div className="contact-live-tags">
                <span>Total: {pagination.total}</span>
                <span>Current page: {currentPageStats.total}</span>
                <span>New (page): {currentPageStats.new}</span>
              </div>
            </div>

            <aside className="learning-contact-hero-card">
              <h3>Current Page Snapshot</h3>
              <ul className="contact-next-steps">
                <li>
                  <span>N</span>
                  New: {currentPageStats.new}
                </li>
                <li>
                  <span>C</span>
                  Contacted: {currentPageStats.contacted}
                </li>
                <li>
                  <span>E</span>
                  Enrolled: {currentPageStats.enrolled}
                </li>
                <li>
                  <span>X</span>
                  Closed: {currentPageStats.closed}
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
          <div className="learning-enquiries-toolbar">
            <div className="learning-enquiries-filter">
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
            </div>

            <button
              type="button"
              className="cta-secondary learning-enquiries-refresh"
              onClick={handleRefresh}
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
                      <strong>Phone:</strong> {enquiry.phone}
                    </p>
                    <p>
                      <strong>Email:</strong> {enquiry.email}
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
