"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[671],{5277:function(e,t,s){s.d(t,{OK:function(){return m},mQ:function(){return b}});s(7658);var a=s(4870),o=s(3396),r=s(7139),n=s(9242),i=(e,t)=>{const s=e.__vccOpts||e;for(const[a,o]of t)s[a]=o;return s};const l={name:"Tab",props:{panelClass:{type:String,default:"tabs-component-panel"},id:{type:String,default:null},name:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1}},setup(e){const t=(0,a.iH)(!1),s=(0,o.f3)("tabsProvider"),r=(0,o.f3)("addTab"),n=(0,o.f3)("updateTab"),i=(0,o.f3)("deleteTab"),l=e.prefix+e.name+e.suffix,d=e.id?e.id:e.name.toLowerCase().replace(/ /g,"-"),c="#"+(e.isDisabled?"":d);return(0,o.YP)((()=>s.activeTabHash),(()=>{t.value=c===s.activeTabHash})),(0,o.YP)((()=>Object.assign({},e)),(()=>{n(d,{name:e.name,header:e.prefix+e.name+e.suffix,isDisabled:e.isDisabled,hash:c,index:s.tabs.length,computedId:d})})),(0,o.wF)((()=>{r({name:e.name,header:l,isDisabled:e.isDisabled,hash:c,index:s.tabs.length,computedId:d})})),(0,o.Jd)((()=>{i(d)})),{header:l,computedId:d,hash:c,isActive:t}}},d=["id","aria-hidden"];function c(e,t,s,a,i,l){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("section",{id:a.computedId,ref:"tab","aria-hidden":!a.isActive,class:(0,r.C_)(s.panelClass),role:"tabpanel"},[(0,o.WI)(e.$slots,"default")],10,d)),[[n.F8,a.isActive]])}var m=i(l,[["render",c]]);class u{get(e){const t=JSON.parse(localStorage.getItem(e));if(!t)return null;const s=new Date(t.expires);return s<new Date?(localStorage.removeItem(e),null):t.value}set(e,t,s){const a=(new Date).getTime(),o=new Date(a+6e4*s);localStorage.setItem(e,JSON.stringify({value:t,expires:o}))}}var p=new u;const f={props:{cacheLifetime:{type:Number,default:5},options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null,disableScrollBehavior:!1})},wrapperClass:{type:String,default:"tabs-component"},panelsWrapperClass:{type:String,default:"tabs-component-panels"},navClass:{type:String,default:"tabs-component-tabs"},navItemClass:{type:String,default:"tabs-component-tab"},navItemDisabledClass:{type:String,default:"is-disabled"},navItemActiveClass:{type:String,default:"is-active"},navItemLinkClass:{type:String,default:"tabs-component-tab-a"},navItemLinkActiveClass:{type:String,default:"is-active"},navItemLinkDisabledClass:{type:String,default:"is-disabled"}},emits:["changed","clicked"],setup(e,t){const s=(0,a.qj)({activeTabHash:"",lastActiveTabHash:"",tabs:[]});(0,o.JJ)("tabsProvider",s),(0,o.JJ)("addTab",(e=>{s.tabs.push(e)})),(0,o.JJ)("updateTab",((e,t)=>{let a=s.tabs.findIndex((t=>t.computedId===e));t.isActive=s.tabs[a].isActive,s.tabs[a]=t})),(0,o.JJ)("deleteTab",(e=>{let t=s.tabs.findIndex((t=>t.computedId===e));s.tabs.splice(t,1)}));const r=(a,o)=>{!o||e.options.useUrlFragment&&!e.options.disableScrollBehavior||o.preventDefault();const r=n(a);if(!r)return;if(o&&r.isDisabled)return void o.preventDefault();if(s.lastActiveTabHash===r.hash)return void t.emit("clicked",{tab:r});s.tabs.forEach((e=>{e.isActive=e.hash===r.hash})),t.emit("changed",{tab:r}),s.lastActiveTabHash=s.activeTabHash=r.hash;const i=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;p.set(i,r.hash,e.cacheLifetime)},n=e=>s.tabs.find((t=>t.hash===e));return(0,o.bv)((()=>{if(!s.tabs.length)return;if(window.addEventListener("hashchange",(()=>r(window.location.hash))),n(window.location.hash))return void r(window.location.hash);const t=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`,a=p.get(t);n(a)?r(a):e.options.defaultTabHash&&n("#"+e.options.defaultTabHash)?r("#"+e.options.defaultTabHash):r(s.tabs[0].hash)})),{...(0,a.BK)(s),selectTab:r,findTab:n}}},g=["aria-controls","aria-selected","href","onClick","innerHTML"];function h(e,t,s,a,n,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(s.wrapperClass)},[(0,o._)("ul",{role:"tablist",class:(0,r.C_)(s.navClass)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.tabs,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:(0,r.C_)([s.navItemClass,e.isDisabled?s.navItemDisabledClass:"",e.isActive?s.navItemActiveClass:""]),role:"presentation"},[(0,o._)("a",{role:"tab",class:(0,r.C_)([s.navItemLinkClass,e.isDisabled?s.navItemLinkDisabledClass:"",e.isActive?s.navItemLinkActiveClass:""]),"aria-controls":e.hash,"aria-selected":e.isActive,href:e.hash,onClick:t=>a.selectTab(e.hash,t),innerHTML:e.header},null,10,g)],2)))),128))],2),(0,o._)("div",{class:(0,r.C_)(s.panelsWrapperClass)},[(0,o.WI)(e.$slots,"default")],2)],2)}var b=i(f,[["render",h]])},7671:function(e,t,s){s.r(t),s.d(t,{default:function(){return ss}});var a=s(3396),o=s(7139),r=s(9242);const n=e=>((0,a.dD)("data-v-6b752aaa"),e=e(),(0,a.Cn)(),e),i={class:"container py-6 px-2 m-auto"},l={class:"flex flex-1 flex-col w-full border shadow rounded-lg bg-white text-left py-4 p-8"},d={class:"flex-1 flex-col my-3 px-3 py-2 border-double border border-gray-400 rounded-lg"},c={class:"flex flex-row items-center my-3 mx-2"},m=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Compañía",-1))),u={class:"text-white bg-orange rounded-xl ml-auto p-1 px-2"},p=n((()=>(0,a._)("i",{class:"fa fa-exclamation-triangle"},null,-1))),f={class:"flex flex-row items-center my-3 mx-2"},g=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"IATA",-1))),h={class:"flex flex-row items-center my-3 mx-2"},b=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Nombres *",-1))),x={class:"flex flex-row items-center my-3 mx-2"},y=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Apellidos *",-1))),w={class:"flex flex-row items-center my-3 mx-2"},_=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Dirección",-1))),v={class:"flex flex-row items-center my-3 mx-2"},k=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Genero *",-1))),D={class:"flex flex-row items-center my-3 mx-2"},V=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"EMail *",-1))),C={class:"flex flex-row items-center my-3 mx-2"},A=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Teléfono",-1))),L={class:"flex flex-row items-center my-3 mx-2"},I=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Ciudad",-1))),U={class:"flex flex-row items-center my-3 mx-2"},S=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Código Postal",-1))),T={class:"flex flex-row items-center my-3 mx-2"},Z=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"País *",-1))),F={class:"flex flex-row items-center my-3 mx-2"},z=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Provincia",-1))),$={class:"flex flex-col border border-gray-400 rounded-md p-5 mt-3"},q={class:"flex flex-row gap-x-3 items-center my-3 mx-2"},H=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2"},"Contraseña",-1))),W=["type"],P=n((()=>(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2"},"Confirmar Contraseña",-1))),E=["type"],G={class:"flex items-center gap-x-4"},N=n((()=>(0,a._)("i",{class:"fas fa-eye-slash"},null,-1))),O=[N],J=n((()=>(0,a._)("i",{class:"fas fa-eye"},null,-1))),j=[J],M={class:"flex justify-between"},Y={class:"text-red"},K=n((()=>(0,a._)("button",{type:"button",class:"ml-auto"},"Resetear Contraseña",-1))),R={key:0,class:"flex flex-col border rounded-xl gap-3 p-4"},B=n((()=>(0,a._)("h3",{class:"uppercase"},"Margen por productos (%)",-1))),Q={class:"flex flex-row items-center my-3 mx-2"},X={class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},ee=["onUpdate:modelValue"],te={class:"flex flex-1 gap-3 mt-10 flex-row-reverse gap-y-4"},se=n((()=>(0,a._)("button",{type:"submit",class:"inline-flex border border-transparent h-10 bg-orange rounded-md font-semibold text-xs text-white uppercase tracking-widest px-4 py-2 hover:bg-amber-300 focus:outline-none active:bg-green-600 disabled:opacity-25 transition"},"Salvar",-1))),ae=n((()=>(0,a._)("button",{type:"button",class:"inline-flex border border-gray-400 h-10 bg-indigo-900 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm px-4 py-2 hover:text-white hover:bg-indigo-400 focus:outline-none active:text-gray-800 active:bg-indigo-900 disabled:opacity-25 transition"},"Cancelar",-1))),oe={key:0,class:"error-message"},re=n((()=>(0,a._)("i",{class:"fa fa-times-circle"},null,-1))),ne={class:"text-xl self-center px-2"},ie={key:1,class:"success-message"},le=n((()=>(0,a._)("i",{class:"fa fa-check-circle"},null,-1))),de=n((()=>(0,a._)("h5",{class:"text-xl self-center px-2"},"La información ha sido enviada satisfactoriamente.",-1))),ce=[le,de],me={class:"flex flex-wrap bg-backBoard rounded-xl p-4 shadow-inner gap-4"},ue={key:1};function pe(e,t,s,n,N,J){const le=(0,a.up)("Multiselect"),de=(0,a.up)("tab"),pe=(0,a.up)("new-vendor"),fe=(0,a.up)("Vendor"),ge=(0,a.up)("tabs");return(0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("div",i,[(0,a._)("div",l,[(0,a.Wm)(ge,null,{default:(0,a.w5)((()=>[(0,a.Wm)(de,{name:"Informacion General"},{default:(0,a.w5)((()=>[(0,a._)("form",{action:"",class:"mt-2",onSubmit:t[14]||(t[14]=(...e)=>J.submitForm&&J.submitForm(...e))},[(0,a._)("div",d,[(0,a._)("div",c,[m,(0,a._)("span",null,(0,o.zw)(N.company),1),(0,a.wy)((0,a._)("span",u,[p,(0,a.Uk)(" "+(0,o.zw)(N.msg),1)],512),[[r.F8,""!=N.msg]])]),(0,a._)("div",f,[g,(0,a._)("span",null,(0,o.zw)(N.IATA),1)]),(0,a._)("div",h,[b,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[0]||(t[0]=e=>N.formData.first_name=e),required:""},null,512),[[r.nr,N.formData.first_name]])]),(0,a._)("div",x,[y,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[1]||(t[1]=e=>N.formData.last_name=e),required:""},null,512),[[r.nr,N.formData.last_name]])]),(0,a._)("div",w,[_,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[2]||(t[2]=e=>N.formData.address=e)},null,512),[[r.nr,N.formData.address]])]),(0,a._)("div",v,[k,(0,a.Wm)(le,{modelValue:N.formData.gender,"onUpdate:modelValue":t[3]||(t[3]=e=>N.formData.gender=e),mode:"single",searchable:!0,options:N.genders,placeholder:"Seleccione genero *",classes:N.select_style_opt},null,8,["modelValue","options","classes"])]),(0,a._)("div",D,[V,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",readonly:"","onUpdate:modelValue":t[4]||(t[4]=e=>N.formData.email=e),required:""},null,512),[[r.nr,N.formData.email]])]),(0,a._)("div",C,[A,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[5]||(t[5]=e=>N.formData.phone=e)},null,512),[[r.nr,N.formData.phone]])]),(0,a._)("div",L,[I,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[6]||(t[6]=e=>N.formData.city=e)},null,512),[[r.nr,N.formData.city]])]),(0,a._)("div",U,[S,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[7]||(t[7]=e=>N.formData.zip_code=e)},null,512),[[r.nr,N.formData.zip_code]])]),(0,a._)("div",T,[Z,(0,a.Wm)(le,{modelValue:N.formData.country,"onUpdate:modelValue":t[8]||(t[8]=e=>N.formData.country=e),mode:"single",searchable:!0,options:N.countries,placeholder:"Seleccione País *",classes:N.select_style_opt},null,8,["modelValue","options","classes"])]),(0,a._)("div",F,[z,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[9]||(t[9]=e=>N.formData.province=e)},null,512),[[r.nr,N.formData.province]])]),(0,a._)("div",$,[(0,a._)("div",q,[H,(0,a.wy)((0,a._)("input",{type:N.showpass?"text":"password",class:"flex-1 border mt-1 block w-90x100 py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[10]||(t[10]=e=>N.pass=e)},null,8,W),[[r.YZ,N.pass]]),P,(0,a.wy)((0,a._)("input",{type:N.showpass?"text":"password",class:"flex-1 border mt-1 block w-full border-gray-400 bg-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[11]||(t[11]=e=>N.repassword=e)},null,8,E),[[r.YZ,N.repassword]]),(0,a._)("div",G,[(0,a.wy)((0,a._)("button",{type:"button",onClick:t[12]||(t[12]=e=>N.showpass=!N.showpass)},O,512),[[r.F8,!N.showpass]]),(0,a.wy)((0,a._)("button",{type:"button",onClick:t[13]||(t[13]=e=>N.showpass=!N.showpass)},j,512),[[r.F8,N.showpass]])])]),(0,a._)("div",M,[(0,a.wy)((0,a._)("small",Y,"Las contraseñas deben ser iguales.",512),[[r.F8,!N.samepass]]),K])])]),J.isAgent?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",R,[B,(0,a._)("div",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(N.formData.margin,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("label",X,(0,o.zw)(e.name),1),(0,a.wy)((0,a._)("input",{type:"text",class:"w-2/5 border mt-1 block py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t=>e.agent_margin=t,readonly:""},null,8,ee),[[r.nr,e.agent_margin]])])))),128))])])),(0,a._)("div",te,[se,ae,N.error_message?((0,a.wg)(),(0,a.iD)("div",oe,[re,(0,a._)("h5",ne,[(0,a.Uk)(" Error enviando informacion. No se pudo crear el nuevo usuario "),(0,a._)("p",null,(0,o.zw)(N.error_message_text),1)])])):(0,a.kq)("",!0),N.success_message?((0,a.wg)(),(0,a.iD)("div",ie,ce)):(0,a.kq)("",!0)])],32)])),_:1}),J.isAgent?((0,a.wg)(),(0,a.j4)(de,{key:0,name:"Compradores"},{default:(0,a.w5)((()=>[(0,a.Wm)(pe,{countries:N.countries,genders:N.genders,vendorId:N.vendor,onUpdList:J.updVendorList,onClearId:t[15]||(t[15]=e=>N.vendor="")},null,8,["countries","genders","vendorId","onUpdList"]),(0,a._)("div",me,[N.vendors.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(N.vendors,(e=>((0,a.wg)(),(0,a.j4)(fe,{key:e.id,item:e,onUpdVendor:J.updVendor,onDelVendor:J.delVendor},null,8,["item","onUpdVendor","onDelVendor"])))),128)):(0,a.kq)("",!0),0==N.vendors.length?((0,a.wg)(),(0,a.iD)("span",ue,"No tiene ningun vendedor asignado")):(0,a.kq)("",!0)])])),_:1})):(0,a.kq)("",!0)])),_:1})])])])}s(7658);const fe=["id"],ge=(0,a._)("i",{class:"fa fa-user-circle text-gray-300 text-[6rem]"},null,-1),he={class:"text-left"},be={class:"text-xl font-bold"},xe={class:"flex gap-6 py-4"},ye={class:"flex items-center gap-1"},we={class:"flex items-center gap-1"},_e={class:"flex flex-col h-full gap-6 self-center ml-auto"};function ve(e,t,s,r,n,i){return(0,a.wg)(),(0,a.iD)("article",{id:i.getValue("id"),class:"flex gap-6 w-[32%] bg-white rounded-xl px-6 py-4"},[ge,(0,a._)("div",he,[(0,a._)("h3",be,(0,o.zw)(i.getValue("name")),1),(0,a._)("span",null,(0,o.zw)(i.getValue("email")),1),(0,a._)("div",xe,[(0,a._)("span",ye,[(0,a._)("i",{class:(0,o.C_)(["text-gray cursor-pointer",i.isActive(i.getValue("active"))]),onClick:t[0]||(t[0]=e=>i.updActive(i.getValue("id")))},null,2),(0,a.Uk)(" Activo ")]),(0,a._)("span",we,[(0,a._)("i",{class:(0,o.C_)(["text-gray cursor-pointer",i.isActive(i.getValue("verified"))]),onClick:t[1]||(t[1]=e=>i.updVerify(i.getValue("id")))},null,2),(0,a.Uk)(" Verificado ")])])]),(0,a._)("div",_e,[(0,a._)("i",{class:"fa fa-times-circle text-2xl text-red cursor-pointer",onClick:t[2]||(t[2]=e=>i.deleteVendor(i.getValue("id")))}),(0,a._)("i",{class:"fa fa-edit text-2xl text-blue cursor-pointer mt-auto",onClick:t[3]||(t[3]=e=>i.updateVendor(i.getValue("id")))})])],8,fe)}var ke=s(5848),De={name:"TableComp",props:{item:{default:{}}},data(){return{clientInfo:{}}},methods:{isActive(e){return e>0?"fa-solid fa-square-check":"fa-solid fa-square"},getValue(e){return this.clientInfo[e]||(this.clientInfo[e]=this.item[e]),this.clientInfo[e]},updateVendor(e){this.$emit("updVendor",e)},deleteVendor(e){this.$emit("delVendor",e)},async updActive(e){try{const t=await ke.Z.addUpdVendor({id:e,active:!this.clientInfo.active});t&&(this.clientInfo.active=t.active)}catch(t){console.log(t)}},async updVerify(e){try{const t=await ke.Z.addUpdVendor({id:e,verified:!this.clientInfo.verified});t&&(this.clientInfo.verified=t.verified)}catch(t){console.log(t)}}}},Ve=s(89);const Ce=(0,Ve.Z)(De,[["render",ve]]);var Ae=Ce,Le=s(809);const Ie={getList(){try{return Le.Z.checkLogin("/gender").then((e=>{const t=[];if(200!=e.status)return{success:!1,errors:"Fail check login"};for(let s of e.data)t.push({id:s.id,alias:s.alias});return t}))}catch(e){console.log(e)}},getSimpleList(){return this.getList().then((e=>{const t=[];for(let s of e)t.push({value:s.id,label:s.alias});return t}))},async getGender(e){
//! Obtiene los datos x un ID
try{const{status:t,data:s}=await Le.Z.checkLogin(`/gender/${e}`);if(200==t){const e=s;return e}}catch(t){console.log(t.response)}},async addUpdGender(e,t=!0){try{e.auth="bearer";const{status:s,data:a}=t?await Le.Z.checkLogin("/gender/create",e,"post"):await Le.Z.checkLogin(`/gender/upd/${e.id}`,e,"put");if(200==s)return a}catch(s){
//! Fail 
console.log(s.response)}return!1},async delete(e){const t={auth:"bearer",ids:e};try{const{status:e}=await Le.Z.checkLogin("/gender/delete",t,"post");if(200==e)return this.getList().then((e=>e))}catch(s){
//! Fail 
console.log(s.response)}}};var Ue=Ie;const Se={getList(){try{return Le.Z.checkLogin("/country").then((e=>{const t=[];if(200!=e.status)return{success:!1,errors:"Fail check login"};for(let s of e.data)t.push({id:s.id,alias:s.alias,code:s.code,coin:s.coin});return t}))}catch(e){console.log(e)}},getSimpleList(){try{return Le.Z.checkLogin("/country").then((e=>{if(200==e.status){const t=[];for(let s of e.data)t.push({value:s.id,label:s.alias});return t}}))}catch(e){return console.log(e),[]}},async getCountry(e){
//! Obtiene los datos x un ID
try{const{status:t,data:s}=await Le.Z.checkLogin(`/country/${e}`);if(200==t)return s}catch(t){console.log(t.response)}},async addUpdCountry(e,t=!0){try{e.auth="bearer";const{status:s,data:a}=t?await Le.Z.checkLogin("/country/create",e,"post"):await Le.Z.checkLogin(`/country/upd/${e.id}`,e,"put");if(200==s)return a}catch(s){
//! Fail 
console.log(s.response)}return!1},async delete(e){const t={auth:"bearer",ids:e};try{const{status:e}=await Le.Z.checkLogin("/country/delete",t,"post");if(200==e)return this.getList().then((e=>e))}catch(s){
//! Fail 
console.log(s.response)}}};var Te=Se;const Ze={class:"flex gap-6 w-full"},Fe=(0,a._)("i",{class:"fa fa-plus"},null,-1),ze={class:"flex gap-3"},$e={class:"flex flex-col w-5/12"},qe={class:"flex flex-row items-center my-3 mx-2"},He=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Nombres *",-1),We={class:"flex flex-row items-center my-3 mx-2"},Pe=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Apellidos *",-1),Ee={class:"flex flex-row items-center my-3 mx-2"},Ge=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Genero *",-1),Ne={class:"flex flex-col w-5/12"},Oe={class:"flex flex-row items-center my-3 mx-2"},Je=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"EMail *",-1),je=["readonly"],Me={class:"flex flex-row items-center my-3 mx-2"},Ye=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Teléfono",-1),Ke={class:"flex flex-col"},Re={class:"flex flex-row items-center my-3 mx-2"},Be=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Dirección",-1),Qe={class:"flex flex-row items-center my-3 mx-2"},Xe=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"País *",-1),et={class:"flex"},tt={class:"flex flex-row items-center my-3 mx-2"},st=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Ciudad",-1),at={class:"flex flex-row items-center my-3 mx-2"},ot=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Provincia",-1),rt={class:"flex flex-row items-center my-3 mx-2"},nt=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},"Código Postal",-1),it={class:"flex flex-col"},lt={class:"flex flex-col p-5 mt-3"},dt={class:"flex flex-row gap-x-3 items-center my-3 mx-2"},ct=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2"},"Contraseña",-1),mt=["type"],ut=(0,a._)("label",{class:"uppercase block text-sm font-medium text-gray-700 mx-2"},"Confirmar Contraseña",-1),pt=["type"],ft={class:"flex items-center gap-x-4"},gt=(0,a._)("i",{class:"fas fa-eye-slash"},null,-1),ht=[gt],bt=(0,a._)("i",{class:"fas fa-eye"},null,-1),xt=[bt],yt={class:"flex justify-between"},wt={class:"text-red"},_t=(0,a._)("button",{type:"button",class:"ml-auto"},"Resetear Contraseña",-1),vt={class:"flex flex-col border rounded-xl gap-3 p-4"},kt=(0,a._)("h3",{class:"uppercase"},"Margen por productos (%)",-1),Dt={class:"flex flex-row items-center my-3 mx-2"},Vt={class:"uppercase block text-sm font-medium text-gray-700 mx-2 w-32"},Ct=["onUpdate:modelValue"],At={class:"flex gap-3 mt-10 flex-row-reverse gap-y-4 w-full"},Lt=(0,a._)("button",{type:"submit",class:"inline-flex border border-transparent h-10 bg-orange rounded-md font-semibold text-xs text-white uppercase tracking-widest px-4 py-2 hover:bg-amber-300 focus:outline-none active:bg-green-600 disabled:opacity-25 transition"},"Salvar",-1),It={key:0,class:"error-message"},Ut=(0,a._)("i",{class:"fa fa-times-circle"},null,-1),St={class:"text-xl self-center px-2"},Tt={key:1,class:"success-message"},Zt=(0,a._)("i",{class:"fa fa-check-circle"},null,-1),Ft=(0,a._)("h5",{class:"text-xl self-center px-2"},"La información ha sido enviada satisfactoriamente.",-1),zt=[Zt,Ft];function $t(e,t,s,n,i,l){const d=(0,a.up)("Multiselect"),c=(0,a.up)("accordion-item"),m=(0,a.up)("accordion");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{"accordion-trigger":(0,a.w5)((()=>[(0,a._)("div",Ze,[(0,a._)("h3",{ref:"vendorFormbtn",class:"w-2/12 rounded bg-blueGray text-gray text-center py-3 px-6",onClick:t[0]||(t[0]=e=>i.visible=!i.visible)},[(0,a.Uk)("Agregar Vendedor "),Fe],512),(0,a.wy)((0,a._)("span",{class:(0,o.C_)(["w-10/12 rounded text-white text-xl px-4 pt-2",l.isOK()])},(0,o.zw)(i.message_text),3),[[r.F8,i.error_message||i.success_message]])])])),"accordion-content":(0,a.w5)((()=>[(0,a._)("form",{action:"",class:"flex flex-col my-3 px-3 py-2 border-double border border-gray-400 rounded-lg",onSubmit:t[16]||(t[16]=(...e)=>l.submitFormVendor&&l.submitFormVendor(...e))},[(0,a._)("section",ze,[(0,a._)("div",$e,[(0,a._)("div",qe,[He,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[1]||(t[1]=e=>i.formDataV.first_name=e),required:""},null,512),[[r.nr,i.formDataV.first_name]])]),(0,a._)("div",We,[Pe,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[2]||(t[2]=e=>i.formDataV.last_name=e),required:""},null,512),[[r.nr,i.formDataV.last_name]])]),(0,a._)("div",Ee,[Ge,(0,a.Wm)(d,{modelValue:this.gender,"onUpdate:modelValue":t[3]||(t[3]=e=>this.gender=e),mode:"single",searchable:!0,options:s.genders,placeholder:"Seleccione genero *",classes:i.select_style_opt},null,8,["modelValue","options","classes"])])]),(0,a._)("div",Ne,[(0,a._)("div",Oe,[Je,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",readonly:"create"!=i.mode,"onUpdate:modelValue":t[4]||(t[4]=e=>i.formDataV.email=e),required:""},null,8,je),[[r.nr,i.formDataV.email]])]),(0,a._)("div",Me,[Ye,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[5]||(t[5]=e=>i.formDataV.phone=e)},null,512),[[r.nr,i.formDataV.phone]])])])]),(0,a._)("section",Ke,[(0,a._)("div",Re,[Be,(0,a.wy)((0,a._)("input",{type:"text",class:"w-2/4 border mt-1 block py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[6]||(t[6]=e=>i.formDataV.address=e)},null,512),[[r.nr,i.formDataV.address]])]),(0,a._)("div",Qe,[Xe,(0,a.Wm)(d,{modelValue:this.country,"onUpdate:modelValue":t[7]||(t[7]=e=>this.country=e),mode:"single",searchable:!0,options:s.countries,placeholder:"Seleccione País *",classes:i.select_style_opt},null,8,["modelValue","options","classes"])]),(0,a._)("div",et,[(0,a._)("div",tt,[st,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[8]||(t[8]=e=>i.formDataV.city=e)},null,512),[[r.nr,i.formDataV.city]])]),(0,a._)("div",at,[ot,(0,a.wy)((0,a._)("input",{type:"text",class:"flex-1 border mt-1 block w-full py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[9]||(t[9]=e=>i.formDataV.province=e)},null,512),[[r.nr,i.formDataV.province]])]),(0,a._)("div",rt,[nt,(0,a.wy)((0,a._)("input",{type:"text",class:"border mt-1 block w-1/5 py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[10]||(t[10]=e=>i.formDataV.zip_code=e)},null,512),[[r.nr,i.formDataV.zip_code]])])])]),(0,a._)("section",it,[(0,a._)("div",lt,[(0,a._)("div",dt,[ct,(0,a.wy)((0,a._)("input",{type:i.showpass?"text":"password",class:"flex-1 border mt-1 block w-90x100 py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[11]||(t[11]=e=>i.password=e)},null,8,mt),[[r.YZ,i.password]]),ut,(0,a.wy)((0,a._)("input",{type:i.showpass?"text":"password",class:"flex-1 border mt-1 block w-full border-gray-400 bg-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t[12]||(t[12]=e=>i.repassword=e)},null,8,pt),[[r.YZ,i.repassword]]),(0,a._)("div",ft,[(0,a.wy)((0,a._)("button",{type:"button",onClick:t[13]||(t[13]=e=>i.showpass=!i.showpass)},ht,512),[[r.F8,!i.showpass]]),(0,a.wy)((0,a._)("button",{type:"button",onClick:t[14]||(t[14]=e=>i.showpass=!i.showpass)},xt,512),[[r.F8,i.showpass]])])]),(0,a._)("div",yt,[(0,a.wy)((0,a._)("small",wt,"Las contraseñas deben ser iguales.",512),[[r.F8,!i.samepass]]),_t])]),(0,a._)("div",vt,[kt,(0,a._)("div",Dt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.available_products,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("label",Vt,(0,o.zw)(e.name),1),(0,a.wy)((0,a._)("input",{type:"text",class:"w-2/5 border mt-1 block py-2 px-3 border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","onUpdate:modelValue":t=>e.agent_margin=t},null,8,Ct),[[r.nr,e.agent_margin]])])))),128))])])]),(0,a._)("section",At,[Lt,(0,a._)("button",{type:"button",class:"inline-flex border border-gray-400 h-10 bg-indigo-900 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm px-4 py-2 hover:text-white hover:bg-indigo-400 focus:outline-none active:text-gray-800 active:bg-indigo-900 disabled:opacity-25 transition",onClick:t[15]||(t[15]=(...e)=>l.initForm&&l.initForm(...e))},"Cancelar"),i.error_message?((0,a.wg)(),(0,a.iD)("div",It,[Ut,(0,a._)("h5",St,[(0,a.Uk)(" Error enviando informacion. No se pudo crear el nuevo usuario "),(0,a._)("p",null,(0,o.zw)(i.message_text),1)])])):(0,a.kq)("",!0),i.success_message?((0,a.wg)(),(0,a.iD)("div",Tt,zt)):(0,a.kq)("",!0)])],32)])),_:1})])),_:1})])}const qt={getList(){try{return Le.Z.checkLogin("/product-type").then((e=>{const t=[];if(200!=e.status)return{success:!1,errors:"Fail check login"};for(let s of e.data)t.push({id:s.id,alias:s.alias,active:!!s.active});return t}))}catch(e){console.log(e)}},getSimpleList(){try{return Le.Z.checkLogin("/product-type").then((e=>{if(200==e.status){const t=[];for(let s of e.data)t.push({value:s.id,label:s.alias});return t}}))}catch(e){return console.log(e),[]}},getCustomList(){try{return Le.Z.checkLogin("/product-type").then((e=>{if(200==e.status){const t=[];for(let s of e.data)1==s.active&&t.push({id:s.id,name:s.alias,class_name:s.class_name,agent_margin:s.travel_agent_margin});return t}}))}catch(e){return console.log(e),[]}},async getProductType(e){
//! Obtiene los datos x un ID
try{const{status:t,data:s}=await Le.Z.checkLogin(`/product-type/${e}`);if(200==t)return s}catch(t){console.log(t.response)}},async delete(e){const t={auth:"bearer",ids:e};try{const{status:e}=await Le.Z.checkLogin("/product-type/delete",t,"post");if(200==e)return this.getList().then((e=>e))}catch(s){
//! Fail 
console.log(s.response)}}};var Ht=qt;const Wt={class:"accordion"};function Pt(e,t,s,o,r,n){return(0,a.wg)(),(0,a.iD)("ul",Wt,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var Et={name:"AccordionComp",props:{},data(){return{Accordion:{count:0,active:null}}},provide(){return{Accordion:this.Accordion}}};const Gt=(0,Ve.Z)(Et,[["render",Pt],["__scopeId","data-v-499f1d62"]]);var Nt=Gt;const Ot={class:"accordion__item"};function Jt(e,t,s,n,i,l){return(0,a.wg)(),(0,a.iD)("li",Ot,[(0,a._)("div",{class:(0,o.C_)(["accordion__trigger",{accordion__trigger_active:l.visible}]),onClick:t[0]||(t[0]=(...e)=>l.open&&l.open(...e))},[(0,a.WI)(e.$slots,"accordion-trigger",{},void 0,!0)],2),(0,a.Wm)(r.uT,{name:"accordion",onEnter:l.start,onAfterEnter:l.end,onBeforeLeave:l.start,onAfterLeave:l.end},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",{class:(0,o.C_)(["accordion__content",{active:l.visible}])},[(0,a._)("ul",null,[(0,a.WI)(e.$slots,"accordion-content",{},void 0,!0)])],2),[[r.F8,l.visible]])])),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])])}var jt={props:{},inject:["Accordion"],data(){return{index:null}},computed:{visible(){return this.index==this.Accordion.active}},methods:{open(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start(e){e.style.height=e.scrollHeight+"px"},end(e){e.style.height=""}},created(){this.index=this.Accordion.count++}};const Mt=(0,Ve.Z)(jt,[["render",Jt],["__scopeId","data-v-9d7b5e4c"]]);var Yt=Mt,Kt=s(9810),Rt={name:"NewVendor",props:{countries:{default:[]},genders:{default:[]},vendorId:{default:""}},components:{Multiselect:Kt.Z,Accordion:Nt,AccordionItem:Yt},data(){return{title:"Client",mode:"create",message_text:"",error_message:!1,success_message:!1,visible:!1,select_style_opt:{container:"relative w-6/12 flex items-center justify-end box-border cursor-pointer border border-[#9CA3AF] rounded-lg bg-white text-sm leading-snug outline-none",search:"w-4/12 absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-8 border-transparent text-sm font-sans bg-white rounded-lg pl-2 rtl:pl-0 rtl:pr-3.5",optionSelected:"text-white bg-lightGray",optionSelectedPointed:"text-white bg-lightGray opacity-90",optionSelectedDisabled:"text-green-100 bg-lightGray bg-opacity-50 cursor-not-allowed"},available_products:[],showpass:!1,samepass:!0,password:"",repassword:"",company:"",IATA:"",gender:{value:"",label:""},country:{value:"",label:""},formDataV:{}}},created(){this.isAdmin=Le.Z.validateRole("ROLE_SuperAdmin"),Ht.getCustomList().then((e=>this.available_products=e)),"create"!=this.mode&&this.initForm()},watch:{vendorId(e){e?ke.Z.getClient(e).then((e=>{this.formDataV={first_name:e.first_name,last_name:e.last_name,phone:e.phone,email:e.email,gender_id:e.gender_id,gender:this.genders.filter((t=>t.value==e.gender_id))[0],password:"",address:e.address,city:e.city,province:e.province,zip_code:e.zip_code,country_id:e.country_id,parent_id:0},e.margin.length>0&&(this.available_products=e.margin),console.log(this.formDataV),this.mode="modify",this.visible||this.$refs.vendorFormbtn.click(),this.$refs.vendorFormbtn.scrollIntoView({behavior:"smooth"})})):this.initForm()},repassword(){this.samepass=this.repassword==this.password||""==this.repassword&&""==this.password}},methods:{submitFormVendor(e){if(e.preventDefault(),this.validate(this.formDataV.first_name)&&this.validate(this.formDataV.last_name)&&this.validate(this.gender)&&this.validate(this.formDataV.email)&&this.validate(this.country)&&this.samepass){this.formDataV.password=this.password,this.formDataV.gender_id=this.gender,this.formDataV.country_id=this.country,this.formDataV.parent_id=localStorage.getItem("id"),this.formDataV.margin=[];for(let e of this.available_products)this.formDataV.margin.push({id:e.id,agent_margin:e.agent_margin});this.vendorId&&(this.formDataV.id=this.vendorId),ke.Z.addUpdVendor(this.formDataV).then((e=>{e&&(this.mode="create",this.initForm(),this.error_message=!1,this.success_message=!0,this.message_text="La operacion se realizo con exito!!!",setTimeout((()=>{this.success_message=!1}),8e3))})).catch((e=>{console.log(e),this.error_message=!0,this.success_message=!1,this.message_text="No se pudo realizar la operacion",this.$emit("updList"),setTimeout((()=>{this.error_message=!1}),8e3)}))}else console.log("llega error"),this.message_text="No se pudo realizar la operacion",this.error_message=!0,this.success_message=!1,setTimeout((()=>{this.error_message=!1}),8e3)},initForm(){this.password="",this.repassword="",this.$emit("clearId"),this.gender={value:"",label:""},this.country={value:"",label:""},this.formDataV={from_web:!0,first_name:"",last_name:"",phone:"",email:"",gender_id:"",password:"",address:"",city:"",province:"",zip_code:"",iata:"",company:"",is_agent:"",country_id:"",margin:[]},Ht.getCustomList().then((e=>this.available_products=e))},isOK(){return!this.error_message&&this.success_message?"bg-green-400":"bg-red"},validate(e){return""!=e&&(void 0!==e&&null!==e)}}};const Bt=(0,Ve.Z)(Rt,[["render",$t]]);var Qt=Bt,Xt=s(5277),es={name:"AdminComp",components:{Vendor:Ae,Tabs:Xt.mQ,Tab:Xt.OK,Multiselect:Kt.Z,NewVendor:Qt},data(){return{title:"Client",mode:"modify",vendor:"",error_message_text:"",error_message:!1,msg:"",success_message:!1,select_style_opt:{container:"relative w-4/12 flex items-center justify-end box-border cursor-pointer border border-[#9CA3AF] rounded-lg bg-white text-sm leading-snug outline-none",search:"w-4/12 absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-8 border-transparent text-sm font-sans bg-white rounded-lg pl-2 rtl:pl-0 rtl:pr-3.5",optionSelected:"text-white bg-lightGray",optionSelectedPointed:"text-white bg-lightGray opacity-90",optionSelectedDisabled:"text-green-100 bg-lightGray bg-opacity-50 cursor-not-allowed"},showpass:!1,samepass:!0,pass:"",repassword:"",vendors:[],countries:[],genders:[],company:"",IATA:"",formData:{from_web:!0,first_name:"",last_name:"",phone:"",email:"",gender_id:"",gender:{value:"",label:""},password:"",address:"",city:"",province:"",zip_code:"",country_id:"",country:{value:"",label:""},margin:[]}}},created(){if(Le.Z.isLogged()){this.msg=localStorage.getItem("user_msg");let e=[];e.push(Te.getSimpleList()),e.push(Ue.getSimpleList()),Le.Z.validateRole(["ROLE_Agency"])&&e.push(ke.Z.getVendors()),Promise.all(e).then((e=>{this.countries=e[0],this.genders=e[1],e.length>1&&(this.vendors=e[2]),this.initForm()}))}else this.$router.push("/")},watch:{repassword(){this.samepass=this.repassword==this.pass||""==this.repassword&&""==this.pass}},computed:{isAgent(){return Le.Z.validateRole(["ROLE_Agency"])}},methods:{initForm(){const e=localStorage.getItem("id");ke.Z.getClient(e).then((e=>{this.formData.first_name=e.first_name,this.formData.last_name=e.last_name,this.formData.phone=e.phone,this.formData.email=e.email,this.formData.address=e.address,this.formData.city=e.city,this.formData.province=e.province,this.formData.zip_code=e.zip_code,this.formData.gender_id=e.gender_id,this.formData.gender=e.gender_id,this.formData.country_id=e.country_id,this.formData.country=e.country_id,this.company=e.company,this.IATA=e.i_a_t_a,"margin"in e&&(this.formData.margin=e.margin)}))},submitForm(e){e.preventDefault(),this.formData.password=this.pass,this.formData.gender_id=this.formData.gender,this.formData.country_id=this.formData.country,ke.Z.addUpdClient(this.formData,!1).then((e=>{e&&(this.error_message=!1,this.success_message=!0,setTimeout((()=>{this.success_message=!1}),8e3))}))},updVendorList(){ke.Z.getVendors().then((e=>{e&&(this.vendors=e)})).catch((e=>console.log(e)))},updVendor(e){this.vendor=e},delVendor(e){ke.Z["delete"](e).then((e=>this.vendors=e))}}};const ts=(0,Ve.Z)(es,[["render",pe],["__scopeId","data-v-6b752aaa"]]);var ss=ts}}]);
//# sourceMappingURL=671.686d3312.js.map