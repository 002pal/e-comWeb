//===== first purchase section popup function with delay using jquery =====
// $(window).on('load', function() {
//     setTimeout(function() {
//         $('#popupModal').modal('show');
//     }, 2000);
// });

(function () {
    setTimeout(function () {
        $('#popupModal').modal('show');
    }, 2000);
})();

//===== cart add function =====
const cart = document.querySelectorAll('#cart_add');
const mycart_area = document.getElementById('mycart-area')

cart.forEach(e => {
    e.addEventListener('click', function () {
        alert('cart not add to "My Cart Page" we will fixed soon');
    });
});