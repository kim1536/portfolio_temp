(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var i,o,a=e(1),r=e.n(a),c=e(13),s=e.n(c),l=(e(24),e(3)),p=e(5),d=e(2),h=e(0);var x,b=Object(d.c)(i||(i=Object(l.a)(["\n\tfrom {\n\t\ttransform: scaleY(0)\n\t}\n\n\tto {\n\t\ttransform: scaleY(1)\n\t}\n"]))),f=d.b.div(o||(o=Object(l.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: #111;\n\ttransform-origin: bottom;\n\tz-index: 111111;\n\t.black_wall {\n\t\theight: 100%;\n\t\tbackground-color: #222;\n\t\ttransform-origin: top;\n\t\tanimation: "," 0.5s ease-in-out 0s 1 normal both;\n\t}\n\n\t.loader {\n\t\twidth: 100%;\n\t\theight: 3px;\n\t\tposition: absolute;\n\t\tborder-radius: 2px;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tleft: 0;\n\t\tmargin: auto;\n\t\tbackground-color: #ffc41f;\n\t}\n\n\t&.off {\n\t\tanimation: "," 0.5s ease-in-out 0s 1 reverse both;\n\t}\n"])),b,b),j=function(){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),e=n[0],i=n[1];return Object(a.useEffect)((function(){return setTimeout((function(){i(!0)}),300),function(){return i(!1)}}),[]),Object(h.jsxs)(f,{className:"preloader".concat(e?" off":""),children:[Object(h.jsx)("div",{className:"black_wall"}),Object(h.jsx)("div",{className:"loader"})]})};var m,u=d.b.header(x||(x=Object(l.a)(["\n\tposition: fixed;\n\tright: 20px;\n\ttop: 60px;\n\tbottom: 0;\n\tz-index: 100;\n\topacity: 0;\n\t&.on {\n\t\ttop: 0;\n\t\topacity: 1;\n\t\ttransition: all 0.85s;\n\t}\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: flex-end;\n\t\tflex-direction: column;\n\t\theight: 100%;\n\t\tli {\n\t\t\tposition: relative;\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin: 0 0 20px 0;\n\t\t\t}\n\t\t\t&.active {\n\t\t\t\ta {\n\t\t\t\t\tbackground-color: ",";\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ta {\n\t\t\t\t\tpadding: 13px 14px 13px 25px;\n\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\tspan {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\tpadding-right: 10px;\n\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\ta {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tpadding: 13px 14px;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tbackground: #000030;\n\t\t\t\ttransition: all 0.2s;\n\t\t\t\tspan {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tletter-spacing: 0.5px;\n\t\t\t\t\tline-height: 1.2;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tvertical-align: text-top;\n\t\t\t\t\ttransition: opacity 0.3s ease, padding 0.3s ease;\n\t\t\t\t\tcolor: transparent;\n\t\t\t\t}\n\t\t\t\ti {\n\t\t\t\t\twidth: 25px;\n\t\t\t\t\theight: 25px;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tline-height: 25px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor})),g=function(){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),e=n[0],i=n[1],o=Object(a.useState)(!0),r=Object(p.a)(o,2),c=r[0],s=r[1],l=Object(a.useState)(!1),d=Object(p.a)(l,2),x=d[0],b=d[1],f=Object(a.useState)(!1),j=Object(p.a)(f,2),m=j[0],g=j[1],O=Object(a.useState)(0),w=Object(p.a)(O,2),v=w[0],y=w[1];return Object(a.useEffect)((function(){return setTimeout((function(){i(!0)}),700),function(){return i(!1)}}),[]),Object(a.useEffect)((function(){var t=function(){y(window.pageYOffset)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),Object(a.useEffect)((function(){var t=document.getElementById("about"),n=document.getElementById("projects"),e=t.offsetTop,i=n.offsetTop;s(v<=e/2),b(v>=.5*e),v>=.9*i?(g(!0),b(!1)):g(!1)}),[v]),Object(h.jsx)(u,{className:"".concat(e?"on":""),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:c?"active":"",children:Object(h.jsxs)("a",{href:"#home",children:[Object(h.jsx)("span",{children:"Home"}),Object(h.jsx)("i",{className:"fas fa-home"})]})}),Object(h.jsx)("li",{className:x?"active":"",children:Object(h.jsxs)("a",{href:"#about",children:[Object(h.jsx)("span",{children:"About"}),Object(h.jsx)("i",{className:"fas fa-user"})]})}),Object(h.jsx)("li",{className:m?"active":"",children:Object(h.jsxs)("a",{href:"#projects",children:[Object(h.jsx)("span",{children:"Projects"}),Object(h.jsx)("i",{className:"fas fa-tasks"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://github.com/kim1536",target:"_blank",children:[Object(h.jsx)("span",{children:"Github"}),Object(h.jsx)("i",{className:"fab fa-github"})]})})]})})},O=e(4),w=function(t){if("1"===t.level)return Object(h.jsx)("h1",Object(O.a)(Object(O.a)({},t),{},{children:t.children}));switch(t.level){case"1":default:return Object(h.jsx)("h1",Object(O.a)(Object(O.a)({},t),{},{children:t.children}));case"2":return Object(h.jsx)("h2",Object(O.a)(Object(O.a)({},t),{},{children:t.children}));case"3":return Object(h.jsx)("h3",Object(O.a)(Object(O.a)({},t),{},{children:t.children}));case"4":return Object(h.jsx)("h4",Object(O.a)(Object(O.a)({},t),{},{children:t.children}))}};var v,y=d.b.div(m||(m=Object(l.a)(["\n\tposition: relative;\n\tpadding: 80px 0px 80px 0px;\n\ttext-align: center;\n\th1 {\n\t\tfont-size: 56px;\n\t\tfont-weight: 900;\n\t\ttext-transform: uppercase;\n\t\tmargin: 10px auto;\n\t}\n\t.title-bg {\n\t\tfont-size: 110px;\n\t\tleft: 0;\n\t\tletter-spacing: 10px;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 50%;\n\t\ttext-transform: uppercase;\n\t\tfont-weight: 800;\n\t\ttransform: translateY(-53%);\n\t\topacity: 0.07;\n\t}\n\t@media "," {\n\t\tpadding: 60px 0px 60px 0px;\n\t}\n\t@media "," {\n\t\tpadding: 30px 0px 30px 0px;\n\t\th1 {\n\t\t\tfont-size: 46px;\n\t\t\tletter-spacing: 3px;\n\t\t}\n\t\t.title-bg {\n\t\t\tfont-size: 80px;\n\t\t\tletter-spacing: 20px;\n\t\t}\n\t}\n"])),(function(t){return t.theme.tablet}),(function(t){return t.theme.mobile})),k=function(t){var n=t.children;return Object(h.jsxs)(y,{children:[Object(h.jsx)(w,{children:n}),Object(h.jsx)("span",{className:"title-bg",children:t.titleBg})]})},N={skillList:[{label:"HTML/CSS",detail:["\uc6d0\ud558\ub294 UI\ub97c \uc2e4\uc6a9\uc801\uc774\uace0, \uc775\uc219\ud558\uac8c \ub9cc\ub4e4\uc5b4 \ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.","Css \ucd5c\uc2e0 \ubb38\ubc95\uc774 \uc219\uc9c0\ub418\uc5b4 \uc788\uace0 Css \ud504\ub9ac\ud504\ub85c\uc138\uc11c Sass\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-html5"},{label:"jQuery",detail:["\ub2e4\uc591\ud55c \uc18d\uc131\uacfc \uba54\uc18c\ub4dc\ub97c \ub2a5\uc219\ud558\uac8c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.","Ajax\uc744 \ud65c\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 \ud1b5\uc2e0\uc73c\ub85c \ub370\uc774\ud130 \uc694\uccad\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-node-js"},{label:"Javascript/Typescript",detail:["ES6\uc640 \uc774\ud6c4\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubb38\ubc95\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ud0c0\uc785\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ud558\uace0 \uc788\uace0, \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."],icon:"fab fa-js-square"},{label:"React",detail:["\ucef4\ud3ec\ub10c\ud2b8 \uc0dd\uba85\uc8fc\uae30\uc640 \uc18d\uc131\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","recoil\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-react"},{label:"Node.js",detail:["Node.js\uac00 \uc791\ub3d9\ud558\ub294 \ubc95\uc5d0 \ub300\ud574 \uc774\ud574\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","express \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud558\uc5ec Restful API \uc11c\ubc84\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-node"},{label:"Git/Github",detail:["git flow\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uace0 \uc788\uc73c\uba70 \uc65c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0 \uc774\ud574\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\uae43\uacfc \uae43\ud5d9\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\ub978 \uac1c\ubc1c\uc790\ub4e4\uacfc \ud611\uc5c5\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-git-square"}],educationList:[{period:"2020.11 - 2021.06",position:"JAVA WEB Programming \uacfc\uc815",company:"\ucf54\uc138\uc544\uc778\uc7ac\uac1c\ubc1c\uc6d0",explain:"Java, Jsp&Servlet, Spring, iBatis, oracle SQL\ub4f1\uc744 \ubc30\uc6e0\uc73c\uba70 MVC\ud328\ud134\uc73c\ub85c WEB \uac1c\ubc1c \ubc0f \uae30\uc220\uc744 \uc2b5\ub4dd\ud558\uc600\uc2b5\ub2c8\ub2e4."}],certificateList:[{period:"2017.07",position:"\ud55c\uad6d\uc5b4\ub2a5\ub825\uc2dc\ud5d8 TOPIK II (\uace0\uae09)",company:"\uad50\uc721\ubd80 \uad6d\ub9bd\uad6d\uc81c\uad50\uc721\uc6d0"},{period:"2021.06",position:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac",company:"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8"}]};var z,S=d.b.div(v||(v=Object(l.a)(['\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t> div {\n\t\twidth: 50%;\n\t\t> ul {\n\t\t\t> li {\n\t\t\t\tposition: relative;\n\t\t\t\tpadding: 0 20px 0 60px;\n\t\t\t\tmargin: 0 0 50px;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: "";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 20px;\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\tborder-left: 1px solid #333;\n\t\t\t\t}\n\t\t\t\t.icon {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\twidth: 40px;\n\t\t\t\t\theight: 40px;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tline-height: 40px;\n\t\t\t\t\tbackground-color: ',';\n\t\t\t\t}\n\t\t\t\t.time {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tpadding: 1px 10px;\n\t\t\t\t\tmargin-bottom: 12px;\n\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t\tbackground-color: #252525;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tletter-spacing: 0.6px;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t\t> h4 {\n\t\t\t\t\tmargin: 7px 0 10px;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tpadding-left: 26px;\n\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\t\topacity: 0.6;\n\t\t\t\t\t\t&::before {\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\tcontent: "";\n\t\t\t\t\t\t\twidth: 10px;\n\t\t\t\t\t\t\theight: 2px;\n\t\t\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\t\t\tleft: 7px;\n\t\t\t\t\t\t\ttop: 9px;\n\t\t\t\t\t\t\topacity: 0.8;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t> p {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media '," {\n\t\twidth: 85%;\n\t\tmargin: auto;\n\t\t> div {\n\t\t}\n\t}\n\t@media "," {\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\n\t\t> div {\n\t\t\twidth: 100%;\n\t\t\t> ul {\n\t\t\t\t> li {\n\t\t\t\t\tpadding: 0 50px 0 50px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),(function(t){return t.theme.laptop}),(function(t){return t.theme.mobile})),L=function(){var t=N.educationList.map((function(t,n){return Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-graduation-cap"})}),Object(h.jsx)("span",{className:"time",children:t.period}),Object(h.jsxs)(w,{level:"4",children:[t.position,Object(h.jsx)("span",{className:"place",children:t.company})]}),Object(h.jsx)("p",{children:t.explain})]},n)})),n=N.certificateList.map((function(t,n){return Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("i",{className:"fa fa-id-card-o"})}),Object(h.jsx)("span",{className:"time",children:t.period}),Object(h.jsxs)(w,{level:"4",children:[t.position,Object(h.jsx)("span",{className:"place",children:t.company})]})]},n)}));return Object(h.jsxs)(S,{children:[Object(h.jsx)("div",{className:"education",children:Object(h.jsx)("ul",{children:t})}),Object(h.jsx)("div",{className:"certificate",children:Object(h.jsx)("ul",{children:n})})]})},C={historyList:[{period:"1999.04 - 2005.03",school:"\u7532\u5e9c\u5e02\u7acb\u5927\u56fd\u5c0f\u5b66\u6821",schoolKR:"\uc77c\ubcf8 \ucf54\ud6c4\uc2dc\ub9bd\uc624\uc624\ucfe0\ub2c8\ucd08\ub4f1\ud559\uad50"},{period:"2005.04 - 2008.03",school:"\u7532\u5e9c\u5e02\u7acb\u4e0a\u6761\u4e2d\u5b66\u6821",schoolKR:"\uc77c\ubcf8 \ucf54\ud6c4\uc2dc\ub9bd\uac00\ubbf8\uc8e0\uc6b0\uc911\ub4f1\ud559\uad50"},{period:"2008.04 - 2011.03",school:"\u5c71\u68a8\u770c\u7acb\u7532\u5e9c\u5de5\u696d\u9ad8\u7b49\u5b66\u6821",department:"\u96fb\u5b50\u79d1",schoolKR:"\uc77c\ubcf8 \uc57c\ub9c8\ub098\uc2dc\ud604\ub9bd\ucf54\ud6c4\uacf5\uc5c5\uace0\ub4f1\ud559\uad50",departmentKR:"\uc804\uc790\uacfc"},{period:"2011.02 - 2018.03",school:"\ud55c\uad6d\uc678\uad6d\uc5b4\ub300\ud559\uad50 \uc11c\uc6b8\ucea0\ud37c\uc2a4",department:"\uc77c\ubcf8\uc9c0\uc5ed\ud559"},{period:"2013.04 - 2015.01",school:"\uc721\uad70",department:"\ub9cc\uae30\uc81c\ub300"}]};var E,A=d.b.div(z||(z=Object(l.a)(['\n\tdisplay: flex;\n    justify-content: center;\n\t> ul {\n\t\t> li {\n\t\t\tposition: relative;\n\t\t\tpadding: 0 20px 0 60px;\n\t\t\tmargin: 0 0 50px;\n\t\t\t&::after {\n\t\t\t\tcontent: "";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 20px;\n\t\t\t\tbottom: 0;\n\t\t\t\tborder-left: 1px solid #333;\n\t\t\t}\n\t\t\t.icon {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tz-index: 1;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 40px;\n\t\t\t\tbackground-color: ',';\n\t\t\t}\n\t\t\t.time {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tpadding: 1px 10px;\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbackground-color: #252525;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tletter-spacing: 0.6px;\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t\t> h4 {\n\t\t\t\tmargin: 7px 0 10px;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\topacity: 0.8;\n\t\t\t\tspan {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tpadding-left: 26px;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\topacity: 0.6;\n\t\t\t\t\t&::before {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tcontent: "";\n\t\t\t\t\t\twidth: 10px;\n\t\t\t\t\t\theight: 2px;\n\t\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\t\tleft: 7px;\n\t\t\t\t\t\ttop: 9px;\n\t\t\t\t\t\topacity: 0.8;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t> p {\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t}\n\t}\n\t\n\n\t@media '," {\n\t\twidth: 85%;\n\t\tmargin: auto;\n\t\t> div {\n\t\t}\n\t}\n\t@media "," {\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\n\t\t> div {\n\t\t\twidth: 100%;\n\t\t\t> ul {\n\t\t\t\t> li {\n\t\t\t\t\tpadding: 0 50px 0 50px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),(function(t){return t.theme.laptop}),(function(t){return t.theme.mobile})),R=function(){var t=C.historyList.map((function(t,n){return Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{className:"icon",children:C.historyList.length-1===n?Object(h.jsx)("i",{className:"fa fa-user-secret"}):Object(h.jsx)("i",{className:"fas fa-graduation-cap"})}),Object(h.jsx)("span",{className:"time",children:t.period}),Object(h.jsxs)(w,{level:"4",children:[t.school,void 0===t.department?"":Object(h.jsx)("span",{className:"place",children:t.department})]}),void 0===t.schoolKR?"":Object(h.jsxs)(w,{level:"4",children:[t.schoolKR,void 0===t.departmentKR?"":Object(h.jsx)("span",{className:"place",children:t.departmentKR})]})]},n)}));return Object(h.jsx)(A,{children:Object(h.jsx)("ul",{children:t})})};var I,W=d.b.div(E||(E=Object(l.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t.skill-list {\n\t\twidth: calc(33% - 30px);\n\t\tmargin: 0 15px 30px;\n\t\tpadding: 20px 30px 20px 30px;\n\t\tborder: 1px solid #252525;\n\t\tborder-radius: 5px;\n\t\tcursor: default;\n\t\t.skill-label {\n\t\t\tmargin-bottom: 10px;\n\t\t\ti {\n\t\t\t\tcolor: ",';\n\t\t\t\tpadding-right: 10px;\n\t\t\t\tfont-size: 50px;\n\t\t\t\tvertical-align: text-top;\n\t\t\t}\n\t\t}\n\t\t.skill-detail {\n\t\t\tli {\n\t\t\t\tposition: relative;\n\t\t\t\tpadding: 0 0 10px 30px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 1.5;\n\t\t\t\tcolor: rgb(255 255 255 / 80%);\n\t\t\t\t&::before {\n\t\t\t\t\tcontent: "";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: 13px;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 1px;\n\t\t\t\t\tbackground: ',";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t@media "," {\n\t\twidth: 85%;\n\t\tmargin: auto;\n\t\t.skill-list {\n\t\t\twidth: calc(50% - 30px);\n\t\t}\n\t}\n\t@media ",' {\n\t\twidth: 90%;\n\t\t.skill-list {\n\t\t\twidth: calc(100% - 30px);\n\t\t}\n\t}\n\t.skill-list {\n\t\tposition: relative;\n\t\t&::before,\n\t\t&::after {\n\t\t\tcontent: "";\n\t\t\tbox-sizing: inherit;\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tborder: 1px solid transparent;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t\t&::before {\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t}\n\t\t&::after {\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t}\n\t\t&:hover {\n\t\t\t&::before,\n\t\t\t&::after {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\t&::before {\n\t\t\t\tborder-top-color: ',";\n\t\t\t\tborder-right-color: ",";\n\t\t\t\ttransition: width 0.15s ease-out, height 0.15s ease-out 0.15s;\n\t\t\t}\n\t\t\t&::after {\n\t\t\t\tborder-bottom-color: ",";\n\t\t\t\tborder-left-color: ",";\n\t\t\t\ttransition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.laptop}),(function(t){return t.theme.mobile}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor})),T=function(){var t=N.skillList.map((function(t,n){return Object(h.jsxs)("div",{className:"skill-list",children:[Object(h.jsxs)(w,{level:"3",className:"skill-label",children:[Object(h.jsx)("i",{className:t.icon}),": ",t.label]}),Object(h.jsx)("ul",{className:"skill-detail",children:t.detail.map((function(t,n){return Object(h.jsx)("li",{children:t},n)}))})]},n)}));return Object(h.jsx)(W,{children:t})};var B,M,J,K,P,F,H,Y,D,G=d.b.main(I||(I=Object(l.a)(['\n\tsection {\n\t\tmax-width: 1140px;\n\t\tmargin: auto;\n\t\tpadding-bottom: 80px;\n\t\t&:not(:last-child) {\n\t\t\tposition: relative;\n\t\t\tmargin-bottom: 60px;\n\t\t\t&::after {\n\t\t\t\tcontent: "";\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tmargin: auto;\n\t\t\t\twidth: 500px;\n\t\t\t\theight: 1px;\n\t\t\t\tbackground-color: #252525;\n\t\t\t}\n\t\t}\n\t\t> h2 {\n\t\t\tmargin-bottom: 40px;\n\t\t\tfont-size: 26px;\n\t\t\tfont-weight: 600;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\t@media '," {\n\t\tsection {\n\t\t\tpadding-bottom: 40px;\n\t\t\t&:not(:last-child) {\n\t\t\t\t&::after {\n\t\t\t\t\twidth: 70%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mobile})),Q=function(){return Object(h.jsxs)(G,{id:"about",children:[Object(h.jsxs)(k,{titleBg:"Skills",children:["About ",Object(h.jsx)("span",{className:"point",children:"Me"})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)(w,{level:"2",children:"MY SKILLS"}),Object(h.jsx)(T,{})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)(w,{level:"2",children:"EDUCATION & CERTIFICATE"}),Object(h.jsx)(L,{})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)(w,{level:"2",children:"History"}),Object(h.jsx)(R,{})]})]})},U=e(19),V=e(17),_=e(18),q={portfolioList:[{name:"\uc77c\ubcf8 \ubd81\uc591\uc740\ud589 \ub370\uc774\ud130 \ub9c8\uc774\uadf8\ub808\uc774\uc158",period:"2021.10 - 2021.11",link:"",description:".\uc77c\ubcf8 \ubd81\uc591\uc740\ud589 \ub2f4\ub2f9\uc790\uc640 \ud68c\uc758\ub97c \ud1b5\ud574 \uace0\uac1d\uc73c\ub85c\ubd80\ud130 \ubc1b\uc740 csv\ud30c\uc77c\uc744 \uac00\uc9c0\uace0  \ub370\uc774\ud130 \ub9c8\uc774\uadf8\ub808\uc774\uc158",tech:["JAVA","Docker","MySQL","GitHub"]},{name:"\ubaa8\uba58\ud1a0 (\ub370\ubaa8)",logo:"momentor",period:"2022.01 - 2022.10",link:"https://mockup.momentorapps.com/company/dashboard/employment",description:"\uc7a5\uc560\uc778\uacfc \uae30\uc5c5\uc758 \uad6c\uc9c1 \ucc44\uc6a9 \uc5f0\uacc4 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. 1. storybook\uc774\uc6a9\ud558\uc5ec  UI \ucef4\ud3ec\ub10c\ud2b8 \uad6c\ud604. 2. Recoil\uacfc React Query\ub97c \ud1b5\ud55c \uc0c1\ud0dc\uad00\ub9ac \uad6c\ucd95. 3. Atomic\ub514\uc790\uc778 \ud328\ud134\uc73c\ub85c \uc544\ud0a4\ud14d\ucc98 \uad6c\ucd95. 4. Route53, CloudFront, S3 \uc124\uc815 \ud6c4 gitlab CI/CD\ub97c \uad6c\ucd95\ud558\uc5ec AWS\uc5d0 \ubc30\ud3ec.",tech:["AWS","Node.js","React","Recoil","NestJS","TypeScript","REST API","GitLab"]},{name:"\ud68c\uc0ac(\uac00\uce58\uc640 \uc5ec\uc720) \ud648\ud398\uc774\uc9c0",logo:"company",period:"2022.05 - 2022.05",link:"https://www.gcnyy.com/",description:"\ud68c\uc0ac \ud648\ud398\uc774\uc9c0 \uc81c\uc791",tech:["HTML5","Sass","jQuery","AWS"]},{name:"Locale \ub3c4\uc785",period:"2022.10 - 2022.10",link:"",description:"\uae30\uc874 \uc194\ub8e8\uc158\uc758 \uc5b8\uc5b4\ud329 \ucd94\uac00",tech:["AngularJS","Spring Boot","Java","SVN"]},{name:"AML \ubd88\ubc95\uc790\uae08\uc138\ud0c1\ubc29\uc9c0 \uc194\ub8e8\uc158",period:"2022.10 - 2023.4",link:"",description:"1. \uc5c5\ubb34\ucc98\ub9ac\uac74\uc218 \ub530\ub978 \uc77c, \uc6d4, \ub144\ub2e8\uc704\ub85c \ub9c9\ub300\uadf8\ub798\ud504\ub85c \ud655\uc778 \uac00\ub2a5\ud558\ub3c4\ub85d \uad6c\ud604. 2. \uac70\ub798\uc548\uc815\ub3c4\uc758\uc0c1\ud0dc \ubcc4 \uac74\uc218\ub97c \uc6d0\uadf8\ub798\ud504\ub85c \ud655\uc778 \uac00\ub2a5\ud558\ub3c4\ub85d \uad6c\ud604. 3. \ubcf4\uace0\uc11c \uc791\uc131 \ud3ec\ub9f7 \uc0dd\uc131 \ubc0f PDF\ub85c \uc800\uc7a5 \ub418\ub3c4\ub85d \uad6c\ud604. 4. \uc0ac\uc6a9\uc790 \ubaa9\ub85d, \ucd94\uac00, \uc0ac\uc6a9\uc790 \uc0c1\uc138\uc815\ubcf4 \ud655\uc778, \uc218\uc815, \uc0ad\uc81c \uae30\ub2a5 \uad6c\ud604.",tech:["AngularJS","Spring Boot","Java","Oracle","MySQL","GitHub"]}]};var X=Object(d.c)(B||(B=Object(l.a)(["\n\tfrom {\n\t\ttop:-100%;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop: 0;\n\t\tleft:0;\n\t}\n"]))),Z=Object(d.c)(M||(M=Object(l.a)(["\n\tfrom {\n\t\ttop: 0;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop: -100%;\n\t\tleft:0;\n\t}\n"]))),$=Object(d.c)(J||(J=Object(l.a)(["\n\tfrom {\n\t\ttop:0;\n\t\tleft:100%;\n\t}\n\tto {\n\t\ttop:0;\n\t\tleft:0;\n\t}\n"]))),tt=Object(d.c)(K||(K=Object(l.a)(["\n\tfrom {\n\t\ttop:0;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop:0;\n\t\tleft:100%;\n\t}\n"]))),nt=Object(d.c)(P||(P=Object(l.a)(["\n\tfrom {\n\t\ttop: 100%;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop: 0;\n\t\tleft:0;\n\t}\n"]))),et=Object(d.c)(F||(F=Object(l.a)(["\n\tfrom {\n\t\ttop:0;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop:100%;\n\t\tleft:0;\n\t}\n"]))),it=Object(d.c)(H||(H=Object(l.a)(["\n\tfrom {\n\t\ttop: 0;\n\t\tleft:-100%;\n\t}\n\tto {\n\t\ttop: 0;\n\t\tleft:0;\n\t}\n"]))),ot=Object(d.c)(Y||(Y=Object(l.a)(["\n\tfrom {\n\t\ttop:0;\n\t\tleft:0;\n\t}\n\tto {\n\t\ttop:0;\n\t\tleft:-100%;\n\t}\n"]))),at=d.b.div(D||(D=Object(l.a)(["\n\twidth: 85%;\n\tmax-width: 1140px;\n\tmargin: auto;\n\tpadding-bottom: 80px;\n\t> ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tcolumn-gap: 2%;\n\t\t> li {\n\t\t\twidth: 32%;\n\t\t\tmin-height: 320px;\n\t\t\tmargin-bottom: 2%;\n\t\t\tposition: relative;\n\t\t\tbackground-color: #191919;\n\t\t\tborder-radius: 2px;\n\t\t\toverflow: hidden;\n\t\t\tspan {\n\t\t\t\twidth: 100%;\n\t\t\t\t> div {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding: 20px;\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t.toy {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 20px;\n\t\t\t\t\t\tright: 20px;\n\t\t\t\t\t\tfont-size: 30px;\n\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\twidth: 45px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t.info-wrap {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tz-index: 1;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t.txt-wrap {\n\t\t\t\t\t\t\t.name {\n\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\tfont-size: 22px;\n\t\t\t\t\t\t\t\tline-height: 1.3;\n\t\t\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.time {\n\t\t\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tp {\n\t\t\t\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.tech {\n\t\t\t\t\t\t\tul {\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\tmargin-left: -2px;\n\t\t\t\t\t\t\t\tpadding-top: 3px;\n\t\t\t\t\t\t\t\tli {\n\t\t\t\t\t\t\t\t\tpadding: 4px;\n\t\t\t\t\t\t\t\t\tmargin: 0 2px 5px;\n\t\t\t\t\t\t\t\t\tborder: 1px solid #fff;\n\t\t\t\t\t\t\t\t\tborder-radius: 2px;\n\t\t\t\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tspan.label {\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\tpadding-bottom: 3px;\n\t\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.logoWrap {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tbackground-color: rgba(255, 180, 0, 0.92);\n\t\t\t\t\t.logo {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tborder-radius: 1px;\n\t\t\t\t\t\t\tpadding: 3px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&.in-top .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\t\t\t&.out-top .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\n\t\t\t&.in-right .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\t\t\t&.out-right .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\n\t\t\t&.in-bottom .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\t\t\t&.out-bottom .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\n\t\t\t&.in-left .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\t\t\t&.out-left .logoWrap {\n\t\t\t\tanimation: "," 300ms ease 0ms 1 forwards;\n\t\t\t}\n\t\t}\n\t}\n\t@media "," {\n\t\t> ul {\n\t\t\t.port-list {\n\t\t\t\twidth: 49%;\n\t\t\t\tmin-height: 260px;\n\t\t\t}\n\t\t}\n\t}\n\t@media "," {\n\t\twidth: 80%;\n\t\tpadding-bottom: 60px;\n\t\t> ul {\n\t\t\t.port-list {\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-height: 220px;\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\t.tech {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),X,Z,$,tt,nt,et,it,ot,(function(t){return t.theme.laptop}),(function(t){return t.theme.mobile})),rt=function(){Object(a.useEffect)((function(){var t=[].slice.call(document.querySelectorAll(".port-list"),0),n={0:"top",1:"right",2:"bottom",3:"left"},e=["in","out"].map((function(t){return Object.values(n).map((function(n){return"".concat(t,"-").concat(n)}))})).reduce((function(t,n){return t.concat(n)})),i=function(){function t(n){var e=this;Object(V.a)(this,t),this.element=n,this.element.addEventListener("mouseover",(function(t){return e.update(t,"in")})),this.element.addEventListener("mouseout",(function(t){return e.update(t,"out")}))}return Object(_.a)(t,[{key:"update",value:function(t,i){var o;(o=this.element.classList).remove.apply(o,Object(U.a)(e)),this.element.classList.add("".concat(i,"-").concat(n[function(t,n){var e=n.getBoundingClientRect(),i=e.width,o=e.height,a=e.top,r=e.left,c=t.pageX-(r+window.pageXOffset)-i/2*(i>o?o/i:1),s=t.pageY-(a+window.pageYOffset)-o/2*(o>i?i/o:1);return Math.round(Math.atan2(s,c)/1.57079633+5)%4}(t,this.element)]))}}]),t}();t.forEach((function(t){return new i(t)}))}),[]);var t=q.portfolioList.map((function(t,n){return Object(h.jsx)("li",{className:"port-list",children:Object(h.jsxs)("span",{onClick:function(t){return function(t,n){""!==q.portfolioList[n].link&&window.open(q.portfolioList[n].link,"_blank")}(0,n)},children:[Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"info-wrap",children:[Object(h.jsxs)("div",{className:"txt-wrap",children:[Object(h.jsx)("div",{className:"name",children:t.name}),Object(h.jsx)("span",{className:"time",children:t.period}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"label",children:"Description"}),t.description]})]}),Object(h.jsxs)("div",{className:"tech",children:[Object(h.jsx)("span",{className:"label",children:"Tech Stack"}),Object(h.jsx)("ul",{children:t.tech.map((function(t,n){return Object(h.jsx)("li",{children:t},n)}))})]})]})}),Object(h.jsx)("div",{className:"logoWrap",children:Object(h.jsx)("div",{className:"logo",children:void 0===t.logo?Object(h.jsx)("p",{children:"\uc774\ub3d9\ud560 URL\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(h.jsx)("img",{src:"./images/logo/".concat(t.logo,".png"),alt:""})})})]})},n)}));return Object(h.jsx)(at,{className:"container",children:Object(h.jsx)("ul",{children:t})})};var ct,st,lt,pt=function(){return Object(h.jsxs)("main",{id:"projects",children:[Object(h.jsx)(k,{titleBg:"Works",children:Object(h.jsx)("span",{className:"point",children:"Projects"})}),Object(h.jsx)("section",{children:Object(h.jsx)(rt,{})})]})};var dt,ht=Object(d.c)(ct||(ct=Object(l.a)(["\n\t0% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n\t12% {\n\t\twidth: 0;\n\t}\n\t30% {\n\t\twidth: 100%;\n\t}\n\t36% {\n\t\twidth: 100%;\n\t}\n\t50% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n\t60% {\n\t\ttop: -4.5rem;\n\t}\n\t61% {\n\t\twidth: 0;\n\t}\n\t75% {\n\t\twidth: 100%;\n\t}\n\t99% {\n\t\ttop: -4.5rem;\n\t\twidth: 0;\n\t}\n\t100% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n"]))),xt=Object(d.c)(st||(st=Object(l.a)(["\n\t0% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n\t12% {\n\t\twidth: 0;\n\t}\n\t24% {\n\t\twidth: 100%;\n\t}\n\t36% {\n\t\twidth: 100%;\n\t}\n\t50% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n\t65% {\n\t\ttop: -3.5rem;\n\t}\n\t66% {\n\t\twidth: 0;\n\t}\n\t75% {\n\t\twidth: 100%;\n\t}\n\t99% {\n\t\ttop: -3.5rem;\n\t\twidth: 0;\n\t}\n\t100% {\n\t\ttop: 0;\n\t\twidth: 0;\n\t}\n"]))),bt=d.b.main(lt||(lt=Object(l.a)(["\n\tdisplay: flex;\n\tmax-width: 1600px;\n\tmargin: auto;\n\t.left {\n\t\tflex: 0 0 25%;\n\t\tmax-width: 600px;\n\t\tbackground-color: #000030;\n\t\t.color-block {\n\t\t\tposition: absolute;\n\t\t\ttop: -55%;\n\t\t\tleft: -30vw;\n\t\t\tz-index: 0;\n\t\t\twidth: 50vw;\n\t\t\theight: 160%;\n\t\t\ttransform: rotate(35deg);\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n\t.right {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: flex-start;\n\t\tz-index: 1;\n\t\tpadding: 0 10% 0 7%;\n\t\t.tit-wrap {\n\t\t\tmargin-bottom: 60px;\n\t\t\th2 {\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\t\t\th1 {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-size: 45px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t\t.message {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 80px;\n\t\t\t\t\tanimation: "," 8s ease-in-out infinite;\n\t\t\t\t\tstrong {\n\t\t\t\t\t\ttext-shadow:\n\t\t\t\t\t\t\t\t-1px -1px 0 #000030, \n\t\t\t\t\t\t\t\t1px -1px 0 #000030, \n\t\t\t\t\t\t\t\t-1px 1px 0 #000030, \n\t\t\t\t\t\t\t\t1px 1px 0 #000030;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tp {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tline-height: 1.6;\n\t\t\t\tpadding: 0 15% 0 0;\n\t\t\t\tmax-width: 670px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tword-break: keep-all;\n\t\t\t}\n\t\t}\n\t\tsection {\n\t\t\tmargin-bottom: 40px;\n\t\t\th2 {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-size: 26px;\n\t\t\t\tfont-weight: 600;\n\t\t\t}\n\t\t\tul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tli {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t\tpadding-bottom: 10px;\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\tspan {\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\topacity: 0.8;\n\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.more-btn {\n\t\t\tpadding: 0px 40px;\n\t\t\tborder-radius: 26px;\n\t\t\tbackground-color: ",";\n\t\t\tfont-size: 15px;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #fff;\n\t\t\tline-height: 46px;\n\t\t\tletter-spacing: 0.5px;\n\t\t}\n\t}\n\t@media "," {\n\t\t.left {\n\t\t\t.color-block {\n\t\t\t\ttop: -65%;\n\t\t\t\tleft: -45vw;\n\t\t\t\twidth: 60vw;\n\t\t\t\theight: 190%;\n\t\t\t\ttransform: rotate(35deg);\n\t\t\t}\n\t\t}\n\t\t.right {\n\t\t\tpadding-right: 5%;\n\t\t\t.tit-wrap {\n\t\t\t\tmargin-bottom: 40px;\n\t\t\t\th1 {\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tletter-spacing: -0.5px;\n\t\t\t\t}\n\t\t\t}\n\t\t\tsection {\n\t\t\t\th2 {\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\t\t\t\tul {\n\t\t\t\t\tli {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t@media "," {\n\t\tflex-wrap: wrap;\n\t\t.left {\n\t\t\tflex: none;\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t\t.color-block {\n\t\t\t\ttop: -80%;\n\t\t\t\tleft: -50%;\n\t\t\t\twidth: 70vw;\n\t\t\t\ttransform: rotate(25deg);\n\t\t\t}\n\t\t}\n\t\t.right {\n\t\t\twidth: 100%;\n\t\t\tflex: none;\n\t\t\tmargin: 5vh 0;\n\t\t\tpadding-bottom: 5vh;\n\t\t\t.tit-wrap {\n\t\t\t\th1 {\n\t\t\t\t\tfont-size: 35px;\n\t\t\t\t\t.message {\n\t\t\t\t\t\tleft: 60px;\n\t\t\t\t\t\tanimation: "," 8s ease-in-out infinite;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t\tp {\n\t\t\t\t\tpadding-right: 5%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.mainColor}),ht,(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.mainColor}),(function(t){return t.theme.laptop}),(function(t){return t.theme.mobile}),xt),ft=function(){return Object(h.jsxs)(bt,{children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("div",{className:"color-block"})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"tit-wrap",children:[Object(h.jsx)(w,{level:"2",children:"HI! HOW ARE YOU?"}),Object(h.jsxs)(w,{children:["I'M"," ",Object(h.jsxs)("span",{className:"message",children:[Object(h.jsx)("strong",{children:"KWONIL KIM"}),Object(h.jsx)("strong",{children:"WEB DEVELOPER"})]})]}),Object(h.jsxs)("p",{children:["\uc548\ub155\ud558\uc138\uc694. \uace0\ub4f1\ud559\uad50\uae4c\uc9c0 \uc77c\ubcf8\uc5d0\uc11c \uc0dd\ud65c \ud574 \uc628 \uae40\uad8c\uc77c\uc785\ub2c8\ub2e4.",Object(h.jsx)("br",{}),"\ud56d\uc0c1 \uc0c8\ub85c\uc6b4 \uae30\uc220\uc5d0 \ud765\ubbf8\ub97c \uac16\uace0, \ube60\ub974\uac8c \uc2b5\ub4dd\ud558\uace0, \uc790\uae30\uc131\ucc30\uc744 \uac8c\uc744\ub9ac\ud558\uc9c0 \uc54a\uc73c\uba70, \ub04a\uc784\uc5c6\uc774 \ubc1c\uc804\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud574\uc11c \uc5f4\uc2ec\ud788 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["\u521d\u3081\u307e\u3057\u3066\u3002\u9ad8\u6821\u307e\u3067\u65e5\u672c\u3067\u66ae\u3089\u3057\u3066\u3044\u307e\u3057\u305f\u3002 \u30ad\u30e0\u30b3\u30f3\u30a4\u30eb\u3067\u3059\u3002",Object(h.jsx)("br",{}),"\u5e38\u306b\u65b0\u3057\u3044\u6280\u8853\u306b\u8208\u5473\u3092\u6301\u3061\u3001\u3044\u3061\u65e9\u304f\u7fd2\u5f97\u3057\u3001\u81ea\u5df1\u7814\u78e8\u3092\u6020\u3089\u305a\u3001\u7d76\u3048\u305a\u767a\u5c55\u3059\u308b\u958b\u767a\u8005\u306b\u306a\u308b\u305f\u3081\u306b\u4e00\u751f\u61f8\u547d\u52aa\u529b\u3057\u3066\u3044\u307e\u3059\u3002"]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)(w,{level:"2",children:"PERSONAL INFOS"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Name : "}),"\uae40\uad8c\uc77c"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Age : "}),"30, 1993.03"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Address : "}),"\uc11c\uc6b8\uc2dc \ub3d9\uc791\uad6c"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Email : "}),"rnjsdlf0322@gmail.com"]})]})]})]})]})};var jt=function(){return Object(h.jsxs)(mt,{id:"home",children:[Object(h.jsx)(j,{}),Object(h.jsx)(g,{}),Object(h.jsx)(ft,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(pt,{})]})},mt=d.b.div(dt||(dt=Object(l.a)(["\n\toverflow: hidden;\n\t@media "," {\n\t\toverflow: auto; \n\t}\n"])),(function(t){return t.theme.mobile}));var ut=function(){return Object(h.jsx)(jt,{})},gt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,i=n.getFID,o=n.getFCP,a=n.getLCP,r=n.getTTFB;e(t),i(t),o(t),a(t),r(t)}))},Ot="1024px",wt="1280px",vt={mainColor:"#ffb400",mobile:"(max-width: ".concat("720px",")"),tablet:"(max-width: ".concat(Ot,")"),laptop:"(max-width: ".concat(wt,")")};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d.a,{theme:vt,children:Object(h.jsx)(ut,{})})}),document.getElementById("root")),gt()}},[[28,1,2]]]);
//# sourceMappingURL=main.70d21983.chunk.js.map