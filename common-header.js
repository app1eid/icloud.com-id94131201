/*
 * Babel v5.8.25
 * https://babeljs.io/
 * Licensed under the MIT license
 */

/*
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

/*
 * CanJS - 2.3.5
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 03 Dec 2015 23:34:11 GMT
 * Licensed MIT
 */

/*!
 * Detectizr v2.2.0
 * http://barisaydinoglu.github.com/Detectizr/
 *
 * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
 * Released under the MIT license
 *
 * Date: 2015-09-28T21:37Z
 */

/*
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

/*!
 * jquery.inputmask
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2015 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.2.0
 */

/*
 * lodash 3.10.1 lodash.com/license
 * Underscore.js 1.8.3 underscorejs.org/LICENSE
 */

/*
 * spin.js 2.3.2
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 */

/*
 * SystemJS v0.19.6
 * https://github.com/systemjs/systemjs
 * Copyright (C) 2013-2015 Guy Bedford
 * Licensed MIT
 */

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

/*
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * pmrpc 0.7.1 - Inter-widget remote procedure call library based on HTML5
 *               postMessage API and JSON-RPC. https://github.com/izuzak/pmrpc
 *
 * Copyright 2012 Ivan Zuzak, Marko Ivankovic
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"use strict";!function(e){var t={URL:"/jslog",METHOD:"POST",EXCEPTION_PRETEXT:"APPLE ID : ",LOG_LEVEL:"ERROR",ALLOWED_LOG_LEVELS:["ERROR","DEBUG","OFF"],WARN_CAPTURE_CONSOLE_COLOR:"background: #FFF0F0; color: red",NAMESPACE_FOR_PM:"pmrpc.",POST_MESSAGE_LOG_STATUS:"ON"},n=t.URL,o=t.LOG_LEVEL,i=t.NAMESPACE_FOR_PM,r="",s=t.POST_MESSAGE_LOG_STATUS,a=function(e){this.name="IllegalLogException",this.message=t.EXCEPTION_PRETEXT+e,this.stack=(new Error).stack},p=function(e,t){if(e&&"string"==typeof e&&t&&"string"==typeof t)try{window.sessionStorage&&sessionStorage.setItem(e,t)}catch(n){}},g=function(e){var t=" type, title, message are mandatory. ";if("undefined"==typeof e)throw new a("logObject is not defined.");if("undefined"==typeof e.type)throw new a("logObject.type is not defined."+t);if("undefined"==typeof e.title)throw new a("logObject.title is not defined."+t);if("undefined"==typeof e.message)throw new a("logObject.message is not defined."+t);return!0},c=function(e){if(!e)throw new a("Invalid endpoint URL: "+e);return!0},E=function(e){c(e)&&(n=e)},f=function(){return n},d=function(e){e&&"string"==typeof e&&e.toUpperCase().trim()&&-1!==t.ALLOWED_LOG_LEVELS.indexOf(e.toUpperCase().trim())&&(o=e.toUpperCase().trim())},O=function(e){return o},l=function(e){if(!e||"NULL"===e.toString().toUpperCase().trim()||"UNDEFINED"===e.toString().toUpperCase().trim())throw new a("SCNT token is not valid.");r=e},L=function(e,i){if(g(e)){var s=function(){p(t.EXCEPTION_PRETEXT,"Logging transaction failed or cancelled at."+n)};e.message=t.EXCEPTION_PRETEXT+e.message,e.details&&(e.details=JSON.stringify(e.details)),i&&l(i);try{var a=new XMLHttpRequest;a.open(t.METHOD,n,!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("Accept","application/json"),a.setRequestHeader("scnt",r),a.addEventListener("error",s),a.addEventListener("abort",s),a.onreadystatechange=function(){204!==a.status},"OFF"!==o&&("ERROR"===o?"ERROR"===e.type.toUpperCase().trim()&&a.send(JSON.stringify(e)):"DEBUG"===o&&a.send(JSON.stringify(e)))}catch(c){}}},u=function(e){setTimeout(function(){throw e},0)},S=function(){return i},R=function(e){"string"==typeof e&&e.trim()&&(i=e)},m=function(){return s},T=function(e){s="string"==typeof e&&e.trim()&&-1!==["ON","OFF"].indexOf(e.toUpperCase().trim())?e.toUpperCase().trim():t.POST_MESSAGE_LOG_STATUS},y={log:L,onerror:u,getLoggingEndpoint:f,setLoggingEndpoint:E,setGlobalLogLevel:d,getGlobalLogLevel:O,setSCNT:l,getNamespaceForPM:S,setNamespaceForPM:R,getPMLoggingStatus:m,setPMLoggingStatus:T};a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,e.AppleID=e.AppleID||{},e.AppleID.service=e.AppleID.service||{},e.AppleID.service.JSLogger=e.AppleID.service.JSLogger||y,window.onerror=function(e,n,o,r,a){if("ON"===s){var p=parseInt(1e16*Math.random()).toString(),g={jsonrpc:"2.0",method:"log",params:[{data:"AppleAuth failed to load."}],id:p};window.parent.postMessage(i+JSON.stringify(g),"*")}y.log({title:a&&(a.name||"ERROR"),type:t.LOG_LEVEL,message:e,stacktrace:a&&(a.stack||JSON.stringify(a)),details:{file:n,lineno:o,colno:r,caught:"NO"}})}}(window);
