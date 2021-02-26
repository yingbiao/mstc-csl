"use strict";

var fs = require("fs");
var citeproc = require("citeproc-js-node");
var items = require("./fixtures/items-chinese.js");
var chai = require("chai");
var assert = chai.assert;

describe("Citation Chinese", function () {
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

		return engine.previewCitationCluster(citationCluster, [], [], "html");
	}

	it("Citation::Book", function () {
		var output = makeCitationCluster(items.book, "zh-CN", "74-76");
		var expected = "楊牧谷：《淚眼先知耶利米》（台北：校園書房出版社，1989），74–76。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.book, "zh-TW", "74-76");
		expected = "楊牧谷：《淚眼先知耶利米》（台北：校園書房出版社，1989），74–76。";
		assert.equal(output, expected);
	});

	it("Citation::Edited Book", function () {
		var output = makeCitationCluster(items.editedBook, "zh-CN", "24");
		var expected = "李三谷编：《舊約小品》（台北：校園出版社，2003），24。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBook, "zh-TW", "24");
		expected = "李三谷編：《舊約小品》（台北：校園出版社，2003），24。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 or 3 authors (or editors)", function () {
		var output = makeCitationCluster(items.bookWith2Or3AuthorsEditors, "zh-CN", "36");
		var expected = "杜德民、張愛楊和陳豐裕：《雨過天晴》（新加坡：和聯出版社，2003），36。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookWith2Or3AuthorsEditors, "zh-TW", "36");
		expected = "杜德民、張愛楊和陳豐裕：《雨過天晴》（新加坡：和聯出版社，2003），36。";
		assert.equal(output, expected);
	});

	it("Citation::English::Book Multiple Authors", function () {
		var output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors, "zh-CN", "47-49");
		var expected = "鮑維鈞等：《聖經正典與經外文獻導論》（聖經導論叢書，香港：基道，2001），47–49。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookWithMoreThan3AuthorsEditors, "zh-TW", "47-49");
		expected = "鮑維鈞等：《聖經正典與經外文獻導論》（聖經導論叢書，香港：基道，2001），47–49。";
		assert.equal(output, expected);
	});

	it("Citation::Volume from a multi volume work", function () {
		var output = makeCitationCluster(items.volumeFromAMultiVolumeWork, "zh-CN", "99");
		var expected = "奧古斯丁：《上帝之城》（王曉朝译，歷代基督教思想學術文庫古代系列，香港：道風書社，2004），2：99。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.volumeFromAMultiVolumeWork, "zh-TW", "99");
		expected = "奧古斯丁：《上帝之城》（王曉朝譯，歷代基督教思想學術文庫古代系列，香港：道風書社，2004），2：99。";
		assert.equal(output, expected);
	});

	it("Citation::Commentary or book in series with series number", function () {
		var output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-CN", "114");
		var expected = "黃朱倫：《腓立比書：僕友的生命與事奉》（明道研經叢書50，香港：明道社，2006），114。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-TW", "114");
		expected = "黃朱倫：《腓立比書：僕友的生命與事奉》（明道研經叢書50，香港：明道社，2006），114。";
		assert.equal(output, expected);
	});

	it("Citation::Edition other than the first", function () {
		var output = makeCitationCluster(items.editionOtherThanTheFirst, "zh-CN", "75");
		var expected = "吳立樂编：《浸會在華佈道百年史略》（修訂版，香港：浸信會出版部，1970），75。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editionOtherThanTheFirst, "zh-TW", "75");
		expected = "吳立樂編：《浸會在華佈道百年史略》（修訂版，香港：浸信會出版部，1970），75。";
		assert.equal(output, expected);
	});

	it("Citation::Booked viewed online", function () {
		var output = makeCitationCluster(items.bookViewedOnline, "zh-CN", "13");
		var expected = "何衛中：《牧養神的群羊》（香港：金燈台，2010），13，http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.bookViewedOnline, "zh-TW", "13");
		expected = "何衛中：《牧養神的群羊》（香港：金燈台，2010），13，http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf。";
		assert.equal(output, expected);
	});

	it("Citation::Ebook", function () {
		var output = makeCitationCluster(items.ebook, "zh-CN", "Loc 134/18602");
		var expected = "曹雪芹：《紅樓夢》（Kindle版，Czech Republic：藝雅，2017），Loc 134/18602。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.ebook, "zh-TW", "Loc 134/18602");
		expected = "曹雪芹：《紅樓夢》（Kindle版，Czech Republic：藝雅，2017），Loc 134/18602。";
		assert.equal(output, expected);
	});

	it("Citation::Essay or chapter", function () {
		var output = makeCitationCluster(items.essayOrChapter, "zh-CN", "339");
		var expected = "黄二冬：“天下一家”，《地球村的演變》（千百文编，厦門：漢陽出版社，2003），339。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.essayOrChapter, "zh-TW", "339");
		expected = "黄二冬：“天下一家”，《地球村的演變》（千百文編，厦門：漢陽出版社，2003），339。";
		assert.equal(output, expected);
	});

	it("Citation::Article in a lexicon or theological dictionary", function () {
		var output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary, "zh-CN", "25");
		var expected = "馮來平：“基督的寬容”，《世界神學辭典》（邱宋恩编，上海：展徒出版社，1990），3：25。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.articleInALexiconOrTheologicalDictionary, "zh-TW", "25");
		expected = "馮來平：“基督的寬容”，《世界神學辭典》（邱宋恩編，上海：展徒出版社，1990），3：25。";
		assert.equal(output, expected);
	});

	it("Citation::Anonymous dictionary acticle", function () {
		var output = makeCitationCluster(items.anonymousDictionaryArticle, "zh-CN", "1022-1023");
		var expected = "陳惠榮编：“文士”，《證主聖經百科全書》（香港：福音證主協會，1995），2：1022–1023。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.anonymousDictionaryArticle, "zh-TW", "1022-1023");
		expected = "陳惠榮編：“文士”，《證主聖經百科全書》（香港：福音證主協會，1995），2：1022–1023。";
		assert.equal(output, expected);
	});

	it("Citation::Classical or ancient text", function () {
		var output = makeCitationCluster(items.classicalOrAncientText, "zh-CN", "184");
		var expected = "馬丁路德：“在信心中的祈禱”，《屬靈操練之旅》（傅士德和史雅各编，袁達志和陶婉儀译，香港：天道書樓，2004），184。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.classicalOrAncientText, "zh-TW", "184");
		expected = "馬丁路德：“在信心中的祈禱”，《屬靈操練之旅》（傅士德和史雅各編，袁達志和陶婉儀譯，香港：天道書樓，2004），184。";
		assert.equal(output, expected);
	});

	it("Citation::ANF/NPNF/CCEL", function () {
		var output = makeCitationCluster(items.anf_npnf_ccel, "zh-CN", "19");
		var expected = "貴鉤利：“人的造成10.2”，《東方教父選集》（章文新编，沈鮮維幀、都孟高、馬葆煉等译，第二版，香港：基督教文藝，1989），19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.anf_npnf_ccel, "zh-TW", "19");
		expected = "貴鉤利：“人的造成10.2”，《東方教父選集》（章文新編，沈鮮維幀、都孟高、馬葆煉等譯，第二版，香港：基督教文藝，1989），19。";
		assert.equal(output, expected);
	});

	it("Citation::Journal article", function () {
		var output = makeCitationCluster(items.journalArticle, "zh-CN", "21");
		var expected = "楊品通：“神學的本質探討”，《教會神學期刊》14（2003）：21。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.journalArticle, "zh-TW", "21");
		expected = "楊品通：“神學的本質探討”，《教會神學期刊》14（2003）：21。";
		assert.equal(output, expected);
	});

	it("Citation::Journal article viewed online", function () {
		var output = makeCitationCluster(items.journalArticleViewedOnline, "zh-CN", "35");
		var expected = "楊慶球：“路德與加爾文的社會政治思想”，《教會》69（2018）：35，https://www.churchchina.org/wp-content/uploads/ccpdf/069cc1801.pdf。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.journalArticleViewedOnline, "zh-TW", "35");
		expected = "楊慶球：“路德與加爾文的社會政治思想”，《教會》69（2018）：35，https://www.churchchina.org/wp-content/uploads/ccpdf/069cc1801.pdf。";
		assert.equal(output, expected);
	});

	it("Citation::Magazine or newspaper article", function () {
		var output = makeCitationCluster(items.magazineOrNewspaperArticle, "zh-CN", "43");
		var expected = "史馨：“馬克龍民望回升反擊黃背心之亂”，《亞洲週刊》33.12（2019）：43。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.magazineOrNewspaperArticle, "zh-TW", "43");
		expected = "史馨：“馬克龍民望回升反擊黃背心之亂”，《亞洲週刊》33.12（2019）：43。";
		assert.equal(output, expected);
	});

	it("Citation::Thesis or dissertation", function () {
		var output = makeCitationCluster(items.thesis, "zh-CN", "10");
		var expected = "劉庸：“基督教教育在南非華人教會群體中的發展模式”（博士論文，太平洋天國神學院，2000），10。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.thesis, "zh-TW", "10");
		expected = "劉庸：“基督教教育在南非華人教會群體中的發展模式”（博士論文，太平洋天國神學院，2000），10。";
		assert.equal(output, expected);
	});

	it("Citation::Study bible note or comment", function () {
		var output = makeCitationCluster(items.studyBibleNoteOrComment, "zh-CN", "2080");
		var expected = "李少秋：“認識教義與靈命成長”，《聖經研讀版 - 新譯本》（高明發和張達民编，第二版，香港：環球聖經公會，2011），2080。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.studyBibleNoteOrComment, "zh-TW", "2080");
		expected = "李少秋：“認識教義與靈命成長”，《聖經研讀版 - 新譯本》（高明發和張達民編，第二版，香港：環球聖經公會，2011），2080。";
		assert.equal(output, expected);
	});

	it("Citation::Conferenec paper", function () {
		var output = makeCitationCluster(items.conferencePaper, "zh-CN", "1");
		var expected = "謝木水：“神學如何失去靈性？”（新加坡神學院益道論述會上发表之专文，新加坡，2010年），1。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.conferencePaper, "zh-TW", "1");
		expected = "謝木水：“神學如何失去靈性？”（新加坡神學院益道論述會上發表之專文，新加坡，2010年），1。";
		assert.equal(output, expected);
	});

	it("Citation::Podcast or online video", function () {
		var output = makeCitationCluster(items.podcastOrOnlineVideo, "zh-CN", "");
		var expected = "楊柏滿：《復興的使命群體》華人教會網路（語音錄音），http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.podcastOrOnlineVideo, "zh-TW", "");
		expected = "楊柏滿：《復興的使命群體》華人教會網路（語音錄音），http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。";
		assert.equal(output, expected);
	});

	it("Citation::Webpage", function () {
		var output = makeCitationCluster(items.webpage, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.webpage, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);
	});

	it("Citation::Blogpost", function () {
		var output = makeCitationCluster(items.blogpost, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.blogpost, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);
	});

	it("Citation::Forumpost", function () {
		var output = makeCitationCluster(items.forumPost, "zh-CN", "");
		var expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.forumPost, "zh-TW", "");
		expected = "劉小楓：“歷史玩完了？”，《漢語基督教文化研究所》，2001年5月3日，http://www.iscs.org.hk/article18.htm。";
		assert.equal(output, expected);
	});

	it("Citation::Book", function () {
		var output = makeCitationCluster(items.englishAuthor, "zh-CN", "74-76");
		var expected = "Colin R. Alan：《淚眼先知耶利米》（台北：校園書房出版社，1989），74–76。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.englishAuthor, "zh-TW", "74-76");
		expected = "Colin R. Alan：《淚眼先知耶利米》（台北：校園書房出版社，1989），74–76。";
		assert.equal(output, expected);
	});

	it("Citation::Journal article with translator", function () {
		var output = makeCitationCluster(items.journalWithTranslator, "zh-CN", 19);
		var expected = "約翰•歐文（述寧译）：“約翰•歐文論牧師的責任”，《教會》70（2018）：19，https://www.churchchina.org/wp-content/uploads/ccpdf/070cc1803.pdf。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.journalWithTranslator, "zh-TW", 19);
		expected = "約翰•歐文（述寧譯）：“約翰•歐文論牧師的責任”，《教會》70（2018）：19，https://www.churchchina.org/wp-content/uploads/ccpdf/070cc1803.pdf。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 editors", function () {
		var output = makeCitationCluster(items.editedBookWith2Editors, "zh-CN", 19);
		var expected = "李三谷和李二谷编：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBookWith2Editors, "zh-TW", 19);
		expected = "李三谷和李二谷編：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 2 translators", function () {
		var output = makeCitationCluster(items.translatedBookWith2Translators, "zh-CN", 19);
		var expected = "李三谷和李二谷译：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.translatedBookWith2Translators, "zh-TW", 19);
		expected = "李三谷和李二谷譯：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 3 editors", function () {
		var output = makeCitationCluster(items.editedBookWith3Editors, "zh-CN", 19);
		var expected = "李三谷、李二谷和李一谷编：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.editedBookWith3Editors, "zh-TW", 19);
		expected = "李三谷、李二谷和李一谷編：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);
	});

	it("Citation::Book with 3 translators", function () {
		var output = makeCitationCluster(items.translatedBookWith3Translators, "zh-CN", 19);
		var expected = "李三谷、李二谷和李一谷译：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);

		output = makeCitationCluster(items.translatedBookWith3Translators, "zh-TW", 19);
		expected = "李三谷、李二谷和李一谷譯：《舊約小品》（台北：校園出版社，2003），19。";
		assert.equal(output, expected);
	});
});
