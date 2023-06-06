import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    college: '',
    address: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData((prevData) => [...prevData, studentData]);
    setStudentData({
      name: '',
      email: '',
      college: '',
      address: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={studentData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            College:
            <input
              type="text"
              name="college"
              value={studentData.college}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={studentData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      {submittedData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>college</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.college}</td>
                <td>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No student has submitted the form till now.</p>
      )}
    </div>
  );
};

export default StudentForm;
