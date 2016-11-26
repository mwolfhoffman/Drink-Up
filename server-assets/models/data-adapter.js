let DataStore = require('nedb')

//store lists of beers (ex. favorite ...etc)
let List = new DataStore({
    filename: './data/list.db',
    autoload: true
})

//store comments ...
let Comment = new DataStore({
    filename: './data/comment.db',
    autoload: true
})

module.export = { List, Comment }