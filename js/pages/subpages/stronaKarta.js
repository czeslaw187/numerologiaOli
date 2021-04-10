export class StronaKarta {

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