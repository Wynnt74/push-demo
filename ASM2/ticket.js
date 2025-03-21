const buyBtns = document.querySelectorAll('.js-buy-ticket')

const modal = document.querySelector('.js-modal')
const modalCls = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTickets(){
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets )
}

modalCls.addEventListener('click', hideBuyTickets)

modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
} )
