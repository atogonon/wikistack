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
const { Page } = require('../models')


router.get('/', (req, res) =>{
    res.send(layout(''))
})

router.get('/', (req, res, next) => {
    res.send(wikipage(''))
})

router.post('/', async (req, res, next) => {
    const page = new Page({
        title: req.body.title,
        content: req.body.content
    })

    try {
        await page.save();
        res.redirect('/');
      } catch (error) { next(error) }
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})



module.exports = router;
