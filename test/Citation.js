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

    function makeCitationCluster(items, citation) {
        sys.items = items;
        
        var citation = engine.previewCitationCluster(citation, [], [], "html");
        
        return citation;
    }

    it("Citation::Chinese::Book Single Author", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "74-76",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.singleAuthorChinese, citation);
        var expected = '杨牧谷：《泪眼先知耶利米》（台北：校园书房出版社，1989），74–76。';
        assert.equal(output, expected);
    });    

    it("Citation::English::Book Single Author", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "268-272",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.singleAuthorEnglish, citation);
        var expected = 'Samuel P. Huntington, <i>The Clash of Civilizations</i> (London: Touchstone Books, 1998), 268–272.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Single Author with Translator", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "96",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.singleAuthorWithTranslatorChinese, citation);
        var expected = '博能汉：《历史学》，黄晓兰译（香港：天天出版社，2003），96。';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Single Editor", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "24",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.singleEditorChinese, citation);
        var expected = '李三谷编：《旧约小品》（台北：校园出版社，2003），24。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Book Single Editor", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "68",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.singleEditorEnglish, citation);
        var expected = 'David Headman, ed., <i>The Love of Brothers</i> (London: Evergreen Books, 2003), 68.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Book Multiple Authors", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "36",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.bookMultipleAuthorsChinese, citation);
        var expected = '杜德民，张爱杨和陈丰裕：《雨过天晴》（新加坡：和联出版社，2003），36。';
        
        assert.equal(output, expected);
    });    

    it("Citation::English::Book Multiple Authors", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "193",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.bookMultipleAuthorsEnglish, citation);
        var expected = 'Solomon Victor, Augustine Laib, and Yancey Calson, <i>The Sun Is Black</i> (Kuala Lumpur: Doreen Publishing House, 2003), 193.';
        
        assert.equal(output, expected);
    });    

    it("Citation::Chinese::Article in a Book Edited by Others", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "339",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.articleInABookEditedByOthersChinese, citation);
        var expected = '黄二东：「天下一家」。《地球村的演变》，千百文编（厦门：汉阳出版社，2003），339。';
        
        assert.equal(output, expected);
    });  

    it("Citation::English::Article in a Book Edited by Others", function() {
        var citation=
        {
            "citationItems": [ 
                {
                "id": "ITEM-1",
                "locator": "23",
                "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 1
            }
        }
        
        var output = makeCitationCluster(items.articlesInABookEditedByOthersEnglish, citation);
        var expected = 'Christopher W. Hughes, "Japan and East Asia". in <i>The Japan Handbook</i>, ed. Patrick Heenan (London: Fitzroy Dearborn Publishers, 1998), 23.';
        
        assert.equal(output, expected);
    });     
});