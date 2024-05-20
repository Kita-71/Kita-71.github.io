import{_ as a,c as l,o as i,a1 as t}from"./chunks/framework.BwTyoF0R.js";const e="/assets/Untitled.BADi1XDE.png",r="/assets/Untitled%201.B5Sdt7VJ.png",o="/assets/Untitled%202.D0S9Ih1l.png",n="/assets/Untitled%203.D3PRJpXK.png",s="/assets/Untitled%204.DH4uJE5J.png",h="/assets/Untitled%205._wjluaVo.png",d="/assets/Untitled%206.CQbqqHcj.png",g=JSON.parse('{"title":"Chapter-5-聚类","description":"","frontmatter":{},"headers":[],"relativePath":"数据挖掘与大数据分析/Chapter-5-聚类.md","filePath":"数据挖掘与大数据分析/Chapter-5-聚类.md"}'),p={name:"数据挖掘与大数据分析/Chapter-5-聚类.md"},u=t('<h1 id="chapter-5-聚类" tabindex="-1">Chapter-5-聚类 <a class="header-anchor" href="#chapter-5-聚类" aria-label="Permalink to &quot;Chapter-5-聚类&quot;">​</a></h1><h2 id="_1-什么是聚类" tabindex="-1">1. 什么是聚类 <a class="header-anchor" href="#_1-什么是聚类" aria-label="Permalink to &quot;1. 什么是聚类&quot;">​</a></h2><ul><li>聚类就是将数据分为多个簇，使得在同一个簇内对象之间具有较高的相似度，不同簇之间的对象差别较大</li></ul><h2 id="_2-聚类的功能" tabindex="-1">2. 聚类的功能 <a class="header-anchor" href="#_2-聚类的功能" aria-label="Permalink to &quot;2. 聚类的功能&quot;">​</a></h2><ul><li>获得数据内部结构的有效方法</li><li>作为其他算法的预处理步骤</li><li>完成噪声点/离群点挖掘</li></ul><h2 id="_3-聚类的分类" tabindex="-1">3. 聚类的分类 <a class="header-anchor" href="#_3-聚类的分类" aria-label="Permalink to &quot;3. 聚类的分类&quot;">​</a></h2><blockquote><p>从不同的角度出发</p></blockquote><h3 id="_3-1-基于划分的方法" tabindex="-1">3.1 基于划分的方法 <a class="header-anchor" href="#_3-1-基于划分的方法" aria-label="Permalink to &quot;3.1 基于划分的方法&quot;">​</a></h3><ul><li>给定n个，划分为k个，每个划分就代表一个簇</li><li>先进行初步划分，而后反复迭代改进之前的划分</li></ul><h4 id="k-means" tabindex="-1">K-Means <a class="header-anchor" href="#k-means" aria-label="Permalink to &quot;K-Means&quot;">​</a></h4><p><img src="'+e+'" alt="Untitled"></p><ul><li>优点：简单、快捷</li><li>缺点： <ul><li>对k敏感</li><li>对初始中心点敏感</li><li>无法发现非高斯簇（非球状或差别很大的簇）</li><li>对离群点敏感</li></ul></li></ul><h3 id="_3-2-基于层次的方法" tabindex="-1">3.2 基于层次的方法 <a class="header-anchor" href="#_3-2-基于层次的方法" aria-label="Permalink to &quot;3.2 基于层次的方法&quot;">​</a></h3><ul><li>层次凝聚：自底向上 AGNES</li><li>层次分裂：自顶向下 DIANA</li></ul><h3 id="_3-3-基于密度的方法" tabindex="-1">3.3 基于密度的方法 <a class="header-anchor" href="#_3-3-基于密度的方法" aria-label="Permalink to &quot;3.3 基于密度的方法&quot;">​</a></h3><ul><li>只要一个区域中的点的密度大于某个阈值，就把它加到与之相近的聚类中去。</li><li>这类算法<strong>能克服基于距离的算法只能发现“类圆形”的聚类的缺点</strong>，可发现任意形状的聚类，<strong>且对噪声数据不敏感</strong></li></ul><h4 id="dbscan" tabindex="-1">DBSCAN <a class="header-anchor" href="#dbscan" aria-label="Permalink to &quot;DBSCAN&quot;">​</a></h4><ul><li><p>利用高密度连通性，快速发现任意形状的类</p><ul><li>高密度总是被低密度所分割</li><li>能从由噪音的空间数据中发现任意形状的聚类</li></ul></li><li><p>基本思想</p><ul><li>对于一个类的每个对象，在其给定半径的领域中包含的对象不能少于”密度“</li></ul></li><li><p>术语定义</p><ul><li>核心点、边界点、噪声点</li></ul><p><img src="'+r+'" alt="Untitled"></p><p><img src="'+o+'" alt="Untitled"></p><p><img src="'+n+'" alt="Untitled"></p></li><li><p>流程</p></li></ul><p><img src="'+s+'" alt="Untitled"></p><ul><li>优缺点 <ul><li>优点： <ul><li>发现任一形状的簇</li><li>可以检测噪声</li><li>无需设置k</li></ul></li><li>缺点： <ul><li>很难设置参数，对两个参数敏感</li></ul></li></ul></li></ul><h3 id="_3-4-基于网格的方法" tabindex="-1">3.4 基于网格的方法 <a class="header-anchor" href="#_3-4-基于网格的方法" aria-label="Permalink to &quot;3.4 基于网格的方法&quot;">​</a></h3><p>将对象空间量化为有限数目的单元，形成一个网格结构，所有的聚类都在这个网格结构中上进行。</p><h2 id="_4-离群点检测" tabindex="-1">4.离群点检测 <a class="header-anchor" href="#_4-离群点检测" aria-label="Permalink to &quot;4.离群点检测&quot;">​</a></h2><h3 id="_4-1-什么是离群点" tabindex="-1">4.1 什么是离群点 <a class="header-anchor" href="#_4-1-什么是离群点" aria-label="Permalink to &quot;4.1 什么是离群点&quot;">​</a></h3><ul><li>离群点是一个数据对象，它显著不同于其它数据对象，好像它是被不同的机制产生的一样。</li></ul><h3 id="_4-2-离群点分类" tabindex="-1">4.2 离群点分类 <a class="header-anchor" href="#_4-2-离群点分类" aria-label="Permalink to &quot;4.2 离群点分类&quot;">​</a></h3><ul><li><p>全局离群点</p><p>和别的点没有任何关系</p></li><li><p>局部离群点</p><p>对全局而言不是离群点，对于某个簇是离群点</p></li><li><p>集体离群点</p><p>某一个集体和其他不同</p></li></ul><h3 id="_4-3-检测方法" tabindex="-1">4.3 检测方法 <a class="header-anchor" href="#_4-3-检测方法" aria-label="Permalink to &quot;4.3 检测方法&quot;">​</a></h3><h4 id="_4-3-1-基于统计" tabindex="-1">4.3.1 基于统计 <a class="header-anchor" href="#_4-3-1-基于统计" aria-label="Permalink to &quot;4.3.1 基于统计&quot;">​</a></h4><p>基本思想：对给定的数据集合假设了一个分布或概率模型(例如, 正态分布), 然后根据模型采用不一致性检验(discordancy test)来确定孤立点</p><h4 id="_4-3-2-基于距离" tabindex="-1">4.3.2 基于距离 <a class="header-anchor" href="#_4-3-2-基于距离" aria-label="Permalink to &quot;4.3.2 基于距离&quot;">​</a></h4><p>基本思想：基于距离的孤立点: DB (p, d)-孤立点是数据集T 中的一个对象o, 使得 T 中的对象至少有p 部分与o 的距离大于d。</p><ul><li>基于索引</li><li>嵌套循环</li><li>基于单元</li></ul><h4 id="_4-3-3-基于偏差" tabindex="-1">4.3.3 基于偏差 <a class="header-anchor" href="#_4-3-3-基于偏差" aria-label="Permalink to &quot;4.3.3 基于偏差&quot;">​</a></h4><p>基本思想：通过检查一组对象的主要特征来确定孤立点 ，如果与给出的描述偏离大的对象被认为是孤立点 。</p><h4 id="_4-3-4-基于密度" tabindex="-1">4.3.4 基于密度 <a class="header-anchor" href="#_4-3-4-基于密度" aria-label="Permalink to &quot;4.3.4 基于密度&quot;">​</a></h4><p>对象p的局部异常因子表示p的异常程度，局部异常因子愈大，就认为它更可能异常；反之则可能性小。</p><p>簇内靠近核心点的对象的LOF接近于1，那么不应该被认为是局部异常。而处于簇的边缘或是簇的外面的对象的LOF相对较大，如前面图中对象o1， o2。</p><p><img src="'+h+'" alt="Untitled"></p><p><img src="'+d+'" alt="Untitled"></p>',40),c=[u];function _(m,b,q,k,f,P){return i(),l("div",null,c)}const U=a(p,[["render",_]]);export{g as __pageData,U as default};
