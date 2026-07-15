import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './ITServicesInterns.css';

const interns = [
  {
    name: 'Anushka',
    slug: 'anushka',
    internId: 'AILYT/2026/001',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Gunjan Verma',
    slug: 'gunjan-verma',
    internId: 'AILYT/2026/002',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Kajal Rajput',
    slug: 'kajal-rajput',
    internId: 'AILYT/2026/003',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
{
name: 'Nidhi',
    slug: 'nidhi',
    internId: 'AILYT/2026/004',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },

  {
    name: 'Rakhi',
    slug: 'rakhi',
    internId: 'AILYT/2026/005',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Ruchi Kothiyal',
    slug: 'ruchi-kothiyal',
    internId: 'AILYT/2026/006',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Saloni Ramola',
    slug: 'saloni-ramola',
    internId: 'AILYT/2026/007',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Suhani',
    slug: 'suhani',
    internId: 'AILYT/2026/008',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
  {
    name: 'Vidushi Arora',
    slug: 'vidushi-arora',
    internId: 'AILYT/2026/009',
    role: 'Software Development Intern',
    batch: '2026',
    startDate: '01 Feb 2026',
    endDate: '31 July 2026',
  },
];

const batchOptions = ['2026'];

const ITServicesInterns = () => {
  const [selectedBatch, setSelectedBatch] = useState('2026');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInterns = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return interns.filter((intern) => {
      const matchesBatch = intern.batch === selectedBatch;

      const matchesSearch =
        intern.name.toLowerCase().includes(normalizedSearch) ||
        intern.internId.toLowerCase().includes(normalizedSearch) ||
        intern.role.toLowerCase().includes(normalizedSearch);

      return matchesBatch && matchesSearch;
    });
  }, [selectedBatch, searchTerm]);

  return (
    <main className="intern-directory-page">
      <section className="intern-directory-hero">
        <p className="intern-directory-eyebrow">
          AILYT TALENT DIRECTORY
        </p>

        <h1>Meet Our Interns</h1>

        <p className="intern-directory-intro">
          Explore verified internship profiles and professional contributions
          of interns trained at AILYT.
        </p>
      </section>

      <section className="intern-directory-container">
        <div className="intern-directory-toolbar">
          <div className="batch-filter">
            <span className="filter-label">Select Batch</span>

            <div className="batch-buttons">
              {batchOptions.map((batch) => (
                <button
                  type="button"
                  key={batch}
                  className={
                    selectedBatch === batch
                      ? 'batch-button active'
                      : 'batch-button'
                  }
                  onClick={() => setSelectedBatch(batch)}
                >
                  Batch {batch}
                </button>
              ))}
            </div>
          </div>

          <div className="intern-search-wrapper">
            <label htmlFor="intern-search">Search Intern</label>

            <input
              id="intern-search"
              type="search"
              value={searchTerm}
              placeholder="Search by name or Intern ID"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>

        <div className="intern-table-wrapper">
          <table className="intern-directory-table">
            <thead>
              <tr>
                <th>Intern ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Internship Duration</th>
                <th>Profile</th>
              </tr>
            </thead>

            <tbody>
              {filteredInterns.length > 0 ? (
                filteredInterns.map((intern) => (
                  <tr key={intern.internId}>
                    <td data-label="Intern ID">
                      <span className="intern-id">
                        {intern.internId}
                      </span>
                    </td>

                    <td data-label="Name">
                      <div className="intern-name-cell">
                        <div className="intern-initial">
                          {intern.name.charAt(0)}
                        </div>

                        <span>{intern.name}</span>
                      </div>
                    </td>

                    <td data-label="Designation">
                      {intern.role}
                    </td>

                    <td data-label="Internship Duration">
                      {intern.startDate} to {intern.endDate}
                    </td>

                    <td data-label="Profile">
                      <Link
                        to={`/it-services/interns/${intern.slug}`}
                        className="table-profile-link"
                      >
                        View Profile
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-interns-found">
                    No intern found for this search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="intern-result-count">
          Showing {filteredInterns.length} intern
          {filteredInterns.length !== 1 ? 's' : ''}
        </p>
      </section>
    </main>
  );
};

export default ITServicesInterns;
