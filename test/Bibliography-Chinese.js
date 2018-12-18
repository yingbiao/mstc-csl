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

    it("Bibliography::English::Book in a Multi-Volume Series 2", function() {
        var output = makeBibliography(items.bookInAMultiVolumeSeriesEnglish2);
        var expected = '<div class="csl-entry">Weiss, Hans-Frederich. <i>Der Brief an die Hebräer: Übersetzt und Erklärt</i>. 15th ed. Kritisch-exegetischer Kommentar über das Neue Testament. Edited by Heinrich August Wilhelm Meyer and Ferdinand Hahn, vol. 13. Göttingen: Vandenhoeck &#38; Ruprecht, 1991.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Book in a Multi-Volume Series 3", function() {
        var output = makeBibliography(items.bookInAMultiVolumeSeriesEnglish3);
        var expected = '<div class="csl-entry">Thurén, Lauri. <i>Argument and Theology in 1 Peter: The Origins of Christian Paraenesis</i>. Journal for the Study of the New Testament: Supplement Series. Edited by Stanley E. Porter et al., vol. 114. Sheffield: Sheffield Academic Press, 1995.</div>';
        
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
    
    it("Bibliography::English::Article in a Dictionary with Translator", function() {
        var output = makeBibliography(items.articleInADictionaryWithTranslatorEnglish);
        var expected = '<div class="csl-entry">Bergman, B. Lang, and H. Ringgren. "xb;z"". In <i>Theological Dictionary of the Old Testament</i>. Edited by G. Johannes Botterweck and Helmer Ringgren. Translated by David E. Green, vol. 4, 8–29. Grand Rapids: William B. Eerdmans Publishing Company, 1980.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Article in a Dictionary with Translator 2", function() {
        var output = makeBibliography(items.articleInADictionaryWithTranslatorEnglish2);
        var expected = '<div class="csl-entry">Behn, Johannes. "qu,w". In <i>Theological Dictionary of the New Testament</i>. Edited by Gerhard Kittel and Geoffrey W. Bromiley. Translated by Geoffrey W. Bromiley, vol. 3, 180–190. Grand Rapids: Wm. B. Eerdmans Publishing Company, 1965.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chiense::Report", function() {
        var output = makeBibliography(items.reportChinese);
        var expected = '<div class="csl-entry">陈泽崇：「执行部呈年会报告书」，《2001砂拉越华人年议会第二十六届年议会会议记录》，许必斌编，18–22。诗巫：砂拉越华人年议会，2001。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Report", function() {
        var output = makeBibliography(items.reportEnglish);
        var expected = '<div class="csl-entry">Chou, Ivy. "Board of Lay Training". In <i>Minutes of 12th Session of the Sarawak Annual Conference of the Methodist Church 1963</i>, 69–70. Sibu: The Methodist Church, 1963.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chiense::Statistics", function() {
        var output = makeBibliography(items.statisticsChinese);
        var expected = '<div class="csl-entry">澳洲统计部：「1997年墨尔本华人人口的增长情况」，《澳洲人口普查1997》，209–210。堪培拉：澳洲官方出版社，1998。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Statistics", function() {
        var output = makeBibliography(items.statisticsEnglish);
        var expected = '<div class="csl-entry">Department of Statistics Malaysia. "Total Polulation by Age Group: Sarawak". In <i>Population and Housing Census of Malaysia 2000</i>, 58–60. Kuala Lumpur: Government Printing Office, 2000.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Newspaper", function() {
        var output = makeBibliography(items.newpaperChinese);
        var expected = '<div class="csl-entry">黄孟礼：「美以美是新福州垦场的催化剂」，《卫理报》，2000年11月30日，A4–A5。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Newspaper", function() {
        var output = makeBibliography(items.newpaperEnglish);
        var expected = '<div class="csl-entry">Aston, Steve. "The Stars of Tomorrow". <i>The New York Times</i>. 4 January 1987, 12.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Thesis", function() {
        var output = makeBibliography(items.thesisChinese);
        var expected = '<div class="csl-entry">刘庸：「基督教教育在南非华人教会群体中的发展模式」，博士论文，太平洋天国神学院，2000。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Thesis", function() {
        var output = makeBibliography(items.thesisEnglish);
        var expected = '<div class="csl-entry">Austin, Lancer. "The Quest for a Historical Jesus in Sarawak". Ph.D. diss., University of Chicago, 1996.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Webpage", function() {
        var output = makeBibliography(items.webpageChinese);
        var expected = '<div class="csl-entry">刘小枫：「历史玩完了？」，《汉语基督教文化研究所》，取自 http://www.iscs.org.hk/article18.htm 网址。2002年8月5日参阅。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Webpage", function() {
        var output = makeBibliography(items.websiteEnglish);
        var expected = '<div class="csl-entry">Pingka, Michael. "Flowers in Sarawak" <i>Sarawak Flower Journal</i>. Available from http://www.sarawakflower/ggg.html. Accessed 14 August 2002.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Interview", function() {
        var output = makeBibliography(items.interviewChinese);
        var expected = '<div class="csl-entry">叶少华，成团主席。由笔者采访，2003年4月9日，墨尔本，卡带录音。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Interview", function() {
        var output = makeBibliography(items.interviewEnglish);
        var expected = '<div class="csl-entry">Albert, Steven, mayor of Kuching. Interview by author, 23 September 2003, Sibu, East Malaysia, Tape recording.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Letter", function() {
        var output = makeBibliography(items.letterChinese);
        var expected = '<div class="csl-entry">田德建，致函于方重名，1876年10月25日，抄本存于北京大学图书馆特藏部，中国北京。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::Letter", function() {
        var output = makeBibliography(items.letterEnglish);
        var expected = '<div class="csl-entry">Hoover, James Matthew, to A. B. Leonard, 13 March 1899. Transcript in Hoover, J.M. - Malaya 1899, Missionary Files 1, United Methodist Church Archives, Madison, NJ, USA.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::VCD", function() {
        var output = makeBibliography(items.vcdChinese);
        var expected = '<div class="csl-entry">唐明清：「启示录的七个教会」，《新约圣经CD版》。台北：校园出版社，2001。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::VCD", function() {
        var output = makeBibliography(items.vcdEnglish);
        var expected = '<div class="csl-entry">Morris, King. <i>The Chinese Mind</i>. [CD-ROM]. Kuala Lumpur: The Chinese Press, 2002.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::CD", function() {
        var output = makeBibliography(items.cdChinese);
        var expected = '<div class="csl-entry">唐明清：「启示录的七个教会」，《新约圣经CD版》。台北：校园出版社，2001。</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::CD", function() {
        var output = makeBibliography(items.cdEnglish);
        var expected = '<div class="csl-entry">Morris, King. <i>The Chinese Mind</i>. [CD-ROM]. Kuala Lumpur: The Chinese Press, 2002.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::English::BookWithNoSeriesAuthor", function() {
        var output = makeBibliography(items.bookWithNoSeriesAuthor);
        var expected = '<div class="csl-entry">Rowley, Harold Henry. <i>The Book of Job</i>. New century Bible commentary. Grand Rapids, Mich: Eerdmans, 1980.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Chinese::Book Single Author with Editor", function() {
        var output = makeBibliography(items.bookSingleAuthorWithEditorChinese);
        var expected = '<div class="csl-entry">唐佑之：《天道圣经注释：约伯记上》，鲍会园编。香港九龙：天道书楼有限公司，1994。</div>';
        
        assert.equal(output, expected);
    });
});