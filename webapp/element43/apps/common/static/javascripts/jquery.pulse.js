/*global jQuery*//*jshint curly:false*/(function(a,b,c,d){"use strict";var e={pulses:1,interval:0,returnDelay:0,duration:500};a.fn.pulse=function(c,d,f){return typeof d=="function"&&(f=d,d={}),d=a.extend({},e,d),d.interval>=0||(d.interval=0),d.returnDelay>=0||(d.returnDelay=0),d.duration>=0||(d.duration=500),d.pulses>=-1||(d.pulses=1),typeof f!="function"&&(f=function(){}),this.each(function(){function j(){if(d.pulses>-1&&++i>d.pulses)return f.apply(e);e.animate(c,{duration:d.duration/2,complete:function(){b.setTimeout(function(){e.animate(h,{duration:d.duration/2,complete:function(){b.setTimeout(j,d.interval)}})},d.returnDelay)}})}var e=a(this),g,h={};for(g in c)c.hasOwnProperty(g)&&(h[g]=e.css(g));var i=0;j()})}})(jQuery,window,document);