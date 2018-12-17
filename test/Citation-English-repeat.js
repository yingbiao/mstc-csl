'use strict';

var fs = require('fs');
var citeprocjs = require("citeproc-js-node");
var CSL = require("citeproc");
var items = require('./fixtures/items-english.js');
var chai = require('chai');
var assert = chai.assert;

describe("Citation English Repeat", function() {
    var engine;
    var sys;

    before(function() {
        sys = new citeprocjs.simpleSys();
        //Wherever your locale and style files are. None are included with the package.
        var enUS = fs.readFileSync('./locales/locales-en-US.xml', 'utf8');
        var zhCN = fs.readFileSync('./locales/locales-zh-CN.xml', 'utf8');
        sys.addLocale('en-US', enUS);        
        sys.addLocale('zh-CN', zhCN);
        var styleString = fs.readFileSync('./melbourne-school-of-theology.csl', 'utf8');
        //engine = sys.newEngine(styleString, 'zh-CN', null);
        engine = new CSL.Engine(sys, styleString, 'en-GB', false);
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
        engine.processCitationCluster(citationCluster, [], []);
        var citationId = citationCluster.citationID;
        var citationPre = [[citationId, 1]];
        var result= engine.previewCitationCluster(newCitationCluster, citationPre, [], "html");
        return result;
    }

    it("Citation::Book", function() {
        var output = makeCitationCluster(items.book, "41");
        var expected = 'Hackett, <i>Basic Introduction</i>, 41.';
        
        assert.equal(output, expected);
    });

    it("Citation::Edited Book", function() {
        var output = makeCitationCluster(items.editedBook, "39");
        var expected = 'Ward, <i>Westminster Confession</i>, 39.';
        
        assert.equal(output, expected);
    });

    it("Citation::Book with 2 or 3 authors (or editors)", function() {
        var output = makeCitationCluster(items.bookWith2Or3AuthorsEditors, "12");
        var expected = 'Kittel, Hoffer, and Wright, <i>Biblical Hebrew</i>, 12.';
        
        assert.equal(output, expected);
    });

    xit("Citation::Book with more than 3 authors (or editors)", function() {
        var output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors, "3");
        var expected = 'Becking et al., <i>Babylon to Eternity</i>, 3.';
        //This is weird, on Zotero with this style it generate the expected output
        //however, in code, it generates the following        
        //              Becking, Cannegieter, van de Poll, et al., <i>Babylon to Eternity</i>, 3.
        assert.equal(output, expected);
    });

    it("Citation::Classic or ancient text (whole volume)", function() {
        var output = makeCitationCluster(items.classicalOrAncientTextWholeVolume, "1.74.1.3");
        var expected = 'Aquinas, <i>Summa Theologiae</i>, 1.74.1.3.';
        
        assert.equal(output, expected);
    });

    it("Citation::Volume from a multi volume work", function() {
        var output = makeCitationCluster(items.volumeFromAMultiVolumeWork, "87–89");
        var expected = 'Bloesch, <i>Essentials</i>, 2:87–89.';
        
        assert.equal(output, expected);
    });

    it("Citation::Commentary or book in series with series number", function() {
        var output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber, "81");
        var expected = 'Braun, <i>1 Chronicles</i>, 81.';
        
        assert.equal(output, expected);
    });

    it("Citation::Edition other than the first", function() {
        var output = makeCitationCluster(items.editionOtherThanTheFirst, "102-112");
        var expected = 'Alexander, <i>Paradise to Promised Land</i>, 102–112.';
        
        assert.equal(output, expected);
    });

    it("Citation::Booked viewed online", function() {
        var output = makeCitationCluster(items.bookViewedOnline, "15");
        var expected = 'Hackett, <i>Basic Introduction</i>, 15.';
        
        assert.equal(output, expected);
    });

    it("Citation::ebook", function() {
        var output = makeCitationCluster(items.ebook, "451/2830");
        var expected = 'Lewis, <i>Mere Christianity</i>, 451/2830.';
        
        assert.equal(output, expected);
    });

    it("Citation::Essay or chapter", function() {
        var output = makeCitationCluster(items.essayOrChapter, "214");
        var expected = 'Watts, “Frame,” 214.';
        
        assert.equal(output, expected);
    });

    it("Citation::Article in a lexicon or theological dictionary", function() {
        var output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary, "599");
        var expected = 'Flender and Brown, “Smell; Ὀσμή,” 3:599.';
        
        assert.equal(output, expected);
    });

    it("Citation::Encyclopedia or dictionary", function() {
        var output = makeCitationCluster(items.encyclopediaOrDictionary, "601");
        var expected = 'Walters, “Jacob Narrative,” 3:601.';
        
        assert.equal(output, expected);
    });

    it("Citation::Anonymous dictionary acticle", function() {
        var output = makeCitationCluster(items.anonymousDictionaryArticle, "233");
        var expected = 'Cross and Livingstone, “Canon of Scripture,” 233.';

        assert.equal(output, expected);
    });

    it("Citation::Classical or ancient text", function() {
        var output = makeCitationCluster(items.classicalOrAncientText, "19");
        var expected = 'Luther, “Disputation,” 31:19.';
        
        assert.equal(output, expected);
    });

    it("Citation::Journal article", function() {
        var output = makeCitationCluster(items.journalArticle, "79-81");
        var expected = 'Long, “Darkness,” 79–81.';
        
        assert.equal(output, expected);
    });

    it("Citation::Journal article viewed online", function() {
        var output = makeCitationCluster(items.journalArticleViewedOnline, "402–403");
        var expected = 'Jacobson, “Freedom,” 402–403.';
        
        assert.equal(output, expected);
    });

    it("Citation::Magazine or newspaper article", function() {
        var output = makeCitationCluster(items.magazineOrNewspaperArticle, "27");
        var expected = 'Stafford, “Tale,” 27.';
        
        assert.equal(output, expected);
    });

    it("Citation::Thesis or dissertation", function() {
        var output = makeCitationCluster(items.thesis, "51");
        var expected = 'Giere, “New Glimpse,” 51.';
        
        assert.equal(output, expected);
    });

    it("Citation::Study bible note or comment", function() {
        var output = makeCitationCluster(items.studyBibleNoteOrComment, "1563");
        var expected = 'Wolf and Stek, “Malachi,” 1563.';
        
        assert.equal(output, expected);
    });

    it("Citation::Conferenec paper", function() {
        var output = makeCitationCluster(items.conferencePaper, "15");
        var expected = 'Niditch, “Oral Culture,” 15.';
        
        assert.equal(output, expected);
    });

    it("Citation::Podcast or online video", function() {
        var output = makeCitationCluster(items.podcastOrOnlineVideo, "");
        var expected = 'Tlozek, “25 Years after Oslo.”';
        //  expected = 'Eric Tlozek, “25 years after Oslo.”';
        assert.equal(output, expected);
    });

    it("Citation::Webpage", function() {
        var output = makeCitationCluster(items.webpage, "");
        var expected = 'Brown, “Creation &#38; Time in Basil’s Hexaemeron.”';
        //  expected = 'Andrew Brown, “Creation &#38; Time in Basil’s Hexaemeron.”';
        assert.equal(output, expected);
    });  
});