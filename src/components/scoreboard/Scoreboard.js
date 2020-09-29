import React from 'react';
// import Team from "../team/Team";
import Game from "../game/Game";


class Scoreboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            logo: ''
        }


        // function Scoreboard() {
        const teamQ = {
            name: "Team 'Q'",
            logoSrc: '/assets/images/Q_portrait_2.jpg'
        }

        const teamGV = {
            name: "Team 'GV'",
            logoSrc: '/assets/images/GuinanVendetta.jpg'
        }

        const romuels = {
            name: "Romuels",
            logoSrc: '/assets/images/ParemTheRomulan.jpg'
        }

        const romulettes = {
            name: "Romulettes",
            logoSrc: '/assets/images/RomulanCommander.jpg'
        }

        return (
            <div className="App">
                <Game
                    venue="USSE Stadium"
                    homeTeam={teamQ}
                    visitingTeam={teamGV}
                />

                <Game
                    venue="Romulan Arena"
                    homeTeam={romulettes}
                    visitingTeam={romuels}
                />
            </div>
        )
    }
}

export default Scoreboard