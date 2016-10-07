# Amaze UI Magnifier

- [使用示例](http://photino.github.io/amazeui-magnifier/docs/demo.html)

## 使用说明

1. 获取 Amaze UI Magnifier

  - [直接下载](https://github.com/photino/amazeui-magnifier/archive/master.zip)
  - 使用 NPM: `npm install amazeui-magnifier`

2. 在 Amaze UI 样式之后引入 Magnifier 样式（`dist` 目录下的 CSS）：

  Amaze UI Magnifier 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.magnifier.min.css"/>
  ```

3. 引入 Magnifier 插件（`dist` 目录下的 JS）：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.magnifier.min.js"></script>
  ```

4. 初始化 Magnifier:

  Amaze UI Magnifier 也支持Data API。

  ```js
  $(function() {
      $('#small-image').magnify({
        shape: 'rect',
        width: 120
      });
  });
  ```
