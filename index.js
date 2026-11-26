import express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config';
import cors from 'cors'
const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MongoDB_URI);

export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.dir(err);
    }
}
connectToMongoDB()

app.post('/add-destination', (req, res) => {
    const travelPackage = req.body;

    console.log(travelPackage);
    res.send(travelPackage);

})

app.get('/', (req, res) => {
    res.send('WanderLust server is runnig')
});
app.listen(port, () => {
    console.log(`Wanderlust server is runnign : ${port}`)
})