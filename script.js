
let access = document.querySelector(".container")
//let acc=document.querySelector(".boddy")
let acce =document.querySelector(".headerr")

/////////////////////somestyle///////////////////
access.style.display="flex";
access.style.flexWrap="wrap";
access.style.justifyContent="space-between";
//////////////////////endsomestyle//////////

const myfunc = async () =>{
 try{
let myapi = await axios.get( "https://api.tvmaze.com/shows/5/episodes ")
let sel = document.createElement("select")
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

access.append(divv);

let opt =document.createElement("option")
opt.classList="opption"
opt.innerHTML=`S0${myapi.data[i].season}E0${myapi.data[i].number} - ${myapi.data[i].name}`;
  //let seltosel =document.createElement("option")
  //seltosel.innerText=myapi.data[i].number;
 sel.append(opt)
 acce.append(sel)
}

/////////////////////////select////////////////////

sel.addEventListener("change" , () =>{
  let divvv=document.getElementsByClassName("cards")
  
  let optt = document.getElementsByClassName("opption")
  //let head = document.getElementsByClassName("header")
  let sselect = sel.options[sel.selectedIndex].text;
  console.log(sselect);
   for(let i=0 ; i<sel.length ; i++){
     console.log(divvv[i].value);
  if(optt[i].value === sselect){
     divvv[i].style.display="block"
     //divvv[i].classList.add("show")
     console.log("hee");
  }else{
    //divvv[i].classList.add("none")
    console.log("jee");
    divvv[i].style.display="none"
    // opti.style.display="block"
  }
}
})
acce.append(sel)
 ///////////////////////end of select///////////////
 ///////////////////////search ////////////////////
let lab = document.createElement("label")
 let inp = document.createElement("input")
 
 inp.addEventListener("keyup" , ()=>{
let car=document.getElementsByClassName("cards")
let inpp= inp.value.toLowerCase()
//console.log(inpp);
  for (let i=0 ;i<car.length ;i++ ){
    let search = car[i].innerHTML.toLowerCase()
    let ser= search.includes(inpp)
    if (ser ){
      car[i].style.display="block"
      //car[i].style.textDecortion="lineThrough"
    }
    else{
      car[i].style.display="none";
    }
 }
 })
 lab.append(inp)
 acce.append(lab)
 access.append(acce);
//////////////////////end of search//////////////////
 }
 catch(err){
console.log("error",err);
 }
}
myfunc();