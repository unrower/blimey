;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="d280c9fc4d7d36a95ab10f27c14a63b0";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={} 
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["p8NrvafNgcuj"]={appId:"NSNxwgSQIL9H",scope:{}};;CloudflareApps.installs["p8NrvafNgcuj"].options={"countPosition":"none","location":{"method":"prepend","selector":"body"},"shape":"small","type":"hover"};;CloudflareApps.installs["p8NrvafNgcuj"].selectors={"location.selector":"body"};;if(CloudflareApps.matchPage(CloudflareApps.installs['p8NrvafNgcuj'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=1);})
([,(function(module,exports,__webpack_require__){"use strict";(function(){'use strict'
if(!window.addEventListener)return
var APP_ATTRIBUTE='data-cf-pin'
var VENDOR_METHOD='cfPinBuild'
var IS_PREVIEW="p8NrvafNgcuj"==='preview'
var options=CloudflareApps.installs['p8NrvafNgcuj'].options
var buttonContainer=void 0
var observer=void 0
var url=void 0
if(IS_PREVIEW){var _INSTALL$proxy$origin=CloudflareApps.proxy.originalURL.parsed,host=_INSTALL$proxy$origin.host,path=_INSTALL$proxy$origin.path,scheme=_INSTALL$proxy$origin.scheme
url=scheme+'://'+host+path}else{url=window.location}
function insertButton(){buttonContainer=CloudflareApps.createElement(options.location,buttonContainer)
buttonContainer.setAttribute('app','pinterest-save-button')
if(!buttonContainer.parentElement)return
var button=document.createElement('a')
button.innerHTML='\n      <img src="https://assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" />\n    '
button.href='https://www.pinterest.com/pin/create/button/'
button.setAttribute('data-pin-do','buttonBookmark')
button.setAttribute('data-pin-save','true')
button.setAttribute('data-pin-url',url)
switch(options.shape){case'round':button.setAttribute('data-pin-shape','round')
break
case'tall':button.setAttribute('data-pin-tall','true')
break}
if(options.shape!=='round'&&options.countPosition!=='none'){button.setAttribute('data-pin-count',options.countPosition)}
buttonContainer.appendChild(button);if(window[VENDOR_METHOD]){window[VENDOR_METHOD].call()}}
function prepImage(image){var description=document.title
if(image.parentElement.nodeName==='FIGURE'){var figcaption=image.parentElement.querySelector('figcaption')
if(figcaption)description=figcaption.textContent}else if(image.alt){description=image.alt}else{var meta=document.head.querySelector('meta[name="description"]')||document.head.querySelector('meta[name="og:description"]')
if(meta&&meta.content)description=meta.content}
image.setAttribute('data-pin-description',description)
image.setAttribute(APP_ATTRIBUTE,'parsed')}
function parseImages(){var images=Array.prototype.slice.call(document.body.querySelectorAll('img'))
images.filter(function(image){if(image.getAttribute(APP_ATTRIBUTE)==='parsed')return false
if(image.getAttribute('role')==='presentation')return false
if(image.width<=100)return false
if(image.height<=100)return false
return true}).forEach(prepImage)}
function updateElements(){if(buttonContainer&&buttonContainer.parentElement){buttonContainer.parentElement.removeChild(buttonContainer)}
if(observer){observer.disconnect()}
if(options.type==='once'){insertButton()
return}
parseImages
();observer=new window.MutationObserver(parseImages)}
function bootstrap(){var pinterestVendorScript=document.createElement('script')
pinterestVendorScript.src='https://assets.pinterest.com/js/pinit.js'
pinterestVendorScript.setAttribute('data-pin-build',VENDOR_METHOD)
if(options.type==='hover'){pinterestVendorScript.setAttribute('data-pin-hover','true')
pinterestVendorScript.setAttribute('data-pin-save','true')}
pinterestVendorScript.addEventListener('load',updateElements)
pinterestVendorScript.addEventListener('error',function(){console.warn('Could not load Pinterest vendor script')})
document.head.appendChild(pinterestVendorScript)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['p8NrvafNgcuj'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
updateElements()}}})()})]);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJwaW50ZXJlc3Qtc2F2ZS1idXR0b24iXSB7CiAgZGlzcGxheTogYmxvY2s7CiAgbWFyZ2luOiAxZW0gMDsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgei1pbmRleDogMTsKfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();
