webpackJsonp([0],{"/Aoq":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".qTemplate--no-photo[data-v-08a72f46]{width:90%;margin:0 auto;padding:60px 0}.no-photo__question[data-v-08a72f46]{font-size:2em}",""])},"0+ei":function(t,e,a){var i=a("Teji");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7175efc0",i,!1,{sourceMap:!1})},"0dY/":function(t,e,a){"use strict";var i=a("gRE1"),n=a.n(i),r=a("H9jd");e.a={name:"QuestionTemplate_LeftPhoto",props:{question:{type:Object,required:!0}},data:function(){return{shuffledAnswers:[],properId:0}},mounted:function(){var t=this.question.answears[0];this.shuffledAnswers=this.shuffle(n()(this.question.answears)),this.properId=this.shuffledAnswers.findIndex(function(e){return e===t})},methods:{shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}return t},picked:function(t){var e=this,a=n()(this.question.answears).findIndex(function(a){return a===e.shuffledAnswers[t]});this.$emit("choose",a)}},components:{cmpAnswer:r.a}}},"6osh":function(t,e,a){var i=a("/Aoq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("80b6db7a",i,!1,{sourceMap:!1})},H9jd:function(t,e,a){"use strict";var i=a("ZYvT"),n=a("XN9B"),r=!1;var s=function(t){r||a("yMRW")},o=a("VU/8")(i.a,n.a,!1,s,"data-v-4425e44e",null);o.options.__file="components/Answer.vue",e.a=o.exports},JZCd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container container--father",class:{finished:t.yetAnimed,"container--intro":!t.isIntroFinished,outing:t.movingOut}},[a("div",{staticClass:"container__quiz"},[a("i",{staticClass:"material-icons icon--back",on:{click:t.backToQuizes}},[t._v("\n            keyboard_arrow_left\n        ")]),a("transition",{attrs:{name:"frame",mode:"out-in"}},[t.isIntro?a("div",{key:1,staticClass:"frame__intro"},[a("img",{staticClass:"intro__icon",attrs:{src:this.quiz.icon,alt:this.quiz.name}}),a("h1",{staticClass:"intro__header"},[t._v(t._s(this.quiz.name))]),a("p",{staticClass:"intro__description"},[t._v(t._s(this.quiz.description))]),a("button",{staticClass:"intro__button",on:{click:t.start}},[t._v("Start")])]):t._e(),t.currentQuestion<t.questionAmount&&!t.isIntro?[t._l(t.quiz.questions,function(e,i){return t.currentQuestion==i?["photo"in e?"photo"in e&&"left"===e.photo.template?a("tmp-left-photo",{key:e.text+3,attrs:{question:t.quiz.questions[t.currentQuestion]},on:{choose:t.picked}}):"photo"in e&&"right"===e.photo.template?a("tmp-right-photo",{key:e.text+4,attrs:{question:t.quiz.questions[t.currentQuestion]},on:{choose:t.picked}}):t._e():a("tmp-no-photo",{key:e.text+2,attrs:{question:e},on:{choose:t.picked}})]:t._e()})]:t.currentQuestion>=t.questionAmount&&!t.isIntro?a("tmp-finisher",{key:5,attrs:{name:t.quiz.name,icon:t.quiz.icon,results:t.results,percent:t.percent}}):t._e()],2)],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},Jioe:function(t,e,a){var i=a("clea");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("97f619da",i,!1,{sourceMap:!1})},LAdN:function(t,e,a){"use strict";var i=a("t9mJ"),n=a("wwJw"),r=!1;var s=function(t){r||a("TuXa")},o=a("VU/8")(i.a,n.a,!1,s,"data-v-b632a18c",null);o.options.__file="components/question_templates/RightPhoto.vue",e.a=o.exports},Md8z:function(t,e,a){"use strict";var i=a("fZjL"),n=a.n(i),r=a("i2ME"),s=a("SpiU"),o=a("LAdN"),f=a("d2Gl");e.a={transition:"page",middleware:["no-quiz-index","protected"],name:"quiz",data:function(){return{yetAnimed:!1,currentQuestion:0,isIntro:!0,isIntroFinished:!1,results:{},percent:0,movingOut:!1}},computed:{quiz:function(){return this.$store.getters["quizes/getQuizes"][+this.$store.getters["quizes/getCurrentQuiz"]]},questionAmount:function(){return n()(this.quiz.questions).length}},mounted:function(){var t=this;setTimeout(function(){t.yetAnimed=!0},100)},watch:{currentQuestion:function(t,e){if(t>=this.questionAmount){for(var a=this.$store.getters["quizes/getAnswers"],i=[],n=0,r=0,s=a.length;r<s;r++)i[r]={question:this.quiz.questions[r].text,answer:this.quiz.questions[r].answears[a[r]],isProper:0==a[r]},i[r].isProper&&n++;this.results=i,this.percent=Math.round(n/a.length*1e4)/100}}},methods:{start:function(){var t=this;this.isIntro=!1,this.$store.commit("quizes/clearAnswears"),setTimeout(function(){t.isIntroFinished=!0},1e3)},picked:function(t){var e=this;this.$store.dispatch("quizes/setAnswer",{key:this.currentQuestion,value:t,uid:this.$store.getters["user/getUid"],name:this.quiz.name}).then(function(t){e.currentQuestion++}).catch(function(t){})},backToQuizes:function(){var t=this;setTimeout(function(){t.$router.push({path:"/pick-quiz"})},500)}},components:{tmpNoPhoto:r.a,tmpLeftPhoto:s.a,tmpRightPhoto:o.a,tmpFinisher:f.a}}},PZyN:function(t,e,a){"use strict";e.a={name:"Finisher",props:{name:String,icon:String,subheader:{type:String,default:"Gratulations! You have finished quiz. Check your results in table below..."},results:Array,percent:Number},methods:{backToQuizes:function(){this.$router.push({path:"/pick-quiz"})}}}},S8RO:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qTemplate--photo"},[a("div",{staticClass:"photo"},[a("img",{staticClass:"photo__img--left",attrs:{src:t.question.photo.url,alt:"question.text"}})]),a("div",{staticClass:"question"},[a("h2",{staticClass:"photo__question"},[t._v(t._s(t.question.text))]),a("div",{staticClass:"answers"},t._l(t.shuffledAnswers,function(e,i){return a("cmp-answer",{key:i,attrs:{answerText:e.toString(),answerNumber:i},on:{choose:function(e){t.picked(i)}}})}))])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},SpiU:function(t,e,a){"use strict";var i=a("0dY/"),n=a("S8RO"),r=!1;var s=function(t){r||a("Jioe")},o=a("VU/8")(i.a,n.a,!1,s,"data-v-7b6effd7",null);o.options.__file="components/question_templates/LeftPhoto.vue",e.a=o.exports},Teji:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.fib-button,button{-webkit-appearance:none}.fib-button{color:#000;background:#fff;display:inline-block;position:relative;padding:10px 25px;border-radius:12px;border:2px solid #fff;text-transform:uppercase;letter-spacing:3px;text-decoration:none;margin-top:10px;font-weight:700;-moz-appearance:none;appearance:none}.fib-button--special{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.fib-button--special:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.fib-button--special:hover{background:rgba(0,0,0,.5);border-radius:20px}.fib-button--special:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.fib-button--special{margin-top:-5px;margin-bottom:20px}.page-enter-active,.page-leave-active{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.page-enter,.page-leave-active{opacity:0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.page-enter-active{-webkit-animation:acrossIn .4s ease-out both;animation:acrossIn .4s ease-out both}.page-leave-active{-webkit-animation:acrossOut .6s ease-in both;animation:acrossOut .6s ease-in both}.fade-page-enter,.fade-page-leave-active{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.fade-page-leave-active{position:absolute}.fade-page-enter-active,.fade-page-leave-active{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fade-page-enter-active{-webkit-animation:acrossIn .4s ease-out both;animation:acrossIn .4s ease-out both}.fade-page-leave-active{-webkit-animation:acrossOut .6s ease-in both;animation:acrossOut .6s ease-in both}.animated{-webkit-transition:all .5s;transition:all .5s;width:100%}@-webkit-keyframes acrossIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes acrossIn{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes acrossOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@keyframes acrossOut{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}.frame__finish{margin-top:20px;text-align:center;-webkit-transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,transform 1s;transition:opacity .55s,transform 1s,-webkit-transform 1s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.frame__finish>div{padding:30px 0}@media (min-width:768px){.frame__finish{margin-top:0;min-height:100vh}}.frame__finish.out{-webkit-transform:scale(.2) translateY(-45%);transform:scale(.2) translateY(-45%);opacity:0}.frame__finish .finish__icon{max-width:200px}.frame__finish .finish__header,.frame__finish .finish__subheader{margin:0}.frame__finish .finish__header{font-size:2em}.frame__finish .finish__subheader{font-size:.89em;padding:5px 20px 0}.frame__finish .finish__table{margin-top:15px}.frame__finish .finish__table .table__question{-webkit-box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);margin-bottom:10px;padding:6px 2px;background:#fff;background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,.153099)),to(hsla(0,0%,100%,0)));background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.153099) 50%,hsla(0,0%,100%,0))}.frame__finish .finish__table .table__question.answer--proper{background:lime;background:-webkit-gradient(linear,left top,right top,from(rgba(0,255,0,.3)),color-stop(50%,rgba(0,255,0,.453099)),to(rgba(0,255,0,.3)));background:linear-gradient(90deg,rgba(0,255,0,.3),rgba(0,255,0,.453099) 50%,rgba(0,255,0,.3))}.frame__finish .finish__table .table__question.answer--bad{background:red;background:-webkit-gradient(linear,left top,right top,from(rgba(255,0,0,.3)),color-stop(50%,rgba(255,0,0,.453099)),to(rgba(255,0,0,.3)));background:linear-gradient(90deg,rgba(255,0,0,.3),rgba(255,0,0,.453099) 50%,rgba(255,0,0,.3))}.frame__finish .finish__table .table__question span{display:block}.frame__finish .finish__table .table__question span.question{font-size:.92em}.frame__finish .finish__table .table__question span.answer{font-weight:700}.frame__finish .finish__table .table__points{color:#fff;font-size:1.35em;padding:15px 0;margin-bottom:5px;font-weight:700}.frame__finish .table__btn{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.frame__finish .table__btn:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.frame__finish .table__btn:hover{background:rgba(0,0,0,.5);border-radius:20px}.frame__finish .table__btn:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.frame__finish .table__btn{margin-top:-5px;margin-bottom:20px}',""])},TmV0:function(t,e,a){a("fZOM"),t.exports=a("FeBl").Object.values},TuXa:function(t,e,a){var i=a("kLdP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("137b84c8",i,!1,{sourceMap:!1})},"UNA+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Md8z"),n=a("JZCd"),r=!1;var s=function(t){r||a("utp1")},o=a("VU/8")(i.a,n.a,!1,s,null,null);o.options.__file="pages/quiz/index.vue",e.default=o.exports},UdYD:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.frame-enter-active,.frame-leave-active{-webkit-transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,transform 1s;transition:opacity .55s,transform 1s,-webkit-transform 1s}.frame-enter,.frame-leave-to{-webkit-transform:scale(.2) translateY(-45%);transform:scale(.2) translateY(-45%);opacity:0}.container__quiz{padding:30px 0;width:100%}.container--father{height:100vh}.container{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:.5s;transition:.5s}.container.container--intro{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.container.outing{opacity:0}.container .icon--back{position:absolute;left:10px;top:10px;color:#fff;border:2px solid #eee;border-radius:50%;padding:1px;cursor:pointer}.frame__finish,.frame__intro{text-align:center;-webkit-transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,-webkit-transform 1s;transition:opacity .55s,transform 1s;transition:opacity .55s,transform 1s,-webkit-transform 1s}.frame__finish.out,.frame__intro.out{-webkit-transform:scale(.2) translateY(-45%);transform:scale(.2) translateY(-45%);opacity:0}.frame__finish .finish__header,.frame__finish .finish__subheader,.frame__finish .intro__description,.frame__finish .intro__header,.frame__intro .finish__header,.frame__intro .finish__subheader,.frame__intro .intro__description,.frame__intro .intro__header{margin:0}.frame__finish .intro__header,.frame__intro .intro__header{font-size:3em}.frame__finish .finish__header,.frame__intro .finish__header{font-size:2em}.frame__finish .finish__subheader,.frame__intro .finish__subheader{font-size:.89em;padding:5px 20px 0}.frame__finish .finish__table,.frame__intro .finish__table{margin-top:15px}.frame__finish .finish__table .table__question,.frame__intro .finish__table .table__question{-webkit-box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);box-shadow:-1px 10px 50px -10px rgba(0,0,0,.43);margin-bottom:10px;padding:6px 2px;background:#fff;background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,.153099)),to(hsla(0,0%,100%,0)));background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.153099) 50%,hsla(0,0%,100%,0))}.frame__finish .finish__table .table__question.answer--proper,.frame__intro .finish__table .table__question.answer--proper{background:lime;background:-webkit-gradient(linear,left top,right top,from(rgba(0,255,0,.3)),color-stop(50%,rgba(0,255,0,.453099)),to(rgba(0,255,0,.3)));background:linear-gradient(90deg,rgba(0,255,0,.3),rgba(0,255,0,.453099) 50%,rgba(0,255,0,.3))}.frame__finish .finish__table .table__question.answer--bad,.frame__intro .finish__table .table__question.answer--bad{background:red;background:-webkit-gradient(linear,left top,right top,from(rgba(255,0,0,.3)),color-stop(50%,rgba(255,0,0,.453099)),to(rgba(255,0,0,.3)));background:linear-gradient(90deg,rgba(255,0,0,.3),rgba(255,0,0,.453099) 50%,rgba(255,0,0,.3))}.frame__finish .finish__table .table__question span,.frame__intro .finish__table .table__question span{display:block}.frame__finish .finish__table .table__question span.question,.frame__intro .finish__table .table__question span.question{font-size:.92em}.frame__finish .finish__table .table__question span.answer,.frame__intro .finish__table .table__question span.answer{font-weight:700}.frame__finish .finish__table .table__points,.frame__intro .finish__table .table__points{color:#fff;font-size:1.35em;padding:15px 0;margin-bottom:5px;font-weight:700}.frame__finish .intro__description,.frame__intro .intro__description{font-size:1em;letter-spacing:2px;padding:0 20px}.frame__finish .finish__icon,.frame__finish .intro__icon,.frame__intro .finish__icon,.frame__intro .intro__icon{max-width:200px}.frame__finish .intro__button,.frame__finish .table__btn,.frame__intro .intro__button,.frame__intro .table__btn{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.frame__finish .intro__button:before,.frame__finish .table__btn:before,.frame__intro .intro__button:before,.frame__intro .table__btn:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.frame__finish .intro__button:hover,.frame__finish .table__btn:hover,.frame__intro .intro__button:hover,.frame__intro .table__btn:hover{background:rgba(0,0,0,.5);border-radius:20px}.frame__finish .intro__button:hover:before,.frame__finish .table__btn:hover:before,.frame__intro .intro__button:hover:before,.frame__intro .table__btn:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.frame__finish .table__btn,.frame__intro .table__btn{margin-top:-5px;margin-bottom:20px}',""])},VAb8:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".answer[data-v-4425e44e]{color:#eee;font-size:1.6em;padding:15px;border:2px solid hsla(0,0%,100%,.6);border-radius:20px;margin-bottom:10px;position:relative;overflow:hidden;cursor:pointer}.answer svg[data-v-4425e44e]{position:absolute;top:0;left:0;width:100%;z-index:1;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0;-webkit-transition:opacity 1s,width 2s,-webkit-transform .35s;transition:opacity 1s,width 2s,-webkit-transform .35s;transition:transform .35s,opacity 1s,width 2s;transition:transform .35s,opacity 1s,width 2s,-webkit-transform .35s;fill:#fff}.answer span[data-v-4425e44e]{position:relative;z-index:2;-webkit-transition:.4s;transition:.4s}.answer:hover span[data-v-4425e44e]{color:#111}.answer:hover svg[data-v-4425e44e]{-webkit-transform:translateY(0);transform:translateY(0);width:400%;opacity:.8}",""])},XN9B:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"answer",on:{click:function(e){t.$emit("choose",t.answerNumber)}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1170 193"}},[a("path",{attrs:{d:"M1175 131.2c0 0-81-89.4-224.3-103.4S713 72 665 97c-86 46-148 63-271 7C221.7 25.5 56 104.5-4 197.4 -4 58.7-3.3 0.3-3.3 0.3L1175 0V131.2z"}})]),a("span",[t._v(t._s(t.answerText))])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},ZYvT:function(t,e,a){"use strict";e.a={name:"Answer",props:{answerText:{type:String,required:!0},answerNumber:{type:Number,required:!0}}}},c2CG:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qTemplate--no-photo"},[a("h2",{staticClass:"no-photo__question"},[t._v(t._s(t.question.text))]),a("div",{staticClass:"answers"},t._l(t.shuffledAnswers,function(e,i){return a("cmp-answer",{key:i,attrs:{answerText:e.toString(),answerNumber:i},on:{choose:function(e){t.picked(i)}}})}))])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},cScr:function(t,e,a){"use strict";var i=a("gRE1"),n=a.n(i),r=a("H9jd");e.a={name:"QuestionTemplate_NoPhoto",props:{question:{type:Object,required:!0}},data:function(){return{shuffledAnswers:[],properId:0}},mounted:function(){this.init()},methods:{shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}return t},picked:function(t){var e=this,a=n()(this.question.answears).findIndex(function(a){return a===e.shuffledAnswers[t]});this.$emit("choose",a)},init:function(){var t=this.question.answears[0];this.shuffledAnswers=this.shuffle(n()(this.question.answears)),this.properId=this.shuffledAnswers.findIndex(function(e){return e===t})}},components:{cmpAnswer:r.a}}},clea:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'button[data-v-7b6effd7]{-webkit-appearance:none}.fib-button[data-v-7b6effd7]{color:#000;background:#fff;display:inline-block;position:relative;padding:10px 25px;border-radius:12px;border:2px solid #fff;text-transform:uppercase;letter-spacing:3px;text-decoration:none;margin-top:10px;font-weight:700;-webkit-appearance:none;-moz-appearance:none;appearance:none}.fib-button--special[data-v-7b6effd7]{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.fib-button--special[data-v-7b6effd7]:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.fib-button--special[data-v-7b6effd7]:hover{background:rgba(0,0,0,.5);border-radius:20px}.fib-button--special[data-v-7b6effd7]:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.fib-button--special[data-v-7b6effd7]{margin-top:-5px;margin-bottom:20px}.page-enter-active[data-v-7b6effd7],.page-leave-active[data-v-7b6effd7]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.page-enter[data-v-7b6effd7],.page-leave-active[data-v-7b6effd7]{opacity:0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.page-enter-active[data-v-7b6effd7]{-webkit-animation:acrossIn-data-v-7b6effd7 .4s ease-out both;animation:acrossIn-data-v-7b6effd7 .4s ease-out both}.page-leave-active[data-v-7b6effd7]{-webkit-animation:acrossOut-data-v-7b6effd7 .6s ease-in both;animation:acrossOut-data-v-7b6effd7 .6s ease-in both}.fade-page-enter[data-v-7b6effd7],.fade-page-leave-active[data-v-7b6effd7]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.fade-page-leave-active[data-v-7b6effd7]{position:absolute}.fade-page-enter-active[data-v-7b6effd7],.fade-page-leave-active[data-v-7b6effd7]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fade-page-enter-active[data-v-7b6effd7]{-webkit-animation:acrossIn-data-v-7b6effd7 .4s ease-out both;animation:acrossIn-data-v-7b6effd7 .4s ease-out both}.fade-page-leave-active[data-v-7b6effd7]{-webkit-animation:acrossOut-data-v-7b6effd7 .6s ease-in both;animation:acrossOut-data-v-7b6effd7 .6s ease-in both}.animated[data-v-7b6effd7]{-webkit-transition:all .5s;transition:all .5s;width:100%}@-webkit-keyframes acrossIn-data-v-7b6effd7{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes acrossIn-data-v-7b6effd7{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes acrossOut-data-v-7b6effd7{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@keyframes acrossOut-data-v-7b6effd7{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}.qTemplate--photo[data-v-7b6effd7]{width:90%;margin:0 auto;padding:60px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.photo__question[data-v-7b6effd7]{font-size:1.6em}.photo__img--left[data-v-7b6effd7]{max-width:100%}@media (min-width:768px){.qTemplate--photo[data-v-7b6effd7]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.qTemplate--photo>div[data-v-7b6effd7]{width:50%}.qTemplate--photo>div[data-v-7b6effd7]:first-of-type{margin-right:30px}}',""])},d2Gl:function(t,e,a){"use strict";var i=a("PZyN"),n=a("t6ww"),r=!1;var s=function(t){r||a("0+ei")},o=a("VU/8")(i.a,n.a,!1,s,null,null);o.options.__file="components/question_templates/Finisher.vue",e.a=o.exports},fZOM:function(t,e,a){var i=a("kM2E"),n=a("mbce")(!1);i(i.S,"Object",{values:function(t){return n(t)}})},gRE1:function(t,e,a){t.exports={default:a("TmV0"),__esModule:!0}},i2ME:function(t,e,a){"use strict";var i=a("cScr"),n=a("c2CG"),r=!1;var s=function(t){r||a("6osh")},o=a("VU/8")(i.a,n.a,!1,s,"data-v-08a72f46",null);o.options.__file="components/question_templates/NoPhoto.vue",e.a=o.exports},kLdP:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'button[data-v-b632a18c]{-webkit-appearance:none}.fib-button[data-v-b632a18c]{color:#000;background:#fff;display:inline-block;position:relative;padding:10px 25px;border-radius:12px;border:2px solid #fff;text-transform:uppercase;letter-spacing:3px;text-decoration:none;margin-top:10px;font-weight:700;-webkit-appearance:none;-moz-appearance:none;appearance:none}.fib-button--special[data-v-b632a18c]{-webkit-box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);box-shadow:inset -1px -1px 51px -7px rgba(0,0,0,.75);background:transparent;color:#fff;border:0;padding:10px 30px;font-size:1.24em;margin-top:13px;cursor:pointer;position:relative;overflow:hidden;-webkit-transition:background 2s,border-radius .7s;transition:background 2s,border-radius .7s}.fib-button--special[data-v-b632a18c]:before{content:"";position:absolute;height:100%;width:100%;z-index:0;background:hsla(0,0%,100%,.7);bottom:0;left:0;-webkit-transform:skew(40deg) translateX(-120%);transform:skew(40deg) translateX(-120%);-webkit-transition:.6s;transition:.6s}.fib-button--special[data-v-b632a18c]:hover{background:rgba(0,0,0,.5);border-radius:20px}.fib-button--special[data-v-b632a18c]:hover:before{-webkit-transform:skew(60deg) translateX(150%);transform:skew(60deg) translateX(150%)}.fib-button--special[data-v-b632a18c]{margin-top:-5px;margin-bottom:20px}.page-enter-active[data-v-b632a18c],.page-leave-active[data-v-b632a18c]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.page-enter[data-v-b632a18c],.page-leave-active[data-v-b632a18c]{opacity:0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.page-enter-active[data-v-b632a18c]{-webkit-animation:acrossIn-data-v-b632a18c .4s ease-out both;animation:acrossIn-data-v-b632a18c .4s ease-out both}.page-leave-active[data-v-b632a18c]{-webkit-animation:acrossOut-data-v-b632a18c .6s ease-in both;animation:acrossOut-data-v-b632a18c .6s ease-in both}.fade-page-enter[data-v-b632a18c],.fade-page-leave-active[data-v-b632a18c]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.fade-page-leave-active[data-v-b632a18c]{position:absolute}.fade-page-enter-active[data-v-b632a18c],.fade-page-leave-active[data-v-b632a18c]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fade-page-enter-active[data-v-b632a18c]{-webkit-animation:acrossIn-data-v-b632a18c .4s ease-out both;animation:acrossIn-data-v-b632a18c .4s ease-out both}.fade-page-leave-active[data-v-b632a18c]{-webkit-animation:acrossOut-data-v-b632a18c .6s ease-in both;animation:acrossOut-data-v-b632a18c .6s ease-in both}.animated[data-v-b632a18c]{-webkit-transition:all .5s;transition:all .5s;width:100%}@-webkit-keyframes acrossIn-data-v-b632a18c{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes acrossIn-data-v-b632a18c{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes acrossOut-data-v-b632a18c{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}@keyframes acrossOut-data-v-b632a18c{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}}.qTemplate--photo[data-v-b632a18c]{width:90%;margin:0 auto;padding:60px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.photo__question[data-v-b632a18c]{font-size:1.6em}.photo__img--right[data-v-b632a18c]{max-width:100%}div.photo[data-v-b632a18c]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}div.question[data-v-b632a18c]{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (min-width:768px){.qTemplate--photo[data-v-b632a18c]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.qTemplate--photo div.question[data-v-b632a18c]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.qTemplate--photo>div[data-v-b632a18c]{width:50%}.qTemplate--photo>div[data-v-b632a18c]:first-of-type{margin-right:30px}}',""])},mbce:function(t,e,a){var i=a("lktj"),n=a("TcQ7"),r=a("NpIQ").f;t.exports=function(t){return function(e){for(var a,s=n(e),o=i(s),f=o.length,p=0,d=[];f>p;)r.call(s,a=o[p++])&&d.push(t?[a,s[a]]:s[a]);return d}}},t6ww:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._b({staticClass:"frame__finish"},"div",t.$attrs,!1),[a("div",[a("img",{staticClass:"finish__icon",attrs:{src:t.icon,alt:t.name}}),a("h1",{staticClass:"finish__header"},[t._v(t._s(t.name))]),a("h3",{staticClass:"finish__subheader"},[t._v(t._s(t.subheader))]),a("div",{staticClass:"finish__table"},[t._l(t.results,function(e){return a("div",{key:e.question,staticClass:"table__question",class:{"answer--proper":e.isProper,"answer--bad":!e.isProper}},[a("span",{key:"1",staticClass:"question"},[a("b",[t._v("Q:")]),t._v(" "+t._s(e.question)+"\n                    ")]),a("span",{key:"2",staticClass:"answer"},[a("b",[t._v("A: ")]),t._v(t._s(e.answer)+"\n                    ")])])}),a("div",{staticClass:"table__points"},[t._v(t._s(t.percent)+"% of good answers")])],2),a("button",{staticClass:"table__btn",on:{click:t.backToQuizes}},[t._v("Back to quizes")])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},t9mJ:function(t,e,a){"use strict";var i=a("gRE1"),n=a.n(i),r=a("H9jd");e.a={name:"QuestionTemplate_RightPhoto",props:{question:{type:Object,required:!0}},data:function(){return{shuffledAnswers:[],properId:0}},mounted:function(){var t=this.question.answears[0];this.shuffledAnswers=this.shuffle(n()(this.question.answears)),this.properId=this.shuffledAnswers.findIndex(function(e){return e===t})},methods:{shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[t[a],t[e]];t[e]=i[0],t[a]=i[1]}return t},picked:function(t){var e=this,a=n()(this.question.answears).findIndex(function(a){return a===e.shuffledAnswers[t]});this.$emit("choose",a)}},components:{cmpAnswer:r.a}}},utp1:function(t,e,a){var i=a("UdYD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("fd26a65e",i,!1,{sourceMap:!1})},wwJw:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qTemplate--photo"},[a("div",{staticClass:"question"},[a("h2",{staticClass:"photo__question"},[t._v(t._s(t.question.text))]),a("div",{staticClass:"answers"},t._l(t.shuffledAnswers,function(e,i){return a("cmp-answer",{key:i,attrs:{answerText:e.toString(),answerNumber:i},on:{choose:function(e){t.picked(i)}}})}))]),a("div",{staticClass:"photo"},[a("img",{staticClass:"photo__img--right",attrs:{src:t.question.photo.url,alt:"question.text"}})])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},yMRW:function(t,e,a){var i=a("VAb8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("3ab01400",i,!1,{sourceMap:!1})}});