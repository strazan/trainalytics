function getDelays() {
  const currentTime = new Date()
  const allStations = [
    'Stockholm',
    'Göteborg',
    'Linköping',
    'Malmö C',
    'Uppsala C',
    'Luleå',
    'Piteå',
    'Lund C'
  ]
  const delays = []

  for (let i = 0; i < 10; i++) {
    delays.push({
      route: getRoutes(allStations),
      station: getStation(allStations)
    })
  }
  const Mockdelays = {
    trains: [
      {
        route: 'Göteborg - Stockholm',
        station: 'Linköping',
        timeTableDeparture: '15:32',
        trainBrainDelayPredictions: [
          { timestamp: '14:00', newDepartureTime: '15:46' },
          { timestamp: '14:10', newDepartureTime: '15:48' },
          { timestamp: '14:20', newDepartureTime: '15:47' },
          { timestamp: '14:30', newDepartureTime: '15:46' },
          { timestamp: '14:40', newDepartureTime: '15:51' },
          { timestamp: '14:50', newDepartureTime: '15:52' },
          { timestamp: '15:00', newDepartureTime: '15:54' },
          { timestamp: '15:10', newDepartureTime: '15:55' }
        ],
        slDelayPredictions: [
          { timestamp: '15:00', newDepartureTime: '15:53' },
          { timestamp: '15:10', newDepartureTime: '15:55' }
        ]
      }
    ]
  }
  return delays
}

function getRoutes(stations) {
  let random = Math.floor(Math.random() * stations.length)
  let from = stations.slice(random, random + 1)
  random = Math.floor(Math.random() * stations.length)
  let to = stations.slice(random, random + 1)
  return `${from} - ${to}`
}

function getStation(stations) {
  return stations[Math.floor(Math.random * stations.length)]
}

module.exports = {
  getDelays: getDelays
}
