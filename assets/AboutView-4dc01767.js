import{d as a,r as c,c as r,s as u,o as i,a as l,b as o,t as _,u as d}from"./index-e0bd8696.js";const p=a("counter",()=>{const t=c(0),e=r(()=>t.value*2);function n(){t.value++}return{count:t,doubleCount:e,increment:n}});const b={class:"about"},m=o("h1",null,"This is an about page",-1),g={__name:"AboutView",setup(t){const e=p(),{count:n}=u(e),s=()=>{e.increment()};return(f,h)=>(i(),l("div",b,[m,o("button",{class:"btn btn-large btn-primary",onClick:s},"add"),o("h2",null,_(d(n)),1)]))}};export{g as default};