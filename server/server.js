const express               = require("Express"),
      bodyParser            = require("body-parser")
      axios                 = require('axios')

// Local dependencies 
const {mongoose} = require('./db/mongoose');
const {Api} = require('./models/api');
const {User} = require('./models/user');


const app = express()
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Database update Route
app.get('/apis/update', (req, res) => {

  axios.get('https://api.publicapis.org/entries')
  .then(function (response) {

    Api.insertMany(response.data.entries, function(error, docs) {
      res.send({total: docs.length,
                entries: docs})
    });
  });
});


app.listen(3000, () => {
    console.log("Running...")
})
