(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{267:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCA1MSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNDEuMTY3IiB5PSIxNS4yMzg2IiB3aWR0aD0iMTEuNjUxMiIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNDEuMTY3IDE1LjIzODYpIiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSI0Mi41ODExIiB3aWR0aD0iMTEuNjUxMiIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0Mi41ODExIDApIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSI3IiB3aWR0aD0iNDkiIGhlaWdodD0iMiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},269:function(t,e,n){"use strict";var o=n(273),l=Object(o.a)("https://mbfltfpzlzhszrgxfmni.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZmx0ZnB6bHpoc3pyZ3hmbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE1MDExNTUsImV4cCI6MTk2NzA3NzE1NX0.DC3J0Ho7jTaRNuObvPG34cCOcSYV7mLtEHqxn53RElo");e.a=l},274:function(t,e,n){"use strict";n.r(e);var o=n(271),l={components:{hideAt:o.hideAt,showAt:o.showAt},name:"ChampionCard",props:["championData"],created:function(){}},r=n(43),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1"}),t._v(" "),e("div",{staticClass:"md:px-10 md:grid md:grid-cols-2 py-40 bg-gradient-to-l from-black via-black relative z-1"},[e("show-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"},[e("h1",{staticClass:"text-white text-xl md:text-2xl font-poppinsBold"},[t._v("\n          Time to Flex my\n        ")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-4xl md:text-6xl font-monumentExtendedBold"},[t._v("\n            Champion\n          ")]),t._v(" "),e("p",{staticClass:"md:mt-3 text-xl"},[t._v("Berani Unjuk Gigi!")])])])]),t._v(" "),e("div",{staticClass:"bg-transparent justify-self-start place-self-center mx-5 md:mx-0"},t._l(t.championData,(function(o,l){return e("div",{staticClass:"grid grid-cols-5 md:grid-cols-3 space-x-3 my-4"},l%2==0?[e("div",{staticClass:"flex flex-col col-span-3 md:col-span-2 space-y-3"},t._l(t.championData[l],(function(data,o){return 2!==o?e("div",[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},0===o?[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1",on:{mouseover:function(e){t.upHere=!0},mouseleave:function(e){t.upHere=!1}}},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")]),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.upHere,expression:"upHere"}],staticClass:"mr-10 mt-10",attrs:{src:n(267),alt:"arrow-right"}})])],1)])]:[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1"},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")])])])])],1):t._e()})),0),t._v(" "),t._l(t.championData[l],(function(data,n){return 2===n?e("div",{staticClass:"border-2 col-span-2 md:col-span-1 rounded-sm border-x-secondary-opt1 backdrop-filter backdrop-blur-sm bg-opacity-0 group hover:bg-x-secondary-opt1"},[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},[e("div",{staticClass:"grid"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl m-5 md:m-10 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                "+t._s(data.rank_position)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-x-secondary-opt1 group-hover:text-black justify-self-end mr-5 md:mr-10 my-10 md:m-8 text-xs md:text-base"},[t._v("\n                "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n              ")]),t._v(" "),e("h3",{staticClass:"text-x-secondary-opt1 ml-5 my-5 md:my-10 md:ml-10 font-poppinsBold bottom-0 group-hover:text-black text-sm md:text-xl inset-x-0 md:m-10 md:text-xl"},[t._v("\n                "+t._s(data.title)+"\n              ")])])])],1):t._e()}))]:[t._l(t.championData[l],(function(data,n){return 0===n?e("div",{staticClass:"border-2 col-span-2 md:col-span-1 rounded-sm border-x-secondary-opt1 backdrop-filter backdrop-blur-sm bg-opacity-0 group hover:bg-x-secondary-opt1"},[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},[e("div",{staticClass:"grid"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl m-5 md:m-10 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                "+t._s(data.rank_position)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-x-secondary-opt1 group-hover:text-black justify-self-end mr-5 md:mr-10 my-10 md:m-8 text-xs md:text-base"},[t._v("\n                "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n              ")]),t._v(" "),e("h3",{staticClass:"text-x-secondary-opt1 ml-5 my-5 md:my-10 md:ml-10 font-poppinsBold bottom-0 group-hover:text-black text-sm md:text-xl inset-x-0 md:m-10 md:text-xl"},[t._v("\n                "+t._s(data.title)+"\n              ")])])])],1):t._e()})),t._v(" "),e("div",{staticClass:"flex flex-col col-span-3 md:col-span-2 space-y-3"},t._l(t.championData[l],(function(data,o){return 0!==o?e("div",[e("NuxtLink",{attrs:{to:"champions/".concat(data.id)}},1===o?[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1",on:{mouseover:function(e){t.upHere=!0},mouseleave:function(e){t.upHere=!1}}},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")]),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.upHere,expression:"upHere"}],staticClass:"mr-10 mt-10",attrs:{src:n(267),alt:"arrow-right"}})])],1)])]:[e("div",{staticClass:"border-2 rounded-sm border-x-secondary-opt1 bg-opacity-0 backdrop-filter backdrop-blur-lg group hover:bg-x-secondary-opt1"},[e("div",{staticClass:"grid grid-cols-4"},[e("h1",{staticClass:"justify-self-start text-2xl md:text-5xl ml-5 md:ml-10 mt-5 md:mt-10 col-span-1 md:col-span-2 text-x-secondary-opt1 font-monumentExtendedBold group-hover:text-black"},[t._v("\n                    "+t._s(data.rank_position)+"\n                  ")]),t._v(" "),e("p",{staticClass:"justify-self-end mr-6 md:mr-10 my-7 md:my-10 col-span-3 md:col-span-2 text-xs md:text-base text-x-secondary-opt1 group-hover:text-black"},[t._v("\n                    "+t._s(new Date(data.date).toLocaleDateString("en-EN",{month:"long",day:"2-digit",year:"numeric"}))+"\n                  ")]),t._v(" "),e("h3",{staticClass:"ml-5 mr-5 my-5 md:mr-0 md:my-10 md:ml-10 text-sm md:text-xl col-span-4 md:col-span-3 text-x-secondary-opt1 font-poppinsBold group-hover:text-black"},[t._v("\n                    "+t._s(data.title)+"\n                  ")])])])])],1):t._e()})),0)],2)})),0),t._v(" "),e("hide-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"p-3 place-self-center"},[e("h1",{staticClass:"text-white text-2xl font-poppinsBold"},[t._v("Time to Flex my")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-6xl font-monumentExtendedBold"},[t._v("Champion")]),t._v(" "),e("p",{staticClass:"mt-3 text-xl"},[t._v("Berani Unjuk Gigi!")])])])])],1),t._v(" "),e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1"})])}),[],!1,null,"a65f8e7c",null);e.default=component.exports},299:function(t,e,n){t.exports=n.p+"img/parallax2.baac82c.jpg"},300:function(t,e,n){t.exports=n.p+"img/parallax2-mobile.e1b4084.jpg"},301:function(t,e,n){t.exports=n.p+"img/ME-resize.c22279a.gif"},302:function(t,e,n){t.exports=n.p+"img/tailwindcss.809df0d.svg"},303:function(t,e,n){t.exports=n.p+"img/vuejs.b7e68b3.svg"},304:function(t,e,n){t.exports=n.p+"img/nuxtjs.0d0164f.svg"},331:function(t,e,n){"use strict";n.r(e);n(30);var o=[function(){var t=this._self._c;return t("div",{staticClass:"bg-yellow-0 pt-32 md:place-self-center"},[t("img",{staticClass:"rounded-full mx-auto h-60 md:h-96",attrs:{src:n(301)}})])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mt-3 md:mt-5 text-96 md:text-2xl"},[t._v("\n          A Design Enthusiast and Photography Addict, "),e("br"),t._v("\n          but "),e("b",[t._v("Mobile Developer")]),t._v(" Wanna be!\n        ")])},function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1"}),t._v(" "),e("div",{staticClass:"md:px-10 md:grid grid-cols-2 h-screen md:h-96 relative z-1 mt-40 md:mt-0"},[e("div",{staticClass:"mx-5 md:mx-0 md:p-3 place-self-center"},[e("h1",{staticClass:"text-white text-xl md:text-2xl font-poppinsBold"},[t._v("\n          Let's, Talking\n        ")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-4xl md:text-6xl font-monumentExtendedBold"},[t._v("\n            About Me\n          ")]),t._v(" "),e("p",{staticClass:"md:mt-3 text-xl"},[t._v("Tak Kenal, Maka Kenalan")])])]),t._v(" "),e("div",{staticClass:"mx-5 mt-10 md:mt-0 md:mx-0 md:mr-20 justify-self-center md:justify-self-start place-self-center"},[e("h1",{staticClass:"text-2xl bg-x-secondary inline-block font-poppinsBold mt-10 md:mt-0"},[t._v("\n          Yoo!\n        ")]),t._v(" "),e("p",{staticClass:"bg-black text-x-secondary-opt1 text-xl inline-block"},[t._v("\n          Currently, i’m Informatics student at Mercu Buana University who\n          like challenges and learn something new, that’s why i’m interested\n          in programming field especially Mobile Development. I have others\n          hobby such as Design, Photography, Play Badminton and also Draw\n          Cartoon Character.\n        ")]),t._v(" "),e("p",{staticClass:"mt-5 md:mt-2 bg-black text-x-secondary-opt1 text-xl inline-block"},[t._v("\n          Did you know?! i have a special skill is "),e("b",[t._v("LeftHanded")]),t._v(", yap i\n          always do everything with my left hand and feet like use racket,\n          write, kick the ball etc. Except to eat, i must use my right hand.\n        ")])])]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 h-96 bg-black relative z-1 justify-items-center"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"},[e("h1",{staticClass:"text-white text-xl md:text-2xl font-poppinsBold"},[t._v("\n          Experience Check\n        ")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-4xl md:text-6xl font-monumentExtendedBold"},[t._v("\n            Portofolio\n          ")]),t._v(" "),e("p",{staticClass:"md:mt-3 text-xl"},[t._v("Udah Ngapain Aja?")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-5 md:mx-0 md:p-3 text-center place-self-center mb-20 md:mb-28"},[e("h1",{staticClass:"text-white text-xl md:text-2xl font-poppinsBold"},[t._v("\n          Break Down my\n        ")]),t._v(" "),e("div",{staticClass:"bg-x-secondary"},[e("h1",{staticClass:"text-4xl md:text-6xl font-monumentExtendedBold"},[t._v("\n            Skills\n          ")]),t._v(" "),e("p",{staticClass:"md:mt-3 text-xl"},[t._v("Buka Kartu AS niih")])])])},function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"bg-black md:py-40 grid mx-auto relative z-1"},[e("div",{staticClass:"mt-40 rounded-lg md:mx-20"},[e("div",{staticClass:"text-center mx-5 md:mx-0 md:p-3 text-center place-self-center inline mb-10 mt-44"},[e("h1",{staticClass:"text-x-secondary-opt1 text-md md:text-lg font-poppinsBold"},[t._v("\n            Made Using\n          ")])]),t._v(" "),e("div",{staticClass:"container mx-auto justify-center grid gap-y-2 md:gap-y-8 grid-cols-1 md:grid-cols-3"},[e("div",{staticClass:"fill-blue-500 place-self-center w-6/12"},[e("img",{staticClass:"fill-blue-500 h-full",attrs:{src:n(302)}})]),t._v(" "),e("div",{staticClass:"place-self-center w-6/12"},[e("img",{staticClass:"grayscale h-full justify-self-center",attrs:{src:n(303)}})]),t._v(" "),e("div",{staticClass:"place-self-center w-6/12"},[e("img",{staticClass:"grayscale h-full",attrs:{src:n(304)}})])])])])])}],l=n(10),r=(n(58),n(18),n(38),n(269)),d=n(271),c=n(274),m=(n(305),{components:{hideAt:d.hideAt,showAt:d.showAt,ChampionCard:c.default},data:function(){return{style:{width:this.width?"".concat(this.width,"px"):"100%",height:this.height?"".concat(this.height,"px"):"100%",overflow:"hidden",margin:"0 auto"},skill:[],upHere:!1,championsData:[],portofoliosData:[],skillsData:[],portofolioData:[{title:"E-Voting",lang:"Codeigniter 4 | Bootstrap 5",progress:"Completed",image:"parallax3.jpg",url:null,desc:"This app developed by me to completed my course major assignment at my campus. E-Voting has two roles are first as administrator, they can do manage data such as votes data, users data, subadmins data, events data, reports data and many more. As user, they only do voting candidates and viewing voting updates"},{lang:"HTML5 CANVAS | Javascript | TailwindCSS",title:"Certificate Generator",image:"parallax2.jpg",progress:"Developing",url:"https://ceritix.github.io",desc:"This app developed by me to helping people like organization that wanna make event such as seminar, workshop. i can help them for make easer to generate e-certificate for participants. Sertifix have two features, manual input name and auto input name by detecting the xls/excel file. and you can download it in simultaneously."},{lang:"React Native",title:"Calculator Mobile App",image:"parallax4.jpg",progress:"Developing",url:null,desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{lang:"Codeigniter 4 | Bootstrap 4",title:"Company Profile Project",image:"parallax3.jpg",progress:"Production",url:null,desc:"This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management."},{lang:"Flutter | Firebase",title:"Healthy Mobile App",image:"parallax3.jpg",progress:"Production",url:null,desc:"This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management."},{lang:"HTML5 | Bootstrap 4",title:"Game Store Website",image:"parallax3.jpg",progress:"Production",url:null,desc:"This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management."},{lang:"Visual Basic .NET",title:"Music Player",image:"parallax3.jpg",progress:"Production",url:null,desc:"This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management."},{lang:"Visual Basic .NET",title:"VS Key Generator",image:"parallax3.jpg",progress:"Production",url:null,desc:"This is a my Project that was i developed for PT. Meerkats Flexipack Indonesia. i did this project for 2 months in 2019 by myself without team at all. At this App has CMS Features and Account Management."}],championData:[[{title:"CSIC COMPETITION",rank:"03",rankText:"Third Place",category:"UI/UX",image:"parallax3.jpg",person:"Team (4 Persons)",regional:"National",place:"Multimedia Nusantara University",date:"November 21, 2019",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{title:"IT FUN 3.0 POSTER COMPETITION",rank:"02",rankText:"Runner Up",category:"Poster Design",image:"parallax3.jpg",person:"Individual",regional:"National",place:"Nasional University",date:"November 08, 2019",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{title:"ANTI-DRUGS POSTER COMPETITION",rank:"01",rankText:"Winner",category:"Poster Design",image:"parallax4.jpg",person:"Individual",regional:"National",place:"Mercu Buana University",date:"June 23, 2020",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."}],[{title:"INSPACE UI/UX COMPETITION",rank:"01",rankText:"Winner",category:"UI/UX",image:"parallax3.jpg",person:"Team (3 Persons)",regional:"National",place:"Teknologi Kalimantan Institute",date:"October 23, 2021",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{title:"CODIG 3.0 UX COMPETITION",rank:"03",rankText:"Third Place",category:"UI/UX",image:"parallax3.jpg",person:"Team (3 Persons)",regional:"National",place:"Mercu Buana University",date:"December 19, 2020",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{title:"MUSEUM NATIONAL POSTER COMPETITION",rank:"06",rankText:"Sixth Place",category:"Poster Competition",image:"parallax4.jpg",person:"Individual",regional:"National",place:"Museum National",date:"Juli 14, 2021",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."}],[{title:"JBC INFOGRAPHIC COMPETITION",rank:"TOP 10",rankText:"Finalists",category:"Poster Design",image:"parallax4.jpg",person:"Individual",regional:"National",place:"Telkom University",date:"August 33, 2020",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."},{title:"ADSCOMP UMB POSTER COMPETITION",rank:"TOP 05",rankText:"Finalists",category:"Poster Design",image:"parallax4.jpg",person:"Individual",regional:"National",place:"Mercu Buana University",date:"June 27, 2020",desc:"Llabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi reprehenderit in voluptate velit esse cillum dolore eu fugiat  orem ipsum culpa qui officia deserunt mollit anim id est laborum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat. Duis aute irure dolor in non proident, sunt in."}]],skillData:[{lang:"NUXT JS",level:"BEGINNER"},{lang:"FLUTTER",level:"BEGINNER"},{lang:"REACT NATIVE",level:"BEGINNER"},{lang:"VUE JS",level:"BEGINNER"},{lang:"CODEIGNITER",level:"INTERMEDIATE"},{lang:"LARAVEL",level:"BEGINNER"},{lang:"CSS",level:"ADVANCED"},{lang:"TAILWIND",level:"ADVANCED"},{lang:"JAVASCRIPT",level:"ADVANCED"},{lang:"PHP",level:"ADVANCED"},{lang:"HTML",level:"ADVANCED"},{lang:"PHOTOSHOP",level:"EXPERT"},{lang:"FIGMA",level:"ADVANCED"},{lang:"AFFINITY DESIGNER",level:"ADVANCED"},{lang:"PREMIERE PRO",level:"INTERMEDIATE"},{lang:"AFTER EFFECT",level:"INTERMEDIATE"},{lang:"XD",level:"ADVANCED"},{lang:"LIGTHROOM",level:"ADVANCED"},{lang:"MANUAL DRAWING",level:"INTERMEDIATE"},{lang:"DESIGN",level:"ADVANCED"},{lang:"VISUAL BASIC .NET",level:"BEGINNER"},{lang:"ANDROID OPREKER",level:"INTERMEDIATE"}]}},created:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,l,d,c,m,x,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.from("champion").select();case 2:return n=e.sent,o=n.data,n.error,l=0,d=[],c=[],o.forEach((function(t,e){c.push(t),(e+1)%3!=0&&e+1!==o.length||(d[l]=c,c=[],l+=1)})),t.championsData=d,e.next=12,r.a.from("project").select();case 12:return m=e.sent,x=m.data,m.error,e.next=17,r.a.from("skill").select();case 17:v=e.sent,h=v.data,v.error,t.portofoliosData=x,t.skillsData=h;case 22:case"end":return e.stop()}}),e)})))()}}),x=n(43),component=Object(x.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-red-300"},[e("hide-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"x-parallax-img fixed z-0 overflow-hidden"},[e("img",{staticClass:"h-screen md:h-full",attrs:{src:n(299)}})])]),t._v(" "),e("show-at",{attrs:{breakpoint:"small"}},[e("div",{staticClass:"x-parallax-img fixed z-0 overflow-hidden"},[e("img",{staticClass:"h-screen md:h-full",attrs:{src:n(300)}})])]),t._v(" "),e("section",[e("div",{staticClass:"md:px-16 md:grid md:grid-cols-2 h-screen bg-black relative z-1"},[t._m(0),t._v(" "),e("div",{staticClass:"text-white bg-green-0 text-center mt-14 md:mt-0 md:text-left md:justify-self-start place-self-center"},[e("div",{ref:"lavContainer",style:t.style}),t._v(" "),e("h1",{staticClass:"text-96 md:text-2xl font-poppinsBold"},[t._v("Hello, I'm")]),t._v(" "),e("h1",{staticClass:"text-3xl md:text-6xl font-poppinsBold text-x-secondary-opt1"},[t._v("\n          Rahmat Riansyah\n        ")]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2),t._v(" "),e("section",[e("div",{staticClass:"bg-black md:py-40 grid mx-auto relative z-1"},[t._m(3),t._v(" "),e("div",{staticClass:"container mx-auto justify-center grid gap-y-8 grid-cols-1 md:grid-cols-3"},t._l(this.portofoliosData,(function(n,o){return e("div",{staticClass:"shadow-md place-self-center w-10/12"},[e("NuxtLink",{attrs:{to:"portofolios/".concat(n.id)}},[e("img",{staticClass:"h-full",attrs:{src:"".concat(n.image_url?n.image_url:"https://mbfltfpzlzhszrgxfmni.supabase.co/storage/v1/object/public/assets/projects/empty.png")}}),t._v(" "),e("div",{staticClass:"py-4 grid grid-cols-3 bg-gray-800 text-white"},[e("div",{staticClass:"col-span-2 place-self-start ml-5 my-auto space-y-1"},[e("p",{staticClass:"text-sm text-x-secondary-opt1"},[t._v("\n                  "+t._s(n.language)+"\n                ")]),t._v(" "),e("h5",{staticClass:"text-xl font-poppinsBold text-white"},[t._v("\n                  "+t._s(n.title)+"\n                ")])]),t._v(" "),e("div",{staticClass:"place-self-end mr-5 my-auto"},[e("h5",{staticClass:"text-3xl text-x-secondary-opt1 font-steelfishBold"},[t._v("\n                  SEE\n                ")])])])])],1)})),0)])]),t._v(" "),this.championsData.length>0?e("section",[e("ChampionCard",{attrs:{championData:this.championsData}})],1):t._e(),t._v(" "),e("section",[e("div",{staticClass:"bg-black md:py-40 grid mx-auto relative z-1"},[t._m(4),t._v(" "),e("div",{staticClass:"container mx-auto"},t._l(this.skillsData,(function(n){return e("div",{staticClass:"border-2 m-2 md:m-3 rounded-sm border-white bg-opacity-0 inline-block group hover:bg-white"},[e("div",{},[e("h1",{staticClass:"text-lg md:text-5xl mx-5 md:mx-10 mt-5 md:mt-10 text-center text-white font-monumentExtendedBold group-hover:text-black"},[t._v("\n              "+t._s(n.name.toUpperCase())+"\n            ")]),t._v(" "),e("p",{staticClass:"text-center mt-5 mb-3 md:mt-10 text-xs md:text-lg self-end group-hover:text-black"},[t._v("\n              "+t._s(n.level.toUpperCase())+"\n            ")])])])})),0)])]),t._v(" "),t._m(5)],1)}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{ChampionCard:n(274).default})}}]);