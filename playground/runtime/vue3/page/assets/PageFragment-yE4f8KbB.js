import{_ as i}from"./Component.vue_vue_type_script_setup_true_lang-FgiJbP2H.js";import{u as l}from"./useApp-9vdAgOwh.js";import"./index-WLlW_gyE.js";const s=["id"],g=Vue.defineComponent({__name:"PageFragment",props:{config:{},model:{default:()=>({})}},setup(a){const n=a,o=Vue.inject("app"),c=Vue.computed(()=>o==null?void 0:o.transformStyle(n.config.style||{}));return l({config:n.config,methods:{}}),(e,u)=>(Vue.openBlock(),Vue.createElementBlock("div",{id:"".concat(e.config.id||""),class:Vue.normalizeClass("magic-ui-page-fragment magic-ui-container magic-layout-".concat(e.config.layout).concat(e.config.className?" ".concat(e.config.className):"")),style:Vue.normalizeStyle(c.value)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,t=>(Vue.openBlock(),Vue.createBlock(i,{key:t.id,config:t},null,8,["config"]))),128))],14,s))}});export{g as default};
//# sourceMappingURL=PageFragment-yE4f8KbB.js.map
