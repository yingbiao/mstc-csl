'use strict';

var fs = require('fs');
var citeproc = require("citeproc-js-node");
var items = require('./fixtures/items-english.js');
var chai = require('chai');
var assert = chai.assert;

describe("Bibliography English", function() {
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
        var expected = '<div class="csl-entry">Hackett, J. A. <i>A Basic Introduction to Biblical Hebrew, with CD</i> (Peabody, MA: Hendrickson, 2010).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Edited Book", function() {
        var output = makeBibliography(items.editedBook);
        var expected = '<div class="csl-entry">Ward, Rowland (ed.). <i>The Westminster Confession and Catechisms in Modern English</i> (Wantirna: New Melbourne Press, 2000).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Book with 2 or 3 authors (or editors)", function() {
        var output = makeBibliography(items.bookWith2Or3AuthorsEditors);
        var expected = '<div class="csl-entry">Kittel, B. P., V. Hoffer, and R. A. Wright. <i>Biblical Hebrew: A Text and Workbook</i> (New Haven: Yale University Press, 1989).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Book with more than 3 authors (or editors)", function() {
        var output = makeBibliography(items.bookWithMoreThan3AuthorsEditors);
        var expected = '<div class="csl-entry">Becking, Bob, Alex Cannegieter, Wilfred van de Poll, and Anne-Mareike Wetter. <i>From Babylon to Eternity: The Exile Remembered and Constructed in Text and Tradition</i> (BibleWorld; London: Equinox, 2009).</div>';
        //original      <div class="csl-entry">Becking, Bob, Alex Cannegieter, Wilfred van de Poll, and Anne-Mareike Wetter, <i>From Babylon to Eternity: The Exile Remembered and Constructed in Text and Tradition</i> (BibleWorld; London: Equinox, 2009).</div>
        assert.equal(output, expected);
    });

    it("Bibliography::Classic or ancient text (whole volume)", function() {
        var output = makeBibliography(items.classicalOrAncientTextWholeVolume);
        var expected = '<div class="csl-entry">Aquinas, Thomas. <i>Summa Theologiae: Latin Text and English Translation, Introductions, Notes, Appendices and Glossaries. Vol. 10: Cosmogony (1a. 65–74)</i> (edited by William A. Wallace; 60 vols.; London: Blackfriars, 1964).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Volume from a multi volume work", function() {
        var output = makeBibliography(items.volumeFromAMultiVolumeWork);
        var expected = '<div class="csl-entry">Bloesch, Donald. <i>Essentials of Evangelical Theology</i> (2 vols.; San Francisco: Harper &#38; Row, 1982).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Commentary or book in series with series number", function() {
        var output = makeBibliography(items.commentaryOrBookInSeriesWithSeriesNumber);
        var expected = '<div class="csl-entry">Braun, R. L. <i>1 Chronicles</i> (Word Biblical Commentary 14; Waco: Word, 1986).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Edition other than the first", function() {
        var output = makeBibliography(items.editionOtherThanTheFirst);
        var expected = '<div class="csl-entry">Alexander, T. Desmond. <i>From Paradise to Promised Land: An Introduction to the Pentateuch</i> (3rd ed.; Grand Rapids: Baker, 2012).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Booked viewed online", function() {
        var output = makeBibliography(items.bookViewedOnline);
        var expected = '<div class="csl-entry">Hackett, J. A. <i>A Basic Introduction to Biblical Hebrew, with CD</i> (Peabody, MA: Hendrickson, 2010), http://books.google.com.au/books?id=UuMRFJqmJ_sC (accessed 29/01/15).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::ebook", function() {
        var output = makeBibliography(items.ebook);
        var expected = '<div class="csl-entry">Lewis, C. S. <i>Mere Christianity</i> (Kindle ed.; Fount, 2010).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Essay or chapter", function() {
        var output = makeBibliography(items.essayOrChapter);
        var expected = '<div class="csl-entry">Watts, John D. W. “A Frame for the Book of the Twelve: Hosea 1–3 and Malachi,” in <i>Reading and Hearing the Book of the Twelve</i> (edited by James Nogalski and Marvin Sweeney; Atlanta: Society of Biblical Literature, 2000), 209–217.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Article in a lexicon or theological dictionary", function() {
        var output = makeBibliography(items.articleInALexiconOrTheologicalDictionary);
        var expected = '<div class="csl-entry">Flender, O. and C. Brown. “Smell; Ὀσμή,” in <i>Dictionary of New Testament Theology</i> (edited by Colin Brown; 4 vols.; Grand Rapids: Zondervan, 1992), 3:599–601.</div>';
        //original      <div class="csl-entry">Flender, O. and C. Brown, “Smell; ὀσμή,” in <i>Dictionary of New Testament Theology</i> (edited by Colin Brown; 4 vols.; Grand Rapids: Zondervan, 1992), 3:599–601.</div>
        assert.equal(output, expected);
    });

    it("Bibliography::Encyclopedia or dictionary", function() {
        var output = makeBibliography(items.encyclopediaOrDictionary);
        var expected = '<div class="csl-entry">Walters, Stanley D. “Jacob Narrative,” in <i>The Anchor Bible Dictionary</i> (edited by David Noel Freedman; 6 vols.; New York: Doubleday, 1992), 3:599–606.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Anonymous dictionary acticle", function() {
        var output = makeBibliography(items.anonymousDictionaryArticle);
        var expected = '<div class="csl-entry">Cross, F. L., and E. A. Livingstone (eds.). “Canon of Scripture,” in <i>The Oxford Dictionary of the Christian Church</i> (2nd ed.; Oxford: Oxford University Press, 1983), 232.</div>';
        //original      <div class="csl-entry">Cross, F. L., and E. A. Livingstone, eds., “Canon of Scripture” in <i>The Oxford Dictionary of the Christian Church</i> (2nd ed.; Oxford: Oxford University Press, 1983), 232.</div>
        assert.equal(output, expected);
    });

    it("Bibliography::Classical or ancient text", function() {
        var output = makeBibliography(items.classicalOrAncientText);
        var expected = '<div class="csl-entry">Luther, Martin. “Disputation on the Power and Efficacy of Indulgences,” in <i>Luther’s Works: Career of the Reformer: I</i> (edited by Harold J. Grimm; translated by C. M. Jacobs; 55 vols.; St. Louis, Mo.: Concordia, 1958), 31:17–33.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Journal article", function() {
        var output = makeBibliography(items.journalArticle);
        var expected = '<div class="csl-entry">Long, B. O. “A Darkness Between Brothers: Solomon and Adonijah,” <i>Journal for the Study of the Old Testament</i> 19 (1981), 79–94.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Journal article viewed online", function() {
        var output = makeBibliography(items.journalArticleViewedOnline);
        var expected = '<div class="csl-entry">Jacobson, Rolf. “A Freedom That Is No Freedom: Jeremiah 34 and the Sabbatical Principle,” <i>Word &#38; World</i> 22, no. 4 (2002), http://web.a.ebscohost.com/ehost/pdfviewer/ (accessed 29/01/15), 396–405.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Magazine or newspaper article", function() {
        var output = makeBibliography(items.magazineOrNewspaperArticle);
        var expected = '<div class="csl-entry">Stafford, Tim. “A Tale of Two Scientists,” <i>Christianity Today</i> (July 2012), 22–29.</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Thesis or dissertation", function() {
        var output = makeBibliography(items.thesis);
        var expected = '<div class="csl-entry">Giere, Samuel D. “A New Glimpse of Day One: An Intertextual History of Genesis 1.1–5 in Hebrew and Greek Texts up to 200 CE” (The University of St. Andrews: Ph.D. dissertation, 2007).</div>';
        
        assert.equal(output, expected);
    });

    it("Bibliography::Study bible note or comment", function() {
        var output = makeBibliography(items.studyBibleNoteOrComment);
        var expected = '<div class="csl-entry">Wolf, Herbert and John H. Stek. “Introduction: Malachi,” in <i>The NIV Study Bible</i> (edited by Kenneth L. Barker; 2011th ed.; Grand Rapids: Zondervan, 2011), 1561–1564.</div>';
        //original      <div class="csl-entry">Wolf, Herbert and John H. Stek, “Introduction: Malachi,” in <i>The NIV Study Bible</i> (edited by Kenneth L. Barker; 2011 edition; Grand Rapids: Zondervan, 2011), 1561–1564.</div>
        assert.equal(output, expected);
    });

    it("Bibliography::Conferenec paper", function() {
        var output = makeBibliography(items.conferencePaper);
        var expected = '<div class="csl-entry">Niditch, Susan. “Oral Culture and Written Documents” (paper presented at the annual meeting of the New England Region of the SBL, Worcester, Mass., 25 March 1994).</div>';

        assert.equal(output, expected);
    });

    it("Bibliography::Podcast or online video", function() {
        var output = makeBibliography(items.podcastOrOnlineVideo);
        var expected = '<div class="csl-entry">Tlozek, Eric. “25 Years after Oslo, the Middle East Peace Process Is in Pieces,” <i>The World Today</i> (Podcast audio), http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450.</div>';
        //  expected = '<div class="csl-entry">Tlozek, Eric. “25 years after Oslo, the Middle East peace process is in pieces,” <i>The World Today</i> (Podcast audio; Thursday 13 Sept, 2018), http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450.</div>';
        assert.equal(output, expected);
    });

    it("Bibliography::Webpage", function() {
        var output = makeBibliography(items.webpage);
        var expected = '<div class="csl-entry">Brown, Andrew. “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i> (3 May, 2017), http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/ (accessed 29/01/18).</div>';
        //  expected = '<div class="csl-entry">Brown, Andrew. “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i> (Henry Center for Theological Understanding), 3 May 2017, http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/ (accessed 29/1/18).</div>';
        assert.equal(output, expected);
    });
});