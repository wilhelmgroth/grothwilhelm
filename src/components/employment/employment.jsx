import React from "react";
import { employmentData } from "./employmentData";
import { employmentSkills } from "./employmentData";
import "./employment.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Employment = () => {
  return (
    <div className="emp-container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          "& > :not(style)": {
            m: 7,
            width: 528,
            height: 300,
          },
        }}
      >
        <Paper className="employ-paper" elevation={10}>
          <h4>Current employment</h4>
          {employmentData.map((data, key) => {
            return (
              <div key={key}>
                <div className="job-title">
                  <span>{data.year}</span>{" "}
                  <strong>
                    {data.work}
                    <br></br>
                  </strong>{" "}
                  <strong>Position: </strong> {data.position}
                </div>
              </div>
            );
          })}
          {employmentSkills.map((data, key) => {
            return (
              <div key={key}>
                {data.roles}
                <strong className="employ-roles">Tidiga roller: </strong>
                <ul className="job-description">
                  <li className="emp-li"> {data.skill1} </li>
                  <li className="emp-li"> {data.skill2} </li>
                  <li className="emp-li"> {data.skill3} </li>
                </ul>
              </div>
            );
          })}
        </Paper>
      </Box>
    </div>
  );
};

export default Employment;
