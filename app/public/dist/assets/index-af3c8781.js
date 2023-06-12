(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function G(){}function Fe(e){return e()}function Pe(){return Object.create(null)}function ie(e){e.forEach(Fe)}function ze(e){return typeof e=="function"}function Ke(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ze(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function et(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function i(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function h(){return R(" ")}function P(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function tt(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function le(e,t){e.value=t??""}function xe(e,t,n){for(let o=0;o<e.options.length;o+=1){const a=e.options[o];if(a.__value===t){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function nt(e){const t=e.querySelector(":checked");return t&&t.__value}let _e;function be(e){_e=e}function lt(){if(!_e)throw new Error("Function called outside component initialization");return _e}function st(e){lt().$$.on_mount.push(e)}const oe=[],we=[];let ae=[];const Re=[],ot=Promise.resolve();let Se=!1;function rt(){Se||(Se=!0,ot.then(Ge))}function Ne(e){ae.push(e)}const Ee=new Set;let se=0;function Ge(){if(se!==0)return;const e=_e;do{try{for(;se<oe.length;){const t=oe[se];se++,be(t),at(t.$$)}}catch(t){throw oe.length=0,se=0,t}for(be(null),oe.length=0,se=0;we.length;)we.pop()();for(let t=0;t<ae.length;t+=1){const n=ae[t];Ee.has(n)||(Ee.add(n),n())}ae.length=0}while(oe.length);for(;Re.length;)Re.pop()();Se=!1,Ee.clear(),be(e)}function at(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ne)}}function it(e){const t=[],n=[];ae.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),ae=t}const ve=new Set;let ut;function Qe(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function ct(e,t,n,o){if(e&&e.o){if(ve.has(e))return;ve.add(e),ut.c.push(()=>{ve.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function dt(e){e&&e.c()}function Ve(e,t,n,o){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,n),o||Ne(()=>{const p=e.$$.on_mount.map(Fe).filter(ze);e.$$.on_destroy?e.$$.on_destroy.push(...p):ie(p),e.$$.on_mount=[]}),c.forEach(Ne)}function We(e,t){const n=e.$$;n.fragment!==null&&(it(n.after_update),ie(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(e,t){e.$$.dirty[0]===-1&&(oe.push(e),rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xe(e,t,n,o,a,c,p,_=[-1]){const r=_e;be(e);const f=e.$$={fragment:null,ctx:[],props:c,update:G,not_equal:a,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:Pe(),dirty:_,skip_bound:!1,root:t.target||r.$$.root};p&&p(f.root);let w=!1;if(f.ctx=n?n(e,t.props||{},(m,k,...J)=>{const y=J.length?J[0]:k;return f.ctx&&a(f.ctx[m],f.ctx[m]=y)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](y),w&&ft(e,m)),k}):[],f.update(),w=!0,ie(f.before_update),f.fragment=o?o(f.ctx):!1,t.target){if(t.hydrate){const m=tt(t.target);f.fragment&&f.fragment.l(m),m.forEach(x)}else f.fragment&&f.fragment.c();t.intro&&Qe(e.$$.fragment),Ve(e,t.target,t.anchor,t.customElement),Ge()}be(r)}class Ye{$destroy(){We(this,1),this.$destroy=G}$on(t,n){if(!ze(n))return G;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}$set(t){this.$$set&&!Ze(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="",pt=async()=>await(await fetch(ue+"/db/users",{method:"get"})).json(),mt=async e=>await(await fetch(ue+`/db/userById/${e}`,{method:"get"})).json(),ht=async e=>await(await fetch(ue+`/db/usersByRole/${e}`,{method:"get"})).json(),bt=async(e,t,n)=>{let o=new Headers;return o.append("Content-Type","application/json"),await(await fetch(ue+`/db/create/${e}`,{method:"post",body:JSON.stringify({userName:t,city:n}),headers:o})).json()},_t=async e=>{let t=new Headers;return t.append("Content-Type","application/json"),await(await fetch(ue+"/db/update",{method:"put",body:JSON.stringify(e),headers:t})).json()},gt=async e=>await(await fetch(ue+`/db/delete/${e}`,{method:"delete"})).json(),he={getAllUsers:pt,getUserById:mt,getUsersByRole:ht,createUser:bt,updateUser:_t,deleteUser:gt};function De(e,t,n){const o=e.slice();return o[19]=t[n],o}function $e(e){let t;return{c(){t=i("tr"),t.innerHTML=`<td colspan="4" class="text-center">No user found</td> 
      `},m(n,o){F(n,t,o)},p:G,d(n){n&&x(t)}}}function qe(e){let t,n,o=e[19].empId+"",a,c,p,_=e[19].userName+"",r,f,w,m=e[19].role+"",k,J,y,b=(e[19].city?e[19].city:"")+"",D,M,I,v,$,N,d,q,A;function ce(){return e[12](e[19])}function O(){return e[13](e[19])}return{c(){t=i("tr"),n=i("td"),a=R(o),c=h(),p=i("td"),r=R(_),f=h(),w=i("td"),k=R(m),J=h(),y=i("td"),D=R(b),M=h(),I=i("td"),v=i("button"),v.textContent="Update",$=h(),N=i("button"),N.textContent="Delete",d=h(),s(v,"class","btn btn-warning"),s(N,"class","btn btn-danger"),s(I,"width","20%")},m(j,C){F(j,t,C),l(t,n),l(n,a),l(t,c),l(t,p),l(p,r),l(t,f),l(t,w),l(w,k),l(t,J),l(t,y),l(y,D),l(t,M),l(t,I),l(I,v),l(I,$),l(I,N),l(t,d),q||(A=[P(v,"click",ce),P(N,"click",O)],q=!0)},p(j,C){e=j,C&8&&o!==(o=e[19].empId+"")&&re(a,o),C&8&&_!==(_=e[19].userName+"")&&re(r,_),C&8&&m!==(m=e[19].role+"")&&re(k,m),C&8&&b!==(b=(e[19].city?e[19].city:"")+"")&&re(D,b)},d(j){j&&x(t),q=!1,ie(A)}}}function yt(e){let t,n,o,a,c=e[3].length+"",p,_,r,f,w,m,k,J,y,b,D,M,I,v,$,N,d,q,A,ce,O,j,C,Q,de,ge=e[4]=="c"?"New user":`Update user (Emp Id - ${e[5].id})`,Ce,ke,V,Je,ye,z,W,fe,Me,B,Ie,X,pe,Oe,L,Y,Z,je,ee,me,Le,T,Ae,te,K,Be,ne,Ue,Te,H=e[3],U=[];for(let u=0;u<H.length;u+=1)U[u]=qe(De(e,H,u));let E=null;return H.length||(E=$e()),{c(){t=i("nav"),n=i("div"),o=i("span"),a=R("User Management System ("),p=R(c),_=R(")"),r=h(),f=i("button"),f.innerHTML='<span class="navbar-toggler-icon"></span>',w=h(),m=i("div"),k=i("ul"),J=h(),y=i("form"),b=i("input"),D=h(),M=i("button"),M.textContent="Search",I=h(),v=i("button"),v.textContent="Create",$=h(),N=i("table"),d=i("thead"),d.innerHTML=`<tr class="bg-dark text-light"><th>Emp. Id</th> 
      <th>Name</th> 
      <th>Role</th> 
      <th>City</th> 
      <th>Actions</th></tr>`,q=h(),A=i("tbody");for(let u=0;u<U.length;u+=1)U[u].c();E&&E.c(),ce=h(),O=i("div"),j=i("div"),C=i("div"),Q=i("div"),de=i("h1"),Ce=R(ge),ke=h(),V=i("button"),Je=h(),ye=i("div"),z=i("form"),W=i("div"),fe=i("label"),fe.textContent="User name",Me=h(),B=i("input"),Ie=h(),X=i("div"),pe=i("label"),pe.textContent="Role",Oe=h(),L=i("select"),Y=i("option"),Y.textContent="Employee",Z=i("option"),Z.textContent="Manager",je=h(),ee=i("div"),me=i("label"),me.textContent="City",Le=h(),T=i("input"),Ae=h(),te=i("div"),K=i("button"),K.textContent="Close",Be=h(),ne=i("button"),ne.textContent="Submit",s(o,"class","navbar-brand"),s(f,"class","navbar-toggler"),s(f,"type","button"),s(f,"data-bs-toggle","collapse"),s(f,"data-bs-target","#navbarSupportedContent"),s(f,"aria-controls","navbarSupportedContent"),s(f,"aria-expanded","false"),s(f,"aria-label","Toggle navigation"),s(k,"class","navbar-nav me-auto mb-2 mb-lg-0"),s(b,"class","form-control me-2"),s(b,"type","search"),s(b,"placeholder","Search by role"),s(b,"aria-label","Search"),s(M,"class","btn btn-outline-success"),s(M,"type","submit"),s(y,"class","d-flex"),s(y,"role","search"),s(v,"type","button"),s(v,"class","btn btn-success ms-2"),s(v,"data-bs-toggle","modal"),s(v,"data-bs-target","#exampleModal"),s(m,"class","collapse navbar-collapse"),s(m,"id","navbarSupportedContent"),s(n,"class","container-fluid"),s(t,"class","navbar navbar-expand-lg bg-body-tertiary"),s(N,"class","table table-hover"),s(de,"class","modal-title fs-5"),s(de,"id","exampleModalLabel"),s(V,"type","button"),s(V,"class","btn-close"),s(V,"data-bs-dismiss","modal"),s(V,"aria-label","Close"),s(Q,"class","modal-header"),s(fe,"for","recipient-name"),s(fe,"class","col-form-label"),s(B,"type","text"),s(B,"class","form-control"),s(B,"id","recipient-name"),s(W,"class","mb-3"),s(pe,"for","message-text"),s(pe,"class","col-form-label"),Y.__value="employee",Y.value=Y.__value,Z.__value="manager",Z.value=Z.__value,s(L,"class","form-select"),s(L,"aria-label","Default select example"),e[5].role===void 0&&Ne(()=>e[15].call(L)),s(X,"class","mb-3"),s(me,"for","recipient-name"),s(me,"class","col-form-label"),s(T,"type","text"),s(T,"class","form-control"),s(T,"id","recipient-name"),s(ee,"class","mb-3"),s(ye,"class","modal-body"),s(K,"type","button"),s(K,"class","btn btn-secondary"),s(K,"data-bs-dismiss","modal"),s(ne,"type","button"),s(ne,"class","btn btn-primary"),s(te,"class","modal-footer"),s(C,"class","modal-content"),s(j,"class","modal-dialog"),s(O,"class","modal fade"),s(O,"id","exampleModal"),s(O,"tabindex","-1"),s(O,"aria-labelledby","exampleModalLabel"),s(O,"aria-hidden","true")},m(u,S){F(u,t,S),l(t,n),l(n,o),l(o,a),l(o,p),l(o,_),l(n,r),l(n,f),l(n,w),l(n,m),l(m,k),l(m,J),l(m,y),l(y,b),le(b,e[0]),l(y,D),l(y,M),l(m,I),l(m,v),e[11](v),F(u,$,S),F(u,N,S),l(N,d),l(N,q),l(N,A);for(let g=0;g<U.length;g+=1)U[g]&&U[g].m(A,null);E&&E.m(A,null),F(u,ce,S),F(u,O,S),l(O,j),l(j,C),l(C,Q),l(Q,de),l(de,Ce),l(Q,ke),l(Q,V),l(C,Je),l(C,ye),l(ye,z),l(z,W),l(W,fe),l(W,Me),l(W,B),le(B,e[5].userName),l(z,Ie),l(z,X),l(X,pe),l(X,Oe),l(X,L),l(L,Y),l(L,Z),xe(L,e[5].role,!0),l(z,je),l(z,ee),l(ee,me),l(ee,Le),l(ee,T),le(T,e[5].city),l(C,Ae),l(C,te),l(te,K),e[17](K),l(te,Be),l(te,ne),Ue||(Te=[P(b,"input",e[10]),P(b,"submit",e[6]),P(M,"click",e[6]),P(B,"input",e[14]),P(L,"change",e[15]),P(T,"input",e[16]),P(ne,"click",e[7])],Ue=!0)},p(u,[S]){if(S&8&&c!==(c=u[3].length+"")&&re(p,c),S&1&&b.value!==u[0]&&le(b,u[0]),S&776){H=u[3];let g;for(g=0;g<H.length;g+=1){const He=De(u,H,g);U[g]?U[g].p(He,S):(U[g]=qe(He),U[g].c(),U[g].m(A,null))}for(;g<U.length;g+=1)U[g].d(1);U.length=H.length,!H.length&&E?E.p(u,S):H.length?E&&(E.d(1),E=null):(E=$e(),E.c(),E.m(A,null))}S&48&&ge!==(ge=u[4]=="c"?"New user":`Update user (Emp Id - ${u[5].id})`)&&re(Ce,ge),S&32&&B.value!==u[5].userName&&le(B,u[5].userName),S&32&&xe(L,u[5].role),S&32&&T.value!==u[5].city&&le(T,u[5].city)},i:G,o:G,d(u){u&&x(t),e[11](null),u&&x($),u&&x(N),et(U,u),E&&E.d(),u&&x(ce),u&&x(O),e[17](null),Ue=!1,ie(Te)}}}function vt(e,t,n){let o="",a,c,p=[],_="c";console.log("");let r={id:0,userName:"",role:"",city:""};st(()=>{w()});const f=async()=>{if(!o){w();return}let d=await he.getUsersByRole(o);console.log(d),n(3,p=d)},w=async()=>{let d=await he.getAllUsers();console.log(d),n(3,p=d)},m=async()=>{if(!r.userName||!r.role||!r.city){alert("Provide mandatory values");return}if(_==="c"){let d=await he.createUser(r.role,r.userName,r.city);await w(),a.click(),console.log(d),n(5,r.id=0,r),n(5,r.role="",r),n(5,r.userName="",r),n(5,r.city="",r)}else if(_==="u"){let d=await he.updateUser({userName:r.userName,empId:r.id,role:r.role,city:r.city});console.log(d),await w(),a.click(),n(4,_="c"),n(5,r.id=0,r),n(5,r.role="",r),n(5,r.userName="",r),n(5,r.city="",r)}},k=async d=>{n(4,_="u"),n(5,r.id=d.empId,r),n(5,r.role=d.role,r),n(5,r.userName=d.userName,r),n(5,r.city=d.city,r),c.click()},J=async d=>{let q=await he.deleteUser(d);console.log(q),await w()};function y(){o=this.value,n(0,o)}function b(d){we[d?"unshift":"push"](()=>{c=d,n(2,c)})}const D=d=>k(d),M=d=>J(d.empId);function I(){r.userName=this.value,n(5,r)}function v(){r.role=nt(this),n(5,r)}function $(){r.city=this.value,n(5,r)}function N(d){we[d?"unshift":"push"](()=>{a=d,n(1,a)})}return[o,a,c,p,_,r,f,m,k,J,y,b,D,M,I,v,$,N]}class wt extends Ye{constructor(t){super(),Xe(this,t,vt,yt,Ke,{})}}function Nt(e){let t,n,o,a,c;return a=new wt({}),{c(){t=i("main"),n=i("div"),o=i("div"),dt(a.$$.fragment),s(o,"class","row"),s(n,"class","container-fluid")},m(p,_){F(p,t,_),l(t,n),l(n,o),Ve(a,o,null),c=!0},p:G,i(p){c||(Qe(a.$$.fragment,p),c=!0)},o(p){ct(a.$$.fragment,p),c=!1},d(p){p&&x(t),We(a)}}}class Ct extends Ye{constructor(t){super(),Xe(this,t,null,Nt,Ke,{})}}new Ct({target:document.getElementById("app")});