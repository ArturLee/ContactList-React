(this.webpackJsonpcontact_list=this.webpackJsonpcontact_list||[]).push([[0],{20:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),s=a(5),m=a.n(s),i=a(2),o=a(19),u=a.n(o),p=a(3),E=a(6),d=a.n(E),f=function(e){return l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,e.name.first," ",e.name.last),l.a.createElement("img",{src:e.img,alt:e.name.first}),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"E-mail")," ",l.a.createElement("span",null,e.email)),l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"Phone")," ",l.a.createElement("span",null,e.phone)),l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"Street")," ",l.a.createElement("span",null,e.location.street.name," ",e.location.street.number)),l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"City")," ",l.a.createElement("span",null,e.location.city)),l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"State")," ",l.a.createElement("span",null,e.location.state)),l.a.createElement("div",{className:"data"},l.a.createElement("span",null,"ZIP/Postal Code")," ",l.a.createElement("span",null,e.location.postcode))))},v="Contact List",b="https://randomuser.me/api/?results=",h=120,N=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];function C(e){var t=e.userList,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],m=Object(n.useState)(),o=Object(i.a)(m,2),u=o[0],E=o[1],v=[];t.length>0&&(t.sort((function(e,t){var a=e.name.last.toUpperCase(),n=t.name.last.toUpperCase();return a<n?-1:a>n?1:0})),v=t.reduce((function(e,t){var a=t.name.last.toUpperCase()[0];return e[a]=(e[a]||[]).concat(t),e}),{}));var b=function(e){return l.a.createElement("div",{key:d()()},l.a.createElement("button",{className:"contactBtn",type:"button",onClick:function(){s(!0),E(e)}},l.a.createElement("h3",null,e.name.last," ,",e.name.first)),l.a.createElement("hr",null))};return l.a.createElement("div",null,l.a.createElement(p.Tabs,{className:"tabs"},N.map((function(e){return l.a.createElement(p.TabLink,{to:e.toUpperCase(),key:e,onClick:function(){s(!1)}},l.a.createElement("h2",null,e," ",l.a.createElement("span",null," ",function(e){var t=0;return v[e]?t=v[e].length:t}(e.toUpperCase()))," "))})),Object.keys(v).map((function(e){return l.a.createElement(p.TabContent,{for:e,key:d()()},v[e].map(b))})),l.a.createElement("div",null,r&&l.a.createElement("div",{className:"card"},l.a.createElement("button",{className:"closeBtn",type:"button",onClick:function(){s(!1)}},"x"),l.a.createElement(f,{name:u.name,img:u.picture.large,email:u.email,phone:u.phone,location:u.location})))))}a(47);var j=function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("span",{className:"spinner-inner-1"}),l.a.createElement("span",{className:"spinner-inner-2"}),l.a.createElement("span",{className:"spinner-inner-3"}))};var k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],p=s[1];return Object(n.useEffect)((function(){p(!0),m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(u.a.get(b+h).then((function(e){c(e.data.results),p(!1)})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}))}),[]),l.a.createElement("div",null,o?l.a.createElement(j,null):l.a.createElement("div",{className:"main"},l.a.createElement("h1",{className:"title"},v),l.a.createElement(C,{userList:a,tabs:N})))};r.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fb58bc7c.chunk.js.map