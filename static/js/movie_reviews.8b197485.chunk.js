(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(7),r=n(8),c=n(10),l=n(9),i=n(0),u=n.n(i),s=n(11),o=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movId;s.a.fetchReviews(t).then((function(t){return e.setState({reviews:t.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return e.length>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Reviews"),u.a.createElement("ul",null,e.map((function(e){return u.a.createElement("li",{key:e.id},u.a.createElement("h5",null,e.author),u.a.createElement("p",null,e.content))})))):u.a.createElement("p",null,"There are no reviews...")}}]),n}(i.Component)}}]);
//# sourceMappingURL=movie_reviews.8b197485.chunk.js.map