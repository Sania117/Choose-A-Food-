var pizza = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNqEjGxmKP8V389aAQI0MEbkaUD1s24rYBADM5OYoRBRsZZzOGg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xQaeWz2MwtVRVXWGzrzSumwK_0r-XNXHjl2L2zPkEOlTfbvF","https://mobilestatic.littlecaesars.com/weborderingimages/b8b19b2e-5421-4b20-b3ef-02b802ca7d4f.jpg"] ;

var lasagna = ["https://cafedelites.com/wp-content/uploads/2018/01/Mamas-Best-Lasagna-IMAGE-43.jpg","https://www.johnsonville.com/.imaging/mte/johnsonville-retail/640-wide/dam/johnsonville/recipe-images/italian-sausage-lasagna/jcr:content/italian-sausage-lasagna.jpg","https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/l/800/lasagna-formaggio.ashx?vd=20180710T032101Z&hash=6836B3A3C761BF254F5395358AE166F7B9CF0F41"];

var hamburger = ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/2/FNM_060112-Grilled-Burger-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1371606262739.jpeg","https://recipeland.com/images/r/20873/1167b0d62114aa73bc34_1024.jpg","https://i0.wp.com/redmeatlover.com/wp-content/uploads/2018/06/IMG_6660.jpg?ssl=1"] ;

var lobster = ["http://bestofsea.com/wp-content/uploads/2015/10/Butter-Poached-Lobster.jpg","https://www.savorytooth.com/wp-content/uploads/2017/06/how-to-cook-lobster-tails-perfectly-each-time-2.jpg","https://www.traegergrills.com/images/en-us/Shared/images/recipes/banners/Seafood/161023_Grilled%20Lobster%20Tail_RE_HE_M.jpg"];

function changeBackgroundColor(color) {
    $('body').css('background-color', color);
}

function displayImage(images) {
    $(".images").hide();
    
    images.forEach(function(image) {
        $('.images').append('<img src =' + image + '>');        
    });
    
    $(".images").fadeIn();
}

function showPizza() {
    changeBackgroundColor("#E82700");
    displayImage(pizza);
}

function showLasagna() {
    changeBackgroundColor("#189E0D");
    displayImage(lasagna);
}

function showHamburger() {
    changeBackgroundColor("#0D7B9E");
    displayImage(hamburger);
}
function showLobster() {
    changeBackgroundColor("#F7F015");
    displayImage(lobster);
}

$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "Pizza" || input === "pizza" ) {
        showPizza();
    } else if (input === "Lasagna" || input === "lasagna" ) {
        showLasagna();
    } else if (input === "Hamburger" || input === "hamburger") {
        showHamburger();
    } else if (input === "Lobster" || input === "lobster") {
        showLobster();
    } else {
        alert("Make sure the answers are typed correctly!");
    }
});