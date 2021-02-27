"use strict";

module.exports = {
	book: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Basic Introduction to Biblical Hebrew, with CD",
			"title-short": "Basic Introduction",
			author: [
				{
					family: "Hackett",
					given: "J. A.",
				},
			],
			publisher: "Hendrickson",
			"publisher-place": "Peabody, MA",
			language: "en-US",
			issued: {
				"date-parts": [[2010]],
			},
			type: "book",
		},
	},
	editedBook: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "The Westminster Confession and Catechisms in Modern English",
			"title-short": "Westminster Confession",
			editor: [
				{
					family: "Ward",
					given: "Rowland",
				},
			],
			publisher: "New Melbourne Press",
			"publisher-place": "Wantirna",
			language: "en-US",
			issued: {
				"date-parts": [[2000]],
			},
			type: "book",
		},
	},
	bookWith2Or3AuthorsEditors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Biblical Hebrew: A Text and Workbook",
			"title-short": "Biblical Hebrew",
			author: [
				{
					family: "Kittel",
					given: "B. P.",
				},
				{
					family: "Hoffer",
					given: "V.",
				},
				{
					family: "Wright",
					given: "R. A.",
				},
			],
			publisher: "Yale University Press",
			"publisher-place": "New Haven",
			language: "en-US",
			issued: {
				"date-parts": [[1989]],
			},
			type: "book",
		},
	},
	bookWithMoreThan3AuthorsEditors: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "From Babylon to Eternity: The Exile Remembered and Constructed in Text and Tradition",
			"title-short": "Babylon to Eternity",
			author: [
				{
					family: "Becking",
					given: "Bob",
				},
				{
					family: "Cannegieter",
					given: "Alex",
				},
				{
					family: "van de Poll",
					given: "Wilfred",
				},
				{
					family: "Wetter",
					given: "Anne-Mareike",
				},
			],
			"collection-title": "BibleWorld",
			language: "en-US",
			publisher: "Equinox",
			"publisher-place": "London",
			issued: {
				"date-parts": [[2009]],
			},
			type: "book",
		},
	},
	classicalOrAncientTextWholeVolume: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Summa Theologiae: Latin Text and English Translation, Introductions, Notes, Appendices and Glossaries. Vol. 10: Cosmogony (1a. 65–74)",
			"title-short": "Summa Theologiae",
			author: [
				{
					family: "Aquinas",
					given: "Thomas",
				},
			],
			editor: [
				{
					family: "Wallace",
					given: "William A.",
				},
			],
			"number-of-volumes": 60,
			language: "en-US",
			publisher: "Blackfriars",
			"publisher-place": "London",
			issued: {
				"date-parts": [[1964]],
			},
			type: "book",
		},
	},
	volumeFromAMultiVolumeWork: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Essentials of Evangelical Theology",
			"title-short": "Essentials",
			author: [
				{
					family: "Bloesch",
					given: "Donald",
				},
			],
			"number-of-volumes": 2,
			volume: 2,
			language: "en-US",
			publisher: "Harper & Row",
			"publisher-place": "San Francisco",
			issued: {
				"date-parts": [[1982]],
			},
			type: "book",
		},
	},
	commentaryOrBookInSeriesWithSeriesNumber: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "1 Chronicles",
			"title-short": "1 Chronicles",
			author: [
				{
					family: "Braun",
					given: "R. L.",
				},
			],
			"collection-title": "Word Biblical Commentary",
			"collection-number": 14,
			language: "en-US",
			publisher: "Word",
			"publisher-place": "Waco",
			issued: {
				"date-parts": [[1986]],
			},
			type: "book",
		},
	},
	editionOtherThanTheFirst: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "From Paradise to Promised Land: An Introduction to the Pentateuch",
			"title-short": "Paradise to Promised Land",
			author: [
				{
					family: "Alexander",
					given: "T. Desmond",
				},
			],
			edition: 3,
			language: "en-US",
			publisher: "Baker",
			"publisher-place": "Grand Rapids",
			issued: {
				"date-parts": [[2012]],
			},
			type: "book",
		},
	},
	bookViewedOnline: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Basic Introduction to Biblical Hebrew, with CD",
			"title-short": "Basic Introduction",
			author: [
				{
					family: "Hackett",
					given: "J. A.",
				},
			],
			language: "en-US",
			publisher: "Hendrickson",
			"publisher-place": "Peabody, MA",
			issued: {
				"date-parts": [[2010]],
			},
			URL: "http://books.google.com.au/books?id=UuMRFJqmJ_sC",
			accessed: {
				"date-parts": [[2015, 1, 29]],
			},
			type: "book",
		},
	},
	ebook: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Mere Christianity",
			"title-short": "Mere Christianity",
			author: [
				{
					family: "Lewis",
					given: "C. S.",
				},
			],
			edition: "Kindle",
			language: "en-US",
			publisher: "Fount",
			issued: {
				"date-parts": [[2010]],
			},
			type: "book",
		},
	},
	essayOrChapter: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Frame for the Book of the Twelve: Hosea 1–3 and Malachi",
			"title-short": "Frame",
			author: [
				{
					family: "Watts",
					given: "John D. W.",
				},
			],
			editor: [
				{
					family: "Nogalski",
					given: "James",
				},
				{
					family: "Sweeney",
					given: "Marvin",
				},
			],
			"container-title": "Reading and Hearing the Book of the Twelve",
			language: "en-US",
			publisher: "Society of Biblical Literature",
			"publisher-place": "Atlanta",
			issued: {
				"date-parts": [[2000]],
			},
			page: "209-217",
			type: "chapter",
		},
	},
	articleInALexiconOrTheologicalDictionary: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Smell; ὀσμή",
			"title-short": "Smell; ὀσμή",
			author: [
				{
					family: "Flender",
					given: "O.",
				},
				{
					family: "Brown",
					given: "C.",
				},
			],
			editor: [
				{
					family: "Brown",
					given: "Colin",
				},
			],
			"container-title": "Dictionary of New Testament Theology",
			language: "en-US",
			publisher: "Zondervan",
			"publisher-place": "Grand Rapids",
			issued: {
				"date-parts": [[1992]],
			},
			page: "599-601",
			volume: 3,
			"number-of-volumes": 4,
			type: "entry-dictionary",
		},
	},
	encyclopediaOrDictionary: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Jacob Narrative",
			"title-short": "Jacob Narrative",
			author: [
				{
					family: "Walters",
					given: "Stanley D.",
				},
			],
			editor: [
				{
					family: "Freedman",
					given: "David Noel",
				},
			],
			"container-title": "The Anchor Bible Dictionary",
			language: "en-US",
			publisher: "Doubleday",
			"publisher-place": "New York",
			issued: {
				"date-parts": [[1992]],
			},
			page: "599-606",
			volume: 3,
			"number-of-volumes": 6,
			type: "entry-encyclopedia",
		},
	},
	anonymousDictionaryArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Canon of Scripture",
			"title-short": "Canon of Scripture",
			editor: [
				{
					family: "Cross",
					given: "F. L.",
				},
				{
					family: "Livingstone",
					given: "E. A.",
				},
			],
			"container-title": "The Oxford Dictionary of the Christian Church",
			language: "en-US",
			publisher: "Oxford University Press",
			"publisher-place": "Oxford",
			issued: {
				"date-parts": [[1983]],
			},
			page: "232-233",
			edition: 2,
			type: "entry-dictionary",
		},
	},
	classicalOrAncientText: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Disputation on the Power and Efficacy of Indulgences",
			"title-short": "Disputation",
			author: [
				{
					family: "Luther",
					given: "Martin",
				},
			],
			editor: [
				{
					family: "Grimm",
					given: "Harold J.",
				},
			],
			translator: [
				{
					family: "Jacobs",
					given: "C. M.",
				},
			],
			"container-title": "Luther’s Works: Career of the Reformer: I",
			language: "en-US",
			publisher: "Concordia",
			"publisher-place": "St. Louis, Mo.",
			issued: {
				"date-parts": [[1958]],
			},
			page: "17-33",
			volume: 31,
			"number-of-volumes": 55,
			type: "chapter",
		},
	},
	anf_npnf_ccel: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "The Hexaemeron",
			author: [
				{
					family: "Basil",
					given: "",
				},
			],
			"container-title": "Nicene and Post-Nicene Fathers",
			language: "en-US",
			URL: "http://www.ccel.org/ccel/schaff/npnf208.viii.iii.html",
			accessed: {
				"date-parts": [[1958]],
			},
			type: "chapter",
		},
	},
	journalArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Darkness Between Brothers: Solomon and Adonijah",
			"title-short": "Darkness",
			author: [
				{
					family: "Long",
					given: "B. O.",
				},
			],
			"container-title": "Journal for the Study of the Old Testament",
			language: "en-US",
			issued: {
				"date-parts": [[1981]],
			},
			page: "79-94",
			volume: 19,
			type: "article-journal",
		},
	},
	journalArticleViewedOnline: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Freedom That Is No Freedom: Jeremiah 34 and the Sabbatical Principle",
			"title-short": "Freedom",
			author: [
				{
					family: "Jacobson",
					given: "Rolf",
				},
			],
			"container-title": "Word & World",
			language: "en-US",
			issued: {
				"date-parts": [[2002]],
			},
			page: "396-405",
			issue: 4,
			volume: 22,
			URL: "http://web.a.ebscohost.com/ehost/pdfviewer/",
			accessed: {
				"date-parts": [[2015, 1, 29]],
			},
			type: "article-journal",
		},
	},
	magazineOrNewspaperArticle: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A Tale of Two Scientists",
			"title-short": "Tale",
			author: [
				{
					family: "Stafford",
					given: "Tim",
				},
			],
			"container-title": "Christianity Today",
			language: "en-US",
			issued: {
				"date-parts": [[2012, 7]],
			},
			page: "22-29",
			type: "article-magazine",
		},
	},
	thesis: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "A New Glimpse of Day One: An Intertextual History of Genesis 1.1–5 in Hebrew and Greek Texts up to 200 CE",
			"title-short": "New Glimpse",
			author: [
				{
					family: "Giere",
					given: "Samuel D.",
				},
			],
			genre: "Ph.D.",
			language: "en-US",
			publisher: "The University of St. Andrews",
			issued: {
				"date-parts": [[2007]],
			},
			type: "thesis",
		},
	},
	studyBibleNoteOrComment: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Introduction: Malachi",
			"title-short": "Malachi",
			author: [
				{
					family: "Wolf",
					given: "Herbert",
				},
				{
					family: "Stek",
					given: "John H.",
				},
			],
			editor: [
				{
					family: "Barker",
					given: "Kenneth L.",
				},
			],
			"container-title": "The NIV Study Bible",
			language: "en-US",
			publisher: "Zondervan",
			"publisher-place": "Grand Rapids",
			issued: {
				"date-parts": [[2011]],
			},
			page: "1561-1564",
			type: "chapter",
		},
	},
	conferencePaper: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Oral Culture and Written Documents",
			"title-short": "Oral Culture",
			author: [
				{
					family: "Niditch",
					given: "Susan",
				},
			],
			event: "annual meeting of the New England Region of the SBL",
			language: "en-US",
			"publisher-place": "Worcester, MA",
			issued: {
				"date-parts": [[1994, 3, 25]],
			},
			type: "paper-conference",
		},
	},
	podcastOrOnlineVideo: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "25 Years after Oslo, the Middle East Peace Process Is in Pieces",
			"title-short": "25 Years after Oslo",
			author: [
				{
					family: "Tlozek",
					given: "Eric",
				},
			],
			"collection-title": "The World Today",
			language: "en-US",
			medium: "Podcast audio",
			URL: "http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450",
			type: "song",
		},
	},
	broadcast: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "25 Years after Oslo, the Middle East Peace Process Is in Pieces",
			"title-short": "25 Years after Oslo",
			author: [
				{
					family: "Tlozek",
					given: "Eric",
				},
			],
			"collection-title": "The World Today",
			language: "en-US",
			medium: "Podcast audio",
			URL: "http://www.abc.net.au/radio/programs/worldtoday/25-years-after-oslo-the-middle-east-peace-process-is-in-pieces/10242450",
			type: "broadcast",
		},
	},
	webpage: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Creation & Time in Basil’s Hexaemeron",
			"title-short": "Creation & Time",
			author: [
				{
					family: "Brown",
					given: "Andrew",
				},
			],
			"container-title": "Sapientia",
			language: "en-US",
			accessed: {
				"date-parts": [[2018, 1, 29]],
			},
			URL: "http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/",
			issued: {
				"date-parts": [[2017, 5, 3]],
			},
			type: "webpage",
		},
	},
	blogPost: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Creation & Time in Basil’s Hexaemeron",
			"title-short": "Creation & Time",
			author: [
				{
					family: "Brown",
					given: "Andrew",
				},
			],
			"container-title": "Sapientia",
			language: "en-US",
			accessed: {
				"date-parts": [[2018, 1, 29]],
			},
			URL: "http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/",
			issued: {
				"date-parts": [[2017, 5, 3]],
			},
			type: "post-weblog",
		},
	},
	forumPost: {
		"ITEM-1": {
			id: "ITEM-1",
			title: "Creation & Time in Basil’s Hexaemeron",
			"title-short": "Creation & Time",
			author: [
				{
					family: "Brown",
					given: "Andrew",
				},
			],
			"container-title": "Sapientia",
			language: "en-US",
			accessed: {
				"date-parts": [[2018, 1, 29]],
			},
			URL: "http://henrycenter.tiu.edu/2017/05/creation-time-in-basils-hexaemeron/",
			issued: {
				"date-parts": [[2017, 5, 3]],
			},
			type: "post",
		},
	},
};
