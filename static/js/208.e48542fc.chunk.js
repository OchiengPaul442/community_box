"use strict";(self.webpackChunkcommunity_box=self.webpackChunkcommunity_box||[]).push([[208],{7208:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var r=s(4108),a=s(5861),l=s(9439),n=s(2791);var o=s.p+"static/media/signup.7a8e83e93d62507aec4a93b7056891a0.svg";var c=s.p+"static/media/login.5cfdb6c794d82e820622824c93288aca.svg";var i=s.p+"static/media/forgotpwd.ec2e5863843f9011cc53befee97e7793.svg",d=s(1087),m=s(7964),u=s(9434),x=s(9081),h=s(184),g=function(){var e=(0,u.I0)(),t=(0,n.useState)("login"),s=(0,l.Z)(t,2),g=s[0],b=s[1],f=function(){b("signup"),document.getElementById("color1").classList.add("change1"),document.getElementById("color2").classList.add("change2"),document.getElementById("othersec").classList.add("change3"),document.getElementById("formcard").classList.add("change4")},p=function(){b("login"),document.getElementById("color1").classList.remove("change1"),document.getElementById("color2").classList.remove("change2"),document.getElementById("othersec").classList.remove("change3"),document.getElementById("formcard").classList.remove("change4")},v=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.q)();case 3:!0===(s=t.sent).success?(e({type:"SET_USER",payload:{displayName:s.user.displayName,email:s.user.email,photoURL:s.user.photoURL,uid:s.user.uid}}),e({type:"SET_ACCESS_TOKEN",payload:s.accessToken}),window.location.href="/community_box"):alert(s.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"con_colors",children:[(0,h.jsx)("div",{id:"color1"}),(0,h.jsx)("div",{id:"color2"})]}),(0,h.jsx)("div",{style:{width:"fit-content",padding:"0.5rem 1rem",backgroundColor:"orange",borderRadius:"0.5rem",position:"absolute",top:"3.5rem",left:"50%",transform:"translate(-50%, 0)"},className:"shadow-md",children:(0,h.jsx)(d.rU,{to:"/community_box",className:"text-white",children:"Visit Community"})}),(0,h.jsxs)("div",{className:"auth_card",id:"authCard",children:[(0,h.jsxs)("div",{id:"formcard",className:"form_card flex flex-col justify-center",children:[(0,h.jsx)("h1",{className:"text-2xl lg:text-4xl text-center font-bold relative mb-10",children:"Community Box"}),"login"===g&&(0,h.jsxs)("form",{action:"#",id:"login",children:[(0,h.jsx)("h4",{className:"text-xl font-semibold mb-6",children:"Welcome Back"}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),(0,h.jsx)("input",{type:"text",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Username / Email"})]}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,h.jsx)("input",{type:"password",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Password"})]}),(0,h.jsx)(d.rU,{to:"/community_box",type:"submit",id:"submit_btn",className:"text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-6",children:"Login"}),(0,h.jsxs)("button",{onClick:v,className:"flex justify-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-6 border border-blue-950 ",children:[(0,h.jsx)(x._8,{fill:"none",width:"20",height:"20"}),(0,h.jsx)("span",{className:"ml-2 font-normal",children:"Login with Google"})]}),(0,h.jsx)("div",{className:"text-center mb-6",children:(0,h.jsx)("a",{href:"#",id:"fwdbtn",onClick:function(){b("forgotpwd"),document.getElementById("color1").classList.add("change1"),document.getElementById("color2").classList.add("change2"),document.getElementById("othersec").classList.add("change3"),document.getElementById("formcard").classList.add("change4")},className:"text-sm text-red-500 hover:text-red-700",children:"Forgot Password?"})}),(0,h.jsx)("div",{className:"extra_on_mobile text-center",children:(0,h.jsxs)("small",{children:["Dont have an acount?"," ",(0,h.jsx)("a",{href:"#",onClick:f,id:"signupshown1",className:"text-blue-600",children:"SignUp"})]})})]}),"signup"===g&&(0,h.jsxs)("form",{action:"#",id:"signup",children:[(0,h.jsx)("h4",{className:"text-xl font-semibold mb-6",children:"SignUp to continue"}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),(0,h.jsx)("input",{type:"text",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Bonnie Green"})]}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),(0,h.jsx)("input",{type:"text",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"storm@gmail.com"})]}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,h.jsx)("input",{type:"password",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Password"})]}),(0,h.jsx)("div",{className:"flex items-start mb-6",children:(0,h.jsxs)("div",{className:"flex items-center mb-4",children:[(0,h.jsx)("input",{id:"checkbox-1","aria-describedby":"checkbox-1",type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "}),(0,h.jsxs)("label",{htmlFor:"checkbox-1",className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:["I agree to the"," ",(0,h.jsx)("a",{href:"#",className:"text-blue-600 hover:underline dark:text-blue-500",children:"terms and conditions"})]})]})}),(0,h.jsx)(d.rU,{to:"/community_box",type:"submit",id:"submit_btn",className:"text-white mb-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center",children:"SignUp"}),(0,h.jsx)("div",{className:"extra_on_mobile text-center",children:(0,h.jsxs)("small",{children:["Already have an acount?"," ",(0,h.jsx)("a",{href:"#",onClick:p,id:"signinshown2",className:"text-blue-600",children:"Signin"})]})})]}),"forgotpwd"===g&&(0,h.jsxs)("form",{action:"#",id:"forgotpwd",children:[(0,h.jsx)("h4",{className:"text-xl font-semibold mb-4",children:"Password Rest"}),(0,h.jsx)("h6",{className:"text-sm mb-6",children:"A rest email will be sent to your email address!"}),(0,h.jsxs)("div",{className:"relative mb-6",children:[(0,h.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),(0,h.jsx)("input",{type:"text",id:"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"storm@gmail.com"})]}),(0,h.jsx)("button",{type:"submit",id:"submit_btn_fwd",className:"text-white mb-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center",children:"Reset Password"}),(0,h.jsx)("div",{className:"extra_on_mobile text-center",children:(0,h.jsxs)("small",{children:["Dont have an acount?"," ",(0,h.jsx)("a",{href:"#",onClick:f,id:"signupshown",className:"text-blue-600",children:"SignUp"})]})})]})]}),(0,h.jsxs)("div",{id:"othersec",className:"other_sec flex flex-col justify-center items-center",children:["login"===g&&(0,h.jsxs)("div",{id:"it_1",children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:"svg_img",src:o,alt:"welcome"})}),(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"text-center text-xl mb-2 mt-2 font-semibold",children:" Don't have an account?"})}),(0,h.jsx)("button",{onClick:f,className:"acc_change mt-6 text-black w-72 p-2.5",children:"Sign Up"})]}),"signup"===g&&(0,h.jsxs)("div",{id:"it_2",children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:"svg_img",src:c,alt:"welcome"})}),(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"text-center text-xl mb-2 mt-2 font-semibold",children:"Already have an account?"})}),(0,h.jsx)("button",{onClick:p,className:"acc_change mt-6 text-black w-72 p-2.5",children:"Sign in"})]}),"forgotpwd"===g&&(0,h.jsxs)("div",{id:"it_3",children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:"svg_img",src:i,alt:"welcome"})}),(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"text-center text-xl mb-2 mt-2 font-semibold",children:"Don't have an account?"})}),(0,h.jsx)("button",{onClick:f,className:"acc_change mt-6 text-black w-72 p-2.5",children:"Sign Up"})]})]})]})]})}}}]);
//# sourceMappingURL=208.e48542fc.chunk.js.map