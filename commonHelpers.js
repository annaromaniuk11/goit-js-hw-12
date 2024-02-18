import{i as p,S as x,a as L}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const S="/goit-js-hw-12/assets/err-7962080a.svg",y="/goit-js-hw-12/assets/x-c58b0ecf.svg";function c(e){p.warning({title:"Sorry,",titleColor:"#FFFFFF",message:e,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:dangIcon,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${y}>
        </button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}function g(e){p.show({title:"Error",titleColor:"#FFFFFF",message:e.message,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:S,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${y}>
        </button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}const $=new x(".gallery a",{captionDelay:250,captionsData:"alt"}),m=document.querySelector(".gallery");function h({totalHits:e,hits:s}){if(parseInt(e)>0){const o=s.map(O).join("");m.insertAdjacentHTML("beforeend",o),$.refresh()}else m.innerHTML="",c("there are no images matching your search query. Please try again!")}function O({webformatURL:e,largeImageURL:s,tags:o,likes:i,views:t,comments:r,downloads:n}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img class="gallery-image" src="${e}" alt="${o}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${i}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Views</p>
        <p>${t}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Comments</p>
        <p>${r}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Downloads</p>
        <p>${n}</p>
      </li>
    </ul>
  </li>
  `}async function f(e,s){const o="https://pixabay.com/",i="api/",t=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),r=`${o}${i}?${t}`,{data:n}=await L(r);return n}const F=document.querySelector(".gallery"),b=document.querySelector("#searchForm"),u=document.querySelector(".loader"),a=document.querySelector("#load");let l=1,d="";b.addEventListener("submit",q);a.addEventListener("click",v);async function q(e){e.preventDefault();const s=e.target.keyword.value.trim();if(s){F.innerHTML="",u.style.display="block",d=s,l=1;try{const o=await f(d,l);o.hits.length===0?(a.style.display="none",c("There are no images matching your search query. Please try again!")):(h(o),w(),o.hits.length<15?(a.style.display="none",c("We're sorry, but you've reached the end of search results.")):a.style.display="block"),b.reset()}catch(o){g(o)}finally{u.style.display="none"}}}async function v(){l+=1,u.style.display="block";try{const e=await f(d,l);h(e),w(),l>=Math.ceil(e.totalHits/15)&&(c("We're sorry, but you've reached the end of search results."),a.style.display="none")}catch(e){g(e)}finally{u.style.display="none"}}function w(){const{height:e}=F.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
