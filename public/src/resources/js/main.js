// dropdownbar
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("plus").classList.toggle("minus");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//

// desslideshow
$(function () {
  $("#desSlideshow2").desSlideshow({
    autoplay: "enable", //option:enable,disable
    slideshow_width: "1920", //slideshow window width
    slideshow_height: "450", //slideshow window height
    thumbnail_width: "180", //thumbnail width
    time_Interval: "4000", //Milliseconds
    directory: "images/", // flash-on.gif and flashtext-bg.jpg directory
  });
});

$(".plus").click(function () {
  $(this).toggleClass("minus");
});
