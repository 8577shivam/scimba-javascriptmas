// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    let max=10
    let min=1
    let {floor,random}=Math
    // basic foomula for creating random number 
    let NumofToco=floor(random()*(max-min+1))+min
    let storeToco=new Array(NumofToco).fill("🌮")
    
    
    
    return storeToco // replace this empty tray array

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
