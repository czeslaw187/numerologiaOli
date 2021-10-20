export class AboutMe {    
    constructor(randomNumber={}) {
        this.randomNumber = randomNumber
    }

    displayAboutMe() {

        return `<div class="card mx-2 h-100" id="stronaOmnie">
                    <div class="card-body p-0 p-md-2">
                        <div class="row fadein">
                            <div class="col-sm-12 col-4">
                                <img src="images/ola3.jpg" class="w-100 mr-3" />
                            </div>
                            <div class="col-sm-12 col-8">
                                <h4 class="card-title mb-4">Kim jestem?</h4>
                                <p class="card-text m-auto">
                                Człowiekiem, który pławi się w szczęściu i radości, który jest wdzięczny za każde doświadczenie                  
                                w swym życiu, nie ograniczającym się przez dobro i zło, a wierząc że wszystko jest doświadczaniem, 
                                nauką i rozwojem. Nie szukam prawdy na zewnątrz w innych ludziach, kieruje się intuicją, swoim własnym sercem.  
                                </p>
                                <h4 class="card-title my-4">Coś więcej?</h4>
                                <p class="card-text m-auto">
                                Jestem Mgr Psychopedagogiki, posiadam też specjalność z autyzmu i Aspergera, 
                                zajmuje się numerologią, terapią, rozwojem duchowym i wszystkim co pozwala człowiekowi podążać do prawdy ukrytej w nim samym.
                                Fascynuje mnie też praca z kryształami, kamieniami, kartami tarota, anielskimi, wróżek. 
                                Moja praca jest największą moją pasją, drogą ku samodoskonaleniu. 
                                </p>
                                <h4 class="card-title my-4">Co daje numerologia?</h4>
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
                    <div class="card-header"><h3 class="w-100">Karta Dnia</h3></div>                        
                    <div class="card-body text-center">
                        <a href='#stronaOmnie' id="randomCard" style="background-color: rgb(21, 27, 141, 0); border: none"><img src="images/przeslanie.jpg" class="w-75" /></a>
                    </div>
                </div>`                
    }

    displayFbAndYou() {

        return `<div class="card w-75 mt-5 mx-auto">
                    <div class="card-header text-center"><h3 class="w-100">FACEBOOK</h3></div>
                    <div class="card-body text-center w-100 px-0 pb-0 h-auto">
                   
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNumerologia-klucz-do-%25C5%259Bwiadomego-%25C5%25BCycia-102955935259397&tabs=false&width=260&height=280&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="258" height="auto" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div class="card w-75 my-5 mx-auto">
                    <div class="card-header text-center"><h3 class="w-100">YOUTUBE</h3></div>
                    <div class="card-body d-flex justify-content-center">
                        <a href="https://www.youtube.com/channel/UCxoaxZutoZpVjZvPq71s79g?view_as=subscriber?sub_confirmation=1" class="sizeHvr">
                            <img src="./images/YouTube-subscribe-button.png" class="w-100" />
                        </a>
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

