let word="This is javascript"
// o/p siht si tpircsavaj
// let result=word.split(" ")
// let temp
// // console.log(result)
// for(let i=0;i<result.length;i++){
//     temp=result[i].split("").reverse().join()
//     console.log(temp);    
// }
let ans=[]
word.split(" ").forEach((i)=>{
    ans.push(i.split("").reverse().join(""))
})
console.log(ans.join(" ").replace(/,/g," "));