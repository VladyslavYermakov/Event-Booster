async function e(t=0){try{let e=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71&page=${t}`),n=await e.json();return console.log(n._embedded.events),n}catch(e){console.log(e)}}let t=document.querySelector(".pagination-container");t.addEventListener("click",e=>{e.target.classList.contains("pagination-btn")&&a(Number(e.target.dataset.page))});let n=document.querySelector(".concerts");async function a(t=0){let c=await e(t);c.page.number,n.innerHTML="",c._embedded.events.forEach(e=>{let t=document.createElement("li"),a=e.images[0]?.url,c=e.name,o=e.dates.start.localDate,s=e._embedded?.venues[0]?.name||"Unknown";t.innerHTML=`
        <img class="concert-image" src="${a}" alt="${c}">
        <h3 class="concert-title">${c}</h3>
        <p class="concert-date">${o}</p>
        <p class="concert-place">${s}</p>
        `,n.append(t)})}a();let c="";for(let e=0;e<30;e++)c+=`    <button type="button" 
     class="pagination-btn" data-page="${e}">${e+1}</button>`;t.innerHTML=c;
//# sourceMappingURL=Event-Booster.2802916e.js.map
