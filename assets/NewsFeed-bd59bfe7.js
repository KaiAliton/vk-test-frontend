import{u as i,r as o,A as d,j as e}from"./index-0190a644.js";import{A as c,T as l,P as x}from"./AddPostPanel-e3c50e03.js";import{R as m}from"./ResponseGrid-5f7a43ff.js";function j(){const r=i(),{user:a}=o.useContext(d),[s,n]=o.useState(void 0);return o.useEffect(()=>{r.get(`/api/v1/user/${a==null?void 0:a.id}/newsfeed/`).then(t=>{n(t.data.results)})},[]),console.log(s),e.jsxs("div",{className:"mt-5",children:[e.jsx(c,{}),(s==null?void 0:s.length)==0?e.jsx(l,{className:"",children:"Здесь пока ничего нет, попробуйте добавить пост или найти друзей!"}):e.jsx(m,{orientation:"list",className:"",children:s==null?void 0:s.map(t=>e.jsx(x,{post:t},t.id))})]})}export{j as default};