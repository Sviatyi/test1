(this.webpackJsonplaba3=this.webpackJsonplaba3||[]).push([[0],{166:function(e,t,s){},167:function(e,t,s){},200:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(11),i=s.n(a),d=(s(166),s(167),s(144)),l=s(13),r=s(2);var o=function(){return Object(c.useEffect)((function(){var e=window.location.pathname;"-add"===e.slice(e.length-4)?(document.getElementById(e.slice(1,e.length-4)).style.border="3px solid  #666666",document.getElementById(e.slice(1,e.length-4)).style["border-bottom"]="0",document.getElementById(e.slice(1,e.length-4)).style["border-radius"]="5px 5px 0 0"):"-edit"===e.slice(e.length-5)?(document.getElementById(e.slice(1,e.length-5)).style.border="3px solid  #666666",document.getElementById(e.slice(1,e.length-5)).style["border-bottom"]="0",document.getElementById(e.slice(1,e.length-5)).style["border-radius"]="5px 5px 0 0"):(document.getElementById(e.slice(1)).style.border="3px solid  #666666",document.getElementById(e.slice(1)).style["border-bottom"]="0",document.getElementById(e.slice(1)).style["border-radius"]="5px 5px 0 0")}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{className:"head",children:Object(r.jsxs)("div",{className:"head-class",children:[Object(r.jsx)("div",{className:"free-space-left"}),Object(r.jsx)("li",{id:"users",className:"header-list",onClick:function(){window.location.assign("http://localhost:8000/users")},children:"Users"}),Object(r.jsx)("li",{id:"groups",className:"header-list",onClick:function(){window.location.assign("http://localhost:8000/groups")},children:"Groups"}),Object(r.jsx)("div",{className:"free-space-right"})]})})})},j=s(19),h=s.n(j),u=s(28),b=s(12),x=s(242),O=s(41),p=s.n(O),m=s(81),g=s.n(m),f=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){p()({method:"GET",url:"http://localhost:8000/user/"}).then((function(e){n(e.data)}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("table",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{style:{width:"40px"},children:"Id"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Username"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Created"}),Object(r.jsx)("th",{style:{width:"100px"},children:"Is admin"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Group"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Action"})]})}),Object(r.jsx)("hr",{}),s.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("table",{children:[Object(r.jsx)("td",{style:{width:"40px"},children:e.id},e.id),Object(r.jsx)("td",{style:{width:"200px"},children:e.username},e.id),Object(r.jsx)("td",{style:{width:"200px"},children:e.created},e.id),Object(r.jsx)("td",{style:{width:"100px"},children:e.is_admin?Object(r.jsx)("input",{type:"checkbox",disabled:"disabled",checked:"checked"}):Object(r.jsx)("input",{type:"checkbox",disabled:"disabled"})},e.id),Object(r.jsx)("td",{style:{width:"200px"},children:null!==e.group?e.group.name:""},e.id),Object(r.jsxs)("td",{style:{width:"200px"},children:[Object(r.jsx)(x.a,{style:{"margin-right":"15px"},className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/users-edit?id="+e.id)},children:"Edit"}),Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8000/user/"+e.id+"/",{method:"DELETE"});case 2:204!==t.sent.status?alert("SOMETHING WENT WRONG!!!"):window.location.assign("http://localhost:8000/users");case 4:case"end":return t.stop()}}),t)}))),children:"Delete"})]},e.id)]}),Object(r.jsx)("hr",{})]})}))]})})},w=s(241),y=s(240),v=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(),i=Object(b.a)(a,2),d=i[0],l=i[1];return Object(r.jsx)("div",{className:"container",style:{"margin-top":"0"},children:Object(r.jsxs)(w.a,{children:[Object(r.jsxs)("table",{className:"adding",children:[Object(r.jsx)("td",{style:{width:"40px"},children:Object(r.jsx)("label",{children:"id"})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:"Required",required:!0,value:s,onChange:function(e){return n(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:" "}),Object(r.jsx)("td",{style:{width:"100px"},children:" "}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{value:d,onChange:function(e){return l(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/users")},children:"Cancel"})})]}),Object(r.jsx)("hr",{className:"adding"}),Object(r.jsx)(w.a.Field,{children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,group:d,is_admin:!1,created:g()().format("YYYY-MM-DD").toString()})});case 2:t=e.sent,console.log(g()().format("YYYY-MM-DD hh:mm:ss")),201!==t.status?alert("BAD DATA!!!"):window.location.assign("http://localhost:8000/users");case 5:case"end":return e.stop()}}),e)}))),children:"Add user"})})})]})})},N=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/users-add")},children:"Add user"})})})},C=function(){var e=window.location.href,t=Object(c.useState)(),s=Object(b.a)(t,2),n=s[0],a=s[1],i=Object(c.useState)(),d=Object(b.a)(i,2),l=d[0],o=d[1],j=e.split("id=")[1],O=Object(c.useState)([]),m=Object(b.a)(O,2),g=m[0],f=m[1];return Object(c.useEffect)((function(){p()({method:"GET",url:"http://localhost:8000/user/"+j+"/"}).then((function(e){f(e.data)}))}),[]),Object(r.jsx)("div",{className:"container",style:{"margin-top":"0"},children:Object(r.jsxs)(w.a,{children:[Object(r.jsxs)("table",{className:"adding",children:[Object(r.jsx)("td",{style:{width:"40px"},children:Object(r.jsx)("label",{children:j})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:g.username,value:n,onChange:function(e){return a(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:" "}),Object(r.jsx)("td",{style:{width:"100px"},children:" "}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:g.group?g.group.name:"",value:l,onChange:function(e){return o(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/users")},children:"Cancel"})})]}),Object(r.jsx)("hr",{className:"adding"}),Object(r.jsx)(w.a.Field,{children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/user/"+j+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n||g.username,group:l,created:g.created.toString()})});case 2:t=e.sent,console.log(g.created),200!==t.status?alert("BAD DATA!!!"):window.location.assign("http://localhost:8000/users");case 5:case"end":return e.stop()}}),e)}))),children:"Edit user"})})})]})})},E=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){p()({method:"GET",url:"http://localhost:8000/group/"}).then((function(e){n(e.data)}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("table",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{style:{width:"40px"},children:"Id"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Name"}),Object(r.jsx)("th",{style:{width:"500px"},children:"Description"}),Object(r.jsx)("th",{style:{width:"200px"},children:"Action"})]})}),Object(r.jsx)("hr",{}),s.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("table",{children:[Object(r.jsx)("td",{style:{width:"40px"},children:e.id},e.id),Object(r.jsx)("td",{style:{width:"200px"},children:e.name},e.id),Object(r.jsx)("td",{style:{width:"500px"},children:e.description},e.id),Object(r.jsxs)("td",{style:{width:"200px"},children:[Object(r.jsx)(x.a,{style:{"margin-right":"15px"},className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/groups-edit?id="+e.id)},children:"Edit"}),Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8000/group/"+e.id+"/",{method:"DELETE"});case 2:204!==t.sent.status?alert("You can not delete group with users"):window.location.assign("http://localhost:8000/groups");case 4:case"end":return t.stop()}}),t)}))),children:"Delete"})]},e.id)]}),Object(r.jsx)("hr",{})]})}))]})})},k=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/groups-add")},children:"Add group"})})})},S=s(239),F=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(),i=Object(b.a)(a,2),d=i[0],l=i[1];return Object(r.jsx)("div",{className:"container",style:{"margin-top":"0"},children:Object(r.jsxs)(w.a,{children:[Object(r.jsxs)("table",{className:"adding",children:[Object(r.jsx)("td",{style:{width:"40px"},children:Object(r.jsx)("label",{children:"id"})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:"Required",required:!0,value:s,onChange:function(e){return n(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"500px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(S.a,{style:{width:"480px"},value:d,onChange:function(e){return l(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/groups")},children:"Cancel"})})]}),Object(r.jsx)("hr",{className:"adding"}),Object(r.jsx)(w.a.Field,{children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/group/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,description:d})});case 2:201!==e.sent.status?alert("BAD DATA!!!"):window.location.assign("http://localhost:8000/groups");case 4:case"end":return e.stop()}}),e)}))),children:"Add group"})})})]})})},T=function(){var e=window.location.href,t=Object(c.useState)(),s=Object(b.a)(t,2),n=s[0],a=s[1],i=Object(c.useState)(),d=Object(b.a)(i,2),l=d[0],o=d[1],j=e.split("id=")[1],O=Object(c.useState)([]),m=Object(b.a)(O,2),g=m[0],f=m[1];return Object(c.useEffect)((function(){p()({method:"GET",url:"http://localhost:8000/group/"+j+"/"}).then((function(e){f(e.data)}))}),[]),Object(r.jsx)("div",{className:"container",style:{"margin-top":"0"},children:Object(r.jsxs)(w.a,{children:[Object(r.jsxs)("table",{className:"adding",children:[Object(r.jsx)("td",{style:{width:"40px"},children:Object(r.jsx)("label",{children:j})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:g.name,value:n,onChange:function(e){return a(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"500px"},children:Object(r.jsx)(w.a.Field,{className:"form-element",children:Object(r.jsx)(y.a,{placeholder:g.description,value:l,onChange:function(e){return o(e.target.value)}})})}),Object(r.jsx)("td",{style:{width:"200px"},children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:function(){window.location.assign("http://localhost:8000/groups")},children:"Cancel"})})]}),Object(r.jsx)("hr",{className:"adding"}),Object(r.jsx)(w.a.Field,{children:Object(r.jsx)("div",{className:"add-user-button-div",children:Object(r.jsx)(x.a,{className:"add-user-button",onClick:Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/group/"+j+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n||g.name,description:l||g.description})});case 2:200!==e.sent.status?alert("BAD DATA!!!"):window.location.assign("http://localhost:8000/groups");case 4:case"end":return e.stop()}}),e)}))),children:"Edit user"})})})]})})};var A=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsxs)(l.a,{path:"/users",children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(N,{})]}),Object(r.jsxs)(l.a,{path:"/users-add",children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(v,{})]}),Object(r.jsxs)(l.a,{path:"/users-edit",children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(C,{})]}),Object(r.jsxs)(l.a,{path:"/groups",children:[Object(r.jsx)(o,{}),Object(r.jsx)(E,{}),Object(r.jsx)(k,{})]}),Object(r.jsxs)(l.a,{path:"/groups-add",children:[Object(r.jsx)(o,{}),Object(r.jsx)(E,{}),Object(r.jsx)(F,{})]}),Object(r.jsxs)(l.a,{path:"/groups-edit",children:[Object(r.jsx)(o,{}),Object(r.jsx)(E,{}),Object(r.jsx)(T,{})]})]})})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,243)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),D()}},[[200,1,2]]]);
//# sourceMappingURL=main.380b5caf.chunk.js.map