(()=>{
let app = angular.module('drinkUp'); 

    app.service('ListService', function(){
    var ls = this; 
    
    let _beers = [];
    let _liked = [];
    let _sucked = [];
    let _queue = [];

    function Beer(id, name, image, description, style){
        this.id = id;
        this.name = name;
        this.image = image || 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Emoji_u1f37a.svg';
        this.description = description;
        this.style = style;
    }

    ls.getLiked = () => {
        return _liked;
    }
    ls.getSucked = () => {
        return _sucked;
    }
    ls.getQueued= () => {
        return _queued;
    }

    ls.addToList = function (list, id, name, image, description, style) {
        var beer = new Beer(id, name, image, description, style)
        if (list === 'liked') {
            _liked.push(beer);
            saveLiked();
        } else if (list === 'sucked') {
            _sucked.push(beer)
            saveSucked();
        } else if (list === 'queue') {
            _queue.push(beer)
            saveQueued();
        } else {
            return { "message": "Something went wrong." }
        }
    }

    ls.removeFromList = function (id, list) {
        list.forEach((b) => {
            b.id == id ? list.splice(i, 1) : null;
        })
    }

///////////////////////////////////////////
//Local Storage Functions/////////////////
////////////////////////////////////////

//Liked Beers
function getLiked(){
let likedBeers = localStorage.getItem('_liked');
if(likedBeers){
    likedBeers = JSON.parse(likedBeers);
    return likedBeers
}
return []
}

function saveLiked(){
localStorage.setItem('_liked',JSON.stringify(_liked))
} 


//sucked//
function getSucked(){
    debugger 
let suckedBeers = localStorage.getItem('_sucked');
if(suckedBeers){
    suckedBeers = JSON.parse(suckedBeers);
    return suckedBeers
}
return []
}

function saveSucked(){
    debugger 
localStorage.setItem('_sucked',JSON.stringify(_sucked))
} 

//queued//
function getQueued(){
let queuedBeers = localStorage.getItem('_queued');
if(queuedBeers){
    queuedBeers = JSON.parse(queuedBeers);
    return queuedBeers
}
return []
}

function saveQueued(){
localStorage.setItem('_queued',JSON.stringify(_queued))
} 
///////////////////////
///////////////////////


})


})();