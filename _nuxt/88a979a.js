(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCA1MSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNDEuMTY3IiB5PSIxNS4yMzg2IiB3aWR0aD0iMTEuNjUxMiIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNDEuMTY3IDE1LjIzODYpIiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSI0Mi41ODExIiB3aWR0aD0iMTEuNjUxMiIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0Mi41ODExIDApIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSI3IiB3aWR0aD0iNDkiIGhlaWdodD0iMiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},274:function(t,e,o){"use strict";o.r(e);var n=o(271),d={components:{hideAt:n.hideAt,showAt:n.showAt},name:"ChampionCard",props:["championData"],created:function(){}},r=o(43),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1"}),t._v(" "),e("div",{staticClass:"md:px-10 md:grid md:grid-cols-2 py-40 bg-gradient-to-l from-black via-black relative z-1"},[e("show-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"},[e("h1",{staticClass:"text-white text-xl md:text-2xl font-poppinsBold"},[t._v("\n          Time to Flex my\n        ")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-4xl md:text-6xl font-monumentExtendedBold"},[t._v("\n            Champion\n          ")]),t._v(" "),e("p",{staticClass:"md:mt-3 text-xl"},[t._v("Berani Unjuk Gigi!")])])])]),t._v(" "),e("div",{staticClass:"bg-transparent justify-self-start place-self-center mx-5 md:mx-0"},t._l(t.championData,(function(n,d){return e("div",{staticClass:"grid grid-cols-5 md:grid-cols-3 space-x-3 my-4"},d%2==0?[e("div",{staticClass:"flex flex-col col-span-3 md:col-span-2 space-y-3"},t._l(t.championData[d],(function(data,n){return 2!==n?e("div",[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},0===n?[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1",on:{mouseover:function(e){t.upHere=!0},mouseleave:function(e){t.upHere=!1}}},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")]),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.upHere,expression:"upHere"}],staticClass:"mr-10 mt-10",attrs:{src:o(267),alt:"arrow-right"}})])],1)])]:[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1"},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")])])])])],1):t._e()})),0),t._v(" "),t._l(t.championData[d],(function(data,o){return 2===o?e("div",{staticClass:"border-2 col-span-2 md:col-span-1 rounded-sm border-x-secondary-opt1 backdrop-filter backdrop-blur-sm bg-opacity-0 group hover:bg-x-secondary-opt1"},[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},[e("div",{staticClass:"grid"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl m-5 md:m-10 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                "+t._s(data.rank_position)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-x-secondary-opt1 group-hover:text-black justify-self-end mr-5 md:mr-10 my-10 md:m-8 text-xs md:text-base"},[t._v("\n                "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n              ")]),t._v(" "),e("h3",{staticClass:"text-x-secondary-opt1 ml-5 my-5 md:my-10 md:ml-10 font-poppinsBold bottom-0 group-hover:text-black text-sm md:text-xl inset-x-0 md:m-10 md:text-xl"},[t._v("\n                "+t._s(data.title)+"\n              ")])])])],1):t._e()}))]:[t._l(t.championData[d],(function(data,o){return 0===o?e("div",{staticClass:"border-2 col-span-2 md:col-span-1 rounded-sm border-x-secondary-opt1 backdrop-filter backdrop-blur-sm bg-opacity-0 group hover:bg-x-secondary-opt1"},[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},[e("div",{staticClass:"grid"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl m-5 md:m-10 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                "+t._s(data.rank_position)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-x-secondary-opt1 group-hover:text-black justify-self-end mr-5 md:mr-10 my-10 md:m-8 text-xs md:text-base"},[t._v("\n                "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n              ")]),t._v(" "),e("h3",{staticClass:"text-x-secondary-opt1 ml-5 my-5 md:my-10 md:ml-10 font-poppinsBold bottom-0 group-hover:text-black text-sm md:text-xl inset-x-0 md:m-10 md:text-xl"},[t._v("\n                "+t._s(data.title)+"\n              ")])])])],1):t._e()})),t._v(" "),e("div",{staticClass:"flex flex-col col-span-3 md:col-span-2 space-y-3"},t._l(t.championData[d],(function(data,n){return 0!==n?e("div",[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},1===n?[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1",on:{mouseover:function(e){t.upHere=!0},mouseleave:function(e){t.upHere=!1}}},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")]),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.upHere,expression:"upHere"}],staticClass:"mr-10 mt-10",attrs:{src:o(267),alt:"arrow-right"}})])],1)])]:[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1"},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")])])])])],1):t._e()})),0)],2)})),0),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"p-3 place-self-center"},[e("h1",{staticClass:"text-white text-2xl font-poppinsBold"},[t._v("Time to Flex my")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-6xl font-monumentExtendedBold"},[t._v("Champion")]),t._v(" "),e("p",{staticClass:"mt-3 text-xl"},[t._v("Berani Unjuk Gigi!")])])])])],1),t._v(" "),e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1"})])}),[],!1,null,"a65f8e7c",null);e.default=component.exports}}]);