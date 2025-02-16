const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://AguiarAntonio:V%5ErT%3Fyaq9K-8%282%26%2B@cs4241.fntre.mongodb.net/?retryWrites=true&w=majority&appName=CS4241";


const client = new MongoClient(uri);
const db = client.db("cs4241-user")
const collection = db.collection("a3")

app.use(bodyParser.text())
app.use(express.json())
app.use(express.static('public'));

async function run() {
    try {
        await client.connect();
        console.log("Succesfully Connected")
    } catch (err) {
        console.log(err.stack)
    }
}

run().catch(console.dir);

app.post("/click-handler", async (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);

    const data = JSON.stringify(receivedData)
    const num = data.indexOf('genre:')
    const num2 = data.indexOf("descrip:")

    const doc = {game: data.substring(6, num - 1), genre: data.substring(num + 6, num2 - 1), desc: data.substring(num2 + 8, data.length - 1)}

    const result = await collection.insertOne(doc);

    console.log(result.insertedId);

    res.send(JSON.stringify(receivedData))
})

app.get("/getData", async (req, res) => {
    const dataSender = await collection.find().toArray()
    res.send(dataSender)
})

app.post("/delete", async (req, res) => {
    const recievedData = req.body;
    console.log(recievedData)

    const query = { game: recievedData }
    const result = await collection.deleteOne(query)


    const sendData = "Send Success"

    res.send(JSON.stringify(sendData))
})

app.post("/modify", async (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);

    const num = receivedData.indexOf(" new:")
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

