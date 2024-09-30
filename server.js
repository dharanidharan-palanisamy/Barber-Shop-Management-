const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
app.use(cors());

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function Main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}
Main();

app.get("/getBarbers", async (req, res) => {
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("barber_details");
        
        // Query to find available barbers
        const cursor = await collection.find({ "isAvailable": true });
        const barbers = await cursor.toArray();  // Convert the cursor to an array
        
        console.log(barbers);  // Output the results to the console
        res.status(200).json(barbers);  // Send the array as JSON response
    } catch (error) {
        console.error("Error fetching barbers:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/updateStatus", async (req, res) => {
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("barber_details");
        
        await collection.updateMany({"Name":req.params.name, "isAvailable": req.params.status }, {$set:{isAvailable:!req.params.status}});
        const barbers = await cursor.toArray();  // Convert the cursor to an array
        
        console.log(barbers);  // Output the results to the console
        res.status(200).json(barbers);  // Send the array as JSON response
    } catch (error) {
        console.error("Error fetching barbers:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000!");
});
