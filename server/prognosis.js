const _stations = require('./stations.json').TrainStation
const puppeteer = require('puppeteer')

async function getPrognosis(obj) {
  const trainNumbers = obj.prognosis.map(train => train.trainnr)
  const trainSignatures = obj.prognosis.map(train => train.station)

  let delays = []

  for await (const [i, o] of enumerate(obj.prognosis)) {
    const station = getStation(trainSignatures[i])
    const pos = getPosition(trainSignatures[i])
    const route =
      i < 3 ? await getRoute(trainNumbers[i]) : 'Stockholm - Åkeshov'
    delays.push({
      scheduled: o.scheduled,
      station: station,
      route: route,
      pos: pos,
      predicted_delay_minutes: o.predicted_delay_minutes,
      predicted_delay_accuracy: o.predicted_delay_accuracy
    })
  }
  return delays
}

function getPosition(signature) {
  let pos = _stations.filter(
    station =>
      station.LocationSignature.toLowerCase() === signature.toLowerCase()
  )
  let stringPos = ''
  pos && pos[0] ? (stringPos = pos[0].Geometry.WGS84) : (stringPos = '')
  let lnglat = stringPos.slice(7, stringPos.length)
  let lng = parseFloat(lnglat.split(' ')[0])
  let lat = parseFloat(lnglat.split(' ')[1])
  console.log(lng, lat)

  // let lat = parseFloat(stringPos.slice(26, 44))
  return { longitude: lng, latitude: lat }
}

async function getRoute(trainNumber) {
  const [browser, page] = await getBrowserPage(
    `http://xn--avgng-ora.nu/Details.aspx?tripdate=20200128&tripid=${trainNumber}&refresh=30&provider=Trafikverket`
  )
  const data = await page.evaluate(() => {
    const from = document.querySelector('table tr td a')
      ? document.querySelector('table tr td a').innerHTML
      : ''
    const to = document.querySelector('table tr:last-child td a')
      ? document.querySelector('table tr:last-child td a').innerHTML
      : ''

    return `${from} - ${to}`
  })
  browser.close()
  return data
}

function getStation(signature) {
  const stationName = _stations.filter(
    station =>
      station.LocationSignature.toLowerCase() === signature.toLowerCase()
  )
  return stationName[0] ? stationName[0].AdvertisedLocationName : null
}

function* enumerate(iterable) {
  let i = 0

  for (const x of iterable) {
    yield [i, x]
    i++
  }
}

async function getBrowserPage(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({ height: 1080, width: 1920 })
  url ? await page.goto(url) : console.log('')
  return [browser, page]
}

module.exports = { getPrognosis: getPrognosis }
