import{r as l,A as t,j as e}from"./index-c99e1600.js";function n(){const{loginUser:s}=l.useContext(t);return e.jsx("div",{className:"w-screen h-screen flex justify-center items-center bg-base-100",children:e.jsxs("div",{className:"w-fit h-fit flex items-center flex-col bg-primary rounded-2xl justify-center p-5",children:[e.jsx("div",{className:"w-full text-center mb-5",children:e.jsx("span",{className:"text-2xl font-bold",children:"SociaLike"})}),e.jsxs("form",{action:"flex flex-row items-center justify-center",onSubmit:s,children:[e.jsxs("div",{className:"form-control w-full max-w-xs",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Почта"})}),e.jsx("input",{type:"text",placeholder:"",name:"username",className:"input input-bordered w-full max-w-xs"})]}),e.jsxs("div",{className:"form-control w-full max-w-xs",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Пароль"})}),e.jsx("input",{type:"text",placeholder:"",name:"password",className:"input input-bordered w-full max-w-xs"})]}),e.jsx("button",{className:"btn btn-accent w-full max-w-xs my-3",children:"Войти"})]}),e.jsx("a",{href:"/register",children:"Нет аккаунта?"})]})})}export{n as default};