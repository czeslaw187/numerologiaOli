
<!DOCTYPE html>
<html>
   <head>
      <title></title>
      <meta charset="UTF-8" />
      <script src="https://cdn.worldpay.com/v1/worldpay.js"></script>
      <script type='text/javascript'>
         window.onload = function() {
           Worldpay.useTemplateForm({
             'clientKey':'T_C_8830a51a-001b-4088-954b-c9ad2745427f',
             'form':'paymentForm',
             'paymentSection':'paymentSection',
             'display':'inline',
             'reusable':true,
             'callback': function(obj) {
               if (obj && obj.token) {
                 let _el = document.createElement('input');
                 _el.value = obj.token;
                 _el.type = 'hidden';
                 _el.name = 'token';
                 document.getElementById('paymentForm').appendChild(_el);
                 document.getElementById('paymentForm').submit();
               }
             }
           });
         }
      </script>
   </head>
   <body>
      <form action="../php/complete.php" id="paymentForm" method="post">
         <label for="name">Name</label>
         <input type="text" name="name" id="name">
         <div id='paymentSection'></div>
         <div>
            <input type="submit" value="Place Order" onclick="Worldpay.submitTemplateForm()" />
         </div>
      </form>
   </body>
</html>
