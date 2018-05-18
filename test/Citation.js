'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items.js');
var chai = require('chai');
var assert = chai.assert;

describe("Citation", function() {
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

    it("Citation::Chinese::Book Single Author", function() {
        var output = makeCitationCluster(items.singleAuthorChinese, "74-76");
        var expected = '杨牧谷：《泪眼先知耶利米》（台北：校园书房出版社，1989），74–76。';
        assert.equal(output, expected);
    });    

    it("Citation::English::Book Single Author", function() {
        var output = makeCitationCluster(items.singleAuthorEnglish, "268-272");
        var expected = 'Samuel P. Huntington, <i>The Clash of Civilizations</i> (London: Touchstone Books, 1998), 268–272.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Single Author with Translator", function() {
        var output = makeCitationCluster(items.singleAuthorWithTranslatorChinese, "96");
        var expected = '博能汉：《历史学》，黄晓兰译（香港：天天出版社，2003），96。';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Single Editor", function() {
        var output = makeCitationCluster(items.singleEditorChinese, "24");
        var expected = '李三谷编：《旧约小品》（台北：校园出版社，2003），24。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Book Single Editor", function() {
        var output = makeCitationCluster(items.singleEditorEnglish, "68");
        var expected = 'David Headman, ed., <i>The Love of Brothers</i> (London: Evergreen Books, 2003), 68.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Multiple Authors", function() {
        var output = makeCitationCluster(items.bookMultipleAuthorsChinese, "36");
        var expected = '杜德民，张爱杨和陈丰裕：《雨过天晴》（新加坡：和联出版社，2003），36。';
        
        assert.equal(output, expected);
    });    

    it("Citation::English::Book Multiple Authors", function() {
        var output = makeCitationCluster(items.bookMultipleAuthorsEnglish, "193");
        var expected = 'Solomon Victor, Augustine Laib, and Yancey Calson, <i>The Sun Is Black</i> (Kuala Lumpur: Doreen Publishing House, 2003), 193.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Article in a Book Edited by Others", function() {
        var output = makeCitationCluster(items.articleInABookEditedByOthersChinese, "339");
        var expected = '黄二东：「天下一家」。《地球村的演变》，千百文编（厦门：汉阳出版社，2003），339。';
        
        assert.equal(output, expected);
    });  

    it("Citation::English::Article in a Book Edited by Others", function() {
        var output = makeCitationCluster(items.articlesInABookEditedByOthersEnglish, "23");
        var expected = 'Christopher W. Hughes, "Japan and East Asia". in <i>The Japan Handbook</i>, ed. Patrick Heenan (London: Fitzroy Dearborn Publishers, 1998), 23.';
        
        assert.equal(output, expected);
    });  
    
    it("Citation::Chinese::Article in a Journal", function() {
        var output = makeCitationCluster(items.articleInAJournalChinese, "21");
        var expected = '杨品通：「神学的本质探讨」，《教会神学期刊》，14（2003 5月）：21。';
        
        assert.equal(output, expected);
    }); 

    it("Citation::English::Article in a Journal", function() {
        var output = makeCitationCluster(items.articleInAJournalEnglish, "207");
        var expected = 'Francis C. Tallman, "A History of Christian Church in Bangkok", <i>Journal of World Religions</i> 44 (October 2003): 207.';
        
        assert.equal(output, expected);
    }); 

    it("Citation::English::Article in a Magazine", function() {
        var output = makeCitationCluster(items.articleInMagazineEnglish, "24");        
        var expected = 'Bruce Weber, "The Myth Maker". <i>New York Magazine</i>, 20 October 1985, 24.';
        
        assert.equal(output, expected);
    }); 

    it("Citation::Chinese::Article in a Magazine", function() {
        var output = makeCitationCluster(items.articleInMagazineChinese, "43");         
        var expected = '李约翰：「美国华侨习俗趣谈」，《时代华侨周刊》，1957年10月30日，43。';
        
        assert.equal(output, expected);
    }); 

    it("Citation::English::Book in a Multi-Volume Series", function() {
        var output = makeCitationCluster(items.bookInAMultiVolumeSeriesEnglish, "97");        
        var expected = 'Raymond E. Brown, <i>The Gospel According to John I–XII</i>, Anchor Bible, ed. William Foxwell Albright and David Noel Freedman, vol. 29 (New York: Doubleday, 1966), 97.';
        
        assert.equal(output, expected);
    }); 
    
    it("Citation::Chinese::Article in a Dictionary", function() {
        var output = makeCitationCluster(items.articleInADictionaryChinese, "25");        
        var expected = '冯来平：「基督的宽容」，《世界神学辞典》，邱宋恩编，第三册（上海：展徒出版社），25。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Article in a Dictionary", function() {
        var output = makeCitationCluster(items.articleInADictionaryEnglish, "583");         
        var expected = 'Pheme Perkins, "Gnosticism", in <i>New Interpreter’s Dictionary of the Bible</i>, ed. Katherine Doob Sakenfeld, vol. 2 (Nashville: Abingdon Press, 2007), 583.';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Article in a Dictionary with Translator", function() {
        var output = makeCitationCluster(items.articleInADictionaryWithTranslatorEnglish, "8");
        var expected = 'B. Lang Bergman, and H. Ringgren, "xb;z"", in <i>Theological Dictionary of the Old Testament</i>, ed. G. Johannes Botterweck and Helmer Ringgren, trans. David E. Green, vol. 4 (Grand Rapids: William B. Eerdmans Publishing Company, 1980), 8.';
        
        assert.equal(output, expected);
    });    
});