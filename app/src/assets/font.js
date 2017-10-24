;(function (doc, win, undefined) {
  var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
                recalc = function () {
    var clientWidth = docEl.clientWidth;
                  if (clientWidth === undefined) return;
    docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';//当前的尺寸是30rem 就相当于一屏幕的宽度
                };
            if (doc.addEventListener === undefined) return;
            win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
          })(document, window);