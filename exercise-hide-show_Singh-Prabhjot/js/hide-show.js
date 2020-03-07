'use strict'

let divs = $('#container div')

divs.eq(0).hide()
divs.eq(1).hide('slow').show('fast')
divs.eq(2).fadeOut(5000).delay(3000).fadeIn(4000)
divs.eq(3).fadeTo (5000, 0.3, "swing", function () {
    $(this).addClass('active')
}).fadeTo (4000, 0.6)
divs.eq(4).slideUp(4000).slideDown(4000)
