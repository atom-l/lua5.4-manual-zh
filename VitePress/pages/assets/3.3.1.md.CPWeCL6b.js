import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"3.3.1 - 语句块（Blocks）","description":"","frontmatter":{"title":"3.3.1 - 语句块（Blocks）","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"3.3.1.md","filePath":"3.3.1.md"}'),p={name:"3.3.1.md"},e=t(`<h3 id="_3-3-1-语句块-blocks" tabindex="-1">3.3.1 - 语句块（Blocks） <a class="header-anchor" href="#_3-3-1-语句块-blocks" aria-label="Permalink to &quot;3.3.1 - 语句块（Blocks）&quot;">​</a></h3><p><em>语句块（Block）</em> 是一个依序执行的语句列表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>block ::= {stat}</span></span></code></pre></div><br><p>可以使用分号来分隔语句以开始一个新语句块，或者连续使用两个分号产生一个<em>空语句</em>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>stat ::= ‘;’</span></span></code></pre></div><br><p>函数调用和赋值都可以用左圆括号开头。但在Lua的语法中这可能会导致歧义。考量以下片段：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> io.write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>语法有两种方式看待此片段：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> io.write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c; (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> io.write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>当前版本的解析器通常用第一种方式看待这个结构，将左圆括号解释为函数调用的开始。为了避免这种歧义，在良好的实现中通常会在圆括号为始的语句的开头加上分号：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> io.write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><br><p>可以显式分割语句块以生成单独的语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>stat ::= do block end</span></span></code></pre></div><p>显式的语句块对于控制变量声明的范围十分有用。显式的语句块有时候也用于在其他的语句块中添加<strong>return</strong>语句。</p>`,17),n=[e];function l(h,k,d,r,o,c){return a(),i("div",null,n)}const y=s(p,[["render",l]]);export{g as __pageData,y as default};
