export class CardDetails {

    cardDetailsForm(transaction, price) {
        $('#mainContent .active').html(`<form action="./php/worldpay/transaction1.php" id="paymentForm" method="post" class="form-group m-auto w-75 fadein border rounded">
                                            <span id="paymentErrors"></span>
                                            <div class="form-row d-flex flex-column">
                                                <label class="mt-3 ml-2">Imię na karcie</label>
                                                <input data-worldpay="name" name="name" type="text" class="form-control w-75 ml-2"/>
                                                </div>
                                            <div class="form-row d-flex flex-column">
                                                <label class="mt-3 ml-2">Numer karty</label>
                                                <input data-worldpay="number" size="20" type="text" class="form-control ml-2 w-75"/>
                                            </div>
                                            <div class="form-row align-items-end">
                                            <div class="col-5 pl-0">
                                                <label class="mt-3 ml-2">Ważna do (MM/YYYY)</label>
                                                <input data-worldpay="exp-month" size="2" type="text" class="form-control ml-2"/>
                                            </div>
                                            <div class="col-2 text-center">/</div>
                                            <div class="col-5">
                                                <label></label>            
                                                <input data-worldpay="exp-year" size="4" type="text" class="form-control mx-auto"/>
                                            </div>
                                            </div>
                                            <div class="form-row d-flex flex-column">
                                                <label class="mt-3 ml-2">CVC</label>
                                                <input data-worldpay="cvc" size="4" type="text" class="form-control ml-2 w-75"/>
                                            </div>
                                            <input type="submit" value="Zamów" class="btn btn-lg btn-success px-auto m-3" />
                                            <button role="button" id="uslugaBck" class="btn btn-lg btn-secondary px-auto m-3">Wstecz</button>
                                        </form>`)

        const form = $('#paymentForm');
        price = parseInt(price)
        console.log(typeof price)
        Worldpay.useOwnForm({
            'clientKey': 'T_C_8830a51a-001b-4088-954b-c9ad2745427f',
            'form': form,
            'reusable': false,
            'callback': function(status, response) {
                $('#paymentErrors').html('');
                if (response.error) {              
                    Worldpay.handleError(form, $('#paymentErrors'), response.error); 
                } else {
                    const token = response.token;
                    $.ajax({
                        url: `php/worldpay/transaction1.php`,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            token: token,
                            price: price,
                            transaction: transaction,
                        },
                        success: result=> {
                            $('#mainContent .active').html(`<div class="modal fade" tabindex="-1" role="dialog" id="myMod">
                                                                <div class="modal-dialog" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title">Zamówienie przyjęte</h5>
                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <p>Numer zamówienia: ${result['message']}</p>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>`)
                            $('#myMod').modal('show')
                        }
                    })
                }
            }
        });

    }
}