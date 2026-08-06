var Ct=Object.create,xe=Object.freeze,re=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,Ht=Object.prototype.hasOwnProperty;var C=(o,i)=>()=>(o&&(i=o(o=0)),i);var B=(o,i)=>()=>(i||o((i={exports:{}}).exports,i),i.exports),U=(o,i)=>{for(var e in i)re(o,e,{get:i[e],enumerable:!0})},Pt=(o,i,e,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of Mt(i))!Ht.call(o,u)&&u!==e&&re(o,u,{get:()=>i[u],enumerable:!(s=Rt(i,u))||s.enumerable});return o};var V=(o,i,e)=>(e=o!=null?Ct(Ot(o)):{},Pt(i||!o||!o.__esModule?re(e,"default",{value:o,enumerable:!0}):e,o));var Se=(o,i)=>xe(re(o,"raw",{value:xe(i||o.slice())}));var Ae={};U(Ae,{default:()=>Ut});import{html as ce}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ut({user:o,weight:i=1,version:e="v1"}){let s="q-rotated-image-grid-forensics-server",u="Image forensics: Recover a rotated and mirrored grid",p="./questionData?email="+encodeURIComponent(o.email)+"&quizSign="+encodeURIComponent(o.quizSign||"")+"&questionId="+encodeURIComponent(s)+"&version="+encodeURIComponent(e),l=null,t=null;try{let r=await fetch(p,{credentials:"same-origin"});if(!r.ok)throw new Error(await r.text()||`HTTP ${r.status}`);l=URL.createObjectURL(await r.blob())}catch(r){t=r instanceof Error?r.message:String(r)}let n=async r=>{let a=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:r,weight:i,questionId:s,version:e})}),d=await a.json();if(!a.ok)throw new Error(d.error||"Unable to verify the recovered token.");return d},c=ce`
    <div class="mb-3">
      <h2>${u}</h2>
      <p>
        A forensic placard was cut into a 6×6 grid. All 36 tiles were randomly permuted, independently rotated by a
        multiple of 90°, and optionally mirrored. The mapping was destroyed. Reconstruct the original losslessly and
        recover the token printed across its centre.
      </p>
      ${t?ce`
        <div class="alert alert-danger" role="alert">
          <strong><i class="bi bi-exclamation-triangle-fill"></i> Could not load your image puzzle.</strong>
          <p class="mb-0">${t}</p>
          <p class="mb-0">Try reloading the page. If this persists, contact the exam team.</p>
        </div>
      `:ce`
        <p>
          <a class="btn btn-sm btn-outline-primary" href="${l}" download="${s}.bmp">
            Download your 600×600 BMP puzzle
          </a>
        </p>
        <p><img src="${l}" alt="Scrambled forensic grid" class="img-fluid border" width="500" /></p>
      `}
      <h3>Constraints and useful invariants</h3>
      <ul>
        <li>Split the BMP into 36 exact 100×100 tiles. Do not rescale, recompress, blur, or colour-correct them.</li>
        <li>Every tile is in one of eight D4 orientations: four rotations, each with or without a mirror.</li>
        <li>
          Adjacent original edges share a narrow 16-sample colour signature. The outside frame has a dark solid border
          plus a dashed light sentinel. Edge sequences reverse under some orientations.
        </li>
        <li>
          A robust solver enumerates each tile's eight orientations, scores directed edge compatibility, identifies the
          frame, then solves the constrained 6×6 assignment. Greedy nearest-edge placement can enter a locally optimal
          but globally inconsistent layout.
        </li>
      </ul>
      <p>The reconstructed centre displays a token in the form <code>OPS-XXXXXXXXXX</code>.</p>
      <label for="${s}" class="form-label">Recovered token:</label>
      <input
        class="form-control font-monospace"
        id="${s}"
        name="${s}"
        placeholder="OPS-XXXXXXXXXX"
        autocomplete="off"
        required
      />
    </div>
  `;return{id:s,title:u,weight:i,question:c,answer:n}}var Ee=C(()=>{"use strict"});var Ie=B((Te,le)=>{(function(o,i,e){function s(t){var n=this,c=l();n.next=function(){var r=2091639*n.s0+n.c*23283064365386963e-26;return n.s0=n.s1,n.s1=n.s2,n.s2=r-(n.c=r|0)},n.c=1,n.s0=c(" "),n.s1=c(" "),n.s2=c(" "),n.s0-=c(t),n.s0<0&&(n.s0+=1),n.s1-=c(t),n.s1<0&&(n.s1+=1),n.s2-=c(t),n.s2<0&&(n.s2+=1),c=null}function u(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function p(t,n){var c=new s(t),r=n&&n.state,a=c.next;return a.int32=function(){return c.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,r&&(typeof r=="object"&&u(r,c),a.state=function(){return u(c,{})}),a}function l(){var t=4022871197,n=function(c){c=String(c);for(var r=0;r<c.length;r++){t+=c.charCodeAt(r);var a=.02519603282416938*t;t=a>>>0,a-=t,a*=t,t=a>>>0,a-=t,t+=a*4294967296}return(t>>>0)*23283064365386963e-26};return n}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.alea=p})(Te,typeof le=="object"&&le,typeof define=="function"&&define)});var qe=B((De,de)=>{(function(o,i,e){function s(l){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var r=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^r^r>>>8},l===(l|0)?t.x=l:n+=l;for(var c=0;c<n.length+64;c++)t.x^=n.charCodeAt(c)|0,t.next()}function u(l,t){return t.x=l.x,t.y=l.y,t.z=l.z,t.w=l.w,t}function p(l,t){var n=new s(l),c=t&&t.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do var a=n.next()>>>11,d=(n.next()>>>0)/4294967296,m=(a+d)/(1<<21);while(m===0);return m},r.int32=n.next,r.quick=r,c&&(typeof c=="object"&&u(c,n),r.state=function(){return u(n,{})}),r}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.xor128=p})(De,typeof de=="object"&&de,typeof define=="function"&&define)});var Re=B((Ce,ue)=>{(function(o,i,e){function s(l){var t=this,n="";t.next=function(){var r=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(r^r<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,l===(l|0)?t.x=l:n+=l;for(var c=0;c<n.length+64;c++)t.x^=n.charCodeAt(c)|0,c==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function u(l,t){return t.x=l.x,t.y=l.y,t.z=l.z,t.w=l.w,t.v=l.v,t.d=l.d,t}function p(l,t){var n=new s(l),c=t&&t.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do var a=n.next()>>>11,d=(n.next()>>>0)/4294967296,m=(a+d)/(1<<21);while(m===0);return m},r.int32=n.next,r.quick=r,c&&(typeof c=="object"&&u(c,n),r.state=function(){return u(n,{})}),r}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.xorwow=p})(Ce,typeof ue=="object"&&ue,typeof define=="function"&&define)});var Oe=B((Me,pe)=>{(function(o,i,e){function s(l){var t=this;t.next=function(){var c=t.x,r=t.i,a,d,m;return a=c[r],a^=a>>>7,d=a^a<<24,a=c[r+1&7],d^=a^a>>>10,a=c[r+3&7],d^=a^a>>>3,a=c[r+4&7],d^=a^a<<7,a=c[r+7&7],a=a^a<<13,d^=a^a<<9,c[r]=d,t.i=r+1&7,d};function n(c,r){var a,d,m=[];if(r===(r|0))d=m[0]=r;else for(r=""+r,a=0;a<r.length;++a)m[a&7]=m[a&7]<<15^r.charCodeAt(a)+m[a+1&7]<<13;for(;m.length<8;)m.push(0);for(a=0;a<8&&m[a]===0;++a);for(a==8?d=m[7]=-1:d=m[a],c.x=m,c.i=0,a=256;a>0;--a)c.next()}n(t,l)}function u(l,t){return t.x=l.x.slice(),t.i=l.i,t}function p(l,t){l==null&&(l=+new Date);var n=new s(l),c=t&&t.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do var a=n.next()>>>11,d=(n.next()>>>0)/4294967296,m=(a+d)/(1<<21);while(m===0);return m},r.int32=n.next,r.quick=r,c&&(c.x&&u(c,n),r.state=function(){return u(n,{})}),r}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.xorshift7=p})(Me,typeof pe=="object"&&pe,typeof define=="function"&&define)});var Pe=B((He,me)=>{(function(o,i,e){function s(l){var t=this;t.next=function(){var c=t.w,r=t.X,a=t.i,d,m;return t.w=c=c+1640531527|0,m=r[a+34&127],d=r[a=a+1&127],m^=m<<13,d^=d<<17,m^=m>>>15,d^=d>>>12,m=r[a]=m^d,t.i=a,m+(c^c>>>16)|0};function n(c,r){var a,d,m,y,g,v=[],E=128;for(r===(r|0)?(d=r,r=null):(r=r+"\0",d=0,E=Math.max(E,r.length)),m=0,y=-32;y<E;++y)r&&(d^=r.charCodeAt((y+32)%r.length)),y===0&&(g=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,y>=0&&(g=g+1640531527|0,a=v[y&127]^=d+g,m=a==0?m+1:0);for(m>=128&&(v[(r&&r.length||0)&127]=-1),m=127,y=512;y>0;--y)d=v[m+34&127],a=v[m=m+1&127],d^=d<<13,a^=a<<17,d^=d>>>15,a^=a>>>12,v[m]=d^a;c.w=g,c.X=v,c.i=m}n(t,l)}function u(l,t){return t.i=l.i,t.w=l.w,t.X=l.X.slice(),t}function p(l,t){l==null&&(l=+new Date);var n=new s(l),c=t&&t.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do var a=n.next()>>>11,d=(n.next()>>>0)/4294967296,m=(a+d)/(1<<21);while(m===0);return m},r.int32=n.next,r.quick=r,c&&(c.X&&u(c,n),r.state=function(){return u(n,{})}),r}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.xor4096=p})(He,typeof me=="object"&&me,typeof define=="function"&&define)});var Fe=B((Ne,he)=>{(function(o,i,e){function s(l){var t=this,n="";t.next=function(){var r=t.b,a=t.c,d=t.d,m=t.a;return r=r<<25^r>>>7^a,a=a-d|0,d=d<<24^d>>>8^m,m=m-r|0,t.b=r=r<<20^r>>>12^a,t.c=a=a-d|0,t.d=d<<16^a>>>16^m,t.a=m-r|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,l===Math.floor(l)?(t.a=l/4294967296|0,t.b=l|0):n+=l;for(var c=0;c<n.length+20;c++)t.b^=n.charCodeAt(c)|0,t.next()}function u(l,t){return t.a=l.a,t.b=l.b,t.c=l.c,t.d=l.d,t}function p(l,t){var n=new s(l),c=t&&t.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do var a=n.next()>>>11,d=(n.next()>>>0)/4294967296,m=(a+d)/(1<<21);while(m===0);return m},r.int32=n.next,r.quick=r,c&&(typeof c=="object"&&u(c,n),r.state=function(){return u(n,{})}),r}i&&i.exports?i.exports=p:e&&e.amd?e(function(){return p}):this.tychei=p})(Ne,typeof he=="object"&&he,typeof define=="function"&&define)});var Le=B(()=>{});var Ue=B((je,ae)=>{(function(o,i,e){var s=256,u=6,p=52,l="random",t=e.pow(s,u),n=e.pow(2,p),c=n*2,r=s-1,a;function d(f,b,_){var x=[];b=b==!0?{entropy:!0}:b||{};var h=v(g(b.entropy?[f,w(i)]:f??E(),3),x),S=new m(x),$=function(){for(var k=S.g(u),A=t,T=0;k<n;)k=(k+T)*s,A*=s,T=S.g(1);for(;k>=c;)k/=2,A/=2,T>>>=1;return(k+T)/A};return $.int32=function(){return S.g(4)|0},$.quick=function(){return S.g(4)/4294967296},$.double=$,v(w(S.S),i),(b.pass||_||function(k,A,T,q){return q&&(q.S&&y(q,S),k.state=function(){return y(S,{})}),T?(e[l]=k,A):k})($,h,"global"in b?b.global:this==e,b.state)}function m(f){var b,_=f.length,x=this,h=0,S=x.i=x.j=0,$=x.S=[];for(_||(f=[_++]);h<s;)$[h]=h++;for(h=0;h<s;h++)$[h]=$[S=r&S+f[h%_]+(b=$[h])],$[S]=b;(x.g=function(k){for(var A,T=0,q=x.i,H=x.j,M=x.S;k--;)A=M[q=r&q+1],T=T*s+M[r&(M[q]=M[H=r&H+A])+(M[H]=A)];return x.i=q,x.j=H,T})(s)}function y(f,b){return b.i=f.i,b.j=f.j,b.S=f.S.slice(),b}function g(f,b){var _=[],x=typeof f,h;if(b&&x=="object")for(h in f)try{_.push(g(f[h],b-1))}catch{}return _.length?_:x=="string"?f:f+"\0"}function v(f,b){for(var _=f+"",x,h=0;h<_.length;)b[r&h]=r&(x^=b[r&h]*19)+_.charCodeAt(h++);return w(b)}function E(){try{var f;return a&&(f=a.randomBytes)?f=f(s):(f=new Uint8Array(s),(o.crypto||o.msCrypto).getRandomValues(f)),w(f)}catch{var b=o.navigator,_=b&&b.plugins;return[+new Date,o,_,o.screen,w(i)]}}function w(f){return String.fromCharCode.apply(0,f)}if(v(e.random(),i),typeof ae=="object"&&ae.exports){ae.exports=d;try{a=Le()}catch{}}else typeof define=="function"&&define.amd?define(function(){return d}):e["seed"+l]=d})(typeof self<"u"?self:je,[],Math)});var J=B((Xo,ze)=>{var zt=Ie(),Bt=qe(),Jt=Re(),Xt=Oe(),Gt=Pe(),Vt=Fe(),W=Ue();W.alea=zt;W.xor128=Bt;W.xorwow=Jt;W.xorshift7=Xt;W.xor4096=Gt;W.tychei=Vt;ze.exports=W});var Xe={};U(Xe,{default:()=>Qt});import{html as ne}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Wt(o){let i=(0,Be.default)(`${o}#${Je}`),e=(c,r)=>c+i()*(r-c),s=["gpt-4o","gpt-4.1","gpt-4.1-mini","gpt-5-mini"],u=21,p={"gpt-4o":Math.round(e(-2.5,-1)*100)/100,"gpt-4.1":Math.round(e(-2,-.5)*100)/100,"gpt-4.1-mini":Math.round(e(-3.5,-2)*100)/100,"gpt-5-mini":Math.round(e(-1.5,.5)*100)/100},l=[],t=["Step-by-step.","Act as Expert.","JSON Output.","No yapping.","Few-shot (3).","Chain of Thought.","Explain reasoning.","Professional tone.","Strict format.","Avoid jargon.","Summary first.","Double check.","Self-reflect.","Contextualize.","Verify logic.","Brevity.","Analogies.","Citations.","Persona: Mentor.","Persona: Auditor.","JSON schema."];for(let c=0;c<u;c++){let r={};s.forEach(a=>{let d=e(-.4,1.4);a==="gpt-5-mini"&&c<6&&(d-=.6),a==="gpt-4.1-mini"&&c>15&&(d+=.5),r[a]=Math.round(d*100)/100}),l.push({id:`I${c+1}`,text:t[c],word_count:Math.floor(e(5,18)),contribs:r})}let n=[];for(let c=0;c<50;c++){let r=Math.floor(i()*u),a=Math.floor(i()*u);if(r===a)continue;let d=[r+1,a+1].sort((m,y)=>m-y).map(m=>`I${m}`);n.find(m=>m.ids[0]===d[0]&&m.ids[1]===d[1])||n.push({ids:d,bonus:Math.round(e(-.7,.7)*100)/100})}return{instructions:l,interactions:n,biases:p,models:s,meanTarget:.97,floorTarget:.92}}function Zt(o,i){let e=new Set(o),s=0,u={};i.models.forEach(n=>{let c=i.biases[n];i.instructions.forEach(r=>{e.has(r.id)&&(c+=r.contribs[n],n===i.models[0]&&(s+=r.word_count))}),i.interactions.forEach(r=>{e.has(r.ids[0])&&e.has(r.ids[1])&&(c+=r.bonus)}),u[n]=Yt(c)});let p=Object.values(u),l=p.reduce((n,c)=>n+c,0)/p.length,t=Math.min(...p);return{meanAcc:l,floorAcc:t,metrics:u,wordCount:s}}async function Qt({user:o,weight:i=1}){let e=Je,s="The Multi-Model Robustness Audit",u=`_robustPrompt_v4_${o.email}`;globalThis[u]||(globalThis[u]=Wt(o.email));let p=globalThis[u],l=async n=>{let c=String(n??"").trim();if(!c)throw new Error("Enter submission.");let r=/^(.*);\s*(\d+);\s*(\d+\.\d+);\s*(\d+\.\d+)$/,a=c.match(r);if(!a)throw new Error("Format: IDs; WC; Mean%; Floor%");let d=a[1].split(",").map(x=>x.trim()).filter(Boolean),{meanAcc:m,floorAcc:y,wordCount:g}=Zt(d,p),v=parseInt(a[2]),E=parseFloat(a[3])/100,w=parseFloat(a[4])/100;if(g!==v)throw new Error("WC mismatch!");if(Math.abs(m-E)>5e-4)throw new Error("Mean match failed!");if(Math.abs(y-w)>5e-4)throw new Error("Floor match failed!");if(m<p.meanTarget||y<p.floorTarget)throw new Error("Targets not met.");let f=`_robustPrompt_opt_v4_${o.email}`;if(!globalThis[f]){let x=p.instructions.length,h=p.instructions,S=10,$=x-S,k=[],A=[],T=[];p.interactions.forEach(D=>{let z=parseInt(D.ids[0].slice(1))-1,P=parseInt(D.ids[1].slice(1))-1,j=1<<z|1<<P;z<S&&P<S?k.push({mask:j,bonus:D.bonus}):z>=S&&P>=S?A.push({mask:j>>S,bonus:D.bonus}):T.push({mask:j,bonus:D.bonus})});let q=(D,z,P,j)=>{let Y=new Float32Array(1<<P),Q=new Int32Array(1<<P);for(let N=0;N<1<<P;N++){for(let R=0;R<P;R++)N>>R&1&&(Y[N]+=h[z+R].contribs[D],D==="gpt-4o"&&(Q[N]+=h[z+R].word_count));j.forEach(R=>{(N&R.mask)===R.mask&&(Y[N]+=R.bonus)})}return{lo:Y,wc:Q}},H={},M={};p.models.forEach(D=>{H[D]=q(D,0,S,k),M[D]=q(D,S,$,A)});let L=1/0,oe=0;for(let D=0;D<1<<x;D++){let z=D&1023,P=D>>10,j=H["gpt-4o"].wc[z]+M["gpt-4o"].wc[P];if(j>L)continue;let Y=0;T.forEach(G=>{(D&G.mask)===G.mask&&(Y+=G.bonus)});let Q=0,N=2;for(let G of p.models){let ie=1/(1+Math.exp(-(p.biases[G]+H[G].lo[z]+M[G].lo[P]+Y)));Q+=ie,ie<N&&(N=ie)}let R=Q/4;R>=p.meanTarget&&N>=p.floorTarget&&(j<L?(L=j,oe=R):j===L&&R>oe&&(oe=R))}globalThis[f]={bestWC:L,bestMean:oe}}let{bestWC:b,bestMean:_}=globalThis[f];if(g>b)throw new Error(`Not optimal WC (${b})!`);if(g===b&&m<_-1e-4)throw new Error("Better Mean exists!");return!0},t=ne`
    <div class="mb-3">
      <h2 id="${e}">${s}</h2>
      <p class="small">Identify the <strong>shortest prompt</strong> (min Word Count) achieving <strong>Macro-Mean ≥${p.meanTarget*100}%</strong> and <strong>Model Floor ≥${p.floorTarget*100}%</strong> across 4 LLMs.</p>
      
      <div class="row g-2 mt-2">
        <div class="col-md-9 border-end">
          <h6 class="small fw-bold border-bottom">Instruction Matrix (Sensitivities)</h6>
          <div style="height: 220px; overflow-y: auto;">
            <table class="table table-sm table-striped m-0 small" style="font-size: 0.75rem">
              <thead class="sticky-top"><tr><th>ID</th><th>Fragment</th><th>WC</th><th>4o</th><th>4.1</th><th>4.1m</th><th>5m</th></tr></thead>
              <tbody>${p.instructions.map(n=>ne`<tr><td><code>${n.id}</code></td><td class="text-muted text-nowrap">${n.text}</td><td>${n.word_count}</td><td>${n.contribs["gpt-4o"]}</td><td>${n.contribs["gpt-4.1"]}</td><td>${n.contribs["gpt-4.1-mini"]}</td><td>${n.contribs["gpt-5-mini"]}</td></tr>`)}</tbody>
            </table>
          </div>
        </div>
        <div class="col-md-3">
          <h6 class="small fw-bold border-bottom">Pair Bonuses</h6>
          <div style="height: 220px; overflow-y: auto;">
            <table class="table table-sm m-0 small" style="font-size: 0.7rem">
              <tbody>${p.interactions.map(n=>ne`<tr><td><code>${n.ids.join(",")}</code></td><td>${n.bonus}</td></tr>`)}</tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="mt-2 p-2 border rounded small d-flex flex-wrap gap-2">
        ${Object.entries(p.biases).map(([n,c])=>ne`<span class="badge bg-secondary font-monospace">${n}: ${c}</span>`)}
      </div>

      <label for="${e}" class="form-label mt-3 small fw-bold">Submit: IDs; WC; Mean%; Floor%</label>
      <input type="text" id="${e}" name="${e}" class="form-control form-control-sm font-monospace" placeholder="I1, I5; 18; 97.45; 93.12" required />
    </div>
  `;return{id:e,title:s,weight:i,question:t,answer:l}}var Be,Je,Yt,Ge=C(()=>{"use strict";Be=V(J(),1),Je="q-minimal-prompt-robustness";Yt=o=>1/(1+Math.exp(-o))});var Ye={};U(Ye,{default:()=>so});import*as X from"https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.29.0/+esm";import{en as Kt,Faker as eo}from"https://cdn.jsdelivr.net/npm/@faker-js/faker@9/+esm";import{html as to}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function so({user:o,weight:i=1}){let e="q-duckdb-regression-analysis",s="DuckDB: Multi-Table Linear Regression Analysis with Mixed DateTime Formats",u=(0,Ve.default)(`${o.email}#${e}`),p=new eo({locale:[Kt],seed:Math.round(u()*1e6)}),l=await We.connect(),t=Array.from({length:25},(h,S)=>({store_id:`STR-${String(S+1).padStart(3,"0")}`,store_name:p.company.name()+" Store",opening_date:p.helpers.arrayElement([p.date.past({years:2}).toISOString().split("T")[0],p.date.past({years:2}).toLocaleDateString("en-US"),p.date.past({years:2}).toLocaleDateString("en-GB")]),location:p.location.city(),square_footage:Math.floor(u()*5e3+2e3)})),n=[];t.forEach(h=>{for(let S=0;S<12;S++){let $=new Date(2024,S,1),k=h.square_footage*15+u()*2e4;n.push({store_id:h.store_id,sale_date:p.helpers.arrayElement([$.toISOString().split("T")[0],$.toISOString(),`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")} 00:00:00`]),monthly_sales:parseFloat(k.toFixed(2)),customer_count:Math.floor(k/25+u()*200),avg_transaction:parseFloat((k/(k/25)+u()*10).toFixed(2))})}});let c=[];t.forEach(h=>{for(let S=0;S<12;S++){let $=new Date(2024,S,1);c.push({store_id:h.store_id,spend_date:p.helpers.arrayElement([$.toISOString().split("T")[0],$.toISOString()]),marketing_spend:parseFloat((u()*5e3+1e3).toFixed(2)),advertising_channel:p.helpers.arrayElement(["Digital","Print","Radio","TV"])})}});let r=p.location.city(),a=p.helpers.arrayElement([2500,3e3,3500,4e3]),d=p.helpers.arrayElement([3,6,9]);t.slice(0,12).forEach(h=>{h.location=r,h.square_footage=Math.max(h.square_footage,a+Math.floor(u()*1e3))}),await l.query(`
    CREATE TABLE stores (
      store_id VARCHAR,
      store_name VARCHAR,
      opening_date VARCHAR,
      location VARCHAR,
      square_footage INTEGER
    );
  `),await l.query(`
    CREATE TABLE sales_data (
      store_id VARCHAR,
      sale_date TIMESTAMP,
      monthly_sales DECIMAL(10,2),
      customer_count INTEGER,
      avg_transaction DECIMAL(8,2)
    );
  `),await l.query(`
    CREATE TABLE marketing_spend (
      store_id VARCHAR,
      spend_date TIMESTAMP,
      marketing_spend DECIMAL(10,2),
      advertising_channel VARCHAR
    );
  `);for(let h of t){let S=h.store_name.replace(/'/g,"''"),$=h.location.replace(/'/g,"''");await l.query(`
      INSERT INTO stores VALUES (
        '${h.store_id}',
        '${S}',
        '${h.opening_date}',
        '${$}',
        ${h.square_footage}
      );
    `)}for(let h of n)await l.query(`
      INSERT INTO sales_data VALUES (
        '${h.store_id}',
        TIMESTAMP '${h.sale_date}',
        ${h.monthly_sales},
        ${h.customer_count},
        ${h.avg_transaction}
      );
    `);for(let h of c)await l.query(`
      INSERT INTO marketing_spend VALUES (
        '${h.store_id}',
        TIMESTAMP '${h.spend_date}',
        ${h.marketing_spend},
        '${h.advertising_channel}'
      );
    `);let g=`
    WITH store_totals AS (
      SELECT
        s.store_id,
        s.square_footage,
        SUM(sd.monthly_sales) as total_sales
      FROM stores s
      JOIN sales_data sd ON s.store_id = sd.store_id
      WHERE s.location = '${r.replace(/'/g,"''")}'
        AND s.square_footage >= ${a}
        AND EXTRACT(MONTH FROM sd.sale_date) >= ${d}
      GROUP BY s.store_id, s.square_footage
    )
    SELECT
      REGR_SLOPE(total_sales, square_footage) as slope,
      REGR_INTERCEPT(total_sales, square_footage) as intercept,
      REGR_R2(total_sales, square_footage) as r_squared
    FROM store_totals;
  `,E=(await l.query(g)).toArray().map(h=>h.toJSON());if(E.length===0||!E[0].slope)throw new Error("Not enough data points for regression analysis");let w=Number(E[0].slope),f=Number(E[0].intercept),b=Number(E[0].r_squared),_=async h=>{try{let $=(await l.query(h)).toArray().map(L=>L.toJSON());if(console.table($),$.length!==1)throw new Error("Query should return exactly one row");let k=$[0],A=["slope","intercept","r_squared"];for(let L of A)if(!(L in k))throw new Error(`Missing column: ${L}`);let T=.001,q=Number(k.slope),H=Number(k.intercept),M=Number(k.r_squared);if(![q,H,M].every(Number.isFinite))throw new Error("Regression outputs must be finite numbers");if(Math.abs(q-w)>T)throw new Error(`Slope is incorrect. Expected ${w.toFixed(6)}, got ${q.toFixed(6)}`);if(Math.abs(H-f)>T)throw new Error(`Intercept is incorrect. Expected ${f.toFixed(6)}, got ${H.toFixed(6)}`);if(Math.abs(M-b)>T)throw new Error(`R-squared is incorrect. Expected ${b.toFixed(6)}, got ${M.toFixed(6)}`);return!0}catch(S){throw new Error(`Query error: ${S.message}`)}},x=to`
    <div class="mb-3">
      <h2>Retail Store Performance Regression Analysis for RetailChain Analytics</h2>
      <p>
        <strong>RetailChain Analytics</strong> is the data science division of a major retail corporation that operates
        stores across multiple regions. They need to understand the relationship between store characteristics and sales
        performance to optimize new store planning and resource allocation.
      </p>

      <p>
        The company's data warehouse contains three related tables with mixed datetime formats from different legacy
        systems:
      </p>

      <h3>Table: stores</h3>
      <ul>
        <li><strong>store_id</strong>: Unique store identifier</li>
        <li><strong>store_name</strong>: Name of the retail store</li>
        <li><strong>opening_date</strong>: Store opening date (mixed formats: YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY)</li>
        <li><strong>location</strong>: City where store is located</li>
        <li><strong>square_footage</strong>: Total floor space in square feet</li>
      </ul>

      <h3>Table: sales_data</h3>
      <ul>
        <li><strong>store_id</strong>: Links to stores table</li>
        <li><strong>sale_date</strong>: Date of sales record (TIMESTAMP format)</li>
        <li><strong>monthly_sales</strong>: Total sales for the month</li>
        <li><strong>customer_count</strong>: Number of customers served</li>
        <li><strong>avg_transaction</strong>: Average transaction value</li>
      </ul>

      <h3>Table: marketing_spend</h3>
      <ul>
        <li><strong>store_id</strong>: Links to stores table</li>
        <li><strong>spend_date</strong>: Date of marketing spend (TIMESTAMP format)</li>
        <li><strong>marketing_spend</strong>: Amount spent on marketing</li>
        <li><strong>advertising_channel</strong>: Type of advertising channel</li>
      </ul>

      <h3>Your Task</h3>
      <p>
        Write a DuckDB SQL query to perform linear regression analysis examining the relationship between
        <strong>store square footage</strong> (independent variable) and <strong>total sales</strong> (dependent
        variable) for stores in <strong>${r}</strong> with square footage >=
        <strong>${a} sq ft</strong> and sales from month <strong>${d}</strong> onwards. Your
        query should:
      </p>

      <ol>
        <li><strong>Join multiple tables:</strong> Combine stores and sales_data tables</li>
        <li>
          <strong>Filter data:</strong> Include only stores in ${r} with square_footage >=
          ${a}
        </li>
        <li>
          <strong>Handle datetime formats:</strong> Use DuckDB's date functions to filter sales from month
          ${d} onwards
        </li>
        <li><strong>Aggregate sales:</strong> Sum qualifying sales per store</li>
        <li><strong>Calculate regression:</strong> Use DuckDB's REGR functions for slope, intercept, and R-squared</li>
        <li><strong>Return results:</strong> Single row with columns: 'slope', 'intercept', 'r_squared'</li>
      </ol>

      <h3>Analysis Requirements</h3>
      <ul>
        <li>Use square footage as the independent variable (x)</li>
        <li>Use total annual sales per store as the dependent variable (y)</li>
        <li>Calculate the linear regression equation: y = slope * x + intercept</li>
        <li>Include R-squared to measure goodness of fit</li>
      </ul>

      <h3>Data Processing Challenges</h3>
      <ul>
        <li>Date filtering using DuckDB's built-in EXTRACT and date functions</li>
        <li>Sales data must be aggregated per store across qualifying time periods</li>
        <li>Linear regression uses DuckDB's built-in REGR statistical functions</li>
      </ul>

      <label for="${e}" class="form-label">
        Write a DuckDB SQL query to calculate linear regression between store square footage and total sales for
        ${r} stores with >= ${a} sq ft and sales from month ${d} onwards:
      </label>
      <textarea class="form-control font-monospace text-bg-dark" rows="14" id="${e}" name="${e}"></textarea>
      <p class="text-muted">Check the console for the result of your query.</p>
    </div>
  `;return{id:e,title:s,weight:i,question:x,answer:_}}var Ve,oo,ge,ro,ao,no,We,Ze=C(async()=>{"use strict";Ve=V(J(),1),oo=X.getJsDelivrBundles(),ge=await X.selectBundle(oo),ro=URL.createObjectURL(new Blob([`importScripts("${ge.mainWorker}");`],{type:"text/javascript"})),ao=new Worker(ro),no=new X.ConsoleLogger,We=new X.AsyncDuckDB(no,ao);await We.instantiate(ge.mainModule,ge.pthreadWorker)});function ee(o,i){let e=URL.createObjectURL(o),s=document.createElement("a");s.href=e,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e)}var fe=C(()=>{"use strict"});function tt(o){return String(o??"").trim().toLowerCase()}function I(o,i,e){return Math.floor(o()*(e-i+1))+i}function O(o,i){return o[Math.floor(i()*o.length)]}function ot(o,i){let e=[...o];for(let s=e.length-1;s>0;s--){let u=Math.floor(i()*(s+1));[e[s],e[u]]=[e[u],e[s]]}return e}function te(o,i,e=0){return new Date(o.getTime()+i*se+e*6e4).toISOString()}function Qe(o,i){if(i===0)return`${o} min`;let e=Math.floor(o/60),s=o%60;return i===1?`${e}h ${s}m`:`PT${e?`${e}H`:""}${s?`${s}M`:"0M"}`}function Ke(o,i){let e=(o/100).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return i===0?`$${e}`:i===1?`USD ${e}`:`${e} USD`}function rt(o,i="v1"){let e=(0,ye.default)(`${tt(o)}#${io}#${i}`),s=["Atlas","Beacon","Comet","Delta"],u=O(s,e),p=new Date("2026-03-01T00:00:00.000Z"),l=new Date(p.getTime()+I(e,18,38)*se),t=new Date(l.getTime()+56*se),n=[];for(let y=0;y<84;y++){let g=`INC-${String(4100+y).padStart(5,"0")}`,v=I(e,2,4),E=y<16;for(let w=1;w<=v;w++){let f=w===v,b=E&&f?te(l,I(e,1,52),I(e,0,1300)):te(p,I(e,0,145),I(e,0,1300)),_=I(e,18,540),x=I(e,25e3,95e5),h={event_id:`EV-${4100+y}-${w}-A`,incident_id:g,revision:w,updated_at:b,team:E&&f?u:O(s,e),severity:O(E&&f?["S1","S2"]:["S1","S2","S3","S4"],e),status:E&&f?"RESOLVED":O(["OPEN","MITIGATED","RESOLVED","CANCELLED"],e),duration:Qe(_,I(e,0,2)),impact:Ke(x,I(e,0,2)),_durationMinutes:_,_lossCents:x};if(n.push(h),f&&y%9===0){let S={...h,event_id:`EV-${4100+y}-${w}-B`,updated_at:new Date(new Date(b).getTime()+102e4).toISOString(),duration:Qe(_+7,(I(e,0,2)+1)%3),impact:Ke(x+12500,(I(e,0,2)+1)%3),_durationMinutes:_+7,_lossCents:x+12500};n.push(S)}}}let c=n.filter((y,g)=>g%13===0).map(y=>({...y})),a=ot([...n,...c],e).map(({_durationMinutes:y,_lossCents:g,...v})=>v),d=11,m=Array.from({length:Math.ceil(a.length/d)},(y,g)=>a.slice(g*d,(g+1)*d));return{pages:m,scenario:{team:u,start:l.toISOString(),end:t.toISOString(),pageCount:m.length}}}function et(o,i){return i===1?{schema_version:1,issued_at:o.issuedAt,status:o.status,customer:{region:o.region},currency:o.currency,lines:o.lines.map(e=>({sku:e.sku,qty:String(e.quantity),unit_price:(e.unitCents/100).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),discount:`${(e.discountBps/100).toFixed(2)}%`}))}:{schema_version:2,issued_at:o.issuedAt,invoice_status:o.status,geography:{region_code:o.region},settlement:{currency:o.currency},items:o.lines.map(e=>({product:{sku:e.sku},quantity:e.quantity,unit_price_cents:e.unitCents,discount_bps:e.discountBps}))}}function at(o,i="v1"){let e=(0,ye.default)(`${tt(o)}#${co}#${i}`),s=["APAC","EMEA","LATAM","NA"],u=["USD","EUR","GBP"],p=Array.from({length:14},(g,v)=>`SKU-${String(v+1).padStart(3,"0")}`),l=O(s,e),t=O([1,2],e),n=new Date(`2026-${t===1?"01":"04"}-01T00:00:00.000Z`),c=new Date(`2026-${t===1?"04":"07"}-01T00:00:00.000Z`),r=[],a={USD:1e6,EUR:108e4,GBP:126e4};for(let g=0;g<6;g++)for(let v of u)r.push({currency:v,valid_from:new Date(Date.UTC(2026,g,1)).toISOString().slice(0,10),usd_per_unit:((a[v]+I(e,-45e3,45e3))/1e6).toFixed(6)});let d=[];for(let g=0;g<108;g++){let v=`INV-${String(7300+g).padStart(6,"0")}`,E=I(e,2,4),w=g<20;for(let f=1;f<=E;f++){let b=f===E,_=w&&b?te(n,I(e,0,Math.round((c-n)/se)-1),I(e,0,1300)):te(new Date("2026-01-01T00:00:00.000Z"),I(e,0,180),I(e,0,1300)),x={issuedAt:_,status:w&&b?"PAID":O(["DRAFT","PAID","VOID"],e),region:w&&b?l:O(s,e),currency:O(u,e),lines:Array.from({length:I(e,2,6)},()=>({sku:O(p,e),quantity:I(e,1,9),unitCents:I(e,105e3,68e4),discountBps:O([0,250,500,750,1e3,1250,1500,2e3],e)}))},h=b&&!w&&e()<.13?"DELETE":"UPSERT",S=te(new Date(_),I(e,1,18),I(e,0,1300)),$=O([1,2],e),k={event_id:`LE-${7300+g}-${f}-A`,invoice_id:v,sequence:String(f),emitted_at:S,operation:h,payload:h==="DELETE"?null:JSON.stringify(et(x,$)),_normalized:h==="DELETE"?null:x};if(d.push(k),b&&g%10===0&&h==="UPSERT"){let A={...k,event_id:`LE-${7300+g}-${f}-B`,emitted_at:new Date(new Date(S).getTime()+186e4).toISOString(),_normalized:{...x,lines:x.lines.map((T,q)=>q===0?{...T,quantity:T.quantity+1}:T)}};A.payload=JSON.stringify(et(A._normalized,$)),d.push(A)}}}let m=d.filter((g,v)=>v%17===0).map(g=>({...g}));return{events:ot([...d,...m],e).map(({_normalized:g,...v})=>v),fxRates:r,scenario:{region:l,start:n.toISOString(),end:c.toISOString()}}}var ye,io,co,se,be=C(()=>{"use strict";ye=V(J(),1),io="q-playwright-shadow-incident-audit-server",co="q-duckdb-json-ledger-reconciliation-server",se=1440*60*1e3});var nt={};U(nt,{default:()=>po});import{html as lo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function uo(o){return`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Orbit Ops incident audit</title>
  <style>
    body { font: 14px system-ui, sans-serif; margin: 2rem; color: #172033; }
    header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
    button { padding: .55rem 1rem; }
    #status { color: #526078; font-variant-numeric: tabular-nums; }
  </style>
</head>
<body data-ready="false" data-page="0">
  <header>
    <div><strong>Orbit Ops</strong> \xB7 revision audit <span id="status"></span></div>
    <button id="next-page" type="button" disabled>Next page</button>
  </header>
  <incident-audit></incident-audit>
  <script>
    const pages = ${JSON.stringify(o).replaceAll("<","\\u003c")};

    class IncidentRow extends HTMLElement {
      set record(value) { this._record = value; if (this.isConnected) this.render(); }
      connectedCallback() { this.attachShadow({ mode: "open" }); this.render(); }
      render() {
        const row = this._record;
        if (!row || !this.shadowRoot) return;
        this.shadowRoot.innerHTML = \`
          <style>
            article { display:grid; grid-template-columns:1.25fr .55fr 1.4fr .8fr .45fr .75fr .8fr 1fr;
              gap:.6rem; padding:.55rem .7rem; border-bottom:1px solid #dce2ec; align-items:center; }
            code { font-size:12px; } span { overflow-wrap:anywhere; }
          </style>
          <article class="record" data-active="true"
            data-event-id="\${row.event_id}" data-incident-id="\${row.incident_id}"
            data-revision="\${row.revision}" data-updated-at="\${row.updated_at}">
            <code class="event-id">\${row.event_id}</code><span class="revision">\${row.revision}</span>
            <time class="updated-at">\${row.updated_at}</time><span class="team">\${row.team}</span>
            <span class="severity">\${row.severity}</span><span class="status">\${row.status}</span>
            <span class="duration">\${row.duration}</span><span class="impact">\${row.impact}</span>
          </article>\`;
      }
    }

    class IncidentAudit extends HTMLElement {
      connectedCallback() { this.attachShadow({ mode: "open" }); }
      render(rows) {
        this.shadowRoot.replaceChildren();
        const heading = document.createElement("div");
        heading.textContent = "event \xB7 revision \xB7 updated \xB7 team \xB7 severity \xB7 status \xB7 duration \xB7 impact";
        heading.style.cssText = "padding:.55rem .7rem;font-weight:700;background:#eef3fa";
        this.shadowRoot.append(heading);
        for (const row of rows) {
          const item = document.createElement("incident-row");
          item.record = row;
          this.shadowRoot.append(item);
        }
        const decoy = document.createElement("article");
        decoy.className = "record";
        decoy.dataset.active = "false";
        decoy.setAttribute("aria-hidden", "true");
        decoy.hidden = true;
        decoy.textContent = "DEC0Y-DO-NOT-COLLECT";
        this.shadowRoot.append(decoy);
      }
    }

    customElements.define("incident-row", IncidentRow);
    customElements.define("incident-audit", IncidentAudit);

    const audit = document.querySelector("incident-audit");
    const next = document.querySelector("#next-page");
    const status = document.querySelector("#status");
    let page = 0;

    function renderPage() {
      document.body.dataset.ready = "false";
      next.disabled = true;
      status.textContent = "loading\u2026";
      setTimeout(() => {
        audit.render(pages[page]);
        document.body.dataset.page = String(page + 1);
        document.body.dataset.ready = "true";
        status.textContent = \`page \${page + 1} / \${pages.length}\`;
        next.disabled = page === pages.length - 1;
      }, 55 + (page % 5) * 23);
    }

    next.addEventListener("click", () => { if (page < pages.length - 1) { page += 1; renderPage(); } });
    renderPage();
  <\/script>
</body>
</html>`}async function po({user:o,weight:i=1,version:e="v1"}){let s="q-playwright-shadow-incident-audit-server",u="Playwright: Reconcile a paginated shadow-DOM incident audit",{pages:p,scenario:l}=rt(o.email,e),t=new Blob([uo(p)],{type:"text/html"}),n=async d=>{let m=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:d,weight:i,questionId:s,version:e})}),y=await m.json();if(!m.ok)throw new Error(y.error||"Unable to verify the incident audit.");return y},c=l.start.replace(".000Z","Z"),r=l.end.replace(".000Z","Z"),a=lo`
    <div class="mb-3">
      <h2 id="${s}">${u}</h2>
      <p>
        Orbit Ops exported an offline incident dashboard after its API was retired. The dashboard contains
        <strong>${l.pageCount} asynchronously rendered pages</strong>, nested open shadow roots, replayed events,
        and corrected revisions. Automate the page with Playwright or Selenium and produce the authoritative SRE audit.
      </p>
      <p>
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          @click=${()=>ee(t,`${s}.html`)}
        >
          Download the offline dashboard
        </button>
      </p>
      <h3>Reconciliation rules</h3>
      <ol>
        <li>
          Open the downloaded HTML in a real browser. On every page wait for
          <code>body[data-ready="true"]</code>, traverse both open shadow-root levels, and collect only
          <code>.record[data-active="true"]</code>. Continue until <code>#next-page</code> is disabled.
        </li>
        <li>Remove byte-for-byte replays by <code>event_id</code>.</li>
        <li>
          For each <code>incident_id</code>, retain the greatest numeric <code>revision</code>; break a revision tie using
          the latest <code>updated_at</code>. Do this before applying any filters.
        </li>
        <li>
          Keep team <strong>${l.team}</strong>, severity <code>S1</code> or <code>S2</code>, status
          <code>RESOLVED</code>, and <code>updated_at</code> in the half-open interval
          <code>[${c}, ${r})</code>.
        </li>
        <li>
          Normalize durations from minutes, <code>Hh Mm</code>, or ISO-8601 <code>PT...</code>. Normalize impact values
          written as <code>$1,234.56</code>, <code>USD 1,234.56</code>, or <code>1,234.56 USD</code>.
        </li>
        <li>
          Calculate the qualifying incident count, total downtime minutes, total impact in USD, and duration p95 using
          the nearest-rank definition: sorted value at position <code>ceil(0.95 × n)</code> (one-based).
        </li>
      </ol>
      <label for="${s}" class="form-label">Submit exactly these four fields as JSON:</label>
      <textarea
        class="form-control font-monospace"
        rows="4"
        id="${s}"
        name="${s}"
        placeholder='{"resolved_incidents":12,"downtime_minutes":3456,"loss_usd":12345.67,"p95_minutes":420}'
        required
      ></textarea>
    </div>
  `;return{id:s,title:u,weight:i,question:a,answer:n}}var st=C(()=>{"use strict";fe();be()});var it={};U(it,{default:()=>ho});import{html as mo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function ho({user:o,weight:i=1,version:e="v1"}){let s="q-duckdb-json-ledger-reconciliation-server",u="DuckDB: Reconcile a versioned nested-JSON invoice ledger",{events:p,fxRates:l,scenario:t}=at(o.email,e),n=new Blob([p.map(g=>JSON.stringify(g)).join(`
`)],{type:"application/x-ndjson"}),c=["currency,valid_from,usd_per_unit",...l.map(g=>`${g.currency},${g.valid_from},${g.usd_per_unit}`)].join(`
`),r=new Blob([c],{type:"text/csv"}),a=async g=>{let v=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:g,weight:i,questionId:s,version:e})}),E=await v.json();if(!v.ok)throw new Error(E.error||"Unable to verify the ledger result.");return E},d=t.start.replace(".000Z","Z"),m=t.end.replace(".000Z","Z"),y=mo`
    <div class="mb-3">
      <h2 id="${s}">${u}</h2>
      <p>
        Northstar Billing recovered an unordered CDC export. It contains exact transport replays, old revisions,
        same-sequence corrections, tombstones, two incompatible payload schemas, nested line items, and effective-dated
        FX rates. Build a reproducible DuckDB reconciliation rather than cleaning the files manually.
      </p>
      <div class="d-flex flex-wrap gap-2 my-3">
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          @click=${()=>ee(n,`${s}-events.jsonl`)}
        >
          Download events.jsonl
        </button>
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          @click=${()=>ee(r,`${s}-fx.csv`)}
        >
          Download fx.csv
        </button>
      </div>
      <h3>Authoritative-event rules</h3>
      <ol>
        <li>Remove exact transport replays by <code>event_id</code>.</li>
        <li>
          For every <code>invoice_id</code>, select the event with the greatest integer <code>sequence</code>; for a tie,
          select the greatest <code>emitted_at</code>. The JSONL file order has no meaning.
        </li>
        <li>Only after selecting that event, discard <code>DELETE</code> operations and invoices whose status is not PAID.</li>
        <li>
          Normalize both payload schemas:
          <ul>
            <li>
              v1 uses <code>customer.region</code>, <code>currency</code>, and <code>lines</code>. Prices contain comma
              separators and are decimal <em>major currency units</em>; quantities are strings, and discounts are
              percentages.
            </li>
            <li>
              v2 uses <code>geography.region_code</code>, <code>settlement.currency</code>, and <code>items</code>. Prices
              are integer minor units and discounts are basis points.
            </li>
          </ul>
        </li>
        <li>
          Keep region <strong>${t.region}</strong> and <code>issued_at</code> in the half-open UTC interval
          <code>[${d}, ${m})</code>.
        </li>
      </ol>
      <h3>Revenue rules</h3>
      <ol>
        <li>
          First normalize v1 decimal prices and v2 integer prices to local minor units. For each line calculate
          <code>local_minor_unit_price × quantity × (1 − discount)</code>. Do not round this intermediate value.
        </li>
        <li>
          ASOF join its invoice currency and <code>issued_at</code> to the most recent FX row whose
          <code>valid_from &lt;= issued_at</code>.
        </li>
        <li>
          <code>usd_per_unit</code> is USD per major currency unit; multiplying local minor units by that rate therefore
          produces USD cents. Round each converted line to the nearest cent with positive half-cents rounded up. Sum
          the rounded cents; do not round only once at invoice or portfolio level.
        </li>
        <li>
          The top SKU is the SKU with the greatest sum of converted line cents. Break an exact tie by ascending SKU.
        </li>
      </ol>
      <p>
        Return the qualifying invoice count, total USD revenue, top SKU, and that SKU's USD revenue. Monetary values
        must be JSON strings containing exactly two decimal places and no currency symbol.
      </p>
      <label for="${s}" class="form-label">Submit exactly these four fields as JSON:</label>
      <textarea
        class="form-control font-monospace"
        rows="4"
        id="${s}"
        name="${s}"
        placeholder='{"invoice_count":20,"net_usd":"12345.67","top_sku":"SKU-007","top_sku_usd":"2345.67"}'
        required
      ></textarea>
    </div>
  `;return{id:s,title:u,weight:i,question:y,answer:a}}var ct=C(()=>{"use strict";fe();be()});function dt(o){let i="politeness-audit-server",e=o?.version??"",s=String(o?.email??"").trim().toLowerCase(),u=(0,lt.default)(`${s}#${i}${e}`),p=3+Math.floor(u()*4),l=go.slice();for(let a=l.length-1;a>0;a--){let d=Math.floor(u()*(a+1));[l[a],l[d]]=[l[d],l[a]]}let t=l.slice(0,p).sort(),n=[];for(let a=1;a<=3e3;a++){let d=String(a).padStart(4,"0"),m=t.some(w=>d.startsWith(w)),y=Z[Math.floor(u()*Z.length)],g=Math.round((1+u()*999)*100)/100,v=Z[(Z.indexOf(y)+1+Math.floor(u()*(Z.length-1)))%Z.length],E=Math.round((1+u()*999)*100)/100;n.push({num:a,padded:d,id:a,category:y,price:g,disallowed:m,decoyCategory:v,decoyPrice:E})}let c=n.filter(a=>!a.disallowed),r=n.filter(a=>a.disallowed);return{pages:n,disallowPrefixes:t,allowedPages:c,disallowedPages:r}}var lt,Z,go,ut=C(()=>{"use strict";lt=V(J(),1),Z=["electronics","clothing","books","toys","food","sports","home","beauty","auto","garden"],go=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"]});var mt={};U(mt,{default:()=>bo});import fo from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as yo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function bo({user:o,weight:i=1,version:e=""}){let s="q-politeness-audit-server",u="Crawl a Static Site Respecting robots.txt",p={...o,version:e},l=dt(p),{pages:t,disallowPrefixes:n}=l,c=new fo,r=c.folder("site"),a=["User-agent: *",...n.map(w=>`Disallow: /page-${w}`),""].join(`
`);r.file("robots.txt",a);let d=t.map(w=>`  <li><a href="page-${w.padded}.html">page-${w.padded}</a></li>`).join(`
`),m=`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Product Catalog</title></head>
<body>
<h1>Product Catalog</h1>
<p>This catalog lists ${t.length} products. Crawl all pages to extract records.</p>
<ul>
${d}
</ul>
</body>
</html>`;r.file("index.html",m);for(let w of t){let f=w.num>1?`page-${String(w.num-1).padStart(4,"0")}.html`:"index.html",b=w.num<t.length?`page-${String(w.num+1).padStart(4,"0")}.html`:"index.html",_=w.disallowed?{id:w.id,category:w.decoyCategory,price:w.decoyPrice}:{id:w.id,category:w.category,price:w.price},x=`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Product page-${w.padded}</title></head>
<body>
<h1>Product page-${w.padded}</h1>
<script type="application/json" id="record">${JSON.stringify(_)}<\/script>
<p>Category: ${_.category}</p>
<p>Price: $${_.price.toFixed(2)}</p>
<nav>
  <a href="${f}">\u2190 Previous</a> |
  <a href="index.html">Index</a> |
  <a href="${b}">Next \u2192</a>
</nav>
</body>
</html>`;r.file(`page-${w.padded}.html`,x)}let y=await c.generateAsync({type:"blob"}),g=URL.createObjectURL(y),v=async w=>{let f=String(w??"").trim();if(!f)throw new Error("Please submit a JSON answer.");let b;try{b=JSON.parse(f)}catch{throw new Error('Invalid JSON. Submit: {"data_hash": "<64 hex chars>"}')}if(!b||typeof b!="object"||Array.isArray(b))throw new Error("Submission must be a JSON object.");let{data_hash:_}=b;if(typeof _!="string"||!/^[0-9a-f]{64}$/i.test(_))throw new Error("data_hash must be exactly 64 hexadecimal characters (SHA-256).");let x=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:f,weight:i,questionId:s,version:e})}),h=await x.json();if(!x.ok)throw new Error(h.error||"Unable to verify hash.");return h},E=yo(pt||(pt=Se([`
    <p>
      <strong>Scenario:</strong> You are a data engineer tasked with harvesting a product
      catalog from a static site. The site has `,` pages and a
      <code>robots.txt</code> that marks some pages as off-limits. Those off-limits pages
      contain plausible but <em>wrong</em> records designed to mislead crawlers that ignore
      politeness rules. Your crawler must respect <code>robots.txt</code> and collect only
      the records from allowed pages.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Download the ZIP and extract it \u2014 you will find a <code>site/</code> folder.</li>
      <li>
        Serve <code>site/</code> locally (e.g. <code>python -m http.server 8000</code> inside
        the folder) <strong>or</strong> crawl via <code>file://</code> if your tool supports it.
      </li>
      <li>
        Parse <code>site/robots.txt</code> \u2014 apply every <code>Disallow:</code> rule. Pages
        whose URL path matches any Disallow pattern must be excluded entirely.
      </li>
      <li>Crawl all <strong>allowed</strong> pages starting from <code>index.html</code>.</li>
      <li>
        From each allowed page, extract the JSON record embedded in
        <code>&lt;script type="application/json" id="record"&gt;</code>.
      </li>
      <li>
        Sort all extracted records by <code>id</code> <strong>numerically ascending</strong>.
      </li>
      <li>Compute the SHA-256 hash of the sorted records (see format below).</li>
      <li>Submit the hash as JSON.</li>
    </ol>

    <p>
      <a href="`,`" download="politeness-audit-site.zip" class="btn btn-primary btn-sm">
        \u{1F4E5} Download Site ZIP (`,` pages + robots.txt)
      </a>
    </p>

    <div class="alert alert-warning" role="alert">
      <strong>\u26A0\uFE0F Deterministic assignment:</strong> Re-downloading regenerates an identical
      ZIP for the same account. Your <code>robots.txt</code> rules and page records will not
      change between attempts.
    </div>

    <details class="my-3">
      <summary><strong>\u{1F4CB} Hash computation format</strong></summary>

      <p>
        Collect the record from every page <em>not</em> matched by any
        <code>Disallow:</code> pattern in <code>robots.txt</code>. Discard all records
        from disallowed pages \u2014 do <strong>not</strong> include them in the hash.
      </p>

      <p><strong>Step 1 \u2014 Sort records numerically by <code>id</code> (ascending):</strong></p>
      <pre><code>records.sort(key=lambda r: r["id"])</code></pre>

      <p>
        <strong>Step 2 \u2014 Serialise each record</strong> with keys in fixed order
        <code>id</code>, <code>category</code>, <code>price</code>, no extra whitespace:
      </p>
      <pre><code>import json
lines = [json.dumps({"id": r["id"], "category": r["category"], "price": r["price"]}, separators=(',', ':'))
         for r in records]</code></pre>

      <p><strong>Step 3 \u2014 Join with newlines (no trailing newline):</strong></p>
      <pre><code>text = "
".join(lines)</code></pre>

      <p><strong>Step 4 \u2014 SHA-256 of the UTF-8 encoded string:</strong></p>
      <pre><code>import hashlib
data_hash = hashlib.sha256(text.encode()).hexdigest()</code></pre>

      <p><strong>Submission schema:</strong></p>
      <pre><code>{"data_hash": "a1b2c3d4e5f6..."}  # 64 hex characters</code></pre>

      <p><strong>Example (placeholder values, not the real answer):</strong></p>
      <pre><code>{"data_hash": "0000000000000000000000000000000000000000000000000000000000000000"}</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>\u{1F577}\uFE0F Scrapy quick-start</strong></summary>

      <pre><code>pip install scrapy

# In your Scrapy settings, robots.txt obedience is ON by default:
# ROBOTSTXT_OBEY = True  (this is already the default)

# Serve the site first:
cd site && python -m http.server 8000</code></pre>

      <p>Then point your spider at <code>http://localhost:8000/index.html</code>.</p>

      <p>Extract the embedded JSON record from each page:</p>
      <pre><code>import json

record_text = response.css('script#record::text').get()
record = json.loads(record_text)</code></pre>

      <p>
        Scrapy respects <code>robots.txt</code> by default (setting
        <code>ROBOTSTXT_OBEY = True</code>). Verify it is enabled and point the spider at
        the local server so the <code>robots.txt</code> at the site root is fetched
        automatically.
      </p>
    </details>

    <details class="my-3">
      <summary><strong>\u{1F4A1} Alternative: Python requests + html.parser</strong></summary>

      <pre><code>import urllib.robotparser, urllib.request, json, hashlib
from html.parser import HTMLParser

# 1. Parse robots.txt
rp = urllib.robotparser.RobotFileParser()
rp.set_url("http://localhost:8000/robots.txt")
rp.read()

records = []
for i in range(1, 3001):
    path = f"/page-{i:04d}.html"
    if not rp.can_fetch("*", f"http://localhost:8000{path}"):
        continue  # skip disallowed pages
    with urllib.request.urlopen(f"http://localhost:8000{path}") as r:
        html_text = r.read().decode()
    # Extract JSON from script tag (simple approach)
    start = html_text.index('id="record">') + len('id="record">')
    end = html_text.index('<\/script>', start)
    records.append(json.loads(html_text[start:end]))

records.sort(key=lambda r: r["id"])
lines = [json.dumps({"id": r["id"], "category": r["category"], "price": r["price"]}, separators=(',', ':'))
         for r in records]
data_hash = hashlib.sha256("
".join(lines).encode()).hexdigest()
print(json.dumps({"data_hash": data_hash}))</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>\u26A0\uFE0F Common pitfalls</strong></summary>
      <ul>
        <li>
          <strong>Including disallowed pages:</strong> Any page whose URL path starts with a
          <code>Disallow:</code> prefix must be excluded. Those pages hold deliberately wrong
          records.
        </li>
        <li>
          <strong>Lexicographic vs numeric sort:</strong> Sort by the integer value of
          <code>id</code>, not by its string representation.
          (<code>id: 9</code> comes before <code>id: 10</code>.)
        </li>
        <li>
          <strong>Key order matters:</strong> Serialise as
          <code>{"id":...,"category":...,"price":...}</code> \u2014 exactly these three keys, in
          this order, with no extra spaces.
        </li>
        <li>
          <strong>No trailing newline</strong> after the last record when joining.
        </li>
        <li>
          <strong>Floating-point prices:</strong> Use the price value exactly as embedded in
          the page's JSON record \u2014 do not reformat or round it differently.
        </li>
      </ul>
    </details>

    <div class="mb-3">
      <label for="`,`" class="form-label">
        <strong>Paste your JSON answer here</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="`,`"
        name="`,`"
        rows="4"
        placeholder='{"data_hash": "<64 hex characters>"}'
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        Submit a JSON object with a single field <code>data_hash</code> containing your
        64-character SHA-256 hex string.
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>\u{1F393} This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Parse and apply <code>robots.txt</code> Disallow rules in a web crawler</li>
        <li>Use Scrapy (or an equivalent tool) to crawl a static multi-page site</li>
        <li>Extract structured data from HTML pages</li>
        <li>Produce a deterministic, reproducible hash of a filtered dataset</li>
      </ul>
    </div>
  `],[`
    <p>
      <strong>Scenario:</strong> You are a data engineer tasked with harvesting a product
      catalog from a static site. The site has `,` pages and a
      <code>robots.txt</code> that marks some pages as off-limits. Those off-limits pages
      contain plausible but <em>wrong</em> records designed to mislead crawlers that ignore
      politeness rules. Your crawler must respect <code>robots.txt</code> and collect only
      the records from allowed pages.
    </p>

    <p><strong>Your Task:</strong></p>
    <ol>
      <li>Download the ZIP and extract it \u2014 you will find a <code>site/</code> folder.</li>
      <li>
        Serve <code>site/</code> locally (e.g. <code>python -m http.server 8000</code> inside
        the folder) <strong>or</strong> crawl via <code>file://</code> if your tool supports it.
      </li>
      <li>
        Parse <code>site/robots.txt</code> \u2014 apply every <code>Disallow:</code> rule. Pages
        whose URL path matches any Disallow pattern must be excluded entirely.
      </li>
      <li>Crawl all <strong>allowed</strong> pages starting from <code>index.html</code>.</li>
      <li>
        From each allowed page, extract the JSON record embedded in
        <code>&lt;script type="application/json" id="record"&gt;</code>.
      </li>
      <li>
        Sort all extracted records by <code>id</code> <strong>numerically ascending</strong>.
      </li>
      <li>Compute the SHA-256 hash of the sorted records (see format below).</li>
      <li>Submit the hash as JSON.</li>
    </ol>

    <p>
      <a href="`,`" download="politeness-audit-site.zip" class="btn btn-primary btn-sm">
        \u{1F4E5} Download Site ZIP (`,` pages + robots.txt)
      </a>
    </p>

    <div class="alert alert-warning" role="alert">
      <strong>\u26A0\uFE0F Deterministic assignment:</strong> Re-downloading regenerates an identical
      ZIP for the same account. Your <code>robots.txt</code> rules and page records will not
      change between attempts.
    </div>

    <details class="my-3">
      <summary><strong>\u{1F4CB} Hash computation format</strong></summary>

      <p>
        Collect the record from every page <em>not</em> matched by any
        <code>Disallow:</code> pattern in <code>robots.txt</code>. Discard all records
        from disallowed pages \u2014 do <strong>not</strong> include them in the hash.
      </p>

      <p><strong>Step 1 \u2014 Sort records numerically by <code>id</code> (ascending):</strong></p>
      <pre><code>records.sort(key=lambda r: r["id"])</code></pre>

      <p>
        <strong>Step 2 \u2014 Serialise each record</strong> with keys in fixed order
        <code>id</code>, <code>category</code>, <code>price</code>, no extra whitespace:
      </p>
      <pre><code>import json
lines = [json.dumps({"id": r["id"], "category": r["category"], "price": r["price"]}, separators=(',', ':'))
         for r in records]</code></pre>

      <p><strong>Step 3 \u2014 Join with newlines (no trailing newline):</strong></p>
      <pre><code>text = "\\n".join(lines)</code></pre>

      <p><strong>Step 4 \u2014 SHA-256 of the UTF-8 encoded string:</strong></p>
      <pre><code>import hashlib
data_hash = hashlib.sha256(text.encode()).hexdigest()</code></pre>

      <p><strong>Submission schema:</strong></p>
      <pre><code>{"data_hash": "a1b2c3d4e5f6..."}  # 64 hex characters</code></pre>

      <p><strong>Example (placeholder values, not the real answer):</strong></p>
      <pre><code>{"data_hash": "0000000000000000000000000000000000000000000000000000000000000000"}</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>\u{1F577}\uFE0F Scrapy quick-start</strong></summary>

      <pre><code>pip install scrapy

# In your Scrapy settings, robots.txt obedience is ON by default:
# ROBOTSTXT_OBEY = True  (this is already the default)

# Serve the site first:
cd site && python -m http.server 8000</code></pre>

      <p>Then point your spider at <code>http://localhost:8000/index.html</code>.</p>

      <p>Extract the embedded JSON record from each page:</p>
      <pre><code>import json

record_text = response.css('script#record::text').get()
record = json.loads(record_text)</code></pre>

      <p>
        Scrapy respects <code>robots.txt</code> by default (setting
        <code>ROBOTSTXT_OBEY = True</code>). Verify it is enabled and point the spider at
        the local server so the <code>robots.txt</code> at the site root is fetched
        automatically.
      </p>
    </details>

    <details class="my-3">
      <summary><strong>\u{1F4A1} Alternative: Python requests + html.parser</strong></summary>

      <pre><code>import urllib.robotparser, urllib.request, json, hashlib
from html.parser import HTMLParser

# 1. Parse robots.txt
rp = urllib.robotparser.RobotFileParser()
rp.set_url("http://localhost:8000/robots.txt")
rp.read()

records = []
for i in range(1, 3001):
    path = f"/page-{i:04d}.html"
    if not rp.can_fetch("*", f"http://localhost:8000{path}"):
        continue  # skip disallowed pages
    with urllib.request.urlopen(f"http://localhost:8000{path}") as r:
        html_text = r.read().decode()
    # Extract JSON from script tag (simple approach)
    start = html_text.index('id="record">') + len('id="record">')
    end = html_text.index('<\/script>', start)
    records.append(json.loads(html_text[start:end]))

records.sort(key=lambda r: r["id"])
lines = [json.dumps({"id": r["id"], "category": r["category"], "price": r["price"]}, separators=(',', ':'))
         for r in records]
data_hash = hashlib.sha256("\\n".join(lines).encode()).hexdigest()
print(json.dumps({"data_hash": data_hash}))</code></pre>
    </details>

    <details class="my-3">
      <summary><strong>\u26A0\uFE0F Common pitfalls</strong></summary>
      <ul>
        <li>
          <strong>Including disallowed pages:</strong> Any page whose URL path starts with a
          <code>Disallow:</code> prefix must be excluded. Those pages hold deliberately wrong
          records.
        </li>
        <li>
          <strong>Lexicographic vs numeric sort:</strong> Sort by the integer value of
          <code>id</code>, not by its string representation.
          (<code>id: 9</code> comes before <code>id: 10</code>.)
        </li>
        <li>
          <strong>Key order matters:</strong> Serialise as
          <code>{"id":...,"category":...,"price":...}</code> \u2014 exactly these three keys, in
          this order, with no extra spaces.
        </li>
        <li>
          <strong>No trailing newline</strong> after the last record when joining.
        </li>
        <li>
          <strong>Floating-point prices:</strong> Use the price value exactly as embedded in
          the page's JSON record \u2014 do not reformat or round it differently.
        </li>
      </ul>
    </details>

    <div class="mb-3">
      <label for="`,`" class="form-label">
        <strong>Paste your JSON answer here</strong>
      </label>
      <textarea
        class="form-control font-monospace"
        id="`,`"
        name="`,`"
        rows="4"
        placeholder='{"data_hash": "<64 hex characters>"}'
        required
        style="font-size: 0.875rem"
      ></textarea>
      <div class="form-text">
        Submit a JSON object with a single field <code>data_hash</code> containing your
        64-character SHA-256 hex string.
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <strong>\u{1F393} This question tests your ability to:</strong>
      <ul class="mb-0">
        <li>Parse and apply <code>robots.txt</code> Disallow rules in a web crawler</li>
        <li>Use Scrapy (or an equivalent tool) to crawl a static multi-page site</li>
        <li>Extract structured data from HTML pages</li>
        <li>Produce a deterministic, reproducible hash of a filtered dataset</li>
      </ul>
    </div>
  `])),t.length.toLocaleString(),g,t.length.toLocaleString(),s,s,s);return{id:s,title:u,weight:i,question:E,answer:v}}var pt,ht=C(()=>{"use strict";ut()});function _o(o,i){let e=o.slice();for(let s=e.length-1;s>0;s--){let u=Math.floor(i()*(s+1));[e[s],e[u]]=[e[u],e[s]]}return e}function yt(o){let i=(0,ft.default)(`${o}#${wo}`),e=_o(gt,i).slice(0,vo).map(n=>n.slug).sort(),s=2+Math.floor(i()*4),u=10+Math.floor(i()*30),p=u+15+Math.floor(i()*25),l=2+Math.floor(i()*13),t=e.map(n=>gt.find(c=>c.slug===n).name);return{categories:e,categoryNames:t,minRating:s,minPrice:u,maxPrice:p,minAvailability:l}}function bt(o){let i=String(o??"").trim();if(i.length>xo)throw new Error("Submission is too large.");if(!So.test(i.toLowerCase()))throw new Error("Submit a single 64-character lowercase hex SHA-256 digest.");return i.toLowerCase()}var ft,wo,vo,xo,So,gt,wt=C(()=>{"use strict";ft=V(J(),1),wo="q-scrape-books-server",vo=5,xo=200,So=/^[a-f0-9]{64}$/,gt=[{name:"Travel",slug:"travel_2"},{name:"Mystery",slug:"mystery_3"},{name:"Historical Fiction",slug:"historical-fiction_4"},{name:"Sequential Art",slug:"sequential-art_5"},{name:"Classics",slug:"classics_6"},{name:"Philosophy",slug:"philosophy_7"},{name:"Romance",slug:"romance_8"},{name:"Womens Fiction",slug:"womens-fiction_9"},{name:"Fiction",slug:"fiction_10"},{name:"Childrens",slug:"childrens_11"},{name:"Religion",slug:"religion_12"},{name:"Nonfiction",slug:"nonfiction_13"},{name:"Music",slug:"music_14"},{name:"Default",slug:"default_15"},{name:"Science Fiction",slug:"science-fiction_16"},{name:"Sports and Games",slug:"sports-and-games_17"},{name:"Add a comment",slug:"add-a-comment_18"},{name:"Fantasy",slug:"fantasy_19"},{name:"New Adult",slug:"new-adult_20"},{name:"Young Adult",slug:"young-adult_21"},{name:"Science",slug:"science_22"},{name:"Poetry",slug:"poetry_23"},{name:"Paranormal",slug:"paranormal_24"},{name:"Art",slug:"art_25"},{name:"Psychology",slug:"psychology_26"},{name:"Autobiography",slug:"autobiography_27"},{name:"Parenting",slug:"parenting_28"},{name:"Adult Fiction",slug:"adult-fiction_29"},{name:"Humor",slug:"humor_30"},{name:"Horror",slug:"horror_31"},{name:"History",slug:"history_32"},{name:"Food and Drink",slug:"food-and-drink_33"},{name:"Christian Fiction",slug:"christian-fiction_34"},{name:"Business",slug:"business_35"},{name:"Biography",slug:"biography_36"},{name:"Thriller",slug:"thriller_37"},{name:"Contemporary",slug:"contemporary_38"},{name:"Spirituality",slug:"spirituality_39"},{name:"Academic",slug:"academic_40"},{name:"Self Help",slug:"self-help_41"},{name:"Historical",slug:"historical_42"},{name:"Christian",slug:"christian_43"},{name:"Suspense",slug:"suspense_44"},{name:"Short Stories",slug:"short-stories_45"},{name:"Novels",slug:"novels_46"},{name:"Health",slug:"health_47"},{name:"Politics",slug:"politics_48"},{name:"Cultural",slug:"cultural_49"},{name:"Erotica",slug:"erotica_50"},{name:"Crime",slug:"crime_51"}]});var xt={};U(xt,{default:()=>$o});import{html as vt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function $o({user:o,weight:i=1}){let e="q-scrape-books-server",s="Scrape Books to Scrape by Category and Value",u=yt(o.email),{categoryNames:p,minRating:l,minPrice:t,maxPrice:n,minAvailability:c}=u,r=async m=>{bt(m);let y=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:m,weight:i,questionId:e})}),g=await y.json();if(!y.ok)throw new Error(g.error||"Unable to verify the books digest.");return g},a=p.map(m=>vt`<li><strong>${m}</strong></li>`),d=vt`
    <div class="mb-3">
      <h2 id="${e}">${s}</h2>
      <p>
        <strong>Scenario:</strong> You are auditing a bookstore catalog from
        <a href="https://books.toscrape.com/">Books to Scrape</a>. Your assignment is scoped to a
        seeded subset of categories, and the category URL slugs are not part of the input. Start from
        the home page, parse the sidebar navigation, find the assigned category links, and crawl only
        those category pages and their pagination.
      </p>

      <p><strong>Your assigned categories:</strong></p>
      <ul>${a}</ul>

      <p><strong>Keep a book only if all of these conditions are true:</strong></p>
      <ul>
        <li>It is in one of the assigned categories above.</li>
        <li>
          Its price is between <code>£${t.toFixed(2)}</code> and
          <code>£${n.toFixed(2)}</code>, inclusive.
        </li>
        <li>
          Its rating is at least <code>${l}</code>. Decode the rating from the
          <code>star-rating</code> CSS class word:
          <code>One</code>=1, <code>Two</code>=2, <code>Three</code>=3, <code>Four</code>=4,
          <code>Five</code>=5.
        </li>
        <li>
          Its detail page availability is at least <code>${c}</code>, parsed from text
          like <code>In stock (19 available)</code>.
        </li>
      </ul>

      <p><strong>For every matching book, build an object with exactly these fields:</strong></p>
      <pre><code>{
  "id": "a-book-slug_123",
  "title": "Book title",
  "price": 12.34,
  "rating": 4,
  "availability": 19,
  "value_score": 0.3241
}</code></pre>

      <ul>
        <li>
          <code>id</code> is the book slug and numeric id from the detail URL, for example
          <code>a-light-in-the-attic_1000</code>.
        </li>
        <li><code>price</code> must be serialized with exactly 2 decimal places.</li>
        <li>
          <code>value_score</code> is <code>round(rating / price, 4)</code>, using ordinary
          half-up rounding, and must be serialized with exactly 4 decimal places.
        </li>
      </ul>

      <h3>Canonical JSON and Hash</h3>
      <ol>
        <li>
          Sort matching books by <code>value_score</code> descending. Break ties by
          <code>id</code> ascending.
        </li>
        <li>
          Serialize the sorted array as one compact JSON string with no whitespace. Each object must
          use this key order exactly:
          <code>id</code>, <code>title</code>, <code>price</code>, <code>rating</code>,
          <code>availability</code>, <code>value_score</code>.
        </li>
        <li>
          Use fixed numeric formatting: <code>price</code> has 2 decimals and
          <code>value_score</code> has 4 decimals.
        </li>
        <li>Compute the SHA-256 digest of that UTF-8 canonical JSON string.</li>
      </ol>

      <p><strong>Canonical format example with placeholder values:</strong></p>
      <pre><code>[{"id":"a-light-in-the-attic_1000","title":"A Light in the Attic","price":51.77,"rating":3,"availability":22,"value_score":0.0580}]</code></pre>

      <details class="my-3">
        <summary><strong>Python hash skeleton</strong></summary>
        <pre><code>import hashlib
from decimal import Decimal, ROUND_HALF_UP

def value_score(rating, price):
    return (Decimal(rating) / Decimal(str(price))).quantize(Decimal("0.0001"), rounding=ROUND_HALF_UP)

rows.sort(key=lambda r: (-r["value_score"], r["id"]))
canonical = "[" + ",".join(
    '{"id":"%s","title":"%s","price":%.2f,"rating":%d,"availability":%d,"value_score":%.4f}'
    % (r["id"], r["title"], r["price"], r["rating"], r["availability"], r["value_score"])
    for r in rows
) + "]"
print(hashlib.sha256(canonical.encode("utf-8")).hexdigest())</code></pre>
      </details>

      <div class="mb-3">
        <label for="${e}" class="form-label">
          <strong>Submit the SHA-256 digest</strong>
        </label>
        <input
          class="form-control font-monospace"
          id="${e}"
          name="${e}"
          inputmode="text"
          minlength="64"
          maxlength="64"
          pattern="[0-9a-fA-F]{64}"
          placeholder="64 lowercase hex characters"
          required
        />
        <div class="form-text">
          Submit only the 64-character hex digest, not the JSON array.
        </div>
      </div>
    </div>
  `;return{id:e,title:s,weight:i,question:d,answer:r}}var St=C(()=>{"use strict";wt()});var $t={};U($t,{default:()=>Io});import ko from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{unsafeHTML as Ao}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{html as Eo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{generate as To}from"https://sanand0.github.io/tdsdata/js_table/table.js";async function Io({user:o,weight:i=1}){let e="q-github-action-playwright",s="GitHub Action: Scrape Table Sums with Playwright",u=(0,_t.default)(`${o.email}#${e}`),p=Math.floor(u()*90),l=Array.from({length:10},(a,d)=>p+d).map(a=>a.toString()),t=l.reduce((a,d)=>a+To(d,50,10).reduce((m,y)=>m+y.reduce((g,v)=>g+v,0),0),0),n=l.map(a=>`<li><a href="https://sanand0.github.io/tdsdata/js_table/?seed=${a}" target="_blank">Seed ${a}</a></li>`).join(""),c=Eo`
    <div class="mb-3">
      <h4>Case Study: Automated QA with Playwright and GitHub Actions</h4>
      <p>
        <strong>DataDash</strong> is a data engineering firm that automates QA for web-based reports. They want to
        ensure that all numbers in dynamically generated tables are correct by scraping and summing them using
        Playwright, running as a GitHub Action.
      </p>
      <p>
        Visit each link below, compute the sum of all numbers in all tables, and print the total in your GitHub Action
        logs:
      </p>
      <ul class="small">
        ${Ao(n)}
      </ul>
      <p>
        <strong>Your Task:</strong> Create a GitHub Action in any of your repositories that runs a Playwright script to
        scrape all the above pages, sum all numbers, and print the total in the logs. One of the steps in your workflow
        must have your email address <code>${o.email}</code> in the name.
      </p>
      <label for="${e}" class="form-label"
        >What is your repository URL and
        <a
          href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
          target="_blank"
          >GitHub Personal Access Token</a
        >? Separate them with a space</label
      >
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        Example: <code>https://github.com/&lt;user&gt;/&lt;repo&gt; &lt;token&gt;</code>. We'll fetch the latest GitHub
        Action run log, search for the answer, and check for your email in the step name.
      </p>
    </div>
  `;return{id:e,title:s,weight:i,question:c,answer:async a=>{let d=a.match(/https:\/\/github\.com\/([^/]+)\/([^/\s]+)\s+(\w+)/);if(!d)throw new Error("URL does not match https://github.com/<user>/<repo> <token>");let[,m,y,g]=d,v={Authorization:`Bearer ${g}`},E=`https://api.github.com/repos/${m}/${y}/actions/runs`,{workflow_runs:w}=await fetch(E,{headers:v}).then(A=>A.json());if(!w?.length)throw new Error("No runs found");let{jobs_url:f,logs_url:b}=w[0],_=await fetch(`/proxy/${b}`,{headers:v});if(!_.ok)throw new Error("Could not fetch logs");let x=await _.arrayBuffer(),h=await ko.loadAsync(x);if(!(await Promise.all(Object.values(h.files).filter(A=>!A.dir&&A.name.endsWith(".txt")).map(A=>A.async("text"))).then(A=>A.join(`
`))).match(new RegExp(String(t))))throw new Error("Sum not found in logs");let{jobs:$}=await fetch(f,{headers:v}).then(A=>A.json()),k=!1;for(let{steps:A}of $)for(let{name:T}of A)T.includes(o.email)&&(k=!0);if(!k)throw new Error("No step with your email in the name");return!0}}}var _t,kt=C(()=>{"use strict";_t=V(J(),1)});function Do(o,i,e){let s=(0,we.default)(o);return Array.from({length:i},()=>Array.from({length:e},()=>Math.round(s()*1e3)))}function ve(o){let i="q-playwright-table-server",e=o?.email??o??"",s=(0,we.default)(`${e}#${i}`),u=Math.floor(s()*90),p=Array.from({length:10},(t,n)=>(u+n).toString()),l=p.reduce((t,n)=>t+Do(n,50,10).reduce((c,r)=>c+r.reduce((a,d)=>a+d,0),0),0);return{n:u,seeds:p,expected:l}}async function At({email:o}){return async i=>{let{expected:e}=ve({email:o}),s=parseInt(String(i??"").trim(),10);if(!Number.isFinite(s))throw new Error("Please provide a valid integer for the total sum.");if(s!==e)throw new Error("Incorrect total. Make sure you're summing all numbers across all 10 table pages for your assigned seeds.");return!0}}var we,Et=C(()=>{"use strict";we=V(J(),1)});var Tt={};U(Tt,{default:()=>Ro});import{unsafeHTML as qo}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{html as Co}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ro({user:o,weight:i=1}){let e="q-playwright-table-server",s="Sum table values with Playwright",{seeds:u}=ve(o),p=u.map(t=>`<li><a href="https://sanand0.github.io/tdsdata/js_table/?seed=${t}" target="_blank">Seed ${t}</a></li>`).join(""),l=Co`
    <div class="mb-3">
      <p>
        <strong>DataDash</strong> validates generated reports by sampling numeric tables. QA engineers scrape several
        tables and verify aggregated metrics.
      </p>
      <p>Visit each link below, compute the sum of all numbers in all tables, and enter the total:</p>
      <ul class="small">
        ${qo(p)}
      </ul>
      <label for="${e}" class="form-label">Total sum</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:s,weight:i,question:l,answer:await At(o)}}var It=C(()=>{"use strict";Et()});var Dt={};U(Dt,{default:()=>Ho});import{html as Mo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Oo(o,i){let e=atob(o),s=new Uint8Array(e.length);for(let u=0;u<e.length;u++)s[u]=e.charCodeAt(u);return URL.createObjectURL(new Blob([s],{type:i}))}async function Ho({user:o,weight:i=1,version:e=""}){let s="q-modem-in-static-server",u="Decode a Hidden Modem Signal in Audio",p=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:{action:"download"},weight:i,questionId:s,version:e})}),l=await p.json();if(!p.ok||!l.audioBase64)throw new Error(l.error||"Unable to prepare your audio file.");let t=Oo(l.audioBase64,l.contentType||"audio/wav"),n=async r=>{let a=String(r??"");if(a.length>64)throw new Error("Enter only the 5-character code.");let d=a.trim().toUpperCase();if(!/^[A-Z0-9]{5}$/.test(d))throw new Error("Submit exactly 5 uppercase letters or digits, with no spaces.");let m=await fetch("/backendVerify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,quizSign:o.quizSign,response:d,weight:i,questionId:s,version:e})}),y=await m.json();if(!m.ok)throw new Error(y.error||"Unable to verify the code.");return y},c=Mo`
    <div class="mb-4">
      <h2 id="${s}">${u}</h2>
      <p class="lead">
        Analyze a noisy 16&nbsp;kHz audio recording using frequency-domain digital signal processing (DSP) to isolate and decode a hidden 5-character modem signal.
      </p>

      <div class="card mb-4">
        <div class="card-header font-weight-bold">
          Objective & Educational Context: What You Are Doing & Why
        </div>
        <div class="card-body">
          <p>
            In modern data engineering, telemetry, and signals intelligence, acoustic and radio signals are frequently obscured by environmental interference, non-stationary human vocal chatter, or broadband noise. This exercise demonstrates how <strong>Short-Time Fourier Transform (STFT)</strong> and <strong>spectrogram analysis</strong> allow us to slice through temporal noise to extract structured digital data transmitted over analog channels.
          </p>
          <h6 class="font-weight-bold mt-3">Real-World Practical Scenarios</h6>
          <ul>
            <li>
              <strong>Acoustic Modems & Underwater Telemetry:</strong> Subsea autonomous vehicles (AUVs) and oceanographic sensors transmit telemetry via multi-frequency acoustic tones through water where high-frequency radio signals cannot propagate.
            </li>
            <li>
              <strong>Telephony & Signaling Systems:</strong> Dual-Tone Multi-Frequency (DTMF) signaling powers traditional phone networks, IVR navigation, and legacy dial-up telemetry modems (e.g., V.23, Bell 202).
            </li>
            <li>
              <strong>Industrial Predictive Maintenance:</strong> Vibration and acoustic sensors monitor rotating machinery (turbines, bearings, gearboxes). Spectral peak detection isolates faint bearing race failure harmonics hidden beneath industrial ambient noise.
            </li>
            <li>
              <strong>Signals Intelligence (SIGINT) & Security Audits:</strong> Forensic analysts inspect spectrum sweeps to identify unauthorized burst transmissions, covert beacon signals, or acoustic steganography embedded in background streams.
            </li>
          </ul>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header font-weight-bold">
          Signal Encoding Grid (6×6 Frequency Matrix)
        </div>
        <div class="card-body">
          <p class="card-text">
            The signal consists of <strong>5 discrete tone bursts</strong> (each ~0.32 seconds long, separated by ~0.2s gaps). Each burst simultaneously transmits one <em>Low Frequency</em> tone and one <em>High Frequency</em> tone. Locate the peak frequencies of each burst on a spectrogram and look up the character in the matrix below:
          </p>
          <div class="table-responsive">
            <table class="table table-bordered table-sm text-center align-middle">
              <thead>
                <tr>
                  <th>Low \\ High Frequency</th>
                  <th>1209 Hz</th>
                  <th>1336 Hz</th>
                  <th>1477 Hz</th>
                  <th>1633 Hz</th>
                  <th>1777 Hz</th>
                  <th>1919 Hz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>697 Hz</th>
                  <td><strong>A</strong></td>
                  <td><strong>B</strong></td>
                  <td><strong>C</strong></td>
                  <td><strong>D</strong></td>
                  <td><strong>E</strong></td>
                  <td><strong>F</strong></td>
                </tr>
                <tr>
                  <th>770 Hz</th>
                  <td><strong>G</strong></td>
                  <td><strong>H</strong></td>
                  <td><strong>I</strong></td>
                  <td><strong>J</strong></td>
                  <td><strong>K</strong></td>
                  <td><strong>L</strong></td>
                </tr>
                <tr>
                  <th>852 Hz</th>
                  <td><strong>M</strong></td>
                  <td><strong>N</strong></td>
                  <td><strong>O</strong></td>
                  <td><strong>P</strong></td>
                  <td><strong>Q</strong></td>
                  <td><strong>R</strong></td>
                </tr>
                <tr>
                  <th>941 Hz</th>
                  <td><strong>S</strong></td>
                  <td><strong>T</strong></td>
                  <td><strong>U</strong></td>
                  <td><strong>V</strong></td>
                  <td><strong>W</strong></td>
                  <td><strong>X</strong></td>
                </tr>
                <tr>
                  <th>1040 Hz</th>
                  <td><strong>Y</strong></td>
                  <td><strong>Z</strong></td>
                  <td><strong>0</strong></td>
                  <td><strong>1</strong></td>
                  <td><strong>2</strong></td>
                  <td><strong>3</strong></td>
                </tr>
                <tr>
                  <th>1160 Hz</th>
                  <td><strong>4</strong></td>
                  <td><strong>5</strong></td>
                  <td><strong>6</strong></td>
                  <td><strong>7</strong></td>
                  <td><strong>8</strong></td>
                  <td><strong>9</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header font-weight-bold">
          Recommended Analysis Workflow (Python DSP Guide)
        </div>
        <div class="card-body">
          <ol class="mb-2">
            <li><strong>Download your WAV file:</strong> 16 kHz sample rate mono audio.</li>
            <li><strong>Generate a Spectrogram:</strong> Use <code>scipy.signal.spectrogram</code> or <code>matplotlib.pyplot.specgram</code> with <code>NFFT=2048</code> (or 1024) to get sharp frequency resolution between 600&nbsp;Hz and 2000&nbsp;Hz.</li>
            <li><strong>Identify Bursts:</strong> Look between 10&nbsp;s and 40&nbsp;s into the audio track. The decoy speech formants vary continuously in pitch, whereas modem bursts appear as 5 distinct pairs of perfectly horizontal, constant-frequency parallel bars.</li>
            <li><strong>Decode:</strong> Extract the exact (Low, High) frequency pair for each of the 5 bursts, look them up in the 6×6 grid above, and combine them into a 5-character token.</li>
          </ol>
          <details class="mt-2">
            <summary class="text-primary font-monospace" style="cursor: pointer;">Show Python Spectrogram Starter Code</summary>
            <pre class="p-3 border rounded mt-2 font-monospace"><code>import scipy.io.wavfile as wav
import matplotlib.pyplot as plt

# Load audio signal
sr, samples = wav.read("signal-capture.wav")

# Compute & plot spectrogram
plt.figure(figsize=(12, 6))
plt.specgram(samples, NFFT=2048, Fs=sr, noverlap=1024, cmap='viridis')
plt.ylim(500, 2100)  # Focus on modem frequency band
plt.xlabel('Time (seconds)')
plt.ylabel('Frequency (Hz)')
plt.title('Modem Signal Spectrogram')
plt.colorbar(label='Intensity (dB)')
plt.show()</code></pre>
          </details>
        </div>
      </div>

      <div class="p-3 border rounded mb-3">
        <h5>Download Signal & Submit Solution</h5>
        <p>
          <a class="btn btn-primary" href="${t}" download="${l.filename||"signal-capture.wav"}">
            Download Assigned WAV Audio File
          </a>
        </p>
        <p class="text-muted small">
          Re-downloading yields the identical signal for your user account. Submit the recovered 5-character string in uppercase (letters A–Z and digits 0–9, no spaces). Example format: <code>AB3F9</code>.
        </p>
        <div class="mb-3">
          <label for="${s}" class="form-label"><strong>Recovered 5-Character Code</strong></label>
          <input
            class="form-control form-control-lg font-monospace text-uppercase"
            id="${s}"
            name="${s}"
            placeholder="AB3F9"
            autocomplete="off"
            maxlength="5"
            pattern="[A-Za-z0-9]{5}"
            required
          />
        </div>
      </div>
    </div>
  `;return{id:s,title:u,weight:i,question:c,answer:n}}var qt=C(()=>{"use strict"});import{html as K,render as Nt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function _e(o,i){let e=K`<ol class="mt-3">
    ${o.map(({id:p,title:l,weight:t})=>K`<li><a href="#h${p}">${l}</a> (${t} ${t==1?"mark":"marks"})</li>`)}
  </ol>`,s=[K`<h1 class="display-6">Questions</h1>`,e,...o.map(({id:p,title:l,weight:t,question:n,help:c},r)=>(c&&!Array.isArray(c)&&(c=[c]),K`
        <div class="card my-5" data-question="${p}" id="h${p}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${r+1}</span>
            ${l} (${t} ${t==1?"mark":"marks"})
          </div>
          ${c?c.map(a=>K`<div class="card-body border-bottom">${a}</div>`):""}
          <div class="card-body">${n}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${p}">Check</button>
          </div>
        </div>
      `))],u={index:e,questions:s};for(let[p,l]of i)Nt(u[l],p)}import{unsafeHTML as Ft}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as Lt}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var $e="https://tds.s-anand.net",ke=o=>o&&!o.match(/^(https?|mailto):/),jt=new Lt({renderer:{image(o,i,e){return ke(o)&&(o=`${$e}/${o}`),`<img src="${o}" alt="${e}" ${i?`title="${i}"`:""} class="img-fluid" loading="lazy">`},link(o,i,e){return ke(o)&&(o=`${$e}/${o.endsWith(".md")?`#/${o.replace(/\.md$/,"")}`:o}`),`<a href="${o}" ${i?`title="${i}"`:""} target="_blank">${e}</a>`}}}),F=o=>Ft(jt.parse(o));async function _r(o,i){let e=[{...await Promise.resolve().then(()=>(Ee(),Ae)).then(s=>s.default({user:o,weight:1,version:"v1"})),help:[F(`
### Ask AI

- [How do I split an image into an exact grid of lossless NumPy or Pillow arrays?](#askai)
- [What are the eight D4 transformations of a square tile, and how can I enumerate them?](#askai)
- [How can I compare oriented tile edges using colour-distance or robust signature matching?](#askai)
- [How do I account for reversed edge sequences after rotations and reflections?](#askai)
- [How can I formulate image-tile assembly as a constraint-satisfaction or assignment problem?](#askai)
- [Why can greedy edge matching fail, and how can beam search or backtracking repair the layout?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ge(),Xe)).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI

- [How do I calculate the Macro-Mean of accuracy scores across 4 different models in Python?](#askai)
- [How can I efficiently search $2^{24}$ combinations considering model-specific sensitivities?](#askai)
- [Why do some models (like gpt-5-mini) exhibit negative contributions for certain 'reasoning' fragments?](#askai)
- [What is the benefit of a Performance Floor metric in prompt engineering robustness?](#askai)
- [How can I use bitmasks to enumerate combinations of prompt fragments efficiently?](#askai)
- [How should I break ties when several prompts meet the same robustness targets?](#askai)
        `)]},{...await Ze().then(()=>Ye).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI

- [How do I load and join multiple CSV files in DuckDB?](#askai)
- [How can I parse mixed date and timestamp formats in DuckDB?](#askai)
- [How do I calculate a linear regression slope and intercept with DuckDB SQL?](#askai)
- [What do DuckDB's REGR_SLOPE, REGR_INTERCEPT, and REGR_R2 functions return?](#askai)
- [How should I handle missing or invalid values before running a regression?](#askai)
- [How do I interpret the coefficients and R-squared value of a multiple linear regression?](#askai)
        `)]},{...await Promise.resolve().then(()=>(st(),nt)).then(s=>s.default({user:o,weight:1,version:"v1"})),help:[F(`
### Ask AI

- [How do Playwright locators traverse open shadow DOM, and when must I evaluate JavaScript manually?](#askai)
- [How do I wait for an asynchronously rendered page without using unreliable fixed sleeps?](#askai)
- [How should I scrape pagination when the final state is indicated by a disabled Next button?](#askai)
- [How do I reconcile CDC-style revisions by a compound ordering key before filtering?](#askai)
- [How can I parse ISO-8601 durations and mixed currency labels robustly?](#askai)
- [How is the nearest-rank percentile defined, and how does it differ from interpolated percentiles?](#askai)
        `)]},{...await Promise.resolve().then(()=>(ct(),it)).then(s=>s.default({user:o,weight:1,version:"v1"})),help:[F(`
### Ask AI

- [How do I read JSONL in DuckDB when one field contains stringified nested JSON?](#askai)
- [How can I normalize two JSON schema versions into one relation using CTEs?](#askai)
- [How do QUALIFY and ROW_NUMBER help select the latest CDC revision without pre-filtering?](#askai)
- [How do I unnest JSON arrays in DuckDB without multiplying invoice-level values accidentally?](#askai)
- [How does DuckDB ASOF JOIN select an effective-dated FX rate?](#askai)
- [How can I implement line-level half-up cent rounding without floating-point drift?](#askai)
- [How do I apply a deterministic lexical tie-break after ranking aggregate revenue?](#askai)
        `)]},{...await Promise.resolve().then(()=>(ht(),mt)).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI

- [How do I parse and apply robots.txt Disallow rules in Python with the standard library?](#askai)
- [How can I configure Scrapy to honour robots.txt Disallow rules when crawling a local server?](#askai)
- [How do I extract a JSON record embedded inside a script tag using Scrapy or BeautifulSoup?](#askai)
- [What is the correct way to sort records numerically by id before computing a hash?](#askai)
- [How do I compute a SHA-256 hash of a newline-joined list of JSON strings in Python?](#askai)
- [How can I serve a local directory as an HTTP server so Scrapy can fetch robots.txt?](#askai)
        `)]},{...await Promise.resolve().then(()=>(St(),xt)).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI
- [How do I crawl only selected category pages from a sidebar navigation using Scrapy or BeautifulSoup?](#askai)
- [How do I follow pagination within each category without scanning an entire catalog?](#askai)
- [How do I fetch detail pages for each listed item and parse availability text like In stock (19 available)?](#askai)
- [How do I decode star-rating CSS class names like Three into numeric ratings?](#askai)
- [How do I sort records by a computed score descending with a deterministic tie-break?](#askai)
- [How do I create a canonical JSON string with fixed decimal formatting and hash it with SHA-256?](#askai)
        `)]},{...await Promise.resolve().then(()=>(kt(),$t)).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI
- [How do I set up a GitHub Action to run Playwright tests?](#askai)
- [What is the difference between Playwright and Puppeteer for browser automation?](#askai)
- [How can I use Playwright to scrape data from websites in a GitHub Action?](#askai)
- [What are the best practices for handling dynamic content in Playwright?](#askai)
- [How do I debug Playwright scripts running in GitHub Actions?](#askai)
        `)]},{...await Promise.resolve().then(()=>(It(),Tt)).then(s=>s.default({user:o,weight:1})),help:[F(`
### Ask AI
- [How do I use Playwright to extract data from HTML tables?](#askai)
- [What methods does Playwright provide for table scraping?](#askai)
- [How do I handle pagination when scraping tables with Playwright?](#askai)
- [What are the advantages of using Playwright over traditional scraping libraries for tables?](#askai)
- [How do I sum values from a scraped table using Playwright?](#askai)
        `)]},{...await Promise.resolve().then(()=>(qt(),Dt)).then(s=>s.default({user:o,weight:1,version:"v1"})),help:[F(`
### Ask AI

- [How do I create and plot a high-resolution spectrogram from a WAV file in Python using scipy or matplotlib?](#askai)
- [How does Dual-Tone Multi-Frequency (DTMF) / FSK signal encoding work and how do I map frequency pairs to symbols?](#askai)
- [How can I detect short tone bursts and estimate peak frequencies using STFT or FFT analysis?](#askai)
- [How do I separate narrowband acoustic tones from background speech formants and broadband noise?](#askai)
- [What are real-world practical applications of acoustic modem signal processing in underwater telemetry and SIGINT?](#askai)
- [How do window size (NFFT) and hop length affect time vs frequency resolution in spectrogram analysis?](#askai)
        `)]}];return _e(e,i),Object.fromEntries(e.map(({id:s,...u})=>[s,u]))}export{_r as questions};
