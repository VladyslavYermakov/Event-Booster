import {page,loadConcerts} from "./index"
 const pagination = document.querySelector(".pagination-container")
export function renderPagination(totalPages){
 let markup = ""
    for(let i = 0; i < totalPages;i++){
     markup += `    <button type="button" 
     class="pagination-btn" data-page="${i}">${i+1}</button>`
    }
    pagination.innerHTML = markup
}
