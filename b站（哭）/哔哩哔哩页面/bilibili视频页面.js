// 视频小窗实现
const video = document.getElementById('video');
const myVideo = document.getElementById('myVideo');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        myVideo.style.width='1072px'
        myVideo.style.height='603px'
        myVideo.style.position='absolute'
        myVideo.style.bottom=''
        myVideo.style.right=''
        } else {
        myVideo.style.width='320px'
        myVideo.style.height='180px'
        myVideo.style.position='fixed'
        myVideo.style.bottom='30px'
        myVideo.style.right='75px'
        }
    });
});

observer.observe(video);
      
// 评论区实现（芜湖）
commentInput.addEventListener('keydown', function (event) {
    var comment = document.getElementById('commentSend');
      

    comment.addEventListener('click', function(){
        const inputText = commentInput.value.trim();

        if(inputText !== ''){
            const key = localStorage.length;
            localStorage.setItem(key, inputText);

            const newComment = document.createElement('div');
            newComment.classList.add('newComment')

            const newHead = document.createElement('img');
            newHead.src = './头像.jpg';
            newHead.classList.add('newHead');
            newComment.appendChild(newHead);

            const CommentInner = document.createElement('div');
            CommentInner.classList.add('CommentInner');

            const CommentInnerTop = document.createElement('div');
            CommentInnerTop.classList.add('CommentInnerTop')
            CommentInnerTop.textContent = '这里是一个昵称 '
            const Level = document.createElement('img')
            Level.classList.add('Level')
            Level.src = '../图片/lv6.webp'
            CommentInnerTop.appendChild(Level);
            CommentInner.appendChild(CommentInnerTop);

            const CommentInnerMiddle = document.createElement('div');
            CommentInnerMiddle.classList.add('CommentInnerMiddle')

            CommentInnerMiddle.textContent = inputText;
           
            CommentInner.appendChild(CommentInnerMiddle);

            const CommentInnerBottom = document.createElement('div');
            CommentInnerBottom.classList.add('CommentInnerBottom')

            const DayTime =document.createElement('div')
            DayTime.classList.add('DayTime')
            DayTime.textContent = '2000-01-01 00:00'
            CommentInnerBottom.appendChild(DayTime);
            const thumbsUp =document.createElement('img')
            thumbsUp.classList.add('thumbsUp')
            thumbsUp.src = '../图片/thumbsup.png'
            CommentInnerBottom.appendChild(thumbsUp);
        
            const thumbsDown =document.createElement('img')
            thumbsDown.classList.add('thumbsDown')
            thumbsDown.src = '../图片/thumbsdown.png'
            CommentInnerBottom.appendChild(thumbsDown);
            const answer =document.createElement('div')
            answer.style.fontSize = '13px'
            answer.style.color = '#9499a0'
            answer.textContent = '回复'
            CommentInnerBottom.appendChild(answer);

            CommentInner.appendChild(CommentInnerBottom);

            newComment.appendChild(CommentInner);

            WebStorage.appendChild(newComment);

            commentInput.value = '';
        }
    });
});
window.addEventListener('load', function () {
    for (let i = 0; i < localStorage.length; i++) {
        const keyD = localStorage.key(i);
        const valueD = localStorage.getItem(keyD);
        
        const newComment = document.createElement('div');
        newComment.classList.add('newComment')

        const newHead = document.createElement('img');
        newHead.src = './头像.jpg';
        newHead.classList.add('newHead');
        newComment.appendChild(newHead);

        const CommentInner = document.createElement('div');
        CommentInner.classList.add('CommentInner');

        const CommentInnerTop = document.createElement('div');
        CommentInnerTop.classList.add('CommentInnerTop')
        CommentInnerTop.textContent = '这里是一个昵称 '
        const Level = document.createElement('img')
        Level.classList.add('Level')
        Level.src = '../图片/lv6.webp'
        CommentInnerTop.appendChild(Level);
        CommentInner.appendChild(CommentInnerTop);

        const CommentInnerMiddle = document.createElement('div');
        CommentInnerMiddle.classList.add('CommentInnerMiddle')

        CommentInnerMiddle.textContent = valueD;
        
        CommentInner.appendChild(CommentInnerMiddle);

        const CommentInnerBottom = document.createElement('div');
        CommentInnerBottom.classList.add('CommentInnerBottom')

        const DayTime =document.createElement('div')
        DayTime.classList.add('DayTime')
        DayTime.textContent = '2000-01-01 00:00'
        CommentInnerBottom.appendChild(DayTime);
        const thumbsUp =document.createElement('img')
        thumbsUp.classList.add('thumbsUp')
        thumbsUp.src = '../图片/thumbsup.png'
        CommentInnerBottom.appendChild(thumbsUp);
    
        const thumbsDown =document.createElement('img')
        thumbsDown.classList.add('thumbsDown')
        thumbsDown.src = '../图片/thumbsdown.png'
        CommentInnerBottom.appendChild(thumbsDown);
        const answer =document.createElement('div')
        answer.style.fontSize = '13px'
        answer.style.color = '#9499a0'
        answer.textContent = '回复'
        CommentInnerBottom.appendChild(answer);

        CommentInner.appendChild(CommentInnerBottom);

        newComment.appendChild(CommentInner);

        WebStorage.appendChild(newComment);
    }
});


const back = document.getElementById('back')
back.addEventListener('click',()=>{
    window.open('bilibili.html', '_self')
});