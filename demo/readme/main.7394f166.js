(function () {var m={};Object.defineProperty(m,"__esModule",{value:!0});var K=void 0;function ma(t){return t}m.nothing=K;var na=ma;function oa(t){return null==t}m.just=na;var pa=oa;function qa(t){return null!=t}m.isNothing=pa;var ra=qa;m.isJust=ra;var d={};Object.defineProperty(d,"__esModule",{value:!0});function sa($,r){for(var e=r.length,t=new Array(e),a=0;a<e;a++)t[a]=$(r[a]);return t}var g=sa;function ta($,r){for(var e=new Array,t=0,a=r;t<a.length;t++){var n=a[t];e.push.apply(e,$(n))}return e}d.map=g;var ua=ta;function va($){return $.length>0?$[0]:K}d.flatMap=ua;var wa=va;function xa($){return $.slice(1)}d.head=wa;var ya=xa;function za($,r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!$(r[t],e[t]))return!1;return!0}d.tail=ya;var Aa=za;function Ba($){return 0===$.length}d.equals=Aa;var Ca=Ba;function Da($){return $.length>0}d.isEmpty=Ca;var Ea=Da;function Fa($,r){for(var e=[],t=0,a=r;t<a.length;t++){var n=a[t];$(n)&&e.push(n)}return e}d.hasValues=Ea;var Ga=Fa;function Ha($){var r;return(r=[]).concat.apply(r,$)}d.filter=Ga;var Ia=Ha;function Ja($,r,e){for(var t=0,a=r;t<a.length;t++){e=$(e,a[t])}return e}d.flatten=Ia;var Ka=Ja;function La($,r){for(var e=0,t=r;e<t.length;e++){if(!$(t[e]))return!1}return!0}d.foldLeft=Ka;var Ma=La;function Na($,r){for(var e=0,t=r;e<t.length;e++){if($(t[e]))return!0}return!1}d.all=Ma;var Oa=Na;function Pa($,r){for(var e=0,t=r;e<t.length;e++){$(t[e])}}d.any=Oa;var Qa=Pa;function Ra(){for(var $,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return($=[]).concat.apply($,r)}d.each=Qa;var Sa=Ra;function Ta($,r){return void 0===r&&(r=!0),function(e,t){if(e.length<t.length)return-1*(r?1:-1);if(e.length>t.length)return 1*(r?1:-1);for(var a=0;a<e.length;a++){var n=$(e[a],t[a]);if(0!==n)return n}return 0}}d.concat=Sa;var Ua=Ta;function Va($,r){return r.slice().sort($)}d.makeCompare=Ua;var Wa=Va;function t($,r){for(var e=new Array($),t=0;t<$;t++)e[t]=r(t);return e}d.sort=Wa;var Xa=t;function Ya($,r){return void 0===r&&(r=0),t($,function($){return r+$})}d.range=Xa;var Za=Ya;function $a($,r){return t($,function(){return r})}d.numbersRange=Za;var _a=$a;d.fill=_a;var e={};Object.defineProperty(e,"__esModule",{value:!0});function ab(t,e,r){var $=t.style;$[e]=null==r?null:r}var x=ab;function h(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}e.setOneStyle=x;var L=h;function bb(t,e,r){var $=t;$[e]=null==r?null:r}e.setAttribute=L;var M=bb;function cb(t,e,r){if(null==r)t.removeAttribute(e);else if("string"==typeof r)h(t,e,r);else{var $=g(function(t){return t+": "+r[t]+";"},Object.keys(r)).join(" ");h(t,e,$.length&&$||null)}}e.setProperty=M;var N=cb;function db(t,e,r){var $=t;if(null==r)$[e]=null;else{var E=!0===r||"true"===r;$[e]=E}}e.setStyleAttribute=N;var n=db;function eb(t,e,r){h(t,e,!0===r||"true"===r?"true":!1===r?"false":null)}e.setBoolProperty=n;var y=eb;function fb(t,e,r){h(t,e,!0===r||"true"===r?"":null)}e.setEnumBoolAttribute=y;var c=fb;function gb(t,e,r){Array.isArray(r)?h(t,e,r.join(", ")||null):h(t,e,r&&String(r)||null)}e.setBoolAttribute=c;var A=gb;function hb(t,e,r){Array.isArray(r)?h(t,e,r.join(" ")||null):h(t,e,r&&String(r)||null)}e.setCommaSeparated=A;var k=hb;e.setSpaceSeparated=k;var B={};Object.defineProperty(B,"__esModule",{value:!0});var O={acceptcharset:"accept-charset",asattr:"as",classname:"class",httpequiv:"http-equiv",htmlfor:"for"};B.attributeNameMap=O;var P={"accept-charset":k,class:k,acceptcharset:k,async:c,autofocus:c,autoplay:c,checked:n,contenteditable:y,controls:c,default:c,defer:c,disabled:c,draggable:y,formnovalidate:c,headers:k,hidden:c,ismap:c,itemscope:c,loop:c,multiple:n,muted:n,nomodule:c,novalidate:c,open:c,ping:k,playsinline:c,readonly:c,rel:k,required:c,reversed:c,selected:n,sizes:A,srcset:A,style:N,typemustmatch:c,value:M};B.htmlAttributeMap=P;var q={};Object.defineProperty(q,"__esModule",{value:!0});var Q=function(){function e(e){this.makeContent=e}return e.prototype.render=function(e,t){var r=this.makeContent,$=r(t)||"",n=e.doc.createTextNode($);return e.append(n),{change:function(e){var t=r(e)||"";t!==$&&(n.nodeValue=t,t.length<5e3&&($=t))},destroy:function(){w(n)},request:function(e){}}},e}(),ib=Q;q.DerivedTextTemplate=ib;var R=function(){function e(e){this.content=e}return e.prototype.render=function(e,t){var r=e.doc.createTextNode(this.content);return e.append(r),{change:function(e){},destroy:function(){w(r)},request:function(e){}}},e}(),jb=R;q.LiteralTextTemplate=jb;var S=function(e){return"function"==typeof e?new Q(e):new R(e||"")};q.text=S;var j={};Object.defineProperty(j,"__esModule",{value:!0});function kb(e){var t=e;t&&t.onblur&&(t.onblur=null),e&&void 0!==e.ownerDocument&&e.parentElement&&e.parentElement.removeChild(e)}var w=kb;function lb(e){return function(t){null!=e.parentElement&&e.parentElement.insertBefore(t,e)}}j.removeNode=w;var T=lb;function mb(e){return"string"==typeof e||"function"==typeof e||void 0===e?S(e):e}j.insertFBefore=T;var f=mb;function nb(e,t,r,n){var $=P[t]||L;if("function"==typeof r){if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var o=function(n){var o=r(n);$(e,t,o)};n.push(o)}else{var a=void 0;o=function(n){var o=r(n);o!==a&&($(e,t,o),String(o).length<5e4&&(a=o))};n.push(o)}}else $(e,t,r);return n}j.domChildToTemplate=f;var U=nb;function ob(e,t,r,n,$){var o;e[t]=function(t){var $=r(o,t,e);void 0!==$&&n($)};return $.push(function(e){o=e}),$}j.processAttribute=U;var V=ob;function pb(e,t,r,n){if("function"==typeof r){var $;n.push(function(n){var o=r(n);o!==$&&(x(e,t,o),$=o)})}else x(e,t,r);return n}j.processEvent=V;var W=pb;j.processStyle=W;var qb=function(e){for(var t=[],r=0;r<e.children.length;r++){var n=e.children[r];t[r]=n.style.display,n.style.display="none"}var $={width:e.offsetWidth,height:e.offsetHeight};for(r=0;r<e.children.length;r++){(n=e.children[r]).style.display=t[r]}return $};j.containerSize=qb;var C={};Object.defineProperty(C,"__esModule",{value:!0});var X=function(){function e(e,r,t){this.store=e,this.children=r,this.delayed=t}return e.prototype.render=function(e,r){var t;if(this.delayed){var o=!0;t=function(e){o&&(o=!1,setTimeout(function(){s.change(e),o=!0}))}}else t=function(e){s.change(e)};var n=this.store,a=n.property;a.observable.on(t);var $=e.withDispatch(function(e){n.process(e)}),p=g(function(e){return e.render($,a.get())},this.children),s={change:function(e){n.property.set(e);for(var r=0,t=p;r<t.length;r++){t[r].change(e)}},destroy:function(){a.observable.off(t);for(var e=0,r=p;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,t=p;r<t.length;r++){t[r].request(e)}}};return a.set(r),s},e}(),rb=X;C.ComponentTemplate=rb;var Y=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new X(e.store,g(f,r),e.delayed||!1)};C.component=Y;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});var sb=function(){function t(t,e,n,r){this.doc=t,this.append=e,this.parent=n,this.dispatch=r}return t.fromElement=function(e,n){return new t(e.ownerDocument||window&&window.document,function(t){return e.appendChild(t)},e,n)},t.prototype.mapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){return n.dispatch(e(t))})},t.prototype.conditionalMapAction=function(e){var n=this;return new t(this.doc,this.append,this.parent,function(t){var r=e(t);void 0!==r&&n.dispatch(r)})},t.prototype.withAppendToReference=function(t){var e=this.doc.createComment(t||"t:ref");return this.append(e),{ctx:this.withAppend(T(e)),ref:e}},t.prototype.withAppend=function(e){return new t(this.doc,e,this.parent,this.dispatch)},t.prototype.withParent=function(e){return new t(this.doc,this.append,e,this.dispatch)},t.prototype.withDispatch=function(e){return new t(this.doc,this.append,this.parent,e)},t}(),_=sb;Z.DOMContext=_;var $={};Object.defineProperty($,"__esModule",{value:!0});var D={renderComponent:function(e){var o=e.el,t=e.component,n=t.store,r=e.document||document,$=o||r.body;return{view:t.render(new _(r,function(e){return $.appendChild(e)},$,function(){}),n.property.get()),store:n}},render:function(e){var o=e.el,t=e.store,n=e.document,r=e.template,$=e.delayed,p=Y({store:t,delayed:$},r);return D.renderComponent({el:o,component:p,document:n})}};$.Tempo=D;var l={};Object.defineProperty(l,"__esModule",{value:!0});var aa=function(e,r,t){return function(a,$){return e(a,r,t,$)}},tb=function(e,r,t,a){return void 0!==typeof e?e(a,r,t):void 0},o=function(){function e(e,r,t,a,$,n,b,o,s,v){this.createElement=e,this.attrs=r,this.events=t,this.styles=a,this.afterrender=$,this.beforechange=n,this.afterchange=b,this.beforedestroy=o,this.respond=s,this.children=v}return e.prototype.render=function(e,r){for(var t=this,a=this.createElement(e.doc),$=void 0,n=[],b=0,o=this.attrs;b<o.length;b++){var s=o[b];U(a,s.name,s.value,n)}for(var v=0,l=this.events;v<l.length;v++){s=l[v];V(a,s.name,s.value,e.dispatch,n)}for(var c=0,u=this.styles;c<u.length;c++){s=u[c];W(a,s.name,s.value,n)}for(var i=0,p=n;i<p.length;i++){(0,p[i])(r)}var f=e.withAppend(function(e){return a.appendChild(e)}).withParent(a),L=g(function(e){return e.render(f,r)},this.children);e.append(a),this.afterrender&&($=tb(this.afterrender,a,e,r));var X=g(function(e){return function(r){return e.change(r)}},L);if(n.push.apply(n,X),this.beforechange){var h=aa(this.beforechange,a,e),m=function(e){$=h(e,$)};n.unshift(m)}if(this.afterchange){var d=aa(this.afterchange,a,e);m=function(e){$=d(e,$)};n.push(m)}var y=this.beforedestroy&&function(){return t.beforedestroy(a,e,$)},x=this.respond;return{change:function(e){for(var r=0,t=n;r<t.length;r++){(0,t[r])(e)}},destroy:function(){y&&y(),w(a);for(var e=0,r=L;e<r.length;e++){r[e].destroy()}},request:function(r){x&&($=x(r,a,e,$));for(var t=0,n=L;t<n.length;t++){n[t].request(r)}}}},e}(),ub=o;function s(e){return g(function(r){var t=r.toLowerCase();return{name:t=O[t]||t,value:e[r]}},Object.keys(e||{}))}function u(e){return g(function(r){return{name:"on"+r.toLowerCase(),value:e[r]}},Object.keys(e||{}))}function v(e){return g(function(r){return{name:r,value:e[r]}},Object.keys(e||{}))}l.DOMElement=ub;var ba=function(e){return function(r){return r.createElement(e)}},vb=function(e,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];return new o(ba(e),s(r.attrs),u(r.events),v(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(f,t))};l.el=vb;var a=function(e){return function(r){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new o(ba(e),s(r.attrs),u(r.events),v(r.styles),r.afterrender,r.beforechange,r.afterchange,r.beforedestroy,r.respond,g(f,t))}};l.el2=a;var ca={svg:"http://www.w3.org/2000/svg"};l.defaultNamespaces=ca;var da=function(e,r){return function(t){return t.createElementNS(e,r)}},wb=function(e,r,t){for(var a=[],$=3;$<arguments.length;$++)a[$-3]=arguments[$];var n=ca[e]||e;return new o(da(n,r),s(t.attrs),u(t.events),v(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(f,a))};l.elNS=wb;var xb=function(e,r){return function(t){for(var a=[],$=1;$<arguments.length;$++)a[$-1]=arguments[$];return new o(da(e,r),s(t.attrs),u(t.events),v(t.styles),t.afterrender,t.beforechange,t.afterchange,t.beforedestroy,t.respond,g(f,a))}};l.elNS2=xb;var b={};Object.defineProperty(b,"__esModule",{value:!0});var yb=a("a");b.a=yb;var zb=a("abbr");b.abbr=zb;var Ab=a("address");b.address=Ab;var Bb=a("applet");b.applet=Bb;var Cb=a("area");b.area=Cb;var Db=a("article");b.article=Db;var Eb=a("aside");b.aside=Eb;var Fb=a("audio");b.audio=Fb;var Gb=a("b");b.b=Gb;var Hb=a("base");b.base=Hb;var Ib=a("basefont");b.basefont=Ib;var Jb=a("bdi");b.bdi=Jb;var Kb=a("bdo");b.bdo=Kb;var Lb=a("blockquote");b.blockquote=Lb;var Mb=a("body");b.body=Mb;var Nb=a("br");b.br=Nb;var E=a("button");b.button=E;var Ob=a("canvas");b.canvas=Ob;var Pb=a("caption");b.caption=Pb;var Qb=a("cite");b.cite=Qb;var Rb=a("code");b.code=Rb;var Sb=a("col");b.col=Sb;var Tb=a("colgroup");b.colgroup=Tb;var Ub=a("data");b.data=Ub;var Vb=a("datalist");b.datalist=Vb;var Wb=a("dd");b.dd=Wb;var Xb=a("del");b.del=Xb;var Yb=a("details");b.details=Yb;var Zb=a("dfn");b.dfn=Zb;var $b=a("dialog");b.dialog=$b;var _b=a("dir");b.dir=_b;var p=a("div");b.div=p;var ac=a("dl");b.dl=ac;var bc=a("dt");b.dt=bc;var cc=a("em");b.em=cc;var dc=a("embed");b.embed=dc;var ec=a("fieldset");b.fieldset=ec;var fc=a("figcaption");b.figcaption=fc;var gc=a("figure");b.figure=gc;var hc=a("font");b.font=hc;var ic=a("footer");b.footer=ic;var jc=a("form");b.form=jc;var kc=a("frame");b.frame=kc;var lc=a("frameset");b.frameset=lc;var mc=a("h1");b.h1=mc;var nc=a("h2");b.h2=nc;var oc=a("h3");b.h3=oc;var pc=a("h4");b.h4=pc;var qc=a("h5");b.h5=qc;var rc=a("h6");b.h6=rc;var sc=a("head");b.head=sc;var tc=a("header");b.header=tc;var uc=a("hgroup");b.hgroup=uc;var vc=a("hr");b.hr=vc;var wc=a("html");b.html=wc;var xc=a("i");b.i=xc;var yc=a("iframe");b.iframe=yc;var zc=a("img");b.img=zc;var Ac=a("input");b.input=Ac;var Bc=a("ins");b.ins=Bc;var Cc=a("kbd");b.kbd=Cc;var Dc=a("label");b.label=Dc;var Ec=a("legend");b.legend=Ec;var Fc=a("li");b.li=Fc;var Gc=a("link");b.link=Gc;var Hc=a("listing");b.listing=Hc;var Ic=a("main");b.main=Ic;var Jc=a("map");b.map=Jc;var Kc=a("mark");b.mark=Kc;var Lc=a("marquee");b.marquee=Lc;var Mc=a("menu");b.menu=Mc;var Nc=a("meta");b.meta=Nc;var Oc=a("meter");b.meter=Oc;var Pc=a("nav");b.nav=Pc;var Qc=a("noscript");b.noscript=Qc;var Rc=a("object");b.object=Rc;var Sc=a("ol");b.ol=Sc;var Tc=a("optgroup");b.optgroup=Tc;var Uc=a("option");b.option=Uc;var Vc=a("output");b.output=Vc;var Wc=a("p");b.p=Wc;var Xc=a("param");b.param=Xc;var Yc=a("picture");b.picture=Yc;var Zc=a("pre");b.pre=Zc;var $c=a("progress");b.progress=$c;var _c=a("q");b.q=_c;var ad=a("rp");b.rp=ad;var bd=a("rt");b.rt=bd;var cd=a("ruby");b.ruby=cd;var dd=a("s");b.s=dd;var ed=a("samp");b.samp=ed;var fd=a("script");b.script=fd;var gd=a("section");b.section=gd;var hd=a("select");b.select=hd;var id=a("slot");b.slot=id;var jd=a("small");b.small=jd;var kd=a("source");b.source=kd;var ld=a("span");b.span=ld;var md=a("strong");b.strong=md;var nd=a("style");b.style=nd;var od=a("sub");b.sub=od;var pd=a("summary");b.summary=pd;var qd=a("sup");b.sup=qd;var rd=a("table");b.table=rd;var sd=a("tbody");b.tbody=sd;var td=a("td");b.td=td;var ud=a("template");b.template=ud;var vd=a("textarea");b.textarea=vd;var wd=a("tfoot");b.tfoot=wd;var xd=a("th");b.th=xd;var yd=a("thead");b.thead=yd;var zd=a("time");b.time=zd;var Ad=a("title");b.title=Ad;var Bd=a("tr");b.tr=Bd;var Cd=a("track");b.track=Cd;var Dd=a("u");b.u=Dd;var Ed=a("ul");b.ul=Ed;var Fd=a("var");b.varEl=Fd;var Gd=a("video");b.video=Gd;var Hd=a("wbr");b.wbr=Hd;var Id=a("xmp");b.xmp=Id;var i={};Object.defineProperty(i,"__esModule",{value:!0});var F=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var t=this.children,a=this.map,p=a(r),$=g(function(r){return r.render(e,p)},t);return{change:function(e){for(var r=a(e),t=0,p=$;t<p.length;t++){p[t].change(r)}},destroy:function(){for(var e=0,r=$;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,t=$;r<t.length;r++){t[r].request(e)}}}},e}(),Jd=F;i.MapStateTemplate=Jd;var ea=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new F(e.map,g(f,r))};i.mapState=ea;var Kd=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new F(function(r){return[e.map(r),r]},g(f,r))};i.mapStateAndKeep=Kd;var fa=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var t=this.children,a=this.map,p=e.conditionalMapAction(a),$=g(function(e){return e.render(p,r)},t);return{change:function(e){for(var r=0,t=$;r<t.length;r++){t[r].change(e)}},destroy:function(){for(var e=0,r=$;e<r.length;e++){r[e].destroy()}},request:function(e){for(var r=0,t=$;r<t.length;r++){t[r].request(e)}}}},e}(),Ld=fa;i.MapActionTemplate=Ld;var Md=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new fa(e.map,g(f,r))};i.mapAction=Md;var G=function(){function e(e,r){this.map=e,this.children=r}return e.prototype.render=function(e,r){var t=this.children,a=this.map,p=g(function(t){return t.render(e,r)},t);return{change:function(e){for(var r=0,t=p;r<t.length;r++){t[r].change(e)}},destroy:function(){for(var e=0,r=p;e<r.length;e++){r[e].destroy()}},request:function(e){var r=a(e);void 0!==r&&p.forEach(function(e){return e.request(r)})}}},e}(),Nd=G;i.MapQueryTemplate=Nd;var Od=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new G(e.map,g(f,r))};i.mapQuery=Od;var Pd=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new G(e.map,g(f,r))};i.mapQueryConditional=Pd;var r={};Object.defineProperty(r,"__esModule",{value:!0});var Qd=function(){function t(){this.listeners=[]}return t.ofOne=function(){return new t},t.ofTwo=function(){return new t},t.ofThree=function(){return new t},t.ofFour=function(){return new t},t.ofFive=function(){return new t},t.ofSix=function(){return new t},t.prototype.emit=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0,r=this.listeners;n<r.length;n++){r[n].apply(void 0,t)}},t.prototype.on=function(t){this.listeners.push(t)},t.prototype.off=function(t){var e=this.listeners.indexOf(t);return!(e<0)&&(this.listeners.splice(e,1),!0)},t.prototype.once=function(t){var e=this,n=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e.off(n),t.apply(void 0,r)};this.on(n)},t}(),H=Qd;r.Emitter=H;var Rd=function(t){return function(e){var n,r=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n=o,r||(r=!0,setTimeout(function(){r=!1,e.apply(void 0,n)},t))}}};r.debounce=Rd;var Sd=function(t){var e,n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e=r,n||(n=!0,requestAnimationFrame(function(){n=!1,t.apply(void 0,e)}))}};r.nextFrame=Sd;var I={};function ga(r,e){return r===e||r!=r&&e!=e}Object.defineProperty(I,"__esModule",{value:!0});var ha=ga;function z(r,e){if(ga(r,e))return!0;if(null==r||null==e)return!1;var t=Array.isArray(r);if(t!==Array.isArray(e))return!1;if(t){var a=r,f=e;if((R=a.length)!==f.length)return!1;for(var n=0;n<R;n++)if(!z(a[n],f[n]))return!1;return!0}var u=r instanceof Date;if(u!==e instanceof Date)return!1;if(u)return+r==+e;var i=r instanceof Set;if(i!==e instanceof Set)return!1;if(i){var $=r,o=e;if($.size!==o.size)return!1;for(var s=$.keys();;){if((p=s.next()).done)break;if(!o.has(p.value))return!1}return!0}var v=r instanceof Map;if(v!==e instanceof Map)return!1;if(v){var d=r,y=e;if(d.size!==y.size)return!1;for(var l=d.keys();;){var p;if((p=l.next()).done)break;if(!z(d.get(p.value),y.get(p.value)))return!1}return!0}var c="object"==typeof r;if(c!==("object"==typeof e))return!1;if(c){var R,q=r,E=e,x=Object.keys(q),b=Object.keys(E);if((R=x.length)!==b.length)return!1;for(n=0;n<R;n++){var g=x[n];if(!E.hasOwnProperty(g))return!1;if(!z(q[g],E[g]))return!1}return!0}return!1}I.strictEqual=ha;var Td=z;I.deepEqual=Td;var ia={};Object.defineProperty(ia,"__esModule",{value:!0});var Ud=function(){function e(e,t){void 0===t&&(t=ha),this.value=e,this.equal=t,this.observable=this.emitter=H.ofOne()}return e.prototype.set=function(e){return!this.equal(this.value,e)&&(this.value=e,this.emit(this.value),!0)},e.prototype.get=function(){return this.value},e.prototype.emit=function(e){this.emitter.emit(e)},e}(),ja=Ud;ia.Property=ja;var ka={};Object.defineProperty(ka,"__esModule",{value:!0});var Vd=function(){function r(r,e){this.property=r,this.reducer=e,this.observable=this.emitter=H.ofFour()}return r.ofState=function(e){return new r(new ja(e.state,e.equal),e.reducer)},r.prototype.process=function(r){var e=this.property.get(),t=this.reducer(e,r),$=this.property.set(t);return this.emitter.emit(t,r,e,$),$},r}(),la=Vd;ka.Store=la;var J={};Object.defineProperty(J,"__esModule",{value:!0});var Wd={count:0},Xd=function(){return{kind:"decrement"}},Yd=function(){return{kind:"increment"}},Zd=function(e,t){switch(t.kind){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw"this should never happen";}},$d=la.ofState({state:Wd,reducer:Zd}),_d=p({attrs:{className:"app"}},ea({map:function(e){return e.count}},p({attrs:{className:"count count-small"}},"count"),p({attrs:{className:"count"}},String),p({attrs:{className:"buttons"}},E({events:{click:Xd},attrs:{disabled:function(e){return e<=0}}},"-"),E({events:{click:Yd}},"+"))));D.render({store:$d,template:_d});if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=J}else if(typeof define==="function"&&define.amd){define(function(){return J})}})();