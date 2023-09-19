---
title: transition-group列表过渡
date: 2020-02-04 13:17:42


---
# transition-group列表过渡

## 列表的进入/离开过渡

```html
<transition-group tag="ul"> <!--tag转为ul-->
    <li v-for="item in list" :key="item">{{item}}</li> <!--子元素要有key-->
</transition-group>
```
**注意**：列表元素一定要有`key`
<!-- more -->
```css
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.v-enter-active,.v-leave-active{
  transition: all 1s;
}
```

## 列表的排序过渡

```css
.v-move {
  transition: transform 1s;
}
```
