'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items-english.js');
var chai = require('chai');
var assert = chai.assert;

describe("Citation English Style Repeat", function() {
    var sys;
    var engineEnglish;
    var engineChinese;
    var styleStringEnglish;
    var styleStringChinese;

    before(function() {
        sys = new citeproc.simpleSys();

        //Wherever your locale and style files are. None are included with the package.
        var enUS = fs.readFileSync('./locales/locales-en-US.xml', 'utf8');
        var zhCN = fs.readFileSync('./locales/locales-zh-CN.xml', 'utf8');
        var zhTW = fs.readFileSync('./locales/locales-zh-TW.xml', 'utf8');
        sys.addLocale('en-US', enUS);        
        sys.addLocale('zh-CN', zhCN);
        sys.addLocale('zh-TW', zhTW);

        styleStringEnglish = fs.readFileSync('./melbourne-school-of-theology.csl', 'utf8');
        engineEnglish = sys.newEngine(styleStringEnglish, 'en-US', null);

        styleStringChinese = fs.readFileSync('./melbourne-school-of-theology-chinese.csl', 'utf8');
        engineChinese = sys.newEngine(styleStringChinese, 'zh-CN', null);
    });

    function makeCitationClusterFromEnglishStyle(items, pages) {
        sys.items = items;
        engineEnglish.updateItems(items);

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
        var newCitationCluster=
        {
            "citationItems": [ 
                {
                    "id": "ITEM-1",
                    "locator": pages,
                    "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 2
            }
        }        
        engineEnglish.processCitationCluster(citationCluster, [], []);
        var citationId = citationCluster.citationID;
        var citationPre = [[citationId, 1]];
        var result= engineEnglish.previewCitationCluster(newCitationCluster, citationPre, [], "html");
        return result;
    }

    function makeCitationClusterFromChineseStyle(items, pages) {
        sys.items = items;
        engineChinese.updateItems(items);

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
        var newCitationCluster=
        {
            "citationItems": [ 
                {
                    "id": "ITEM-1",
                    "locator": pages,
                    "label": "page"
                }
            ],
            "properties": {
                "noteIndex": 2
            }
        }        
        engineChinese.processCitationCluster(citationCluster, [], []);
        var citationId = citationCluster.citationID;
        var citationPre = [[citationId, 1]];
        var result= engineChinese.previewCitationCluster(newCitationCluster, citationPre, [], "html");
        return result;
    }

    it("Citation::Book", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.book, "41");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.book, "41");
        var expected = 'Hackett, <i>Basic Introduction</i>, 41.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Edited Book", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.editedBook, "39");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.editedBook, "39");
        var expected = 'Ward, <i>Westminster Confession</i>, 39.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Book with 2 or 3 authors (or editors)", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookWith2Or3AuthorsEditors, "12");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookWith2Or3AuthorsEditors, "12");
        var expected = 'Kittel, Hoffer, and Wright, <i>Biblical Hebrew</i>, 12.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Book with more than 3 authors (or editors)", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookWithMoreThan3AuthorsEditors, "3");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookWithMoreThan3AuthorsEditors, "3");
        var expected = 'Becking et al., <i>Babylon to Eternity</i>, 3.';

        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Classic or ancient text (whole volume)", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.classicalOrAncientTextWholeVolume, "1.74.1.3");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.classicalOrAncientTextWholeVolume, "1.74.1.3");
        var expected = 'Aquinas, <i>Summa Theologiae</i>, 1.74.1.3.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Volume from a multi volume work", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.volumeFromAMultiVolumeWork, "87–89");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.volumeFromAMultiVolumeWork, "87–89");
        var expected = 'Bloesch, <i>Essentials</i>, 2:87–89.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Commentary or book in series with series number", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.commentaryOrBookInSeriesWithSeriesNumber, "81");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.commentaryOrBookInSeriesWithSeriesNumber, "81");
        var expected = 'Braun, <i>1 Chronicles</i>, 81.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Edition other than the first", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.editionOtherThanTheFirst, "102-112");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.editionOtherThanTheFirst, "102-112");
        var expected = 'Alexander, <i>Paradise to Promised Land</i>, 102–112.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Booked viewed online", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookViewedOnline, "15");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookViewedOnline, "15");
        var expected = 'Hackett, <i>Basic Introduction</i>, 15.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::ebook", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.ebook, "451/2830");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.ebook, "451/2830");
        var expected = 'Lewis, <i>Mere Christianity</i>, 451/2830.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Essay or chapter", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.essayOrChapter, "214");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.essayOrChapter, "214");
        var expected = 'Watts, “Frame,” 214.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Article in a lexicon or theological dictionary", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.articleInALexiconOrTheologicalDictionary, "599");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.articleInALexiconOrTheologicalDictionary, "599");
        var expected = 'Flender and Brown, “Smell; Ὀσμή,” 3:599.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Encyclopedia or dictionary", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.encyclopediaOrDictionary, "601");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.encyclopediaOrDictionary, "601");
        var expected = 'Walters, “Jacob Narrative,” 3:601.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Anonymous dictionary acticle", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.anonymousDictionaryArticle, "233");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.anonymousDictionaryArticle, "233");
        var expected = 'Cross and Livingstone, “Canon of Scripture,” 233.';

        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Classical or ancient text", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.classicalOrAncientText, "19");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.classicalOrAncientText, "19");
        var expected = 'Luther, “Disputation,” 31:19.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Journal article", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.journalArticle, "79-81");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.journalArticle, "79-81");
        var expected = 'Long, “Darkness,” 79–81.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Journal article viewed online", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.journalArticleViewedOnline, "402–403");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.journalArticleViewedOnline, "402–403");
        var expected = 'Jacobson, “Freedom,” 402–403.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Magazine or newspaper article", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.magazineOrNewspaperArticle, "27");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.magazineOrNewspaperArticle, "27");
        var expected = 'Stafford, “Tale,” 27.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Thesis or dissertation", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.thesis, "51");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.thesis, "51");
        var expected = 'Giere, “New Glimpse,” 51.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Study bible note or comment", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.studyBibleNoteOrComment, "1563");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.studyBibleNoteOrComment, "1563");
        var expected = 'Wolf and Stek, “Malachi,” 1563.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Conferenec paper", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.conferencePaper, "15");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.conferencePaper, "15");
        var expected = 'Niditch, “Oral Culture,” 15.';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Podcast or online video", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.podcastOrOnlineVideo, "");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.podcastOrOnlineVideo, "");
        var expected = 'Tlozek, “25 Years after Oslo.”';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });

    it("Citation::Webpage", function() {
        var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.webpage, "");
        var outputChineseStyle = makeCitationClusterFromChineseStyle(items.webpage, "");
        var expected = 'Brown, “Creation &#38; Time.”';
        
        assert.equal(outputEnglishStyle, expected);
        assert.equal(outputChineseStyle, expected);
    });  
});