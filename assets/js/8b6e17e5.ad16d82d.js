"use strict";(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[4080],{3028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>h,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var c=t(1527),i=t(7463);const o={slug:"websocket-hoat-dong-nhu-the-nao",title:"WebSocket ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\xe0o?",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",author_image_url:"https://avatars.githubusercontent.com/u/26299310?v=4",tags:["websocket","javascript","web"]},h=void 0,s={permalink:"/blog/websocket-hoat-dong-nhu-the-nao",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-06-16-how-websocket-works.md",source:"@site/blog/2021-06-16-how-websocket-works.md",title:"WebSocket ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\xe0o?",description:"WebSocket l\xe0 g\xec",date:"2021-06-16T00:00:00.000Z",formattedDate:"June 16, 2021",tags:[{label:"websocket",permalink:"/blog/tags/websocket"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"web",permalink:"/blog/tags/web"}],readingTime:2.825,hasTruncateMarker:!1,authors:[{name:"L\xea S\u0129 B\xedch",title:"Ruby on Rails/React Developer",url:"https://github.com/moonlight8978",imageURL:"https://avatars.githubusercontent.com/u/26299310?v=4"}],frontMatter:{slug:"websocket-hoat-dong-nhu-the-nao",title:"WebSocket ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\xe0o?",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",author_image_url:"https://avatars.githubusercontent.com/u/26299310?v=4",tags:["websocket","javascript","web"]},unlisted:!1,prevItem:{title:"T\xecm hi\u1ec3u v\u1ec1 Active Record Encryption",permalink:"/blog/tim-hieu-ve-active-record-encryption"},nextItem:{title:"C\xf9ng t\xecm hi\u1ec3u v\u1ec1 Puma (Ruby on Rails)",permalink:"/blog/cung-tim-hieu-ve-puma-ruby-on-rails"}},r={authorsImageUrls:[void 0]},a=[{value:"WebSocket l\xe0 g\xec",id:"websocket-l\xe0-g\xec",level:2},{value:"C\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a WebSocket",id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-websocket",level:2},{value:"Ti\u1ec1n \u0111\u1ec1",id:"ti\u1ec1n-\u0111\u1ec1",level:3},{value:"Handshaking",id:"handshaking",level:3},{value:"Trao \u0111\u1ed5i d\u1eef li\u1ec7u",id:"trao-\u0111\u1ed5i-d\u1eef-li\u1ec7u",level:3},{value:"Tham kh\u1ea3o",id:"tham-kh\u1ea3o",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"websocket-l\xe0-g\xec",children:"WebSocket l\xe0 g\xec"}),"\n",(0,c.jsx)(n.p,{children:"C\u0169ng gi\u1ed1ng nh\u01b0 HTTP, WebSocket l\xe0 1 protocol, ho\u1ea1t \u0111\u1ed9ng tr\xean m\xf4 h\xecnh client/server, v\xe0 s\u1eed d\u1ee5ng TCP connection.\nL\xe0 m\u1ed9t protocol, c\xf3 ngh\u0129a l\xe0 b\u1ea5t k\u1ec3 vi\u1ec7c implement ra sao, nh\u01b0ng server c\u1ee9 l\u1eafng nghe 1 TCP port, v\xe0 giao ti\u1ebfp gi\u1eefa client/server tu\xe2n theo \u0111\xfang spec m\xe0 WebSocket \u0111\u1ec1 ra l\xe0 \u0111\u01b0\u1ee3c."}),"\n",(0,c.jsx)(n.p,{children:"WebSocket cho ph\xe9p trao \u0111\u1ed5i d\u1eef li\u1ec7u 2 chi\u1ec1u gi\u1eefa client v\xe0 server. Tuy nhi\xean ch\u1eafc s\u1ebd c\xf3 nhi\u1ec1u ng\u01b0\u1eddi th\u1eafc m\u1eafc"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Sao kh\xf4ng d\xf9ng HTTP r\u1ed3i set interval request l\xean, hay l\xe0 server push cho \u0111\u01a1n gi\u1ea3n. \u0110\u1ebb ra l\u1eafm protocol l\xe0m g\xec \u0111au \u0111\u1ea7u?"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["N\u1ebfu s\u1eed d\u1ee5ng HTTP, m\u1ed7i l\u1ea7n c\u1eadp nh\u1eadt data m\u1edbi th\xec client l\u1ea1i ph\u1ea3i t\u1ea1o request HTTP, v\xe0 s\u1ebd c\xf3 r\u1ea5t nhi\u1ec1u header d\u01b0 th\u1eeba, g\xe2y l\xe3ng ph\xed b\u0103ng th\xf4ng, v\xe0 vi\u1ec7c kh\u1edfi t\u1ea1o request c\u0169ng m\u1ea5t th\xeam 1 ch\xfat th\u1eddi gian. Trong khi \u0111\xf3 WebSocket, sau khi client v\xe0 server ",(0,c.jsx)(n.em,{children:"say hello"})," v\u1edbi nhau, TCP connection s\u1ebd v\u1eabn alive, v\xe0 ch\xfang s\u1ebd giao l\u01b0u k\u1ebft h\u1ee3p v\u1edbi nhau qua connection \u0111\xf3 m\xe0 kh\xf4ng c\u1ea7n th\xeam nh\u1eefng th\xf4ng tin d\u01b0 th\u1eeba nh\u01b0 header. V\xe0 c\xf3 l\u1ebd c\xf2n nhi\u1ec1u l\u1ee3i \xedch n\u1eefa, nh\u01b0ng m\xecnh kh\xf4ng bi\u1ebft =))"]}),"\n",(0,c.jsx)(n.p,{children:"Khen th\u1ebf \u0111\u1ee7 r\u1ed3i, h\xe3y th\u1eed t\xecm hi\u1ec3u xem WebSocket ngang d\u1ecdc ra sao."}),"\n",(0,c.jsx)(n.h2,{id:"c\xe1ch-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-websocket",children:"C\xe1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a WebSocket"}),"\n",(0,c.jsx)(n.h3,{id:"ti\u1ec1n-\u0111\u1ec1",children:"Ti\u1ec1n \u0111\u1ec1"}),"\n",(0,c.jsx)(n.p,{children:"V\xed d\u1ee5 v\u1edbi \u1ee9ng d\u1ee5ng m\u1ea1ng x\xe3 h\u1ed9i, ta c\xf3 1 t\xednh n\u0103ng chat. M\u1ed7i khi b\u1eadt chat v\u1edbi 1 ng\u01b0\u1eddi, 1 WebSocket t\u1edbi webserver c\u1ee7a ta s\u1ebd \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o. Nh\u01b0 v\u1eady, ta \u0111ang c\xf3 1 webserver, v\xe0 \u0111ang c\u1ea7n 1 websocket connection t\u1edbi webserver \u0111\xf3. M\u1eb7t kh\xe1c vi\u1ec7c s\u1eed d\u1ee5ng raw TCP tr\xean client c\u0169ng r\u1ea5t h\u1ea1n ch\u1ebf. Ch\xednh v\xec v\u1eady, WebSocket \u0111\xe3 t\u1eadn d\u1ee5ng lu\xf4n port 80/443 c\u1ee7a HTTP(S) \u0111\u1ec3 kh\u1edfi t\u1ea1o connection."}),"\n",(0,c.jsx)(n.h3,{id:"handshaking",children:"Handshaking"}),"\n",(0,c.jsxs)(n.p,{children:["Khi kh\u1edfi t\u1ea1o connection, client s\u1ebd t\u1ea1o 1 HTTP request \u0111\u1ec3 th\u1ef1c hi\u1ec7n ",(0,c.jsx)(n.em,{children:"handshake"})," v\u1edbi server"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"handshake",src:t(9726).Z+"",width:"561",height:"353"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Tr\u01b0\u1edbc ti\xean client s\u1ebd g\u1eedi request t\u1edbi endpoint m\xe0 websocket server \u0111ang l\u1eafng nghe. v\xed d\u1ee5 nh\u01b0 ",(0,c.jsx)(n.code,{children:"/chat"}),".\nRequest s\u1ebd k\xe8m theo 1 v\xe0i header m\xe0 WebSocket protocol quy \u0111\u1ecbnh: ",(0,c.jsx)(n.code,{children:"Sec-WebSocket-Key"}),", ",(0,c.jsx)(n.code,{children:"Sec-WebSocket-Version"}),", ",(0,c.jsx)(n.code,{children:"Upgrade"}),", ",(0,c.jsx)(n.code,{children:"Connection"}),", ... v\xe0 nh\u1eefng header c\u01a1 b\u1ea3n c\u1ee7a 1 HTTP request kh\xe1c n\u1eefa."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["WebSocket server s\u1ebd ti\u1ebfp nh\u1eadn request, authen (n\u1ebfu c\xf3), n\u1ebfu kh\xf4ng h\u1ee3p l\u1ec7 s\u1ebd tr\u1ea3 v\u1ec1 ",(0,c.jsx)(n.code,{children:"400 Bad Request"})," v\xe0 terminate connection \u0111\xf3.\nNg\u01b0\u1ee3c l\u1ea1i n\u1ebfu OK, server s\u1ebd tr\u1ea3 v\u1ec1 ",(0,c.jsx)(n.code,{children:"101 Switching Protocols"})," c\xf9ng v\u1edbi header ",(0,c.jsx)(n.code,{children:"Sec-WebSocket-Accept"}),". Connection \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c gi\u1eef, v\xe0 sau \u0111\xf3 client v\xe0 server b\u1eaft \u0111\u1ea7u trao \u0111\u1ed5i th\xf4ng tin qua l\u1ea1i v\u1edbi nhau."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Gi\xe1 tr\u1ecb c\u1ee7a ",(0,c.jsx)(n.code,{children:"Sec-WebSocket-Accept"})," \u0111\u01b0\u1ee3c quy \u0111\u1ecbnh nh\u01b0 sau:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-txt",children:"Sec-WebSocket-Accept = Base64( SHA1 ( Sec-WebSocket-Key + 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 ) )\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"})," c\xf2n \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,c.jsx)(n.em,{children:"magic string"})]}),"\n",(0,c.jsx)(n.h3,{id:"trao-\u0111\u1ed5i-d\u1eef-li\u1ec7u",children:"Trao \u0111\u1ed5i d\u1eef li\u1ec7u"}),"\n",(0,c.jsxs)(n.p,{children:["Vi\u1ec7c trao \u0111\u1ed5i d\u1eef li\u1ec7u gi\u1eefa client v\xe0 server kh\xe1 l\xe0 h\u1ea1i n\xe3o, c\u1ee5 th\u1ec3 vi\u1ec7c decode message, hay format message c\xf3 th\u1ec3 xem th\xeam t\u1ea1i ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#exchanging_data_frames",children:"\u0111\xe2y"}),". Gi\u1eef ch\u1ed7 \u0111\u1ec3 sau n\xe0y n\u1ebfu kh\xf4ng ",(0,c.jsx)(n.del,{children:"l\u01b0\u1eddi"})," b\u1eadn quay l\u1ea1i t\xecm hi\u1ec3u sau =))"]}),"\n",(0,c.jsx)(n.p,{children:"Trong qu\xe1 tr\xecnh connection \u0111\u01b0\u1ee3c keep alive, s\u1ebd c\xf3 r\u1ea5t nhi\u1ec1u request ping gi\u1eefa client/server \u0111\u1ec3 ki\u1ec3m tra xem ph\xeda b\xean kia c\xf2n active hay kh\xf4ng. B\xean g\u1eedi ping, b\xean nh\u1eadn pong, v\u1eabn c\xf2n s\u1ed1ng th\xec ta l\u1ea1i giao l\u01b0u k\u1ebft h\u1ee3p ti\u1ebfp. C\xf2n kh\xf4ng th\xec server/client s\u1ebd bi\u1ebft \u0111\u1ec3 terminate inactive connection \u0111\xf3 \u0111i."}),"\n",(0,c.jsx)(n.h2,{id:"tham-kh\u1ea3o",children:"Tham kh\u1ea3o"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers",children:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://stackoverflow.com/questions/50197453/how-long-can-a-websocket-connection-last",children:"https://stackoverflow.com/questions/50197453/how-long-can-a-websocket-connection-last"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6455",children:"https://datatracker.ietf.org/doc/html/rfc6455"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},9726:(e,n,t)=>{t.d(n,{Z:()=>c});const c=t.p+"assets/images/websocket-handshake-adc15c177bb901fb7fb81d48ac042d27.jpeg"},7463:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>h});var c=t(959);const i={},o=c.createContext(i);function h(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);