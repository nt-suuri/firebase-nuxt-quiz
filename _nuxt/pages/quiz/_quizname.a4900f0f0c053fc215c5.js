webpackJsonp([2],{"0+ei":function(t,e,a){var n=a("Teji");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("7175efc0",n,!1,{sourceMap:!1})},"4+uR":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("MqSS"),r=a("LYvh"),i=!1;var s=function(t){i||a("A/7p")},o=a("VU/8")(n.a,r.a,!1,s,"data-v-44e2da84",null);o.options.__file="pages/quiz/_quizname.vue",e.default=o.exports},"A/7p":function(t,e,a){var n=a("yqdm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("14972390",n,!1,{sourceMap:!1})},LYvh:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("tmp-finisher",{attrs:{name:this.name,icon:"/"+this.icon,results:this.quizresult,percent:this.percent}})};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},MqSS:function(t,e,a){"use strict";var n=a("Xxa5"),r=a.n(n),i=a("exGp"),s=a.n(i),o=a("gRE1"),f=a.n(o),p=a("d2Gl");e.a={name:"Quizresults",middleware:"protected",components:{tmpFinisher:p.a},validate:function(t){var e=t.params,a=t.store;return 1==f()(a.getters["quizes/getQuizes"]).filter(function(t){return t.name===e.quizname}).length},asyncData:function(){var t=s()(r.a.mark(function t(e){var a,n,i,s,o,p,l,b;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.params.quizname,t.next=3,e.app.$fir.database().ref("results/"+e.store.getters["user/getUser"].uid+"/"+a).once("value");case 3:if(n=t.sent,i=n.toJSON()){t.next=9;break}e.redirect("/pick-quiz"),t.next=15;break;case 9:for(s=f()(i.answers),o=f()(e.store.getters["quizes/getQuizes"]).filter(function(t){return t.name===a})[0],p=[],l=0;l<s.length;l++)p.push({question:o.questions[l].text,answer:o.questions[l].answears[s[l]],isProper:0==s[l]});return b=Math.round(s.filter(function(t){return 0==t}).length/s.length*1e4)/100,t.abrupt("return",{quizresult:p,percent:b,icon:o.icon,name:a});case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},PZyN:function(t,e,a){"use strict";e.a={name:"Finisher",props:{name:String,icon:String,subheader:{type:String,default:"Gratulations! You have finished quiz. Check your results in table below..."},results:Array,percent:Number},methods:{backToQuizes:function(){this.$router.push({path:"/pick-quiz"})}}}},Teji:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.fib-button,button{-webkit-appearance:none}.fib-button{color:#000;background:#fff;display:inline-block;position:relative;padding:10px 25px;border-radius:12px;border:2px solid #fff;text-transform:uppercase;letter-spacing:3px;text-decoration:none;margin-top:10px;font-weight:700;-moz-appearance:none;appearance:none}.fib-button--special{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.fib-button--special:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.fib-button--special:hover{background:rgba(0,0,0,.5);border-radius:20px}.fib-button--special:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.fib-button--special{margin-top:-5px;margin-bottom:20px}.page-enter-active,.page-leave-active{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.page-enter,.page-leave-active{opacity:0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.page-enter-active{-webkit-animation:acrossIn .4s ease-out both;animation:acrossIn .4s ease-out both}.page-leave-active{-webkit-animation:acrossOut .6s ease-in both;animation:acrossOut .6s ease-in both}.fade-page-enter,.fade-page-leave-active{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.fade-page-leave-active{position:absolute}.fade-page-enter-active,.fade-page-leave-active{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fade-page-enter-active{-webkit-animation:acrossIn .4s ease-out both;animation:acrossIn .4s ease-out both}.fade-page-leave-active{-webkit-animation:acrossOut .6s ease-in both;animation:acrossOut .6s ease-in both}.animated{-webkit-transition:all .5s;transition:all .5s;width:100%}@-webkit-keyframes acrossIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes acrossIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes acrossOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@keyframes acrossOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}.frame__finish{margin-top:20px;text-align:center;-webkit-transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,transform 1s;transition:opacity .55s,transform 1s,-webkit-transform 1s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.frame__finish>div{padding:30px 0}@media (min-width:768px){.frame__finish{margin-top:0;min-height:100vh}}.frame__finish.out{-webkit-transform:scale(.2) translateY(-45%);transform:scale(.2) translateY(-45%);opacity:0}.frame__finish .finish__icon{max-width:200px}.frame__finish .finish__header,.frame__finish .finish__subheader{margin:0}.frame__finish .finish__header{font-size:2em}.frame__finish .finish__subheader{font-size:.89em;padding:5px 20px 0}.frame__finish .finish__table{margin-top:15px}.frame__finish .finish__table .table__question{-webkit-box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);margin-bottom:10px;padding:6px 2px;background:#fff;background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,.153099)),to(hsla(0,0%,100%,0)));background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.153099) 50%,hsla(0,0%,100%,0))}.frame__finish .finish__table .table__question.answer--proper{background:lime;background:-webkit-gradient(linear,left top,right top,from(rgba(0,255,0,.3)),color-stop(50%,rgba(0,255,0,.453099)),to(rgba(0,255,0,.3)));background:linear-gradient(90deg,rgba(0,255,0,.3),rgba(0,255,0,.453099) 50%,rgba(0,255,0,.3))}.frame__finish .finish__table .table__question.answer--bad{background:red;background:-webkit-gradient(linear,left top,right top,from(rgba(255,0,0,.3)),color-stop(50%,rgba(255,0,0,.453099)),to(rgba(255,0,0,.3)));background:linear-gradient(90deg,rgba(255,0,0,.3),rgba(255,0,0,.453099) 50%,rgba(255,0,0,.3))}.frame__finish .finish__table .table__question span{display:block}.frame__finish .finish__table .table__question span.question{font-size:.92em}.frame__finish .finish__table .table__question span.answer{font-weight:700}.frame__finish .finish__table .table__points{color:#fff;font-size:1.35em;padding:15px 0;margin-bottom:5px;font-weight:700}.frame__finish .table__btn{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.frame__finish .table__btn:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.frame__finish .table__btn:hover{background:rgba(0,0,0,.5);border-radius:20px}.frame__finish .table__btn:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.frame__finish .table__btn{margin-top:-5px;margin-bottom:20px}',""])},TmV0:function(t,e,a){a("fZOM"),t.exports=a("FeBl").Object.values},d2Gl:function(t,e,a){"use strict";var n=a("PZyN"),r=a("t6ww"),i=!1;var s=function(t){i||a("0+ei")},o=a("VU/8")(n.a,r.a,!1,s,null,null);o.options.__file="components/question_templates/Finisher.vue",e.a=o.exports},fZOM:function(t,e,a){var n=a("kM2E"),r=a("mbce")(!1);n(n.S,"Object",{values:function(t){return r(t)}})},gRE1:function(t,e,a){t.exports={default:a("TmV0"),__esModule:!0}},mbce:function(t,e,a){var n=a("lktj"),r=a("TcQ7"),i=a("NpIQ").f;t.exports=function(t){return function(e){for(var a,s=r(e),o=n(s),f=o.length,p=0,l=[];f>p;)i.call(s,a=o[p++])&&l.push(t?[a,s[a]]:s[a]);return l}}},t6ww:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._b({staticClass:"frame__finish"},"div",t.$attrs,!1),[a("div",[a("img",{staticClass:"finish__icon",attrs:{src:t.icon,alt:t.name}}),a("h1",{staticClass:"finish__header"},[t._v(t._s(t.name))]),a("h3",{staticClass:"finish__subheader"},[t._v(t._s(t.subheader))]),a("div",{staticClass:"finish__table"},[t._l(t.results,function(e){return a("div",{key:e.question,staticClass:"table__question",class:{"answer--proper":e.isProper,"answer--bad":!e.isProper}},[a("span",{key:"1",staticClass:"question"},[a("b",[t._v("Q:")]),t._v(" "+t._s(e.question)+"\n                    ")]),a("span",{key:"2",staticClass:"answer"},[a("b",[t._v("A: ")]),t._v(t._s(e.answer)+"\n                    ")])])}),a("div",{staticClass:"table__points"},[t._v(t._s(t.percent)+"% of good answers")])],2),a("button",{staticClass:"table__btn",on:{click:t.backToQuizes}},[t._v("Back to quizes")])])])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},yqdm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])}});