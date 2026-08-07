import React, { useMemo, useState } from 'react';
import internsData from '../data/internsData';
import './AdminInternTool.css';

const emptyIntern = {
  name: '',
  slug: '',
  verificationCode: '',
  internId: '',
  role: 'Software Development Intern',
  batch: '2026',
  education: '',
  startDate: '',
  endDate: '',
  email: '',
  linkedin: '',
  status: 'Verified',
  certificate: 'Valid',
  skillsText: '',
  about: '',
  projectTitle: '',
  projectDescription: '',
};

const createVerificationCode = () => {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  return Array.from({ length: 8 }, () =>
    characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  ).join('');
};

const createSlug = (name) => {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const convertInternToForm = (intern) => ({
  ...intern,
  skillsText: intern.skills.join(', '),
  projectTitle: intern.projects[0]?.title || '',
  projectDescription:
    intern.projects[0]?.description || '',
});

const AdminInternTool = () => {
  const [interns, setInterns] = useState(internsData);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formData, setFormData] = useState(emptyIntern);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInterns = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return interns
      .map((intern, index) => ({
        ...intern,
        originalIndex: index,
      }))
      .filter(
        (intern) =>
          intern.name.toLowerCase().includes(search) ||
          intern.internId.toLowerCase().includes(search) ||
          intern.verificationCode
            .toLowerCase()
            .includes(search)
      );
  }, [interns, searchTerm]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
      ...(name === 'name' && !previous.slug
        ? { slug: createSlug(value) }
        : {}),
    }));
  };

  const handleGenerateCode = () => {
    setFormData((previous) => ({
      ...previous,
      verificationCode: createVerificationCode(),
    }));
  };

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormData(convertInternToForm(interns[index]));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDelete = (index) => {
    const intern = interns[index];

    const confirmed = window.confirm(
      `Delete ${intern.name} from the exported intern data?`
    );

    if (!confirmed) {
      return;
    }

    setInterns((previous) =>
      previous.filter((_, itemIndex) => itemIndex !== index)
    );

    if (selectedIndex === index) {
      setSelectedIndex(null);
      setFormData(emptyIntern);
    }
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setFormData(emptyIntern);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.internId.trim() ||
      !formData.verificationCode.trim()
    ) {
      window.alert(
        'Name, Intern ID and Verification Code are required.'
      );
      return;
    }

    const duplicateCode = interns.some(
      (intern, index) =>
        intern.verificationCode.toLowerCase() ===
          formData.verificationCode.toLowerCase() &&
        index !== selectedIndex
    );

    if (duplicateCode) {
      window.alert(
        'This verification code already belongs to another intern.'
      );
      return;
    }

    const duplicateInternId = interns.some(
      (intern, index) =>
        intern.internId.toLowerCase() ===
          formData.internId.toLowerCase() &&
        index !== selectedIndex
    );

    if (duplicateInternId) {
      window.alert(
        'This Intern ID already belongs to another intern.'
      );
      return;
    }

    const preparedIntern = {
      name: formData.name.trim(),
      slug:
        formData.slug.trim() ||
        createSlug(formData.name),
      verificationCode:
        formData.verificationCode.trim().toUpperCase(),
      internId: formData.internId.trim(),
      role: formData.role.trim(),
      batch: formData.batch.trim(),
      education: formData.education.trim(),
      startDate: formData.startDate.trim(),
      endDate: formData.endDate.trim(),
      email: formData.email.trim(),
      linkedin: formData.linkedin.trim(),
      status: formData.status.trim(),
      certificate: formData.certificate.trim(),

      skills: formData.skillsText
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean),

      about: formData.about.trim(),

      projects:
        formData.projectTitle.trim() ||
        formData.projectDescription.trim()
          ? [
              {
                title: formData.projectTitle.trim(),
                description:
                  formData.projectDescription.trim(),
              },
            ]
          : [],
    };

    if (selectedIndex === null) {
      setInterns((previous) => [
        ...previous,
        preparedIntern,
      ]);

      window.alert(
        'Intern added to the admin preview. Export the updated file to make it permanent.'
      );
    } else {
      setInterns((previous) =>
        previous.map((intern, index) =>
          index === selectedIndex
            ? preparedIntern
            : intern
        )
      );

      window.alert(
        'Intern updated in the admin preview. Export the updated file to make it permanent.'
      );
    }

    handleReset();
  };

  const handleCopyUrl = async (intern) => {
    const url = `${window.location.origin}/verify-intern/${intern.verificationCode}`;

    try {
      await navigator.clipboard.writeText(url);
      window.alert('Verification URL copied.');
    } catch (error) {
      window.prompt(
        'Copy this verification URL:',
        url
      );
    }
  };

  const handleExport = () => {
    const fileContent = `const internsData = ${JSON.stringify(
      interns,
      null,
      2
    )};

export default internsData;
`;

    const blob = new Blob([fileContent], {
      type: 'text/javascript',
    });

    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'internsData.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <main className="admin-intern-page">
      <section className="admin-intern-container">
        <div className="admin-intern-header">
          <div>
            <p className="admin-eyebrow">
              AILYT INTERNAL UTILITY
            </p>

            <h1>Intern Management Tool</h1>

            <p>
              Add, edit, delete and export intern data
              without using a database.
            </p>
          </div>

          <button
            type="button"
            className="export-button"
            onClick={handleExport}
          >
            Export internsData.js
          </button>
        </div>

        <div className="admin-warning">
          This tool does not save changes directly to the
          live website. Export the file, replace
          <strong> src/data/internsData.js</strong>, and push
          the update to GitHub.
        </div>

        <form
          className="admin-intern-form"
          onSubmit={handleSubmit}
        >
          <h2>
            {selectedIndex === null
              ? 'Add New Intern'
              : 'Edit Intern'}
          </h2>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="slug">Profile Slug</label>
              <input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="ruchi-kothiyal"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="internId">
                Intern ID *
              </label>
              <input
                id="internId"
                name="internId"
                value={formData.internId}
                onChange={handleChange}
                placeholder="AILYT/2026/010"
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="verificationCode">
                Verification Code *
              </label>

              <div className="verification-code-field">
                <input
                  id="verificationCode"
                  name="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={handleGenerateCode}
                >
                  Generate
                </button>
              </div>
            </div>

            <div className="admin-form-field">
              <label htmlFor="role">Role</label>
              <input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="batch">Batch</label>
              <input
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="education">
                Education
              </label>
              <input
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="startDate">
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="01 Jan 2026"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                placeholder="30 June 2026"
              />
            </div>

            <div className="admin-form-field full-width">
              <label htmlFor="linkedin">
                LinkedIn URL
              </label>
              <input
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field full-width">
              <label htmlFor="skillsText">
                Skills
              </label>
              <input
                id="skillsText"
                name="skillsText"
                value={formData.skillsText}
                onChange={handleChange}
                placeholder="Flutter, Dart, Node.js, MongoDB"
              />
            </div>

            <div className="admin-form-field full-width">
              <label htmlFor="about">About</label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="projectTitle">
                Project Title
              </label>
              <input
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field full-width">
              <label htmlFor="projectDescription">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          <div className="admin-form-actions">
            <button
              type="submit"
              className="save-intern-button"
            >
              {selectedIndex === null
                ? 'Add Intern'
                : 'Save Changes'}
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Clear Form
            </button>
          </div>
        </form>

        <section className="admin-intern-list">
          <div className="admin-list-header">
            <h2>Intern Records</h2>

            <input
              type="search"
              placeholder="Search intern"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-intern-table">
              <thead>
                <tr>
                  <th>Intern ID</th>
                  <th>Name</th>
                  <th>Verification Code</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredInterns.map((intern) => (
                  <tr key={intern.internId}>
                    <td>{intern.internId}</td>
                    <td>{intern.name}</td>
                    <td>{intern.verificationCode}</td>

                    <td>
                      <div className="admin-row-actions">
                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(
                              intern.originalIndex
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleCopyUrl(intern)
                          }
                        >
                          Copy URL
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() =>
                            handleDelete(
                              intern.originalIndex
                            )
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredInterns.length === 0 && (
                  <tr>
                    <td colSpan="4">
                      No intern records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AdminInternTool;