(function (window, document) {
  'use strict';

  // 요소를 담고 있으면 $표시를 붙이는 경우가 많음
  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.querySelector('#toggle-btn'); // Return Element
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function toggleElements() {
    // [] 빈배열
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document);