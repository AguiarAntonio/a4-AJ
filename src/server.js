import express from 'express'
import ViteExpress from 'vite-express'
const app = express();
const port = 3000;
import bodyParser from "body-parser";
import cors from "cors";

app.use(cors());

import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()
import { Strategy as GitHubStrategy} from 'passport-github2'

app.use(session ({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
}))



const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_DBNAME,
    MONGO_DBCOLLECTION,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    EXPRESS_SESSION_SECRET
} = process.env

app.use(passport.initialize());
app.use(passport.session());



import {MongoClient} from "mongodb";
//import {CONNECTION_CHECK_OUT_STARTED} from "mongodb/src";

let collection = null

/**
 *
 * @type {Collection}
 */
let DBCollection = null

app.use(bodyParser.text())
app.use(express.json())
app.use(express.static('/index.html'));

const uri = `mongodb+srv://AguiarAntonio:V%5ErT%3Fyaq9K-8%282%26%2B@cs4241.fntre.mongodb.net/?retryWrites=true&w=majority&appName=CS4241`;

const client = new MongoClient(uri);
const db = client.db("cs4241-user")
collection = db.collection('a3');

async function run() {
    const uri = `mongodb+srv://AguiarAntonio:V%5ErT%3Fyaq9K-8%282%26%2B@cs4241.fntre.mongodb.net/?retryWrites=true&w=majority&appName=CS4241`;

    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Succesfully Connected")
    } catch (err) {
        console.log(err.stack)
    }
}

run().catch(console.dir);

/*
passport.serializeUser(function (user, done) {
    done(null, {username: user.username, id: user._id || user.id});
})

passport.deserializeUser(function (obj, done) {
    done(null, obj)
});

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    },
    async function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));

app.get('/auth/github/callback',
    passport.authenticate('github', {session: true, failureRedirect: '/'}),
    function(req, res) {
        res.redirect('/home')
    });

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
}

app.get('/', ensureAuth, (req, res) => {
    res.sendFile(__dirname + '/src/pages/Home.jsx');
})



app.get("/login", (req, res) => {
    if(req.user) {
        res.redirect('/')
    } else {
        res.sendFile(__dirname + "/src/pages/Login.jsx")
    }
})

app.get("/load", ensureAuth, async (req, res) => {
    const userdata = await DBCollection.find( { username: req.user.username } ).toArray();
    res.json([{ username: req.user.username }, ...userdata])
})
*/

app.post('/api/click-handler', async (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);

    const data = JSON.stringify(receivedData)
    const num = data.indexOf('genre:')
    const num2 = data.indexOf("descrip:")

    const doc = {
        game: data.substring(6, num - 1),
        genre: data.substring(num + 6, num2 - 1),
        desc: data.substring(num2 + 8, data.length - 1)
    }

    const result = await collection.insertOne(doc);


    console.log(result.insertedId);

    res.send(JSON.stringify(receivedData))
})

app.get("/api/getData", async (req, res) => {
    const dataSender = await collection.find().toArray()
    res.send(dataSender)
})

app.post("/api/delete", async (req, res) => {
    const recievedData = req.body;
    console.log(recievedData)

    const query = { game: recievedData }
    const result = await collection.deleteOne(query)


    const sendData = "Send Success"

    res.send(JSON.stringify(sendData))
})

app.post("/api/modify", async (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);

    const num = receivedData.indexOf("pnew:")
    const num2 = receivedData.indexOf(" newG:")
    const num3 = receivedData.indexOf(" newD:")

    const newGame = receivedData.substring(num + 5, num2)
    const newGenre = receivedData.substring(num2 + 6, num3)
    const newDesc = receivedData.substring(num3 + 6, receivedData.length)

    console.log(receivedData.substring(4, num-1))

    collection.updateOne( { game : receivedData.substring(4, num) }, {
        $set: {
            game: newGame,
            genre: newGenre,
            desc: newDesc,
        },
    } )

    const sendData = "Sen Success"
    res.send(JSON.stringify(sendData))
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

