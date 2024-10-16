import React, { useState } from 'react';
import '../styles.css'; // Ensure styles are imported

const AssessmentForm = () => {
  const [assessmentData, setAssessmentData] = useState({ task: '', details: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!assessmentData.task) newErrors.task = "Task is required";
    if (!assessmentData.details) newErrors.details = "Details are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Assessment submitted:', assessmentData);
      // Handle form submission
    }
  };

  const handleChange = (e) => {
    setAssessmentData({ ...assessmentData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="assessment-form" onSubmit={handleSubmit}>
        <h2>Assessment Form</h2>
        <input name="task" placeholder="Task" onChange={handleChange} />
        {errors.task && <p className="error">{errors.task}</p>}
        <textarea name="details" placeholder="Details" onChange={handleChange} />
        {errors.details && <p className="error">{errors.details}</p>}
        <button type="submit">Submit Assessment</button>
      </form>
    </div>
  );
};

export default AssessmentForm;
