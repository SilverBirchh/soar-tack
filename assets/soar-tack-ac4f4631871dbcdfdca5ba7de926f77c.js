"use strict";define("soar-tack/app",["exports","ember","soar-tack/resolver","ember-load-initializers","soar-tack/config/environment"],function(e,t,a,n,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("soar-tack/components/app-version",["exports","ember-cli-app-version/components/app-version","soar-tack/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("soar-tack/components/tack-board",["exports","ember"],function(e,t){e.default=t.default.Component.extend({playerOne:{shape:"circle"},playerTwo:{shape:"cross"},isPlayerOnesGo:!0,gameOver:!1,result:"The winner is Circle",map:{top:{left:{taken:!1,shape:null},middle:{taken:!1,shape:null},right:{taken:!1,shape:null}},middle:{left:{taken:!1,shape:null},middle:{taken:!1,shape:null},right:{taken:!1,shape:null}},bottom:{left:{taken:!1,shape:null},middle:{taken:!1,shape:null},right:{taken:!1,shape:null}}},isTaken:function(e){return this.get("map."+e+".taken")},checkWinner:function(){var e=this;["top","middle","bottom"].forEach(function(t){var a=0;["right","left","middle"].forEach(function(n){if(a+="circle"===e.get("map."+t+"."+n+".shape")?1:0,a+="cross"===e.get("map."+t+"."+n+".shape")?-1:0,3===a||a===-3)return e.showWinner(e.get("map."+t+"."+n+".shape"))})}),["right","left","middle"].forEach(function(t){var a=0;["top","middle","bottom"].forEach(function(n){if(a+="circle"===e.get("map."+n+"."+t+".shape")?1:0,a+="cross"===e.get("map."+n+"."+t+".shape")?-1:0,3===a||a===-3)return e.showWinner(e.get("map."+n+"."+t+".shape"))})});var t=0;["top","middle","bottom"].forEach(function(a){["right","left","middle"].forEach(function(n){if((a+"."+n=="top.left"||a+"."+n=="middle.middle"||a+"."+n=="bottom.right")&&(t+="circle"===e.get("map."+a+"."+n+".shape")?1:0,t+="cross"===e.get("map."+a+"."+n+".shape")?-1:0,3===t||t===-3))return e.showWinner(e.get("map."+a+"."+n+".shape"))})});var a=0;["top","middle","bottom"].forEach(function(n){["right","left","middle"].forEach(function(r){if((n+"."+r=="top.right"||n+"."+r=="middle.middle"||n+"."+r=="bottom.left")&&(a+="circle"===e.get("map."+n+"."+r+".shape")?1:0,a+="cross"===e.get("map."+n+"."+r+".shape")?-1:0,3===a||t===-3))return e.showWinner(e.get("map."+n+"."+r+".shape"))})}),this.get("gameOver")||!function(){var t=0;["top","middle","bottom"].forEach(function(a){["right","left","middle"].forEach(function(n){if(t+=e.get("map."+a+"."+n+".taken")?1:0,9===t)return e.showWinner("draw")})})}()},reset:function(){var e=this;$(".row-container div").each(function(e){$(".row-container div").eq(e).removeClass("cross circle")}),["top","middle","bottom"].forEach(function(t){["right","left","middle"].forEach(function(a){e.set("map."+t+"."+a+".taken",!1),e.set("map."+t+"."+a+".shape",null)})}),this.set("isPlayerOnesGo",!0),this.set("winner",null),this.set("gameOver",!1),$(".mask").toggleClass("hidden"),$(".banner").toggleClass("hidden")},showWinner:function(e){this.set("gameOver",!0),"draw"===e?this.set("result","Too Bad. It was a draw!"):this.set("result","The winner was "+e+"! Well done!"),$(".mask").toggleClass("hidden"),$(".banner").toggleClass("hidden")},actions:{select:function(e){if(!this.isTaken(e)){this.set("map."+e+".taken",!0);var t=this.get("isPlayerOnesGo")?this.get("playerOne.shape"):this.get("playerTwo.shape");$(event.target).addClass(t),this.set("map."+e+".shape",t),this.toggleProperty("isPlayerOnesGo"),this.checkWinner()}},reset:function(){this.reset()}}})}),define("soar-tack/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("soar-tack/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("soar-tack/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("soar-tack/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("soar-tack/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","soar-tack/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("soar-tack/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("soar-tack/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("soar-tack/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("soar-tack/initializers/export-application-global",["exports","ember","soar-tack/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var r,i=a.default.exportApplicationGlobal;r="string"==typeof i?i:t.default.String.classify(a.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("soar-tack/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("soar-tack/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("soar-tack/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("soar-tack/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("soar-tack/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("soar-tack/router",["exports","ember","soar-tack/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){}),e.default=n}),define("soar-tack/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("soar-tack/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"soar-tack/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","tack-board",["loc",[null,[1,0],[1,14]]]]],locals:[],templates:[]}}())}),define("soar-tack/templates/components/tack-board",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.6",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"soar-tack/templates/components/tack-board.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","jumbotron vertical-center");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","btn-group pull-right"),e.setAttribute(r,"role","group");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","btn btn-primary reset");var l=e.createTextNode("Reset");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row-container");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border-top"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row-container");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border-left"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border-right"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row-container");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border-bottom"),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","cell no-border"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","mask hidden"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","banner vertical-center hidden");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("button");e.setAttribute(n,"type","button"),e.setAttribute(n,"class","btn btn-primary reset");var r=e.createTextNode("Play Again");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,1]),r=e.childAt(n,[1,1]),i=e.childAt(n,[3]),l=e.childAt(i,[1]),o=e.childAt(i,[3]),d=e.childAt(i,[5]),c=e.childAt(n,[5]),s=e.childAt(c,[1]),p=e.childAt(c,[3]),u=e.childAt(c,[5]),m=e.childAt(n,[7]),f=e.childAt(m,[1]),h=e.childAt(m,[3]),v=e.childAt(m,[5]),b=e.childAt(t,[4]),g=e.childAt(b,[3]),x=new Array(12);return x[0]=e.createElementMorph(r),x[1]=e.createElementMorph(l),x[2]=e.createElementMorph(o),x[3]=e.createElementMorph(d),x[4]=e.createElementMorph(s),x[5]=e.createElementMorph(p),x[6]=e.createElementMorph(u),x[7]=e.createElementMorph(f),x[8]=e.createElementMorph(h),x[9]=e.createElementMorph(v),x[10]=e.createMorphAt(e.childAt(b,[1]),0,0),x[11]=e.createElementMorph(g),x},statements:[["element","action",["reset"],[],["loc",[null,[4,58],[4,76]]]],["element","action",["select","top.left"],[],["loc",[null,[7,34],[7,64]]]],["element","action",["select","top.middle"],[],["loc",[null,[8,38],[8,70]]]],["element","action",["select","top.right"],[],["loc",[null,[9,34],[9,65]]]],["element","action",["select","middle.left"],[],["loc",[null,[12,39],[12,72]]]],["element","action",["select","middle.middle"],[],["loc",[null,[13,34],[13,69]]]],["element","action",["select","middle.right"],[],["loc",[null,[14,40],[14,74]]]],["element","action",["select","bottom.left"],[],["loc",[null,[17,34],[17,67]]]],["element","action",["select","bottom.middle"],[],["loc",[null,[18,41],[18,76]]]],["element","action",["select","bottom.right"],[],["loc",[null,[19,34],[19,68]]]],["content","result",["loc",[null,[25,6],[25,16]]]],["element","action",["reset"],[],["loc",[null,[26,54],[26,72]]]]],locals:[],templates:[]}}())}),define("soar-tack/config/environment",["ember"],function(e){var t="soar-tack";try{var a=t+"/config/environment",n=e.default.$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("soar-tack/app").default.create({name:"soar-tack",version:"0.0.0+eca933ae"});