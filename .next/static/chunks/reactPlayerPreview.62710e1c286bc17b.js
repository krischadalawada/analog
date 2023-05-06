"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7664],{7284:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d="64px",g={},m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,r,n,i=s(a);function a(){var e;u(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(y(e=i.call.apply(i,[this].concat(r))),"mounted",!1),b(y(e),"state",{image:null}),b(y(e),"handleKeyPress",(function(t){"Enter"!==t.key&&" "!==t.key||e.props.onClick()})),e}return t=a,(r=[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.url,n=t.light;e.url===r&&e.light===n||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(e){var t=this,r=e.url,n=e.light,i=e.oEmbedUrl;if(!o.default.isValidElement(n))if("string"!==typeof n){if(!g[r])return this.setState({image:null}),window.fetch(i.replace("{url}",r)).then((function(e){return e.json()})).then((function(e){if(e.thumbnail_url&&t.mounted){var n=e.thumbnail_url.replace("height=100","height=480");t.setState({image:n}),g[r]=n}}));this.setState({image:g[r]})}else this.setState({image:n})}},{key:"render",value:function(){var e=this.props,t=e.light,r=e.onClick,n=e.playIcon,i=e.previewTabIndex,a=this.state.image,u=o.default.isValidElement(t),l={display:"flex",alignItems:"center",justifyContent:"center"},f={preview:c({width:"100%",height:"100%",backgroundImage:a&&!u?"url(".concat(a,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},l),shadow:c({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:d,width:d,height:d,position:u?"absolute":void 0},l),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=o.default.createElement("div",{style:f.shadow,className:"react-player__shadow"},o.default.createElement("div",{style:f.playIcon,className:"react-player__play-icon"}));return o.default.createElement("div",{style:f.preview,className:"react-player__preview",onClick:r,tabIndex:i,onKeyPress:this.handleKeyPress},u?t:null,n||s)}}])&&l(t.prototype,r),n&&l(t,n),a}(o.Component);t.default=m}}]);