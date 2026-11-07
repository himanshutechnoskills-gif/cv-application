import { useState } from "react";
import "./styles/App.css";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

  return (
    <div className="app">

      <h1>CV Application</h1>
      <p>Create your professional CV</p>

      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />

      <hr />

      <Education
        education={education}
        setEducation={setEducation}
      />

      <hr />

      <Experience
        experience={experience}
        setExperience={setExperience}
      />

      <hr />

      <h1>CV Preview</h1>

      <CVPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />

    </div>
  );
}

export default App;