let e="UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71",t="https://app.ticketmaster.com/discovery/v2";async function a(s=0){try{let a=await fetch(`${t}/events.json?apikey=${e}&page=${s}`),n=await a.json();return console.log(n._embedded.events),n}catch(e){console.log(e)}}async function s(a){try{let s=await fetch(`${t}/events.json?apikey=${e}&id=${a}`),n=await s.json();return console.log(n),n}catch(e){console.log(e)}}let n=document.querySelector(".pagination-container");function c(e=0,t=30){let a=[],s=5*Math.floor(e/5),l=Math.min(s+5,t);for(let e=s;e<l;e++)a.push(e);l<t&&(a.push("..."),a.push(t-1)),n.innerHTML=a.map(t=>"..."===t?'<span class="dots">...</span>':`
          <button
            class="pagination-btn ${t===e?"active":""}"
            data-page="${t}"
          >
            ${t+1}
          </button>
        `).join("")}n.addEventListener("click",e=>{if(!e.target.classList.contains("pagination-btn"))return;let t=Number(e.target.dataset.page);i(t),c(t)});let l=document.querySelector(".concerts"),o=document.querySelector(".modalBody"),d=document.querySelector("#modal");async function i(e=0){var t;t=await a(e),l.innerHTML="",t._embedded.events.forEach(e=>{let t=document.createElement("li"),a=e.images[0]?.url,s=e.name,n=e.dates.start.localDate,c=e._embedded?.venues[0]?.name||"Unknown";t.dataset.id=e.id,t.classList.add("concert-item"),t.innerHTML=`
        <img class="concert-image" src="${a}" alt="${s}">
        <h3 class="concert-title">${s}</h3>
        <p class="concert-date">${n}</p>
        <p class="concert-place">${c}</p>
        `,l.append(t)}),c(e,30)}i(),c(i),l.addEventListener("click",async e=>{let t=e.target.closest(".concert-item");if(!t)return;let a=t.dataset.id,n=await s(a),c=n?._embedded?.events?.[0];c&&(console.log(n._embedded.events),o.innerHTML=`
    <button type="button" id="closeModal" class="close-btn">\u{2715}</button>

    <img class="modal-img" src="${c.images?.[0]?.url}" alt="${c.name}" />

    <h2 class="modal-title">INFO</h2>
    <p class="modal-text">${c.description}</p>

    <h2 class="modal-title">WHEN</h2>
    <p class="modal-date">${c.dates?.start?.localDate}</p>
    <p class="modal-date">${c.dates?.start?.localTime}</p>

    <h2 class="modal-title">WHERE</h2>
    <p class="modal-date">${c._embedded?.venues?.[0]?.city?.name}</p>
    <p class="modal-date">${c._embedded?.venues?.[0]?.name}</p>

    <h2 class="modal-title">WHO</h2>
    <p class="modal-date">${c.name}</p>
  `,document.querySelector("#closeModal").addEventListener("click",function(){d.classList.add("hidden")}),d.addEventListener("click",function(e){e.target===d&&d.classList.add("hidden")}),d.classList.remove("hidden"))});
//# sourceMappingURL=Event-Booster.e03676e3.js.map
