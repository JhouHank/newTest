import{r as d,o as s,a as o,b as e,F as _,e as u,t as c}from"./index-1e94fb20.js";const h=e("p",null,"這一頁使用的是原生Fetch",-1),p=e("p",null,"API2則是使用axios",-1),m=e("hr",null,null,-1),g={key:0},v=e("div",null,"請點擊按鈕獲取資料",-1),b=[v],y={key:1},f=["onClick"],k=e("hr",null,null,-1),A={__name:"Api",setup(F){const a=d([]),r=async()=>{try{const n=await fetch("https://randomuser.me/api/?results=3");console.log("Fetch抓到的資料 =>",n);const l=await n.json();a.value=l}catch(n){console.log(n)}},i=n=>{n.gender=n.gender==="male"?"female":"male"};return(n,l)=>(s(),o("div",null,[e("button",{class:"btn btn-success btn-lg w-25 h-25 my-2",onClick:l[0]||(l[0]=t=>r())},"獲取資料"),h,p,m,a.value.length===0?(s(),o("div",g,b)):(s(),o("div",y,[(s(!0),o(_,null,u(a.value.results,t=>(s(),o("div",null,[e("p",null,"性別: "+c(t.gender),1),e("p",null,c(t.name.first)+" "+c(t.name.last),1),e("button",{class:"btn btn-primary",onClick:w=>i(t)},"更改性別",8,f),k]))),256))]))]))}};export{A as default};