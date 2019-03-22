import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem, Button} from 'react-md';
import socket from '../../socket';
import './leaderboardview.css';

export default class CourseView extends PureComponent {
    constructor() {
        super();

        this.state = {
            leaderboard: []
        };

        this.socket = socket;
        socket.registerLeaderboardSubscriber(leaderboard => {
            this.setState({leaderboard});
        });

        socket.emitLeaderboardFromPublisher(null);
    }

    clearLeaderboard = () => {
        console.log("Clearing leaderboard")
        socket.leaderboardPublisherClear()
    }

    render() {
        const listItemJSX = this.state.leaderboard.map((user, index) => {
            const rightIcon = user.score;
            return (
                <ListItem
                    tileClassName='leaderboard-list-item'
                    rightNodeClassName='leaderboard-score-item'
                    rightIcon={rightIcon}
                    primaryText={index + 1 + '\xa0\xa0\xa0\xa0' + user.name}
                />
            );
        });

        return (
            <div className='big-container'>
                <div>
                    <p className='leaderboard-list-title'>Leaderboard</p>
                    <List className='leaderboard-list'>{listItemJSX}</List>
                </div>

                <Link to={'/courseSelect'}>
                    <Button className='back-button' primary raised>
                        Back
                    </Button>
                </Link>

                <Button className='clear-board-button' onClick={this.clearLeaderboard}>
                    Clear Leaderboard
                </Button>
            </div>
        );
    }
}
