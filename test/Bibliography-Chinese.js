"use strict";

var fs = require("fs");
var citeproc = require("citeproc-js-node");
var items = require("./fixtures/items-chinese.js");
var chai = require("chai");
var assert = chai.assert;

describe("Bibliography Chinese", function () {
	var sys;
	var engine;
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

	function makeBibliography(items, langauge) {
		items["ITEM-1"]["language"] = langauge;

		sys.items = items;
		engine.updateItems(Object.keys(items));

		var bib = engine.makeBibliography();
		return bib[1][0].trim();
	}

	it("Bibliography::Book", function () {
		var output = makeBibliography(items.book, "zh-CN");
		var expected = '<div class="csl-entry">楊牧谷：《淚眼先知耶利米》。台北：校園書房出版社，1989。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.book, "zh-TW");
		expected = '<div class="csl-entry">楊牧谷：《淚眼先知耶利米》。台北：校園書房出版社，1989。</div>';
	});

	it("Bibliography::Edited Book", function () {
		var output = makeBibliography(items.editedBook, "zh-CN");
		var expected = '<div class="csl-entry">李三谷编：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.editedBook, "zh-TW");
		expected = '<div class="csl-entry">李三谷編：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Book with 2 or 3 authors (or editors)", function () {
		var output = makeBibliography(items.bookWith2Or3AuthorsEditors, "zh-CN");
		var expected = '<div class="csl-entry">杜德民、張愛楊和陳豐裕：《雨過天晴》。新加坡：和聯出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.bookWith2Or3AuthorsEditors, "zh-TW");
		expected = '<div class="csl-entry">杜德民、張愛楊和陳豐裕：《雨過天晴》。新加坡：和聯出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::English::Book Multiple Authors", function () {
		var output = makeBibliography(items.bookWithMoreThan3AuthorsEditors, "zh-CN");
		var expected = '<div class="csl-entry">鮑維鈞、黃錫木、羅慶才、張略和岑少麟：《聖經正典與經外文獻導論》。聖經導論叢書。香港：基道，2001。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.bookWithMoreThan3AuthorsEditors, "zh-TW");
		expected = '<div class="csl-entry">鮑維鈞、黃錫木、羅慶才、張略和岑少麟：《聖經正典與經外文獻導論》。聖經導論叢書。香港：基道，2001。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Volume from a multi volume work", function () {
		var output = makeBibliography(items.volumeFromAMultiVolumeWork, "zh-CN");
		var expected = '<div class="csl-entry">奧古斯丁：《上帝之城》。王曉朝译。共三册。歷代基督教思想學術文庫古代系列。香港：道風書社，2004。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.volumeFromAMultiVolumeWork, "zh-TW");
		expected = '<div class="csl-entry">奧古斯丁：《上帝之城》。王曉朝譯。共三冊。歷代基督教思想學術文庫古代系列。香港：道風書社，2004。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Commentary or book in series with series number", function () {
		var output = makeBibliography(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-CN");
		var expected = '<div class="csl-entry">黃朱倫：《腓立比書：僕友的生命與事奉》。明道研經叢書50。香港：明道社，2006。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.commentaryOrBookInSeriesWithSeriesNumber, "zh-TW");
		expected = '<div class="csl-entry">黃朱倫：《腓立比書：僕友的生命與事奉》。明道研經叢書50。香港：明道社，2006。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Edition other than the first", function () {
		var output = makeBibliography(items.editionOtherThanTheFirst, "zh-CN");
		var expected = '<div class="csl-entry">吳立樂编：《浸會在華佈道百年史略》。修訂版。香港：浸信會出版部，1970。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.editionOtherThanTheFirst, "zh-TW");
		expected = '<div class="csl-entry">吳立樂編：《浸會在華佈道百年史略》。修訂版。香港：浸信會出版部，1970。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Booked viewed online", function () {
		var output = makeBibliography(items.bookViewedOnline, "zh-CN");
		var expected = '<div class="csl-entry">何衛中：《牧養神的群羊》。香港：金燈台，2010。http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.bookViewedOnline, "zh-TW");
		expected = '<div class="csl-entry">何衛中：《牧養神的群羊》。香港：金燈台，2010。http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::ebook", function () {
		var output = makeBibliography(items.ebook, "zh-CN");
		var expected = '<div class="csl-entry">曹雪芹：《紅樓夢》。Kindle版。Czech Republic：藝雅，2017。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.ebook, "zh-TW");
		expected = '<div class="csl-entry">曹雪芹：《紅樓夢》。Kindle版。Czech Republic：藝雅，2017。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Essay or chapter", function () {
		var output = makeBibliography(items.essayOrChapter, "zh-CN");
		var expected = '<div class="csl-entry">黄二冬：“天下一家”。页335–350于《地球村的演變》。千百文编。厦門：漢陽出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.essayOrChapter, "zh-TW");
		expected = '<div class="csl-entry">黄二冬：“天下一家”。頁335–350於《地球村的演變》。千百文編。厦門：漢陽出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Article in a lexicon or theological dictionary", function () {
		var output = makeBibliography(items.articleInALexiconOrTheologicalDictionary, "zh-CN");
		var expected = '<div class="csl-entry">馮來平：“基督的寬容”。页25–26于《世界神學辭典》第三册。邱宋恩编。共四册。上海：展徒出版社，1990。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.articleInALexiconOrTheologicalDictionary, "zh-TW");
		expected = '<div class="csl-entry">馮來平：“基督的寬容”。頁25–26於《世界神學辭典》第三冊。邱宋恩編。共四冊。上海：展徒出版社，1990。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Anonymous dictionary acticle", function () {
		var output = makeBibliography(items.anonymousDictionaryArticle, "zh-CN");
		var expected = '<div class="csl-entry">陳惠榮编：“文士”。页1022–1024于《證主聖經百科全書》第二册。共三册。香港：福音證主協會，1995。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.anonymousDictionaryArticle, "zh-TW");
		expected = '<div class="csl-entry">陳惠榮編：“文士”。頁1022–1024於《證主聖經百科全書》第二冊。共三冊。香港：福音證主協會，1995。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Classical or ancient text", function () {
		var output = makeBibliography(items.classicalOrAncientText, "zh-CN");
		var expected = '<div class="csl-entry">馬丁路德：“在信心中的祈禱”。页183–190于《屬靈操練之旅》。傅士德和史雅各编。袁達志和陶婉儀译。香港：天道書樓，2004。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.classicalOrAncientText, "zh-TW");
		expected = '<div class="csl-entry">馬丁路德：“在信心中的祈禱”。頁183–190於《屬靈操練之旅》。傅士德和史雅各編。袁達志和陶婉儀譯。香港：天道書樓，2004。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::ANF/NPNF/CCEL", function () {
		var output = makeBibliography(items.anf_npnf_ccel, "zh-CN");
		var expected = '<div class="csl-entry">貴鉤利：“人的造成10.2”。页19–20于《東方教父選集》。章文新编。沈鮮維幀、都孟高、馬葆煉和謝扶雅译。第二版。香港：基督教文藝，1989。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.anf_npnf_ccel, "zh-TW");
		expected = '<div class="csl-entry">貴鉤利：“人的造成10.2”。頁19–20於《東方教父選集》。章文新編。沈鮮維幀、都孟高、馬葆煉和謝扶雅譯。第二版。香港：基督教文藝，1989。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Journal article", function () {
		var output = makeBibliography(items.journalArticle, "zh-CN");
		var expected = '<div class="csl-entry">楊品通：“神學的本質探討”，《教會神學期刊》14（2003）：19–24。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.journalArticle, "zh-TW");
		expected = '<div class="csl-entry">楊品通：“神學的本質探討”，《教會神學期刊》14（2003）：19–24。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Journal article viewed online", function () {
		var output = makeBibliography(items.journalArticleViewedOnline, "zh-CN");
		var expected = '<div class="csl-entry">楊慶球：“路德與加爾文的社會政治思想”，《教會》69（2018）：29–42。https://www.churchchina.org/wp-content/uploads/ccpdf/069cc1801.pdf。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.journalArticleViewedOnline, "zh-TW");
		expected = '<div class="csl-entry">楊慶球：“路德與加爾文的社會政治思想”，《教會》69（2018）：29–42。https://www.churchchina.org/wp-content/uploads/ccpdf/069cc1801.pdf。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Magazine or newspaper article", function () {
		var output = makeBibliography(items.magazineOrNewspaperArticle, "zh-CN");
		var expected = '<div class="csl-entry">史馨：“馬克龍民望回升反擊黃背心之亂”，《亞洲週刊》33.12（2019）：36–37。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.magazineOrNewspaperArticle, "zh-TW");
		expected = '<div class="csl-entry">史馨：“馬克龍民望回升反擊黃背心之亂”，《亞洲週刊》33.12（2019）：36–37。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Thesis or dissertation", function () {
		var output = makeBibliography(items.thesis, "zh-CN");
		var expected = '<div class="csl-entry">劉庸：“基督教教育在南非華人教會群體中的發展模式”。博士論文，太平洋天國神學院，2000。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.thesis, "zh-TW");
		expected = '<div class="csl-entry">劉庸：“基督教教育在南非華人教會群體中的發展模式”。博士論文，太平洋天國神學院，2000。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Study bible note or comment", function () {
		var output = makeBibliography(items.studyBibleNoteOrComment, "zh-CN");
		var expected = '<div class="csl-entry">李少秋：“認識教義與靈命成長”。页2080–2081于《聖經研讀版 - 新譯本》。高明發和張達民编。第二版。香港：環球聖經公會，2011。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.studyBibleNoteOrComment, "zh-TW");
		expected = '<div class="csl-entry">李少秋：“認識教義與靈命成長”。頁2080–2081於《聖經研讀版 - 新譯本》。高明發和張達民編。第二版。香港：環球聖經公會，2011。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Conferenec paper", function () {
		var output = makeBibliography(items.conferencePaper, "zh-CN");
		var expected = '<div class="csl-entry">謝木水：“神學如何失去靈性？”。新加坡神學院益道論述會上发表之专文。新加坡，2010年10月4日。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.conferencePaper, "zh-TW");
		expected = '<div class="csl-entry">謝木水：“神學如何失去靈性？”。新加坡神學院益道論述會上發表之專文。新加坡，2010年10月4日。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Podcast or online video", function () {
		var output = makeBibliography(items.podcastOrOnlineVideo, "zh-CN");
		var expected =
			'<div class="csl-entry">楊柏滿：《復興的使命群體》華人教會網路（語音錄音）。http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.podcastOrOnlineVideo, "zh-TW");
		expected =
			'<div class="csl-entry">楊柏滿：《復興的使命群體》華人教會網路（語音錄音）。http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Broadcast", function () {
		var output = makeBibliography(items.broadcast, "zh-CN");
		var expected =
			'<div class="csl-entry">楊柏滿：《復興的使命群體》華人教會網路（語音錄音）。http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.broadcast, "zh-TW");
		expected =
			'<div class="csl-entry">楊柏滿：《復興的使命群體》華人教會網路（語音錄音）。http://www.church.com.hk/acms/content.asp?site=cdc&#38;op=show&#38;type=product&#38;code=019300&#38;layout=sermon。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Webpage", function () {
		var output = makeBibliography(items.webpage, "zh-CN");
		var expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.webpage, "zh-TW");
		expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Blogpost", function () {
		var output = makeBibliography(items.blogpost, "zh-CN");
		var expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.blogpost, "zh-TW");
		expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Forumpost", function () {
		var output = makeBibliography(items.forumPost, "zh-CN");
		var expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.forumPost, "zh-TW");
		expected = '<div class="csl-entry">劉小楓：“歷史玩完了？”。《漢語基督教文化研究所》。2001年5月3日。http://www.iscs.org.hk/article18.htm。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::EnglishAuthor", function () {
		var output = makeBibliography(items.englishAuthor, "zh-CN");
		var expected = '<div class="csl-entry">Colin R. Alan：《淚眼先知耶利米》。台北：校園書房出版社，1989。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.englishAuthor, "zh-TW");
		expected = '<div class="csl-entry">Colin R. Alan：《淚眼先知耶利米》。台北：校園書房出版社，1989。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Journal article with translator", function () {
		var output = makeBibliography(items.journalWithTranslator, "zh-CN");
		var expected = '<div class="csl-entry">約翰•歐文（述寧译）：“約翰•歐文論牧師的責任”，《教會》70（2018）：19。https://www.churchchina.org/wp-content/uploads/ccpdf/070cc1803.pdf。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.journalWithTranslator, "zh-TW");
		expected = '<div class="csl-entry">約翰•歐文（述寧譯）：“約翰•歐文論牧師的責任”，《教會》70（2018）：19。https://www.churchchina.org/wp-content/uploads/ccpdf/070cc1803.pdf。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Book with 2 editors", function () {
		var output = makeBibliography(items.editedBookWith2Editors, "zh-CN");
		var expected = '<div class="csl-entry">李三谷和李二谷编：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.editedBookWith2Editors, "zh-TW");
		expected = '<div class="csl-entry">李三谷和李二谷編：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Book with 2 translators", function () {
		var output = makeBibliography(items.translatedBookWith2Translators, "zh-CN");
		var expected = '<div class="csl-entry">李三谷和李二谷译：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.translatedBookWith2Translators, "zh-TW");
		expected = '<div class="csl-entry">李三谷和李二谷譯：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Book with 3 editors", function () {
		var output = makeBibliography(items.editedBookWith3Editors, "zh-CN");
		var expected = '<div class="csl-entry">李三谷、李二谷和李一谷编：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.editedBookWith3Editors, "zh-TW");
		expected = '<div class="csl-entry">李三谷、李二谷和李一谷編：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);
	});

	it("Bibliography::Book with 3 translators", function () {
		var output = makeBibliography(items.translatedBookWith3Translators, "zh-CN");
		var expected = '<div class="csl-entry">李三谷、李二谷和李一谷译：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);

		output = makeBibliography(items.translatedBookWith3Translators, "zh-TW");
		expected = '<div class="csl-entry">李三谷、李二谷和李一谷譯：《舊約小品》。台北：校園出版社，2003。</div>';
		assert.equal(output, expected);
	});
});
