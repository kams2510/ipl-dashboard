// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LateshMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamRecords: [], teamId: '', isLoading: true}

  componentDidMount() {
    this.fetchTeamRecords()
  }

  fetchTeamRecords = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamId = id
    const response = await fetch(`https://apis.ccbp.in/ipl/${teamId}`)
    const data = await response.json()
    const formattedDta = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    formattedDta.latestMatchDetails = {
      competingTeam: formattedDta.latestMatchDetails.competing_team,
      competingTeamLogo: formattedDta.latestMatchDetails.competing_team_logo,
      date: formattedDta.latestMatchDetails.date,
      firstInnings: formattedDta.latestMatchDetails.first_innings,
      id: formattedDta.latestMatchDetails.id,
      manOfTheMatch: formattedDta.latestMatchDetails.man_of_the_match,
      matchStatus: formattedDta.latestMatchDetails.match_status,
      result: formattedDta.latestMatchDetails.result,
      secondInnings: formattedDta.latestMatchDetails.second_innings,
      umpires: formattedDta.latestMatchDetails.umpires,
      venue: formattedDta.latestMatchDetails.venue,
    }

    formattedDta.recentMatches = formattedDta.recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      teamRecords: formattedDta,
      teamId: teamId.toLocaleLowerCase(),
      isLoading: false,
    })
  }

  renderLatestMatch = () => {
    const {teamRecords} = this.state
    const {latestMatchDetails, recentMatches} = teamRecords
    console.log(latestMatchDetails)
    return (
      <div>
        <LateshMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="recent-match-container">
          {recentMatches.map(each => (
            <MatchCard matchDetail={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, teamId, teamRecords} = this.state

    return (
      <div className={`${teamId} team-matches-container`}>
        <img
          className="team-thumbnail"
          src={teamRecords.teamBannerUrl}
          alt={`team banner ${teamId}`}
        />
        {this.renderLoader}
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
