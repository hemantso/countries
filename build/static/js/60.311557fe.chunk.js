(this["webpackJsonpspeakypeaky-app"]=this["webpackJsonpspeakypeaky-app"]||[]).push([[60],{798:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return r})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return v})),n.d(e,"keyboardDidClose",(function(){return b})),n.d(e,"keyboardDidOpen",(function(){return h})),n.d(e,"keyboardDidResize",(function(){return y})),n.d(e,"resetKeyboardAssist",(function(){return d})),n.d(e,"setKeyboardClose",(function(){return p})),n.d(e,"setKeyboardOpen",(function(){return c})),n.d(e,"startKeyboardAssist",(function(){return s})),n.d(e,"trackViewportChanges",(function(){return k}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,d=function(){o={},u={},a=!1},s=function(t){f(t),t.visualViewport&&(u=v(t.visualViewport),t.visualViewport.onresize=function(){k(t),h()||y(t)?c(t):b(t)&&p(t)})},f=function(t){t.addEventListener("keyboardDidShow",(function(e){return c(t,e)})),t.addEventListener("keyboardDidHide",(function(){return p(t)}))},c=function(t,e){g(t,e),a=!0},p=function(t){w(t),a=!1},h=function(){var t=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&t>150},y=function(t){return a&&!b(t)},b=function(t){return a&&u.height===t.innerHeight},g=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(r)},w=function(t){var e=new CustomEvent(r);t.dispatchEvent(e)},k=function(t){o=Object.assign({},u),u=v(t.visualViewport)},v=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=60.311557fe.chunk.js.map