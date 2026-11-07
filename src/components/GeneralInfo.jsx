import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleEdit() {
    setSubmitted(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setGeneralInfo({
      ...generalInfo,
      [name]: value
    });
  }

  return (
    <section className="form-section">
      <h2>General Information</h2>

      {submitted ? (
        <div>
          <h3>{generalInfo.name}</h3>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={generalInfo.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={generalInfo.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            name="phone"
            type="tel"
            value={generalInfo.phone}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>

        </form>
      )}
    </section>
  );
}

export default GeneralInfo;