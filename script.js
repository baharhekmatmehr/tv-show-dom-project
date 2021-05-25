
let access = document.querySelector(".container")
let acc=document.querySelector(".boddy")
let acce=document.querySelector(".headerr")

acc.style.display="flex";
acc.style.flexWrap="wrap";
acc.style.justifyContent="space-between";



const myfunc = async () =>{
 try{
let myapi = await axios.get( "https://api.tvmaze.com/shows/5/episodes ")
for(let i=0 ; i<myapi.data.length ; i++){
 let divv = document.createElement("div")
 divv.classList="cards"
 let header = document.createElement("h2")
 header.innerText= `${myapi.data[i].name}- S0${myapi.data[i].season}E0${myapi.data[i].number} `
 divv.append(header)
 
 let imgg =document.createElement("img")
 imgg.src=myapi.data[i].image.medium;
 imgg.classList="imagee"
 divv.append(imgg)

 let sum=document.createElement("p")
 sum.innerHTML=myapi.data[i].summary;
 divv.append(sum)
acc.append(divv)
access.append(acc);


let sel =document.createElement("select")
sel.innerText="select one of season!"
let opt =document.createElement("option")
sel.innerText="select one of season!"
  opt.innerHTML=myapi.data[i].season;
  let seltosel =document.createElement("option")
  seltosel.innerText=myapi.data[i].number;
  
 sel.append(opt)
 acce.append(sel)
 access.append(acce);
//acc.append(navv)
}
 }
 catch(err){
console.log("error",err);
 }
}
myfunc();

