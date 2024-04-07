import{_ as t,c as e,o,a4 as r}from"./chunks/framework.4aTu-Nia.js";const u=JSON.parse('{"title":"3.3.8 - 待关闭变量","description":"","frontmatter":{"title":"3.3.8 - 待关闭变量","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"3.3.8.md","filePath":"3.3.8.md"}'),a={name:"3.3.8.md"},s=r('<h3 id="_3-3-8-待关闭变量" tabindex="-1">3.3.8 - 待关闭变量 <a class="header-anchor" href="#_3-3-8-待关闭变量" aria-label="Permalink to &quot;3.3.8 - 待关闭变量&quot;">​</a></h3><p>待关闭变量的行为类似局部常量，不同在于变量超出作用域后其值会被<em>关闭</em>，包括常规语法块的结束、使用<strong>break</strong>/<strong>goto</strong>/<strong>return</strong>退出语法块、或者因为错误而退出。</p><p>在这里，<em>关闭一个值</em>的意思是指调用__close元函数。当调用这个元函数时，这个值本身会作为第一个参数传递，导致其退出的错误对象（如果有的话）会作为第二个参数传递；如果没有错误，那么第二个参数为<strong>nil</strong>。</p><p>被待关闭值所赋值的值必须有__close元函数或者是个假值（<strong>nil</strong>和<strong>false</strong>会被被待关闭值忽略）。</p><p>如果在调用关闭函数时出现了错误，此错误将会被当作在其变量定义处的一段常规代码所抛出的错误处理。在错误结束后，其他待定的关闭函数仍然会被调用。</p><p>如果协程让出或再也不重启了，一些变量可能永远不会超出作用域，因此它们将永远不会关闭。（这些变量在协程内部创建的，且在协程让出点之前的范围内。）类似的，如果协程因为错误而退出了，其不会展开其堆栈，因此也不会关闭任何变量。在这些情况下，你可以使用终结器或者调用<a href="/6.2.html#coroutine.close">coroutine.close</a>来关闭变量。然而，如果协程是用<a href="/6.2.html#coroutine.wrap">coroutine.wrap</a>创建的，那么其相应的函数要在发生错误的情况下关闭协程。</p>',6),n=[s];function _(c,l,i,p,d,m){return o(),e("div",null,n)}const f=t(a,[["render",_]]);export{u as __pageData,f as default};
