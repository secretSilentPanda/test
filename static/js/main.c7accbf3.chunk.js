(this["webpackJsonptest-2"]=this["webpackJsonptest-2"]||[]).push([[0],{66:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(57),c=a.n(r),s=(a(66),a(12)),o=a(0),i=a.n(o),l=a(1),u=a(34),d=a(44),b=a(76),j=a(8);function m(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),m=o[0],p=o[1],x=Object(n.useState)(!1),h=Object(s.a)(x,2),O=h[0],f=h[1];function v(){return(v=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!1),e.prev=2,e.next=5,Object(u.c)(Object(u.b)(),a,m);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),f(e.t0.message.substring(10));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}return Object(j.jsx)(b.a.div,{initial:{translateY:-20,opacity:0},animate:{translateY:0,opacity:1},children:Object(j.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},className:"flex flex-col max-w-md px-4 py-4 mx-auto mt-16 space-y-2 border rounded-md shadow-lg",children:[Object(j.jsx)("h1",{className:"pl-1 mb-4 text-2xl",children:"Login"}),Object(j.jsx)("input",{value:a,onChange:function(e){return r(e.target.value)},className:"px-2 py-1 border rounded-md",type:"text",placeholder:"Email"}),Object(j.jsx)("input",{value:m,onChange:function(e){return p(e.target.value)},className:"px-2 py-1 border rounded-md",type:"password",placeholder:"Password"}),Object(j.jsx)("button",{className:"py-1 text-white bg-blue-500 rounded-md",children:"Login"}),Object(j.jsx)(d.b,{className:"text-center text-blue-500 underline",to:"/signup",children:"Signup"}),O&&Object(j.jsx)("span",{className:"py-1 my-2 text-center bg-red-200 border rounded-sm",children:O})]})})}function p(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),m=o[0],p=o[1],x=Object(n.useState)(""),h=Object(s.a)(x,2),O=h[0],f=h[1],v=Object(n.useState)(!1),g=Object(s.a)(v,2),w=g[0],y=g[1];function N(){return(N=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y(!1),!(a&&m&&O)){e.next=14;break}return n=Object(u.b)(),e.prev=4,e.next=7,Object(u.a)(n,m,O);case 7:return e.next=9,Object(u.e)(n.currentUser,{displayName:a});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),y(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}return Object(j.jsx)(b.a.div,{initial:{translateY:-20,opacity:0},animate:{translateY:0,opacity:1},layoutId:"box",children:Object(j.jsxs)("form",{onSubmit:function(e){return N.apply(this,arguments)},className:"flex flex-col max-w-md px-4 py-4 mx-auto mt-16 space-y-2 border rounded-md shadow-lg",children:[Object(j.jsx)("h1",{className:"pl-1 mb-4 text-2xl",children:"Signup"}),Object(j.jsx)("input",{value:a,required:!0,onChange:function(e){return r(e.target.value)},className:"px-2 py-1 border rounded-md",type:"text",placeholder:"Name"}),Object(j.jsx)("input",{required:!0,value:m,onChange:function(e){return p(e.target.value)},className:"px-2 py-1 border rounded-md",type:"text",placeholder:"Email"}),Object(j.jsx)("input",{required:!0,value:O,onChange:function(e){return f(e.target.value)},className:"px-2 py-1 border rounded-md",type:"password",placeholder:"Password"}),Object(j.jsx)("button",{className:"py-1 text-white bg-blue-500 rounded-md",children:"Signup"}),Object(j.jsx)(d.b,{className:"text-center text-blue-500 underline",to:"/login",children:"Login"}),w&&Object(j.jsx)("span",{className:"py-1 my-2 text-center bg-red-200 border rounded-sm",children:w})]})})}var x=a(14),h=a(4),O=a(19),f=a(26),v=a(77),g=a(60),w=a(61),y=Object(w.a)({apiKey:"AIzaSyC-_nHZGUMOyMLwSwZIBKypP5lGxSFDYwk",authDomain:"react-android-6523e.firebaseapp.com",databaseURL:"https://react-android-6523e-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-android-6523e",storageBucket:"react-android-6523e.appspot.com",messagingSenderId:"269425320012",appId:"1:269425320012:web:921737c61e8abd190854e9"}),N=Object(g.a)(y),k={email:"",firstName:"",lastName:"",phoneNUmber:"",editMode:!1};function C(e){var t=e.user,a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(k),d=Object(s.a)(u,2),m=d[0],p=d[1];function x(){return(x=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.t0=null===t||void 0===t?void 0:t.email,!e.t0){e.next=5;break}return e.next=5,Object(f.f)(Object(f.c)(N,t.email,m.email),m);case 5:setTimeout((function(){p(k)}),0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},className:"flex flex-col max-w-screen-lg mx-auto pt-2 px-2 top-0 ".concat(c&&"border rounded-md p-2 shadow-sm pb-4 mb-14"," "),children:[Object(j.jsx)("svg",{onClick:function(){return o((function(e){return!e}))},xmlns:"http://www.w3.org/2000/svg",className:"transform duration-300 text-gray-500 mb-2 ".concat(c?"rotate-45 text-red-500 w-6 h-6":"w-10 h-10"," cursor-pointer"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(j.jsx)(v.a,{children:c&&Object(j.jsxs)(b.a.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"flex flex-col space-y-3 overflow-hidden",children:[Object(j.jsxs)("div",{className:"flex space-x-2",children:[Object(j.jsx)("input",{required:!0,className:"w-full px-2 py-1 border rounded-md",value:m.firstName,name:"firstName",autoComplete:"off",onChange:function(e){return p(Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))},type:"text",placeholder:"First name"}),Object(j.jsx)("input",{required:!0,className:"w-full px-2 py-1 border rounded-md",value:m.lastName,name:"lastName",autoComplete:"off",onChange:function(e){return p(Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))},type:"text",placeholder:"Last name"})]}),Object(j.jsxs)("div",{className:"flex space-x-2",children:[Object(j.jsx)("input",{required:!0,value:m.email,name:"email",onChange:function(e){return p(Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))},className:"w-full px-2 py-1 border rounded-md",type:"text",placeholder:"Email"}),Object(j.jsx)("input",{value:m.phoneNUmber,name:"phoneNUmber",onChange:function(e){return p(Object(O.a)(Object(O.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))},className:"w-full px-2 py-1 border rounded-md",type:"number",placeholder:"Phone"})]}),Object(j.jsx)("button",{className:"py-1 text-white bg-blue-500 rounded-md",children:"ADD"})]})})]})}var S=a(23);function L(e){var t=e.contact,a=e.setContacts,r=e.user,c=Object(n.useState)({name:"",phoneNumber:"",email:""}),o=Object(s.a)(c,2),u=o[0],d=o[1],b=Object(n.useRef)();function m(){return(m=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)(Object(f.c)(N,r.email,t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return p=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(Object(f.c)(N,r.email,u.email),u);case 2:a((function(e){return e.map((function(e){return e.email===u.email?u:e}))})),a((function(e){return e.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{editMode:!1})}))}));case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}return Object(j.jsxs)("div",{className:"relative flex flex-col p-3 m-2 space-y-1 duration-100 border rounded-md shadow-sm hover:shadow-md group",children:[Object(j.jsxs)("div",{className:"absolute flex space-x-2 duration-100 opacity-0 right-1 top-2 group-hover:opacity-100",children:[t.editMode?Object(j.jsx)("div",{onClick:function(){return p.apply(this,arguments)},className:"cursor-pointer FINISH_EDITING_BUTTON",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}):Object(j.jsx)("div",{onClick:function(){return d(e=t),a((function(t){return t.map((function(t){return t.email===e.email?Object(O.a)(Object(O.a)({},t),{},{editMode:!0}):Object(O.a)(Object(O.a)({},t),{},{editMode:!1})}))})),void setTimeout((function(){b.current.focus()}),0);var e},className:"cursor-pointer EDIT_BUTTON",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),Object(j.jsx)("div",{className:"text-red-500 cursor-pointer",onClick:function(){return function(e){return m.apply(this,arguments)}(t.email)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["Name:\xa0",t.editMode?Object(j.jsx)("input",{ref:b,className:"inline-block px-2 text-lg font-bold bg-transparent rounded-sm bg-yellow-50",value:u.name,name:"name",onChange:function(e){return d(Object(O.a)(Object(O.a)({},u),{},{name:e.target.value}))}}):Object(j.jsx)("span",{className:"px-2 text-lg font-bold bg-transparent",children:t.name})]}),Object(j.jsxs)("div",{className:"break-words",children:["Email:\xa0",Object(j.jsx)("span",{className:"text-blue-500 underline cursor-pointer",children:t.email})]}),Object(j.jsxs)("div",{children:["Phone number: ",t.phoneNumber]})]})]})}function I(e){var t=e.user,a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){if(null===t||void 0===t?void 0:t.email){var e=Object(f.a)(N,null===t||void 0===t?void 0:t.email);Object(f.e)(e,(function(e){e.docChanges().forEach((function(e){"added"===e.type&&o((function(t){return[].concat(Object(S.a)(t),[e.doc.data()])})),"removed"===e.type&&o((function(t){return t.filter((function(t){return(null===t||void 0===t?void 0:t.email)!==e.doc.data().email}))}))}))}))}}),[null===t||void 0===t?void 0:t.email]),Object(j.jsxs)("div",{className:"-mt-12",children:[Object(j.jsx)("h1",{className:"my-3 text-xl font-bold text-center text-blue-500",children:"Contacts"}),Object(j.jsx)("div",{style:{gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))"},className:"grid max-w-screen-lg mx-auto",children:Object(j.jsx)(v.a,{children:null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)(b.a.div,{initial:{scale:0},animate:{scale:1},exit:{scale:0,opacity:0},layout:!0,children:Object(j.jsx)(L,{user:t,contact:e,setContacts:o})},e.email)}))})})]})}function M(e){var t=e.user;return Object(j.jsx)("nav",{className:"w-full py-2 mb-6 duration-100 bg-blue-600 shadow-md",children:Object(j.jsxs)("div",{className:"flex justify-between max-w-screen-lg px-10 mx-auto text-white ",children:[Object(j.jsxs)("h1",{className:"text-xl font-bold shadow-sm",children:[null===t||void 0===t?void 0:t.displayName,"'s Contacts"]}),Object(j.jsx)("button",{onClick:function(){Object(u.d)(Object(u.b)())},className:"px-2 transform border-2 border-white rounded-sm cursor-pointer active:scale-90",children:"Logout"})]})})}function B(e){var t=e.user;return Object(j.jsxs)("div",{className:"overflow-hidden",children:[Object(j.jsx)(M,{user:t}),Object(j.jsxs)("div",{className:"mx-4",children:[Object(j.jsx)(C,{user:t}),Object(j.jsx)(I,{user:t})]})]})}var D=a(46);var E=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(D.c)(Object(D.b)(),(function(e){console.log("user",e),r(e)})),Object(j.jsx)(d.a,{basename:"/test",children:Object(j.jsxs)(x.d,{children:[Object(j.jsx)(x.b,{path:"/login",children:a?Object(j.jsx)(x.a,{to:"/"}):Object(j.jsx)(m,{})}),Object(j.jsx)(x.b,{path:"/signup",children:a?Object(j.jsx)(x.a,{to:"/"}):Object(j.jsx)(p,{})}),Object(j.jsx)(x.b,{exact:!0,path:"/",children:a?Object(j.jsx)(B,{user:a}):Object(j.jsx)(x.a,{to:"/login"})})]})})};c.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c7accbf3.chunk.js.map