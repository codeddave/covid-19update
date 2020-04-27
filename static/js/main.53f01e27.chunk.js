(this["webpackJsonpcovid-19stats"]=this["webpackJsonpcovid-19stats"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2yxjh",card:"Cards_card__3q-s4",infected:"Cards_infected__1iFsV",recovered:"Cards_recovered__2zI8d",deaths:"Cards_deaths__23gJk"}},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),s=(a(93),a(6)),u=a.n(s),l=a(10),i=a(74),d=a(75),m=a(85),p=a(84),f=a(226),v=a(230),h=a(227),b=a(228),g=a(32),E=a.n(g),y=a(13),w=a.n(y),_=a(33),x=a.n(_),C=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.lastUpdate,o=t.recovered;return a?r.a.createElement("div",{className:w.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of COVID-19 Cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of COVID-19 Recoveries"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(w.a.card,w.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"}," ",r.a.createElement(E.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of COVID-19 Deaths"))))):"loading..."},O=a(31),j=a(34),k=a.n(j),D="https://covid19.mathdro.id/api",N=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,recovered:e.recovered.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(46),B=a(81),A=a.n(B),P=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)([]),d=Object(O.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m[0]?r.a.createElement(V.b,{data:{labels:m.map((function(e){return e.date})),gridLines:{color:"green"},datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:"true"},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba (255, 0, 0, 0.5)",fill:"true"}]}}):null,v=c?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#d6ae0d","#2baf10","#d82213"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:A.a.container},s?v:f)},R=a(231),M=a(229),F=a(82),J=a.n(F),U=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement("div",null,r.a.createElement(R.a,{className:J.a.formControl},r.a.createElement(M.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},q=a(35),z=a.n(q);var T=function(){return r.a.createElement("div",{className:z.a.iframe},r.a.createElement("div",null,r.a.createElement("iframe",{className:z.a.facts,src:"https://www.youtube.com/embed/Ma07a6svw5w",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"COVID-19: The Facts"})),r.a.createElement("div",null,r.a.createElement("iframe",{className:z.a.manage,src:"https://www.youtube.com/embed/qPoptbtBjkg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:"COVID-19: The Facts"})))},W=a(47),G=a.n(W),H=a(83),L=a.n(H),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.App},r.a.createElement("img",{src:L.a,className:G.a.image,alt:"covid19"}),r.a.createElement(U,{handleCountryChange:this.handleCountryChange}),r.a.createElement(C,{data:t}),r.a.createElement(P,{data:t,country:a}),r.a.createElement(T,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports={iframe:"Video_iframe__1Pv6V",facts:"Video_facts__Ar0YR",manage:"Video_manage__3PCZI"}},47:function(e,t,a){e.exports={App:"App_App__2M3rH",image:"App_image__2ijkN"}},81:function(e,t,a){e.exports={container:"Chart_container__2d8nz"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1Rl__"}},83:function(e,t,a){e.exports=a.p+"static/media/covid198.feaa946e.png"},88:function(e,t,a){e.exports=a(209)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.53f01e27.chunk.js.map