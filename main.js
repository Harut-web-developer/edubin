 const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function (){

        this.classList.toggle('active');
    })
}

// $(function() {
//
//
//     $(".accordion__title").on("click", function(e) {
//
//         e.preventDefault();
//         var $this = $(this);
//
//         if (!$this.hasClass("accordion-active")) {
//             $(".accordion__content").slideUp(400);
//             $(".accordion__title").removeClass("accordion-active");
//             $('.accordion__arrow').removeClass('accordion__rotate');
//         }
//
//         $this.toggleClass("accordion-active");
//         $this.next().slideToggle();
//         $('.accordion__arrow',this).toggleClass('accordion__rotate');
//     });
//
//
// });

//
// $(document).ready(function (){
//
//     $('.glxavor:first').children('glxavor1').addClass('selected').next('.glxavor2').show()
//
//     $('.glxavor1').click(function (event){
//         if($(this).hasClass('selected')){
//             $(this).removeClass('selected');
//             $(this).next().slideUp();
//         }else{
//             $('.glxavor1').removeClass('selected');
//             $(this).addClass('selected');
//             $('.glxavor1').next().slideUp();
//             $(this).next().slideDown();
//         }
//     });

let value = NaN
value &&=10
value = value && 10
alert(value)

value ||=20
value &&=30
value ||=40
// alert(value)
