import{j as e,A as V,m as g}from"./framer-motion-mb3-JiSz.js";import{r as c,L as m}from"./react-vendor-yijSofTl.js";import{H as G,F as H,S as r,s as _,d as Y,t as B,p as J,G as K,a as N,n as X,i as Z,b as f,c as S}from"./Footer-D6xEDIKz.js";import{A as P}from"./AnimatedCounter-iuokz4qD.js";import{S as x}from"./SectionHeader-Dneq91yQ.js";import{C as R,a as I}from"./chevron-left-DVH7N2C3.js";import{A as p}from"./mail-BMOLMi5q.js";import{C as y}from"./circle-check-big-C-eMSB9w.js";import{S as W,T as F}from"./trophy-lmZHH8oO.js";import{Z as Q}from"./zap-BkF1pIS8.js";import{S as C}from"./star-Di8H6vOR.js";import{c as ee}from"./index-DKm9vYC1.js";import{U as te}from"./users-CCI4Smxo.js";import{T as E}from"./target-CiqR6uCg.js";import{T as q}from"./trending-up-B_DsUEpR.js";import"./radix-ui-DgvWngr2.js";const se=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ae=ee("graduation-cap",se),h=[{media:{type:"image",src:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop&q=85",alt:"Jeunes footballeurs lors d'une session de détection"},badge:"Détection",title:"LE TALENT EST PARTOUT.",subtitle:"Nous détectons et accompagnons les jeunes talents afin de leur offrir les meilleures opportunités pour construire leur avenir.",cta:[{label:"Découvrir l'académie",href:"/academie",variant:"primary"},{label:"Postuler à la détection",href:"/detection",variant:"gold"}],textPosition:"left"},{media:{type:"video",src:"https://cdn.coverr.co/videos/coverr-soccer-player-doing-tricks-on-a-field-1080p-1881/1080p.mp4",poster:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=1080&fit=crop&q=85",alt:"Entraîneur et jeunes joueurs lors d'une séance tactique"},badge:"Formation",title:`FORMER AUJOURD'HUI
LES TALENTS DE DEMAIN.`,subtitle:"Une formation sportive, éducative et humaine conçue pour développer chaque jeune dans toutes les dimensions.",cta:[{label:"Notre formation",href:"/formation",variant:"primary"},{label:"Nos talents",href:"/talents",variant:"gold"}],textPosition:"right"},{media:{type:"image",src:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&q=85",alt:"Équipe de jeunes joueurs célébrant ensemble"},badge:"Impact",title:`VOTRE SOUTIEN
PEUT CHANGER UN AVENIR.`,subtitle:"Soutenez la formation d'une nouvelle génération de talents et contribuez directement au développement de l'académie.",cta:[{label:"Soutenir un talent",href:"/soutenir",variant:"primary"},{label:"Devenir partenaire",href:"/partenaires",variant:"gold"}],textPosition:"center"}],T=5500,re=900;function ie(){const[t,s]=c.useState(0),[a,l]=c.useState(1),[n,b]=c.useState(!1),[z,u]=c.useState(0),A=c.useRef(!1);c.useEffect(()=>{A.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches},[]);const k=A.current,w=c.useRef(void 0),D=c.useCallback(i=>{l(i>t?1:-1),s(i),u(0)},[t]),L=c.useCallback(()=>{l(1),s(i=>(i+1)%h.length),u(0)},[]),O=c.useCallback(()=>{l(-1),s(i=>(i-1+h.length)%h.length),u(0)},[]);c.useEffect(()=>{if(k||n)return;u(0);const i=50;let o=0;return w.current=setInterval(()=>{o+=i,u(o/T*100),o>=T&&(clearInterval(w.current),s(j=>(j+1)%h.length),l(1))},i),()=>clearInterval(w.current)},[t,n,k]),c.useEffect(()=>{const i=o=>{o.key==="ArrowRight"&&(l(1),s(j=>(j+1)%h.length),u(0)),o.key==="ArrowLeft"&&(l(-1),s(j=>(j-1+h.length)%h.length),u(0))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]);const d=h[t],$={left:"hero-overlay-left",center:"hero-overlay-center",right:"hero-overlay-right"},M={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"},U={enter:i=>({opacity:0,x:i>0?60:-60}),center:{opacity:1,x:0},exit:i=>({opacity:0,x:i>0?-60:60})},v={hidden:{opacity:0,y:24},visible:i=>({opacity:1,y:0,transition:{delay:.25+i*.12,duration:.6,ease:[.22,1,.36,1]}})};return e.jsxs("section",{className:"hero-carousel",onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),"aria-label":"Carrousel principal",role:"region",children:[e.jsx("div",{className:"hero-slides",children:e.jsx(V,{custom:a,mode:"wait",children:e.jsxs(g.div,{custom:a,variants:U,initial:"enter",animate:"center",exit:"exit",transition:{duration:re/1e3,ease:[.4,0,.2,1]},className:"hero-slide",children:[e.jsx("div",{className:"hero-media",children:d.media.type==="image"?e.jsx("img",{src:d.media.src,alt:d.media.alt,className:"hero-media-item",loading:t===0?"eager":"lazy"}):e.jsx("video",{className:"hero-media-item",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:t===1?"auto":"metadata",poster:d.media.poster,"aria-label":d.media.alt,children:e.jsx("source",{src:d.media.src,type:"video/mp4"})})}),e.jsx("div",{className:`hero-gradient ${$[d.textPosition]}`}),e.jsx("div",{className:`hero-text-wrapper ${d.textPosition==="center"?"justify-center":d.textPosition==="right"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`hero-text-inner flex flex-col ${M[d.textPosition]}`,children:[e.jsx(g.span,{custom:0,variants:v,initial:"hidden",animate:"visible",className:"hero-badge",children:d.badge}),e.jsx(g.h1,{custom:1,variants:v,initial:"hidden",animate:"visible",className:"hero-title",children:d.title.split(`
`).map((i,o)=>e.jsx("span",{className:"block",children:i},o))}),e.jsx(g.p,{custom:2,variants:v,initial:"hidden",animate:"visible",className:"hero-subtitle",children:d.subtitle}),e.jsx(g.div,{custom:3,variants:v,initial:"hidden",animate:"visible",className:"hero-ctas",children:d.cta.map((i,o)=>e.jsx(m,{to:i.href,"aria-label":i.label,className:`hero-btn ${i.variant==="gold"?"hero-btn-gold":"hero-btn-primary"}`,children:i.label},o))})]})})]},t)})}),e.jsx("button",{onClick:O,"aria-label":"Slide précédent",className:"hero-nav hero-nav-prev",children:e.jsx(R,{className:"w-6 h-6"})}),e.jsx("button",{onClick:L,"aria-label":"Slide suivant",className:"hero-nav hero-nav-next",children:e.jsx(I,{className:"w-6 h-6"})}),e.jsx("div",{className:"hero-indicators",role:"tablist","aria-label":"Navigation des slides",children:h.map((i,o)=>e.jsxs("button",{role:"tab","aria-selected":o===t,"aria-label":`Slide ${o+1}: ${i.badge}`,onClick:()=>D(o),className:"hero-indicator",children:[e.jsx("span",{className:`hero-indicator-num ${o===t?"active":""}`,children:String(o+1).padStart(2,"0")}),e.jsx("div",{className:"hero-indicator-track",children:e.jsx("div",{className:"hero-indicator-fill",style:{width:o===t?`${z}%`:o<t?"100%":"0%"}})})]},o))}),e.jsx("style",{children:`
        /* ===== HERO CAROUSEL CONTAINER ===== */
        .hero-carousel {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 700px;
          overflow: hidden;
          background: #071A2F;
        }
        @media (min-width: 1600px) {
          .hero-carousel { min-height: 800px; }
        }
        @media (max-width: 768px) {
          .hero-carousel {
            height: auto;
            min-height: auto;
          }
        }

        /* ===== SLIDES ===== */
        .hero-slides {
          position: absolute;
          inset: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
        }
        @media (max-width: 768px) {
          .hero-slide {
            position: relative;
          }
        }

        /* ===== MEDIA ===== */
        .hero-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 768px) {
          .hero-media {
            position: relative;
            width: 100%;
            height: 55vh;
            min-height: 360px;
          }
        }
        .hero-media-item {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: heroZoom 8s ease-out forwards;
        }
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-media-item { animation: none; }
        }

        /* ===== GRADIENT OVERLAYS ===== */
        .hero-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-overlay-left {
          background: linear-gradient(
            90deg,
            rgba(7, 26, 47, 0.82) 0%,
            rgba(7, 26, 47, 0.45) 40%,
            transparent 72%
          );
        }
        .hero-overlay-right {
          background: linear-gradient(
            270deg,
            rgba(7, 26, 47, 0.82) 0%,
            rgba(7, 26, 47, 0.45) 40%,
            transparent 72%
          );
        }
        .hero-overlay-center {
          background: radial-gradient(
            ellipse at center,
            rgba(7, 26, 47, 0.75) 0%,
            rgba(7, 26, 47, 0.35) 55%,
            transparent 85%
          );
        }
        @media (max-width: 768px) {
          .hero-overlay-left,
          .hero-overlay-right,
          .hero-overlay-center {
            background: linear-gradient(
              to top,
              rgba(7, 26, 47, 0.88) 0%,
              rgba(7, 26, 47, 0.45) 50%,
              transparent 100%
            );
          }
        }

        /* ===== TEXT WRAPPER ===== */
        .hero-text-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
          z-index: 10;
        }
        @media (max-width: 768px) {
          .hero-text-wrapper {
            position: relative;
            padding: 2rem 1.25rem 2.5rem;
            align-items: flex-end;
            background: transparent;
          }
        }

        .hero-text-inner {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ===== BADGE ===== */
        .hero-badge {
          display: inline-block;
          padding: 0.35rem 1rem;
          background: rgba(11, 143, 85, 0.2);
          color: #0B8F55;
          border: 1px solid rgba(11, 143, 85, 0.3);
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 1rem;
          width: fit-content;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        @media (max-width: 768px) {
          .hero-badge { font-size: 0.65rem; margin-bottom: 0.75rem; }
        }

        /* ===== TITLE ===== */
        .hero-title {
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0;
          text-shadow: 0 2px 20px rgba(0,0,0,0.25);
        }
        .hero-title span.block {
          display: block;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
            text-align: left;
          }
        }

        /* ===== SUBTITLE ===== */
        .hero-subtitle {
          margin-top: 1.25rem;
          color: rgba(255,255,255,0.78);
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          line-height: 1.65;
          max-width: 480px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .hero-subtitle {
            font-size: 0.9rem;
            margin-top: 0.75rem;
            max-width: 100%;
            text-align: left;
          }
        }

        /* ===== CTAs ===== */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .hero-ctas { margin-top: 1.5rem; }
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          border: none;
        }
        .hero-btn-primary {
          background: #0B8F55;
          color: #fff;
          box-shadow: 0 4px 20px rgba(11,143,85,0.3);
        }
        .hero-btn-primary:hover {
          background: #0a7d4a;
          box-shadow: 0 6px 28px rgba(11,143,85,0.4);
          transform: translateY(-1px);
        }
        .hero-btn-gold {
          background: #F4B942;
          color: #071A2F;
          box-shadow: 0 4px 20px rgba(244,185,66,0.25);
        }
        .hero-btn-gold:hover {
          background: #e5a832;
          box-shadow: 0 6px 28px rgba(244,185,66,0.35);
          transform: translateY(-1px);
        }

        /* ===== NAVIGATION ARROWS ===== */
        .hero-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-nav:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }
        .hero-nav:focus-visible {
          outline: 2px solid #0B8F55;
          outline-offset: 3px;
        }
        .hero-nav-prev { left: clamp(1rem, 3vw, 2.5rem); }
        .hero-nav-next { right: clamp(1rem, 3vw, 2.5rem); }
        @media (max-width: 768px) {
          .hero-nav {
            width: 42px;
            height: 42px;
            top: auto;
            bottom: 220px;
            transform: none;
          }
          .hero-nav:hover { transform: scale(1.05); }
          .hero-nav-prev { left: 1rem; }
          .hero-nav-next { right: 1rem; }
        }

        /* ===== PROGRESS INDICATORS ===== */
        .hero-indicators {
          position: absolute;
          bottom: clamp(1.5rem, 3vw, 2.5rem);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 20;
        }
        @media (max-width: 768px) {
          .hero-indicators {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            justify-content: center;
            padding: 1rem 1.25rem 0;
          }
        }
        .hero-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0;
        }
        .hero-indicator:focus-visible {
          outline: 2px solid #0B8F55;
          outline-offset: 3px;
          border-radius: 4px;
        }
        .hero-indicator-num {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease;
          letter-spacing: 0.05em;
        }
        .hero-indicator-num.active {
          color: #F4B942;
        }
        .hero-indicator-track {
          width: 48px;
          height: 3px;
          background: rgba(255,255,255,0.15);
          border-radius: 3px;
          overflow: hidden;
        }
        .hero-indicator-fill {
          height: 100%;
          background: linear-gradient(90deg, #0B8F55, #F4B942);
          border-radius: 3px;
          transition: width 60ms linear;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-indicator-fill { transition: none; }
        }
      `})]})}function le(){return e.jsx("section",{className:"relative -mt-16 z-10",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4",children:e.jsx(r,{children:e.jsx("div",{className:"bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 p-6 sm:p-8",children:e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6",children:_.map((t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-[#071A2F] font-[Poppins]",children:e.jsx(P,{value:t.value,suffix:t.suffix})}),e.jsx("div",{className:"text-xs text-gray-500 mt-1 font-medium",children:t.label})]},s))})})})})})}function ne(){const t=[{icon:e.jsx(F,{className:"w-6 h-6"}),title:"Formation sportive",desc:"Technique, tactique, physique et mentale — un programme complet pour développer chaque facettes du joueur.",color:"from-[#0B8F55] to-[#087a44]"},{icon:e.jsx(ae,{className:"w-6 h-6"}),title:"Éducation",desc:"Football et scolarité ne sont pas incompatibles. Nous combinons formation sportive et développement intellectuel.",color:"from-[#071A2F] to-[#0a2540]"},{icon:e.jsx(te,{className:"w-6 h-6"}),title:"Insertion & opportunités",desc:"Passerelles vers clubs, académies, universités et structures internationales pour un avenir professionnel.",color:"from-[#F4B942] to-[#e5a832]"}];return e.jsx("section",{className:"py-24 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Notre mission",title:"Révéler le potentiel de chaque jeune",subtitle:"Nous croyons que chaque jeune porte en lui un potentiel unique. Notre rôle est de le révéler, le cultiver et le transformer en un avenir concret."})}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.map((s,a)=>e.jsx(r,{delay:a*.15,children:e.jsxs("div",{className:"group relative bg-[#F5F7FA] hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 border border-transparent hover:border-gray-100",children:[e.jsx("div",{className:`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`,children:s.icon}),e.jsx("h3",{className:"text-xl font-bold text-[#071A2F] font-[Poppins] mb-3",children:s.title}),e.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:s.desc}),e.jsx(p,{className:"w-5 h-5 text-[#0B8F55] mt-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})},a))})]})})}function oe(){return e.jsx("section",{className:"py-24 bg-[#F5F7FA]",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Détection",title:e.jsxs(e.Fragment,{children:["Chaque talent mérite ",e.jsx("span",{className:"text-[#0B8F55]",children:"une chance"})]}),subtitle:"Notre processus de détection est rigoureux et transparent, conçu pour identifier les vrais talents et leur offrir les meilleures opportunités."})}),e.jsxs("div",{className:"relative mt-12",children:[e.jsx("div",{className:"hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55]"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2",children:Y.map((t,s)=>e.jsx(r,{delay:s*.1,children:e.jsxs("div",{className:"relative text-center",children:[e.jsx("div",{className:"w-16 h-16 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] font-bold text-sm font-[Poppins] relative z-10",children:t.step}),e.jsx("h4",{className:"mt-4 text-sm font-bold text-[#071A2F]",children:t.title}),e.jsx("p",{className:"mt-1 text-xs text-gray-500 leading-relaxed hidden sm:block",children:t.description})]})},s))})]}),e.jsx(r,{children:e.jsx("div",{className:"text-center mt-12",children:e.jsxs(m,{to:"/detection",className:"inline-flex items-center gap-2 px-8 py-4 bg-[#071A2F] hover:bg-[#0a2540] text-white font-semibold rounded-full transition-all hover:shadow-lg text-sm",children:["Postuler à la détection",e.jsx(p,{className:"w-4 h-4"})]})})})]})})}function ce(){const[t,s]=c.useState("Tous"),a=["Tous","Gardien","Défenseur","Milieu","Attaquant"],l=t==="Tous"?B.slice(0,4):B.filter(n=>n.position===t).slice(0,4);return e.jsx("section",{className:"py-24 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Nos talents",title:e.jsxs(e.Fragment,{children:["Des joueurs qui ",e.jsx("span",{className:"text-[#0B8F55]",children:"écrivent"})," l'avenir"]}),subtitle:"Découvrez les jeunes talents que nous formons et accompagnons vers l'excellence."})}),e.jsx(r,{children:e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-12",children:a.map(n=>e.jsx("button",{onClick:()=>s(n),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${t===n?"bg-[#071A2F] text-white shadow-lg shadow-[#071A2F]/20":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:n},n))})}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:l.map((n,b)=>e.jsx(r,{delay:b*.1,children:e.jsxs(m,{to:`/talents/${n.id}`,className:"group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1",children:[e.jsxs("div",{className:"relative h-56 overflow-hidden",children:[e.jsx("img",{src:n.photo,alt:n.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#071A2F]/80 to-transparent"}),e.jsx("div",{className:"absolute bottom-3 left-3 right-3",children:e.jsx("span",{className:"px-2.5 py-1 bg-[#0B8F55] text-white text-xs font-semibold rounded-full",children:n.position})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("h3",{className:"font-bold text-[#071A2F] font-[Poppins] group-hover:text-[#0B8F55] transition-colors",children:n.name}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[n.nationality," · ",n.age," ans · ",n.category]}),e.jsxs("div",{className:"flex gap-4 mt-3 text-xs text-gray-400",children:[e.jsxs("span",{children:[e.jsx("strong",{className:"text-[#071A2F]",children:n.goals})," buts"]}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-[#071A2F]",children:n.assists})," passes"]}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-[#071A2F]",children:n.matches})," matchs"]})]})]})]})},n.id))}),e.jsx(r,{children:e.jsx("div",{className:"text-center mt-10",children:e.jsxs(m,{to:"/talents",className:"inline-flex items-center gap-2 text-[#0B8F55] font-semibold hover:gap-3 transition-all text-sm",children:["Voir tous les talents",e.jsx(p,{className:"w-4 h-4"})]})})})]})})}function de(){const t=[{icon:e.jsx(N,{className:"w-6 h-6"}),title:"Parrainer un jeune",items:["Équipement","Formation","Transport","Alimentation","Scolarité","Soins"],color:"bg-[#0B8F55]"},{icon:e.jsx(E,{className:"w-6 h-6"}),title:"Financer un projet",items:["Terrain","Infrastructures","Matériel","Centre médical","Internat","Bibliothèque"],color:"bg-[#071A2F]"},{icon:e.jsx(q,{className:"w-6 h-6"}),title:"Faire un don libre",items:["Montant libre","Usage optimal","Impact direct","Suivi transparent"],color:"bg-[#F4B942]"}];return e.jsxs("section",{className:"py-24 bg-[#071A2F] relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#0B8F55]/10 rounded-full blur-3xl"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-[#F4B942]/10 rounded-full blur-3xl"}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[e.jsx(r,{children:e.jsx(x,{light:!0,badge:"Soutenir",title:e.jsxs(e.Fragment,{children:["Investissez dans un talent. ",e.jsx("br",{className:"hidden sm:block"}),"Construisez un ",e.jsx("span",{className:"text-[#F4B942]",children:"avenir"}),"."]}),subtitle:"Chaque contribution, quelle que soit sa taille, a un impact direct sur la vie d'un jeune."})}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.map((s,a)=>e.jsx(r,{delay:a*.15,children:e.jsxs("div",{className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group",children:[e.jsx("div",{className:`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`,children:s.icon}),e.jsx("h3",{className:"text-xl font-bold text-white font-[Poppins] mb-4",children:s.title}),e.jsx("ul",{className:"space-y-2",children:s.items.map(l=>e.jsxs("li",{className:"flex items-center gap-2 text-sm text-white/60",children:[e.jsx(y,{className:"w-3.5 h-3.5 text-[#0B8F55] shrink-0"}),l]},l))})]})},a))}),e.jsx(r,{children:e.jsx("div",{className:"text-center mt-12",children:e.jsxs(m,{to:"/soutenir",className:"inline-flex items-center gap-2 px-8 py-4 bg-[#F4B942] hover:bg-[#e5a832] text-[#071A2F] font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#F4B942]/25 text-sm",children:["Je soutiens l'académie",e.jsx(p,{className:"w-4 h-4"})]})})})]})]})}function me(){return e.jsx("section",{className:"py-24 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Projets",title:e.jsxs(e.Fragment,{children:["Ensemble, ",e.jsx("span",{className:"text-[#0B8F55]",children:"construisons"})," l'avenir"]}),subtitle:"Chaque projet est une opportunité de créer un impact durable pour les jeunes et leur communauté."})}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8",children:J.slice(0,3).map((t,s)=>{const a=Math.round(t.raised/t.goal*100);return e.jsx(r,{delay:s*.15,children:e.jsxs("div",{className:"group bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100",children:[e.jsxs("div",{className:"relative h-48 overflow-hidden",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),e.jsx("div",{className:"absolute top-3 left-3",children:e.jsx("span",{className:"px-3 py-1 bg-white/90 backdrop-blur-sm text-[#071A2F] text-xs font-semibold rounded-full",children:t.category})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-bold text-[#071A2F] font-[Poppins] mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2",children:t.description}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[e.jsxs("span",{children:[e.jsxs("strong",{className:"text-[#071A2F]",children:[t.raised.toLocaleString("fr-FR")," €"]})," collectés"]}),e.jsxs("span",{children:["Objectif : ",t.goal.toLocaleString("fr-FR")," €"]})]}),e.jsx("div",{className:"w-full h-2.5 bg-gray-200 rounded-full overflow-hidden",children:e.jsx(g.div,{initial:{width:0},whileInView:{width:`${a}%`},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut"},className:"h-full bg-gradient-to-r from-[#0B8F55] to-[#0a7d4a] rounded-full"})}),e.jsx("div",{className:"flex justify-between items-center mt-3",children:e.jsxs("span",{className:"text-xs text-gray-400",children:[e.jsxs("strong",{className:"text-[#0B8F55]",children:[a,"%"]})," financé · ",t.contributors," contributeurs"]})}),e.jsxs(m,{to:`/projets/${t.id}`,className:"mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#071A2F] hover:bg-[#0a2540] text-white text-sm font-semibold rounded-xl transition-all",children:["Contribuer",e.jsx(p,{className:"w-4 h-4"})]})]})]})},t.id)})}),e.jsx(r,{children:e.jsx("div",{className:"text-center mt-10",children:e.jsxs(m,{to:"/projets",className:"inline-flex items-center gap-2 text-[#0B8F55] font-semibold hover:gap-3 transition-all text-sm",children:["Voir tous les projets",e.jsx(p,{className:"w-4 h-4"})]})})})]})})}function xe(){return e.jsx("section",{className:"py-24 bg-[#F5F7FA]",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[e.jsx(r,{direction:"left",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&h=500&fit=crop",alt:"Programme social",className:"rounded-2xl shadow-2xl"}),e.jsx("div",{className:"absolute -bottom-6 -right-6 bg-[#0B8F55] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg",children:"15 communautés aidées"})]})}),e.jsxs(r,{direction:"right",children:[e.jsx("span",{className:"inline-block px-4 py-1.5 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-4",children:"ONG & Fondations"}),e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-[#071A2F] font-[Poppins] leading-tight",children:"Ensemble, donnons plus d'opportunités à la jeunesse"}),e.jsx("p",{className:"mt-4 text-gray-500 leading-relaxed",children:"Nos programmes sociaux couvrent l'éducation, l'insertion, l'égalité des chances et le développement communautaire. Nous travaillons main dans la main avec les ONG et fondations pour maximiser notre impact."}),e.jsx("ul",{className:"mt-6 space-y-3",children:["Éducation et scolarisation","Insertion sociale par le sport","Égalité des chances","Développement communautaire"].map(t=>e.jsxs("li",{className:"flex items-center gap-3 text-sm text-gray-600",children:[e.jsx(y,{className:"w-4 h-4 text-[#0B8F55] shrink-0"}),t]},t))}),e.jsxs(m,{to:"/partenaires#ong",className:"mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#071A2F] hover:bg-[#0a2540] text-white font-semibold rounded-full transition-all text-sm",children:["Devenir partenaire",e.jsx(p,{className:"w-4 h-4"})]})]})]})})})}function he(){const t=[{name:"Bronze",color:"from-amber-600 to-amber-800",price:"1K€"},{name:"Silver",color:"from-gray-400 to-gray-600",price:"5K€"},{name:"Gold",color:"from-yellow-500 to-yellow-700",price:"15K€"},{name:"Premium",color:"from-[#0B8F55] to-[#087a44]",price:"50K€+"}];return e.jsx("section",{className:"py-24 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Sponsors & entreprises",title:e.jsxs(e.Fragment,{children:["Construisons ensemble la ",e.jsx("span",{className:"text-[#F4B942]",children:"prochaine génération"})]})})}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:t.map((s,a)=>e.jsx(r,{delay:a*.1,children:e.jsxs("div",{className:"relative bg-[#F5F7FA] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1",children:[e.jsx("div",{className:`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-lg font-[Poppins] group-hover:scale-110 transition-transform`,children:s.price}),e.jsx("h3",{className:"mt-4 text-lg font-bold text-[#071A2F] font-[Poppins]",children:s.name}),e.jsx("div",{className:"mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:`h-full bg-gradient-to-r ${s.color} rounded-full`,style:{width:`${["25%","50%","75%","100%"][a]}`}})})]})},s.name))}),e.jsx(r,{children:e.jsxs("div",{className:"mt-16 bg-[#F5F7FA] rounded-2xl p-8 md:p-12",children:[e.jsx("h3",{className:"text-xl font-bold text-[#071A2F] font-[Poppins] mb-6",children:"Pourquoi devenir partenaire ?"}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{icon:e.jsx(K,{className:"w-5 h-5"}),text:"Visibilité internationale"},{icon:e.jsx(W,{className:"w-5 h-5"}),text:"Responsabilité sociale (RSE)"},{icon:e.jsx(Q,{className:"w-5 h-5"}),text:"Impact jeunesse direct"},{icon:e.jsx(C,{className:"w-5 h-5"}),text:"Image de marque renforcée"},{icon:e.jsx(F,{className:"w-5 h-5"}),text:"Présence dans le sport africain"},{icon:e.jsx(N,{className:"w-5 h-5"}),text:"Projets à fort impact social"}].map((s,a)=>e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-white rounded-xl",children:[e.jsx("div",{className:"text-[#0B8F55]",children:s.icon}),e.jsx("span",{className:"text-sm font-medium text-[#071A2F]",children:s.text})]},a))})]})})]})})}function pe(){const t=[{icon:e.jsx(N,{className:"w-5 h-5"}),label:"DON",desc:"Votre contribution arrive"},{icon:e.jsx(E,{className:"w-5 h-5"}),label:"FINANCEMENT",desc:"Allocation au projet"},{icon:e.jsx(q,{className:"w-5 h-5"}),label:"RÉALISATION",desc:"Exécution du projet"},{icon:e.jsx(y,{className:"w-5 h-5"}),label:"RAPPORT",desc:"Transparence totale"},{icon:e.jsx(F,{className:"w-5 h-5"}),label:"IMPACT",desc:"Résultats mesurables"}];return e.jsx("section",{className:"py-24 bg-[#F5F7FA]",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Transparence",title:e.jsxs(e.Fragment,{children:["Votre contribution. ",e.jsx("span",{className:"text-[#0B8F55]",children:"Notre responsabilité."})]}),subtitle:"Chaque euro est tracé, chaque projet est documenté, chaque impact est mesuré."})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55]"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-6",children:t.map((s,a)=>e.jsx(r,{delay:a*.1,children:e.jsxs("div",{className:"text-center relative",children:[e.jsx("div",{className:"w-14 h-14 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] relative z-10",children:s.icon}),e.jsx("h4",{className:"mt-4 text-xs font-bold text-[#071A2F] uppercase tracking-wider",children:s.label}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:s.desc})]})},a))})]})]})})}function ue(){const t={Matchs:"bg-red-100 text-red-700",Partenariats:"bg-blue-100 text-blue-700",Détection:"bg-purple-100 text-purple-700",Talents:"bg-green-100 text-green-700",Projets:"bg-orange-100 text-orange-700",Académie:"bg-cyan-100 text-cyan-700"};return e.jsx("section",{className:"py-24 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Actualités",title:e.jsxs(e.Fragment,{children:["Restez informé de nos ",e.jsx("span",{className:"text-[#0B8F55]",children:"nouvelles"})]}),subtitle:"Suivez l'actualité de l'académie, nos réussites et les progrès de nos talents."})}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8",children:X.slice(0,3).map((s,a)=>e.jsx(r,{delay:a*.15,children:e.jsxs(m,{to:`/actualites/${s.id}`,className:"group block bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[e.jsx("div",{className:"relative h-48 overflow-hidden",children:e.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:`px-2.5 py-1 text-xs font-semibold rounded-full ${t[s.category]||"bg-gray-100 text-gray-700"}`,children:s.category}),e.jsx("span",{className:"text-xs text-gray-400",children:new Date(s.date).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsx("h3",{className:"font-bold text-[#071A2F] font-[Poppins] group-hover:text-[#0B8F55] transition-colors line-clamp-2",children:s.title}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 line-clamp-2",children:s.excerpt}),e.jsxs("span",{className:"mt-3 inline-flex items-center gap-1 text-[#0B8F55] text-sm font-semibold group-hover:gap-2 transition-all",children:["Lire plus ",e.jsx(p,{className:"w-3.5 h-3.5"})]})]})]})},s.id))})]})})}function ge(){return e.jsxs("section",{className:"py-24 bg-[#071A2F] relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 opacity-10",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-[#0B8F55] rounded-full blur-3xl"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#F4B942] rounded-full blur-3xl"})]}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[e.jsx(r,{children:e.jsx(x,{light:!0,badge:"Impact social",title:"Des chiffres qui parlent",subtitle:"Chaque nombre cache une histoire, un parcours, une vie transformée."})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-8",children:Z.map((t,s)=>e.jsx(r,{delay:s*.1,children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4B942] font-[Poppins]",children:e.jsx(P,{value:t.value,suffix:t.suffix})}),e.jsx("div",{className:"text-sm text-white/60 mt-2",children:t.label})]})},s))})]})]})}function be(){const[t,s]=c.useState(0);return c.useEffect(()=>{const a=setInterval(()=>{s(l=>(l+1)%f.length)},6e3);return()=>clearInterval(a)},[]),e.jsx("section",{className:"py-24 bg-[#F5F7FA]",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(r,{children:e.jsx(x,{badge:"Témoignages",title:e.jsxs(e.Fragment,{children:["Ils en parlent ",e.jsx("span",{className:"text-[#0B8F55]",children:"mieux"})," que nous"]})})}),e.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[e.jsx("div",{className:"overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 p-8 md:p-12",children:f.map((a,l)=>e.jsxs(g.div,{initial:!1,animate:{opacity:l===t?1:0,x:l===t?0:20},transition:{duration:.5},className:`${l===t?"block":"hidden"}`,children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("img",{src:a.photo,alt:a.name,className:"w-16 h-16 rounded-full object-cover border-2 border-[#0B8F55]"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-[#071A2F] font-[Poppins]",children:a.name}),e.jsx("p",{className:"text-sm text-gray-500",children:a.role})]})]}),e.jsxs("p",{className:"text-lg text-gray-600 italic leading-relaxed",children:['"',a.quote,'"']}),e.jsx("div",{className:"flex gap-1 mt-4",children:Array.from({length:a.stars}).map((n,b)=>e.jsx(C,{className:"w-4 h-4 fill-[#F4B942] text-[#F4B942]"},b))})]},l))}),e.jsxs("div",{className:"flex items-center justify-center gap-4 mt-6",children:[e.jsx("button",{onClick:()=>s(a=>(a-1+f.length)%f.length),className:"p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#071A2F]","aria-label":"Précédent",children:e.jsx(R,{className:"w-5 h-5"})}),e.jsx("div",{className:"flex gap-2",children:f.map((a,l)=>e.jsx("button",{onClick:()=>s(l),className:`w-2.5 h-2.5 rounded-full transition-all ${l===t?"bg-[#0B8F55] w-8":"bg-gray-300"}`,"aria-label":`Témoignage ${l+1}`},l))}),e.jsx("button",{onClick:()=>s(a=>(a+1)%f.length),className:"p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#071A2F]","aria-label":"Suivant",children:e.jsx(I,{className:"w-5 h-5"})})]})]})]})})}function fe(){const t=[...S,...S];return e.jsxs("section",{className:"py-20 bg-white overflow-hidden",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx(r,{children:e.jsx(x,{badge:"Partenaires",title:"Ils croient en notre vision"})})}),e.jsx("div",{className:"relative mt-8",children:e.jsx("div",{className:"flex animate-scroll gap-12 items-center",children:t.map((s,a)=>e.jsx("div",{className:"shrink-0 px-8 py-6 bg-[#F5F7FA] rounded-2xl flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100",children:e.jsx("span",{className:"text-gray-400 font-bold text-sm",children:s.name})},a))})}),e.jsx("style",{children:`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `})]})}function je(){return e.jsxs("section",{className:"relative py-24 overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop",alt:"Jeunes footballeurs",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-[#071A2F]/85"})]}),e.jsx("div",{className:"relative z-10 max-w-4xl mx-auto px-4 text-center",children:e.jsxs(r,{children:[e.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Poppins] leading-tight",children:["Un talent peut changer une vie.",e.jsx("br",{}),e.jsx("span",{className:"text-[#F4B942]",children:"Votre soutien peut changer son avenir."})]}),e.jsx("p",{className:"mt-6 text-lg text-white/70 max-w-2xl mx-auto",children:"Rejoignez-nous dans cette mission. Chaque geste compte, chaque contribution fait la différence."}),e.jsxs("div",{className:"mt-10 flex flex-wrap justify-center gap-4",children:[e.jsxs(m,{to:"/soutenir",className:"inline-flex items-center gap-2 px-8 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#0B8F55]/25 text-sm",children:[e.jsx(N,{className:"w-4 h-4"}),"Soutenir l'académie"]}),e.jsxs(m,{to:"/partenaires",className:"inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-sm",children:["Devenir partenaire",e.jsx(p,{className:"w-4 h-4"})]})]})]})})]})}function ze(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(G,{}),e.jsxs("main",{children:[e.jsx(ie,{}),e.jsx(le,{}),e.jsx(ne,{}),e.jsx(oe,{}),e.jsx(ce,{}),e.jsx(de,{}),e.jsx(me,{}),e.jsx(xe,{}),e.jsx(he,{}),e.jsx(pe,{}),e.jsx(ue,{}),e.jsx(ge,{}),e.jsx(be,{}),e.jsx(fe,{}),e.jsx(je,{})]}),e.jsx(H,{})]})}export{ze as default};
