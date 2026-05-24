let e="UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71",t="https://app.ticketmaster.com/discovery/v2";async function a(n=0){try{let a=await fetch(`${t}/events.json?apikey=${e}&page=${n}`),c=await a.json();return console.log(c._embedded.events),c}catch(e){console.log(e)}}async function n(a="",c="",s=0){try{let n=`${t}/events.json?apikey=${e}&page=${s}`;a&&(n+=`&keyword=${a}`),c&&(n+=`&countryCode=${c}`);let o=await fetch(n);return await o.json()}catch(e){console.log(e)}}async function c(a){try{let n=await fetch(`${t}/events.json?apikey=${e}&id=${a}`),c=await n.json();return console.log(c),c}catch(e){console.log(e)}}function s(e,t){t.innerHTML="",e._embedded.events.forEach(e=>{let a=document.createElement("li"),n=e.images[0]?.url,c=e.name,s=e.dates.start.localDate,o=e._embedded?.venues[0]?.name||"Unknown";a.dataset.id=e.id,a.classList.add("concert-item"),a.innerHTML=`
        <img class="concert-image" src="${n}" alt="${c}">
        <h3 class="concert-title">${c}</h3>
        <p class="concert-date">${s}</p>
        <p class="concert-place">${o}</p>
        `,t.append(a)})}let o=document.querySelector(".pagination-container");o.addEventListener("click",e=>{let t=e.target.closest(".pagination-btn");t&&y(Number(t.dataset.page))});let l=document.querySelector(".event-search"),d=document.querySelector(".countries"),i=document.querySelector(".event-search-btn"),r=document.querySelector(".concerts");async function u(){let e=l.value.trim(),t=d.value,a=await n(e,t);if(!a?._embedded?.events){r.innerHTML="<p>No concerts found</p>";return}s(a,r)}i.addEventListener("click",e=>{e.preventDefault(),u()}),d.addEventListener("change",u);let m=document.querySelector(".concerts"),p=document.querySelector(".modalBody"),h=document.querySelector("#modal");async function y(e=0){s(await a(e),m),function(e=0,t=30){let a=[],n=5*Math.floor(e/5),c=Math.min(n+5,t);n>0&&(a.push(0),n>1&&a.push({type:"prevDots",page:n-5}));for(let e=n;e<c;e++)a.push(e);c<t-1&&(a.push({type:"nextDots",page:c}),a.push(t-1)),o.innerHTML=a.map(t=>"object"==typeof t?`
          <button
            class="pagination-btn dots-btn"
            data-page="${t.page}"
          >
            ...
          </button>
        `:`
      <button
        class="pagination-btn ${t===e?"active":""}"
        data-page="${t}"
      >
        ${t+1}
      </button>
      `).join("")}(e,30)}y(),m.addEventListener("click",async e=>{let t=e.target.closest(".concert-item");if(!t)return;let a=t.dataset.id,n=await c(a),s=n?._embedded?.events?.[0];s&&(console.log(n._embedded.events),p.innerHTML=`
    <button type="button" id="closeModal" class="close-btn">\u{425}</button>

    <img class="modal-img" src="${s.images?.[0]?.url}" alt="${s.name}" />

    <h2 class="modal-title">INFO</h2>
    <p class="modal-text">${s.description}</p>

    <h2 class="modal-title">WHEN</h2>
    <p class="modal-date">${s.dates?.start?.localDate}</p>
    <p class="modal-date">${s.dates?.start?.localTime}</p>

    <h2 class="modal-title">WHERE</h2>
    <p class="modal-date">${s._embedded?.venues?.[0]?.city?.name}</p>
    <p class="modal-date">${s._embedded?.venues?.[0]?.name}</p>

    <h2 class="modal-title">WHO</h2>
    <p class="modal-date">${s.name}</p>
  `,document.querySelector("#closeModal").addEventListener("click",function(){h.classList.add("hidden")}),h.addEventListener("click",function(e){e.target===h&&h.classList.add("hidden")}),h.classList.remove("hidden"))});
//# sourceMappingURL=Event-Booster.8d67a354.js.map
