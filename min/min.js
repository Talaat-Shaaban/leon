

let icon = document.querySelector(".icon");
let links = document.querySelector(".lin");


console.log(icon)
console.log(links)

// إضافة حدث 'click' لأيقونة القائمة
icon.addEventListener('click', function() {
  // استخدام classList.toggle لإظهار أو إخفاء القائمة
  links.classList.toggle('show');
});
