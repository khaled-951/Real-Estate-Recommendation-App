(this["webpackJsonpreal-estate-recommendation-app"]=this["webpackJsonpreal-estate-recommendation-app"]||[]).push([[10],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var o=n(88),r=n(116),i=n(0),a=n.n(i),c=n(4),s=n(185),l=n(19),d=n(230),p=n(231),h=n(229),u=n(232),j=n(273),m=n(272),b=n(208),g=n(143),v=n.n(g),x=n(144),O=n.n(x),f=n(141),y=n.n(f),k=n(147),C=n.n(k),A=n(139),w=n.n(A),N=n(136),S=n.n(N),B=n(140),I=n.n(B),R=n(233),T=n(142),P=n.n(T),z=n(2);function F(e){var t=Object(s.a)((function(t){return{grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(r.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(r.a)({visibility:"false"===e.showSearchInHeader?"hidden":"visible",position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(l.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(l.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(r.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(r.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})}})),n=Object(c.f)(),i=t(),g=a.a.useState(null),x=Object(o.a)(g,2),f=x[0],k=x[1],A=a.a.useState(null),N=Object(o.a)(A,2),B=N[0],T=N[1],F=a.a.useState(null),L=Object(o.a)(F,2),D=L[0],E=L[1],H=Boolean(f),W=Boolean(B),_=Boolean(D),M=function(e){T(e.currentTarget)},Y=function(){E(null)},Q=function(){T(null),Y()},q=Object(z.jsxs)(b.a,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-left-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:H,onClose:function(){k(null),Y()},children:[Object(z.jsxs)(m.a,{onClick:function(){return n.push("/")},children:[Object(z.jsx)(S.a,{}),"Home"]}),Object(z.jsxs)(m.a,{onClick:function(){return n.push("/search")},children:[Object(z.jsx)(w.a,{}),"Buy A Proprety"]})]}),J="primary-search-account-menu",K=Object(z.jsxs)(b.a,{anchorEl:B,anchorOrigin:{vertical:"top",horizontal:"right"},id:J,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:W,onClose:Q,children:[Object(z.jsx)(m.a,{onClick:Q,children:"My Profile"}),Object(z.jsx)("hr",{}),Object(z.jsxs)(m.a,{onClick:function(){localStorage.getItem("authToken")&&(localStorage.removeItem("authToken"),n.push("/login"))},children:[Object(z.jsx)(I.a,{}),"Logout"]})]}),U="primary-search-account-menu-mobile",V=Object(z.jsx)(b.a,{anchorEl:D,anchorOrigin:{vertical:"top",horizontal:"right"},id:U,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:_,onClose:Y,children:!0===e.isloggedIn?Object(z.jsxs)(m.a,{onClick:M,children:[Object(z.jsx)(h.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(z.jsx)(y.a,{})}),Object(z.jsx)("p",{children:"Profile"})]}):Object(z.jsxs)(m.a,{onClick:function(){return n.push("/login")},children:[Object(z.jsx)(P.a,{style:{paddingRight:"10px"}})," Login"]})});return Object(z.jsxs)("div",{className:i.grow,children:[Object(z.jsx)(d.a,{position:"static",children:Object(z.jsxs)(p.a,{children:[Object(z.jsx)(h.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(e){k(e.currentTarget)},children:Object(z.jsx)(v.a,{})}),Object(z.jsx)(u.a,{className:i.title,variant:"h6",noWrap:!0,children:"Real Estate Recommendation App"}),Object(z.jsxs)("div",{className:i.search,children:[Object(z.jsx)("div",{className:i.searchIcon,children:Object(z.jsx)(O.a,{})}),Object(z.jsx)(j.a,{value:e.searchQuery||"",onKeyDown:function(e){13===e.keyCode&&n.push("/search/"+e.target.value)},onChange:function(t){return e.setSearchQueryState(t.target.value)},placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})]}),Object(z.jsx)("div",{className:i.grow}),Object(z.jsx)("div",{className:i.sectionDesktop,children:!0===e.isloggedIn?Object(z.jsx)(h.a,{edge:"end","aria-label":"account of current user","aria-controls":J,"aria-haspopup":"true",onClick:M,color:"inherit",children:Object(z.jsx)(y.a,{})}):Object(z.jsxs)(R.a,{color:"inherit",onClick:function(){return n.push("/login")},children:[Object(z.jsx)(P.a,{style:{paddingRight:"10px"}}),"Login"]})}),Object(z.jsx)("div",{className:i.sectionMobile,children:Object(z.jsx)(h.a,{"aria-label":"show more","aria-controls":U,"aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit",children:Object(z.jsx)(C.a,{})})})]})}),V,K,q]})}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));n(0);var o=n(185),r=n(237),i=n(238),a=n(241),c=n(240),s=n(239),l=n(233),d=n(232),p=n(227),h=n(150),u=n.n(h),j=n(149),m=n.n(j),b=n(243),g=n(267),v=n(242),x=n(129),O=n.n(x),f=n(4),y=n(2),k=Object(o.a)({root:{maxWidth:345,marginRight:"10px",marginLeft:"10px",marginTop:"10px",marginBottom:"10px"}});function C(e){var t,n,o=Object(f.f)(),h=k(),j=function(e){o.push("/property/"+e)};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(p.a,{in:!0,children:Object(y.jsxs)(r.a,{raised:!0,className:h.root,children:[Object(y.jsxs)(i.a,{onClick:function(){var t;return j(null===(t=e.property)||void 0===t?void 0:t._id)},children:[Object(y.jsx)(s.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:"/house.jpg",title:"Contemplative Reptile"}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:(null===(t=e.property)||void 0===t?void 0:t.price)||"N/A"}),Object(y.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(y.jsx)(a.a,{children:Object(y.jsxs)(v.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(l.a,{size:"small",color:"primary",onClick:function(){var t;return j((null===(t=e.property)||void 0===t?void 0:t._id)||1)},children:"View Property"}),Object(y.jsx)(O.a,{}),Object(y.jsx)(d.a,{children:(null===(n=e.property)||void 0===n?void 0:n.views)||"N/A"}),Object(y.jsx)(b.a,{checked:e.checked||!1,onClick:function(t){var n;return e.handleFavorites(t,null===(n=e.property)||void 0===n?void 0:n._id,e.man)},control:Object(y.jsx)(g.a,{icon:Object(y.jsx)(m.a,{}),checkedIcon:Object(y.jsx)(u.a,{}),name:"checkedH"})})]})})]})})})}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var o=n(230),r=n(245),i=n(231),a=n(232),c=n(2);function s(){return Object(c.jsx)(o.a,{position:"static",color:"primary",children:Object(c.jsx)(r.a,{maxWidth:"md",children:Object(c.jsx)(i.a,{children:Object(c.jsx)(a.a,{variant:"body1",color:"inherit",children:"\xa9 2021 Real Estate Recommendation App"})})})})}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var o=n(88),r=n(128),i=n(0),a=n.n(i),c=n(245),s=n(185),l=n(233),d=n(260),p=n(268),h=n(263),u=n(246),j=n(250),m=n(248),b=n(249),g=n(247),v=n(244),x=n(4),O=n(119),f=n(98),y=n.n(f),k=n(2),C=Object(s.a)({root:{maxWidth:345,marginRight:"25px",marginLeft:"25px",marginTop:"10px",marginBottom:"10px"},hClass:{textAlign:"center",fontSize:"24px"},hrClass:{marginTop:"25px",width:"70%",marginBottom:"25px"}}),A=a.a.forwardRef((function(e,t){return Object(k.jsx)(v.a,Object(r.a)({direction:"up",ref:t},e))}));function w(e){var t,n,r,i=Object(x.f)(),s=C(),v=a.a.useState((null===(t=e.showProperties)||void 0===t?void 0:t.favorites)||[!1,!1,!1,!1,!1,!1]),f=Object(o.a)(v,2),w=f[0],N=f[1],S=a.a.useState(!1),B=Object(o.a)(S,2),I=B[0],R=B[1],T=a.a.useState(!1),P=Object(o.a)(T,2),z=P[0],F=P[1],L=a.a.useState(!1),D=Object(o.a)(L,2),E=D[0],H=D[1];a.a.useEffect((function(){var t;N(null===(t=e.showProperties)||void 0===t?void 0:t.favorites)}),[e]);var W=function(e,t){"clickaway"!==t&&(R(!1),F(!1))},_=function(e,t,n){e.preventDefault(),null!==localStorage.getItem("authToken")?(W(),y.a.post("http://localhost:5000/api/favorit/toggleFavorit",{propertyId:t},{headers:{Authorization:"Bearer: "+localStorage.getItem("authToken")}}).then((function(e){"Favorit Added"===e.data?(N((function(e){return e[n]=!0,e})),R(!0)):"Favorit Removed"===e.data&&(N((function(e){return e[n]=!1,e})),F(!0))}))):H(!0)},M=function(){H(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(c.a,{children:[Object(k.jsx)("h1",{className:s.hClass,children:e.headerText}),Object(k.jsx)(d.a,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:null===(n=e.showProperties)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.map((function(e,t){return Object(k.jsx)(O.a,{property:e,checked:!!w&&w[t],man:t,openSuccess:I,openError:z,handleClose:W,handleFavorites:_},t)}))})]}),Object(k.jsx)("hr",{className:s.hrClass}),Object(k.jsx)(p.a,{open:I,autoHideDuration:6e3,onClose:W,children:Object(k.jsx)(h.a,{onClose:W,severity:"success",children:"Property Added To Your Favorites !"})}),Object(k.jsx)(p.a,{open:z,autoHideDuration:6e3,onClose:W,children:Object(k.jsx)(h.a,{onClose:W,severity:"error",children:"Property Removed From Your Favorites !"})}),Object(k.jsxs)(u.a,{open:E,TransitionComponent:A,keepMounted:!0,onClose:M,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(k.jsx)(g.a,{id:"alert-dialog-slide-title",children:"Sign Up Or Sign In ?"}),Object(k.jsx)(m.a,{children:Object(k.jsx)(b.a,{id:"alert-dialog-slide-description",children:"In Order To Add A Property To Your Favorites You Need To Have An Account."})}),Object(k.jsxs)(j.a,{children:[Object(k.jsx)(l.a,{onClick:M,color:"primary",children:"Close"}),Object(k.jsx)(l.a,{onClick:function(){i.push("/signup")},color:"primary",children:"Sign Up"}),Object(k.jsx)(l.a,{onClick:function(){i.push("/login")},color:"primary",children:"Sign In"})]})]})]})}},270:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var o=n(88),r=n(0),i=n.n(r),a=n(4),c=n(115),s=n(120),l=n(148),d=n(185),p=n(237),h=n(241),u=n(240),j=n(233),m=n(232),b=n(242),g=n(260),v=n(227),x=n(239),O=n(129),f=n.n(O),y=n(2),k=Object(d.a)({imageStyle:{minWidth:280,maxWidth:1070,width:"100%",height:"70vh",marginRight:"25px",marginLeft:"25px",marginTop:"10px",marginBottom:"10px"},detailsStyle:{maxWidth:345,overflow:"auto",maxHeight:"70vh",marginRight:"25px",marginLeft:"25px",marginTop:"10px",marginBottom:"10px"}});function C(e){var t,n,o,r,i,a,c,s,l,d,O,C,A,w,N,S,B,I,R,T,P,z,F,L,D=k();return Object(y.jsxs)(g.a,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:[Object(y.jsx)(v.a,{in:!0,children:Object(y.jsx)(x.a,{className:D.imageStyle,component:"img",alt:"Contemplative Reptile",width:"100%",height:"auto",image:"/house.jpg",title:"Contemplative Reptile"})}),Object(y.jsx)(v.a,{in:!0,children:Object(y.jsxs)(p.a,{raised:!0,className:D.detailsStyle,children:[Object(y.jsxs)(u.a,{children:[Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Price: ",(null===(t=e.property)||void 0===t?void 0:t.price)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Date: ",(null===(n=e.property)||void 0===n?void 0:n.dateAnnonce)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Habitable Area: ",(null===(o=e.property)||void 0===o?void 0:o.superficie_habitable)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Land Surface: ",(null===(r=e.property)||void 0===r?void 0:r.superficie_terrain)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["ZIP Code: ",(null===(i=e.property)||void 0===i?void 0:i.codeP)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Delegation: ",(null===(a=e.property)||void 0===a?void 0:a.delegation)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["localite: ",(null===(c=e.property)||void 0===c?void 0:c.localite)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Address: ",(null===(s=e.property)||void 0===s?void 0:s.adresse)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Year Built: ",(null===(l=e.property)||void 0===l?void 0:l.anneeConst)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Number Of Pieces: ",(null===(d=e.property)||void 0===d?void 0:d.nbpiece)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Type: ",(null===(O=e.property)||void 0===O?void 0:O.typeImm)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["fonds: ",(null===(C=e.property)||void 0===C?void 0:C.fonds)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Outdoors: ",(null===(A=e.property)||void 0===A?void 0:A.plein_air)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Baths: ",(null===(w=e.property)||void 0===w?void 0:w.salle_de_bain)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["constructible: ",(null===(N=e.property)||void 0===N?void 0:N.constructible)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["service: ",(null===(S=e.property)||void 0===S?void 0:S.service)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Heating/Air-Conditioning: ",(null===(B=e.property)||void 0===B?void 0:B.chauffage)||"N/A ","/",(null===(I=e.property)||void 0===I?void 0:I.climatisation)||" N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Kitchen: ",(null===(R=e.property)||void 0===R?void 0:R.cuisine)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Sports Equipments: ",(null===(T=e.property)||void 0===T?void 0:T.installations_sportives)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Phone: ",(null===(P=e.property)||void 0===P?void 0:P.tel)||"N/A"]}),Object(y.jsxs)(m.a,{gutterBottom:!0,variant:"h6",component:"h6",children:["Agency: ",(null===(z=e.property)||void 0===z?void 0:z.agence)||"N/A"]}),Object(y.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:(null===(F=e.property)||void 0===F?void 0:F.description)||"N/A"})]}),Object(y.jsx)(h.a,{children:Object(y.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(j.a,{size:"small",color:"primary",onClick:function(){var t,n;return n=(null===(t=e.property)||void 0===t?void 0:t.link)||"error",void window.location.replace(n)},children:"Visit The Original Post"}),Object(y.jsx)(f.a,{}),Object(y.jsx)(m.a,{children:(null===(L=e.property)||void 0===L?void 0:L.views)||"N/A"})]})})]})})]})}var A=n(98),w=n.n(A);function N(){var e=i.a.useState(),t=Object(o.a)(e,2),n=t[0],d=t[1],p=i.a.useState(!1),h=Object(o.a)(p,2),u=h[0],j=h[1],m=i.a.useState(),b=Object(o.a)(m,2),g=b[0],v=b[1],x=Object(a.g)().propertyId;return Object(r.useEffect)((function(){document.body.style.backgroundImage="",localStorage.getItem("authToken")&&w.a.post("http://localhost:5000/api/user/verify",null,{headers:{Authorization:"Bearer: "+localStorage.getItem("authToken")}}).then((function(e){200===e.status&&j(!0)})).catch((function(e){return localStorage.removeItem("authToken")})),localStorage.getItem("authToken")?w.a.get("http://localhost:5000/api/property/getPropertyDetailsAndRecommended/"+x,{headers:{Authorization:"Bearer: "+localStorage.getItem("authToken")}}).then((function(e){return v(e.data)})):j(!1),w.a.get("http://localhost:5000/api/property/getPropertyDetailsAndRecommended/"+x).then((function(e){return v(e.data)}))}),[x]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{searchQuery:n,setSearchQueryState:function(e){return d(e)},showSearchInHeader:"true",isloggedIn:u}),Object(y.jsx)(C,{property:null===g||void 0===g?void 0:g.propertyDetails}),Object(y.jsx)(l.a,{showProperties:g,headerText:"Recommended For You"}),Object(y.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=10.18cc17d5.chunk.js.map