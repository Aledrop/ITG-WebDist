"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[393],{7371:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var r=a(3396),s=a(7139);const o=t=>((0,r.dD)("data-v-0f515496"),t=t(),(0,r.Cn)(),t),c={class:"bg-white"},n={class:"capitalize text-3xl pt-6 text-blue_1 md:text-6xl lg:text-4xl"},i=o((()=>(0,r._)("span",{class:"font-Clarissa text-5xl"},"Cuba",-1))),l={class:"bg-white text-white"},p={class:"bg-blue_1 pb-10"},h=o((()=>(0,r._)("div",{class:"flex flex-wrap justify-center gap-4 text-sm m-auto md:text-2xl md:w-4/6"},null,-1))),u={class:"container flex flex-col gap-20 items-center py-20 m-auto"},d={key:0};function m(t,e,a,o,m,_){const f=(0,r.up)("searcher"),g=(0,r.up)("list-template-wrapper");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("section",c,[(0,r._)("h2",n,(0,s.zw)(m.product),1),i,(0,r.Wm)(f,{onUpdparams:_.updSearch},null,8,["onUpdparams"])]),(0,r._)("section",l,[(0,r._)("div",p,[h,(0,r._)("div",u,[(0,r.Wm)(g,{product:m.product,item:m.product_list,search:!0,not_found:!0,params:{poleKey:m.country,productKey:m.product,comb:m.search_params.rooms}},null,8,["product","item","params"]),this.product_list?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",d,"No se encontro ningun precio para el rango de fecha determinado. Intente con otro rango."))])])])])}var _=a(6351);function f(t,e,a,s,o,c){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.$attrs.item,((e,s)=>((0,r.wg)(),(0,r.j4)((0,r.LL)(c.componentId),{search:a.search,key:s,item:e,index:s,params:t.$attrs.params},null,8,["search","item","index","params"])))),128)}var g=a(4200),w=a(7771),x={name:"ListTemplateWrapper",components:{CarListTemplate:g.Z,HoteListTemplate:w.Z},props:{search:{type:Boolean,default:!1}},data(){return{country:"",product_list:[],params:{},hotel:{poles:[],pole:""},car:{}}},computed:{componentId(){switch(this.$attrs.product){case"car":return"CarListTemplate";case"hotel":return"HoteListTemplate";default:return null}}},methods:{}},y=a(89);const b=(0,y.Z)(x,[["render",f]]);var v=b,C=a(809),k={name:"SearchResult",components:{Searcher:_.Z,ListTemplateWrapper:v},data(){return{product:"",country:"",product_list:[],search_params:{},hotel:{poles:[],pole:""},car:{}}},async created(){this.updSearch()},methods:{getPoleInfo(t){this.poles.map(((e,a)=>{e.active=t===a}))},async updSearch(){const t=JSON.parse(localStorage.getItem("searchform"));switch(this.params=this.product_list,t.type){case"car":this.product="car",this.country="Cuba",this.product_list=await this.searchCar();break;case"hotel":this.product="hotel",this.country="Cuba",this.product_list=await this.searchHotel();break}this.product_list&&0!==this.product_list.length||this.$swal({title:"No hay elementos",text:"No hay elementos en esta busqueda",icon:"info",confirmButtonColor:"#3085d6"})},async searchCar(){const t=JSON.parse(localStorage.getItem("searchform"));t&&(this.search_params={car_category_id:t.car_category_id,car_engine_id:t.car_engine_id,date_from:t.date_start,date_to:t.date_out}),this.search_params.auth="bearer";const e=await C.Z.checkLogin("/search/car/prices",this.search_params,"post").then((t=>{if(t.data)return 0!==t.data.length&&t.data.forEach((t=>t.image=t.image||a(206))),t.data;throw"Error"})).catch((t=>{this.$swal({title:"Error",text:t||"Ocurrio un error!!!",icon:"error",confirmButtonColor:"#3085d6"})}));return e},async searchHotel(){const t=JSON.parse(localStorage.getItem("searchform"));t&&(this.search_params={hotel_id:t.hotel,date_from:t.dateRange[0],date_to:t.dateRange[1],pole_id:t.destination,rooms:t.rooms,stars:t.stars}),this.search_params.auth="bearer";const e=await C.Z.checkLogin("/search/hotels/prices",this.search_params,"post").then((t=>{if(t.data)return t.data;throw"Error"})).catch((t=>{this.$swal({title:"Error",text:t||"Ocurrio un error!!!",icon:"error",confirmButtonColor:"#3085d6"})}));return e}}};const S=(0,y.Z)(k,[["render",m],["__scopeId","data-v-0f515496"]]);var L=S}}]);
//# sourceMappingURL=search_result.1efda666.js.map