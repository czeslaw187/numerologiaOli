/*

export class Posty {
    constructor(article=[]) {
        this.article = article
    }
    
    displayPosty() {

        $.ajax({
            url: './php/getNumber.php',
            type: 'POST',
            dataType: 'json',
            data: {id: 'posty2'},
            success: result=> {   
                this.article = result                        
            }
        })
        
        return `<div class="row d-flex flex-row w-75 p-5 m-auto" id="postyNext">
                    <div class="col-12 p-0 text-center m-0">
                        <button class="btn p-0"><img src="images/posty/rozwój duchowy.jpg" class="rounded m-0 mx-md-5 mt-md-5" id="rozwojZak"/><h3 class="mb-5">ROZWÓJ DUCHOWY</h3></button>
                        <button class="btn p-0"><img src="images/posty/kamienie i kryształy.jpg" class="rounded m-0 mx-md-5 mt-md-5" id="kamienieZak"/><h3 class="mb-5">KAMIENIE I KRYSZTAŁY</h3></button>
                        <button class="btn p-0"><img src="images/posty/zdrowie.jpg" class="rounded m-0 mx-md-5 mt-md-5" id="zdrowieZak"/><h3 class="mb-5">ZDROWIE</h3></button>                          
                    </div>                    
                </div>`
    }

    postyHandler(theArr) {   

        $('#col-2').hide()
        $('#mainContent, .carousel-item .active').css({'width': '100vw'})
        $('#postyNext img').bind('click', (e)=> {    
                    $('#col-2').show()
                    $('#mainContent, .carousel-item .active').css({'width': ''})
                    let listBtn = []      
                    let obj = {}       
                    for (let i in theArr) {
                        if (i == e.target.id) {
                            obj = theArr[i]['text']
                        }
                    }
                    console.log(obj)
                    obj.forEach(art=> {
                        listBtn += `<a href="#mainContent" class="list-group-item list-group-item" id="${art['name']}"><span class="fa fa-caret-right"><i></i></span>${art['name']}</a>`
                    })
                    $('#mainContent .active').html(`<div class="card h-100 mx-2" id="postyNextArt">
                                                        <a class="btn pl-1" id="bckBtn"><i class="fa fa-arrow-left mr-1"></i>wstecz</a>
                                                        <div class="card-body">
                                                            <h2 class="h2 text-center">${obj[0]['name']}</h2>
                                                            
                                                            ${obj[0]['content']}
                                                        </div> 
                                                   </div>`)
                    
                    $(`<img src="images/posty/kamienie/${obj[0]['name']}.jpg" class="mx-auto w-50"/>`).insertAfter('#postyNextArt span:eq(4)')
                    this.handleBckBtn(this.article)                               

                    $('#pageSection').html(`<div class="card w-75 mx-auto" id="postySection">
                                        <div class="card-header"><h3>Spis postów</h3></div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush" id="btnList">
                                                ${listBtn}
                                            </ul>
                                        </div>
                                    </div>`)     
                    
                    this.handleSectionPosty(obj)                               
        })

    }

    handleSectionPosty(obj) {

       $('#btnList a').bind('click', (e)=> {
           let article = obj.filter(i=> i['name'] == e.target.id)
           $('#mainContent .active').html(`<div class="card h-100 mx-2">
                                        <a class="btn pl-1" id="bckBtn"><i class="fa fa-arrow-left mr-2"></i>wstecz</a>
                                        <div class="card-body">                                            
                                            <h2 class="h2 text-center">${article[0]['name']}</h2>
                                            ${article[0]['content']}
                                        </div>  
                                   </div>`)
            this.handleBckBtn(this.article)
       })       
    }

    handleBckBtn(theArr) {

        $('#bckBtn').on('click', ()=> {
            $('#mainContent .active').html(this.displayPosty())
            $('#pageSection').html('')
            this.postyHandler(theArr)
        })
    }
}
                */