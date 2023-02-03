function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequire4485;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequire4485=r);var a,o,l=r("ilwiq"),d=r("5Rd1x"),c=r("RPVlj"),s={};a=s,o=function(){var t=function(){function e(t){return r.appendChild(t.dom),t}function n(t){for(var e=0;e<r.children.length;e++)r.children[e].style.display=e===t?"block":"none";i=t}var i=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",(function(t){t.preventDefault(),n(++i%r.children.length)}),!1);var a=(performance||Date).now(),o=a,l=0,d=e(new t.Panel("FPS","#0ff","#002")),c=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var s=e(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:r,addPanel:e,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){l++;var t=(performance||Date).now();if(c.update(t-a,200),t>o+1e3&&(d.update(1e3*l/(t-o),100),o=t,l=0,s)){var e=performance.memory;s.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){a=this.end()},domElement:r,setMode:n}};return t.Panel=function(t,e,n){var i=1/0,r=0,a=Math.round,o=a(window.devicePixelRatio||1),l=80*o,d=48*o,c=3*o,s=2*o,u=3*o,f=15*o,m=74*o,v=30*o,p=document.createElement("canvas");p.width=l,p.height=d,p.style.cssText="width:80px;height:48px";var w=p.getContext("2d");return w.font="bold "+9*o+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,l,d),w.fillStyle=e,w.fillText(t,c,s),w.fillRect(u,f,m,v),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,f,m,v),{dom:p,update:function(d,h){i=Math.min(i,d),r=Math.max(r,d),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,l,f),w.fillStyle=e,w.fillText(a(d)+" "+t+" ("+a(i)+"-"+a(r)+")",c,s),w.drawImage(p,u+o,f,m-o,v,u,f,m-o,v),w.fillRect(u+m-o,f,o,v),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+m-o,f,o,a((1-d/h)*v))}}},t},"object"==typeof s?s=o():"function"==typeof define&&define.amd?define(o):a.Stats=o();var u=r("jiuw3"),f=r("4CEV9");const m={enableRaytracing:!0,animate:!0,resolutionScale:1/window.devicePixelRatio,smoothNormals:!0};let v,p,w,h,x,M,y,g;function b(){p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix();const t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio*m.resolutionScale;v.setSize(t,e),v.setPixelRatio(n)}!function(){v=new l.WebGLRenderer({antialias:!1}),v.setPixelRatio(window.devicePixelRatio),v.setClearColor(594970),v.setSize(window.innerWidth,window.innerHeight),v.outputEncoding=l.sRGBEncoding,document.body.appendChild(v.domElement),w=new l.Scene;const e=new l.DirectionalLight(16777215,1);e.position.set(1,1,1),w.add(e),w.add(new l.AmbientLight(11583173,.5)),p=new l.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),p.position.set(0,0,4),p.far=100,p.updateProjectionMatrix(),x=new(t(s)),document.body.appendChild(x.dom);const n=new l.TorusKnotGeometry(1,.3,300,50),i=new f.MeshBVH(n,{maxLeafTris:1,strategy:f.SAH});y=new l.Mesh(n,new l.MeshStandardMaterial),w.add(y),g=new l.Clock;const r=new l.ShaderMaterial({defines:{SMOOTH_NORMALS:1},uniforms:{bvh:{value:new f.MeshBVHUniformStruct},normalAttribute:{value:new f.FloatVertexAttributeTexture},cameraWorldMatrix:{value:new l.Matrix4},invProjectionMatrix:{value:new l.Matrix4},invModelMatrix:{value:new l.Matrix4}},vertexShader:"\n\n\t\t\tvarying vec2 vUv;\n\t\t\tvoid main() {\n\n\t\t\t\tvec4 mvPosition = vec4( position, 1.0 );\n\t\t\t\tmvPosition = modelViewMatrix * mvPosition;\n\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\tvUv = uv;\n\n\t\t\t}\n\n\t\t",fragmentShader:`\n\t\t\tprecision highp isampler2D;\n\t\t\tprecision highp usampler2D;\n\t\t\t${f.shaderStructs}\n\t\t\t${f.shaderIntersectFunction}\n\n\t\t\tuniform mat4 cameraWorldMatrix;\n\t\t\tuniform mat4 invProjectionMatrix;\n\t\t\tuniform mat4 invModelMatrix;\n\t\t\tuniform sampler2D normalAttribute;\n\t\t\tuniform BVH bvh;\n\t\t\tvarying vec2 vUv;\n\n\t\t\tvoid main() {\n\n\t\t\t\t// get [-1, 1] normalized device coordinates\n\t\t\t\tvec2 ndc = 2.0 * vUv - vec2( 1.0 );\n\t\t\t\tvec3 rayOrigin, rayDirection;\n\t\t\t\tndcToCameraRay(\n\t\t\t\t\tndc, invModelMatrix * cameraWorldMatrix, invProjectionMatrix,\n\t\t\t\t\trayOrigin, rayDirection\n\t\t\t\t);\n\n\t\t\t\t// hit results\n\t\t\t\tuvec4 faceIndices = uvec4( 0u );\n\t\t\t\tvec3 faceNormal = vec3( 0.0, 0.0, 1.0 );\n\t\t\t\tvec3 barycoord = vec3( 0.0 );\n\t\t\t\tfloat side = 1.0;\n\t\t\t\tfloat dist = 0.0;\n\n\t\t\t\t// get intersection\n\t\t\t\tbool didHit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );\n\n\t\t\t\t#if SMOOTH_NORMALS\n\n\t\t\t\t\tvec3 normal = textureSampleBarycoord(\n\t\t\t\t\t\tnormalAttribute,\n\t\t\t\t\t\tbarycoord,\n\t\t\t\t\t\tfaceIndices.xyz\n\t\t\t\t\t).xyz;\n\n\t\t\t\t#else\n\n\t\t\t\t\tvec3 normal = face.normal;\n\n\t\t\t\t#endif\n\n\t\t\t\t// set the color\n\t\t\t\tgl_FragColor = ! didHit ? vec4( 0.0366, 0.0813, 0.1057, 1.0 ) : vec4( normal, 1.0 );\n\n\t\t\t}\n\t\t`});M=new c.FullScreenQuad(r),r.uniforms.bvh.value.updateFrom(i),r.uniforms.normalAttribute.value.updateFrom(n.attributes.normal),new d.OrbitControls(p,v.domElement),h=new u.GUI,h.add(m,"enableRaytracing"),h.add(m,"animate"),h.add(m,"smoothNormals").onChange((t=>{M.material.defines.SMOOTH_NORMALS=Number(t),M.material.needsUpdate=!0})),h.add(m,"resolutionScale",.1,1,.01).onChange(b),h.open(),window.addEventListener("resize",b,!1),b()}(),function t(){x.update(),requestAnimationFrame(t);const e=g.getDelta();m.animate&&(y.rotation.y+=e);if(m.enableRaytracing){p.updateMatrixWorld(),y.updateMatrixWorld();const t=M.material.uniforms;t.cameraWorldMatrix.value.copy(p.matrixWorld),t.invProjectionMatrix.value.copy(p.projectionMatrixInverse),t.invModelMatrix.value.copy(y.matrixWorld).invert(),M.render(v)}else v.render(w,p)}();
//# sourceMappingURL=gpuPathTracingSimple.15e03ba2.js.map
