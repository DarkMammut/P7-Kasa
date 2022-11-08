import React from "react";
import "../styles/collapse.css";

function Collapse({ title, text }) {
  let path = window.location.pathname;
  let cna = "";

  if (path === "/About") {
    cna = "about-";
  }
  const [collapse, setCollapse] = React.useState(0);

  return (
    <div className={`${cna}collapse-container`}>
      <div className={`${cna}collapse-header`}>
        <span className={`${cna}collapse-header-title`}>{title}</span>
        <svg
          className={`${cna}collapse-header-chevron`}
          viewBox="0 0 24 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setCollapse(collapse ? 0 : 1)}
          collapse={collapse}
        >
          <path
            d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={`${cna}collapse-content`} collapse={collapse}>
        {Array.isArray(text) ? (
          <ul className={`${cna}collapse-content-text`}>
            {Object.entries(text).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        ) : (
          <p className={`${cna}collapse-content-text`}>{text}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
