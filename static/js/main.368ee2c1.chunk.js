(this.webpackJsonprunner=this.webpackJsonprunner||[]).push([[0],{198:function(t,e,a){t.exports=a(487)},203:function(t,e,a){},481:function(t,e,a){},482:function(t,e,a){},487:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),s=a(194),i=a.n(s),c=(a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(91),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(248),a(249),a(251),a(252),a(254),a(255),a(128),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(179),a(326),a(327),a(181),a(328),a(329),a(330),a(331),a(182),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(350),a(351),a(352),a(353),a(354),a(355),a(356),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(381),a(382),a(136),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(400),a(401),a(402),a(403),a(404),a(405),a(406),a(407),a(408),a(409),a(410),a(411),a(412),a(413),a(414),a(415),a(416),a(417),a(418),a(419),a(420),a(421),a(422),a(423),a(424),a(426),a(427),a(428),a(429),a(430),a(431),a(432),a(433),a(434),a(435),a(436),a(437),a(438),a(439),a(440),a(441),a(442),a(443),a(444),a(445),a(446),a(447),a(448),a(449),a(450),a(451),a(452),a(453),a(454),a(455),a(456),a(457),a(459),a(460),a(461),a(462),a(463),a(464),a(465),a(466),a(467),a(468),a(469),a(470),a(471),a(472),a(473),a(474),a(476),a(192),a(33)),o=a(34),u=a(36),l=a(35),p=a(37),d=window.location.origin.startsWith("http://localhost:")?"http://localhost:3000":"https://api.freecomics.ml";function h(t){return unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+t+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))}a(477);var m=a(140),v=a(86),f=a(56),b=a(63),y=a.n(b),g=a(51),k=a.n(g),O=a(66),j=a(54),E=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={strips:{Select:""}},a.findStrips(),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("select",{className:"comic-choice",onChange:function(e){return t.props.updateValue(Object(f.a)({name:e.target.value},t.state.strips[e.target.value]))}},Object.keys(this.state.strips).sort((function(t,e){return e>t})).map((function(t){return n.a.createElement("option",{key:t,value:t},t)})))}},{key:"findStrips",value:function(){var t=Object(O.a)(k.a.mark((function t(){var e,a,r,n,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/api/").concat("v1","/ids"));case 2:return e=t.sent,t.next=5,e.json();case 5:for(e=t.sent,a={Select:[null,null]},r=function(){var t=s[n],r=e[t];console.log(r);var i=r.reduce((function(e,a){return Object(f.a)({},e,Object(j.a)({},a,{id:a,provider:t}))}),{});a=Object(f.a)({},a,{},i)},n=0,s=Object.keys(e);n<s.length;n++)r();console.log(a),this.setState({strips:a});case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}(r.Component),x=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={date:a.props.date||"",strips:{},shown:!0,id:a.props.id,name:void 0,provider:a.props.provider},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.state.id&&this.findUrl(this.state.date)}},{key:"componentDidUpdate",value:function(){this.findUrl()}},{key:"render",value:function(){var t=this;console.log("render");var e=this.state.strips[this.state.date]||{};return""!==this.state.date&&this.state.id?e.url?n.a.createElement("div",{className:"comic-container"},n.a.createElement("h2",null,this.state.name),n.a.createElement("p",null,this.state.date),n.a.createElement("span",{role:"img","aria-label":"Delete",onClick:this.props.remove},"\u274c"),n.a.createElement("div",{className:"comic"},n.a.createElement("link",{ref:"previous",rel:"preload",as:"image",href:(this.state.strips[e.previous]||{}).url}),n.a.createElement("img",{ref:"this",alt:this.state.name||this.state.id+" comic strip",src:e.url,onClick:function(){return t.props.setDate(e.previous)}}),n.a.createElement("link",{ref:"next",rel:"preload",as:"image",href:(this.state.strips[e.next]||{}).url}),n.a.createElement("div",{className:"overlay"},n.a.createElement("input",{type:"button",onClick:function(){return t.props.setDate(e.previous)},value:"",className:"arrow"}),n.a.createElement("input",{type:"button",onClick:function(){return t.props.setDate(e.next)},value:"",className:"arrow"})))):null:n.a.createElement("div",{className:"input-container"},n.a.createElement(E,{updateValue:function(e){console.log("updateValue",e),t.props.updateVals({id:e.id,name:e.name,provider:e.provider})}}))}},{key:"findUrl",value:function(){var t=Object(O.a)(k.a.mark((function t(e){var a,r,n,s,i,c,o,u,l,p,h=this;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.id&&this.state.provider){t.next=2;break}return t.abrupt("return");case 2:if(this.state.id&&this.state.provider&&!this.state.name&&fetch("".concat(d,"/api/").concat("v1","/").concat(this.state.provider,"/").concat(this.state.id)).then((function(t){return t.json()})).then((function(t){return h.setState({name:t.name})})),e=e||this.state.date,r={},Object.keys(this.state.strips).includes(e)){t.next=17;break}return n=this.getUrl(e),t.next=9,fetch(n);case 9:return s=t.sent,t.next=12,s.json();case 12:(s=t.sent)&&!s.error||console.log(n,"failed"),a=s,t.next=18;break;case 17:a=this.state.strips[e];case 18:r[e]=a,this.state.date!==e&&this.setState({date:e,strips:r}),i=0,c=["previous","next"];case 21:if(!(i<c.length)){t.next=44;break}if(o=c[i],this.state.strips[a[o]]||!a[o]||""===a[o]){t.next=40;break}return u=this.getUrl(a[o]),t.next=27,fetch(u);case 27:return l=t.sent,t.prev=28,t.next=31,l.json();case 31:l=t.sent,t.next=37;break;case 34:return t.prev=34,t.t0=t.catch(28),t.abrupt("continue",41);case 37:r[a[o]]=l,t.next=41;break;case 40:r[a[o]]=this.state.strips[a[o]];case 41:i++,t.next=21;break;case 44:p=Object.keys(this.state.strips),Object.keys(r).filter((function(t){return!p.includes(t)})).length>0&&this.setState({strips:r});case 46:case"end":return t.stop()}}),t,this,[[28,34]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getUrl",value:function(t){return"".concat(d,"/api/").concat("v1","/").concat(this.state.provider,"/").concat(this.state.id,"/").concat(t)}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.date!==e.date?{date:t.date}:null}}]),e}(r.Component),w=function(t){function e(t){var a;Object(c.a)(this,e),a=Object(u.a)(this,Object(l.a)(e).call(this,t));var r=new URLSearchParams(window.location.search);a.url=r,a.state={date:["year","month","day"].reduce((function(t,e){return t||!r.get(e)}),!1)?new Date:new Date(r.get("year"),r.get("month")-1,r.get("day")),comics:[]};var n=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.reduce((function(t,e){return t.slice(0,e.length).map((function(t,a){return[t,e[a]]}))}))},s=n(r.getAll("comic"),r.getAll("provider"));s=(s=s.length>0?s:n(JSON.parse(h("comic")||"[]"),JSON.parse(h("provider")||"[]"))).length>0?s.map((function(t){return{id:t[0],provider:t[1]}})):[{provider:"gocomics",id:"pearlsbeforeswine"},{provider:"dilbert",id:"dilbert"},{provider:"gocomics",id:"dilbert-classics"},{provider:"xkcd",id:"xkcd"},{provider:"smbc",id:"smbc"},{provider:"comicskingdom",id:"sherman-s-lagoon"},{provider:"comicskingdom",id:"dustin"},{provider:"comicskingdom",id:"rhymes-with-orange"},{provider:"gocomics",id:"lio"},{provider:"gocomics",id:"calvinandhobbes"},{provider:"gocomics",id:"foxtrot"},{provider:"gocomics",id:"garfield"}],a.state.comics=s;var i=y()(a.state.date).format("YYYY/M/D");document.title=y()(a.state.date).format("MMMM D[, ]YYYY");var o=a.state.comics.map((function(t){return Object(f.a)({},t,{date:i})}));return a.state.comics=o,"true"==r.get("sync")&&a.setURL(a.state.comics,a.state.date,!0),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"navBar"},n.a.createElement("button",{onClick:function(){return t.addDays(-1)},className:"changeDate"},"<"),n.a.createElement("h1",{className:"title"},"Cartoon Curator"),n.a.createElement("button",{onClick:function(){return t.addDays(1)},className:"changeDate next"},">")),n.a.createElement("div",{className:"body"},this.state.comics.map((function(e,a){return n.a.createElement(x,{updateVals:function(e){return t.updateValue(a,e)},remove:function(){return t.popComic(a)},setDate:function(e){return t.setDate(a,e)},key:e.id,date:e.date,id:e.id,provider:e.provider})})),n.a.createElement("div",{className:"input-container"},n.a.createElement("input",{type:"button",onClick:function(){return t.addComic()},className:"plus",value:"+"}))))}},{key:"addComic",value:function(){this.setState({comics:[].concat(Object(v.a)(this.state.comics),[{id:"",name:"",date:y()(this.state.date).format("YYYY/M/D")}])})}},{key:"updateValue",value:function(t,e){var a=Object(v.a)(this.state.comics);a[t]=Object.assign({},a[t],e),this.setURL(a),this.setState({comics:a})}},{key:"setDate",value:function(t,e){var a=Object(v.a)(this.state.comics),r=Object(f.a)({},a[t]);r.date=e,a[t]=r,this.setState({comics:a})}},{key:"popComic",value:function(t){var e=Object(v.a)(this.state.comics),a=e.splice(t,1);return this.setState({comics:e}),this.setURL(e),a}},{key:"addDays",value:function(t){var e=new Date(this.state.date);e.setDate(this.state.date.getDate()+t),this.applyDate(e)}},{key:"applyDate",value:function(t){var e=y()(t).format("YYYY/M/D"),a=this.state.comics.map((function(t){return Object(f.a)({},t,{date:e})}));this.setURL(void 0,e),this.setState({date:t,comics:a})}},{key:"setURL",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.date,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=y()(a);if(t){if(this.url.delete("comic"),this.url.delete("provider"),r){var s=!0,i=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(s=(o=u.next()).done);s=!0){var l=o.value;this.url.append("comic",l.id),this.url.append("provider",l.provider)}}catch(d){i=!0,c=d}finally{try{s||null==u.return||u.return()}finally{if(i)throw c}}}[["id","comic"],["provider","provider"]].forEach((function(e){var a=Object(m.a)(e,2),r=a[0],n=a[1];document.cookie=n+"="+escape(JSON.stringify(t.map((function(t){return t[r]}))))}))}if(a){var p=[["year","YYYY"],["month","M"],["day","D"]];p.forEach((function(t){var a=Object(m.a)(t,2),r=a[0],s=a[1],i=n.format(s);e.url.set(r,i),document.cookie="".concat(r,"=").concat(i)}))}window.history.pushState(a,y()(a).format("MMMM D[,] YYYY"),"?"+this.url.toString())}}]),e}(r.Component),S=(a(481),a(482),a(139)),C=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={currJson:Object(j.a)({id:"",name:"","series-ids":["YYYY-MM-DD"],"date-scrape":[],"extremes-scrape":{first:[],last:[]},"get-name":[],"src-to-url":"${src}","list-names":[]},"series-ids",[]),password:"",output:{},apiUrl:d+"/api/v1/"};var r=new URLSearchParams(window.location.search).get("edit");return r&&fetch(d+"/api/v1/"+r).then((function(t){return t.text()})).then((function(t){return a.setState({currJson:JSON.parse(t.replaceAll("\\\\","\\\\\\\\"))})})),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"copyToClipboard",value:function(){navigator.clipboard.writeText(JSON.stringify(this.state.currJson,null))}},{key:"render",value:function(){var t=this,e={style:{outerBox:{flexGrow:"1",height:"100%"},container:{width:"100%",height:"100%"}},theme:"light_mitsuketa_tribute"};return n.a.createElement("div",{className:"Editor"},"Password: ",n.a.createElement("input",{type:"password",size:"50",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}}),n.a.createElement("br",null),"API URL: ",n.a.createElement("input",{type:"text",size:"50",value:this.state.apiUrl,onChange:function(e){return t.setState({apiUrl:e.target.value})}}),n.a.createElement("br",null),"Query Path: ",n.a.createElement("input",{type:"text",size:"50",value:this.state.query,onChange:function(e){return t.setState({query:e.target.value})}}),n.a.createElement("input",{type:"button",value:"Test",onClick:function(){return t.runJSON()}}),n.a.createElement("br",null),n.a.createElement("input",{type:"button",value:"Copy to Clipboard",onClick:function(){return t.copyToClipboard()}}),n.a.createElement("div",{className:"textarea-holder"},n.a.createElement(S.a,Object.assign({placeholder:this.state.currJson,onChange:function(e){t.state.tempJson=e.jsObject}},e)),n.a.createElement("img",{className:"sample-image",src:this.state.output.url,style:{maxWidth:"49vw",height:"auto"}}),n.a.createElement(S.a,Object.assign({readOnly:!0,placeholder:this.state.output},e)),">"),n.a.createElement("br",null))}},{key:"runJSON",value:function(){var t=Object(O.a)(k.a.mark((function t(){var e,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.state.tempJson||this.state.currJson,this.setState({currJson:e}),t.next=5,fetch(this.state.apiUrl+"provider",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({json:e,password:this.state.password})});case 5:return t.next=7,t.sent.json();case 7:return t.sent,t.next=10,fetch(this.state.apiUrl+this.state.query);case 10:return t.next=12,t.sent.json();case 12:a=t.sent,this.setState({output:a||{}}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),alert(t.t0.message);case 19:case"end":return t.stop()}}),t,this,[[0,16]])})));return function(){return t.apply(this,arguments)}}()}]),e}(n.a.Component),D=a(195),Y=a(55),N=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement(D.a,null,n.a.createElement(Y.c,null,n.a.createElement(Y.a,{path:"/editor"},n.a.createElement(C,null)),n.a.createElement(Y.a,{path:"/"},n.a.createElement(w,null))))}}]),e}(r.Component);i.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.368ee2c1.chunk.js.map