export class AboutMe {    
    constructor(randomNumber={}) {
        this.randomNumber = randomNumber
    }

    displayAboutMe() {
        return `<div class="card mx-2 h-100" id="stronaOmnie">
                    <div class="card-header">
                        <h1>O Mnie</h1>
                    </div>
                    <div class="card-body p-0 p-md-2">
                        <div class="row">
                            <div class="col-4">
                                <img src="images/ola.jpg" class="w-100 mr-3" />
                            </div>
                            <div class="col-8">
                                <h4 class="card-title mb-2">Kim jestem?</h4>
                                <p class="card-text m-auto">
                                Ziemianinem, który pławi się w szczęściu i radości, który jest wdzięczny za każde doświadczenie w swym życiu, 
                                który mierzy się z programami, które blokują, dziękującym za każdą lekcje i dążący do samorealizacji,
                                materializuje marzenia i podążam w stronę prawdy i miłości. 
                                </p>
                                <h4 class="card-title mt-4 mb-2">Coś   więcej?</h4>
                                <p class="card-text m-auto">
                                Jestem Mgr Psychopedagogiki, zajmuje się Numerologią, terapią, rozwojem duchowym i wszystkim co pozwala człowiekowi poznać siebie,
                                żyć w świadomości i uwolnić się od ograniczeń, blokad i lęków. Fascynuje mnie też praca z kryształami, kamieniami, kartami tarota,
                                anielskimi, wróżek. Moja praca jest największą moją pasją, drogą ku samodoskonaleniu. 
                                </p>
                                <h4 class="card-title mt-2 mb-2">Co daje numerologia?</h4>
                                <p class="card-text m-auto">
                                Numerologia to fascynująca nauka o energetyce liczb, każda z nich niesie ze sobą informacje o nas.
                                Dzięki niej możemy dowiedzieć się kim tak naprawdę jesteśmy, jakie mamy cele w tym wcieleniu, 
                                czego nasza dusza chce się nauczyć, jak będzie przebiegać nasze życie (zarys przyszłości), 
                                jakie były nasze wcześniejsze wcielenia, nad czym powinniśmy pracować, czemu wybraliśmy takich rodziców i wiele wiele więcej…
                                </p>
                            </div> 
                        </div>          
                     </div>
                </div>`
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

        return `<div class="card mx-auto mr-md-auto w-75">
                    <div class="card-header"><h1 class="w-100">Karta Dnia</h1></div>                        
                    <div class="card-body text-center">
                        <a href='#stronaOmnie' id="randomCard" style="background-color: rgb(21, 27, 141, 0); border: none"><img src="images/przeslanie.jpg" class="w-75" /></a>
                    </div>
                </div>`                
    }

    displayFbAndYou() {

        return `<div class="card w-75 mt-5 mx-auto">
                    <div class="card-header text-center"><h2 class="w-100">FACEBOOK</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>
                <div class="card w-75 mt-5 mx-auto">
                    <div class="card-header text-center"><h2 class="w-100">YOUTUBE</h2></div>
                    <div class="card-body text-center">

                    </div>
                </div>`
    }

    displayStronaKarta(image, text) {

        return `<div class="card-header" style="height: 4rem;">
                </div>
                <div class="card-body w-100">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <img src="${image}" alt="image" class="w-100 h-100" />  
                            
                        </div>
                        <div class="col-12 col-md-6">
                            ${text}
                        </div>
                    </div>      
                </div>`
    }
}
               