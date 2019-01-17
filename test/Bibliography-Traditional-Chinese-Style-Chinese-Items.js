'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items-traditional-chinese.js');
var chai = require('chai');
var assert = chai.assert;

describe("Bibliography Traditional Chinese Style Chinese Items", function() {
    var engine;
    var sys;
    var styleString;

    before(function() {
        sys = new citeproc.simpleSys();

        //Wherever your locale and style files are. None are included with the package.
        var enUS = fs.readFileSync('./locales/locales-en-US.xml', 'utf8');
        var zhCN = fs.readFileSync('./locales/locales-zh-CN.xml', 'utf8');
        var zhTW = fs.readFileSync('./locales/locales-zh-TW.xml', 'utf8');
        sys.addLocale('en-US', enUS);        
        sys.addLocale('zh-CN', zhCN);
        sys.addLocale('zh-TW', zhTW);
        styleString = fs.readFileSync('./melbourne-school-of-theology-chinese.csl', 'utf8');
        engine = sys.newEngine(styleString, 'zh-TW', null);
    });

    function makeBibliography(items) {
        sys.items = items;
        engine.updateItems(items);

        engine.updateItems(Object.keys(items));

        var bib = engine.makeBibliography();

        return bib[1][0].trim();
    }

    it("Bibliography::Book", function() {
        var output = makeBibliography(items.book);
        var expected = '<div class="csl-entry">楊牧谷：《淚眼先知耶利米》（台北：校園書房出版社，1989）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Edited Book", function() {
        var output = makeBibliography(items.editedBook);
        var expected = '<div class="csl-entry">李三谷編：《舊約小品》（台北：校園出版社，2003）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Book with 2 or 3 authors (or editors)", function() {
        var output = makeBibliography(items.bookWith2Or3AuthorsEditors);
        var expected = '<div class="csl-entry">杜德民、張愛楊和陳豐裕：《雨過天晴》（新加坡：和聯出版社，2003）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book Multiple Authors", function() {
        var output = makeBibliography(items.bookWithMoreThan3AuthorsEditors);
        var expected = '<div class="csl-entry">鮑維鈞、黃錫木、羅慶才、張略和岑少麟：《聖經正典與經外文獻導論》（聖經導論叢書，香港：基道，2001）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Volume from a multi volume work", function() {
        var output = makeBibliography(items.volumeFromAMultiVolumeWork);
        var expected = '<div class="csl-entry">奧古斯丁：《上帝之城》（王曉朝譯，共三冊，歷代基督教思想學術文庫古代系列，香港：道風書社，2004）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Commentary or book in series with series number", function() {
        var output = makeBibliography(items.commentaryOrBookInSeriesWithSeriesNumber);
        var expected = '<div class="csl-entry">黃朱倫：《腓立比書：僕友的生命與事奉》（明道研經叢書50，香港：明道社，2006）。</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::Edition other than the first", function() {
        var output = makeBibliography(items.editionOtherThanTheFirst);
        var expected = '<div class="csl-entry">吳立樂編：《浸會在華佈道百年史略》（修訂版，香港：浸信會出版部，1970）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Booked viewed online", function() {
        var output = makeBibliography(items.bookViewedOnline);
        var expected = '<div class="csl-entry">何衛中：《牧養神的群羊》（香港：金燈台，2010），http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf（2014年9月8日參閱）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Essay or chapter", function() {
        var output = makeBibliography(items.essayOrChapter);
        var expected = '<div class="csl-entry">黄二冬：「天下一家」，《地球村的演變》（千百文編，厦門：漢陽出版社，2003），335–350。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Article in a lexicon or theological dictionary", function() {
        var output = makeBibliography(items.articleInALexiconOrTheologicalDictionary);
        var expected = '<div class="csl-entry">馮來平：「基督的寬容」，《世界神學辭典》（邱宋恩編，共四冊，上海：展徒出版社，1990），3：25–26。</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::Journal article", function() {
        var output = makeBibliography(items.journalArticle);
        var expected = '<div class="csl-entry">楊品通：「神學的本質探討」，《教會神學期刊》14（2003年5月），19–24。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Magazine or newspaper article", function() {
        var output = makeBibliography(items.magazineOrNewspaperArticle);
        var expected = '<div class="csl-entry">李約翰：「美國華僑習俗趣談」，《时代華僑周刊》（1957年10月30日），43–47。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Thesis or dissertation", function() {
        var output = makeBibliography(items.thesis);
        var expected = '<div class="csl-entry">劉庸：「基督教教育在南非華人教會群體中的發展模式」（太平洋天國神學院：博士論文，2000）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Conferenec paper", function() {
        var output = makeBibliography(items.conferencePaper);
        var expected = '<div class="csl-entry">謝木水：「神學如何失去靈性？」（新加坡神學院益道論述會上發表之專文，新加坡，2010年10月4日）。</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::Webpage", function() {
        var output = makeBibliography(items.webpage);
        var expected = '<div class="csl-entry">劉小楓：「歷史玩完了？」，《漢語基督教文化研究所》（2001年5月3日），http://www.iscs.org.hk/article18.htm（2002年8月5日參閱）。</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::Blogpost", function() {
        var output = makeBibliography(items.blogpost);
        var expected = '<div class="csl-entry">劉小楓：「歷史玩完了？」，《漢語基督教文化研究所》（2001年5月3日），http://www.iscs.org.hk/article18.htm（2002年8月5日參閱）。</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::Forumpost", function() {
        var output = makeBibliography(items.forumPost);
        var expected = '<div class="csl-entry">劉小楓：「歷史玩完了？」，《漢語基督教文化研究所》（2001年5月3日），http://www.iscs.org.hk/article18.htm（2002年8月5日參閱）。</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::EnglishAuthor", function() {
        var output = makeBibliography(items.englishAuthor);
        var expected = '<div class="csl-entry">Colin A. J.：《淚眼先知耶利米》（台北：校園書房出版社，1989）。</div>';
        
        assert.equal(output, expected);
    });
});