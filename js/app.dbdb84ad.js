(function(){var e={86:function(e,t){"use strict";t["Z"]={api:"http://localhost:3000",api_dotcom:"https://api.iristravelgroup.com",pass:"d00632e42209247297f60b5dff458f88",gallery_url:"https://iristravel.s3.us-east-2.amazonaws.com/images/"}},8481:function(e,t,o){"use strict";var n=o(9242),a=o(3396),s=o(7139);const r=(0,a._)("i",{class:"fas fa-arrow-up"},null,-1),i=[r];function l(e,t,o,r,l,c){const u=(0,a.up)("navigation-mobile"),d=(0,a.up)("Header"),m=(0,a.up)("router-view"),g=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",{id:"app",class:(0,s.C_)(["relative",{"bg-blue_1":l.showMobileMenu}])},[(0,a.wy)((0,a.Wm)(u,{onShowLogin:c.showLogin},null,8,["onShowLogin"]),[[n.F8,l.showMobileMenu]]),(0,a._)("main",{ref:"header",class:(0,s.C_)(["flex flex-col h-full min-h-screen rounded-t-2xl sm:rounded-t-0",{"menu-mobile-open":l.showMobileMenu}])},[l.api_connected?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Wm)(d,{onHandleMobileMenu:c.showMobile,onShowLogin:c.showLogin,showMobile:l.showMobileMenu,login:l.openLogin},null,8,["onHandleMobileMenu","onShowLogin","showMobile","login"]),(0,a.Wm)(m),(0,a.Wm)(g)],64)):(0,a.kq)("",!0),(0,a._)("span",{class:"cursor-pointer fixed bottom-[5%] right-[5%] bg-orange_1 text-bold text-xl text-white p-4 px-6 opacity-60 rounded-full hover:opacity-100",onClick:t[0]||(t[0]=t=>e.$refs.header.scrollIntoView({behavior:"smooth"}))},i)],2)],2)}var c=o.p+"img/logo-blue.4e3e824c.png";const u=e=>((0,a.dD)("data-v-31726ae5"),e=e(),(0,a.Cn)(),e),d={ref:"header",class:"it-header-menu relative bg-white"},m={key:0,class:"flex justify-end gap-x-6 m-auto w-90x100 py-3"},g=u((()=>(0,a._)("i",{class:"fa fa-user"},null,-1))),h=u((()=>(0,a._)("i",{class:"fas fa-cogs text-xl"},null,-1))),p=u((()=>(0,a._)("i",{class:"fas fa-sign-out-alt text-xl"},null,-1))),f=[p],b={key:1,class:"grid grid-cols-3 py-4"},w={class:"flex justify-center items-center"},v=u((()=>(0,a._)("img",{src:c,class:"w-2/6 m-auto",alt:"logo"},null,-1))),y={class:"flex justify-center items-center"},_={key:0},x={key:1},k={key:2,class:"relative flex flex-row justify-around p-3 text-4xl"},L=u((()=>(0,a._)("i",{class:"fas fa-bars"},null,-1))),C=[L],M=u((()=>(0,a._)("i",{class:"fas fa-times"},null,-1))),S=[M],Z={class:"self-center"},I=u((()=>(0,a._)("img",{src:c,class:"w-2/5 ml-auto",alt:"logo"},null,-1)));function D(e,t,o,r,i,l){const c=(0,a.up)("router-link"),u=(0,a.up)("login-form"),p=(0,a.up)("BreadCrumb");return(0,a.wg)(),(0,a.iD)("header",d,[i.isLogged?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("span",null,[g,(0,a.Uk)(" "+(0,s.zw)(i.user_name),1)]),i.isLogged?((0,a.wg)(),(0,a.j4)(c,{key:0,to:{name:"Admin"}},{default:(0,a.w5)((()=>[h])),_:1})):(0,a.kq)("",!0),i.isLogged?((0,a.wg)(),(0,a.iD)("a",{key:1,href:"javascript:void(0)",type:"button",onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},f)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),i.showNavMobile?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("nav",b,[(0,a._)("ul",w,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})])]),(0,a._)("figure",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a._)("ul",y,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/acerca-de"},{default:(0,a.w5)((()=>[(0,a.Uk)("quienes somos")])),_:1})]),i.isLogged?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",_,[(0,a._)("button",{type:"button",class:"uppercase font-bold",onClick:t[1]||(t[1]=(...e)=>l.loginForm&&l.loginForm(...e))},"iniciar sesión")])),i.isLogged?((0,a.wg)(),(0,a.iD)("li",x,[(0,a._)("button",{type:"button",class:"uppercase font-bold",onClick:t[2]||(t[2]=(...e)=>l.logout&&l.logout(...e))},"cerrar sesión")])):(0,a.kq)("",!0)])])),(0,a.wy)((0,a.Wm)(u,{isMobile:l.isMobile,logout:i.isLogged,onCloseLogin:t[3]||(t[3]=e=>l.loginForm(!1)),onLogged:l.updClientStatus,class:"absolute top-1/2 z-10 right-2%"},null,8,["isMobile","logout","onLogged"]),[[n.F8,o.login]]),i.showNavMobile?((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("button",{onClick:t[4]||(t[4]=(...e)=>l.showMobileMenu&&l.showMobileMenu(...e))},[(0,a.wy)((0,a._)("span",null,C,512),[[n.F8,!l.isMobile]]),(0,a.wy)((0,a._)("span",null,S,512),[[n.F8,l.isMobile]])]),(0,a._)("figure",Z,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[I])),_:1})])])):(0,a.kq)("",!0),(0,a.Wm)(p)],512)}o(7658);const $=e=>((0,a.dD)("data-v-017452ec"),e=e(),(0,a.Cn)(),e),P={class:"login-form md:w-3/12 w-11/12 p-6 border"},A=$((()=>(0,a._)("i",{class:"fas fa-times"},null,-1))),U=[A],T={class:"flex flex-col gap-y-4"},F={class:"flex flex-col items-start gap-y-1"},N=$((()=>(0,a._)("label",{class:"pl-2",for:"user"},"Email",-1))),j={class:"relative flex flex-col items-start gap-y-1"},E=$((()=>(0,a._)("label",{class:"pl-2",for:"pass"},"Contreña",-1))),B=["type"],O=$((()=>(0,a._)("i",{class:"fas fa-eye-slash"},null,-1))),R=[O],W=$((()=>(0,a._)("i",{class:"fas fa-eye"},null,-1))),q=[W],z={class:"flex flex-col items-center gap-y-3"},H={class:"bg-red text-white p-1"},K=$((()=>(0,a._)("i",{class:"fa fa-exclamation-triangle p-1"},null,-1)));function V(e,t,o,r,i,l){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("button",{type:"button",class:"absolute top-8px right-8%",onClick:t[0]||(t[0]=(...e)=>l.closeLogin&&l.closeLogin(...e))},U),(0,a._)("form",T,[(0,a._)("div",F,[N,(0,a.wy)((0,a._)("input",{type:"text",id:"user",name:"user","onUpdate:modelValue":t[1]||(t[1]=e=>i.user=e),class:"bg-transparent border-2 w-full text-xl px-2"},null,512),[[n.nr,i.user]])]),(0,a._)("div",j,[E,(0,a.wy)((0,a._)("input",{id:"pass",name:"pass","onUpdate:modelValue":t[2]||(t[2]=e=>i.pass=e),type:i.showpass?"text":"password",class:"bg-transparent border-2 w-full text-xl px-2"},null,8,B),[[n.YZ,i.pass]]),(0,a.wy)((0,a._)("button",{class:"absolute top-2rem right-1rem",type:"button",onClick:t[3]||(t[3]=e=>i.showpass=!i.showpass)},R,512),[[n.F8,!i.showpass]]),(0,a.wy)((0,a._)("button",{class:"absolute top-2rem right-1rem",type:"button",onClick:t[4]||(t[4]=e=>i.showpass=!i.showpass)},q,512),[[n.F8,i.showpass]])]),(0,a._)("div",z,[(0,a.wy)((0,a._)("small",H,[K,(0,a.Uk)(" "+(0,s.zw)(i.error_message),1)],512),[[n.F8,i.is_error]]),(0,a.Wm)(c,{class:"text-light_blue_1 underline",to:{name:"ForgotPassword"},onClick:l.closeLogin},{default:(0,a.w5)((()=>[(0,a.Uk)("Olvide mi contraseña")])),_:1},8,["onClick"]),(0,a._)("button",{type:"submit",class:(0,s.C_)([{"cursor-not-allowed":l.isLoggued},"border border-orange_1 bg-orange_1 py-2 px-16"]),onClick:t[5]||(t[5]=(...e)=>l.login&&l.login(...e))},"Iniciar sesión",2),(0,a._)("button",{type:"button",onClick:t[6]||(t[6]=(...e)=>l.newSubcribe&&l.newSubcribe(...e)),class:"border border-orange_1 bg-transparent text-orange_1 py-2 px-16"},"Registrarse")])])])}var Q=o(809),Y=o(5848),J={props:{isMobile:{default:!1},logout:{default:!1}},name:"LoginForm",data(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,error_message:"Error de credenciales."}},watch:{logout(){this.disabledLogin=!1}},computed:{isLoggued(){return!!Q.Z.isClientLogged()&&(this.$emit("logged",!0),!0)}},methods:{closeLogin(){this.$emit("closeLogin",!1)},async login(e){e.preventDefault(),this.isLoggued||Y.Z.login(this.user,this.pass).then((e=>{e.logged?(this.closeLogin(),localStorage.setItem("user_msg",e.message),this.$emit("logged",!0)):(this.error_message=e.message,this.is_error=!0,setTimeout((()=>{this.is_error=!1}),8e3))})).catch((e=>{console.log(e.message),this.$swal({title:"Error",text:e.message,icon:"error",confirmButtonColor:"#3085d6"})}))},newSubcribe(){"/NewClient"!=this.$route.fullPath&&this.$router.push({name:"NewClient"}),this.$emit("closeLogin",!1)}}},G=o(89);const X=(0,G.Z)(J,[["render",V],["__scopeId","data-v-017452ec"]]);var ee=X;const te={key:0,class:"bg-white pt-20 pb-5","aria-label":"Breadcrumb"},oe={class:"inline-flex items-center space-x-1 md:space-x-3"},ne={class:"flex items-center"},ae=(0,a._)("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),se={class:"flex items-center"},re=["innerHTML"],ie={key:1,class:"ml-1 text-sm text-blue_1 font-DIN-Bold md:ml-2"};function le(e,t,o,r,i,l){const c=(0,a.up)("router-link");return l.breadcrumbs.length>0?((0,a.wg)(),(0,a.iD)("nav",te,[(0,a._)("ol",oe,[(0,a._)("li",ne,[(0,a.Wm)(c,{to:"/",class:"font-DIN-Light inline-flex items-center text-sm text-blue_1 hover:font-DIN-Bold"},{default:(0,a.w5)((()=>[ae,(0,a.Uk)(" Home ")])),_:1})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.breadcrumbs,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("div",se,[(0,a._)("span",{innerHTML:i.join},null,8,re),t+1<l.breadcrumbs.length?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"font-DIN-Light ml-1 text-sm text-blue_1 hover:font-DIN-Bold md:ml-2",to:e.link},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.text),1)])),_:2},1032,["to"])):(0,a.kq)("",!0),t+1==l.breadcrumbs.length?((0,a.wg)(),(0,a.iD)("span",ie,(0,s.zw)(e.text),1)):(0,a.kq)("",!0)])])))),128)),(0,a.wy)((0,a._)("li",null,null,512),[[n.F8,e.results]])])])):(0,a.kq)("",!0)}var ce={name:"BreadCrumb",data(){return{join:'<svg aria-hidden="true" class="w-6 h-6 text-light_gray_1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>',breadcrumb:[]}},created(){},computed:{breadcrumbs(){let e=[];const t=Object.keys(this.$route.params).length>0;return!t&&"breadcrumb"in this.$route.meta?e.push(this.$route.meta.breadcrumb):t&&"breadcrumb"in this.$route.meta&&(e=this.$route.meta.breadcrumb(this.$route.params)),e}}};const ue=(0,G.Z)(ce,[["render",le]]);var de=ue,me={name:"HeaderComp",props:{login:{default:!1},showMobile:{default:!1}},components:{LoginForm:ee,BreadCrumb:de},data(){return{openMenu:!1,showNavMobile:!1,isLogged:!1,user_name:""}},created(){this.handleMobileView()},watch:{isLogged(){this.user_name=this.isLogged?localStorage.getItem("user"):""},showMobile(e){this.openMenu=e}},computed:{isMobile(){return this.showMobile}},methods:{handleMobileView(){this.showNavMobile=window.innerWidth<=991},showMobileMenu(){this.showMenu=!this.showMenu,this.$emit("handleMobileMenu",this.showMenu)},updClientStatus(e){this.isLogged=e},loginForm(e=!0){this.showMenu=!this.showMenu,this.$emit("showLogin",e)},async logout(){try{await Q.Z.logout(),this.isLogged=!1,"/"!=this.$route.fullPath&&this.$router.push("/")}catch(e){console.log(e)}}}};const ge=(0,G.Z)(me,[["render",D],["__scopeId","data-v-31726ae5"]]);var he=ge;const pe=e=>((0,a.dD)("data-v-bc28032e"),e=e(),(0,a.Cn)(),e),fe={class:"z-0 flex flex-col px-4 pt-10 pb-4 mt-auto border-t border-white"},be={class:"flex flex-col gap-6 text-white md:flex-row"},we={class:"flex flex-col items-center order-1 gap-5 py-3 md:w-3/12 md:order-1 justify-evenly sm:py-0"},ve=["src"],ye=(0,a.uE)('<ul class="flex flex-row justify-center gap-6 p-2 text-3xl social-media sm:justify-end" data-v-bc28032e><li class="flex items-center rounded-full bg-white text-blue_1 px-[6px]" data-v-bc28032e><a href="https://instagram.com/iris_travel_group?igshid=YmMyMTA2M2Y=" data-v-bc28032e><i class="fab fa-instagram" data-v-bc28032e></i></a></li><li class="flex items-center rounded-full bg-white text-blue_1 px-[10px]" data-v-bc28032e><a href="https://www.facebook.com/iristravelgroupUSA?mibextid=LQQJ4d" data-v-bc28032e><i class="fab fa-facebook-f" data-v-bc28032e></i></a></li><li class="flex items-center rounded-full bg-white text-blue_1 px-[6px]" data-v-bc28032e><a href="https://wa.me/17868006595" data-v-bc28032e><i class="fab fa-whatsapp" data-v-bc28032e></i></a></li></ul>',1),_e={class:"flex flex-col order-3 gap-4 md:w-2/12 md:order-1 md:text-left md:border-l-2 md:px-6"},xe=pe((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"soporte",-1))),ke={class:"text-base lg:text-xl"},Le=pe((()=>(0,a._)("li",null,[(0,a._)("a",{href:"http://blog.iristravelgroup.com/",target:"_blank"},"Iristravel Group Blog")],-1))),Ce={class:"flex flex-col order-4 gap-4 md:order-1 md:text-left md:border-l-2 md:px-6"},Me=pe((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"Ubicacion",-1))),Se={class:"text-base lg:text-xl"},Ze={href:"https://goo.gl/maps/P76yQdQ7y7BYijwv9"},Ie={class:"break-words"},De={class:"flex flex-col order-2 gap-4 md:w-2/12 md:order-1 md:text-left md:border-l-2 md:px-6"},$e=pe((()=>(0,a._)("h3",{class:"hidden text-2xl uppercase font-DIN-Bold md:block"},"contacto",-1))),Pe={class:"text-base md:text-xl"},Ae={class:"py-6 mx-auto text-white"};function Ue(e,t,o,n,r,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",fe,[(0,a._)("div",be,[(0,a._)("figure",we,[(0,a._)("img",{src:r.logo_img,class:"w-2/6 m-auto sm:m-0",alt:"logo"},null,8,ve),ye]),(0,a._)("div",_e,[xe,(0,a._)("ul",ke,[(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"About"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Quienes Somos")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"TermsAndPolicy"},target:"_blank"},{default:(0,a.w5)((()=>[(0,a.Uk)("Términos y políticas")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})]),Le])]),(0,a._)("div",Ce,[Me,(0,a._)("div",Se,[(0,a._)("a",Ze,[(0,a._)("span",Ie,(0,s.zw)(r.dir),1)])])]),(0,a._)("div",De,[$e,(0,a._)("div",Pe,[(0,a._)("pre",null,(0,s.zw)(r.phones),1)])])]),(0,a._)("div",Ae,[(0,a._)("small",null,(0,s.zw)(r.copyright),1)])])}var Te=o(86),Fe=o(3249),Ne={name:"FooterComp",data(){return{logo_img:Te.Z.gallery_url+"general/logo/logo-white.png",dir:"",phones:"",copyright:""}},created(){Fe.Z.getTexts({data:["direccion","contact-phone","copyright"]}).then((e=>{e&&(this.dir=e.filter((e=>"direccion"===e.keyword))[0].description,this.phones=e.filter((e=>"contact-phone"===e.keyword))[0].description,this.copyright=e.filter((e=>"copyright"===e.keyword))[0].description)}))}};const je=(0,G.Z)(Ne,[["render",Ue],["__scopeId","data-v-bc28032e"]]);var Ee=je;const Be=e=>((0,a.dD)("data-v-50cc2b20"),e=e(),(0,a.Cn)(),e),Oe={class:"absolute"},Re={class:"flex flex-col items-start justify-center p-4"},We=Be((()=>(0,a._)("li",null,"Menú",-1)));function qe(e,t,o,n,s,r){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",Oe,[(0,a._)("ul",Re,[We,(0,a._)("li",null,[(0,a.Wm)(i,{to:{name:"Contact"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Contáctanos")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:{name:"About"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Quienes Somos")])),_:1})]),(0,a._)("li",null,[(0,a._)("button",{class:"uppercase",type:"button",onClick:t[0]||(t[0]=(...e)=>r.loginForm&&r.loginForm(...e))},"iniciar sesión")])])])}var ze={name:"NavigationMobile",methods:{loginForm(){this.$emit("showLogin",!0)}}};const He=(0,G.Z)(ze,[["render",qe],["__scopeId","data-v-50cc2b20"]]);var Ke=He,Ve={components:{Header:he,Footer:Ee,NavigationMobile:Ke},data(){return{openLogin:!1,showMobileMenu:!1,api_connected:!1}},created(){Q.Z.login().then((()=>{this.api_connected=!0}))},methods:{showMobile(e){this.showMobileMenu=e},showLogin(e){this.showMobileMenu=!1,this.openLogin=e}}};const Qe=(0,G.Z)(Ve,[["render",l]]);var Ye=Qe,Je=o(6553),Ge=o.n(Je),Xe=o(2483);const et=[{path:"/",name:"Home",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(177)]).then(o.bind(o,9735))},{path:"/acerca-de",name:"About",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(443)]).then(o.bind(o,6818)),meta:{breadcrumb:{text:"Acerca de",link:"/acerca-de"}}},{path:"/destinos/:keyword",name:"SinglePole",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(971)]).then(o.bind(o,9566)),meta:{breadcrumb({keyword:e}){return[{text:`Destino ${e}`,link:`/destinos/${e}`}]}}},{path:"/destinos/:poleKey/:productKey/",name:"ProductsListWrapper",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(284),o.e(297)]).then(o.bind(o,7474)),meta:{breadcrumb({poleKey:e,productKey:t}){return[{text:`Destino ${e}`,link:`/destinos/${e}`},{text:`Producto ${t}`,link:`/destinos/${e}/${t}`}]}}},{path:"/destinos/:poleKey/:productKey/:keyword",name:"ProductDetail",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(688)]).then(o.bind(o,7916)),meta:{breadcrumb({poleKey:e,productKey:t,keyword:o}){return[{text:`Destino ${e}`,link:`/destinos/${e}`},{text:`Producto ${t}`,link:`/destinos/${e}/${t}`},{text:`${o}`,link:`/destinos/${e}/${t}/${o}`}]}}},{path:"/resultado-de-busqueda",name:"SearchResult",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(284),o.e(393)]).then(o.bind(o,7371)),meta:{breadcrumb:{text:"Resultados",link:"/resultado-de-busqueda"}}},{path:"/terminos-politicas",name:"TermsAndPolicy",component:()=>Promise.all([o.e(810),o.e(274),o.e(719),o.e(351),o.e(929)]).then(o.bind(o,5073)),meta:{breadcrumb:{text:"Política de privacidad",link:"/terminos-politicas"}}},{path:"/contactenos",name:"Contact",component:()=>o.e(631).then(o.bind(o,3899)),meta:{breadcrumb:{text:"Contactenos",link:"/contactenos"}}},{path:"/envio-de-solicitud",name:"SendRequest",component:()=>Promise.all([o.e(810),o.e(274),o.e(957)]).then(o.bind(o,739)),meta:{breadcrumb:{text:"Solicitud",link:"/envio-de-solicitud"}}},{path:"/usuario/suscripcion",name:"NewClient",component:()=>Promise.all([o.e(810),o.e(855)]).then(o.bind(o,4855)),meta:{breadcrumb:{text:"Suscripcion",link:"/usuario/suscripcion"}}},{path:"/usuario/olvide-mi-clave",name:"ForgotPassword",component:()=>o.e(827).then(o.bind(o,2378)),meta:{breadcrumb:{text:"Clave olvidada",link:"/suario/olvide-mi-clave"}}},{path:"/usuario/olvide-mi-clave/:token",name:"ResetPassword",component:()=>o.e(827).then(o.bind(o,2378))},{path:"/verificacion-de-cuenta/:token",name:"VerifyUser",component:()=>o.e(756).then(o.bind(o,4756))},{path:"/admin",name:"Admin",component:()=>Promise.all([o.e(810),o.e(328)]).then(o.bind(o,9141))},{path:"/admin/:CrudKey",name:"CrudKey",component:()=>Promise.all([o.e(810),o.e(328)]).then(o.bind(o,9141))},{path:"/404",name:"NotFound",component:()=>o.e(152).then(o.bind(o,4233))}],tt=(0,Xe.p7)({history:(0,Xe.PO)("/"),routes:et});tt.beforeEach(((e,t,o)=>{0===e.matched.length?o({name:"NotFound"}):o()}));var ot=tt,nt=o(1020);const at=(0,nt.WB)(),st=(0,n.ri)(Ye);st.use(ot).use(Ge()).use(at).mount("#app")},3249:function(e,t,o){"use strict";var n=o(809);const a={async getText(e){
//! Obtiene los datos x un ID
try{const t=await n.Z.checkLogin(`/text/by-key/${e}`);if(t)return"200"==t.status?t.data:[]}catch(t){console.log(t)}},async getTexts(e){
//! Obtiene los datos x un ID
try{e.auth="bearer";const t=await n.Z.checkLogin("/text/by-keys",e,"post");if(t)return"200"==t.status?t.data:[]}catch(t){console.log(t)}}};t["Z"]=a},809:function(e,t,o){"use strict";var n=o(6943),a=o(1598),s=o(8082),r=o.n(s),i=o(86);const l=i.Z.api_dotcom;let c={baseURL:`${l}`,auth:{username:"api@admin.com",password:"IT_api"}};const u=n.Z.create(c),d={currentUserData:[],async login(){if(!sessionStorage.getItem("token"))try{const{status:e,data:t}=await u.get("/user-api/login");if(200===e)return sessionStorage.setItem("token",t.token),t.token}catch(e){return{success:!1,errors:e}}},async logout(){try{const e=await this.checkLogin("/clients/logout",{auth:"bearer"});200===e.status&&(sessionStorage.setItem("token",e.data.token),d.destroyLocalUserData())}catch(e){console.log("problemas al desloguearse"),console.log(e)}},isClientLogged(){if(sessionStorage.getItem("token")){const e=(0,a.Z)(sessionStorage.getItem("token"));return!!e.client}return!1},async checkLogin(e,t={},o="get"){const a={url:e,method:o},s=sessionStorage.getItem("token");t.data&&(a.data=t.data),t.params&&(a.params=t.params);let r=t.headers?t.headers:{};if(sessionStorage.getItem("token")){if("bearer"===t.auth){let n=null;n="get"===o?await this.getAxiosToken(s,c.baseURL+e,r):this.otherAxiosToken(s,c.baseURL+e,t,o);try{return await n}catch(i){try{throw console.log(i),i.response&&401===i.response.status&&(await this.refreshToken(),await this.checkLogin(e,t,o)),new Error(i.message)}catch(i){throw new Error(i.message)}}}return n.Z.get(c.baseURL+e,{auth:{username:"api@admin.com",password:"IT_api"}}).then((e=>e)).catch((e=>e))}throw new Error("Something bad happened.")},async checkLoginImage(e,t={},o){const n=sessionStorage.getItem("token");if(sessionStorage.getItem("token")){let a=null;return a=this.otherAxiosToken(n,c.baseURL+e,t,o),a}this.login(),this.checkLogin()},async otherAxiosToken(e,t,o,a){try{const s="post"==a?await n.Z.post(t,o,{headers:{Authorization:"Bearer "+e}}):await n.Z.put(t,o,{headers:{Authorization:"Bearer "+e}});return s}catch(s){throw new Error(s.message)}},async getAxiosToken(e,t,o={}){if(!o)return n.Z.get(t,{headers:{Authorization:"Bearer "+e}}).then((e=>e)).catch((e=>e));let a={...o,Authorization:"Bearer "+e};return n.Z.get(t,{headers:a}).then((e=>e)).catch((e=>e))},getClientToken(){return this.decodeToken(sessionStorage.getItem("token"))},decodeToken(e){return(0,a.Z)(e)},createLocalUserData(){const e=this.getClientToken().client;localStorage.setItem("id",e.id),localStorage.setItem("user",e.name),localStorage.setItem("roles",e.roles),localStorage.setItem("email",e.email),"margin"in e&&localStorage.setItem("margin",JSON.stringify(e.margin))},destroyLocalUserData(){localStorage.clear()},isLogged(){const e=this.getClientToken();return"client"in e},validateRole(e,t=!1){if(!this.isClientLogged())return this.destroyLocalUserData(),!1;{const o=localStorage.getItem("roles").split(",");if(!t&&o.includes("ROLE_SuperAdmin"))return!0;if(void 0!=e)for(let t of e)if(o.includes(t))return!0}return!1},encryptPass(e){const t=sessionStorage.getItem("token").slice(-10);let o=null,n=r().lib.WordArray.random(16);return t&&(o=r().AES.encrypt(e,t,n).toString()),console.log(o),o},async refreshToken(){return n.Z.get(c.baseURL+"/refresh",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then((e=>(sessionStorage.setItem("token",e.data.token),e))).catch((e=>{throw console.error(e),e}))}};t["Z"]=d},5848:function(e,t,o){"use strict";o(7658);var n=o(809);const a={async login(e,t){try{t=n.Z.encryptPass(t);const o=await n.Z.checkLogin("/clients/login",{auth:"bearer",headers:{email:e,password:t}});if(200==o.status)return sessionStorage.setItem("token",o.data.token),n.Z.createLocalUserData(),{message:"Success!!!",error:!1,logged:!0};if(400==o.status)return{message:o.data.message,error:!0,logged:!1};throw console.log(o.response.data),o.response.data}catch(o){throw console.log(o),new Error(o)}},getList(){try{return n.Z.checkLogin("/clients").then((e=>{let t=[];if(200==e.status)if(n.Z.validateRole(["ROLE_Admin"]))for(let o of e.data)t.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent});else if(n.Z.validateRole(["ROLE_Comercial"]))for(let o of e.data)o.email==localStorage.getItem("email")&&t.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent});else n.Z.validateRole(["ROLE_Agency"])&&(t=this.validateRoleUser(e.data));return t}))}catch(e){console.log(e)}},async addUpdClient(e,t=!0){try{e.password=n.Z.encryptPass(e.password),e.auth="bearer";const{status:o,data:a}=t?await n.Z.checkLogin("/clients/create",e,"post"):await n.Z.checkLogin("/clients/upd",e,"put");if(200==o)return a}catch(o){console.log(o.response)}return!1},async addUpdVendor(e){try{e.password=n.Z.encryptPass(e.password),e.auth="bearer";const{status:t,data:o}=await n.Z.checkLogin("/clients/add-upd/vendor",e,"post");if(200==t)return o}catch(t){console.log(t.response)}return!1},async getClient(e){try{const{status:t,data:o}=await n.Z.checkLogin(`/clients/${e}`,{auth:"bearer"});if(200==t)return o}catch(t){console.log(t.response)}},async getVendors(){try{const{status:e,data:t}=await n.Z.checkLogin("/clients/vendors",{auth:"bearer"});if(200==e)return t}catch(e){console.log(e.response)}},async delete(e){const t={auth:"bearer",ids:typeof e==Array?e:[e]};try{const{status:e}=await n.Z.checkLogin("/clients/delete",t,"post");if(200==e)return n.Z.validateRole("ROLE_Agency")?await this.getVendors():await this.getList()}catch(o){
//! Fail 
console.log(o.response)}},validateRoleUser(e){const t=localStorage.getItem("email"),o=e.filter((e=>e.email==t)),n=[];n.push({id:o[0].id,name:o[0].name,email:o[0].email,active:!!o[0].active,verify:!!o[0].verify,agent:!!o[0].agent,vendor:!1});for(let a of e)o[0].id==a.parent&&n.push({id:a.id,name:a.name,email:a.email,active:!!a.active,verify:!!a.verify,agent:!!a.agent,vendor:!0});return n},async verifyUser(e){try{const{status:t,data:o}=await n.Z.checkLogin("/verify-user",{token:e,auth:"bearer"},"post");if(200==t)return o}catch(t){console.log(t.response)}}};t["Z"]=a},2480:function(){}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({152:"not_found",177:"home",297:"products_list",328:"admin",393:"search_result",443:"about",631:"contact",688:"product_detail",827:"forgot_password",929:"terminos_politicas",957:"send_request",971:"pole"}[e]||e)+"."+{152:"b18afcf0",177:"52127672",274:"bf4fb0f9",284:"bf49d704",297:"47f535ca",328:"3f164637",351:"11814c0e",393:"09ac9c5e",443:"005645a8",631:"3c94aa07",688:"0443d980",719:"61fe4acd",756:"302a9e7e",810:"40fad8de",827:"63a91226",855:"d1de2f25",929:"c16dfdc5",957:"8f564f5a",971:"a1dfe286"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({177:"home",297:"products_list",328:"admin",393:"search_result",443:"about",688:"product_detail",827:"forgot_password",929:"terminos_politicas",957:"send_request",971:"pole"}[e]||e)+"."+{177:"ce3cf9b5",274:"393d56a2",297:"282fb9d1",328:"470c0a17",393:"eda7f14f",443:"925909da",688:"4a795d3c",827:"9d9328ba",855:"81a2ed58",929:"689e34f1",957:"03479ea3",971:"4d66372d"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="iristravel_v3:";o.l=function(n,a,s,r){if(e[n])e[n].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[a];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(g);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=r,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){a=r[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=function(n){return new Promise((function(a,s){var r=o.miniCssF(n),i=o.p+r;if(t(r,i))return a();e(n,i,null,a,s)}))},a={143:0};o.f.miniCss=function(e,t){var o={177:1,274:1,297:1,328:1,393:1,443:1,688:1,827:1,855:1,929:1,957:1,971:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=s);var r=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(t&&t(n);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8481)}));n=o.O(n)})();
//# sourceMappingURL=app.dbdb84ad.js.map