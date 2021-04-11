export class SectionContact {

    displaySectionContact () {

        return `<div class="card w-75 mr-auto ml-0 p-2 contactForm" id="emailForm">                     
                    <div class="card-header h1">Szybki Kontakt</div>
                    <div class="card-body">
                        <p id="contactError"></p>
                        <form class="form-group w-100">
                            <label for="name">Imie</label>
                            <input type="text" name="name" id="name" class="form-control" />
                            <label for="subject">Temat</label>
                            <input type="text" name="subject" id="subject" class="form-control" />
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" class="form-control" />
                            <label for="message">Wiadomość</label>
                            <textarea name="msg" id="msg" class="form-control" rows="5"></textarea>
                            <button type="button" id="submitMsg" class="btn btn-outline-primary mt-2">Wyslij</button>
                        </form>
                    </div>   
                </div>`
    }

    handleContactForm() {
        $('#submitMsg').bind('click', ()=> {
            let name = $('#emailForm input#name').val()
            let email = $('#emailForm input#email').val()
            let subject = $('#emailForm input#subject').val()
            let msg = $('#emailForm textarea#msg').val()
            $.ajax({
                url: 'php/contactForm/contactForm.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    msg: msg
                },
                success:result=> {
                    if (result['message'] = 'ok') {
                        $('#contactError').html(`Message sent`).css('color', 'green');
                    } else {
                        $('#contactError').html(`Error sending message`).css('color', 'red');
                    }
                }
            })
        })
    }
}