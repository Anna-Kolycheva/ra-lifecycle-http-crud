(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(10),s=n.n(a),i=(n(17),n(18),n(11)),r=n(5),u=n(6),l=n(2),d=n(8),j=n(7),h=n(12),b=(n(19),n(0));function f(t){var e=t.onAdd,n=Object(c.useState)(""),o=Object(h.a)(n,2),a=o[0],s=o[1];return Object(b.jsxs)("form",{className:"Notes-form",children:[Object(b.jsxs)("div",{className:"Notes-Field",children:[Object(b.jsx)("label",{htmlFor:"name",className:"label",children:"New Note"}),Object(b.jsx)("textarea",{className:"Notes-Control",id:"name",name:"name",value:a,onChange:function(t){var e=t.target;s(e.value)}})]}),Object(b.jsx)("button",{className:"Form-button Form-Submit",type:"submit",onClick:function(t){t.preventDefault(),a&&(e(a),s(""))},children:"\u27a4"})]})}n(21);function m(t){var e=t.onUpdate;return Object(b.jsxs)("div",{className:"Header",children:[Object(b.jsx)("h1",{children:"Notes "}),Object(b.jsx)("button",{className:"Header__update",type:"button",onClick:e,children:"\u21ba"})]})}n(22);var p=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).content=t.content,c.id=t.id,c}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.onDelete;return Object(b.jsxs)("div",{className:"Notes-List__Item",children:[Object(b.jsxs)("div",{className:"Notes-List__Item_content",children:[this.content,":"]}),Object(b.jsx)("button",{className:"Notes-List__Item_remove",type:"button",onClick:t,children:"\xd7"})]})}}]),n}(c.Component);function O(t){var e=t.notes,n=t.onDelete;return Object(b.jsx)("div",{className:"Notes-List",children:e.map((function(t){return Object(b.jsx)(p,{content:t.content,onDelete:function(){return n(t.id)},id:t.id},t.id)}))})}O.defaultProps={notes:[]};var v=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).getData=t.getData.bind(Object(l.a)(t)),t.state={notes:[]},t.onDelete=t.onDelete.bind(Object(l.a)(t)),t.onAdd=t.onAdd.bind(Object(l.a)(t)),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"onDelete",value:function(t){fetch("".concat("https://lifecycle-http-crud.herokuapp.com/notes","/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(this.getData)}},{key:"onAdd",value:function(t){fetch("https://lifecycle-http-crud.herokuapp.com/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:t})}).then(this.getData)}},{key:"getData",value:function(){var t=this;fetch("https://lifecycle-http-crud.herokuapp.com/notes").then((function(t){return t.json()})).then((function(e){t.setState({notes:Object(i.a)(e)})}),(function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state.notes;return Object(b.jsxs)("div",{className:"Notes",children:[Object(b.jsx)(m,{onUpdate:this.getData}),Object(b.jsx)(O,{notes:t,onDelete:this.onDelete}),Object(b.jsx)(f,{onAdd:this.onAdd})]})}}]),n}(c.Component);var N=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),x()}},[[23,1,2]]]);
//# sourceMappingURL=main.bde4c8fc.chunk.js.map