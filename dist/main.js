(()=>{"use strict";document.querySelector(".form-container");const e=document.querySelectorAll('input[name="read"]');let t=0;class o{constructor(o,d,n,l,a){this.title=o,this.author=d,this.pages=n,this.read=l,e.forEach((e=>{e.checked&&(l=e.value)})),this.id=++t}}let d=[];const n=document.querySelector("#title"),l=document.querySelector("#author"),a=document.querySelector("#pages"),c=document.querySelector(".append-book");(new class{constructor(){this.modal=document.getElementById("myModal"),this.modalBtn=document.getElementById("myBtn"),this.modalSpan=document.getElementsByClassName("close")[0]}openModal(){this.modalBtn.addEventListener("click",(()=>{this.modal.style.display="block"})),this.modalSpan.addEventListener("click",(()=>{this.modal.style.display="none"})),window.addEventListener("click",(e=>{e.target==this.modal&&(this.modal.style.display="none")}))}}).openModal(),document.querySelector(".add-book").addEventListener("click",(()=>{(()=>{let t;for(const o of e)o.checked&&(t=o.value);console.log(t,"radio btn value");const c=new o(`${n.value}`,`by ${l.value}`,`${a.value}`,`Read status: ${t}`);d.push(c),console.log(c.id,d,"from add book to libr func")})(),(()=>{let e=d;const o=document.createElement("div");o.classList.add("book-card");const n=document.createElement("div");n.classList.add("book-title");const l=document.createElement("div");l.classList.add("book-author");const a=document.createElement("div");a.classList.add("book-pages");const s=document.createElement("div");s.classList.add("book-read");const i=document.createElement("button");i.classList.add("delete-book"),i.textContent="X",e.forEach((e=>{n.textContent=e.title,l.textContent=e.author,a.textContent=e.pages,s.textContent=e.read})),i.setAttribute("data-id",t),i.addEventListener("click",(t=>{for(let o=0;o<e.length;o++)t.target.getAttribute("data-id")==e&&e.splice([o],1);t.target.parentElement.remove(),console.log(e,"from del btn")})),o.appendChild(n),o.appendChild(l),o.appendChild(a),o.appendChild(s),o.appendChild(i),c.appendChild(o),console.log(e,"library copy"),console.log(i,"del btnrender")})(),console.log(d)}))})();