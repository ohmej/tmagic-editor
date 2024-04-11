import{_ as a,o as i,c as s,R as t}from"./chunks/framework.TI63eJ3E.js";const g=JSON.parse('{"title":"基础概念","description":"","frontmatter":{},"headers":[],"relativePath":"guide/conception.md","filePath":"guide/conception.md"}'),e={name:"guide/conception.md"},n=t(`<h1 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h1><p>我们通过讲述tmagic-editor的一些基础概念。帮助开发者可以了解tmagic-editor是如何运行以及如何在基础项目之上开发、使用它。</p><h2 id="编辑器" tabindex="-1">编辑器 <a class="header-anchor" href="#编辑器" aria-label="Permalink to &quot;编辑器&quot;">​</a></h2><p>编辑器基础布局上分为：左面板、工作区、右面板、工具栏，如下图。</p><ul><li><strong>左面板</strong>，包含了组件库的展示，以及工作区中已添加组件的组件树展示。</li><li><strong>工作区</strong>，一个页面模拟器，用于实时展示用户添加到当前页面中的组件在真实页面中的展示情况。</li><li><strong>右面板</strong>，展示组件提供出来的表单选项，让用户可以通过配置项来改变组件的行为和样式。</li><li><strong>工具栏</strong>，放置一些如缩放、撤销等工具按键。 <img src="https://vfiles.gtimg.cn/vupload/20211009/083dfa1633771059332.png"></li></ul><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><p>组件是tmagic-editor可配置页面元素的最小单位。我们都会从左面板的组件区中选中组件，加入到工作区的模拟器中，然后在右面板中对组件进行配置。一个组件的基本内容，会包含如下：</p><ul><li>组件样式、逻辑代码（即开发者写的 vue, react 等代码）。</li><li>表单配置描述，tmagic-editor的定义是导出一个表单对象，这份配置仅在编辑器中使用。</li><li>拓展描述，这部分内容目前还未有严格定义，但是我们保留这个扩展能力。</li><li>组件 <code>type</code>, 是组件的类型，这是用来告诉编辑器，我们要渲染的是什么组件。每个组件在开发时就应该确定这样一个唯一、不和其他组件冲突的组件 <code>type</code>。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ⬅️</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;按钮&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ⬅️</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ⬅️</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h3><p>插件和组件类似，但是插件的功能是作为页面逻辑行为的一种补充方式。一般不显式的在模拟器中被渲染出具体内容（除非插件中会生成组件并插入页面），通常我们会用插件实现类似登录，页面环境判断，请求拦截器等等功能。</p><p>插件一般包含如下内容：</p><ul><li>插件逻辑代码。</li><li>插件 <code>type</code>，是插件的类型，和组件 <code>type</code> 作用相同。在开发时就应该确定这样一个唯一、不和其他组件冲突的组件 <code>type</code>。</li></ul><h3 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h3><p>容器是tmagic-editor编辑器中的一个基础单位，页面本身就是一个容器，在基础组件中称为<strong>组</strong>，tmagic-editor通过容器概念，实现了丰富的布局方式，因为我们的布局行为是设置在容器上的，容器内的组件是绝对定位、或是顺序排布，是根据容器的配置行为改变的。tmagic-editor的容器理论上可以无限嵌套。</p><h3 id="表单配置" tabindex="-1">表单配置 <a class="header-anchor" href="#表单配置" aria-label="Permalink to &quot;表单配置&quot;">​</a></h3><p>表单配置是编辑器右面板展示的内容，配置项目都是由组件里的表单描述来决定的，用户可以在表单配置区域里通过配置项来改变组件的行为和样式。</p><p>注意，由于每个组件都需要有一些共同的表单配置项目，所以tmagic-editor通过在表单渲染器，统一为所有组件加上了通用的表单配置项目。包括基础组件样式配置、钩子事件配置等。</p><h3 id="dsl" tabindex="-1">DSL <a class="header-anchor" href="#dsl" aria-label="Permalink to &quot;DSL&quot;">​</a></h3><p>DSL 是编辑器搭建页面的最终产物（描述文件），其中包含了所有组件信息（组件布局，组件配置等）和插件内容，以及其他可拓展的信息都存放在 DSL 中。tmagic-editor项目页的展示即是tmagic-editor页面在加载 DSL 之后，根据 DSL 的描述进行渲染的。在tmagic-editor中，我们使用 <a href="./advanced/js-schema.html">JS schema</a> 来保存这份配置文件。</p><h2 id="页面" tabindex="-1">页面 <a class="header-anchor" href="#页面" aria-label="Permalink to &quot;页面&quot;">​</a></h2><p>页面是tmagic-editor作为一个可视化编辑器经过配置后，最终得到的呈现结果。搭建后的页面会被发布上线，供用户访问。</p><h3 id="runtime" tabindex="-1">runtime <a class="header-anchor" href="#runtime" aria-label="Permalink to &quot;runtime&quot;">​</a></h3><p>我们把页面统一称为 runtime，更具体的 runtime 概念可以查看<a href="./publish.html#runtime">页面发布</a>。<strong>runtime 是承载tmagic-editor项目页面的运行环境</strong>。编辑器的工作区是 runtime 的一个具体实例，另一个就是我们发布上线后，用户访问的真实项目页面。</p><h3 id="tmagic-ui" tabindex="-1">@tmagic/ui <a class="header-anchor" href="#tmagic-ui" aria-label="Permalink to &quot;@tmagic/ui&quot;">​</a></h3><p>@tmagic/ui 包含了tmagic-editor的基础组件库，提供了容器、文本、按钮这样的基础组件。我们提供了不同语言框架的 @tmagic/ui，如 vue2 和 vue3。</p><p>@tmagic/ui 和 runtime 是配套出现的，runtime 必须基于 @tmagic/ui 才可以实现渲染。因为 @tmagic/ui 需要提供 runtime 所需要的渲染器。</p><h2 id="联动" tabindex="-1">联动 <a class="header-anchor" href="#联动" aria-label="Permalink to &quot;联动&quot;">​</a></h2><p>页面搭建过程中，会涉及到两种联动形式</p><ul><li>在编辑器中，组件的表单配置项之间需要联动。</li><li>页面中的组件之间，需要联动触发行为。</li></ul><h3 id="表单联动" tabindex="-1">表单联动 <a class="header-anchor" href="#表单联动" aria-label="Permalink to &quot;表单联动&quot;">​</a></h3><p>配置项 A 改变值，希望能触发配置项 B 相应的变成另外一个值，就是表单联动的一个示例。tmagic-editor实现表单联动的方式，就是通过渲染的时候，将表单对象注入，在组件的表单配置描述中，可以通过函数声明来获取并且进行逻辑编写，实现表单联动。</p><h3 id="组件联动" tabindex="-1">组件联动 <a class="header-anchor" href="#组件联动" aria-label="Permalink to &quot;组件联动&quot;">​</a></h3><p>组件 A 在完成点击事件后，希望组件 B 可以展示一个弹窗，就是组件联动的一个示例。tmagic-editor通过事件绑定方式，可以为组件 A 和 B 配置事件关联，实现上述的组件联动。 <img src="https://vip.image.video.qpic.cn/vupload/20231027/3e02d31698914788006.png" alt="组件联动"></p>`,34),l=[n];function h(r,p,o,d,c,k){return i(),s("div",null,l)}const u=a(e,[["render",h]]);export{g as __pageData,u as default};
