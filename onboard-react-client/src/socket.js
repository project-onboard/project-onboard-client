const io = require('socket.io-client')

export default (function() {
  const socket = io.connect('http://localhost:3000')

  const registerLeaderboardSubscriber = onLeaderboardListReceived => {
    socket.on('leaderboardSubscriber', onLeaderboardListReceived)
  }

  const unregisterLeaderboardSubscriber = () => {
    socket.off('leaderboardSubscriber')
  }

  function emitLeaderboardFromPublisher(data) {
    socket.emit('leaderboardPublisherFromSingleUser', { data })
  }

  return {
    registerLeaderboardSubscriber,
    unregisterLeaderboardSubscriber,
    emitLeaderboardFromPublisher
  }
})()
