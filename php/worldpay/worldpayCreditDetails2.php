<!DOCTYPE html>
<html>
   <head>
      <title></title>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="../../vendors/bootstrap-4.5.3-dist/css/bootstrap.min.css" type="text/css">
      <script src="https://cdn.worldpay.com/v1/worldpay.js"></script>
   </head>
   <body class="container-fluid" style="background-color: rgb(21, 27, 141); color: white;">
      <form action="complete2.php" id="paymentForm" method="post" class="form-group m-auto w-50">
         <span id="paymentErrors"></span>
         <div class="form-row">
            <label class="mt-3">Name on Card</label>
            <input data-worldpay="name" name="name" type="text" class="form-control ml-1"/>
         </div>
         <div class="form-row">
            <label class="mt-3">Card Number</label>
            <input data-worldpay="number" size="20" type="text" class="form-control ml-1"/>
         </div>
         <div class="form-row align-items-end">
            <div class="col-5 pl-0">
               <label class="mt-3">Expiration (MM/YYYY)</label>
               <input data-worldpay="exp-month" size="2" type="text" class="form-control"/>
            </div>
            <div class="col-2 text-center">/</div>
            <div class="col-5">
               <label></label>            
               <input data-worldpay="exp-year" size="4" type="text" class="form-control ml-1"/>
            </div>
         </div>
         <div class="form-row">
            <label class="mt-3">CVC</label>
            <input data-worldpay="cvc" size="4" type="text" class="form-control ml-1"/>
         </div>
         <input type="submit" value="Place Order" class="btn btn-lg btn-success mt-3 pl-0 mx-auto" />
      </form>
      <script type="text/javascript">
         var form = document.getElementById('paymentForm');
         Worldpay.useOwnForm({
           'clientKey': 'T_C_8830a51a-001b-4088-954b-c9ad2745427f',
           'form': form,
           'reusable': false,
           'callback': function(status, response) {
             document.getElementById('paymentErrors').innerHTML = '';
             if (response.error) {              
                 Worldpay.handleError(form, document.getElementById('paymentErrors'), response.error); 
             } else {
               var token = response.token;
               Worldpay.formBuilder(form, 'input', 'hidden', 'token', token);
               form.submit();
             }
           }
         });
      </script>
      <script src="../../vendors/jquery/jquery-3.5.1.js"></script>
      <script src="../../vendors/bootstrap-4.5.3-dist/js/bootstrap.bundle.min.js"></script>      
   </body>
</html>