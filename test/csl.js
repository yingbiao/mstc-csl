'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var chai = require('chai');
var assert = chai.assert;

describe("MSTC CSL", function() {
    var engine;
    var sys;

    beforeEach(function() {
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

    it("should render single author Chinese", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "泪眼先知耶利米",
                "author": [
                    {
                        "family": "杨",
                        "given": "牧谷"
                    }
                ],
                "publisher": "校园书房出版社",
                "publisher-place": "台北",
                "language":"zh-CN",
                "issued": {
                    "date-parts": [
                        [
                            1989
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">杨牧谷： 《泪眼先知耶利米》。台北: 校园书房出版社, 1989。</div>';
        
        assert.equal(output, expected);
    });

    it("should render single author English", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "The Clash of Civilizations",
                "author": [
                    {
                        "family": "Huntington",
                        "given": "Samuel P."
                    }
                ],
                "publisher": "Touchstone Books",
                "publisher-place": "London",
                "language":"en-US",
                "issued": {
                    "date-parts": [
                        [
                            1998
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">Huntington, Samuel P. <i>The Clash of Civilizations</i>. London: Touchstone Books, 1998.</div>';
        
        assert.equal(output, expected);
    });

    it("should render single author with translator", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "历史学",
                "author": [
                    {
                        "family": "博",
                        "given": "能汉"
                    }
                ],
                "translator": [
                    {
                        "family": "黄",
                        "given": "晓兰",
                    }
                ],
                "publisher": "天天出版社",
                "publisher-place": "香港",
                "language":"zh-CN",
                "issued": {
                    "date-parts": [
                        [
                            2003
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">博能汉： 《历史学》 ，黄晓兰译。香港: 天天出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });

    it("should render single editor Chinese", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "旧约小品",
                "editor": [
                    {
                        "family": "李",
                        "given": "三谷"
                    }
                ],
                "publisher": "校园出版社",
                "publisher-place": "台北",
                "language":"zh-CN",
                "issued": {
                    "date-parts": [
                        [
                            2003
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">李三谷编： 《旧约小品》。台北: 校园出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });

    it("should render single editor English", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "The Love of Brothers",
                "editor": [
                    {
                        "family": "Headman",
                        "given": "David",
                        "static-ordering": false
                    }
                ],
                "publisher": "Evergreen Books",
                "publisher-place": "London",
                "language":"en-US",
                "issued": {
                    "date-parts": [
                        [
                            2003
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">Headman, David, ed. <i>The Love of Brothers</i>. London: Evergreen Books, 2003.</div>';
        
        assert.equal(output, expected);
    });

    xit("should render multiple editors English", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "Novum Testamentum Graece",
                "editor": [
                    {
                        "family": "Barbara",
                        "given": "",
                    },
                    {
                        "family": "Aland",
                        "given": "Kurt",
                    },
                    {
                        "family": "Karavidopoulos",
                        "given": "Johannes",
                    },
                    {
                        "family": "Martini",
                        "given": "Carlo M.",
                    },
                    {
                        "family": "Metzger",
                        "given": "Bruce M.",
                    }
                ],
                "edition":"27th rev.",
                "publisher": "Deutsche Bibelgesellschaft",
                "publisher-place": "Stuttgart",
                "language":"en-US",
                "issued": {
                    "date-parts": [
                        [
                            1993
                        ]
                    ]
                },
                "type": "book"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">Headman, David, ed. <i>The Love of Brothers</i>. London: Evergreen Books, 2003.</div>';
        
        assert.equal(output, expected);
    });  
});