// class import
import { Header } from './header.js' // navigation bar
import { Carousel } from './carousel.js' // render pages in a carousel

import { AboutMe } from './pages/aboutMe.js'
import { ServicesUs } from './pages/services.js'
import { ContactUs } from './pages/contact.js'
import { Numerologia } from './pages/numerologia.js'
import { Posty } from './pages/posty.js'


// declaring headerNav instance
const head = new Header('Numerologia')

// declare carousel instance
const carousel = new Carousel() 

// declaring pages instances
const aboutMe = new AboutMe()
const services = new ServicesUs()
const contact = new ContactUs()
const numerologia = new Numerologia()
const posty = new Posty()

let contentArray = [
    aboutMe.displayAboutMe(),
    numerologia.displayPostyNumerologia(), 
    posty.displayPosty(),
    services.displayServices(),
    contact.displayContactUs(),
] 

// handle navigation events on-slide
export const highlightNav = () => {
    $('#pageCarousel').on('slid.bs.carousel', ()=> {
        if ($('.carousel-item').hasClass('active')) {
            let navIndex = $('#pageCarousel .active').index()
            $('#menuList li button').removeClass('active-page')
            $('#menuList li button').eq(navIndex).addClass('active-page')
            let pageTitle = $('#menuList li button').eq(navIndex).html()
            $('title').html(`Numerologia - ${pageTitle}`) // dynamic page title     
            // render section content on slide
            if (pageTitle == `O Mnie`) {
                $('#mainContent .active').html(aboutMe.displayAboutMe())
                $('#pageSection').html(aboutMe.displayKarta()).append(aboutMe.displayFbAndYou())
                // handle subpage of about me 
                $('#randomCard').on('click', ()=> {
                    let image = aboutMe.randomNumber
                    $('#stronaOmnie').html(aboutMe.displayStronaKarta(image['path'][0], image['text']))
                })
            } else if (pageTitle == 'Numerologia') {   
                $('#mainContent .active').html(numerologia.displayPostyNumerologia())         
                $('#pageSection').html(numerologia.displayCyfra()).append(numerologia.displaySectionNumerologia(numerologia.postArr))
                numerologia.numerologiaHandler(numerologia.postArr)  
                numerologia.cyfraHandler()         
            } else if (pageTitle == 'Posty') {
                $('#mainContent .active').html(posty.displayPosty())
                $('#pageSection').html('')
                posty.postyHandler(posty.article)          
            } else if (pageTitle == 'Usługi') {
                $('#pageSection').html(services.displaySectionOpinions())
                services.insertOpinionhandler()
            } else if (pageTitle == 'Kontakt') {
                $('#pageSection').html(contact.displaySectionContact()).append(aboutMe.displayFbAndYou())
                contact.handleContactForm()
            }
        }
    })
}

// render top section content
$('#topSection').html(`<div class="container-fluid text-left" id="topSectionTitle">
                            <h2 class="mt-4">Rozwoj Duchowy</h2>
                            <h2 class="mt-4">Numerologia</h2> 
                            <h2 class="mt-4">Ezoteryka</h2> 
                            <h2 class="mt-4">Tarot</h2>                            
                       </div>`)
$('#navContent').html(head.displayHeader()) // render navbar
$('#mainContent').html(carousel.displayCarousel(contentArray)) // render main content
$('#about').addClass('active-page') // set active-page on page load
$('#pageSection').html(aboutMe.displayKarta()).append(aboutMe.displayFbAndYou()) // set section content on page load
$('title').html(`Numerologia - Glowna`) // set page title to 'Home'

highlightNav() // invoke add active-page class

// call main page section handler on page load
$('#randomCard').on('click', ()=> {
    let image = aboutMe.randomNumber
    $('#stronaOmnie').html(aboutMe.displayStronaKarta(image['path'][0], image['text']))
})

// navigation buttons logics
$('#menuList li button').on('click', (e)=> {    
    $('#menuList li button').removeClass('active-page');
    $(e.target).addClass('active-page')
    switch(e.target.innerHTML) { 
        case 'O Mnie':            
            $('#pageCarousel').carousel(0)       
            break;
        case 'Numerologia':
            $('#pageCarousel').carousel(1)  
            break;
        case 'Posty':
            $('#pageCarousel').carousel(2)
            break;    
        case 'Usługi':
            $('#pageCarousel').carousel(3)
            break;
        case 'Kontakt':
            $('#pageCarousel').carousel(4)
            break;
        default:
            return;
    }        
})





