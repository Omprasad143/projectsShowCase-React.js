import './index.css'

const ProjectsShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <li className="app-li">
      <img src={imageUrl} className="pic" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectsShowCase
