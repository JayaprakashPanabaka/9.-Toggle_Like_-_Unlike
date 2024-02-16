let puppyImg = document.querySelector(".puppy-img")
let likeSymbol = document.querySelector(".like-symbol")
let btn = document.querySelector(".btn")
let isLiked = false


let like = () => {
    if(isLiked === false) {
        puppyImg.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png'
    
    likeSymbol.style.color= '#0967d2'
    btn.style.backgroundColor = '#0967d2'
    btn.style.color = '#ffffff'
    isLiked = true
    }else {
        puppyImg.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png'
    
    likeSymbol.style.color= '#cbd2d9'
    btn.style.backgroundColor = '#cbd2d9'
    btn.style.color = '#9aa5b1'
    isLiked = false
    }
}



