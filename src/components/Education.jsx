import { useState } from "react";

function Education({ education, setEducation }) {

  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [showForm, setShowForm] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newEducation = {
      school,
      title,
      date
    };

    if (editingIndex === null) {
      setEducation([...education, newEducation]);
    } else {
      const updatedEducation = education.map((item, index) =>
        index === editingIndex ? newEducation : item
      );

      setEducation(updatedEducation);
    }

    setSchool("");
    setTitle("");
    setDate("");
    setEditingIndex(null);
    setShowForm(false);
  }

  function handleEdit(index) {
    const item = education[index];

    setSchool(item.school);
    setTitle(item.title);
    setDate(item.date);

    setEditingIndex(index);
    setShowForm(true);
  }

  function handleAdd() {
    setSchool("");
    setTitle("");
    setDate("");
    setEditingIndex(null);
    setShowForm(true);
  }

  function handleDelete(index) {
    setEducation(
      education.filter((item, i) => i !== index)
    );
  }

  return (
    <section className="form-section">

      <h2>Educational Experience</h2>

      {education.map((item, index) => (
        <div key={index}>
          <h3>{item.school}</h3>
          <p>{item.title}</p>
          <p>{item.date}</p>

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

          <label>School / College Name:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />

          <label>Title of Study:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Date of Study:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="2024 - 2028"
            required
          />

          <button type="submit">
            {editingIndex === null ? "Add Education" : "Save Changes"}
          </button>

        </form>
      ) : (
        <button onClick={handleAdd}>
          + Add Another Education
        </button>
      )}

    </section>
  );
}

export default Education;