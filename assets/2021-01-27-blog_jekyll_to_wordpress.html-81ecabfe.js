import{_ as e,Y as o,Z as p,$ as n,a0 as s,a1 as t,a2 as l,D as c}from"./framework-0d329256.js";const i={},r=n("p",null,"2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。",-1),u=n("p",null,"2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感想记录转移到知识输出。",-1),d=n("p",null,"Jekyll 用着太舒服，不知不觉就过了三年。但随着文章越来越多，修改也愈加困难，甚至逐渐习惯只更新专栏，而将博客仅作初版发布。Jekyll 已经失去了知识记录参考的初衷，决定将博客从 Jekyll 迁移到 WordPress，文章的初次排版编辑依旧使用 Markdown。",-1),k=n("figure",null,[n("img",{src:"https://tc.seoipo.com/20210128124408.png?imageMogr2/thumbnail/!50p",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),g=n("h2",{id:"迁移步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#迁移步骤","aria-hidden":"true"},"#"),s(" 迁移步骤")],-1),m={href:"https://github.com/Huxpro/huxpro.github.io",target:"_blank",rel:"noopener noreferrer"},_=l(`<ol><li><p>复制博客主目录下的 feed.xml 文件，重命名为「feed-wp.xml」。如果目录内不存在 feed.xml，可尝试 rss.xml 或 atom.xml。</p></li><li><p>修改 feed-wp.xml 文件中的 <code>for post in site.posts limit:100 %</code>，该项为 rss 最低生成量，我们导出所有文章，因此将该值修改为 100。</p></li><li><p>参照下方内容，按 WordPress 所需 rss 格式修改 feed-wp.xml 文件的 <code>item</code> 部分，并在文件顶部的 <code>&lt;rss&gt;</code> 元素内添加 <code>xmlns:content=&quot;http://purl.org/rss/1.0/modules/content/&quot;</code>，避免 xml 格式报错。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rss</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>atom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2005/Atom<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://purl.org/rss/1.0/modules/content/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>发布日期<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">content:</span>encoded</span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">content:</span>encoded</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span><span class="token punctuation">&gt;</span></span>标签/目录 (该项将全部转为目录)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>category</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rss</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>登录 WordPress 后台，工具－导入－安装并启用插件 <strong>FeedWordPress</strong> 。自带 RSS 导入器许久不更新，极易报错，不推荐。</p></li><li><p>后台－Syndication－添加 rss 源，比如添加源 <code>xxx.com/feed-wp.xml</code>，其中 <code>xxx.com</code> 指你的博客网址。</p><figure><img src="https://tc.seoipo.com/20210128120956.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>参考资料：</p>`,2),h={href:"https://www.v2ex.com/t/73385",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.yiyult.com/201903155699.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.cnblogs.com/u0mo5/p/4100927.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://stackoverflow.com/questions/33212592/how-to-create-contentencoded-in-rss",target:"_blank",rel:"noopener noreferrer"},b={href:"content:encoded"};function w(y,q){const a=c("ExternalLinkIcon");return o(),p("div",null,[r,u,d,k,g,n("p",null,[s("这里迁移的是 Jekyll 的 "),n("a",m,[s("Hux blog 模板"),t(a)]),s("，Hexo 或其他 Jekyll 博客可以参照微调。")]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",h,[s("有没有办法把 Markdown 写的博客迁移到 wordpress？"),t(a)])])]),n("li",null,[n("p",null,[n("a",x,[s("WordPress 从 RSS 导入文章"),t(a)])])]),n("li",null,[n("p",null,[n("a",f,[s("有关 WordPress 的 Rss 导入指南"),t(a)])])]),n("li",null,[n("p",null,[n("a",v,[s("How to create "),n("a",b,[s("content:encoded"),t(a)]),s(" in RSS")])])])])])}const P=e(i,[["render",w],["__file","2021-01-27-blog_jekyll_to_wordpress.html.vue"]]);export{P as default};
