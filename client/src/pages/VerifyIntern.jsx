import React from 'react';
import { Link, useParams } from 'react-router-dom';
import internsData from '../data/internsData';
import './VerifyIntern.css';

const VerifyIntern = () => {
  const { verificationCode } = useParams();

  const intern = internsData.find(
    (item) =>
      item.verificationCode.toLowerCase() ===
      verificationCode.toLowerCase()
  );

  if (!intern) {
    return (
      <main className="verification-page">
        <section className="verification-card verification-error">
          <div className="verification-icon error-icon">
            ✕
          </div>

          <p className="verification-eyebrow">
            AILYT CERTIFICATE VERIFICATION
          </p>

          <h1>Verification Failed</h1>

          <p>
            No valid internship record was found for this
            verification code.
          </p>

          <Link to="/" className="verification-home-button">
            Go to AILYT Home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="verification-page">
      <section className="verification-card">
        <div className="verification-icon">
          ✓
        </div>

        <p className="verification-eyebrow">
          AILYT CERTIFICATE VERIFICATION
        </p>

        <h1>Internship Verified</h1>

        <p className="verification-message">
          This internship record has been verified by
          AILYT Technologies Pvt. Ltd.
        </p>

        <div className="verification-profile">
          <div className="verification-avatar">
            {intern.name.charAt(0)}
          </div>

          <div>
            <h2>{intern.name}</h2>
            <p>{intern.role}</p>
          </div>
        </div>

        <div className="verification-details">
          <div className="verification-row">
            <span>Intern ID</span>
            <strong>{intern.internId}</strong>
          </div>

          <div className="verification-row">
            <span>Internship Period</span>
            <strong>
              {intern.startDate} to {intern.endDate}
            </strong>
          </div>

          <div className="verification-row">
            <span>Batch</span>
            <strong>{intern.batch}</strong>
          </div>

          <div className="verification-row">
            <span>Certificate Status</span>
            <strong className="verified-text">
              ✓ {intern.certificate}
            </strong>
          </div>

          <div className="verification-row">
            <span>Verification Code</span>
            <strong>{intern.verificationCode}</strong>
          </div>
        </div>

        <Link
          to={`/it-services/interns/${intern.slug}`}
          className="verification-profile-button"
        >
          View Complete Profile
        </Link>

        <p className="verification-note">
          This page is generated from the official AILYT
          internship verification record.
        </p>
      </section>
    </main>
  );
};

export default VerifyIntern;