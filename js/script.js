// class import
import { Header } from './header.js' // navigation bar
import { Carousel } from './carousel.js' // render pages as carousel

import { AboutMe } from './pages/aboutMe.js'
import { ServicesUs } from './pages/services.js'
import { ContactUs } from './pages/contact.js'
import { Numerologia } from './pages/numerologia.js'

import { SectionContact } from './section/sectionContact.js'
import { SectionOpinions } from './section/opinions.js'
import { Karta } from './section/kartaDnia.js'
import { Cyfra } from './section/cyfraDnia.js'
import { Posty } from './pages/posty.js'

import { StronaKarta } from './pages/subpages/stronaKarta.js'

// declaring headerNav instance
const head = new Header('Numerologia')

// declaring pages instances
const aboutMe = new AboutMe()
const services = new ServicesUs()
const contact = new ContactUs()
const numerologia = new Numerologia()
const posty = new Posty()

let contentArray = [
    aboutMe.displayAboutMe(),
    numerologia.displayNumerologia(), 
    posty.displayPosty(),
    services.displayServices(),
    contact.displayContactUs(),
] 

// declaring section content
const sectionContact = new SectionContact()
const sectionOpinions = new SectionOpinions() 
const kartaDnia = new Karta()
const cyfraDnia = new Cyfra()

// declaring subpages calsses
const stronaKarta = new StronaKarta()

// array of background images
const imgArr = ['./images/bgflower1.jpg', './images/bgflower2.jpg', './images/bgflower3.jpg', './images/bgflower4.jpg', './images/bgflower5.jpg']

// declare carousel instance
const carousel = new Carousel() 

// adds active-page class to nav element on slide
const highlightNav = () => {
    $('#pageCarousel').on('slid.bs.carousel', ()=> {
        if ($('.carousel-item').hasClass('active')) {
            let navIndex = $('#pageCarousel .active').index()
            $('#menuList li a').removeClass('active-page')
            $('#menuList li a').eq(navIndex).addClass('active-page')
            let pageTitle = $('#menuList li a').eq(navIndex).html()
            $('title').html(`Numerologia - ${pageTitle}`) // dynamic page title     
            // render section content on slide
            if (pageTitle == `O Mnie`) {
                $('#mainContent .active').html(aboutMe.displayAboutMe())
                $('#pageSection').html(kartaDnia.displayKarta(imgArr)).append(kartaDnia.displayFbAndYou())
                $('#randomCard').on('click', ()=> {
                    let image = kartaDnia.randomNumber
                    $('#stronaOmnie').html(stronaKarta.displayStronaKarta(image))
                })
            } else if (pageTitle == 'Numerologia') {
                $('#pageSection').html(cyfraDnia.displayCyfra()).append(kartaDnia.displayFbAndYou())           
            } else if (pageTitle == 'Posty') {
                $('#pageSection').html('')
            } else if (pageTitle == 'Uslugi') {
                $('#pageSection').html(sectionOpinions.displaySectionOpinions())
            } else if (pageTitle == 'Kontakt') {
                $('#pageSection').html(sectionContact.displaySectionContact())
            }
        }
    })
}

$('#topSection').html(`<div class="container-fluid text-left" id="topSectionTitle">
                        <h2 class="mt-4">Rozwoj Duchowy</h2>
                        <h2 class="mt-4">Numerologia</h2> 
                        <h2 class="mt-4">Ezoteryka</h2> 
                        <h2 class="mt-4">Tarot</h2> 
                       </div>`)
$('#navContent').html(head.displayHeader()) // render navbar
$('#mainContent').html(carousel.displayCarousel(contentArray)) // render main content
$('#about').addClass('active-page') // set active-page on page load
$('#pageSection').html(kartaDnia.displayKarta(imgArr)).append(kartaDnia.displayFbAndYou())
$('title').html(`Numerologia - Glowna`) // set page title to 'Home'

highlightNav() //activte add active-page class

// navigation buttons logics
$('#menuList li a').on('click', (e)=> {    
    $('#menuList li a').removeClass('active-page');
    $(e.target).addClass('active-page')
    switch(e.target.innerHTML) { 
        case 'O Mnie':            
            $('#pageCarousel').carousel(0)
            $('#mainContent .active').html(aboutMe.displayAboutMe())          
            break;
        case 'Numerologia':
            $('#pageCarousel').carousel(1)
            break;
        case 'Posty':
            $('#pageCarousel').carousel(2)
            break;    
        case 'Uslugi':
            $('#pageCarousel').carousel(3)
            break;
        case 'Kontakt':
            $('#pageCarousel').carousel(4)
            break;
        default:
            return;
    }        
})



// handle opinions
$('#submitOpinion').on('click', (e)=> {
    e.preventDefault()
    let opinionName = $('#opinionName').val()
    let opinionContent = $('#yourOpinion').val()
    sectionOpinions.insertOpinion(opinionName, opinionContent)
})

// handle subpages 
$('#randomCard').on('click', ()=> {
    let image = kartaDnia.randomNumber
    console.log(image)
    $('#stronaOmnie').html(stronaKarta.displayStronaKarta(image))
})