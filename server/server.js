// 3rd party dependencies
const express               = require("Express"),
      bodyParser            = require("body-parser")
      axios                 = require('axios')
      _                     = require('lodash')

// Local dependencies 
const {mongoose} = require('./db/mongoose');
const {Api} = require('./models/api');
const {User} = require('./models/user');

// Express setup
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET API Route
app.get('/apis', (req, res) => {

    Api.find({}).then((apis) => {
        res.send({total: apis.length,
                entries: apis})
    }, (e) => {
        res.status(400).send(e);

  })
});

// Database update Route
app.get('/apis/update', (req, res) => {

  axios.get('https://api.publicapis.org/entries')
  .then(function (response) {

      Api.insertMany(response.data.entries, {ordered: false}, function(error, docs) {
        
        response.data.entries.forEach((api) => {

          const body = _.pick(api, ['HTTPS', 'API', 'Description', 'Auth', 'Cors', 'Category']);

          Api.findOneAndUpdate({link: api.link}, {$set: body}, {new: true}, (err, doc) => {
            if (err) {
                console.log(err)
            }
        })
      });
      res.redirect('/apis')
    });
  });
});


app.listen(3000, () => {
    console.log("Running...")
})
