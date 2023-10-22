// 图片手风琴
let lis = document.querySelectorAll('.container>#picture>ul>li')
let curli = lis[0]

lis.forEach( li =>{
    li.addEventListener( 'click',  ()=>{
        curli.classList.remove('active')

        li.classList.add('active')
       
        curli = li
    })
})



// 搜索框
var searchBox=document.querySelector('#searchBox')
searchBox.addEventListener('focus',function(){
    searchBox.style.width='440px'
  })
searchBox.addEventListener('blur',function(){
    searchBox.style.width=""
  })


//文章搜索
const searchInput = document.getElementById('searchBox');
const searchButton = document.getElementById('search-button');
const articles = Array.from(document.querySelectorAll('.article'));

searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const keyword = searchInput.value.trim().toLowerCase();
  articles.forEach(article => {
    const title = article.querySelector('.article-title').textContent.toLowerCase();
    if (title.includes(keyword) || keyword === '') {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
  }
});

function toggleStyle(id) {
  var content = document.getElementById(id);
  
 
  if (content.classList.contains('word')) {
    content.classList.remove('word');
  } else {  
    content.classList.add('word');
  }
}