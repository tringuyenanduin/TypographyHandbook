/*!
 * View uncompiled source here:
 * git+https://github.com/kennethwang14/KennethStarterKit.git
 */

!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function n(e,t){var r=e&&e.exec(t);return r&&0==r.index}function i(e){return/^(no-?highlight|plain|text)$/i.test(e)}function o(e){var t,r,n,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",r=/\blang(?:uage)?-([\w-]+)\b/i.exec(o))return x(r[1])?r[1]:"no-highlight";for(o=o.split(/\s+/),t=0,n=o.length;n>t;t++)if(x(o[t])||i(o[t]))return o[t]}function a(e,t){var r,n={};for(r in e)n[r]=e[r];if(t)for(r in t)n[r]=t[r];return n}function l(e){var t=[];return function n(e,i){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?i+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:i,node:o}),i=n(o,i),r(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:o}));return i}(e,0),t}function s(e,n,i){function o(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function a(e){function n(e){return" "+e.nodeName+'="'+t(e.value)+'"'}u+="<"+r(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function l(e){u+="</"+r(e)+">"}function s(e){("start"==e.event?a:l)(e.node)}for(var c=0,u="",d=[];e.length||n.length;){var b=o();if(u+=t(i.substr(c,b[0].offset-c)),c=b[0].offset,b==e){d.reverse().forEach(l);do s(b.splice(0,1)[0]),b=o();while(b==e&&b.length&&b[0].offset==c);d.reverse().forEach(a)}else"start"==b[0].event?d.push(b[0].node):d.pop(),s(b.splice(0,1)[0])}return u+t(i.substr(c))}function c(e){function t(e){return e&&e.source||e}function r(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(i,o){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var l={},s=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");l[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof i.k?s("keyword",i.k):Object.keys(i.k).forEach(function(e){s(e,i.k[e])}),i.k=l}i.lR=r(i.l||/\w+/,!0),o&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=r(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=r(i.e)),i.tE=t(i.e)||"",i.eW&&o.tE&&(i.tE+=(i.e?"|":"")+o.tE)),i.i&&(i.iR=r(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var c=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){c.push(a(e,t))}):c.push("self"==e?i:e)}),i.c=c,i.c.forEach(function(e){n(e,i)}),i.starts&&n(i.starts,o);var u=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}n(e)}function u(e,r,i,o){function a(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function l(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?l(e.parent,t):void 0}function s(e,t){return!i&&n(t.iR,e)}function b(e,t){var r=w.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function f(e,t,r,n){var i=n?"":y.classPrefix,o='<span class="'+i,a=r?"":"</span>";return o+=e+'">',o+t+a}function p(){if(!M.k)return t(z);var e="",r=0;M.lR.lastIndex=0;for(var n=M.lR.exec(z);n;){e+=t(z.substr(r,n.index-r));var i=b(M,n);i?(R+=i[1],e+=f(i[0],t(n[0]))):e+=t(n[0]),r=M.lR.lastIndex,n=M.lR.exec(z)}return e+t(z.substr(r))}function g(){var e="string"==typeof M.sL;if(e&&!N[M.sL])return t(z);var r=e?u(M.sL,z,!0,E[M.sL]):d(z,M.sL.length?M.sL:void 0);return M.r>0&&(R+=r.r),e&&(E[M.sL]=r.top),f(r.language,r.value,!1,!0)}function h(){C+=void 0!==M.sL?g():p(),z=""}function m(e,t){C+=e.cN?f(e.cN,"",!0):"",M=Object.create(e,{parent:{value:M}})}function v(e,t){if(z+=e,void 0===t)return h(),0;var r=a(t,M);if(r)return r.skip?z+=t:(r.eB&&(z+=t),h(),r.rB||r.eB||(z=t)),m(r,t),r.rB?0:t.length;var n=l(M,t);if(n){var i=M;i.skip?z+=t:(i.rE||i.eE||(z+=t),h(),i.eE&&(z=t));do M.cN&&(C+="</span>"),M.skip||(R+=M.r),M=M.parent;while(M!=n.parent);return n.starts&&m(n.starts,""),i.rE?0:t.length}if(s(t,M))throw new Error('Illegal lexeme "'+t+'" for mode "'+(M.cN||"<unnamed>")+'"');return z+=t,t.length||1}var w=x(e);if(!w)throw new Error('Unknown language: "'+e+'"');c(w);var k,M=o||w,E={},C="";for(k=M;k!=w;k=k.parent)k.cN&&(C=f(k.cN,"",!0)+C);var z="",R=0;try{for(var S,A,L=0;M.t.lastIndex=L,S=M.t.exec(r),S;)A=v(r.substr(L,S.index-L),S[0]),L=S.index+A;for(v(r.substr(L)),k=M;k.parent;k=k.parent)k.cN&&(C+="</span>");return{r:R,value:C,language:e,top:M}}catch(B){if(-1!=B.message.indexOf("Illegal"))return{r:0,value:t(r)};throw B}}function d(e,r){r=r||y.languages||Object.keys(N);var n={r:0,value:t(e)},i=n;return r.filter(x).forEach(function(t){var r=u(t,e,!1);r.language=t,r.r>i.r&&(i=r),r.r>n.r&&(i=n,n=r)}),i.language&&(n.second_best=i),n}function b(e){return y.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,y.tabReplace)})),y.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,r){var n=t?k[t]:r,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(n)&&i.push(n),i.join(" ").trim()}function p(e){var t=o(e);if(!i(t)){var r;y.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var n=r.textContent,a=t?u(t,n,!0):d(n),c=l(r);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=a.value,a.value=s(c,l(p),n)}a.value=b(a.value),e.innerHTML=a.value,e.className=f(e.className,t,a.language),e.result={language:a.language,re:a.r},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.r})}}function g(e){y=a(y,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(t,r){var n=N[t]=r(e);n.aliases&&n.aliases.forEach(function(e){k[e]=t})}function w(){return Object.keys(N)}function x(e){return e=(e||"").toLowerCase(),N[e]||N[k[e]]}var y={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},k={};return e.highlight=u,e.highlightAuto=d,e.fixMarkup=b,e.highlightBlock=p,e.configure=g,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=v,e.listLanguages=w,e.getLanguage=x,e.inherit=a,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(t,r,n){var i=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return i.c.push(e.PWM),i.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={eW:!0,i:/</,r:0,c:[{cN:"attr",b:t,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},r]}]}}),hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"variable",b:"(\\$"+t+")\\b"},n={cN:"number",b:"#[0-9A-Fa-f]+"};return{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{eW:!0,eE:!0,c:[n,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"meta",b:"!important"}]}},{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,{cN:"selector-id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"selector-class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"selector-attr",b:"\\[",e:"\\]",i:"$"},{cN:"selector-tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},r,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{b:":",e:";",c:[r,n,e.CSSNM,e.QSM,e.ASM,{cN:"meta",b:"!important"}]},{b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[r,e.QSM,e.ASM,n,e.CSSNM,{b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:t,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}}),hljs.initHighlightingOnLoad();