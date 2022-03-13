"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8170],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,h=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,title:"Introduction"},s=void 0,d={unversionedId:"Guides/Intro",id:"Guides/Intro",title:"Introduction",description:"How WolvenKit fits in to the modding workflow",source:"@site/wkit/Guides/Intro.md",sourceDirName:"Guides",slug:"/Guides/Intro",permalink:"/wiki/wolvenkit/Guides/Intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Wolvenkit Console",permalink:"/wiki/wolvenkit/Wolvenkit CLI/Wolvenkit Console"},next:{title:"CharacterModding",permalink:"/wiki/wolvenkit/Guides/CharacterModding"}},c={},u=[{value:"How WolvenKit fits in to the modding workflow",id:"how-wolvenkit-fits-in-to-the-modding-workflow",level:2},{value:"Essentials",id:"essentials",level:3},{value:"Game entities",id:"game-entities",level:3},{value:"Materials",id:"materials",level:3},{value:"Get ready for modding",id:"get-ready-for-modding",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-wolvenkit-fits-in-to-the-modding-workflow"},"How WolvenKit fits in to the modding workflow"),(0,a.kt)("h3",{id:"essentials"},"Essentials"),(0,a.kt)("p",null,"When modding Cyberpunk 2077, WolvenKit helps with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browsing game files, and helping you bring these into project folders that it helps you set up to organise the content you are modding"),(0,a.kt)("li",{parentName:"ul"},"Exporting these W2RC RedEngine format game files into formats that can be read and edited by other apps"),(0,a.kt)("li",{parentName:"ul"},"Reimporting and converting these edited files back into the RedEngine format"),(0,a.kt)("li",{parentName:"ul"},"Packing and installing/copying these files to the correct part of the game folder")),(0,a.kt)("h3",{id:"game-entities"},"Game entities"),(0,a.kt)("p",null,"When modding, you will need to get your head around fhe following W2RC files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".ent files are entity files and equivalent to game objects and are what can be spawned within game. They link in various basic logic and rules that govern that object. They will either link .mesh files in directly for simple objects, or specify a list of appearance variations to call from a dedicated .app file. Note: For characters you should mod the .ent files in the quest subfolder"),(0,a.kt)("li",{parentName:"ul"},".app files hold the different configuration of appearances that can be switched for more complex game entities such as characters or vehicles. These files then directly link in the relevant .mesh geometry, .rig files and .anim animation files for each appearance. "),(0,a.kt)("li",{parentName:"ul"},".mesh files are the actual 3d objects that hold the geometry but also hold a list of materials to use for different appearances requested of that mesh in game, which are embedded within compressed buffers within the .mesh file itself. ")),(0,a.kt)("h3",{id:"materials"},"Materials"),(0,a.kt)("p",null,"Materials are fairly complex in the way they are organised. The key thing is that materials are often embedded within compressed buffers inside the .mesh files. However, they can be and are sometimes referenced as external files with some simpler game objects.\nWkit can't edit these material buffers yet, a feature which is in advanced development for v8.6. In the meantime, you can export the .mesh using the WithMaterials option to get a json file which lists the material assignments. You can edit this file in an external text/script editor, then use the import option to bring the material assignments back into the .mesh file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".mt files are material templates that are the lowest level of abstraction and the source for material files. "),(0,a.kt)("li",{parentName:"ul"},".mi material instance files instantiate different settings based  on a .mt material template file to describe single-layer materials")),(0,a.kt)("p",null,"One of the .mt files is the multilayered.mt, which is used a lot by characters and vehicles as the core template for multilayered complex materials. Back in the .mesh file, they are referenced within the mesh material buffers as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".multilayered.mt as the base template"),(0,a.kt)("li",{parentName:"ul"},".mlsetup files to describe the kinds of .mi material assigned to each layer for this instance of the .multilayered.mt"),(0,a.kt)("li",{parentName:"ul"},".mlmask files which combine internally a set of grayscale textures which describes which layer is used by which part of the mesh"),(0,a.kt)("li",{parentName:"ul"},".xbm files hold textures")),(0,a.kt)("h2",{id:"get-ready-for-modding"},"Get ready for modding"),(0,a.kt)("p",null,"The rest of this guide section will help get you up to speed with WolvenKit's features and workflows. We'll walk through creating basic mods step-by-step, while explaining how to get the best out of WolvenKit. Lastly keep in mind that understanding and modding REDengine 4 can be very challenging. If you're feeling stuck, please consider reaching out to fellow modders and the development team on our Discord server."),(0,a.kt)("p",null,"Lastly keep in mind that understanding and modding REDengine 4 can be very challenging. If you're feeling stuck, please consider reaching out to fellow modders and the development team on our Discord server. Now let's dive in..."))}m.isMDXComponent=!0}}]);