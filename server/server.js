// 3rd party dependencies
const express               = require("Express"),
      bodyParser            = require("body-parser")
      axios                 = require('axios')
      _                     = require('lodash')

// Local dependencies 
const {mongoose} = require('./db/mongoose');
const {Api} = require('./models/api');
const {User} = require('./models/user');
const {Category} = require('./models/category');

// Express setup
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET API Route
app.get('/entries', (req, res) => {

    Api.find({}).then((apis) => {
        res.send({total: apis.length,
                entries: apis})
    }, (e) => {
        res.status(400).send(e);

  })
});

// GET Categories Route
app.get('/categories', (req, res) => {

  Category.find({}).then((Categories) => {

    var categoriesArr = []

    Categories.forEach((cat) => {
      categoriesArr.push(cat.Category)
    })

      res.send(categoriesArr)
      
  }, (e) => {
      res.status(400).send(e);

})
});

// Database update Route
app.get('/update', (req, res) => {

  axios.get('https://api.publicapis.org/entries')
  .then(function (response) {

      Api.insertMany(response.data.entries, {ordered: false}, function(error, docs) {
        
        response.data.entries.forEach((api) => {

          const body = _.pick(api, ['HTTPS', 'API', 'Description', 'Auth', 'Cors', 'Category']);

          Category.create({ Category: body.Category }, {upsert: true}, function (err, category) {
           // if (err) console.log(err)
          });

          Api.findOneAndUpdate({Link: api.Link}, {$set: body}, {new: true, upsert: true}, (err, doc) => {
            // if (err) console.log(err)
        })
      });
      res.redirect('/entries')
    });
  });
});


app.listen(3000, () => {
    console.log("Running...")
})
