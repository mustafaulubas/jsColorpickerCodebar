/* Exercise 2: Color picker */
var colors = ['22ac5e', 'd68236', '770077'];
var previewColor;

function setPreviewColor(color) {
     $(".preview").css('background-color', color);
     var colorCode = $(".preview").css('background-color');
     //previewColor = colorCode;
     $(".color-code").text(colorCode);
}

function addBox(color) {
     $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}

$(document).on('keyup', '#color', function () {
     var color = $('#color').val();
     setPreviewColor(color);
});

$(document).on('click', '#add-to-favorite', function () {
     if ($('#color').val() != "") {
          if ($('#colors .item').length >= 16) {
               $('#colors .item').last().remove();
          }
          var color = $('#color').val();
          addBox(color);
          $('#color').val("");
          $('#color').focus();
     }
});

$(document).ready(function () {
     colors.forEach(function (color) {
          addBox(color);
     });
     var randomNum = Math.floor(Math.random() * colors.length);
     var randomColor = colors[randomNum];
     setPreviewColor(randomColor);
});

$(document).on('mouseenter', '#colors .item', function () {
     previewColor = $('.preview').css('background-color');
     setPreviewColor($(this).css('background-color'));
});

$(document).on('mouseleave', '#colors .item', function () {
     setPreviewColor(previewColor);
});