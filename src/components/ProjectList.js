import React from 'react'
import TitleCard from './TitleCard'
import myProjects from '../data/myProjects'


const ProjectList = () =>{
    return(
        <ul className="project-list-container">
            {myProjects.map((project) =><TitleCard key={project.title} title={project.title} info={project.info} />)}
        </ul>
    )}

export { ProjectList as default }
