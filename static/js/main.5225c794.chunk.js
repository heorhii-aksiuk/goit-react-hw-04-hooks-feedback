(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistic_list__3s6Je",item:"Statistic_item__1pTUP"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__3gjhR"}},,,function(e,t,n){e.exports={section:"Section_section__1gN3z",title:"Section_title__3Ild_"}},,function(e,t,n){e.exports={container:"Container_container__3Govm"}},function(e,t,n){e.exports={notifaction:"Notification_notifaction__WYVTY"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(7),s=n.n(i),o=(n(14),n(15),n(4)),r=n(8),l=n.n(r),b=n(0);function u(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var j=n(6),d=n.n(j);function h(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:d.a.section,children:[Object(b.jsx)("h2",{className:d.a.title,children:t}),n]})}var m=n(2),O=n.n(m);function f(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(b.jsxs)("ul",{className:O.a.list,children:[Object(b.jsxs)("li",{className:O.a.item,children:["Good: ",t]}),Object(b.jsxs)("li",{className:O.a.item,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:O.a.item,children:["Bad: ",a]}),Object(b.jsxs)("li",{className:O.a.item,children:["Total: ",c]}),Object(b.jsxs)("li",{className:O.a.item,children:["Positive feedback: ",i,"%"]})]})}var x=n(3),_=n.n(x);function p(e){var t=e.onLeaveFeedback;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:_.a.button,name:"good",type:"button",onClick:function(e){return t(e.target.name)},children:"Good"}),Object(b.jsx)("button",{className:_.a.button,name:"neutral",type:"button",onClick:function(e){return t(e.target.name)},children:"Neutral"}),Object(b.jsx)("button",{className:_.a.button,name:"bad",type:"button",onClick:function(e){return t(e.target.name)},children:"Bad"})]})}var v=n(9),g=n.n(v);function k(e){var t=e.message;return Object(b.jsx)("p",{className:g.a.notifaction,children:t})}function N(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),r=s[0],l=s[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),m=d[0],O=d[1],x={good:n,neutral:r,bad:m},_=n+r+m,v=0===n?0:Math.round(n/(n+r+m)*100);return Object(b.jsxs)(u,{children:[Object(b.jsx)(h,{title:"Please leave your feedback",children:Object(b.jsx)(p,{options:x,onLeaveFeedback:function(e){switch(e){case"good":c(n+1);break;case"neutral":l(r+1);break;case"bad":O(m+1);break;default:return}}})}),Object(b.jsx)(h,{title:"Statistic",children:0===_?Object(b.jsx)(k,{message:"There is no feedback"}):Object(b.jsx)(f,{good:n,neutral:r,bad:m,total:_,positivePercentage:v})})]})}s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.5225c794.chunk.js.map