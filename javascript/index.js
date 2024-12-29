const input = document.getElementById("inputText");
input.addEventListener("input", function(e){
    setTimeout(()=>{
        console.log("Input changed:", e.target.value);
    },[3000]);
})

const btn = document.getElementById("inputBtn");
btn.addEventListener("click",function(){
    console.log("btn clicked",input.value);
})