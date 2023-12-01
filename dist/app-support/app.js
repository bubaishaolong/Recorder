/*
录音
https://github.com/xiangyuecn/Recorder
src: app-support/app.js
*/
!function(n){var t="object"==typeof window&&!!window.document,r=t?window:Object,e=r.Recorder,o=e.i18n;!function(n,p,t,_,r){"use strict";var v={LM:"2023-12-01 20:18",Current:0,Platforms:{}},S=v.Platforms,C="RecordApp",a="RequestPermission",e="RegisterPlatform",o=n[C];if(o&&o.LM==v.LM)return o.CLog(_("uXtA::重复导入{1}",0,C),3);n[C]=v,(p[C]=v).__SID_=0;var R=v.__SID=function(){return++v.__SID_},m=v.__Sync=function(n,t,r){return v.__SID_==n||(t&&y(_("kIBu::同时多次调用：{1}，旧的回调被丢弃",0,t)+(r?", error: "+r:""),3),!1)},y=function(){var n=arguments;n[0]="["+(y.Tag||C)+"]["+(v.Current&&v.Current.Key||"?")+"]"+n[0],p.CLog.apply(null,n)};v.CLog=y,v[e]=function(n,t){t.Key=n,S[n]&&y(_("ha2K::重复注册{1}",0,n),3),S[n]=t},v.__StopOnlyClearMsg=function(){return _("wpTL::仅清理资源")};var s="Default-H5";u={Support:function(n){n(!0)},CanProcess:function(){return!0}},v[e](s,u),u[a]=function(n,t,r){var e=v.__Rec;e&&(e.close(),v.__Rec=null);var o=p();o.open(function(){t()},r)},u.Start=function(n,t,r,e){var o=v.__Rec;null!=o&&o.stop(),v.__Rec=o=p(t),o.appSet=t,o.dataType="arraybuffer",o.open(function(){m(n)&&o.start(),r()},e)},u.Stop=function(t,e,r){var o=v.__Rec,n=e?"":v.__StopOnlyClearMsg();if(!o)return p.IsOpen()&&((o=p()).open(),o.close()),void r(_("bpvP::未开始录音")+(n?" ("+n+")":""));var u=function(){if(m(t))for(var n in o.close(),o.set)o.appSet[n]=o.set[n]},a=function(n){u(),r(n)};e?o.stop(function(n,t,r){u(),e(n,t,r)},a):a(n)},v.GetCurrentRecOrNull=function(){return v.__Rec||null},v.Pause=function(){var n=v.Current,t="Pause";if(!n||!n[t]||!1===n[t]()){var r=v.__Rec;r&&c(t)&&r.pause()}},v.Resume=function(){var n=v.Current,t="Resume";if(!n||!n[t]||!1===n[t]()){var r=v.__Rec;r&&c(t)&&r.resume()}};var u;var c=function(n){var t=v.Current;if(t&&t.CanProcess())return 1;y(_("fLJD::当前环境不支持实时回调，无法进行{1}",0,n),3)};v.Install=function(n,r){var e=v.Current;if(e)n&&n();else{var u=v.__reqs||(v.__reqs=[]);u.push({s:n,f:r}),n=function(){t("s",arguments)},r=function(){t("f",arguments)};var t=function(n,t){for(var r=[].concat(u),e=u.length=0;e<r.length;e++){var o=r[e][n];o&&o.apply(null,t)}};if(!(1<u.length)){var o,a=[s];for(var c in S)c!=s&&a.push(c);a.reverse();var i=function(t){o=a[t],(e=S[o]).Support(function(n){if(!n)return i(t+1);e.Install?e.Install(f,r):f()})},f=function(){v.Current=e,y("Install platform: "+o),n()};i(0)}}},v[a]=function(t,e){var o=R(),u=C+"."+a,r=function(n,t){var r=n+", isUserNotAllow:"+(t=!!t);m(o,u,r)&&(y(_("YnzX::录音权限请求失败：")+r,1),e&&e(n,t))};y(a+"..."),v.Install(function(){if(m(o,u)){var n=w();n?r(n):v.Current[a](o,function(){m(o,u)&&(y(a+" Success"),t&&t())},r)}},r)};var d=function(){return _("nwKR::需先调用{1}",0,a)},w=function(){var n="";return v.Current.Key!=s||r||(n=_("citA::当前不是浏览器环境，需引入针对此平台的支持文件（{1}），或调用{2}自行实现接入",0,"src/app-support/app-xxx-support.js",C+"."+e)),n};v.Start=function(n,t,r){var e=R(),o=C+".Start",u=function(n){m(e,o,n)&&(y(_("ecp9::开始录音失败：")+n,1),r&&r(n))};y("Start...");var a=v.Current;if(a){n||(n={});var c={type:"mp3",sampleRate:16e3,bitRate:16,onProcess:function(){}};for(var i in c)n[i]||(n[i]=c[i]);for(var i in S){var f=S[i];f.AllStart_Clean&&f.AllStart_Clean(n)}var s=!1;if(a.Start_Check&&(s=a.Start_Check(n)),!1===s){var l=p(n);(s=l.envCheck({envName:a.Key,canProcess:a.CanProcess()}))||(s=w())}s?u(_("EKmS::不能录音：")+s):(v._SRec=0,a.Start(e,n,function(){m(e,o)&&(y(_("k7Qo::已开始录音"),n),v._STime=Date.now(),t&&t())},u))}else u(d())},v.Stop=function(e,t){var o=R(),u=C+".Stop",n=function(n){if(m(o,u,n)){y(_("Douz::结束录音失败：")+n,e?1:0);try{t&&t(n)}finally{a()}}},a=function(){v._SRec=v.__Rec,v.__Rec=null};y("Stop... "+_("wqSH::和Start时差：{1}ms",0,v._STime?Date.now()-v._STime:-1)+" Recorder.LM:"+p.LM+" "+C+".LM:"+v.LM);var c=Date.now(),r=v.Current;r?r.Stop(o,e?function(n,t,r){if(m(o,u)){y(_("g3VX::结束录音 耗时{1}ms 音频时长{2}ms 文件大小{3}b {4}",0,Date.now()-c,t,n.byteLength,r));try{e(n,t,r)}finally{a()}}}:null,n):n(d())}}(r,e,0,o.$T,t),"function"==typeof define&&define.amd&&define(function(){return r.RecordApp}),"object"==typeof module&&module.exports&&(module.exports=r.RecordApp)}();