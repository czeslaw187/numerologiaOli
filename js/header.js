export class Header {

    displayHeader() {
        return `<nav class='navbar navbar-expand-lg' style='height: 70px;>
                    <div class='container-fluid mb-auto'>                        
                        <button class='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#menuList'>
                            <span><i class='fa fa-bars fa-2x mr-4'></i></span> 
                        </button>
                    </div>
                    <div class='collapse navbar-collapse mb-0' id='menuList'>
                        <ul class='navbar-nav my-2 mr-auto'>
                            <li class='nav-item mx-3'><button role="button" id="about" href='#' class='btn nav-link' data-toggle='collapse' data-target='.navbar-collapse.show'>O Mnie</button></li>
                            <li class='nav-item mx-3'><button role="button" id="numerologia" href='#' class='btn nav-link' data-toggle='collapse' data-target='.navbar-collapse.show'>Numerologia</button></li>
                            <li class='nav-item mx-3'><button role="button" id="services" href='#' class='btn nav-link' data-toggle='collapse' data-target='.navbar-collapse.show'>Usługi</button></li>
                            <li class='nav-item mx-3'><button role="button" id="contact" href='#' class='btn nav-link' data-toggle='collapse' data-target='.navbar-collapse.show'>Kontakt</button></li>
                        </ul>
                    </div>
                </nav>`
    }
}


