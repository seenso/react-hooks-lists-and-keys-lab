import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) { //projects is arr of objs
  // console.log("PROJECTS in ProjectList", projects);
  // projects is arr of objs w id, name, about, technologies(arr)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        /* render ProjectItem components here */
        projects.map(project => {
          return <ProjectItem id={project.id} 
                              name={project.name} 
                              about={project.about} 
                              technologies={project.technologies} />
        })
      }</div>
    </div>
  );
}

export default ProjectList;
