
document.getElementById("button").addEventListener("click",foo)

async function foo(){

var data = await fetch("https://dog.ceo/api/breeds/image/random")

var data1 = await data.json()

console.log(data1);
 document.getElementById("image").setAttribute("src",data1.message)

}