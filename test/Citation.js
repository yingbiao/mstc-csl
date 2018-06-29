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

    it("Citation::English::Book Multiple Editors", function() {
        var output = makeCitationCluster(items.bookMultipleEditorsEnglish, "120");
        var expected = 'Barbara, Kurt Aland, Johannes Karavidopoulos et al., eds., <i>Novum Testamentum Graece</i>. 27th rev. ed. (Stuttgart: Deutsche Bibelgesellschaft, 1993), 120.';
        
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
    
    xit("Citation::English::Book in a Multi-Volume Series 2", function() {
        var output = makeBibliography(items.bookInAMultiVolumeSeriesEnglish2);
        var expected = '<div class="csl-entry">Weiss, Hans-Frederich. <i>Der Brief an die Hebräer: Übersetzt und Erklärt</i>. 15th ed. Kritisch-exegetischer Kommentar über das Neue Testament. Edited by Heinrich August Wilhelm Meyer and Ferdinand Hahn, vol. 13. Göttingen: Vandenhoeck &#38; Ruprecht, 1991.</div>';
        
        assert.equal(output, expected);
    });

    xit("Citation::English::Book in a Multi-Volume Series 3", function() {
        var output = makeBibliography(items.bookInAMultiVolumeSeriesEnglish3);
        var expected = '<div class="csl-entry">Thurén, Lauri. <i>Argument and Theology in 1 Peter: The Origins of Christian Paraenesis</i>. Journal for the Study of the New Testament: Supplement Series. Edited by Stanley E. Porter et al., vol. 114. Sheffield: Sheffield Academic Press, 1995.</div>';
        
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

    xit("Citation::English::Article in a Dictionary with Translator 2", function() {
        var output = makeBibliography(items.articleInADictionaryWithTranslatorEnglish2);
        var expected = '<div class="csl-entry">Behn, Johannes. "qu,w." In <i>Theological Dictionary of the New Testament</i>. Edited by Gerhard Kittel. Translated and edited by Geoffrey W. Bromiley, vol. 3, 180-190. Grand Rapids: Wm. B. Eerdmans Publishing Company, 1965.</div>';
        
        assert.equal(output, expected);
    });

    it("Citation::Chiense::Report", function() {
        var output = makeCitationCluster(items.reportChinese, "20");
        var expected = '陈泽崇：「执行部呈年会报告书」，《2001砂拉越华人年议会第二十六届年议会会议记录》，许必斌编（诗巫：砂拉越华人年议会，2001），20。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Report", function() {
        var output = makeCitationCluster(items.reportEnglish, "69");
        var expected = 'Ivy Chou, "Board of Lay Training", in <i>Minutes of 12th Session of the Sarawak Annual Conference of the Methodist Church 1963</i> (Sibu: The Methodist Church, 1963), 69.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chiense::Statistics", function() {
        var output = makeCitationCluster(items.statisticsChinese, "209");
        var expected = '澳洲统计部：「1997年墨尔本华人人口的增长情况」，《澳洲人口普查1997》（堪培拉：澳洲官方出版社，1998），209。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Statistics", function() {
        var output = makeCitationCluster(items.statisticsEnglish, "58");
        var expected = 'Department of Statistics Malaysia, "Total Polulation by Age Group: Sarawak", in <i>Population and Housing Census of Malaysia 2000</i> (Kuala Lumpur: Government Printing Office, 2000), 58.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::Newspaper", function() {
        var output = makeCitationCluster(items.newpaperChinese, "A4");
        var expected = '黄孟礼：「美以美是新福州垦场的催化剂」，《卫理报》，2000年11月30日，A4。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Newspaper", function() {
        var output = makeCitationCluster(items.newpaperEnglish, "12");
        var expected = 'Steve Aston, "The Stars of Tomorrow", <i>The New York Times</i>, 4 January 1987, 12.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::Thesis", function() {
        var output = makeCitationCluster(items.thesisChinese, "10");
        var expected = '刘庸：「基督教教育在南非华人教会群体中的发展模式」，（博士论文，太平洋天国神学院，2000），10。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Thesis", function() {
        var output = makeCitationCluster(items.thesisEnglish, "90");
        var expected = 'Lancer Austin, "The Quest for a Historical Jesus in Sarawak" (Ph.D. diss., University of Chicago, 1996), 90.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::Webpage", function() {
        var output = makeCitationCluster(items.webpageChinese, "");
        var expected = '刘小枫：「历史玩完了？」，《汉语基督教文化研究所》，取自 http://www.iscs.org.hk/article18.htm 网址，2002年8月5日参阅。';
        
        assert.equal(output, expected);
    }); 
    
    it("Citation::English::Webpage", function() {
        var output = makeCitationCluster(items.websiteEnglish, "");
        var expected = 'Michael Pingka, "Flowers in Sarawak", <i>Sarawak Flower Journal</i>; available from http://www.sarawakflower/ggg.html (accessed 14 August 2002).';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::Interview", function() {
        var output = makeCitationCluster(items.interviewChinese, "");
        var expected = '叶少华，成团主席，由笔者采访，2003年4月9日，墨尔本，卡带录音。';
        
        assert.equal(output, expected);
    }); 
    
    it("Citation::English::Interview", function() {
        var output = makeCitationCluster(items.interviewEnglish, "");
        var expected = 'Steven Albert mayor of Kuching, Interview by author, 23 September 2003, Sibu, East Malaysia, Tape recording.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::Letter", function() {
        var output = makeCitationCluster(items.letterChinese, "");
        var expected = '田德建，致函于方重名，1876年10月25日，抄本存于北京大学图书馆特藏部，中国北京。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::Letter", function() {
        var output = makeCitationCluster(items.letterEnglish, "");
        var expected = 'James Matthew Hoover, to A. B. Leonard, 13 March 1899, transcript in Hoover, J.M. - Malaya 1899, Missionary Files 1, United Methodist Church Archives, Madison, NJ, USA.';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::VCD", function() {
        var output = makeCitationCluster(items.vcdChinese, "");
        var expected = '唐明清：「启示录的七个教会」，《新约圣经CD版》（台北：校园出版社，2001）。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::VCD", function() {
        var output = makeCitationCluster(items.vcdEnglish, "");
        var expected = 'King Morris, <i>The Chinese Mind</i>, [CD-ROM] (Kuala Lumpur: The Chinese Press, 2002).';
        
        assert.equal(output, expected);
    });

    it("Citation::Chinese::CD", function() {
        var output = makeCitationCluster(items.cdChinese, "");
        var expected = '唐明清：「启示录的七个教会」，《新约圣经CD版》（台北：校园出版社，2001）。';
        
        assert.equal(output, expected);
    });

    it("Citation::English::CD", function() {
        var output = makeCitationCluster(items.cdEnglish, "");
        var expected = 'King Morris, <i>The Chinese Mind</i>, [CD-ROM] (Kuala Lumpur: The Chinese Press, 2002).';
        
        assert.equal(output, expected);
    });
});