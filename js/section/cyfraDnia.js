export class Cyfra {

    displayCyfra() {        
        
        return `<div class="card w-75" id="obliczDrogeZycia">
                    <div class="card-header">Oblicz Drogę Życia</div>
                    <div class="card-body text-center">
                        <form id="formDrogi">
                            <label for="day">Wpisz Date Urodzenia</label>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input type="number" id="day" name="day" class="form-control" min="01" max="31" placeholder="dd" required/>
                                </div>
                                <div class="col">
                                    <input type="number" id="month" name="month" class="form-control" min="1" max="12" placeholder="mm" required/>
                                </div>
                                <div class="col">
                                    <input type="number" id="year" name="year" class="form-control" min="1900" placeholder="yyyy" required/>
                                </div>                                
                            </div>
                            <button role="submit" id="obliczDroge" class="btn btn-outline-primary">Oblicz</button>                             
                        </form>
                    </div>
                </div>`
    }

    cyfraHandler() {

        $('#obliczDroge').bind('click', (e)=>{
            e.preventDefault()
            let day = $('#day').val();
            let month = $('#month').val();
            let year = $('#year').val();   
            let suma = 0
            day = day.split('')
            month = month.split('')
            year = year.split('')
            let cyfra = []
            day.forEach(i=> {
                cyfra.push(i)
            })
            month.forEach(i=> {
                cyfra.push(i)
            })
            year.forEach(i=> {
                cyfra.push(i)
            })
            cyfra.forEach(i=> {
                suma += parseInt(i)
            })
            suma = suma.toString()
            suma = suma.split('')
            cyfra = 0
            suma.forEach(i=> {
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

        })
    }        
}    