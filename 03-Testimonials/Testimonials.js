const left = document.getElementById('left-icon');
const right = document.getElementById('right-icon');
const generate = document.getElementById('generate');

const img = document.getElementById('person-img');
const personName = document.getElementById('name');
const job = document.getElementById('position');
const testimony = document.getElementById('testimony');

const quotes = [
    {
    image : "/img/jeans-girl.jpg",
    name : "Betty Nens",
    position : "Marketing",
    quote : "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
    {
    image : "/img/blue-sweater-girl.jpg",
    name : "Lina Dems",
    position : "Developer, IT",
    quote : "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
    {
    image : "/img/light-male.jpg",
    name : "Michael Nens",
    position : "Quality Assurance, IT",
    quote : "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."},
    {
    image : "/img/yellow-sweater-girl.jpg",
    name : "Narni David",
    position : "Finance",
    quote : "I recently had the pleasure of working with Buna from IT and I cannot recommend their services enough. From the moment I reached out for support, Buna was attentive, knowledgeable, and extremely helpful."},
    {
    image : "/img/black-male-testimonial.jpg",
    name : "Daniel Tyler",
    position : "Client",
    quote : "They went above and beyond to ensure that my IT needs were met and provided excellent support throughout the entire process. Their expertise was truly impressive and I couldn't have asked for a better experience."}
]
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showItem(currentItem);
})

left.addEventListener('click',function(){
    currentItem--;
    if(currentItem > 0){
    showItem(currentItem);}
    else{
        currentItem = quotes.length;
        showItem(currentItem);
    }
})

right.addEventListener('click',function(){
    currentItem++;
    if(currentItem < quotes.length){
        showItem(currentItem);
    }
    else{
        currentItem = 0;
        showItem(currentItem);
    }
})

generate.addEventListener('click',function(){
    currentItem = randomNumber();
    showItem(currentItem);
})

function randomNumber(){
    return Math.floor((Math.random() * quotes.length));
}

function showItem(currentItem){
    const person = quotes[currentItem];
    img.src = person.image;
    personName.textContent = person.name;
    job.textContent = person.position;
    testimony.textContent = person.quote;
}