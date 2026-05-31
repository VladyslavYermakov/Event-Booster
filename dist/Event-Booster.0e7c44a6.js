let e="UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71",t="https://app.ticketmaster.com/discovery/v2";async function a(n=0){try{let a=await fetch(`${t}/events.json?apikey=${e}&page=${n}`),s=await a.json();return console.log(s._embedded.events),s}catch(e){console.log(e)}}async function n(a="",s="",c=0){try{let n=`${t}/events.json?apikey=${e}&page=${c}`;a&&(n+=`&keyword=${a}`),s&&(n+=`&countryCode=${s}`);let o=await fetch(n);return await o.json()}catch(e){console.log(e)}}async function s(a){try{let n=await fetch(`${t}/events.json?apikey=${e}&id=${a}`),s=await n.json();return console.log(s),s}catch(e){console.log(e)}}function c(e,t){t.innerHTML="",e._embedded.events.forEach(e=>{let a=document.createElement("li"),n=e.images[0]?.url,s=e.name,c=e.dates.start.localDate,o=e._embedded?.venues[0]?.name||"Unknown";a.dataset.id=e.id,a.classList.add("concert-item"),a.innerHTML=`
        <img class="concert-image" src="${n}" alt="${s}">
        <h3 class="concert-title">${s}</h3>
        <p class="concert-date">${c}</p>
        <p class="concert-place">${o}</p>
        `,t.append(a)})}let o=document.querySelector(".pagination-container");o.addEventListener("click",e=>{let t=e.target.closest(".pagination-btn");t&&b(Number(t.dataset.page))});let l=document.querySelector(".event-search"),d=document.querySelector(".countries"),i=document.querySelector(".event-search-btn"),r=document.querySelector(".concerts");async function p(){let e=l.value.trim(),t=d.value,a=await n(e,t);if(!a?._embedded?.events){r.innerHTML="<p>No concerts found</p>";return}c(a,r)}i.addEventListener("click",e=>{e.preventDefault(),p()}),d.addEventListener("change",p);let u=document.querySelector(".concerts"),m=document.querySelector(".modalBody"),v=document.querySelector("#modal");async function b(e=0){c(await a(e),u),function(e=0,t=30){let a=[],n=5*Math.floor(e/5),s=Math.min(n+5,t);n>0&&(a.push(0),n>1&&a.push({type:"prevDots",page:n-5}));for(let e=n;e<s;e++)a.push(e);s<t-1&&(a.push({type:"nextDots",page:s}),a.push(t-1)),o.innerHTML=a.map(t=>"object"==typeof t?`
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
      `).join("")}(e,30)}b(),u.addEventListener("click",async e=>{let t=e.target.closest(".concert-item");if(!t)return;let a=t.dataset.id,n=await s(a),c=n?._embedded?.events?.[0];c&&(console.log(n._embedded.events),m.innerHTML=`
<button type="button" id="closeModal" class="close-btn">\u{425}</button>

    <img
      class="modal-img"
      src="${c.images?.[0]?.url}"
      alt="${c.name}"
    />

    <div class="modal-content">
      <img
        class="modal-poster"
        src="${c.images?.[0]?.url}"
        alt="${c.name}"
      />

      <div class="modal-info">
        <h2 class="modal-title">INFO</h2>
        <p class="modal-text">
          ${c.info||c.description||"No information available"}
        </p>

        <h2 class="modal-title">WHEN</h2>
        <p class="modal-date">${c.dates?.start?.localDate||""}</p>
        <p class="modal-date">${c.dates?.start?.localTime||""}</p>

        <h2 class="modal-title">WHERE</h2>
        <p class="modal-date">
          ${c._embedded?.venues?.[0]?.city?.name||""}
        </p>
        <p class="modal-date">
          ${c._embedded?.venues?.[0]?.name||""}
        </p>

        <h2 class="modal-title">WHO</h2>
        <p class="modal-date">${c.name}</p>

        <h2 class="modal-title">PRICES</h2>

        <div class="price-box">
          <span class="price-icon">|||</span>
          <p class="price-text">Standard ${c.price} UAH</p>
        </div>

        <button class="ticket-btn">
          BUY TICKETS
        </button>

        <div class="price-box">
          <span class="price-icon">|||</span>
          <p class="price-text">VIP ${c.price} UAH</p>
        </div>

        <button class="ticket-btn">
          BUY TICKETS
        </button>
      </div>
    </div>

    <button class="more-btn">
      MORE FROM THIS AUTHOR
    </button>
  `,document.querySelector("#closeModal").addEventListener("click",function(){v.classList.add("hidden")}),v.addEventListener("click",function(e){e.target===v&&v.classList.add("hidden")}),v.classList.remove("hidden"))});
//# sourceMappingURL=Event-Booster.0e7c44a6.js.map
