layui.define(["jquery","snapsvg","classie"],function(t){"use strict";if(!window.larrymsExtend){return false}var i=layui.$,s=layui.snapsvg,n=layui.classie;function e(t,i){for(var s in i){if(i.hasOwnProperty(s)){t[s]=i[s]}}return t}function o(t,i){this.el=t;this.options=e({},this.options);e(this.options,i);this._init()}o.prototype.options={speedIn:500,easingIn:mina.linear};o.prototype._init=function(){var t=Snap(this.el.querySelector("svg"));this.path=t.select("path");this.initialPath=this.path.attr("d");var i=this.el.getAttribute("data-opening");this.openingSteps=i?i.split(";"):"";this.openingStepsTotal=i?this.openingSteps.length:0;if(this.openingStepsTotal===0)return;var s=this.el.getAttribute("data-closing")?this.el.getAttribute("data-closing"):this.initialPath;this.closingSteps=s?s.split(";"):"";this.closingStepsTotal=s?this.closingSteps.length:0;this.isAnimating=false;if(!this.options.speedOut){this.options.speedOut=this.options.speedIn}if(!this.options.easingOut){this.options.easingOut=this.options.easingIn}};o.prototype.show=function(){if(this.isAnimating)return false;this.isAnimating=true;var t=this,i=function(){n.addClass(t.el,"pageload-loading")};this._animateSVG("in",i);n.addClass(this.el,"show")};o.prototype.hide=function(){var t=this;n.removeClass(this.el,"pageload-loading");this._animateSVG("out",function(){t.path.attr("d",t.initialPath);n.removeClass(t.el,"show");t.isAnimating=false})};o.prototype._animateSVG=function(t,i){var s=this,n=0,e=t==="out"?this.closingSteps:this.openingSteps,o=t==="out"?this.closingStepsTotal:this.openingStepsTotal,a=t==="out"?s.options.speedOut:s.options.speedIn,p=t==="out"?s.options.easingOut:s.options.easingIn,h=function(t){if(t>o-1){if(i&&typeof i=="function"){i()}return}s.path.animate({path:e[t]},a,p,function(){h(t)});t++};h(n)};window.SVGLoader=o;t("svgLoader",{})});