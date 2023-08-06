const express  = require('express')
const mongoose = require('mongoose')
const bodyParser =  require('body-parser')
const cors =  require('cors')

const projectRoutes =  require('./routes/projects.js')
const app = express()

const PORT = 8080
// // Middlewares
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }))
app.use(cors());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
app.use('/projects', projectRoutes)


app.get('/',(req,res)=>res.send("Server is running"))

const CONNECTION_URL = 'mongodb+srv://develop:QN0Tf9yHb1hutUlz@cluster0.d9wzla5.mongodb.net/devscaffoldDb?retryWrites=true&w=majority'

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then((result) =>
    app.listen(PORT || process.env.PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
    .catch((error) => console.log(error.message));
