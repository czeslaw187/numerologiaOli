export class Karta {
    constructor(randomNumber=0) {
        this.randomNumber = randomNumber
    }

    displayKarta(picArr) {

        let number = Math.floor(Math.random() * (5 - 0))
        this.randomNumber = picArr[number]
        return `<div class="card mx-2 w-75">
                    <div class="card-header"><h2 class="w-100">Kart Dnia</h2></div>                        
                    <div class="card-body text-center">
                        <h3 class="text-center">Nazwa karty</h3>
                        <a href="#" id="randomCard"><img class="mx-auto" style="width: 90%; height: 50%" src=${picArr[number]} alt="${picArr[number]}" /></a>
                    </div>
                </div>`                
    }

    displayFbAndYou() {

        return `<div class="card w-75 mt-5">
                    <div class="card-header text-center"><h2 class="w-100">FACEBOOK</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>
                <div class="card w-75 mt-5">
                    <div class="card-header text-center"><h2 class="w-100">YOUTUBE</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>`
    }
}