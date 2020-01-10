!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAP_HORIZONTAL_INTERVAL=40,t.MAP_VERTICAL_INTERVAL=20,t.MAP_NODE_STYLES={root:{fontSize:28,fontFamily:"Arial",fontWeight:"300",fontStyle:"normal",color:"#fff",background:"#666666",borderWidth:4,borderColor:"#000",borderRadius:6,padding:12},primary:{fontSize:18,fontFamily:"Arial",fontWeight:"normal",fontStyle:"normal",color:"#000",background:"#fff",borderWidth:2,borderColor:"#000",borderRadius:4,padding:8},secondary:{fontSize:14,fontFamily:"Arial",fontWeight:"normal",fontStyle:"normal",color:"#000",background:"transparent",borderWidth:0,borderColor:"#000",borderRadius:0,padding:4}},t.MAP_LINK_STYLE={lineWidth:1,lineColor:"#000",cp1Ratio:.2,cp2Ratio:.2}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2)),i=document.getElementById("app");if(i){var a=new o.default.MindMap(i);a.render();var d=a.rootId,s=a.addNode(d,"primary"),h=a.addNode(d,"primary2");a.addNode(h,"sec2"),a.addNode(d,"primary3");var c=a.addNode(d,"primary3");a.addNode(c,"sec3"),a.addNode(c,"sec3"),a.addNode(c,"sec3"),a.addNode(d,"primary3");var l=a.addNode(d,"primary3");a.addNode(l,"sec5"),a.addNode(l,"sec5"),a.addNode(l,"sec5"),a.addNode(l,"sec5"),a.addNode(l,"sec5");var u=a.addNode(l,"sec5");a.addNode(s,"secondary");var p=a.addNode(s,"secondary2");a.addNode(p,"sec");var _=a.addNode(p,"sec");a.addNode(p,"sec"),a.addNode(p,"sec"),a.deleteNode(_),a.deleteNode(u),a.updateNode(d,"rrrrrrrrrrrrrrrrrrrrrrrrrrrr"),a.updateNode(s,"pppppppppppppppppp")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o={MindMap:r(n(3)).default};t.default=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(4)),i=r(n(6)),a=r(n(7)),d=n(0),s=function(){function e(t){var n,r=this;this.render=function(){r._renderLoop&&(r._innerRender(),requestAnimationFrame(r.render))},this._parentDom=t,this._root=new o.default(e.nextNodeId++,"root",0,"Main Theme"),this._nodeIndex=((n={})[this._root.id]=this._root,n);var a=document.createElement("canvas");a.id="mind-graph-map",a.width=this._parentDom.clientWidth,a.height=this._parentDom.clientHeight,this._parentDom.appendChild(a),this._canvas=a,this._center={x:this._canvas.width/2,y:this._canvas.height/2};var d=this._canvas.getContext("2d");if(!d)throw new Error("Failed to get canvas context 2d.");this._ctx=d,this._scale=1,this._translate={x:0,y:0},this._needsUpdate=!0,this._renderLoop=!0;var s=new i.default(this._canvas);s.onScroll=this._onScroll.bind(this),s.onScale=this._onScale.bind(this),s.onPan=this._onPan.bind(this),this._control=s}return e.prototype.scale=function(e){return void 0!==e&&e!==this._scale&&(this._scale=e,this._needsUpdate=!0),this._scale},e.prototype.translate=function(e){return void 0===e||e.x===this._translate.x&&e.y===this._translate.y||(this._translate=e,this._needsUpdate=!0),this._translate},Object.defineProperty(e.prototype,"rootId",{get:function(){return this._root.id},enumerable:!0,configurable:!0}),e.prototype.addNode=function(t,n){var r=this._nodeIndex[t];if(!r)throw new Error('"addNode" failed, parent node not found.');var i="root"===r.type()?"primary":"secondary",a=new o.default(e.nextNodeId++,i,r.depth+1,n);return r.children.push(a),a.parent=r,this._traceBackUpdateSpaces(r),this._nodeIndex[a.id]=a,this._needsUpdate=!0,a.id},e.prototype.deleteNode=function(e){var t=this._nodeIndex[e];if(!t||!t.parent)return-1;var n=t.parent.children.findIndex((function(t){return t.id===e}));return t.parent.children.splice(n,1),this._traceBackUpdateSpaces(t.parent),delete this._nodeIndex[e],this._needsUpdate=!0,t.parent.id},e.prototype.updateNode=function(e,t){var n=this._nodeIndex[e];if(!n)throw new Error('"updateNode" failed, node not found.');n.text(t),this._traceBackUpdateSpaces(n),this._needsUpdate=!0},e.prototype.dispose=function(){var e;this._renderLoop=!1,null===(e=this._control)||void 0===e||e.dispose(),this._canvas.remove()},e.prototype._innerRender=function(){var e=this;if(this._needsUpdate){this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.translate(this._center.x+this._translate.x,this._center.y+this._translate.y);for(var t=[{node:this._root,pos:{x:-this._root.size.w/2,y:-this._root.size.h/2}}],n=function(){var n=t.shift();if(!n)return"continue";r._renderNode(n);var o=n.pos.x+n.node.size.w+d.MAP_HORIZONTAL_INTERVAL,i=n.pos.y+n.node.size.h/2-n.node.treeSpace().h/2;n.node.children.forEach((function(r){i+=r.treeSpace().h/2-r.size.h/2;var a={node:r,pos:{x:o,y:i}};e._renderLink(n,a),t.push(a),i+=r.size.h/2+r.treeSpace().h/2+d.MAP_VERTICAL_INTERVAL}))},r=this;t.length>0;)n();this._needsUpdate=!1}},e.prototype._renderNode=function(e){var t=a.default.getScaledNodeStyle(e.node.type(),this._scale),n=e.pos.x*this._scale,r=e.pos.y*this._scale,o=e.node.size.w*this._scale,i=e.node.size.h*this._scale,d=this._ctx,s={x:n+t.borderWidth,y:r+t.borderWidth,w:o-2*t.borderWidth,h:i-2*t.borderWidth};if(d.beginPath(),d.fillStyle=t.background,d.fillRect(s.x,s.y,s.w,s.h),t.borderWidth>0){d.beginPath();var h={x:n+t.borderWidth/2,y:r+t.borderWidth/2,w:o-t.borderWidth,h:i-t.borderWidth};d.strokeStyle=t.borderColor,d.lineWidth=t.borderWidth,d.strokeRect(h.x,h.y,h.w,h.h)}d.beginPath(),d.font=t.fontStyle+" normal "+t.fontWeight+" "+t.fontSize+"px "+t.fontFamily,d.fillStyle=t.color,d.fillText(e.node.text(),n+t.padding+t.borderWidth,r+t.padding+t.borderWidth+t.fontSize)},e.prototype._renderLink=function(e,t){var n={x:(e.pos.x+e.node.size.w)*this._scale,y:(e.pos.y+e.node.size.h/2)*this._scale},r={x:t.pos.x*this._scale,y:(t.pos.y+t.node.size.h/2)*this._scale},o=r.x-n.x,i=a.default.getScaledLinkStyle(this._scale),d=this._ctx;d.beginPath(),d.moveTo(n.x,n.y),d.quadraticCurveTo(n.x+i.cp2Ratio*o,r.y,r.x,r.y),d.lineWidth=i.lineWidth,d.strokeStyle=i.lineColor,d.stroke()},e.prototype._onScroll=function(e){var t=this._translate;this.translate({x:t.x,y:t.y-5*e})},e.prototype._onScale=function(e){var t=this._scale+e;t=(t=t>4?4:t)<.2?.2:t,this.scale(t)},e.prototype._onPan=function(e){var t=this._translate;this.translate({x:t.x+e.x,y:t.y+e.y})},e.prototype._calcChildrenTotalHeight=function(e){var t=e.children.reduce((function(e,t){return e+t.treeSpace().h}),0);return t+=(e.children.length-1)*d.MAP_VERTICAL_INTERVAL},e.prototype._traceBackUpdateSpaces=function(e){var t=e.treeSpace(),n=-1/0,r=e.children.reduce((function(e,t){return t.size.w>n&&(n=t.size.w),e+t.treeSpace().h}),0);(r+=(e.children.length-1)*d.MAP_VERTICAL_INTERVAL)<e.size.h&&(r=e.size.h);var o=n-(t.w-e.size.w-d.MAP_HORIZONTAL_INTERVAL),i=r-t.h;if(0!==o||0!==i)for(var a=e;a;)a.treeSpace({w:a.treeSpace().w+o,h:a.treeSpace().h+i}),a=a.parent},e.nextNodeId=0,e}();t.default=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(5)),d=n(0),s=function(e){function t(t,n,r,o,i){var a=e.call(this,t,o,i)||this;return a.parent=null,a.children=[],a._type=n,a.depth=r,a._size={w:0,h:0},a._updateSize(),a._treeSpace={w:a._size.w,h:a._size.h},a}return o(t,e),t.prototype.text=function(e){return void 0!==e&&e!==this._text&&(this._text=e,this._updateSize()),this._text},t.prototype.comment=function(e){return void 0!==e&&e!==this._comment&&(this._comment=e,this._updateSize()),this._comment},t.prototype.type=function(e){return void 0!==e&&e!==this._type&&(this._type=e,this._updateSize()),this._type},t.prototype.treeSpace=function(e){return void 0===e||e.w===this._treeSpace.w&&e.h===this._treeSpace.h||(this._treeSpace={w:e.w,h:e.h}),{w:this._treeSpace.w,h:this._treeSpace.h}},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),t.prototype._updateSize=function(){var e=d.MAP_NODE_STYLES[this._type],t=document.createElement("canvas").getContext("2d");if(!t)throw new Error("Failed to get rulerCanvas context 2d.");t.font=e.fontStyle+" normal "+e.fontWeight+" "+e.fontSize+"px "+e.fontFamily;var n=t.measureText(this._text).width,r=1.4*e.fontSize,o=2*e.padding+2*e.borderWidth,i=n+o,a=r+o;this._size={w:i,h:a}},t}(a.default);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){this.id=e,this._text=t||"",this._comment=n||""};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){var t=this;this.onScroll=function(){},this.onScale=function(){},this.onPan=function(){},this.handleWheel=function(e){if(e.preventDefault(),e.ctrlKey){var n=e.deltaY>0?-.05:.05;t.onScale(n)}else t.onScroll(e.deltaY)},this.handleMouseDown=function(e){0===e.button?t._leftDragging=!0:2===e.button&&(t._rightDragging=!0)},this.handleMouseUp=function(e){0===e.button?t._leftDragging=!1:2===e.button&&(t._rightDragging=!1)},this.handleMouseLeave=function(){t._leftDragging=!1,t._rightDragging=!1},this.handleMouseMove=function(e){if(t._leftDragging){var n={x:e.movementX,y:e.movementY};t.onPan(n)}else t._rightDragging},this.handleContextMenu=function(e){e.preventDefault()},this._canvas=e,this._leftDragging=!1,this._rightDragging=!1,e.style.cursor="grab",e.addEventListener("wheel",this.handleWheel),e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("mouseup",this.handleMouseUp),e.addEventListener("mouseleave",this.handleMouseLeave),e.addEventListener("mousemove",this.handleMouseMove),e.addEventListener("contextmenu",this.handleContextMenu)}return e.prototype.dispose=function(){var e=this._canvas;e.style.cursor="default",e.removeEventListener("wheel",this.handleWheel),e.removeEventListener("mousedown",this.handleMouseDown),e.removeEventListener("mouseup",this.handleMouseUp),e.removeEventListener("mouseleave",this.handleMouseLeave),e.removeEventListener("mousemove",this.handleMouseMove),e.removeEventListener("contextmenu",this.handleContextMenu)},e}();t.default=r},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);var i={getScaledNodeStyle:function(e,t){var n=o.MAP_NODE_STYLES[e];return r(r({},n),{fontSize:n.fontSize*t,borderWidth:n.borderWidth*t,borderRadius:n.borderRadius*t,padding:n.padding*t})},getScaledLinkStyle:function(e){return r(r({},o.MAP_LINK_STYLE),{lineWidth:o.MAP_LINK_STYLE.lineWidth*e})}};t.default=i}]);