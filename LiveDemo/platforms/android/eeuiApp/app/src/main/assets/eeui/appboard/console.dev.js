"use strict";var _debug=app.requireModule("debug");console={open:!0,_:function(o){return o.map(function(o){return"[object object]"===Object.prototype.toString.call(o).toLowerCase()?JSON.stringify(o):o})},debug:function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];_debug.addLog("debug",this._(o))},log:function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];_debug.addLog("log",this._(o))},info:function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];_debug.addLog("info",this._(o))},warn:function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];_debug.addLog("warn",this._(o))},error:function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];_debug.addLog("error",this._(o))}};