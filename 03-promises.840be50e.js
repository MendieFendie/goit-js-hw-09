function e(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:i}=t.currentTarget.elements;for(let t=0;t<i.value;t++){const i=Number(o.value)+n.value*t;console.log(i),e(t+1,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}),{timeout:4e3}).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}),{timeout:4e3})}t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.840be50e.js.map
