(function(x,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("@headlessui/vue"),require("@heroicons/vue/solid"),require("@vueuse/core"),require("@vueuse/components")):typeof define=="function"&&define.amd?define(["exports","vue","@headlessui/vue","@heroicons/vue/solid","@vueuse/core","@vueuse/components"],e):(x=typeof globalThis<"u"?globalThis:x||self,e(x["ui-components"]={},x.Vue,x.vue$1,x.solid,x.core,x.components))})(this,function(x,e,m,P,t,D){"use strict";const K=["onKeydown"],H={class:"relative"},L={class:"inline-block w-full rounded-md shadow-sm"},M={class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5"},_={class:"block flex flex-wrap gap-2"},j={class:"flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5"},U=["onClick"],X={class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},G={class:"absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"},Q={__name:"MultiCombobox",props:{items:{type:Array,required:!0},modelValue:{type:Array,default:()=>[]},query:{default:""},stringify:{type:Function,default:void 0},uniqueKey:{type:Function,default:void 0},filter:{type:Function,default:void 0},inputAttrs:{type:Object,default:()=>({})},excludeSelected:{type:Boolean,default:!1},hideTags:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},label:{type:String,default:void 0},disabled:{type:Array,default:()=>[]},autoHide:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},emits:["update:modelValue","update:query","clear"],setup(o,{emit:i}){const a=o,r=e.ref(!1),f=()=>t.set(r,!t.get(r)),{items:c,excludeSelected:B,modelValue:E,query:k}=e.toRefs(a),C=a.stringify??(l=>(l==null?void 0:l.name)??l??""),g=a.uniqueKey??(l=>(l==null?void 0:l.id)??l),h=e.reactive([]),b=e.ref(t.get(k)),w=e.ref([]),V=e.computed(()=>h.filter(l=>t.get(w).map(g).includes(g(l)))),s=a.filter??(async(l,p)=>t.get(p).filter(n=>C(n).toLowerCase().includes(l.toLowerCase()))),N=e.computed(()=>t.get(c).filter(l=>!t.get(w).map(g).includes(g(l)))),y=e.ref(t.get(c)),S=t.templateRef("input"),q=()=>t.set(r,!0),R=()=>t.set(r,!1),$=()=>t.get(S).$el.focus();function I(l){l.value===""&&t.get(b)!==""&&(l.value=t.get(b))}async function F(){t.set(w,[]),t.set(b,""),await e.nextTick(),$(),i("clear")}async function T(l){t.set(w,t.get(w).filter(p=>g(p)!==g(l))),await e.nextTick(),$()}const z=t.templateRef("container");return t.onClickOutside(z,()=>R()),e.watch(c,l=>{l.forEach(p=>{h.findIndex(n=>g(n)===g(p))===-1&&h.push(p)})},{immediate:!0}),e.watch(E,l=>t.set(w,l),{immediate:!0}),e.watch(w,l=>i("update:modelValue",l)),e.watch(w,()=>t.set(b,"")),e.watch(b,l=>i("update:query",l)),e.watch(b,async l=>{const p=await s(t.get(l),t.get(B)?t.get(N):t.get(c));t.set(y,t.get(p)??[])}),e.watch(k,l=>t.set(b,l!=null?`${l}`:"")),t.syncRef(c,y,{direction:"ltr"}),e.watch(b,l=>t.get(S).$el.value=l),e.watch(w,()=>a.autoHide&&R()),e.watch(b,()=>q()),e.onMounted(()=>e.nextTick().then(()=>t.get(S).$el.value=t.get(b))),e.onMounted(()=>a.autofocus&&$()),(l,p)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"container",ref:z,onKeydown:e.withKeys(R,["esc"]),onKeyup:p[4]||(p[4]=({code:n})=>["ArrowUp","ArrowDown"].includes(n)&&q())},[e.createVNode(e.unref(m.Combobox),{as:"div",modelValue:w.value,"onUpdate:modelValue":p[3]||(p[3]=n=>w.value=n),multiple:""},{default:e.withCtx(()=>[e.renderSlot(l.$slots,"label",{},()=>[e.createVNode(e.unref(m.ComboboxLabel),{class:"block text-sm font-medium leading-5 text-gray-700 empty:hidden"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.label),1)]),_:1})]),e.createElementVNode("div",H,[e.createElementVNode("span",L,[e.createElementVNode("div",M,[e.createElementVNode("span",_,[w.value.length===0?(e.openBlock(),e.createElementBlock("span",{key:0,class:"p-0.5 cursor-pointer empty:hidden",onClick:$},[e.renderSlot(l.$slots,"empty-state")])):e.createCommentVNode("",!0),o.hideTags?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(e.unref(V),n=>(e.openBlock(),e.createElementBlock("span",{key:e.unref(g)(n)},[e.renderSlot(l.$slots,"selected-items",e.normalizeProps(e.guardReactiveProps({item:n,stringify:e.unref(C),remove:T})),()=>[e.createElementVNode("span",j,[e.createElementVNode("span",null,e.toDisplayString(e.unref(C)(n)),1),e.createElementVNode("button",{role:"button",onClick:d=>T(n)},[e.createVNode(e.unref(P.XIcon),{class:"h-4 w-4"})],8,U)])])]))),128)),e.createVNode(e.unref(m.ComboboxInput),e.mergeProps({ref_key:"input",ref:S,autocomplete:"off"},o.inputAttrs,{class:"reset border-none p-0 focus:ring-0 grow",onFocus:q,onBlur:p[0]||(p[0]=n=>I(n.target)),onChange:p[1]||(p[1]=n=>b.value=n.target.value)}),null,16)]),e.createElementVNode("div",X,[o.clearable?(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",onClick:F},[w.value.length!==0?(e.openBlock(),e.createBlock(e.unref(P.XIcon),{key:0,class:"h-5 w-5 text-gray-300","aria-hidden":"true"})):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),e.createElementVNode("button",{type:"button",onClick:f},[e.createVNode(e.unref(P.SelectorIcon),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])])])]),e.withDirectives(e.createElementVNode("div",G,[y.value.length>0?(e.openBlock(),e.createBlock(e.unref(m.ComboboxOptions),{key:0,static:!o.autoHide,class:"shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(y.value,n=>(e.openBlock(),e.createBlock(e.unref(m.ComboboxOption),{key:e.unref(g)(n),value:e.unref(g)(n),disabled:o.disabled.includes(e.unref(g)(n)),onClick:p[2]||(p[2]=()=>o.autoHide&&R())},{default:e.withCtx(({active:d,selected:u})=>[e.renderSlot(l.$slots,"default",e.normalizeProps(e.guardReactiveProps({item:n,active:d,selected:u,stringify:e.unref(C)})),()=>[e.createElementVNode("li",{class:e.normalizeClass(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none",d?"bg-blue-600 text-white":"text-gray-900"])},[e.createElementVNode("span",{class:e.normalizeClass(["block",{truncate:!d,"font-semibold":u,"font-normal":!u}])},e.toDisplayString(e.unref(C)(n)),3),u?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(["absolute inset-y-0 right-0 flex items-center pr-4",{"text-white":d,"text-blue-600":!d}])},[e.createVNode(e.unref(P.CheckIcon),{class:"h-5 w-5"})],2)):e.createCommentVNode("",!0)],2)])]),_:2},1032,["value","disabled"]))),128))]),_:3},8,["static"])):e.createCommentVNode("",!0)],512),[[e.vShow,r.value]])])]),_:3},8,["modelValue"])],40,K))}},W=["onKeydown"],J={class:"relative"},Y={class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},Z={class:"absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"},v={__name:"SingleCombobox",props:{items:{type:Array,required:!0},modelValue:{type:[String,Number,Object],default:null},query:{default:""},stringify:{type:Function,default:void 0},uniqueKey:{type:Function,default:void 0},filter:{type:Function,default:void 0},inputAttrs:{type:Object,default:()=>({})},excludeSelected:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},label:{type:String,default:void 0},disabled:{type:Array,default:()=>[]},autoHide:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},emits:["update:modelValue","update:query","clear"],setup(o,{emit:i}){const a=o,r=e.ref(!1),f=()=>t.set(r,!t.get(r)),{items:c,excludeSelected:B,modelValue:E,query:k}=e.toRefs(a),C=a.stringify??(n=>(n==null?void 0:n.name)??n??void 0),g=n=>{try{const d=C(n);if(d==null)throw Error("Cannot stringify nullish value");return`${d}`}catch(d){return console.debug("Unable to stringify item",n,d),""}},h=a.uniqueKey??(n=>(n==null?void 0:n.id)??n),b=e.reactive([]);function w(n){return b.find(d=>h(d)===n)}const V=e.ref(t.get(k)),s=e.ref(),N=a.filter??(async(n,d)=>t.get(d).filter(u=>g(u).toLowerCase().includes(n.toLowerCase()))),y=e.computed(()=>t.get(c).filter(n=>h(n)!==h(t.get(E)))),S=e.ref(t.get(c)),q=n=>n!=null?g(n):t.get(V),R=t.templateRef("input"),$=()=>t.set(r,!0),I=()=>t.set(r,!1),F=()=>t.get(R).$el.focus();function T(n){n.value===""&&t.get(V)!==""&&(n.value=t.get(V))}async function z(){t.set(s,void 0),t.set(V,""),await e.nextTick(),F(),i("clear")}const l=n=>t.get(s)!=null&&h(n)===h(t.get(s)),p=t.templateRef("container");return t.onClickOutside(p,()=>I()),e.watch(c,n=>{n.forEach(d=>{b.findIndex(u=>h(u)===h(d))===-1&&b.push(d)})},{immediate:!0}),e.watch(b,async()=>{t.get(s)==null&&a.modelValue!=null&&(t.set(s,w(h(a.modelValue))),await e.nextTick(),I())},{immediate:!0}),e.watch(E,n=>t.set(s,w(n)),{immediate:!0}),e.watch(s,n=>{h(n)!==h(a.modelValue)&&i("update:modelValue",h(n))}),e.watch(s,n=>{n==null?t.set(V,""):t.set(V,g(n))}),e.watch(V,n=>i("update:query",n)),e.watch(V,async n=>{const d=await N(t.get(n),t.get(B)?t.get(y):t.get(c));t.set(S,t.get(d)??[])}),e.watch(k,n=>t.set(V,n!=null?`${n}`:"")),e.watch(s,()=>a.autoHide&&I()),e.watch(V,()=>$()),t.syncRef(c,S,{direction:"ltr"}),e.onMounted(()=>a.autofocus&&F()),(n,d)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"container",ref:p,onKeydown:e.withKeys(I,["esc"]),onKeyup:d[4]||(d[4]=({code:u})=>["ArrowUp","ArrowDown"].includes(u)&&$())},[e.createVNode(e.unref(m.Combobox),{as:"div",modelValue:s.value,"onUpdate:modelValue":d[3]||(d[3]=u=>s.value=u)},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"label",{},()=>[e.createVNode(e.unref(m.ComboboxLabel),{class:"block text-sm font-medium text-gray-700 mb-1 empty:hidden"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.label),1)]),_:1})]),e.createElementVNode("div",J,[e.createVNode(e.unref(m.ComboboxInput),e.mergeProps({ref_key:"input",ref:R,"display-value":q,autocomplete:"off"},o.inputAttrs,{class:"w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",onFocus:$,onBlur:d[0]||(d[0]=u=>T(u.target)),onChange:d[1]||(d[1]=u=>V.value=u.target.value)}),null,16),e.createElementVNode("div",Y,[o.clearable?(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",onClick:z},[e.unref(E)!=null?(e.openBlock(),e.createBlock(e.unref(P.XIcon),{key:0,name:"x",class:"h-5 w-5 text-gray-300","aria-hidden":"true"})):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),e.createElementVNode("button",{type:"button",onClick:f},[e.createVNode(e.unref(P.SelectorIcon),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),e.withDirectives(e.createElementVNode("div",Z,[e.createVNode(e.unref(m.ComboboxOptions),{static:!o.autoHide,class:"shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(S.value,u=>(e.openBlock(),e.createBlock(e.unref(m.ComboboxOption),{key:e.unref(h)(u),value:u,disabled:o.disabled.includes(e.unref(h)(u)),onClick:d[2]||(d[2]=()=>o.autoHide&&I())},{default:e.withCtx(({active:O})=>[e.renderSlot(n.$slots,"default",e.normalizeProps(e.guardReactiveProps({item:u,active:O,selected:l(u),stringify:g})),()=>[e.createElementVNode("li",{class:e.normalizeClass(["relative cursor-pointer select-none py-2 pl-3 pr-9",O?"bg-indigo-600 text-white":"text-gray-900"])},[e.createElementVNode("span",{class:e.normalizeClass(["block",!O&&"truncate",l(u)&&"font-semibold"])},e.toDisplayString(g(u)),3),l(u)?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(["absolute inset-y-0 right-0 flex items-center pr-4",O?"text-white":"text-indigo-600"])},[e.createVNode(e.unref(P.CheckIcon),{class:"h-5 w-5","aria-hidden":"true"})],2)):e.createCommentVNode("",!0)],2)])]),_:2},1032,["value","disabled"]))),128))]),_:3},8,["static"])],512),[[e.vShow,r.value]])])]),_:3},8,["modelValue"])],40,W))}},ee={__name:"ComboBox",props:{items:{type:Array,required:!0},modelValue:{type:[String,Number,Object,Array],default:void 0},stringify:{type:Function,default:void 0},uniqueKey:{type:Function,default:void 0},filter:{type:Function,default:void 0},inputAttrs:{type:Object,default:()=>({})},excludeSelected:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},label:{type:String,default:void 0}},setup(o){return(i,a)=>Array.isArray(o.modelValue)?(e.openBlock(),e.createBlock(Q,e.mergeProps({key:0,items:o.items,"model-value":o.modelValue,stringify:o.stringify,"unique-key":o.uniqueKey,filter:o.filter,"input-attrs":o.inputAttrs,"exclude-selected":o.excludeSelected,clearable:o.clearable,label:o.label},i.$attrs),{label:e.withCtx(()=>[e.renderSlot(i.$slots,"label")]),"selected-items":e.withCtx(({item:r,stringify:f,remove:c})=>[e.renderSlot(i.$slots,"selected-items",e.normalizeProps(e.guardReactiveProps({item:r,stringify:f,remove:c})))]),default:e.withCtx(({item:r,active:f,selected:c,stringify:B})=>[e.renderSlot(i.$slots,"default",e.normalizeProps(e.guardReactiveProps({item:r,active:f,selected:c,stringify:B})))]),_:3},16,["items","model-value","stringify","unique-key","filter","input-attrs","exclude-selected","clearable","label"])):(e.openBlock(),e.createBlock(v,e.mergeProps({key:1,items:o.items,"model-value":o.modelValue,stringify:o.stringify,"unique-key":o.uniqueKey,filter:o.filter,"input-attrs":o.inputAttrs,"exclude-selected":o.excludeSelected,clearable:o.clearable,label:o.label},i.$attrs),{label:e.withCtx(()=>[e.renderSlot(i.$slots,"label")]),default:e.withCtx(({item:r,active:f,selected:c,stringify:B})=>[e.renderSlot(i.$slots,"default",e.normalizeProps(e.guardReactiveProps({item:r,active:f,selected:c,stringify:B})))]),_:3},16,["items","model-value","stringify","unique-key","filter","input-attrs","exclude-selected","clearable","label"]))}},te={__name:"HoverableElement",props:{as:{type:String,default:"div"}},setup(o){const i=e.ref(!1);function a(r){i.value=r}return(r,f)=>e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.as),null,{default:e.withCtx(()=>[e.renderSlot(r.$slots,"default",{isHovered:i.value})]),_:3})),[[e.unref(D.vElementHover),a]])}},ne=e.createElementVNode("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),oe={class:"flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"},A={__name:"Modal",props:{open:{type:Boolean,default:!1},hideCloseIcon:{type:Boolean,default:!1}},emits:["submit","reset","close"],setup(o,{emit:i}){const a=o,{open:r}=e.toRefs(a),f=e.ref(a.open);function c(){i("close")}return t.syncRef(r,f,{direction:"ltr"}),(B,E)=>(e.openBlock(),e.createBlock(e.unref(m.TransitionRoot),{as:"template",show:f.value},{default:e.withCtx(()=>[e.createVNode(e.unref(m.Dialog),{as:"div",class:"relative z-10",onClose:c},{default:e.withCtx(()=>[e.createVNode(e.unref(m.TransitionChild),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:e.withCtx(()=>[ne]),_:1}),e.createElementVNode("div",{class:"fixed z-10 inset-0 overflow-y-auto",onSubmit:E[0]||(E[0]=e.withModifiers((...k)=>B.submit&&B.submit(...k),["prevent"]))},[e.createElementVNode("div",oe,[e.createVNode(e.unref(m.TransitionChild),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:e.withCtx(()=>[e.createVNode(e.unref(m.DialogPanel),{class:e.normalizeClass([o.hideCloseIcon?"pt-5":"pt-8","relative bg-white rounded-lg","px-4 pb-4","text-left overflow-hidden shadow-xl","transform transition-all","sm:max-w-lg sm:w-full"])},{default:e.withCtx(()=>[o.hideCloseIcon?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:"absolute top-0 right-0 p-3 focus:outline-none",onClick:c},[e.createVNode(e.unref(P.XIcon),{class:"h-5 w-5 text-gray-800 hover:text-black"})])),e.renderSlot(B.$slots,"default")]),_:3},8,["class"])]),_:3})])],32)]),_:3})]),_:3},8,["show"]))}},le=["onSubmit","onReset"],ae={class:"mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden"},se={type:"submit",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"},re={type:"reset",class:"w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"},ie={__name:"Prompt",props:{open:{type:Boolean,default:!1},resetButtonText:{type:String,default:"Cancel"},submitButtonText:{type:String,default:"Submit"},onReset:{type:Function,default:void 0},onSubmit:{type:Function,default:void 0},hideOnSubmit:{type:Boolean,default:!0},hideOnReset:{type:Boolean,default:!0},noFooter:{type:Boolean,default:!1}},emits:["submit","reset"],setup(o,{emit:i}){const a=o,{open:r}=e.toRefs(a),f=e.ref(a.open),c=t.templateRef("FormHTMLElement");async function B(){await(a.onSubmit??(C=>i("submit",{form:t.get(C),visible:f})))({form:t.get(c),visible:f}),a.hideOnSubmit&&t.set(f,!1)}async function E(){await(a.onReset??(C=>i("reset",{form:t.get(C),visible:f})))({form:t.get(c),visible:f}),a.hideOnReset&&t.set(f,!1)}return t.syncRef(r,f,{direction:"ltr"}),(k,C)=>(e.openBlock(),e.createBlock(A,{open:f.value},{default:e.withCtx(()=>[e.createElementVNode("form",{ref_key:"FormHTMLElement",ref:c,onSubmit:e.withModifiers(B,["prevent"]),onReset:e.withModifiers(E,["prevent"])},[e.createElementVNode("div",null,[e.renderSlot(k.$slots,"default",{form:e.unref(c)})]),e.renderSlot(k.$slots,"footer",{},()=>[e.createElementVNode("footer",ae,[e.renderSlot(k.$slots,"buttons",{},()=>[e.createElementVNode("button",se,e.toDisplayString(o.submitButtonText),1),e.createElementVNode("button",re,e.toDisplayString(o.resetButtonText),1)])])])],40,le)]),_:3},8,["open"]))}},de=(o,i)=>{const a=o.__vccOpts||o;for(const[r,f]of i)a[r]=f;return a},ce={},fe={class:"mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5","aria-hidden":"true"};function me(o,i){return e.openBlock(),e.createElementBlock("div",fe,[e.renderSlot(o.$slots,"default")])}const ue=de(ce,[["render",me]]),pe={__name:"PromptTitle",props:{tag:{type:String,default:"h3"}},setup(o){return(i,a)=>(e.openBlock(),e.createBlock(e.unref(m.DialogTitle),{as:o.tag,class:"mb-2 text-center text-lg leading-6 font-medium text-gray-900"},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"default")]),_:3},8,["as"]))}},ye=e.createElementVNode("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"},null,-1),ge={class:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"},he={class:"relative"},be=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",class:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),we={class:"border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14"},xe={key:0,class:"bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"},ke={class:"mt-2 text-sm text-gray-800"},Ce={class:"border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14"},Ve=e.createElementVNode("p",{class:"mt-4 font-semibold text-gray-900"},"No results found",-1),Be=e.createElementVNode("p",{class:"mt-2 text-gray-500"},"We couldn’t find anything with that term. Please try again.",-1),Ne={__name:"CommandPalette",props:{open:{type:Boolean,default:!1},items:{type:Array,default:()=>[]},groupGetter:{type:Function,default:void 0},stringify:{type:Function,default:void 0},filter:{type:Function,default:void 0},prompt:{type:Boolean,default:!1},placeholder:{type:String,default:"Search..."}},emits:["close","update:open","pick"],setup(o,{emit:i}){const a=o,r=e.ref(""),{open:f}=e.toRefs(a),c=e.ref(!0);t.syncRef(f,c,{direction:"ltr"});const B=async(s,N,y)=>s===""&&a.prompt?[]:N.filter(S=>y(S).toLowerCase().includes(s.toLowerCase())),E=a.filter??B,k=t.asyncComputed(()=>E(t.get(r),a.items,C),a.items),C=a.stringify??(s=>s==null?void 0:s.name),g=a.groupGetter??(()=>{}),h=e.computed(()=>k.value.reduce((s,N)=>{let y=g(N);return{...s,[y]:[...s[y]||[],N]}},{}));function b(s){t.set(r,s)}function w(s){i("pick",s),V()}function V(){i("close"),i("update:open",!1),t.set(c,!1)}return(s,N)=>(e.openBlock(),e.createBlock(e.unref(m.TransitionRoot),{show:c.value,as:"template",onAfterLeave:N[2]||(N[2]=y=>r.value=""),appear:""},{default:e.withCtx(()=>[e.createVNode(e.unref(m.Dialog),{as:"div",class:"relative z-10",onClose:N[1]||(N[1]=y=>V())},{default:e.withCtx(()=>[e.createVNode(e.unref(m.TransitionChild),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:e.withCtx(()=>[ye]),_:1}),e.createElementVNode("div",ge,[e.createVNode(e.unref(m.TransitionChild),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:e.withCtx(()=>[e.createVNode(e.unref(m.DialogPanel),{class:"mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:e.withCtx(()=>[e.createVNode(e.unref(m.Combobox),{"onUpdate:modelValue":w},{default:e.withCtx(()=>[e.createElementVNode("div",he,[e.renderSlot(s.$slots,"search-icon",{},()=>[be]),e.renderSlot(s.$slots,"input",{query:r.value},()=>[e.createVNode(e.unref(m.ComboboxInput),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:o.placeholder,onChange:N[0]||(N[0]=y=>b(y.target.value))},null,8,["placeholder"])])]),o.prompt&&r.value===""?e.renderSlot(s.$slots,"prompt",{key:0},()=>[e.createElementVNode("div",we,[e.renderSlot(s.$slots,"prompt-inner")])]):!o.prompt||e.unref(k).length>0?(e.openBlock(),e.createBlock(e.unref(m.ComboboxOptions),{key:1,static:"",class:"max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(Object.entries(e.unref(h)),([y,S])=>(e.openBlock(),e.createElementBlock("li",{key:y},[e.renderSlot(s.$slots,"group",e.normalizeProps(e.guardReactiveProps({group:y,items:S})),()=>[y!=="undefined"?(e.openBlock(),e.createElementBlock("h2",xe,e.toDisplayString(y),1)):e.createCommentVNode("",!0)]),e.createElementVNode("ul",ke,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(S,(q,R)=>(e.openBlock(),e.createBlock(e.unref(m.ComboboxOption),{key:q.id,value:q,as:"template"},{default:e.withCtx(({active:$})=>[e.renderSlot(s.$slots,"default",e.normalizeProps(e.guardReactiveProps({group:y,item:q,items:S,index:R,active:$,stringify:e.unref(C)})),()=>[e.createElementVNode("li",{class:e.normalizeClass(["cursor-pointer select-none px-4 py-2",$&&"bg-indigo-600 text-white"])},e.toDisplayString(e.unref(C)(q)),3)])]),_:2},1032,["value"]))),128))])]))),128))]),_:3})):e.createCommentVNode("",!0),r.value!==""&&e.unref(k).length===0?e.renderSlot(s.$slots,"empty-state",{key:2},()=>[e.createElementVNode("div",Ce,[e.renderSlot(s.$slots,"empty-state-inner",{},()=>[Ve,Be])])]):e.createCommentVNode("",!0)]),_:3})]),_:3})]),_:3})])]),_:3})]),_:3},8,["show"]))}};x.ComboBox=ee,x.CommandPalette=Ne,x.HoverableElement=te,x.Modal=A,x.Prompt=ie,x.PromptIcon=ue,x.PromptTitle=pe,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
