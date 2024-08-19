# firefox_extensions_newtab

主要目的,学习验证自编插件以及如何在firefox中安装数字签署和验证的第三方附加组件

Firefox会阻止未经 Mozilla 数字签署和验证的第三方附加组件

第一步:about:config

第二步:xpinstall.signatures.required 改为false

第三步:打开自己扩展中的manifest.json文件，添加如下代码：

"applications": { "gecko": { "id": "X@Y" } },

其中X和Y自己随便改成别的字符串。  重新加载插件，成功安装。


这个 "applications": { "gecko": { "id": "x@y" } }, 部分是 Firefox 插件特有的配置,用于指定插件的唯一标识符(ID)。

解释如下:

"applications": 这个键是用来定义 Firefox 特有的配置项的。

"gecko": 这个键表示这些配置项是针对 Gecko 引擎(Firefox 使用的渲染引擎)的。

"id": "x@y": 这个就是插件的唯一标识符。这个 ID 必须是唯一的,通常使用逆域名的形式来命名,如 "com.example.myplugin"。

如何将chrome扩展插件转为firefox插件?

前提是两种浏览器支持的插件的manifest.json文件版本要一样都是  "manifest_version": 2,或者都是"manifest_version": 3,即便是相同的浏览器,都是chrome或者都是firefox,只要插件版本不同就无法保证会正常运行.

版本相同前提下,两种插件结构差不多,简单的插件只需要将chrome的manifest.json文件，添加如下代码：

"applications": { "gecko": { "id": "X@Y" } },

然后将chrome插件文件夹里面的,所有文件,打包成zip文件,这个zip文件可以在firefox安装使用.

