import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.Cy9JvDAg.js";const g=JSON.parse('{"title":"3.1 - 词法约定","description":"","frontmatter":{"title":"3.1 - 词法约定","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"3.1.md","filePath":"3.1.md"}'),n={name:"3.1.md"},p=e(`<h2 id="_3-1-词法约定" tabindex="-1">3.1 - 词法约定 <a class="header-anchor" href="#_3-1-词法约定" aria-label="Permalink to &quot;3.1 - 词法约定&quot;">​</a></h2><p>Lua是一门格式自由的语言。除了两个语法标记之间的分隔符，其余的空白字符以及在语法标记间的注释会被忽略。在源码中，Lua将ASCII标准下的空格字符、制页符、换行符、回车、垂直制表位和水平制表位都识别为空白字符。</p><p>Lua中的<em>名称</em>（也称作<em>标识</em>）可以是由非数字开头、非保留字开头的，任意小写拉丁字母、阿拉伯数字及下划线组合而成的字符串。标识被用作变量、表属性和标签的命名。</p><p>下面是被保留的<em>关键词</em>，它们不能作为名称使用：</p><pre>and       break     do        else      elseif    end
false     for       function  goto      if        in
local     nil       not       or        repeat    return
then      true      until     while
</pre><p>Lua是大小写敏感的语言：<em>and</em>是保留词，但是<em>And</em>和<em>AND</em> 就是两个不同的有效名称了。在惯例下，程序应当避免创建以下划线开头、后跟一个或多个大写字母的名称（例如<a href="#_version">_VERSION</a>）。</p><p>以下是一些其他标识：</p><pre>+     -     *     /     %     ^     #
&amp;     ~     |     &lt;&lt;    &gt;&gt;    //
==    ~=    &lt;=    &gt;=    &lt;     &gt;     =
(     )     {     }     [     ]     ::
;     :     ,     .     ..    ...
</pre><p>短<em>文本字符串（literal string）</em> 可以通过单引号或双引号分割，且可以包含C形式的转移符：&#39;\\a&#39;（响铃）、&#39;\\b&#39;（退格）、&#39;\\f&#39;（换页）、&#39;\\n&#39;（换行）、&#39;\\r&#39;（回车）、&#39;\\t&#39;（水平制表）、&#39;\\v&#39;（垂直制表）、&#39;\\\\&#39;（反斜杠）、&#39;\\&quot;&#39;（双引号）以及&#39;\\&#39;&#39;单引号。反斜杠后跟输入一个换行会在字符串中新起一行。转义符&#39;\\z&#39;会跳过后边一系列的空白字符，包括换行符。这在以下情况特别有用，当你想将一个比较长的文本字符串分为多行写入时，同时又不希望插入任何换行或空白字符。短文本字符串不可以包含原始未转义的换行符或转义未完成的字符序列。</p><p>我们可以通过字节数值在短文本字符串中指定任意字节数据，包括内嵌的0。我们可以用转义序列\\x<em>XX</em>来表示<em>XX</em>这个两位的十六进制数，或者用转义序列\\<em>ddd</em>来表示<em>ddd</em>这个三位的十进制数。（注意如果十进制转义序列后要紧跟一个数字的话，那么这里的转义序列必须使用完整的三位数字形式。）</p><p>UTF-8编码的字符可以用转义序列\\u <em>{XXX}</em> （此处的大括号不可省略）插入到文本字符串中，此处的<em>XXX</em>为一位或多位十六进制数表示的字符码点。码点可以是任意小于2<sup>31</sup>的值。（此处Lua使用原始的UTF-8规范，并不完全符合Unicode的有效码点。）</p><p>也可以使用一种由<em>长括号</em>括起来的长格式来定义文本字符串。我们将一个开方括号后跟<em>n</em>个等号后再跟一个开方括号的组合定义为<em>n级开长括号</em>。所以0级开口长括号写作[[，1级开口长括号写作[=[，以此类推。<em>闭长括号</em>的定义与之类似；例如，4级闭长括号写作]====]。一段<em>长文本</em>开始于任意级别的<em>开长括号</em>并结束于同级别的<em>闭长括号</em>。其可以包含除同级闭长括号之外的任意字符。此括号形式内的文本字符可以是多行文本，解释器将不会做任何转义操作，并忽略任意其他级别的长括号。各种行末序列（指回车、换行、换行后跟回车或回车后跟换行）会被转换为简单的换行。换行后紧跟开长括号的情况下，此换行不会包含在字符串里。</p><p>举个例子，在使用ASCII码（在这个标准下，&#39;a&#39;的码点为97，换行的码点为10，&#39;1&#39;的码点为49）的系统中，以下5种文本字符串都表示相同的字符串：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;alo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\97</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\10\\049</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">23&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [[alo</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123&quot;]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [==[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">alo</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123&quot;]==]</span></span></code></pre></div><p>除了符合上述规则的之外，其余任意字节在文本字符串中都表示为它本身。然而，Lua会在文本模式下打开文件来解析，而且系统的文件方法可能有些控制字符的问题。所以，传达非文本字符的安全做法是把其二进制数据作为用显式转义表示的引用文本。</p><p>一个<em>常量数字</em>（或者叫<em>数值</em>）写成一个可选的小数部分和一个可选的十为底的指数部分一起的形式，指数部分由&#39;e&#39;或&#39;E&#39;标记。Lua也接受以0x或0X开头的十六进制数常量。十六进制数常量也接受一个可选的小鼠部分加上一个可选的二为底的指数部分，标记为小写的&#39;p&#39;或&#39;P&#39;并将其写到指数中。（例如，0x1.fp10表示为1984，由0x1f除以16再乘以2<sup>10</sup>得来。）</p><p>可以由小数点或指数组成的数字常量表示浮点数；如果其值可表示为整数或者是十六进制常量，则为整数；否则即溢出的十进制整数），则为浮点数。既没有小数点也没有指数表示的常量数字为整数，如果这个值溢出，则<em>回绕</em>到合适的整数值。</p><p>合法的整数常量的示例：</p><pre>3   345   0xff   0xBEBADA
</pre><p>合法的浮点数常量的示例：</p><pre>3.0     3.1416     314.16e-2     0.31416E1     34e1
0x0.1E  0xA23p-4   0X1.921FB54442D18P+1
</pre><p>在文本字符串之外的任意位置，以两个连字符（--）开头的就是<em>注释</em>。如果紧跟在--后边的文本不是开长括号，则此注释是个<em>短注释</em>，到本行即止。否则就是个<em>长注释</em>，其到相应的闭长括号即止。</p>`,22),t=[p];function l(h,k,r,d,m,o){return a(),i("div",null,t)}const u=s(n,[["render",l]]);export{g as __pageData,u as default};