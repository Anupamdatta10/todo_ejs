async function f()
{
    setTimeout(()=>{
       console.log("hello")
    },2000)
    
}

async function n(){
    await f()
    console.log("hi")
}
n()