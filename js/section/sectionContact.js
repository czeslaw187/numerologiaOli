export class SectionContact {

    displaySectionContact () {

        return `<div class="card w-75 mr-auto ml-0 p-2 contactForm">                     
                    <div class="card-header h1">Szybki Kontakt</div>
                    <div class="card-body">
                        <form class="form-group w-100">
                            <label for="name">Imie</label>
                            <input type="text" name="name" id="name" class="form-control" />
                            <label for="subject">Temat</label>
                            <input type="text" name="subject" id="subject" class="form-control" />
                            <label for="message">Wiadomość</label>
                            <textarea name="message" id="message" class="form-control" rows="5"></textarea>
                            <button type="button" id="submitMsg" class="btn btn-outline-primary mt-2">Wyslij</button>
                        </form>
                    </div>   
                </div>`
    }
}