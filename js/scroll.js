var num = 1;
$('#WeloBanner').attr("src","img/logo/logo-welo-grey.png");

$(window).scroll(function () { 
  num = $(window).scrollTop()/3;
  
if(parseInt(num) === num)
{
    $('#WeloBanner').attr("src","img/logo/logo-welo-grey.png");
}
else
{
    $('#WeloBanner').attr("src","img/logo/logo-welo-green.png");
}
  
//   if (num<1){
//     $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/1.jpg");
//   }
//     if (num>30){
//     $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/30.jpg");
//       $("img").css("position","absolute");
//   }


});