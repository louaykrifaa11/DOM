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
var btn=document.querySelector('.lo')
 console.log(btn)


btn.addEventListener('click',function changecolor(){
    console.log(document.body.style.backgroundColor)

    if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor ="white"
    }
    
    else{
        document.body.style.backgroundColor = "red"
    }
})