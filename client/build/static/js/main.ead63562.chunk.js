(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),o=n(47),s=n(77),l=n(93),u="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="LIKE",f="AUTH",m="LOGOUT",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.payload}));default:return e}},g=n(13),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return localStorage.setItem("profile",JSON.stringify(Object(g.a)({},null===t||void 0===t?void 0:t.data))),Object(g.a)(Object(g.a)({},e),{},{authData:t.data,loading:!1,errors:null});case m:return localStorage.clear(),Object(g.a)(Object(g.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},O=Object(o.b)({events:h,auth:x}),v=n(184),y=n(27),w=n(174),A=n(141),C=n(176),k=n(189),S=n(177),N=n(170),I=n(173),z=Object(N.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(I.a[500]),backgroundColor:I.a[500]}}})),F=n(14),T=n(40),D=n(82),H=n(2),E=function(){var e=z(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(y.a)(t,2),r=n[0],c=n[1],o=Object(F.g)(),s=Object(F.f)(),l=Object(i.b)(),u=function(){l({type:"LOGOUT"}),s.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(D.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[o]),Object(H.jsxs)(w.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(H.jsxs)("div",{className:e.brandContainer,children:[Object(H.jsx)("img",{className:e.image,src:"data:image/png;base64,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",alt:"icon",height:"60"}),Object(H.jsx)(A.a,{component:T.b,to:"/",className:e.heading,variant:"h4",align:"left",color:"primary",children:"Find or create your own event!"})]}),Object(H.jsx)(C.a,{className:e.toolbar,children:r?Object(H.jsxs)("div",{className:e.profile,children:[Object(H.jsx)(k.a,{className:e.purple,alt:r.result.name,src:r.result.image,children:r.result.name.charAt(0)}),Object(H.jsx)(A.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(H.jsx)(S.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(H.jsx)(S.a,{component:T.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},L=n(188),M=n(183),G=n(12),B=n.n(G),P=n(21),W=n(83),K=n.n(W).a.create({baseURL:"https://event4you.herokuapp.com/"});K.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var U=function(e){return K.patch("/events/".concat(e,"/likeEvent"))},q=function(e,t){return K.patch("/events/".concat(e),t)},Z=function(e){return K.delete("/events/".concat(e))},V=function(e){return K.post("/user/signin",e)},X=function(e){return K.post("/user/signup",e)},Q=function(e){return function(){var t=Object(P.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,K.post("/events",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},J=function(e,t){return function(){var n=Object(P.a)(B.a.mark((function n(a){var r,c;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},R=Object(N.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Y=n(178),_=n(179),$=n(180),ee=n(181),te=n(85),ne=n.n(te),ae=n(87),re=n.n(ae),ce=n(86),ie=n.n(ce),oe=n(84),se=n.n(oe),le=n(64),ue=n.n(le),de=function(e){var t,n,a,r,c=e.event,o=e.setCurrentId,s=Object(i.b)(),l=R(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ne.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ue.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ue.a,{fontSize:"small"}),"\xa0Like"]})};return Object(H.jsxs)(Y.a,{className:l.card,children:[Object(H.jsx)(_.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(H.jsxs)("div",{className:l.overlay,children:[Object(H.jsx)(A.a,{variant:"h6",children:c.name}),Object(H.jsx)(A.a,{variant:"body2",children:se()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(H.jsx)("div",{className:l.overlay2,children:Object(H.jsx)(S.a,{style:{color:"white"},size:"small",onClick:function(){return o(c._id)},children:Object(H.jsx)(ie.a,{fontSize:"default"})})}),Object(H.jsx)("div",{className:l.details,children:Object(H.jsx)(A.a,{variant:"body2",color:"textSecondary",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(H.jsx)(A.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(H.jsx)($.a,{children:Object(H.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(H.jsxs)(ee.a,{className:l.cardActions,children:[Object(H.jsx)(S.a,{disabled:!(null===u||void 0===u?void 0:u.result),size:"small",color:"primary",onClick:function(){return s((e=c._id,function(){var t=Object(P.a)(B.a.mark((function t(n){var a,r,c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,U(e,null===a||void 0===a||a.token);case 4:r=t.sent,c=r.data,n({type:b,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(H.jsx)(d,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(H.jsxs)(S.a,{size:"small",color:"secondary",onClick:function(){return s((e=c._id,function(){var t=Object(P.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(e);case 3:n({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(H.jsx)(re.a,{fontSize:"small"})," Delete"]})]})]})},je=Object(N.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),pe=n(182),be=function(e){var t=e.setCurrentId,n=Object(i.c)((function(e){return e.events})),a=je();return n.length?Object(H.jsx)(M.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(H.jsx)(M.a,{item:!0,xs:12,sm:6,md:6,children:Object(H.jsx)(de,{event:e,setCurrentId:t})},e._id)}))}):Object(H.jsx)(pe.a,{})},fe=n(95),me=n(187),he=n(88),ge=n.n(he),xe=Object(N.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Oe=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),o=Object(y.a)(c,2),s=o[0],l=o[1],u=Object(i.c)((function(e){return n?e.events.find((function(e){return e._id===n})):null})),d=Object(i.b)(),j=xe(),p=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&l(u)}),[u]);var b=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})},f=function(){var e=Object(P.a)(B.a.mark((function e(t){var a,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(d(Q(Object(g.a)(Object(g.a)({},s),{},{name:null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name}))),b()):(d(J(n,Object(g.a)(Object(g.a)({},s),{},{name:null===p||void 0===p||null===(r=p.result)||void 0===r?void 0:r.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name)?Object(H.jsx)(fe.a,{className:j.paper,children:Object(H.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:f,children:[Object(H.jsx)(A.a,{variant:"h6",children:n?'Editing "'.concat(u.title,'"'):"Creating an Event"}),Object(H.jsx)(me.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return l(Object(g.a)(Object(g.a)({},s),{},{title:e.target.value}))}}),Object(H.jsx)(me.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return l(Object(g.a)(Object(g.a)({},s),{},{message:e.target.value}))}}),Object(H.jsx)(me.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return l(Object(g.a)(Object(g.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(H.jsx)("div",{className:j.fileInput,children:Object(H.jsx)(ge.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(g.a)(Object(g.a)({},s),{},{selectedFile:t}))}})}),Object(H.jsx)(S.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(H.jsx)(S.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(H.jsx)(fe.a,{className:j.paper,children:Object(H.jsx)(A.a,{variant:"h6",align:"center",children:"Please Sign In to create your own event and like other's events."})})},ve=function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(P.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.get("/events");case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(H.jsx)(L.a,{in:!0,children:Object(H.jsx)(v.a,{children:Object(H.jsxs)(M.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(H.jsx)(M.a,{item:!0,xs:12,sm:7,children:Object(H.jsx)(be,{setCurrentId:r})}),Object(H.jsx)(M.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)(Oe,{currentId:n,setCurrentId:r})})]})})})},ye=n(56),we=n(89),Ae=n(92),Ce=n.n(Ae),ke=function(){return Object(H.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(H.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Se=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ne=n(185),Ie=n(186),ze=n(90),Fe=n.n(ze),Te=n(91),De=n.n(Te),He=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,o=e.handleShowPassword;return Object(H.jsx)(M.a,{item:!0,xs:12,sm:r?6:12,children:Object(H.jsx)(me.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(H.jsx)(Ne.a,{position:"end",children:Object(H.jsx)(Ie.a,{onClick:o,children:"password"===i?Object(H.jsx)(Fe.a,{}):Object(H.jsx)(De.a,{})})})}:null})})},Ee={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Le=function(){var e=Object(a.useState)(Ee),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(y.a)(c,2),s=o[0],l=o[1],u=Object(i.b)(),d=Object(F.f)(),j=Se(),p=Object(a.useState)(!1),b=Object(y.a)(p,2),m=b[0],h=b[1],x=function(){var e=Object(P.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{u({type:f,data:{result:n,token:a}}),d.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return r(Object(g.a)(Object(g.a)({},n),{},Object(ye.a)({},e.target.name,e.target.value)))};return Object(H.jsx)(v.a,{component:"main",maxWidth:"xs",children:Object(H.jsxs)(fe.a,{className:j.paper,elevation:3,children:[Object(H.jsx)(k.a,{className:j.avatar,children:Object(H.jsx)(Ce.a,{})}),Object(H.jsx)(A.a,{component:"h1",variant:"h5",children:s?"Sign up":"Sign in"}),Object(H.jsxs)("form",{className:j.form,onSubmit:function(e){var t,a;e.preventDefault(),u(s?(t=n,a=d,function(){var e=Object(P.a)(B.a.mark((function e(n){var r,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X(t);case 3:r=e.sent,c=r.data,n({type:f,data:c}),a.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var n=Object(P.a)(B.a.mark((function n(a){var r,c;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e);case 3:r=n.sent,c=r.data,a({type:f,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,d))},children:[Object(H.jsxs)(M.a,{container:!0,spacing:2,children:[s&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(He,{name:"firstName",label:"First Name",handleChange:O,autoFocus:!0,half:!0}),Object(H.jsx)(He,{name:"lastName",label:"Last Name",handleChange:O,half:!0})]}),Object(H.jsx)(He,{name:"email",label:"Email Address",handleChange:O,type:"email"}),Object(H.jsx)(He,{name:"password",label:"Password",handleChange:O,type:m?"text":"password",handleShowPassword:function(){return h(!m)}}),s&&Object(H.jsx)(He,{name:"confirmPassword",label:"Repeat Password",handleChange:O,type:"password"})]}),Object(H.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:j.submit,children:s?"Sign Up":"Sign In"}),Object(H.jsx)(we.GoogleLogin,{clientId:"1057934852749-ntmmj1hhmo4kns74vil0advnpocm8jlk.apps.googleusercontent.com",render:function(e){return Object(H.jsx)(S.a,{className:j.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(H.jsx)(ke,{}),variant:"contained",children:"Google Sign In"})},onSuccess:x,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(H.jsx)(M.a,{container:!0,justify:"flex-end",children:Object(H.jsx)(M.a,{item:!0,children:Object(H.jsx)(S.a,{onClick:function(){r(Ee),l((function(e){return!e})),h(!1)},children:s?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]})]})})},Me=function(){return Object(H.jsx)(T.a,{children:Object(H.jsxs)(v.a,{maxWidth:"lg",children:[Object(H.jsx)(E,{}),Object(H.jsxs)(F.c,{children:[Object(H.jsx)(F.a,{path:"/",exact:!0,component:ve}),Object(H.jsx)(F.a,{path:"/auth",exact:!0,component:Le})]})]})})},Ge=(n(138),Object(o.d)(O,Object(o.c)(Object(o.a)(s.a))));c.a.render(Object(H.jsx)(i.a,{store:Ge,children:Object(H.jsx)(Me,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.ead63562.chunk.js.map