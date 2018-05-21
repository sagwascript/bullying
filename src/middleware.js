import bodyParser from 'body-parser'

const setupMidware = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}

export default setupMidware
