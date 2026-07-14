import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const AddTeam = () => {
  const [input, changeInput] = useState({
    teamId: "",
    Name: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    college: "",
    numOfMembers: "",
    projectTitle: "",
    problemStatement: "",

    techStack: "",
    mentorName: "",
    regDate: "",
    tableNo: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    console.log(input);

    axios
      .post("http://127.0.0.1:3000/add-team", input)
      .then((response) => {
        alert("Team Added Successfully");
        changeInput({
          teamId: "",
          Name: "",
          leaderName: "",
          leaderEmail: "",
          leaderPhone: "",
          college: "",
          numOfMembers: "",
          projectTitle: "",
          problemStatement: "",

          techStack: "",
          mentorName: "",
          regDate: "",
          tableNo: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>Add Hackathon Team</h3>
          </div>

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Team ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="teamId"
                  value={input.teamId}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={input.Name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Team Leader Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="leaderName"
                  value={input.leaderName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Leader Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="leaderEmail"
                  value={input.leaderEmail}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Leader Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="leaderPhone"
                  value={input.leaderPhone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="college"
                  value={input.college}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Number of Members</label>
                <select
                  className="form-select"
                  name="numOfMembers"
                  value={input.numOfMembers}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="projectTitle"
                  value={input.projectTitle}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Problem Statement</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="problemStatement"
                  value={input.problemStatement}
                  onChange={inputHandler}
                ></textarea>
              </div>

              <div className="col-md-6">
                <label className="form-label">Technology Stack</label>
                <input
                  type="text"
                  className="form-control"
                  name="techStack"
                  value={input.techStack}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mentor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="mentorName"
                  value={input.mentorName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Registration Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="regDate"
                  value={input.regDate}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Table / Station Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="tableNo"
                  value={input.tableNo}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-12 text-center mt-3">
                <button
                  className="btn btn-primary px-5"
                  onClick={submitHandler}
                >
                  Add Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeam;
