var carouselImages = [
  {
    image_url: 'https://wallpapersite.com/images/pages/pic_w/872.jpg',
    title: 'Watch Dogs',
    photographer_id: 'Dog201'
  },
  {
    image_url: 'https://cdn.allwallpaper.in/wallpapers/1280x720/13655/video-games-assassins-creed-game-1280x720-wallpaper.jpg',
    title: 'Assassins Creed',
    photographer_id: 'Assassin20'
  },
  {
    image_url: 'https://walldiskpaper.com/wp-content/uploads/2014/11/God-Of-War-Wallpaper-Android.jpg',
    title: 'God of War',
    photographer_id: 'GodofWar22'
  }
];

var images = carouselImages.map(img => {
    return `
    <div class ="image">
    <img src="${img.image_url}" />
         <p id="reference">${img.title} by <a href="#">${img.photographer_id}</a></p>
    </div>
    `
}).join('')

$("#images").html(images)

var index = 1
var length = carouselImages.length

$("#images").find(`.image:nth-child(${index})`).css("opacity", 1)

$("#left").on('click',function(){
    left()
    console.log(index, length)
})

$("#right").on('click',function(){
    right()
    console.log(index, length)
})
setInterval(function(){
    right()
}, 5000)

function left() {
    if (index === 1) {
        index = length
    }else{
        index -=1
    }
    
    $("#images").find('.image').removeClass('show')

    $("#images").find(`.image:nth-child(${index})`).addClass('show')
}

function right() {
    if(index === length){
        index = 1
    }else {
        index +=1
    }

    $("#images").find('.image').removeClass('show')

$("#images").find(`.image:nth-child(${index})`).addClass('show')

}