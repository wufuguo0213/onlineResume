webpackJsonp([1],{"+BTi":function(t,e){},D5yp:function(t,e){},DSCY:function(t,e){},DmJK:function(t,e,n){"use strict";(function(t){e.a={name:"emleft",data:function(){return{list:[{mynewslist:{showapi_res_body:{newslist:[]}},inx:0},{mynewslist:{showapi_res_body:{newslist:[]}},inx:1},{mynewslist:{showapi_res_body:{newslist:[]}},inx:2},{mynewslist:{showapi_res_body:{newslist:[]}},inx:3},{mynewslist:{showapi_res_body:{newslist:[]}},inx:4}],nowtime:""}},methods:{callmove:function(t,e,n){this.send(t,e,n)},send:function(e,n,s){var a=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:a.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:e,num:s,page:"1"},error:function(t,e,n){alert("操作失败!")},success:function(t){a.list[n].mynewslist=t}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.callmove(40,0,20),this.callmove(33,1,20),this.callmove(31,2,20),this.callmove(14,3,20),this.callmove(12,4,32)}}}).call(e,n("7t+N"))},Dte2:function(t,e){},G9GG:function(t,e){},GcQg:function(t,e){},InB3:function(t,e,n){t.exports=n.p+"static/img/vx.a9798bd.jpg"},Iun5:function(t,e){},IxJZ:function(t,e){},MWLJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Iun5"),n("+BTi");var s=n("ttjG"),a=n.n(s),i=(n("vBcO"),n("ARSI")),o=n.n(i),c=(n("hXTu"),n("y7os")),r=n.n(c),l=(n("IxJZ"),n("NoPp")),u=n.n(l),p=(n("DSCY"),n("LaeV")),d=n.n(p),h=(n("Q6SQ"),n("LQMI")),m=n.n(h),w=(n("isE6"),n("LR6y")),_=n.n(w),v=(n("Dte2"),n("q4le")),g=n.n(v),f=(n("ylrw"),n("6oiW")),y=n.n(f),D=n("7+uW"),b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var x=n("VU/8")({name:"App"},b,!1,function(t){n("ymcE")},null,null).exports,C=n("/ocq"),S=n("7t+N"),M=n.n(S),k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[t._m(0),t._v(" "),s("div",{staticClass:"headerfirstbtn",on:{click:function(e){return t.changepage(1)}}},[t._v("时事"),1==t.pageflag?s("span",{staticClass:"glyphicon glyphicon-menu-down"}):t._e()]),t._v(" "),s("div",{staticClass:"headersecondbtn",on:{click:function(e){return t.changepage(2)}}},[t._v("娱乐"),2==t.pageflag?s("span",{staticClass:"glyphicon glyphicon-menu-down"}):t._e()]),t._v(" "),s("div",{staticClass:"headerthirdbtn",on:{click:function(e){return t.changepage(3)}}},[t._v("健康"),3==t.pageflag?s("span",{staticClass:"glyphicon glyphicon-menu-down"}):t._e()]),t._v(" "),s("div",{staticClass:"headersearchbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.headerSearchSalue,expression:"headerSearchSalue"}],attrs:{type:"search",placeholder:"搜索新闻...",id:"headersearch"},domProps:{value:t.headerSearchSalue},on:{input:function(e){e.target.composing||(t.headerSearchSalue=e.target.value)}}}),t._v(" "),s("i",{staticClass:"el-icon-close",on:{click:t.headerclear}}),t._v(" "),s("span",{staticClass:"el-icon-search"}),t._v(" "),s("img",{attrs:{src:n("InB3"),alt:"",title:"我的微信公众号"}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logobox not-select"},[e("span",{staticClass:"glyphicon glyphicon-hand-right"}),this._v("asui.club")])}]};var T=n("VU/8")({name:"myheader",data:function(){return{headerSearchSalue:"",pageflag:1}},methods:{headerclear:function(){this.headerSearchSalue=""},changepage:function(t){this.pageflag=t,this.$parent.changePage(t)}}},k,!1,function(t){n("Yi7F"),n("MWLJ")},"data-v-5493310c",null).exports,I={name:"myswipe",data:function(){return{mynewslist:{showapi_res_body:{newslist:[]}},nowtime:""}},methods:{change:function(t){for(var e=document.querySelector(".txtul").children,n=0;n<e.length;n++)e[n].classList.remove("licurrent");e[t].classList.add("licurrent")},setactive:function(t){this.setActiveItem(t)},setActiveItem:function(t){this.$refs.carouserl.setActiveItem(t)},send:function(){var t=this;M.a.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:t.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"8",num:"10",page:"1"},error:function(t,e,n){alert("操作失败!")},success:function(e){t.mynewslist=e}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send()}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block",on:{click:function(e){return t.send()}}},[n("el-carousel",{ref:"carouserl",attrs:{trigger:"click",height:"582px",direction:"vertical","indicator-position":"none",interval:5e3},on:{change:function(e){t.change(e)}}},t._l(t.mynewslist.showapi_res_body.newslist,function(t,e){return n("el-carousel-item",{key:e,staticClass:"txt"},[n("img",{attrs:{src:t.picUrl,alt:""}})])}),1),t._v(" "),n("ul",{staticClass:"txtul"},t._l(t.mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s,on:{click:function(e){return t.setactive(s)}}},[t._v(t._s(e.title))])}),0)],1)])},staticRenderFns:[]};var H=n("VU/8")(I,j,!1,function(t){n("fSSi")},"data-v-2db7eed6",null).exports,U=n("Z8su"),F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newsbox"},[n("div",{staticClass:"titlebox"},[t._v("要闻")]),t._v(" "),n("div",{staticClass:"detailbox"},[n("div",{staticClass:"inland"},[n("div",{staticClass:"toptitle"},[n("div",[t._v("国内新闻")]),t._v(" "),n("span",{on:{click:t.inlandreflash}},[n("i",{staticClass:"el-icon-refresh"}),t._v("换一换")])]),t._v(" "),n("ul",t._l(t.mynewslist1.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),n("div",{staticClass:"military"},[n("div",{staticClass:"toptitle"},[n("div",[t._v("军事新闻")]),t._v(" "),n("span",{on:{click:t.militaryreflash}},[n("i",{staticClass:"el-icon-refresh"}),t._v("换一换")])]),t._v(" "),n("ul",t._l(t.mynewslist2.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),n("div",{staticClass:"social"},[n("div",{staticClass:"toptitle"},[n("div",[t._v("社会新闻")]),t._v(" "),n("span",{on:{click:t.socialreflash}},[n("i",{staticClass:"el-icon-refresh"}),t._v("换一换")])]),t._v(" "),n("ul",t._l(t.mynewslist3.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])}),0)])])])},staticRenderFns:[]};var E=function(t){n("py9S")},V=n("VU/8")(U.a,F,!1,E,"data-v-1d6ff9c5",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottombox"},[n("div",{staticClass:"aboutme"},[n("span",[t._v("关于我")]),t._v(" "),n("ul",[n("li",[n("a",{staticClass:"callme",attrs:{href:"https://mail.qq.com/"}},[t._v("联系方式：wufuguo0213@qq.com")])]),t._v(" "),n("li",[t._v("年龄：21")]),t._v(" "),n("li",[t._v("求职意向：web前端")]),t._v(" "),n("li",[t._v("毕业年限：2021")])])]),t._v(" "),n("div",{staticClass:"myskill"},[n("span",[t._v("我的技能")]),t._v(" "),n("ul",[n("li",[t._v("HTML+CSS+DIV")]),t._v(" "),n("li",[t._v("VUE")]),t._v(" "),n("li",[t._v("JQuery")]),t._v(" "),n("li",[t._v("JavaScript")])])]),t._v(" "),n("div",{staticClass:"more"},[n("span",[t._v("更多")]),t._v(" "),n("ul",[n("li",[t._v("ToDoList")]),t._v(" "),n("li",[t._v("仿京东webapp")]),t._v(" "),n("li",[t._v("my-email")]),t._v(" "),n("li",[t._v("my-news")])])])])}]};var q=n("VU/8")({name:"mybottom",data:function(){return{}}},$,!1,function(t){n("VMz2")},"data-v-f0539b7c",null).exports,A=n("vqxo"),L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigbox"},[n("div",{staticClass:"newscardbox"},[n("div",{staticClass:"toptitlebox",on:{click:function(e){return t.send()}}},[t._v("今日中国")]),t._v(" "),n("ul",t._l(t.mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("span",[n("i",{staticClass:"el-icon-alarm-clock"}),t._v(t._s(e.ctime))]),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("img",{attrs:{src:e.picUrl,alt:""}}),t._v(" "),n("a",{attrs:{href:""}})])}),0)])])},staticRenderFns:[]};var R=function(t){n("ykG3")},J=n("VU/8")(A.a,L,!1,R,"data-v-1adce157",null).exports,G={name:"myswipetwo",data:function(){return{mynewslist:{showapi_res_body:{newslist:[]}},nowtime:""}},methods:{change:function(t){for(var e=document.querySelector(".txtul").children,n=0;n<e.length;n++)e[n].classList.remove("licurrent");e[t].classList.add("licurrent")},setactive:function(t){this.setActiveItem(t)},setActiveItem:function(t){this.$refs.carouserl.setActiveItem(t)},send:function(){var t=this;M.a.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:t.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"10",num:"10",page:"1"},error:function(t,e,n){alert("操作失败!")},success:function(e){t.mynewslist=e}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send()}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block",on:{click:function(e){return t.send()}}},[n("el-carousel",{ref:"carouserl",attrs:{trigger:"click",height:"582px",direction:"vertical","indicator-position":"none",interval:5e3},on:{change:function(e){t.change(e)}}},t._l(t.mynewslist.showapi_res_body.newslist,function(t,e){return n("el-carousel-item",{key:e,staticClass:"txt"},[n("img",{attrs:{src:t.picUrl,alt:""}})])}),1),t._v(" "),n("ul",{staticClass:"txtul",staticStyle:{right:"200px",width:"230px"}},t._l(t.mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s,on:{click:function(e){return t.setactive(s)}}},[t._v(t._s(e.title))])}),0)],1)])},staticRenderFns:[]};var Q=n("VU/8")(G,Y,!1,function(t){n("qI/6")},"data-v-5ac6c536",null).exports,N=n("DmJK"),B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"embigbox"},[n("div",{staticClass:"leftbox"},[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"影视"}},[n("ul",{staticClass:"moveul"},t._l(t.list[0].mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.picUrl,alt:"",onerror:"this.src='http://bpic.588ku.com/element_origin_min_pic/01/37/85/11573c64bf22f10.jpg'"}}),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("span",[n("span",[t._v(t._s(e.ctime))]),t._v(" "),n("i",{staticClass:"glyphicon glyphicon-share"})]),t._v(" "),n("a",{attrs:{href:e.url}})])}),0)]),t._v(" "),n("el-tab-pane",{attrs:{label:"动漫"}},[n("ul",{staticClass:"moveul"},t._l(t.list[1].mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.picUrl,alt:"",onerror:"this.src='http://bpic.588ku.com/element_origin_min_pic/01/37/85/11573c64bf22f10.jpg'"}}),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("span",[n("span",[t._v(t._s(e.ctime))]),t._v(" "),n("i",{staticClass:"glyphicon glyphicon-share"})]),t._v(" "),n("a",{attrs:{href:e.url}})])}),0)]),t._v(" "),n("el-tab-pane",{attrs:{label:"游戏"}},[n("ul",{staticClass:"moveul"},t._l(t.list[2].mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.picUrl,alt:"",onerror:"this.src='http://bpic.588ku.com/element_origin_min_pic/01/37/85/11573c64bf22f10.jpg'"}}),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("span",[n("span",[t._v(t._s(e.ctime))]),t._v(" "),n("i",{staticClass:"glyphicon glyphicon-share"})]),t._v(" "),n("a",{attrs:{href:e.url}})])}),0)]),t._v(" "),n("el-tab-pane",{attrs:{label:"奇闻"}},[n("ul",{staticClass:"moveul"},t._l(t.list[3].mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.picUrl,alt:"",onerror:"this.src='http://bpic.588ku.com/element_origin_min_pic/01/37/85/11573c64bf22f10.jpg'"}}),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("span",[n("span",[t._v(t._s(e.ctime))]),t._v(" "),n("i",{staticClass:"glyphicon glyphicon-share"})]),t._v(" "),n("a",{attrs:{href:e.url}})])}),0)])],1)],1),t._v(" "),n("div",{staticClass:"rightbox"},[n("div",{staticClass:"titlebox",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.callmove(12,4,32)}}},[t._v("体育新闻")]),t._v(" "),n("ul",t._l(t.list[4].mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.picUrl,alt:""}}),t._v(" "),n("div",[t._v(t._s(e.title))]),t._v(" "),n("span",[t._v(t._s(e.ctime))]),t._v(" "),n("a",{attrs:{href:e.url}})])}),0)])])},staticRenderFns:[]};var Z=function(t){n("D5yp")},P=n("VU/8")(N.a,B,!1,Z,"data-v-25151a39",null).exports,W=n("xcDV"),K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigbox"},[n("el-card",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.mynewslist1.showapi_res_body.newslist,stripe:""}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ctime",label:"日期",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"标题",width:"600"}}),t._v(" "),n("el-table-column",{attrs:{prop:"description",label:"标签"}}),t._v(" "),n("el-table-column",{attrs:{prop:"url",label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[n("a",{attrs:{href:e.row.url}},[t._v("查看")])])]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:100},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var O=function(t){n("ZJQU")},z=n("VU/8")(W.a,K,!1,O,"data-v-51697a02",null).exports,X={name:"myswipethree",data:function(){return{mynewslist:{showapi_res_body:{newslist:[]}},nowtime:""}},methods:{change:function(t){for(var e=document.querySelector(".txtul").children,n=0;n<e.length;n++)e[n].classList.remove("licurrent");e[t].classList.add("licurrent")},setactive:function(t){this.setActiveItem(t)},setActiveItem:function(t){this.$refs.carouserl.setActiveItem(t)},send:function(){var t=this;M.a.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:t.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"17",num:"10",page:"1"},error:function(t,e,n){alert("操作失败!")},success:function(e){t.mynewslist=e}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send()}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block"},[n("el-carousel",{ref:"carouserl",attrs:{trigger:"click",height:"582px",direction:"vertical","indicator-position":"none",interval:5e3},on:{change:function(e){t.change(e)}}},t._l(t.mynewslist.showapi_res_body.newslist,function(t,e){return n("el-carousel-item",{key:e,staticClass:"txt"},[n("img",{attrs:{src:t.picUrl,alt:""}})])}),1),t._v(" "),n("ul",{staticClass:"txtul",staticStyle:{right:"200px",width:"230px"}},t._l(t.mynewslist.showapi_res_body.newslist,function(e,s){return n("li",{key:s,on:{click:function(e){return t.setactive(s)}}},[t._v(t._s(e.title))])}),0)],1)])},staticRenderFns:[]};var et=n("VU/8")(X,tt,!1,function(t){n("G9GG")},"data-v-6cae94e9",null).exports,nt={name:"index",components:{myheader:T,myswipe:H,mynewsinland:V,mybottom:q,mynewscard:J,myswipetwo:Q,emleft:P,myhealth:z,myswipethree:et},data:function(){return{pageflag:1}},methods:{changePage:function(t){this.pageflag=t}},beforeCreate:function(){document.querySelector("body").setAttribute("style","background-color:#f5f5f5")},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1==t.pageflag?n("div",[n("myheader"),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"swipebox"},[n("myswipe")],1),t._v(" "),n("div",{staticClass:"newsinland"},[n("mynewsinland")],1),t._v(" "),n("div",{staticClass:"newscardbox"},[n("mynewscard")],1)]),t._v(" "),n("div",{staticClass:"bottombox"},[n("mybottom")],1)],1):t._e(),t._v(" "),2==t.pageflag?n("div",[n("myheader"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"swipebox",staticStyle:{"margin-top":"30px"}},[n("myswipetwo")],1),t._v(" "),n("div",{staticClass:"leftbox"},[n("emleft")],1)]),t._v(" "),n("div",{staticClass:"bottombox"},[n("mybottom")],1)],1):t._e(),t._v(" "),3==t.pageflag?n("div",[n("myheader"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"swipebox",staticStyle:{"margin-top":"30px"}},[n("myswipethree")],1),t._v(" "),n("div",{staticClass:"healthbox"},[n("myhealth")],1)]),t._v(" "),n("div",{staticClass:"bottombox"},[n("mybottom")],1)],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titlebox"},[e("h1",[this._v("头条 · "),e("span",[this._v("这份简历带你从寒冬走向暖春")])])])}]};var at=n("VU/8")(nt,st,!1,function(t){n("GcQg")},"data-v-1d147606",null).exports;D.default.use(C.a);var it=new C.a({routes:[{path:"/",name:"index",component:at},{path:"/myheader",name:"myheader",component:T},{path:"/myswipe",name:"myswipe",component:H},{path:"/mynewsinland",name:"mynewsinland",component:V},{path:"/mybottom",name:"mybottom",component:q},{path:"/mynewscard",name:"mynewscard",component:J},{path:"/myswipetwo",name:"myswipetwo",component:Q},{path:"/emleft",name:"emleft",component:P},{path:"/myhealth",name:"myhealth",component:z},{path:"/myswipethree",name:"myswipethree",component:et}]});n("qb6w"),n("K3J8");D.default.use(a.a).use(o.a).use(r.a).use(u.a).use(d.a).use(m.a).use(_.a).use(g.a).use(y.a),D.default.config.productionTip=!1,new D.default({el:"#app",router:it,components:{App:x},template:"<App/>"})},Q6SQ:function(t,e){},VMz2:function(t,e){},Yi7F:function(t,e){},Z8su:function(t,e,n){"use strict";(function(t){e.a={name:"mynewsinland",data:function(){return{mynewslist1:{showapi_res_body:{newslist:[]}},mynewslist2:{showapi_res_body:{newslist:[]}},mynewslist3:{showapi_res_body:{newslist:[]}},nowtime:"",page1:1,page2:1,page3:1}},methods:{inlandreflash:function(){this.page3++,this.send()},militaryreflash:function(){this.page1++,this.send1()},socialreflash:function(){this.page2++,this.send2()},send:function(){var e=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:e.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"7",num:"6",page:e.page3},error:function(t,e,n){alert("操作失败!")},success:function(t){e.mynewslist1=t}})},send2:function(){var e=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:e.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"5",num:"6",page:e.page2},error:function(t,e,n){alert("操作失败!")},success:function(t){e.mynewslist3=t}})},send1:function(){var e=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:e.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"27",num:"6",page:e.page1},error:function(t,e,n){alert("操作失败!")},success:function(t){e.mynewslist2=t}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send(),this.send1(),this.send2()}}}).call(e,n("7t+N"))},ZJQU:function(t,e){},fSSi:function(t,e){},hXTu:function(t,e){},isE6:function(t,e){},py9S:function(t,e){},"qI/6":function(t,e){},qb6w:function(t,e){},vBcO:function(t,e){},vqxo:function(t,e,n){"use strict";(function(t){e.a={name:"mynewscard",data:function(){return{mynewslist:{showapi_res_body:{newslist:[]}},nowtime:""}},methods:{send:function(){var e=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:e.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"11",num:"15",page:"1"},error:function(t,e,n){alert("操作失败!")},success:function(t){e.mynewslist=t}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send()}}}).call(e,n("7t+N"))},xcDV:function(t,e,n){"use strict";(function(t){e.a={name:"myswipethree",data:function(){return{nowtime:"",mynewslist1:{showapi_res_body:{newslist:[]}}}},methods:{handleCurrentChange:function(t){this.send(t)},send:function(e){var n=this;t.ajax({type:"post",url:"http://route.showapi.com/1824-1",dataType:"json",data:{showapi_timestamp:n.nowtime,showapi_appid:"150928",showapi_sign:"32e8661789ac4368b2ca4de91f08fc58",col:"18",num:"15",page:e},error:function(t,e,n){alert("操作失败!")},success:function(t){n.mynewslist1=t}})},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1<10?parseInt("0"+(new Date).getMonth())+1:(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),s=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),a=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),i=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowtime=t.toString()+e+n+s+a+i}},created:function(){this.getTime(),this.send(1)}}}).call(e,n("7t+N"))},ykG3:function(t,e){},ylrw:function(t,e){},ymcE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e6c6c71ae8ab3ebf498.js.map