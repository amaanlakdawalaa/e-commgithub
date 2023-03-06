let bar = document.getElementById('bar')
let nav = document.getElementById('navbar1')
let close = document.getElementById('close')

bar.addEventListener('click' ,
function(){
  nav.classList.add('active')
})



close.addEventListener('click',
function(){
  nav.classList.remove('active');
})


let image = document.getElementsByClassName('small_image_1')
let main = document.getElementsByClassName('single_product_details')

image[0].addEventListener('click',
function() {
main.src = image[0].src;
}

)
image[1].addEventListener('click',
function() {
main.src = image[1].src;
}

)
image[2].addEventListener('click',
function() {
main.src = image[2].src;
}

)
image[3].addEventListener('click',
function() {
main.src = image[3].src;
}

)
