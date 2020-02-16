(function () {var p={};Object.defineProperty(p,"__esModule",{value:!0});var U=void 0;function Zd(t){return t}p.nothing=U;var pa=Zd;function gb(t){return null==t}p.just=pa;var Bd=gb;function Dd(t){return null!=t}p.isNothing=Bd;var Ld=Dd;p.isJust=Ld;var c={};Object.defineProperty(c,"__esModule",{value:!0});function Xd($,r){for(var e=$.length,a=new Array(e),t=0;t<e;t++)a[t]=r($[t]);return a}var g=Xd;function ae($,r){for(var e=new Array,a=0,t=$;a<t.length;a++){var m=t[a];e.push.apply(e,r(m))}return e}c.map=g;var de=ae;function ge($){return $.length>0?$[0]:U}c.flatMap=de;var la=ge;function na($){return $.slice(1)}c.head=la;var oa=na;function ea($,r,e){if($.length!==r.length)return!1;for(var a=0;a<$.length;a++)if(!e($[a],r[a]))return!1;return!0}c.tail=oa;var qa=ea;function ra($){return function(r,e){return ea(r,e,$)}}c.equals=qa;var va=ra;function wa($){return 0===$.length}c.makeEquals=va;var ya=wa;function Aa($){return $.length>0}c.isEmpty=ya;var Ca=Aa;function Ea($,r){for(var e=[],a=0,t=$;a<t.length;a++){var m=t[a];r(m)&&e.push(m)}return e}c.hasValues=Ca;var Ga=Ea;function Ia($){var r;return(r=[]).concat.apply(r,$)}c.filter=Ga;var La=Ia;function Oa($,r,e){for(var a=0,t=$;a<t.length;a++){e=r(e,t[a])}return e}c.flatten=La;var Pa=Oa;function Ra($,r){for(var e=0,a=$;e<a.length;e++){if(!r(a[e]))return!1}return!0}c.foldLeft=Pa;var Sa=Ra;function Ta($,r){for(var e=0,a=$;e<a.length;e++){if(r(a[e]))return!0}return!1}c.all=Sa;var Ua=Ta;function Va($,r){for(var e=0,a=$;e<a.length;e++){r(a[e])}}c.any=Ua;var Xa=Va;function Za(){for(var $,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return($=[]).concat.apply($,r)}c.each=Xa;var $a=Za;function _a($,r){return void 0===r&&(r=!0),function(e,a){if(e.length<a.length)return-1*(r?1:-1);if(e.length>a.length)return 1*(r?1:-1);for(var t=0;t<e.length;t++){var m=$(e[t],a[t]);if(0!==m)return m}return 0}}c.concat=$a;var ab=_a;function eb($,r){return r.slice().sort($)}c.makeCompare=ab;var fb=eb;function t($,r){for(var e=new Array($),a=0;a<$;a++)e[a]=r(a);return e}c.sort=fb;var lb=t;function Cb($,r){return void 0===r&&(r=0),t($,function($){return r+$})}c.range=lb;var Hb=Cb;function Rb($,r){return t($,function(){return r})}c.numbersRange=Hb;var zd=Rb;c.fill=zd;var e={};Object.defineProperty(e,"__esModule",{value:!0});function Cd(t,e,r){var $=t.style;$[e]=null==r?null:r}var D=Cd;function i(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}e.setOneStyle=D;var ba=i;function Sd(t,e,r){var $=t;$[e]=null==r?null:r}e.setAttribute=ba;var aa=Sd;function Yd(t,e,r){if(null==r)t.removeAttribute(e);else if("string"==typeof r)i(t,e,r);else{var $=g(Object.keys(r),function(t){return t+": "+r[t]+";"}).join(" ");i(t,e,$.length&&$||null)}}e.setProperty=aa;var _=Yd;function $d(t,e,r){var $=t;if(null==r)$[e]=null;else{var E=!0===r||"true"===r;$[e]=E}}e.setStyleAttribute=_;var m=$d;function ce(t,e,r){i(t,e,!0===r||"true"===r?"true":!1===r?"false":null)}e.setBoolProperty=m;var F=ce;function fe(t,e,r){i(t,e,!0===r||"true"===r?"":null)}e.setEnumBoolAttribute=F;var d=fe;function ka(t,e,r){Array.isArray(r)?i(t,e,r.join(", ")||null):i(t,e,r&&String(r)||null)}e.setBoolAttribute=d;var v=ka;function ma(t,e,r){Array.isArray(r)?i(t,e,r.join(" ")||null):i(t,e,r&&String(r)||null)}e.setCommaSeparated=v;var l=ma;e.setSpaceSeparated=l;var y={};Object.defineProperty(y,"__esModule",{value:!0});var G={acceptcharset:"accept-charset",asattr:"as",classname:"class",httpequiv:"http-equiv",htmlfor:"for"};y.attributeNameMap=G;var V={"accept-charset":l,class:l,acceptcharset:l,async:d,autofocus:d,autoplay:d,checked:m,contenteditable:F,controls:d,default:d,defer:d,disabled:d,draggable:F,formnovalidate:d,headers:l,hidden:d,ismap:d,itemscope:d,loop:d,multiple:m,muted:m,nomodule:d,novalidate:d,open:d,ping:l,playsinline:d,readonly:d,rel:l,required:d,reversed:d,selected:m,sizes:v,srcset:v,style:_,typemustmatch:d,value:aa};y.htmlAttributeMap=V;var T={};Object.defineProperty(T,"__esModule",{value:!0});var sa=function(){function e(e){this.makeContent=e}return e.prototype.render=function(e,t){var r=this.makeContent,n=r(t)||"",o=e.doc.createTextNode(n);return e.append(o),{change:function(e){var t=r(e)||"";t!==n&&(o.nodeValue=t,t.length<5e3&&(n=t))},destroy:function(){z(o)},request:function(e){}}},e}(),ta=function(){function e(e){this.content=e}return e.prototype.render=function(e,t){var r=e.doc.createTextNode(this.content);return e.append(r),{change:function(e){},destroy:function(){z(r)},request:function(e){}}},e}();function ua(e){return"function"==typeof e?new sa(e):new ta(e||"")}var S=ua;T.text=S;var j={};Object.defineProperty(j,"__esModule",{value:!0});function xa(e){var t=e;t&&t.onblur&&(t.onblur=null),e&&void 0!==e.ownerDocument&&e.parentElement&&e.parentElement.removeChild(e)}var z=xa;function za(e){return function(t){null!=e.parentElement&&e.parentElement.insertBefore(t,e)}}j.removeNode=z;var P=za;function Ba(e){return"string"==typeof e||"function"==typeof e||void 0===e?S(e):e}j.insertFBefore=P;var f=Ba;function Da(e,t,r,n){var $=V[t]||ba;if("function"==typeof r){if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var o=function(n){var o=r(n);$(e,t,o)};n.push(o)}else{var a=void 0;o=function(n){var o=r(n);o!==a&&($(e,t,o),String(o).length<5e4&&(a=o))};n.push(o)}}else $(e,t,r);return n}j.domChildToTemplate=f;var O=Da;function Fa(e,t,r,n,$){var o;e[t]=function(t){var $=r(o,t,e);void 0!==$&&n($)};return $.push(function(e){o=e}),$}j.processAttribute=O;var N=Fa;function Ha(e,t,r,n){if("function"==typeof r){var $;n.push(function(n){var o=r(n);o!==$&&(D(e,t,o),$=o)})}else D(e,t,r);return n}j.processEvent=N;var M=Ha;function Ja(e){for(var t=[],r=0;r<e.children.length;r++){var n=e.children[r];t[r]=n.style.display,n.style.display="none"}var $={width:e.offsetWidth,height:e.offsetHeight};for(r=0;r<e.children.length;r++){(n=e.children[r]).style.display=t[r]}return $}j.processStyle=M;var Ka=Ja;j.containerSize=Ka;var K={};Object.defineProperty(K,"__esModule",{value:!0});var Ma=function(){function e(e,r,t){this.store=e,this.children=r,this.delayed=t}return e.prototype.render=function(e,r){var t;if(this.delayed){var o=!0;t=function(e){o&&(o=!1,setTimeout(function(){i.change(e),o=!0}))}}else t=function(e){i.change(e)};var n=this.store,a=n.property;a.observable.on(t);var $=e.withDispatch(function(e){n.process(e)}),s=g(this.children,function(e){return e.render($,a.get())}),i={change:function(e){n.property.set(e);for(var r=0,t=s;r<t.length;r++){t[r].change(e)}},destroy:function(){a.observable.off(t);for(var e=0,r=s;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,t=s;r<t.length;r++){t[r].request(e)}}};return a.set(r),i},e}();function Na(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new Ma(e.store,g(r,f),e.delayed||!1)}var I=Na;K.component=I;var W={};Object.defineProperty(W,"__esModule",{value:!0});var Qa=function(){function t(t,e,n,r){this.doc=t,this.append=e,this.parent=n,this.dispatch=r}return t.fromElement=function(e,n){return new t(e.ownerDocument||window&&window.document,function(t){return e.appendChild(t)},e,n)},t.prototype.mapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){return n.dispatch(e(t))})},t.prototype.conditionalMapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){var r=e(t);void 0!==r&&n.dispatch(r)})},t.prototype.withAppendToReference=function(t){var e=this.doc.createComment(t||"t:ref");return this.append(e),{ctx:this.withAppend(P(e)),ref:e}},t.prototype.withAppend=function(e){return new t(this.doc,e,this.parent,this.dispatch)},t.prototype.withParent=function(e){return new t(this.doc,this.append,e,this.dispatch)},t.prototype.withDispatch=function(e){return new t(this.doc,this.append,this.parent,e)},t}(),H=Qa;W.DOMContext=H;var ja={};Object.defineProperty(ja,"__esModule",{value:!0});var E={renderComponent:function(e){var o=e.el,t=e.component,n=t.store,r=e.document||document,$=o||r.body;return{view:t.render(new H(r,function(e){return $.appendChild(e)},$,function(){}),n.property.get()),store:n}},render:function(e){var o=e.el,t=e.store,n=e.document,r=e.template,$=e.delayed,p=I({store:t,delayed:$},r);return E.renderComponent({el:o,component:p,document:n})}};ja.Tempo=E;var k={};Object.defineProperty(k,"__esModule",{value:!0});var J=function(e,r,t){return function(a,$){return e(a,r,t,$)}},Wa=function(e,r,t,a){return void 0!==typeof e?e(a,r,t):void 0},o=function(){function e(e,r,t,a,$,b,n,o,s,v){this.createElement=e,this.attrs=r,this.events=t,this.styles=a,this.afterrender=$,this.beforechange=b,this.afterchange=n,this.beforedestroy=o,this.respond=s,this.children=v}return e.prototype.render=function(e,r){for(var t=this,a=this.createElement(e.doc),$=void 0,b=[],n=0,o=this.attrs;n<o.length;n++){var s=o[n];O(a,s.name,s.value,b)}for(var v=0,l=this.events;v<l.length;v++){s=l[v];N(a,s.name,s.value,e.dispatch,b)}for(var L=0,c=this.styles;L<c.length;L++){s=c[L];M(a,s.name,s.value,b)}for(var u=0,X=b;u<X.length;u++){(0,X[u])(r)}var i=e.withAppend(function(e){return a.appendChild(e)}).withParent(a),p=g(this.children,function(e){return e.render(i,r)});e.append(a),this.afterrender&&($=Wa(this.afterrender,a,e,r));var f=g(p,function(e){return function(r){return e.change(r)}});if(b.push.apply(b,f),this.beforechange){var h=J(this.beforechange,a,e),m=function(e){$=h(e,$)};b.unshift(m)}if(this.afterchange){var d=J(this.afterchange,a,e);m=function(e){$=d(e,$)};b.push(m)}var y=this.beforedestroy&&function(){return t.beforedestroy(a,e,$)},x=this.respond;return{change:function(e){for(var r=0,t=b;r<t.length;r++){(0,t[r])(e)}},destroy:function(){y&&y(),z(a);for(var e=0,r=p;e<r.length;e++){r[e].destroy()}},request:function(r){x&&($=x(r,a,e,$));for(var t=0,b=p;t<b.length;t++){b[t].request(r)}}}},e}(),Ya=o;function u(e){return g(Object.keys(e||{}),function(r){var t=r.toLowerCase();return{name:t=G[t]||t,value:e[r]}})}function s(e){return g(Object.keys(e||{}),function(r){return{name:"on"+r.toLowerCase(),value:e[r]}})}function q(e){return g(Object.keys(e||{}),function(r){return{name:r,value:e[r]}})}k.DOMElement=Ya;var L=function(e){return function(r){return r.createElement(e)}};function bb(e,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];return new o(L(e),u(r.attrs),s(r.events),q(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(t,f))}var cb=bb;function db(e){return function(r){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new o(L(e),u(r.attrs),s(r.events),q(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(t,f))}}k.el=cb;var b=db;k.el2=b;var Q={svg:"http://www.w3.org/2000/svg"};k.defaultNamespaces=Q;var R=function(e,r){return function(t){return t.createElementNS(e,r)}};function hb(e,r,t){for(var a=[],$=3;$<arguments.length;$++)a[$-3]=arguments[$];var b=Q[e]||e;return new o(R(b,r),u(t.attrs),s(t.events),q(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(a,f))}var ib=hb;function jb(e,r){return function(t){for(var a=[],$=1;$<arguments.length;$++)a[$-1]=arguments[$];return new o(R(e,r),u(t.attrs),s(t.events),q(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(a,f))}}k.elNS=ib;var kb=jb;k.elNS2=kb;var a={};Object.defineProperty(a,"__esModule",{value:!0});var mb=b("a");a.a=mb;var nb=b("abbr");a.abbr=nb;var ob=b("address");a.address=ob;var pb=b("applet");a.applet=pb;var qb=b("area");a.area=qb;var rb=b("article");a.article=rb;var sb=b("aside");a.aside=sb;var tb=b("audio");a.audio=tb;var ub=b("b");a.b=ub;var vb=b("base");a.base=vb;var wb=b("basefont");a.basefont=wb;var xb=b("bdi");a.bdi=xb;var yb=b("bdo");a.bdo=yb;var zb=b("blockquote");a.blockquote=zb;var Ab=b("body");a.body=Ab;var Bb=b("br");a.br=Bb;var C=b("button");a.button=C;var Db=b("canvas");a.canvas=Db;var Eb=b("caption");a.caption=Eb;var Fb=b("cite");a.cite=Fb;var Gb=b("code");a.code=Gb;var me=b("col");a.col=me;var Ib=b("colgroup");a.colgroup=Ib;var Jb=b("data");a.data=Jb;var Kb=b("datalist");a.datalist=Kb;var Lb=b("dd");a.dd=Lb;var Mb=b("del");a.del=Mb;var Nb=b("details");a.details=Nb;var Ob=b("dfn");a.dfn=Ob;var Pb=b("dialog");a.dialog=Pb;var Qb=b("dir");a.dir=Qb;var n=b("div");a.div=n;var Sb=b("dl");a.dl=Sb;var Tb=b("dt");a.dt=Tb;var Ub=b("em");a.em=Ub;var Vb=b("embed");a.embed=Vb;var Wb=b("fieldset");a.fieldset=Wb;var Xb=b("figcaption");a.figcaption=Xb;var Yb=b("figure");a.figure=Yb;var Zb=b("font");a.font=Zb;var $b=b("footer");a.footer=$b;var _b=b("form");a.form=_b;var ac=b("frame");a.frame=ac;var bc=b("frameset");a.frameset=bc;var cc=b("h1");a.h1=cc;var dc=b("h2");a.h2=dc;var ec=b("h3");a.h3=ec;var fc=b("h4");a.h4=fc;var gc=b("h5");a.h5=gc;var hc=b("h6");a.h6=hc;var ic=b("head");a.head=ic;var jc=b("header");a.header=jc;var kc=b("hgroup");a.hgroup=kc;var lc=b("hr");a.hr=lc;var mc=b("html");a.html=mc;var nc=b("i");a.i=nc;var oc=b("iframe");a.iframe=oc;var pc=b("img");a.img=pc;var qc=b("input");a.input=qc;var rc=b("ins");a.ins=rc;var sc=b("kbd");a.kbd=sc;var tc=b("label");a.label=tc;var uc=b("legend");a.legend=uc;var vc=b("li");a.li=vc;var wc=b("link");a.link=wc;var xc=b("listing");a.listing=xc;var yc=b("main");a.main=yc;var zc=b("map");a.map=zc;var Ac=b("mark");a.mark=Ac;var Bc=b("marquee");a.marquee=Bc;var Cc=b("menu");a.menu=Cc;var Dc=b("meta");a.meta=Dc;var Ec=b("meter");a.meter=Ec;var Fc=b("nav");a.nav=Fc;var Gc=b("noscript");a.noscript=Gc;var Hc=b("object");a.object=Hc;var Ic=b("ol");a.ol=Ic;var Jc=b("optgroup");a.optgroup=Jc;var Kc=b("option");a.option=Kc;var Lc=b("output");a.output=Lc;var Mc=b("p");a.p=Mc;var Nc=b("param");a.param=Nc;var Oc=b("picture");a.picture=Oc;var Pc=b("pre");a.pre=Pc;var Qc=b("progress");a.progress=Qc;var Rc=b("q");a.q=Rc;var Sc=b("rp");a.rp=Sc;var Tc=b("rt");a.rt=Tc;var Uc=b("ruby");a.ruby=Uc;var Vc=b("s");a.s=Vc;var Wc=b("samp");a.samp=Wc;var Xc=b("script");a.script=Xc;var Yc=b("section");a.section=Yc;var Zc=b("select");a.select=Zc;var $c=b("slot");a.slot=$c;var _c=b("small");a.small=_c;var ad=b("source");a.source=ad;var bd=b("span");a.span=bd;var cd=b("strong");a.strong=cd;var dd=b("style");a.style=dd;var ed=b("sub");a.sub=ed;var fd=b("summary");a.summary=fd;var gd=b("sup");a.sup=gd;var hd=b("table");a.table=hd;var id=b("tbody");a.tbody=id;var jd=b("td");a.td=jd;var kd=b("template");a.template=kd;var ld=b("textarea");a.textarea=ld;var md=b("tfoot");a.tfoot=md;var nd=b("th");a.th=nd;var od=b("thead");a.thead=od;var pd=b("time");a.time=pd;var qd=b("title");a.title=qd;var rd=b("tr");a.tr=rd;var sd=b("track");a.track=sd;var td=b("u");a.u=td;var ud=b("ul");a.ul=ud;var vd=b("var");a.varEl=vd;var wd=b("video");a.video=wd;var xd=b("wbr");a.wbr=xd;var yd=b("xmp");a.xmp=yd;var h={},Ad=h&&h.__spreadArrays||function(){for(var e=0,r=0,a=arguments.length;r<a;r++)e+=arguments[r].length;var t=Array(e),p=0;for(r=0;r<a;r++)for(var $=arguments[r],n=0,o=$.length;n<o;n++,p++)t[p]=$[n];return t};Object.defineProperty(h,"__esModule",{value:!0});var X=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var a=this.children,t=this.map,p=t(r),$=g(a,function(r){return r.render(e,p)});return{change:function(e){for(var r=t(e),a=0,p=$;a<p.length;a++){p[a].change(r)}},destroy:function(){for(var e=0,r=$;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,a=$;r<a.length;r++){a[r].request(e)}}}},e}();function Y(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new X(e.map,g(r,f))}var Z=Y;function Ed(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return Y.apply(void 0,Ad([{map:function(r){return r[e.field]}}],r))}h.mapState=Z;var Fd=Ed;function Gd(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new X(function(r){return[e.map(r),r]},g(r,f))}h.mapField=Fd;var Hd=Gd;h.mapStateAndKeep=Hd;var Id=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var a=this.children,t=this.map,p=e.conditionalMapAction(t),$=g(a,function(e){return e.render(p,r)});return{change:function(e){for(var r=0,a=$;r<a.length;r++){a[r].change(e)}},destroy:function(){for(var e=0,r=$;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,a=$;r<a.length;r++){a[r].request(e)}}}},e}();function Jd(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new Id(e.map,g(r,f))}var Kd=Jd;h.mapAction=Kd;var $=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var a=this.children,t=this.map,p=g(a,function(a){return a.render(e,r)});return{change:function(e){for(var r=0,a=p;r<a.length;r++){a[r].change(e)}},destroy:function(){for(var e=0,r=p;e<r.length;e++){r[e].destroy()}},request:function(e){var r=t(e);void 0!==r&&p.forEach(function(e){return e.request(r)})}}},e}();function Md(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new $(e.map,g(r,f))}var Nd=Md;function Od(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new $(e.map,g(r,f))}h.mapQuery=Nd;var Pd=Od;h.mapQueryConditional=Pd;var r={};Object.defineProperty(r,"__esModule",{value:!0});var Rd=function(){function e(){this.listeners=[]}return e.ofOne=function(){return new e},e.ofTwo=function(){return new e},e.ofThree=function(){return new e},e.ofFour=function(){return new e},e.ofFive=function(){return new e},e.ofSix=function(){return new e},e.prototype.emit=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=this.listeners;n<r.length;n++){r[n].apply(void 0,e)}},e.prototype.on=function(e){this.listeners.push(e)},e.prototype.off=function(e){var t=this.listeners.indexOf(e);return!(t<0)&&(this.listeners.splice(t,1),!0)},e.prototype.once=function(e){var t=this,n=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t.off(n),e.apply(void 0,r)};this.on(n)},e}(),A=Rd;function Td(e){return function(t){var n,r=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n=o,r||(r=!0,setTimeout(function(){r=!1,t.apply(void 0,n)},e))}}}r.Emitter=A;var Ud=Td;function Vd(e){var t,n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t=r,n||(n=!0,requestAnimationFrame(function(){n=!1,e.apply(void 0,t)}))}}r.debounce=Ud;var Wd=Vd;r.nextFrame=Wd;var x={};function ca(r,e){return r===e||r!=r&&e!=e}Object.defineProperty(x,"__esModule",{value:!0});var da=ca;function w(r,e){if(ca(r,e))return!0;if(null==r||null==e)return!1;var t=Array.isArray(r);if(t!==Array.isArray(e))return!1;if(t){var a=r,f=e;if((R=a.length)!==f.length)return!1;for(var n=0;n<R;n++)if(!w(a[n],f[n]))return!1;return!0}var u=r instanceof Date;if(u!==e instanceof Date)return!1;if(u)return+r==+e;var i=r instanceof Set;if(i!==e instanceof Set)return!1;if(i){var $=r,o=e;if($.size!==o.size)return!1;for(var s=$.keys();;){if((p=s.next()).done)break;if(!o.has(p.value))return!1}return!0}var v=r instanceof Map;if(v!==e instanceof Map)return!1;if(v){var d=r,y=e;if(d.size!==y.size)return!1;for(var l=d.keys();;){var p;if((p=l.next()).done)break;if(!w(d.get(p.value),y.get(p.value)))return!1}return!0}var c="object"==typeof r;if(c!==("object"==typeof e))return!1;if(c){var R,q=r,E=e,x=Object.keys(q),b=Object.keys(E);if((R=x.length)!==b.length)return!1;for(n=0;n<R;n++){var g=x[n];if(!E.hasOwnProperty(g))return!1;if(!w(q[g],E[g]))return!1}return!0}return!1}x.strictEqual=da;var _d=w;x.deepEqual=_d;var fa={};Object.defineProperty(fa,"__esModule",{value:!0});var be=function(){function e(e,t){void 0===t&&(t=da),this.value=e,this.equal=t,this.observable=this.emitter=A.ofOne()}return e.prototype.set=function(e){return!this.equal(this.value,e)&&(this.value=e,this.emit(this.value),!0)},e.prototype.get=function(){return this.value},e.prototype.emit=function(e){this.emitter.emit(e)},e}(),ga=be;fa.Property=ga;var ha={};Object.defineProperty(ha,"__esModule",{value:!0});var ee=function(){function r(r,e){this.property=r,this.reducer=e,this.observable=this.emitter=A.ofFour()}return r.ofState=function(e){return new r(new ga(e.state,e.equal),e.reducer)},r.prototype.process=function(r){var e=this.property.get(),t=this.reducer(e,r),$=this.property.set(t);return this.emitter.emit(t,r,e,$),$},r}(),ia=ee;ha.Store=ia;var B={};Object.defineProperty(B,"__esModule",{value:!0});var he={count:0},ie=function(){return{kind:"decrement"}},je=function(){return{kind:"increment"}},ke=function(e,t){switch(t.kind){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw"this should never happen";}},le=ia.ofState({state:he,reducer:ke}),Qd=n({attrs:{className:"app"}},Z({map:function(e){return e.count}},n({attrs:{className:"count count-small"}},"count"),n({attrs:{className:"count"}},String),n({attrs:{className:"buttons"}},C({events:{click:ie},attrs:{disabled:function(e){return e<=0}}},"-"),C({events:{click:je}},"+"))));E.render({store:le,template:Qd});if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=B}else if(typeof define==="function"&&define.amd){define(function(){return B})}})();