const router = require('express').Router()
const db = require('../models')


router.get('/books', (req, res) => {
    Book.findMany(req.params)
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/books/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/books')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.post('/', (req, res) => {
    res.send('/books')
  })
  


module.exports = books