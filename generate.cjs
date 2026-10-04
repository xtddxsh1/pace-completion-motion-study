const fs = require('node:fs');
// Original vector motion study. Coordinates and keyframes remain editable here.
const FPS = 60, FRAMES = 120;
const colors = { lime: [0.75, 0.98, 0.32, 1], track: [0.16, 0.22, 0.23, 1], white: [1, 1, 1, 1] };
const value = k => ({a: 0, k});
const ease = {i: {x: [0.65], y: [1]}, o: {x: [0.25], y: [0]}};
const key = (t,s,e) => ({t,s,...(e ? {e,...ease} : {h:1})});
const stroke = (color,width) => ({ty:'st',c:value(color),o:value(100),w:value(width),lc:2,lj:2,ml:4});
const transform = () => ({ty:'tr',p:value([0,0]),a:value([0,0]),s:value([100,100]),r:value(0),o:value(100),sk:value(0),sa:value(0)});
const trim = (start,end) => ({ty:'tm',s:value(0),e:{a:1,k:[key(start,[0],[100]),key(end,[100])]},o:value(0),m:1});
const shape = (name,items) => ({ty:'gr',nm:name,it:[...items,transform()]});
const circle = {ty:'el',p:value([0,0]),s:value([154,154]),d:1};
const check = {ty:'sh',ks:value({i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-28,0],[-7,21],[33,-23]],c:false})};
const animation = {
  v:'5.13.0',fr:FPS,ip:0,op:FRAMES,w:240,h:240,nm:'Pace completion — original technical study',ddd:0,assets:[],
  markers:[{tm:0,cm:'start',dr:0},{tm:90,cm:'complete',dr:30}],
  layers:[{
    ddd:0,ind:1,ty:4,nm:'Completion symbol',sr:1,ip:0,op:FRAMES,st:0,bm:0,
    ks:{o:value(100),r:value(0),p:value([120,120,0]),a:value([0,0,0]),
      s:{a:1,k:[key(0,[88,88,100],[104,104,100]),key(68,[104,104,100],[100,100,100]),key(90,[100,100,100])] }},
    shapes:[shape('Check — frames 64 to 90',[check,stroke(colors.white,10),trim(64,90)]),
      shape('Progress ring — frames 0 to 72',[circle,stroke(colors.lime,8),trim(0,72)]),
      shape('Track',[circle,stroke(colors.track,8)])]
  }]
};
fs.writeFileSync(__dirname+'/completion.json',JSON.stringify(animation));
console.log('completion.json generated: '+Buffer.byteLength(JSON.stringify(animation))+' bytes');
