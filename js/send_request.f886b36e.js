"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[957],{8764:function(e,t,a){a.r(t),a.d(t,{default:function(){return Oe}});var s=a(3396),l=a(7139),o=a(9242);const r={class:"bg-white"},i={class:"text-white bg-white"},n={class:"flex flex-col pb-12 gap-y-6 bg-blue_1"},c=(0,s._)("h2",{class:"pt-6 text-3xl text-white md:text-6xl lg:text-4xl"},"- Enviar solicitud de reserva -",-1),u={class:"text-5xl font-Clarissa"},d={class:"container p-5 mx-auto border-2 border-white"},p={class:"flex flex-col flex-wrap justify-between flex-1 px-10 py-8 text-xl gap-x-3 gap-y-6 shadow-round bg-dark_blue_1 md:flex-row"},m={class:"flex items-center w-full gap-3"},f=(0,s._)("i",{class:"fas fa-check"},null,-1),h=[f],_={class:"flex flex-col w-full gap-3 md:flex-row"},x={class:"p-2 px-4 text-left bg-green-500 md:w-3/5"},g=["disabled"],b={class:"fa fa-spinner fa-pulse text-white"};function w(e,t,a,f,w,y){const k=(0,s.up)("general-request"),v=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("section",i,[(0,s._)("div",n,[c,(0,s._)("span",u,(0,l.zw)(a.title),1),(0,s._)("div",d,[(0,s.Wm)(k,{request:w.request_info,onUpdInfo:y.updRequest},null,8,["request","onUpdInfo"]),(0,s._)("form",p,[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Nombre completo*","onUpdate:modelValue":t[0]||(t[0]=e=>w.name=e),min:"0",class:"w-full px-6 py-2 text-left border text-orange_1 bg-dark_blue_1 md:w-1/2"},null,512),[[o.nr,w.name]]),(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Teléfono*","onUpdate:modelValue":t[1]||(t[1]=e=>w.phone=e),min:"0",class:"w-full px-6 py-2 text-left border text-orange_1 bg-dark_blue_1 md:w-1/5"},null,512),[[o.nr,w.phone]]),(0,s.wy)((0,s._)("input",{type:"email",placeholder:"Email*","onUpdate:modelValue":t[2]||(t[2]=e=>w.email=e),required:"",min:"0",class:"w-full px-6 py-2 text-left border text-orange_1 bg-dark_blue_1 md:w-1/4"},null,512),[[o.nr,w.email]]),(0,s.wy)((0,s._)("textarea",{id:"",placeholder:"Descripcion de su solicitud","onUpdate:modelValue":t[3]||(t[3]=e=>w.message=e),class:"w-full h-40 px-8 py-6 text-left border text-orange_1 bg-dark_blue_1"},null,512),[[o.nr,w.message]]),(0,s._)("div",m,[(0,s._)("span",{class:(0,l.C_)(["items-center inline px-2 py-1 border cursor-pointer bg-dark_blue_1",y.isActiveTerm]),onClick:t[4]||(t[4]=e=>w.activeTerm=!w.activeTerm)},h,2),(0,s._)("label",{class:"self-center text-orange_1",onClick:t[5]||(t[5]=e=>w.activeTerm=!w.activeTerm)},[(0,s.Uk)("He leido y acepto los "),(0,s.Wm)(v,{class:"text-light_blue_1",to:{name:"TermsAndPolicy"},target:"_blank"},{default:(0,s.w5)((()=>[(0,s.Uk)("Términos y condiciones")])),_:1})])]),(0,s._)("div",_,[(0,s.wy)((0,s._)("span",{class:"p-2 px-4 text-left bg-red md:w-3/5"},(0,l.zw)(w.error_message),513),[[o.F8,w.error]]),(0,s.wy)((0,s._)("span",x,"La solicitud fue enviada exitosamente!!!",512),[[o.F8,w.success]]),(0,s._)("button",{type:"button",class:"px-12 py-1 text-base text-white uppercase border md:text-xl bg-orange_1 border-orange_1 md:ml-auto hover:bg-dark_blue_1 hover:text-orange_1",onClick:t[6]||(t[6]=(...e)=>y.formSubmit&&y.formSubmit(...e)),disabled:w.buttonDisabled},[(0,s.wy)((0,s._)("i",b,null,512),[[o.F8,w.loading]]),(0,s.Uk)(" Enviar Solicitud")],8,g)])])])])])])}a(7658);const y={class:"flex flex-col gap-4 px-10 py-4 mb-6 text-xl shadow-round bg-dark_blue_1"},k={class:"flex flex-col gap-3 text-xl md:flex-row"},v=(0,s._)("h2",{class:"text-left md:w-1/12"},"Destino: ",-1),q={class:"px-4 text-left border-b md:w-2/5 capitalize"},D={class:"flex gap-3 text-xl"},R=(0,s._)("h2",{class:"text-left md:w-1/12"},"Producto: ",-1),z={class:"px-4 text-left border-b md:w-2/5 capitalize"};function C(e,t,a,o,r,i){return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",k,[v,(0,s._)("span",q,(0,l.zw)(a.request.destination),1)]),(0,s._)("div",D,[R,(0,s._)("span",z,(0,l.zw)(a.request.product),1)]),((0,s.wg)(),(0,s.j4)((0,s.LL)(r.components[a.request.type]),{info:a.request,onUpdInfo:i.updRequest},null,40,["info","onUpdInfo"]))])}const U={class:"flex flex-col items-center gap-3 p-4 border md:flex-row md:w-2/4"},P={key:0,class:"flex w-4/12 gap-3"},Y=(0,s._)("h2",null,"Cantidad: ",-1),H={key:2,class:"ml-6"},$={key:3,class:"text-3xl font-bold text-orange_1"};function S(e,t,a,r,i,n){const c=(0,s.up)("Datepicker");return(0,s.wg)(),(0,s.iD)("div",U,[n.isProduct("Remesas")?((0,s.wg)(),(0,s.iD)("div",P,[Y,(0,s.wy)((0,s._)("input",{class:"w-2/4 p-1 px-2 text-blue_1",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.inputVal=e)},null,512),[[o.nr,i.inputVal]])])):(0,s.kq)("",!0),n.isProduct("Carros")||n.isProduct("Hoteles")?((0,s.wg)(),(0,s.j4)(c,{key:1,class:"datepicker-container clear",modelValue:i.dateRange,"onUpdate:modelValue":t[1]||(t[1]=e=>i.dateRange=e),format:"dd/MM/yyyy",range:"","multi-calendars":"","auto-apply":"","enable-time-picker":!1,"close-on-auto-apply":!0,placeholder:n.placeholder,onChange:n.handleDate},null,8,["modelValue","placeholder","onChange"])):(0,s.kq)("",!0),n.isProduct("Hoteles")?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("h2",H,(0,l.zw)(n.isProduct("Remesas")?"Precio a pagar:":"Precio desde:"),1)),n.isProduct("Hoteles")?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",$,"$"+(0,l.zw)(n.calcPrice),1))])}var V=a(9024),M=a(6797),T=a.n(M),I={name:"HomeRequest",props:{info:{required:!0}},components:{Datepicker:V.Z},data(){return{dateRange:{},margin:0,price:0,inputVal:100,prod:{}}},created(){this.margin=this.info.price,this.prod=this.info},watch:{price(){this.updRequest()},dateRange(){this.updRequest()}},computed:{calcPrice(){let e=this.info.price;return e=this.inputVal*this.margin/100,e},placeholder(){let e;return this.isProduct("Hoteles")?e="Fecha de entrada y salida":this.isProduct("Carros")&&(e="Fecha de recogida y entrega"),e}},methods:{handleDate(e){this.dateRange.startDate=T()(e[0].toString()).format("DD-MM-YYYY"),this.dateRange.endDate=T()(e[1].toString()).format("DD-MM-YYYY")},isProduct(e){return this.info.product==e&&(this.updRequest(),!0)},updRequest(){this.price=this.calcPrice,this.price>0&&this.$emit("updInfo",{date:`${this.dateRange.startDate} - ${this.dateRange.endDate}`,initprice:this.inputVal,price:this.price})}}},E=a(89);const F=(0,E.Z)(I,[["render",S]]);var Z=F;const N={class:"flex flex-col flex-wrap shadow-round bg-dark_blue_1 text-xl px-3 md:px-10 py-4 mb-6 md:flex-row"},j={class:"flex flex-col gap-3 items-start md:w-3/12"},B={class:"capitalize"},L=(0,s._)("b",null,"Pais: ",-1),A={key:0},O=(0,s._)("b",null,"Polo: ",-1),W={key:1,class:"capitalize"},G=(0,s._)("b",null,"Producto:",-1),J={class:"flex flex-col gap-3 items-start py-3 px-8 border my-2 md:w-9/12 md:m-0"},K={class:"flex gap-x-3 flex-col md:flex-row"},Q={key:0,class:"capitalize"},X={key:1,class:"text-base self-center"},ee={key:0,class:"flex flex-col w-full gap-x-3 gap-y-6 md:flex-row"},te=(0,s._)("div",{class:"flex flex-col gap-y-1 items-start md:w-5/12"},[(0,s._)("small",{class:"text ml-3"},"Fecha")],-1),ae={key:1,class:"flex flex-col text-left w-full gap-y-2"},se={class:"flex gap-x-4 text-base pb-2"},le=(0,s._)("b",null,"Plan:",-1),oe={class:"flex gap-x-4 text-base pb-2"},re=(0,s._)("b",null,"Habitaciones:",-1),ie=(0,s._)("b",null,"Noches:",-1),ne=(0,s._)("b",null,"Personas:",-1),ce={key:2,class:"self-end text-2xl font-bold ml-auto"},ue={class:"text-orange_1"};function de(e,t,a,o,r,i){const n=(0,s.up)("number-imput");return(0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("div",j,[(0,s._)("span",B,[L,(0,s.Uk)(" "+(0,l.zw)(a.info.country),1)]),a.info.pole?((0,s.wg)(),(0,s.iD)("span",A,[O,(0,s.Uk)(" "+(0,l.zw)(a.info.pole),1)])):(0,s.kq)("",!0),""!=a.info.product?((0,s.wg)(),(0,s.iD)("span",W,[G,(0,s.Uk)(" "+(0,l.zw)(a.info.product),1)])):(0,s.kq)("",!0)]),(0,s._)("div",J,[(0,s._)("div",K,[i.ishotel?((0,s.wg)(),(0,s.iD)("b",Q,(0,l.zw)(a.info.product_name),1)):(0,s.kq)("",!0),i.ishotel?((0,s.wg)(),(0,s.iD)("span",X,"("+(0,l.zw)(i.formatDate)+")",1)):(0,s.kq)("",!0)]),a.info.is_home_request?((0,s.wg)(),(0,s.iD)("div",ee,[te,"Hoteles"==a.info.product?((0,s.wg)(),(0,s.j4)(n,{key:0,class:"md:w-4/12",title:"Cantidad de personas",min:1,value:a.info.num_person,id:1,onUpdVal:e.updPerson},null,8,["value","onUpdVal"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),i.ishotel?((0,s.wg)(),(0,s.iD)("article",ae,[(0,s._)("section",se,[(0,s._)("span",null,[le,(0,s.Uk)(" "+(0,l.zw)(a.info.category),1)])]),(0,s._)("section",oe,[(0,s._)("span",null,[re,(0,s.Uk)(" "+(0,l.zw)(a.info.num_rooms),1)]),(0,s._)("span",null,[ie,(0,s.Uk)(" "+(0,l.zw)(i.numNights),1)]),(0,s._)("span",null,[ne,(0,s.Uk)(" "+(0,l.zw)(a.info.num_person),1)])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.info.rooms,((e,t)=>((0,s.wg)(),(0,s.iD)("section",{class:"flex gap-x-3 text-base",key:t},[(0,s._)("span",null,(0,l.zw)(e.type)+":",1),(0,s._)("span",null,(0,l.zw)(e.comb),1)])))),128))])):(0,s.kq)("",!0),a.info.price>0?((0,s.wg)(),(0,s.iD)("span",ce,[(0,s.Uk)("Precio total:"),(0,s._)("span",ue," $"+(0,l.zw)(a.info.price),1)])):(0,s.kq)("",!0)])])}var pe={name:"HotelRequest",props:{info:{default:{}}},data(){return{rooms:["Simple","Doble","Triple"],dateRange:null,num_nights:1,request_info:{type:"home",handler:{}}}},computed:{ishotel(){return"hotel"==this.info.type},persons(){const e="hotel"==this.info.product?this.info.num_person:e;return e},formatDate(){const e=this.info.date.split("/");let t;return t=e.length>1?e[0]+" - "+e[1]:T()(e[0]).format("DD/MM/YYYY"),t},numNights(){const e=this.info.date.split("/");let t,a,s=1;return e.length>1&&(t=T()(e[0],"DD/MM/YYYY"),a=T()(e[1],"DD/MM/YYYY"),s=a.diff(t,"days")),s}}};const me=(0,E.Z)(pe,[["render",de]]);var fe=me;const he=e=>((0,s.dD)("data-v-0bf25521"),e=e(),(0,s.Cn)(),e),_e={class:"flex flex-col flex-wrap shadow-round bg-dark_blue_1 text-xl px-3 md:px-10 py-4 mb-6 md:flex-row"},xe={class:"flex flex-col gap-3 items-start md:w-3/12"},ge={class:"capitalize"},be=he((()=>(0,s._)("b",null,"Pais: ",-1))),we={key:0},ye=he((()=>(0,s._)("b",null,"Polo: ",-1))),ke={key:1,class:"capitalize"},ve=he((()=>(0,s._)("b",null,"Producto:",-1))),qe={class:"flex flex-col gap-3 items-start py-3 px-8 border my-2 md:w-9/12 md:m-0"},De={class:"flex bg-white text-gray-700 w-1/3"},Re={class:"flex flex-col text-left w-full gap-y-2"},ze={class:"flex gap-x-4 text-base pb-2"},Ce=he((()=>(0,s._)("b",null,"Fecha: ",-1))),Ue={class:"flex gap-x-4 text-base pb-2"},Pe=he((()=>(0,s._)("b",null,"Auto:",-1))),Ye={class:"flex gap-x-4 text-base pb-2"},He=he((()=>(0,s._)("b",null,"Motor:",-1))),$e={key:0,class:"self-end text-2xl font-bold ml-auto"},Se={class:"text-orange_1"};function Ve(e,t,a,o,r,i){const n=(0,s.up)("Multiselect");return(0,s.wg)(),(0,s.iD)("div",_e,[(0,s._)("div",xe,[(0,s._)("span",ge,[be,(0,s.Uk)(" "+(0,l.zw)(a.info.country),1)]),a.info.pole?((0,s.wg)(),(0,s.iD)("span",we,[ye,(0,s.Uk)(" "+(0,l.zw)(a.info.pole),1)])):(0,s.kq)("",!0),""!=a.info.product?((0,s.wg)(),(0,s.iD)("span",ke,[ve,(0,s.Uk)(" "+(0,l.zw)(a.info.product),1)])):(0,s.kq)("",!0)]),(0,s._)("div",qe,[(0,s._)("div",De,[(0,s.Wm)(n,{mode:"single",modelValue:r.car_pickup_place,"onUpdate:modelValue":t[0]||(t[0]=e=>r.car_pickup_place=e),searchable:!0,options:r.car_pickup_places,classes:r.select_style_opt,placeholder:"Seleccione Lugar *",onChange:i.updInfo},null,8,["modelValue","options","classes","onChange"])]),(0,s._)("div",null,[(0,s._)("article",Re,[(0,s._)("section",ze,[(0,s._)("span",null,[Ce,(0,s.Uk)(" ("+(0,l.zw)(a.info.date)+") ",1)])]),(0,s._)("section",Ue,[(0,s._)("span",null,[Pe,(0,s.Uk)(" "+(0,l.zw)(a.info.car_category.alias),1)])]),(0,s._)("section",Ye,[(0,s._)("span",null,[He,(0,s.Uk)(" "+(0,l.zw)(a.info.car_engine.alias),1)])])])]),a.info.price>0?((0,s.wg)(),(0,s.iD)("span",$e,[(0,s.Uk)("Precio total:"),(0,s._)("span",Se," $"+(0,l.zw)(a.info.price),1)])):(0,s.kq)("",!0)])])}var Me=a(9810),Te=a(5607),Ie={name:"CarRequest",components:{Multiselect:Me.Z},props:{info:{default:{}}},data(){return{formattedDate:"",dateRange:null,car_pickup_places:[],car_pickup_place:"",request_info:{type:"car",handler:{}},select_style_opt:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-white bg-dark_blue_1 text-base leading-snug outline-none",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-8 border-transparent text-base font-sans bg-dark_blue_1 pl-2 rtl:pl-0 rtl:pr-3.5",placeholder:"flex items-center w-full h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-white rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",optionSelected:"text-white bg-light_gray_1"}}},async created(){this.car_pickup_places=await Te.Z.getPlaces()},computed:{getCar(){if(this.info.car_category||this.info.car_engine)return{car_category:this.info.car_category,car_engine:this.info.car_engine}}},methods:{updInfo(){this.$nextTick((()=>{this.$emit("updInfo",{car_pickup_place_id:this.car_pickup_place})}))}}};const Ee=(0,E.Z)(Ie,[["render",Ve],["__scopeId","data-v-0bf25521"]]);var Fe=Ee,Ze={name:"GeneralRequest",props:{request:{required:!0}},components:{HomeRequest:Z,HotelRequest:fe,CarRequest:Fe},data(){return{components:{home:"HomeRequest",hotel:"HotelRequest",car:"CarRequest"}}},methods:{updRequest(e){const t={destination:this.request.destination,product:this.request.product,is_hotel:"hotel"===this.request.type,...e};this.$emit("updInfo",t)}}};const Ne=(0,E.Z)(Ze,[["render",C]]);var je=Ne,Be=a(809),Le={name:"ContactoComp",props:{title:{require:!1,default:"Solicitud"}},components:{GeneralRequest:je},data(){return{loading:!1,activeTerm:!1,is_hotel:!0,success:!1,error_message:"Error. No se pudo enviar la solicitud!!!",error:!1,request_info:{type:"home"},name:"",phone:"",email:"",message:"",subject:"",msg_info:{},buttonDisabled:!1}},beforeMount(){const e=localStorage.getItem("request_info");e?(this.request_info=e&&JSON.parse(e),void 0!=this.request_info&&(this.subject=this.request_info.product)):this.$router.push({name:"Home"})},unmounted(){localStorage.removeItem("request_info")},watch:{dateRange(e){this.request.date=e.startDate}},computed:{isActiveTerm(){return this.activeTerm?"text-orange_1":"text-dark_blue_1"}},methods:{updPerson(e){this.request.num_person=e.val},async formSubmit(){if(this.loading=!0,this.buttonDisabled=!0,this.error=!1,this.validateForm(),this.error)return this.buttonDisabled=!1,void(this.loading=!1);let e=JSON.parse(localStorage.getItem("request_info"));if("hotel"===e.type&&this.sendRequestHotel(e),"car"===e.type){if(this.validateCar(),this.error)return void(this.buttonDisabled=!1);this.sendRequestCar(e)}this.buttonDisabled=!1,this.loading=!1},validateForm(){if(""===this.name||""===this.phone){this.error=!0;let e="Debe llenar los datos del formulario antes de enviar la solicitud.";return this.$swal({title:"Error de validación",text:e,icon:"error",confirmButtonColor:"#3085d6"}),void(this.buttonDisabled=!1)}if(!this.activeTerm){this.error=!0;let e="Debe aceptar términos antes de enviar la solicitud.";return this.$swal({title:"Error de validación",text:e,icon:"error",confirmButtonColor:"#3085d6"}),void(this.buttonDisabled=!1)}if(!this.validEmail(this.email)){this.error=!0;let e="Debe insertar una dirección de correo válida.";return this.$swal({title:"Error de validación",text:e,icon:"error",confirmButtonColor:"#3085d6"}),void(this.buttonDisabled=!1)}},async sendRequestCar(e){const t={name:this.name,phone:this.phone,email:this.email,description:this.message,destination:e.destination,product:e.product,car_category:e.car_category,car_engine:e.car_engine,car_pickup_places:e.car_pickup_places,price:e.price,prod:e.prod};try{await this.sendRequest(t)}catch(a){console.log(a)}},async sendRequestHotel(e){const t={name:this.name,phone:this.phone,email:this.email,description:this.message,destination:e.destination,product:e.product,num_nights:e.num_nights,price:e.price,prod:e.prod};try{await this.sendRequest(t)}catch(a){console.log(a)}},async sendRequest(e){try{await Be.Z.checkLogin("/booking/create",{data:e,auth:"bearer"},"post"),localStorage.removeItem("request_info"),this.success=!0,this.$swal({title:"Success",text:"Operación es exitosa",icon:"success",confirmButtonColor:"#3085d6"}),setTimeout((()=>{this.$router.push({name:"Home"})}),5e3)}catch(t){localStorage.removeItem("request_info"),this.$swal({title:"Error",text:"No se pudo enviar la solicitud",icon:"error",confirmButtonColor:"#3085d6"}),this.error=!0,this.buttonDisabled=!1,setTimeout((()=>{this.error=!1,this.$router.push({name:"Home"})}),8e3)}},validEmail(e){return!(!e||!e.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/))},validateCar(){if(this.msg_info.car_pickup_place_id)return!0;this.error=!0,this.$swal({title:"Error de validación",text:"Falta seleccionar el lugar!!!",icon:"error",confirmButtonColor:"#3085d6"})},updRequest(e){this.msg_info=e}}};const Ae=(0,E.Z)(Le,[["render",w]]);var Oe=Ae}}]);
//# sourceMappingURL=send_request.f886b36e.js.map