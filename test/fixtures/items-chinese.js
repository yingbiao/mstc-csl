'use strict';

module.exports = {
    book: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "泪眼先知耶利米",
            "author": [
                {
                    "family": "杨",
                    "given": "牧谷"
                }
            ],
            "publisher": "校园书房出版社",
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
    singleAuthorEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Clash of Civilizations",
            "author": [
                {
                    "family": "Huntington",
                    "given": "Samuel P."
                }
            ],
            "publisher": "Touchstone Books",
            "publisher-place": "London",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1998
                    ]
                ]
            },
            "type": "book"
        }
    },
    singleAuthorWithTranslatorChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "历史学",
            "author": [
                {
                    "family": "博",
                    "given": "能汉"
                }
            ],
            "translator": [
                {
                    "family": "黄",
                    "given": "晓兰",
                }
            ],
            "publisher": "天天出版社",
            "publisher-place": "香港",
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
    singleEditorChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "旧约小品",
            "editor": [
                {
                    "family": "李",
                    "given": "三谷"
                }
            ],
            "publisher": "校园出版社",
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
    singleEditorEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Love of Brothers",
            "editor": [
                {
                    "family": "Headman",
                    "given": "David",
                    "static-ordering": false
                }
            ],
            "publisher": "Evergreen Books",
            "publisher-place": "London",
            "language":"en-US",
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
    bookMultipleEditorsEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Novum Testamentum Graece",
            "editor": [
                {
                    "family": "Barbara",
                    "given": "",
                },
                {
                    "family": "Aland",
                    "given": "Kurt",
                },
                {
                    "family": "Karavidopoulos",
                    "given": "Johannes",
                },
                {
                    "family": "Martini",
                    "given": "Carlo M.",
                },
                {
                    "family": "Metzger",
                    "given": "Bruce M.",
                }
            ],
            "edition":"27th rev.",
            "publisher": "Deutsche Bibelgesellschaft",
            "publisher-place": "Stuttgart",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1993
                    ]
                ]
            },
            "type": "book"
        }
    },
    bookMultipleAuthorsChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "雨过天晴",
            "author": [
                {
                    "family": "杜",
                    "given": "德民",
                },
                {
                    "family": "张",
                    "given": "爱杨",
                },
                {
                    "family": "陈",
                    "given": "丰裕",
                }
            ],
            "publisher": "和联出版社",
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
    bookMultipleAuthorsEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Sun Is Black",
            "author": [
                {
                    "family": "Victor",
                    "given": "Solomon",
                },
                {
                    "family": "Laib",
                    "given": "Augustine",
                },
                {
                    "family": "Calson",
                    "given": "Yancey",
                }
            ],
            "publisher": "Doreen Publishing House",
            "publisher-place": "Kuala Lumpur",
            "language":"en-US",
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
    articleInABookEditedByOthersChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "天下一家",
            "author": [
                {
                    "family": "黄",
                    "given": "二东",
                }
            ],
            "editor":[
                {
                    "family": "千",
                    "given": "百文",
                }
            ],
            "container-title":"地球村的演变",
            "publisher": "汉阳出版社",
            "publisher-place": "厦门",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2003
                    ]
                ]
            },
            "type": "chapter"
        }        
    },
    articlesInABookEditedByOthersEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Japan and East Asia",
            "author": [
                {
                    "family": "Hughes",
                    "given": "Christopher W.",
                }
            ],
            "editor":[
                {
                    "family": "Heenan",
                    "given": "Patrick",
                }
            ],
            "container-title":"The Japan Handbook",
            "publisher": "Fitzroy Dearborn Publishers",
            "publisher-place": "London",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1998
                    ]
                ]
            },
            "page": "23-40",
            "type": "chapter"
        }        
    },
    articleInAJournalChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "神学的本质探讨",
            "author": [
                {
                    "family": "杨",
                    "given": "品通",
                }
            ],
            "container-title":"教会神学期刊",
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
    articleInAJournalEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "A History of Christian Church in Bangkok",
            "author": [
                {
                    "family": "Tallman",
                    "given": "Francis C.",
                }
            ],
            "container-title":"Journal of World Religions",
            "language":"en-US",
            "issue":"44",
            "issued": {
                "date-parts": [
                    [
                        2003,
                        10
                    ]
                ]
            },
            "page": "203-223",
            "type": "article-journal"
        }        
    },
    articleInMagazineEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Myth Maker",
            "author": [
                {
                    "family": "Weber",
                    "given": "Bruce",
                }
            ],
            "container-title":"New York Magazine",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1985,
                        10,
                        20
                    ]
                ]
            },
            "page": "24-26",
            "type": "article-magazine"
        }        
    },
    articleInMagazineChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "美国华侨习俗趣谈",
            "author": [
                {
                    "family": "李",
                    "given": "约翰",
                }
            ],
            "container-title":"时代华侨周刊",
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
    bookInAMultiVolumeSeriesEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Gospel According to John I–XII",
            "author": [
                {
                    "family": "Brown",
                    "given": "Raymond E.",
                }
            ],
            "editor":[
                {
                    "family":"Albright",
                    "given": "William Foxwell"
                },
                {
                    "family":"Freedman",
                    "given": "David Noel"
                },
            ],
            "collection-title":"Anchor Bible",
            "publisher": "Doubleday",
            "publisher-place": "New York",                
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1966
                    ]
                ]
            },
            "volume":"29",
            "type": "book"
        }        
    },
    bookInAMultiVolumeSeriesEnglish2: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Der Brief an die Hebräer: Übersetzt und Erklärt",
            "author": [
                {
                    "family": "Weiss",
                    "given": "Hans-Frederich",
                }
            ],
            "editor":[
                {
                    "family":"Meyer",
                    "given": "Heinrich August Wilhelm"
                },
                {
                    "family":"Hahn",
                    "given": "Ferdinand"
                },
            ],
            "collection-title": "Kritisch-exegetischer Kommentar über das Neue Testament",
            "publisher": "Vandenhoeck & Ruprecht",
            "publisher-place": "Göttingen",                
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1991
                    ]
                ]
            },
            "edition": 15,
            "volume":"13",
            "type": "book"
        }        
    },
    bookInAMultiVolumeSeriesEnglish3: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Argument and Theology in 1 Peter: The Origins of Christian Paraenesis",
            "author": [
                {
                    "family": "Thurén",
                    "given": "Lauri",
                }
            ],
            "editor":[
                {
                    "family":"Porter",
                    "given": "Stanley E."
                },
                {
                    "family":"Unknown",
                    "given": "Unknown"
                },
                {
                    "family":"Unknown",
                    "given": "Unknown"
                },
            ],
            "collection-title": "Journal for the Study of the New Testament: Supplement Series",
            "publisher": "Sheffield Academic Press",
            "publisher-place": "Sheffield",                
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1995
                    ]
                ]
            },
            "volume":"114",
            "type": "book"
        }        
    }, 
    articleInADictionaryChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "基督的宽容",
            "author": [
                {
                    "family": "冯",
                    "given": "来平",
                }
            ],
            "editor":[
                {
                    "family":"邱",
                    "given": "宋恩"
                }
            ],
            "container-title":"世界神学辞典",
            "publisher": "展徒出版社",
            "publisher-place": "上海",                
            "language":"zh-CN",
            "volume":"第三册",
            "page":"25-26",
            "type": "entry-dictionary"
        }         
    },
    articleInADictionaryEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Gnosticism",
            "author": [
                {
                    "family": "Perkins",
                    "given": "Pheme",
                }
            ],
            "editor":[
                {
                    "family":"Sakenfeld",
                    "given": "Katherine Doob"
                }
            ],
            "container-title":"New Interpreter's Dictionary of the Bible",
            "publisher": "Abingdon Press",
            "publisher-place": "Nashville",                
            "language":"en-US",
            "volume":"2",
            "page":"581-584",
            "issued": {
                "date-parts": [
                    [
                        2007
                    ]
                ]
            },
            "type": "entry-dictionary"
        }         
    },
    articleInADictionaryWithTranslatorEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "xb;z\"",
            "author": [
                {
                    "family": "Bergman",
                    "given": "B. Lang",
                },
                {
                    "family": "Ringgren",
                    "given": "H.",
                }                
            ],
            "editor":[
                {
                    "family":"Botterweck",
                    "given": "G. Johannes"
                },
                {
                    "family":"Ringgren",
                    "given": "Helmer"
                }                
            ],
            "translator":[
                {
                    "family":"Green",
                    "given": "David E."
                }                
            ],            
            "container-title":"Theological Dictionary of the Old Testament",
            "publisher": "William B. Eerdmans Publishing Company",
            "publisher-place": "Grand Rapids",
            "language":"en-US",
            "volume":"4",
            "page":"8-29",
            "issued": {
                "date-parts": [
                    [
                        1980
                    ]
                ]
            },
            "type": "entry-dictionary"
        }         
    },
    articleInADictionaryWithTranslatorEnglish2: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "qu,w",
            "author": [
                {
                    "family": "Behn",
                    "given": "Johannes",
                }                
            ],
            "editor":[
                {
                    "family":"Kittel",
                    "given": "Gerhard"
                },
                {
                    "family":"Bromiley",
                    "given": "Geoffrey W."
                }                
            ],
            "translator":[
                {
                    "family":"Bromiley",
                    "given": "Geoffrey W."
                }                
            ],            
            "container-title":"Theological Dictionary of the New Testament",
            "publisher": "Wm. B. Eerdmans Publishing Company",
            "publisher-place": "Grand Rapids",
            "language":"en-US",
            "volume":"3",
            "page":"180-190",
            "issued": {
                "date-parts": [
                    [
                        1965
                    ]
                ]
            },
            "type": "entry-dictionary"
        }         
    },    
    reportChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "执行部呈年会报告书",
            "author": [
                {
                    "family": "陈",
                    "given": "泽崇",
                }                
            ],
            "collection-editor": [
                {
                    "family": "许",
                    "given": "必斌",
                }                
            ],            
            "collection-title":"2001砂拉越华人年议会第二十六届年议会会议记录",
            "publisher": "砂拉越华人年议会",
            "publisher-place": "诗巫",
            "language":"zh-CN",
            "page":"18-22",
            "issued": {
                "date-parts": [
                    [
                        2001
                    ]
                ]
            },
            "type": "report"
        }         
    },
    reportEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Board of Lay Training",
            "author": [
                {
                    "family": "Chou",
                    "given": "Ivy",
                }                
            ],
            "collection-title":"Minutes of 12th Session of the Sarawak Annual Conference of the Methodist Church 1963",
            "publisher": "The Methodist Church",
            "publisher-place": "Sibu",
            "language":"en-US",
            "page":"69-70",
            "issued": {
                "date-parts": [
                    [
                        1963
                    ]
                ]
            },
            "type": "report"
        }         
    },
    statisticsChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "1997年墨尔本华人人口的增长情况",
            "author": [
                {
                    "family": "澳洲统计部",
                    "given": "",
                }                
            ],
            "collection-title":"澳洲人口普查1997",
            "publisher": "澳洲官方出版社",
            "publisher-place": "堪培拉",
            "language":"zh-CN",
            "page":"209-210",
            "issued": {
                "date-parts": [
                    [
                        1998
                    ]
                ]
            },
            "type": "report"
        }         
    },
    statisticsEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Total Polulation by Age Group: Sarawak",
            "author": [
                {
                    "family": "Department of Statistics Malaysia",
                    "given": "",
                }                
            ],
            "collection-title":"Population and Housing Census of Malaysia 2000",
            "publisher": "Government Printing Office",
            "publisher-place": "Kuala Lumpur",
            "language":"en-US",
            "page":"58-60",
            "issued": {
                "date-parts": [
                    [
                        2000
                    ]
                ]
            },
            "type": "report"
        }         
    },
    newpaperChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "美以美是新福州垦场的催化剂",
            "author": [
                {
                    "family": "黄",
                    "given": "孟礼",
                }                
            ],
            "container-title":"卫理报",
            "language":"zh-CN",
            "page":"A4-A5",
            "issued": {
                "date-parts": [
                    [
                        2000,
                        11,
                        30
                    ]
                ]
            },            
            "type": "article-newspaper"
        }         
    },
    newpaperEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Stars of Tomorrow",
            "author": [
                {
                    "family": "Aston",
                    "given": "Steve",
                }                
            ],
            "container-title":"The New York Times",
            "language":"en-US",
            "page":"12",
            "issued": {
                "date-parts": [
                    [
                        1987,
                        1,
                        4
                    ]
                ]
            },            
            "type": "article-newspaper"
        }         
    },
    thesisChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "基督教教育在南非华人教会群体中的发展模式",
            "author": [
                {
                    "family": "刘",
                    "given": "庸",
                }                
            ],
            "genre":"博士论文",
            "language":"zh-CN",
            "publisher":"太平洋天国神学院",
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
    thesisEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Quest for a Historical Jesus in Sarawak",
            "author": [
                {
                    "family": "Austin",
                    "given": "Lancer",
                }                
            ],
            "genre":"Ph.D. diss.",
            "language":"en-US",
            "publisher":"University of Chicago",
            "issued": {
                "date-parts": [
                    [
                        1996
                    ]
                ]
            },            
            "type": "thesis"
        }         
    },
    webpageChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "历史玩完了？",
            "container-title":"汉语基督教文化研究所",
            "author": [
                {
                    "family": "刘",
                    "given": "小枫",
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
            "type": "webpage"
        }         
    },
    websiteEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "Flowers in Sarawak",
            "container-title":"Sarawak Flower Journal",
            "author": [
                {
                    "family": "Pingka",
                    "given": "Michael",
                }                
            ],
            "URL":"http://www.sarawakflower/ggg.html",
            "language":"en-US",
            "accessed": {
                "date-parts": [
                    [
                        2002,
                        8,
                        14
                    ]
                ]
            },            
            "type": "webpage"
        }         
    },
    interviewChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "叶",
                    "given": "少华，成团主席",
                }                
            ],
            "interviewer":[
                {
                    "family": "笔者",
                    "given": "",
                }
            ],
            "medium": "卡带录音",
            "note": "墨尔本",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2003,
                        4,
                        9
                    ]
                ]
            },            
            "type": "interview"
        }         
    },
    interviewEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "Albert",
                    "given": "Steven, mayor of Kuching",
                }                
            ],
            "interviewer":[
                {
                    "family": "author",
                    "given": "",
                }
            ],
            "medium":"Tape recording",
            "note":"Sibu, East Malaysia",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        2003,
                        9,
                        23
                    ]
                ]
            },            
            "type": "interview"
        }         
    },
    letterChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "田",
                    "given": "德建",
                }                
            ],
            "recipient":[
                {
                    "family": "方",
                    "given": "重名",
                }
            ],
            "note":"抄本存于北京大学图书馆特藏部，中国北京",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1876,
                        10,
                        25
                    ]
                ]
            },            
            "type": "personal_communication"
        }         
    },
    letterEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "Hoover",
                    "given": "James Matthew",
                }                
            ],
            "recipient":[
                {
                    "family": "Leonard",
                    "given": "A. B.",
                }
            ],
            "note": "transcript in Hoover, J.M. - Malaya 1899, Missionary Files 1, United Methodist Church Archives, Madison, NJ, USA.",
            "language": "en-US",
            "issued": {
                "date-parts": [
                    [
                        1899,
                        3,
                        13
                    ]
                ]
            },            
            "type": "personal_communication"
        }         
    },
    vcdChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "唐",
                    "given": "明清",
                }                
            ],
            "title":"启示录的七个教会",
            "collection-title":"新约圣经CD版",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2001
                    ]
                ]
            },
            "publisher": "校园出版社",
            "publisher-place": "台北",
            "type": "motion_picture"
        }         
    },
    vcdEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "Morris",
                    "given": "King",
                }                
            ],
            "title":"The Chinese Mind",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        2002
                    ]
                ]
            },
            "publisher": "The Chinese Press",
            "publisher-place": "Kuala Lumpur",
            "type": "motion_picture"
        }         
    },
    cdChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "唐",
                    "given": "明清",
                }                
            ],
            "title":"启示录的七个教会",
            "collection-title":"新约圣经CD版",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        2001
                    ]
                ]
            },
            "publisher": "校园出版社",
            "publisher-place": "台北",
            "type": "song"
        }         
    },
    cdEnglish: {
        "ITEM-1": {
            "id": "ITEM-1",
            "author": [
                {
                    "family": "Morris",
                    "given": "King",
                }                
            ],
            "title":"The Chinese Mind",
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        2002
                    ]
                ]
            },
            "publisher": "The Chinese Press",
            "publisher-place": "Kuala Lumpur",
            "type": "song"
        }         
    },
    bookWithNoSeriesAuthor: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "The Book of Job",
            "author": [
                {
                    "family": "Rowley",
                    "given": "Harold Henry",
                }
            ],
            "collection-title":"New century Bible commentary",
            "publisher": "Eerdmans",
            "publisher-place": "Grand Rapids, Mich",                
            "language":"en-US",
            "issued": {
                "date-parts": [
                    [
                        1980
                    ]
                ]
            },
            "type": "book"
        }        
    },
    bookSingleAuthorWithEditorChinese: {
        "ITEM-1": {
            "id": "ITEM-1",
            "title": "天道圣经注释：约伯记上",
            "author": [
                {
                    "family": "唐",
                    "given": "佑之"
                }
            ],
            "editor": [
                {
                    "family": "鲍",
                    "given": "会园"
                }
            ],
            "publisher": "天道书楼有限公司",
            "publisher-place": "香港九龙",
            "language":"zh-CN",
            "issued": {
                "date-parts": [
                    [
                        1994
                    ]
                ]
            },
            "type": "book"
        }
    },    
}
