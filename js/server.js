        const express = require('express')
// Add your credentials:
        // Add your client ID and secret
        const CLIENT = 'ASZ-P6UwpKyYJ1z7QENkeVf-qWgeFhnnZxvdf-CzJS6sHgJ80gLBib08rMWKY99GodW_K3StMFs3T3t5';
        const SECRET = 'EBDc-5jT3MmiIqtkwgngNDOi_CBl57PNw6oze15SqUrUcylKYV_NtXHwjw2sz5Ve_J0pJOsyBaWMe3WP';
        const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
        express()
        // Set up the payment:
        // 1. Set up a URL to handle requests from the PayPal button
        .post('/my-api/create-payment/', function(req, res)
        {
            $.ajax({
                url: PAYPAL_API + '/v1/payments/payment',
                type: 'POST',
                dataType: 'application/json',
                data: {
                    auth:
                    {
                        user: CLIENT,
                        pass: SECRET
                    },
                    body:
                    {
                        intent: 'sale',
                        payer:
                        {
                        payment_method: 'paypal'
                        },
                        transactions: [
                        {
                        amount:
                        {
                            total: req.body.price,
                            currency: 'PLN'
                        }
                        }],
                        redirect_urls:
                        {
                        return_url: 'https://example.com',
                        cancel_url: 'https://example.com'
                        }
                    },
                    json: true
                },
                success: response=> {
                    if (!response) {
                        return res.sendStatus(500)
                    } 
                    res.json({
                        id: response.id
                    })
                }
            })
            // 2. Call /v1/payments/payment to set up the payment
        })
        // Execute the payment:
        // 1. Set up a URL to handle requests from the PayPal button.
        .post('/my-api/execute-payment/', function(req, res)
        {
            // 2. Get the payment ID and the payer ID from the request body.
            const paymentID = req.body.paymentID;
            const payerID = req.body.payerID;
            $.ajax({
                url: PAYPAL_API + '/v1/payments/payment/' + paymentID + '/execute',
                dataType: 'application/json',
                data: {
                    auth:
                    {
                    user: CLIENT,
                    pass: SECRET
                    },
                    body:
                    {
                    payer_id: payerID,
                    transactions: [
                    {
                        amount:
                        {
                        total: req.body.price,
                        currency: 'PLN'
                        }
                    }]
                    },
                    json: true
                },
                success: response=> {
                    if (!response) {
                        return res.sendStatus(500)
                    }

                    res.json({status: 'success'})
                }
            })
            // 3. Call /v1/payments/payment/PAY-XXX/execute to finalize the payment.
            
        }).listen(3000, function()
        {
            console.log('Server listening at http://localhost:3000/');
        });
        // Run `node ./server.js` in your terminal