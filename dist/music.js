const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '多幸运',
            artist: '韩安旭',
            url: '3548771471.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000008wVjT0MSG3T_1.jpg?max_age=2592000',
            lrc: '多幸运-Vk.lrc'
        },
        {
            name: '告白气球',
            artist: '周杰伦',
            url: 'http://t.hunlipic.com/?gbqq',
            cover: 'https://bkimg.cdn.bcebos.com/pic/a8014c086e061d950e4f0d4c76f40ad162d9cabc?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyNzI=,g_7,xp_5,yp_5/format,f_auto',
            lrc: '告白气球-周杰伦.lrc'
        },
        {
            name: '爱很简单',
            artist: '陶喆',
            url: 'http://win.web.ra01.sycdn.kuwo.cn/59e89720370d0358e75665e0c525f008/60898b1e/resource/n2/128/56/31/812853666.mp3',
            cover: 'https://bkimg.cdn.bcebos.com/pic/6159252dd42a2834a4f9ba9b51b5c9ea14cebfc7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
            lrc:'陶喆-爱很简单.lrc'
        }
    ]
});