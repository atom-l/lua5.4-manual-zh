import{_ as b,c as e,o as n,a4 as t}from"./chunks/framework.Cy9JvDAg.js";const x=JSON.parse('{"title":"9 - Lua完整语法","description":"","frontmatter":{"title":"9 - Lua完整语法","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"9.md","filePath":"9.md"}'),a={name:"9.md"},l=t(`<h1 id="_9-lua完整语法" tabindex="-1">9 - Lua完整语法 <a class="header-anchor" href="#_9-lua完整语法" aria-label="Permalink to &quot;9 - Lua完整语法&quot;">​</a></h1><p>以下是用BNF扩展形式来展示的Lua完整语法。和常见的BNF扩展形式一样，{A} 意为0个或多个A、[A]意为一个可选的A。（关于运算符优先级，请参见<a href="/lua5.4-manual-zh/3.4.8.html">3.4.8</a>；关于名称、数字、以及字面量字符串的描述，请参见<a href="/lua5.4-manual-zh/3.1.html">3.1</a>。）</p><pre>chunk ::= block

block ::= {stat} [retstat]

stat ::=  ‘<b>;</b>’ | 
	 varlist ‘<b>=</b>’ explist | 
	 functioncall | 
	 label | 
	 <b>break</b> | 
	 <b>goto</b> Name | 
	 <b>do</b> block <b>end</b> | 
	 <b>while</b> exp <b>do</b> block <b>end</b> | 
	 <b>repeat</b> block <b>until</b> exp | 
	 <b>if</b> exp <b>then</b> block {<b>elseif</b> exp <b>then</b> block} [<b>else</b> block] <b>end</b> | 
	 <b>for</b> Name ‘<b>=</b>’ exp ‘<b>,</b>’ exp [‘<b>,</b>’ exp] <b>do</b> block <b>end</b> | 
	 <b>for</b> namelist <b>in</b> explist <b>do</b> block <b>end</b> | 
	 <b>function</b> funcname funcbody | 
	 <b>local</b> <b>function</b> Name funcbody | 
	 <b>local</b> attnamelist [‘<b>=</b>’ explist] 

attnamelist ::=  Name attrib {‘<b>,</b>’ Name attrib}

attrib ::= [‘<b>&lt;</b>’ Name ‘<b>&gt;</b>’]

retstat ::= <b>return</b> [explist] [‘<b>;</b>’]

label ::= ‘<b>::</b>’ Name ‘<b>::</b>’

funcname ::= Name {‘<b>.</b>’ Name} [‘<b>:</b>’ Name]

varlist ::= var {‘<b>,</b>’ var}

var ::=  Name | prefixexp ‘<b>[</b>’ exp ‘<b>]</b>’ | prefixexp ‘<b>.</b>’ Name 

namelist ::= Name {‘<b>,</b>’ Name}

explist ::= exp {‘<b>,</b>’ exp}

exp ::=  <b>nil</b> | <b>false</b> | <b>true</b> | Numeral | LiteralString | ‘<b>...</b>’ | functiondef | 
	 prefixexp | tableconstructor | exp binop exp | unop exp 

prefixexp ::= var | functioncall | ‘<b>(</b>’ exp ‘<b>)</b>’

functioncall ::=  prefixexp args | prefixexp ‘<b>:</b>’ Name args 

args ::=  ‘<b>(</b>’ [explist] ‘<b>)</b>’ | tableconstructor | LiteralString 

functiondef ::= <b>function</b> funcbody

funcbody ::= ‘<b>(</b>’ [parlist] ‘<b>)</b>’ block <b>end</b>

parlist ::= namelist [‘<b>,</b>’ ‘<b>...</b>’] | ‘<b>...</b>’

tableconstructor ::= ‘<b>{</b>’ [fieldlist] ‘<b>}</b>’

fieldlist ::= field {fieldsep field} [fieldsep]

field ::= ‘<b>[</b>’ exp ‘<b>]</b>’ ‘<b>=</b>’ exp | Name ‘<b>=</b>’ exp | exp

fieldsep ::= ‘<b>,</b>’ | ‘<b>;</b>’

binop ::=  ‘<b>+</b>’ | ‘<b>-</b>’ | ‘<b>*</b>’ | ‘<b>/</b>’ | ‘<b>//</b>’ | ‘<b>^</b>’ | ‘<b>%</b>’ | 
	 ‘<b>&amp;</b>’ | ‘<b>~</b>’ | ‘<b>|</b>’ | ‘<b>&gt;&gt;</b>’ | ‘<b>&lt;&lt;</b>’ | ‘<b>..</b>’ | 
	 ‘<b>&lt;</b>’ | ‘<b>&lt;=</b>’ | ‘<b>&gt;</b>’ | ‘<b>&gt;=</b>’ | ‘<b>==</b>’ | ‘<b>~=</b>’ | 
	 <b>and</b> | <b>or</b>

unop ::= ‘<b>-</b>’ | <b>not</b> | ‘<b>#</b>’ | ‘<b>~</b>’
</pre>`,3),o=[l];function i(r,p,c,s,f,u){return n(),e("div",null,o)}const m=b(a,[["render",i]]);export{x as __pageData,m as default};
