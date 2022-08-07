import chance from 'chance';

let monstersArr = []

const generateHash = (length)=> {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

class Monster {
    constructor(hash, name, email) {
        this.hash = hash;
        this.name = name;
        this.email = email;
    }
}

const createRobotsArr = (number)=>{
    monstersArr = []
    for (let i = 0; i < number; i++) {
        let monster = new Monster(generateHash(10), chance().name(), chance().email() )
        monstersArr.push(monster)
    }
    return monstersArr
}

createRobotsArr(100)

export {monstersArr, createRobotsArr}