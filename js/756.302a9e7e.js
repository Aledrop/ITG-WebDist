"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[756],{4756:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=s(3396),r=s(7139);const i={class:"bg-white text-white pt-4"},n={class:"bg-blue_1 pb-12"},c=(0,a._)("h2",{class:"text-3xl py-6 text-white md:text-6xl lg:text-4xl"},"- Verificar nueva cuenta -",-1),o={class:"container border-2 rounded border-white p-5"},l={class:"shadow-round bg-dark_blue_1 text-xl px-10 py-8"},u={class:"w-full text-left font-bold text-2xl pb-2"};function d(e,t,s,d,h,f){return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",n,[c,(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("h3",u,(0,r.zw)(h.message),1)])])])])}var h=s(5848),f={name:"VerifyUser",components:{},data(){return{message:""}},created(){const e=this.$route.params.token;e&&this.verifyUser(e)},methods:{verifyUser(e){h.Z.verifyUser(e).then((e=>{e.active?this.message="Su cuenta ha sido verificada satisfactoriamente":this.message="Ha habido un problema a la hora de verificar su cuenta contactenos."}))}}},v=s(89);const b=(0,v.Z)(f,[["render",d]]);var x=b}}]);
//# sourceMappingURL=756.302a9e7e.js.map