"use strict";

var fs = require("fs");
var citeproc = require("citeproc-js-node");
var items = require("./fixtures/items-english.js");
var chai = require("chai");
var assert = chai.assert;

describe.only("Bibliography English", function () {
	var sys;
	var engineEnglish;
	var engineChinese;
	var styleStringEnglish;
	var styleStringChinese;

	before(function () {
		sys = new citeproc.simpleSys();

		var enUS = fs.readFileSync("./locales/locales-en-US.xml", "utf8");
		var zhCN = fs.readFileSync("./locales/locales-zh-CN.xml", "utf8");
		var zhTW = fs.readFileSync("./locales/locales-zh-TW.xml", "utf8");
		sys.addLocale("en-US", enUS);
		sys.addLocale("zh-CN", zhCN);
		sys.addLocale("zh-TW", zhTW);

		styleStringEnglish = fs.readFileSync("./melbourne-school-of-theology.csl", "utf8");
		engineEnglish = sys.newEngine(styleStringEnglish, "en-US", null);

		styleStringChinese = fs.readFileSync("./melbourne-school-of-theology-chinese.csl", "utf8");
		engineChinese = sys.newEngine(styleStringChinese, "zh-CN", null);
	});

	function makeBibliographyFromEnglishStyle(items) {
		sys.items = items;
		engineEnglish.updateItems(Object.keys(items));

		var bib = engineEnglish.makeBibliography();
		return bib[1][0].trim();
	}

	function makeBibliographyFromChineseStyle(items) {
		sys.items = items;
		engineChinese.updateItems(Object.keys(items));

		var bib = engineChinese.makeBibliography();
		return bib[1][0].trim();
	}

	it("Bibliography::Book", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.book);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.book);
		var expected = '<div class="csl-entry">Hackett, J. A. <i>A Basic Introduction to Biblical Hebrew, with CD</i>. Peabody, MA: Hendrickson, 2010.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Edited Book", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.editedBook);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.editedBook);
		var expected = '<div class="csl-entry">Ward, Rowland, ed. <i>The Westminster Confession and Catechisms in Modern English</i>. Wantirna: New Melbourne Press, 2000.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Book with 2 or 3 authors (or editors)", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.bookWith2Or3AuthorsEditors);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.bookWith2Or3AuthorsEditors);
		var expected = '<div class="csl-entry">Kittel, B. P., V. Hoffer, and R. A. Wright. <i>Biblical Hebrew: A Text and Workbook</i>. New Haven: Yale University Press, 1989.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Book with more than 3 authors (or editors)", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.bookWithMoreThan3AuthorsEditors);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.bookWithMoreThan3AuthorsEditors);
		var expected =
			'<div class="csl-entry">Becking, Bob, Alex Cannegieter, Wilfred van de Poll, and Anne-Mareike Wetter. <i>From Babylon to Eternity: The Exile Remembered and Constructed in Text and Tradition</i>. BibleWorld. London: Equinox, 2009.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Classic or ancient text (whole volume)", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.classicalOrAncientTextWholeVolume);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.classicalOrAncientTextWholeVolume);
		var expected =
			'<div class="csl-entry">Aquinas, Thomas. <i>Summa Theologiae: Latin Text and English Translation, Introductions, Notes, Appendices and Glossaries. Vol. 10: Cosmogony (1a. 65–74)</i>. Edited by William A. Wallace. 60 vols. London: Blackfriars, 1964.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Volume from a multi volume work", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.volumeFromAMultiVolumeWork);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.volumeFromAMultiVolumeWork);
		var expected = '<div class="csl-entry">Bloesch, Donald. <i>Essentials of Evangelical Theology</i>. 2 vols. San Francisco: Harper &#38; Row, 1982.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Commentary or book in series with series number", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.commentaryOrBookInSeriesWithSeriesNumber);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.commentaryOrBookInSeriesWithSeriesNumber);
		var expected = '<div class="csl-entry">Braun, R. L. <i>1 Chronicles</i>. Word Biblical Commentary 14. Waco: Word, 1986.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Edition other than the first", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.editionOtherThanTheFirst);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.editionOtherThanTheFirst);
		var expected = '<div class="csl-entry">Alexander, T. Desmond. <i>From Paradise to Promised Land: An Introduction to the Pentateuch</i>. 3rd ed. Grand Rapids: Baker, 2012.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Booked viewed online", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.bookViewedOnline);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.bookViewedOnline);
		var expected =
			'<div class="csl-entry">Hackett, J. A. <i>A Basic Introduction to Biblical Hebrew, with CD</i>. Peabody, MA: Hendrickson, 2010. http://books.google.com.au/books?id=UuMRFJqmJ_sC.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::ebook", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.ebook);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.ebook);
		var expected = '<div class="csl-entry">Lewis, C. S. <i>Mere Christianity</i>. Kindle ed. Fount, 2010.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it.only("Bibliography::Essay or chapter", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.essayOrChapter);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.essayOrChapter);
		var expected =
			'<div class="csl-entry">Watts, John D. W. “A Frame for the Book of the Twelve: Hosea 1–3 and Malachi.” Pages 209–217 in <i>Reading and Hearing the Book of the Twelve</i>. Edited by James Nogalski and Marvin Sweeney. Atlanta: Society of Biblical Literature, 2000.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Article in a lexicon or theological dictionary", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.articleInALexiconOrTheologicalDictionary);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.articleInALexiconOrTheologicalDictionary);
		var expected =
			'<div class="csl-entry">Flender, O. and C. Brown. “Smell; Ὀσμή.” Pages 599–601 in vol.3 of <i>Dictionary of New Testament Theology</i>. Edited by Colin Brown. 4 vols. Grand Rapids: Zondervan, 1992.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Encyclopedia or dictionary", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.encyclopediaOrDictionary);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.encyclopediaOrDictionary);
		var expected =
			'<div class="csl-entry">Walters, Stanley D. “Jacob Narrative.” Pages 599–606 in vol.3 of <i>The Anchor Bible Dictionary</i>. Edited by David Noel Freedman. 6 vols. New York: Doubleday, 1992.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Anonymous dictionary acticle", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.anonymousDictionaryArticle);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.anonymousDictionaryArticle);
		var expected =
			'<div class="csl-entry">Cross, F. L., and E. A. Livingstone, eds. “Canon of Scripture.” Pages 232–233 in <i>The Oxford Dictionary of the Christian Church</i>. 2nd ed. Oxford: Oxford University Press, 1983.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Classical or ancient text", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.classicalOrAncientText);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.classicalOrAncientText);
		var expected =
			'<div class="csl-entry">Luther, Martin. “Disputation on the Power and Efficacy of Indulgences.” Pages 17–33 in vol. 31 of <i>Luther’s Works: Career of the Reformer: I</i>. Edited by Harold J. Grimm, Translated by C. M. Jacobs. 55 vols. St. Louis, Mo.: Concordia, 1958.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Journal article", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.journalArticle);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.journalArticle);
		var expected = '<div class="csl-entry">Long, B. O. “A Darkness Between Brothers: Solomon and Adonijah,” <i>Journal for the Study of the Old Testament</i> 19 (1981): 79–94.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Journal article viewed online", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.journalArticleViewedOnline);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.journalArticleViewedOnline);
		var expected =
			'<div class="csl-entry">Jacobson, Rolf. “A Freedom That Is No Freedom: Jeremiah 34 and the Sabbatical Principle,” <i>Word &#38; World</i> 22.4 (2002):396–405. http://web.a.ebscohost.com/ehost/pdfviewer/.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Magazine or newspaper article", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.magazineOrNewspaperArticle);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.magazineOrNewspaperArticle);
		var expected = '<div class="csl-entry">Stafford, Tim. “A Tale of Two Scientists.” <i>Christianity Today</i> July (2012):22–29.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Thesis or dissertation", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.thesis);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.thesis);
		var expected =
			'<div class="csl-entry">Giere, Samuel D. “A New Glimpse of Day One: An Intertextual History of Genesis 1.1–5 in Hebrew and Greek Texts up to 200 CE.” Ph.D., The University of St. Andrews, 2007.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Study bible note or comment", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.studyBibleNoteOrComment);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.studyBibleNoteOrComment);
		var expected =
			'<div class="csl-entry">Wolf, Herbert and John H. Stek. “Introduction: Malachi.” Pages 1561–1564 in <i>The NIV Study Bible</i>. Edited by Kenneth L. Barker. Grand Rapids: Zondervan, 2011.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Conferenec paper", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.conferencePaper);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.conferencePaper);
		var expected =
			'<div class="csl-entry">Niditch, Susan. “Oral Culture and Written Documents.” Paper presented at the annual meeting of the New England Region of the SBL. Worcester, MA, 25 March 1994.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Podcast or online video", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.podcastOrOnlineVideo);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.podcastOrOnlineVideo);
		var expected =
			'<div class="csl-entry">Tlozek, Eric. “25 Years after Oslo, the Middle East Peace Process Is in Pieces.” Podcast audio. <i>The World Today</i>, n.d. http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Webpage", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.webpage);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.webpage);
		var expected =
			'<div class="csl-entry">Brown, Andrew. “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>. 3 May 2017. http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Blogpost", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.blogPost);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.blogPost);
		var expected =
			'<div class="csl-entry">Brown, Andrew. “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>. 3 May 2017. http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Bibliography::Forumpost", function () {
		var outputEnglishStyle = makeBibliographyFromEnglishStyle(items.forumPost);
		var outputChineseStyle = makeBibliographyFromChineseStyle(items.forumPost);
		var expected =
			'<div class="csl-entry">Brown, Andrew. “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>. 3 May 2017, http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.</div>';

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});
});
