// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetail} = props
  const {id, name, teamImageUrl} = teamDetail

  return (
    <Link to={`team-matches/${id}`}>
      <li className="ipl-team-card">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
