const morgan = require('morgan')
const express = require('express')
const app = express()
const { db } = require('./models')
const routes = require('./routes/wiki');
const models = require('./models')
const PORT = 1337;



app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(routes)



const init = async () => {
    await models.User.sync()
    await models.Page.sync()
    models.db.sync({force: true})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})}


init()

db.authenticate().
then(() => {
  console.log('connected to the database');
})