(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98ef7fba"],{"6bb8":function(t,e,a){},9820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"bg-white"},[a("h2",{staticClass:"text-3xl pt-6 text-blue \n      md:text-6xl\n      lg:text-4xl"},[t._v("- Hotel -")]),a("span",{staticClass:"font-Clarissa text-5xl"},[t._v("Cuba")]),a("searcher",{on:{updparams:t.updSearch}})],1),a("section",{staticClass:"bg-white text-white py-6"},[a("div",{staticClass:"bg-blue-180 pb-10"},[a("div",{staticClass:"flex flex-wrap justify-center gap-4 text-sm m-auto \n         md:text-2xl md:w-4/6"}),a("div",{staticClass:"container flex flex-col gap-20 items-center py-10"},[t._l(t.product_list,(function(e,s){return a("product-list-template",{key:s,attrs:{item:e,index:s,not_found:!0,params:{poleKey:t.country,productKey:t.product,comb:t.search_params.rooms}}})})),0==this.product_list.length?a("span",[t._v("No se encontro ningun precio para el rango de fecha determinado. Intente con otro rango.")]):t._e()],2)])])])},o=[],c=(a("ac1f"),a("841c"),a("d81d"),a("c1df")),n=a.n(c),r=a("5607"),i=a("0466"),l=a("860c"),u={name:"SearchResult",components:{Searcher:r["a"],ProductListTemplate:i["a"]},data:function(){return{product:"",country:"",poles:[],search_params:{},product_list:[],pole:""}},created:function(){this.search()},methods:{getPoleInfo:function(t){this.poles.map((function(e,a){e.active=t==a}))},updSearch:function(){this.search()},search:function(){var t=this,e=JSON.parse(localStorage.getItem("searchform"));e&&(this.search_params={hotel_id:e.hotel.value,date_from:n()(e.dateRange[0]).format("YYYY-MM-DD"),date_to:n()(e.dateRange[1]).format("YYYY-MM-DD"),pole_id:e.destination.value,rooms:e.rooms}),this.search_params.auth="bearer",l["a"].checkLogin("/search/hotels/prices",this.search_params,"post").then((function(e){t.product="hotel",t.country="cuba",e&&(t.product_list=e.data,t.product_list.map((function(t){t.segment={name:"playa",img:a("4335")}})))}))}}},p=u,d=(a("fb3b"),a("2877")),h=Object(d["a"])(p,s,o,!1,null,"6039c053",null);e["default"]=h.exports},fb3b:function(t,e,a){"use strict";a("6bb8")}}]);
//# sourceMappingURL=chunk-98ef7fba.e18ce5a8.js.map