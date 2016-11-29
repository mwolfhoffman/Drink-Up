(() => {

    let _beers = [];
    let _liked = [];
    let _sucked = [];
    let _queue = [];

    Beer = (id, name, image, description, style) => {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.style = stye;
    }

    this.getBeers = () => {
        return _beers;
    }

    this.addToList = function (list, id, name, image, description, style) {
        var beer = new Beer(id, name, image, description, style)
        if (list === 'liked') {
            _liked.push(beer)
        } else if (list === 'sucked') {
            _sucked.push(beer)
        } else if (list === 'queue') {
            _queue.push(beer)
        } else {
            return { "message": "Something went wrong." }
        }
    }

    this.removeFromList = function (id, list) {
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
let suckedBeers = localStorage.getItem('_sucked');
if(suckedBeers){
    suckedBeers = JSON.parse(suckedBeers);
    return suckedBeers
}
return []
}

function saveSucked(){
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

function saveSucked(){
localStorage.setItem('_queued',JSON.stringify(_queued))
} 
///////////////////////
///////////////////////

})();