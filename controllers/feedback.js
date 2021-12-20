const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'review',
    password: 'password',
    port: 5432,
})
const createFeedback = (request, response) => {
    const { exp, payment, service, comment } = request.body;
    pool.query('INSERT INTO reviews (exp, payment, service, comment) VALUES ($1, $2, $3, $4)', [exp, payment, service, comment], (error, results) => {
      if (error) {
        response.status(400).json({
          status: 400,
          message: 'Invalid input'
        })
      } else {
        response.status(201).json({
          status: 201,
          message: `Feedback added with ID: ${results.insertId}`
        })
      }
    })
  }

const getFeedback = (request, response) => {
    pool.query('SELECT * FROM reviews', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    createFeedback,
    getFeedback,
}