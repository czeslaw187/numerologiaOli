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
        
        return `<div class="row d-flex flex-row w-100 pl-3 mt-5 ml-auto" id="postyNext">
                    <div class="col-12 col-md-6 p-5 text-center">
                        <button class="btn border-dark rounded" id="zdrowie"></button>
                        <h3 class="mb-5">ZDROWIE</h3>
                    </div>
                    <div class="col-12 col-md-6 p-5 text-center">
                        <button class="btn border-dark rounded" id="kamienie"></button>
                        <h3 class="mb-5">KAMIENIE I KRYSZTAŁY</h3>
                    </div>
                    <div class="col-12 col-md-6 p-5 text-center">
                        <button class="btn border-dark rounded" id="rozwoj"></button>
                        <h3 class="mb-5">ROZWÓJ DUCHOWY</h3>
                    </div>
                    <div class="col-12 col-md-6 p-5 text-center">
                        <button class="btn border-dark rounded" id="anioly"></button>
                        <h3 class="mb-5">ANIOŁY I KARTY</h3>
                    </div>
                </div>`
    }

    postyHandler(theArr) {        
        $('#col-2').hide()
        $('#mainContent, .carousel-item .active').css({'width': '100vw'})
        $('#postyNext button').bind('click', (e)=> {    
                    $('#col-2').show()
                    $('#mainContent, .carousel-item .active').css({'width': ''})
                    let listBtn = []      
                    let obj = {}            
                    for (let i in theArr) {
                        if (i == e.target.id) {
                            obj = theArr[i]['text']
                        }
                    }
                    obj.forEach(art=> {
                        listBtn += `<a class="list-group-item list-group-item-action" id="${art['name']}">${art['name']}</a>`
                    })
                    console.log(obj[0]['content'])
                    $('#mainContent .active').html(`<div class="card h-100 mx-2">
                                                        <a class="btn pl-1" id="bckBtn"><i class="fa fa-caret-left ml-1"></i>wstecz</a>
                                                        <div class="card-body">
                                                            <h2 class="h2 text-center">${obj[0]['name']}</h2>
                                                            ${obj[0]['content']}
                                                        </div> 
                                                   </div>`)
                    this.handleBckBtn(this.article)                               

                    $('#pageSection').html(`<div class="card w-75 mx-auto" id="postySection">
                                        <div class="card-header">Spis postów</div>
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
                                        <a class="btn pl-1" id="bckBtn"><i class="fa fa-caret-left ml-1"></i>wstecz</a>
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
                