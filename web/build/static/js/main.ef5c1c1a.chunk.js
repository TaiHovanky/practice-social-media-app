(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{139:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c,s,l,d,u,j,m,b,O,f,g=n(0),h=n.n(g),p=n(20),x=n.n(p),v=n(229),w=n(120),N=n(232),k=n(228),I=n(119),C=(n(139),n(47)),y=n(22),P=n(196),F=n(4),$=n(10),L=n(200),U=n(99),S=n(237),T=n(220),A=n(206),_=n(195),B=n(11),E=n(30),R=n(231),D=n(194),W=n(115),G={},z=Object(R.a)(a||(a=Object(E.a)(["\n    mutation CreateComment($userId: Float!, $postId: Float!, $comment: String!, $createdAt: String!) {\n  createComment(\n    userId: $userId\n    postId: $postId\n    comment: $comment\n    createdAt: $createdAt\n  ) {\n    id\n    content\n    createdAt\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n    likes {\n      user {\n        id\n      }\n    }\n    comments {\n      id\n      comment\n      createdAt\n      likes {\n        id\n        user {\n          id\n        }\n      }\n      user {\n        id\n        firstName\n        lastName\n        email\n      }\n      post {\n        id\n      }\n    }\n  }\n}\n    "])));var H=Object(R.a)(r||(r=Object(E.a)(["\n    mutation CreatePost($creatorId: Float!, $content: String!) {\n  createPost(creatorId: $creatorId, content: $content) {\n    id\n    content\n    createdAt\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n    likes {\n      user {\n        id\n      }\n    }\n    comments {\n      id\n      comment\n      createdAt\n      likes {\n        id\n        user {\n          id\n        }\n      }\n      user {\n        id\n        firstName\n        lastName\n        email\n      }\n      post {\n        id\n      }\n    }\n  }\n}\n    "])));var q=Object(R.a)(i||(i=Object(E.a)(["\n    mutation DeletePost($postId: Float!) {\n  deletePost(postId: $postId)\n}\n    "])));var M=Object(R.a)(o||(o=Object(E.a)(["\n    mutation FollowUser($userToBeFollowed: Float!, $loggedInUser: Float!, $isAlreadyFollowing: Boolean!) {\n  followUser(\n    userToBeFollowed: $userToBeFollowed\n    loggedInUser: $loggedInUser\n    isAlreadyFollowing: $isAlreadyFollowing\n  ) {\n    id\n    follower {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n    "])));var V=Object(R.a)(c||(c=Object(E.a)(["\n    query GetFollowers($userId: Float!) {\n  getFollowers(userId: $userId) {\n    id\n    follower {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n    "])));var Y=Object(R.a)(s||(s=Object(E.a)(["\n    query GetFollowing($userId: Float!) {\n  getFollowing(userId: $userId) {\n    following {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n    "])));var K=Object(R.a)(l||(l=Object(E.a)(["\n    query GetUserPosts($userId: Float!, $cursor: Float!, $offsetLimit: Float!, $isGettingNewsfeed: Boolean!) {\n  getUserPosts(\n    userId: $userId\n    cursor: $cursor\n    offsetLimit: $offsetLimit\n    isGettingNewsfeed: $isGettingNewsfeed\n  ) {\n    id\n    content\n    createdAt\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n    likes {\n      user {\n        id\n      }\n    }\n    comments {\n      id\n      comment\n      createdAt\n      likes {\n        id\n        user {\n          id\n        }\n      }\n      user {\n        id\n        firstName\n        lastName\n        email\n      }\n      post {\n        id\n      }\n    }\n  }\n}\n    "])));var Q=Object(R.a)(d||(d=Object(E.a)(["\n    query HomePage {\n  homePage {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n    "])));var Z=Object(R.a)(u||(u=Object(E.a)(["\n    mutation LikeComment($userId: Float!, $commentId: Float!, $isAlreadyLiked: Boolean!) {\n  likeComment(\n    userId: $userId\n    commentId: $commentId\n    isAlreadyLiked: $isAlreadyLiked\n  ) {\n    id\n    comment\n    createdAt\n    likes {\n      id\n      user {\n        id\n      }\n    }\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n    post {\n      id\n    }\n  }\n}\n    "])));var J=Object(R.a)(j||(j=Object(E.a)(["\n    mutation LikePost($userId: Float!, $postId: Float!, $isAlreadyLiked: Boolean!) {\n  likePost(userId: $userId, postId: $postId, isAlreadyLiked: $isAlreadyLiked) {\n    id\n    content\n    createdAt\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n    likes {\n      user {\n        id\n      }\n    }\n  }\n}\n    "])));var X=Object(R.a)(m||(m=Object(E.a)(["\n    mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      id\n      email\n      firstName\n      lastName\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    "])));var ee=Object(R.a)(b||(b=Object(E.a)(["\n    mutation Logout {\n  logout\n}\n    "])));var te=Object(R.a)(O||(O=Object(E.a)(["\n    mutation Register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n  register(\n    firstName: $firstName\n    lastName: $lastName\n    email: $email\n    password: $password\n  ) {\n    user {\n      id\n      email\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n    "])));var ne=Object(R.a)(f||(f=Object(E.a)(["\n    query searchUsers($name: String!) {\n  searchUsers(name: $name) {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n    "])));var ae,re=n(124),ie=n(2),oe=Object(P.a)((function(e){return{homePaper:{margin:e.spacing(8),paddingBottom:e.spacing(8),paddingTop:e.spacing(4)},homePageText:{marginTop:e.spacing(4)}}})),ce=function(){var e=oe();return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(re.a,{elevation:3,className:e.homePaper,children:Object(ie.jsxs)(L.a,{maxWidth:"md",children:[Object(ie.jsx)(U.a,{className:e.homePageText,variant:"h3",children:"Welcome to Bloglet"}),Object(ie.jsx)(U.a,{className:e.homePageText,variant:"h5",children:"Share your musings with the world through blog posts"}),Object(ie.jsx)(U.a,{className:e.homePageText,variant:"h5",children:"To get started, register yourself as a user or login with an existing account"})]})})})},se=n(23),le=n(32),de=n(42),ue=Object(le.a)((function e(t,n,a,r){Object(de.a)(this,e),this.id=void 0,this.email=void 0,this.firstName=void 0,this.lastName=void 0,this.id=t,this.email=n,this.firstName=a,this.lastName=r})),je=n(65),me=n(233),be=function(e,t,n,a){var r=Object(se.a)(e),i=0,o={};return r.forEach((function(e,r){("likes"===t&&e.id===n.id||"comments"===t&&a&&e.id===n.post.id||"comments"===t&&!a&&e.id===n.id)&&(i=r,o=Object(B.a)({},e),"likes"===t?o[t]=n.likes:"comments"===t&&a?o[t]=function(e,t){var n=e&&e.comments?Object(se.a)(e.comments):[],a=n.findIndex((function(e){return e.id===t.id}));return n.splice(a,1,t),n}(e,n):"comments"!==t||a||(o[t]=n.comments))})),r.splice(i,1,o),r},Oe=function(e,t){return e.readQuery({query:K,variables:{userId:t}})},fe=function(e){if(e.id)return e.id;if(e.__ref){var t=e.__ref.replace(/[^0-9]/g,"");return t=parseInt(t)}},ge=Object(je.c)(new ue(0,"","","")),he=Object(je.c)(0),pe=Object(je.c)(new ue(0,"","","")),xe=new me.a({typePolicies:{Query:{fields:{currentUserProfile:{read:function(){return ge()}},currentGetUserPostsCursor:{read:function(){return he()}},loggedInUserProfileVar:{read:function(){return pe()}},getUserPosts:{keyArgs:["type","id"],merge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(arguments.length>2?arguments[2]:void 0).args;return e&&e.length&&(n&&n.userId!==ge().id||function(e,t){var n={},a=!1;return e&&e.forEach((function(e){var t=fe(e);n[t]=t})),t&&t.forEach((function(e){var t=fe(e);n[t]===t&&(a=!0)})),a}(e,t))?Object(se.a)(e):e&&e.length?[].concat(Object(se.a)(e),Object(se.a)(t)):t}},getFollowers:{merge:function(){return arguments.length>1?arguments[1]:void 0}},getFollowing:{merge:function(){return arguments.length>1?arguments[1]:void 0}}}},Post:{fields:{likes:{merge:function(e,t){return t}},comments:{merge:function(e,t){return(t?Object(se.a)(t):[]).sort((function(e,t){return e.__ref>t.__ref?1:e.__ref<t.__ref?-1:0}))}}}},Comment:{fields:{likes:{merge:function(e,t){return t}}}}}}),ve=xe,we=n(204),Ne=function(e){var t=e.followers,n=e.loggedInUser,a=e.loading,r=e.handleFollowUser,i=!!t&&!!t.getFollowers&&t.getFollowers.some((function(e){return!(!e||!e.follower)&&e.follower.id===n}));return Object(ie.jsx)(we.a,{variant:i?"contained":"outlined",color:"primary",onClick:function(){return r(i)},disabled:a,children:i?"Following":"Follow"})},ke=n(205),Ie=function(e){var t,n,a=e.followers,r=e.following,i=e.followerLoading;return e.followingLoading||i?Object(ie.jsx)(ie.Fragment,{children:"Loading"}):Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)(ke.a,{container:!0,spacing:2,children:[Object(ie.jsx)(ke.a,{item:!0,xs:3,children:Object(ie.jsxs)(U.a,{variant:"subtitle1",children:["Following: ",r?null===r||void 0===r||null===(t=r.getFollowing)||void 0===t?void 0:t.length:0]})}),Object(ie.jsx)(ke.a,{item:!0,xs:3,children:Object(ie.jsxs)(U.a,{variant:"subtitle1",children:["Followers: ",a?null===a||void 0===a||null===(n=a.getFollowers)||void 0===n?void 0:n.length:0]})})]})})},Ce=function(e){var t=e.loggedInUser,n=e.userToBeFollowed,a=Object(A.a)(ge),r=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return W.b(Y,t)}({variables:{userId:a.id},fetchPolicy:"network-only"}),i=r.data,o=r.loading,c=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return W.b(V,t)}({variables:{userId:a.id},fetchPolicy:"network-only"}),s=c.data,l=c.loading,d=Object(D.a)(M,{update:function(e,n){e.modify({fields:{getFollowers:function(e){var a=e?Object(se.a)(e):[];if(!n.data.followUser){var r=a.findIndex((function(e){return!(!e||!e.follower)&&e.follower.id===t}));a.splice(r,1)}return n.data.followUser?[].concat(Object(se.a)(a),[n.data.followUser]):a}}})}}),u=Object($.a)(d,2),j=u[0],m=u[1].loading;return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ie,{followers:s,following:i,followerLoading:l,followingLoading:o}),Object(ie.jsx)(Ne,{followers:s,loggedInUser:t,loading:m,handleFollowUser:function(e){j({variables:{loggedInUser:t,userToBeFollowed:n,isAlreadyFollowing:e}})}})]})},ye=n(28),Pe=n(44),Fe=n(230),$e=Object(P.a)((function(e){return{newPostPaper:{paddingBottom:e.spacing(4),paddingTop:e.spacing(4)},newPostTextField:{width:"100%"},submitBtn:{marginTop:e.spacing(4)}}})),Le=function(e){var t=$e(),n=Object(g.useState)(""),a=Object($.a)(n,2),r=a[0],i=a[1],o=function(){i("")};return Object(ie.jsx)(re.a,{elevation:3,className:t.newPostPaper,children:Object(ie.jsxs)(L.a,{maxWidth:"md",children:[Object(ie.jsx)(U.a,{variant:"h5",noWrap:!0,children:"Create Post"}),Object(ie.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){return e.handleCreatePost(t,o)},children:[Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,{id:"input-content",label:"What's on your mind?",name:"content",multiline:!0,className:t.newPostTextField,value:r,onChange:function(e){i(e.target.value)}})}),Object(ie.jsx)(we.a,{variant:"contained",color:"primary",type:"submit",className:t.submitBtn,children:"Submit"})]})]})})},Ue=function(){var e=Object(A.a)(pe),t=Object(A.a)(ge),n=Object(A.a)(he),a=Object(D.a)(H,{update:function(e,n){var a=Oe(e,t.id);e.modify({fields:{getUserPosts:function(){return[n.data.createPost].concat(Object(se.a)(a.getUserPosts))}}})}}),r=Object($.a)(a,1)[0],i=function(){var t=Object(Pe.a)(Object(ye.a)().mark((function t(a,i){var o;return Object(ye.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),o=new FormData(a.target),he(n+1),t.next=5,r({variables:{creatorId:e.id,content:o.get("content")}});case 5:i();case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(ie.jsx)(Le,{handleCreatePost:i})},Se=n(217),Te=n(218),Ae=n(209),_e=n(219),Be=n(153),Ee=n(154),Re=n(212),De=n(210),We=n(211),Ge=function(e){var t=e.isAlreadyLiked,n=e.handleLikeButtonClick;return Object(ie.jsx)(Ae.a,{color:"primary",size:"small",onClick:n,children:t?Object(ie.jsx)(De.a,{}):Object(ie.jsx)(We.a,{})})},ze=function(e){var t=e.item,n=e.likeMutation,a=Object(A.a)(pe),r=!(!t||!t.likes)&&t.likes.some((function(e){return e.user&&e.user.id===a.id}));return Object(ie.jsx)(Ge,{isAlreadyLiked:r,handleLikeButtonClick:function(){n(a.id,t.id,r)}})},He=Object(P.a)({root:{minWidth:400},commentCreator:{cursor:"pointer"},inline:{display:"inline"},likes:{marginBottom:4},commentCreatedAt:{display:"block"}}),qe=function(e){var t=e.comments,n=e.likeComment,a=e.handleItemCreatorClick,r=He();return Object(ie.jsx)(Be.a,{className:r.root,children:t.map((function(e,t){return Object(ie.jsx)(Ee.a,{alignItems:"flex-start",id:"comment-".concat(t),children:Object(ie.jsxs)(ke.a,{container:!0,spacing:2,className:r.likes,children:[Object(ie.jsx)(ke.a,{item:!0,xs:10,children:Object(ie.jsx)(Re.a,{secondary:Object(ie.jsxs)(h.a.Fragment,{children:[Object(ie.jsx)("span",{onClick:function(){return a(e.user)},className:r.commentCreator,children:Object(ie.jsx)(U.a,{component:"span",variant:"subtitle2",className:r.inline,color:"textPrimary",children:e&&e.user?"".concat(e.user.firstName," ").concat(e.user.lastName," "):""})}),Object(ie.jsx)(U.a,{component:"span",variant:"body2",className:r.inline,children:e&&e.comment?e.comment:""}),Object(ie.jsx)("span",{className:r.commentCreatedAt,children:Object(ie.jsx)(U.a,{variant:"caption",children:e?e.createdAt:""})})]})})}),Object(ie.jsx)(ke.a,{item:!0,xs:1,children:Object(ie.jsx)(ze,{item:e,likeMutation:n})}),Object(ie.jsx)(ke.a,{item:!0,xs:1,children:Object(ie.jsx)(U.a,{variant:"subtitle1",color:"textSecondary",children:e&&e.likes?e.likes.length:0})})]})},"comment-".concat(t))}))})},Me=function(e){var t=e.comments,n=e.handleItemCreatorClick,a=Object(A.a)(ge),r=Object(D.a)(Z,{update:function(e,t){var n=t.data,r=Oe(e,a.id);e.modify({fields:{getUserPosts:function(){return be(r.getUserPosts,"comments",n.likeComment,!0)}}})}}),i=Object($.a)(r,1)[0];return Object(ie.jsx)(qe,{comments:t,likeComment:function(e,t,n){i({variables:{userId:e,commentId:t,isAlreadyLiked:n}})},handleItemCreatorClick:n})},Ve=function(e){var t=e.loading,n=e.handleCreateComment,a=Object(g.useState)(""),r=Object($.a)(a,2),i=r[0],o=r[1],c=function(){o("")};return Object(ie.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return n(e,i,c)},children:Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,{label:"Comment",name:"comment",fullWidth:!0,disabled:t,value:i,onChange:function(e){o(e.target.value)}})})})},Ye=function(e){var t=e.postId,n=Object(A.a)(pe),a=Object(A.a)(ge),r=Object(D.a)(z,{update:function(e,t){var n=t.data,r=Oe(e,a.id);e.modify({fields:{getUserPosts:function(){return be(r.getUserPosts,"comments",n.createComment,!1)}}})}}),i=Object($.a)(r,2),o=i[0],c=i[1].loading,s=function(){var e=Object(Pe.a)(Object(ye.a)().mark((function e(a,r,i){return Object(ye.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,o({variables:{comment:r,userId:n.id,postId:t,createdAt:(new Date).toLocaleString()}});case 3:i();case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(ie.jsx)(Ve,{loading:c,handleCreateComment:s})},Ke=n(8),Qe=n(121),Ze=n(214),Je=n(215),Xe=n(213),et=n(216),tt=Object(Ke.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(ie.jsx)(Qe.a,Object(B.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),nt=function(e){e.postId;var t=e.deletePost,n=h.a.useState(null),a=Object($.a)(n,2),r=a[0],i=a[1],o=function(){i(null)};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ae.a,{size:"small","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(ie.jsx)(Xe.a,{})}),Object(ie.jsx)(tt,{id:"customized-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:o,children:Object(ie.jsxs)(Ze.a,{onClick:function(){o(),t()},children:[Object(ie.jsx)(Je.a,{children:Object(ie.jsx)(et.a,{fontSize:"small"})}),Object(ie.jsx)(Re.a,{primary:"Delete Post"})]})})]})},at=function(e){var t=e.postId,n=Object(A.a)(ge),a=Object(D.a)(q,{variables:{postId:t},update:function(e){var a=Oe(e,n.id);e.modify({fields:{getUserPosts:function(){return a.getUserPosts.filter((function(e){return e.id!==t}))}}})}}),r=Object($.a)(a,1)[0];return Object(ie.jsx)(nt,{deletePost:r,postId:t})},rt=Object(P.a)({root:{minWidth:400,marginTop:30},postCreator:{cursor:"pointer"},post:{marginBottom:12},inline:{display:"inline"},likes:{marginBottom:4}}),it=function(e){var t=e.post,n=e.likePost,a=e.handleItemCreatorClick,r=rt(),i=Object(g.useState)(!1),o=Object($.a)(i,2),c=o[0],s=o[1];return Object(ie.jsx)(Se.a,{className:r.root,variant:"outlined",children:Object(ie.jsxs)(Te.a,{children:[Object(ie.jsxs)("div",{className:r.post,children:[Object(ie.jsx)("span",{onClick:function(){return a(t.user)},className:r.postCreator,children:Object(ie.jsx)(U.a,{component:"span",variant:"subtitle2",className:r.inline,color:"textPrimary",children:t&&t.user?"".concat(t.user.firstName," ").concat(t.user.lastName," "):""})}),Object(ie.jsx)(U.a,{variant:"caption",className:r.inline,children:new Date(t.createdAt).toLocaleString()})]}),Object(ie.jsx)("div",{className:r.post,children:Object(ie.jsx)(U.a,{variant:"subtitle1",children:t.content})}),Object(ie.jsxs)(ke.a,{container:!0,spacing:3,className:r.likes,children:[Object(ie.jsx)(ke.a,{item:!0,xs:1,children:Object(ie.jsx)(ze,{item:t,likeMutation:n})}),Object(ie.jsx)(ke.a,{item:!0,xs:2,children:Object(ie.jsx)(U.a,{variant:"subtitle1",color:"textSecondary",children:t.likes.length})}),Object(ie.jsx)(ke.a,{item:!0,xs:1,children:Object(ie.jsx)(Ae.a,{size:"small",onClick:function(){c||s(!0)},children:Object(ie.jsx)(_e.a,{})})}),Object(ie.jsx)(ke.a,{item:!0,xs:2,children:Object(ie.jsx)(U.a,{variant:"subtitle1",color:"textSecondary",children:t.comments.length})}),Object(ie.jsx)(ke.a,{item:!0,xs:4}),Object(ie.jsx)(ke.a,{item:!0,xs:2,children:Object(ie.jsx)(at,{postId:t.id})})]}),c&&Object(ie.jsx)(Ye,{postId:t.id}),Object(ie.jsx)(Me,{comments:t.comments,handleItemCreatorClick:a})]})},t.id)},ot=function(e){var t=e.posts,n=e.likePost,a=e.handleItemCreatorClick;return Object(ie.jsx)(L.a,{maxWidth:"sm",children:t?t.map((function(e){return Object(ie.jsx)(it,{post:e,likePost:n,handleItemCreatorClick:a},"post-".concat(e.id))})):[]})},ct="SCROLL_DIRECTION_DOWN",st=Object(R.a)(ae||(ae=Object(E.a)(["\n  mutation clearPosts {\n    getUserPosts @client\n  }\n"]))),lt=function(e){var t=e.isGettingNewsfeed,n=Object(A.a)(ge),a=Object(A.a)(he),r=Object(y.f)(),i=Object(W.b)(K,{variables:{userId:n.id,cursor:a,offsetLimit:5,isGettingNewsfeed:t},skip:!n.id,onError:function(e){return console.log("getting user posts error:",e)}}),o=i.data,c=i.loading,s=i.fetchMore,l=Object(D.a)(J,{update:function(e,t){var a=t.data,r=Oe(e,n.id);e.modify({fields:{getUserPosts:function(){return be(r.getUserPosts,"likes",a.likePost,!1)}}})}}),d=Object($.a)(l,1)[0];!function(e){var t=Object(g.useState)(window.pageYOffset),n=Object($.a)(t,2),a=n[0],r=n[1],i=function(){if(window.pageYOffset===a)return"SCROLL_DIRECTION_NONE";var t=a<window.pageYOffset?ct:"SCROLL_DIRECTION_UP";e(t),r(window.pageYOffset)};Object(g.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}))}(function(){var e=Object(Pe.a)(Object(ye.a)().mark((function e(r){return Object(ye.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r===ct&&window.scrollY+window.innerHeight>document.documentElement.scrollHeight-2&&!c&&o&&o.getUserPosts&&o.getUserPosts.length)){e.next=4;break}return he(a+5),e.next=4,s({variables:{userId:n.id,cursor:a,offsetLimit:5,isGettingNewsfeed:t}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var u=Object(D.a)(st,{update:function(e){e.modify({fields:{getUserPosts:function(){return[]}}})}}),j=Object($.a)(u,1)[0];Object(g.useEffect)((function(){return function(){j()}}),[j]);return Object(ie.jsx)(ot,{posts:null===o||void 0===o?void 0:o.getUserPosts,likePost:function(e,t,n){d({variables:{userId:e,postId:t,isAlreadyLiked:n}})},handleItemCreatorClick:function(e){j(),ge(Object(B.a)({},e)),he(0),r.push("/profile")}})},dt=["__typename"],ut=Object(P.a)((function(e){return{homePageContainer:{minHeight:"100vh"},currentUserInfoContainer:{marginBottom:30},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),jt=function(e){e.history;var t=ut(),n=Object(A.a)(ge),a=Object(A.a)(pe),r=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return _.a(Q,t)}({fetchPolicy:"network-only",onCompleted:function(e){if(e&&e.homePage){var t=e.homePage,n=(t.__typename,Object(F.a)(t,dt));j({variables:{userId:n.id,cursor:0,offsetLimit:5,isGettingNewsfeed:!0}}),ge(n),pe(n)}}}),i=Object($.a)(r,2),o=i[0],c=i[1],s=c.data,l=c.loading,d=Object(_.a)(K,{fetchPolicy:"network-only",onError:function(e){return console.log("get user posts lazy query error",e)}}),u=Object($.a)(d,2),j=u[0],m=u[1].loading;return Object(g.useEffect)((function(){return a&&a.id?j({variables:{userId:a.id,cursor:0,offsetLimit:5,isGettingNewsfeed:!0}}):o(),function(){}}),[o,j,a]),Object(ie.jsxs)("div",{className:t.homePageContainer,children:[s&&s.homePage||a&&a.id?Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)(L.a,{maxWidth:"sm",children:[Object(ie.jsxs)("div",{className:t.currentUserInfoContainer,children:[Object(ie.jsx)(U.a,{variant:"h4",children:"".concat(n.firstName," ").concat(n.lastName)}),Object(ie.jsx)(Ce,{loggedInUser:a.id,userToBeFollowed:n.id})]}),a&&n.id===a.id&&Object(ie.jsx)(Ue,{}),Object(ie.jsx)(lt,{isGettingNewsfeed:!0})]})}):Object(ie.jsx)(ce,{}),Object(ie.jsx)(S.a,{className:t.backdrop,open:l||m,children:Object(ie.jsx)(T.a,{color:"inherit"})})]})},mt=n(238),bt=function(e){var t=!0;return e||(t=!1),t},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=Object(g.useState)(e),a=Object($.a)(n,2),r=a[0],i=a[1],o=Object(g.useState)(!1),c=Object($.a)(o,2),s=c[0],l=c[1],d=Object(g.useCallback)((function(e){"text"===t?l(!bt(e.target.value)):"email"===t&&l(!function(e){var t=bt(e);return e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(t=!1),t}(e.target.value)),i(e.target.value)}),[t]);return{value:r,onChange:d,error:s}},ft=Object(P.a)((function(e){return{registerPageContainer:{height:"100vh"},registerPaper:{width:"40%",margin:"0 auto",paddingBottom:e.spacing(4),paddingTop:e.spacing(4),marginTop:e.spacing(24),paddingLeft:48,paddingRight:48},textField:{width:"100%"},submitBtn:{marginTop:e.spacing(4)},errorAlert:{width:"100%",backgroundColor:"#D84646",color:"white",paddingBottom:12,paddingTop:12,paddingLeft:48,paddingRight:48,display:"flex"}}})),gt=function(e){var t=e.history,n=ft(),a=Ot("","text"),r=Ot("","text"),i=Ot("","email"),o=Ot("","text"),c=Object(g.useState)(""),s=Object($.a)(c,2),l=s[0],d=s[1],u=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return D.a(te,t)}(),j=Object($.a)(u,1)[0],m=function(){var e=Object(Pe.a)(Object(ye.a)().mark((function e(n){var a,r;return Object(ye.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.target),e.next=4,j({variables:{firstName:a.get("firstName"),lastName:a.get("lastName"),email:a.get("email"),password:a.get("password")}});case 4:(r=e.sent)&&r.data&&r.data.register.user?t.push("/"):r&&r.data&&r.data.register.errors&&d(r.data.register.errors[0].message);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ie.jsx)("div",{className:n.registerPageContainer,children:Object(ie.jsx)(re.a,{elevation:3,className:n.registerPaper,children:Object(ie.jsxs)(L.a,{maxWidth:"md",children:[Object(ie.jsx)(U.a,{variant:"h3",noWrap:!0,children:"Sign Up"}),Object(ie.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:m,children:[Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input_firstName",label:"First Name",name:"firstName",className:n.textField},a))}),Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input_lastName",label:"Last Name",name:"lastName",className:n.textField},r))}),Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input_email",label:"Email",name:"email",className:n.textField},i))}),Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input_password",label:"Password",type:"password",name:"password",className:n.textField},o))}),Object(ie.jsx)(we.a,{className:n.submitBtn,variant:"contained",color:"primary",type:"submit",children:"Submit"})]}),Object(ie.jsx)(mt.a,{open:!!l&&!!l.length,children:Object(ie.jsx)(re.a,{variant:"elevation",className:n.errorAlert,children:Object(ie.jsx)(U.a,{variant:"h6",children:l})})})]})})})},ht=Object(P.a)((function(e){return{loginPageContainer:{height:"100vh"},loginPaper:{width:"40%",margin:"0 auto",paddingBottom:e.spacing(4),paddingTop:e.spacing(4),marginTop:e.spacing(24),paddingLeft:48,paddingRight:48},textField:{width:"100%"},submitBtn:{marginTop:e.spacing(4)},errorAlert:{width:"100%",backgroundColor:"#D84646",color:"white",paddingBottom:12,paddingTop:12,paddingLeft:48,paddingRight:48,display:"flex"}}})),pt=function(e){var t=e.history,n=ht(),a=Ot("","email"),r=Ot("","text"),i=Object(g.useState)(""),o=Object($.a)(i,2),c=o[0],s=o[1],l=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return D.a(X,t)}(),d=Object($.a)(l,1)[0],u=function(){var e=Object(Pe.a)(Object(ye.a)().mark((function e(n){var a,r;return Object(ye.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.target),e.next=4,d({variables:{email:a.get("email"),password:a.get("password")}});case 4:(r=e.sent)&&r.data&&r.data.login.user?(ge(r.data.login.user),pe(r.data.login.user),t.push("/")):r&&r.data&&r.data.login.errors&&s(r.data.login.errors[0].message);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ie.jsx)("div",{className:n.loginPageContainer,children:Object(ie.jsx)(re.a,{elevation:3,className:n.loginPaper,children:Object(ie.jsxs)(L.a,{maxWidth:"md",children:[Object(ie.jsx)(U.a,{variant:"h3",noWrap:!0,children:"Log In"}),Object(ie.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:u,children:[Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input-email",label:"Email",name:"email",className:n.textField},a))}),Object(ie.jsx)("div",{children:Object(ie.jsx)(Fe.a,Object(B.a)({id:"input-password",label:"Password",type:"password",name:"password",className:n.textField},r))}),Object(ie.jsx)(we.a,{className:n.submitBtn,variant:"contained",color:"primary",type:"submit",children:"Submit"})]}),Object(ie.jsx)(mt.a,{open:!!c&&!!c.length,children:Object(ie.jsx)(re.a,{variant:"elevation",className:n.errorAlert,children:Object(ie.jsx)(U.a,{variant:"h6",children:c})})})]})})})},xt=Object(P.a)((function(e){return{homePageContainer:{minHeight:"100vh"},currentUserInfoContainer:{marginBottom:30},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),vt=function(e){e.history;var t=xt(),n=Object(A.a)(pe),a=Object(A.a)(ge),r=Object(_.a)(K,{fetchPolicy:"network-only",onError:function(e){return console.log("get user posts lazy query error",e)}}),i=Object($.a)(r,2),o=i[0],c=i[1].loading;return Object(g.useEffect)((function(){he(0),o({variables:{userId:a.id,cursor:0,offsetLimit:5,isGettingNewsfeed:!1}})}),[o,a]),Object(ie.jsxs)("div",{className:t.homePageContainer,children:[Object(ie.jsxs)(L.a,{maxWidth:"sm",children:[Object(ie.jsxs)("div",{className:t.currentUserInfoContainer,children:[Object(ie.jsx)(U.a,{variant:"h4",children:"".concat(a.firstName," ").concat(a.lastName,"'s Profile")}),Object(ie.jsx)(Ce,{loggedInUser:n.id,userToBeFollowed:a.id})]}),Object(ie.jsx)(Ue,{}),Object(ie.jsx)(lt,{isGettingNewsfeed:!1})]}),Object(ie.jsx)(S.a,{className:t.backdrop,open:c,children:Object(ie.jsx)(T.a,{color:"inherit"})})]})},wt=n(15),Nt=n(224),kt=n(225),It=n(236),Ct=n(226),yt=n(26),Pt=n(227),Ft=n(207),$t=n(221),Lt=n(208),Ut=n(239),St=n(223),Tt=n(222),At=Object(P.a)((function(){return{logoutItemText:{fontWeight:"bold",color:"#fff"}}})),_t=function(e){var t=e.handleLogoutClick,n=At();return Object(ie.jsx)(Ee.a,{button:!0,onClick:t,children:Object(ie.jsx)(Re.a,{className:n.logoutItemText,primary:"Logout"})})},Bt=function(){var e=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return D.a(ee,t)}(),t=Object($.a)(e,2),n=t[0],a=t[1].client,r=function(){var e=Object(Pe.a)(Object(ye.a)().mark((function e(){return Object(ye.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return pe(new ue(0,"","","")),e.next=5,a.resetStore();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ie.jsx)(_t,{handleLogoutClick:r})},Et=Object(P.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"#424242"},toolbar:e.mixins.toolbar,menuIcon:{fill:"#fff"},menuItemText:{fontWeight:"bold",color:"#fff"}}})),Rt=function(e){var t=e.handleHomePageClick,n=Et(),a=Object(g.useState)(!1),r=Object($.a)(a,2),i=r[0],o=r[1],c=function(e){o(e)};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ae.a,{onClick:function(){return c(!0)},children:Object(ie.jsx)(Tt.a,{className:n.menuIcon})}),Object(ie.jsxs)(Ut.a,{className:n.drawer,open:i,classes:{paper:n.drawerPaper},onClose:function(){return c(!1)},anchor:"left",children:[Object(ie.jsx)("div",{className:n.toolbar}),Object(ie.jsx)(St.a,{}),Object(ie.jsxs)(Be.a,{children:[Object(ie.jsx)(C.b,{to:"/",onClick:t,children:Object(ie.jsx)(Ee.a,{button:!0,children:Object(ie.jsx)(Re.a,{className:n.menuItemText,primary:"Home"})})}),Object(ie.jsx)(C.b,{to:"/profile",children:Object(ie.jsx)(Ee.a,{button:!0,children:Object(ie.jsx)(Re.a,{className:n.menuItemText,primary:"Profile"})})}),Object(ie.jsx)(C.b,{to:"/register",children:Object(ie.jsx)(Ee.a,{button:!0,children:Object(ie.jsx)(Re.a,{className:n.menuItemText,primary:"Register"})})}),Object(ie.jsx)(C.b,{to:"/login",children:Object(ie.jsx)(Ee.a,{button:!0,children:Object(ie.jsx)(Re.a,{className:n.menuItemText,primary:"Login"})})}),Object(ie.jsx)(Bt,{})]})]})]})},Dt=Object(P.a)((function(e){var t;return{grow:{flexGrow:1,marginBottom:36},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none"},Object(wt.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(wt.a)(t,"color","white"),Object(wt.a)(t,"textDecoration","none"),t),search:Object(wt.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(yt.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(yt.a)(e.palette.common.white,.25)},marginRight:0,marginLeft:"auto",width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(wt.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(wt.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),paper:{marginRight:e.spacing(2)}}})),Wt=function(e){var t=e.handleMenuClick,n=e.handleHomePageClick,a=e.searchUsers,r=e.data,i=e.loggedInUser,o=Dt(),c=Object(g.useState)(""),s=Object($.a)(c,2),l=s[0],d=s[1],u=Object(g.useState)(!1),j=Object($.a)(u,2),m=j[0],b=j[1],O=Object(g.useRef)(null);Object(g.useEffect)((function(){a({variables:{name:l}})}),[l,a]);var f=function(){b(!1)};function h(e){"Tab"===e.key&&(e.preventDefault(),b(!1))}return Object(ie.jsx)("div",{className:o.grow,children:Object(ie.jsx)(Nt.a,{position:"static",children:Object(ie.jsxs)(kt.a,{children:[Object(ie.jsx)(Rt,{handleHomePageClick:n}),Object(ie.jsx)(C.b,{to:"/",onClick:n,children:Object(ie.jsx)(U.a,{className:o.title,variant:"h6",noWrap:!0,children:"Bloglet"})}),i&&i.id?Object(ie.jsxs)("div",{className:o.search,children:[Object(ie.jsx)("div",{className:o.searchIcon,children:Object(ie.jsx)(Ct.a,{})}),Object(ie.jsx)(It.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){d(e.target.value),r&&b(!0)},value:l,ref:O}),Object(ie.jsx)(Pt.a,{open:m,anchorEl:O.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:2,width:O&&O.current?O.current.offsetWidth:100},children:function(e){var n,a=e.TransitionProps,i=e.placement;return Object(ie.jsx)(Ft.a,Object(B.a)(Object(B.a)({},a),{},{style:{transformOrigin:"bottom"===i?"center top":"center bottom"},children:Object(ie.jsx)(re.a,{children:Object(ie.jsx)($t.a,{onClickAway:f,children:Object(ie.jsx)(Lt.a,{id:"menu-list-grow",onKeyDown:h,children:r&&(null===(n=r.searchUsers)||void 0===n?void 0:n.map((function(e,n){return Object(ie.jsx)(C.b,{to:"/",children:Object(ie.jsxs)(Ze.a,{onClick:function(){return t(e,f)},children:[e.firstName," ",e.lastName]},n)},n)})))})})})}))}})]}):null]})})})},Gt=function(){var e=Object(y.f)(),t=Object(A.a)(pe),n=Object(D.a)(st,{update:function(e){e.modify({fields:{getUserPosts:function(){return[]}}})}}),a=Object($.a)(n,1)[0],r=function(e){var t=Object(B.a)(Object(B.a)({},G),e);return _.a(ne,t)}(),i=Object($.a)(r,2),o=i[0],c=i[1].data;return Object(ie.jsx)(Wt,{searchUsers:o,data:c,loggedInUser:t,handleMenuClick:function(t,n){ge(t),he(0),a(),n(),setTimeout((function(){e.push("/profile")}),0)},handleHomePageClick:function(){ge(t)}})},zt=Object(P.a)((function(e){return{content:{flexGrow:1,backgroundColor:e.palette.background.default}}})),Ht=function(){var e=zt();return Object(ie.jsx)(C.a,{children:Object(ie.jsxs)("main",{className:e.content,children:[Object(ie.jsx)(Gt,{}),Object(ie.jsxs)(y.c,{children:[Object(ie.jsx)(y.a,{exact:!0,path:"/",component:jt}),Object(ie.jsx)(y.a,{exact:!0,path:"/profile",component:vt}),Object(ie.jsx)(y.a,{exact:!0,path:"/register",component:gt}),Object(ie.jsx)(y.a,{exact:!0,path:"/login",component:pt})]})]})})},qt=(n(149),Object(w.a)({uri:"http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL:"http://localhost:3001"}).PORT||3001,"/graphql"),credentials:"include"})),Mt=Object(I.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))})),Vt=new N.a({link:Object(k.a)([Mt,qt]),cache:ve});x.a.render(Object(ie.jsx)(v.a,{client:Vt,children:Object(ie.jsx)(Ht,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.ef5c1c1a.chunk.js.map