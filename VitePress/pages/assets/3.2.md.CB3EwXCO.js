import{_ as a,c as e,o as t,a4 as s}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"3.2 - 变量","description":"","frontmatter":{"title":"3.2 - 变量","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"3.2.md","filePath":"3.2.md"}'),p={name:"3.2.md"},i=s('<h2 id="_3-2-变量" tabindex="-1">3.2 - 变量 <a class="header-anchor" href="#_3-2-变量" aria-label="Permalink to &quot;3.2 - 变量&quot;">​</a></h2><p>变量是存储值的地方。Lua中有三种变量：全局变量、局部变量和表属性。</p><p>一个的单独名称可以表示全局变量或局部变量（或者是函数的形参，是一种特殊的局部变量）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ::= Name</span></span></code></pre></div><p>这里的名称指的是标识符（参见<a href="/3.1.html">3.1</a>）。</p><p>除非显式声明为局部变量，否则任何变量名都被认为是全局的。局部变量是相对于<em>词法作用域（lexically scoped）</em> 下的：局部变量可以被其定义范围下的函数访问（参见<a href="/3.5.html">3.5</a>）。</p><p>在第一次给变量赋值之前，其值为<strong>nil</strong>。</p><p>方括号被用于索引一个表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ::= prefixexp ‘[’ exp ‘]’</span></span></code></pre></div><p>可以通过元表来改变访问表属性的意义（参见<a href="/2.4.html">2.4</a>）。</p><p>var.Name语法只是var[&quot;Name&quot;]的语法糖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ::= prefixexp ‘.’ Name</span></span></code></pre></div><p>访问全局变量x相当于_ENV.x。由于代码块的编译方式，变量_ENV本身永远不会是全局的（参见<a href="/2.2.html">2.2</a>）。</p>',13),n=[i];function o(l,c,r,d,h,_){return t(),e("div",null,n)}const v=a(p,[["render",o]]);export{m as __pageData,v as default};
