(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023ea5d0"],{2401:function(e,t,a){"use strict";a("5b8f")},"2da4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"bg-white"},[a("h2",{staticClass:"text-3xl pt-6 text-blue \n      md:text-4xl\n      lg:text-3xl"},[e._v("- Términos y Políticas -")]),a("span",{staticClass:"font-Clarissa text-5xl"},[e._v(e._s(e.country))]),a("searcher")],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"bg-white text-white"},[a("div",{staticClass:"bg-blue pb-10"},[a("article",{staticClass:"py-10 m-auto w-8/12 text-justify font-DIN text-xl"},[a("h3",[e._v("Términos y Condiciones IRIS TRAVEL GROUP")]),a("p",[e._v("Los términos y condiciones que se presentan a continuación, regulan las relaciones con nuestros usuarios y establecen la forma en que se deben utilizar nuestros productos y servicios, le recomendamos leerlos con detenimiento, previo a cualquier solicitud. Una vez expresada su conformidad con dichos términos, significa que usted leyó y comprendió todos los términos y condiciones relativos a las políticas formuladas. ")]),a("h3",[e._v("Pagos")]),a("p",[e._v("Los pagos se realizarán por adelantado, por transferencia, efectivo o por tarjeta de crédito la que será debitada, dentro de un plazo de 24 horas, después de acordado con el Comercial que le brinda asistencia. La Agencia solo acepta pagos en línea con las tarjetas de crédito siguientes: Visa, MasterCard y American Express. Los precios de los servicios pueden estar sujetos a cambios, con excepción de aquellos casos en que la reservación ha sido confirmada. En caso de cambios relativos a un aumento en el precio/tarifa, la suma se abonará en el momento del cambio y no será efectivo hasta tanto no se haya recibido dicho pago y hasta que el suministrador no haya confirmado la disponibilidad. ")]),a("h3",[e._v("Cancelaciones - Reembolsos")]),a("p",[e._v("Todos los servicios no son reembolsables, si el cliente tuviese necesidad de cambiar o cancelar sus planes de viaje, será responsabilidad suya notificar a la Agencia por escrito de dicho cambio. ")]),a("p",[e._v("Una vez efectuado el pago de la reservación, se aplicará la siguiente política de cancelación, penalidades y No Show:")]),a("p",[e._v("Gastos de cancelación: De acuerdo a lo estipulado en la política de cancelación de cada producto (hoteles, casas, coches, traslados, vuelos internacionales, boletos domésticos, excursiones, etc). ")])])])])}],n=a("5607"),r=a("72d1"),i={name:"Hotels",components:{Searcher:n["a"]},data:function(){return{terms:""}},created:function(){var e=this;r["a"].getText("terms").then((function(t){return e.terms=t}))},methods:{}},c=i,l=(a("8424"),a("2877")),u=Object(l["a"])(c,s,o,!1,null,"73e8f684",null);t["default"]=u.exports},5607:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-white pb-12"},[a("div",{staticClass:"container pt-10"},[a("div",{staticClass:"flex gap-x-3 justify-center items-center w-11/12 border rounded-4xl bg-blue cursor-pointer text-lg text-white m-auto py-2\n        md:w-2/5 md:text-xl",on:{click:function(t){e.visible=!e.visible}}},[a("i",{staticClass:"fa fa-search"}),a("h1",[e._v(e._s(e.title))]),e.visible?a("i",{staticClass:"fa fa-times"}):e._e()]),a("form",{staticClass:"flex flex-col gap-y-3 text-center w-10/12 rounded-3xl text-base tracking-wider shadow-blue-lg font-semibold m-auto\n        md:px-8",class:{"visible-form":e.visible},attrs:{id:"searchForm"},on:{submit:e.formSubmit}},[a("div",{staticClass:"w-full flex flex-col justify-around items-center gap-x-1 gap-y-6 px-3 pt-6 \n            md:flex-row"},[a("model-select",{staticClass:"search-select border border-blue rounded-4xl text-darkGray\n                    md:w-4/12 md:py-2.5 md:text-lg",attrs:{options:e.destinations,placeholder:"Seleccione destino"},model:{value:e.selectedDestination,callback:function(t){e.selectedDestination=t},expression:"selectedDestination"}}),a("model-select",{staticClass:"search-select border border-blue rounded-4xl text-darkGray\n                    md:w-5/12 md:py-2.5 md:text-lg",attrs:{options:e.hotels,placeholder:"Seleccione el hotel (opcional)"},model:{value:e.formData.hotel,callback:function(t){e.$set(e.formData,"hotel",t)},expression:"formData.hotel"}}),a("date-picker",{attrs:{format:"DD-MM-YYYY","input-class":"dateRangePicker",editable:!1,range:""},model:{value:e.formData.dateRange,callback:function(t){e.$set(e.formData,"dateRange",t)},expression:"formData.dateRange"}})],1),a("div",{staticClass:"w-full flex flex-col justify-around items-center gap-x-1 gap-y-6 px-6\n            md:flex-row"},[a("stars",{attrs:{star_init:e.formData.stars,star_style:"block"},on:{getStar:e.updStar}}),a("div",{staticClass:"relative w-11/12 border border-blue rounded-4xl text-darkGray text-base py-4\n                md:ml-auto md:w-2/5 md:px-6 md:py-2"},[a("div",{staticClass:"flex flex-col items-center justify-around gap-x-2\n                    md:flex-row"},[a("i",{staticClass:"fas fa-door-open"}),a("span",[e._v(" "+e._s(e.noRooms)+" Habitacion ")]),a("i",{staticClass:"fa fa-user"}),a("span",[e._v(" "+e._s(e.numperson)+" Personas ")]),a("div",{staticClass:"cursor-pointer text-orange text-xl\n                        md:ml-auto",on:{click:function(t){e.visible_person=!e.visible_person}}},[a("i",{staticClass:"fas fa-edit"})])]),a("div",{staticClass:"absolute right-0 top-50 bg-white border-lightGray rounded-3xl px-3",class:{"visible-numperson":e.visible_person},attrs:{id:"rooms"}},[a("num-person",{attrs:{r:this.formData.rooms},on:{close:function(t){e.visible_person=!1},addRoom:e.updNumRooms,subRoom:e.updNumRooms}})],1)])],1),e._m(0)])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-auto px-6 pt-4"},[a("button",{staticClass:"uppercase bg-orange text-white text-xl rounded-4xl px-12 py-1",attrs:{type:"submit",value:"buscar"}},[e._v("Buscar")])])}],n=a("b85c"),r=(a("a434"),a("c042")),i=a("c1df"),c=a.n(i),l=a("b410"),u=(a("41e9"),a("ab0f")),d=a("50b8"),f=(a("4362"),a("ec45")),m=(a("411c"),{name:"Searcher",props:{title:{require:!1,default:"Busca vacaciones a la medida"}},components:{ModelSelect:l["ModelSelect"],NumPerson:u["a"],Stars:d["a"],DatePicker:f["a"]},data:function(){return{activeTerm:!1,visible:!1,visible_person:!1,default_date:"20-01-022 ~ 20-02-2022",formData:{rooms:[{adults:1,children:0,infants:0}],dateRange:null,destination:{value:"",text:""},hotel:{value:"",text:""},stars:3},selectedDestination:{value:"",text:""},destinations:[],hotels:[],noRooms:1}},created:function(){this.init()},watch:{selectedDestination:function(e){var t=this,a=e.value;this.formData.destination=e,r["a"].getHotels(a).then((function(e){t.formData.hotel={},t.hotels=[],t.hotels=e}))}},computed:{numperson:function(){var e,t=0,a=Object(n["a"])(this.formData.rooms);try{for(a.s();!(e=a.n()).done;){var s=e.value;t+=s.adults+s.children}}catch(o){a.e(o)}finally{a.f()}return t}},methods:{init:function(){var e=this;r["a"].getSearchInfo().then((function(t){if(e.destinations=t.destinations,e.hotels=t.hotels,localStorage.getItem("searchform")){var a=JSON.parse(localStorage.getItem("searchform"));e.formData.dateRange=[new Date(c()(a.dateRange[0])),new Date(c()(a.dateRange[1]))],e.selectedDestination=a.destination,e.formData.hotel=a.hotel,e.formData.stars=a.stars,e.formData.rooms=[];var s,o=Object(n["a"])(a.rooms);try{for(o.s();!(s=o.n()).done;){var r=s.value;e.formData.rooms.push({adults:r.adults,children:r.children,infants:r.infants})}}catch(i){o.e(i)}finally{o.f()}}}))},formSubmit:function(e){e.preventDefault(),localStorage.clear(),localStorage.setItem("searchform",JSON.stringify(this.formData)),console.log(this.formData),"/resultado-de-busqueda"!=this.$route.fullPath?this.$router.push({name:"SearchResult"}):this.$emit("updparams")},updStar:function(e){this.formData.starts=e},updNumRooms:function(e){"add"==e.action?this.formData.rooms.push({adults:1,children:0,infants:0}):"del"==e.action&&this.formData.rooms.splice(e.pos,1),this.noRooms=this.formData.rooms.length}}}),p=m,h=(a("2401"),a("2877")),v=Object(h["a"])(p,s,o,!1,null,"08f2c1dd",null);t["a"]=v.exports},"5b8f":function(e,t,a){},"66ac":function(e,t,a){},8424:function(e,t,a){"use strict";a("66ac")},c042:function(e,t,a){"use strict";var s=a("b85c"),o=a("1da1"),n=(a("a4d3"),a("e01a"),a("96cf"),a("860c")),r={getSearchInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getHotels();case 3:return a=t.sent,t.next=6,e.getDestinations();case 6:return s=t.sent,t.abrupt("return",{hotels:a||[],destinations:s||[]});case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getHotels:function(){var e=arguments;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,o,r,i,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:void 0,t.prev=1,o=void 0==a?"/hotels":"/hotels/by-pole/".concat(a),r=[],t.next=6,n["a"].checkLogin(o);case 6:if(i=t.sent,i&&200==i.status){c=Object(s["a"])(i.data);try{for(c.s();!(l=c.n()).done;)u=l.value,r.push({text:u.alias,value:u.id})}catch(d){c.e(d)}finally{c.f()}}return t.abrupt("return",r);case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getDestinations:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,o,r,i,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n["a"].checkLogin("/poles");case 3:if(t=e.sent,a=t.status,o=t.data,200!=a){e.next=11;break}r=[],i=Object(s["a"])(o);try{for(i.s();!(c=i.n()).done;)l=c.value,r.push({text:l.alias,value:l.id})}catch(u){i.e(u)}finally{i.f()}return e.abrupt("return",r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},getOffers:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,o,r,i,c,l,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n["a"].checkLogin("/offers");case 3:if(t=e.sent,a=[],!t){e.next=12;break}if(200!=t.status){e.next=11;break}o=Object(s["a"])(t.data);try{for(o.s();!(r=o.n()).done;)if(i=r.value,i.active){if(c={id:i.id,name:i.title,keyword:i.keyword,description:i.description,info:i.info,price:i.price_from,country:"Cuba",btn:"contactar"},i.hasOwnProperty("image")){l=Object(s["a"])(i.image[0].resources);try{for(l.s();!(u=l.n()).done;)d=u.value,"original"==d.image&&(c.img=d.url)}catch(f){l.e(f)}finally{l.f()}}a.push(c)}}catch(f){o.e(f)}finally{o.f()}e.next=12;break;case 11:return e.abrupt("return",{success:!1,errors:"Fail check login"});case 12:return e.abrupt("return",a);case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}};t["a"]=r}}]);
//# sourceMappingURL=chunk-023ea5d0.07e38b2c.js.map