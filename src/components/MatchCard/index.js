// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetail
  return (
    <li className="recent-match-card">
      <img src={competingTeamLogo} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
