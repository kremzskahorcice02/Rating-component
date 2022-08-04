const ratings = document.querySelectorAll("[data-rating]");
const submit_btn = document.getElementById("submit");
const wrapper = document.getElementById("div-rating");
const form = document.getElementById("form");
const form_done = document.getElementById("rating-done");
const rating_selected = document.getElementsByClassName("active");
const display_rating = document.getElementById("display-rating");

ratings.forEach(rating=>{
    rating.addEventListener('click', function(e) {getRatingValue(e,ratings);}, false);
 })

function getTarget (e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function getRatingValue(e, ratings) {

    let el, target;

    el = getTarget(e);
    target = el.value;
    
    ratings.forEach(rating=>{
        if (rating.value == target) {
            var chosenRating = rating.value;
            rating.classList.add("active");
        } else if (rating.value !== chosenRating && rating.className == "active") {
            rating.classList.remove("active");          
        } 
    })
}   
    


function sendRating (e, rating_selected) {

   var rating_value = rating_selected[0].value;
   if (rating_value) {
    form_done.className = "rating-done";
    form_done.classList.remove('rating-hidden');
    wrapper.innerHTML = form_done
    if (form_done.className == "rating-done") {
        display_rating.innerText = `You selected ${rating_value} out of 5`
    }
   }
}

submit_btn.addEventListener("click", function (e) {sendRating(e,rating_selected);}, false);

