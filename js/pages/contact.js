export class ContactUs {
    
    displayContactUs() {
        
        return `<div class="card mx-auto ml-md-5 w-00" id="contactPage">
                    <div class="card-body w-100 p-0 text-left">
                        <h4>Aleksandra Wojciechowska</h4>
                        <h4 class="mt-5">Mail: numerologia.aleksandra@gmail.com</h4>                     
                    </div>
                </div>
                <div class="container-fluid px-0 text-center mt-5">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNumerologia-klucz-do-%25C5%259Bwiadomego-%25C5%25BCycia-102955935259397&tabs=false&width=260&height=280&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="auto" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>`
    }

    displaySectionContact () {

        return `<div class="card h-100 w-100 mx-auto contactForm" id="emailForm">                     
                    <div class="card-header"><h3>Szybki Kontakt</h3></div>
                    <div class="card-body">
                        <p id="contactError"></p>
                        <form class="form-group w-100">
                            <label for="name">Imie</label>
                            <input type="text" name="name" id="name" class="form-control">
                            <label for="subject">Temat</label>
                            <input type="text" name="subject" id="subject" class="form-control" />
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" class="form-control"/>
                            <label for="message">Wiadomość</label>
                            <textarea name="msg" id="msg" class="form-control" rows="5"></textarea>
                            <button type="button" id="submitMsg" class="btn btn-primary mt-2 pull-right">Wyslij</button>
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
            $('#contactError').html(``)
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
                    if (result['message'] == 'ok') {
                        $('#contactError').html(`Wiadomość wysłana`).css('color', 'green');
                        $('#emailForm input#name').val('')
                        $('#emailForm input#email').val('')
                        $('#emailForm input#subject').val('')
                        $('#emailForm textarea#msg').val('')
                    } else if (result['message'] == 'error') {
                        $('#contactError').html(`Error sending message`).css('color', 'red');
                    } else {
                        $('#contactError').html(result['message']).css('color', 'red')
                    }
                }
            })
        })
    }
}
                