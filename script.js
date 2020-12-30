$(document).ready(function () {
  $("#knopka1").fadeTo("slow", 0.3);
  $("#knopka2").fadeTo("slow", 0.3);
  $("#knopka3").fadeTo("slow", 0.3);
  $("#knopka4").fadeTo("slow", 0.3);
  $("#knopka5").fadeTo("slow", 0.3);

  $("#knopka1").hover(function () {
    $(this).fadeTo(600, 1.0);  // Делаем картинку непрозрачной, при наведении мыши
  }, function () {
    $(this).fadeTo(600, 0.3); // Снова возвращаем прозрачность 60%, при отведении мыши
  });
  $("#knopka2").hover(function () {
    $(this).fadeTo(100, 1.0);  // Делаем картинку непрозрачной, при наведении мыши
  }, function () {
    $(this).fadeTo(100, 0.3); // Снова возвращаем прозрачность 60%, при отведении мыши
  });
  $("#knopka3").hover(function () {
    $(this).fadeTo("fast", 1.0);  // Делаем картинку непрозрачной, при наведении мыши
  }, function () {
    $(this).fadeTo("fast", 0.3); // Снова возвращаем прозрачность 60%, при отведении мыши
  });
  $("#knopka4").hover(function () {
    $(this).fadeTo("slow", 1.0);  // Делаем картинку непрозрачной, при наведении мыши
  }, function () {
    $(this).fadeTo("slow", 0.3); // Снова возвращаем прозрачность 60%, при отведении мыши
  });
  $("#knopka5").hover(function () {
    $(this).fadeTo("slow", 1.0);  // Делаем картинку непрозрачной, при наведении мыши
  }, function () {
    $(this).fadeTo("slow", 0.3); // Снова возвращаем прозрачность 60%, при отведении мыши
  });
});