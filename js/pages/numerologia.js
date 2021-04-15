export class Numerologia {
    constructor(postArr = []) {
        this.postArr = postArr
    }
    
    displayPostyNumerologia() {
        
        $.ajax({
            url: 'php/getNumber.php',
            type: 'post',
            dataType: 'json',
            data: {id: 'post'},
            success: result=> {
                $('#numerologiaBody .card-body').append(`${result['text'][0]['content']}`)
                this.postArr = result
            }
        })
        return `<div class="card mx-2" id="numerologiaBody">
                    <div class="card-header">
                        <h1>Posty</h1>
                    </div>
                    <div class="card-body">
                    
                    </div>
                </div>`
    }

    displaySectionNumerologia(theArr) {
        let listOfPosts = []
        theArr['text'].forEach(post=> {
            listOfPosts += `<a href='#' id="${post['name']}" class="list-group-item list-group-item-action">${post['name']}</a>`
        })
        return `<div class="card w-75 mx-auto mt-5" id="sectionPostyNumerologia">
                    <div class="card-header"><h1>Najciekawsze Posty</h1></div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${listOfPosts}
                        </ul>
                    </div>
                </div>`
    }

    numerologiaHandler(theArr) {
        $('#sectionPostyNumerologia ul a').bind('click', (e)=> {
            let article = theArr['text'].filter(i=> i['name'] == e.target.id)
            console.log(article[0])
            $('#numerologiaBody .card-body').html(article[0]['content'])
            $('#numerologiaBody .card-header h1').html(article[0]['name'])
        })
    }

    displayCyfra() {        
        
        return `<div class="card w-75 mx-auto" id="obliczDrogeZycia">
                    <div class="card-header"><h1>Oblicz Drogę Życia</h1></div>
                    <div class="card-body text-center">
                        <form id="formDrogi text-center">
                            <label for="day">Wpisz Date Urodzenia</label>
                            <p class="text-center">dd-mm-yyyy</p>
                            <p id="dateError" class="text-danger"></p>
                            <input type="text" id="day" name="day" class="form-control w-75 text-center mx-auto" maxlength="10" required/>
                            <button role="submit" id="obliczDroge" class="btn btn-outline-primary mt-3">Oblicz</button>                             
                        </form>
                    </div>
                </div>`
    }

    cyfraHandler() {

        $('#obliczDrogeZycia input#day').mask('99-99-9999')

        $('#obliczDroge').bind('click', (e)=>{
            e.preventDefault()
            $('#dateError').html('')
            let day = $('#day').val();
            let regexp = new RegExp("[0-9]{2}-[0-9]{2}-[0-9]{4}")
            if (regexp.test(day)) {
                day = day.split('-').join('')
                day = day.toString().split('')
                let total1 = 0

                day.forEach(i=> {
                    total1 += parseInt(i)
                })
                total1 = total1.toString().split('')
                let cyfra = 0
                
                total1.forEach(i=> {
                    cyfra += parseInt(i)
                })       

                $('#numerologiaBody').html(`<div class="card-header"><h1>${cyfra}</h1></div>  
                                            <div class="card-body" id="numerBody"></div>`)

                $.ajax({
                url: './php/getNumber.php',
                type: 'post',
                data: {cyfra: cyfra},
                dataType: 'json',
                success: result=> {
                    console.log(result)
                    $('#numerBody').append(`${result['text']}`)
                }
                })
            } else {
                $('#dateError').html(`Zły format`)
            }            

        })
    }
}

                