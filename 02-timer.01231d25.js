!function(){const e=document.querySelector("[data-start]"),t=document.querySelector("[data-days]"),l=document.querySelector("[data-hours]"),n=document.querySelector("[data-minutes]"),o=document.querySelector("[data-seconds]"),s=document.querySelector(".timer"),a=document.querySelectorAll(".field"),i=document.querySelectorAll(".value");console.log(i),s.style.display="flex",a[0].style.display="flex",i[0].style.fontSize="37px",a[0].style.flexDirection="column",a[0].style.alignItems="center",a[0].style.marginRight="10px",a[1].style.display="flex",i[1].style.fontSize="37px",a[1].style.flexDirection="column",a[1].style.alignItems="center",a[1].style.marginRight="10px",a[2].style.display="flex",i[2].style.fontSize="37px",a[2].style.flexDirection="column",a[2].style.alignItems="center",a[2].style.marginRight="10px",a[3].style.display="flex",i[3].style.fontSize="37px",a[3].style.flexDirection="column",a[3].style.alignItems="center",e.addEventListener("click",(function(s){let a=new Date;a=a.getTime();let i=d.getTime()-a,r=setInterval((()=>{i-=1e3,u=function(e){const t=1e3,l=60*t,n=60*l,o=24*n,s=y(Math.floor(e/o)),a=y(Math.floor(e%o/n)),i=y(Math.floor(e%o%n/l)),r=y(Math.floor(e%o%n%l/t));return{days:s,hours:a,minutes:i,seconds:r}}(i),t.textContent=u.days,t.textContent=u.days,l.textContent=u.hours,n.textContent=u.minutes,o.textContent=u.seconds,e.disabled=!0,i<=999&&clearInterval(r)}),1e3)})),e.disabled=!0;const r=Date.now(),c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r-t[0]>=0?window.alert("Please choose a date in the future"):e.disabled=!1},onChange(e){d=e[0],console.log(d)}};flatpickr("#datetime-picker",c);let d="",u=null;function y(e){return String(e).padStart(2,"0")}}();
//# sourceMappingURL=02-timer.01231d25.js.map
