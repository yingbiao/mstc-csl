'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items-chinese.js');
var chai = require('chai');
var assert = chai.assert;

describe("Citation Chinese", function() {
    var engine;
    var sys;

    before(function() {
        sys = new citeproc.simpleSys();
        //Wherever your locale and style files are. None are included with the package.
        var enUS = fs.readFileSync('./locales/locales-en-US.xml', 'utf8');
        var zhCN = fs.readFileSync('./locales/locales-zh-CN.xml', 'utf8');
        sys.addLocale('en-US', enUS);        
        sys.addLocale('zh-CN', zhCN);
        var styleString = fs.readFileSync('./melbourne-school-of-theology-chinese.csl', 'utf8');
        engine = sys.newEngine(styleString, 'zh-CN', null);
    });

    function makeCitationCluster(items, pages) {
        sys.items = items;
        var citationCluster=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": pages,
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }

        return engine.previewCitationCluster(citationCluster, [], [], "html");
    }

    it("Citation::Book", function() {
        var output = makeCitationCluster(items.book, "74-76");
        var expected = '楊牧谷：《淚眼先知耶利米》（台北：校園書房出版社，1989），74–76。';
        
        assert.equal(output, expected);
    });

    it("Citation::Edited Book", function() {
        var output = makeCitationCluster(items.editedBook, "24");
        var expected = '李三谷编：《舊約小品》（台北：校園出版社，2003），24。';
        
        assert.equal(output, expected);
    });

    it("Citation::Book with 2 or 3 authors (or editors)", function() {
        var output = makeCitationCluster(items.bookWith2Or3AuthorsEditors);
        var expected = '<div class="csl-entry">杜德民，张爱杨和陈丰裕：《雨过天晴》（新加坡：和联出版社，2003）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Book Multiple Authors", function() {
        var output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors);
        var expected = '<div class="csl-entry">鮑維鈞，黃錫木，羅慶才，張略和岑少麟：《聖經正典與經外文獻導論》（聖經導論叢書，香港：基道，2001）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Volume from a multi volume work", function() {
        var output = makeCitationCluster(items.volumeFromAMultiVolumeWork);
        var expected = '<div class="csl-entry">奧古斯丁：《上帝之城》（王曉朝译，共三卷，歷代基督教思想學術文庫古代系列，香港：道風書社，2004）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Commentary or book in series with series number", function() {
        var output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber);
        var expected = '<div class="csl-entry">黃朱倫：《腓立比書：僕友的生命與事奉》（明道研經叢書50，香港：明道社，2006）。</div>';
        
        assert.equal(output, expected);
    }); 

    it("Citation::Edition other than the first", function() {
        var output = makeCitationCluster(items.editionOtherThanTheFirst);
        var expected = '<div class="csl-entry">吳立樂编：《浸會在華佈道百年史略》（修订版，香港：浸信會出版部，1970）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Booked viewed online", function() {
        var output = makeCitationCluster(items.bookViewedOnline);
        var expected = '<div class="csl-entry">何衛中：《牧養神的群羊》（香港：金燈台，2010），http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf（2014年9月8日参阅）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Essay or chapter", function() {
        var output = makeCitationCluster(items.essayOrChapter);
        var expected = '<div class="csl-entry">黄二冬：「天下一家」，《地球村的演變》（千百文编，厦門：漢陽出版社，2003），335–350。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Article in a lexicon or theological dictionary", function() {
        var output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary);
        var expected = '<div class="csl-entry">馮來平：「基督的寬容」，《世界神學辭典》（邱宋恩编，共四卷，上海：展徒出版社，1990），3：25–26。</div>';
        //                                                                                    册
        assert.equal(output, expected);
    });

    it("Citation::Journal article", function() {
        var output = makeCitationCluster(items.journalArticle);
        var expected = '<div class="csl-entry">楊品通：「神學的本質探討」，《教會神學期刊》，14（2003年5月），19–24。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Magazine or newspaper article", function() {
        var output = makeCitationCluster(items.magazineOrNewspaperArticle);
        var expected = '<div class="csl-entry">李約翰：「美國華僑習俗趣談」，《时代華僑周刊》（1957年10月30日），43–47。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Thesis or dissertation", function() {
        var output = makeCitationCluster(items.thesis);
        var expected = '<div class="csl-entry">劉庸：「基督教教育在南非華人教會群體中的發展模式」（太平洋天國神學院：博士論文，2000）。</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Conferenec paper", function() {
        var output = makeCitationCluster(items.conferencePaper);
        var expected = '<div class="csl-entry">謝木水：「神學如何失去靈性？」（新加坡神學院益道論述會上发表之专文，新加坡，2010年10月4日）。</div>';

        assert.equal(output, expected);
    });

    it("Citation::Webpage", function() {
        var output = makeCitationCluster(items.webpage);
        var expected = '<div class="csl-entry">劉小楓：「歷史玩完了？」，《漢語基督教文化研究所》（2001年5月3日），http://www.iscs.org.hk/article18.htm（2002年8月5日参阅）。</div>';

        assert.equal(output, expected);
    });
});