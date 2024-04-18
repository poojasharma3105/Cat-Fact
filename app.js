//using Js with Axios
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts(); //await because getFacts is a async type function which return a promise
    //console.log(fact);
    let p =document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("error -", e);
        return "no fact found";
    }
}