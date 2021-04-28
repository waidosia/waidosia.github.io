const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '花海',
            artist: '周杰伦',
            url: 'http://www.ytmp3.cn/down/73979.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000',
        },
        {
            name: '十一年',
            artist: '邱永传',
            url: 'http://www.ytmp3.cn/down/59635.mp3',
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fweiyinyue.music.sina.com.cn%2Fwpp_cover%2F100044327_300300.jpg&refer=http%3A%2F%2Fweiyinyue.music.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622197367&t=4c64f5957b4811251ca4a1f0bf4efaff',
        },
        {
            name: '夜空中最亮的星',
            artist: '张杰',
            url: 'http://www.ytmp3.cn/down/32416.mp3',
            cover: 'https://img0.baidu.com/it/u=3703288868,4180590989&fm=26&fmt=auto&gp=0.jpg',
        }
    ]
});