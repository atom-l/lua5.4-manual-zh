import{_ as a,c as e,o as t,a4 as _}from"./chunks/framework.Cy9JvDAg.js";const p=JSON.parse('{"title":"4.1.1 - 栈的大小","description":"","frontmatter":{"title":"4.1.1 - 栈的大小","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"4.1.1.md","filePath":"4.1.1.md"}'),l={name:"4.1.1.md"},c=_('<h3 id="_4-1-1-栈的大小" tabindex="-1">4.1.1 - 栈的大小 <a class="header-anchor" href="#_4-1-1-栈的大小" aria-label="Permalink to &quot;4.1.1 - 栈的大小&quot;">​</a></h3><p>当你与Lua API交互，你负责确保一致性。特别说明，<em>你有责任控制栈溢出</em>。当你调用任意API函数时，你必须确保栈有足够的空间以容纳结果。</p><p>在上述规则中有个例外：当你调用一个结果数量不固定的Lua函数时（参见<a href="/lua5.4-manual-zh/4.6.html#lua_call">lua_call</a>），Lua会确保栈有足够的空间以容纳所有结果。然而，其并不保证有任何额外的空间。所以在调用这样的函数之后，你应该在压栈前使用<a href="/lua5.4-manual-zh/4.6.html#lua_checkstack">lua_checkstack</a>检查栈空间。</p><p>当Lua调用C代码时，其确保栈中至少有 LUA_MINSTACK 宏定义大小的额外空间；即，你可以安全地压入 LUA_MINSTACK 个值到栈中。LUA_MINSTACK 的定义是20，所以通常你不必担心栈空间除非你在循环中压栈。如有必要，你可以使用<a href="/lua5.4-manual-zh/4.6.html#lua_checkstack">lua_checkstack</a>函数来确保栈中有足够的空间来压入值。</p>',4),r=[c];function o(s,u,n,h,i,d){return t(),e("div",null,r)}const f=a(l,[["render",o]]);export{p as __pageData,f as default};
