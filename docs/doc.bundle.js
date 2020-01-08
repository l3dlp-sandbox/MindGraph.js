!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAP_HORIZONTAL_INTERVAL=40,t.MAP_VERTICAL_INTERVAL=20,t.MAP_NODE_STYLES={root:{fontSize:28,fontFamily:"Arial",fontWeight:"300",fontStyle:"normal",color:"#fff",background:"#666666",borderWidth:4,borderColor:"#000",borderRadius:6,padding:12},primary:{fontSize:18,fontFamily:"Arial",fontWeight:"normal",fontStyle:"normal",color:"#000",background:"#fff",borderWidth:2,borderColor:"#000",borderRadius:4,padding:8},secondary:{fontSize:14,fontFamily:"Arial",fontWeight:"normal",fontStyle:"normal",color:"#000",background:"transparent",borderWidth:0,borderColor:"#000",borderRadius:0,padding:4}},t.MAP_LINK_STYLE={lineWidth:1,lineColor:"#000",cp1Ratio:.2,cp2Ratio:.2}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2)),i=document.getElementById("app");if(i){var a=new o.default.MindMap(i);a.render();var d=a.rootId,s=a.addNode(d,"primary");a.addNode(d,"primary2"),a.addNode(d,"primary3");var c=a.addNode(d,"primary3");a.addNode(c,"sec3"),a.addNode(c,"sec3"),a.addNode(c,"sec3"),a.addNode(d,"primary3"),a.addNode(d,"primary3"),a.addNode(s,"secondary");var l=a.addNode(s,"secondary2");a.addNode(l,"sec"),a.addNode(l,"sec"),a.addNode(l,"sec"),a.addNode(l,"sec")}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o={MindMap:n(r(3)).default};t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(4)),i=n(r(6)),a=r(0),d=function(){function e(t){var r,n=this;this.render=function(){n._renderLoop&&(n._innerRender(),requestAnimationFrame(n.render))},this._parentDom=t,this._root=new o.default(e.nextNodeId++,"root",0,"Main Theme"),this._nodeIndex=((r={})[this._root.id]=this._root,r);var i=document.createElement("canvas");i.id="mind-graph-map",i.width=this._parentDom.clientWidth,i.height=this._parentDom.clientHeight,this._parentDom.appendChild(i),this._canvas=i,this._center={x:this._canvas.width/2,y:this._canvas.height/2};var a=this._canvas.getContext("2d");if(!a)throw new Error("Failed to get canvas context 2d.");this._ctx=a,this._scale=1,this._translate={x:0,y:0},this._needsUpdate=!0,this._renderLoop=!0}return e.prototype.scale=function(e){return void 0!==e&&e!==this._scale&&(this._scale=e,this._needsUpdate=!0),this._scale},e.prototype.translate=function(e){return void 0!==e&&e.x!==this._translate.x&&e.y!==this._translate.y&&(this._translate=e,this._needsUpdate=!0),this._translate},Object.defineProperty(e.prototype,"rootId",{get:function(){return this._root.id},enumerable:!0,configurable:!0}),e.prototype.addNode=function(t,r){var n=this._nodeIndex[t];if(!n)throw new Error('"addNode" failed, parent node not found.');var i="root"===n.type()?"primary":"secondary",d=new o.default(e.nextNodeId++,i,n.depth+1,r);n.children.push(d),d.parent=n;var s=n.children.reduce((function(e,t){return e+t.verticalSpace()}),0);return(s+=(n.children.length-1)*a.MAP_VERTICAL_INTERVAL)>n.verticalSpace()&&this._traceBackUpdateVerticalSpaces(n,s-n.verticalSpace()),this._nodeIndex[d.id]=d,this._needsUpdate=!0,d.id},e.prototype.deleteNode=function(e){var t=this._nodeIndex[e];if(!t||"root"===t.type())return-1;var r=t.parent.children.findIndex((function(t){return t.id===e}));return t.parent.children.splice(r,1),this._traceBackUpdateVerticalSpaces(t.parent,-(t.verticalSpace()+a.MAP_VERTICAL_INTERVAL)),delete this._nodeIndex[e],this._needsUpdate=!0,t.parent.id},e.prototype.updateNode=function(e,t){var r=this._nodeIndex[e];if(!r)throw new Error('"updateNode" failed, node not found.');var n=r.verticalSpace();r.text(t);var o=r.verticalSpace()-n;this._traceBackUpdateVerticalSpaces(r.parent,o),this._needsUpdate=!0},e.prototype.dispose=function(){this._renderLoop=!1,this._control.dispose(),this._canvas.remove()},e.prototype._innerRender=function(){var e=this;if(this._needsUpdate){this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.translate(this._center.x+this._translate.x,this._center.y+this._translate.y);for(var t=[{node:this._root,pos:{x:-this._root.size.w/2,y:-this._root.size.h/2}}],r=function(){var r=t.shift();n._renderNode(r);var o=r.node.children.reduce((function(e,t){return e+t.verticalSpace()}),0);o+=(r.node.children.length-1)*a.MAP_VERTICAL_INTERVAL;var i=r.pos.x+r.node.size.w+a.MAP_HORIZONTAL_INTERVAL,d=r.pos.y+r.node.size.h/2-o/2;r.node.children.forEach((function(n){var o={node:n,pos:{x:i,y:d}};e._renderLink(r,o),t.push(o),d+=n.verticalSpace()+a.MAP_VERTICAL_INTERVAL}))},n=this;t.length>0;)r();this._needsUpdate=!1}},e.prototype._renderNode=function(e){e.node.text(e.node.verticalSpace().toString());var t=i.default.getScaledNodeStyle(e.node.type(),this._scale),r=e.pos.x*this._scale,n=e.pos.y*this._scale,o=e.node.size.w*this._scale,a=e.node.size.h*this._scale,d=this._ctx,s={x:r+t.borderWidth,y:n+t.borderWidth,w:o-2*t.borderWidth,h:a-2*t.borderWidth};if(d.beginPath(),d.fillStyle=t.background,d.fillRect(s.x,s.y,s.w,s.h),t.borderWidth>0){d.beginPath();var c={x:r+t.borderWidth/2,y:n+t.borderWidth/2,w:o-t.borderWidth,h:a-t.borderWidth};d.strokeStyle=t.borderColor,d.lineWidth=t.borderWidth,d.strokeRect(c.x,c.y,c.w,c.h)}d.beginPath(),d.font=t.fontStyle+" normal "+t.fontWeight+" "+t.fontSize+"px "+t.fontFamily,d.fillStyle=t.color,d.fillText(e.node.text(),r+t.padding+t.borderWidth,n+t.padding+t.borderWidth+t.fontSize)},e.prototype._renderLink=function(e,t){var r={x:(e.pos.x+e.node.size.w)*this._scale,y:(e.pos.y+e.node.size.h/2)*this._scale},n={x:t.pos.x*this._scale,y:(t.pos.y+t.node.size.h/2)*this._scale},o=n.x-r.x,a=i.default.getScaledLinkStyle(this._scale),d=this._ctx;d.beginPath(),d.moveTo(r.x,r.y),d.quadraticCurveTo(r.x+a.cp2Ratio*o,n.y,n.x,n.y),d.lineWidth=a.lineWidth,d.strokeStyle=a.lineColor,d.stroke()},e.prototype._traceBackUpdateVerticalSpaces=function(e,t){for(var r=e;r;)r.verticalSpace(r.verticalSpace()+t),r=r.parent},e.nextNodeId=0,e}();t.default=d},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(5)),d=r(0),s=function(e){function t(t,r,n,o,i){var a=e.call(this,t,o,i)||this;return a.parent=null,a.children=[],a._type=r,a.depth=n,a._size={w:0,h:0},a._updateSize(),a._verticalSpace=a._size.h,a}return o(t,e),t.prototype.text=function(e){return void 0!==e&&e!==this._text&&(this._text=e,this._updateSize()),this._text},t.prototype.comment=function(e){return void 0!==e&&e!==this._comment&&(this._comment=e,this._updateSize()),this._comment},t.prototype.type=function(e){return void 0!==e&&e!==this._type&&(this._type=e,this._updateSize()),this._type},t.prototype.verticalSpace=function(e){return void 0!==e&&e!==this._verticalSpace&&(this._verticalSpace=e),this._verticalSpace},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),t.prototype._updateSize=function(){var e=d.MAP_NODE_STYLES[this._type],t=document.createElement("canvas").getContext("2d");if(!t)throw new Error("Failed to get rulerCanvas context 2d.");t.font=e.fontStyle+" normal "+e.fontWeight+" "+e.fontSize+"px "+e.fontFamily;var r=t.measureText(this._text).width,n=1.4*e.fontSize,o=2*e.padding+2*e.borderWidth,i=r+o,a=n+o;this._size={w:i,h:a}},t}(a.default);t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){this.id=e,this._text=t||"",this._comment=r||""};t.default=n},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);var i={getScaledNodeStyle:function(e,t){var r=o.MAP_NODE_STYLES[e];return n(n({},r),{fontSize:r.fontSize*t,borderWidth:r.borderWidth*t,borderRadius:r.borderRadius*t,padding:r.padding*t})},getScaledLinkStyle:function(e){return n(n({},o.MAP_LINK_STYLE),{lineWidth:o.MAP_LINK_STYLE.lineWidth*e})}};t.default=i}]);