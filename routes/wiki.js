const express = require('express');
const router = express.Router();
const layout = require('../views/layout')
const addPage = require('../views/addPage')
//const client = require("../db");
const editPage = require('../views/editPage')
const index = require('../views/index')
const main = require('../views/main')
const userList = require('../views/userList')
const userPages = require('../views/userPages')
const wikiPage = require('../views/wikipage')
const { db } = require('../models')


router.get('/', (req, res) =>{
    res.send(layout(''))
})

router.get('/', (req, res, next) => {
    res.send(wikipage(''))
})

router.post('/', (req, res, next) => {
    res.send('got to post /wiki/')
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})



module.exports = router;