(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[2611],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1405:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"ruby/rails-nginx-proxy",id:"ruby/rails-nginx-proxy",isDocsHomePage:!1,title:"Some problems with Rails + NGINX",description:"Headers",source:"@site/docs/ruby/rails-nginx-proxy.md",sourceDirName:"ruby",slug:"/ruby/rails-nginx-proxy",permalink:"/docs/ruby/rails-nginx-proxy",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/docs/docs/ruby/rails-nginx-proxy.md",version:"current",lastUpdatedAt:1623146318,formattedLastUpdatedAt:"6/8/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Json Schema in Rails testing",permalink:"/docs/ruby/json-schema-request-testing"},next:{title:"Caching",permalink:"/docs/ops/browser-caching-proxy-caching"}},p=[{value:"Headers",id:"headers",children:[{value:"<code>X-Forwarded-Host</code> header",id:"x-forwarded-host-header",children:[]}]},{value:"Websocket",id:"websocket",children:[]},{value:"Use Rails template for errors",id:"use-rails-template-for-errors",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"headers"},"Headers"),(0,o.kt)("h3",{id:"x-forwarded-host-header"},(0,o.kt)("inlineCode",{parentName:"h3"},"X-Forwarded-Host")," header"),(0,o.kt)("p",null,"TL;DR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"proxy_set_header Host $http_host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto $scheme;\nproxy_set_header X-Forwarded-Host $http_host;\n")),(0,o.kt)("p",null,"When working with a Rails app with nginx + docker setup, but port 80 has been used by another project."),(0,o.kt)("p",null,"Instead of turning off those containers, I used another port for my new Rails app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"docker-compose.yml","docker-compose.yml":!0},"services:\n  web:\n    command: bundle exec rails s -b 0.0.0.0\n  proxy:\n    ports:\n      - 3000:80\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf",metastring:"title=/etc/nginx/conf.d/default.conf",title:"/etc/nginx/conf.d/default.conf"},"upstream web {\n  server web:3000 fail_timeout=0;\n}\n\nserver {\n  listen 80;\n  listen [::]:80;\n\n  location / {\n    proxy_pass http://web;\n  }\n}\n")),(0,o.kt)("p",null,"But when we I open the site, I faced this problem, because Rails 6 added ",(0,o.kt)("inlineCode",{parentName:"p"},"HostAuthorization")," to prevent DNS rebinding attacks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="open http://localhost:3000"',title:'"open','http://localhost:3000"':!0},'Blocked host: rails\nTo allow requests to rails, add the following to your environment configuration:\nconfig.hosts << "rails"\n')),(0,o.kt)("p",null,"After some search, the below config which seem popular."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"server {\n  location / {\n    proxy_set_header Host $http_host;\n    proxy_set_header X-Forwarded-Host $host;\n    proxy_set_header X-Forwarded-Port $server_port;\n  }\n}\n")),(0,o.kt)("p",null,"Then try to open the homepage again, and it works, ... until some POST requests are made (e.g. login in)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"ActionController::InvalidAuthenticityToken\n\n    def handle_unverified_request\n      raise ActionController::InvalidAuthenticityToken\n    end\n  end\nend\n")),(0,o.kt)("p",null,"Above error can be fixed by changing ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Host")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"$http_host")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"proxy_set_header X-Forwarded-Host $http_host;\n")),(0,o.kt)("p",null,"But why?\nFirst we must understand what ",(0,o.kt)("inlineCode",{parentName:"p"},"$http_host")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$host")," is."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#var_host"},(0,o.kt)("inlineCode",{parentName:"a"},"$host")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," header (without port), or the server name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#var_http_"},(0,o.kt)("inlineCode",{parentName:"a"},"$http_host")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," header")),(0,o.kt)("p",null,"\u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"$host")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$http_host")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000")),(0,o.kt)("p",null,"In Rails, before checking CSRF token, Rails will check whether the request's ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is equal to its ",(0,o.kt)("inlineCode",{parentName:"p"},"base_url"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is equal to request ",(0,o.kt)("inlineCode",{parentName:"p"},"Origin")," header, which is set by browser automatically, in our case it was ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=https://github.com/rails/rails",title:"https://github.com/rails/rails"},"# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L227\ndef verify_authenticity_token # :doc:\n  if !verified_request?\n    handle_unverified_request\n  end\nend\n\n# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L289\ndef verified_request? # :doc:\n  valid_request_origin?\nend\n\n# https://github.com/rails/rails/blob/75ac626c4e21129d8296d4206a1960563cc3d4aa/actionpack/lib/action_controller/metal/request_forgery_protection.rb#L455\ndef valid_request_origin? # :doc:\n  request.origin.nil? || request.origin == request.base_url\nend\n")),(0,o.kt)("p",null,"Rails is a Rack application. To see what ",(0,o.kt)("inlineCode",{parentName:"p"},"base_url")," is, we must see ",(0,o.kt)("inlineCode",{parentName:"p"},"rack")," source code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=https://github.com/rack/rack",title:"https://github.com/rack/rack"},'# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L496\ndef base_url\n  "#{scheme}://#{host_with_port}"\nend\n\n# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L279\ndef host_with_port(authority = self.authority)\n  host, _, port = split_authority(authority)\n\n  if port == DEFAULT_PORTS[self.scheme]\n    host\n  else\n    authority\n  end\nend\n\n# https://github.com/rack/rack/blob/d0c6efc666ede26768f33935f00530629690369a/lib/rack/request.rb#L221\ndef authority\n  forwarded_authority || # X-FORWARDED-HOST\n  host_authority || # HOST\n  server_authority # SERVER_NAME + SERVER_PORT\nend\n')),(0,o.kt)("p",null,"So, Rack prioritize ",(0,o.kt)("inlineCode",{parentName:"p"},"X-FORWARDED-HOST")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," header to evaluate the equation ",(0,o.kt)("inlineCode",{parentName:"p"},"request.origin == request.base_url")),(0,o.kt)("p",null,"\u2192 If we use ",(0,o.kt)("inlineCode",{parentName:"p"},"$host")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-FORWARDED-HOST"),", it would be ",(0,o.kt)("inlineCode",{parentName:"p"},'"localhost:3000" == "localhost"')),(0,o.kt)("p",null,"\u2192 Because of the invalid host, Rails raise ",(0,o.kt)("inlineCode",{parentName:"p"},"InvalidAuthenticityToken")," regardless of our token's validity"),(0,o.kt)("p",null,"\u2192 We need ",(0,o.kt)("inlineCode",{parentName:"p"},"$http_host")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-FORWARDED-HOST")),(0,o.kt)("h2",{id:"websocket"},"Websocket"),(0,o.kt)("p",null,"TL;DR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"map $http_upgrade $connection_upgrade {\n  default upgrade;\n  '' close;\n}\n\nserver {\n  location / {\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n  }\n}\n")),(0,o.kt)("p",null,"TODO: Explaination"),(0,o.kt)("h2",{id:"use-rails-template-for-errors"},"Use Rails template for errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"server {\n  proxy_intercept_errors;\n}\n")))}d.isMDXComponent=!0}}]);