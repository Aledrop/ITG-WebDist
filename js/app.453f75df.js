(function(){var e={86:function(e,t){"use strict";t["Z"]={api:"http://localhost:3000",api_dotcom:"https://api.iristravelgroup.com",pass:"d00632e42209247297f60b5dff458f88",gallery_url:"https://iristravel.s3.us-east-2.amazonaws.com/images/"}},986:function(e,t,o){"use strict";var n=o(9242),a=o(3396),s=o(7139);const r=(0,a._)("i",{class:"fas fa-arrow-up"},null,-1),i=[r];function l(e,t,o,r,l,c){const u=(0,a.up)("navigation-mobile"),d=(0,a.up)("Header"),m=(0,a.up)("router-view"),g=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",{id:"app",class:(0,s.C_)(["relative",{"bg-blue":l.showMobileMenu}])},[(0,a.wy)((0,a.Wm)(u,{onShowLogin:c.showLogin},null,8,["onShowLogin"]),[[n.F8,l.showMobileMenu]]),(0,a._)("main",{ref:"header",class:(0,s.C_)(["flex flex-col h-full min-h-screen rounded-t-2xl sm:rounded-t-0",{"menu-mobile-open":l.showMobileMenu}])},[l.api_connected?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Wm)(d,{onHandleMobileMenu:c.showMobile,onShowLogin:c.showLogin,showMobile:l.showMobileMenu,login:l.openLogin},null,8,["onHandleMobileMenu","onShowLogin","showMobile","login"]),(0,a.Wm)(m),(0,a.Wm)(g)],64)):(0,a.kq)("",!0),(0,a._)("span",{class:"cursor-pointer fixed bottom-[10%] right-[5%] bg-orange text-bold text-xl text-white p-4 px-6 opacity-60 rounded-full hover:opacity-100",onClick:t[0]||(t[0]=t=>e.$refs.header.scrollIntoView({behavior:"smooth"}))},i)],2)],2)}var c=o.p+"img/logo-blue.4e3e824c.png";const u=e=>((0,a.dD)("data-v-85e4eadc"),e=e(),(0,a.Cn)(),e),d={ref:"header",class:"it-header-menu relative bg-white"},m={key:0,class:"flex justify-end gap-x-6 m-auto w-90x100 py-3"},g=u((()=>(0,a._)("i",{class:"fa fa-user"},null,-1))),p=u((()=>(0,a._)("i",{class:"fas fa-cogs text-xl"},null,-1))),f=u((()=>(0,a._)("i",{class:"fas fa-sign-out-alt text-xl"},null,-1))),h=[f],b={key:1,class:"grid grid-cols-3 py-4"},w={class:"flex justify-center items-center"},v=u((()=>(0,a._)("img",{src:c,class:"w-2/6 m-auto",alt:"logo"},null,-1))),y={class:"flex justify-center items-center"},x=u((()=>(0,a._)("li",null,"quienes somos",-1))),k={key:0},_={key:1},L={key:2,class:"relative flex flex-row justify-around p-3 text-4xl"},C=u((()=>(0,a._)("i",{class:"fas fa-bars"},null,-1))),M=[C],S=u((()=>(0,a._)("i",{class:"fas fa-times"},null,-1))),Z=[S],D={class:"self-center"},I=u((()=>(0,a._)("img",{src:c,class:"w-2/5 ml-auto",alt:"logo"},null,-1)));function $(e,t,o,r,i,l){const c=(0,a.up)("router-link"),u=(0,a.up)("BreadCrumb"),f=(0,a.up)("login-form");return(0,a.wg)(),(0,a.iD)("header",d,[i.isLogged?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("span",null,[g,(0,a.Uk)(" "+(0,s.zw)(i.user_name),1)]),i.isLogged?((0,a.wg)(),(0,a.j4)(c,{key:0,to:{name:"Admin"}},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0),i.isLogged?((0,a.wg)(),(0,a.iD)("a",{key:1,href:"javascript:void(0)",type:"button",onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},h)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),i.showNavMobile?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("nav",b,[(0,a._)("ul",w,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})])]),(0,a._)("figure",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a._)("ul",y,[x,i.isLogged?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",k,[(0,a._)("button",{type:"button",class:"uppercase font-bold",onClick:t[1]||(t[1]=(...e)=>l.loginForm&&l.loginForm(...e))},"iniciar sesión")])),i.isLogged?((0,a.wg)(),(0,a.iD)("li",_,[(0,a._)("button",{type:"button",class:"uppercase font-bold",onClick:t[2]||(t[2]=(...e)=>l.logout&&l.logout(...e))},"cerrar sesión")])):(0,a.kq)("",!0)])])),(0,a.Wm)(u),(0,a.wy)((0,a.Wm)(f,{isMobile:l.isMobile,logout:i.isLogged,onCloseLogin:t[3]||(t[3]=e=>l.loginForm(!1)),onLogged:l.updClientStatus,class:"absolute top-1/2 z-10 right-2%"},null,8,["isMobile","logout","onLogged"]),[[n.F8,o.login]]),i.showNavMobile?((0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("button",{onClick:t[4]||(t[4]=(...e)=>l.showMobileMenu&&l.showMobileMenu(...e))},[(0,a.wy)((0,a._)("span",null,M,512),[[n.F8,!l.isMobile]]),(0,a.wy)((0,a._)("span",null,Z,512),[[n.F8,l.isMobile]])]),(0,a._)("figure",D,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[I])),_:1})])])):(0,a.kq)("",!0)],512)}o(7658);const P=e=>((0,a.dD)("data-v-53ce4adb"),e=e(),(0,a.Cn)(),e),A={class:"login-form rounded-2xl md:w-3/12 w-11/12 p-6 border"},U=P((()=>(0,a._)("i",{class:"fas fa-times"},null,-1))),T=[U],j={class:"flex flex-col gap-y-4"},F={class:"flex flex-col items-start gap-y-1"},N=P((()=>(0,a._)("label",{class:"pl-2",for:"user"},"Email",-1))),O={class:"relative flex flex-col items-start gap-y-1"},B=P((()=>(0,a._)("label",{class:"pl-2",for:"pass"},"Contreña",-1))),R=["type"],E=P((()=>(0,a._)("i",{class:"fas fa-eye-slash"},null,-1))),W=[E],q=P((()=>(0,a._)("i",{class:"fas fa-eye"},null,-1))),z=[q],H={class:"flex flex-col items-center gap-y-3"},K={class:"bg-red rounded-xl text-white p-1"},V=P((()=>(0,a._)("i",{class:"fa fa-exclamation-triangle p-1"},null,-1)));function Q(e,t,o,r,i,l){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("button",{type:"button",class:"absolute top-8px right-8%",onClick:t[0]||(t[0]=(...e)=>l.closeLogin&&l.closeLogin(...e))},T),(0,a._)("form",j,[(0,a._)("div",F,[N,(0,a.wy)((0,a._)("input",{type:"text",id:"user",name:"user","onUpdate:modelValue":t[1]||(t[1]=e=>i.user=e),class:"bg-transparent border-2 w-full rounded-4xl text-xl px-2"},null,512),[[n.nr,i.user]])]),(0,a._)("div",O,[B,(0,a.wy)((0,a._)("input",{id:"pass",name:"pass","onUpdate:modelValue":t[2]||(t[2]=e=>i.pass=e),type:i.showpass?"text":"password",class:"bg-transparent border-2 w-full rounded-4xl text-xl px-2"},null,8,R),[[n.YZ,i.pass]]),(0,a.wy)((0,a._)("button",{class:"absolute top-2rem right-1rem",type:"button",onClick:t[3]||(t[3]=e=>i.showpass=!i.showpass)},W,512),[[n.F8,!i.showpass]]),(0,a.wy)((0,a._)("button",{class:"absolute top-2rem right-1rem",type:"button",onClick:t[4]||(t[4]=e=>i.showpass=!i.showpass)},z,512),[[n.F8,i.showpass]])]),(0,a._)("div",H,[(0,a.wy)((0,a._)("small",K,[V,(0,a.Uk)(" "+(0,s.zw)(i.error_message),1)],512),[[n.F8,i.is_error]]),(0,a.Wm)(c,{class:"text-lightBlue underline",to:{name:"ForgotPassword"},onClick:l.closeLogin},{default:(0,a.w5)((()=>[(0,a.Uk)("Olvide mi contraseña")])),_:1},8,["onClick"]),(0,a._)("button",{type:"submit",class:(0,s.C_)([{"cursor-not-allowed":l.isLoggued},"border border-orange bg-orange rounded-3xl py-2 px-16"]),onClick:t[5]||(t[5]=(...e)=>l.login&&l.login(...e))},"Iniciar sesión",2),(0,a._)("button",{type:"button",onClick:t[6]||(t[6]=(...e)=>l.newSubcribe&&l.newSubcribe(...e)),class:"border border-orange bg-transparent rounded-3xl text-orange py-2 px-16"},"Registrarse")])])])}var Y=o(809),J=o(5848),G={props:{isMobile:{default:!1},logout:{default:!1}},name:"LoginForm",data(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,error_message:"Error de credenciales."}},watch:{logout(){this.disabledLogin=!1}},computed:{isLoggued(){return console.log(Y.Z.isClientLogged()),!!Y.Z.isClientLogged()&&(this.$emit("logged",!0),!0)}},methods:{closeLogin(){this.$emit("closeLogin",!1)},async login(e){e.preventDefault(),this.isLoggued||J.Z.login(this.user,this.pass).then((e=>{e.logged?(this.closeLogin(),localStorage.setItem("user_msg",e.message),this.$emit("logged",!0)):(this.error_message=e.message,this.is_error=!0,setTimeout((()=>{this.is_error=!1}),3e3))}))},newSubcribe(){"/NewClient"!=this.$route.fullPath&&this.$router.push({name:"NewClient"}),this.$emit("closeLogin",!1)}}},X=o(89);const ee=(0,X.Z)(G,[["render",Q],["__scopeId","data-v-53ce4adb"]]);var te=ee;const oe={key:0,class:"bg-white pt-20 pb-5","aria-label":"Breadcrumb"},ne={class:"inline-flex items-center space-x-1 md:space-x-3"},ae={class:"flex items-center"},se=(0,a._)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),re={class:"flex items-center"},ie=["innerHTML"],le={key:1,class:"ml-1 text-sm text-blue font-DIN-Bold md:ml-2"};function ce(e,t,o,r,i,l){const c=(0,a.up)("router-link");return l.breadcrumbs.length>0?((0,a.wg)(),(0,a.iD)("nav",oe,[(0,a._)("ol",ne,[(0,a._)("li",ae,[(0,a.Wm)(c,{to:"/",class:"font-DIN-Light inline-flex items-center text-sm text-blue hover:font-DIN-Bold"},{default:(0,a.w5)((()=>[se,(0,a.Uk)(" Home ")])),_:1})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.breadcrumbs,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("div",re,[(0,a._)("span",{innerHTML:i.join},null,8,ie),t+1<l.breadcrumbs.length?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"font-DIN-Light ml-1 text-sm text-blue hover:font-DIN-Bold md:ml-2",to:e.link},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.text),1)])),_:2},1032,["to"])):(0,a.kq)("",!0),t+1==l.breadcrumbs.length?((0,a.wg)(),(0,a.iD)("span",le,(0,s.zw)(e.text),1)):(0,a.kq)("",!0)])])))),128)),(0,a.wy)((0,a._)("li",null,null,512),[[n.F8,e.results]])])])):(0,a.kq)("",!0)}var ue={name:"BreadCrumb",data(){return{join:'<svg aria-hidden="true" class="w-6 h-6 text-lightGray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>',breadcrumb:[]}},created(){},computed:{breadcrumbs(){let e=[];const t=Object.keys(this.$route.params).length>0;return!t&&"breadcrumb"in this.$route.meta?e.push(this.$route.meta.breadcrumb):t&&"breadcrumb"in this.$route.meta&&(e=this.$route.meta.breadcrumb(this.$route.params)),e}}};const de=(0,X.Z)(ue,[["render",ce]]);var me=de,ge={name:"HeaderComp",props:{login:{default:!1},showMobile:{default:!1}},components:{LoginForm:te,BreadCrumb:me},data(){return{openMenu:!1,showNavMobile:!1,isLogged:!1,user_name:""}},created(){this.handleMobileView()},watch:{isLogged(){this.user_name=this.isLogged?localStorage.getItem("user"):""},showMobile(e){this.openMenu=e}},computed:{isMobile(){return this.showMobile}},methods:{handleMobileView(){this.showNavMobile=window.innerWidth<=991},showMobileMenu(){this.showMenu=!this.showMenu,this.$emit("handleMobileMenu",this.showMenu)},updClientStatus(e){this.isLogged=e},loginForm(e=!0){this.showMenu=!this.showMenu,this.$emit("showLogin",e)},async logout(){try{await Y.Z.logout(),this.isLogged=!1,"/"!=this.$route.fullPath&&this.$router.push("/")}catch(e){console.log(e)}}}};const pe=(0,X.Z)(ge,[["render",$],["__scopeId","data-v-85e4eadc"]]);var fe=pe;const he=e=>((0,a.dD)("data-v-f1f19dac"),e=e(),(0,a.Cn)(),e),be={class:"z-0 flex flex-col px-4 pt-10 pb-4 mt-auto"},we={class:"flex flex-col gap-6 text-white md:flex-row"},ve={class:"flex flex-col items-center order-1 gap-5 py-3 md:w-3/12 md:order-1 justify-evenly sm:py-0"},ye=["src"],xe=(0,a.uE)('<ul class="flex flex-row justify-center gap-6 p-2 text-3xl social-media sm:justify-end" data-v-f1f19dac><li class="flex items-center rounded-full bg-white text-darkBlue px-[6px]" data-v-f1f19dac><a href="https://instagram.com/iris_travel_group?igshid=YmMyMTA2M2Y=" data-v-f1f19dac><i class="fab fa-instagram" data-v-f1f19dac></i></a></li><li class="flex items-center rounded-full bg-white text-darkBlue px-[10px]" data-v-f1f19dac><a href="https://www.facebook.com/iristravelgroupUSA?mibextid=LQQJ4d" data-v-f1f19dac><i class="fab fa-facebook-f" data-v-f1f19dac></i></a></li><li class="flex items-center rounded-full bg-white text-darkBlue px-[6px]" data-v-f1f19dac><a href="https://wa.me/17868006595" data-v-f1f19dac><i class="fab fa-whatsapp" data-v-f1f19dac></i></a></li></ul>',1),ke={class:"flex flex-col order-3 gap-4 md:w-2/12 md:order-1 md:text-left md:border-l-2 md:px-6"},_e=he((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"soporte",-1))),Le={class:"text-base lg:text-xl"},Ce={class:"flex flex-col order-4 gap-4 md:order-1 md:text-left md:border-l-2 md:px-6"},Me=he((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"Ubicacion",-1))),Se={class:"text-base lg:text-xl"},Ze={href:"https://goo.gl/maps/P76yQdQ7y7BYijwv9"},De={class:"flex flex-col order-2 gap-4 md:w-2/12 md:order-1 md:text-left md:border-l-2 md:px-6"},Ie=he((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"contacto",-1))),$e={class:"text-base md:text-xl"},Pe={class:"py-6 mx-auto text-white"};function Ae(e,t,o,n,r,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",be,[(0,a._)("div",we,[(0,a._)("figure",ve,[(0,a._)("img",{src:r.logo_img,class:"w-2/6 m-auto sm:m-0",alt:"logo"},null,8,ye),xe]),(0,a._)("div",ke,[_e,(0,a._)("ul",Le,[(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"About"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Quienes Somos")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"TermsAndPolicy"},target:"_blank"},{default:(0,a.w5)((()=>[(0,a.Uk)("Términos y políticas")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})])])]),(0,a._)("div",Ce,[Me,(0,a._)("div",Se,[(0,a._)("a",Ze,[(0,a._)("pre",null,(0,s.zw)(r.dir),1)])])]),(0,a._)("div",De,[Ie,(0,a._)("div",$e,[(0,a._)("pre",null,(0,s.zw)(r.phones),1)])])]),(0,a._)("div",Pe,[(0,a._)("small",null,(0,s.zw)(r.copyright),1)])])}var Ue=o(86),Te=o(3249),je={name:"FooterComp",data(){return{logo_img:Ue.Z.gallery_url+"general/logo/logo-white.png",dir:"",phones:"",copyright:""}},created(){Te.Z.getTexts({data:["direccion","contact-phone","copyright"]}).then((e=>{e&&(this.dir=e.filter((e=>"direccion"==e.keyword))[0].description,this.phones=e.filter((e=>"contact-phone"==e.keyword))[0].description,this.copyright=e.filter((e=>"copyright"==e.keyword))[0].description)}))}};const Fe=(0,X.Z)(je,[["render",Ae],["__scopeId","data-v-f1f19dac"]]);var Ne=Fe;const Oe=e=>((0,a.dD)("data-v-6130ea62"),e=e(),(0,a.Cn)(),e),Be={class:"absolute"},Re={class:"flex flex-col items-start justify-center p-4"},Ee=Oe((()=>(0,a._)("li",null,"Menú",-1)));function We(e,t,o,n,s,r){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",Be,[(0,a._)("ul",Re,[Ee,(0,a._)("li",null,[(0,a.Wm)(i,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:{name:"About"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Quienes Somos")])),_:1})]),(0,a._)("li",null,[(0,a._)("button",{class:"uppercase",type:"button",onClick:t[0]||(t[0]=(...e)=>r.loginForm&&r.loginForm(...e))},"iniciar sesión")])])])}var qe={name:"NavigationMobile",methods:{loginForm(){this.$emit("showLogin",!0)}}};const ze=(0,X.Z)(qe,[["render",We],["__scopeId","data-v-6130ea62"]]);var He=ze,Ke={components:{Header:fe,Footer:Ne,NavigationMobile:He},data(){return{openLogin:!1,showMobileMenu:!1,api_connected:!1}},created(){Y.Z.login().then((()=>{this.api_connected=!0}))},methods:{showMobile(e){this.showMobileMenu=e},showLogin(e){this.showMobileMenu=!1,this.openLogin=e}}};const Ve=(0,X.Z)(Ke,[["render",l]]);var Qe=Ve,Ye=o(2483);const Je=[{path:"/",name:"Home",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(443)]).then(o.bind(o,1069))},{path:"/acerca-de",name:"About",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(443)]).then(o.bind(o,8928)),meta:{breadcrumb:{text:"Acerca de",link:"/acerca-de"}}},{path:"/destinos/:keyword",name:"SinglePole",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(161)]).then(o.bind(o,1161)),meta:{breadcrumb({keyword:e}){return[{text:`Destino ${e}`,link:`/destinos/${e}`}]}}},{path:"/destinos/:poleKey/:productKey",name:"Products",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(145),o.e(473)]).then(o.bind(o,4487)),meta:{breadcrumb({poleKey:e,productKey:t}){return[{text:`Destino ${e}`,link:`/destinos/${e}`},{text:`Producto ${t}`,link:`/destinos/${e}/${t}`}]}}},{path:"/destinos/:poleKey/:productKey/:keyword",name:"HotelDetail",component:()=>Promise.all([o.e(793),o.e(950)]).then(o.bind(o,9950)),meta:{breadcrumb({poleKey:e,productKey:t,keyword:o}){return[{text:`Destino ${e}`,link:`/destinos/${e}`},{text:`Producto ${t}`,link:`/destinos/${e}/${t}`},{text:`${o}`,link:`/destinos/${e}/${t}/${o}`}]}}},{path:"/resultado-de-busqueda",name:"SearchResult",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(145),o.e(602)]).then(o.bind(o,2335)),meta:{breadcrumb:{text:"Resultados",link:"/resultado-de-busqueda"}}},{path:"/terminos-politicas",name:"TermsAndPolicy",component:()=>Promise.all([o.e(793),o.e(810),o.e(87),o.e(972)]).then(o.bind(o,8972)),meta:{breadcrumb:{text:"Política de privacidad",link:"/terminos-politicas"}}},{path:"/contactenos",name:"Contact",component:()=>o.e(345).then(o.bind(o,8345)),meta:{breadcrumb:{text:"Contactenos",link:"/contactenos"}}},{path:"/envio-de-solicitud",name:"SendRequest",component:()=>Promise.all([o.e(793),o.e(66)]).then(o.bind(o,2066)),meta:{breadcrumb:{text:"Solicitud",link:"/envio-de-solicitud"}}},{path:"/usuario/suscripcion",name:"NewClient",component:()=>Promise.all([o.e(810),o.e(190)]).then(o.bind(o,7190)),meta:{breadcrumb:{text:"Suscripcion",link:"/usuario/suscripcion"}}},{path:"/usuario/olvide-mi-clave",name:"ForgotPassword",component:()=>o.e(688).then(o.bind(o,7524)),meta:{breadcrumb:{text:"Clave olvidada",link:"/suario/olvide-mi-clave"}}},{path:"/usuario/olvide-mi-clave/:token",name:"ResetPassword",component:()=>o.e(688).then(o.bind(o,7524))},{path:"/verificacion-de-cuenta/:token",name:"VerifyUser",component:()=>o.e(643).then(o.bind(o,7643))},{path:"/admin",name:"Admin",component:()=>Promise.all([o.e(810),o.e(195)]).then(o.bind(o,9195))},{path:"/admin/:CrudKey",name:"CrudKey",component:()=>Promise.all([o.e(810),o.e(195)]).then(o.bind(o,9195))},{path:"/404",name:"NotFound",component:()=>o.e(757).then(o.bind(o,2757))}],Ge=(0,Ye.p7)({history:(0,Ye.PO)("/"),routes:Je});var Xe=Ge;(0,n.ri)(Qe).use(Xe).mount("#app")},3249:function(e,t,o){"use strict";var n=o(809);const a={async getText(e){
//! Obtiene los datos x un ID
try{const t=await n.Z.checkLogin(`/text/by-key/${e}`);if(t)return"200"==t.status?t.data:[]}catch(t){console.log(t)}},async getTexts(e){
//! Obtiene los datos x un ID
try{e.auth="bearer";const t=await n.Z.checkLogin("/text/by-keys",e,"post");if(t)return"200"==t.status?t.data:[]}catch(t){console.log(t)}}};t["Z"]=a},809:function(e,t,o){"use strict";var n=o(6943),a=o(1598),s=o(8082),r=o.n(s),i=o(86);const l=i.Z.api_dotcom;let c={baseURL:`${l}`,auth:{username:"api@admin.com",password:"IT_api"}};const u=n.Z.create(c),d={currentUserData:[],async login(){if(!sessionStorage.getItem("token"))try{const{status:e,data:t}=await u.get("/user-api/login");if(200===e)return sessionStorage.setItem("token",t.token),t.token}catch(e){return{success:!1,errors:e}}},async logout(){try{const e=await this.checkLogin("/clients/logout",{auth:"bearer"});200==e.status&&(sessionStorage.setItem("token",e.data.token),d.destroyLocalUserData())}catch(e){console.log("problemas al desloguearse"),console.log(e)}},isClientLogged(){if(sessionStorage.getItem("token")){const e=(0,a.Z)(sessionStorage.getItem("token"));return!!e.client}return!1},async checkLogin(e,t={},o="get"){const a={url:e,method:o},s=sessionStorage.getItem("token");if(t.data&&(a.data=t.data),t.params&&(a.params=t.params),sessionStorage.getItem("token")){if("bearer"==t.auth){let n=null;return n="get"==o?this.getAxiosToken(s,c.baseURL+e):this.otherAxiosToken(s,c.baseURL+e,t,o),n}return n.Z.get(c.baseURL+e,{auth:{username:"api@admin.com",password:"IT_api"}}).then((e=>e)).catch((e=>e))}await this.login(),await this.checkLogin()},async checkLoginImage(e,t={},o){const n=sessionStorage.getItem("token");if(sessionStorage.getItem("token")){let a=null;return a=this.otherAxiosToken(n,c.baseURL+e,t,o),a}this.login(),this.checkLogin()},async otherAxiosToken(e,t,o,a){try{const s="post"==a?await n.Z.post(t,o,{headers:{Authorization:"Bearer "+e}}):await n.Z.put(t,o,{headers:{Authorization:"Bearer "+e}});return s}catch(s){return s}},async getAxiosToken(e,t){return n.Z.get(t,{headers:{Authorization:"Bearer "+e}}).then((e=>e)).catch((e=>e))},getClientToken(){return this.decodeToken(sessionStorage.getItem("token"))},decodeToken(e){return(0,a.Z)(e)},createLocalUserData(){const e=this.getClientToken().client;localStorage.setItem("id",e.id),localStorage.setItem("user",e.name),localStorage.setItem("roles",e.roles),localStorage.setItem("email",e.email),"margin"in e&&localStorage.setItem("margin",JSON.stringify(e.margin))},destroyLocalUserData(){localStorage.clear()},isLogged(){const e=this.getClientToken();return"client"in e},validateRole(e,t=!1){if(!this.isClientLogged())return this.destroyLocalUserData(),!1;{const o=localStorage.getItem("roles").split(",");if(!t&&o.includes("ROLE_SuperAdmin"))return!0;if(void 0!=e)for(let t of e)if(o.includes(t))return!0}return!1},encryptPass(e){const t=sessionStorage.getItem("token").slice(-10);let o=null,n=r().lib.WordArray.random(16);return t&&(o=r().AES.encrypt(e,t,n).toString()),o}};t["Z"]=d},5848:function(e,t,o){"use strict";o(7658);var n=o(809);const a={async login(e,t){try{t=n.Z.encryptPass(t);const{status:o,data:a}=await n.Z.checkLogin(`/clients/login?email=${e}&password=${t}`,{auth:"bearer"});if(200==o)return"OK"==a.status?(sessionStorage.setItem("token",a.token),n.Z.createLocalUserData(),{message:a.msg,error:!1,logged:!0}):{message:a.msg,error:!0,logged:!1};if(400==o)return{message:a.message,error:!0,logged:!1};console.log("Poblemas al loguearse")}catch(o){console.log(o)}},getList(){try{return n.Z.checkLogin("/clients").then((e=>{let t=[];if(200==e.status)if(n.Z.validateRole(["ROLE_Admin"]))for(let o of e.data)t.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent});else if(n.Z.validateRole(["ROLE_Comercial"]))for(let o of e.data)o.email==localStorage.getItem("email")&&t.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent});else n.Z.validateRole(["ROLE_Agency"])&&(t=this.validateRoleUser(e.data));return t}))}catch(e){console.log(e)}},async addUpdClient(e,t=!0){try{e.password=n.Z.encryptPass(e.password),e.auth="bearer";const{status:o,data:a}=t?await n.Z.checkLogin("/clients/create",e,"post"):await n.Z.checkLogin("/clients/upd",e,"put");if(200==o)return a}catch(o){console.log(o.response)}return!1},async addUpdVendor(e){try{e.password=n.Z.encryptPass(e.password),e.auth="bearer";const{status:t,data:o}=await n.Z.checkLogin("/clients/add-upd/vendor",e,"post");if(200==t)return o}catch(t){console.log(t.response)}return!1},async getClient(e){try{const{status:t,data:o}=await n.Z.checkLogin(`/clients/${e}`,{auth:"bearer"});if(200==t)return console.log(o.first_name),o}catch(t){console.log(t.response)}},async getVendors(){try{const{status:e,data:t}=await n.Z.checkLogin("/clients/vendors",{auth:"bearer"});if(200==e)return t}catch(e){console.log(e.response)}},async delete(e){const t={auth:"bearer",ids:typeof e==Array?e:[e]};try{const{status:e}=await n.Z.checkLogin("/clients/delete",t,"post");if(200==e)return n.Z.validateRole("ROLE_Agency")?await this.getVendors():await this.getList()}catch(o){
//! Fail 
console.log(o.response)}},validateRoleUser(e){const t=localStorage.getItem("email"),o=e.filter((e=>e.email==t)),n=[];n.push({id:o[0].id,name:o[0].name,email:o[0].email,active:!!o[0].active,verify:!!o[0].verify,agent:!!o[0].agent,vendor:!1});for(let a of e)o[0].id==a.parent&&n.push({id:a.id,name:a.name,email:a.email,active:!!a.active,verify:!!a.verify,agent:!!a.agent,vendor:!0});return n},async verifyUser(e){try{const{status:t,data:o}=await n.Z.checkLogin("/verify-user",{token:e,auth:"bearer"},"post");if(200==t)return o}catch(t){console.log(t.response)}}};t["Z"]=a},2480:function(){}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+(443===e?"about":e)+"."+{66:"cb2cca26",87:"104d9ff7",145:"5672dacc",161:"c31ecdaa",190:"8734a1a1",195:"53334f7c",345:"6111f473",443:"d56915d7",473:"9f798180",602:"e18e5e18",643:"99e2d2da",688:"47de777b",757:"d050ee27",793:"5ff8a31c",810:"d6e86df6",950:"06a40be2",972:"93755774"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{66:"d3d4d86e",87:"33b65e53",161:"9cf81cbd",190:"d857819f",195:"12aba309",443:"ccd7ef16",473:"d7d26309",602:"47668883",688:"0a596214",950:"0632424c",972:"47adaac0"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="iristravel_v3:";o.l=function(n,a,s,r){if(e[n])e[n].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[a];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(g);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=r,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){a=r[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=function(n){return new Promise((function(a,s){var r=o.miniCssF(n),i=o.p+r;if(t(r,i))return a();e(n,i,null,a,s)}))},a={143:0};o.f.miniCss=function(e,t){var o={66:1,87:1,161:1,190:1,195:1,443:1,473:1,602:1,688:1,950:1,972:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=s);var r=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(t&&t(n);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(986)}));n=o.O(n)})();
//# sourceMappingURL=app.453f75df.js.map