const Trip = require('../models/trip.model');
const router = require('express').Router();
const { requiredScopes, auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

// This route doesn't need authentication

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.

const checkJwt = auth({
      audience: process.env.AUDIENCE,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
});


router.get('/api/public', (req, res) => {
    res.json({ message: "Hello this is public" });
});

router.get('/api/private',
    checkJwt,
    (req, res) => {
        res.json({ message: " this is private"});
    }
)

router.post('/add',
    checkJwt,
    async (req, res) => {
        const ownerName = req.body.name;
        const title = req.body.title;
        const location = req.body.location;
        const ownerId = req.auth.payload.sub;

        try {
            const newTrip = new Trip({ownerId, ownerName, title, location});
            await newTrip.save();
            res.json('New Trip Added');
        }   catch (err) {
            res.status(400).json('Error: ' + err);
        }
    });

   const checkScopes = requiredScopes('read:trips');

    router.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
      res.json({
message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
      });
    });

module.exports = router;


/*
router.post('/add',
    checkJwt,
    requiredScopes('write:trips'),
    async (req, res, next) => {
        try {
            const userSub = req.auth.payload.sub;
            const { title, location } = req.body;

            const trip = await Trip.create({
                ownerSub: userSub,
                title,
                location
            });

            res.status(201).json(trip);
        } catch (e) {next(e);}
    }
);

*/