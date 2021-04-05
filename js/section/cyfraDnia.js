export class Cyfra {

    displayCyfra() {
        let random = Math.floor(Math.random() * (10 -0) + 0)
        return `<div class="card w-75">
                    <div class="card-header">Cyfra dnia</div>
                    <div class="card-body">
                        <h1 class="h1 text-center">${random}</h1>
                    </div>
                </div>`
    }
}