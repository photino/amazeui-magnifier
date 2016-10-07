---
title: Amaze UI Magnifier 使用演示
---

## Magnifier 使用演示

### 正方形图片

`````html
<figure class="am-magnifier">
  <img width="300" height="300" src="images/bing-square.jpg" alt="Bing square image" data-am-magnify>
  <div data-am-shape="square"></div>
  <div class="am-margin-left-sm">
    <img width="900" height="900" src="images/bing-square.jpg" alt="Bing square image">
  </div>
</figure>
`````

```html
<figure class="am-magnifier">
  <img width="300" height="300" src="images/bing-square.jpg" alt="Bing square image" data-am-magnify>
  <div data-am-shape="square"></div>
  <div class="am-margin-left-sm">
    <img width="900" height="900" src="images/bing-square.jpg" alt="Bing square image">
  </div>
</figure>
```

### 矩形图片

`````html
<figure class="am-magnifier">
  <img id="small-image" width="480" height="270" src="images/bing-rect.jpg" alt="Bing rect image">
  <div></div>
  <div class="am-margin-left-sm">
    <img width="1920" height="1080" src="images/bing-rect.jpg" alt="Bing rect image">
  </div>
</figure>
`````

```html
<figure class="am-magnifier">
  <img id="small-image" width="480" height="270" src="images/bing-rect.jpg" alt="Bing rect image">
  <div></div>
  <div class="am-margin-left-sm">
    <img width="1920" height="1080" src="images/bing-rect.jpg" alt="Bing rect image">
  </div>
</figure>
```

```js
<script>
  $(function() {
    $('#small-image').magnify({
      shape: 'rect',
      width: 120
    });
  });
</script>
```

<script src="../dist/amazeui.magnifier.min.js"></script>
<script>
  $(function() {
    $('#small-image').magnify({
      shape: 'rect',
      width: 120
    });
  });
</script>
