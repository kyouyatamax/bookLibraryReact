(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),r=a(5),c=a(4),u=a(6),l=a(0),s=a.n(l),h=a(8),b=a.n(h),d=(a(15),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("button",null," Add a New Book to the Library!")}}]),t}(s.a.Component)),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(n.a)(Object(n.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){}},{key:"render",value:function(){return s.a.createElement("button",{onClick:this.handleClick},"Remove Book from Library")}}]),t}(s.a.Component),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={isReadorNot:a.props.thisBook.isRead},a.handleClick=a.handleClick.bind(Object(n.a)(Object(n.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){var e=!0!==this.state.isReadorNot;this.setState({isReadorNot:e})}},{key:"render",value:function(){return s.a.createElement("button",{onClick:this.handleClick},this.state.isReadorNot.toString())}}]),t}(s.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.aBook,t=e.title,a=e.author,n=e.numPages,o=e.genre;return s.a.createElement("div",{className:"bookContainer"},s.a.createElement("h1",null,"Title: ",t),s.a.createElement("h1",null,"Author: ",a),s.a.createElement("h1",null,"Pages: ",n),s.a.createElement("h1",null,"Genre: ",o),s.a.createElement(m,{thisBook:e}),s.a.createElement("br",null),s.a.createElement(k,null))}}]),t}(s.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[];return this.props.books.forEach(function(t){e.push(s.a.createElement(j,{aBook:t,title:t.title,key:t.title}))}),s.a.createElement("div",{id:"librarycontainer2"},e)}}]),t}(s.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement(O,{books:this.props.booksList}),s.a.createElement(d,null))}}]),t}(s.a.Component);b.a.render(s.a.createElement(f,{booksList:[{title:"book1",author:"autho1 ",numPages:"1235",isRead:!1,genre:"scifi"},{title:"book2",author:"autho2 ",numPages:"1235",isRead:!1,genre:"scifi"},{title:"book3",author:"autho3 ",numPages:"1235",isRead:!1,genre:"autoBio"},{title:"book4",author:"autho4 ",numPages:"1235",isRead:!0,genre:"scifi"},{title:"book5",author:"autho5 ",numPages:"1235",isRead:!1,genre:"scifi"},{title:"book6",author:"autho6 ",numPages:"1235",isRead:!1,genre:"scifi"},{title:"book7",author:"autho8 ",numPages:"1235",isRead:!1,genre:"scifi"}]}),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.679e87d5.chunk.js.map