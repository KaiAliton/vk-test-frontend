var c=Object.defineProperty;var a=(e,s,r)=>s in e?c(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;var l=(e,s,r)=>(a(e,typeof s!="symbol"?s+"":s,r),r);import{r as d,j as i}from"./index-3b12884d.js";class t extends d.Component{render(){const{children:s,orientation:r,className:o}=this.props;return r==="list"?i.jsx("div",{className:`flex-col flex ${o}`,children:s}):i.jsx("div",{className:`grid  grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 ${o}`,children:s})}}l(t,"defaultProps",{orientation:"block",className:""});const m=t;export{m as R};
