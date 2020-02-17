(function () {var l={};Object.defineProperty(l,"__esModule",{value:!0});var F=void 0;function fa(t){return t}l.nothing=F;var ga=fa;function ha(t){return null==t}l.just=ga;var ia=ha;function ja(t){return null!=t}l.isNothing=ia;var ka=ja;l.isJust=ka;var c={};Object.defineProperty(c,"__esModule",{value:!0});function la($,r){for(var e=$.length,a=new Array(e),t=0;t<e;t++)a[t]=r($[t]);return a}var g=la;function ma($,r){for(var e=new Array,a=0,t=$;a<t.length;a++){var m=t[a];e.push.apply(e,r(m))}return e}c.map=g;var na=ma;function oa($){return $.length>0?$[0]:F}c.flatMap=na;var pa=oa;function qa($){return $.slice(1)}c.head=pa;var ra=qa;function G($,r,e){if($.length!==r.length)return!1;for(var a=0;a<$.length;a++)if(!e($[a],r[a]))return!1;return!0}c.tail=ra;var sa=G;function ta($){return function(r,e){return G(r,e,$)}}c.equals=sa;var ua=ta;function va($){return 0===$.length}c.makeEquals=ua;var wa=va;function xa($){return $.length>0}c.isEmpty=wa;var ya=xa;function za($,r){for(var e=[],a=0,t=$;a<t.length;a++){var m=t[a];r(m)&&e.push(m)}return e}c.hasValues=ya;var Aa=za;function Ba($){var r;return(r=[]).concat.apply(r,$)}c.filter=Aa;var Ca=Ba;function Da($,r,e){for(var a=0,t=$;a<t.length;a++){e=r(e,t[a])}return e}c.flatten=Ca;var Ea=Da;function Fa($,r){for(var e=0,a=$;e<a.length;e++){if(!r(a[e]))return!1}return!0}c.foldLeft=Ea;var Ga=Fa;function Ha($,r){for(var e=0,a=$;e<a.length;e++){if(r(a[e]))return!0}return!1}c.all=Ga;var Ia=Ha;function Ja($,r){for(var e=0,a=$;e<a.length;e++){r(a[e])}}c.any=Ia;var Ka=Ja;function La(){for(var $,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return($=[]).concat.apply($,r)}c.each=Ka;var Ma=La;function Na($,r){return void 0===r&&(r=!0),function(e,a){if(e.length<a.length)return-1*(r?1:-1);if(e.length>a.length)return 1*(r?1:-1);for(var t=0;t<e.length;t++){var m=$(e[t],a[t]);if(0!==m)return m}return 0}}c.concat=Ma;var Oa=Na;function Pa($,r){return r.slice().sort($)}c.makeCompare=Oa;var Qa=Pa;function t($,r){for(var e=new Array($),a=0;a<$;a++)e[a]=r(a);return e}c.sort=Qa;var Ra=t;function Sa($,r){return void 0===r&&(r=0),t($,function($){return r+$})}c.range=Ra;var Ta=Sa;function Ua($,r){return t($,function(){return r})}c.numbersRange=Ta;var Va=Ua;c.fill=Va;var e={};Object.defineProperty(e,"__esModule",{value:!0});function Wa(t,e,r){var $=t.style;$[e]=null==r?null:r}var v=Wa;function f(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}e.setOneStyle=v;var H=f;function Xa(t,e,r){var $=t;$[e]=null==r?null:r}e.setAttribute=H;var I=Xa;function Ya(t,e,r){if(null==r)t.removeAttribute(e);else if("string"==typeof r)f(t,e,r);else{var $=g(Object.keys(r),function(t){return t+": "+r[t]+";"}).join(" ");f(t,e,$.length&&$||null)}}e.setProperty=I;var J=Ya;function Za(t,e,r){var $=t;if(null==r)$[e]=null;else{var E=!0===r||"true"===r;$[e]=E}}e.setStyleAttribute=J;var m=Za;function $a(t,e,r){f(t,e,!0===r||"true"===r?"true":!1===r?"false":null)}e.setBoolProperty=m;var x=$a;function _a(t,e,r){f(t,e,!0===r||"true"===r?"":null)}e.setEnumBoolAttribute=x;var d=_a;function ab(t,e,r){Array.isArray(r)?f(t,e,r.join(", ")||null):f(t,e,r&&String(r)||null)}e.setBoolAttribute=d;var y=ab;function bb(t,e,r){Array.isArray(r)?f(t,e,r.join(" ")||null):f(t,e,r&&String(r)||null)}e.setCommaSeparated=y;var i=bb;e.setSpaceSeparated=i;var z={};Object.defineProperty(z,"__esModule",{value:!0});var K={acceptcharset:"accept-charset",asattr:"as",classname:"class",httpequiv:"http-equiv",htmlfor:"for"};z.attributeNameMap=K;var L={"accept-charset":i,class:i,acceptcharset:i,async:d,autofocus:d,autoplay:d,checked:m,contenteditable:x,controls:d,default:d,defer:d,disabled:d,draggable:x,formnovalidate:d,headers:i,hidden:d,ismap:d,itemscope:d,loop:d,multiple:m,muted:m,nomodule:d,novalidate:d,open:d,ping:i,playsinline:d,readonly:d,rel:i,required:d,reversed:d,selected:m,sizes:y,srcset:y,style:J,typemustmatch:d,value:I};z.htmlAttributeMap=L;var M={};Object.defineProperty(M,"__esModule",{value:!0});var cb=function(){function e(e){this.makeContent=e}return e.prototype.render=function(e,t){var r=this.makeContent,n=r(t)||"",o=e.doc.createTextNode(n);return e.append(o),{change:function(e){var t=r(e)||"";t!==n&&(o.nodeValue=t,t.length<5e3&&(n=t))},destroy:function(){q(o)},request:function(e){}}},e}(),db=function(){function e(e){this.content=e}return e.prototype.render=function(e,t){var r=e.doc.createTextNode(this.content);return e.append(r),{change:function(e){},destroy:function(){q(r)},request:function(e){}}},e}();function eb(e){return"function"==typeof e?new cb(e):new db(e||"")}var N=eb;M.text=N;var h={};Object.defineProperty(h,"__esModule",{value:!0});function fb(e){var t=e;t&&t.onblur&&(t.onblur=null),e&&void 0!==e.ownerDocument&&e.parentElement&&e.parentElement.removeChild(e)}var q=fb;function gb(e){return function(t){null!=e.parentElement&&e.parentElement.insertBefore(t,e)}}h.removeNode=q;var O=gb;function hb(e){return"string"==typeof e||"function"==typeof e||void 0===e?N(e):e}h.insertFBefore=O;var k=hb;function ib(e,t,r,n){var $=L[t]||H;if("function"==typeof r){if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var o=function(n){var o=r(n);$(e,t,o)};n.push(o)}else{var a=void 0;o=function(n){var o=r(n);o!==a&&($(e,t,o),String(o).length<5e4&&(a=o))};n.push(o)}}else $(e,t,r);return n}h.domChildToTemplate=k;var P=ib;function jb(e,t,r,n,$){var o;e[t]=function(t){var $=r(o,t,e);void 0!==$&&n($)};return $.push(function(e){o=e}),$}h.processAttribute=P;var Q=jb;function kb(e,t,r,n){if("function"==typeof r){var $;n.push(function(n){var o=r(n);o!==$&&(v(e,t,o),$=o)})}else v(e,t,r);return n}h.processEvent=Q;var R=kb;function lb(e){for(var t=[],r=0;r<e.children.length;r++){var n=e.children[r];t[r]=n.style.display,n.style.display="none"}var $={width:e.offsetWidth,height:e.offsetHeight};for(r=0;r<e.children.length;r++){(n=e.children[r]).style.display=t[r]}return $}h.processStyle=R;var mb=lb;h.containerSize=mb;var S={};Object.defineProperty(S,"__esModule",{value:!0});var nb=function(){function e(e,r,t){this.store=e,this.children=r,this.delayed=t}return e.prototype.render=function(e,r){var t;if(this.delayed){var o=!0;t=function(e){o&&(o=!1,setTimeout(function(){i.change(e),o=!0}))}}else t=function(e){i.change(e)};var n=this.store,a=n.property;a.observable.on(t);var $=e.withDispatch(function(e){n.process(e)}),s=g(this.children,function(e){return e.render($,a.get())}),i={change:function(e){n.property.set(e);for(var r=0,t=s;r<t.length;r++){t[r].change(e)}},destroy:function(){a.observable.off(t);for(var e=0,r=s;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,t=s;r<t.length;r++){t[r].request(e)}}};return a.set(r),i},e}();function ob(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new nb(e.store,g(r,k),e.delayed||!1)}var T=ob;S.component=T;var U={};Object.defineProperty(U,"__esModule",{value:!0});var pb=function(){function t(t,e,n,r){this.doc=t,this.append=e,this.parent=n,this.dispatch=r}return t.fromElement=function(e,n){return new t(e.ownerDocument||window&&window.document,function(t){return e.appendChild(t)},e,n)},t.prototype.mapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){return n.dispatch(e(t))})},t.prototype.conditionalMapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){var r=e(t);void 0!==r&&n.dispatch(r)})},t.prototype.withAppendToReference=function(t){var e=this.doc.createComment(t||"t:ref");return this.append(e),{ctx:this.withAppend(O(e)),ref:e}},t.prototype.withAppend=function(e){return new t(this.doc,e,this.parent,this.dispatch)},t.prototype.withParent=function(e){return new t(this.doc,this.append,e,this.dispatch)},t.prototype.withDispatch=function(e){return new t(this.doc,this.append,this.parent,e)},t}(),V=pb;U.DOMContext=V;var W={};Object.defineProperty(W,"__esModule",{value:!0});var A={renderComponent:function(e){var o=e.el,t=e.component,n=t.store,r=e.document||document,$=o||r.body;return{view:t.render(new V(r,function(e){return $.appendChild(e)},$,function(){}),n.property.get()),store:n}},render:function(e){var o=e.el,t=e.store,n=e.document,r=e.template,$=e.delayed,p=T({store:t,delayed:$},r);return A.renderComponent({el:o,component:p,document:n})}};W.Tempo=A;var j={};Object.defineProperty(j,"__esModule",{value:!0});var Y=function(e,r,t){return function(a,$){return e(a,r,t,$)}},qb=function(e,r,t,a){return void 0!==typeof e?e(a,r,t):void 0},n=function(){function e(e,r,t,a,$,b,n,o,s,v){this.createElement=e,this.attrs=r,this.events=t,this.styles=a,this.afterrender=$,this.beforechange=b,this.afterchange=n,this.beforedestroy=o,this.respond=s,this.children=v}return e.prototype.render=function(e,r){for(var t=this,a=this.createElement(e.doc),$=void 0,b=[],n=0,o=this.attrs;n<o.length;n++){var s=o[n];P(a,s.name,s.value,b)}for(var v=0,l=this.events;v<l.length;v++){s=l[v];Q(a,s.name,s.value,e.dispatch,b)}for(var L=0,c=this.styles;L<c.length;L++){s=c[L];R(a,s.name,s.value,b)}for(var u=0,X=b;u<X.length;u++){(0,X[u])(r)}var i=e.withAppend(function(e){return a.appendChild(e)}).withParent(a),p=g(this.children,function(e){return e.render(i,r)});e.append(a),this.afterrender&&($=qb(this.afterrender,a,e,r));var f=g(p,function(e){return function(r){return e.change(r)}});if(b.push.apply(b,f),this.beforechange){var h=Y(this.beforechange,a,e),m=function(e){$=h(e,$)};b.unshift(m)}if(this.afterchange){var d=Y(this.afterchange,a,e);m=function(e){$=d(e,$)};b.push(m)}var y=this.beforedestroy&&function(){return t.beforedestroy(a,e,$)},x=this.respond;return{change:function(e){for(var r=0,t=b;r<t.length;r++){(0,t[r])(e)}},destroy:function(){y&&y(),q(a);for(var e=0,r=p;e<r.length;e++){r[e].destroy()}},request:function(r){x&&($=x(r,a,e,$));for(var t=0,b=p;t<b.length;t++){b[t].request(r)}}}},e}(),rb=n;function p(e){return g(Object.keys(e||{}),function(r){var t=r.toLowerCase();return{name:t=K[t]||t,value:e[r]}})}function s(e){return g(Object.keys(e||{}),function(r){return{name:"on"+r.toLowerCase(),value:e[r]}})}function u(e){return g(Object.keys(e||{}),function(r){return{name:r,value:e[r]}})}j.DOMElement=rb;var X=function(e){return function(r){return r.createElement(e)}};function sb(e,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];return new n(X(e),p(r.attrs),s(r.events),u(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(t,k))}var tb=sb;function ub(e){return function(r){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new n(X(e),p(r.attrs),s(r.events),u(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(t,k))}}j.el=tb;var a=ub;j.el2=a;var Z={svg:"http://www.w3.org/2000/svg"};j.defaultNamespaces=Z;var _=function(e,r){return function(t){return t.createElementNS(e,r)}};function vb(e,r,t){for(var a=[],$=3;$<arguments.length;$++)a[$-3]=arguments[$];var b=Z[e]||e;return new n(_(b,r),p(t.attrs),s(t.events),u(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(a,k))}var wb=vb;function xb(e,r){return function(t){for(var a=[],$=1;$<arguments.length;$++)a[$-1]=arguments[$];return new n(_(e,r),p(t.attrs),s(t.events),u(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(a,k))}}j.elNS=wb;var yb=xb;j.elNS2=yb;var b={};Object.defineProperty(b,"__esModule",{value:!0});var zb=a("a");b.a=zb;var Ab=a("abbr");b.abbr=Ab;var Bb=a("address");b.address=Bb;var Cb=a("applet");b.applet=Cb;var Db=a("area");b.area=Db;var Eb=a("article");b.article=Eb;var Fb=a("aside");b.aside=Fb;var Gb=a("audio");b.audio=Gb;var Hb=a("b");b.b=Hb;var Ib=a("base");b.base=Ib;var Jb=a("basefont");b.basefont=Jb;var Kb=a("bdi");b.bdi=Kb;var Lb=a("bdo");b.bdo=Lb;var Mb=a("blockquote");b.blockquote=Mb;var Nb=a("body");b.body=Nb;var Ob=a("br");b.br=Ob;var B=a("button");b.button=B;var Pb=a("canvas");b.canvas=Pb;var Qb=a("caption");b.caption=Qb;var Rb=a("cite");b.cite=Rb;var Sb=a("code");b.code=Sb;var Tb=a("col");b.col=Tb;var Ub=a("colgroup");b.colgroup=Ub;var Vb=a("data");b.data=Vb;var Wb=a("datalist");b.datalist=Wb;var Xb=a("dd");b.dd=Xb;var Yb=a("del");b.del=Yb;var Zb=a("details");b.details=Zb;var $b=a("dfn");b.dfn=$b;var _b=a("dialog");b.dialog=_b;var ac=a("dir");b.dir=ac;var o=a("div");b.div=o;var bc=a("dl");b.dl=bc;var cc=a("dt");b.dt=cc;var dc=a("em");b.em=dc;var ec=a("embed");b.embed=ec;var fc=a("fieldset");b.fieldset=fc;var gc=a("figcaption");b.figcaption=gc;var hc=a("figure");b.figure=hc;var ic=a("font");b.font=ic;var jc=a("footer");b.footer=jc;var kc=a("form");b.form=kc;var lc=a("frame");b.frame=lc;var mc=a("frameset");b.frameset=mc;var nc=a("h1");b.h1=nc;var oc=a("h2");b.h2=oc;var pc=a("h3");b.h3=pc;var qc=a("h4");b.h4=qc;var rc=a("h5");b.h5=rc;var sc=a("h6");b.h6=sc;var tc=a("head");b.head=tc;var uc=a("header");b.header=uc;var vc=a("hgroup");b.hgroup=vc;var wc=a("hr");b.hr=wc;var xc=a("html");b.html=xc;var yc=a("i");b.i=yc;var zc=a("iframe");b.iframe=zc;var Ac=a("img");b.img=Ac;var Bc=a("input");b.input=Bc;var Cc=a("ins");b.ins=Cc;var Dc=a("kbd");b.kbd=Dc;var Ec=a("label");b.label=Ec;var Fc=a("legend");b.legend=Fc;var Gc=a("li");b.li=Gc;var Hc=a("link");b.link=Hc;var Ic=a("listing");b.listing=Ic;var Jc=a("main");b.main=Jc;var Kc=a("map");b.map=Kc;var Lc=a("mark");b.mark=Lc;var Mc=a("marquee");b.marquee=Mc;var Nc=a("menu");b.menu=Nc;var Oc=a("meta");b.meta=Oc;var Pc=a("meter");b.meter=Pc;var Qc=a("nav");b.nav=Qc;var Rc=a("noscript");b.noscript=Rc;var Sc=a("object");b.object=Sc;var Tc=a("ol");b.ol=Tc;var Uc=a("optgroup");b.optgroup=Uc;var Vc=a("option");b.option=Vc;var Wc=a("output");b.output=Wc;var Xc=a("p");b.p=Xc;var Yc=a("param");b.param=Yc;var Zc=a("picture");b.picture=Zc;var $c=a("pre");b.pre=$c;var _c=a("progress");b.progress=_c;var ad=a("q");b.q=ad;var bd=a("rp");b.rp=bd;var cd=a("rt");b.rt=cd;var dd=a("ruby");b.ruby=dd;var ed=a("s");b.s=ed;var fd=a("samp");b.samp=fd;var gd=a("script");b.script=gd;var hd=a("section");b.section=hd;var id=a("select");b.select=id;var jd=a("slot");b.slot=jd;var kd=a("small");b.small=kd;var ld=a("source");b.source=ld;var md=a("span");b.span=md;var nd=a("strong");b.strong=nd;var od=a("style");b.style=od;var pd=a("sub");b.sub=pd;var qd=a("summary");b.summary=qd;var rd=a("sup");b.sup=rd;var sd=a("table");b.table=sd;var td=a("tbody");b.tbody=td;var ud=a("td");b.td=ud;var vd=a("template");b.template=vd;var wd=a("textarea");b.textarea=wd;var xd=a("tfoot");b.tfoot=xd;var yd=a("th");b.th=yd;var zd=a("thead");b.thead=zd;var Ad=a("time");b.time=Ad;var Bd=a("title");b.title=Bd;var Cd=a("tr");b.tr=Cd;var Dd=a("track");b.track=Dd;var Ed=a("u");b.u=Ed;var Fd=a("ul");b.ul=Fd;var Gd=a("var");b.varEl=Gd;var Hd=a("video");b.video=Hd;var Id=a("wbr");b.wbr=Id;var Jd=a("xmp");b.xmp=Jd;var r={};Object.defineProperty(r,"__esModule",{value:!0});var Kd=function(){function e(){this.listeners=[]}return e.ofOne=function(){return new e},e.ofTwo=function(){return new e},e.ofThree=function(){return new e},e.ofFour=function(){return new e},e.ofFive=function(){return new e},e.ofSix=function(){return new e},e.prototype.emit=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=this.listeners;n<r.length;n++){r[n].apply(void 0,e)}},e.prototype.on=function(e){this.listeners.push(e)},e.prototype.off=function(e){var t=this.listeners.indexOf(e);return!(t<0)&&(this.listeners.splice(t,1),!0)},e.prototype.once=function(e){var t=this,n=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t.off(n),e.apply(void 0,r)};this.on(n)},e}(),C=Kd;function Ld(e){return function(t){var n,r=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n=o,r||(r=!0,setTimeout(function(){r=!1,t.apply(void 0,n)},e))}}}r.Emitter=C;var Md=Ld;function Nd(e){var t,n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t=r,n||(n=!0,requestAnimationFrame(function(){n=!1,e.apply(void 0,t)}))}}r.debounce=Md;var Od=Nd;r.nextFrame=Od;var D={};function aa(r,e){return r===e||r!=r&&e!=e}Object.defineProperty(D,"__esModule",{value:!0});var $=aa;function w(r,e){if(aa(r,e))return!0;if(null==r||null==e)return!1;var t=Array.isArray(r);if(t!==Array.isArray(e))return!1;if(t){var a=r,f=e;if((R=a.length)!==f.length)return!1;for(var n=0;n<R;n++)if(!w(a[n],f[n]))return!1;return!0}var u=r instanceof Date;if(u!==e instanceof Date)return!1;if(u)return+r==+e;var i=r instanceof Set;if(i!==e instanceof Set)return!1;if(i){var $=r,o=e;if($.size!==o.size)return!1;for(var s=$.keys();;){if((p=s.next()).done)break;if(!o.has(p.value))return!1}return!0}var v=r instanceof Map;if(v!==e instanceof Map)return!1;if(v){var d=r,y=e;if(d.size!==y.size)return!1;for(var l=d.keys();;){var p;if((p=l.next()).done)break;if(!w(d.get(p.value),y.get(p.value)))return!1}return!0}var c="object"==typeof r;if(c!==("object"==typeof e))return!1;if(c){var R,q=r,E=e,x=Object.keys(q),b=Object.keys(E);if((R=x.length)!==b.length)return!1;for(n=0;n<R;n++){var g=x[n];if(!E.hasOwnProperty(g))return!1;if(!w(q[g],E[g]))return!1}return!0}return!1}D.strictEqual=$;var Pd=w;D.deepEqual=Pd;var ba={};Object.defineProperty(ba,"__esModule",{value:!0});var Qd=function(){function e(e,t){void 0===t&&(t=$),this.value=e,this.equal=t,this.observable=this.emitter=C.ofOne()}return e.prototype.set=function(e){return!this.equal(this.value,e)&&(this.value=e,this.emit(this.value),!0)},e.prototype.get=function(){return this.value},e.prototype.emit=function(e){this.emitter.emit(e)},e}(),ca=Qd;ba.Property=ca;var da={};Object.defineProperty(da,"__esModule",{value:!0});var Rd=function(){function r(r,e){this.property=r,this.reducer=e,this.observable=this.emitter=C.ofFour()}return r.ofState=function(e){return new r(new ca(e.state,e.equal),e.reducer)},r.prototype.process=function(r){var e=this.property.get(),t=this.reducer(e,r),$=this.property.set(t);return this.emitter.emit(t,r,e,$),$},r}(),ea=Rd;da.Store=ea;var E={};Object.defineProperty(E,"__esModule",{value:!0});var Sd=0,Td=function(t,e){switch(e){case"increment":return t+1;case"decrement":return t-1;default:throw"this should never happen";}},Ud=ea.ofState({state:Sd,reducer:Td}),Vd=o({attrs:{class:"app"}},o({attrs:{class:"count count-small"}},"count"),o({attrs:{class:"count"}},String),o({attrs:{class:"buttons"}},B({events:{click:function(){return"decrement"}},attrs:{disabled:function(t){return t<=0}}},"-"),B({events:{click:function(){return"increment"}}},"+")));A.render({store:Ud,template:Vd});if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=E}else if(typeof define==="function"&&define.amd){define(function(){return E})}})();