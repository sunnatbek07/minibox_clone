import{j as e,L as d,u as i,a as j,b as g}from"./index-39fb1f7e.js";const u=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"37",viewBox:"0 0 36 37",fill:"none",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.7842 25.2675C13.3714 24.8031 13.4132 24.0919 13.8776 23.6791L19.6817 18.52L13.8776 13.3609C13.4132 12.9481 13.3714 12.237 13.7842 11.7726C14.197 11.3082 14.908 11.2664 15.3725 11.6792L22.1225 17.6791C22.3626 17.8927 22.5 18.1987 22.5 18.52C22.5 18.8413 22.3626 19.1473 22.1225 19.3608L15.3725 25.3608C14.908 25.7736 14.197 25.7319 13.7842 25.2675Z",fill:"black"})}),C=({state:{name:r,price:s,slugify:a,images:l,count:t,colors:x,units:n,createdAt:c,status:o}})=>{const{addToCartFunc:h}=i,p=async()=>{const m=await h({name:r,price:s,slugify:a,images:l,count:t,colors:x,units:n,createdAt:c,status:o});console.log(m.data)};return e.jsxs("div",{className:"card w-[232px] font-[Inter] mx-auto  hover:shadow-md duration-500 border",children:[e.jsx(d,{to:`/product/${a}`,children:e.jsx("div",{className:"relative h-[310px]",children:e.jsx("img",{src:`https://image.minibox.uz${l[0]}`,alt:"",className:"min-h-[310px] object-contain"})})}),e.jsxs("div",{className:"content pt-[11px] pl-2 pr-2 pb-3",children:[e.jsx(d,{to:`/product/${a}`,children:e.jsx("h3",{className:"text-[13px] leading-[15.36px] mt-[11px]",title:r,children:r.length>30?r.substring(0,30)+"...":r})}),e.jsxs("div",{className:"flex gap-x-1 mt-[6px]",children:[e.jsx("a",{href:"#",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",children:e.jsx("path",{d:"M7.00002 10.1342L10.605 12.31L9.64835 8.20918L12.8334 5.45002L8.63919 5.09418L7.00002 1.22668L5.36085 5.09418L1.16669 5.45002L4.35169 8.20918L3.39502 12.31L7.00002 10.1342Z",fill:"#F5A623"})})}),e.jsx("p",{className:"text-[#8A8D93] text-[11.2px]",children:"5.0"}),e.jsxs("p",{className:"text-[#8A8D93] text-[11.2px]",children:["(",t," ta sotuvda bor)"]})]}),e.jsxs("a",{className:"text-[11px] leading-[17px] text-[#1F1F26] py-1 px-[5px] bg-[#FF0] rounded h-[17px] mt-[11px] ",href:"#",children:[String(Math.floor(s/3)).replace(/\B(?=(\d{3})+(?!\d))/g,".")," ","so'm/oyiga"]}),e.jsxs("div",{className:"flex items-center justify-between h-[34px]",children:[e.jsxs("div",{children:[e.jsx("sub",{className:"text-[11.2px] text-[#757575]",children:e.jsxs("del",{children:[String(Math.floor(s+s*.12)).replace(/\B(?=(\d{3})+(?!\d))/g,".")," ","so'm"]})}),e.jsxs("p",{className:"leading-[16.8px] font-medium text-[14px] ",children:[String(s).replace(/\B(?=(\d{3})+(?!\d))/g,".")," so'm"]})]}),e.jsx("div",{className:"p-1 rounded-full border-2 border-[#D0D2D9] flex items-center justify-center cursor-pointer",onClick:()=>p(),children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",children:[e.jsx("path",{d:"M8 10.3401V8.34009H6V12.8401C6 13.1162 5.77614 13.3401 5.5 13.3401C5.22386 13.3401 5 13.1162 5 12.8401V7.34009H8C8 4.93637 9.95227 3.34009 12 3.34009C14.0575 3.34009 16 5.04565 16 7.34009H19V19.8401C19 20.6685 18.3284 21.3401 17.5 21.3401H12.5C12.2239 21.3401 12 21.1162 12 20.8401C12 20.564 12.2239 20.3401 12.5 20.3401H17.5C17.7761 20.3401 18 20.1162 18 19.8401V8.34009H16V10.3401H15V8.34009H9V10.3401H8ZM12 4.34009C10.4477 4.34009 9 5.54381 9 7.34009H15C15 5.63453 13.5425 4.34009 12 4.34009Z",fill:"#15151A"}),e.jsx("path",{d:"M7.5 14.3401C7.77614 14.3401 8 14.564 8 14.8401V17.3401H10.5C10.7761 17.3401 11 17.564 11 17.8401C11 18.1162 10.7761 18.3401 10.5 18.3401H8V20.8401C8 21.1162 7.77614 21.3401 7.5 21.3401C7.22386 21.3401 7 21.1162 7 20.8401V18.3401H4.5C4.22386 18.3401 4 18.1162 4 17.8401C4 17.564 4.22386 17.3401 4.5 17.3401H7V14.8401C7 14.564 7.22386 14.3401 7.5 14.3401Z",fill:"#15151A"})]})})]})]})]})},w=()=>{const{isLoad:r,setLoader:s,setProduct:a,product:l}=j();return g.useEffect(()=>{i.getAll().then(t=>{a(t.data),s()})},[]),e.jsx("section",{id:"summerStore",className:"py-6",children:e.jsxs("div",{className:"container",children:[e.jsxs("a",{href:"",className:"flex items-center gap-1 text-[28px] font-bold mb-[21px]",children:[e.jsx("span",{children:"Barcha mahsulotlar"}),e.jsx(u,{})]}),e.jsx("div",{className:"grid grid-cols-5 justify-between gap-y-8 gap-x-5",children:l==null?void 0:l.map(t=>e.jsx(C,{state:t},t._id))})]})})};export{w as default};