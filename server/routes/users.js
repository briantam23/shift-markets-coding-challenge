const router = require('express').Router();
const { User, Todo } = require('../db').models;


//get users
router.get('/', (req, res, next) => {
    User.findAll({
        include: [{ model: Todo }]
    })
        .then(users => res.send(users))
        .catch(next)
})

//get user by ID
router.get('/:userId', (req, res, next) => {
    User.findByPk(
        req.params.userId, 
        { include: [{ model: Todo }] }
    )
        .then(user => res.send(user))
        .catch(next)
})


module.exports = router;