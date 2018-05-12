'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items.js');
var chai = require('chai');
var assert = chai.assert;

describe("Bibliography", function() {
    var engine;
    var sys;

    before(function() {
        sys = new citeproc.simpleSys();
        //Wherever your locale and style files are. None are included with the package.
        var enUS = fs.readFileSync('./csl-locales/locales-en-US.xml', 'utf8');
        var zhCN = fs.readFileSync('./csl-locales/locales-zh-CN.xml', 'utf8');
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

    it("Bibliography::Chinese::Book Single Author", function() {
        var output = makeBibliography(items.singleAuthorChinese);
        var expected = '<div class="csl-entry">杨牧谷：《泪眼先知耶利米》。台北：校园书房出版社，1989。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book Single Author", function() {
        var output = makeBibliography(items.singleAuthorEnglish);
        var expected = '<div class="csl-entry">Huntington, Samuel P. <i>The Clash of Civilizations</i>. London: Touchstone Books, 1998.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Book Single Author with Translator", function() {
        var output = makeBibliography(items.singleAuthorWithTranslatorChinese);
        var expected = '<div class="csl-entry">博能汉：《历史学》，黄晓兰译。香港：天天出版社，2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Book Single Editor", function() {
        var output = makeBibliography(items.singleEditorChinese);
        var expected = '<div class="csl-entry">李三谷编：《旧约小品》。台北：校园出版社，2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book Single Editor", function() {
        var output = makeBibliography(items.singleEditorEnglish);
        var expected = '<div class="csl-entry">Headman, David, ed. <i>The Love of Brothers</i>. London: Evergreen Books, 2003.</div>';
        
        assert.equal(output, expected);
    });

    xit("Bibliography::English::Book Multiple Editors", function() {
        var output = makeBibliography(items.bookMultipleEditorsEnglish);
        var expected = '<div class="csl-entry">Headman, David, ed. <i>The Love of Brothers</i>. London: Evergreen Books, 2003.</div>';
        
        assert.equal(output, expected);
    });  

    it("Bibliography::Chinese::Book Multiple Authors", function() {
        var output = makeBibliography(items.bookMultipleAuthorsChinese);
        var expected = '<div class="csl-entry">杜德民，张爱杨和陈丰裕：《雨过天晴》。新加坡：和联出版社，2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book Multiple Authors", function() {
        var output = makeBibliography(items.bookMultipleAuthorsEnglish);
        var expected = '<div class="csl-entry">Victor, Solomon, Augustine Laib, and Yancey Calson. <i>The Sun Is Black</i>. Kuala Lumpur: Doreen Publishing House, 2003.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Article in a Book Edited by Others", function() {
        var output = makeBibliography(items.articleInABookEditedByOthersChinese);
        var expected = '<div class="csl-entry">黄二东：「天下一家」。《地球村的演变》，千百文编。厦门：汉阳出版社，2003。</div>';
        
        assert.equal(output, expected);
    });    

    it("Bibliography::English::Article in a Book Edited by Others", function() {
        var output = makeBibliography(items.articlesInABookEditedByOthersEnglish);
        var expected = '<div class="csl-entry">Hughes, Christopher W. "Japan and East Asia". In <i>The Japan Handbook</i>. Edited by Patrick Heenan, 23–40. London: Fitzroy Dearborn Publishers, 1998.</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::Chinese::Article in a Journal", function() {
        var output = makeBibliography(items.articleInAJournalChinese);
        var expected = '<div class="csl-entry">杨品通：「神学的本质探讨」，《教会神学期刊》，14（2003 5月）：19–24。</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::English::Article in a Journal", function() {
        var output = makeBibliography(items.articleInAJournalEnglish);
        var expected = '<div class="csl-entry">Tallman, Francis C. "A History of Christian Church in Bangkok". <i>Journal of World Religions</i> 44 (October 2003): 203–223.</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::English::Article in a Magazine", function() {
        var output = makeBibliography(items.articleInMagazineEnglish);
        var expected = '<div class="csl-entry">Weber, Bruce. "The Myth Maker". <i>New York Magazine</i>, 20 October 1985, 24–26.</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::Chinese::Article in a Magazine", function() {
        var output = makeBibliography(items.articleInMagazineChinese);
        var expected = '<div class="csl-entry">李约翰：「美国华侨习俗趣谈」，《时代华侨周刊》，1957年10月30日，43–47。</div>';
        
        assert.equal(output, expected);
    }); 

    it("Bibliography::English::Book in a Multi-Volume Series", function() {
        var output = makeBibliography(items.bookInAMultiVolumeSeriesEnglish);
        var expected = '<div class="csl-entry">Brown, Raymond E. <i>The Gospel According to John I–XII</i>. Anchor Bible. Edited by William Foxwell Albright and David Noel Freedman, vol. 29. New York: Doubleday, 1966.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Article in a Dictionary", function() {
        var output = makeBibliography(items.articleInADictionaryChinese);
        var expected = '<div class="csl-entry">冯来平：「基督的宽容」，《世界神学辞典》，邱宋恩编，第三册。上海：展徒出版社，25–26。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Article in a Dictionary", function() {
        var output = makeBibliography(items.articleInADictionaryEnglish);
        var expected = '<div class="csl-entry">Perkins, Pheme. "Gnosticism". In <i>New Interpreter’s Dictionary of the Bible</i>. Edited by Katherine Doob Sakenfeld, vol. 2, 581–584. Nashville: Abingdon Press, 2007.</div>';
        
        assert.equal(output, expected);
    });     
});