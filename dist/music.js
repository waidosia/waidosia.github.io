const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    lrcType: 3,
    audio: [
        {
            name: '晴天',
            artist: '周杰伦',
            url: '/source/晴天.mp3',
            cover: '/images/晴天.jpg',
            lrc: '/lrc/晴天.lrc'
        },
        {
            name: '告白气球',
            artist: '周杰伦',
            url: 'source/告白气球.mp3',
            cover: 'images/晴天.jpg',
            lrc: 'lrc/告白气球.lrc'
        },
        {
            name: '不染',
            artist: '毛不易',
            url: 'source/不染.mp3',
            cover: 'images/不染.jpg',
            lrc:'lrc/不染.lrc'
        },
        {
            name: '十一年',
            artist: '邱永传',
            url: 'source/十一年.mp3',
            cover: 'images/十一年j.jpg',
            lrc:'lrc/十一年.lrc'
        },
        {
            name: '花海',
            artist: '周杰伦',
            url: 'source/花海.mp3',
            cover: 'images/花海.jpg',
            lrc:'lrc/花海.lrc'
        }
    ]
});