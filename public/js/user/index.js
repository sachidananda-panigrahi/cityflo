function user(){

}
user.prototype.staticRoutes = function(){
    $('#staticRoutes a').on('click', function(){
        localStorage.setItem("city_from", $(this).parents('tr')[0].children[1].innerText);
        localStorage.setItem("city_to", $(this).parents('tr')[0].children[3].innerText);
    })
};
$(document).ready(function(){
    validation();
    var newUserObj = new user();
    newUserObj.staticRoutes();
});