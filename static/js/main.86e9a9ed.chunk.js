(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{11:function(e,t,n){"use strict";var a="https://api.themoviedb.org/3/",r="47c5e2821f3a4c28ab9cc01b4b88ce6d";t.a={BASE_IMG_URL:"https://image.tmdb.org/t/p/w200",fetchSearch:function(e){return fetch("".concat(a,"search/movie?api_key=").concat(r,"&query=").concat(e)).then((function(e){return e.json().then((function(e){return e.results}))}))},fetchTrend:function(){return fetch("".concat(a,"trending/movie/day?api_key=").concat(r)).then((function(e){return e.json().then((function(e){return e.results}))}))},fetchDetails:function(e){return fetch("".concat(a,"movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.json()}))},fetchActors:function(e){return fetch("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()}))},fetchReviews:function(e){return fetch("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()}))}}},17:function(e,t,n){e.exports={container:"Movie_container__1Ys1f",description:"Movie_description__3bYDl",img:"Movie_img__19aux"}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(7),r=n(8),c=n(10),o=n(9),i=n(0),l=n.n(i),u=n(16),s=n.n(u),m=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(s.a,{type:"Circles",color:"#00BFFF",height:80,width:80})}}]),n}(i.Component)},29:function(e,t,n){e.exports=n(72)},34:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),i=n(5),l=(n(34),n(3)),u="/",s="/movies",m="/movies/:movId",h="/cast",p="/reviews",f=function(){return r.a.createElement("ul",{className:"Navigation-list"},r.a.createElement("li",null,r.a.createElement(i.c,{exact:!0,to:u,className:"Navigation-link",activeClassName:"Navigation-link-active"},"Home")),r.a.createElement("li",null,r.a.createElement(i.c,{to:s,className:"Navigation-link",activeClassName:"Navigation-link-active"},"Movies")))},v=function(){return r.a.createElement("header",null,r.a.createElement(f,null))},E=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("hr",null),t)},d=n(7),g=n(8),y=n(10),b=n(9),j=n(11),k=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],loading:!1,error:null},e.fetchMovie=function(){e.setState({loading:!0}),j.a.fetchTrend().then((function(t){return e.setState({movies:t})})).catch((function(t){return e.setState({error:t})})).finally(e.setState({loading:!1}))},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this,t=this.state.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Trending today"),t.length>0&&r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(i.c,{to:{pathname:"movies/".concat(t.id),state:{from:e.props.location}}},t.title))}))))}}]),n}(a.Component),O=n(21),S=n(28),_=n.n(S);function w(e){return _.a.parse(e)}var C=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search"))}}]),n}(a.Component),M=n(25),N=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],loading:!1,error:null},e.fetchMovie=function(t){e.setState({loading:!0}),j.a.fetchSearch(t).then((function(t){return e.setState({movies:t})})).catch((function(t){return e.setState({error:t})})).finally(e.setState({loading:!1}))},e.handleChangeQuery=function(t){e.props.history.push(Object(O.a)(Object(O.a)({},e.props.location),{},{search:"query=".concat(t)}))},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=w(this.props.location.search).query;e&&this.fetchMovie(e)}},{key:"componentDidUpdate",value:function(e,t){var n=w(e.location.search).query,a=w(this.props.location.search).query;n!==a&&this.fetchMovie(a)}},{key:"render",value:function(){var e=this,t=this.state,n=t.movies,a=t.loading,c=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{onSubmit:this.handleChangeQuery}),a&&r.a.createElement(M.a,null),n.length>0&&r.a.createElement("ul",null,n.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(i.c,{to:{pathname:"".concat(c.url,"/").concat(t.id),state:{from:e.props.location}}},t.title))}))))}}]),n}(a.Component),A=n(16),x=n.n(A),D=n(1),B=n.n(D),F=n(17),G=n.n(F),q=function(e){var t=e.movie,n=e.genres;return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{className:G.a.img,src:"".concat(j.a.BASE_IMG_URL).concat(t.poster_path),alt:t.title}),r.a.createElement("div",{className:G.a.description},r.a.createElement("h1",null,t.title),r.a.createElement("h3",null,"Genres"),r.a.createElement("p",null,n),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,t.overview)))},I=q;q.propType={movie:B.a.object,genres:B.a.string};var R=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,73))})),T=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,74))})),z=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:null,genres:[],loading:!1,error:null},e.handleGoBack=function(){var t=e.props.location.state;if(t&&t.from)return e.props.history.push(t.from);e.props.history.push(s)},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movId;j.a.fetchDetails(t).then((function(t){return e.setState({movie:t,genres:t.genres})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.match,t=this.props.location.state,n=this.state.movie,c=t&&t.from?t.from:u;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"Go back"),r.a.createElement("br",null),this.state.error&&r.a.createElement("p",null,"Error:",this.state.error),n&&r.a.createElement(I,{movie:n,genres:this.state.genres.map((function(e){return e.name})).toString()}),r.a.createElement("h3",null,"Additional"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.c,{to:{pathname:e.url+h,state:{from:c}}},"Cast")),r.a.createElement("li",null,r.a.createElement(i.c,{to:{pathname:e.url+p,state:{from:c}}},"Reviews"))),r.a.createElement(a.Suspense,{fallback:r.a.createElement(x.a,null)},r.a.createElement(l.a,{path:"".concat(e.path).concat(h),component:R}),r.a.createElement(l.a,{path:"".concat(e.path).concat(p),component:T})))}}]),n}(a.Component),U={container:{textAlign:"center"},status:{fontSize:100,marginBottom:20}},J=function(){return r.a.createElement("div",{style:U.container},r.a.createElement("h1",{style:U.status},"404"),r.a.createElement("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430! \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043c\u043e\u0436\u043d\u043e \u043f\u043e"," ",r.a.createElement(i.b,{to:u},"\u0441\u0441\u044b\u043b\u043a\u0435"),"."))},L=(n(71),function(){return r.a.createElement(E,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:u,exact:!0,component:k}),r.a.createElement(l.a,{path:s,exact:!0,component:N}),r.a.createElement(l.a,{path:m,component:z}),r.a.createElement(l.a,{component:J})))});o.a.render(r.a.createElement(i.a,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[29,3,4]]]);
//# sourceMappingURL=main.86e9a9ed.chunk.js.map