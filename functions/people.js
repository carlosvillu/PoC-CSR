const cors = require('cors')({origin: true})
const _ = require('lodash')
const DB = require('./db')

module.exports = (req, resp) => {
  cors(req, resp, () => {
    if (req.query.id) {
      return resp.json(_.filter(DB, {id: parseInt(req.query.id, 10)}))
    }
    if (req.query.tag) {
      return resp.json(_.filter(DB, {tags: [req.query.tag]}))
    }

    return resp.json(DB)
  })
}
