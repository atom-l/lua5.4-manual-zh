import{_ as a,c as e,o as l,a4 as t}from"./chunks/framework.Cy9JvDAg.js";const f=JSON.parse('{"title":"2.3 - 错误处理","description":"","frontmatter":{"title":"2.3 - 错误处理","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"2.3.md","filePath":"2.3.md"}'),r={name:"2.3.md"},m=t('<h2 id="_2-3-错误处理" tabindex="-1">2.3 - 错误处理 <a class="header-anchor" href="#_2-3-错误处理" aria-label="Permalink to &quot;2.3 - 错误处理&quot;">​</a></h2><p>在Lua中有些操作会 <em>抛出（raise）</em> 错误。错误会打断程序的正常流程，可以通过 <em>捕获（catching）</em> 错误来继续。</p><p>Lua代码可以通过调用<a href="/lua5.4-manual-zh/6.1.html#error">error</a>函数来显式地抛出异常。（此函数永远不返回。）</p><p>对于在Lua中捕获异常，你可以使用<a href="/lua5.4-manual-zh/6.1.html#pcall">pcall</a>（或者<a href="/lua5.4-manual-zh/6.1.html#xpcall">xpcall</a>）来发起一个 <em>保护调用（protected call）</em>。<a href="/lua5.4-manual-zh/6.1.html#pcall">pcall</a>函数将在 <em>保护模式（protected mode）</em> 下调用给定函数。任何错误的产生都会停止执行函数，控制流直接返回到<a href="/lua5.4-manual-zh/6.1.html#pcall">pcall</a>调用处，并返回其状态码。</p><p>因为Lua是一个被嵌入的扩展语言，Lua代码的启动执行是由宿主程序中的C代码调用的。（当你独立使用Lua的时候，宿主程序就是那个lua应用程序。）通常此调用都是被保护的；所以当一个其他错误发生在Lua块的编译或执行中时，控制流会回到宿主处，宿主程序就可以采取合适的措施，例如打印错误消息。</p><p>每当有错误的时候，带着关于其信息的一个错误对象会被生成出来。Lua本身只生成其错误对象为字符串的错误，但是程序将任何类型作为其生成错误的错误对象。这些错误对象有Lua程序或宿主来对其做处理。因为一些历史原因，错误对象通常被称之为 <em>错误信息（error message）</em> , 尽管它不一定非得是个字符串。</p><p>当你使用<a href="/lua5.4-manual-zh/6.1.html#xpcall">xpcall</a>（或者C接口<a href="/lua5.4-manual-zh/4.6.html#lua_pcall">lua_pcall</a>）时，你可以给定一个 <em>消息处理方法（ message handler）</em> 用于错误处理中。这个方法由原始的错误对象调用并返回一个新的错误对象。它于错误出现时调用栈展开前被调用，所以它可以收集更多有关于错误的信息，例如调查栈并创建一个栈的回溯信息。这个消息处理方法仍然处于保护模式下，所以消息处理方法中的错误会再次出发消息处理方法。如果这个循环持续得太长了，Lua会打断并返回一个合适的消息。这个消息处理方法只会用于合规的运行时错误，它不会因为内存分配错误而被调用，也不会因为运行结束器或其他消息处理方法而被调用。</p><p>Lua还提供了系统警告 <em>warnings</em> （参见<a href="/lua5.4-manual-zh/6.1.html#warn">warn</a>）。与错误不同，警告不会以任何方式干扰程序执行。它通常只是生成一个消息给用户，尽管此行为可以用C改变（参见<a href="/lua5.4-manual-zh/4.6.html#lua_setwarnf">lua_setwarnf</a>）。</p>',8),u=[m];function h(p,n,c,o,_,s){return l(),e("div",null,u)}const i=a(r,[["render",h]]);export{f as __pageData,i as default};