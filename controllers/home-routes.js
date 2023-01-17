const router = require('express').Router();
const { Dog, Owner, Kennel, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('schedule');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

router.get('/schedule', withAuth, async (req, res) => {
    try {
        const ownerData = await Owner.findAll({
            include: [
                {
                    model: Dog,
                },
            ],
        });

        const owners = ownerData.map((owner) => owner.get({ plain: true }));
        
        res.render('schedule', {
            owners,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dogs/:id', async (req, res) => {
    try {
      const dogData = await Dog.findByPk(req.params.id, {
        include: [
          {
            model: Owner,
            attributes: ['first_name',
            'last_name'],
          },
        ],
      });
  
      const dog = dogData.get({ plain: true });
  
      res.render('dog', {
        ...dog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/dogs', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dogs');
        return;
    }
    res.render('login');
});

module.exports = router;