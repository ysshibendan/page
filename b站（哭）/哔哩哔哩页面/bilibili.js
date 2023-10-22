//轮播图
let index = 0

let imageCount = document.querySelectorAll(
    ".main .m-inner .box3-big .b3-b-inner img"
).length

const bottom = document.querySelector(".main .m-inner .box3-big .bottom")
for (let i = 0; i < imageCount; i++) {
    const indicator = document.createElement("div")
    indicator.classList.add("indicator")
    indicator.onclick = () => setIndex(i)
    bottom.append(indicator)
}

function createAuto() {
    return setInterval(() => {
        index++
        refresh()
    }, 3000)
}

let autoTimer = createAuto()

function refresh() {
    if (index < 0) {
        index = imageCount - 1
    } else if (index >= imageCount) {
        index = 0
    }

    let box3big = document.querySelector(".box3-big")

    let width = getComputedStyle(box3big).width
    width = Number(width.slice(0, width.length - 2))

    box3big.querySelector(".b3-b-inner").style.left =
        index * width * -1 + "px"
    let currentIndex = index;
    let indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
        indicator.classList.add("active");
        indicator.classList.remove("active1");
        } else {
        indicator.classList.remove("active");
        indicator.classList.add("active1");
        }
    });
}

let refreshWrapper = (func) => {

    return function (...args) {
        let result = func(...args)
        refresh()

        clearInterval(autoTimer)
        autoTimer = createAuto()
        return result
    }
}

let leftShift = refreshWrapper(() => {
    index--
})
let rightShift = refreshWrapper(() => {
    index++
})

let setIndex = refreshWrapper((idx) => {
    index = idx
})

refresh()


//当看不到最上面的背景图头部导航跟随
const banner = document.getElementById('banner')
const header = document.getElementById('header')
const observe =new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.style.position = 'absolute'
            header.style.backgroundColor = 'transparent'
        } else {
            header.style.position = 'fixed'
            header.style.backgroundColor = 'white'
        }
    });
})
observe.observe(banner)


//视频预览
const thumbnails = document.querySelectorAll('.b3-img');


thumbnails.forEach(thumbnail =>{
    const video = thumbnail.querySelector('video')
    thumbnail.addEventListener('mouseover', () => {
    
        video.currentTime = 20
        video.style.display = 'block';
        video.muted = true;
        video.play();
    });
          
    thumbnail.addEventListener('mouseout', () => {
          
    video.style.display = 'none';
    video.pause();
    });
        
})
 
// 点击第一个视频进行跳转
const open = document.getElementById('open')
open.addEventListener('click',()=>{
    window.open('bilibili视频页面.html', '_blank')
});