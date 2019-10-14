var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{a(n.next(t))}catch(e){i(e)}}function l(t){try{a(n.throw(t))}catch(e){i(e)}}function a(t){t.done?o(t.value):new r((function(e){e(t.value)})).then(s,l)}a((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(l){i=[6,l],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"+scH":function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",(function(){return i})),r.d(e,"ion_reorder_group",(function(){return s}));var n=r("6kEz"),o=(r("eL6f"),r("KqZq")),i=function(){function t(t){Object(n.l)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.render=function(){return Object(n.i)(n.a,{class:Object(n.e)(this)},Object(n.i)("slot",null,Object(n.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))},Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(n.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.d)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,o=this;return __generator(this,(function(i){switch(i.label){case 0:return t=this.el.closest("ion-content"),t?(e=this,[4,t.getScrollElement()]):[3,2];case 1:e.scrollEl=i.sent(),i.label=2;case 2:return n=this,[4,Promise.resolve().then(r.bind(null,"i5Bw"))];case 3:return n.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=a(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var s=0,a=0;a<i.length;a++){var h=i[a];r.push(s+=h.offsetHeight),h.$ionIndex=a}var d=n.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+c,this.scrollElBottom=f.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(u),Object(o.a)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,i=Math.max(n,Math.min(t.currentY,this.containerBottom-r)),s=r+i-t.startY,a=this.itemIndexForTop(i-n);if(a!==this.lastToIndex){var c=l(e);this.lastToIndex=a,Object(o.b)(),this.reorderMove(c,a)}e.style.transform="translateY("+s+"px)"}},t.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=l(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(o.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=l(e);o===i||t&&!0!==t||this.el.insertBefore(e,i<o?r[o+1]:r[o]),Array.isArray(t)&&(t=d(t,i,o));for(var s=0;s<n;s++)r[s].style.transform="";e.style.transition="",e.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY("+-r+"px)":o<t&&o>=e&&(i="translateY("+r+"px)"),n[o].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.render=function(){var t,e=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),l=function(t){return t.$ionIndex},a=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},c=60,h=10,u="reorder-selected",d=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}}}]);