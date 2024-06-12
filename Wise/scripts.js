$(document).ready(function(){
    $(".Bars").click(function(){
    console.log("click")
       $(".dropdown-content").addClass("dropdown-content-show")
       $("body").css("overflow", "hidden");
       $("body").addClass("drawer-open");
   
       });
   
         $(".time").click(function(){
           console.log("click")
       $(".dropdown-content").removeClass("dropdown-content-show");
       $("body").css("overflow", "auto");
       $("body").removeClass("drawer-open");
   
       });
   
       
       $("#myInput").on("keyup", function() {
        var searchText = $(this).val().toLowerCase();

        $('.item').each(function() {
          var itemText =  $(this) .find('span').text().toLowerCase();
          if( itemText.includes(searchText)){
            $(this).removeClass('hidden');
          }
          else{
            $(this).addClass('hidden');
          }
      });
    });

  });
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const pagination = document.getElementById('pagination');
    const pages = pagination.querySelectorAll('.page');
    const prevArrow = document.getElementById('prev');
    const nextArrow = document.getElementById('next');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        pages.forEach((page, index) => {
            if (index === currentIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    pages.forEach(page => {
        page.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
        });
    });

    prevArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextArrow.addEventListener('click', function() {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();

});

;

