const express = require('express');
const mongodb = require("mongodb")

async function loadBooksCollection() {
    const client = await mongodb.MongoClient.connect("mongodb+srv://daniel_shcherban:283014@vueproject.phytr.mongodb.net/vueProject?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    return client.db("vueProject").collection("books")
}

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await loadBooksCollection()
        res.send(await books.find({}).toArray())
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const books = await loadBooksCollection()
        books.insertOne({
            author: req.body.author,
            title: req.body.title
        })
        res.status(201).send()
    } catch (error) {
        console.log(error)
    }
})

module.exports = router