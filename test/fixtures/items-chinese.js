'use strict';

module.exports = {
    book: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "淚眼先知耶利米",
            "author": [
                {
                    "family": "楊",
                    "given": "牧谷"
                }
            ],
            "publisher": "校園書房出版社",
            "publisher-place": "台北",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1989
                    ]
                ]
            },
            "type": "book"
        }
    },
    editedBook: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "舊約小品",
            "editor": [
                {
                    "family": "李",
                    "given": "三谷"
                }
            ],
            "publisher": "校園出版社",
            "publisher-place": "台北",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2003
                    ]
                ]
            },
            "type": "book"
        }
    },
    bookWith2Or3AuthorsEditors: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "雨過天晴",
            "author": [
                {
                    "family": "杜",
                    "given": "德民",
                },
                {
                    "family": "張",
                    "given": "愛楊",
                },
                {
                    "family": "陳",
                    "given": "豐裕",
                }
            ],
            "publisher": "和聯出版社",
            "publisher-place": "新加坡",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2003
                    ]
                ]
            },
            "type": "book"
        }        
    },
    bookWithMoreThan3AuthorsEditors: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "聖經正典與經外文獻導論",
            "author": [
                {
                    "family": "鮑",
                    "given": "維鈞",
                },
                {
                    "family": "黃",
                    "given": "錫木",
                },
                {
                    "family": "羅",
                    "given": "慶才",
                },
                {
                    "family": "張",
                    "given": "略",
                },
                {
                    "family": "岑",
                    "given": "少麟",
                }
            ],
            "collection-title": "聖經導論叢書",
            "publisher": "基道",
            "publisher-place": "香港",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2001
                    ]
                ]
            },
            "type": "book"
        }        
    },
    volumeFromAMultiVolumeWork: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "上帝之城",
            "author": [
                {
                    "family": "奧古斯丁",
                    "given": "",
                }
            ],
            "translator":[
                {
                    "family": "王",
                    "given": "曉朝",
                }
            ],
            "number-of-volumes": 3,
            "volume": 2,
            "collection-title":"歷代基督教思想學術文庫古代系列",
            "publisher": "道風書社",
            "publisher-place": "香港",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2004
                    ]
                ]
            },
            "type": "book"
        }        
    },
    commentaryOrBookInSeriesWithSeriesNumber: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "腓立比書：僕友的生命與事奉",
            "author": [
                {
                    "family": "黃",
                    "given": "朱倫",
                }
            ],
            "collection-title":"明道研經叢書50",
            "publisher": "明道社",
            "publisher-place": "香港",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2006
                    ]
                ]
            },
            "type": "book"
        }        
    },
    editionOtherThanTheFirst: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "浸會在華佈道百年史略",
            "editor": [
                {
                    "family": "吳",
                    "given": "立樂"
                }
            ],
            "edition": "修訂版",
            "publisher": "浸信會出版部",
            "publisher-place": "香港",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1970
                    ]
                ]
            },
            "type": "book"
        }        
    },
    bookViewedOnline: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "牧養神的群羊",
            "author": [
                {
                    "family": "何",
                    "given": "衛中"
                }
            ],
            "publisher": "金燈台",
            "publisher-place": "香港",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2010
                    ]
                ]
            },
            "URL": "http//www.goldenlampstand.org/download/GL217A_Pastoral_TC.pdf",
            "accessed": {
                "date-parts": [
                    [
                        2014,
                        9,
                        8
                    ]
                ]
            },
            "type": "book"
        }        
    },
    essayOrChapter: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "天下一家",
            "author": [
                {
                    "family": "黄",
                    "given": "二冬"
                }
            ],
            "editor": [
                {
                    "family": "千",
                    "given": "百文"
                }            
            ],
            "container-title": "地球村的演變",
            "publisher": "漢陽出版社",
            "publisher-place": "厦門",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2003
                    ]
                ]
            },
            "page": "335-350",
            "type": "chapter"
        }
    },
    articleInALexiconOrTheologicalDictionary: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "基督的寬容",
            "author": [
                {
                    "family": "馮",
                    "given": "來平"
                }
            ],
            "editor": [
                {
                    "family": "邱",
                    "given": "宋恩"
                }
            ],
            "container-title": "世界神學辭典",
            "publisher": "展徒出版社",
            "publisher-place": "上海",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1990
                    ]
                ]
            },
            "page": "25-26",
            "volume": 3,
            "number-of-volumes":4,
            "type": "entry-dictionary"
        }
    },
    journalArticle: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "神學的本質探討",
            "author": [
                {
                    "family": "楊",
                    "given": "品通",
                }
            ],
            "container-title":"教會神學期刊",
            "language":"zh-CN",
            "issue":"14",
            "issued": {
                "date-parts": [
                    [
                        2003,
                        5
                    ]
                ]
            },
            "page": "19-24",
            "type": "article-journal"
        }        
    },
    magazineOrNewspaperArticle: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "美國華僑習俗趣談",
            "author": [
                {
                    "family": "李",
                    "given": "約翰",
                }
            ],
            "container-title":"时代華僑周刊",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1957,
                        10,
                        30
                    ]
                ]
            },
            "page": "43-47",
            "type": "article-magazine"
        }
    },
    thesis: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "基督教教育在南非華人教會群體中的發展模式",
            "author": [
                {
                    "family": "劉",
                    "given": "庸",
                }                
            ],
            "genre":"博士論文",
            "language":"zh-CN",
            "publisher":"太平洋天國神學院",
            "issued": {
                "date-parts": [
                    [
                        2000
                    ]
                ]
            },            
            "type": "thesis"
        }         
    },
    conferencePaper: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "神學如何失去靈性？",
            "author": [
                {
                    "family": "謝",
                    "given": "木水"
                }
            ],
            "event": "新加坡神學院益道論述會",
            "publisher-place": "新加坡",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2010,
                        10,
                        4
                    ]
                ]
            },
            "type": "paper-conference"
        }
    },
    webpage: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "歷史玩完了？",
            "container-title":"漢語基督教文化研究所",
            "author": [
                {
                    "family": "劉",
                    "given": "小楓",
                }                
            ],
            "URL":"http://www.iscs.org.hk/article18.htm",
            "language":"zh-CN",
            "accessed": {
                "date-parts": [
                    [
                        2002,
                        8,
                        5
                    ]
                ]
            },
            "issued": {
                "date-parts": [
                    [
                        2001,
                        5,
                        3
                    ]
                ]
            },
            "type": "webpage"
        }         
    },
    blogpost: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "歷史玩完了？",
            "container-title":"漢語基督教文化研究所",
            "author": [
                {
                    "family": "劉",
                    "given": "小楓",
                }                
            ],
            "URL":"http://www.iscs.org.hk/article18.htm",
            "language":"zh-CN",
            "accessed": {
                "date-parts": [
                    [
                        2002,
                        8,
                        5
                    ]
                ]
            },
            "issued": {
                "date-parts": [
                    [
                        2001,
                        5,
                        3
                    ]
                ]
            },
            "type": "post-weblog"
        }         
    },
    forumPost: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "歷史玩完了？",
            "container-title":"漢語基督教文化研究所",
            "author": [
                {
                    "family": "劉",
                    "given": "小楓",
                }                
            ],
            "URL":"http://www.iscs.org.hk/article18.htm",
            "language":"zh-CN",
            "accessed": {
                "date-parts": [
                    [
                        2002,
                        8,
                        5
                    ]
                ]
            },
            "issued": {
                "date-parts": [
                    [
                        2001,
                        5,
                        3
                    ]
                ]
            },
            "type": "post"
        }         
    },
}
