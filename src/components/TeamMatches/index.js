// Write your code here
import './index.css'
import {Component} from 'react'
import LateshMatch from '../LatestMatch'

const c = console.log.bind(document)

class TeamMatches extends Component {
  state = {teamRecords: [], teamId: ''}

  componentDidMount() {
    this.fetchTeamRecords()
  }

  fetchTeamRecords = async () => {
    const teamId = this.props.match.params.id
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
      umpire: formattedDta.latestMatchDetails.umpire,
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
      umpire: each.umpire,
      venue: each.venue,
    }))

    this.setState({
      teamRecords: formattedDta,
      teamId: teamId.toLocaleLowerCase(),
    })
  }

  renderLatestMatch = () => {
    const {latestMatchDetails} = this.state.teamRecords
    return (
      <div>
        <LateshMatch matchDetail={latestMatchDetails} />
      </div>
    )
  }

  render() {
    const {teamRecords, teamId} = this.state
    const {latestMatchDetails} = teamRecords
    c()
    return (
      <div className={`${teamId} team-matches-container`}>
        <img className="team-thumbnail" src={teamRecords.teamBannerUrl} />
        {this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
