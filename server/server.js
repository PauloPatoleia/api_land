const express               = require("Express"),
      bodyParser            = require("bodyParser")


const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Running...")
})
