/*
录音
https://github.com/xiangyuecn/Recorder
src: engine/g711x.js
*/
!function(e){var t="object"==typeof window&&!!window.document,r=(t?window:Object).Recorder,n=r.i18n;!function(s,e,m,t){"use strict";var r=function(i,e,u,c){s.prototype["enc_"+i]={stable:!0,fast:!0,getTestMsg:function(){return m("d8YX::{1}；{2}音频文件无法直接播放，可用Recorder.{2}2wav()转码成wav播放；采样率比特率设置无效，固定为8000hz采样率、16位，每个采样压缩成8位存储，音频文件大小为8000字节/秒；如需任意采样率支持，请使用Recorder.{2}_encode()方法",0,e,i)}},s.prototype[i]=function(e,t,r){var n=this.set,a=n.sampleRate,o=8e3;if(n.bitRate=16,(n.sampleRate=o)<a)e=s.SampleData([e],a,o).data;else if(a<o)return void r(m("29UK::数据采样率低于{1}",0,o));var f=u(e);t(f.buffer,"audio/"+i)},s[i+"_encode"]=function(e){return u(e)},s[i+"_decode"]=function(e){return c(e)},s[i+"2wav"]=function(e,o,f){if(s.prototype.wav){var t=function(e,t){var r=new Uint8Array(e),n=c(r),a=s({type:"wav",sampleRate:8e3,bitRate:16});t&&(a.dataType="arraybuffer"),a.mock(n,8e3).stop(function(e,t,r){o(e,t,r)},f)};if(e instanceof ArrayBuffer)t(e,1);else{var r=new FileReader;r.onloadend=function(){t(r.result)},r.readAsArrayBuffer(e)}}else f(m.G("NeedImport-2",[i+"2wav","src/engine/wav.js"]))},s.prototype[i+"_envCheck"]=function(e,t){return""},s.prototype[i+"_start"]=function(e){return e.bitRate=16,e.sampleRate=8e3,{set:e,memory:new Uint8Array(5e5),mOffset:0}};s.prototype[i+"_stop"]=function(e){e&&e.memory&&(e.memory=null)},s.prototype[i+"_encode"]=function(e,t){if(e&&e.memory){var r=e.set,n=u(t);r.takeoffEncodeChunk?r.takeoffEncodeChunk(n):function(e,t){var r=t.length;if(e.mOffset+r>e.memory.length){var n=new Uint8Array(e.memory.length+Math.max(5e5,r));n.set(e.memory.subarray(0,e.mOffset)),e.memory=n}e.memory.set(t,e.mOffset),e.mOffset+=r}(e,n)}},s.prototype[i+"_complete"]=function(e,t,r,n){if(e&&e.memory){n&&this[i+"_stop"](e);var a=e.memory.buffer.slice(0,e.mOffset);t(a,"audio/"+i)}else r(m("quVJ::{1}编码器未start",0,i))}},i=[1,2,3,3,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];r("g711a","G.711 A-law (pcma)",function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++){var n,a=e[r];0<=a?n=213:(n=85,a=-a-1);var o=(i[a>>8&127]||8)-1,f=o<<4;f|=o<2?a>>4&15:a>>o+3&15,t[r]=f^n}return t},function(e){for(var t=new Int16Array(e.length),r=0;r<e.length;r++){var n=85^e[r],a=(15&n)<<4,o=(112&n)>>4;switch(o){case 0:a+=8;break;case 1:a+=264;break;default:a+=264,a<<=o-1}t[r]=128&n?a:-a}return t}),r("g711u","G.711 μ-law (pcmu、mu-law)",function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++){var n,a=e[r];a<0?(a=132-a,n=127):(a+=132,n=255);var o=(i[a>>8&127]||8)-1,f=o<<4|a>>o+3&15;t[r]=f^n}return t},function(e){for(var t=new Int16Array(e.length),r=0;r<e.length;r++){var n=~e[r],a=132+((15&n)<<3);a<<=(112&n)>>4,t[r]=128&n?132-a:a-132}return t})}(r,0,n.$T)}();