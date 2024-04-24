import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./ProjectCard.css";

const ProjectCard = ({ title, model }) => {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="card-title">{title}</h3>
        <p>Active</p>
      </div>
      <p className="card-model">{model}</p>
      <button className="card__button" href="#">
        View <OpenInNewIcon sx={{ fontSize: "1rem" }} />
      </button>
    </div>
  );
};

export default ProjectCard;
