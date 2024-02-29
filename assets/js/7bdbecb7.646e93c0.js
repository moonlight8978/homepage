"use strict";(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[4727],{2094:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=i(1527),c=i(7463);const r={slug:"tim-hieu-ve-active-record-encryption",title:"T\xecm hi\u1ec3u v\u1ec1 Active Record Encryption",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",author_image_url:"https://avatars.githubusercontent.com/u/26299310?v=4",tags:["websocket","javascript","web"]},s=void 0,a={permalink:"/blog/tim-hieu-ve-active-record-encryption",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-06-17-active-record-encryption.md",source:"@site/blog/2021-06-17-active-record-encryption.md",title:"T\xecm hi\u1ec3u v\u1ec1 Active Record Encryption",description:"Overview",date:"2021-06-17T00:00:00.000Z",formattedDate:"June 17, 2021",tags:[{label:"websocket",permalink:"/blog/tags/websocket"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"web",permalink:"/blog/tags/web"}],readingTime:7.275,hasTruncateMarker:!1,authors:[{name:"L\xea S\u0129 B\xedch",title:"Ruby on Rails/React Developer",url:"https://github.com/moonlight8978",imageURL:"https://avatars.githubusercontent.com/u/26299310?v=4"}],frontMatter:{slug:"tim-hieu-ve-active-record-encryption",title:"T\xecm hi\u1ec3u v\u1ec1 Active Record Encryption",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",author_image_url:"https://avatars.githubusercontent.com/u/26299310?v=4",tags:["websocket","javascript","web"]},unlisted:!1,nextItem:{title:"WebSocket ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\xe0o?",permalink:"/blog/websocket-hoat-dong-nhu-the-nao"}},o={authorsImageUrls:[void 0]},h=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"AES",id:"aes",level:2},{value:"GCM",id:"gcm",level:2},{value:"AES-256-GCM meets Rails",id:"aes-256-gcm-meets-rails",level:2},{value:"Encryption Key",id:"encryption-key",level:3},{value:"Encryption Process",id:"encryption-process",level:3},{value:"Tham kh\u1ea3o",id:"tham-kh\u1ea3o",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["V\xe0o ng\xe0y 28/5/2021, tr\xean blog c\u1ee7a Rails c\xf3 th\xf4ng b\xe1o v\u1ec1 1 t\xednh n\u0103ng m\u1edbi \u0111\xf3 l\xe0 ",(0,t.jsx)(n.a,{href:"https://weblog.rubyonrails.org/2021/5/28/this-week-in-rails-active-record-encrytion-several-performance-optimizations-and-much-more/",children:"ActiveRecord Encryption"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["ActiveRecord Encryption gi\xfap encrypt attribute n\xe0o \u0111\xf3 c\u1ee7a model, v\xe0 l\u01b0u v\xe0o DB d\u01b0\u1edbi d\u1ea1ng m\xe3 ho\xe1. T\xednh n\u0103ng n\xe0y \u0111\u01b0\u1ee3c extract ra t\u1eeb d\u1ef1 \xe1n ",(0,t.jsx)(n.a,{href:"https://www.hey.com",children:"HEY"})," c\u1ee7a Basecamp."]}),"\n",(0,t.jsx)(n.p,{children:"H\xe3y th\u1eed t\xecm hi\u1ec3u xem t\xednh n\u0103ng n\xe0y c\xf3 g\xec th\xfa v\u1ecb."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Theo ",(0,t.jsx)(n.a,{href:"https://edgeguides.rubyonrails.org/active_record_encryption.html#basic-usage",children:"guide"}),", \u0111\u1ea7u ti\xean ch\xfang ta s\u1ebd c\u1ea7n ph\u1ea3i ch\u1ea1y c\xe2u l\u1ec7nh sau"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rails db:encryption:init\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Rails s\u1ebd cho ta 1 g\u1ee3i \xfd l\xe0 copy \u0111\u1ed1ng sau v\xe0o credentials. \u1eea ",(0,t.jsx)(n.code,{children:"EDITOR=vim rails credentials:edit"})," r\u1ed3i copy paste th\xf4i."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"active_record_encryption:\n  primary_key: EGY8WhulUOXixybod7ZWwMIL68R9o5kC\n  deterministic_key: aPA5XyALhf75NNnMzaspW7akTfZp0lPY\n  key_derivation_salt: xEY0dt6TZcAMg52K7O84wYzkjvbA62Hz\n"})}),"\n",(0,t.jsx)(n.p,{children:"Trong model, ta define attribute c\u1ea7n m\xe3 ho\xe1 nh\u01b0 sau:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",metastring:"title=app/models/article.rb",children:"class Article < ApplicationRecord\n  encrypts :title\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"R\u1ed3i create/update model nh\u01b0 b\xecnh th\u01b0\u1eddng"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'article = Article.create(title: "Encrypt it all!")\n'})}),"\n",(0,t.jsx)(n.p,{children:"V\xe0 b\xf9m, magic..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSERT INTO `articles` (`title`) VALUES (\'{\\"p\\":\\"n7J0/ol+a7DRMeaE\\",\\"h\\":{\\"iv\\":\\"DXZMDWUKfp3bg/Yu\\",\\"at\\":\\"X1/YjMHbHD4talgF9dt61A==\\"}}\')\n'})}),"\n",(0,t.jsx)(n.p,{children:"V\xf4 h\u1ea1n b\u1ed1i r\u1ed1i..."}),"\n",(0,t.jsx)(n.h2,{id:"aes",children:"AES"}),"\n",(0,t.jsx)(n.p,{children:"Tr\u01b0\u1edbc ti\xean ta h\xe3y t\xecm hi\u1ec3u v\u1ec1 \u0111\u1ed1ng key m\xe0 Rails \u0111\xe3 gen cho ta l\xfac \u0111\u1ea7u"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"active_record_encryption:\n  primary_key: EGY8WhulUOXixybod7ZWwMIL68R9o5kC\n  deterministic_key: aPA5XyALhf75NNnMzaspW7akTfZp0lPY\n  key_derivation_salt: xEY0dt6TZcAMg52K7O84wYzkjvbA62Hz\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rails gen ra \u0111\u1ed1ng tr\xean nh\u01b0 n\xe0o v\u1eady?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",metastring:"title=https://github.com/rails/rails/blob/e2585a21e389967322a98b46a7b3643d82bd9c28/activerecord/lib/active_record/railties/databases.rake#L554-L566",children:"puts <<~MSG\n  Add this entry to the credentials of the target environment:#{' '}\n\n  active_record_encryption:\n    primary_key: #{SecureRandom.alphanumeric(32)}\n    deterministic_key: #{SecureRandom.alphanumeric(32)}\n    key_derivation_salt: #{SecureRandom.alphanumeric(32)}\nMSG\n"})}),"\n",(0,t.jsxs)(n.p,{children:["N\u1ebfu ai ch\u01b0a bi\u1ebft th\xec \u0111\xe2y l\xe0 ",(0,t.jsx)(n.a,{href:"https://ruby-doc.org/stdlib-3.0.1/libdoc/securerandom/rdoc/SecureRandom.html",children:"standard lib c\u1ee7a Ruby"}),", \u0111\u01a1n thu\u1ea7n l\xe0... random m\xe0 th\xf4i =))"]}),"\n",(0,t.jsxs)(n.p,{children:["Th\u1ebf \u0111\u1ed1ng key n\xe0y \u0111\u1ec3 l\xe0m g\xec? \u1ede m\u1ee5c ",(0,t.jsx)(n.a,{href:"https://edgeguides.rubyonrails.org/active_record_encryption.html#setup",children:"Setup"})," c\u1ee7a guide, Rails c\u0169ng \u0111\xe3 g\u1ee3i \xfd cho ta, \u0111\u1ed1ng n\xe0y d\xf9ng cho AES."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"this will be used to derive the AES 32 bytes key"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["V\u1eady AES l\xe0 c\xe1i kh\u1ec9 m\u1ed1c g\xec? Theo ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",children:"wiki"}),", AES l\xe0 vi\u1ebft t\u1eaft c\u1ee7a ",(0,t.jsx)(n.strong,{children:"A"}),"dvanced ",(0,t.jsx)(n.strong,{children:"E"}),"ncryption ",(0,t.jsx)(n.strong,{children:"S"}),"tandard. Hay c\xf2n \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn v\u1edbi c\xe1i t\xean Rijndael. AES l\xe0 1 chu\u1ea9n m\xe3 ho\xe1, s\u1eed d\u1ee5ng symmetric encryption. AES r\u1ea5t ph\u1ed5 bi\u1ebfn ng\xe0y nay."]}),"\n",(0,t.jsx)(n.p,{children:"Th\u1ebf b\u1ea5t n\xe0o m\xe0 l\u1ea1i \u0111\u1ebb ra th\xeam nhi\u1ec1u thu\u1eadt ng\u1eef h\u1ea1i n\xe3o h\u01a1n v\u1eady =)) C\u1ee9 t\u1eeb t\u1eeb r\u1ed3i khoai s\u1ebd nh\u1eeb, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u ti\u1ebfp."}),"\n",(0,t.jsx)(n.p,{children:"Tr\u01b0\u1edbc h\u1ebft th\xec, th\u1ebf n\xe0o l\xe0 m\xe3 ho\xe1? V\xed d\u1ee5 nh\u01b0 \u1edf 1 di\u1ec5n \u0111\xe0n n\xe0o \u0111\xf3 ng\u01b0\u1eddi ta share nhau ho\xe0ng thu\u1ef3 link b\u1eb1ng \u0111\u1ed1ng k\xed t\u1ef1 n\xe0y"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"68747470733A2F2F7777772E676F6F676C652E636F6D2E766E2F"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["thay v\xec hu\u1ef5ch to\u1eb9t ra l\xe0 m\u1ed9t \u0111\u01b0\u1eddng link ",(0,t.jsx)(n.del,{children:"\u0111\u1ed3i tru\u1ef5"})," n\xe0o \u0111\xf3. Nh\u01b0ng do vi\u1ec7c gi\u1ea3i m\xe3 qu\xe1 \u0111\u01a1n gi\u1ea3n, c\u1ee5 th\u1ec3 l\xe0 d\xf9ng m\xe3 HEX, n\xean \u0111\xe2y ch\u1ec9 l\xe0 encode/decode sang 1 d\u1ea1ng d\u1eef li\u1ec7u kh\xe1c m\xe0 th\xf4i, v\xe0 vi\u1ec7c chuy\u1ec3n \u0111\u1ed5i th\u01b0\u1eddng kh\xe1 nhanh. C\xe1c b\u1ea1n c\xf3 th\u1ec3 v\xe0o \u0111\xe2y ",(0,t.jsx)(n.a,{href:"https://www.convertstring.com/vi/EncodeDecode/HexDecode",children:"\u0111\xe2y"})," \u0111\u1ec3 decode chu\u1ed7i huy\u1ec1n b\xed tr\xean."]}),"\n",(0,t.jsx)(n.p,{children:"C\xf2n encrypt v\xe0 decrypt d\xf9ng trong cryptography n\xf3 \u1edf 1 t\u1ea7m cao kh\xe1c. Th\xf4ng th\u01b0\u1eddng s\u1ebd c\xf3 th\xeam 1 key (ho\u1eb7c 1 c\u1eb7p key public/private). Khi \u0111\xf3 input s\u1ebd l\xe0 key + data. V\xe0 output s\u1ebd l\xe0 1 chu\u1ed7i n\xe0o \u0111\xf3, chu\u1ed7i n\xe0y c\u1ef1c k\xec kh\xf3 \u0111\u1ec3 gi\u1ea3i m\xe3 n\u1ebfu kh\xf4ng n\u1eafm trong tay key. Th\xf4ng th\u01b0\u1eddng th\xec ph\u1ea3i cho ch\u1ea1y thu\u1eadt to\xe1n v\xe9t c\u1ea1n - t\u1ee9c l\xe0 th\u1eed t\u1eebng key m\u1ed9t, v\xe0 vi\u1ec7c n\xe0y c\u1ea7n \u0111\u1ebfn h\xe0ng tri\u1ec7u n\u0103m \u0111\u1ed1i v\u1edbi c\u1ea3 si\xeau m\xe1y t\xednh."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["V\u1edbi thu\u1eadt to\xe1n d\xf9ng 1 key cho c\u1ea3 vi\u1ec7c encrypt l\u1eabn decrypt th\xec s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,t.jsx)(n.strong,{children:"symmetric encryption"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"symmetric",src:i(4308).Z+"",width:"730",height:"409"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Thu\u1eadt to\xe1n d\xf9ng 1 c\u1eb7p key, trong \u0111\xf3 public key \u0111\u1ec3 m\xe3 ho\xe1, c\xf2n private key \u0111\u1ec3 gi\u1ea3i m\xe3, \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,t.jsx)(n.strong,{children:"asymmetric encryption"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"asymmetric",src:i(8282).Z+"",width:"730",height:"409"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://hackernoon.com/symmetric-and-asymmetric-encryption-5122f9ec65b1",children:"Image source"})}),"\n",(0,t.jsx)(n.p,{children:"Quay l\u1ea1i v\u1edbi AES, n\xf3 d\xf9ng symmetric, n\xean s\u1ebd d\xf9ng 1 key cho c\u1ea3 vi\u1ec7c m\xe3 ho\xe1 l\u1eabn gi\u1ea3i m\xe3. AES key c\xf3 \u0111\u1ed9 d\xe0i l\xe0 128, 192, ho\u1eb7c 256 bit. Tu\u1ef3 v\xe0o \u0111\u1ed9 d\xe0i key n\xf3 s\u1ebd c\xf3 t\xean kh\xe1c nhau AES-128, AES-192, AES-256. Key c\xe0ng d\xe0i th\xec vi\u1ec7c x\u1eed l\xfd c\xe0ng l\xe2u, nh\u01b0ng \u0111\u1ed5i l\u1ea1i c\xe0ng b\u1ea3o m\u1eadt h\u01a1n. M\u1eb7c \u0111\u1ecbnh Rails s\u1eed d\u1ee5ng key c\xf3 \u0111\u1ed9 d\xe0i 256 bit (32 bytes)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",metastring:"title=https://github.com/rails/rails/blob/e2585a21e389967322a98b46a7b3643d82bd9c28/activerecord/lib/active_record/encryption/cipher/aes256_gcm.rb#L16",children:'CIPHER_TYPE = "aes-256-gcm"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["V\u1ec1 vi\u1ec7c l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 AES m\xe3 ho\xe1/gi\u1ea3i m\xe3 th\xec m\xecnh s\u1ebd kh\xf4ng \u0111\u1ec1 c\u1eadp t\u1ea1i \u0111\xe2y ",(0,t.jsx)(n.del,{children:"v\xec m\xecnh c\u0169ng kh\xf4ng c\xf3 hi\u1ec3u m\u1ea5y =))"}),", n\u1ebfu ai mu\u1ed1n t\xecm hi\u1ec3u th\xeam c\xf3 th\u1ec3 xem link ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=lnKPoWZnNNM",children:"n\xe0y"}),", ho\u1eb7c g\xfac g\u1ed3 ~~. \u1ede d\u01b0\u1edbi l\xe0 b\u1ea3n preview, tr\xf4ng c\xe1i thu\u1eadt to\xe1n n\xf3 n\xf4m na nh\u01b0 sau"]}),"\n",(0,t.jsx)(n.p,{children:"AES s\u1ebd chia nh\u1ecf input th\xe0nh t\u1eebng block \u0111\u1ec3 x\u1eed l\xfd"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"block-cipher",src:i(8134).Z+"",width:"1152",height:"732"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"flow",src:i(8120).Z+"",width:"605",height:"423"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"round",src:i(9434).Z+"",width:"387",height:"308"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.tutorialspoint.com/cryptography/advanced_encryption_standard.htm",children:"Image Source"})}),"\n",(0,t.jsx)(n.p,{children:"C\u01a1 m\xe0 ch\u1ec9 quan t\xe2m l\xe0 m\u1ed9t chu\u1ed7i \u0111\u1ea7u v\xe0o + 1 key, \u0111i qua \u0111\u1ed1ng black magic r\u1ed3i tr\u1edf th\xe0nh 1 chu\u1ed7i b\u1ea3o m\u1eadt si\xeau h\u1ea1ng l\xe0 qu\xe1 \u0111\u1ee7 cho m\u1ed9t cu\u1ed9c t\xecnh r\u1ed3i."}),"\n",(0,t.jsxs)(n.p,{children:["\xc0 m\xe0 nh\xecn c\xe1i constant Rails define \u1edf tr\xean kia, l\u1ea1i c\xf3 th\xeam c\xe1i g\xec \u1edf cu\u1ed1i chu\u1ed7i th\u1ebf nh\u1ec9. ",(0,t.jsx)(n.code,{children:"gcm"}),"???? B\u1ed1i r\u1ed1i again."]}),"\n",(0,t.jsx)(n.h2,{id:"gcm",children:"GCM"}),"\n",(0,t.jsxs)(n.p,{children:["GCM l\xe0 vi\u1ebft t\u1eaft c\u1ee7a ",(0,t.jsx)(n.strong,{children:"G"}),"alois/",(0,t.jsx)(n.strong,{children:"C"}),"ounter ",(0,t.jsx)(n.strong,{children:"M"}),"ode... Nghe xong hi\u1ec3u ch\u1ebft li\u1ec1n .__. M\xf2 th\u1eed xem n\xe0o!"]}),"\n",(0,t.jsxs)(n.p,{children:["Nh\u01b0 t\xean g\u1ecdi c\u1ee7a n\xf3, GCM l\xe0 m\u1ed9t ",(0,t.jsx)(n.em,{children:"mode"})," trong symmetric encryption, k\u1ebft h\u1ee3p c\u1ee7a ",(0,t.jsx)(n.strong,{children:"Counter Mode"})," v\xe0 ",(0,t.jsx)(n.strong,{children:"Galois Mode"}),", d\xf9ng cho m\xe3 ho\xe1 d\u1ea1ng kh\u1ed1i (block). V\u1eady th\xec AES \u0111i v\u1edbi GCM l\xe0 chu\u1ea9n b\xe0i r\u1ed3i nh\u1ec9."]}),"\n",(0,t.jsxs)(n.p,{children:["Ngo\xe0i GCM ra c\xf2n c\xe1c mode kh\xe1c nh\u01b0 CCM, SIV, ...v\xe2n v\xe2n m\xe2y m\xe2y. C\xe1c b\u1ea1n c\xf3 th\u1ec3 xem th\xeam t\u1ea1i ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation",children:"\u0111\xe2y"})]}),"\n",(0,t.jsxs)(n.p,{children:["Tr\u01b0\u1edbc ti\xean ta h\xe3y b\u1eaft \u0111\u1ea7u t\u1eeb ",(0,t.jsx)(n.strong,{children:"mode"}),", t\u1eeb n\xe0y n\u1eb1m trong ",(0,t.jsx)(n.strong,{children:"Mode of Operation"}),". C\xe1c mode s\u1ebd \u0111\u01b0\u1ee3c apply tr\xean t\u1eebng block data (nh\u01b0 \u0111\xe3 n\xf3i \u1edf tr\xean th\xec AES chia data th\xe0nh c\xe1c block nh\u1ecf v\xe0 m\xe3 ho\xe1), gi\xfap cho output c\u1ee7a vi\u1ec7c m\xe3 ho\xe1 block b\u1ea3o m\u1eadt h\u01a1n."]}),"\n",(0,t.jsx)(n.p,{children:"Counter mode s\u1eed d\u1ee5ng 1 s\u1ed1 integer l\xe0m counter, qua t\u1eebng block counter s\u1ebd t\u0103ng l\xean 1. \u1ede m\u1ed7i block, s\u1ed1 n\xe0y s\u1ebd \u0111\u01b0\u1ee3c m\xe3 ho\xe1 c\xf9ng v\u1edbi data \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c output b\u1ea3o m\u1eadt h\u01a1n."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"counter-mode",src:i(3192).Z+"",width:"1219",height:"484"})}),"\n",(0,t.jsx)(n.p,{children:"Galois Mode l\xe0 m\u1ed9t authentication mode. Galois Mode gi\xfap \u0111\u1ea3m b\u1ea3o r\u1eb1ng cipher output c\u1ee7a ta kh\xf4ng b\u1ecb ch\u1ec9nh s\u1eeda b\u1edfi m\u1ed9t b\xean th\u1ee9 3. Ho\u1ea1t \u0111\u1ed9ng nh\u01b0 n\xe0o th\xec m\xecnh ch\u1ecbu \xe0 =))"}),"\n",(0,t.jsx)(n.p,{children:"K\u1ebft h\u1ee3p 2 mode tr\xean v\xe0 ta c\xf3 GCM, gi\xfap thu\u1eadt to\xe1n m\xe3 ho\xe1 c\u1ee7a ta b\u1ea3o m\u1eadt h\u01a1n, \u0111\u1ed3ng th\u1eddi \u0111\u1ea3m b\u1ea3o \u0111\u01b0\u1ee3c t\xednh to\xe0n v\u1eb9n c\u1ee7a d\u1eef li\u1ec7u."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"gcm-mode",src:i(1817).Z+"",width:"534",height:"563"})}),"\n",(0,t.jsx)(n.p,{children:"B\xean tr\xean l\xe0 gi\u1ea3i th\xedch s\u01a1 qua v\u1ec1 thu\u1eadt to\xe1n m\xe3 ho\xe1 m\xe0 Rails s\u1eed d\u1ee5ng, n\u1ebfu c\xf3 sai s\xf3t th\xec c\u0169ng \u0111\u1eebng g\u1ea1ch \u0111\xe1 t\u1ed9i m\xecnh =))"}),"\n",(0,t.jsx)(n.h2,{id:"aes-256-gcm-meets-rails",children:"AES-256-GCM meets Rails"}),"\n",(0,t.jsx)(n.h3,{id:"encryption-key",children:"Encryption Key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"active_record_encryption:\n  primary_key: EGY8WhulUOXixybod7ZWwMIL68R9o5kC\n  deterministic_key: aPA5XyALhf75NNnMzaspW7akTfZp0lPY\n  key_derivation_salt: xEY0dt6TZcAMg52K7O84wYzkjvbA62Hz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Quay tr\u1edf l\u1ea1i v\u1edbi \u0111\u1ed1ng key, h\xe3y c\xf9ng m\xf2 code \u0111\xe1y b\u1ec3 xem ch\xfang d\u1eabn ta t\u1edbi \u0111\xe2u ",":v"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activerecord/lib/active_record/railtie.rb#L313-L317\nActiveRecord::Encryption.configure \\\n  primary_key: app.credentials.dig(:active_record_encryption, :primary_key),\n  deterministic_key: app.credentials.dig(:active_record_encryption, :deterministic_key),\n  key_derivation_salt: app.credentials.dig(:active_record_encryption, :key_derivation_salt),\n  **config.active_record.encryption\n\n# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activerecord/lib/active_record/encryption/configurable.rb#L20-L33\ndef configure(primary_key:, deterministic_key:, key_derivation_salt:, **properties)\n  config.primary_key = primary_key\n  config.deterministic_key = deterministic_key\n  config.key_derivation_salt = key_derivation_salt\n\n  context.key_provider = ActiveRecord::Encryption::DerivedSecretKeyProvider.new(primary_key)\nend\n\n# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activerecord/lib/active_record/encryption/derived_secret_key_provider.rb#L7-L9\ndef initialize(passwords)\n  super(Array(passwords).collect { |password| Key.derive_from(password) })\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Xem ti\u1ebfp class ",(0,t.jsx)(n.code,{children:"Key"})," c\xf3 g\xec n\xe0o."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activerecord/lib/active_record/encryption/key.rb#L10-L26\nclass Key\n  def initialize(secret)\n    @secret = secret\n    @public_tags = Properties.new\n  end\n\n  def self.derive_from(password)\n    secret = ActiveRecord::Encryption.key_generator.derive_key_from(password)\n    ActiveRecord::Encryption::Key.new(secret)\n  end\nend\n\n# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activerecord/lib/active_record/encryption/key_generator.rb#L32-L34\ndef derive_key_from(password, length: key_length)\n  ActiveSupport::KeyGenerator.new(password).generate_key(ActiveRecord::Encryption.config.key_derivation_salt, length)\nend\n"})}),"\n",(0,t.jsx)(n.p,{children:"Nh\u01b0 v\u1eady, 2 trong s\u1ed1 3 thanh ni\xean c\u1ee7a ta \u0111\xe3 b\u1ecb l\u1ed9 m\u1eb7t:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"primary_key"})," \u0111\xf3ng vai tr\xf2 l\xe0 ",(0,t.jsx)(n.code,{children:"password"})," param c\u1ee7a ",(0,t.jsx)(n.code,{children:"ActiveSupport::KeyGenerator.new"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key_derivation_salt"})," \u0111\xf3ng vai tr\xf2 l\xe0 tham s\u1ed1 th\u1ee9 nh\u1ea5t c\u1ee7a ",(0,t.jsx)(n.code,{children:"ActiveSupport::KeyGenerator#generate_key"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["H\xe3y check ti\u1ebfp ",(0,t.jsx)(n.code,{children:"ActiveSupport::KeyGenerator"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"# https://github.com/rails/rails/blob/9c091b4fd378df515c4c31b85bb6a968463a1d82/activesupport/lib/active_support/key_generator.rb#L26-L41\ndef initialize(secret, options = {})\n  @secret = secret\n  @iterations = options[:iterations] || 2**16\n  @hash_digest_class = options[:hash_digest_class] || self.class.hash_digest_class\nend\n\ndef generate_key(salt, key_size = 64)\n  OpenSSL::PKCS5.pbkdf2_hmac(@secret, salt, @iterations, key_size, @hash_digest_class.new)\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Qua h\u1ebft wrapper c\u1ee7a Rails r\u1ed3i, gi\u1edd ta ph\u1ea3i m\xf2 v\xe0o docs c\u1ee7a Ruby th\xf4i.\nTheo ",(0,t.jsx)(n.a,{href:"https://ruby-doc.org/stdlib-3.0.1/libdoc/openssl/rdoc/OpenSSL.html#module-OpenSSL-label-Encryption",children:"docs"}),", docs l\u1ea1i b\u1ea3o h\xe0m n\xe0y gi\u1edd \u0111\u1ed5i t\xean th\xe0nh ",(0,t.jsx)(n.a,{href:"https://ruby-doc.org/stdlib-3.0.1/libdoc/openssl/rdoc/OpenSSL/KDF.html#method-c-pbkdf2_hmac",children:(0,t.jsx)(n.code,{children:"OpenSSL::KDF.pbkdf2_hmac"})})," m\u1ea5t r\u1ed3i... \u1edc th\xec l\u1ea1i m\xf2 v\xe0o xem. N\xf4m na h\xe0m n\xe0y s\u1ebd t\u1ea1o ra 1 cipher key d\xf9ng cho vi\u1ec7c m\xe3 ho\xe1."]}),"\n",(0,t.jsx)(n.p,{children:"T\u1ea1i \u0111\xe2y, ta c\xf3 th\u1ec3 k\u1ebft lu\u1eadn key m\xe3 ho\xe1 m\xe0 Rails d\xf9ng c\xf3:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"passphrase"}),": ",(0,t.jsx)(n.code,{children:"primary_key"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"salt"}),": ",(0,t.jsx)(n.code,{children:"key_derivation_salt"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iterations"}),": 2^16"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key_len"}),": \u0111\u1ed9 d\xe0i key 32 bytes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"digest"}),": hash algorithm SHA-1"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"H\xe3y c\xf9ng test qua c\xe1i key n\xe0y xem"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",metastring:"title=irb",children:"require 'openssl'\n\ncipher = OpenSSL::Cipher.new('aes-256-gcm')\ncipher.encrypt\niv = cipher.random_iv\n\npwd = 'EGY8WhulUOXixybod7ZWwMIL68R9o5kC'\nsalt = 'xEY0dt6TZcAMg52K7O84wYzkjvbA62Hz'\niter = 2**16\nkey_len = OpenSSL::Cipher.new(\"aes-256-gcm\").key_len\ndigest = OpenSSL::Digest.new('SHA1')\n\nkey = OpenSSL::PKCS5.pbkdf2_hmac(pwd, salt, iter, key_len, digest)\ncipher.key = key\n\nencrypted = cipher.update \"hello\"\nencrypted << cipher.final # => \"\\xB2#\\x10\\xE7n\"\n\ncipher.decrypt\ncipher.iv = iv\ndecrypted = cipher.update(encrypted) # => \"hello\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sau bao nhi\xeau v\u1ea5t v\u1ea3 th\xec c\u0169ng t\xecm \u0111\u01b0\u1ee3c c\xe1i key =)) V\u1eady qu\xe1 tr\xecnh m\xe3 ho\xe1 nh\u01b0 th\u1ebf n\xe0o? L\u1ea1i m\xf2 ti\u1ebfp .__."}),"\n",(0,t.jsx)(n.h3,{id:"encryption-process",children:"Encryption Process"}),"\n",(0,t.jsx)(n.p,{children:"H\xe3y c\xf9ng b\u1eaft \u0111\u1ea7u t\u1eeb vi\u1ec7c khai b\xe1o trong model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",metastring:"title=app/models/article.rb",children:"class Article < ApplicationRecord\n  encrypts :title\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["R\u1ed3i c\xf9ng t\xecm xem ",(0,t.jsx)(n.code,{children:"ApplicationRecord.encrypts"})," n\xf3 l\xe0m tr\xf2 g\xec n\xe0o"]}),"\n",(0,t.jsx)(n.h2,{id:"tham-kh\u1ea3o",children:"Tham kh\u1ea3o"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://edgeguides.rubyonrails.org/active_record_encryption.html",children:"https://edgeguides.rubyonrails.org/active_record_encryption.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.precisely.com/blog/data-security/aes-vs-rsa-encryption-differences",children:"https://www.precisely.com/blog/data-security/aes-vs-rsa-encryption-differences"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=lnKPoWZnNNM",children:"https://www.youtube.com/watch?v=lnKPoWZnNNM"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=g_eY7JXOc8U",children:"https://www.youtube.com/watch?v=g_eY7JXOc8U"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.includehelp.com/cryptography/mode-of-operation.aspx",children:"https://www.includehelp.com/cryptography/mode-of-operation.aspx"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8134:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/aes-block-cipher-ba94fcb32b74eafd7a18ddbb9374e1e2.png"},8120:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/aes-flow-3601bffc1d50d478fe633836df3bf026.jpeg"},9434:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/aes-round-06e45529741ace75731d96822323cb45.jpeg"},8282:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/asymmetric-encryption-76191effbf7bf88a765cf47ab256a20d.png"},3192:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ctr-mode-2014a29f09bb87b5f9d8ccefab9d6cb9.png"},1817:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/gcm-mode-e5c2e6aa4299003be322c78d1a8b0d93.png"},4308:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/symmetric-encryption-c4990731ab3014224c16d7235e908fbe.png"},7463:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(959);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);