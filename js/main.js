console.log("OK");

// ham
const ham = document.querySelector('.ham');
const mobileNav = document.querySelector('.mobile-nav');

ham.addEventListener('click', () => {
    ham.classList.toggle('active'); // ★ハンバーガーを「×」にするため
    mobileNav.classList.toggle('open'); // メニューを出すため
});



// service scroll
const items = document.querySelectorAll('.service-item');
const images = document.querySelectorAll('.service-img');

window.addEventListener('scroll', () => {

    items.forEach((item, i) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight / 2) {

            items.forEach(el => el.classList.remove('active'));
            item.classList.add('active');

            images.forEach(img => img.classList.remove('active'));
            images[i].classList.add('active');
        }
    });
});




// 文字下線
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('under-line-visible');
      }
    });
  }, { threshold: 0.5 });

  // h3 span を対象に監視
  document.querySelectorAll('.under-line').forEach((el) => {
  observer.observe(el);
});
});



// スライドイン
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .slide-in-diagonal, .slide-in-delayed').forEach(el => observer.observe(el));
  });


  // 事業内容のスクロール　テキスト切り替わり
const triggers = document.querySelectorAll(".service-img");
const item = document.querySelectorAll(".service-item");

window.addEventListener("scroll", () => {
  triggers.forEach((trigger, index) => {
    const rect = trigger.getBoundingClientRect();

    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      items.forEach(item => item.classList.remove("active"));
      items[index].classList.add("active");
    }
  });
});

// トップ戻るボタン
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 300px以上スクロールしたら
        backToTop.classList.add('is-show');
    } else {
        backToTop.classList.remove('is-show');
    }
});
