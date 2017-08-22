var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        Course: [{
                'id': 'webdesign',
                'title': '網頁前端設計',
                'text': 'HTML是用來寫網頁的程式語言，使用廣泛，且簡單好懂，CSS則是幫助你美化你的網頁頁面，使網頁界面更加人性化與美觀，而JS更可以幫助你的網頁增加更多變化',
                'img': 'web.jpg'
            },
            {
                'id': 'algorithm',
                'title': 'Algorithm / Data Structure',
                'text': '使用 Processing 寫程式就是比其他語言更有趣，因為它著重在「繪圖」，讓你天馬行空的創意能夠藉由撰寫程式發揮出來，讓每個人都能發揮與生俱來的創造藝術能力。',
                'img': 'algorithm.jpg'
            },
            {
                'id': 'python',
                'title': 'Python',
                'text': 'Python 是一種相當容易入門的程式語言，屬於直譯式，不同於如C++等編譯式語言，不需事先進行編譯，執行起來較有彈性，又因 Python 有統一的撰寫格式，可讀性高，語法簡單，且有大量功能及函式庫可供使用，因此成為許多企業及研究人員進行專案開發、網頁、乃至於科學研究、資料分析、數學模型等都會善用的熱門語言。',
                'img': 'python.jpg'
            },
            {
                'id': 'java',
                'title': 'Java',
                'text': 'AviUtl是由KENくん（匿名的程式開發者）個人開發的免費動畫編輯軟體，AviUtl本身所占硬碟空間並不大、啟動時對電腦負荷很小，同時卻擁有著許多完善的功能，除了影片可以隨使用者選擇輕易轉檔成方便上傳至niconico或youtube上所需要的格式外，各種能簡單使用的特效功能使影片成品並不輸給市售的影片剪輯軟體，且網路上有許多AviUtl的使用者願意將自己研究出來的特效的專案檔分享配布出來，供其他使用者使用，也使得AviUtl能做到的事情更加全面化。',
                'img': 'java.jpg'
            },
            {
                'id': 'cpp',
                'title': 'C/C++',
                'text': 'C++是一門號稱接觸資訊領域的人必學的基礎程式語言，希望藉由C++基礎的教學，激發國中生對於程式的興趣及熱忱，我們將介紹運算子、變數等基礎功能。',
                'img': 'cpp.jpg'
            },
            {
                'id': 'others',
                'title': '其他主題',
                'text': '平時的社課會帶大家探索更多資訊領域的相關內容',
                'img': 'other.jpg'
            }
        ]
    });
});
router.get('/elements', function(req, res, next) {
    res.render('elements', {});
});
router.get('/generic', function(req, res, next) {
    res.render('generic', {});
});

module.exports = router;