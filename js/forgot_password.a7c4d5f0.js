"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[827],{2378:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var t=a(3396),l=a(9242),r=a(7139),o=a.p+"img/singlepole-top-blue.40947f39.png";const i=e=>((0,t.dD)("data-v-7ffae4da"),e=e(),(0,t.Cn)(),e),n={class:"bg-white text-white"},p=i((()=>(0,t._)("figure",null,[(0,t._)("img",{src:o,alt:""})],-1))),d={class:"bg-blue_1 pb-12"},c=i((()=>(0,t._)("h2",{class:"text-3xl py-6 text-white md:text-6xl lg:text-4xl"},"- Olvide mi contraseña -",-1))),u={class:"container border-2 rounded border-white p-5 m-auto"},x={class:"flex flex-col gap-x-3 gap-y-6 flex-wrap shadow-round bg-dark_blue_1 text-xl px-10 py-8"},f=i((()=>(0,t._)("h3",{class:"w-full text-left border-b font-bold text-2xl pb-2"},"Verificación de usuario",-1))),w={class:"flex flex-wrap items-center gap-4 pt-6"},_=i((()=>(0,t._)("button",{class:"rounded-4xl text-white px-6 py-2 bg-blue_1",type:"button"},"Enviar",-1))),m=i((()=>(0,t._)("small",{class:"w-full text-left"},"Teclee su email para verificar que el usuario es correcto, le llegará una notificación al mismo para cambiar su contraseña.",-1))),b=i((()=>(0,t._)("h3",{class:"w-full text-left border-b font-bold text-2xl pb-2"},"Teclee su nueva contraseña",-1))),h={class:"flex flex-wrap gap-x-3 w-full text-left font-bold text-2xl pt-6"},g=["type"],y=["type"],v={class:"flex items-center gap-x-4"},k=i((()=>(0,t._)("i",{class:"fas fa-eye-slash"},null,-1))),C=[k],q=i((()=>(0,t._)("i",{class:"fas fa-eye"},null,-1))),F=[q],D={class:"text-red-700"},P={class:"flex flex-col text-left w-full py-6"},U={key:0,class:"flex bg-red-500 rounded-3xl w-full text-left text-4xl p-4 my-3"},V=i((()=>(0,t._)("i",{class:"fa fa-times-circle"},null,-1))),z={class:"text-xl self-center px-2"},E={key:1,class:"flex bg-green-500 rounded-3xl w-full text-left text-4xl p-4 my-3"},T=i((()=>(0,t._)("i",{class:"fa fa-check-circle"},null,-1))),Z=i((()=>(0,t._)("h5",{class:"text-xl self-center px-2"},"La información ha sido enviada satisfactoriamente.",-1))),L=[T,Z];function Y(e,s,a,o,i,k){return(0,t.wg)(),(0,t.iD)("section",n,[p,(0,t._)("div",d,[c,(0,t._)("div",u,[(0,t._)("form",x,[(0,t.wy)((0,t._)("div",null,[f,(0,t._)("div",w,[(0,t.wy)((0,t._)("input",{name:"email",type:"email",placeholder:"E-Mail *",required:"","onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),class:"w-2/5 border rounded-4xl text-orange_1 bg-dark_blue_1 text-left px-6 py-2"},null,512),[[l.nr,i.email]]),_,m])],512),[[l.F8,!i.client_exists]]),(0,t.wy)((0,t._)("div",null,[b,(0,t._)("div",h,[(0,t.wy)((0,t._)("input",{name:"password",type:i.showpass?"text":"password",placeholder:"Contraseña *",required:"","onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),class:"w-3/10 border rounded-4xl text-orange_1 bg-dark_blue_1 text-left px-6 py-2"},null,8,g),[[l.YZ,i.password]]),(0,t.wy)((0,t._)("input",{name:"repassword",type:i.showpass?"text":"password",placeholder:"Repetir Contraseña *",required:"","onUpdate:modelValue":s[2]||(s[2]=e=>i.repassword=e),class:"w-3/10 border rounded-4xl text-orange_1 bg-dark_blue_1 text-left px-6 py-2"},null,8,y),[[l.YZ,i.repassword]]),(0,t._)("div",v,[(0,t.wy)((0,t._)("button",{type:"button",onClick:s[3]||(s[3]=e=>i.showpass=!i.showpass)},C,512),[[l.F8,!i.showpass]]),(0,t.wy)((0,t._)("button",{type:"button",onClick:s[4]||(s[4]=e=>i.showpass=!i.showpass)},F,512),[[l.F8,i.showpass]]),(0,t.wy)((0,t._)("small",D,"Las contraseñas deben ser iguales.",512),[[l.F8,!i.samepass]])])])],512),[[l.F8,i.client_exists]]),(0,t._)("div",P,[i.error_message?((0,t.wg)(),(0,t.iD)("div",U,[V,(0,t._)("h5",z,[(0,t.Uk)(" Error enviando informacion. No se pudo actualizar la contraseña "),(0,t._)("p",null,(0,r.zw)(i.error_message_text),1)])])):(0,t.kq)("",!0),i.success_message?((0,t.wg)(),(0,t.iD)("div",E,L)):(0,t.kq)("",!0)]),(0,t._)("button",{class:(0,r.C_)(["uppercase bg-orange_1 text-white text-xl rounded-4xl font-bold ml-auto px-12 py-1",{"cursor-not-allowed btn-disable":!i.client_exists}]),onClick:s[5]||(s[5]=(...e)=>k.updPass&&k.updPass(...e))},"Actualizar",2)])])])])}var A={name:"ForgotPassword",data(){return{client_exists:!1,error_message_text:"",error_message:!1,success_message:!1,activeTerm:!1,samepass:!0,showpass:!1,email:"",password:"",repassword:""}},created(){const e=this.$route.params.token;e&&(this.client_exists=!0)},watch:{repassword(){this.samepass=this.repassword==this.password,this.samepass=""==this.repassword&&""==this.password}},methods:{comparePass(){this.samepass=this.password!=this.repassword},updPass(e){e.preventDefault()}}},I=a(89);const M=(0,I.Z)(A,[["render",Y],["__scopeId","data-v-7ffae4da"]]);var N=M}}]);
//# sourceMappingURL=forgot_password.a7c4d5f0.js.map