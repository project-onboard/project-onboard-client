import React, { PureComponent } from "react";
import { List, ListItem } from 'react-md';
import socket from '../../socket'
import './leaderboardview.css'

export default class CourseView extends PureComponent {
    constructor() {
        super();

        this.state = {
            leaderboard: []
        };

        this.socket = socket
        socket.registerLeaderboardSubscriber((leaderboard) => {
          this.setState({ leaderboard })
        })

        socket.emitLeaderboardFromPublisher(null)
    }

    render() {
        const listItemJSX = this.state.leaderboard.map((user, index) => {
            const rightIcon = (
                user.score
            )
            return (
                <ListItem tileClassName='leaderboard-list-item' rightNodeClassName="leaderboard-score-item" rightIcon={rightIcon} primaryText={(index + 1) + "\xa0\xa0\xa0\xa0" + user.name} />
            );
          });
      
          return (
            <div>
              <div>
                <p className='leaderboard-list-title'>Leaderboard</p>
                <List className='leaderboard-list'>{listItemJSX}</List>
              </div>
            </div>
          );
    }
}