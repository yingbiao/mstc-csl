"use strict";

var fs = require("fs");
var citeproc = require("citeproc-js-node");
var items = require("./fixtures/items-chinese.js");
var chai = require("chai");
var assert = chai.assert;

describe("Citation Chinese Repeat", function () {
	var engine;
	var sys;
	var styleString;

	before(function () {
		sys = new citeproc.simpleSys();

		var enUS = fs.readFileSync("./locales/locales-en-US.xml", "utf8");
		var zhCN = fs.readFileSync("./locales/locales-zh-CN.xml", "utf8");
		var zhTW = fs.readFileSync("./locales/locales-zh-TW.xml", "utf8");
		sys.addLocale("en-US", enUS);
		sys.addLocale("zh-CN", zhCN);
		sys.addLocale("zh-TW", zhTW);

		styleString = fs.readFileSync("./melbourne-school-of-theology-chinese.csl", "utf8");
		engine = sys.newEngine(styleString, "zh-CN", null);
	});

	function makeCitationCluster(items, language, pages) {
		items["ITEM-1"]["language"] = language;
		sys.items = items;
		engine.updateItems(items);

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
		var newCitationCluster = {
			citationItems: [
				{
					id: "ITEM-1",
					locator: pages,
					label: "page",
				},
			],
			properties: {
				noteIndex: 2,
			},
		};
		engine.processCitationCluster(citationCluster, [], []);
		var citationId = citationCluster.citationID;
		var citationPre = [[citationId, 1]];
		var result = engine.previewCitationCluster(newCitationCluster, citationPre, [], "html");
		return result;
	}

	it("Citation::Book", function () {
		var output = makeCitationCluster(items.book, "zh-CN", "70");
		var expected = "楊牧谷：《淚眼先知耶利米》，70。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.book, "zh-TW", "70");
		expected = "楊牧谷：《淚眼先知耶利米》，70。";
		assert.equal(output, expected);
	});

	it("Citation::Edited Book", function () {
		var output = makeCitationCluster(items.editedBook, "zh-CN", "29");
		var expected = "李三谷编：《舊約小品》，29。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBook, "zh-TW", "29");
		expected = "李三谷編：《舊約小品》，29。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 or 3 authors (or editors)", function () {
		var output = makeCitationCluster(items.bookWith2Or3AuthorsEditors, "zh-CN", "45");
		var expected = "杜德民、張愛楊和陳豐裕：《雨過天晴》，45。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookWith2Or3AuthorsEditors, "zh-TW", "45");
		expected = "杜德民、張愛楊和陳豐裕：《雨過天晴》，45。";
		assert.equal(output, expected);
	});

	it("Citation::English::Book Multiple Authors", function () {
		var output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors, "zh-CN", "59-63");
		var expected = "鮑維鈞等：《聖經正典與經外文獻導論》，59–63。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors, "zh-TW", "59-63");
		expected = "鮑維鈞等：《聖經正典與經外文獻導論》，59–63。";
		assert.equal(output, expected);
	});

	it("Citation::Volume from a multi volume work", function () {
		var output = makeCitationCluster(items.volumeFromAMultiVolumeWork, "zh-CN", "99");
		var expected = "奧古斯丁：《上帝之城》，2：99。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.volumeFromAMultiVolumeWork, "zh-TW", "99");
		expected = "奧古斯丁：《上帝之城》，2：99。";
		assert.equal(output, expected);
	});

	it("Citation::Commentary or book in series with series number", function () {
		var output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-CN", "117");
		var expected = "黃朱倫：《腓立比書》，117。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-TW", "117");
		expected = "黃朱倫：《腓立比書》，117。";
		assert.equal(output, expected);
	});

	it("Citation::Edition other than the first", function () {
		var output = makeCitationCluster(items.editionOtherThanTheFirst, "zh-CN", "105");
		var expected = "吳立樂编：《浸會在華佈道百年史略》，105。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editionOtherThanTheFirst, "zh-TW", "105");
		expected = "吳立樂編：《浸會在華佈道百年史略》，105。";
		assert.equal(output, expected);
	});

	it("Citation::Booked viewed online", function () {
		var output = makeCitationCluster(items.bookViewedOnline, "zh-CN", "20");
		var expected = "何衛中：《牧養神的群羊》，20。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookViewedOnline, "zh-TW", "20");
		expected = "何衛中：《牧養神的群羊》，20。";
		assert.equal(output, expected);
	});

	it("Citation::Essay or chapter", function () {
		var output = makeCitationCluster(items.essayOrChapter, "zh-CN", "345");
		var expected = "黄二冬：“天下一家”，345。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.essayOrChapter, "zh-TW", "345");
		expected = "黄二冬：“天下一家”，345。";
		assert.equal(output, expected);
	});

	it("Citation::Article in a lexicon or theological dictionary", function () {
		var output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary, "zh-CN", "26");
		var expected = "馮來平：“基督的寬容”，3：26。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary, "zh-TW", "26");
		expected = "馮來平：“基督的寬容”，3：26。";
		assert.equal(output, expected);
	});

	it("Citation::Journal article", function () {
		var output = makeCitationCluster(items.journalArticle, "zh-CN", "23");
		var expected = "楊品通：“神學的本質探討”，23。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.journalArticle, "zh-TW", "23");
		expected = "楊品通：“神學的本質探討”，23。";
		assert.equal(output, expected);
	});

	it("Citation::Magazine or newspaper article", function () {
		var output = makeCitationCluster(items.magazineOrNewspaperArticle, "zh-CN", "45");
		var expected = "李約翰：“美國華僑習俗趣談”，45。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.magazineOrNewspaperArticle, "zh-TW", "45");
		expected = "李約翰：“美國華僑習俗趣談”，45。";
		assert.equal(output, expected);
	});

	it("Citation::Thesis or dissertation", function () {
		var output = makeCitationCluster(items.thesis, "zh-CN", "12");
		var expected = "劉庸：“基督教教育在南非華人教會群體中的發展模式”，12。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.thesis, "zh-TW", "12");
		expected = "劉庸：“基督教教育在南非華人教會群體中的發展模式”，12。";
		assert.equal(output, expected);
	});

	it("Citation::Conferenec paper", function () {
		var output = makeCitationCluster(items.conferencePaper, "zh-CN", "4");
		var expected = "謝木水：“神學如何失去靈性？”，4。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.conferencePaper, "zh-TW", "4");
		expected = "謝木水：“神學如何失去靈性？”，4。";
		assert.equal(output, expected);
	});

	it("Citation::Webpage", function () {
		var output = makeCitationCluster(items.webpage, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.webpage, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);
	});

	it("Citation::Blog post", function () {
		var output = makeCitationCluster(items.blogpost, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.blogpost, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);
	});

	it("Citation::Forum post", function () {
		var output = makeCitationCluster(items.forumPost, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.forumPost, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”。";
		assert.equal(output, expected);
	});

	it("Citation::EnglishAuthor", function () {
		var output = makeCitationCluster(items.englishAuthor, "zh-CN", "70");
		var expected = "Colin：《淚眼先知耶利米》，70。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.englishAuthor, "zh-TW", "70");
		expected = "Colin：《淚眼先知耶利米》，70。";
		assert.equal(output, expected);
	});

	it("Citation::Journal article with translator", function () {
		var output = makeCitationCluster(items.journalWithTranslator, "zh-CN", 20);
		var expected = "約翰•歐文：“約翰•歐文論牧師的責任”，20。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.journalWithTranslator, "zh-TW", 20);
		expected = "約翰•歐文：“約翰•歐文論牧師的責任”，20。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 editors", function () {
		var output = makeCitationCluster(items.editedBookWith2Editors, "zh-CN", 19);
		var expected = "李三谷和李二谷编：《舊約小品》，19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBookWith2Editors, "zh-TW", 19);
		expected = "李三谷和李二谷編：《舊約小品》，19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 translators", function () {
		var output = makeCitationCluster(items.translatedBookWith2Translators, "zh-CN", 19);
		var expected = "李三谷和李二谷译：《舊約小品》，19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.translatedBookWith2Translators, "zh-TW", 19);
		expected = "李三谷和李二谷譯：《舊約小品》，19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 3 editors", function () {
		var output = makeCitationCluster(items.editedBookWith3Editors, "zh-CN", 19);
		var expected = "李三谷、李二谷和李一谷编：《舊約小品》，19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBookWith3Editors, "zh-TW", 19);
		expected = "李三谷、李二谷和李一谷編：《舊約小品》，19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 3 translators", function () {
		var output = makeCitationCluster(items.translatedBookWith3Translators, "zh-CN", 19);
		var expected = "李三谷、李二谷和李一谷译：《舊約小品》，19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.translatedBookWith3Translators, "zh-TW", 19);
		expected = "李三谷、李二谷和李一谷譯：《舊約小品》，19。";
		assert.equal(output, expected);
	});
});
