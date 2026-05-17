async function e(t=0){try{let e=await fetch(`${n}/events.json?apikey=${a}&page=${t}`),c=await e.json();return console.log(c._embedded.events),c}catch(e){console.log(e)}}let t=document.querySelector(".pagination-container");t.addEventListener("click",e=>{e.target.classList.contains("pagination-btn")&&s(Number(e.target.dataset.page))});let a="UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71",n="https://app.ticketmaster.com/discovery/v2",c=0,o=document.querySelector(".concerts");async function s(a=0){let n=await e(a);c=n.page.totalPages,n.page.number,o.innerHTML="",n._embedded.events.forEach(e=>{let t=document.createElement("li"),a=e.images[0]?.url,n=e.name,c=e.dates.start.localDate,s=e._embedded?.venues[0]?.name||"Unknown";t.innerHTML=`
            <img class="concert-image" src="${a}" alt="${n}" width="250px">
            <h3 class="concert-title">${n}</h3>
            <p class="concert-date">${c}</p>
            <p class="concert-place">${s}</p>
        `,o.append(t)});var r=c;let l="";for(let e=0;e<r;e++)l+=`    <button type="button" 
     class="pagination-btn" data-page="${e}">${e+1}</button>`;t.innerHTML=l}s();
//# sourceMappingURL=Event-Booster.18b8688c.js.map
