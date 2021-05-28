
let access = document.querySelector (".container")
let acce = document.querySelector (".headerr")
let foot = document.querySelector (".footerr")

/* -------------------------------------------------------------------------- */
/*                                  somestyle                                 */
/* -------------------------------------------------------------------------- */
access.style.display= "flex";
access.style.flexWrap= "wrap";
access.style.justifyContent= "space-between";
/* -------------------------------------------------------------------------- */
/*                                endsomestyle                                */
/* -------------------------------------------------------------------------- */


let logo =document.createElement("img")
logo.classList="logo"
logo.src="tvm-header-logo.png"
access.append(logo)

let phott =document.createElement("img")
phott.classList="immgg"
phott.src="true-detective-logo-font-free-download.jpg"
access.append(phott)


/* -------------------------------------------------------------------------- */
/*                                    search                                   */
/* -------------------------------------------------------------------------- */

let inputt =document.querySelector("#inputhead")
let lab = document.createElement("label")
lab.classList="labbel"
 let buttonn = document.createElement("button")
 buttonn.classList="bbutton"
inputt.addEventListener("keyup" ,()=>{
    let inputt =document.querySelector("#inputhead")
    inputt=inputt.value.toLowerCase()
    console.log(inputt);
    let num = 0;
    let me =document.getElementsByClassName("cards")
    for(let i=0 ; i<me.length ; i++){
        if(!me[i].innerHTML.toLowerCase().includes(inputt)){
     me[i].style.display="none";
   }else{
     me[i].style.display="block";
    num++;
  }

    }
lab.innerHTML=`${num} / ${me.length}`
    
}
)
acce.append(lab)
 
/* -------------------------------------------------------------------------- */
/*                                end of search                               */
/* -------------------------------------------------------------------------- */


 
const myfunc = async () =>{
 try {
//let myapi = await axios.get( "https://api.tvmaze.com/shows/5/episodes ")
const myapi =  apiapi();
let sel = document.createElement("select")
sel.classList="selo"
for(let i of myapi){
 let divv = document.createElement("div")
 divv.classList="cards"
 let header = document.createElement("h2")
 header.innerText= `${i.name}- S0${i.season}E0${i.number} `
 divv.append(header)
 
 let imgg =document.createElement("img")
 imgg.src=i.image.medium;
 imgg.classList="imagee"
 divv.append(imgg)

 let sum=document.createElement("p")
 sum.innerHTML=i.summary;
 divv.append(sum)

access.append(divv);

let opt =document.createElement("option")
opt.classList="opption"
opt.innerHTML=`S0${i.season}E0${i.number} - ${i.name}`;
  //let seltosel =document.createElement("option")
  //seltosel.innerText=myapi.data[i].number;
 sel.append(opt)
 acce.append(sel)
}

/* -------------------------------------------------------------------------- */
/*                                   select                                   */
/* -------------------------------------------------------------------------- */

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

  }else{

    divvv[i].style.display="none"

  }
}
})
acce.append(sel)
 /* -------------------------------------------------------------------------- */
 /*                                end of select                               */
 /* -------------------------------------------------------------------------- */
 //access.append(acce);
 }
 catch(err){
console.log("error",err);
 }
}
myfunc();


function apiapi(){
  return [
    {
        "id": 167,
        "url": "https://www.tvmaze.com/episodes/167/true-detective-1x01-the-long-bright-dark",
        "name": "The Long Bright Dark",
        "season": 1,
        "number": 1,
        "type": "regular",
        "airdate": "2014-01-12",
        "airtime": "21:00",
        "airstamp": "2014-01-13T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21961.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21961.jpg"
        },
        "summary": "<p>Former Louisiana State CID partners Martin Hart and Rustin Cohle give separate statements to a pair of investigators about the murder of a prostitute, Dora Lange, 17 years earlier. As they look back, details of the crime, replete with occult overtones, are accompanied by insights into the detectives' volatile partnership and personal lives.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/167"
            }
        }
    },
    {
        "id": 168,
        "url": "https://www.tvmaze.com/episodes/168/true-detective-1x02-seeing-things",
        "name": "Seeing Things",
        "season": 1,
        "number": 2,
        "type": "regular",
        "airdate": "2014-01-19",
        "airtime": "21:00",
        "airstamp": "2014-01-20T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21962.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21962.jpg"
        },
        "summary": "<p>Under pressure to land a suspect in the Lange murder, Quesada warns Hart and Cohle that they might be replaced by three detectives from a new task force. The pair lobbies for extra time to follow up on a lead that takes them from a rural cathouse to an incinerated church. With his marriage to Maggie already strained by work, Hart finds respite away from home.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/168"
            }
        }
    },
    {
        "id": 169,
        "url": "https://www.tvmaze.com/episodes/169/true-detective-1x03-the-locked-room",
        "name": "The Locked Room",
        "season": 1,
        "number": 3,
        "type": "regular",
        "airdate": "2014-01-26",
        "airtime": "21:00",
        "airstamp": "2014-01-27T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21963.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21963.jpg"
        },
        "summary": "<p>Hidden image at the burned-out church leads Cohle and Hart to Joel Theriot, a tent-revival minister whose parishioners finger a scarred \"tall man\" seen with Dora Lange. Brought in for interrogation, a sex offender matching the description is quickly dismissed by Cohle, despite offering a confession. Hart gets sidetracked after Maggie sets Cohle up with a friend at a C&amp;W bar. Looking to establish a pattern of murder, Cohle pores over old case files, finding a connection with a woman assumed to have drowned years earlier.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/169"
            }
        }
    },
    {
        "id": 170,
        "url": "https://www.tvmaze.com/episodes/170/true-detective-1x04-who-goes-there",
        "name": "Who Goes There",
        "season": 1,
        "number": 4,
        "type": "regular",
        "airdate": "2014-02-09",
        "airtime": "21:00",
        "airstamp": "2014-02-10T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21964.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21964.jpg"
        },
        "summary": "<p>Hart and Cohl follow a series of dangerous leads in an effort to locate prime suspect Reggie Ledoux.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/170"
            }
        }
    },
    {
        "id": 171,
        "url": "https://www.tvmaze.com/episodes/171/true-detective-1x05-the-secret-fate-of-all-life",
        "name": "The Secret Fate of All Life",
        "season": 1,
        "number": 5,
        "type": "regular",
        "airdate": "2014-02-16",
        "airtime": "21:00",
        "airstamp": "2014-02-17T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21965.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21965.jpg"
        },
        "summary": "<p>Hart and Cohle share the spoils of a solved case; Papania and Gilbough confront the detectives with troubling new intelligence.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/171"
            }
        }
    },
    {
        "id": 172,
        "url": "https://www.tvmaze.com/episodes/172/true-detective-1x06-haunted-houses",
        "name": "Haunted Houses",
        "season": 1,
        "number": 6,
        "type": "regular",
        "airdate": "2014-02-23",
        "airtime": "21:00",
        "airstamp": "2014-02-24T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/21966.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/21966.jpg"
        },
        "summary": "<p>Maggie sheds light on Cohle's activities in 2002, when his relationship with Hart fractured and he quit the force.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/172"
            }
        }
    },
    {
        "id": 173,
        "url": "https://www.tvmaze.com/episodes/173/true-detective-1x07-after-youve-gone",
        "name": "After You've Gone",
        "season": 1,
        "number": 7,
        "type": "regular",
        "airdate": "2014-03-02",
        "airtime": "21:00",
        "airstamp": "2014-03-03T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/22086.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/22086.jpg"
        },
        "summary": "<p>Hart and Cohle forge a truce to probe a murky string of disappearances that tie to the symbology of the Dora Lange murder and the Tuttle family.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/173"
            }
        }
    },
    {
        "id": 174,
        "url": "https://www.tvmaze.com/episodes/174/true-detective-1x08-form-and-void",
        "name": "Form and Void",
        "season": 1,
        "number": 8,
        "type": "regular",
        "airdate": "2014-03-09",
        "airtime": "21:00",
        "airstamp": "2014-03-10T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/8/22089.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/8/22089.jpg"
        },
        "summary": "<p>An overlooked detail provides Hart and Cohle with an important new lead in their 17-year-old case.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/174"
            }
        }
    },
    {
        "id": 153541,
        "url": "https://www.tvmaze.com/episodes/153541/true-detective-2x01-the-western-book-of-the-dead",
        "name": "The Western Book of the Dead",
        "season": 2,
        "number": 1,
        "type": "regular",
        "airdate": "2015-06-21",
        "airtime": "21:00",
        "airstamp": "2015-06-22T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/12/31394.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/12/31394.jpg"
        },
        "summary": "<p>The disappearance of a city manager disrupts a lucrative land scheme and ignites an investigation involving three police officers and a career criminal who is moving into legitimate business.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/153541"
            }
        }
    },
    {
        "id": 167590,
        "url": "https://www.tvmaze.com/episodes/167590/true-detective-2x02-night-finds-you",
        "name": "Night Finds You",
        "season": 2,
        "number": 2,
        "type": "regular",
        "airdate": "2015-06-28",
        "airtime": "21:00",
        "airstamp": "2015-06-29T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/12/32114.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/12/32114.jpg"
        },
        "summary": "<p>Ben Caspar's autopsy reveals the gruesome details of his demise, and Ray and Ani wonder if it has anything to do with his fondness for prostitutes. Meanwhile, Frank looks into what might have happened to his missing fortune.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/167590"
            }
        }
    },
    {
        "id": 176899,
        "url": "https://www.tvmaze.com/episodes/176899/true-detective-2x03-maybe-tomorrow",
        "name": "Maybe Tomorrow",
        "season": 2,
        "number": 3,
        "type": "regular",
        "airdate": "2015-07-05",
        "airtime": "21:00",
        "airstamp": "2015-07-06T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/12/32115.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/12/32115.jpg"
        },
        "summary": "<p>Ani lets Ray know she's in charge after he goes rogue on the investigation, even though he stumbles on crucial evidence that takes the case in a new direction. Meanwhile, Frank meets with his former associates in the criminal underworld, but they make it clear they're not taking orders from him anymore; and Paul hits the streets to see if Caspar's face rings a bell.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/176899"
            }
        }
    },
    {
        "id": 182321,
        "url": "https://www.tvmaze.com/episodes/182321/true-detective-2x04-down-will-come",
        "name": "Down Will Come",
        "season": 2,
        "number": 4,
        "type": "regular",
        "airdate": "2015-07-12",
        "airtime": "21:00",
        "airstamp": "2015-07-13T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/12/32173.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/12/32173.jpg"
        },
        "summary": "<p>The detail works a pawn shop lead to close in on a suspect in the Caspere case. Frank revisits his past to pay for his present.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/182321"
            }
        }
    },
    {
        "id": 182322,
        "url": "https://www.tvmaze.com/episodes/182322/true-detective-2x05-other-lives",
        "name": "Other Lives",
        "season": 2,
        "number": 5,
        "type": "regular",
        "airdate": "2015-07-19",
        "airtime": "21:00",
        "airstamp": "2015-07-20T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/13/33150.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/13/33150.jpg"
        },
        "summary": "<p>Ray and Frank contemplate new life choices; Ani and Paul follow a lead up the coast.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/182322"
            }
        }
    },
    {
        "id": 182323,
        "url": "https://www.tvmaze.com/episodes/182323/true-detective-2x06-church-in-ruins",
        "name": "Church in Ruins",
        "season": 2,
        "number": 6,
        "type": "regular",
        "airdate": "2015-07-26",
        "airtime": "21:00",
        "airstamp": "2015-07-27T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/13/34804.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/13/34804.jpg"
        },
        "summary": "<p>Desperate to locate a missing woman with intel on Caspere, Frank meets with Mexican drug dealers. Ani infiltrates an exclusive inner circle, with Ray and Paul keeping close tabs.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/182323"
            }
        }
    },
    {
        "id": 182324,
        "url": "https://www.tvmaze.com/episodes/182324/true-detective-2x07-black-maps-and-motel-rooms",
        "name": "Black Maps and Motel Rooms",
        "season": 2,
        "number": 7,
        "type": "regular",
        "airdate": "2015-08-02",
        "airtime": "21:00",
        "airstamp": "2015-08-03T01:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/14/35409.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/14/35409.jpg"
        },
        "summary": "<p>Ray, Ani and Paul take precautionary measures to elude detection and untangle a dark mystery. Frank deals with the fallout of his betrayal.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/182324"
            }
        }
    },
    {
        "id": 182325,
        "url": "https://www.tvmaze.com/episodes/182325/true-detective-2x08-omega-station",
        "name": "Omega Station",
        "season": 2,
        "number": 8,
        "type": "regular",
        "airdate": "2015-08-09",
        "airtime": "21:00",
        "airstamp": "2015-08-10T01:00:00+00:00",
        "runtime": 90,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/14/36420.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/14/36420.jpg"
        },
        "summary": "<p>Frank, Ray and Ani weigh their options as Caspere's killer and the scope of corruption are revealed.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/182325"
            }
        }
    },
    {
        "id": 1548965,
        "url": "https://www.tvmaze.com/episodes/1548965/true-detective-3x01-the-great-war-and-modern-memory",
        "name": "The Great War and Modern Memory",
        "season": 3,
        "number": 1,
        "type": "regular",
        "airdate": "2019-01-13",
        "airtime": "21:00",
        "airstamp": "2019-01-14T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/179/449710.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/179/449710.jpg"
        },
        "summary": "<p>The disappearance of a young Arkansas boy and his sister in 1980 triggers vivid memories and enduring questions for retired detective Wayne Hays, who worked the case 35 years before with partner Roland West. What started as a routine case becomes a long journey to dissect and make sense of the crime.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1548965"
            }
        }
    },
    {
        "id": 1544677,
        "url": "https://www.tvmaze.com/episodes/1544677/true-detective-3x02-kiss-tomorrow-goodbye",
        "name": "Kiss Tomorrow Goodbye",
        "season": 3,
        "number": 2,
        "type": "regular",
        "airdate": "2019-01-13",
        "airtime": "22:00",
        "airstamp": "2019-01-14T03:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/179/449711.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/179/449711.jpg"
        },
        "summary": "<p>Hays looks back at the aftermath of the 1980 Purcell case in West Finger, Ark., including possible evidence left behind at the Devil's Den, an outdoor hangout for local kids. As attention focuses on two conspicuous suspects – Brett Woodard, a solitary vet and trash collector, and Ted LaGrange, an ex-con with a penchant for children – the parents of the missing kids, Tom and Lucy Purcell, receive a cryptic note from an anonymous source.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544677"
            }
        }
    },
    {
        "id": 1544678,
        "url": "https://www.tvmaze.com/episodes/1544678/true-detective-3x03-the-big-never",
        "name": "The Big Never",
        "season": 3,
        "number": 3,
        "type": "regular",
        "airdate": "2019-01-20",
        "airtime": "21:00",
        "airstamp": "2019-01-21T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/179/449712.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/179/449712.jpg"
        },
        "summary": "<p>Hays recalls his early romance with Amelia, as well as cracks in their relationship that surfaced after they married and had children. Ten years after the Purcell crimes, new evidence emerges, giving him a second chance to vindicate himself and the investigation.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544678"
            }
        }
    },
    {
        "id": 1544679,
        "url": "https://www.tvmaze.com/episodes/1544679/true-detective-3x04-the-hour-and-the-day",
        "name": "The Hour and the Day",
        "season": 3,
        "number": 4,
        "type": "regular",
        "airdate": "2019-01-27",
        "airtime": "21:00",
        "airstamp": "2019-01-28T02:00:00+00:00",
        "runtime": 67,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/179/449713.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/179/449713.jpg"
        },
        "summary": "<p>Hays and West see a possible connection between the local church and the Purcell crimes. As the detectives search for one suspect and round up another for interrogation, Woodard is targeted by a vigilante group.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544679"
            }
        }
    },
    {
        "id": 1544680,
        "url": "https://www.tvmaze.com/episodes/1544680/true-detective-3x05-if-you-have-ghosts",
        "name": "If You Have Ghosts",
        "season": 3,
        "number": 5,
        "type": "regular",
        "airdate": "2019-02-03",
        "airtime": "21:00",
        "airstamp": "2019-02-04T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/181/454060.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/181/454060.jpg"
        },
        "summary": "<p>Wayne finds himself in a no-win situation as new clues emerge in the Purcell case. Roland wrestles with how to keep evidence secure as lawyers demand a new investigation. Amelia finds her relationship with Wayne imperiled by her writing aspirations and his jealousy.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544680"
            }
        }
    },
    {
        "id": 1544681,
        "url": "https://www.tvmaze.com/episodes/1544681/true-detective-3x06-hunters-in-the-dark",
        "name": "Hunters in the Dark",
        "season": 3,
        "number": 6,
        "type": "regular",
        "airdate": "2019-02-10",
        "airtime": "21:00",
        "airstamp": "2019-02-11T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/182/455463.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/182/455463.jpg"
        },
        "summary": "<p>Wayne and Roland revisit discrepancies in the Purcell case that were hidden or forgotten over the years. Among those being reevaluated is Tom Purcell, as well as Lucy Purcell's cousin, Dan O'Brien. The glitter of Amelia's book release is tarnished by a voice from the past.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544681"
            }
        }
    },
    {
        "id": 1544682,
        "url": "https://www.tvmaze.com/episodes/1544682/true-detective-3x07-the-final-country",
        "name": "The Final Country",
        "season": 3,
        "number": 7,
        "type": "regular",
        "airdate": "2019-02-17",
        "airtime": "21:00",
        "airstamp": "2019-02-18T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/182/457160.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/182/457160.jpg"
        },
        "summary": "<p>Following up on new leads, Wayne and Roland track down a man who left the police force in the midst of the Purcell investigation. Meanwhile, Amelia visits Lucy Purcell's best friend in hopes of gaining insights into the whereabouts of the mysterious one-eyed man.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1544682"
            }
        }
    },
    {
        "id": 1590271,
        "url": "https://www.tvmaze.com/episodes/1590271/true-detective-3x08-now-am-found",
        "name": "Now Am Found",
        "season": 3,
        "number": 8,
        "type": "regular",
        "airdate": "2019-02-24",
        "airtime": "21:00",
        "airstamp": "2019-02-25T02:00:00+00:00",
        "runtime": 76,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/184/461071.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/184/461071.jpg"
        },
        "summary": "<p>Wayne struggles to hold on to his memories, and his grip on reality, as the truth behind the Purcell case is finally revealed.</p>",
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/episodes/1590271"
            }
        }
    }
]
}