import{a as n}from"./assets/vendor-CNNbG8jS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();n.defaults.baseURL="https://dummyjson.com/recipes";async function u(){const{data:r}=await n();return r}const l={recipesList:document.querySelector(".recipes-list")};function a(r){const o=r.map(({image:s,name:i,difficulty:e,cuisine:t})=>`
    <li class="recipes-item">
          <img src="${s}" alt="${i}" />
          <div>
            <h3>${i}</h3>
            <p>Cuisine: ${t}</p>
            <p>Difficulty: ${e}</p>
          </div>
        </li>
    `).join("");l.recipesList.innerHTML=o}async function d(){try{const{recipes:r}=await u();a(r)}catch(r){console.log("error",r)}}document.addEventListener("DOMContentLoaded",d);
//# sourceMappingURL=index.js.map
