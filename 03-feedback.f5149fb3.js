var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=t.querySelector('input[name="email"]'),i=t.querySelector('textarea[name="message"]');var o={},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function y(e){return c=e,u=setTimeout(S,t),l?v(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=g();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?p(n,r-(e-c)):n}(e))}function h(e){return u=void 0,d&&i?v(e):(i=o=void 0,a)}function O(){var e=g(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return y(f);if(s)return u=setTimeout(S,t),v(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=w(t)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(w(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:h(g())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}o=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};t.addEventListener("input",o((function(e){const t={email:n.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(n.value=e.email||"",i.value=e.message||"")})),t.addEventListener("submit",(e=>{e.preventDefault();const o={email:n.value,message:i.value};console.log(o),localStorage.removeItem("feedback-form-state"),t.reset()}));
//# sourceMappingURL=03-feedback.f5149fb3.js.map