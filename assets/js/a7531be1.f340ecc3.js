(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[7287],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=s,d=m["".concat(c,".").concat(h)]||m[h]||l[h]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3543:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=n(2122),s=n(9756),a=(n(7294),n(3905)),o=["components"],i={},c={unversionedId:"ruby/json-schema-request-testing",id:"ruby/json-schema-request-testing",isDocsHomePage:!1,title:"Json Schema in Rails testing",description:"Setup",source:"@site/docs/ruby/json-schema-request-testing.md",sourceDirName:"ruby",slug:"/ruby/json-schema-request-testing",permalink:"/docs/ruby/json-schema-request-testing",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/docs/docs/ruby/json-schema-request-testing.md",version:"current",lastUpdatedAt:1623146318,formattedLastUpdatedAt:"6/8/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumerator and Large Response Streaming",permalink:"/docs/ruby/enumerator-and-large-response-streaming"},next:{title:"Some problems with Rails + NGINX",permalink:"/docs/ruby/rails-nginx-proxy"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Links",id:"links",children:[]}],u={toc:p};function l(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gem: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/davishmcclurg/json_schemer"},"json_schemer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support latest (Draft 7) specification")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=spec/support/json_schemer.rb",title:"spec/support/json_schemer.rb"},'RSpec::Matchers.define :match_schema do |schema|\n  match do |data|\n    schema_path = Rails.root.join(\'spec\', \'schemas\', "#{schema}.json")\n    schemer = JSONSchemer.schema(schema_path)\n    errors = schemer.validate(data)\n    if errors.none?\n      true\n    else\n      humanized_errors = errors.map do |error|\n        "#{error["data_pointer"]} has value \u300c#{error["data"].nil? ? "nil" : error["data"]}\u300d, which is not match schema #{error["schema"].inspect}"\n      end\n      raise StandardError, humanized_errors.join("\\n")\n    end\n  end\nend\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=spec/support/request_spec_helpers.rb",title:"spec/support/request_spec_helpers.rb"},"module RequestSpecHelpers\n  def json_body\n    json = JSON.parse(response.body)\n    if json.is_a?(Array)\n      json.map { |e| ActiveSupport::HashWithIndifferentAccess.new(e) }\n    else\n      ActiveSupport::HashWithIndifferentAccess.new(json)\n    end\n  end\nend\n\nRSpec.configure do |config|\n  config.include RequestSpecHelpers, type: :request\nend\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=spec/requests/api/v1/posts_spec.rb",title:"spec/requests/api/v1/posts_spec.rb"},'RSpec.describe "Api::V1::Posts", type: :request do\n  describe "POST /api/v1/posts" do\n    it "responses with ok" do\n      get \'/api/v1/posts\'\n      expect(json_body).to match_schema("posts")\n    end\n  end\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=spec/schemas/posts.json",title:"spec/schemas/posts.json"},'{\n  "type": "array",\n  "items": {\n    "$ref": "post.json"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:"title=spec/schemas/post.json",title:"spec/schemas/post.json"},'{\n  "type": "object",\n  "properties": {\n    "id": {\n      "type": "integer"\n    },\n    "title": {\n      "type": "string"\n    }\n  },\n  "additionalProperties": false\n}\n')),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thoughtbot.com/blog/validating-json-schemas-with-an-rspec-matcher"},"https://thoughtbot.com/blog/validating-json-schemas-with-an-rspec-matcher")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/davishmcclurg/json_schemer"},"https://github.com/davishmcclurg/json_schemer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"https://json-schema.org/"))))}l.isMDXComponent=!0}}]);