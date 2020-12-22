(()=>{"use strict";document.querySelector(".form-container");const e=document.querySelectorAll('input[name="read"]');let t=0;class o{constructor(o,a,n,c,d,s,l){this.title=o,this.author=a,this.pages=n,this.read=c,e.forEach((e=>{e.checked&&(c=e.value)})),this.link=d,this.image=s,this.id=++t}}let a=[];const n=document.querySelector("#title"),c=document.querySelector("#author"),d=document.querySelector("#pages"),s=document.querySelector("#link"),l=document.querySelector("#picture");let r;const i=document.querySelector(".append-book"),u=()=>{localStorage.setItem("myLibrary",JSON.stringify(a))},m=e=>{const t=document.createElement("div");t.classList.add("book-card");const o=document.createElement("div");o.classList.add("book-title");const n=document.createElement("div");n.classList.add("book-author");const c=document.createElement("div");c.classList.add("book-pages");const d=document.createElement("a");d.classList.add("book-link");const s=document.createElement("img");s.classList.add("book-pic");const l=document.createElement("div");l.classList.add("book-read");const r=document.createElement("div"),m=document.createElement("button");m.classList.add("delete-book","flex"),m.textContent="X";const h=document.createElement("input");h.type="checkbox",h.classList.add("read-check"),"Read"===e.read?h.checked=!0:h.checked=!1,r.appendChild(l),r.appendChild(h),r.classList.add("read-div"),o.textContent=e.title,n.textContent=e.author,c.textContent=e.pages,l.textContent=e.read,d.href=e.link,d.textContent="Read the book here",d.target="_blank",s.src=e.image,""===s.getAttribute("src")&&(s.src="/dist/images/NotAvailable.jpeg"),s.alt="Book's image",u(),m.addEventListener("click",(t=>{a.splice(a.indexOf(e),1),p(a),u()})),h.addEventListener("click",(function(){"Read"===e.read?(e.read="Not read",console.log(e.read)):"Not read"===e.read&&(e.read="Read",console.log(e.read)),p(a),u()})),t.appendChild(o),"by "!==e.author&&t.appendChild(n)," pages"!==e.pages&&t.appendChild(c),t.appendChild(r),e.link&&t.appendChild(d),t.appendChild(s),t.appendChild(m),i.appendChild(t)};function p(e){const t=document.querySelector(".append-book"),o=document.querySelectorAll(".book-card");o.forEach((e=>t.removeChild(e))),console.log(o,"from createBook func");for(let t=0;t<e.length;t++)m(e[t])}(()=>{if(localStorage.myLibrary){const e=JSON.parse(localStorage.getItem("myLibrary"));a=e,p(a)}else p(a)})();const h=document.querySelector(".searchBar"),g=document.querySelector("#book-name"),y=(document.querySelector("#book-author"),document.querySelectorAll('input[name="filter-search"]'));if(2===localStorage.myLibrary.length){const e=new o("Eloquent JavaScript","by Marijn Haverbeke","435 pages","Read","https://eloquentjavascript.net/","https://eloquentjavascript.net/img/cover.jpg"),t=new o("Think Like A Programmer","by Spraul V. A.","256 pages","Not read","https://drive.google.com/file/d/15ygKGZnl2GAIIhVx5VnznrdjF8bK8m_G/view?usp=sharing","https://images-na.ssl-images-amazon.com/images/I/51ABP9OsIoL._SX376_BO1,204,203,200_.jpg"),n=new o("JavaScript.info","by Ilya Kantor","1300 pages","Not read","https://javascript.info/",""),c=new o("The C Programming Language","by Brian W. Kerninghan","236 pages","Not read","https://drive.google.com/file/d/1QCUGcxsPqIGzHBS8Ik4jCrpZDKAfMRT9/view?usp=sharing","https://images-na.ssl-images-amazon.com/images/I/41NH37S7YRL._SX354_BO1,204,203,200_.jpg"),d=new o("Practical Object-oriented Design","by Sandi Metz","258 pages","Not read","https://drive.google.com/file/d/17qogHEAblDBXToUVEUkpb-z-Up96Tc2Q/view?usp=sharing","https://techrocks.ru/wp-content/uploads/2019/12/12.jpg");a.push(e),a.push(t),a.push(n),a.push(c),a.push(d),p(a)}const k=new class{constructor(){this.modal=document.getElementById("myModal"),this.modalBtn=document.getElementById("myBtn"),this.modalSpan=document.getElementsByClassName("close")[0]}openModal(){this.modalBtn.addEventListener("click",(()=>{this.modal.style.display="block"})),this.modalSpan.addEventListener("click",(()=>{this.modal.style.display="none"})),window.addEventListener("click",(e=>{e.target==this.modal&&(this.modal.style.display="none")}))}closeModal(){this.modal.style.display="none"}};k.openModal();const v=document.querySelector(".add-book");document.querySelector("#title").onkeyup=function(){document.querySelector(".add-book").disabled=""===document.querySelector("#title").value},v.addEventListener("click",(()=>{(()=>{for(const t of e)t.checked&&(r=t.value);const t=new o(`${n.value}`,`by ${c.value}`,`${d.value} pages`,`${r}`,`${s.value}`,`${l.value}`);a.push(t)})(),p(a),k.closeModal()})),y.forEach((e=>e.addEventListener("change",(e=>{h.value="",p(a)})))),h.addEventListener("keyup",(e=>{const t=e.target.value.toLowerCase();p(a.filter((e=>g.checked?e.title.toLowerCase().includes(t):e.author.toLowerCase().includes(t))))}))})();