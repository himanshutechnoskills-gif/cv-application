function CVPreview({ generalInfo, education, experience }) {
function handlePrint() {
  window.print();
}
  return (
    <>
    <button className="download-btn" onClick={handlePrint}>
  Download CV as PDF
</button>
    <div className="cv-preview">

      {/* Header Section */}
      <header className="cv-header">

        <h1>{generalInfo.name || "Your Name"}</h1>

        <div className="contact-info">
          <span>{generalInfo.email}</span>
          <span>{generalInfo.phone}</span>
        </div>

      </header>

      {/* Education Section */}
      <section className="cv-section">

        <h2>Education</h2>

        {education.length > 0 ? (
          education.map((item, index) => (

            <div className="cv-item" key={index}>

              <div className="cv-item-heading">
                <h3>{item.school}</h3>
                <span>{item.date}</span>
              </div>

              <p>{item.title}</p>

            </div>

          ))
        ) : (
          <p>No education details added yet.</p>
        )}

      </section>

      {/* Experience Section */}
      <section className="cv-section">

        <h2>Work Experience</h2>

        {experience.length > 0 ? (
          experience.map((item, index) => (

            <div className="cv-item" key={index}>

              <div className="cv-item-heading">
                <h3>{item.company}</h3>

                <span>
                  {item.fromDate} - {item.untilDate}
                </span>
              </div>

              <h4>{item.position}</h4>

              <p>{item.responsibilities}</p>

            </div>

          ))
        ) : (
          <p>No work experience added yet.</p>
        )}

      </section>

    </div>
    </>
  );
}

export default CVPreview;