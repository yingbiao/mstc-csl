"use strict";

var fs = require("fs");
var citeproc = require("citeproc-js-node");
var items = require("./fixtures/items-english.js");
var chai = require("chai");
var assert = chai.assert;

describe.only("Citation English", function () {
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

	function makeCitationClusterFromEnglishStyle(items, pages) {
		sys.items = items;
		engineEnglish.updateItems(items);

		var citationCluster = {
			citationItems: [
				{
					id: "ITEM-1",
					locator: pages,
					label: "page",
				},
			],
			properties: {
				noteIndex: 1,
			},
		};

		return engineEnglish.previewCitationCluster(citationCluster, [], [], "html");
	}

	function makeCitationClusterFromChineseStyle(items, pages) {
		sys.items = items;
		engineChinese.updateItems(items);

		var citationCluster = {
			citationItems: [
				{
					id: "ITEM-1",
					locator: pages,
					label: "page",
				},
			],
			properties: {
				noteIndex: 1,
			},
		};

		return engineChinese.previewCitationCluster(citationCluster, [], [], "html");
	}

	it("Citation::Book", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.book, "56");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.book, "56");
		var expected = "J. A. Hackett, <i>A Basic Introduction to Biblical Hebrew, with CD</i> (Peabody, MA: Hendrickson, 2010), 56.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Edited Book", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.editedBook, "40");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.editedBook, "40");
		var expected = "Rowland Ward, ed., <i>The Westminster Confession and Catechisms in Modern English</i> (Wantirna: New Melbourne Press, 2000), 40.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Book with 2 or 3 authors (or editors)", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookWith2Or3AuthorsEditors, "22");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookWith2Or3AuthorsEditors, "22");
		var expected = "B. P. Kittel, V. Hoffer, and R. A. Wright, <i>Biblical Hebrew: A Text and Workbook</i> (New Haven: Yale University Press, 1989), 22.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Book with more than 3 authors (or editors)", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookWithMoreThan3AuthorsEditors, "2");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookWithMoreThan3AuthorsEditors, "2");
		var expected = "Bob Becking et al., <i>From Babylon to Eternity: The Exile Remembered and Constructed in Text and Tradition</i>, BibleWorld (London: Equinox, 2009), 2.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Classic or ancient text (whole volume)", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.classicalOrAncientTextWholeVolume, "27-31");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.classicalOrAncientTextWholeVolume, "27-31");
		var expected =
			"Thomas Aquinas, <i>Summa Theologiae: Latin Text and English Translation, Introductions, Notes, Appendices and Glossaries. Vol. 10: Cosmogony (1a. 65–74)</i>, ed. William A. Wallace (London: Blackfriars, 1964), 27–31.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Volume from a multi volume work", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.volumeFromAMultiVolumeWork, "119–123");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.volumeFromAMultiVolumeWork, "119–123");
		var expected = "Donald Bloesch, <i>Essentials of Evangelical Theology</i> (San Francisco: Harper &#38; Row, 1982), 2:119–123.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Commentary or book in series with series number", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.commentaryOrBookInSeriesWithSeriesNumber, "88");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.commentaryOrBookInSeriesWithSeriesNumber, "88");
		var expected = "R. L. Braun, <i>1 Chronicles</i>, Word Biblical Commentary 14 (Waco: Word, 1986), 88.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Edition other than the first", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.editionOtherThanTheFirst, "100");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.editionOtherThanTheFirst, "100");
		var expected = "T. Desmond Alexander, <i>From Paradise to Promised Land: An Introduction to the Pentateuch</i>, 3rd ed. (Grand Rapids: Baker, 2012), 100.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Booked viewed online", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.bookViewedOnline, "14");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.bookViewedOnline, "14");
		var expected = "J. A. Hackett, <i>A Basic Introduction to Biblical Hebrew, with CD</i> (Peabody, MA: Hendrickson, 2010), 14, http://books.google.com.au/books?id=UuMRFJqmJ_sC.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::ebook", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.ebook, "location 446/2830");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.ebook, "location 446/2830");
		var expected = "C. S. Lewis, <i>Mere Christianity</i> (Kindle ed.; Fount, 2010), location 446/2830.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Essay or chapter", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.essayOrChapter, "211");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.essayOrChapter, "211");
		var expected =
			"John D. W. Watts, “A Frame for the Book of the Twelve: Hosea 1–3 and Malachi,” in <i>Reading and Hearing the Book of the Twelve</i>, ed. James Nogalski and Marvin Sweeney (Atlanta: Society of Biblical Literature, 2000), 211.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Article in a lexicon or theological dictionary", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.articleInALexiconOrTheologicalDictionary, "599–600");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.articleInALexiconOrTheologicalDictionary, "599–600");
		var expected = "O. Flender and C. Brown, “Smell; Ὀσμή,” in <i>Dictionary of New Testament Theology</i>, ed. Colin Brown (Grand Rapids: Zondervan, 1992), 3:599–600.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Encyclopedia or dictionary", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.encyclopediaOrDictionary, "601");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.encyclopediaOrDictionary, "601");
		var expected = "Stanley D. Walters, “Jacob Narrative,” in <i>The Anchor Bible Dictionary</i>, ed. David Noel Freedman (New York: Doubleday, 1992), 3:601.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Anonymous dictionary acticle", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.anonymousDictionaryArticle, "232");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.anonymousDictionaryArticle, "232");
		var expected = "F. L. Cross and E. A. Livingstone, eds., “Canon of Scripture,” in <i>The Oxford Dictionary of the Christian Church</i>, 2nd ed. (Oxford: Oxford University Press, 1983), 232.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Classical or ancient text", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.classicalOrAncientText, "17–33");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.classicalOrAncientText, "17–33");
		var expected =
			"Martin Luther, “Disputation on the Power and Efficacy of Indulgences,” in <i>Luther’s Works: Career of the Reformer: I</i> (ed. Harold J. Grimm; trans. C. M. Jacobs; St. Louis, Mo.: Concordia, 1958), 31:17–33.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Journal article", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.journalArticle, "79");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.journalArticle, "79");
		var expected = "B. O. Long, “A Darkness Between Brothers: Solomon and Adonijah,” <i>Journal for the Study of the Old Testament</i> 19 (1981): 79.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Journal article viewed online", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.journalArticleViewedOnline, "400–401");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.journalArticleViewedOnline, "400–401");
		var expected =
			"Rolf Jacobson, “A Freedom That Is No Freedom: Jeremiah 34 and the Sabbatical Principle,” <i>Word &#38; World</i> 22.4 (2002): 400–401, http://web.a.ebscohost.com/ehost/pdfviewer/.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Magazine or newspaper article", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.magazineOrNewspaperArticle, "27");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.magazineOrNewspaperArticle, "27");
		var expected = "Tim Stafford, “A Tale of Two Scientists,” <i>Christianity Today</i> July (2012): 27.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Thesis or dissertation", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.thesis, "50");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.thesis, "50");
		var expected = "Samuel D. Giere, “A New Glimpse of Day One: An Intertextual History of Genesis 1.1–5 in Hebrew and Greek Texts up to 200 CE” (Ph.D., The University of St. Andrews, 2007), 50.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Study bible note or comment", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.studyBibleNoteOrComment, "1562");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.studyBibleNoteOrComment, "1562");
		var expected = "Herbert Wolf and John H. Stek, “Introduction: Malachi,” in <i>The NIV Study Bible</i>, ed. Kenneth L. Barker; (Grand Rapids: Zondervan, 2011), 1562.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Conferenec paper", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.conferencePaper, "15");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.conferencePaper, "15");
		var expected = "Susan Niditch, “Oral Culture and Written Documents” (paper presented at the annual meeting of the New England Region of the SBL, Worcester, MA, 1994), 15.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Podcast or online video", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.podcastOrOnlineVideo, "");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.podcastOrOnlineVideo, "");
		var expected =
			"Eric Tlozek, “25 Years after Oslo, the Middle East Peace Process Is in Pieces,” Podcast audio, <i>The World Today</i>, n.d., http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Webpage", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.webpage, "");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.webpage, "");
		var expected = "Andrew Brown, “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>, 3 May 2017, http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Blogpost", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.blogPost, "");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.blogPost, "");
		var expected = "Andrew Brown, “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>, 3 May 2017, http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});

	it("Citation::Forumpost", function () {
		var outputEnglishStyle = makeCitationClusterFromEnglishStyle(items.forumPost, "");
		var outputChineseStyle = makeCitationClusterFromChineseStyle(items.forumPost, "");
		var expected = "Andrew Brown, “Creation &#38; Time in Basil’s Hexaemeron,” <i>Sapientia</i>, 3 May 2017, http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/.";

		assert.equal(outputEnglishStyle, expected);
		assert.equal(outputChineseStyle, expected);
	});
});
