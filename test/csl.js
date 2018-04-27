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

    it("Book: Single Author Chinese", function() {
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
        var expected = '<div class="csl-entry">杨牧谷：《泪眼先知耶利米》。台北: 校园书房出版社, 1989。</div>';
        
        assert.equal(output, expected);
    });

    it("Book: Single Author English", function() {
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

    it("Book: Single Author with Translator Chinese", function() {
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
        var expected = '<div class="csl-entry">博能汉：《历史学》，黄晓兰译。香港: 天天出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Book: Single Editor Chinese", function() {
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
        var expected = '<div class="csl-entry">李三谷编：《旧约小品》。台北: 校园出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Book: Single Editor English", function() {
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

    xit("Book: Multiple Editors English", function() {
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

    it("Book: Multiple Authors Chinese", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "雨过天晴",
                "author": [
                    {
                        "family": "杜",
                        "given": "德民",
                    },
                    {
                        "family": "张",
                        "given": "爱杨",
                    },
                    {
                        "family": "陈",
                        "given": "丰裕",
                    }
                ],
                "publisher": "和联出版社",
                "publisher-place": "新加坡",
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
        var expected = '<div class="csl-entry">杜德民, 张爱杨和陈丰裕：《雨过天晴》。新加坡: 和联出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });

    it("Book: Multiple Authors English", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "The Sun Is Black",
                "author": [
                    {
                        "family": "Victor",
                        "given": "Solomon",
                    },
                    {
                        "family": "Laib",
                        "given": "Augustine",
                    },
                    {
                        "family": "Calson",
                        "given": "Yancey",
                    }
                ],
                "publisher": "Doreen Publishing House",
                "publisher-place": "Kuala Lumpur",
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
        var expected = '<div class="csl-entry">Victor, Solomon, Augustine Laib, and Yancey Calson. <i>The Sun Is Black</i>. Kuala Lumpur: Doreen Publishing House, 2003.</div>';
        
        assert.equal(output, expected);
    });

    it("Article in a Book Edited by Others Chinese", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "天下一家",
                "author": [
                    {
                        "family": "黄",
                        "given": "二东",
                    }
                ],
                "editor":[
                    {
                        "family": "千",
                        "given": "百文",
                    }
                ],
                "container-title":"地球村的演变",
                "publisher": "汉阳出版社",
                "publisher-place": "厦门",
                "language":"zh-CN",
                "issued": {
                    "date-parts": [
                        [
                            2003
                        ]
                    ]
                },
                "type": "chapter"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">黄二东：「天下一家」。《地球村的演变》，千百文编。厦门: 汉阳出版社, 2003。</div>';
        
        assert.equal(output, expected);
    });    

    it("Article in a Book Edited by Others English", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "Japan and East Asia",
                "author": [
                    {
                        "family": "Hughes",
                        "given": "Christopher W.",
                    }
                ],
                "editor":[
                    {
                        "family": "Heenan",
                        "given": "Patrick",
                    }
                ],
                "container-title":"The Japan Handbook",
                "publisher": "Fitzroy Dearborn Publishers",
                "publisher-place": "London",
                "language":"en-US",
                "issued": {
                    "date-parts": [
                        [
                            1998
                        ]
                    ]
                },
                "page": "23-40",
                "type": "chapter"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">Hughes, Christopher W. "Japan and East Asia". In <i>The Japan Handbook</i>. Edited by Patrick Heenan, 23–40. London: Fitzroy Dearborn Publishers, 1998.</div>';
        
        assert.equal(output, expected);
    }); 

    it("Article in a Journal Chinese", function() {
        var items = {
            "ITEM-1": {
                "id": "ITEM-1",
                "title": "神学的本质探讨",
                "author": [
                    {
                        "family": "杨",
                        "given": "品通",
                    }
                ],
                "container-title":"教会神学期刊",
                "language":"zh-CN",
                "issue":"14",
                "issued": {
                    "date-parts": [
                        [
                            2003,
                            5
                        ]
                    ]
                },
                "page": "19-24",
                "type": "article-journal"
            }
        };

        var output = makeBibliography(items);
        var expected = '<div class="csl-entry">杨品通：「神学的本质探讨」，《教会神学期刊》，14 (2003 5月)：19-24。</div>';
        
        assert.equal(output, expected);
    }); 
});