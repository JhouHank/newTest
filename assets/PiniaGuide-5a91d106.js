import{d as a,r,c as u,s as i,o as l,a as d,b as o,t as _,u as m}from"./index-c7eac892.js";const p=a("counter",()=>{const t=r(0),e=u(()=>t.value*2);function n(){t.value++}return{count:t,doubleCount:e,increment:n}}),f=o("h1",null,"Pinia 全域狀態管理",-1),v={__name:"PiniaGuide",setup(t){const e=p(),{increment:n}=e,{count:s}=i(e),c=()=>{n()};return(b,h)=>(l(),d("div",null,[f,o("button",{class:"btn btn-large btn-primary",onClick:c},"add"),o("h2",null,_(m(s)),1)]))}};export{v as default};
