(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-11bb5876":"0652dd8a","chunk-06853c2b":"f38efc5a","chunk-5385bfc6":"e7659770","chunk-40d1f342":"6e6162f5","chunk-1f6b254f":"3dc0bf30","chunk-93ac9086":"ef8ce7a0","chunk-9ad9d334":"079b2c13","chunk-09be769f":"a8f0fc60","chunk-ddab4324":"cf093938","chunk-0201deec":"89222644","chunk-0c9ad3c3":"67f86cfb","chunk-2eeb4ce6":"d0f78f7b","chunk-ec17007c":"ca3a6b3d",about:"eb7a7b8f","chunk-34764f9a":"ec253761","chunk-42aeab0b":"7b8bea29"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-11bb5876":1,"chunk-5385bfc6":1,"chunk-40d1f342":1,"chunk-1f6b254f":1,"chunk-93ac9086":1,"chunk-9ad9d334":1,"chunk-09be769f":1,"chunk-ddab4324":1,"chunk-0201deec":1,"chunk-0c9ad3c3":1,"chunk-2eeb4ce6":1,"chunk-ec17007c":1,about:1,"chunk-42aeab0b":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{"chunk-11bb5876":"e3417149","chunk-06853c2b":"31d6cfe0","chunk-5385bfc6":"4919c118","chunk-40d1f342":"41f37c86","chunk-1f6b254f":"705b1265","chunk-93ac9086":"52c42c08","chunk-9ad9d334":"4c6d669c","chunk-09be769f":"2163dfa5","chunk-ddab4324":"0a64561f","chunk-0201deec":"64b31db3","chunk-0c9ad3c3":"00124c23","chunk-2eeb4ce6":"38e1a7b7","chunk-ec17007c":"0d27b1a4",about:"d0b2eecb","chunk-34764f9a":"31d6cfe0","chunk-42aeab0b":"4fce42b2"}[e]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0418":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"it-header-menu relative bg-white"},[e.isLogged?a("div",{staticClass:"flex justify-end gap-x-4 m-auto w-90x100 py-3"},[a("span",[a("i",{staticClass:"fa fa-user"}),e._v(" "+e._s(e.user_name)+" ")]),e.isLogged?a("router-link",{attrs:{to:{name:"Admin"}}},[a("i",{staticClass:"fas fa-cogs"})]):e._e()],1):e._e(),e.showNavMobile?e._e():a("div",{staticClass:"grid grid-cols-3 pt-5 pb-4",class:{"pt-16":!e.isLogged}},[a("ul",{staticClass:"flex justify-center items-start"},[a("li",[e._v("Menú")]),a("li",[a("router-link",{attrs:{to:{name:"Contact"}}},[e._v("Contáctanos")])],1)]),a("figure",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"w-3/5 m-auto",attrs:{src:n("d5db"),alt:"logo"}})])],1),a("ul",{staticClass:"flex justify-center items-start"},[a("li",[e._v("quienes somos")]),e.isLogged?e._e():a("li",[a("button",{staticClass:"uppercase font-bold",attrs:{type:"button"},on:{click:e.loginForm}},[e._v("iniciar sesión")])]),e.isLogged?a("li",[a("button",{staticClass:"uppercase font-bold",attrs:{type:"button"},on:{click:e.logout}},[e._v("cerrar sesión")])]):e._e()])]),a("login-form",{directives:[{name:"show",rawName:"v-show",value:e.login,expression:"login"}],staticClass:"absolute top-1/2 z-10 right-2%",attrs:{isMobile:e.isMobile,logout:e.isLogged},on:{closeLogin:function(t){return e.loginForm(!1)},logged:e.updClientStatus}}),e.showNavMobile?a("div",{staticClass:"relative flex flex-row justify-around p-3 text-4xl"},[a("button",{on:{click:e.showMobileMenu}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]},[a("i",{staticClass:"fas fa-bars"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}]},[a("i",{staticClass:"fas fa-times"})])]),e._m(0)]):e._e()],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"self-center"},[a("img",{staticClass:"w-2/5 ml-auto",attrs:{src:n("d5db"),alt:"logo"}})])}],s=n("1da1"),o=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-form rounded-2xl w-19r p-6 "},[n("button",{staticClass:"absolute top-8px right-8%",attrs:{type:"button"},on:{click:e.closeLogin}},[n("i",{staticClass:"fas fa-times"})]),n("form",{staticClass:"flex flex-col gap-y-4"},[n("div",{staticClass:"flex flex-col items-start gap-y-1"},[n("label",{staticClass:"pl-2",attrs:{for:"user"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{type:"text",id:"user",name:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),n("div",{staticClass:"relative flex flex-col items-start gap-y-1"},[n("label",{staticClass:"pl-2",attrs:{for:"pass"}},[e._v("Contreña")]),"checkbox"===(e.showpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(e.pass)?e._i(e.pass,null)>-1:e.pass},on:{change:function(t){var n=e.pass,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);a.checked?o<0&&(e.pass=n.concat([s])):o>-1&&(e.pass=n.slice(0,o).concat(n.slice(o+1)))}else e.pass=r}}}):"radio"===(e.showpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"radio"},domProps:{checked:e._q(e.pass,null)},on:{change:function(t){e.pass=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:e.showpass?"text":"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.showpass,expression:"!showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[n("i",{staticClass:"fas fa-eye-slash"})]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.showpass,expression:"showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[n("i",{staticClass:"fas fa-eye"})])]),n("div",{staticClass:"flex flex-col items-center gap-y-3"},[n("small",{directives:[{name:"show",rawName:"v-show",value:e.is_error,expression:"is_error"}],staticClass:"text-red py-1"},[e._v(e._s(e.error_message))]),n("router-link",{staticClass:"text-lightBlue underline",attrs:{to:{name:"ForgotPassword"}},on:{click:e.closeLogin}},[e._v("Olvide mi contraseña")]),n("button",{staticClass:"border border-orange bg-orange rounded-3xl py-2 px-16",class:{"cursor-not-allowed":e.isLoggued},attrs:{type:"submit"},on:{click:e.login}},[e._v("Iniciar sesión")]),n("button",{staticClass:"border border-orange bg-transparent rounded-3xl text-orange py-2 px-16",attrs:{type:"button"},on:{click:e.newSubcribe}},[e._v("Registrarse")])],1)])])}),i=[],c=n("860c"),u=n("ca3e"),l=(n("1232"),{props:{isMobile:{default:!1},logout:{default:!1}},name:"LoginForm",data:function(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,error_message:"Prueba de error"}},watch:{logout:function(){this.disabledLogin=!1}},computed:{isLoggued:function(){c["a"].isClientLogged()&&(this.$emit("logged",!0),this.disabledLogin=!0)}},methods:{closeLogin:function(){this.$emit("closeLogin",!1)},login:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.preventDefault(),t.disabledLogin||u["a"].login(t.user,t.pass).then((function(e){e.logged?(t.closeLogin(),t.$emit("logged",!0)):(t.error_message=e.message,t.is_error=!0,setTimeout((function(){t.is_error=!1}),3e3))}));case 2:case"end":return n.stop()}}),n)})))()},newSubcribe:function(){"/NewClient"!=this.$route.fullPath&&this.$router.push({name:"NewClient"}),this.$emit("closeLogin",!1)}}}),d=l,h=(n("b251"),n("2877")),p=Object(h["a"])(d,o,i,!1,null,"58edfdb0",null),f=p.exports,m={name:"Header",props:{login:{default:!1},showMobile:{default:!1}},components:{LoginForm:f},data:function(){return{openMenu:!1,showNavMobile:!1,isLogged:!1,user_name:""}},created:function(){this.handleMobileView()},watch:{isLogged:function(){this.user_name=this.isLogged?localStorage.getItem("user"):""}},computed:{isMobile:function(){return this.openMenu=this.showMobile,this.showMobile}},methods:{handleMobileView:function(){this.showNavMobile=window.innerWidth<=991},showMobileMenu:function(){this.showMenu=!this.showMenu,this.$emit("handleMobileMenu",this.showMenu)},updClientStatus:function(e){this.isLogged=e},loginForm:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.showMenu=!this.showMenu,this.$emit("showLogin",e)},logout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].checkLogin("/clients/logout",{auth:"bearer"});case 3:n=t.sent,a=n.status,r=n.data,200==a?(sessionStorage.setItem("token",r.token),e.isLogged=!1,c["a"].destroyLocalUserData(),"/"!=e.$route.fullPath&&e.$router.push("/")):console.log("problemas al desloguearse"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},b=m,g=(n("7062"),Object(h["a"])(b,a,r,!1,null,"599698aa",null));t["a"]=g.exports},"08c2":function(e,t,n){},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",attrs:{id:"app"}},[n("navigation-mobile",{directives:[{name:"show",rawName:"v-show",value:e.showMobileMenu,expression:"showMobileMenu"}],on:{showLogin:e.showLogin}}),n("main",{staticClass:"flex flex-col h-full min-h-screen rounded-t-2xl sm:rounded-t-0",class:{"menu-mobile-open":e.showMobileMenu}},[n("Header",{attrs:{showMobile:e.showMobileMenu,login:e.openLogin},on:{handleMobileMenu:e.showMobile,showLogin:e.showLogin}}),n("router-view"),n("Footer")],1)],1)},s=[],o=n("1da1"),i=(n("96cf"),n("0418")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"mt-auto pt-10 pb-4 px-4 z-0"},[n("div",{staticClass:"flex flex-col md:flex-row text-white gap-6"},[n("figure",{staticClass:"md:w-3/12 order-1 md:order-1 flex flex-col items-center justify-evenly gap-5 py-3 sm:py-0"},[n("img",{staticClass:"w-2/4 m-auto sm:m-0",attrs:{src:e.logo_img,alt:"logo"}}),e._m(0)]),e._m(1),n("div",{staticClass:"order-4 md:order-1 flex flex-col gap-4 md:text-left md:border-l-2 md:px-6"},[n("h3",{staticClass:"uppercase text-2xl font-DIN-Bold md:block hidden"},[e._v("Ubicacion")]),n("div",{staticClass:"text-xl"},[n("pre",[e._v(e._s(e.dir))])])]),n("div",{staticClass:"md:w-2/12 order-2 md:order-1 flex flex-col gap-4 md:text-left md:border-l-2 md:px-6"},[n("h3",{staticClass:"uppercase text-2xl font-DIN-Bold md:block hidden"},[e._v("contacto")]),n("div",{staticClass:"text-xl"},[n("pre",[e._v(e._s(e.phones))])])])]),n("div",{staticClass:"text-white py-6 mx-auto"},[n("small",[e._v(e._s(e.copyright))])])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"social-media flex flex-row justify-center text-3xl sm:justify-end gap-6 p-2"},[n("li",{staticClass:"px-3 pt-1"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])]),n("li",{staticClass:"px-4 pt-1"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f"})])]),n("li",{staticClass:"px-3 pt-1"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-whatsapp"})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-2/12 order-3 md:order-1 flex flex-col gap-4 md:text-left md:border-l-2 md:px-6"},[n("h3",{staticClass:"uppercase text-2xl font-DIN-Bold md:block hidden"},[e._v("soporte")]),n("ul",{staticClass:"text-xl"},[n("li",[n("a",{attrs:{href:"#"}},[e._v("Quienes Somos")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Términos y políticas")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Contactanos")])])])])}],l=(n("d3b7"),n("3ca3"),n("ddb0"),n("a4d3"),n("e01a"),n("db49")),d=n("72d1"),h={name:"Footer",data:function(){return{logo_img:l["a"].gallery_url+"general/logo/logo-white.png",dir:"",phones:"",copyright:""}},created:function(){var e=this,t=[];t.push(d["a"].getText("direccion")),t.push(d["a"].getText("contact-phone")),t.push(d["a"].getText("copyright")),Promise.all(t).then((function(t){t&&(e.dir=t[0]?t[0].description:"",e.phones=t[1]?t[1].description:"",e.copyright=t[2]?t[2].description:"")}))}},p=h,f=(n("b26a"),n("2877")),m=Object(f["a"])(p,c,u,!1,null,"bc0eb21c",null),b=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute"},[n("ul",{staticClass:"flex flex-col justify-center items-start p-4"},[n("li",[e._v("Menú")]),n("li",[e._v("Contáctanos")]),n("li",[e._v("quienes somos")]),n("li",[n("button",{staticClass:"uppercase",attrs:{type:"button"},on:{click:e.loginForm}},[e._v("iniciar sesión")])])])])},v=[],k={name:"NavigationMobile",methods:{loginForm:function(){this.$emit("showLogin",!0)}}},x=k,w=(n("804d"),Object(f["a"])(x,g,v,!1,null,"efd4f61e",null)),y=w.exports,C=n("860c"),_={components:{Header:i["a"],Footer:b,NavigationMobile:y},data:function(){return{openLogin:!1,showMobileMenu:!1}},created:function(){this.loginAPI()},methods:{loginAPI:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C["a"].login();case 2:case"end":return e.stop()}}),e)})))()},showMobile:function(e){this.showMobileMenu=e},showLogin:function(e){this.showMobileMenu=!1,this.openLogin=e}}},L=_,M=(n("034f"),Object(f["a"])(L,r,s,!1,null,null,null)),R=M.exports,j=n("a18c"),S=(n("def6"),n("f02a")),O=n.n(S);n("15f5"),n("7051");a["a"].config.productionTip=!1,a["a"].use(O.a,{}),new a["a"]({router:j["a"],render:function(e){return e(R)}}).$mount("#app")},"5b9b":function(e,t,n){},"66bb":function(e,t,n){},7062:function(e,t,n){"use strict";n("66bb")},"72d1":function(e,t,n){"use strict";var a=n("1da1"),r=(n("96cf"),n("860c")),s={getText:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r["a"].checkLogin("/text/by-key/".concat(e));case 3:if(n=t.sent,a=n.status,s=n.data,200!=a){t.next=8;break}return t.abrupt("return",s);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}};t["a"]=s},7910:function(e,t,n){},"804d":function(e,t,n){"use strict";n("7910")},"85ec":function(e,t,n){},"860c":function(e,t,n){"use strict";var a=n("b85c"),r=n("1da1"),s=(n("b0c0"),n("caad"),n("2532"),n("fb6a"),n("d3b7"),n("25f0"),n("96cf"),n("bc3a")),o=n.n(s),i=(n("a18c"),n("1232")),c=n("3452"),u=n.n(c),l=n("db49"),d=l["a"].api_dotcom,h={baseURL:"".concat(d),auth:{username:"api@admin.com",password:"IT_api"}},p=o.a.create(h),f={currentUserData:[],login:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(sessionStorage.getItem("token")){e.next=15;break}return e.prev=1,e.next=4,p.get("/user-api/login");case 4:if(t=e.sent,n=t.status,a=t.data,200!==n){e.next=10;break}return sessionStorage.setItem("token",a.token),e.abrupt("return",a.token);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e["catch"](1),e.abrupt("return",{success:!1,errors:e.t0.response.data.errors.password[0]});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.checkLogin("/clients/logout",{auth:"bearer"});case 3:n=t.sent,200==n.status&&(sessionStorage.setItem("token",n.data.token),f.destroyLocalUserData()),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("problemas al desloguearse"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},isClientLogged:function(){if(sessionStorage.getItem("token")){var e=Object(i["a"])(sessionStorage.getItem("token"));return!!e.client}return!1},checkLogin:function(e){var t=arguments,n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,s,i,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.length>1&&void 0!==t[1]?t[1]:{},s=t.length>2&&void 0!==t[2]?t[2]:"get",i={url:e,method:s},c=sessionStorage.getItem("token"),r.data&&(i.data=r.data),r.params&&(i.params=r.params),!sessionStorage.getItem("token")){a.next=11;break}if("bearer"!=r.auth){a.next=10;break}return u=null,u="get"==s?n.getAxiosToken(c,h.baseURL+e):n.otherAxiosToken(c,h.baseURL+e,r,s),a.abrupt("return",u);case 10:return a.abrupt("return",o.a.get(h.baseURL+e,{auth:{username:"api@admin.com",password:"IT_api"}}).then((function(e){return e})).catch((function(e){return e})));case 11:return a.next=13,n.login();case 13:return a.next=15,n.checkLogin();case 15:case"end":return a.stop()}}),a)})))()},checkLoginImage:function(e){var t=arguments,n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.length>1&&void 0!==t[1]?t[1]:{},s=t.length>2?t[2]:void 0,o=sessionStorage.getItem("token"),!sessionStorage.getItem("token")){a.next=7;break}return i=null,i=n.otherAxiosToken(o,h.baseURL+e,r,s),a.abrupt("return",i);case 7:n.login(),n.checkLogin();case 9:case"end":return a.stop()}}),a)})))()},otherAxiosToken:function(e,t,n,a){return Object(r["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,"post"!=a){r.next=7;break}return r.next=4,o.a.post(t,n,{headers:{Authorization:"Bearer "+e}});case 4:r.t0=r.sent,r.next=10;break;case 7:return r.next=9,o.a.put(t,n,{headers:{Authorization:"Bearer "+e}});case 9:r.t0=r.sent;case 10:return s=r.t0,r.abrupt("return",s);case 14:return r.prev=14,r.t1=r["catch"](0),r.abrupt("return",r.t1);case 17:case"end":return r.stop()}}),r,null,[[0,14]])})))()},getAxiosToken:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",o.a.get(t,{headers:{Authorization:"Bearer "+e}}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return n.stop()}}),n)})))()},getClientToken:function(){return this.decodeToken(sessionStorage.getItem("token"))},decodeToken:function(e){return Object(i["a"])(e)},createLocalUserData:function(){var e=this.getClientToken().client;localStorage.setItem("id",e.id),localStorage.setItem("user",e.name),localStorage.setItem("roles",e.roles),localStorage.setItem("email",e.email)},destroyLocalUserData:function(){localStorage.clear()},validateRole:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.isClientLogged())return this.destroyLocalUserData(),!1;var n=localStorage.getItem("roles");if(!t&&n.includes("ROLE_SuperAdmin"))return!0;if(void 0!=e){var r,s=Object(a["a"])(e);try{for(s.s();!(r=s.n()).done;){var o=r.value;if(n.includes(o))return!0}}catch(i){s.e(i)}finally{s.f()}}return!1},encryptPass:function(e){this.getClientToken();var t=sessionStorage.getItem("token").slice(-10),n=null,a=u.a.lib.WordArray.random(16);return t&&(n=u.a.AES.encrypt(e,t,a).toString()),n}};t["a"]=f},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),r=n("8c4f");a["a"].use(r["a"]);var s=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-11bb5876"),n.e("chunk-ddab4324"),n.e("chunk-ec17007c"),n.e("about")]).then(n.bind(null,"bb51"))}},{path:"/acerca-de",name:"About",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-11bb5876"),n.e("chunk-ddab4324"),n.e("chunk-ec17007c"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/destinos/:keyword",name:"SinglePole",component:function(){return n.e("chunk-1f6b254f").then(n.bind(null,"6d76"))}},{path:"/destinos/:poleKey/:productKey",name:"Products",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-11bb5876"),n.e("chunk-ddab4324"),n.e("chunk-2eeb4ce6")]).then(n.bind(null,"e6dc"))}},{path:"/destinos/:poleKey/:productKey/:keyword",name:"HotelDetail",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-ec17007c"),n.e("chunk-42aeab0b")]).then(n.bind(null,"6cd2"))}},{path:"/resultado-de-busqueda",name:"SearchResult",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-11bb5876"),n.e("chunk-ddab4324"),n.e("chunk-0201deec")]).then(n.bind(null,"9820"))}},{path:"/terminos-politicas",name:"TermsAndPolicy",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-11bb5876"),n.e("chunk-ddab4324"),n.e("chunk-0c9ad3c3")]).then(n.bind(null,"2da4"))}},{path:"/contactenos",name:"Contact",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-09be769f")]).then(n.bind(null,"c098"))}},{path:"/envio-de-solicitud",name:"SendRequest",component:function(){return Promise.all([n.e("chunk-9ad9d334"),n.e("chunk-34764f9a")]).then(n.bind(null,"0728"))}},{path:"/usuario/suscripcion",name:"NewClient",component:function(){return Promise.all([n.e("chunk-11bb5876"),n.e("chunk-40d1f342")]).then(n.bind(null,"2bb8"))}},{path:"/usuario/olvide-mi-clave",name:"ForgotPassword",component:function(){return n.e("chunk-93ac9086").then(n.bind(null,"e85c"))}},{path:"/usuario/olvide-mi-clave/:token",name:"ResetPassword",component:function(){return n.e("chunk-93ac9086").then(n.bind(null,"e85c"))}},{path:"/admin",name:"Admin",component:function(){return Promise.all([n.e("chunk-11bb5876"),n.e("chunk-06853c2b"),n.e("chunk-5385bfc6")]).then(n.bind(null,"2de3"))}},{path:"/admin/:CrudKey",name:"CrudKey",component:function(){return Promise.all([n.e("chunk-11bb5876"),n.e("chunk-06853c2b"),n.e("chunk-5385bfc6")]).then(n.bind(null,"2de3"))}},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-11bb5876"),n.e("chunk-06853c2b")]).then(n.bind(null,"a761"))}},{path:"/:catchAll()",redirect:"/"}],o=new r["a"]({mode:"history",base:"/",routes:s});t["a"]=o},b251:function(e,t,n){"use strict";n("08c2")},b26a:function(e,t,n){"use strict";n("5b9b")},ca3e:function(e,t,n){"use strict";var a=n("b85c"),r=n("1da1"),s=(n("96cf"),n("99af"),n("b0c0"),n("4de4"),n("860c")),o={login:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t=s["a"].encryptPass(t),n.next=4,s["a"].checkLogin("/clients/login?email=".concat(e,"&password=").concat(t),{auth:"bearer"});case 4:if(a=n.sent,r=a.status,o=a.data,200!=r){n.next=13;break}return sessionStorage.setItem("token",o.token),s["a"].createLocalUserData(),n.abrupt("return",{message:"Success!!!",error:!1,logged:!0});case 13:if(400!=r){n.next=17;break}return n.abrupt("return",{message:o.message,error:!0,logged:!1});case 17:console.log("Poblemas al loguearse");case 18:n.next=23;break;case 20:n.prev=20,n.t0=n["catch"](0),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})))()},getList:function(){var e=this;try{return s["a"].checkLogin("/clients").then((function(t){var n=[];if(200==t.status)if(s["a"].validateRole(["ROLE_Admin"])){var r,o=Object(a["a"])(t.data);try{for(o.s();!(r=o.n()).done;){var i=r.value;n.push({id:i.id,name:i.name,email:i.email,active:!!i.active,verify:!!i.verify,agent:!!i.agent})}}catch(d){o.e(d)}finally{o.f()}}else if(s["a"].validateRole(["ROLE_Comercial"])){var c,u=Object(a["a"])(t.data);try{for(u.s();!(c=u.n()).done;){var l=c.value;l.email==localStorage.getItem("email")&&n.push({id:l.id,name:l.name,email:l.email,active:!!l.active,verify:!!l.verify,agent:!!l.agent})}}catch(d){u.e(d)}finally{u.f()}}else s["a"].validateRole(["ROLE_Agency"])&&(n=e.validateRoleUser(t.data));return n}))}catch(t){console.log(t)}},addUpdClient:function(e){var t=arguments;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=!(t.length>1&&void 0!==t[1])||t[1],n.prev=1,e.password=s["a"].encryptPass(e.password),e.auth="bearer",!a){n.next=10;break}return n.next=7,s["a"].checkLogin("/clients/create",e,"post");case 7:n.t0=n.sent,n.next=13;break;case 10:return n.next=12,s["a"].checkLogin("/clients/upd",e,"put");case 12:n.t0=n.sent;case 13:if(r=n.t0,o=r.status,i=r.data,200!=o){n.next=18;break}return n.abrupt("return",i);case 18:n.next=23;break;case 20:n.prev=20,n.t1=n["catch"](1),console.log(n.t1.response);case 23:return n.abrupt("return",!1);case 24:case"end":return n.stop()}}),n,null,[[1,20]])})))()},getClient:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].checkLogin("/clients/".concat(e),{auth:"bearer"});case 3:if(n=t.sent,a=n.status,r=n.data,200!=a){t.next=8;break}return t.abrupt("return",r);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},delete:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={auth:"bearer",ids:e},n.prev=1,n.next=4,s["a"].checkLogin("/clients/delete",a,"post");case 4:if(r=n.sent,o=r.status,r.data,200!=o){n.next=9;break}return n.abrupt("return",t.getList().then((function(e){return e})));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),
//! Fail 
console.log(n.t0.response);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},validateRoleUser:function(e){var t=localStorage.getItem("email"),n=e.filter((function(e){return e.email==t})),r=[];r.push({id:n[0].id,name:n[0].name,email:n[0].email,active:!!n[0].active,verify:!!n[0].verify,agent:!!n[0].agent,vendor:!1});var s,o=Object(a["a"])(e);try{for(o.s();!(s=o.n()).done;){var i=s.value;n[0].id==i.parent&&r.push({id:i.id,name:i.name,email:i.email,active:!!i.active,verify:!!i.verify,agent:!!i.agent,vendor:!0})}}catch(c){o.e(c)}finally{o.f()}return r}};t["a"]=o},d5db:function(e,t,n){e.exports=n.p+"img/logo-blue.621c8d99.png"},db49:function(e,t,n){"use strict";t["a"]={api:"http://localhost:3000",api_dotcom:"http://api.iristravelgroup.com",pass:"d00632e42209247297f60b5dff458f88",gallery_url:"https://iristravel.s3.us-east-2.amazonaws.com/images/"}},def6:function(e,t,n){}});
//# sourceMappingURL=app.ddd69288.js.map