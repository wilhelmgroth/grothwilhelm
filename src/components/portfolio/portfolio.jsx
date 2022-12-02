import React, { useEffect, useState } from "react";
import xEaster from "./xqcpic.png";
import githubIcon from "./Github-icon.png";
import "./portfolio.css";

const Portfolio = () => {
  const [isLoading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [showX, setShowX] = useState(false);
  const [timeout, _setTimeout] = useState(undefined);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch(
        "https://api.github.com/users/wilhelmgroth/repos"
      ).catch((err) => console.error(err));

      setRepos(await data.json());
    })();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleX = () => {
    _setTimeout(setTimeout(() => setShowX(true), 2000));
    setTimeout(() => setShowX(false), 3300);
  };

  const deHandleX = () => {
    if (timeout) {
      clearTimeout(timeout);
      _setTimeout(undefined);
    }
  };

  return (
    <div className="portfolio-container">
      {showX ? <img src={xEaster} alt="" /> : null}
      {!isLoading ? (
        <div className="repo-top">
          {" "}
          <span className="title-top">My repositories</span>{" "}
          {repos.map((x, i) => (
            <div key={i} className="repo-container">
              <div className="repo-container-upper">
                <span className="git-repo">{x.name}</span>
                <img
                  className="github-icon"
                  src={githubIcon}
                  onClick={() => window.open(x.html_url, "_blank")}
                  alt=""
                />
              </div>
              <div className="repo-container-middle">
                <ul>
                  <li>{x.description}</li>
                  <li>
                    <span className="list-item">Creation date: </span>
                    {x.created_at}
                  </li>
                  <li onMouseEnter={handleX} onMouseLeave={deHandleX}>
                    <span className="list-item">Latest update: </span>
                    {x.updated_at}
                  </li>
                </ul>
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Portfolio;
