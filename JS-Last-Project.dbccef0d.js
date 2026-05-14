async function e(a=1){try{let e=await fetch(`${c}/events.json?apikey=${t}&page=${a}&size=20`);return(await e.json())._embedded.events}catch(e){console.log(e)}}let t="UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71",c="https://app.ticketmaster.com/discovery/v2",a=document.querySelector(".concerts");!async function(){var t;t=await e(),a.innerHTML="",t.forEach(e=>{let t=document.createElement("li"),c=e.images[0]?.url,n=e.name,s=e.dates.start.localDate,r=e._embedded?.venues[0]?.name||"Unknown";t.innerHTML=`
            <img class="concert-image" src="${c}" alt="${n}" width="250px">
            <h3 class="concert-title">${n}</h3>
            <p class="concert-date">${s}</p>
            <p class="concert-place">${r}</p>
        `,a.append(t)})}();
//# sourceMappingURL=JS-Last-Project.dbccef0d.js.map
