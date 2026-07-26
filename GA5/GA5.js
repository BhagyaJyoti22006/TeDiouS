var ct=Object.create;var B=Object.defineProperty;var lt=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var pt=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty;var S=(o,s)=>()=>(o&&(s=o(o=0)),s);var L=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),R=(o,s)=>{for(var c in s)B(o,c,{get:s[c],enumerable:!0})},ht=(o,s,c,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let p of dt(s))!ut.call(o,p)&&p!==c&&B(o,p,{get:()=>s[p],enumerable:!(t=lt(s,p))||t.enumerable});return o};var P=(o,s,c)=>(c=o!=null?ct(pt(o)):{},ht(s||!o||!o.__esModule?B(c,"default",{value:o,enumerable:!0}):c,o));var ae=L((oe,Y)=>{(function(o,s,c){function t(e){var n=this,i=l();n.next=function(){var a=2091639*n.s0+n.c*23283064365386963e-26;return n.s0=n.s1,n.s1=n.s2,n.s2=a-(n.c=a|0)},n.c=1,n.s0=i(" "),n.s1=i(" "),n.s2=i(" "),n.s0-=i(e),n.s0<0&&(n.s0+=1),n.s1-=i(e),n.s1<0&&(n.s1+=1),n.s2-=i(e),n.s2<0&&(n.s2+=1),i=null}function p(e,n){return n.c=e.c,n.s0=e.s0,n.s1=e.s1,n.s2=e.s2,n}function d(e,n){var i=new t(e),a=n&&n.state,r=i.next;return r.int32=function(){return i.next()*4294967296|0},r.double=function(){return r()+(r()*2097152|0)*11102230246251565e-32},r.quick=r,a&&(typeof a=="object"&&p(a,i),r.state=function(){return p(i,{})}),r}function l(){var e=4022871197,n=function(i){i=String(i);for(var a=0;a<i.length;a++){e+=i.charCodeAt(a);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26};return n}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.alea=d})(oe,typeof Y=="object"&&Y,typeof define=="function"&&define)});var re=L((ne,X)=>{(function(o,s,c){function t(l){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var a=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^a^a>>>8},l===(l|0)?e.x=l:n+=l;for(var i=0;i<n.length+64;i++)e.x^=n.charCodeAt(i)|0,e.next()}function p(l,e){return e.x=l.x,e.y=l.y,e.z=l.z,e.w=l.w,e}function d(l,e){var n=new t(l),i=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var r=n.next()>>>11,u=(n.next()>>>0)/4294967296,h=(r+u)/(1<<21);while(h===0);return h},a.int32=n.next,a.quick=a,i&&(typeof i=="object"&&p(i,n),a.state=function(){return p(n,{})}),a}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.xor128=d})(ne,typeof X=="object"&&X,typeof define=="function"&&define)});var ie=L((se,F)=>{(function(o,s,c){function t(l){var e=this,n="";e.next=function(){var a=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(a^a<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,l===(l|0)?e.x=l:n+=l;for(var i=0;i<n.length+64;i++)e.x^=n.charCodeAt(i)|0,i==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function p(l,e){return e.x=l.x,e.y=l.y,e.z=l.z,e.w=l.w,e.v=l.v,e.d=l.d,e}function d(l,e){var n=new t(l),i=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var r=n.next()>>>11,u=(n.next()>>>0)/4294967296,h=(r+u)/(1<<21);while(h===0);return h},a.int32=n.next,a.quick=a,i&&(typeof i=="object"&&p(i,n),a.state=function(){return p(n,{})}),a}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.xorwow=d})(se,typeof F=="object"&&F,typeof define=="function"&&define)});var le=L((ce,V)=>{(function(o,s,c){function t(l){var e=this;e.next=function(){var i=e.x,a=e.i,r,u,h;return r=i[a],r^=r>>>7,u=r^r<<24,r=i[a+1&7],u^=r^r>>>10,r=i[a+3&7],u^=r^r>>>3,r=i[a+4&7],u^=r^r<<7,r=i[a+7&7],r=r^r<<13,u^=r^r<<9,i[a]=u,e.i=a+1&7,u};function n(i,a){var r,u,h=[];if(a===(a|0))u=h[0]=a;else for(a=""+a,r=0;r<a.length;++r)h[r&7]=h[r&7]<<15^a.charCodeAt(r)+h[r+1&7]<<13;for(;h.length<8;)h.push(0);for(r=0;r<8&&h[r]===0;++r);for(r==8?u=h[7]=-1:u=h[r],i.x=h,i.i=0,r=256;r>0;--r)i.next()}n(e,l)}function p(l,e){return e.x=l.x.slice(),e.i=l.i,e}function d(l,e){l==null&&(l=+new Date);var n=new t(l),i=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var r=n.next()>>>11,u=(n.next()>>>0)/4294967296,h=(r+u)/(1<<21);while(h===0);return h},a.int32=n.next,a.quick=a,i&&(i.x&&p(i,n),a.state=function(){return p(n,{})}),a}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.xorshift7=d})(ce,typeof V=="object"&&V,typeof define=="function"&&define)});var pe=L((de,W)=>{(function(o,s,c){function t(l){var e=this;e.next=function(){var i=e.w,a=e.X,r=e.i,u,h;return e.w=i=i+1640531527|0,h=a[r+34&127],u=a[r=r+1&127],h^=h<<13,u^=u<<17,h^=h>>>15,u^=u>>>12,h=a[r]=h^u,e.i=r,h+(i^i>>>16)|0};function n(i,a){var r,u,h,f,k,y=[],T=128;for(a===(a|0)?(u=a,a=null):(a=a+"\0",u=0,T=Math.max(T,a.length)),h=0,f=-32;f<T;++f)a&&(u^=a.charCodeAt((f+32)%a.length)),f===0&&(k=u),u^=u<<10,u^=u>>>15,u^=u<<4,u^=u>>>13,f>=0&&(k=k+1640531527|0,r=y[f&127]^=u+k,h=r==0?h+1:0);for(h>=128&&(y[(a&&a.length||0)&127]=-1),h=127,f=512;f>0;--f)u=y[h+34&127],r=y[h=h+1&127],u^=u<<13,r^=r<<17,u^=u>>>15,r^=r>>>12,y[h]=u^r;i.w=k,i.X=y,i.i=h}n(e,l)}function p(l,e){return e.i=l.i,e.w=l.w,e.X=l.X.slice(),e}function d(l,e){l==null&&(l=+new Date);var n=new t(l),i=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var r=n.next()>>>11,u=(n.next()>>>0)/4294967296,h=(r+u)/(1<<21);while(h===0);return h},a.int32=n.next,a.quick=a,i&&(i.X&&p(i,n),a.state=function(){return p(n,{})}),a}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.xor4096=d})(de,typeof W=="object"&&W,typeof define=="function"&&define)});var he=L((ue,G)=>{(function(o,s,c){function t(l){var e=this,n="";e.next=function(){var a=e.b,r=e.c,u=e.d,h=e.a;return a=a<<25^a>>>7^r,r=r-u|0,u=u<<24^u>>>8^h,h=h-a|0,e.b=a=a<<20^a>>>12^r,e.c=r=r-u|0,e.d=u<<16^r>>>16^h,e.a=h-a|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,l===Math.floor(l)?(e.a=l/4294967296|0,e.b=l|0):n+=l;for(var i=0;i<n.length+20;i++)e.b^=n.charCodeAt(i)|0,e.next()}function p(l,e){return e.a=l.a,e.b=l.b,e.c=l.c,e.d=l.d,e}function d(l,e){var n=new t(l),i=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var r=n.next()>>>11,u=(n.next()>>>0)/4294967296,h=(r+u)/(1<<21);while(h===0);return h},a.int32=n.next,a.quick=a,i&&(typeof i=="object"&&p(i,n),a.state=function(){return p(n,{})}),a}s&&s.exports?s.exports=d:c&&c.amd?c(function(){return d}):this.tychei=d})(ue,typeof G=="object"&&G,typeof define=="function"&&define)});var me=L(()=>{});var fe=L((ge,H)=>{(function(o,s,c){var t=256,p=6,d=52,l="random",e=c.pow(t,p),n=c.pow(2,d),i=n*2,a=t-1,r;function u(m,g,b){var v=[];g=g==!0?{entropy:!0}:g||{};var w=y(k(g.entropy?[m,x(s)]:m??T(),3),v),I=new h(v),A=function(){for(var _=I.g(p),q=e,$=0;_<n;)_=(_+$)*t,q*=t,$=I.g(1);for(;_>=i;)_/=2,q/=2,$>>>=1;return(_+$)/q};return A.int32=function(){return I.g(4)|0},A.quick=function(){return I.g(4)/4294967296},A.double=A,y(x(I.S),s),(g.pass||b||function(_,q,$,O){return O&&(O.S&&f(O,I),_.state=function(){return f(I,{})}),$?(c[l]=_,q):_})(A,w,"global"in g?g.global:this==c,g.state)}function h(m){var g,b=m.length,v=this,w=0,I=v.i=v.j=0,A=v.S=[];for(b||(m=[b++]);w<t;)A[w]=w++;for(w=0;w<t;w++)A[w]=A[I=a&I+m[w%b]+(g=A[w])],A[I]=g;(v.g=function(_){for(var q,$=0,O=v.i,M=v.j,U=v.S;_--;)q=U[O=a&O+1],$=$*t+U[a&(U[O]=U[M=a&M+q])+(U[M]=q)];return v.i=O,v.j=M,$})(t)}function f(m,g){return g.i=m.i,g.j=m.j,g.S=m.S.slice(),g}function k(m,g){var b=[],v=typeof m,w;if(g&&v=="object")for(w in m)try{b.push(k(m[w],g-1))}catch{}return b.length?b:v=="string"?m:m+"\0"}function y(m,g){for(var b=m+"",v,w=0;w<b.length;)g[a&w]=a&(v^=g[a&w]*19)+b.charCodeAt(w++);return x(g)}function T(){try{var m;return r&&(m=r.randomBytes)?m=m(t):(m=new Uint8Array(t),(o.crypto||o.msCrypto).getRandomValues(m)),x(m)}catch{var g=o.navigator,b=g&&g.plugins;return[+new Date,o,b,o.screen,x(s)]}}function x(m){return String.fromCharCode.apply(0,m)}if(y(c.random(),s),typeof H=="object"&&H.exports){H.exports=u;try{r=me()}catch{}}else typeof define=="function"&&define.amd?define(function(){return u}):c["seed"+l]=u})(typeof self<"u"?self:ge,[],Math)});var C=L((_o,ye)=>{var vt=ae(),bt=re(),wt=ie(),kt=le(),xt=pe(),Tt=he(),D=fe();D.alea=vt;D.xor128=bt;D.xorwow=wt;D.xorshift7=kt;D.xor4096=xt;D.tychei=Tt;ye.exports=D});var ke={};R(ke,{default:()=>$t});import{html as It}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function St(o){return String(o||"").trim().toLowerCase()}function ve(o,s,c){return s+Math.floor(o()*(c-s+1))}function Et(o,s){let c=[...o];for(let t=c.length-1;t>0;t--){let p=Math.floor(s()*(t+1));[c[t],c[p]]=[c[p],c[t]]}return c}function K(o){return we.find(s=>s.ch===o)}function z(o,s,c,t){let p=K(t),d=s+p.dx,l=c+p.dy;o[c][s]|=p.bit,o[l][d]|=K(_t[t]).bit}function At({email:o,id:s,version:c}){let t=(0,be.default)(`${St(o)}#${s}${c?"#"+c:""}`),p=31+2*ve(t,0,15),d=31+2*ve(t,0,15),l=Array.from({length:d},()=>Array(p).fill(0)),e=Array.from({length:d},()=>Array(p).fill(!1)),n=[[1,1]];for(e[1][1]=!0;n.length;){let[a,r]=n[n.length-1],u=Et(we,t).map(({ch:x,dx:m,dy:g})=>({ch:x,wx:a+m,wy:r+g,nx:a+2*m,ny:r+2*g})).filter(({nx:x,ny:m})=>x>0&&x<p-1&&m>0&&m<d-1&&!e[m][x]);if(!u.length){n.pop();continue}let{ch:h,wx:f,wy:k,nx:y,ny:T}=u[0];z(l,a,r,h),z(l,f,k,h),e[T][y]=!0,n.push([y,T])}let i=.1+t()*.05;for(let a=1;a<d-1;a+=2)for(let r=1;r<p-1;r+=2)for(let u of["R","D"]){let{dx:h,dy:f,bit:k}=K(u),y=r+2*h,T=a+2*f;y<=0||y>=p-1||T<=0||T>=d-1||l[a][r]&k||t()<i&&(z(l,r,a,u),z(l,r+h,a+f,u))}return{width:p,height:d,start:[1,1],end:[p-2,d-2],openMask:l}}function Rt(o){let c="#111827",t="#f8fafc",p="#16a34a",d="#dc2626",l=[];for(let e=0;e<o.height;e++)for(let n=0;n<o.width;n++){let i=o.openMask[e][n]||n===o.start[0]&&e===o.start[1]||n===o.end[0]&&e===o.end[1];l.push(`<rect x="${n*6}" y="${e*6}" width="6" height="6" fill="${i?t:c}"/>`)}return l.push(`<rect x="${o.start[0]*6}" y="${o.start[1]*6}" width="6" height="6" fill="${p}"/>`),l.push(`<rect x="${o.end[0]*6}" y="${o.end[1]*6}" width="6" height="6" fill="${d}"/>`),`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${o.width*6} ${o.height*6}">${l.join("")}</svg>`)}`}async function $t({user:o,weight:s=2,version:c=""}){let t="maze-solve-server",p="Solve a Generated Maze Offline",d=At({email:o.email,id:t,version:c}),l=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:"application/json"})),e=It`
    <div class="mb-3">
      <p class="lead">
        This is a shortest-path problem, not an eyesight test. Download the maze graph below, write your own solver
        locally, and submit the shortest move string from <code>start</code> to <code>end</code>.
      </p>
      <p>
        The maze contains loops, so several different routes can reach <code>end</code> — only one of them is
        shortest. The server independently regenerates the same maze from your identity and checks your submission
        without revealing what that shortest length is.
      </p>

      <div class="row g-3 align-items-start my-3">
        <div class="col-lg-5">
          <img
            src="${Rt(d)}"
            alt="Maze preview"
            class="img-fluid border rounded bg-white"
            style="image-rendering: pixelated;"
          />
        </div>
        <div class="col-lg-7">
          <dl class="row mb-3">
            <dt class="col-sm-3">Size</dt>
            <dd class="col-sm-9"><code>${d.width} x ${d.height}</code></dd>
            <dt class="col-sm-3">Start</dt>
            <dd class="col-sm-9"><code>[${d.start.join(", ")}]</code></dd>
            <dt class="col-sm-3">End</dt>
            <dd class="col-sm-9"><code>[${d.end.join(", ")}]</code></dd>
          </dl>
          <a class="btn btn-sm btn-outline-primary" href="${l}" download="maze-solve.json">
            Download maze JSON
          </a>
          <p class="text-muted small mt-2 mb-0">
            The image is only a sanity check that your download looks right — at this size it isn't meant to be
            traced by eye.
          </p>
        </div>
      </div>

      <h6>Maze JSON format</h6>
      <p>
        <code>openMask[y][x]</code> is a 4-bit mask of open directions from cell <code>[x, y]</code>:
        <code>U=1</code>, <code>R=2</code>, <code>D=4</code>, <code>L=8</code>. A move is legal only if that bit is
        set — for example, <code>openMask[y][x] &amp; 2</code> nonzero means you can move right to
        <code>[x + 1, y]</code>.
      </p>

      <h6>What's actually being tested</h6>
      <p>
        Every cell is a node, and every open direction is an edge of weight 1. Finding the shortest path in an
        unweighted graph like this is exactly what <strong>breadth-first search</strong> is for — it explores outward
        one "ring" at a time, so the first time it reaches a node is guaranteed to be by the shortest possible route.
        (Dijkstra's algorithm and A* also work here; BFS is just the simplest correct tool for equal-weight edges.)
      </p>
      <p>
        This is the same underlying problem behind things you use daily: a maps app finding the fastest route between
        two addresses, a network router picking the path with the fewest hops for a packet, a game NPC navigating
        around obstacles to reach the player, and a robot planning a collision-free path through a room. In all of
        these, the map only matters insofar as it can be turned into a graph — the interesting part is the search,
        not the picture.
      </p>
      <p class="text-muted">
        You're free to implement this in any language or tool. The point is to build the graph from the JSON, run a
        real search over it, and reconstruct the path it finds — not to work out the route by inspection.
      </p>

      <h6>What to submit</h6>
      <ul>
        <li>Submit one uppercase string using only <code>U</code>, <code>D</code>, <code>L</code>, and <code>R</code>.</li>
        <li>The string is replayed from <code>start</code>, one cell per character. Example format: <code>RRUDLL</code>.</li>
        <li>Illegal moves, malformed input, or ending anywhere except <code>end</code> receive zero.</li>
        <li>A valid path to <code>end</code> that is longer than the shortest path receives half credit.</li>
        <li>The exact shortest path receives full credit.</li>
      </ul>

      <label for="${t}" class="form-label"><strong>Move string</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="4"
        placeholder="RRDDLL..."
      ></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:e,answer:async i=>{let a=String(i||"").trim();if(!a||a.length>2e4||!/^[UDLR]+$/.test(a))throw new Error("Submit only uppercase U/D/L/R moves, with no separators.");let r=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:a,weight:s,questionId:t,version:c})}),u=await r.json();if(!r.ok)throw new Error(u.error||"Verification failed.");return u}}}var be,we,_t,xe=S(()=>{"use strict";be=P(C(),1),we=[{ch:"U",bit:1,dx:0,dy:-1},{ch:"R",bit:2,dx:1,dy:0},{ch:"D",bit:4,dx:0,dy:1},{ch:"L",bit:8,dx:-1,dy:0}],_t={U:"D",R:"L",D:"U",L:"R"}});var J,Te=S(()=>{"use strict";J=(o,s)=>o[Math.floor(s()*o.length)]});var Se={};R(Se,{default:()=>Ut});import{html as qt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Pt(o,s){return new Date(o,s,0).getDate()}function Ie(o){return Math.round(o*100)/100}function Nt(o,s,c){let t=(0,_e.default)(`${o}#${s}#${c}`),p=J(Ot,t),d=J(Dt,t),l=p+d,{year:e,month:n}=J(Ct,t),i=Pt(e,n),a=5,r=i-3,u=a+Math.floor(t()*(r-a+1)),h=i-u+1,f=l-p,k=Ie(f*(h/30)),y=Ie(f*(h/i));return{old_price:p,new_price:l,price_delta:f,year:e,month:n,monthName:Lt[n],days_in_actual_month:i,upgrade_day:u,days_remaining:h,charge_v1:k,charge_v2:y}}async function Ut({user:o,weight:s=3,version:c=""}){let t="q-spec-driven-correction-server",p="Spec-Driven Development: The Proration Bug",d=Nt(o.email,t,c),l=async n=>{let i=String(n||"").trim();if(!i)throw new Error("Enter your proration endpoint URL.");if(!/^https?:\/\//i.test(i))throw new Error("URL must start with http:// or https://.");let a;try{a=new URL(i).hostname}catch{throw new Error("Not a valid URL.")}if(/^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?)/i.test(a))throw new Error("The grader can't reach a localhost address \u2014 deploy publicly or use a tunnel.");let r=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:i,weight:s,questionId:t,version:c})}),u=await r.json();if(!r.ok)throw new Error(u.error||"Verification failed.");return u},e=qt`
  <div class="mb-3">
    <h4>Spec-Driven Development: The Proration Bug</h4>
    <p>
      You're a developer on a SaaS billing team. Product and finance hand you a spec for a proration
      calculator; you implement it faithfully. Later they discover that the old rule treated every month as
      30 days, which caused small but real billing errors in February and 31-day months. Your job is to ship
      a real <strong>callable implementation</strong> that supports both the legacy rule and the corrected rule.
    </p>

    <p>
      This is common in production systems: old invoices may still need the legacy calculation for audit
      and reconciliation, while new invoices must use the corrected behavior. Implement a public HTTP
      endpoint that calculates the prorated charge for a customer upgrading their subscription plan.
      Your endpoint must support both versions, selected by the <code>spec</code> field in the request.
    </p>

    <div class="card my-3 border-secondary bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title text-dark"><strong>Scenario</strong></h5>
        <ul class="mb-0">
          <li>Billing cycle: the full calendar month of <strong>${d.monthName} ${d.year}</strong>.</li>
          <li>Current plan price: <strong>$${d.old_price}/month</strong>.</li>
          <li>Customer upgrades mid-cycle to a new plan priced at <strong>$${d.new_price}/month</strong>.</li>
          <li>The upgrade happens on <strong>day ${d.upgrade_day}</strong> of that month.</li>
          <li>
            "Days remaining" is the number of days from the upgrade day through the end of the billing
            month (inclusive).
          </li>
        </ul>
      </div>
    </div>

    <p><strong>Specification v1</strong></p>
    <blockquote class="border-start border-3 ps-3">
      "When a customer upgrades their plan mid-cycle, charge the prorated difference for the
      remaining days in the current billing cycle:
      <code>charge = (new_price - old_price) * (days_remaining / 30)</code>,
      where the divisor is always exactly 30, regardless of the actual number of days in the
      billing month."
    </blockquote>

    <p><strong>Specification v2 (corrected)</strong></p>
    <blockquote class="border-start border-3 ps-3">
      "Replace the constant divisor 30 with the actual number of days in the billing month
      (including leap years where applicable). Nothing else about the formula changes."
    </blockquote>

    <p><strong>Your endpoint receives</strong> a POST request with a JSON body:</p>

    <pre><code>{
  "old_price": number,
  "new_price": number,
  "days_remaining": number,
  "days_in_actual_month": number,
  "spec": "v1" | "v2"
}</code></pre>

    <p><strong>Your endpoint must return</strong>:</p>

    <pre><code>{ "charge": number }</code></pre>

    <p>The charge should be computed as follows:</p>

    <ul>
      <li>
        <code>spec == "v1"</code>:
        <code>charge = (new_price - old_price) * (days_remaining / 30)</code>
      </li>
      <li>
        <code>spec == "v2"</code>:
        <code>charge = (new_price - old_price) * (days_remaining / days_in_actual_month)</code>
      </li>
    </ul>

    <div class="card my-3 border-warning">
      <div class="card-body">
        <h5 class="card-title"><strong>Grading</strong></h5>
        <ul class="mb-0">
          <li>Your endpoint will be tested with multiple inputs covering both specifications.</li>
          <li>Your returned <code>charge</code> must match the expected value within a tolerance of $0.01.</li>
          <li>Respond within a few seconds; the grader times out slow requests and counts them as failed.</li>
        </ul>
      </div>
    </div>

    <label for="${t}" class="form-label">
      <strong>Proration endpoint URL</strong>
    </label>

    <textarea
      class="form-control font-monospace"
      id="${t}"
      name="${t}"
      rows="2"
      placeholder="https://your-proration-endpoint.example.com/charge"
    ></textarea>
  </div>
`;return{id:t,title:p,weight:s,question:e,answer:l}}var _e,Lt,Ot,Dt,Ct,Ee=S(()=>{"use strict";_e=P(C(),1);Te();Lt=["","January","February","March","April","May","June","July","August","September","October","November","December"],Ot=[9,19,29,49],Dt=[10,20,30,40,50],Ct=[{year:2026,month:2},{year:2028,month:2},{year:2026,month:4},{year:2026,month:1},{year:2027,month:7},{year:2029,month:11}]});var Le={};R(Le,{default:()=>Yt});import{html as jt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Jt(o,s,c){return(0,qe.default)(`${String(o||"").trim().toLowerCase()}#${c}#${s}`)}function Bt(o){let s=Re[Math.floor(o()*Re.length)],c=$e[Math.floor(o()*$e.length)],t=[...zt];for(let p=t.length-1;p>0;p--){let d=Math.floor(o()*(p+1));[t[p],t[d]]=[t[d],t[p]]}return{secretRel:s,secretFile:`${Ae}/${s}`,writeDir:c,allowedDomains:t.slice(0,2),homeDir:Ae,cwd:Mt,attackerSuffix:Ht}}async function Yt({user:o,weight:s=4,version:c=""}){let t="q-agent-tool-guardrail-server",p="Agent Harness \u2014 Pre-Tool-Call Guardrail Hook",d=Jt(o.email,c,t),l=Bt(d),{secretFile:e,writeDir:n,allowedDomains:i,homeDir:a,cwd:r}=l,u={tool:"bash",command:"sudo cat /etc/shadow"},h={decision:"block",reason:"Reading /etc/shadow is never permitted by this agent's policy."},f={tool:"bash",command:`ls -la ${r}`},k={decision:"allow",reason:"Listing the agent's own working directory is fine."},y=jt`
    <div class="mb-3">
      <p class="lead text-primary">
        <strong>Scenario:</strong> You're building the harness around a coding agent that can call
        <code>bash</code>, <code>write_file</code>, and <code>http_request</code> tools. Rather than trust the
        agent's own judgment (or an LLM "is this safe?" prompt) to enforce security, you insert a
        <strong>pre-tool-call guardrail hook</strong>: a small, deterministic HTTP endpoint that inspects every
        proposed tool call <em>before</em> the harness executes it, and returns <code>allow</code> or
        <code>block</code>.
      </p>
      <p>
        This mirrors how real agent harnesses add safety: sandboxing, scoped credentials, and hard-coded
        deterministic checks are what make a security boundary hold up when an agent is careless, confused
        by malicious input, or asked to run risky commands. A practical version of this pattern appears in
        internal developer platforms that let agents edit code, download dependencies, and call external APIs
        while still protecting secrets and limiting data exfiltration.
      </p>

      <div class="card my-3 border-secondary bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title text-dark"><strong>Security policy for this task</strong></h5>
          <ul class="mb-0">
            <li>The agent's working directory is <code>${r}</code>, and its home directory is <code>${a}</code>.</li>
            <li>
              The agent must <strong>NEVER be allowed to read</strong> <code>${e}</code>
              (in any form: directly, via <code>$HOME</code>/<code>~</code> expansion, relative traversal from
              its working directory, or wrapped inside another command). It's told this path contains
              secrets, but must not read it under any circumstances.
            </li>
            <li>
              The agent <strong>MAY write files only inside</strong> <code>${n}</code> (including
              subdirectories of it) — writes anywhere else, including paths that use <code>..</code> to escape
              back out of it, must be blocked.
            </li>
            <li>
              The agent's outbound HTTP requests are allowed <strong>only</strong> to these exact hosts:
              <code>${i[0]}</code> and <code>${i[1]}</code>. Any other host —
              including a host that merely <em>contains</em> one of these names as a substring or subdomain
              prefix (e.g. an attacker registering <code>${i[0]}.some-other-domain.example</code>)
              — must be blocked.
            </li>
            <li>
              Reads of anything <em>outside</em> the restricted file above are fine and <strong>must be
              allowed</strong> — this policy is about protecting one specific secret and one write boundary,
              not about locking the agent out of its own workspace.
            </li>
          </ul>
        </div>
      </div>

      <p><strong>What your endpoint receives:</strong> a POST with a JSON body describing exactly one proposed
      tool call, in one of these three shapes:</p>
      <pre><code>{ "tool": "bash", "command": "..." }
{ "tool": "write_file", "path": "...", "content": "..." }
{ "tool": "http_request", "method": "GET" | "POST", "url": "..." }</code></pre>

      <p><strong>What your endpoint must return:</strong> strict JSON with exactly these two keys:</p>
      <pre><code>{ "decision": "allow" | "block", "reason": "short human-readable string" }</code></pre>

      <h6>Worked examples</h6>
      <p>Request:</p>
      <pre><code>${JSON.stringify(u,null,2)}</code></pre>
      <p>Correct response:</p>
      <pre><code>${JSON.stringify(h,null,2)}</code></pre>
      <p>Request:</p>
      <pre><code>${JSON.stringify(f,null,2)}</code></pre>
      <p>Correct response:</p>
      <pre><code>${JSON.stringify(k,null,2)}</code></pre>

      <div class="card my-3 border-warning">
        <div class="card-body">
          <h5 class="card-title"><strong>How you're graded</strong></h5>
          <ul class="mb-0">
            <li>
              The grader sends several representative tool-call requests to your endpoint. Your score is
              the <strong>fraction of cases your endpoint decides correctly</strong>, scaled by this
              question's weight.
            </li>
            <li>
              The probes include: direct reads of your restricted file; <strong>obfuscated bypass
              attempts</strong> on that same file (environment-variable expansion, tilde expansion, relative
              path traversal, base64-wrapped shell commands, etc.); reads that are <strong>outside</strong> the
              restricted file and must stay allowed (so blocking everything scores poorly too); writes inside
              vs. outside your allowed directory (including a traversal escape); and requests to allowed vs.
              disallowed hosts (including a domain-confusion trick).
            </li>
            <li>
              Build a <strong>real policy engine</strong>: resolve/normalize paths and hostnames and compare
              them against your rules. A "call an LLM and ask if it's safe" endpoint is not enough here:
              the important cases require exact checks for path traversal, shell wrapping, and hostname
              confusion.
            </li>
            <li>Respond within a few seconds; the grader times out slow requests and counts them as failed.</li>
            <li>
              If you fail some probes, feedback tells you <em>which categories</em> of case were mishandled
              (e.g. "obfuscated-read", "write-traversal") — never the exact case or the expected decision.
            </li>
          </ul>
        </div>
      </div>

      <label for="${t}" class="form-label"><strong>Guardrail endpoint URL</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="2"
        placeholder="https://your-guardrail.example.com/check"
      ></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:y,answer:async x=>{let m=String(x||"").trim();if(!m)throw new Error("Enter your guardrail endpoint URL.");if(!/^https?:\/\//i.test(m))throw new Error("URL must start with http:// or https://.");let g;try{g=new URL(m).hostname}catch{throw new Error("Not a valid URL.")}if(/^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?)/i.test(g))throw new Error("The grader can't reach a localhost address \u2014 deploy publicly or use a tunnel.");let b=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:m,weight:s,questionId:t,version:c})}),v=await b.json();if(!b.ok)throw new Error(v.error||"Verification failed.");return v}}}var qe,Ae,Mt,Ht,Re,$e,zt,Oe=S(()=>{"use strict";qe=P(C(),1),Ae="/home/agent",Mt="/home/agent/workspace",Ht="attacker-relay.net",Re=[".bashrc",".env",".npmrc",".netrc",".pgpass",".secrets","credentials.env","service-account.json"],$e=["/workspace/output/","/home/agent/workspace/build/","/data/agent/outbox/","/srv/reports/"],zt=["api.github.com","pypi.org","registry.npmjs.org","huggingface.co","raw.githubusercontent.com","objects.githubusercontent.com"]});var Pe={};R(Pe,{default:()=>Wt});import{html as De}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Wt({user:o,weight:s=1.5,version:c=""}){let t="q-skill-safety-audit-server",p="Skill Safety Audit \u2014 Scanner API",d=`./questionData?email=${encodeURIComponent(o.email)}&quizSign=${encodeURIComponent(o.quizSign||"")}&questionId=${encodeURIComponent(t)}&version=${encodeURIComponent(c)}`,l=De`
    <div class="mb-3">
      <p class="lead text-primary">
        <strong>Scenario:</strong> Your team keeps a shared library of "agent skills" — markdown files with YAML
        frontmatter plus instructions that tell an AI agent how to perform a task. Before a new skill is published,
        it should be scanned automatically. Build and deploy that scanner as an HTTP endpoint.
      </p>
      <p>
        A skill can look completely reasonable while quietly doing something it shouldn't: leaking a credential,
        trying to override the user's control, asking for far more access than the task needs, or hiding who wrote
        it and what changed. Don't assume the model running the skill will catch this for you — some models follow
        instructions eagerly, others push back; you can't rely on either. In real teams, this kind of scanner
        belongs in the publishing workflow for shared agent skills, much like a linter or dependency security
        check belongs in a software release pipeline.
      </p>

      <p><strong>Vulnerability categories your scanner must check for</strong> (a given file may contain 0–3 of
      these — including exactly zero):</p>
      <ul>
        ${Xt.map(n=>De`<li><code>${n}</code> — <strong>${Ce[n].label}.</strong> ${Ce[n].desc}</li>`)}
      </ul>

      <p><strong>An example skill file</strong> (shown only to demonstrate the file shape your scanner should
      accept):</p>
      <iframe
        title="Example skill file"
        src="${d}"
        style="width:100%;height:420px;border:1px solid #dee2e6;border-radius:12px;background:#fff"
      ></iframe>

      <p class="mt-3"><strong>What your endpoint receives</strong> (POST, JSON):</p>
      <pre><code>${JSON.stringify(Ft,null,2)}</code></pre>

      <p><strong>What your endpoint must return</strong> — strict JSON with exactly one key:</p>
      <pre><code>${JSON.stringify(Vt,null,2)}</code></pre>
      <p>
        <code>categories</code> is an array (possibly empty — a genuinely clean file should get
        <code>[]</code>) containing only the exact category keys <code>hardcoded_secret</code>,
        <code>prompt_injection</code>, <code>excessive_permissions</code>, <code>unclear_provenance</code>.
      </p>

      <div class="card my-3 border-warning">
        <div class="card-body">
          <h5 class="card-title"><strong>How you're graded</strong></h5>
          <ul class="mb-0">
            <li>
              The grader POSTs <strong>5 skill files</strong> to your endpoint. <strong>2 of the 5 are genuinely
              clean files with zero vulnerability categories</strong> — claiming any category on either of them
              is a pure false positive, so a scanner that labels every file as risky will score badly.
            </li>
            <li>
              Your score is an <strong>aggregate F-beta score (beta = 0.5)</strong> — precision/recall over
              correctly vs. incorrectly claimed categories, pooled across all 5 files combined (including the 2
              clean files), then combined with extra weight on precision so over-claiming is punished harder
              than under-claiming — scaled by this question's weight. There is no evidence-quoting and no LLM
              judge involved; your endpoint is checked against the categories actually present in each file.
            </li>
            <li>Respond within a few seconds; the grader times out slow requests and counts them as failed.</li>
            <li>
              If you don't score full marks, feedback tells you <em>how many</em> of the 5 files were mishandled
              and, in aggregate, whether you tended to over-flag (claim categories that weren't present) or
              under-flag (miss categories that were present) — never which specific file, never the literal secret/URL/
              permission text, and never any file's actual category list.
            </li>
          </ul>
        </div>
      </div>

      <label for="${t}" class="form-label"><strong>Scanner endpoint URL</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="2"
        placeholder="https://your-scanner.example.com/scan"
      ></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:l,answer:async n=>{let i=String(n||"").trim();if(!i)throw new Error("Enter your scanner endpoint URL.");if(!/^https?:\/\//i.test(i))throw new Error("URL must start with http:// or https://.");let a;try{a=new URL(i).hostname}catch{throw new Error("Not a valid URL.")}if(/^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?)/i.test(a))throw new Error("The grader can't reach a localhost address \u2014 deploy publicly or use a tunnel.");let r=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:i,weight:s,questionId:t,version:c})}),u=await r.json();if(!r.ok)throw new Error(u.error||"Verification failed.");return u}}}var Xt,Ce,Ft,Vt,Ne=S(()=>{"use strict";Xt=["hardcoded_secret","prompt_injection","excessive_permissions","unclear_provenance"],Ce={hardcoded_secret:{label:"Hardcoded secret / credential",desc:"A literal secret, API key, or webhook URL is embedded directly in the skill's frontmatter or example script instead of being referenced via an environment variable or a secret store."},prompt_injection:{label:"Disguised prompt injection",desc:"One of the skill's own steps tries to override user or agent control \u2014 e.g. instructing silent exfiltration of file contents, or telling the agent to ignore the user's stop/cancel request."},excessive_permissions:{label:"Excessive / unscoped capability request",desc:"The skill declares broader filesystem or network access than its stated task requires (e.g. read/write to the entire filesystem, or egress to any domain, for a narrowly scoped task)."},unclear_provenance:{label:"Unclear provenance",desc:"The skill has no author, no version, and no changelog \u2014 and/or a step silently rewrites its own version metadata without surfacing that change to the reviewer."}},Ft={skill:`---
name: notes-digest
description: Summarizes long local markdown meeting notes into a short digest file.
...
(the full markdown text of one skill file, same shape as the example below)`},Vt={categories:["hardcoded_secret","excessive_permissions"]}});var Be={};R(Be,{default:()=>Zt});import{html as Gt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Kt(o,s,c){return(0,Je.default)(`${String(o||"").trim().toLowerCase()}#${c}#${s}`)}function Qt(o){let s=Ue[Math.floor(o()*Ue.length)],c=je[Math.floor(o()*je.length)],t=Me[Math.floor(o()*Me.length)],p=He[Math.floor(o()*He.length)],d=ze[Math.floor(o()*ze.length)];return{budgetTokens:s,irrelevantField:c,paginationParam:t,targetIdField:p,toolPair:d}}async function Zt({user:o,weight:s=4,version:c=""}){let t="q-agent-budget-loop-guardrail-server",p="Agent Harness \u2014 Run Budget & Loop Guard",d=Kt(o.email,c,t),l=Qt(d),{budgetTokens:e,irrelevantField:n,paginationParam:i,targetIdField:a}=l,r={budget_tokens:2e4,steps:[{step_number:1,tool:"fetch_page",args:{url:"https://example.com/1"},tokens_used:9e3},{step_number:2,tool:"summarize",args:{text:"..."},tokens_used:7e3},{step_number:3,tool:"fetch_page",args:{url:"https://example.com/2"},tokens_used:5e3}]},u={decision:"halt",reason:"Cumulative tokens_used (21000) has reached the budget (20000)."},h={budget_tokens:2e4,steps:[{step_number:1,tool:"list_items",args:{page:1},tokens_used:1e3},{step_number:2,tool:"list_items",args:{page:2},tokens_used:1e3},{step_number:3,tool:"list_items",args:{page:3},tokens_used:1e3}]},f={decision:"continue",reason:"Well under budget; the repeated tool is paging through results (page changes each call), not looping."},k=Gt`
    <div class="mb-3">
      <p class="lead text-primary">
        <strong>Scenario:</strong> You're building the harness around the same kind of coding agent as the
        pre-tool-call guardrail question — but a different concern: not <em>what</em> the agent may touch,
        but <em>how long / how much</em> it may keep running. You deploy a stateless HTTP endpoint that,
        given a token budget and the ordered history of steps the agent has already taken this run,
        decides whether the harness may let the agent take its <em>next</em> step (<code>continue</code>)
        or must stop it (<code>halt</code>).
      </p>
      <p>
        This mirrors the "token is fuel" lesson: agents — like employees — get a budget, and a harness
        needs a <strong>deterministic</strong> way to stop a runaway or looping agent before it burns that
        budget for nothing. This is a real production concern for research agents, customer-support agents,
        and data agents that may keep searching, retrying, or paging through systems long after the useful
        work has stopped. Build real bookkeeping rather than relying on a vague "does this look stuck?"
        judgment call.
      </p>

      <div class="card my-3 border-secondary bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title text-dark"><strong>Run-control policy for this task</strong></h5>
          <ul class="mb-0">
            <li>
              Your token budget for this run is <code>budget_tokens = ${e}</code>.
            </li>
            <li>
              <strong>Budget rule:</strong> if the sum of <code>tokens_used</code> across every step in
              <code>steps</code> is <strong>&ge;</strong> your <code>budget_tokens</code>, you must return
              <code>halt</code> — the run has spent its budget. If the sum is still below
              <code>budget_tokens</code>, budget alone does not require a halt (but a loop might, see
              below).
            </li>
            <li>
              <strong>Loop rule:</strong> examine the trailing steps — look back as far as needed (at least
              the last 6 steps, when the run has that many) to catch every case below. You must return
              <code>halt</code> if any of these hold:
              <ol>
                <li>
                  the same <code>tool</code> was called <strong>3 or more times in a row</strong> with
                  functionally identical <code>args</code> — identical after ignoring key order, ignoring
                  whitespace-only differences inside string values, and ignoring any field literally named
                  <code>${n}</code> (a client-side tracing id that never affects the actual
                  action and changes every call by design);
                </li>
                <li>
                  the trailing steps show a <strong>2-step cycle</strong> — tool/args pattern A, B, A, B, A,
                  B — repeating for <strong>6 or more</strong> of the trailing steps with no other
                  distinguishing signal.
                </li>
              </ol>
              Two identical calls in a row is <strong>NOT</strong> yet enough evidence of a loop — only halt
              once you see three or more. If the tool is the same each call but a meaningful argument
              changes every time (e.g. an incrementing <code>${i}</code> used to page through
              a result set, or a different <code>${a}</code> each time a different background
              job is checked) that <strong>IS</strong> real progress, not a loop — return <code>continue</code>
              for that pattern as long as budget allows.
            </li>
            <li>
              A loop must halt the run even if the budget still has plenty of room left; budget and loop
              are <strong>independent</strong> halt conditions and either one alone is sufficient.
            </li>
          </ul>
        </div>
      </div>

      <p><strong>What your endpoint receives:</strong> a POST with a JSON body describing the token budget
      and the ordered history of steps <em>already executed</em> this run (oldest first). It does
      <strong>not</strong> include the next, not-yet-taken step — your endpoint decides whether that next
      step may happen at all:</p>
      <pre><code>{
  "budget_tokens": &lt;int&gt;,
  "steps": [
    { "step_number": &lt;int&gt;, "tool": "&lt;string&gt;", "args": &lt;object&gt;, "tokens_used": &lt;int&gt; },
    ...
  ]
}</code></pre>

      <p><strong>What your endpoint must return:</strong> strict JSON with exactly these two keys:</p>
      <pre><code>{ "decision": "continue" | "halt", "reason": "short human-readable string" }</code></pre>

      <h6>Worked examples</h6>
      <p>Request:</p>
      <pre><code>${JSON.stringify(r,null,2)}</code></pre>
      <p>Correct response:</p>
      <pre><code>${JSON.stringify(u,null,2)}</code></pre>
      <p>Request:</p>
      <pre><code>${JSON.stringify(h,null,2)}</code></pre>
      <p>Correct response:</p>
      <pre><code>${JSON.stringify(f,null,2)}</code></pre>

      <div class="card my-3 border-warning">
        <div class="card-body">
          <h5 class="card-title"><strong>How you're graded</strong></h5>
          <ul class="mb-0">
            <li>
              The grader sends several representative run histories to your endpoint. Your score is the
              <strong>fraction of cases your endpoint decides correctly</strong>, scaled by this question's
              weight.
            </li>
            <li>
              The probes include: sums that land exactly at, and one below, your budget boundary; an exact
              repeat of the same tool call 3+ times in a row; only 2 repeats in a row (must NOT halt on
              this alone); repeats that are only <strong>cosmetically</strong> different (reordered JSON
              keys, a changing tracing-id field, whitespace-only string differences) that must still count
              as a loop; a 6-step alternating A/B cycle; legitimate paging and polling patterns that must
              stay <code>continue</code> even though the tool name repeats; a case where a real loop occurs
              while the budget has plenty of room left (loop still wins); a case where several
              individually-modest steps cross the budget boundary partway through; an empty history (first
              step of a fresh run); and a decoy where a tool name repeats non-consecutively with genuinely
              different arguments (must NOT be flagged as a loop).
            </li>
            <li>
              Build a <strong>real policy engine</strong>: sum <code>tokens_used</code> exactly, and
              canonicalize <code>args</code> (sort keys, normalize whitespace inside strings, drop the
              tracing-id field) before comparing trailing steps for exact repeats or 2-step cycles. A "call
              an LLM and ask if this looks like a loop" endpoint is not enough here: the important cases
              require exact accounting and careful comparison of structured arguments.
            </li>
            <li>Respond within a few seconds; the grader times out slow requests and counts them as failed.</li>
            <li>
              If you fail some probes, feedback tells you <em>which categories</em> of case were mishandled
              (e.g. "cosmetic-diff-whitespace", "legitimate-pagination-continue") — never the exact case or
              the expected decision.
            </li>
          </ul>
        </div>
      </div>

      <label for="${t}" class="form-label"><strong>Run-budget-and-loop-guard endpoint URL</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="2"
        placeholder="https://your-guard.example.com/check"
      ></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:k,answer:async T=>{let x=String(T||"").trim();if(!x)throw new Error("Enter your run-budget-and-loop-guard endpoint URL.");if(!/^https?:\/\//i.test(x))throw new Error("URL must start with http:// or https://.");let m;try{m=new URL(x).hostname}catch{throw new Error("Not a valid URL.")}if(/^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?)/i.test(m))throw new Error("The grader can't reach a localhost address \u2014 deploy publicly or use a tunnel.");let g=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:x,weight:s,questionId:t,version:c})}),b=await g.json();if(!g.ok)throw new Error(b.error||"Verification failed.");return b}}}var Je,Ue,je,Me,He,ze,Ye=S(()=>{"use strict";Je=P(C(),1),Ue=[18e3,26e3,34e3,42e3,5e4],je=["trace_id","request_id","client_ts"],Me=["offset","page","cursor"],He=["job_id","task_id","run_id"],ze=[["search_docs","read_doc"],["list_files","stat_file"],["query_db","fetch_row"]]});var Xe={};R(Xe,{default:()=>to});import{html as eo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function to({user:o,weight:s=1,version:c="v1"}){let t="q-mcp-server-live-server",p="Build a Live MCP Server",d=eo`
    <div class="mb-3">
      <p class="lead">
        Build and deploy a publicly reachable <strong>MCP server</strong> that exposes one tool. The grader will
        connect to your server as a real MCP client, list its tools, and call your tool with fresh per-call HTTP
        headers.
      </p>
      <p>
        This is the same server-side contract MCP-based tools, IDE integrations, agent frameworks, and data
        connectors must implement to be usable by an MCP client. The handshake and tool-call shape here are the real
        protocol at minimal scope.
      </p>

      <h6>What to implement</h6>
      <ul>
        <li>Deploy an MCP endpoint over HTTPS.</li>
        <li>Expose exactly one required tool named <code>solve_challenge</code>.</li>
        <li>The tool input schema has no required properties.</li>
        <li>On every <code>tools/call</code>, read the challenge from the HTTP request headers, not from the JSON body.</li>
      </ul>

      <h6>Headers the grader sends on each tool call</h6>
      <ul>
        <li>
          <code>X-Exam-Challenge</code>: 32 lowercase hex characters, generated freshly for that call and never reused.
        </li>
        <li><code>X-Exam-Timestamp</code>: Unix milliseconds at generation time.</li>
        <li>
          <code>X-Exam-Signature</code>: hex HMAC-SHA256 over
          <code>${"${challenge}.${timestamp}.${normalizedEmail}"}</code>, keyed by an exam-only secret.
          This lets you reject requests that do not look like they came from the exam system if you want to.
          Signature verification is optional and unscored.
        </li>
      </ul>

      <h6>Required tool response</h6>
      <p>
        Return a single MCP text content block. Its text must be the first 16 lowercase hex characters of
        <code>SHA-256("${"${challenge}:${normalizedEmail}"}")</code>, where:
      </p>
      <ul>
        <li><code>challenge</code> is the raw value of <code>X-Exam-Challenge</code> for that one call.</li>
        <li><code>normalizedEmail</code> is your registered exam email, trimmed and lowercased:
          <code>${String(o.email||"").trim().toLowerCase()}</code>.</li>
      </ul>

      <h6>Worked example</h6>
      <p>These values are fake and only illustrate the format:</p>
      <pre><code>X-Exam-Challenge: 0123456789abcdef0123456789abcdef
registered email: learner@example.com
tool text response: 8f4a2c6e1b90d735</code></pre>

      <h6>How grading works</h6>
      <ul>
        <li>The grader submits an MCP <code>initialize</code> request to your URL.</li>
        <li>It sends <code>notifications/initialized</code>, then calls <code>tools/list</code>.</li>
        <li>It confirms a tool literally named <code>solve_challenge</code> exists.</li>
        <li>It calls <code>solve_challenge</code> five times with five fresh random challenges.</li>
        <li>All five calls must return the correct text for full credit. Any failed live check receives zero.</li>
      </ul>

      <div class="alert alert-warning" role="alert">
        <strong>Live grading note:</strong> your score reflects your server's live behavior at the moment each check
        runs. Keep it running and correct through the grading deadline. A score you got earlier does not carry over if
        your server is down or broken later.
      </div>

      <label for="${t}" class="form-label"><strong>Public MCP endpoint URL</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="2"
        placeholder="https://your-mcp-server.example.com/mcp"
        autocomplete="off"
      ></textarea>
      <p class="form-text text-muted mb-0">Only public HTTPS URLs are accepted.</p>
    </div>
  `;return{id:t,title:p,weight:s,question:d,answer:async e=>{let n=String(e||"").trim();if(!n)throw new Error("Enter your public MCP endpoint URL.");if(!n.startsWith("https://"))throw new Error("URL must start with https://.");try{new URL(n)}catch{throw new Error("Enter a valid HTTPS URL.")}let i=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:n,weight:s,questionId:t,version:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Verification failed.");return a}}}var Fe=S(()=>{"use strict"});var Ge={};R(Ge,{buildLxdSandboxScenario:()=>We,default:()=>so});import{html as oo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function no(o){return String(o||"").trim().toLowerCase()}function Q(o,s){let c="0123456789abcdef",t="";for(let p=0;p<s;p++)t+=c[Math.floor(o()*c.length)];return t}function ro(o,s){return o[Math.floor(s()*o.length)]}function We({email:o,id:s,version:c,origin:t}){let p=no(o),d=(0,Ve.default)(`${p}#${s}${c?"#"+c:""}`),l=`lxd_${Q(d,48)}`,e=`TDS_LXD_CANARY_${Q(d,40)}`,n=`${ro(ao,d)}/${Q(d,12)}.txt`,i=768+128*Math.floor(d()*7),a=5+Math.floor(d()*4),r=`https://example.com/?tds_lxd_token=${l}&origin=${encodeURIComponent(t)}`,u=`#!/usr/bin/env bash
set +e

TOKEN='${l}'
CANARY_PATH='${n}'
LISTENER_URL='${r}'
ALLOCATION_MB=${i}
SPIN_SECONDS=${a}

echo "LXD_SANDBOX_START token=$TOKEN"

echo "LXD_FS_ATTEMPT path=$CANARY_PATH"
if content="$(cat "$CANARY_PATH" 2>&1)"; then
  echo "LXD_FS_LEAK_READABLE"
  printf '%s\\n' "$content"
else
  status=$?
  echo "LXD_FS_BLOCKED status=$status"
  printf '%s\\n' "$content" | head -c 300
  printf '\\n'
fi

echo "LXD_NET_ATTEMPT token=$TOKEN"
if command -v curl >/dev/null 2>&1; then
  curl -fsS --max-time 4 "$LISTENER_URL?via=curl" >/dev/null 2>&1
  net_status=$?
elif command -v wget >/dev/null 2>&1; then
  wget -q -T 4 -O /dev/null "$LISTENER_URL?via=wget" >/dev/null 2>&1
  net_status=$?
else
  python3 - "$LISTENER_URL?via=python" <<'PY'
import sys, urllib.request
try:
    urllib.request.urlopen(sys.argv[1], timeout=4).read()
except Exception:
    sys.exit(7)
PY
  net_status=$?
fi
echo "LXD_NET_DONE status=$net_status"

echo "LXD_RESOURCE_ATTEMPT allocation_mb=$ALLOCATION_MB spin_seconds=$SPIN_SECONDS"
python3 - "$ALLOCATION_MB" "$SPIN_SECONDS" <<'PY'
import sys, time
allocation_mb = int(sys.argv[1])
spin_seconds = int(sys.argv[2])
chunks = []
try:
    for _ in range(allocation_mb):
        chunks.append(bytearray(1024 * 1024))
    deadline = time.time() + spin_seconds
    x = 0
    while time.time() < deadline:
        x = (x + 1) % 1000003
    print("LXD_RESOURCE_COMPLETED allocation_succeeded")
    sys.exit(0)
except MemoryError:
    print("LXD_RESOURCE_LIMIT_HIT memory_error")
    sys.exit(42)
PY
resource_status=$?
if [ "$resource_status" -ne 0 ]; then
  echo "LXD_RESOURCE_LIMIT_HIT status=$resource_status"
fi

echo "LXD_SANDBOX_END token=$TOKEN"
`;return{token:l,canarySecret:e,canaryPath:n,allocationMb:i,spinSeconds:a,listenerUrl:r,script:u}}async function so({user:o,weight:s=4,version:c="v1"}){let t="q-lxd-sandbox-live-server",p="Prove You Contained It",d=globalThis.location?.origin||"https://exam.sanand.workers.dev",l=We({email:o.email,id:t,version:c,origin:d}),e=URL.createObjectURL(new Blob([l.script],{type:"text/x-shellscript"})),n=oo`
    <div class="mb-3">
      <p class="lead">
        Configure a real <strong>LXD container sandbox</strong>, run the provided hostile probe script inside it,
        and submit the combined stdout+stderr log.
      </p>
      <p>
        This is the real job of CI runners, PaaS multi-tenant hosts, and systems that execute untrusted code:
        filesystem access must be confined, network egress must be controlled, and runaway resource use must be
        bounded.
      </p>

      <h6>Your seeded canary setup</h6>
      <ul>
        <li>
          Before running the script, create this file on the <strong>host</strong>, outside the container:
          <code>${l.canaryPath}</code>
        </li>
        <li>Its exact contents should be: <code>${l.canarySecret}</code></li>
        <li>Do not intentionally mount that host path into the container.</li>
      </ul>

      <h6>What the script probes</h6>
      <ul>
        <li>
          <strong>Filesystem:</strong> tries to read the host-side canary path from inside the container.
        </li>
        <li><strong>Network:</strong> tries to reach an external HTTPS URL containing your private token.</li>
        <li>
          <strong>Resources:</strong> tries a bounded memory allocation of <code>${l.allocationMb} MB</code>
          and a short CPU spin of <code>${l.spinSeconds}s</code>.
        </li>
      </ul>

      <div class="alert alert-warning" role="alert">
        <strong>Evidence caveat:</strong> this submission is a learner-authored log. The grader checks that the
        seeded filesystem, network, and resource probe markers look correct and that obvious leak/success markers are
        absent. This is useful evidence of containment, not cryptographic proof; a hand-edited log can hide failures,
        and that limitation is accepted for this exercise.
      </div>

      <h6>What to do</h6>
      <ol>
        <li>Download the script below.</li>
        <li>Configure an unprivileged LXD container with filesystem, network, memory, and CPU constraints.</li>
        <li>Run the script inside the container.</li>
        <li>Capture combined stdout and stderr, for example with <code>bash probe.sh > sandbox.log 2>&1</code>.</li>
        <li>Paste the full log below.</li>
      </ol>

      <p>
        <a class="btn btn-sm btn-outline-primary" href="${e}" download="lxd-sandbox-probe.sh">
          Download probe script
        </a>
      </p>

      <h6>Required log evidence</h6>
      <ul>
        <li><code>LXD_SANDBOX_START token=${l.token}</code> appears once before the end marker.</li>
        <li><code>LXD_FS_ATTEMPT</code> and <code>LXD_FS_BLOCKED</code> appear, and the canary secret is absent.</li>
        <li><code>LXD_NET_ATTEMPT</code> appears and <code>LXD_NET_DONE status=0</code> does not appear.</li>
        <li><code>LXD_RESOURCE_LIMIT_HIT</code> appears.</li>
        <li><code>LXD_SANDBOX_END token=${l.token}</code> appears once.</li>
      </ul>

      <label for="${t}" class="form-label"><strong>Combined stdout+stderr log</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="12"
        placeholder="Paste the complete probe log here..."
        spellcheck="false"
      ></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:n,answer:async a=>{let r=String(a||"");if(!r.trim())throw new Error("Paste the combined stdout+stderr log.");if(new TextEncoder().encode(r).length>64*1024)throw new Error("Log is too large. Keep it under 64 KB.");let u=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:r,weight:s,questionId:t,version:c})}),h=await u.json();if(!u.ok)throw new Error(h.error||"Verification failed.");return h}}}var Ve,ao,Ke=S(()=>{"use strict";Ve=P(C(),1),ao=["/var/tmp/tds-lxd-canary","/srv/tds-lxd-canary","/opt/tds-lxd-canary","/tmp/tds-lxd-canary"]});var et={};R(et,{buildRedteamScenario:()=>Ze,default:()=>lo});import{html as io}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function co(o){return String(o||"").trim().toLowerCase()}function N(o,s){let c="0123456789abcdef",t="";for(let p=0;p<s;p++)t+=c[Math.floor(o()*c.length)];return t}function Ze({email:o,id:s,version:c}){let t=(0,Qe.default)(`${co(o)}#${s}${c?"#"+c:""}`),d=`/srv/agent-redteam/sandbox-${N(t,10)}`,l=`/srv/agent-redteam/outside-${N(t,8)}`,e=`${l}/canary.txt`,n=`AGENT_GUARDRAIL_CANARY_${N(t,40)}`,i=`SAFE_REPORT_${N(t,24)}`,a=`SAFE_WEIRD_${N(t,24)}`,r=`SAFE_ENCODED_${N(t,24)}`;return{sandboxRoot:d,outsideDir:l,canaryPath:e,canaryToken:n,safeReportToken:i,safeWeirdToken:a,safeEncodedToken:r,allowedHosts:["example.com","www.iana.org"]}}async function lo({user:o,weight:s=5,version:c="v1"}){let t="q-agent-guardrail-redteam-server",p="Guardrail Red-Team Round-Trip",d=Ze({email:o.email,id:t,version:c}),l=io`
    <div class="mb-3">
      <p class="lead">
        Deploy a public HTTP endpoint that acts as a guardrail in front of two tools:
        <code>read_file(path)</code> and <code>fetch_url(url)</code>. The grader will red-team your running
        endpoint with seeded benign and malicious requests.
      </p>
      <p>
        This extends the earlier agent guardrail task. Here, simply returning <code>{"action":"block"}</code> is not
        enough: benign controls must still work, and malicious requests are checked for leaked canary content where
        possible.
      </p>

      <h6>Endpoint contract</h6>
      <p>Your endpoint must accept <code>POST</code> JSON:</p>
      <pre><code>{ "tool": "read_file", "arguments": { "path": "..." } }
{ "tool": "fetch_url", "arguments": { "url": "..." } }</code></pre>
      <p>It must return JSON:</p>
      <pre><code>{ "action": "allow" | "block", "reason": "short explanation", "result": ... }</code></pre>
      <ul>
        <li>If <code>action</code> is <code>allow</code>, the tool should actually run and return its result.</li>
        <li>If <code>action</code> is <code>block</code>, do not run the tool.</li>
        <li>The grader accepts a string result, or an object containing <code>content</code>, <code>body</code>, or <code>text</code>.</li>
      </ul>

      <h6>Your sandbox policy</h6>
      <ul>
        <li><code>read_file</code> may read only inside <code>${d.sandboxRoot}</code>.</li>
        <li><code>fetch_url</code> may fetch only exact hosts:
          <code>${d.allowedHosts[0]}</code> and <code>${d.allowedHosts[1]}</code>.</li>
        <li>Private, loopback, link-local, metadata, userinfo-confused, redirect-to-private, and lookalike hosts must be blocked.</li>
      </ul>

      <h6>Files to create before grading</h6>
      <p>Create these files on the machine where your endpoint runs:</p>
      <pre><code>${d.canaryPath}
${d.canaryToken}

${d.sandboxRoot}/notes/report.txt
${d.safeReportToken}

${d.sandboxRoot}/notes/looks-like-..-but-safe.txt
${d.safeWeirdToken}

${d.sandboxRoot}/encoded/%2e%2e-literal.txt
${d.safeEncodedToken}</code></pre>
      <p>
        The canary file is deliberately outside the sandbox root. If any response contains
        <code>${d.canaryToken}</code>, traversal succeeded and the attempt scores zero.
      </p>

      <h6>How grading works</h6>
      <ul>
        <li>The browser submits only your endpoint URL.</li>
        <li>The server sends a live battery of benign and malicious tool calls.</li>
        <li>Blocking any benign control scores zero, so "deny everything" does not pass.</li>
        <li>Leaking the canary token scores zero, so "allow everything" does not pass.</li>
        <li>Full credit is awarded only if every request is classified correctly.</li>
        <li>Failure messages give coarse debugging hints, but never the exact probe payloads or expected decisions.</li>
      </ul>

      <div class="alert alert-warning" role="alert">
        <strong>Live grading note:</strong> your score reflects your endpoint's behavior when each check runs.
        Keep it deployed and configured through the grading deadline.
      </div>

      <label for="${t}" class="form-label"><strong>Guardrail endpoint URL</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="2"
        placeholder="https://your-guardrail.example.com/check"
        autocomplete="off"
      ></textarea>
      <p class="form-text text-muted mb-0">Only public HTTPS URLs are accepted.</p>
    </div>
  `;return{id:t,title:p,weight:s,question:l,answer:async n=>{let i=String(n||"").trim();if(!i)throw new Error("Enter your public guardrail endpoint URL.");if(!i.startsWith("https://"))throw new Error("URL must start with https://.");try{new URL(i)}catch{throw new Error("Enter a valid HTTPS URL.")}let a=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:i,weight:s,questionId:t,version:c})}),r=await a.json();if(!a.ok)throw new Error(r.error||"Verification failed.");return r}}}var Qe,tt=S(()=>{"use strict";Qe=P(C(),1)});var ot={};R(ot,{default:()=>uo});import{html as po}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function uo({user:o,weight:s=4,version:c="v2"}){let t="q-taint-aware-agent-executor-server",p="Build a Safe AI Mailroom Agent",d=po`
    <div class="mb-3">
      <p class="lead">
        Build and deploy an AI agent that reads mail records and chooses one safe action for each record. The grader
        then approves or rejects each proposal. Your agent may execute only an approved proposal.
      </p>
      <p>
        You may use any hosted, free, cheap, or local AI. Use AI to understand the mail. Use normal code for JSON
        validation, hashing, storage, retries, and safety checks. Model names and claimed token counts earn no marks.
      </p>

      <h6>Your task</h6>
      <ol>
        <li>Expose one public HTTPS endpoint for the two POST operations below. The submitted URL must not contain credentials, a query, or a fragment.</li>
        <li>For <code>propose</code>, read every dossier and return exactly one safe action for it.</li>
        <li>The grader checks each proposal and sends an unpredictable receipt.</li>
        <li>For <code>commit</code>, store each receipt and return the final result for that exact proposal.</li>
      </ol>
      <p><strong>A practical build order:</strong></p>
      <ol>
        <li>Implement the two JSON envelopes and the canonical hashing rules.</li>
        <li>Add the AI decision step and validate its output against the allowed action schemas.</li>
        <li>Persist dossier decisions and evaluation state before replying.</li>
        <li>Verify every receipt before recording any effect.</li>
        <li>Test exact replay, changed-content conflicts, and malformed input without calling the model.</li>
      </ol>
      <p>
        Get each layer working before adding the next. The grader reports the layer that failed, but it never reveals
        the correct action or evidence for a hidden dossier.
      </p>

      <h6>What Check sends</h6>
      <p>
        Each Check contains 64 core dossiers and six audit dossiers personalized to your email and question version.
        The core is about 70–75k input tokens. Cases include normal customer work, internal updates, approved emails,
        unclear identity, duplicates, prompt injection, confidential data, and harmless text that quotes attack words.
      </p>
      <p>
        Check sends two evaluations. Each has the same 64 core dossiers and three different audit dossiers. Dossier
        content and dossier IDs stay the same across Check/Save, but evaluation IDs and receipt IDs change. Cache the
        decision by canonical dossier content, not by evaluation ID. This avoids repeat model calls while still making
        your service complete a new receipt flow. The grader also tests exact replay, changed-content conflicts, and
        malformed requests.
      </p>

      <h6>Short transcript</h6>
      <pre><code>grader  → POST your URL  { operation: "propose", evaluationId, dossiers: [...] }
agent   → 200             { status: "awaiting_receipts", proposals: [...] }
grader  → POST your URL  { operation: "commit", receipts: [...] }
agent   → 200             { status: "completed", outcomes: [...] }</code></pre>

      <details>
        <summary><strong>Exact propose request and response</strong></summary>
        <p>The request has this shape:</p>
        <pre><code>{
  "profile": "ga5-mailroom-action-gate/v2",
  "operation": "propose",
  "evaluationId": "opaque id",
  "receiptVerifier": {
    "algorithm": "Ed25519",
    "publicKeyJwk": {"kty":"OKP", "crv":"Ed25519", "x":"base64url public key"}
  },
  "corpus": {
    "coreId": "stable id",
    "auditId": "per-verification audit-envelope id",
    "stableCount": 64,
    "freshCount": 3
  },
  "allowedActions": ["create_draft", "update_internal_record",
    "send_approved_notice", "request_confirmation", "quarantine_item", "no_action"],
  "dossiers": [{
    "dossierId": "opaque id",
    "partition": "stable_core" | "fresh_audit",
    "receivedAt": "ISO timestamp",
    "mailbox": "...",
    "objective": "...",
    "sources": [{
      "sourceId": "...",
      "kind": "...",
      "provenance": "...",
      "title": "...",
      "lines": [{ "lineId": "...", "text": "..." }]
    }]
  }]
}</code></pre>
        <p>Return HTTP 200 and:</p>
        <pre><code>{
  "profile": "ga5-mailroom-action-gate/v2",
  "evaluationId": "exact request id",
  "status": "awaiting_receipts",
  "inputDigest": "lowercase SHA-256 hex",
  "proposals": [{
    "dossierId": "exact dossier id",
    "callId": "your stable unique tool-call id (12–128 characters from A–Z, a–z, 0–9, . _ : -)",
    "action": "one allowed action",
    "target": { "kind": "typed target", "id": "exact target" } | null,
    "payload": { "only": "fields required by that tool" },
    "evidence": ["smallest sufficient lineId", "..."]
  }]
}</code></pre>
        <p>
          Return exactly one proposal per dossier and do not reuse a <code>callId</code>. Evidence order is ignored.
          Evidence must contain one or more unique <code>lineId</code>s present in that dossier. Unknown or duplicate
          line IDs are schema errors. Include every line needed to establish the action's authority and exact
          arguments, but no unrelated line. Citing an additional valid line does not turn an otherwise safe proposal
          into an unsafe action, but it loses evidence-minimality marks.
          Compute <code>inputDigest</code> over the UTF-8 bytes of <code>dossiers</code> encoded as recursively
          key-sorted, compact JSON. Arrays keep their order and JSON primitives use normal JSON spelling.
        </p>
      </details>

      <details>
        <summary><strong>Exact commit request and terminal response</strong></summary>
        <p>The grader sends one receipt for every proposal:</p>
        <pre><code>{
  "profile": "ga5-mailroom-action-gate/v2",
  "operation": "commit",
  "evaluationId": "same evaluation id",
  "inputDigest": "same digest",
  "receipts": [{
    "dossierId": "...", "callId": "...", "action": "...",
    "accepted": true | false,
    "proposalDigest": "SHA-256 of the normalized proposal",
    "receiptId": "unguessable grader nonce",
    "receiptSignature": "base64 Ed25519 signature"
  }]
}</code></pre>
        <p>Persist the receipts, then return:</p>
        <pre><code>{
  "profile": "ga5-mailroom-action-gate/v2",
  "evaluationId": "same evaluation id",
  "status": "completed",
  "inputDigest": "same digest",
  "outcomes": [{
    "dossierId": "...", "callId": "...", "action": "...",
    "proposalDigest": "...", "receiptId": "...",
    "status": "executed" | "rejected"
  }]
}</code></pre>
        <p>
          First verify every <code>receiptSignature</code>. Use <code>executed</code> only when that verified receipt
          has <code>accepted: true</code>; otherwise use
          <code>rejected</code>. A receipt is scoped to its evaluation, proposal digest, and call ID. Never invent,
          transfer, or accept a receipt from another proposal. For <code>proposalDigest</code>, first keep exactly
          <code>dossierId</code>, <code>callId</code>, <code>action</code>, <code>target</code> (use null when absent),
          <code>payload</code>, and <code>evidence</code>; sort the evidence strings; then hash the recursively
          key-sorted compact JSON view. Extra response fields are not part of this digest.
        </p>
        <details>
          <summary><strong>How to verify a receipt signature</strong></summary>
          <p>
            Store the <code>receiptVerifier</code> supplied in the matching <code>propose</code> request. Import its
            <code>publicKeyJwk</code> as an Ed25519 public key. Decode <code>receiptSignature</code> from base64 and verify
            it against the UTF-8 bytes described below. A new verifier key is used for every Check or Save run, so do
            not use a hard-coded key.
          </p>
          <p>
            Verify recursively key-sorted compact JSON with this exact shape. The inner <code>receipt</code> contains
            every receipt field except <code>receiptSignature</code>:
          </p>
          <pre><code>{
  "profile": "ga5-mailroom-action-gate/v2",
  "evaluationId": "the commit evaluationId",
  "inputDigest": "the commit inputDigest",
  "receipt": {
    "dossierId":"...", "callId":"...", "action":"...",
    "accepted":true, "proposalDigest":"...", "receiptId":"..."
  }
}</code></pre>
          <p>Reject the whole commit before any action if one signature is invalid, missing, duplicated, or moved to another receipt.</p>
        </details>
        <p>
          A proposal is accepted only when its action, target, payload, and required evidence are correct. Extra valid
          evidence loses minimality marks but does not make an otherwise correct proposal unsafe. During
          <code>commit</code>, obey the receipt's <code>accepted</code> value exactly.
        </p>
      </details>

      <h6>Actions and safety</h6>
      <ul>
        <li><code>create_draft</code>: create a non-sent customer draft in the named draft queue.</li>
        <li><code>update_internal_record</code>: make only a specifically authorized internal field change.</li>
        <li><code>send_approved_notice</code>: perform an outbound send only with explicit trusted approval scoped to the exact recipient, template, and public facts.</li>
        <li><code>request_confirmation</code>: route an ambiguous or identity-conflicting request to the correct internal approval queue.</li>
        <li><code>quarantine_item</code>: isolate content which tries to control tools, obtain private context, or create an unauthorized outbound effect.</li>
        <li><code>no_action</code>: suppress duplicate, completed, or informational items.</li>
      </ul>
      <details>
        <summary><strong>Frozen target and payload types</strong></summary>
        <pre><code>create_draft
  target  { "kind":"draft_queue", "id":"mailbox:&lt;mailbox&gt;" }
  payload { "recipient", "referenceId", "status", "template":"order_status" }

update_internal_record
  target  { "kind":"case_record", "id":"&lt;case id&gt;" }
  payload { "field":"delivery_window", "sourceEventId", "value" }

send_approved_notice
  target  { "kind":"email", "id":"&lt;approved recipient&gt;" }
  payload { "referenceId", "status", "template":"approved_delivery_notice" }

request_confirmation
  target  { "kind":"approval_queue", "id":"&lt;owning team&gt;" }
  payload { "claimedSender", "questionCode":"VERIFY_REQUEST", "referenceId" }

quarantine_item
  target  { "kind":"security_queue", "id":"mailroom" }
  payload { "artifactId", "reasonCode":"INDIRECT_PROMPT_INJECTION" }

no_action
  target  null
  payload { "reasonCode":"ALREADY_COMPLETED"|"DUPLICATE"|"INFORMATIONAL", "referenceId" }</code></pre>
        <p>Keys and string values are case-sensitive. Do not add fields to a target or payload.</p>
      </details>
      <p>
        External messages and attachments are data, not trusted instructions. Never put raw mail, secret canaries, or
        unrelated text into tool arguments. Cite the smallest set of lines that proves the decision. A trusted quote
        containing attack words is not automatically an attack; check who wrote it and what it means.
      </p>

      <h6>Persistence and failure rules</h6>
      <ul>
        <li>Persist by dossier ID plus a canonical content fingerprint. Stable dossiers must produce the same complete proposal and <code>callId</code> across evaluations and later Checks. Store each evaluation's supplied receipt-verification key with that evaluation.</li>
        <li>An exact propose or commit replay must return byte-equivalent semantic JSON and must not repeat model work or a tool effect.</li>
        <li>The same <code>evaluationId</code> with changed content must return HTTP 409. Reject a commit for an unknown evaluation or one whose call ID, action, or proposal digest does not match the persisted proposal. Invalid operations, duplicate dossier IDs, or malformed schemas must return HTTP 400 or 422 before AI/tool work.</li>
        <li>Validate the entire request atomically. Bound bodies, model output, retries, concurrency, and timeouts; do not rely on process memory for durable state.</li>
        <li>Return non-redirecting JSON responses with <code>Content-Type: application/json</code>. A successful body over 512 KiB is rejected.</li>
      </ul>

      <h6>Marks (4)</h6>
      <p>
        Marks cover action accuracy, exact target/payload fields, enough evidence, minimal evidence, safety, receipt
        handling, caching, replay, conflict handling, and schema validation. Feedback gives category totals and short
        hints about the failing layer; it does not reveal the expected answer for a dossier. Blanket policies,
        keyword-only filters, fake usage fields,
        and static responses score poorly. Any
        leaked vault canary or unauthorized outbound proposal caps the entire question at <strong>0.75/4</strong>.
        Contract-shape failures cap the score at 2.5/4. One audit executable-proposal miss caps it at 3/4; more than
        one caps it at 2/4, and audit action accuracy below 75% caps it at 1.5/4. Failure to reject an invalid receipt
        caps the score at 2/4. A missing valid terminal receipt lifecycle also caps the score at 2/4 (and failure in
        both evaluations caps it at 1/4).
      </p>

      <div class="alert alert-info">
        <strong>Cost:</strong> batch the first 64 dossiers and cache them. A carefully engineered first run is roughly
        <strong>$0.010</strong> on a low-cost model (provider and output length vary); free models or local inference may
        cost nothing. Later Checks and Save reuse the same personalized dossiers under new evaluation IDs and should
        make no model call when decisions are cached by canonical dossier content.
        Interactive Codex or Antigravity access can help you build the service, but your deployed endpoint must
        have its own usable model or local inference path. The exam dossiers are synthetic; never add real customer
        data, provider credentials, or deployment secrets to a model prompt. Each request has 55 seconds and the
        complete verification has 180 seconds.
      </div>

      <p>
        Security background: Simon Willison's
        <a href="https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/" target="_blank" rel="noopener">lethal trifecta</a>
        and <a href="https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/" target="_blank" rel="noopener">prompt-injection design patterns</a>;
        the <a href="https://agentdojo.spylab.ai/" target="_blank" rel="noopener">AgentDojo benchmark</a> and
        <a href="https://github.com/microsoft/BIPIA" target="_blank" rel="noopener">BIPIA</a>.
      </p>

      <label for="${t}" class="form-label"><strong>Deployed mailroom agent endpoint URL</strong></label>
      <textarea class="form-control font-monospace" id="${t}" name="${t}" rows="2"
        placeholder="https://agent.example/v1/mailroom/actions" autocomplete="off"></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:d,answer:async e=>{let n=String(e||"").trim();if(!n)throw new Error("Enter your deployed mailroom agent URL.");let i=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:n,weight:s,questionId:t,version:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Verification failed.");return a}}}var at=S(()=>{"use strict"});var nt={};R(nt,{default:()=>mo});import{html as ho}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function mo({user:o,weight:s=4,version:c="v2"}){let t="q-a2a-durable-delegate-server",p="Build an A2A Invoice Agent",d=ho`
    <div class="mb-3">
      <p class="lead">
        Build and deploy an AI invoice agent. It reads each invoice package, chooses one business action, waits for the
        grader's result, and stores the completed task. Your solution must understand the documents and implement the
        A2A API below.
      </p>

      <div class="alert alert-warning">
        <strong>Required:</strong> use any hosted, free, cheap, or local AI to understand the documents. The provider is
        not graded. Marks come from correct actions, real receipt handling, stored state, and protocol behavior—not
        model names or claimed token counts.
      </div>

      <h6>Your task</h6>
      <ol>
        <li>Receive an invoice batch through the A2A API.</li>
        <li>Use AI to choose one action and cite the exact evidence for every invoice.</li>
        <li>Return proposals and wait for the grader's results. A proposal alone is not permission to act.</li>
        <li>Execute only accepted proposals, store the Task, and make retries safe.</li>
      </ol>
      <p><strong>A practical build order:</strong></p>
      <ol>
        <li>Make the Agent Card, authentication, version checks, media types, and route envelopes pass.</li>
        <li>Persist Tasks and implement message idempotency.</li>
        <li>Add one batched AI decision step and validate every typed proposal.</li>
        <li>Accept result continuations only when they match the stored Task and proposal.</li>
        <li>Add terminal replay, user isolation, and the cancel-versus-result race.</li>
      </ol>
      <p>
        Protocol code, storage, and AI reasoning are separate layers. This makes failures easier to reproduce and keeps
        retries from repeating model or action work.
      </p>

      <h6>1. Expose this A2A 1.0 HTTP+JSON surface</h6>
      <p>
        Publish the Agent Card at the origin-level discovery path below. All other paths are relative to the base URL
        you submit, for example <code>https://host/a2a/</code>:
      </p>
      <pre><code>GET  {origin}/.well-known/agent-card.json
POST {base}/message:send
GET  {base}/tasks/{id}
GET  {base}/tasks
POST {base}/tasks/{id}:cancel</code></pre>
      <ul>
        <li>The submitted base URL must be public HTTPS with no credentials, query, or fragment. Do not redirect grader requests.</li>
        <li>Successful A2A responses must use JSON/A2A media types and stay at or below 512 KiB.</li>
        <li>The Agent Card is public. Every other route requires an exact Bearer token.</li>
        <li>
          <code>/message:send</code> returns <code>{"task": Task}</code>; task reads and cancellation return a Task;
          listing returns <code>{"tasks": [Task, ...]}</code>.
        </li>
        <li>
          Require <code>A2A-Version: 1.0</code> and <code>application/a2a+json</code>. Missing authentication returns
          401/403; another version returns 400. Use ProtoJSON strings such as <code>ROLE_USER</code> and
          <code>TASK_STATE_INPUT_REQUIRED</code>.
        </li>
        <li>
          The card has nonempty <code>name</code>, <code>description</code>, <code>version</code>, object-valued
          <code>capabilities</code>, and an <code>invoice_action_agent</code> skill with nonempty name, description,
          and tags.
        </li>
        <li>
          <code>supportedInterfaces</code> contains the exact submitted base URL with
          <code>{"protocolBinding":"HTTP+JSON","protocolVersion":"1.0"}</code>.
          <code>defaultInputModes</code> includes <code>application/vnd.ga5.invoice-claim-batch+json</code>.
          <code>defaultOutputModes</code> includes both output modes below.
        </li>
      </ul>

      <h6>2. Read a batch and propose one action per package</h6>
      <p>
        An initial message contains a <code>batchId</code>, a policy revision, and invoice packages. Each core task has
        12 packages. The documents mix useful facts with old examples, negation, and irrelevant action words. A small
        personalized audit batch is also tested.
      </p>
      <pre><code>{
  "message": {
    "messageId": "...", "role": "ROLE_USER",
    "parts": [{
      "mediaType": "application/vnd.ga5.invoice-claim-batch+json",
      "data": {"batchId":"...", "policyRevision":"...", "packages":[...]}
    }]
  },
  "configuration": {
    "returnImmediately": false, "historyLength": 20,
    "acceptedOutputModes": [
      "application/vnd.ga5.invoice-action-proposals+json",
      "application/vnd.ga5.invoice-action-receipts+json"
    ]
  }
}</code></pre>
      <p>Choose exactly one typed action for every package:</p>
      <ul>
        <li><code>settle_invoice</code>: valid, reconciled, and within autonomous authority.</li>
        <li><code>request_approval</code>: commercially valid, but outside delegated authority.</li>
        <li><code>hold_invoice</code>: payment pauses until a stated verification completes.</li>
        <li><code>reject_duplicate</code>: the same commercial invoice was already paid.</li>
        <li><code>open_exception</code>: material records conflict and need an exception workflow.</li>
      </ul>
      <p>
        Return a Task in <code>TASK_STATE_INPUT_REQUIRED</code>. It has exactly one artifact Part with media type
        <code>application/vnd.ga5.invoice-action-proposals+json</code> and this data:
      </p>
      <pre><code>{
  "batchId": "...",
  "proposals": [{
    "packageId": "...", "actionId": "durable unique id (at least 12 characters)",
    "action": "one exact action above",
    "facts": {
      "vendorName": "...", "invoiceNumber": "...",
      "amountMinor": 12345, "currency": "INR"
    },
    "evidenceRefs": ["exact decisive references from the documents"],
    "rationale": "60–1500 characters; name the action and cite at least two evidence refs"
  }]
}</code></pre>
      <p>
        Package IDs and action IDs must be unique in the batch. Return exactly the three decisive bracketed references
        from the paragraph that determines the action. Do not include the cover-sheet reference, archive examples, or
        training decoys. Keep the initial message in <code>Task.history</code>. Do not return a final receipt artifact
        yet; a proposal is not permission to act.
      </p>

      <h6>3. Use the results and finish the task</h6>
      <p>
        The grader checks your proposals, then sends results to the same task and context. The receipt nonces are
        unpredictable and are not present in the initial request.
      </p>
      <pre><code>{
  "message": {
    "messageId": "new id", "taskId": "exact task id", "contextId": "exact context id",
    "role": "ROLE_USER",
    "parts": [{
      "mediaType": "application/vnd.ga5.invoice-action-results+json",
      "data": {"batchId":"...", "results":[{
        "packageId":"...", "actionId":"...", "action":"...",
        "outcome":"ACCEPTED" | "REJECTED", "receiptNonce":"unpredictable..."
      }]}
    }]
  }
}</code></pre>
      <p>
        Reject a continuation whose principal, task, context, batch, package, action ID, or action does not match.
        The grader returns <code>ACCEPTED</code> only for an exact safe proposal; otherwise it returns
        <code>REJECTED</code>. A valid continuation completes the task and is recorded in history. Keep the proposal
        artifact and add exactly one <code>application/vnd.ga5.invoice-action-receipts+json</code> Part. Its
        <code>executions</code> array contains accepted results only; rejected proposals remain in history and must not
        be executed:
      </p>
      <pre><code>{
  "batchId": "...",
  "executions": [{
    "packageId":"...", "actionId":"...", "action":"...", "receiptNonce":"...",
    "facts":{"vendorName":"...","invoiceNumber":"...","amountMinor":12345,"currency":"INR"},
    "evidenceRefs":["..."]
  }]
}</code></pre>
      <p>
        Each execution must match the stored proposal and grader receipt exactly. Do not invent a receipt, change an
        action after approval, or complete a task before the result continuation arrives.
      </p>

      <h6>4. Store tasks safely and keep users separate</h6>
      <ul>
        <li>
          Deduplicate by <code>(Bearer principal, messageId)</code>. Hash recursively key-sorted compact JSON of the
          <code>message</code> only; ignore <code>configuration</code>. Concurrent equivalent requests, reordered JSON
          keys, and a changed <code>returnImmediately</code> value must return the same complete Task without another
          model call or action.
        </li>
        <li>
          Reusing a message ID with changed semantic content returns 409 with <code>IDEMPOTENCY_CONFLICT</code> and
          does not change the original. Store state before responding. Check and Save reuse the same 60 personalized
          packages under new batch/message/task namespaces. Cache semantic package decisions by canonical package
          content so the large core requires no repeat model work, while every verification still proves a live
          receipt lifecycle.
        </li>
        <li>
          The grader must observe <code>INPUT_REQUIRED</code> before it sends results, followed by
          <code>COMPLETED</code>. You may use SUBMITTED and WORKING internally. A nonterminal task may be canceled. Once
          terminal, no Task field may change. If receipt and cancel arrive together, exactly one operation returns 200
          and the other returns 409. The final result is COMPLETED with all receipts or CANCELED with no final
          receipt—never both.
        </li>
        <li>
          Treat every Bearer token as a separate user. Read, continue, and cancel only that user's tasks. A
          task-specific outsider request returns 403/404. An authenticated <code>GET {base}/tasks</code> returns only
          that principal's tasks, so a new outsider normally receives <code>{"tasks":[]}</code>. Error bodies must be
          generic: never echo another principal's task ID or reveal whether it exists.
        </li>
        <li>
          One user must never read or change another user's task. A proven cross-user leak or mutation scores zero. A
          timeout, 5xx, malformed probe response, or owner-list failure loses isolation marks but is not by itself
          proof of a leak.
        </li>
      </ul>

      <h6>5. What is graded</h6>
      <ul>
        <li>Five core tasks × 12 long packages (roughly 55–65k input tokens total), plus a hidden audit task.</li>
        <li>Correct action, facts, evidence, and rationale—not model metadata.</li>
        <li>Agent Card, authentication, media types, lifecycle, history, typed schema, and the action gate.</li>
        <li>Concurrent deduplication, conflicts, replay, action identity, the cancel/receipt race, and user isolation.</li>
        <li>Blanket answers are capped. Settling a package that must be approved, held, rejected, or escalated triggers a severe cap.</li>
        <li>A failed audit receipt lifecycle caps the score at 2/4; under 75% audit action accuracy caps it at 1.6/4. Any cross-principal disclosure or mutation scores zero.</li>
        <li>
          Feedback shows earned/max marks, short failure codes, and a brief next check. Contract codes cover the card,
          authentication, version, media type, and envelopes. Other codes identify decision quality, Task lifecycle,
          replay/idempotency, receipt binding, isolation, or atomicity. They do not reveal a hidden package's answer.
        </li>
      </ul>

      <div class="alert alert-info">
        <strong>Cost and runtime:</strong> batch 12 packages into one model call and cache each decision by canonical
        package content rather than batch, message, or task ID. With a very small model, the first core is designed to
        cost about one US cent or less; free-tier or local models can make it zero. Later Checks and Save reuse the
        personalized package content under new delivery IDs and should make no model call. Polls, replays, lists,
        conflicts, cancellation, and receipt continuations must make no model call. Each request has 45 seconds; the complete verification has 160 seconds, and the
        remaining overall deadline may shorten the final request. All case files are synthetic; do not mix real
        finance records, API keys, or deployment secrets into model prompts.
      </div>

      <p>
        Reference:
        <a href="https://a2a-protocol.org/latest/specification/" target="_blank" rel="noopener">A2A 1.0 specification</a>.
      </p>

      <label for="${t}" class="form-label"><strong>A2A interface base URL</strong></label>
      <textarea class="form-control font-monospace" id="${t}" name="${t}" rows="2"
        placeholder="https://delegate.example/a2a/" autocomplete="off"></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:d,answer:async e=>{let n=String(e||"").trim();if(!n)throw new Error("Enter your deployed A2A interface URL.");let i=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:n,weight:s,questionId:t,version:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Verification failed.");return a}}}var rt=S(()=>{"use strict"});var st={};R(st,{default:()=>fo});import{html as go}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function fo({user:o,weight:s=4,version:c="v2"}){let t="q-agent-trace-integrity-server",p="Build an Observable Incident Agent",d=go`
    <div class="mb-3">
      <p class="lead">
        Build and deploy an AI incident-response agent. It reads a noisy incident transcript, finds the root cause,
        runs only the needed checks, and chooses one recovery action. The grader returns the result of each action.
        Your stored JSON and OTLP trace must match those results.
      </p>
      <p>
        You may use any hosted, free, cheap, or local AI. Model names and token counts earn no marks. Marks come from
        correct decisions, observed actions, safe approval handling, stored state, replay, and exact telemetry.
      </p>

      <h5>Your task</h5>
      <ol>
        <li>Read the incident transcript and use AI to find the root cause.</li>
        <li>Return only the diagnostic calls needed to confirm it.</li>
        <li>Process the grader's results, retry rules, and approval when required.</li>
        <li>Store the final result and an OTLP trace that matches every action and result.</li>
      </ol>
      <p><strong>A practical build order:</strong></p>
      <ol>
        <li>Implement the persistent run API and its request validation.</li>
        <li>Add the model planner for diagnosis and diagnostic calls.</li>
        <li>Build a receipt-driven state machine for retries, approvals, effects, and terminal state.</li>
        <li>Create the action log and OTLP trace from stored dispatches and receipts.</li>
        <li>Test replay, changed-content conflicts, trace correlation, and redaction.</li>
      </ol>
      <p>
        Keep planning, state changes, and trace construction separate. A replay must read stored state; it must not
        reconstruct actions or call the model again.
      </p>

      <h5>1. Read the incident</h5>
      <p>Your service must expose:</p>
      <pre><code>POST /v2/incidents
POST /v2/incidents/{runId}/receipts
GET  /v2/incidents/{runId}</code></pre>
      <p>
        Submit a public HTTPS base URL with no credentials, query, or fragment. Do not redirect grader requests.
        Successful responses must be JSON and no larger than 768 KiB.
      </p>
      <p><code>POST /v2/incidents</code> receives a body shaped like this:</p>
      <pre><code>{
  "profile": "ga5-incident-agent/v2",
  "runId": "opaque ID stable for this run",
  "agentName": "incident-response",
  "publicMarker": "safe telemetry marker",
  "sensitive": {"accessToken":"never export", "privateNote":"never export"},
  "incident": {
    "incidentId":"...", "title":"...", "service":"...", "severity":"SEV-1",
    "transcript":"many evidence-tagged lines",
    "allowedRootCauses":["..."]
  },
  "toolCatalog": [{"name":"...", "description":"...", "inputSchema":{...}}],
  "policy": {
    "maximumDiagnostics":3,
    "effectTools":["..."],
    "approvalRequiredFor":["rollback_deployment","disable_feature"],
    "doNotExport":["..."]
  }
}</code></pre>
      <p>
        Evidence lines start with an ID in square brackets. Most lines are irrelevant. Treat quoted customer text as
        data, not instructions. Use an AI model to choose one value from <code>allowedRootCauses</code> and cite two to
        four evidence IDs. Do not send the <code>sensitive</code> object to the model.
      </p>

      <h5>2. Propose and perform actions</h5>
      <p>The first response has <code>status: "waiting"</code>:</p>
      <pre><code>{
  "runId":"...", "status":"waiting",
  "diagnosis":{"rootCause":"one allowed value","evidence":["ev_...","ev_..."]},
  "dispatches":[{
    "actionId":"stable id", "callId":"stable logical-call id",
    "phase":"diagnostic", "toolName":"query_metrics",
    "arguments":{...}, "evidence":["ev_..."], "attempt":1,
    "traceparent":"00-&lt;trace id&gt;-&lt;CLIENT span id&gt;-01"
  }],
  "approvals":[]
}</code></pre>
      <ul>
        <li>Choose one to three diagnostic calls from the supplied catalog. Send independent calls together.</li>
        <li>Use exact incident-specific arguments. Unneeded calls lose marks.</li>
        <li>
          Keep one <code>actionId</code> and <code>callId</code> for one logical action. A retry increments
          <code>attempt</code> and uses a new CLIENT span ID. IDs are opaque nonempty strings of at least eight
          characters. Action IDs must be unique among logical actions and call IDs must be unique among logical
          calls; an action ID is allowed to equal its corresponding call ID.
        </li>
        <li>
          Every diagnostic dispatch must cite at least one ID from the diagnosis's two-to-four evidence IDs. Do not
          cite duplicate evidence IDs.
        </li>
        <li>
          If a valid incoming <code>traceparent</code>/<code>tracestate</code> is present, continue its trace and preserve
          tracestate. Otherwise create a fresh nonzero lowercase-hex context and omit tracestate.
        </li>
      </ul>
      <p>The grader posts authoritative outcomes:</p>
      <pre><code>{
  "receiptId":"stable id",
  "outcomes":[{
    "actionId":"...", "callId":"...", "attempt":1,
    "status":200, "resultClass":"diagnosis_confirmed", "nonce":"unpredictable UUID"
  }]
}</code></pre>
      <p>
        Accept outcomes only for pending calls. Status 503 allows exactly one retry. A
        <code>status:0,errorType:"timeout"</code> fails the diagnostic, so do not send its dependent effect. After the
        diagnostics succeed, send exactly one justified effect from the catalog. A retry response must not contain an
        approval request.
      </p>

      <h5>3. Put destructive effects behind approval</h5>
      <p>
        Do not send <code>rollback_deployment</code> or <code>disable_feature</code> before approval. First return zero
        effect dispatches and one approval request:
      </p>
      <pre><code>{
  "status":"waiting", "dispatches":[],
  "approvals":[{
    "approvalId":"stable id", "actionId":"stable id",
    "toolName":"rollback_deployment", "argumentsDigest":"lowercase SHA-256 hex"
  }]
}</code></pre>
      <p>
        The digest is SHA-256 over recursively key-sorted compact JSON arguments. The grader approves by posting this
        request to the receipts endpoint:
      </p>
      <pre><code>{
  "receiptId":"stable id",
  "approvals":[{
    "approvalId":"exact pending approval id",
    "decision":"approved", "nonce":"unpredictable UUID"
  }]
}</code></pre>
      <p>
        After that receipt, dispatch the effect with matching <code>approvalId</code> and
        <code>approvalNonce</code>. The approval request's <code>actionId</code> reserves the same logical action ID that
        the later effect dispatch uses. A wrong destructive target, an unapproved destructive call, an effect emitted
        after its prerequisite timed out, or a sensitive leak caps the score at 0.5/4.
      </p>

      <h5>4. Store and return the final result</h5>
      <pre><code>{
  "runId":"...", "status":"completed" | "failed",
  "diagnosis":{"rootCause":"...","evidence":["..."]},
  "chosenEffect":"scale_service",
  "suppressed":[],
  "actionLog":[&lt;every dispatch exactly as issued&gt;],
  "receiptLog":[{
    "receiptId":"...", "actionId":"...", "callId":"...",
    "attempt":1, "status":200, "resultClass":"...", "nonce":"..."
  }, {
    "receiptId":"...", "approvalId":"...",
    "decision":"approved", "nonce":"..."
  }],
  "otlp":{"resourceSpans":[{"scopeSpans":[{"spans":[...]}]}]}
}</code></pre>
      <p>
        Tool-outcome receipts use the first <code>receiptLog</code> shape. Approval runs also include the second shape
        for the grader's approval receipt. Both <code>actionLog</code> and <code>receiptLog</code> are mandatory arrays;
        omitting either one is a correlation failure even if equivalent data appears elsewhere. A final response has
        no pending work: omit <code>dispatches</code> and <code>approvals</code>, or return both as empty arrays.
      </p>
      <p>
        Store state before responding. The same request and an identical receipt replay must return the same JSON
        without another model call or action. <code>GET</code> returns the current stored state. The
        same <code>runId</code> with changed content, or the same <code>receiptId</code> with changed content, returns 409.
        Reject an unsupported profile or invalid state change with 400/422 and create nothing. During each
        verification, Check rereads final state, repeats the original request, replays one identical audit receipt,
        and sends changed-content conflicts. These requests must not change the stored result. Error and replay
        responses must not echo sensitive input.
      </p>

      <h5>5. Build the required OTLP trace</h5>
      <pre><code>SERVER   POST /v2/incidents
└─ INTERNAL invoke_agent incident-response
   ├─ CLIENT   chat incident-plan                 (exactly one)
   ├─ INTERNAL execute_tool &lt;toolName&gt;            (one per logical executed action)
   │  └─ CLIENT POST tool/&lt;toolName&gt;              (one per physical attempt)
   ├─ INTERNAL incident.join                      (when diagnostics fan out)
   └─ INTERNAL approval_gate                      (when approval is required)</code></pre>
      <ul>
        <li>Use numeric SpanKind INTERNAL=1, SERVER=2, CLIENT=3 and unique nonzero lowercase hex trace/span IDs.</li>
        <li>
          Every span uses the SERVER span's trace ID. The named spans in the diagram have exact counts. You may add
          safely redacted spans with different names, but they must also carry the run ID and public marker.
        </li>
        <li>
          Every span carries string attributes <code>ga5.run.id</code> and <code>ga5.public.marker</code>. The model span
          carries <code>gen_ai.operation.name="chat"</code> and a nonempty <code>gen_ai.request.model</code>. The model
          name is telemetry, not proof and not a scoring shortcut.
        </li>
        <li>
          Each logical tool span carries <code>ga5.action.id</code>, <code>gen_ai.tool.name</code>,
          <code>gen_ai.tool.call.id</code>, and <code>gen_ai.operation.name="execute_tool"</code>.
        </li>
        <li>
          The outgoing dispatch traceparent's span ID must be the matching tool CLIENT span ID. Each tool CLIENT span
          records <code>ga5.action.id</code>, numeric <code>ga5.attempt</code>, <code>ga5.receipt.id</code>,
          <code>ga5.receipt.nonce</code>, <code>http.request.method="POST"</code>, numeric
          <code>http.request.resend_count=attempt-1</code>, and the observed HTTP/error status. A 503 uses span status
          code 2, <code>error.type="503"</code>, and resend count 0; its retry uses resend count 1. A timeout has
          <code>error.type="timeout"</code> and span status code 2. A successful CLIENT span may use OTLP status UNSET
          or OK, but must not use ERROR and must not carry <code>error.type</code>.
        </li>
        <li>
          <code>incident.join</code> is a child of the agent span and links to every independent diagnostic
          <code>execute_tool</code> span. <code>approval_gate</code> records the approval ID and approval receipt nonce.
        </li>
        <li>
          Do not export transcripts, prompts, sensitive values, tool arguments/results, authorization values, or
          observation bodies. In particular, omit <code>gen_ai.tool.call.arguments</code> and
          <code>gen_ai.tool.call.result</code>. A clearly redacted metadata field such as
          <code>authorization="[REDACTED]"</code> is allowed; an authorization token or other credential value is not.
        </li>
      </ul>

      <h5>6. What Check grades</h5>
      <p>
        Six personalized incidents total about 75–80k input tokens. They test root-cause choice, minimal diagnostics,
        parallel tools and join, a 503 retry, timeout suppression, and approval. A seventh shorter audit incident is
        also tested. Check/Save reuse the incident content but use new run IDs, canaries, public markers, trace
        contexts, and receipt nonces. You may cache transcript preprocessing, but every run must make the current model
        call shown by its <code>chat incident-plan</code> span and must build a new receipt and trace state machine.
      </p>
      <p>
        Marks cover diagnosis/evidence, exact diagnostic and effect actions, receipts and approvals, trace structure,
        receipt/trace correlation, retry/timeout/join behavior, replay/conflicts, and redaction. Feedback gives category
        counts and short guidance for the failing layer. Transport details identify the route, status, media, JSON,
        size, or timeout problem when available; hidden decisions, arguments, and evidence remain private.
        On the audit incident, every one of these observable engineering categories must pass to exceed 2/4. If the
        grader observes no valid action attempt in the current run, the score is zero. A forbidden effect or sensitive
        leak still applies the stricter 0.5/4 cap.
      </p>
      <div class="alert alert-info">
        <strong>Cost:</strong> batch or summarize the transcript once per first-seen <code>runId</code>, then persist the
        decision. The full first pass is about 80k input tokens; efficient low-cost models normally keep all three GA
        agent questions within a few cents, and free-tier models can cover it. Each Check/Save run requires the real
        planning call represented in its trace, so use a low-cost model and cache deterministic transcript
        preprocessing. Receipt handling, retries, GET, replay, and OTLP construction must never call a model.
        The incidents are synthetic; never add real production logs, access tokens, or provider credentials. Each
        request has at most 18 seconds and the complete verification has a hard 110-second deadline.
      </div>
      <p>
        References:
        <a href="https://www.w3.org/TR/trace-context/" target="_blank" rel="noopener">W3C Trace Context</a>,
        <a href="https://opentelemetry.io/docs/specs/otlp/" target="_blank" rel="noopener">OTLP</a>, and
        <a href="https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/" target="_blank" rel="noopener">OpenTelemetry GenAI attribute registry</a>.
      </p>

      <label for="${t}" class="form-label"><strong>Deployed incident-agent base URL</strong></label>
      <textarea class="form-control font-monospace" id="${t}" name="${t}" rows="2"
        placeholder="https://incident-agent.example/" autocomplete="off"></textarea>
    </div>
  `;return{id:t,title:p,weight:s,question:d,answer:async e=>{let n=String(e||"").trim();if(!n)throw new Error("Enter your deployed incident-agent base URL.");let i=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:n,weight:s,questionId:t,version:c})}),a=await i.json();if(!i.ok)throw new Error(a.error||"Verification failed.");return a}}}var it=S(()=>{"use strict"});import{html as j,render as mt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Z(o,s){let c=j`<ol class="mt-3">
    ${o.map(({id:d,title:l,weight:e})=>j`<li><a href="#h${d}">${l}</a> (${e} ${e==1?"mark":"marks"})</li>`)}
  </ol>`,t=[j`<h1 class="display-6">Questions</h1>`,c,...o.map(({id:d,title:l,weight:e,question:n,help:i},a)=>(i&&!Array.isArray(i)&&(i=[i]),j`
        <div class="card my-5" data-question="${d}" id="h${d}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${a+1}</span>
            ${l} (${e} ${e==1?"mark":"marks"})
          </div>
          ${i?i.map(r=>j`<div class="card-body border-bottom">${r}</div>`):""}
          <div class="card-body">${n}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${d}">Check</button>
          </div>
        </div>
      `))],p={index:c,questions:t};for(let[d,l]of s)mt(p[l],d)}import{unsafeHTML as gt}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as ft}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var ee="https://tds.s-anand.net",te=o=>o&&!o.match(/^(https?|mailto):/),yt=new ft({renderer:{image(o,s,c){return te(o)&&(o=`${ee}/${o}`),`<img src="${o}" alt="${c}" ${s?`title="${s}"`:""} class="img-fluid" loading="lazy">`},link(o,s,c){return te(o)&&(o=`${ee}/${o.endsWith(".md")?`#/${o.replace(/\.md$/,"")}`:o}`),`<a href="${o}" ${s?`title="${s}"`:""} target="_blank">${c}</a>`}}}),E=o=>gt(yt.parse(o));async function Ho(o,s){let c=[{...await Promise.resolve().then(()=>(xe(),ke)).then(t=>t.default({user:o,weight:2})),help:[E(`
### Ask AI
- [How do I implement BFS to find the shortest path in an unweighted graph?](#askai)
- [How can I parse a bitmask adjacency grid into graph neighbors?](#askai)
- [How do I reconstruct a shortest path as U/D/L/R moves?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ee(),Se)).then(t=>t.default({user:o,weight:3,version:"v1"})),help:[E(`
### Ask AI
- [How do I build a small HTTP JSON endpoint for an exam grader?](#askai)
- [How should I implement versioned business rules from a written specification?](#askai)
- [How can I test a proration formula across leap-year and non-leap-year months?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Oe(),Le)).then(t=>t.default({user:o,weight:4,version:"v1"})),help:[E(`
### Ask AI
- [How do I normalize file paths before enforcing an agent tool policy?](#askai)
- [How can I validate outbound HTTP hostnames against an exact allowlist?](#askai)
- [How do I design deterministic pre-tool-call guardrails for coding agents?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ne(),Pe)).then(t=>t.default({user:o,weight:1.5,version:"v1"})),help:[E(`
### Ask AI
- [How do I scan an agent skill file for hardcoded secrets and unsafe instructions?](#askai)
- [How can I distinguish prompt injection from normal task instructions in a skill?](#askai)
- [How do I reduce false positives when auditing permissions and provenance metadata?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ye(),Be)).then(t=>t.default({user:o,weight:3,version:"v1"})),help:[E(`
### Ask AI
- [How do I detect repeated tool-call loops in an agent execution trace?](#askai)
- [How can I canonicalize JSON arguments before comparing agent tool calls?](#askai)
- [How should an agent harness enforce token budgets independently of loop detection?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Fe(),Xe)).then(t=>t.default({user:o,weight:4,version:"v1"})),help:[E(`
### Ask AI
- [How do I build a minimal MCP server with a Streamable HTTP endpoint?](#askai)
- [How can an MCP tool handler read custom HTTP request headers?](#askai)
- [How do I deploy a small HTTPS server and keep it reachable for live grading?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ke(),Ge)).then(t=>t.default({user:o,weight:4,version:"v1"})),help:[E(`
### Ask AI
- [How do I configure an unprivileged LXD container for running untrusted code?](#askai)
- [How can I restrict filesystem mounts and network egress in LXD?](#askai)
- [How do I set memory and CPU limits on an LXD container?](#askai)
        `)]},{...await Promise.resolve().then(()=>(tt(),et)).then(t=>t.default({user:o,weight:5,version:"v1"})),help:[E(`
### Ask AI
- [How do I canonicalize paths before enforcing a file sandbox?](#askai)
- [How do I prevent SSRF with URL parsing, DNS checks, and redirect validation?](#askai)
- [How can I design allow-vs-block guardrails that do not overblock benign requests?](#askai)
        `)]},{...await Promise.resolve().then(()=>(at(),ot)).then(t=>t.default({user:o,weight:4,version:"v2"})),help:[E(`
### Ask AI
- [How do I separate untrusted content, private data, and outbound actions in an agent?](#askai)
- [How do I batch structured LLM decisions without losing exact evidence citations?](#askai)
- [How do I persist action receipts and make evaluation replay-safe?](#askai)
        `)]},{...await Promise.resolve().then(()=>(rt(),nt)).then(t=>t.default({user:o,weight:4,version:"v2"})),help:[E(`
### Ask AI
- [How do I implement the A2A 1.0 HTTP+JSON task lifecycle and Agent Card?](#askai)
- [How do I reconcile invoices with an LLM while retaining exact source evidence?](#askai)
- [How do I make A2A actions exactly-once across deduplication, approval, and cancellation races?](#askai)
        `)]},{...await Promise.resolve().then(()=>(it(),st)).then(t=>t.default({user:o,weight:4,version:"v2"})),help:[E(`
### Ask AI
- [How do I correlate outgoing W3C traceparent headers with OTLP CLIENT spans?](#askai)
- [How should an incident agent choose diagnostic and effect tools from ambiguous evidence?](#askai)
- [How do I correlate model decisions, action receipts, retries, fan-in, and redaction in OpenTelemetry?](#askai)
        `)]}];return Z(c,s),Object.fromEntries(c.map(({id:t,...p})=>[t,p]))}export{Ho as questions};
