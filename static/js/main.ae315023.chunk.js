(this.webpackJsonplaba3=this.webpackJsonplaba3||[]).push([[0],{168:function(e,t,c){},169:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(11),d=c.n(i),r=(c(168),c(169),c(146)),l=c(12),a=c(3);var j=function(){return Object(s.useEffect)((function(){var e=window.location.pathname;document.getElementById(e.slice(1)).style.border="3px solid  #666666",document.getElementById(e.slice(1)).style["border-bottom"]="0",document.getElementById(e.slice(1)).style["border-radius"]="5px 5px 0 0"}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{className:"head",children:Object(a.jsxs)("div",{className:"head-class",children:[Object(a.jsx)("div",{className:"free-space-left"}),Object(a.jsx)("li",{id:"users",className:"header-list",onClick:function(){window.location.assign("http://localhost:3000/users")},children:"Users"}),Object(a.jsx)("li",{id:"groups",className:"header-list",onClick:function(){window.location.assign("http://localhost:3000/groups")},children:"Groups"}),Object(a.jsx)("div",{className:"free-space-right"})]})})})},h=c(31),o=c(141),b=c.n(o),x=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b()({method:"GET",url:"http://localhost:8000/user/"}).then((function(e){n(e.data)}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("table",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{style:{width:"40px"},children:"Id"}),Object(a.jsx)("th",{style:{width:"200px"},children:"Username"}),Object(a.jsx)("th",{style:{width:"200px"},children:"Created"}),Object(a.jsx)("th",{style:{width:"100px"},children:"Is admin"}),Object(a.jsx)("th",{style:{width:"200px"},children:"Group"}),Object(a.jsx)("th",{style:{width:"200px"},children:"Action"})]})}),Object(a.jsx)("hr",{}),c.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("table",{children:[Object(a.jsx)("td",{style:{width:"40px"},children:e.id},e.id),Object(a.jsx)("td",{style:{width:"200px"},children:e.username},e.id),Object(a.jsx)("td",{style:{width:"200px"},children:e.created},e.id),Object(a.jsx)("td",{style:{width:"100px"},children:e.is_admin?Object(a.jsx)("input",{type:"checkbox",disabled:"disabled",checked:"checked"}):Object(a.jsx)("input",{type:"checkbox",disabled:"disabled"})},e.id),Object(a.jsx)("td",{style:{width:"200px"},children:null!==e.group?e.group.name:""},e.id),Object(a.jsx)("td",{style:{width:"200px"},children:Object(a.jsx)("button",{children:"Edit"})},e.id)]}),Object(a.jsx)("hr",{})]})}))]})})},u=c(114),O=c.n(u),p=c(142),m=c(244),f=c(245),g=c(243),y=c(115),w=c.n(y),v=function(){var e=Object(s.useState)(),t=Object(h.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),d=Object(h.a)(i,2),r=d[0],l=d[1];return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(m.a,{children:[Object(a.jsxs)("table",{className:"adding",children:[Object(a.jsx)("td",{style:{width:"40px"},children:Object(a.jsx)("label",{children:"id"})}),Object(a.jsx)("td",{style:{width:"200px"},children:Object(a.jsx)(m.a.Field,{className:"form-element",children:Object(a.jsx)(g.a,{placeholder:"Required",required:!0,value:c,onChange:function(e){return n(e.target.value)}})})}),Object(a.jsx)("td",{style:{width:"200px"},children:" "}),Object(a.jsx)("td",{style:{width:"100px"},children:" "}),Object(a.jsx)("td",{style:{width:"200px"},children:Object(a.jsx)(m.a.Field,{className:"form-element",children:Object(a.jsx)(g.a,{placeholder:"Required",required:!0,value:r,onChange:function(e){return l(e.target.value)}})})}),Object(a.jsx)("td",{style:{width:"200px"},children:Object(a.jsx)("button",{children:"cancel"})})]}),Object(a.jsx)("hr",{className:"adding"}),Object(a.jsx)(m.a.Field,{children:Object(a.jsx)(f.a,{onClick:Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,group:r,is_admin:!1,created:w()().format("YYYY-MM-DD HH:mm:ss").toString()})});case 2:t=e.sent,console.log(w()().format("YYYY-MM-DD hh:mm:ss")),200!==t.status&&console.log(t);case 5:case"end":return e.stop()}}),e)}))),children:"Add user"})})]})})};var N=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{path:"/users",children:[Object(a.jsx)(j,{}),Object(a.jsx)(x,{}),Object(a.jsx)(v,{})]}),Object(a.jsx)(l.a,{path:"/groups",children:Object(a.jsx)(j,{})})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,247)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,d=t.getTTFB;c(e),s(e),n(e),i(e),d(e)}))};d.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),F()}},[[202,1,2]]]);
//# sourceMappingURL=main.ae315023.chunk.js.map