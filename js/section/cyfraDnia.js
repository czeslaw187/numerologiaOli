export class Cyfra {

    displayCyfra() {        
        
        return `<div class="card w-75" id="obliczDrogeZycia">
                    <div class="card-header">Oblicz Drogę Życia</div>
                    <div class="card-body text-center">
                        <form id="formDrogi text-center">
                            <label for="day">Wpisz Date Urodzenia</label>
                            <p class="text-center">dd-mm-yyyy</p>
                            <p id="dateError" class="text-danger"></p>
                            <input type="text" id="day" name="day" class="form-control w-75 text-center mx-auto" min="01-01-1900" pattern= required/>
                            <button role="submit" id="obliczDroge" class="btn btn-outline-primary mt-3">Oblicz</button>                             
                        </form>
                    </div>
                </div>`
    }

    cyfraHandler() {
        $('#obliczDrogeZycia input#day').on('keyup', (e)=> {
            if (e.target.value.length == 2 || e.target.value.length == 5) {
                e.target.value += `-`
            }
        })

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

                $('#stronaNumerologia').html(`<div class="card-header"><h1>${cyfra}</h1></div>  
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