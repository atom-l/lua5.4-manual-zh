import{_ as e,c as t,o as a,a4 as l}from"./chunks/framework.4aTu-Nia.js";const p=JSON.parse('{"title":"2.4 - 元表和元函数","description":"","frontmatter":{"title":"2.4 - 元表和元函数","footer":true,"lastUpdated":true,"outline":false},"headers":[],"relativePath":"2.4.md","filePath":"2.4.md"}'),_={name:"2.4.md"},r=l('<h2 id="_2-4-元表和元函数" tabindex="-1">2.4 - 元表和元函数 <a class="header-anchor" href="#_2-4-元表和元函数" aria-label="Permalink to &quot;2.4 - 元表和元函数&quot;">​</a></h2><p>每个值都可以有 <em>元表（metatable）</em>。<em>元表</em> 是定义了原始数据在某些事件下行为的一个普通Lua表。你可以通过设置其元表的某些特定属性来改变某个值的某些行为。举个例子，一个非数字值进行加法操作时，Lua会在这个值的元表中查找__add属性函数，找到了的情况下，Lua就会调用这个函数来执行加法操作。</p><p>元表中的每个事件对应的键都是一个字符串，内容是以两个下划线做前缀的事件名，其相应的值被称为 <em>元值（metavalue）</em>。对于大部分事件，其元值必须是一个称为 <em>元函数（metamethod）</em> 的方法。在上边说的例子里，键值是“_add”字符串且元函数是一个用来做加法操作的方法。若非另有说明，元函数实际上可以是任意可调用的值，它要么是个函数，要么是个带有元方法“__call”的值。</p><p>你可以使用<a href="/6.1.html#getmetatable">getmetatable</a>方法来查询任何值的元表。Lua使用原始访问（参见<a href="/6.1.html#rawget">rawget</a>）来查询元表中的元函数。</p><p>你可以使用<a href="/6.1.html#setmetatable">setmetatable</a>方法来替换表的元表。你不能从Lua代码中改变其他类型的元表，除非使用调试库（参见<a href="/6.10.html">6.10</a>）。</p><p>表和full userdata有单独的元表，尽管多个表和userdata之间可以共享它们的元表。其他类型的值共享每个类型的单独元表；即，存在一个单独的元表给所有数字使用，一个单独的元表给所有的字符串使用，等等。默认情况下，值没有元表，但是字符串库给字符串类型设置了一个元表（参见<a href="/6.4.html">6.4</a>）。</p><p>下面给出了关于元表控制的操作的详细列表。每种事件由对应的键标识。按约定，所有的元表键由两个下划线后跟小写拉丁字母组合而成。</p><ul><li><strong>__add：</strong> 加法（+）操作。如果任何一个加法操作的操作数不是一个数字，Lua将尝试调用元函数。它从第一个操作数开始检查（即使它是数字），如果它没有为__add定义元函数，Lua将继续检查第二个操作数。如果Lua可以找到了元函数，那么Lua将两个操作数为参数来调用元函数，且将调用结果（调整为单个值）作为作为操作的结果。反之，如果没有找到元函数，Lua会抛出一个错误。</li><li><strong>__sub：</strong> 减法（-）操作。行为类似于加法操作。</li><li><strong>__mul：</strong> 乘法（*）操作。行为类似于加法操作。</li><li><strong>__div：</strong> 除法（/）操作。行为类似于加法操作。</li><li><strong>__pow：</strong> 幂（^）操作。行为类似于加法操作。</li><li><strong>__unm：</strong> 取负（一元 -）操作。行为类似于加法操作。</li><li><strong>__idiv：</strong> 整除（//）操作。行为类似于加法操作。</li><li><strong>__band：</strong> 按位与（&amp;）操作。行为类似于加法操作，不同之处在于当操作数既不是整数也不是可强转到整数的浮点数时（参见<a href="/3.4.3.html">3.4.3</a>），Lua将尝试调用元函数。</li><li><strong>__bor：</strong> 按位或（|）操作。行为类似于按位与操作。</li><li><strong>__bxor：</strong> 按位异或（~）操作。行为类似于按位与操作。</li><li><strong>__bnot：</strong> 按位取反（一元 ~）操作。行为类似于按位与操作。</li><li><strong>__shl：</strong> 位左移（&lt;&lt;）操作。行为类似于按位与操作。</li><li><strong>__shr：</strong> 位右移（&gt;&gt;）操作。行为类似于按位与操作。</li><li><strong>__concat：</strong> 连接（..）操作。行为类似于加法操作，不同之处在于当操作数既不是字符串也不是数字时（数字定能被转换为一个字符串），Lua将尝试调用元函数。</li><li><strong>__len：</strong> 取长（#）操作。如果对象不是一个字符串，Lua将尝试调用其元函数。如果元函数存在，则调用将对象作为参数调用元函数，并将调用结果（通常调整为单个值）作为操作结果。如果元表不存在但是对象是table，Lua使用表的取长操作（参见<a href="/3.4.7.html">3.4.7</a>）。否则，Lua抛出将会抛出错误。</li><li><strong>__eq：</strong> 判断相等（==）操作。行为类似于加法操作，不同之处在于当这些值都是表或都是full userdata且它们底层不相等时，Lua将会尝试调用元函数。其结果总是会被转换为一个布尔值。</li><li><strong>__lt：</strong> 判断小于（&lt;）操作。行为类似于加法操作，不同之处在于当这些值既不是都是数字也不都是字符串时，Lua将尝试调用元函数。另外，其结果总是会被转换为一个布尔值。</li><li><strong>__le：</strong> 判断小于等于（&lt;=）操作。行为类似于判断小于操作。</li><li><strong>__index：</strong> 访问索引（<em>table[key]</em>）操作。这个操作发生在<em>table</em>不是一个表或者<em>key</em>不存在于<em>table</em>中的情况下。此时将会在<em>table</em>的元表中查找其元值。<br>此事件的元值可以是一个方法、一个表、或者任何带有__index元值的值。如果是方法，它会将<em>table</em>和<em>key</em>作为参数来调用，调用结果（调整为单值）作为操作结果。否则，最终的结果是其元值索引<em>key</em>的结果。此索引是常规索引，而非直接索引，所以可以出发其他的__index元值。</li><li><strong>__newindex：</strong> 赋值索引（<em>table[key]</em>）操作。像index事件一样，在<em>table</em>不是一个表或者<em>key</em>不存在于<em>table</em>中时，将会在<em>table</em>的元表中查找其元值。<br>与索引类似，此元值可以是方法、表、或者任何带有__newindex元值的值。如果是方法，它会将<em>table</em>、<em>key</em>和<em>value</em>作为参数来调用。否则，Lua将再次对这个元值做索引赋值。这里的赋值流程是常规赋值，而不是直接的赋值，所以它可能会触发其他地方的__newindex元值。<br>无论何时，当__newindex元值被调用，Lua不会执行任何更多的赋值操作。如果需要，元函数自身可以调用<a href="/6.1.html#rawset">rawset</a>来做赋值。</li><li><strong>__call：</strong> 调用方法<em>func(args)<em>操作。此事件发生在Lua尝试调用一个non-function值（即，<em>func</em>不是个方法）的时候。将在</em>func</em>中寻找此元函数。如果存在，会将<em>func</em>作为第一个参数，再在后边加上其原本调用的参数列表来调用此元函数。所有此操作的结果都将作为其调用结果。这是唯一一个允许多个返回结果的元函数。</li></ul><p>除了上述列表外，解释器还遵循了以下元表中的键：__gc（参见<a href="/2.5.3.html">2.5.3</a>），__close（参见<a href="/3.3.8.html">3.3.8</a>），__mode（参见<a href="/2.5.4.html">2.5.4</a>），以及__name。（<a href="#tostring-v">tostring</a>和错误消息中可能会用到包含字符串的__name。）</p><p>对于一元操作（取负、取长度和按位取否）而，元函数是使用虚拟的第二个操作数来计算和调用的，其等于第一个操作数。这个多余的操作数只是为了简化Lua的内部结构（使得这些操作和二元操作做相似的行为），并且在未来的版本中可能会删掉这些。对于大部分用途，这个多余的操作数都是无所谓的。</p><p>因为元表其实是常规的表，所以它们可以包含任意属性，而不只是定义上边提到的事件名。有些标准库中的函数就为了其自己的目的而使用了元表上的其他属性。</p><p>在一个好的实现中，会在给一些对象设置元表前把所有需要的元函数都加到一个表上；特别是__gc元函数，它只能用这种方式才能起效（参见<a href="/2.5.3.html">2.5.3</a>）。在一个对象被创建后立刻设置元表也是个好的实现。</p>',12),n=[r];function m(o,s,i,g,u,d){return a(),t("div",null,n)}const c=e(_,[["render",m]]);export{p as __pageData,c as default};
