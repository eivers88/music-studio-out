(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{4991:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/holiday/2024",function(){return s(6554)}])},6554:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>R});var r=s(4848),n=s(8935),a=s.n(n),o=s(4078),c=s.n(o),l=s(4196),i=s(764),d=s.n(i),_=s(5556),m=s.n(_),u=s(6540);function h(e){return"string"==typeof e}function g(e){return JSON.parse(JSON.stringify(e))}let p=e=>{let{styles:t={},base:s="container",theme:r,parent:n}=e;return(0,u.useMemo)(()=>{let e="";return!function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}(t)?(console.warn("useClassNames requires an object for the styles property"),e):(s&&h(s)&&t[s]&&(e+="".concat(t[s]," ")),r&&h(r)&&r.split(" ").forEach(s=>{t[s]&&(e+="".concat(t[s]," "))}),n&&h(n)&&""!==n&&(e+="".concat(n," ")),e.trim())},[t,s,r,n])};var y=s(9260),x=s.n(y);let j=e=>{let{src:t,alt:s,theme:n,className:a,style:o={}}=e,c=p({styles:x(),theme:n,parent:a});return(0,r.jsx)("div",{className:c,style:o,children:(0,r.jsx)("img",{src:t,alt:s})})};j.propTypes={src:m().string.isRequired,alt:m().string.isRequired,theme:m().string,className:m().string,style:m().object};var f=s(3069),b=s.n(f);let v=e=>{let{src:t,theme:s,className:n,style:a={}}=e,o=p({styles:b(),theme:s,parent:n});return(0,r.jsx)("span",{className:o,style:{WebkitMaskImage:"url(/images/icons/".concat(t,")"),...a}})};v.propTypes={src:m().string.isRequired,theme:m().string,className:m().string,style:m().object};var N=s(2670),w=s.n(N);let k=e=>{let{src:t,theme:s,className:n,style:a={},children:o}=e,c=p({styles:w(),theme:s,parent:n}),l="url(".concat(t,")");return o?(0,r.jsx)("div",{className:c,style:{backgroundImage:l,...a},children:o}):(0,r.jsx)("div",{className:c,style:{backgroundImage:l,...a}})};k.propTypes={src:m().string.isRequired,theme:m().string,className:m().string,style:m().object,children:m().node};var C=s(3368),H=s.n(C);let W=["/audio/WonderfullChristmastime/a.mp3","/audio/WonderfullChristmastime/b.mp3","/audio/WonderfullChristmastime/c.mp3"],R=()=>{let[e,t]=(0,u.useState)({mounted:!1,trees:[!1,!1,!1,!1,!1,!1,!1,!1,!1],completed:!1,note:0}),s=(0,u.useRef)([]),n=(0,u.useRef)();return(0,u.useEffect)(()=>{s.current.length||(n.current=new l.Howl({src:"/audio/WonderfullChristmastime/snare.mp3",preload:!0}),W.forEach(e=>{let t=new l.Howl({src:e,preload:!0});s.current.push(t)}))},[]),(0,u.useEffect)(()=>{if(e.mounted){if(e.completed){let e=new l.Howl({src:"/audio/WonderfullChristmastime/song.mp3"});setTimeout(()=>{e.play()},1250)}else e.trees.includes(!0)||t(e=>{let t=g(e);return t.completed=!0,t})}else t(e=>{let t=g(e);return t.trees=function(){let e=Array(9).fill(!1),t=[];for(;t.length<3;){let e=Math.floor(9*Math.random());t.includes(e)||t.push(e)}return t.forEach(t=>{e[t]=!0}),e}(),t.mounted=!0,t})},[e]),(0,r.jsxs)("div",{className:"".concat(d().page," ").concat(c().variable," ").concat(a().variable),children:[(0,r.jsxs)(H(),{children:[(0,r.jsx)("title",{children:"Season's Greetings!"}),(0,r.jsx)("meta",{name:"description",content:"A Holiday Blessing from Aaron"}),(0,r.jsx)("meta",{property:"og:title",content:"A Holiday Blessing from Aaron"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://aaronmusic.studio/holiday/2024/"}),(0,r.jsx)("meta",{property:"og:image",content:"https://aaronmusic.studio/holiday/2024/card.jpg"})]}),(0,r.jsx)(k,{src:"/images/holiday/2024/handmade-paper.webp",className:d().textureA}),(0,r.jsxs)("div",{className:"".concat(d().card,"  ").concat(e.completed?d().completed:""),children:[(0,r.jsxs)("div",{className:d().content,children:[(0,r.jsx)("div",{className:d().left,children:(0,r.jsx)(j,{src:"/images/holiday/2024/aaron.webp"})}),(0,r.jsxs)("div",{className:d().right,children:[(0,r.jsx)("h1",{dangerouslySetInnerHTML:{__html:"Season's Greetings"}}),(0,r.jsxs)("h3",{children:["Wishing you the best this"," ",(0,r.jsx)("span",{className:d().nobr,children:"holiday season."})]}),(0,r.jsxs)("h3",{children:["May the new year bring you good"," ",(0,r.jsx)("span",{className:d().nobr,children:"health and fortune."})]}),(0,r.jsxs)("h1",{children:[(0,r.jsx)(j,{src:"/images/holiday/2024/evergreen.svg",className:d().tree})," ","aaron"]})]})]}),(0,r.jsxs)("div",{className:"".concat(d().gate," ").concat(e.mounted?d().mounted:""),children:[(0,r.jsxs)("div",{className:d().notice,children:[(0,r.jsx)(v,{src:"headphones.svg",className:d().icon}),(0,r.jsx)("span",{className:d().text,children:"Turn Volume Up"}),(0,r.jsx)(v,{src:"musical-note.svg",className:d().icon})]}),(0,r.jsxs)("h2",{children:["Tap on the ",(0,r.jsx)("span",{className:d().green,children:"green"})," trees to recieve your ",(0,r.jsx)("span",{className:d().nobr,children:"holiday blessing"})]}),(0,r.jsx)("div",{className:d().grid,children:(null==e?void 0:e.trees)?e.trees.map((a,o)=>(0,r.jsx)("div",{className:"".concat(d().tree," ").concat(a?d().active:""),style:{transitionDelay:"".concat((o+1)*100,"ms, ").concat((o+1)*100,"ms")},children:(0,r.jsx)("button",{style:{WebkitMaskImage:"url(/images/holiday/2024/tree.svg)"},onClick:()=>{a?(s.current[e.note].play(),t(e=>{let t=g(e);return t.trees[o]=!1,t.note+=1,t})):n.current.play()}})},o)):null})]}),(0,r.jsx)(k,{src:"/images/holiday/2024/cream-paper.webp",className:d().textureB})]})]})}},2670:e=>{e.exports={container:"background-image_container__lxlG7",center:"background-image_center__zjC6k",containCenter:"background-image_containCenter__ydxw8",coverTop:"background-image_coverTop__GlInS",coverBottom:"background-image_coverBottom__ihPsQ",coverCenter:"background-image_coverCenter__8HxRw",anchorBottom:"background-image_anchorBottom__DYcB7",anchorLeft:"background-image_anchorLeft__3hG3D",fullWidth:"background-image_fullWidth__5yR65"}},3069:e=>{e.exports={container:"icon_container__WWzR2",white:"icon_white__cgMHp"}},9260:e=>{e.exports={container:"picture_container__XFqMD"}},764:e=>{e.exports={page:"styles_page__HaS32",textureA:"styles_textureA___RnQm",textureB:"styles_textureB__OghUD",card:"styles_card__yMofo",green:"styles_green__Yqow4",completed:"styles_completed__bUXud",content:"styles_content__lfnge",left:"styles_left__jbCXf",right:"styles_right__sqHwi",tree:"styles_tree__KWmaQ",dance:"styles_dance__5cIy5",gate:"styles_gate__Ao5_h",notice:"styles_notice__ZOLuH",text:"styles_text__0SqMr",icon:"styles_icon__HfRRU",grid:"styles_grid__cwNeD",active:"styles_active__vHQva",mounted:"styles_mounted__r0rth",nobr:"styles_nobr__xjeL5"}}},e=>{var t=t=>e(e.s=t);e.O(0,[863,636,593,792],()=>t(4991)),_N_E=e.O()}]);