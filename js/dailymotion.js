'use strict';

// humburger-menu
$('.nav-toggle').on('click', function() {
    $('.nav-toggle, .nav-list, .title-toggle, .dm_search, .contact').toggleClass('show');
});

// dropdown-menu
$(function () {
    $('#nav-list dt').click(function () {
        $('#nav-list dd').slideToggle();
    });
});

// youtube search
const KEY = 'AIzaSyC5AChC9ey3PPaczW15qZTEI6bmSkPV24g';      // API KEY

let url1 = 'https://www.googleapis.com/youtube/v3/search?'; // API URL
url1 += 'type=video';            // 動画を検索する
url1 += '&part=snippet';         // 検索結果にすべてのプロパティを含む
url1 += '&q=';      // 検索ワード このサンプルでは music に指定
let url2 = '&videoEmbeddable=true'; // Webページに埋め込み可能な動画のみを検索
url2 += '&videoSyndicated=true'; // youtube.com 以外で再生できる動画のみ
url2 += '&maxResults=10';         // 動画の最大取得件数
url2 += '&key=' + KEY;           // API KEY

let thumbNail = new Array();             // サムネイルのURL
let videoList = new Array();

$('#btn').on('click', function() {
    $.ajax({
        url: url1 + $('#yt_search').val() + url2, 
        dataType : 'jsonp',
    }).done(function(data) {
        if (data.items) {
            setData(data);
            // console.log(thumbNail);
            // console.log(videoList);
            
            for (let i = 0; i < videoList.length; i++) {
                $('.yt_slideshow div').html(videoList[i]);
                console.log($('.yt_slideshow div'));
            }
            $(function () {
                $('.yt_slideshow').slick({
                    // autoplay: true;
                    // autoplaySpeed: 3000;
                    dots: true
                });
            });
        } else {
            alert('該当するデータが見つかりませんでした');
        }
    }).fail(function(data) {
        alert('通信に失敗しました');
    });
}); 

let setData = (data) => {

    for (let i = 0; i < data.items.length; i++) {
        let video = '';
        let result = '';
        let thumbNailUrl = '';
        
        video  = '<iframe src="https://www.youtube.com/embed/';
        video += data.items[i].id.videoId;
        video += '" allowfullscreen></iframe>';
        result += '<div class="video">' + video + '</div>';
        thumbNailUrl = 'http://img.youtube.com/vi/' + data.items[i].id.videoId + '/mqdefault.jpg';
        videoList.push(result);
        thumbNail.push(thumbNailUrl);
    }
};
