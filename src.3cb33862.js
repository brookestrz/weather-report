parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=105,t=-1,n=function(){var t=document.querySelector("#temp"),n=t.textContent;n<e&&n++,t.textContent=n},o=function(){var e=document.querySelector("#temp"),n=e.textContent;n>t&&(n-=1),e.textContent=n},c=function(){var e=document.querySelector("#temp"),t=e.textContent;t>=80?(e.style.color="red",document.body.style.backgroundImage="url('styles/so-hot-oh-my.gif')"):t>=70?(e.style.color="orange",document.body.style.backgroundImage="url('styles/sunny.gif')"):t>=60?(e.style.color="yellow",document.body.style.backgroundImage="url('styles/peekaboo-sunshine.gif')"):t>=50?(e.style.color="blue",document.body.style.backgroundImage="url('styles/totally-spies-sam.gif')"):(e.style.color="blue",document.body.style.backgroundImage="url('styles/spongebob-patrick-star.gif')")},a=function(){var e=document.getElementById("search").value;document.getElementById("city_name").innerHTML=e},l=function(){var e=document.getElementById("search"),t=document.getElementById("city_name");e.value="Atlanta",t.textContent="Atlanta"},r=function(){var e=document.getElementById("skySelect").value,t=document.getElementById("card");"sunny"===e?t.style.backgroundImage="url('styles/istockphoto-545096038-612x612.jpg')":"cloudy"===e?t.style.backgroundImage="url('styles/istockphoto-1023201682-612x612.jpg')":"rainy"===e?t.style.backgroundImage="url('styles/istockphoto-466693533-612x612.jpg')":"snowy"===e&&(t.style.backgroundImage="url('styles/istockphoto-490686800-612x612.jpg')")},d=function(){var e=document.querySelector("#arrowUp"),t=document.querySelector("#arrowDown"),d=document.getElementById("search"),s=document.getElementById("upDate"),y=document.getElementById("skySelect"),m=document.getElementById("reset");e.addEventListener("click",n),t.addEventListener("click",o),e.addEventListener("click",c),t.addEventListener("click",c),d.addEventListener("keyup",a),s.addEventListener("click",u),y.addEventListener("change",r),m.addEventListener("click",l)},u=function(){var e,t,n=document.getElementById("search").value;axios.get("https://weatherapibrooke.herokuapp.com/location?q=".concat(n)).then(function(n){e=n.data[0].lat,t=n.data[0].lon,s(e,t)}).catch(function(e){console.log(e)})},s=function(e,t){axios.get("https://weatherapibrooke.herokuapp.com/weather?lat=".concat(e,"&lon=").concat(t,"&units=imperial")).then(function(e){var t=document.querySelector("#temp"),n=document.querySelector("#feeL");console.log(e.data),t.textContent=Math.round(e.data.main.temp),n.textContent=Math.round(e.data.main.feels_like),c()}).catch(function(e){console.log(e)})};document.addEventListener("DOMContentLoaded",d);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/weather-report/src.3cb33862.js.map