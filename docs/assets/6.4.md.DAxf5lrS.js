import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.Cy9JvDAg.js";const u=JSON.parse('{"title":"6.4 - 字符串操作","description":"","frontmatter":{"title":"6.4 - 字符串操作","footer":true,"lastUpdated":true,"outline":"deep"},"headers":[],"relativePath":"6.4.md","filePath":"6.4.md"}'),n={name:"6.4.md"},h=t(`<h2 id="_6-4-字符串操作" tabindex="-1">6.4 - 字符串操作 <a class="header-anchor" href="#_6-4-字符串操作" aria-label="Permalink to &quot;6.4 - 字符串操作&quot;">​</a></h2><p>此库提供了字符串操作的通用函数，例如查找和提取子串，或是模式匹配。在Lua中对字符串使用索引时，第一个字符的位置是1（而不是像C代码中的0）。索引可以是负数，以表示从末尾开始倒数的下标。例如最后一个字符的位置是-1，以此类推。</p><p>字符串库所提供的函数都放在名为 string 的表中。其同时会设置字符串值的元表，其中 __index 字段指向了 string 表。因此你可以使用面向对象的风格来调用字符串函数。例如 string.byte(s,i) 可以写成 s:byte(i) 的形式。</p><p>字符串库中，字符是假定为单字节编码的。</p><h3 id="string.byte" tabindex="-1">string.byte (s [, i [, j]]) <a class="header-anchor" href="#string.byte" aria-label="Permalink to &quot;string.byte (s [, i [, j]]) {#string.byte}&quot;">​</a></h3><p>返回字符串中索引 i 到索引 j 之间的（s[i], s[i+1], ..., s[j]） 的各个字符的数值。参数 i 的默认值为1，j 的默认值为 i 的值。此处遵循和<a href="/lua5.4-manual-zh/6.4.html#string.sub">string.sub</a>中一样的索引规则。</p><p>其由字符转换而来的数值在各平台之间不一定都相同。</p><h3 id="string.char" tabindex="-1">string.char (···) <a class="header-anchor" href="#string.char" aria-label="Permalink to &quot;string.char (···) {#string.char}&quot;">​</a></h3><p>接收零个或多个整数参数。返回一个字符串，其长度为传入的参数数量，其中每个字符依次为各参数在内部字符编码中所对应的字符。</p><p>其中的编码数值在各平台之间不一定都相同。</p><h3 id="string.dump" tabindex="-1">string.dump (function [, strip]) <a class="header-anchor" href="#string.dump" aria-label="Permalink to &quot;string.dump (function [, strip]) {#string.dump}&quot;">​</a></h3><p>返回包含所给函数的二进制表示（即<em>二进制块 binary chunk</em> ）的字符串，之后对该字符串调用<a href="/lua5.4-manual-zh/6.1.html#load">load</a>会返回该函数的拷贝（但是其上值都是新创建的）。如果参数 strip 为真值，那么其二进制块中将不会把该函数所有的调试信息都包含进去，由此可以节省空间。</p><p>对于带有上值的函数，二进制块只会存储其上值的数量。被（再次）加载后，这些上值都会是新实例。（相关细节请参见<a href="/lua5.4-manual-zh/6.1.html#load">load</a>函数。必要时你可以使用调试库来序列化或重新加载这些函数的上值。）</p><h3 id="string.find" tabindex="-1">string.find (s, pattern [, init [, plain]]) <a class="header-anchor" href="#string.find" aria-label="Permalink to &quot;string.find (s, pattern [, init [, plain]]) {#string.find}&quot;">​</a></h3><p>在字符串 s 中查找 pattern 参数的第一个匹配（参见<a href="/lua5.4-manual-zh/6.4.1.html">6.4.1</a>）。如果找到了，那么 find 函数会分别返回匹配位置的开始和结束索引；否则返回<strong>fail</strong>。第三个可选参数 init 表明从哪里开始搜索，其默认值为1并且可以是负数。第四个参数 plain 为<strong>treu</strong>时会关闭模式匹配机制，从而做直接“查找子串”的操作，参数 pattern 中内容都视为无特殊含义的字符。</p><p>如果匹配式 pattern 捕获到了，则表示匹配成功并且会在两个索引后一并返回捕捉到的值。</p><h3 id="string.format" tabindex="-1">string.format (formatstring, ···) <a class="header-anchor" href="#string.format" aria-label="Permalink to &quot;string.format (formatstring, ···) {#string.format}&quot;">​</a></h3><p>第一个参数必须为字符串，后边跟不定数量的参数，返回所组成的格式化字符串。这里的字符串格式化规则与ISO标准C函数 sprintf 相同。但是不支持转义符 F、n、*、h、L、和 l ，并且多出一个额外的转义符 q 。如果有宽度和精度，则限制为两位数。</p><p>转义符对布尔、nil、number和字符串的转移结果都是一个定义在Lua源码中的有效常量值。布尔和 nil 的结果都是直接写在代码中的（true、false、nil）。浮点数结果为一个十六进制数，以保证完整精度。字符串的转换结果会被放在双引号之间，会在必要的时候使用合适的转义符，此结果可以在之后供Lua解释器成功读入。例如这样的调用：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string.format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%q&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a string with &quot;quotes&quot; and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>会生成这样的字符串：</p><pre>&quot;a string with \\&quot;quotes\\&quot; and \\
new line&quot;</pre><p>该转义符不支持修饰符（如标志、宽度、精度）。</p><p>转义符 A、a、E、e、f、G、以及 g 都需要一个数字作为参数。转义符 c、d、i、o、u、X、以及 x 需要的是整数。当Lua是由C89标准编译出时，转义符 A 和 a (十六进制浮点数) 都不支持修饰符。</p><p>转义符 s 需要一个字符串作为参数，如果传入的参数不是个字符串，那么其将遵循和<a href="/lua5.4-manual-zh/6.1.html#tostring">tostring</a>相同的规则转换为一个字符串。如果该转义符有任何修饰符，则对应的字符串参数不应当包含任何嵌入的零。</p><p>转义符 p 会使用<a href="/lua5.4-manual-zh/6.1.html#lua_topointer">lua_topointer</a>来格式化指针。其会给出一个可以唯一标识表、userdata 、Lua线程、字符串和函数的字符串。对于其他类型的值（number、nil、布尔值），转义符将返回表示空指针的字符串。</p><h3 id="string.gmatch" tabindex="-1">string.gmatch (s, pattern [, init]) <a class="header-anchor" href="#string.gmatch" aria-label="Permalink to &quot;string.gmatch (s, pattern [, init]) {#string.gmatch}&quot;">​</a></h3><p>返回一个迭代器函数，每次调用该迭代器函数都会返回下一个在字符串 s 中对 pattern 的捕获（参见<a href="/lua5.4-manual-zh/6.4.1.html">6.4.1</a>）。如果 pattern 没有指定的捕获，那么每次调用就匹配整个 pattern 内容。第三个参数 init 是可选的数字，其表明匹配的起始位置，默认为1且可以传负数。</p><p>举个例子，以下这个循环将迭代字符串中的每个单词，并分行打印出来：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello world from Lua&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gmatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%a+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(w)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>下边的例子会将给定字符串中的每个键值对收集起来：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;from=world, to=Lua&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gmatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(%w+)=(%w+)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  t[k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>对于此函数，pattern 开头中的锚点 &#39;^&#39; 将不会生效，因为其会阻止迭代。</p><h3 id="string.gsub" tabindex="-1">string.gsub (s, pattern, repl [, n]) <a class="header-anchor" href="#string.gsub" aria-label="Permalink to &quot;string.gsub (s, pattern, repl [, n]) {#string.gsub}&quot;">​</a></h3><p>拷贝整个字符串 s （或者前 n 个，如果传了此参数的话），将其中每个遇到的 pattern 匹配和捕获（参见<a href="/lua5.4-manual-zh/6.4.1.html">6.4.1</a>）根据 repl 来做替换，并将最终的字符串返回。参数 repl 可以是字符串、表、或者函数。同时 gsub 会将遇到的匹配次数作为第二个返回值返回。函数名 gsub 出自<em>全局替换 Global SUBstitution</em> 。</p><p>如果参数 repl 是一个字符串，那么其值将被用来做替换。&quot;%&quot; 符为转义符：任何包含在 repl 中的 <em>%d</em> 都被认为是第 <em>d</em> 个捕获项，其中 <em>d</em> 的值可以是1到9，<em>%0</em> 表示整个捕获项，<em>%%</em> 表示单个 &quot;%&quot; 符。</p><p>如果 repl 是个表，则每次匹配时都会使用捕获中的第一个捕获项作为键来对该表作查询。</p><p>如果 repl 是个函数，则每次匹配时都会将所有的捕获项先后作为参数传入来调用该函数。</p><p>如果从 repl 表或函数中得到的返回是一个字符串或 number ，那么其将会被作为替换用的字符串。否则如果返回的是<strong>nil</strong>或者<strong>false</strong>，那么将不会做替换（即原匹配维持原样）。</p><p>以下是部分示例：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(%w+)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%1 %1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;hello hello world world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%w+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%0 %0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;hello hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world from Lua&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(%w+)%s*(%w+)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%2 %1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;world hello Lua from&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;home = $HOME, user = $USER&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%$(%w+)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">os.getenv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;home = /home/roberto, user = roberto&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4+5 = $return 4+5$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%$(.-)%$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (s)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s)()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;4+5 = 9&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lua&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string.gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$name-$version.tar.gz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%$(%w+)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, t)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt; x=&quot;lua-5.4.tar.gz&quot;</span></span></code></pre></div><h3 id="string.len" tabindex="-1">string.len (s) <a class="header-anchor" href="#string.len" aria-label="Permalink to &quot;string.len (s) {#string.len}&quot;">​</a></h3><p>接收一个字符串参数并返回其长度。空串 &quot;&quot; 的长度为0。嵌入的零值也会被计数，所以 &quot;a\\000bc\\000&quot; 的长度为5。</p><h3 id="string.lower" tabindex="-1">string.lower (s) <a class="header-anchor" href="#string.lower" aria-label="Permalink to &quot;string.lower (s) {#string.lower}&quot;">​</a></h3><p>接收一个字符串参数并拷贝它（不会改动原有的字符串），将其中每个大写的字符都替换为对应的小写形式，将最终的字符串返回。其他的字符都不会被更改。对于大写字母的定义取决于当前的区域设置。</p><h3 id="string.match" tabindex="-1">string.match (s, pattern [, init]) <a class="header-anchor" href="#string.match" aria-label="Permalink to &quot;string.match (s, pattern [, init]) {#string.match}&quot;">​</a></h3><p>在字符串 s 中查找 pattern 的第一个<em>匹配</em>（参见<a href="/lua5.4-manual-zh/6.4.1.html">6.4.1</a>）。如果找到了，match 会将 pattern 的捕获返回；否则返回 <strong>fail</strong>。如果 pattern 不含有捕获内容，那么将返回整个 pattern 的匹配。第三个参数 init 是一个可选数字参数，其表明搜索的起始位置；默认值为1且可以为负值。</p><h3 id="string.pack" tabindex="-1">string.pack (fmt, v1, v2, ···) <a class="header-anchor" href="#string.pack" aria-label="Permalink to &quot;string.pack (fmt, v1, v2, ···) {#string.pack}&quot;">​</a></h3><p>返回一个包含了 v1、v2等值的二进制字符串，该字符串是通过格式化字符串 fmt 序列化而来的（参见<a href="/lua5.4-manual-zh/6.4.2.html">6.4.2</a>）。</p><h3 id="string.packsize" tabindex="-1">string.packsize (fmt) <a class="header-anchor" href="#string.packsize" aria-label="Permalink to &quot;string.packsize (fmt) {#string.packsize}&quot;">​</a></h3><p>返回<a href="/lua5.4-manual-zh/6.4.html#string.pack">string.pack</a>的结果的长度。该格式化字符串不可以包含变长的选项 &#39;s&#39; 或 &#39;z&#39; （参见<a href="/lua5.4-manual-zh/6.4.2.html">6.4.2</a>）。</p><h3 id="string.rep" tabindex="-1">string.rep (s, n [, sep]) <a class="header-anchor" href="#string.rep" aria-label="Permalink to &quot;string.rep (s, n [, sep]) {#string.rep}&quot;">​</a></h3><p>返回一个字符串，其由字符串 s 的 n 个拷贝组成，每个拷贝之前用 sep 间隔开。参数 sep 的默认值为空串（即没有间隔）。如果参数 n 不为正数则返回空串。</p><p>（要注意该函数很容易耗尽你的内存。）</p><h3 id="string.reverse" tabindex="-1">string.reverse (s) <a class="header-anchor" href="#string.reverse" aria-label="Permalink to &quot;string.reverse (s) {#string.reverse}&quot;">​</a></h3><p>返回所给字符串 s 的翻转。</p><h3 id="string.sub" tabindex="-1">string.sub (s, i [, j]) <a class="header-anchor" href="#string.sub" aria-label="Permalink to &quot;string.sub (s, i [, j]) {#string.sub}&quot;">​</a></h3><p>截取字符串 s 从第 i 个到第 j 个字符并返回；其中 i 和 j 可以是负数。如果 j 缺省，则会被当作 -1 处理（即字符串末尾）。例如，调用 string.sub(s,1,j) 会返回 s 中前 j 个字符，而 string.sub(s, -i) （i为整数）则返回 s 中后 j 个字符。</p><p>在转换完负数索引后，如果 i 小于1，则置为1，如果 j 大于字符串长度，则置为字符串长度。在此之后，如果 i 大于 j ，该函数会返回一个空串。</p><h3 id="string.unpack" tabindex="-1">string.unpack (fmt, s [, pos]) <a class="header-anchor" href="#string.unpack" aria-label="Permalink to &quot;string.unpack (fmt, s [, pos]) {#string.unpack}&quot;">​</a></h3><p>返回以格式化字符串 fmt 打包（参见<a href="/lua5.4-manual-zh/6.4.html#string.pack">string.pack</a>）而来的二进制字符串 s 中的值。可选参数 pos 标记了在 s 中读取的起始位置。读取完这些值后，该函数同时还返回在 s 中第一个不可读字节的位置。</p><h3 id="string.upper" tabindex="-1">string.upper (s) <a class="header-anchor" href="#string.upper" aria-label="Permalink to &quot;string.upper (s) {#string.upper}&quot;">​</a></h3><p>接收一个字符串参数并拷贝它（不会改动原有的字符串），将其中每个小写的字符都替换为对应的大写形式，将最终的字符串返回。其他的字符都不会被更改。对于小写字母的定义取决于当前的区域设置。</p>`,63),l=[h];function p(e,r,k,g,o,d){return a(),i("div",null,l)}const c=s(n,[["render",p]]);export{u as __pageData,c as default};
