"use strict";(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[7534],{1590:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(1527),o=s(7463);const r={sidebar_position:2e3},c="GoAccess",a={id:"snippets/goaccess",title:"GoAccess",description:"Under reverse proxy",source:"@site/docs/snippets/goaccess.md",sourceDirName:"snippets",slug:"/snippets/goaccess",permalink:"/docs/snippets/goaccess",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/goaccess.md",tags:[],version:"current",sidebarPosition:2e3,frontMatter:{sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Systemd",permalink:"/docs/snippets/systemd"},next:{title:"Environment Setup",permalink:"/docs/snippets/environment-setup"}},i={},l=[{value:"Under reverse proxy",id:"under-reverse-proxy",level:3},{value:"Traefik access log",id:"traefik-access-log",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"goaccess",children:"GoAccess"}),"\n",(0,t.jsx)(n.h3,{id:"under-reverse-proxy",children:"Under reverse proxy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:'services:\n  goaccess:\n    command:\n      - --real-time-html\n      - --ws-url\n      - wss://localhost:443/access-log/ws\n    volumes:\n      - ./report.html:/report.html\n      - ./access.log:/access.log:ro\n    expose:\n      - 7890\n\n  nginx:\n    volumes:\n      - ./report.html:/usr/share/nginx/html/index.html:ro\n    expose:\n      - 80\n\n  traefik:\n    volumes:\n      - ./access.log:/var/log/traefik.log\n    ports:\n      - "443:443"\n      - "80:80"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-apacheconf",metastring:'title="nginx.conf"',children:"map $http_upgrade $connection_upgrade {\n  default upgrade;\n  '' close;\n}\n\nserver {\n  location /ws {\n    proxy_pass http://goaccess:7890;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"traefik-access-log",children:"Traefik access log"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"services:\n  goaccess:\n    command:\n      - --log-format\n      - TRAEFIKCLF\n      - --date-format=%d/%b/%Y\n      - --time-format=%T\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7463:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var t=s(959);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);