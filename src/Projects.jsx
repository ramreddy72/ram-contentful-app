import React from 'react'
import { useFetchProject } from './FetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProject()

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((pp) => {
          const { id, img, url, title } = pp
          return (
            <a
              href={url}
              key={id}
              className="project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt="" className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
