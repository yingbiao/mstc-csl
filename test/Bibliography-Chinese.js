'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items-chinese.js');
var chai = require('chai');
var assert = chai.assert;

describe("Bibliography", function() {
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

    function makeBibliography(items) {
        sys.items = items;

        engine.updateItems(Object.keys(items));

        var bib = engine.makeBibliography();

        return bib[1][0].trim();
    }

    it("Bibliography::Book", function() {
        var output = makeBibliography(items.book);
        var expected = '<div class="csl-entry">杨牧谷：《泪眼先知耶利米》（台北：校园书房出版社，1989）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Edited Book", function() {
        var output = makeBibliography(items.editedBook);
        var expected = '<div class="csl-entry">李三谷编：《旧约小品》（台北：校园出版社，2003）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Book with 2 or 3 authors (or editors)", function() {
        var output = makeBibliography(items.bookWith2Or3AuthorsEditors);
        var expected = '<div class="csl-entry">杜德民，张爱杨和陈丰裕：《雨过天晴》（新加坡：和联出版社，2003）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book Multiple Authors", function() {
        var output = makeBibliography(items.bookWithMoreThan3AuthorsEditors);
        var expected = '<div class="csl-entry">鮑維鈞，黃錫木，羅慶才，張略和岑少麟：《聖經正典與經外文獻導論》（聖經導論叢書，香港：基道，2001）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Volume from a multi volume work", function() {
        var output = makeBibliography(items.volumeFromAMultiVolumeWork);
        var expected = '<div class="csl-entry">奧古斯丁：《上帝之城》（王曉朝译，共三卷，歷代基督教思想學術文庫古代系列，香港：道風書社，2004）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Commentary or book in series with series number", function() {
        var output = makeBibliography(items.commentaryOrBookInSeriesWithSeriesNumber);
        var expected = '<div class="csl-entry">黃朱倫：《腓立比書：僕友的生命與事奉》（明道研經叢書50，香港：明道社，2006）。</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::Edition other than the first", function() {
        var output = makeBibliography(items.editionOtherThanTheFirst);
        var expected = '<div class="csl-entry">吳立樂编：《浸會在華佈道百年史略》（修订版，香港：浸信會出版部，1970）。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Booked viewed online", function() {
        var output = makeBibliography(items.bookViewedOnline);
        var expected = '<div class="csl-entry">何衛中：《牧養神的群羊》（香港：金燈台，2010），http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf（2014年9月8日参阅）。</div>';
        
        assert.equal(output, expected);
    });

    it.only("Bibliography::Essay or chapter", function() {
        var output = makeBibliography(items.essayOrChapter);
        var expected = '<div class="csl-entry">黄二冬：「天下一家」，《地球村的演變》（千百文编，厦門：漢陽出版社，2003），335–350。</div>';
        
        assert.equal(output, expected);
    });

});