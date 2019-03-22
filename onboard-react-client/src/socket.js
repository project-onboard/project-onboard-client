const io = require('socket.io-client')

export default (function () {
    const socket = io.connect('http://ec2-35-183-119-218.ca-central-1.compute.amazonaws.com:3000')

    const registerLeaderboardSubscriber = onLeaderboardListReceived => {
        socket.on('leaderboardSubscriber', onLeaderboardListReceived)
    }

    const unregisterLeaderboardSubscriber = () => {
        socket.off('leaderboardSubscriber')
    }

    function emitLeaderboardFromPublisher(data) {
        socket.emit('leaderboardPublisherFromSingleUser', data)
    }

    function leaderboardPublisherClear() {
        socket.emit('leaderboardPublisherClear')
    }

    return {
        registerLeaderboardSubscriber,
        unregisterLeaderboardSubscriber,
        emitLeaderboardFromPublisher,
        leaderboardPublisherClear
    }
})()
