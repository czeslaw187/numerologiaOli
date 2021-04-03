export class Header {
    constructor(logo) {
        this.logo = logo
    }

    displayHeader() {
        return `<nav class='navbar navbar-expand-lg' style='height: 70px;>
                    <div class='container-fluid mb-auto'>
                        <a href='#' class='navbar-brand mb-auto mt-2'>${this.logo}</a>
                        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#menuList'>
                            <span><i class='fa fa-bars'></i></span>
                        </button>
                    </div>
                    <div class='collapse navbar-collapse mb-0' id='menuList'>
                        <ul class='navbar-nav my-2 mx-auto'>
                            <li class='nav-item mx-3'><a id="home" href='#' class='nav-link active-page'>Glowna</a></li>
                            <li class='nav-item mx-3'><a id="about" href='#' class='nav-link'>O Mnie</a></li>
                            <li class='nav-item mx-3'><a id="services" href='#' class='nav-link'>Uslugi</a></li>
                            <li class='nav-item mx-3'><a id="social" href='#' class='nav-link'>Social Media</a></li>
                            <li class='nav-item mx-3'><a id="contact" href='#' class='nav-link'>Kontakt</a></li>
                        </ul>
                    </div>
                </nav>`
    }
}


