function user() {

}
user.prototype.staticRoutes = function () {
    $('#staticRoutes a').on('click', function () {
        localStorage.setItem("city_from", $(this).parents('tr')[0].children[1].innerText);
        localStorage.setItem("city_to", $(this).parents('tr')[0].children[3].innerText);
        $('.selectRoute .from').val(localStorage.getItem("city_from"));
        $('.selectRoute .to').val(localStorage.getItem("city_to"));
    });
    if (localStorage.getItem("city_from") !== null && localStorage.getItem("city_from") !== '' && localStorage.getItem("city_to") !== null && localStorage.getItem("city_to") !== '') {
        $('.selectRoute .from').val(localStorage.getItem("city_from"));
        $('.selectRoute .to').val(localStorage.getItem("city_to"));
    }
};
$(document).ready(function () {
    validation();
    var newUserObj = new user();
    newUserObj.staticRoutes();
});