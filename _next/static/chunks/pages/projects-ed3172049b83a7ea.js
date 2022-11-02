(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(2806)}])},8100:function(t,e,n){"use strict";var r=n(7320),i=n(5675);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}e.Z=function(t){var e=o({},t);return(0,r.tZ)(i.default,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},e))}},9831:function(t,e,n){"use strict";n.d(e,{TQ:function(){return s},$t:function(){return d},Uy:function(){return m}});var r=n(7320),i=n(9008),a=n(1163),o=n(1576),c=n.n(o),l=function(t){var e=t.title,n=t.description,o=t.ogType,l=t.ogImage,s=t.twImage,d=t.canonicalUrl,m=(0,a.useRouter)();return(0,r.BX)(i.default,{children:[(0,r.tZ)("title",{children:e}),(0,r.tZ)("meta",{name:"robots",content:"follow, index"}),(0,r.tZ)("meta",{name:"description",content:n}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(m.asPath)}),(0,r.tZ)("meta",{property:"og:type",content:o}),(0,r.tZ)("meta",{property:"og:site_name",content:c().title}),(0,r.tZ)("meta",{property:"og:description",content:n}),(0,r.tZ)("meta",{property:"og:title",content:e}),"Array"===l.constructor.name?l.map((function(t){var e=t.url;return(0,r.tZ)("meta",{property:"og:image",content:e},e)})):(0,r.tZ)("meta",{property:"og:image",content:l},l),(0,r.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,r.tZ)("meta",{name:"twitter:title",content:e}),(0,r.tZ)("meta",{name:"twitter:description",content:n}),(0,r.tZ)("meta",{name:"twitter:image",content:s}),(0,r.tZ)("link",{rel:"canonical",href:d||"".concat(c().siteUrl).concat(m.asPath)})]})},s=function(t){var e=t.title,n=t.description,i=c().siteUrl+c().socialBanner,a=c().siteUrl+c().socialBanner;return(0,r.tZ)(l,{title:e,description:n,ogType:"website",ogImage:i,twImage:a})},d=function(t){var e=t.title,n=t.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,a.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:e,description:n,ogType:"website",ogImage:o,twImage:s}),(0,r.tZ)(i.default,{children:(0,r.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},m=function(t){var e=t.authorDetails,n=t.title,o=t.summary,s=t.date,d=t.lastmod,m=t.url,u=t.images,p=void 0===u?[]:u,g=t.canonicalUrl,h=((0,a.useRouter)(),new Date(s).toISOString()),f=new Date(d||s).toISOString(),y=(0===p.length?[c().socialBanner]:"string"===typeof p?[p]:p).map((function(t){return{"@type":"ImageObject",url:t.includes("http")?t:c().siteUrl+t}})),b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":m},headline:n,image:y,datePublished:h,dateModified:f,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},Z=y[0].url;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:n,description:o,ogType:"article",ogImage:y,twImage:Z,canonicalUrl:g}),(0,r.BX)(i.default,{children:[s&&(0,r.tZ)("meta",{property:"article:published_time",content:h}),d&&(0,r.tZ)("meta",{property:"article:modified_time",content:f}),(0,r.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},2806:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(7320),i=n(1576),a=n.n(i),o=[{title:"A Search Engine",description:"What if you could look up any information in the world? Webpages, images, videos\n    and more. Google has many features to help you find exactly what you're looking\n    for.",imgSrc:"/static/images/google.png",href:"https://www.google.com"},{title:"The Time Machine",description:'Imagine being able to travel back in time or to the future. Simple turn the knob\n    to the desired date and press "Go". No more worrying about lost keys or\n    forgotten headphones with this simple yet affordable solution.',imgSrc:"/static/images/time-machine.jpg",href:"/blog/the-time-machine"}],c=n(8100),l=n(7233),s=function(t){var e=t.title,n=t.description,i=t.imgSrc,a=t.href;return(0,r.tZ)("div",{className:"md p-4 md:w-1/2",style:{maxWidth:"544px"},children:(0,r.BX)("div",{className:"".concat(i&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[i&&(a?(0,r.tZ)(l.Z,{href:a,"aria-label":"Link to ".concat(e),children:(0,r.tZ)(c.Z,{alt:e,src:i,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,r.tZ)(c.Z,{alt:e,src:i,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,r.BX)("div",{className:"p-6",children:[(0,r.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:a?(0,r.tZ)(l.Z,{href:a,"aria-label":"Link to ".concat(e),children:e}):e}),(0,r.tZ)("p",{className:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400",children:n}),a&&(0,r.tZ)(l.Z,{href:a,className:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Link to ".concat(e),children:"Learn more \u2192"})]})]})})},d=n(9831);function m(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(d.TQ,{title:"Projects - ".concat(a().author),description:a().description}),(0,r.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,r.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,r.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Projects"})}),(0,r.tZ)("div",{className:"container py-12",children:(0,r.tZ)("div",{className:"-m-4 flex flex-wrap",children:o.map((function(t){return(0,r.tZ)(s,{title:t.title,description:t.description,imgSrc:t.imgSrc,href:t.href},t.title)}))})})]})]})}}},function(t){t.O(0,[675,888,179],(function(){return e=8947,t(t.s=e);var e}));var e=t.O();_N_E=e}]);