export class SectionOpinions {

    displaySectionOpinions () {
        $.ajax({
            url: './php/opinions/opinion.php',
            method: 'get',
            dataType: 'json',
            success: result=> {
                result.forEach(row=> {
                    $('#opinionsContainer').append(`<div class="my-3" style="width: 100%;" id="useropinion${row['id']}">
                                                        <p class="py-0 my-0">${row['name']}</p>
                                                        <p class="py-0 my-0" style="font-size: 0.8rem"><em>${row['opinion']}</em></p>
                                                    </div>`)
                })
            }
        })
                
        return `<div class="card mt-5 mt-md-0 w-75 mr-auto ml-0 noBar" style="height: 30rem; overflow: auto;">
                    <div class="card-header"><h1>Zostaw Opinię</h1></div>
                    <div class="card-body p-1" id="opinionsContainer">
                                                
                    </div>
                    <form class="form-group contactForm">
                        <label for="opinionName">Imię</label>
                        <input type="text" name="opinionName" id="opinionName" class="form-control" required />
                        <label for="yourOpinion">Twoja Opinia</label>
                        <textarea name="yourOpinion" id="yourOpinion" class="form-control" columns="10" rows="7" placeholder="Enter your message..." required></textarea>
                        <button role="button" class="btn btn-secondary mt-2" id="submitOpinion">Wyślij</button>
                    </form>
                </div>`
    }

    insertOpinion(name, opinion) {
        console.log(name, opinion)
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
                    $('#opinionsContainer').append(`<div class="my-3" style="width: 100%;">
                                                        <p class="py-0 my-0">${name}</p>
                                                        <p class="py-0 my-0" style="font-size: 0.8rem"><em>${opinion}</em></p>
                                                    </div>`)
                } else {
                    alert(result['message'])
                }
            }
        })
    }
}