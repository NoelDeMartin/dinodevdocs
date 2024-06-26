"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[76210],{25419:(e,t,n)=>{n.d(t,{A:()=>r});const r=function(e){return"string"==typeof e}},12132:(e,t,n)=>{n.d(t,{A:()=>K});var r=n(9668),o=n(21367),i=n(96540),s=n(20053),l=n(75659),a=n(16375),u=n(74220),c=n(96852),p=n(29471),d=n(11450);var h=n(43328),f=n(17241);function m(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var r=m(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var l={};for(var a in t){if(o[a])for(r=0;r<o[a].length;r++){var u=o[a][r];l[o[a][r]]=n(u)}l[a]=n(a)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(t,r);return Object.keys(o).forEach((function(s){var l=o[s];if((0,i.isValidElement)(l)){var a=s in t,u=s in r,c=t[s],p=(0,i.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,i.isValidElement)(c)&&(o[s]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:b(l,"exit",e),enter:b(l,"enter",e)})):o[s]=(0,i.cloneElement)(l,{in:!1}):o[s]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:b(l,"exit",e),enter:b(l,"enter",e)})}})),o}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},A=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,h.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,m(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.A)(e,["component","childFactory"]),s=this.state.contextValue,l=y(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(f.A.Provider,{value:s},l):i.createElement(f.A.Provider,{value:s},i.createElement(t,r,l))},t}(i.Component);A.propTypes={},A.defaultProps={component:"div",childFactory:function(e){return e}};const g=A;n(85055),n(4146);var x=n(37521);n(71287);function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,x.J)(t)}var E=function(){var e=R.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var M=n(74848);const k=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:l,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=i.useState(!1),f=(0,s.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-a/2+l,left:-a/2+o},b=(0,s.A)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),i.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,M.jsx)("span",{className:f,style:m,children:(0,M.jsx)("span",{className:b})})};var T=n(38413);const P=(0,T.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),C=["center","classes","className"];let V,w,S,$,j=e=>e;const D=E(V||(V=j`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),L=E(w||(w=j`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),B=E(S||(S=j`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),N=(0,a.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),F=(0,a.Ay)(k,{name:"MuiTouchRipple",slot:"Ripple"})($||($=j`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),P.rippleVisible,D,550,(({theme:e})=>e.transitions.easing.easeInOut),P.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),P.child,P.childLeaving,L,550,(({theme:e})=>e.transitions.easing.easeInOut),P.childPulsate,B,(({theme:e})=>e.transitions.easing.easeInOut)),I=i.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:a={},className:c}=n,p=(0,o.A)(n,C),[d,h]=i.useState([]),f=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=i.useRef(!1),v=i.useRef(null),y=i.useRef(null),A=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,M.jsx)(F,{classes:{ripple:(0,s.A)(a.ripple,P.ripple),rippleVisible:(0,s.A)(a.rippleVisible,P.rippleVisible),ripplePulsate:(0,s.A)(a.ripplePulsate,P.ripplePulsate),child:(0,s.A)(a.child,P.child),childLeaving:(0,s.A)(a.childLeaving,P.childLeaving),childPulsate:(0,s.A)(a.childPulsate,P.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},f.current)])),f.current+=1,m.current=i}),[a]),R=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=l||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const s=i?null:A.current,a=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(o)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{y.current&&(y.current(),y.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[l,x]),E=i.useCallback((()=>{R({},{pulsate:!0})}),[R]),k=i.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void(v.current=setTimeout((()=>{k(e,t)})));y.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:E,start:R,stop:k})),[E,R,k]),(0,M.jsx)(N,(0,r.A)({className:(0,s.A)(P.root,a.root,c),ref:A},p,{children:(0,M.jsx)(g,{component:null,exit:!0,children:d})}))}));var O=n(31609);function z(e){return(0,O.A)("MuiButtonBase",e)}const X=(0,T.A)("MuiButtonBase",["root","disabled","focusVisible"]),U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Y=(0,a.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),K=i.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:y=!1,disableTouchRipple:A=!1,focusRipple:g=!1,LinkComponent:x="a",onBlur:R,onClick:E,onContextMenu:k,onDragLeave:T,onFocus:P,onFocusVisible:C,onKeyDown:V,onKeyUp:w,onMouseDown:S,onMouseLeave:$,onMouseUp:j,onTouchEnd:D,onTouchMove:L,onTouchStart:B,tabIndex:N=0,TouchRippleProps:F,touchRippleRef:O,type:X}=n,K=(0,o.A)(n,U),_=i.useRef(null),H=i.useRef(null),W=(0,c.A)(H,O),{isFocusVisibleRef:q,onFocus:J,onBlur:Q,ref:G}=(0,d.A)(),[Z,ee]=i.useState(!1);v&&Z&&ee(!1),i.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),_.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!v;function oe(e,t,n=A){return(0,p.A)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}i.useEffect((()=>{Z&&g&&!y&&te&&H.current.pulsate()}),[y,g,Z,te]);const ie=oe("start",S),se=oe("stop",k),le=oe("stop",T),ae=oe("stop",j),ue=oe("stop",(e=>{Z&&e.preventDefault(),$&&$(e)})),ce=oe("start",B),pe=oe("stop",D),de=oe("stop",L),he=oe("stop",(e=>{Q(e),!1===q.current&&ee(!1),R&&R(e)}),!1),fe=(0,p.A)((e=>{_.current||(_.current=e.currentTarget),J(e),!0===q.current&&(ee(!0),C&&C(e)),P&&P(e)})),me=()=>{const e=_.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.A)((e=>{g&&!be.current&&Z&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),E&&E(e))})),ye=(0,p.A)((e=>{g&&" "===e.key&&H.current&&Z&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),w&&w(e),E&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let Ae=b;"button"===Ae&&(K.href||K.to)&&(Ae=x);const ge={};"button"===Ae?(ge.type=void 0===X?"button":X,ge.disabled=v):(K.href||K.to||(ge.role="button"),v&&(ge["aria-disabled"]=v));const xe=(0,c.A)(t,G,_);const Re=(0,r.A)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:y,disableTouchRipple:A,focusRipple:g,tabIndex:N,focusVisible:Z}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},s=(0,l.A)(i,z,o);return n&&r&&(s.root+=` ${r}`),s})(Re);return(0,M.jsxs)(Y,(0,r.A)({as:Ae,className:(0,s.A)(Ee.root,m),ownerState:Re,onBlur:he,onClick:E,onContextMenu:se,onFocus:fe,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:ue,onMouseUp:ae,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:v?-1:N,type:X},ge,K,{children:[f,re?(0,M.jsx)(I,(0,r.A)({ref:W,center:h},F)):null]}))}))},39599:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(9668),o=n(21367),i=n(73272),s=n(70411);const l=["sx"],a=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.A;return Object.keys(e).forEach((t=>{o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function u(e){const{sx:t}=e,n=(0,o.A)(e,l),{systemProps:s,otherProps:u}=a(n);let c;return c=Array.isArray(t)?[s,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,i.Q)(n)?(0,r.A)({},s,n):s}:(0,r.A)({},s,t),(0,r.A)({},u,{sx:c})}},17241:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(96540).createContext(null)}}]);