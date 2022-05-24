// Global Variables
// storing the UL in a variable called theUnorderedList 
const theUnorderedList = document.getElementById('navbar__list');
 // storing all the sections of the page in a variable called sectionsOfPage
const sectionsOfPage = document.querySelectorAll('section');


//using fragment enhances the performance
const fragment = document.createDocumentFragment();
for(const section of sectionsOfPage)
{
    //another way of getting the section name --> section.dataset.nav
    const sectionName = section.getAttribute('data-nav');
    const newListItem = document.createElement('li');

    newListItem.innerText = sectionName; 
    newListItem.classList.add('menu__link'); 

    newListItem.addEventListener('click', ()=> {
        section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
    //appending the new list item to the unordered list
    fragment.appendChild(newListItem);
}
theUnorderedList.appendChild(fragment);


function inViewPort(section) 
{
    const sectionDimension = section.getBoundingClientRect();
    return (sectionDimension.top >= -50 && sectionDimension.top < 500 );
}


//a function that gives the section in the viewport a class called your-active-class 
const sectionActivation = () => {
    for(const section of sectionsOfPage)
    {
        if(inViewPort(section))
        {
            if(!section.classList.contains('your-active-class'))
                section.classList.add('your-active-class');
        }
        else
        {
            section.classList.remove('your-active-class');
        }
    }
}
window.addEventListener('scroll', sectionActivation);
