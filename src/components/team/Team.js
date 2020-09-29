import React from 'react';
// import Game from '../game/Game';
// import Scoreboard from '../scoreboard/Scoreboard';
// import Team from '../team/Team';

// class Team extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: "",
//             logo: {}
//         }
class Team extends React.Component {
    constructor(props) {
        super(props)
        const
        this.name = (this.state.Team.props.name),
            this.logo = (this.props.logo),

            this.visitingTeam = new Team(),
            this.homeTeam = new Team(),
            // (this.Game.props: className = "Team props")
            // constructor(name, logo) {
            render(); {

            this.state = {
                name: "this.props.name",
                logo: "this.props.logo"
            }
            if (this.state.visitingTeam) {
                // const Visitor = ((this.visitingTeam.name))
                let Visitor = this.props.visitingTeam
                let Home = this.props.homeTeam
                return (
                    <div className="Game">
                        <h1>Welcome to {props.venue}</h1>
                        <div className="stats">
                            <Visitor />

                            <div className="versus">
                                <h1>VS</h1>
                            </div>

                            <Home
                                name={props.homeTeam.name}
                                logo={props.homeTeam.logoSrc}
                            />

                        </div>
                    </div>
                );
            }
        }
    }
}

export default Team