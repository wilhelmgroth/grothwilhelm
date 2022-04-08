import React from "react";
import { educationData } from "./data";
import { abilitiesData } from "./data";
import { internshipData } from "./data";
import { referencesData } from "./data";
import "./education.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Education = () => {
  return (
    <div className="edu-container">
      <Box
        sx={{
          display: "flex",
          

          "& > :not(style)": {
            m: 7,
            width: 328,
            height: 500,
          },
        }}
      >
        <Paper className="paper-school" elevation={10}>
          <h4>Qualifications</h4>

          {educationData.map((data, key) => {
            return (
              <div key={key}>
                <article>
                  <div className="school">
                    <span>{data.year}</span> <strong>{data.school}</strong>
                  </div>
                  <div className="job-description">{data.kurser}</div>
                </article>
              </div>
            );
          })}
        </Paper>

        <Paper className="paper-school" elevation={10}>
          <h4>Main features</h4>

          {abilitiesData.map((data, key) => {
            return (
              <div key={key}>
                <article>
                  <ul>
                    <li>
                      <span>{data.abilitie1}</span>
                    </li>
                    <li>
                      <span>{data.abilitie2}</span>
                    </li>
                    <li>
                      <span>{data.abilitie3}</span>
                    </li>
                    <li>
                      <span>{data.abilitie4}</span>
                    </li>
                  </ul>
                </article>
              </div>
            );
          })}
        </Paper>

        <Paper className="paper-school" elevation={10}>
          <h4>Internships</h4>

          {internshipData.map((data, key) => {
            return (
              <div key={key}>
                <article>
                  <div className="school">
                    <span>{data.year}</span> <strong>{data.internship}</strong>
                  </div>
                  <div className="job-description">
                    {data.internshipDescription}
                  </div>
                </article>
              </div>
            );
          })}
        </Paper>

       
      </Box>
    </div>
  );
};

export default Education;
