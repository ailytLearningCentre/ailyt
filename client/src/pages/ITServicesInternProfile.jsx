import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import internsData from '../data/internsData';
import './ITServicesInterns.css';

const ITServicesInternProfile = () => {
  const { slug } = useParams();
  const [photoError, setPhotoError] = useState(false);

  const intern = internsData.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    setPhotoError(false);
  }, [slug, intern?.photo]);

  if (!intern) {
    return (
      <main className="intern-profile-page">
        <section className="intern-not-found">
          <h1>Intern profile not found</h1>

          <p>
            The requested intern profile is unavailable.
          </p>

          <Link to="/it-services">
            Back to IT Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="intern-profile-page">
      <section className="intern-profile-container">
        <Link
          to="/it-services"
          className="back-to-interns"
        >
          ← Back to IT Services
        </Link>

        <div className="intern-profile-header">
          <div className="intern-profile-photo">
            {!photoError && intern.photo ? (
              <img
                key={intern.photo}
                src={intern.photo}
                alt={`${intern.name} profile`}
                onError={() => setPhotoError(true)}
              />
            ) : (
              <span>
                {intern.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <div className="intern-profile-heading">
            <p className="verification-label">
              AILYT VERIFIED INTERN
            </p>

            <h1>{intern.name}</h1>

            <p className="intern-profile-role">
              {intern.role}
            </p>

            <span className="intern-verification-badge">
              ✓ {intern.status}
            </span>
          </div>
        </div>

        <div className="intern-details-table-wrapper">
          <table className="intern-details-table">
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{intern.name}</td>
              </tr>

              <tr>
                <th>Intern ID</th>
                <td>{intern.internId}</td>
              </tr>

              <tr>
                <th>Role</th>
                <td>{intern.role}</td>
              </tr>

              <tr>
                <th>Education</th>
                <td>{intern.education}</td>
              </tr>

              <tr>
                <th>Internship Duration</th>
                <td>
                  {intern.startDate} to {intern.endDate}
                </td>
              </tr>

              <tr>
                <th>About</th>
                <td>{intern.about}</td>
              </tr>

              <tr>
                <th>Skills</th>
                <td>
                  <div className="profile-skills">
                    {intern.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>

              <tr>
                <th>Projects</th>
                <td>
                  <div className="profile-projects">
                    {intern.projects.map((project) => (
                      <div
                        className="project-detail"
                        key={project.title}
                      >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>

              <tr>
                <th>LinkedIn</th>
                <td>
                  {intern.linkedin ? (
                    <a
                      href={intern.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-table-link"
                    >
                      View LinkedIn Profile
                    </a>
                  ) : (
                    <span className="table-not-available">
                      Not available
                    </span>
                  )}
                </td>
              </tr>

              <tr>
                <th>Email</th>
                <td>
                  <a
                    href={`mailto:${intern.email}`}
                    className="profile-table-link"
                  >
                    {intern.email}
                  </a>
                </td>
              </tr>

              <tr>
                <th>Certificate Status</th>
                <td>
                  <span className="certificate-valid">
                    ✓ {intern.certificate}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ITServicesInternProfile;