"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[52747],{89229:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(21367),o=a(9668),n=a(96540),s=a(20053),i=a(75659),l=a(16375),d=a(74220),c=a(30332),p=a(74848);const u=(0,c.A)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=a(38413),g=a(31609);function A(e){return(0,g.A)("MuiAvatar",e)}(0,m.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const y=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=(0,l.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.A)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.A)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),h=(0,l.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const f=n.forwardRef((function(e,t){const a=(0,d.A)({props:e,name:"MuiAvatar"}),{alt:l,children:c,className:u,component:m="div",imgProps:g,sizes:f,src:x,srcSet:S,variant:w="circular"}=a,I=(0,r.A)(a,y);let M=null;const C=function({crossOrigin:e,referrerPolicy:t,src:a,srcSet:r}){const[o,s]=n.useState(!1);return n.useEffect((()=>{if(!a&&!r)return;s(!1);let o=!0;const n=new Image;return n.onload=()=>{o&&s("loaded")},n.onerror=()=>{o&&s("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=a,r&&(n.srcset=r),()=>{o=!1}}),[e,t,a,r]),o}((0,o.A)({},g,{src:x,srcSet:S})),R=x||S,N=R&&"error"!==C,P=(0,o.A)({},a,{colorDefault:!N,component:m,variant:w}),L=(e=>{const{classes:t,variant:a,colorDefault:r}=e,o={root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.A)(o,A,t)})(P);return M=N?(0,p.jsx)(h,(0,o.A)({alt:l,src:x,srcSet:S,sizes:f,ownerState:P,className:L.img},g)):null!=c?c:R&&l?l[0]:(0,p.jsx)(b,{className:L.fallback}),(0,p.jsx)(v,(0,o.A)({as:m,ownerState:P,className:(0,s.A)(L.root,u),ref:t},I,{children:M}))}))},28820:(e,t,a)=>{a.d(t,{A:()=>v});var r=a(21367),o=a(9668),n=a(96540),s=a(20053),i=a(75659),l=a(16375),d=a(74220),c=a(32850),p=a(38413),u=a(31609);function m(e){return(0,u.A)("MuiList",e)}(0,p.A)("MuiList",["root","padding","dense","subheader"]);var g=a(74848);const A=["children","className","component","dense","disablePadding","subheader"],y=(0,l.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disablePadding&&t.padding,a.dense&&t.dense,a.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),v=n.forwardRef((function(e,t){const a=(0,d.A)({props:e,name:"MuiList"}),{children:l,className:p,component:u="ul",dense:v=!1,disablePadding:h=!1,subheader:b}=a,f=(0,r.A)(a,A),x=n.useMemo((()=>({dense:v})),[v]),S=(0,o.A)({},a,{component:u,dense:v,disablePadding:h}),w=(e=>{const{classes:t,disablePadding:a,dense:r,subheader:o}=e,n={root:["root",!a&&"padding",r&&"dense",o&&"subheader"]};return(0,i.A)(n,m,t)})(S);return(0,g.jsx)(c.A.Provider,{value:x,children:(0,g.jsxs)(y,(0,o.A)({as:u,className:(0,s.A)(w.root,p),ref:t,ownerState:S},f,{children:[b,l]}))})}))},32850:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(96540).createContext({})},41690:(e,t,a)=>{a.d(t,{Ay:()=>T});var r=a(21367),o=a(9668),n=a(96540),s=a(20053),i=a(75659),l=a(25419),d=a(24279),c=a(16375),p=a(74220),u=a(12132),m=a(64108),g=a(2778),A=a(96852),y=a(32850),v=a(38413),h=a(31609);function b(e){return(0,h.A)("MuiListItem",e)}const f=(0,v.A)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const x=(0,v.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function S(e){return(0,h.A)("MuiListItemSecondaryAction",e)}(0,v.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var w=a(74848);const I=["className"],M=(0,c.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,o.A)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),C=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=a,d=(0,r.A)(a,I),c=n.useContext(y.A),u=(0,o.A)({},a,{disableGutters:c.disableGutters}),m=(e=>{const{disableGutters:t,classes:a}=e,r={root:["root",t&&"disableGutters"]};return(0,i.A)(r,S,a)})(u);return(0,w.jsx)(M,(0,o.A)({className:(0,s.A)(m.root,l),ownerState:u,ref:t},d))}));C.muiName="ListItemSecondaryAction";const R=C,N=["className"],P=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],L=(0,c.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,o.A)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,o.A)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.root}`]:{paddingRight:48}},{[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${f.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${f.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),k=(0,c.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),T=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:c=!1,button:v=!1,children:h,className:x,component:S,components:I={},componentsProps:M={},ContainerComponent:C="li",ContainerProps:{className:T}={},dense:j=!1,disabled:$=!1,disableGutters:B=!1,disablePadding:O=!1,divider:G=!1,focusVisibleClassName:F,secondaryAction:W,selected:D=!1,slotProps:V={},slots:z={}}=a,X=(0,r.A)(a.ContainerProps,N),q=(0,r.A)(a,P),E=n.useContext(y.A),H=n.useMemo((()=>({dense:j||E.dense||!1,alignItems:d,disableGutters:B})),[d,E.dense,j,B]),J=n.useRef(null);(0,g.A)((()=>{c&&J.current&&J.current.focus()}),[c]);const Y=n.Children.toArray(h),K=Y.length&&(0,m.A)(Y[Y.length-1],["ListItemSecondaryAction"]),Q=(0,o.A)({},a,{alignItems:d,autoFocus:c,button:v,dense:H.dense,disabled:$,disableGutters:B,disablePadding:O,divider:G,hasSecondaryAction:K,selected:D}),U=(e=>{const{alignItems:t,button:a,classes:r,dense:o,disabled:n,disableGutters:s,disablePadding:l,divider:d,hasSecondaryAction:c,selected:p}=e,u={root:["root",o&&"dense",!s&&"gutters",!l&&"padding",d&&"divider",n&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",p&&"selected"],container:["container"]};return(0,i.A)(u,b,r)})(Q),Z=(0,A.A)(J,t),_=z.root||I.Root||L,ee=V.root||M.root||{},te=(0,o.A)({className:(0,s.A)(U.root,ee.className,x),disabled:$},q);let ae=S||"li";return v&&(te.component=S||"div",te.focusVisibleClassName=(0,s.A)(f.focusVisible,F),ae=u.A),K?(ae=te.component||S?ae:"div","li"===C&&("li"===ae?ae="div":"li"===te.component&&(te.component="div")),(0,w.jsx)(y.A.Provider,{value:H,children:(0,w.jsxs)(k,(0,o.A)({as:C,className:(0,s.A)(U.container,T),ref:Z,ownerState:Q},X,{children:[(0,w.jsx)(_,(0,o.A)({},ee,!(0,l.A)(_)&&{as:ae,ownerState:(0,o.A)({},Q,ee.ownerState)},te,{children:Y})),Y.pop()]}))})):(0,w.jsx)(y.A.Provider,{value:H,children:(0,w.jsxs)(_,(0,o.A)({},ee,{as:ae,ref:Z},!(0,l.A)(_)&&{ownerState:(0,o.A)({},Q,ee.ownerState)},te,{children:[Y,W&&(0,w.jsx)(R,{children:W})]}))})}))},59223:(e,t,a)=>{a.d(t,{A:()=>v});var r=a(21367),o=a(9668),n=a(96540),s=a(20053),i=a(75659),l=a(32850),d=a(16375),c=a(74220),p=a(38413),u=a(31609);function m(e){return(0,u.A)("MuiListItemAvatar",e)}(0,p.A)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var g=a(74848);const A=["className"],y=(0,d.Ay)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,o.A)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),v=n.forwardRef((function(e,t){const a=(0,c.A)({props:e,name:"MuiListItemAvatar"}),{className:d}=a,p=(0,r.A)(a,A),u=n.useContext(l.A),v=(0,o.A)({},a,{alignItems:u.alignItems}),h=(e=>{const{alignItems:t,classes:a}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,i.A)(r,m,a)})(v);return(0,g.jsx)(y,(0,o.A)({className:(0,s.A)(h.root,d),ownerState:v,ref:t},p))}))},93425:(e,t,a)=>{a.d(t,{A:()=>C});var r=a(21367),o=a(9668),n=a(96540),s=a(20053),i=a(75659),l=a(39599),d=a(16375),c=a(74220),p=a(28466),u=a(38413),m=a(31609);function g(e){return(0,m.A)("MuiTypography",e)}(0,u.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var A=a(74848);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,d.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,p.A)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.A)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=n.forwardRef((function(e,t){const a=(0,c.A)({props:e,name:"MuiTypography"}),n=(e=>b[e]||e)(a.color),d=(0,l.A)((0,o.A)({},a,{color:n})),{align:u="inherit",className:m,component:f,gutterBottom:x=!1,noWrap:S=!1,paragraph:w=!1,variant:I="body1",variantMapping:M=h}=d,C=(0,r.A)(d,y),R=(0,o.A)({},d,{align:u,color:n,className:m,component:f,gutterBottom:x,noWrap:S,paragraph:w,variant:I,variantMapping:M}),N=f||(w?"p":M[I]||h[I])||"span",P=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:o,variant:n,classes:s}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,p.A)(t)}`,a&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,i.A)(l,g,s)})(R);return(0,A.jsx)(v,(0,o.A)({as:N,ref:t,ownerState:R,className:(0,s.A)(P.root,m)},C))}));var x=a(32850);function S(e){return(0,m.A)("MuiListItemText",e)}const w=(0,u.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),I=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],M=(0,d.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${w.primary}`]:t.primary},{[`& .${w.secondary}`]:t.secondary},t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((({ownerState:e})=>(0,o.A)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56}))),C=n.forwardRef((function(e,t){const a=(0,c.A)({props:e,name:"MuiListItemText"}),{children:l,className:d,disableTypography:p=!1,inset:u=!1,primary:m,primaryTypographyProps:g,secondary:y,secondaryTypographyProps:v}=a,h=(0,r.A)(a,I),{dense:b}=n.useContext(x.A);let w=null!=m?m:l,C=y;const R=(0,o.A)({},a,{disableTypography:p,inset:u,primary:!!w,secondary:!!C,dense:b}),N=(e=>{const{classes:t,inset:a,primary:r,secondary:o,dense:n}=e,s={root:["root",a&&"inset",n&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,i.A)(s,S,t)})(R);return null==w||w.type===f||p||(w=(0,A.jsx)(f,(0,o.A)({variant:b?"body2":"body1",className:N.primary,component:null!=g&&g.variant?void 0:"span",display:"block"},g,{children:w}))),null==C||C.type===f||p||(C=(0,A.jsx)(f,(0,o.A)({variant:"body2",className:N.secondary,color:"text.secondary",display:"block"},v,{children:C}))),(0,A.jsxs)(M,(0,o.A)({className:(0,s.A)(N.root,d),ownerState:R,ref:t},h,{children:[w,C]}))}))}}]);