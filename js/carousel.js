export class Carousel {
        
    displayCarousel(content) {
        let array = []
        
        array = `<div class="carousel-item active">${content[0]}</div>`

        for (let i = 1; i < content.length; i++) {
            array += `<div class="carousel-item w-100">
                          ${content[i]}
                      </div>`                      
        }

        return `<div id="pageCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                    <div class="carousel-inner">
                        ${array}
                    </div>
                    <a class="carousel-control-prev" href="#pageCarousel" role="button" data-slide="prev" id="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#pageCarousel" role="button" data-slide="next" id="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>`
    }

    displaySlideshow(content) {
        let imgArray = []
        
        imgArray = `<div class="carousel-item pr-3 active">
                        <img src="${content[0]}" alt="" class="w-50" style="width: 20vw; height: 20vh">
                    </div>`

        for (let i = 1; i < content.length; i++) {
            imgArray += `<div class="carousel-item pr-3">
                          <img src="${content[i]}" alt="" class="w-50" style="width: 20vw; height: 20vh">
                      </div>`                      
        }

        return `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-bs-wrap="true">
                    <div class="carousel-inner text-center">
                        ${imgArray}
                    </div>
                </div>`
    }
}