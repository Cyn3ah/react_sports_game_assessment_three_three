import React from 'react';

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "this.props.name",
            logo: "this.props.logo",
            // Visitor: "this.props.visitingTeam",
            // Home: "this.props.homeTeam",
        }
        const Visitor = this.visitingTeam;
        const Home = this.homeTeam;

        // if (this.state.visitingTeam)

        // render() {
        return (
            <div className="Game">
                <h1>Welcome to {(props.venue)}</h1>
                <div className="Team">
                    <h1>{(Visitor)}</h1>
                </div>
                <div className="Versus">
                    <h1>VS</h1>
                </div>
                <div className="Team">
                    <h1>{(Home)}</h1>
                </div>
            </div>
        )
    }
}
// }



export default Team

