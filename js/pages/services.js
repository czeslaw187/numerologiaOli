import { CardDetails } from '../worldpay/cardDetails.js'

export class ServicesUs extends CardDetails {
    
    displayServices() {
        return `<div class="card mx-2" id="usluga" style="border: 1px solid black !important; border-radius: 20px 20px 0 0;">
                    <div class="card-header">
                        <h1>USŁUGI</h1>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush" id="buyOptions"> 

                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Portret numerologiczny</h4>                            
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>260</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails1.php" class="btn btn-success" id="transaction1">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Opis Twojego własnego scenariusza życia, drogi życia, klucza wcielenia )</p>
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaTarot" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaTarot">
                                    Portret numerologiczny to pełen opis danej osoby, opisu tego dokonuje poprzez datę urodzenia oraz imiona i nazwiska, 
                                    które dana osoba posiada. Daje on nam analizę osobowości, pełen opis cech, charakteru, to co wnosi w życie dzień urodzenia. 
                                    Rozpisuje też diament życia, który mówi o energii w jakiej będziemy w danych momentach życia, 
                                    co zaplanowaliśmy sobie na to wcielenie, z czym przyjdzie się nam zmierzyć, 
                                    czyli jakie wyzwania sobie wybraliśmy schodząc do tej reinkarnacji. Dowiesz się też nad czym powinieneś pracować, 
                                    co jest Twoją mocną stroną, jaki jest cel Twojego życia, jaki wpływ na Twoje życie mają relacje z rodzicami. 
                                    Przede wszystkim dowiesz się, że wszystko to zostało zapisane a Twoim zadaniem jest to świadomie realizować, 
                                    świadomość pozwala na lepsze spojrzenie na swoje życie i siebie. Portret wysyłam w formie pisemnej na maila. 
                                    Jest szansa rozmowy telefonicznej po wcześniejszym uzgodnieniu.  Masz pytania? Pisz.  
                                    </div>
                                </div>
                            </li>
                            
                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Rozmowa terapeutyczno – numerologiczna</h4>                           
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>150</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails2.php" class="btn btn-success" id="transaction2">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Rozmowa terapeutyczna wykorzystująca wiedzę numerologiczną)</p>  
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaTerapeutyczna" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaTerapeutyczna">
                                    Czujesz, że Twoje życie nie jest takie jak byś chciał, masz pewne obawy życiowe, problemy, 
                                    chcesz zrozumieć siebie, swoje doświadczenia w życiu które Cie spotykają, poznać przyczynę wydarzeń w swoim życiu. 
                                    Rozmowa będzie ukierunkowana na potrzeby osoby zamawiającej, na podstawie jej scenariusza zapisanego w jego dacie,  
                                    imionach i nazwiskach jakie posiada. Czas rozmowy 6o minut. Rozmowa telefoniczna.   
                                    </div>
                                </div>
                            </li>
                            
                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Dobór imienia dla dziecka nowo narodzonego, dobór imienia do bierzmowania</h4>                           
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>160</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails3.php" class="btn btn-success" id="transaction3">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Energetyka imienia może wiele zmienić, warto dobrać je tak aby było ono korzystne)</p>
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaPara" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaPara">
                                    Świadome dobranie dziecku odpowiedniego imienia może go odpowiednio wzmocnić, 	
                                    dać mu pełen wachlarz możliwości w życiu, realizowaniu siebie. Dobieramy imię do daty urodzenia i nazwiska, 
                                    tak aby tworzyło z nimi całość zgodną z założeniami duszy. 
                                    Imię  i jego energia bardzo dużo wnoszą w życie danej osoby, więc warto zrobić to starannie i ze świadomością. 
                                    </div>
                                </div>
                            </li>
                            
                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Numerologia Partnerska</h4>                           
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>200</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails4.php" class="btn btn-success" id="transaction4">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Opis połączenia energetyki dwóch osób, partnerów )</p>
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaPrzeslanie" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaPrzeslanie">
                                    Opis taki zawiera informacje o dopasowaniu dwóch  energii, czy jest ona korzystna, 
                                    czy będzie wymagać więcej pracy nad związkiem i kompromisów. Na co zwrócić uwagę w związku, oraz opis tych energii.  
                                    Pozwoli to lepiej zrozumieć swoją drugą połówkę oraz spojrzeć na sprawę oczami tej drugiej osoby.  
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Przesłanie od Wróżek</h4>                           
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>95</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails5.php" class="btn btn-success" id="transaction5">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Rokad trzech kart podpowiedzi + karta anielska )</p>
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaDobor" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaDobor">
                                    Przesłania od Wróżek pozwolą Ci na zwrócenie uwagi na istotne kwestie w konkretnym przedziale czasu, 
                                    dadzą podpowiedzi abyś mógł lepiej i świadomie wykorzystać swoje szanse i okazję. 
                                    Czasem bardzo prosta podpowiedz otwiera oczy na pewne sprawy, uświadamia nam ukryte problemy, 
                                    które my wypieramy oraz jest wsparciem od Wróżek, które dobrze wiedza co Ci doradzić i co dla Ciebie 
                                    na ten moment jest najważniejsze. Czasem nad czymś myślimy, zastanawiamy  się  i taka podpowiedz od kart daje nam pewność, 
                                    impuls, że nasza intuicja nas nie myli.   
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item"><span class="fa fa-caret-right fa-2x"></span>
                                <div class="row py-2">                                               
                                    <div class="col-8">
                                        <h4>Dobór kryształu, kamienia do problemu</h4>                           
                                    </div>
                                    <div class="col-4 d-flex flex-column flex-md-row justify-content-start justify-content-md-end align-items-start">
                                        <p class="price"><span>65</span>zł</p>
                                        <button role="button" href="php/worldpay/worldpayCreditDetails6.php" class="btn btn-success" id="transaction6">Zamów</button>
                                    </div>                                   
                                </div>
                                <p class="m-0">( Napisz mi o swoim problemie, a ja podam Ci który z kryształów, kamieni wzmocni Cię )</p>
                                <div class="row">                                    
                                    <a type="button" data-toggle="collapse" data-target="#ofertaKam" class="ml-auto mr-5">więcej...</a> 
                                    <div class="collapse" id="ofertaKam">
                                    Każdy kryształ, kamień ma swoją unikalną i niepowtarzalną moc, dzięki  ich energii możemy wzmocnić siebie, 
                                    te obszary które wywołują u nas problemy np. problemy finansowe, problemy z wyrażaniem siebie, wzmocnienie duchowe, 
                                    oczyszczanie. Kryształ, kamień nie zmieni tego w jeden dzień, oraz nie zrobi nic za Ciebie, ale będzie Cie wspierał energetycznie, 
                                    wzmacniał tam gdzie czujesz się słaby, w obszarze problematycznym Twojego życia.    
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>`
    }

    servicesHandler() {
        $('#buyOptions button').on('click', (e)=> {
            let cena = $('#buyOptions').find(e.target).parent().find('span').html()
            this.cardDetailsForm(e.target.id, cena)
            this.servicesBck()
        })        
    }

    servicesBck() { 
        $('#paymentForm #uslugaBck').on('click', ()=>{
            $('#mainContent .active').html(this.displayServices())
            this.servicesHandler()
        })
    }

    displaySectionOpinions() {
        $.ajax({
            url: './php/opinions/opinion.php',
            method: 'get',
            dataType: 'json',
            success: result=> {
                result.forEach(row=> {
                    $('#opinionsContainer').append(`<div class="my-3" style="width: 100%;" id="useropinion${row['id']}">
                                                        <p class="py-0 my-0 mx-5 mx-md-3">${row['name']}</p>
                                                        <p class="py-0 my-0 mx-5 mx-md-3" style="font-size: 0.8rem"><em>${row['opinion']}</em></p>
                                                    </div>`)
                })
            }
        })
                
        return `<div class="card mt-5 mt-md-0 w-100 mx-auto noBar" style="height: 30rem; overflow: auto;">
                    <div class="card-header"><h1>Zostaw Opinię</h1></div>
                    <span id="opinionErr"></span>
                    <div class="card-body p-1" id="opinionsContainer">
                                                
                    </div>
                    <form class="form-group contactForm mx-3">
                        <label for="opinionName">Imię</label>
                        <input type="text" name="opinionName" id="opinionName" class="form-control" required />
                        <label for="yourOpinion">Twoja Opinia</label>
                        <textarea name="yourOpinion" id="yourOpinion" class="form-control" columns="10" rows="7" placeholder="Enter your message..." required></textarea>
                        <button role="button" class="btn btn-secondary mt-2" id="submitOpinion">Wyślij</button>
                    </form>
                </div>`
    }

    insertOpinionhandler() {
        $('#submitOpinion').on('click', (e)=> {
            e.preventDefault()
            let name = $('#opinionName').val()
            let opinion = $('#yourOpinion').val()
            $.ajax({
                url: './php/opinions/insertOpinion.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    opinion: opinion
                },
                success: result=> {
                    if (result['message'] == 'ok') {
                        $('#opinionsContainer').append(`<div class="my-3" style="width: 100%;"  id="useropinion${result['lastId']}">
                                                            <p class="py-0 my-0">${name}</p>
                                                            <p class="py-0 my-0" style="font-size: 0.8rem"><em>${opinion}</em></p>
                                                        </div>`)
                    } else {
                        alert(result['message'])
                    }
                }
            })
        })
        
    }
}

                