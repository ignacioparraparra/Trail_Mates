require('dotenv').config();
const bcrypt = require('bcrypt');
const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const saltRounds = 10;

const trips = [
    {   
        username: 'Pope',
        location: 'Zyon',
        title: 'Trip 1'
    },
    {
        username: 'Ignacio',
        location: 'Yosemite',
        title: 'Trip 2'
    }
]

let refreshTokens = []

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/trips', authenticateToken, (req, res) => {
    res.json(trips.filter(trip => trip.username === req.user.username))
});

router.route('/signup').post(async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hash});

    await newUser.save();
    res.json('User Added');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// to create new token, store in db 
router.route('/token').post((req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ username: user.username})
        res.json({accessToken: accessToken})
    })
})


router.route('/login').post(async (req, res) => {
    // authenticate user
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await User.findOne({username});
    
    if (!user) {
        return res.status(400).json('Error: no user found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json('Error: invalid credentials');
    }

    const Payload = { username: user.username }

    // whenever user logs in, will create acess token, that access token will have the user information inside of it
    const accessToken = generateAccessToken(Payload)
    const refreshToken = jwt.sign(Payload, process.env.REFRESH_ACCESS_TOKEN)
    // push refresh token to db
    refreshTokens.push(refreshToken)
    res.json({accessToken: accessToken, refreshToken: refreshToken})

    }   
    catch (err) {
        res.status(500).json('Error: ' + err)
    }
});

router.route('/logout').delete((req, res) => {
    refreshTokens = refreshTokens.filter(token => token != req.body.token)
    res.sendStatus(204)
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

// Middleware to authenticate token, get token, verify correct user, 
// then return user to another function
function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization']
    // getting second parameter, token
    // if we have authheader, then return authheader token
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    
    // we have valid token, verify
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        // to move on from middleware
        next()
    })
}


module.exports = router;