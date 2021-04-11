export class Karta {
    constructor(randomNumber={}) {
        this.randomNumber = randomNumber
    }

    displayKarta() {

        $.ajax({
            url: './php/getCardDetails.php',
            type: 'get',
            dataType: 'json',
            success: result=> {
                result['path'] = JSON.parse(result['path'].replace('..', '.'))
                this.randomNumber = ''
                this.randomNumber = result
            }
        })

        return `<div class="card mr-auto w-75">
                    <div class="card-header"><h2 class="w-100">Karta Dnia</h2></div>                        
                    <div class="card-body text-center">
                        <button id="randomCard" style="background-color: rgb(21, 27, 141, 0); border: none"><img src="images/przeslanie.jpg" class="w-75" /></button>
                    </div>
                </div>`                
    }

    displayFbAndYou() {

        return `<div class="card w-75 mt-5 mr-auto">
                    <div class="card-header text-center"><h2 class="w-100">FACEBOOK</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>
                <div class="card w-75 mt-5 mr-auto">
                    <div class="card-header text-center"><h2 class="w-100">YOUTUBE</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>`
    }
}