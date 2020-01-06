(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],{14:function(e,r,a){},15:function(e,r,a){},16:function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),o=a(3),i=a.n(o),s=(a(14),a(15),a(4)),d=a(5),c=a(7),m=a(6),u=a(1),p=a(8),l=function(e){function r(){var e;return Object(s.a)(this,r),(e=Object(c.a)(this,Object(m.a)(r).call(this))).playSound=e.playSound.bind(Object(u.a)(e)),e.handleKeyPress=e.handleKeyPress.bind(Object(u.a)(e)),e}return Object(p.a)(r,e),Object(d.a)(r,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"playSound",value:function(){document.getElementById(this.props.keyTrigger).play(),this.displaySoundName()}},{key:"displaySoundName",value:function(){document.getElementById("display").innerHTML=this.props.id}},{key:"render",value:function(){return n.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.playSound},this.props.keyTrigger,n.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.url}))}}]),r}(n.a.Component);var y=function(){return n.a.createElement("main",{id:"drum-machine"},[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}].map((function(e){return n.a.createElement(l,{id:e.id,keyCode:e.keyCode,keyTrigger:e.keyTrigger,url:e.url})})),n.a.createElement("section",{id:"display"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,r,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.15f0b483.chunk.js.map