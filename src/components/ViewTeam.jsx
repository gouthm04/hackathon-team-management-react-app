import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/view-team")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
    <NavBar/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Team ID</th>
                  <th>Team Name</th>
                  <th>Leader Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>College</th>
                  <th>Members</th>
                  <th>Project Title</th>
                  <th>Technology Stack</th>
                  <th>Mentor</th>
                  <th>Registration Date</th>
                  <th>Table No</th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team, index) => (
                  <tr key={team._id}>
                    <td>{index + 1}</td>
                    <td>{team.teamId}</td>
                    <td>{team.Name}</td>
                    <td>{team.leaderName}</td>
                    <td>{team.leaderEmail}</td>
                    <td>{team.leaderPhone}</td>
                    <td>{team.college}</td>
                    <td>{team.numOfMembers}</td>
                    <td>{team.projectTitle}</td>
                    <td>{team.techStack}</td>
                    <td>{team.mentorName}</td>
                    <td>{team.regDate}</td>
                    <td>{team.tableNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;