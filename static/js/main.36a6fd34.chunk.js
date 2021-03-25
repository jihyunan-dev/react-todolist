(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{128:function(e,n){},130:function(e,n){},141:function(e,n){},143:function(e,n){},170:function(e,n){},172:function(e,n){},173:function(e,n){},178:function(e,n){},180:function(e,n){},199:function(e,n){},211:function(e,n){},214:function(e,n){},220:function(e,n,t){"use strict";t.r(n);var o,i,r,a,d,s,c,l,b,f,u,h=t(2),m=t.n(h),j=t(107),g=t.n(j),p=t(108),O=t(109),v=t(11),x=t(115),L=t(114),S=t(6),w=t(7),y=t(110),T=t.n(y),F=t(3),k="Todo",N="Finished",C=w.b.div(o||(o=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),I=w.b.form(i||(i=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n"]))),z=w.b.input(r||(r=Object(S.a)(["\n  width: 40vw;\n  min-width: 20rem;\n  height: 5rem;\n  padding: 0.5rem 1.5rem;\n  border: 0.2rem solid #ff7979;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  font-size: 2rem;\n  outline: none;\n  &:focus {\n    border-color: #eb2f06;\n  }\n"]))),M=w.b.button(a||(a=Object(S.a)(["\n  width: 10vw;\n  min-width: 10rem;\n  height: 5rem;\n  box-sizing: border-box;\n  background-color: #ff7979;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  font-size: 1.8rem;\n"]))),J=w.b.div(d||(d=Object(S.a)(["\n  width: 50vw;\n  min-width: 30rem;\n"]))),D=w.b.h3(s||(s=Object(S.a)(["\n  height: 3rem;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n"]))),A=w.b.ul(c||(c=Object(S.a)(["\n  padding: 0 2rem;\n"]))),B=w.b.li(l||(l=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 3rem;\n  margin-bottom: 1rem;\n  font-size: 1.6rem;\n  font-weight: 600;\n"]))),E=w.b.div(b||(b=Object(S.a)(["\n  display: flex;\n  align-items: center;\n"]))),_=w.b.button(f||(f=Object(S.a)(["\n  padding: 0.5rem 1rem;\n  margin-left: 1rem;\n  border-radius: 0.5rem;\n  background-color: #ff7979;\n"]))),q=function(e){Object(x.a)(t,e);var n=Object(L.a)(t);function t(e){var o;return Object(p.a)(this,t),(o=n.call(this,e)).saveLocalStorage=function(e,n){localStorage.setItem(n,JSON.stringify(e))},o.moveToFinished=function(e){var n=o.state,t=n.todoList,i=n.finishedList,r=e.target.parentNode.parentNode,a=t.find((function(e){return e.id===r.id})),d=i.slice(0);d.push(a),o.deleteTodo(e),o.setState({finishedList:d}),o.saveLocalStorage(d,N)},o.moveToTodo=function(e){var n=o.state,t=n.todoList,i=n.finishedList,r=e.target.parentNode.parentNode,a=i.find((function(e){return e.id===r.id})),d=t.slice(0);d.push(a),o.deleteFinished(e),o.setState({todoList:d}),o.saveLocalStorage(d,k)},o.deleteTodo=function(e){var n=o.state.todoList,t=e.target.parentNode.parentNode,i=n.slice(0).filter((function(e){return e.id!==t.id}));o.setState({todoList:i}),o.saveLocalStorage(i,k)},o.deleteFinished=function(e){var n=o.state.finishedList,t=e.target.parentNode.parentNode,i=n.slice(0).filter((function(e){return e.id!==t.id}));o.setState({finishedList:i}),o.saveLocalStorage(i,N)},o.handleSubmit=function(e){e.preventDefault();var n=o.state,t=n.value,i=n.todoList;if(""!==t){var r=i.slice(0),a={id:T.a.generate(),todo:t};r.push(a),o.setState({value:"",todoList:r}),o.saveLocalStorage(r,k)}},o.handleChange=function(e){var n=e.target.value;o.setState({value:n})},o.loadList=function(){var e=JSON.parse(localStorage.getItem("Todo")),n=JSON.parse(localStorage.getItem("Finished"));e&&o.setState({todoList:e}),n&&o.setState({finishedList:n})},o.handleChange=o.handleChange.bind(Object(v.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(v.a)(o)),o.saveLocalStorage=o.saveLocalStorage.bind(Object(v.a)(o)),o.loadList=o.loadList.bind(Object(v.a)(o)),o.deleteTodo=o.deleteTodo.bind(Object(v.a)(o)),o.deleteFinished=o.deleteFinished.bind(Object(v.a)(o)),o.moveToFinished=o.moveToFinished.bind(Object(v.a)(o)),o.moveToTodo=o.moveToTodo.bind(Object(v.a)(o)),o.state={value:"",todoList:[],finishedList:[]},o}return Object(O.a)(t,[{key:"componentDidMount",value:function(){this.loadList()}},{key:"render",value:function(){var e=this,n=this.state,t=n.value,o=n.todoList,i=n.finishedList;return Object(F.jsxs)(C,{children:[Object(F.jsxs)(I,{onSubmit:this.handleSubmit,children:[Object(F.jsx)(z,{type:"text",placeholder:"\uc624\ub298 \ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694\ud83d\ude01",onChange:this.handleChange,value:t}),Object(F.jsx)(M,{type:"submit",children:"\uc81c\ucd9c"})]}),Object(F.jsxs)(J,{children:[Object(F.jsx)(D,{children:"To do List"}),Object(F.jsx)(A,{children:o.map((function(n){return Object(F.jsxs)(B,{id:n.id,children:[n.todo,Object(F.jsxs)(E,{children:[Object(F.jsx)(_,{type:"button",onClick:e.moveToFinished,children:"\uc644\ub8cc"}),Object(F.jsx)(_,{type:"button",onClick:e.deleteTodo,children:"\uc0ad\uc81c"})]})]},n.id)}))})]}),Object(F.jsxs)(J,{children:[Object(F.jsx)(D,{children:"Finished!"}),Object(F.jsx)(A,{children:i.map((function(n){return Object(F.jsxs)(B,{id:n.id,children:[n.todo,Object(F.jsxs)(E,{children:[Object(F.jsx)(_,{type:"button",onClick:e.moveToTodo,children:"\ucde8\uc18c"}),Object(F.jsx)(_,{type:"button",onClick:e.deleteFinished,children:"\uc0ad\uc81c"})]})]},n.id)}))})]})]})}}]),t}(m.a.Component),G=Object(w.a)(u||(u=Object(S.a)(['\n  @font-face {\n    font-family: \'MapoFlowerIsland\';\n    src: url(\'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    width: 100vw;\n    height: 100vh;\n    padding: 2rem;\n    background-color: #f4eded;\n    font-family: "MapoFlowerIsland";\n    font-size: 1.4rem;\n    font-weight: 600;\n  }\n  input {\n    appearance: none;\n    border: none;\n    background-color: transparent;\n    font-size: 1.6rem;\n    font-family: "MapoFlowerIsland";\n    outline: none;\n  }\n  input[type="text"] {\n    &::placeholder {\n      font-family: "MapoFlowerIsland"\n    }\n  }\n  button {\n    color: white;\n    background-color: transparent;\n    border: none;\n    font-family: "MapoFlowerIsland";\n    outline: none;\n    cursor: pointer;\n\n    &:hover {\n    background-color: #eb2f06;\n    }\n    &:focus-within {\n      background-color: #eb2f06;\n  }\n\n  }\n  li {\n    list-style: none;\n  }\n'])));var H=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,{}),Object(F.jsx)(G,{})]})};g.a.render(Object(F.jsx)(m.a.StrictMode,{children:Object(F.jsx)(H,{})}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.36a6fd34.chunk.js.map