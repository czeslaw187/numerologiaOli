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
        console.log(theArr)
        $('#sectionPostyNumerologia ul a').bind('click', (e)=> {
            let article = theArr['text'].filter(i=> i['name'] == e.target.id)
            console.log(article[0])
            $('#numerologiaBody .card-body').html(article[0]['content'])
            $('#numerologiaBody .card-header h1').html('Posty')
        })
    }

    
}

                