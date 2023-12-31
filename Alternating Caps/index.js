/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    return str.split("").map((item,index)=>{
        return (
            index%2===0?item.toUpperCase():item.toLowerCase()
        )
    }).join("")
}

console.log(altCaps("when you visit Portland you have to go to VooDoo Donuts")); 