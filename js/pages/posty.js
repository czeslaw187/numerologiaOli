export class Posty {
    constructor(postArr = []) {
        this.postArr = postArr
    }
    
    displayPosty() {
        
        $.ajax({
            url: 'php/getNumber.php',
            type: 'post',
            dataType: 'json',
            data: {id: 'post'},
            success: result=> {
                $('#posts ul').append(`<li class="list-group-item">${result['text'][0]['content']}</li><hr>`)
                this.postArr = result
            }
        })
        return `<div class="card mx-2">
                    <div class="card-header">
                        <h1>Posty</h1>
                    </div>
                    <div class="card-body" id="posts">
                        <div class="container-fluid">
                            <ul class="list-group list-group-flush">
                                
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    
    displaySectionPosty(theArr) {
        let listOfPosts = []
        theArr['text'].forEach(post=> {
            listOfPosts += `<a id="${post['name']}" class="list-group-item list-group-item-action">${post['name']}</a>`
        })
        return `<div class="card w-75 mr-auto ml-0" id="sectionPosty">
                    <div class="card-header"><h1>Spis Postów</h1></div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${listOfPosts}
                        </ul>
                    </div>
                </div>`
    }

    setionPostyHandler(theArr) {
        $('#sectionPosty ul a').bind('click', (e)=> {
            let thePost = theArr['text'].filter(i=> i['name'] == e.target.id)
            $('#posts ul').html(thePost[0]['content'])
            console.log(thePost)
        })
    }
}
                