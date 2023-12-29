function scrollToElement(elementSelector, instance = 0){
     //select all element that match the given selection
     const element = document.querySelectionAll(elementSelection);
     //Check if there are elements matching the selection and if the requested instance exists
     if(elements.length > instance){
        //scroll to the specified istance of the element
        element[instance].scrollIntoView({behavior: 'smooth'});
     }
}
const link1 = document.getElemenntById("link1");  
const link2 = document.getElemenntById("link2" ); 
const link3 = document.getElemenntById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
})
link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
})
link3.addEventListener('click', () => {
    scrollToElement('.coloum');
})
const typed = new Typed('#typeIt', {
    strings: ['Frontend Developer', 'Selebewwww', 'Cuakss Pake Zzz'],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 2500,
    loop: true,
});