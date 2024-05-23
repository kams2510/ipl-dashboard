// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetail} = props
  const {id, name, teamImageUrl} = teamDetail

  return (
    <Link to={`team/${id}`}>
      <li className="ipl-team-card">
        <img src={teamImageUrl} />
        <h1>{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
