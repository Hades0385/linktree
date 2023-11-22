$(document).ready(function() {
    $('#google-form').on('submit', function(event) {
      if (this.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      $(this).addClass('was-validated');
    });
  
    $('#send').on('input', function() {
      if ($(this).is(':invalid')) {
        $(this).addClass('is-invalid');
      } else {
        $(this).removeClass('is-invalid');
      }
    });
  });

$('#google-form').submit(function (e) {
        e.preventDefault(); // 阻止表單的預設提交行為
		
		var submitBtn = $('#button-addon2'); // 
		
		if (this.checkValidity() === false) {
			e.stopPropagation();
			$(this).addClass('was-validated');
			return;
		}
		
        var formData = {
        'entry.1145403706': $('#send').val() 
        };
    
        // Google 表單的網址
        var googleFormURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeyjVLSKfxMMmWldNmSUaA2JaFwWCnZ39lWimTzwYw60aVA2A/formResponse'; 
    
        // 使用 AJAX 發送資料到 Google 表單
        $.ajax({
        url: googleFormURL,
        method: 'POST',
        dataType: 'json',
        data: formData,
        complete: function () {
            $('#google-form')[0].reset();
			submitBtn.text('已傳送');
            $('#google-form').removeClass('is-invalid');
			setTimeout(function() {
					submitBtn.text('傳送');
				}, 1500);
        },
        success: function(response) {
            console.log('成功提交表單');
        },
        error: function(error) {
            console.error('提交表單失敗');
        }
        });
    
    });
    /*=========*/

const box = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'}<~/#?{,{$](|=+[?@》⨋⩗⩎⨴⨷";
const randomText = (amount) => {
  var a = "";
  for (var i = 0; i < amount; i++)
    a += box[Math.floor(Math.random() * box.length)];
  return a;
};


const decodeEffect = (target, targetText) => {

  for (let j = 0; j <= targetText.length; j++) {
    window.setTimeout(function () {
      var current = j;
      for (let k = 0; k <= 5; k++) {
        window.setTimeout(function () {
          var correct = targetText.slice(0, current); 
          correct += randomText(targetText.length - current); 
          target.innerText = correct; 
        }, 50 * k); // 每隔50毫秒執行一次內層迴圈
      }
    }, 300 * j); // 每隔300毫秒執行一次外層迴圈
  }
};


const targetElement = document.getElementById('decodedText');

// 目標文字
const targetText = "hex0xyz";


decodeEffect(targetElement, targetText);


setInterval(function() {
    decodeEffect(targetElement, targetText);
}, 6750); 
