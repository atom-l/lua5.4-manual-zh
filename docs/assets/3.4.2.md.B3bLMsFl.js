import{_ as t,c as e,o as a,a4 as o}from"./chunks/framework.Cy9JvDAg.js";const h=JSON.parse('{"title":"3.4.2 - 位操作","description":"","frontmatter":{"title":"3.4.2 - 位操作","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"3.4.2.md","filePath":"3.4.2.md"}'),r={name:"3.4.2.md"},s=o('<h3 id="_3-4-2-位操作" tabindex="-1">3.4.2 - 位操作 <a class="header-anchor" href="#_3-4-2-位操作" aria-label="Permalink to &quot;3.4.2 - 位操作&quot;">​</a></h3><p>Lua支持以下位操作：</p><ul><li><strong>&amp;</strong>：按位与</li><li><strong>|</strong>：按位或</li><li><strong>~</strong>: 按位异或</li><li><strong>&gt;&gt;</strong>：右移</li><li><strong>&lt;&lt;</strong>：左移</li><li><strong>~</strong>：一元运算，按位取反</li></ul><p>所有的位操作都将操作数转换到整数（参见<a href="/lua5.4-manual-zh/3.4.3.html">3.4.3</a>），在这些整数的所有位上进行操作，其结果为整数。</p><p>左移和右移都使用零填补空位。负位移向另一个方向移动；位移的绝对值如果等于或高于整数数的位数，则其结果为零（因为所有的位都被移出了）。</p>',5),l=[s];function n(_,i,c,p,d,g){return a(),e("div",null,l)}const m=t(r,[["render",n]]);export{h as __pageData,m as default};