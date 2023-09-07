const btns=document.querySelectorAll(".btns")
const start_btn=document.querySelector(".start")
const bingo=document.querySelectorAll(".bingo")
const cross=document.querySelectorAll(".cross")
let a=1,f,count=0
let c=[]
for(let i=0;i<25;i++){
    c.push(0)
}

for(let i=0;i<25;i++){
    btns[i].addEventListener("click",function(){
        if(btns[i].textContent==""){
            btns[i].textContent=a
            a=a+1
        }
    })
}

start_btn.addEventListener("click",function(){
    f=1
    for(let i=0;i<25;i++){
        if(btns[i].textContent==""){
            f=0
            break
        }
    }
    if(f==1){

        start_btn.classList.add("active3")
        
        for(let i=0;i<25;i++){
           
             btns[i].addEventListener("click",function(){
                if(c[i]==0){
                    btns[i].classList.add("active")
                    c[i]=1
                    check()
                }                
        })
           
        }

    }else{
        alert("Fill the all boxes...!!!")
    }
})


function check(){
    count=0
    for(let x=0;x<25;x=x+5){
        if(c[x]==1 && c[x+1]==1 && c[x+2]==1 && c[x+3]==1 && c[x+4]==1){
            count++   
        }
    }
    for(let x=0;x<5;x=x+1){
        if(c[x]==1 && c[x+5]==1 && c[x+10]==1 && c[x+15]==1 && c[x+20]==1){
            count++
        }
    }
     if(c[0]==1 && c[6]==1 && c[12]==1 && c[24]==1 && c[18]==1){
            count++
        }

        if(c[4]==1 && c[8]==1 && c[12]==1 && c[16]==1 && c[20]==1){
            count++
        }

        color(count)
}

function color(count){
    if(count<=5){
        for(let x=0;x<count;x=x+1){
            cross[x].classList.add("active2")
        }
    }
}