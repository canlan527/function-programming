if(!this.myPlugin) {
  this.myPlugin = {};
}

this.myPlugin.Collapse = function(option) {
  var isSpread = true; // 是否展开
  // 设置父容器宽高
  if(option.oHeight) {
    option.oHeight = option.oHeight < 50 ? 50 : option.oHeight 
  }
  if(option.oWidth) {
    option.oWidth = option.oWidth < 200 ? 200 : option.oWidth 
  }
  option.oWidth = option.oWidth || option.oContainer.offsetWidth
  option.oContainer.style.width = option.oWidth + 'px';;
  option.oHeight = option.oHeight || option.oContainer.offsetHeight;
  option.oContainer.style.height = option.oHeight  + 'px';
  // 子元素高度
  option.oContent.style.height = option.oHeight + 'px';
  // 按钮文字
  option.oBtnText.innerText = option.title || '点击标题';
  option.oBtn.onclick = function spread() {
    if(isSpread) {
      option.oContent.style.display = 'none';
      option.icon.setAttribute('src',option.iconSrc[0])
      console.log( option.icon)
      isSpread = false;
    }else {
      option.oContent.style.display = 'block';
      option.icon.setAttribute('src',option.iconSrc[1])
      console.log( option.icon)
      isSpread = true;
    }
  }
}

/* 
  我的想法是将逻辑/样式分开
  从性能考虑：样式些在 CSS 里， 要比定义都在js中更好。
*/