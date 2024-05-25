// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="lateshmatch-container">
      <div className="team-details-container">
        <h1>{competingTeam}</h1>
        <h1>{date}</h1>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>secondInnings</h1>
        <p>{secondInnings}</p>
        <h1>Man of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
