(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(n,i,t){n.exports=t.p+"assets/img/css1.b66f50d5.png"},171:function(n,i,t){"use strict";t.r(i);var a=[function(){var n=this.$createElement,i=this._self._c||n;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"css常用布局方案-——-三栏布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css常用布局方案-——-三栏布局"}},[this._v("#")]),this._v(" CSS常用布局方案 —— 三栏布局")]),this._v(" "),i("p",[i("img",{attrs:{src:t(168),alt:"An image"}})]),this._v(" "),i("pre",[i("code",[this._v('<!DOCTYPE html>\n<html lang="en" dir="ltr">\n    <head>\n        <meta charset="utf-8">\n        <title>三栏布局</title>\n        <style>\n            /*\n            三栏布局的方案一般左右两栏固定宽度, 中间自适应, 有两个流行的解决方案\n            一个是「圣杯布局」, 另一个是「双飞翼布局」\n            */\n            .case {\n                padding: 10px;\n                margin: 20px;\n                border: 1px solid #eee;\n            }\n\n            .clearfix::after {\n                content: " ";\n                display: block;\n                clear: both;\n            }\n\n            .holy-grails {\n                width: 800px;\n                margin: 0 auto;\n                border: 1px solid #000;\n            }\n\n            .holy-grails .header,\n            .holy-grails .footer {\n                height: 40px;\n                background: lightyellow;\n            }\n\n            .holy-grails .section {\n                /* 200 和 150 分别是 left 和 right 的宽度 */\n                padding-left: 200px;\n                padding-right: 150px;\n            }\n\n            .holy-grails .column {\n                position: relative;\n                float: left;\n                height: 200px;\n            }\n\n            .holy-grails .main {\n                width: 100%;\n                background: lightblue;\n            }\n\n            .holy-grails .left {\n                width: 200px;\n                margin-left: -100%;\n                left: -200px;\n                background: lightpink;\n            }\n\n            .holy-grails .right {\n                width: 150px;\n                margin-right: -150px;\n                background: lightgray;\n            }\n\n            /* 双飞翼布局 */\n            .tb {\n                width: 800px;\n                margin: 0 auto;\n                border: 1px solid #000;\n            }\n\n            .tb .header,\n            .tb .footer {\n                height: 40px;\n                background: lightyellow;\n            }\n\n            .tb .section {\n                /* 200 和 150 分别是 left 和 right 的宽度 */\n                /* padding-left: 200px;\n                padding-right: 150px; */\n            }\n\n            .tb .column {\n                float: left;\n                height: 200px;\n            }\n\n            .tb .main {\n                width: 100%;\n                background: lightblue;\n            }\n\n            .tb .main-inner {\n                /* 150 和 200 分别是右边和左边的大小 */\n                margin: 0 150px 0 200px;\n                height: 200px;\n            }\n\n            .tb .left {\n                width: 200px;\n                margin-left: -100%;\n                background: lightpink;\n            }\n\n            .tb .right {\n                width: 150px;\n                margin-left: -150px;\n                background: lightgray;\n            }\n        </style>\n    </head>\n    <body>\n        <div class="case">\n            <h3>圣杯布局</h3>\n            <div class="container holy-grails">\n                <div class="header">\n                    header\n                </div>\n                <div class="section clearfix">\n                    \x3c!-- 本来应该按照 left main right 的顺序写 HTML, 但是想让主体部分 main 更快加载, 所以把 main 写在最前面 --\x3e\n                    <div class="main column">\n                        main\n                    </div>\n                    <div class="left column">\n                        left\n                    </div>\n                    <div class="right column">\n                        right\n                    </div>\n                </div>\n                <div class="footer">\n                    footer\n                </div>\n            </div>\n        </div>\n\n        <div class="case">\n            <h3>双飞翼布局</h3>\n            <div class="container tb">\n                <div class="header">\n                    header\n                </div>\n                <div class="section clearfix">\n                    <div class="main column">\n                        <div class="main-inner">\n                            main\n                        </div>\n                    </div>\n                    <div class="left column">\n                        left\n                    </div>\n                    <div class="right column">\n                        right\n                    </div>\n                </div>\n                <div class="footer">\n                    footer\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n')])])])}],l=t(0),e=Object(l.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),a,!1,null,null,null);i.default=e.exports}}]);