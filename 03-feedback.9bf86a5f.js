function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,u,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,u=setTimeout(O,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=o}function O(){var e=g();if(j(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return d?m(n,o-(e-c)):n}(e))}function T(e){return u=void 0,v&&r?y(e):(r=i=void 0,a)}function h(){var e=g(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(d)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector('[name = "email"]'),message:document.querySelector('[name = "message"]')};let S={};!function(){const e=JSON.parse(localStorage.getItem("feedback-data"));e&&(y.email.value=e.email,y.message.value=e.message)}(),y.form.addEventListener("input",e(t)((function(e){S=JSON.parse(localStorage.getItem("feedback-data"))||{},S[e.target.name]=e.target.value,localStorage.setItem("feedback-data",JSON.stringify(S))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-data")}));
//# sourceMappingURL=03-feedback.9bf86a5f.js.map
