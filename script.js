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
    
        // 獲取表單資料
        var formData = {
        'entry.1145403706': $('#send').val() // 這裡的 entry.1234567890 要替換為你 Google 表單中對應的輸入欄位的 ID
        };
    
        // Google 表單的網址
        var googleFormURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeyjVLSKfxMMmWldNmSUaA2JaFwWCnZ39lWimTzwYw60aVA2A/formResponse'; // 請將 your_form_id 替換為你 Google 表單的 ID
    
        // 使用 AJAX 發送資料到 Google 表單
        $.ajax({
        url: googleFormURL,
        method: 'POST',
        dataType: 'json',
        data: formData,
        complete: function () {
            $('#google-form')[0].reset();
            $('#google-form').removeClass('is-invalid');
        },
        success: function(response) {
            // 成功處理後的動作
            console.log('成功提交表單');
        },
        error: function(error) {
            // 錯誤處理
            console.error('提交表單失敗');
            // 這裡可以加入錯誤發生時的處理
        }
        });
    
    });