// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamDetails: formattedData, isLoading: false})
  }

  renderIplTeams = () => {
    const {teamDetails} = this.state

    return (
      <ul>
        {teamDetails.map(each => (
          <TeamCard teamDetail={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const loader = (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )

    return (
      <div className="ipl-team-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? loader : this.renderIplTeams()}
      </div>
    )
  }
}

export default Home
