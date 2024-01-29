var btn=document.getElementsByClassName("louay")[0]
console.log(btn)
var btn1=document.getElementsByClassName("louay")[1]
console.log(btn1)
var num=document.querySelector('#counter')
console.log(num)


btn.addEventListener('click', function buttn0(){
console.log("done")



num.innerHTML=Number(num.innerHTML)+1


})

btn1.addEventListener('click', function buttn1(){
    console.log("done")



    num.innerHTML=Number(num.innerHTML)-1




})