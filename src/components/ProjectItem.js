import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array (an arr of str)*/}

        {technologies.map(tech => {
          console.log('TECH', tech);
          return <span>{tech}</span>
        })}

      </div>
    </div>
  );
}

export default ProjectItem;
