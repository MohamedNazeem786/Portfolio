import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import './ProjectContainer.css'

const ProjectContainer = () => {
    
    const projects = [
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-E86gn70SerogWHHEx5w9cxRI9dTMX8ug&usqp=CAU",
            title:"HTML",
            desc:"Welcome to HTML website.",
            link:"https://E:/Nazeem7/masha/src/components/ProjectContainer/masha.html",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-E86gn70SerogWHHEx5w9cxRI9dTMX8ug&usqp=CAU",
            title:"CSS",
            desc:"Welcome to CSS website.",
            link:"https://file//E:/Nazeem7/masha/src/components/ProjectContainer/Nazeem9/masha.html",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-E86gn70SerogWHHEx5w9cxRI9dTMX8ug&usqp=CAU",
            title:"JavaScript",
            desc:"Welcome to JavaScript website.",
            link:"https://www.google.com",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-E86gn70SerogWHHEx5w9cxRI9dTMX8ug&usqp=CAU",
            title:"React JS",
            desc:"Welcome to React JS website.",
            link:"https://www.youtube.com/",
        },
    ]

    return (
      <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which I done for making lives of people easy.</p>
        <div className='projectContainer__projects'>
            {
                projects.map((project,index)=>{
                       return (
                        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                       ); 
                })
            }
            </div>        
      </Element>
  )
}

export default ProjectContainer;