(this.webpackJsonponix=this.webpackJsonponix||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(54)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),r=a.n(i),l=a(4),o=a(1),s=a(2),d=a.n(s),u=a(16),m=a.n(u),b=a(5),p=a(3),h=(a(27),function(e){var t=e.className,a=e.children;return c.a.createElement("p",{className:d()("app-component-text",Object(p.a)({},t,!!t))},a)}),v=a(8),f=(a(28),function(e){var t=e.src,a=e.width,n=void 0===a?50:a,i=e.height,r=void 0===i?50:i,l=e.borderRadius,s=e.className,u=Object(o.a)(e,["src","width","height","borderRadius","className"]);return c.a.createElement("img",Object(v.a)({src:"".concat("http://localhost:4000","/").concat(t),style:{minWidth:n,minHeight:r,width:n,height:r,borderRadius:l},className:d()("app-component-image",Object(p.a)({},s,!!s)),alt:""},u))}),E=(a(29),function(e){var t=e.width,a=void 0===t?50:t,n=e.height,i=void 0===n?50:n,r=e.background,l=e.children;return c.a.createElement("div",{style:{width:a,height:i,background:r},className:"app-shapes-circle"},l)}),g=(a(30),function(e){return c.a.createElement("div",{className:"app-icon-dots"},c.a.createElement(E,{width:4,height:4,background:"#D8D8D8"}),c.a.createElement(E,{width:4,height:4,background:"#D8D8D8"}),c.a.createElement(E,{width:4,height:4,background:"#D8D8D8"}))}),k=(a(31),function(e){var t=e.width,a=void 0===t?50:t,n=e.height,i=void 0===n?50:n,r=e.background,l=void 0===r?"":r,o=e.children;return c.a.createElement("div",{style:{width:a,height:i,background:l},className:"".concat("app-icon-round-icon")},o)}),N=(a(32),function(e){var t=e.handleClick;Object(o.a)(e,["handleClick"]);return c.a.createElement("div",{className:"app-button-more",onClick:t},c.a.createElement(k,{width:30,height:30,background:"#EAEAEA"},c.a.createElement(g,null)))}),j=(a(33),function(e){e.className;var t=e.background,a=e.children;return c.a.createElement("button",{style:{background:t},className:"".concat("app-component-button"),onClick:function(){}},a)}),O=(a(34),function(e){return c.a.createElement("div",{className:"".concat("dashboard-header-details-members")},c.a.createElement(f,{width:30,height:30,borderRadius:"50%"}),c.a.createElement(f,{width:30,height:30,borderRadius:"50%"}),c.a.createElement(f,{width:30,height:30,borderRadius:"50%"}))}),_=(a(35),function(e){return c.a.createElement("div",{className:"".concat("dashboard-header-details-actions")},c.a.createElement(j,{background:"#EAEAEA"},c.a.createElement(h,null,"Share")),c.a.createElement(j,{background:"#FFF8DD"},c.a.createElement(f,{width:16,height:16}),c.a.createElement(h,null,"Chat")))}),y="OPEN",w="CLOSE";function A(e){return{type:"SET_SIDEBAR_VISIBILITY",status:e}}a(36);var D=function(e){var t=Object(l.c)((function(e){return e.sidebarVisibility}))===y,a=Object(l.b)();return c.a.createElement("div",{className:"".concat("dashboard-header-details")},c.a.createElement("div",{className:"".concat("dashboard-header-details","__title")},c.a.createElement(f,{width:40,height:40,borderRadius:"8px"}),c.a.createElement(h,null,"Website Redesign"),c.a.createElement(N,{handleClick:function(){var e=A(t?w:y);a(e)}})),c.a.createElement("div",{className:"".concat("dashboard-header-details","__info")},c.a.createElement(O,null),c.a.createElement(_,null)))},T=(a(37),function(e){var t=e.isActive,a=e.title,n=e.handleClick;return c.a.createElement("div",{className:d()("app-component-tab",Object(p.a)({},"".concat("app-component-tab","__active"),t)),onClick:n},c.a.createElement(h,null,a))}),C=(a(38),function(e){var t=e.activeTab,a=e.tabs,n=e.setActiveTab;Object(o.a)(e,["activeTab","tabs","setActiveTab"]);return c.a.createElement("div",{className:"".concat("app-component-tabs")},a.map((function(e){var a,i=Object(b.a)(e,2),r=i[0],l=i[1];return c.a.createElement(T,{isActive:r===t,key:r,title:l.title,handleClick:(a=r,function(){n(a)})})})))}),R=a(9),S=a.n(R),I=(a(40),function(e){var t=e.title;Object(o.a)(e,["title"]);return c.a.createElement("div",{className:"".concat("dashboard-event-comment")},c.a.createElement(h,null,t))}),x=(a(41),function(e){var t=e.files;Object(o.a)(e,["files"]);return c.a.createElement("div",{className:"".concat("dashboard-event-files")},t.map((function(e,t){return c.a.createElement(f,{key:t,width:100,height:100,borderRadius:"8px",src:e})})))}),M=(a(42),{comment:I,files:x}),Y=function(e){e.type;var t=e.title,a=e.meta,n=e.createdAt,i=(Object(o.a)(e,["type","title","meta","createdAt"]),M[null===a||void 0===a?void 0:a.type]),r=S.a.unix(n).format("HH:mm");return c.a.createElement("div",{className:"".concat("dashboard-event")},c.a.createElement(f,{width:40,height:40,borderRadius:"50%"}),c.a.createElement("div",{className:"".concat("dashboard-event","__details")},c.a.createElement(h,null,t),i&&c.a.createElement(i,a.content)),c.a.createElement(h,{className:"".concat("dashboard-event","__date")},r))},F="Jean",V="Gonzales",B="Product Owner",H={completed:372,open:11},L=[{id:1,type:"mark",title:"Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",createdAt:Date.now()},{id:2,type:"comment",title:"Emilee Simchenko commented on Account for teams and personal in bottom style",meta:{type:"comment",content:{title:"During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes"}},createdAt:Date.now()},{id:3,type:"upload",title:"Darika Samak uploaded 4 files on An option to search in current projects or in all projects",meta:{type:"files",content:{files:["public/images/city.jpg","public/images/basketball.jpg","public/images/nature.jpg","public/images/ice.jpg"]}},createdAt:Date.now()}],J=(a(43),function(){return"No component defined!"}),P={tasks:{title:"Tasks"},kanban:{title:"Kanban"},activity:{title:"Activity",default:!0,component:function(e){var t=S()().calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[Last] dddd",nextWeek:"[Next] dddd",sameElse:"DD/MM/YYYY"});return c.a.createElement("div",{className:"".concat("dashboard-events")},c.a.createElement(h,{className:"".concat("dashboard-events","__relative-date")},t),L&&L.map((function(e){return c.a.createElement(Y,Object(v.a)({key:e.id},e))})))}},calendar:{title:"Calendar"},files:{title:"Files"}},W=Object.entries(P),q=(a(44),function(e){var t=e.activeTab,a=e.setActiveTab;Object(o.a)(e,["activeTab","setActiveTab"]);return c.a.createElement("div",{className:"".concat("dashboard-header")},c.a.createElement(D,null),c.a.createElement(C,{activeTab:t,tabs:W,setActiveTab:a}))}),z=(a(45),function(e){var t=Object(n.useState)(function(e){var t=e.find((function(e){var t=Object(b.a)(e,2);t[0];return!!t[1].default}));return t&&t[0]||null}(W)),a=Object(b.a)(t,2),i=a[0],r=a[1],l=P[i].component||J;return c.a.createElement("div",{className:"app-dashboard"},c.a.createElement(q,{activeTab:i,setActiveTab:r}),c.a.createElement(l,null))}),G=(a(46),function(e){var t=e.count,a=e.title;Object(o.a)(e,["count","title"]);return c.a.createElement("div",{className:"".concat("app-sidebar-profile-tasks-counter")},c.a.createElement(h,null,t),c.a.createElement(h,null,a))}),K=(a(47),function(e){return c.a.createElement("div",{className:"".concat("app-sidebar-profile")},c.a.createElement("div",{className:"".concat("app-sidebar-profile","__info")},c.a.createElement(f,{width:48,height:48,borderRadius:"50%",src:"public/images/disruptive-employee.jpg"}),c.a.createElement("div",{className:"".concat("app-sidebar-profile","__info__user")},c.a.createElement(h,null,F," ",V),c.a.createElement(h,null,B)),c.a.createElement(g,null)),c.a.createElement("div",{className:"".concat("app-sidebar-profile","__tasks")},c.a.createElement(G,{count:H.completed,title:"Completed Tasks"}),c.a.createElement(G,{count:H.open,title:"Open Tasks"})))}),U=(a(48),function(e){e.title;var t=e.children,a=e.active;Object(o.a)(e,["title","children","active"]);return c.a.createElement("div",{className:d()("app-sidebar-menu-item",Object(p.a)({},"".concat("app-sidebar-menu-item","__active"),a))},t)}),Q=(a(49),function(e){e.title,e.children,e.active,Object(o.a)(e,["title","children","active"]);return c.a.createElement("div",{className:"app-sidebar-menu-item-notifications"},c.a.createElement(h,null,"Notifications"),c.a.createElement(k,{width:20,height:20,background:"#FFC200"},c.a.createElement(h,null,"3")))}),X=(a(50),[{id:1,title:"Menu",defaultActive:!0},{id:2,title:"Home",defaultActive:!1},{id:3,title:"My Tasks",defaultActive:!1},{id:4,component:Q,defaultActive:!1}]),Z=function(e){return c.a.createElement("div",{className:"".concat("app-sidebar-menu")},X.map((function(e){var t=e.component,a=Object(o.a)(e,["component"]);return c.a.createElement(U,{key:a.id,active:a.defaultActive},t?c.a.createElement(t,null):c.a.createElement(h,null,a.title))})))},$=(a(51),function(e){var t=e.isOpen,a=(Object(o.a)(e,["isOpen"]),Object(l.b)());return c.a.createElement("div",{className:d()("app-sidebar",Object(p.a)({},"".concat("app-sidebar","-close"),!t))},c.a.createElement("div",{className:"".concat("app-sidebar","__header")},c.a.createElement(f,{width:24,height:24}),c.a.createElement(h,null,"PROJECTUS"),c.a.createElement(f,{className:"".concat("app-sidebar","__header__search"),width:16,height:16}),c.a.createElement(f,{className:"".concat("app-sidebar","__header__sidebar"),width:16,height:16,onClick:function(){var e=A(t?w:y);a(e)}})),c.a.createElement(K,null),c.a.createElement(Z,null))});a(52);var ee=m()((function(e){return{isMobile:e.width<768}}))((function(e){var t=e.isMobile,a=(Object(o.a)(e,["isMobile"]),Object(l.b)()),i=Object(l.c)((function(e){return e.sidebarVisibility}))===y;return Object(n.useEffect)((function(){if(i&&t){var e=A(w);a(e)}}),[]),c.a.createElement("div",{className:d()("app",{"app__close-sidebar":!i})},c.a.createElement($,{isOpen:i}),c.a.createElement(z,null))})),te=a(7),ae={sidebarVisibility:y};var ne=function(e,t){if("undefined"===typeof e)return ae;switch(t.type){case"SET_SIDEBAR_VISIBILITY":return Object.assign({},e,{sidebarVisibility:t.status});default:return e}},ce=Object(te.b)(ne);a(53);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:ce},c.a.createElement(ee,null))),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2e750420.chunk.js.map