let ratings = document.querySelectorAll('.rating > div')
let ratingContainer = document.querySelector('.rating-container')
let thanksContainer = document.querySelector('.thanks-container')
let submit_btn = document.querySelector('.rating-container button')
let rating = document.querySelector('#rate')
let rate = null
ratings.forEach(ratingsItem => {
    ratingsItem.addEventListener('click', () => {
        const active = document.querySelector('.onclick-style')
        if (active){
            active.classList.remove("onclick-style");
        }

        ratingsItem.classList.add("onclick-style");
        rate = ratingsItem.textContent
        console.log(rate)
    });
});

submit_btn.addEventListener('click', () => {
    if (rate) {
        rating.textContent = rate
        ratingContainer.classList.add("hidden")
        thanksContainer.classList.remove("hidden")
    }
})