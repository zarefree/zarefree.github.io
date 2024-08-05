(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{372:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[a._v("docker pull gitea/gitea:latest\n")])])]),s("h2",{attrs:{id:"创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[a._v("#")]),a._v(" 创建容器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" gitea/data\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" gitea\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建 Shell")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker run --name gitea --restart=always -e "')]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TZ")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Asia/Shanghai"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" -e "')]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_UID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" -e "')]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_GID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" -p 3000:3000 -p 222:22 -v '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('/data:/data -d gitea/gitea:latest"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" run.sh\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 Shell")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" run.sh\n")])])]),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[a._v("#")]),a._v(" See also")]),a._v(" "),s("RelatedPosts")],1)}),[],!1,null,null,null);s.default=r.exports}}]);