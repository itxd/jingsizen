
var data_nav = [
    {
        "title" : "证严法师",
        "childs" : [
            {"link" : "jszen.html","title" : "证严法师生活智慧"},
            {"link" : "master_intro.html","title" : "证严法师行愿半世纪"},
            {"link" : "master-story.html","title" : "证严法师说故事"}
        ]
    },
    {
        "title" : "静思法脉",
        "childs" : [
            {"link" : "sutra_Innumerable.html","title" : "无量义经"},
            {"link" : "sutra_37ways.html","title" : "三十七道品"},
            {"link" : "sutra_med1.html","title" : "药师经 上"},
            {"link" : "sutra_med2.html","title" : "药师经 下"},
            {"link" : "sutra_8Insights.html","title" : "八大人觉经"},
            {"link" : "sutra_dizang1.html","title" : "地藏经 上"},
            {"link" : "sutra_dizang2.html","title" : "地藏经 下"},
            {"link" : "sutra_parents.html","title" : "父母恩重难报经"}
        ]
    },
    {
        "title" : "静思妙莲华",
        "childs" : [
            {"link" : "sutra_lotus0.html","title" : "静思妙莲华 法华经前序 "},
            {"link" : "sutra_lotus01.html","title" : "静思妙莲华 01序品 "},
            {"link" : "sutra_lotus02.html","title" : "静思妙莲华 02方便品 "},
            {"link" : "sutra_lotus03.html","title" : "静思妙莲华 03譬喻品 "},
            {"link" : "sutra_lotus04.html","title" : "静思妙莲华 04信解品 "},
            {"link" : "sutra_lotus05.html","title" : "静思妙莲华 05药草喻品 "},
            {"link" : "sutra_lotus06.html","title" : "静思妙莲华 06授记品 "},
            {"link" : "sutra_lotus07.html","title" : "静思妙莲华 07化城喻品 "},
            {"link" : "sutra_lotus08.html","title" : "静思妙莲华 08五百弟子授记品 "},
            {"link" : "sutra_lotus09.html","title" : "静思妙莲华 09授学无学人记品 "},
            {"link" : "sutra_lotus10.html","title" : "静思妙莲华 10法师品 "},
            {"link" : "sutra_lotus11.html","title" : "静思妙莲华 11见宝塔品 "},
            {"link" : "sutra_lotus12.html","title" : "静思妙莲华 12提婆达多品 "},
            {"link" : "sutra_lotus13.html","title" : "静思妙莲华 13劝持品 "},
            {"link" : "sutra_lotus14.html","title" : "静思妙莲华 14安乐行品 "},
            {"link" : "sutra_lotus15.html","title" : "静思妙莲华 15从地涌出品 "},
            {"link" : "sutra_lotus16.html","title" : "静思妙莲华 16如来寿量品 "},
            {"link" : "sutra_lotus17.html","title" : "静思妙莲华 17分别功德品 "},
            {"link" : "sutra_lotus18.html","title" : "静思妙莲华 18随喜功德品 "},
            {"link" : "sutra_lotus19.html","title" : "静思妙莲华 19法师功德品 "}
        ]
    },
    
    {
        "title" : "慈济践行",
        "childs" : [
            {"link" : "tzuchiroad.html","title" : "慈济四大志业"},
            {"link" : "tzuchipractice.html","title" : "慈济宗门人间路"},
            {"link" : "onlinetraining.html","title" : "在线共修"},
            {"link" : "aphorisms.html","title" : "静思语"},
            {"link" : "tzuchiMusic.html","title" : "慈济歌曲"}
        ]
    },
    {
        "title" : "大爱知音",
        "childs" : [
            {"link" : "life-wisdom.html","title" : "人间菩提"},
            {"link" : "daairadioalbums.html","title" : "真心看世界"},
            {"link" : "daairadioselections.html","title" : "大爱节目荟萃"},
            {"link" : "master-journal.html","title" : "衲履足跡"},
            {"link" : "veggie.html","title" : "蔬食养生"}
        ]
    },
    {"link" : "garden.html","title" : "禅林百家"},
    {"link" : "contact.html","title" : "联系与交流"}
];




// html code gen
document.write('\
<nav class="navbar navbar-inverse navbar-fixed-top common-nav" role="navigation">\
<div class="container">\
    <div class="navbar-header">\
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\
            <span class="sr-only">Toggle navigation</span>\
            <span class="icon-bar"></span>\
            <span class="icon-bar"></span>\
            <span class="icon-bar"></span>\
        </button>\
        <a class="navbar-brand" href="index.html">静心思惟</a>\
    </div>\
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
        <ul class="nav navbar-nav navbar-right">');



data_nav.forEach(element => {

    if (element.childs) {
        document.write('\
            <li class="dropdown">\
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">'+element.title+'<b class="caret"></b></a>\
                <ul class="dropdown-menu">');
        element.childs.forEach(element_c => {
            document.write('<li><a href="'+element_c.link+'">'+element_c.title+'</a></li>');
        });
        document.write('\
                </ul>\
            </li>');
    } else {
        document.write('<li><a href="'+element.link+'">'+element.title+'</a></li>');
    }
});

document.write('\
        </ul>\
    </div>\
</div>\
</nav>');


