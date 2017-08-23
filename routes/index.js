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
                'text': 'Algorithm，意即演算法，Data Structure，意即資料結構，兩者為大學電腦工程相關科系的基石以及電腦能力競賽的主打項目，如何「規劃」出一種方法，「設計」出一種結構來有效率又不耗費空間地解決不管是生活上或是數學上的各種難題，不管是在國中就學過相關內容的高手，或是躍躍欲試的入門者，相信這堂課都可以滿足大家「思考」的樂趣，此外我們在前面的課程中也會先讓大家熟悉使用C/C++ ',
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
                'text': 'Java是一種廣泛使用的電腦程式設計語言，擁有跨平台、物件導向、泛型程式設計的特性，廣泛應用於企業級Web應用開發和行動應用開發，而我們將讓大家學會基本的JAVA，並且用其開發屬於自己的APP。',
                'img': 'java.jpg'
            },
            {
                'id': 'others',
                'title': '其他主題',
                'text': '除了既定的大主題外，平時的社課也會有許多小主題，會依照入社時大家所填寫的內容來做排定，讓大家能學到更多自己有興趣的東西。',
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
