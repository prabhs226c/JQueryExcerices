'use strict'
class Collapsible{

     static init(options)
{
    if(options && options.hasOwnProperty('className'))
    {
        const INIT_CLASS = options.className

        let collapsibles = document.getElementsByClassName(INIT_CLASS)

        console.log(collapsibles.length)
        for(let i=0;i< collapsibles.length;i++)
        {
            let header = collapsibles[i].querySelector('h2:first-of-type')
            let page = collapsibles[i].querySelector('div:first-of-type')

            header.classList.add('collapsible-h')
            header.classList.add('collapsible-close')

            header.addEventListener('click',toggleCollapsible)
            page.classList.add('collapsible-div')
            page.style.display = "none"
        }

        function toggleCollapsible()
        {
            const PARENT = this.parentElement

            let target = PARENT.querySelector('div:first-of-type')
             target.style.display =   target.style.display=="none"?"block":"none"
        }

    }else{
        console.log('failed to load collapsible elements. class name not provided')
    }
}


}