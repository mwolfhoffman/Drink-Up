let DataStore = require('nedb')

//'Liked' beers datastore
let Liked = new DataStore({
    filename: './data/liked.db',
    autoload: true
})

//'Sucked' beers datastore
let Sucked = new DataStore({
    filename: './data/sucked.db',
    autoload: true
})
//'Queued' beers datastore
let Queued = new DataStore({
    filename: './data/queued.db',
    autoload: true
})

module.export = { List, Comment }