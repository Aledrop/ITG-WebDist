(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d1f342"],{"11e4":function(e,t,a){"use strict";a("8b10")},"2bb8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"bg-white text-white"},[e._m(0),a("div",{staticClass:"bg-blue-180 pb-12"},[a("h2",{staticClass:"text-3xl py-6 text-white \n            md:text-6xl\n            lg:text-4xl"},[e._v("- Crear nueva cuenta -")]),a("div",{staticClass:"container border-dashed border-2 rounded border-white p-5"},[a("form",{staticClass:"flex gap-x-3 gap-y-6 flex-wrap shadow-round bg-darkBlue text-xl px-10 py-8"},[a("h3",{staticClass:"w-full text-left border-b font-bold text-2xl pb-2"},[e._v("Informacion Personal")]),a("div",{staticClass:"flex flex-wrap gap-y-6 gap-x-3 w-full"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],staticClass:"w-5/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"first_name",type:"text",placeholder:"Nombre *",required:""},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-3/11 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"email",type:"email",placeholder:"E-Mail *",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],staticClass:"w-5/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"last_name",type:"text",placeholder:"Apellido *",required:""},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"w-3/11 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"phone",type:"text",placeholder:"Teléfono"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),a("div",{staticClass:"flex flex-col items-start w-full"},[a("h4",{staticClass:"w-full text-left pb-3"},[e._v("Genero *")]),a("div",{staticClass:"flex border rounded-4xl items-start gap-x-6 p-3"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{name:"gender",type:"radio",value:"1"},domProps:{checked:e._q(e.gender,"1")},on:{change:function(t){e.gender="1"}}}),e._v(" Masculino ")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{name:"gender",type:"radio",value:"2"},domProps:{checked:e._q(e.gender,"2")},on:{change:function(t){e.gender="2"}}}),e._v(" Femenino ")])])])]),a("h3",{staticClass:"w-full text-left border-b font-bold text-2xl pb-2"},[e._v("Seguridad")]),a("div",{staticClass:"flex gap-x-3 w-full text-left font-bold text-2xl pb-2"},["checkbox"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"password",placeholder:"Contraseña *",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var a=e.password,s=t.target,r=!!s.checked;if(Array.isArray(a)){var o=null,n=e._i(a,o);s.checked?n<0&&(e.password=a.concat([o])):n>-1&&(e.password=a.slice(0,n).concat(a.slice(n+1)))}else e.password=r}}}):"radio"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"password",placeholder:"Contraseña *",required:"",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"password",placeholder:"Contraseña *",required:"",type:e.showpass?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),"checkbox"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"repassword",placeholder:"Repetir Contraseña *",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.repassword)?e._i(e.repassword,null)>-1:e.repassword},on:{change:function(t){var a=e.repassword,s=t.target,r=!!s.checked;if(Array.isArray(a)){var o=null,n=e._i(a,o);s.checked?n<0&&(e.repassword=a.concat([o])):n>-1&&(e.repassword=a.slice(0,n).concat(a.slice(n+1)))}else e.repassword=r}}}):"radio"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"repassword",placeholder:"Repetir Contraseña *",required:"",type:"radio"},domProps:{checked:e._q(e.repassword,null)},on:{change:function(t){e.repassword=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],staticClass:"w-3/10 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"repassword",placeholder:"Repetir Contraseña *",required:"",type:e.showpass?"text":"password"},domProps:{value:e.repassword},on:{input:function(t){t.target.composing||(e.repassword=t.target.value)}}}),a("div",{staticClass:"flex items-center gap-x-4"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.showpass,expression:"!showpass"}],attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye-slash"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.showpass,expression:"showpass"}],attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye"})]),a("small",{directives:[{name:"show",rawName:"v-show",value:!e.samepass,expression:"!samepass"}],staticClass:"text-red-700"},[e._v("Las contraseñas deben ser iguales.")])])]),a("hr"),a("h3",{staticClass:"w-full text-left border-b font-bold text-2xl pb-2"},[e._v("Direcciones")]),a("div",{staticClass:"flex flex-wrap gap-y-6 gap-x-3 w-full"},[a("model-select",{staticClass:"border border-white rounded-4xl text-orange bg-darkBlue font-500 text-xl text-left px-6 py-3",attrs:{options:e.countries,placeholder:"Seleccione País *",required:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.province,expression:"province"}],staticClass:"w-4/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"province",type:"text",placeholder:"Provincia"},domProps:{value:e.province},on:{input:function(t){t.target.composing||(e.province=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"w-4/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"city",type:"text",placeholder:"Ciudad"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.zip_code,expression:"zip_code"}],staticClass:"w-4/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"zip_code",type:"text",placeholder:"Codigo Postal"},domProps:{value:e.zip_code},on:{input:function(t){t.target.composing||(e.zip_code=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"w-8/12 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"address",type:"text",placeholder:"Dirección"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})],1),a("hr"),a("h3",{staticClass:"w-full text-left border-b font-bold text-2xl pb-2"},[e._v("Informacion de Agencia")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_agent,expression:"is_agent"}],attrs:{id:"is_agent",name:"is_agent",type:"checkbox"},domProps:{checked:Array.isArray(e.is_agent)?e._i(e.is_agent,null)>-1:e.is_agent},on:{change:function(t){var a=e.is_agent,s=t.target,r=!!s.checked;if(Array.isArray(a)){var o=null,n=e._i(a,o);s.checked?n<0&&(e.is_agent=a.concat([o])):n>-1&&(e.is_agent=a.slice(0,n).concat(a.slice(n+1)))}else e.is_agent=r}}}),a("label",{attrs:{for:"is_agent"}},[e._v("Agente de viaje")]),a("div",{staticClass:"flex gap-3 w-full"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],staticClass:"w-2/7 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"company",type:"text",placeholder:"Compañía"},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iata,expression:"iata"}],staticClass:"w-2/7 border rounded-4xl text-orange bg-darkBlue text-left px-6 py-2",attrs:{name:"iata",type:"text",placeholder:"IATA"},domProps:{value:e.iata},on:{input:function(t){t.target.composing||(e.iata=t.target.value)}}})]),a("div",{staticClass:"flex flex-col text-left w-full py-6"},[a("small",[e._v(" Los campos obligatorios marcados con un (*) deben ser rellenados. ")]),e.error_message?a("div",{staticClass:"flex bg-red-500 rounded-3xl w-full text-left text-4xl p-4 my-3"},[a("i",{staticClass:"fa fa-times-circle"}),a("h5",{staticClass:"text-xl self-center px-2"},[e._v(" Error enviando informacion. No se pudo crear el nuevo usuario "),a("p",[e._v(e._s(e.error_message_text))])])]):e._e(),e.success_message?a("div",{staticClass:"flex bg-green-500 rounded-3xl w-full text-left text-4xl p-4 my-3"},[a("i",{staticClass:"fa fa-check-circle"}),a("h5",{staticClass:"text-xl self-center px-2"},[e._v("La información ha sido enviada satisfactoriamente.")])]):e._e()]),a("button",{staticClass:"uppercase bg-orange text-white text-xl rounded-4xl font-bold ml-auto px-12 py-1",on:{click:e.addClient}},[e._v("Enviar")])])])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",[s("img",{attrs:{src:a("7d5f"),alt:""}})])}],o=a("b85c"),n=a("1da1"),l=(a("96cf"),a("b410")),i=(a("41e9"),a("860c")),d={name:"NewClient",components:{ModelSelect:l["ModelSelect"]},data:function(){return{error_message_text:"",error_message:!1,success_message:!1,activeTerm:!1,samepass:!0,showpass:!1,first_name:"",last_name:"",phone:"",email:"",gender:"",password:"",repassword:"",address:"",city:"",province:"",zip_code:"",iata:"",company:"",is_agent:"",countries:[],country:{value:"",text:""}}},created:function(){this.getCountry()},watch:{repassword:function(){this.samepass=this.repassword==this.password,this.samepass=""==this.repassword&&""==this.password}},methods:{getCountry:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,r,n,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i["a"].checkLogin("/country");case 3:if(a=t.sent,s=a.status,r=a.data,200==s){n=Object(o["a"])(r);try{for(n.s();!(l=n.n()).done;)d=l.value,e.countries.push({value:d.id,text:d.alias})}catch(c){n.e(c)}finally{n.f()}}t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},addClient:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.preventDefault(),s={data:{first_name:t.first_name,last_name:t.last_name,address:t.address,gender_id:""==t.gender?0:parseInt(t.gender),city:t.city,zip_code:t.zip_code,email:t.email,phone:t.phone,country_id:""==t.country.value?0:parseInt(t.country.value),province:t.province,is_travel_agency:t.is_agent,i_a_t_a:t.iata,company:t.company}},""===s.data.is_agent&&(s.data.is_agent=!1),0!==s.data.gender&&""!==s.data.first_name&&""!==s.data.last_name&&0!==s.data.country_id&&""!==s.data.email){a.next=8;break}t.success_message=!1,t.error_message=!0,a.next=22;break;case 8:return a.prev=8,a.next=11,i["a"].checkLogin("/clients/create",s,"post");case 11:r=a.sent,o=r.status,r.data,200==o&&(t.error_message=!1,t.success_message=!0),a.next=22;break;case 17:a.prev=17,a.t0=a["catch"](8),console.log(a.t0.response),t.success_message=!1,t.error_message=!0;case 22:case"end":return a.stop()}}),a,null,[[8,17]])})))()},comparePass:function(){this.samepass=this.password!=this.repassword}}},c=d,p=(a("11e4"),a("2877")),u=Object(p["a"])(c,s,r,!1,null,"703230a8",null);t["default"]=u.exports},"7d5f":function(e,t,a){e.exports=a.p+"img/singlepole-top-blue.0d9125f7.png"},"8b10":function(e,t,a){}}]);
//# sourceMappingURL=chunk-40d1f342.e13fea5b.js.map