"use strict";

module.exports = {
	book: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "淚眼先知耶利米",
			author: [
				{
					family: "楊牧谷",
					given: "",
				},
			],
			publisher: "校園書房出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[1989]],
			},
			type: "book",
		},
	},
	editedBook: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "舊約小品",
			editor: [
				{
					family: "李三谷",
					given: "",
				},
			],
			publisher: "校園出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[2003]],
			},
			type: "book",
		},
	},
	bookWith2Or3AuthorsEditors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "雨過天晴",
			author: [
				{
					family: "杜德民",
					given: "",
				},
				{
					family: "張愛楊",
					given: "",
				},
				{
					family: "陳豐裕",
					given: "",
				},
			],
			publisher: "和聯出版社",
			"publisher-place": "新加坡",
			issued: {
				"date-parts": [[2003]],
			},
			type: "book",
		},
	},
	bookWithMoreThan3AuthorsEditors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "聖經正典與經外文獻導論",
			author: [
				{
					family: "鮑維鈞",
					given: "",
				},
				{
					family: "黃錫木",
					given: "",
				},
				{
					family: "羅慶才",
					given: "",
				},
				{
					family: "張略",
					given: "",
				},
				{
					family: "岑少麟",
					given: "",
				},
			],
			"collection-title": "聖經導論叢書",
			publisher: "基道",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2001]],
			},
			type: "book",
		},
	},
	volumeFromAMultiVolumeWork: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "上帝之城",
			author: [
				{
					family: "奧古斯丁",
					given: "",
				},
			],
			translator: [
				{
					family: "王曉朝",
					given: "",
				},
			],
			"number-of-volumes": 3,
			volume: 2,
			"collection-title": "歷代基督教思想學術文庫古代系列",
			publisher: "道風書社",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2004]],
			},
			type: "book",
		},
	},
	commentaryOrBookInSeriesWithSeriesNumber: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "腓立比書：僕友的生命與事奉",
			"title-short": "腓立比書",
			author: [
				{
					family: "黃朱倫",
					given: "",
				},
			],
			"collection-title": "明道研經叢書",
			"collection-number": "50",
			publisher: "明道社",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2006]],
			},
			type: "book",
		},
	},
	editionOtherThanTheFirst: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "浸會在華佈道百年史略",
			editor: [
				{
					family: "吳立樂",
					given: "",
				},
			],
			edition: "修訂版",
			publisher: "浸信會出版部",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[1970]],
			},
			type: "book",
		},
	},
	bookViewedOnline: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "牧養神的群羊",
			author: [
				{
					family: "何衛中",
					given: "",
				},
			],
			publisher: "金燈台",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2010]],
			},
			URL: "http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf",
			accessed: {
				"date-parts": [[2014, 9, 8]],
			},
			type: "book",
		},
	},
	ebook: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "紅樓夢",
			"title-short": "紅樓夢",
			author: [
				{
					family: "曹雪芹",
					given: "",
				},
			],
			edition: "Kindle版",
			publisher: "藝雅",
			"publisher-place": "Czech Republic",
			issued: {
				"date-parts": [[2017]],
			},
			page: "Loc 134/18602",
			type: "book",
		},
	},
	essayOrChapter: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "天下一家",
			author: [
				{
					family: "黄二冬",
					given: "",
				},
			],
			editor: [
				{
					family: "千百文",
					given: "",
				},
			],
			"container-title": "地球村的演變",
			publisher: "漢陽出版社",
			"publisher-place": "厦門",
			issued: {
				"date-parts": [[2003]],
			},
			page: "335-350",
			type: "chapter",
		},
	},
	articleInALexiconOrTheologicalDictionary: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "基督的寬容",
			author: [
				{
					family: "馮來平",
					given: "",
				},
			],
			editor: [
				{
					family: "邱宋恩",
					given: "",
				},
			],
			"container-title": "世界神學辭典",
			publisher: "展徒出版社",
			"publisher-place": "上海",
			issued: {
				"date-parts": [[1990]],
			},
			page: "25-26",
			volume: 3,
			"number-of-volumes": 4,
			type: "entry-dictionary",
		},
	},
	anonymousDictionaryArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "文士",
			"title-short": "文士",
			editor: [
				{
					family: "陳惠榮",
					given: "",
				},
			],
			"container-title": "證主聖經百科全書",
			publisher: "福音證主協會",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[1995]],
			},
			page: "1022-1024",
			volume: 2,
			"number-of-volumes": 3,
			type: "entry-dictionary",
		},
	},
	classicalOrAncientText: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "在信心中的祈禱",
			"title-short": "在信心中的祈禱",
			author: [
				{
					family: "馬丁路德",
					given: "",
				},
			],
			editor: [
				{
					family: "傅士德",
					given: "",
				},
				{
					family: "史雅各",
					given: "",
				},
			],
			translator: [
				{
					family: "袁達志",
					given: "",
				},
				{
					family: "陶婉儀",
					given: "",
				},
			],
			"container-title": "屬靈操練之旅",
			publisher: "天道書樓",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2004]],
			},
			page: "183-190",
			type: "chapter",
		},
	},
	anf_npnf_ccel: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "人的造成10.2",
			author: [
				{
					family: "貴鉤利",
					given: "",
				},
			],
			editor: [
				{
					family: "章文新",
					given: "",
				},
			],
			translator: [
				{
					family: "沈鮮維幀",
					given: "",
				},
				{
					family: "都孟高",
					given: "",
				},
				{
					family: "馬葆煉",
					given: "",
				},
				{
					family: "謝扶雅",
					given: "",
				},
			],
			"container-title": "東方教父選集",
			publisher: "基督教文藝",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[1989]],
			},
			edition: 2,
			page: "19-20",
			type: "chapter",
		},
	},
	journalArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "神學的本質探討",
			author: [
				{
					family: "楊品通",
					given: "",
				},
			],
			"container-title": "教會神學期刊",
			issue: "14",
			issued: {
				"date-parts": [[2003, 5]],
			},
			page: "19-24",
			type: "article-journal",
		},
	},
	journalArticleViewedOnline: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "路德與加爾文的社會政治思想",
			"title-short": "路德與加爾文的社會政治思想",
			author: [
				{
					family: "楊慶球",
					given: "",
				},
			],
			"container-title": "教會",
			issued: {
				"date-parts": [[2018]],
			},
			page: "29-42",
			issue: "69",
			URL: "https://www.churchchina.org/wp-content/uploads/ccpdf/069cc1801.pdf",
			type: "article-journal",
		},
	},
	magazineOrNewspaperArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "馬克龍民望回升反擊黃背心之亂",
			author: [
				{
					family: "史馨",
					given: "",
				},
			],
			"container-title": "亞洲週刊",
			issued: {
				"date-parts": [[2019]],
			},
			issue: "12",
			volume: "33",
			page: "36-37",
			type: "article-magazine",
		},
	},
	thesis: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "基督教教育在南非華人教會群體中的發展模式",
			author: [
				{
					family: "劉庸",
					given: "",
				},
			],
			genre: "博士論文",
			publisher: "太平洋天國神學院",
			issued: {
				"date-parts": [[2000]],
			},
			type: "thesis",
		},
	},
	studyBibleNoteOrComment: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "認識教義與靈命成長",
			"title-short": "認識教義與靈命成長",
			author: [
				{
					family: "李少秋",
					given: "",
				},
			],
			editor: [
				{
					family: "高明發",
					given: "",
				},
				{
					family: "張達民",
					given: "",
				},
			],
			"container-title": "聖經研讀版 - 新譯本",
			publisher: "環球聖經公會",
			"publisher-place": "香港",
			issued: {
				"date-parts": [[2011]],
			},
			edition: 2,
			page: "2080-2081",
			type: "chapter",
		},
	},
	conferencePaper: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "神學如何失去靈性？",
			author: [
				{
					family: "謝木水",
					given: "",
				},
			],
			event: "新加坡神學院益道論述會",
			"publisher-place": "新加坡",
			issued: {
				"date-parts": [[2010, 10, 4]],
			},
			type: "paper-conference",
		},
	},
	podcastOrOnlineVideo: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "復興的使命群體",
			"title-short": "復興的使命群體",
			author: [
				{
					family: "楊柏滿",
					given: "",
				},
			],
			"collection-title": "華人教會網路",
			medium: "語音錄音",
			URL: "http://www.church.com.hk/acms/content.asp?site=cdc&op=show&type=product&code=019300&layout=sermon",
			type: "song",
		},
	},
	webpage: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "歷史玩完了？",
			"container-title": "漢語基督教文化研究所",
			author: [
				{
					family: "劉小楓",
					given: "",
				},
			],
			URL: "http://www.iscs.org.hk/article18.htm",
			accessed: {
				"date-parts": [[2002, 8, 5]],
			},
			issued: {
				"date-parts": [[2001, 5, 3]],
			},
			type: "webpage",
		},
	},
	blogpost: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "歷史玩完了？",
			"container-title": "漢語基督教文化研究所",
			author: [
				{
					family: "劉小楓",
					given: "",
				},
			],
			URL: "http://www.iscs.org.hk/article18.htm",
			accessed: {
				"date-parts": [[2002, 8, 5]],
			},
			issued: {
				"date-parts": [[2001, 5, 3]],
			},
			type: "post-weblog",
		},
	},
	forumPost: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "歷史玩完了？",
			"container-title": "漢語基督教文化研究所",
			author: [
				{
					family: "劉小楓",
					given: "",
				},
			],
			URL: "http://www.iscs.org.hk/article18.htm",
			accessed: {
				"date-parts": [[2002, 8, 5]],
			},
			issued: {
				"date-parts": [[2001, 5, 3]],
			},
			type: "post",
		},
	},
	englishAuthor: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "淚眼先知耶利米",
			author: [
				{
					family: "Colin",
					given: "R. Alan",
				},
			],
			publisher: "校園書房出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[1989]],
			},
			type: "book",
		},
	},
	journalWithTranslator: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "約翰•歐文論牧師的責任",
			author: [
				{
					family: "約翰•歐文",
					given: "",
				},
			],
			translator: [
				{
					family: "述寧",
					given: "",
				},
			],
			"container-title": "教會",
			issue: "70",
			issued: {
				"date-parts": [[2018, 3]],
			},
			URL: "https://www.churchchina.org/wp-content/uploads/ccpdf/070cc1803.pdf",
			accessed: {
				"date-parts": [[2019, 1, 15]],
			},
			page: "19",
			type: "article-journal",
		},
	},
	editedBookWith2Editors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "舊約小品",
			editor: [
				{
					family: "李三谷",
					given: "",
				},
				{
					family: "李二谷",
					given: "",
				},
			],
			publisher: "校園出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[2003]],
			},
			type: "chapter",
		},
	},
	translatedBookWith2Translators: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "舊約小品",
			translator: [
				{
					family: "李三谷",
					given: "",
				},
				{
					family: "李二谷",
					given: "",
				},
			],
			publisher: "校園出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[2003]],
			},
			type: "chapter",
		},
	},
	editedBookWith3Editors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "舊約小品",
			editor: [
				{
					family: "李三谷",
					given: "",
				},
				{
					family: "李二谷",
					given: "",
				},
				{
					family: "李一谷",
					given: "",
				},
			],
			publisher: "校園出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[2003]],
			},
			type: "chapter",
		},
	},
	translatedBookWith3Translators: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "舊約小品",
			translator: [
				{
					family: "李三谷",
					given: "",
				},
				{
					family: "李二谷",
					given: "",
				},
				{
					family: "李一谷",
					given: "",
				},
			],
			publisher: "校園出版社",
			"publisher-place": "台北",
			issued: {
				"date-parts": [[2003]],
			},
			type: "chapter",
		},
	},
};
