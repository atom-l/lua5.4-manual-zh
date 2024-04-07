import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.Cy9JvDAg.js";const h=JSON.parse('{"title":"2.5.4 - 弱表（Weak Tables）","description":"","frontmatter":{"title":"2.5.4 - 弱表（Weak Tables）","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"2.5.4.md","filePath":"2.5.4.md"}'),_={name:"2.5.4.md"},s=o('<h3 id="_2-5-4-弱表-weak-tables" tabindex="-1">2.5.4 - 弱表（Weak Tables） <a class="header-anchor" href="#_2-5-4-弱表-weak-tables" aria-label="Permalink to &quot;2.5.4 - 弱表（Weak Tables）&quot;">​</a></h3><p><em>弱表（Weak Tables）</em> 就是一个其元素为弱引用的表。弱引用会被GC忽略。换言之，一个仅被弱引用指向的对象会被GC回收。</p><p>一个弱表可以同时或任一拥有弱键和弱值。拥有弱值的表允许收集其值，但是会阻止收集其键。一个同时拥有弱值和弱键的表的键和值都允许收集。任意情况下，当键或值被收集，其键值对都会从表中移除。表的“弱性”由元表中的__mode属性来控制。此元值如果存在，则必须为给出的字符串之一：&quot;k&quot;——表示拥有弱键的表，&quot;v&quot;表示拥有弱值的表，&quot;kv&quot;表示同时拥有弱键和弱值的表。</p><p>拥有弱键和强值的表也被称为<em>临时表（ephemeron table）</em>。在临时表中，键可达是值可达的前提。具体来说，某个键只被其值引用时，这个键值对将被删除。</p><p>任何对表的“弱性”做的修改都会在下一次GC周期生效。比如，当你将“弱性”改成一个更强的模式时，Lua仍然会在改动生效之前回收一些东西。</p><p>只有显式构建的对象才会从弱表中移除。纯值，例如数字和轻量C函数，其不受GC的约束，因此它们不会从弱表中移除（除了收集它们所关联的值）。尽管字符串受制于GC，但其没有显式的结构且与纯值平等，比起对象其行为更类似于值。因此其也不会从弱表中移除。</p><p>复原的对象（即，正被执行终结的对象，或仅被正在终结的对象所引用的对象）在弱表中的行为比较特殊。当对象明确被释放时，于弱值中的将会在执行终结之前被移除，而在弱键中的则只会在执行终结后的下一次收集中被移除。这是为了允许终结器通过弱表来访问与其对象所关联的属性。</p><p>如果弱表在一个收集周期中被复原的值里，那么在下个循环之前可能都没有得到适当的清理。</p>',8),r=[s];function p(l,n,c,d,i,u){return t(),a("div",null,r)}const k=e(_,[["render",p]]);export{h as __pageData,k as default};