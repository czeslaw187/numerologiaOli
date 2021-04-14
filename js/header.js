export class Header {

    displayHeader() {
        return `<nav class='navbar navbar-expand-lg' style='height: 70px;>
                    <div class='container-fluid mb-auto'>                        
                        <button class='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#menuList'>
                            <span><i class='fa fa-bars fa-2x'></i></span>
                        </button>
                    </div>
                    <div class='collapse navbar-collapse mb-0' id='menuList'>
                        <ul class='navbar-nav my-2 mx-auto'>
                            <li class='nav-item mx-3'><button role="button" id="about" href='#' class='btn nav-link'>O Mnie</button></li>
                            <li class='nav-item mx-3'><button role="button" id="numerologia" href='#' class='btn nav-link'>Numerologia</button></li>
                            <li class='nav-item mx-3'><button role="button" id="posty" href='#' class='btn nav-link'>Posty</button></li>
                            <li class='nav-item mx-3'><button role="button" id="services" href='#' class='btn nav-link'>Usługi</button></li>
                            <li class='nav-item mx-3'><button role="button" id="contact" href='#' class='btn nav-link'>Kontakt</button></li>
                        </ul>
                    </div>
                </nav>`
    }
}


