var name = ("Jason");

function shuffle(array) {
    let index =array.length, temp, rand;
    
    while (0 !== index) {
        rand = Math.floor(Math.random() * index);
        index -=1;
        
        temp = array[index];
        array[index] = array[rand];
        array[rand] = temp;
    }
    return array.join("");
}

console.log(shuffle(name.split("")));