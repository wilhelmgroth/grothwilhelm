import "./skills.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Skills = () => {
  return (
    <div className="skills-container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          "& > :not(style)": {
            m: 7,
            width: 328,
            height: 200,
          },
        }}
      >
        <Paper elevation={10}>
          <h4>Languages i write</h4>

          <ul>
            <li>
              <span>C#</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>C++</span>
            </li>
            <li>
              <span>Python</span>
            </li>
          </ul>
        </Paper>
        <Paper elevation={10}>
          <h4>Frameworks i use</h4>
          <ul>
            <li>
              <span>React.JS</span>
            </li>
            <li>
              <span>.NET Framework</span>
            </li>
          </ul>
        </Paper>

        <Paper elevation={10}>
          <h4>Languages i speak</h4>
          <p>
            <span>🇸🇪</span> Swedish - Native speaker
          </p>
          <p>
            <span>🇬🇧</span> English - A lot
          </p>
          <p>
            <span>🇳🇴</span> Norwegian - Some
          </p>
          <p>
            <span>🇪🇸</span> Spanish - Una cerveza por favor
          </p>
        </Paper>
      </Box>
    </div>
  );
};

export default Skills;
