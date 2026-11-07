import { useState } from "react";

function Experience({ experience, setExperience }) {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const [showForm, setShowForm] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newExperience = {
      company,
      position,
      responsibilities,
      fromDate,
      untilDate
    };

    if (editingIndex === null) {
      setExperience([...experience, newExperience]);
    } else {
      const updatedExperience = experience.map((item, index) =>
        index === editingIndex ? newExperience : item
      );

      setExperience(updatedExperience);
    }

    setCompany("");
    setPosition("");
    setResponsibilities("");
    setFromDate("");
    setUntilDate("");

    setEditingIndex(null);
    setShowForm(false);
  }

  function handleEdit(index) {
    const item = experience[index];

    setCompany(item.company);
    setPosition(item.position);
    setResponsibilities(item.responsibilities);
    setFromDate(item.fromDate);
    setUntilDate(item.untilDate);

    setEditingIndex(index);
    setShowForm(true);
  }

  function handleAdd() {
    setCompany("");
    setPosition("");
    setResponsibilities("");
    setFromDate("");
    setUntilDate("");

    setEditingIndex(null);
    setShowForm(true);
  }

  function handleDelete(index) {
    setExperience(
      experience.filter((item, i) => i !== index)
    );
  }

  return (
    <section className="form-section">

      <h2>Practical Experience</h2>

      {experience.map((item, index) => (
        <div key={index}>

          <h3>{item.company}</h3>
          <h4>{item.position}</h4>

          <p>{item.responsibilities}</p>

          <p>
            {item.fromDate} - {item.untilDate}
          </p>

          <button onClick={() => handleEdit(index)}>
            Edit
          </button>

          <button onClick={() => handleDelete(index)}>
            Delete
          </button>

          <hr />

        </div>
      ))}

      {showForm ? (

        <form onSubmit={handleSubmit}>

          <label>Company Name:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <label>Position Title:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />

          <label>Main Responsibilities:</label>
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            required
          />

          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />

          <label>Until:</label>
          <input
            type="date"
            value={untilDate}
            onChange={(e) => setUntilDate(e.target.value)}
            required
          />

          <button type="submit">
            {editingIndex === null ? "Add Experience" : "Save Changes"}
          </button>

        </form>

      ) : (

        <button onClick={handleAdd}>
          + Add Another Experience
        </button>

      )}

    </section>
  );
}

export default Experience;