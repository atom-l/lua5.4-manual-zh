import{_ as a,c as t,o as e,a4 as h}from"./chunks/framework.4aTu-Nia.js";const u=JSON.parse('{"title":"6.7 - 数学函数","description":"","frontmatter":{"title":"6.7 - 数学函数","footer":true,"lastUpdated":true,"outline":"deep"},"headers":[],"relativePath":"6.7.md","filePath":"6.7.md"}'),m={name:"6.7.md"},r=h('<h2 id="_6-7-数学函数" tabindex="-1">6.7 - 数学函数 <a class="header-anchor" href="#_6-7-数学函数" aria-label="Permalink to &quot;6.7 - 数学函数&quot;">​</a></h2><p>该库提供了基础数学方法。其提供的函数和常量都放在表 math 中。说明中带有 &quot;integer/float&quot; 的函数中对于整数参数会给出整数结果而对于浮点数参数会给出浮点数结果。用于四舍五入的函数<a href="/6.7.html#math.ceil">math.ceil</a>、<a href="/6.7.html#math.floor">math.floor</a>、以及<a href="/6.7.html#math.modf">math.modf</a>会根据情况返回整数或浮点数。</p><h3 id="math.abs" tabindex="-1">math.abs (x) <a class="header-anchor" href="#math.abs" aria-label="Permalink to &quot;math.abs (x) {#math.abs}&quot;">​</a></h3><p>返回 x 的绝对值。（integer/float）</p><h3 id="math.acos" tabindex="-1">math.acos (x) <a class="header-anchor" href="#math.acos" aria-label="Permalink to &quot;math.acos (x) {#math.acos}&quot;">​</a></h3><p>返回 x 的反余弦（以弧度表示）。</p><h3 id="math.asin" tabindex="-1">math.asin (x) <a class="header-anchor" href="#math.asin" aria-label="Permalink to &quot;math.asin (x) {#math.asin}&quot;">​</a></h3><p>返回 x 的反正弦（以弧度表示）。</p><h3 id="math.atan" tabindex="-1">math.atan (y [, x]) <a class="header-anchor" href="#math.atan" aria-label="Permalink to &quot;math.atan (y [, x]) {#math.atan}&quot;">​</a></h3><p>返回 y/x 的反正切（以弧度表示），使用两个参数的符号来查找结果所处的象限。x 为零时也会正确计算。</p><p>x 的默认值为1, 所以调用 math.atan(y) 会返回 y 的反正切值。</p><h3 id="math.ceil" tabindex="-1">math.ceil (x) <a class="header-anchor" href="#math.ceil" aria-label="Permalink to &quot;math.ceil (x) {#math.ceil}&quot;">​</a></h3><p>对 x 向上取整。结果是个大于或等于 x 的整数。</p><h3 id="math.cos" tabindex="-1">math.cos (x) <a class="header-anchor" href="#math.cos" aria-label="Permalink to &quot;math.cos (x) {#math.cos}&quot;">​</a></h3><p>返回 x 的余弦（假定参数是弧度）。</p><h3 id="math.deg" tabindex="-1">math.deg (x) <a class="header-anchor" href="#math.deg" aria-label="Permalink to &quot;math.deg (x) {#math.deg}&quot;">​</a></h3><p>将弧度表示的角 x 转换为角度表示。</p><h3 id="math.exp" tabindex="-1">math.exp (x) <a class="header-anchor" href="#math.exp" aria-label="Permalink to &quot;math.exp (x) {#math.exp}&quot;">​</a></h3><p>返回<em>e<sup>x</sup></em>的值（这里的 e 是自然对数的底）。</p><h3 id="math.floor" tabindex="-1">math.floor (x) <a class="header-anchor" href="#math.floor" aria-label="Permalink to &quot;math.floor (x) {#math.floor}&quot;">​</a></h3><p>对 x 向下取整。结果是个小于或等于 x 的整数。</p><h3 id="math.fmod" tabindex="-1">math.fmod (x, y) <a class="header-anchor" href="#math.fmod" aria-label="Permalink to &quot;math.fmod (x, y) {#math.fmod}&quot;">​</a></h3><p>取余，结果是将 x 除以 y 的商向零圆整后的余数。（integer/float）</p><h3 id="math.huge" tabindex="-1">math.huge <a class="header-anchor" href="#math.huge" aria-label="Permalink to &quot;math.huge  {#math.huge}&quot;">​</a></h3><p>浮点值 HUGE_VAL ，比任何数值都要大。</p><h3 id="math.log" tabindex="-1">math.log (x [, base]) <a class="header-anchor" href="#math.log" aria-label="Permalink to &quot;math.log (x [, base]) {#math.log}&quot;">​</a></h3><p>计算以 base 为底的 x 对数。其中 base 默认为 <em>e</em> （所以该函数默认返回 x 的自然对数）。</p><h3 id="math.max" tabindex="-1">math.max (x, ···) <a class="header-anchor" href="#math.max" aria-label="Permalink to &quot;math.max (x, ···) {#math.max}&quot;">​</a></h3><p>返回所给参数中的最大值，使用Lua操作符 &lt; 计算。</p><h3 id="math.maxinteger" tabindex="-1">math.maxinteger <a class="header-anchor" href="#math.maxinteger" aria-label="Permalink to &quot;math.maxinteger  {#math.maxinteger}&quot;">​</a></h3><p>整数最大值。</p><h3 id="math.min" tabindex="-1">math.min (x, ···) <a class="header-anchor" href="#math.min" aria-label="Permalink to &quot;math.min (x, ···) {#math.min}&quot;">​</a></h3><p>返回所给参数中的最小值，使用Lua操作符 &lt; 计算。</p><h3 id="math.mininteger" tabindex="-1">math.mininteger <a class="header-anchor" href="#math.mininteger" aria-label="Permalink to &quot;math.mininteger  {#math.mininteger}&quot;">​</a></h3><p>整数最小值。</p><h3 id="math.modf" tabindex="-1">math.modf (x) <a class="header-anchor" href="#math.modf" aria-label="Permalink to &quot;math.modf (x) {#math.modf}&quot;">​</a></h3><p>返回 x 中的整数和小数部分。其第二个返回值始终是浮点数。</p><h3 id="math.pi" tabindex="-1">math.pi <a class="header-anchor" href="#math.pi" aria-label="Permalink to &quot;math.pi  {#math.pi}&quot;">​</a></h3><p><em>π</em>的值</p><h3 id="math.rad" tabindex="-1">math.rad (x) <a class="header-anchor" href="#math.rad" aria-label="Permalink to &quot;math.rad (x) {#math.rad}&quot;">​</a></h3><p>将 x 度的角转换为弧度表示。</p><h3 id="math.random" tabindex="-1">math.random ([m [, n]]) <a class="header-anchor" href="#math.random" aria-label="Permalink to &quot;math.random ([m [, n]]) {#math.random}&quot;">​</a></h3><p>如果没有参数传入，则返回一个在 [0,1) 区间内的伪随机浮点数。如果将 m 和 n 两个参数传入整数，则 math.random 会返回一个处在 [m,n) 区间内的伪随机整数。当代码 math.random(n) 中的 n 为负数时，其等效于math.random(1,n) 。当传入零时， math.random(0) 的结果为一个整数，该整数中的每个位都是为随机的。</p><h3 id="math.randomseed" tabindex="-1">math.randomseed ([x [, y]]) <a class="header-anchor" href="#math.randomseed" aria-label="Permalink to &quot;math.randomseed ([x [, y]]) {#math.randomseed}&quot;">​</a></h3><p>如果调用时至少传入了一个参数，那么整数参数 x 和 y 将被放进一个128位（源码内部其实是个<a href="/4.6.html#lua_Unsigned">lua_Unsigned</a>[4]，即一个256位数，其中 x 和 y 相间放入其中，其他位由1或0填充，然后会在每次生成随机数之后变更数据，所以可以当作128位理解）的<em>随机种子 seed</em> 以重新初始化伪随机生成器；相同的随机种子会生成的一系列随机数也是相同的。参数 y 默认为0。</p><p>如果调用时省略所有参数，Lua将会简单随机生成一个种子（目前源码中的算法是将当前时间戳和当前Lua状态机的内存地址合并为一个128整数作为随机种子）。</p><p>该函数的返回值是两个整数，它们最后所设置的随机种子的值的组成部分（128位中的两个64位整数），再次设置相同的值会重复生成随机数列。</p><p>为了确保随机生成器的初始状态足够得随机（或者是相反的情况，例如在调试时，你需要固定随机），你应当显式地传入参数来调用<a href="/6.7.html#math.randomseed">math.randomseed</a>。</p><h3 id="math.sin" tabindex="-1">math.sin (x) <a class="header-anchor" href="#math.sin" aria-label="Permalink to &quot;math.sin (x) {#math.sin}&quot;">​</a></h3><p>返回 x 的正弦（以弧度表示）。</p><h3 id="math.sqrt" tabindex="-1">math.sqrt (x) <a class="header-anchor" href="#math.sqrt" aria-label="Permalink to &quot;math.sqrt (x) {#math.sqrt}&quot;">​</a></h3><p>返回 x 的平方根。（你也可以使用表达式 x ^ 0.5 来做等效的计算。）</p><h3 id="math.tan" tabindex="-1">math.tan (x) <a class="header-anchor" href="#math.tan" aria-label="Permalink to &quot;math.tan (x) {#math.tan}&quot;">​</a></h3><p>返回 x 的正切（以弧度表示）。</p><h3 id="math.tointeger" tabindex="-1">math.tointeger (x) <a class="header-anchor" href="#math.tointeger" aria-label="Permalink to &quot;math.tointeger (x) {#math.tointeger}&quot;">​</a></h3><p>如果 x 可以转换为一个整数值，那么返回该整数值。否则返回<strong>fail</strong>。</p><h3 id="math.type" tabindex="-1">math.type (x) <a class="header-anchor" href="#math.type" aria-label="Permalink to &quot;math.type (x) {#math.type}&quot;">​</a></h3><p>如果 x 是整数，则返回 &quot;integer&quot; 。如果是浮点数，则返回 &quot;float&quot;。如果 x 不是数字则返回<strong>fail</strong>。</p><h3 id="math.ult" tabindex="-1">math.ult (m, n) <a class="header-anchor" href="#math.ult" aria-label="Permalink to &quot;math.ult (m, n) {#math.ult}&quot;">​</a></h3><p>返回一个布尔值，表示将 m 和 n 做无符号整数比较，为<strong>true</strong>则表示 m 小于 n 。</p>',60),o=[r];function n(i,l,d,s,x,p){return e(),t("div",null,o)}const f=a(m,[["render",n]]);export{u as __pageData,f as default};