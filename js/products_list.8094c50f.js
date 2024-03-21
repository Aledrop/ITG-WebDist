"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[297],{7474:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var r=o(3396),s=o(7139);const l=e=>((0,r.dD)("data-v-132637af"),e=e(),(0,r.Cn)(),e),i={class:"bg-white"},a={class:"text-3xl pt-6 text-blue_1 md:text-6xl lg:text-4xl"},n={class:"font-Clarissa text-5xl"},c={class:"bg-white text-white"},u={class:"bg-blue_1 pb-10"},p={class:"container flex flex-col gap-20 items-center py-10 m-auto"},d={key:0,class:"text-3xl"},h=l((()=>(0,r._)("i",{class:"fa fa-spinner fa-pulse"},null,-1))),g=[h],m={key:1,class:"text-3xl"};function f(e,t,o,l,h,f){const b=(0,r.up)("searcher"),y=(0,r.up)("product-filter");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("section",i,[(0,r._)("h2",a,"- "+(0,s.zw)(h.product)+" -",1),(0,r._)("span",n,(0,s.zw)(h.country),1),(0,r.Wm)(b)]),(0,r._)("section",c,[(0,r._)("div",u,[(0,r.Wm)(y,{country:h.country,product:h.product,poles:h.poles,onPoleInfo:f.getPoleInfo},null,8,["country","product","poles","onPoleInfo"]),(0,r._)("div",p,[h.loading?((0,r.wg)(),(0,r.iD)("span",d,g)):(0,r.kq)("",!0),h.noproduct?((0,r.wg)(),(0,r.iD)("span",m," No hay productos disponibles ")):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.product_list,((e,t)=>((0,r.wg)(),(0,r.j4)((0,r.LL)(f.ProductListTemplate),{key:t,item:e,index:t,params:{poleKey:h.country,productKey:h.product}},null,8,["item","index","params"])))),128))])])])])}var b=o(6351);const y={class:"flex flex-wrap justify-center gap-4 text-sm py-6 m-auto md:text-2xl md:w-4/6"},_=["onClick"];function x(e,t,o,l,i,a){const n=(0,r.up)("Multiselect");return(0,r.wg)(),(0,r.iD)("div",y,[a.isMobile?(0,r.kq)("",!0):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(o.poles,((e,t)=>((0,r.wg)(),(0,r.iD)("button",{key:t,class:(0,s.C_)([{"btn-active":e.active},"border-2 border-blue_1 bg-white text-blue_1 px-8 hover:border-orange_1 hover:bg-orange_1 hover:text-white"]),onClick:t=>a.getPoleInfo(e.id)},(0,s.zw)(e.name),11,_)))),128)),a.isMobile?((0,r.wg)(),(0,r.j4)(n,{key:1,modelValue:i.selectedPole,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedPole=e),mode:"single",searchable:!0,options:a.poleListFormat,placeholder:"Seleccione destino",classes:i.select_style_opt,onSelect:a.handleSelect},null,8,["modelValue","options","classes","onSelect"])):(0,r.kq)("",!0)])}o(7658);var v=o(9810),w={name:"PoleList",props:{poles:[]},components:{Multiselect:v.Z},data(){return{select_style_opt:{container:"relative mx-auto w-10/12 flex items-center justify-end box-border cursor-pointer border border-blue_1 bg-white text-xl text-blue_1 leading-snug outline-none",search:"w-10/12 absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-8 border-transparent text-base text-blue_1 font-sans bg-white pl-2 rtl:pl-0 rtl:pr-3.5",optionSelected:"text-white bg-light_gray_1"},selectedPole:{label:"La Habana",value:1}}},methods:{getPoleInfo(e){this.$emit("poleInfo",e)},handleSelect(e){e!=this.selectedPole.value&&this.getPoleInfo(e)}},computed:{isMobile(){return window.innerWidth<=991},poleListFormat(){const e=[];return this.poles.map((t=>{e.push({label:t.name,value:t.id})})),e}}},P=o(89);const k=(0,P.Z)(w,[["render",x],["__scopeId","data-v-9d8b65a4"]]);var F=k,I=o(7771),L=o(7402);function C(e,t,o,s,l,i){return(0,r.wg)(),(0,r.j4)((0,r.LL)(l.ProductFilter),{poles:o.poles,params:{poleKey:o.country,productKey:o.product}},null,8,["poles","params"])}function S(e,t,o,s,l,i){const a=(0,r.up)("pole-list");return(0,r.wg)(),(0,r.j4)(a,{poles:o.poles},null,8,["poles"])}var Z={name:"HotelFilter",props:{product:String,country:String,poles:Array},components:{PoleList:F}};const K=(0,P.Z)(Z,[["render",S]]);var D=K;function M(e,t,o,s,l,i){return(0,r.wg)(),(0,r.iD)("div")}var H={name:"CarFilter"};const $=(0,P.Z)(H,[["render",M]]);var j=$,q={name:"ProductFilter",components:{CarFilter:j,HotelFilter:D},props:{product:String,country:String,poles:Array},data(){return{ProductFilter:""}},watch:{product(e){switch(e){case"car":this.ProductFilter="CarFilter";break;case"hotel":this.ProductFilter="HotelFilter";break}}}};const W=(0,P.Z)(q,[["render",C]]);var z=W,V=o(809);const A={getPolesByCountry(e){try{return V.Z.checkLogin(`/poles/by-country/with-active-hotels/${e}`).then((e=>{const t=[];if(200!=e.status)return{success:!1,errors:"Fail check login"};for(let o of e.data)t.push({id:o.id,name:o.alias,active:!1});return t}))}catch(t){console.log(t)}}};var B=A,N={name:"ProductsListWrapper",components:{Searcher:b.Z,PoleList:F,ProductFilter:z},data(){return{product:"",country:"",loading:!1,noproduct:!1,poles:[],product_list:[],pole:""}},created(){B.getPolesByCountry(51).then((e=>{this.poles=e,this.poles[0].active=!0,this.search(this.poles[0].id),this.pole=this.poles[0].name,this.product=this.$route.params.productKey,this.country=this.$route.params.poleKey}))},computed:{ProductListTemplate(){switch(this.$route.params.productKey){case"car":return L.Z;case"hotel":return I.Z;default:return L.Z}}},methods:{getPoleInfo(e){this.nohotel=!1,this.loading=!1,this.product_list=[],this.poles.map((t=>{t.active=t.id==e})),this.search(e)},search(e){this.loading=!0,"car"===this.$route.params.productKey&&this.getCar(),"hotel"===this.$route.params.productKey&&this.getHotel(e)},handleProductFilter(e){this.product_list=e},getImage(e){for(let t of e)if(t.images){const e=this.getMainImage(t.images);e.length>0&&(t.image=e[0].url)}},getMainImage(e,t="original"){const o=e.filter((e=>1===e.order));if(o.length>0){const e=o[0].resources.filter((e=>e.image===t));if(e)return e}return[]},getCar(){V.Z.checkLogin("/car").then((e=>{if(this.loading=!1,e)if(e.data){this.product_list=e.data,this.product_list.map((e=>{e.image=o(206)}));for(let e of this.product_list)if(e.images){const t=this.getMainImage(e.images);t.length>0&&(e.image=t[0].url)}sessionStorage.setItem("cars",JSON.stringify(this.product_list))}else this.noproduct=!0}))},getHotel(e){V.Z.checkLogin(`/hotels/by-pole/${e}`).then((e=>{if(this.loading=!1,e)if(e.data){this.product_list=e.data,this.product_list.map((e=>{e.image=o(6697),e.segment={name:"playa",img:o(4594)}}));for(let e of this.product_list)if(e.images){const t=this.getMainImage(e.images);t.length>0&&(e.image=t[0].url)}}else this.nohotel=!0}))}}};const T=(0,P.Z)(N,[["render",f],["__scopeId","data-v-132637af"]]);var Y=T},6697:function(e,t,o){e.exports=o.p+"img/thumb1.fa214947.png"}}]);
//# sourceMappingURL=products_list.8094c50f.js.map