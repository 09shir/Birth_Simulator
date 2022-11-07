//import data from './countries.json' assert { type: 'json' }

// data from countries.json
    const countries = [
        {
            "name": "China",
            "population": 1412360000,
            "birthrate": 8.52,
            "lng": 35.86166,
            "lat": 104.195397
        },
        {
            "name": "Canada",
            "population": 38246108,
            "birthrate": 9.4,
            "lng": 56.130366,
            "lat": -106.346771
        },
        {
            "name": "United States",
            "population": 331893745,
            "birthrate": 10.9,
            "lng": 37.09024,
            "lat": -95.712891
        }
    ];

    const countries2 = [
        {
            "cn": "安道尔共和国",
            "en": "Andorra",
            "continent": "EU",
            "position": [
                1.32,
                42.31
            ],
            "birth_rate": 0.0004
        },
        {
            "cn": "阿拉伯联合酋长国",
            "en": "United Arab Emirates",
            "continent": "AS",
            "position": [
                54.22,
                24.28
            ],
            "birth_rate": 0.0734
        },
        {
            "cn": "阿富汗",
            "en": "Afghanistan",
            "continent": "AS",
            "position": [
                67.709953,
                33.93911
            ],
            "birth_rate": 0.9068
        },
        {
            "cn": "安提瓜和巴布达",
            "en": "Antigua and Barbuda",
            "continent": "NA",
            "position": [
                -61.48,
                17.2
            ],
            "birth_rate": 0.0011
        },
        {
            "cn": "阿尔巴尼亚",
            "en": "Albania",
            "continent": "EU",
            "position": [
                20.168331,
                41.153332
            ],
            "birth_rate": 0.0227
        },
        {
            "cn": "阿美尼亚",
            "en": "Armenia",
            "continent": "AS",
            "position": [
                44.31,
                40.1
            ],
            "birth_rate": 0.0283
        },
        {
            "cn": "不丹",
            "en": "Bhutan",
            "continent": "AS",
            "position": [
                90.433601,
                27.514162
            ],
            "birth_rate": 0.0097
        },
        {
            "cn": "佛得角",
            "en": "Cabo Verde",
            "continent": "AF",
            "position": [
                -23.34,
                15.02
            ],
            "birth_rate": 0.0078
        },
        {
            "cn": "波黑",
            "en": "Bosnia and Herzegovina",
            "continent": "EU",
            "position": [
                43.8476,
                18.3564
            ],
            "birth_rate": 0.0192
        },
        {
            "cn": "阿鲁巴",
            "en": "Aruba",
            "continent": "NA",
            "position": [
                -70.02,
                12.32
            ],
            "birth_rate": 0.0009
        },
        {
            "cn": "安哥拉",
            "en": "Angola",
            "continent": "AF",
            "position": [
                17.873887,
                -11.202692
            ],
            "birth_rate": 0.9967
        },
        {
            "cn": "阿根廷",
            "en": "Argentina",
            "continent": "SA",
            "position": [
                -63.61667199999999,
                -38.416097
            ],
            "birth_rate": 0.5718
        },
        {
            "cn": "奥地利",
            "en": "Austria",
            "continent": "EU",
            "position": [
                14.550072,
                47.516231
            ],
            "birth_rate": 0.0592
        },
        {
            "cn": "澳大利亚",
            "en": "Australia",
            "continent": "OA",
            "position": [
                133.775136,
                -25.274398
            ],
            "birth_rate": 0.2268
        },
        {
            "cn": "阿塞拜疆",
            "en": "Azerbaijan",
            "continent": "AS",
            "position": [
                47.576927,
                40.143105
            ],
            "birth_rate": 0.0968
        },
        {
            "cn": "巴巴多斯",
            "en": "Barbados",
            "continent": "NA",
            "position": [
                -59.3,
                13.05
            ],
            "birth_rate": 0.0023
        },
        {
            "cn": "孟加拉国",
            "en": "Bangladesh",
            "continent": "AS",
            "position": [
                90.356331,
                23.684994
            ],
            "birth_rate": 2.1981
        },
        {
            "cn": "比利时",
            "en": "Belgium",
            "continent": "EU",
            "position": [
                4.469936,
                50.503887
            ],
            "birth_rate": 0.0851
        },
        {
            "cn": "布基纳法索",
            "en": "Burkina Faso",
            "continent": "AF",
            "position": [
                -1.561593,
                12.238333
            ],
            "birth_rate": 0.5841
        },
        {
            "cn": "保加利亚",
            "en": "Bulgaria",
            "continent": "EU",
            "position": [
                25.48583,
                42.733883
            ],
            "birth_rate": 0.0456
        },
        {
            "cn": "巴林",
            "en": "Bahrain",
            "continent": "AS",
            "position": [
                50.3,
                26.1
            ],
            "birth_rate": 0.0167
        },
        {
            "cn": "布隆迪",
            "en": "Burundi",
            "continent": "AF",
            "position": [
                29.918886,
                -3.373056
            ],
            "birth_rate": 0.342
        },
        {
            "cn": "贝宁",
            "en": "Benin",
            "continent": "AF",
            "position": [
                2.315834,
                9.30769
            ],
            "birth_rate": 0.32
        },
        {
            "cn": "百慕大群岛",
            "en": "Bermuda",
            "continent": "NA",
            "position": [
                -64.765816,
                32.289895
            ],
            "birth_rate": 0.0004
        },
        {
            "cn": "文莱",
            "en": "Brunei Darussalam",
            "continent": "AS",
            "position": [
                114.727669,
                4.535277
            ],
            "birth_rate": 0.0045
        },
        {
            "cn": "玻利维亚",
            "en": "Bolivia",
            "continent": "SA",
            "position": [
                -63.58865299999999,
                -16.290154
            ],
            "birth_rate": 0.1825
        },
        {
            "cn": "巴西",
            "en": "Brazil",
            "continent": "SA",
            "position": [
                -51.92528,
                -14.235004
            ],
            "birth_rate": 2.0428
        },
        {
            "cn": "巴哈马",
            "en": "Bahamas The",
            "continent": "NA",
            "position": [
                -77.39627999999999,
                25.03428
            ],
            "birth_rate": 0.0041
        },
        {
            "cn": "博茨瓦纳",
            "en": "Botswana",
            "continent": "AF",
            "position": [
                24.684866,
                -22.328474
            ],
            "birth_rate": 0.0422
        },
        {
            "cn": "白俄罗斯",
            "en": "Belarus",
            "continent": "EU",
            "position": [
                27.953389,
                53.709807
            ],
            "birth_rate": 0.0617
        },
        {
            "cn": "伯利兹",
            "en": "Belize",
            "continent": "NA",
            "position": [
                -88.49765,
                17.189877
            ],
            "birth_rate": 0.0059
        },
        {
            "cn": "加拿大",
            "en": "Canada",
            "continent": "NA",
            "position": [
                -106.346771,
                56.130366
            ],
            "birth_rate": 0.2528
        },
        {
            "cn": "开曼群岛",
            "en": "Cayman Islands",
            "continent": "NA",
            "position": [
                -81.24,
                19.2
            ],
            "birth_rate": 0.0006
        },
        {
            "cn": "海峡群岛",
            "en": "Channel Islands",
            "continent": "EU",
            "position": [
                -2.15306,
                49.227503
            ],
            "birth_rate": 0.0013
        },
        {
            "cn": "中非共和国",
            "en": "Central African Republic",
            "continent": "AF",
            "position": [
                20.939444,
                6.611110999999999
            ],
            "birth_rate": 0.1264
        },
        {
            "cn": "刚果共和国",
            "en": "Congo Rep.",
            "continent": "AF",
            "position": [
                15.827659,
                -0.228021
            ],
            "birth_rate": 0.1329
        },
        {
            "cn": "刚果民主共和国",
            "en": "Congo Dem. Rep.",
            "continent": "AF",
            "position": [
                21.758664,
                -4.038333
            ],
            "birth_rate": 2.7133
        },
        {
            "cn": "瑞士",
            "en": "Switzerland",
            "continent": "EU",
            "position": [
                8.227511999999999,
                46.818188
            ],
            "birth_rate": 0.0639
        },
        {
            "cn": "克罗地亚",
            "en": "Croatia",
            "continent": "EU",
            "position": [
                15.2,
                45.1
            ],
            "birth_rate": 0.0258
        },
        {
            "cn": "赤道几内亚",
            "en": "Equatorial Guinea",
            "continent": "AF",
            "position": [
                10.267895,
                1.650801
            ],
            "birth_rate": 0.0341
        },
        {
            "cn": "科摩罗",
            "en": "Comoros",
            "continent": "AF",
            "position": [
                43.872219,
                -11.875001
            ],
            "birth_rate": 0.0202
        },
        {
            "cn": "厄立特里亚",
            "en": "Eritrea",
            "continent": "AF",
            "position": [
                39.782334,
                15.179384
            ],
            "birth_rate": 0.0684
        },
        {
            "cn": "法罗群岛",
            "en": "Faroe Islands",
            "continent": "EU",
            "position": [
                -6.56,
                62.05
            ],
            "birth_rate": 0.0005
        },
        {
            "cn": "智利",
            "en": "Chile",
            "continent": "SA",
            "position": [
                -71.542969,
                -35.675147
            ],
            "birth_rate": 0.1693
        },
        {
            "cn": "喀麦隆",
            "en": "Cameroon",
            "continent": "AF",
            "position": [
                12.354722,
                7.369721999999999
            ],
            "birth_rate": 0.6797
        },
        {
            "cn": "中国",
            "en": "China",
            "continent": "AS",
            "position": [
                104.195397,
                35.86166
            ],
            "birth_rate": 9.3255
        },
        {
            "cn": "哥伦比亚",
            "en": "Colombia",
            "continent": "SA",
            "position": [
                -74.297333,
                4.570868
            ],
            "birth_rate": 0.527
        },
        {
            "cn": "哥斯达黎加",
            "en": "Costa Rica",
            "continent": "NA",
            "position": [
                -83.753428,
                9.748916999999999
            ],
            "birth_rate": 0.0491
        },
        {
            "cn": "捷克",
            "en": "Czechia",
            "continent": "EU",
            "position": [
                14.22,
                50.05
            ],
            "birth_rate": 0.0786
        },
        {
            "cn": "古巴",
            "en": "Cuba",
            "continent": "NA",
            "position": [
                -77.781167,
                21.521757
            ],
            "birth_rate": 0.0831
        },
        {
            "cn": "塞浦路斯",
            "en": "Cyprus",
            "continent": "AS",
            "position": [
                33.429859,
                35.126413
            ],
            "birth_rate": 0.0089
        },
        {
            "cn": "德国",
            "en": "Germany",
            "continent": "EU",
            "position": [
                10.451526,
                51.165691
            ],
            "birth_rate": 0.5494
        },
        {
            "cn": "吉布提",
            "en": "Djibouti",
            "continent": "AF",
            "position": [
                42.590275,
                11.825138
            ],
            "birth_rate": 0.0155
        },
        {
            "cn": "丹麦",
            "en": "Denmark",
            "continent": "EU",
            "position": [
                9.501785,
                56.26392
            ],
            "birth_rate": 0.043
        },
        {
            "cn": "多米尼加共和国",
            "en": "Dominican Republic",
            "continent": "NA",
            "position": [
                -69.59,
                18.3
            ],
            "birth_rate": 0.1528
        },
        {
            "cn": "阿尔及利亚",
            "en": "Algeria",
            "continent": "AF",
            "position": [
                1.659626,
                28.033886
            ],
            "birth_rate": 0.7535
        },
        {
            "cn": "厄瓜多尔",
            "en": "Ecuador",
            "continent": "SA",
            "position": [
                -78.18340599999999,
                -1.831239
            ],
            "birth_rate": 0.2496
        },
        {
            "cn": "爱沙尼亚",
            "en": "Estonia",
            "continent": "EU",
            "position": [
                25.013607,
                58.595272
            ],
            "birth_rate": 0.0098
        },
        {
            "cn": "埃及",
            "en": "Egypt Arab Rep.",
            "continent": "AF",
            "position": [
                30.802498,
                26.820553
            ],
            "birth_rate": 1.9139
        },
        {
            "cn": "西班牙",
            "en": "Spain",
            "continent": "EU",
            "position": [
                -3.74922,
                40.46366700000001
            ],
            "birth_rate": 0.2433
        },
        {
            "cn": "埃塞俄比亚",
            "en": "Ethiopia",
            "continent": "AF",
            "position": [
                40.489673,
                9.145000000000001
            ],
            "birth_rate": 2.6832
        },
        {
            "cn": "芬兰",
            "en": "Finland",
            "continent": "EU",
            "position": [
                25.748151,
                61.92410999999999
            ],
            "birth_rate": 0.0326
        },
        {
            "cn": "斐济",
            "en": "Fiji",
            "continent": "OA",
            "position": [
                178.3,
                -18.06
            ],
            "birth_rate": 0.0139
        },
        {
            "cn": "法国",
            "en": "France",
            "continent": "EU",
            "position": [
                2.213749,
                46.227638
            ],
            "birth_rate": 0.5452
        },
        {
            "cn": "加蓬",
            "en": "Gabon",
            "continent": "AF",
            "position": [
                11.609444,
                -0.803689
            ],
            "birth_rate": 0.0502
        },
        {
            "cn": "英国",
            "en": "United Kingdom",
            "continent": "EU",
            "position": [
                -3.435973,
                55.378051
            ],
            "birth_rate": 0.4944
        },
        {
            "cn": "格林纳达",
            "en": "Grenada",
            "continent": "NA",
            "position": [
                -61.721782,
                12.08328
            ],
            "birth_rate": 0.0013
        },
        {
            "cn": "格鲁吉亚",
            "en": "Georgia",
            "continent": "AS",
            "position": [
                43.711615,
                41.999919
            ],
            "birth_rate": 0.0354
        },
        {
            "cn": "加纳",
            "en": "Ghana",
            "continent": "AF",
            "position": [
                -1.023194,
                7.946527
            ],
            "birth_rate": 0.6757
        },
        {
            "cn": "冈比亚",
            "en": "Gambia The",
            "continent": "AF",
            "position": [
                -15.310139,
                13.443182
            ],
            "birth_rate": 0.0694
        },
        {
            "cn": "几内亚",
            "en": "Guinea",
            "continent": "AF",
            "position": [
                -9.696645,
                9.945587
            ],
            "birth_rate": 0.3568
        },
        {
            "cn": "希腊",
            "en": "Greece",
            "continent": "EU",
            "position": [
                21.824312,
                39.074208
            ],
            "birth_rate": 0.0626
        },
        {
            "cn": "危地马拉",
            "en": "Guatemala",
            "continent": "NA",
            "position": [
                -90.23075899999999,
                15.783471
            ],
            "birth_rate": 0.3015
        },
        {
            "cn": "关岛",
            "en": "Guam",
            "continent": "OA",
            "position": [
                144.747738,
                13.440083
            ],
            "birth_rate": 0.002
        },
        {
            "cn": "圭亚那",
            "en": "Guyana",
            "continent": "SA",
            "position": [
                -58.93018,
                4.860416
            ],
            "birth_rate": 0.011
        },
        {
            "cn": "香港(中国)",
            "en": "Hong Kong SAR China",
            "continent": "AS",
            "position": [
                114.213137,
                22.279452
            ],
            "birth_rate": 0.0327
        },
        {
            "cn": "洪都拉斯",
            "en": "Honduras",
            "continent": "NA",
            "position": [
                -86.241905,
                15.199999
            ],
            "birth_rate": 0.1552
        },
        {
            "cn": "海地",
            "en": "Haiti",
            "continent": "NA",
            "position": [
                -72.285215,
                18.971187
            ],
            "birth_rate": 0.2034
        },
        {
            "cn": "匈牙利",
            "en": "Hungary",
            "continent": "EU",
            "position": [
                19.503304,
                47.162494
            ],
            "birth_rate": 0.0713
        },
        {
            "cn": "印度尼西亚",
            "en": "Indonesia",
            "continent": "AS",
            "position": [
                106.515414,
                -6.10304
            ],
            "birth_rate": 3.4498
        },
        {
            "cn": "爱尔兰",
            "en": "Ireland",
            "continent": "EU",
            "position": [
                -8.24389,
                53.41291
            ],
            "birth_rate": 0.0406
        },
        {
            "cn": "以色列",
            "en": "Israel",
            "continent": "AS",
            "position": [
                34.851612,
                31.046051
            ],
            "birth_rate": 0.1306
        },
        {
            "cn": "印度",
            "en": "India",
            "continent": "AS",
            "position": [
                78.96288,
                20.593684
            ],
            "birth_rate": 17.394
        },
        {
            "cn": "伊拉克",
            "en": "Iraq",
            "continent": "AS",
            "position": [
                43.679291,
                33.223191
            ],
            "birth_rate": 0.8467
        },
        {
            "cn": "伊朗",
            "en": "Iran Islamic Rep.",
            "continent": "AS",
            "position": [
                53.688046,
                32.427908
            ],
            "birth_rate": 1.1239
        },
        {
            "cn": "冰岛",
            "en": "Iceland",
            "continent": "EU",
            "position": [
                -19.020835,
                64.963051
            ],
            "birth_rate": 0.0033
        },
        {
            "cn": "意大利",
            "en": "Italy",
            "continent": "EU",
            "position": [
                12.56738,
                41.87194
            ],
            "birth_rate": 0.3036
        },
        {
            "cn": "科特迪瓦",
            "en": "Cote d'Ivoire",
            "continent": "AF",
            "position": [
                -5.17,
                6.49
            ],
            "birth_rate": 0.6953
        },
        {
            "cn": "牙买加",
            "en": "Jamaica",
            "continent": "NA",
            "position": [
                -77.297508,
                18.109581
            ],
            "birth_rate": 0.0349
        },
        {
            "cn": "约旦",
            "en": "Jordan",
            "continent": "AS",
            "position": [
                36.238414,
                30.585164
            ],
            "birth_rate": 0.1584
        },
        {
            "cn": "日本",
            "en": "Japan",
            "continent": "AS",
            "position": [
                138.252924,
                36.204824
            ],
            "birth_rate": 0.646
        },
        {
            "cn": "肯尼亚",
            "en": "Kenya",
            "continent": "AF",
            "position": [
                37.906193,
                -0.023559
            ],
            "birth_rate": 1.1305
        },
        {
            "cn": "吉尔吉斯坦",
            "en": "Kyrgyz Republic",
            "continent": "AS",
            "position": [
                74.46,
                42.54
            ],
            "birth_rate": 0.118
        },
        {
            "cn": "柬埔寨",
            "en": "Cambodia",
            "continent": "AS",
            "position": [
                104.990963,
                12.565679
            ],
            "birth_rate": 0.2738
        },
        {
            "cn": "朝鲜",
            "en": "Korea Dem. People's Rep.",
            "continent": "AS",
            "position": [
                127.510093,
                40.339852
            ],
            "birth_rate": 0.2661
        },
        {
            "cn": "韩国",
            "en": "Korea Rep.",
            "continent": "AS",
            "position": [
                127.766922,
                35.907757
            ],
            "birth_rate": 0.19
        },
        {
            "cn": "科威特",
            "en": "Kuwait",
            "continent": "AS",
            "position": [
                47.481766,
                29.31166
            ],
            "birth_rate": 0.0413
        },
        {
            "cn": "哈萨克斯坦",
            "en": "Kazakhstan",
            "continent": "AS",
            "position": [
                66.923684,
                48.019573
            ],
            "birth_rate": 0.3209
        },
        {
            "cn": "老挝",
            "en": "Lao PDR",
            "continent": "AS",
            "position": [
                102.495496,
                19.85627
            ],
            "birth_rate": 0.1246
        },
        {
            "cn": "黎巴嫩",
            "en": "Lebanon",
            "continent": "AS",
            "position": [
                35.862285,
                33.854721
            ],
            "birth_rate": 0.0845
        },
        {
            "cn": "圣卢西亚",
            "en": "St. Lucia",
            "continent": "NA",
            "position": [
                -60.58,
                14.02
            ],
            "birth_rate": 0.0016
        },
        {
            "cn": "列支敦士登",
            "en": "Liechtenstein",
            "continent": "EU",
            "position": [
                9.31,
                47.08
            ],
            "birth_rate": 0.0003
        },
        {
            "cn": "斯里兰卡",
            "en": "Sri Lanka",
            "continent": "AS",
            "position": [
                80.77179699999999,
                7.873053999999999
            ],
            "birth_rate": 0.244
        },
        {
            "cn": "利比里亚",
            "en": "Liberia",
            "continent": "AF",
            "position": [
                -9.429499000000002,
                6.428055
            ],
            "birth_rate": 0.1217
        },
        {
            "cn": "莱索托",
            "en": "Lesotho",
            "continent": "AF",
            "position": [
                28.233608,
                -29.609988
            ],
            "birth_rate": 0.0412
        },
        {
            "cn": "立陶宛",
            "en": "Lithuania",
            "continent": "EU",
            "position": [
                23.881275,
                55.169438
            ],
            "birth_rate": 0.0185
        },
        {
            "cn": "卢森堡",
            "en": "Luxembourg",
            "continent": "EU",
            "position": [
                6.129582999999999,
                49.815273
            ],
            "birth_rate": 0.0047
        },
        {
            "cn": "拉脱维亚",
            "en": "Latvia",
            "continent": "EU",
            "position": [
                24.603189,
                56.879635
            ],
            "birth_rate": 0.0124
        },
        {
            "cn": "利比亚",
            "en": "Libya",
            "continent": "AF",
            "position": [
                17.228331,
                26.3351
            ],
            "birth_rate": 0.092
        },
        {
            "cn": "摩洛哥",
            "en": "Morocco",
            "continent": "AF",
            "position": [
                -7.092619999999999,
                31.791702
            ],
            "birth_rate": 0.4936
        },
        {
            "cn": "摩纳哥",
            "en": "Monaco",
            "continent": "EU",
            "position": [
                7.414268,
                43.735708
            ],
            "birth_rate": 0.0002
        },
        {
            "cn": "摩尔多瓦",
            "en": "Moldova",
            "continent": "EU",
            "position": [
                28.369885,
                47.411631
            ],
            "birth_rate": 0.0189
        },
        {
            "cn": "马达加斯加",
            "en": "Madagascar",
            "continent": "AF",
            "position": [
                46.869107,
                -18.766947
            ],
            "birth_rate": 0.668
        },
        {
            "cn": "马里",
            "en": "Mali",
            "continent": "AF",
            "position": [
                -3.996166,
                17.570692
            ],
            "birth_rate": 0.6279
        },
        {
            "cn": "缅甸",
            "en": "Myanmar",
            "continent": "AS",
            "position": [
                95.956223,
                21.913965
            ],
            "birth_rate": 0.6841
        },
        {
            "cn": "蒙古",
            "en": "Mongolia",
            "continent": "AS",
            "position": [
                103.846656,
                46.862496
            ],
            "birth_rate": 0.0562
        },
        {
            "cn": "澳门（中国）",
            "en": "Macao SAR China",
            "continent": "AS",
            "position": [
                113.578035,
                22.14523
            ],
            "birth_rate": 0.0053
        },
        {
            "cn": "马耳他",
            "en": "Malta",
            "continent": "EU",
            "position": [
                14.31,
                35.54
            ],
            "birth_rate": 0.0034
        },
        {
            "cn": "马里亚那群岛",
            "en": "Northern Mariana Islands",
            "continent": "OA",
            "position": [
                145.45,
                15.12
            ],
            "birth_rate": 0.0006
        },
        {
            "cn": "马提尼克",
            "en": "St. Martin (French part)",
            "continent": "NA",
            "position": [
                -61.02,
                14.36
            ],
            "birth_rate": 0.0004
        },
        {
            "cn": "毛里求斯",
            "en": "Mauritius",
            "continent": "AF",
            "position": [
                57.559051,
                -20.246695
            ],
            "birth_rate": 0.0102
        },
        {
            "cn": "马尔代夫",
            "en": "Maldives",
            "continent": "AS",
            "position": [
                73.28,
                4.0
            ],
            "birth_rate": 0.0052
        },
        {
            "cn": "马拉维",
            "en": "Malawi",
            "continent": "AF",
            "position": [
                34.301525,
                -13.254308
            ],
            "birth_rate": 0.4761
        },
        {
            "cn": "墨西哥",
            "en": "Mexico",
            "continent": "NA",
            "position": [
                -102.552784,
                23.634501
            ],
            "birth_rate": 1.6261
        },
        {
            "cn": "马来西亚",
            "en": "Malaysia",
            "continent": "AS",
            "position": [
                101.975766,
                4.210484
            ],
            "birth_rate": 0.3851
        },
        {
            "cn": "莫桑比克",
            "en": "Mozambique",
            "continent": "AF",
            "position": [
                35.529562,
                -18.665695
            ],
            "birth_rate": 0.8738
        },
        {
            "cn": "纳米比亚",
            "en": "Namibia",
            "continent": "AF",
            "position": [
                18.49041,
                -22.95764
            ],
            "birth_rate": 0.0532
        },
        {
            "cn": "尼日尔",
            "en": "Niger",
            "continent": "AF",
            "position": [
                8.081666,
                17.607789
            ],
            "birth_rate": 0.8304
        },
        {
            "cn": "尼日利亚",
            "en": "Nigeria",
            "continent": "AF",
            "position": [
                8.675277,
                9.081999
            ],
            "birth_rate": 5.7435
        },
        {
            "cn": "尼加拉瓜",
            "en": "Nicaragua",
            "continent": "NA",
            "position": [
                -85.207229,
                12.865416
            ],
            "birth_rate": 0.0984
        },
        {
            "cn": "荷兰",
            "en": "Netherlands",
            "continent": "EU",
            "position": [
                5.291265999999999,
                52.132633
            ],
            "birth_rate": 0.1287
        },
        {
            "cn": "挪威",
            "en": "Norway",
            "continent": "EU",
            "position": [
                8.468945999999999,
                60.47202399999999
            ],
            "birth_rate": 0.0397
        },
        {
            "cn": "尼泊尔",
            "en": "Nepal",
            "continent": "AS",
            "position": [
                84.12400799999999,
                28.394857
            ],
            "birth_rate": 0.414
        },
        {
            "cn": "新西兰",
            "en": "New Zealand",
            "continent": "OA",
            "position": [
                174.885971,
                -40.900557
            ],
            "birth_rate": 0.0414
        },
        {
            "cn": "阿曼",
            "en": "Oman",
            "continent": "AS",
            "position": [
                55.923255,
                21.512583
            ],
            "birth_rate": 0.069
        },
        {
            "cn": "巴拿马",
            "en": "Panama",
            "continent": "NA",
            "position": [
                -80.782127,
                8.537981
            ],
            "birth_rate": 0.0579
        },
        {
            "cn": "秘鲁",
            "en": "Peru",
            "continent": "SA",
            "position": [
                -75.015152,
                -9.189967
            ],
            "birth_rate": 0.4409
        },
        {
            "cn": "法属玻利尼西亚",
            "en": "French Polynesia",
            "continent": "OA",
            "position": [
                -149.34,
                -17.32
            ],
            "birth_rate": 0.0029
        },
        {
            "cn": "巴布亚新几内亚",
            "en": "Papua New Guinea",
            "continent": "OA",
            "position": [
                143.95555,
                -6.314992999999999
            ],
            "birth_rate": 0.1808
        },
        {
            "cn": "菲律宾",
            "en": "Philippines",
            "continent": "AS",
            "position": [
                121.774017,
                12.879721
            ],
            "birth_rate": 1.6308
        },
        {
            "cn": "巴基斯坦",
            "en": "Pakistan",
            "continent": "AS",
            "position": [
                69.34511599999999,
                30.375321
            ],
            "birth_rate": 4.4648
        },
        {
            "cn": "波兰",
            "en": "Poland",
            "continent": "EU",
            "position": [
                19.145136,
                51.919438
            ],
            "birth_rate": 0.2497
        },
        {
            "cn": "波多黎各",
            "en": "Puerto Rico",
            "continent": "NA",
            "position": [
                -66.590149,
                18.220833
            ],
            "birth_rate": 0.0144
        },
        {
            "cn": "葡萄牙",
            "en": "Portugal",
            "continent": "EU",
            "position": [
                -8.224454,
                39.39987199999999
            ],
            "birth_rate": 0.0605
        },
        {
            "cn": "巴拉圭",
            "en": "Paraguay",
            "continent": "SA",
            "position": [
                -58.443832,
                -23.442503
            ],
            "birth_rate": 0.106
        },
        {
            "cn": "卡塔尔",
            "en": "Qatar",
            "continent": "AS",
            "position": [
                51.183884,
                25.354826
            ],
            "birth_rate": 0.0194
        },
        {
            "cn": "罗马尼亚",
            "en": "Romania",
            "continent": "EU",
            "position": [
                24.96676,
                45.943161
            ],
            "birth_rate": 0.1263
        },
        {
            "cn": "俄罗斯",
            "en": "Russian Federation",
            "continent": "EU",
            "position": [
                105.318756,
                61.52401
            ],
            "birth_rate": 1.0533
        },
        {
            "cn": "沙特阿拉伯",
            "en": "Saudi Arabia",
            "continent": "AS",
            "position": [
                45.079162,
                23.885942
            ],
            "birth_rate": 0.4412
        },
        {
            "cn": "所罗门群岛",
            "en": "Solomon Islands",
            "continent": "OA",
            "position": [
                160.156194,
                -9.64571
            ],
            "birth_rate": 0.016
        },
        {
            "cn": "塞舌尔",
            "en": "Seychelles",
            "continent": "AF",
            "position": [
                55.452883,
                -4.651018
            ],
            "birth_rate": 0.0012
        },
        {
            "cn": "苏丹",
            "en": "Sudan",
            "continent": "AF",
            "position": [
                30.217636,
                12.862807
            ],
            "birth_rate": 1.0223
        },
        {
            "cn": "瑞典",
            "en": "Sweden",
            "continent": "EU",
            "position": [
                18.643501,
                60.12816100000001
            ],
            "birth_rate": 0.0841
        },
        {
            "cn": "新加坡",
            "en": "Singapore",
            "continent": "AS",
            "position": [
                103.86123,
                1.356423
            ],
            "birth_rate": 0.036
        },
        {
            "cn": "斯洛文尼亚",
            "en": "Slovenia",
            "continent": "EU",
            "position": [
                14.995463,
                46.151241
            ],
            "birth_rate": 0.0139
        },
        {
            "cn": "斯洛伐克",
            "en": "Slovak Republic",
            "continent": "EU",
            "position": [
                19.699024,
                48.669026
            ],
            "birth_rate": 0.04
        },
        {
            "cn": "塞拉利昂",
            "en": "Sierra Leone",
            "continent": "AF",
            "position": [
                -11.779889,
                8.460555
            ],
            "birth_rate": 0.1913
        },
        {
            "cn": "圣马力诺",
            "en": "San Marino",
            "continent": "EU",
            "position": [
                12.3,
                43.55
            ],
            "birth_rate": 0.0001
        },
        {
            "cn": "东萨摩亚(美)",
            "en": "American Samoa",
            "continent": "OA",
            "position": [
                -170.43,
                -14.16
            ],
            "birth_rate": 0.0005
        },
        {
            "cn": "西萨摩亚",
            "en": "Samoa",
            "continent": "OA",
            "position": [
                -171.5,
                -13.5
            ],
            "birth_rate": 0.0035
        },
        {
            "cn": "塞内加尔",
            "en": "Senegal",
            "continent": "AF",
            "position": [
                -14.452362,
                14.497401
            ],
            "birth_rate": 0.4167
        },
        {
            "cn": "索马里",
            "en": "Somalia",
            "continent": "AF",
            "position": [
                46.199616,
                5.152149
            ],
            "birth_rate": 0.4925
        },
        {
            "cn": "苏里南",
            "en": "Suriname",
            "continent": "SA",
            "position": [
                -56.027783,
                3.919305
            ],
            "birth_rate": 0.0078
        },
        {
            "cn": "圣多美和普林西比",
            "en": "Sao Tome and Principe",
            "continent": "AF",
            "position": [
                6.39,
                0.1
            ],
            "birth_rate": 0.0051
        },
        {
            "cn": "萨尔瓦多",
            "en": "El Salvador",
            "continent": "NA",
            "position": [
                -88.89653,
                13.794185
            ],
            "birth_rate": 0.0862
        },
        {
            "cn": "叙利亚",
            "en": "Syrian Arab Republic",
            "continent": "AS",
            "position": [
                38.996815,
                34.80207499999999
            ],
            "birth_rate": 0.3087
        },
        {
            "cn": "斯威士兰",
            "en": "Eswatini",
            "continent": "AF",
            "position": [
                31.465866,
                -26.522503
            ],
            "birth_rate": 0.0215
        },
        {
            "cn": "乍得",
            "en": "Chad",
            "continent": "AF",
            "position": [
                18.732207,
                15.454166
            ],
            "birth_rate": 0.5092
        },
        {
            "cn": "多哥",
            "en": "Togo",
            "continent": "AF",
            "position": [
                0.824782,
                8.619543
            ],
            "birth_rate": 0.1992
        },
        {
            "cn": "泰国",
            "en": "Thailand",
            "continent": "AS",
            "position": [
                100.992541,
                15.870032
            ],
            "birth_rate": 0.5136
        },
        {
            "cn": "塔吉克斯坦",
            "en": "Tajikistan",
            "continent": "AS",
            "position": [
                71.276093,
                38.861034
            ],
            "birth_rate": 0.2076
        },
        {
            "cn": "土库曼斯坦",
            "en": "Turkmenistan",
            "continent": "AS",
            "position": [
                59.556278,
                38.969719
            ],
            "birth_rate": 0.0988
        },
        {
            "cn": "突尼斯",
            "en": "Tunisia",
            "continent": "AF",
            "position": [
                9.537499,
                33.886917
            ],
            "birth_rate": 0.149
        },
        {
            "cn": "汤加",
            "en": "Tonga",
            "continent": "OA",
            "position": [
                -174.0,
                -21.1
            ],
            "birth_rate": 0.0019
        },
        {
            "cn": "土耳其",
            "en": "Turkiye",
            "continent": "AS",
            "position": [
                35.243322,
                38.963745
            ],
            "birth_rate": 0.9991
        },
        {
            "cn": "特立尼达和多巴哥",
            "en": "Trinidad and Tobago",
            "continent": "NA",
            "position": [
                -61.275187,
                10.468494
            ],
            "birth_rate": 0.0124
        },
        {
            "cn": "坦桑尼亚",
            "en": "Tanzania",
            "continent": "AF",
            "position": [
                35.45,
                -6.08
            ],
            "birth_rate": 1.6257
        },
        {
            "cn": "乌克兰",
            "en": "Ukraine",
            "continent": "EU",
            "position": [
                31.16558,
                48.379433
            ],
            "birth_rate": 0.2574
        },
        {
            "cn": "乌干达",
            "en": "Uganda",
            "continent": "AF",
            "position": [
                32.290275,
                1.373333
            ],
            "birth_rate": 1.2803
        },
        {
            "cn": "美国",
            "en": "United States",
            "continent": "NA",
            "position": [
                -95.712891,
                37.09024
            ],
            "birth_rate": 2.6808
        },
        {
            "cn": "乌拉圭",
            "en": "Uruguay",
            "continent": "SA",
            "position": [
                -55.765835,
                -32.522779
            ],
            "birth_rate": 0.0358
        },
        {
            "cn": "乌兹别克斯坦",
            "en": "Uzbekistan",
            "continent": "AS",
            "position": [
                64.585262,
                41.377491
            ],
            "birth_rate": 0.641
        },
        {
            "cn": "委内瑞拉",
            "en": "Venezuela RB",
            "continent": "SA",
            "position": [
                -66.58973,
                6.42375
            ],
            "birth_rate": 0.3583
        },
        {
            "cn": "越南",
            "en": "Vietnam",
            "continent": "AS",
            "position": [
                108.277199,
                14.058324
            ],
            "birth_rate": 1.1534
        },
        {
            "cn": "也门",
            "en": "Yemen Rep.",
            "continent": "AS",
            "position": [
                48.516388,
                15.552727
            ],
            "birth_rate": 0.6493
        },
        {
            "cn": "塞尔维亚",
            "en": "Serbia",
            "continent": "EU",
            "position": [
                20.922496,
                44.018803
            ],
            "birth_rate": 0.0452
        },
        {
            "cn": "南非",
            "en": "South Africa",
            "continent": "AF",
            "position": [
                22.937506,
                -30.559482
            ],
            "birth_rate": 0.8818
        },
        {
            "cn": "赞比亚",
            "en": "Zambia",
            "continent": "AF",
            "position": [
                27.849332,
                -13.133897
            ],
            "birth_rate": 0.4863
        },
        {
            "cn": "津巴布韦",
            "en": "Zimbabwe",
            "continent": "AF",
            "position": [
                29.154857,
                -19.015438
            ],
            "birth_rate": 0.3214
        },
        {
            "cn": "格陵兰",
            "en": "Greenland",
            "continent": "NA",
            "position": [
                -42.604303,
                71.706936
            ],
            "birth_rate": 0.0006
        },
        {
            "cn": "几内亚比绍",
            "en": "Guinea-Bissau",
            "continent": "AF",
            "position": [
                -15.180413,
                11.803749
            ],
            "birth_rate": 0.0503
        },
        {
            "cn": "基里巴斯",
            "en": "Kiribati",
            "continent": "OA",
            "position": [
                173.0,
                1.3
            ],
            "birth_rate": 0.0024
        },
        {
            "cn": "科索沃",
            "en": "Kosovo",
            "continent": "EU",
            "position": [
                20.902977,
                42.6026359
            ],
            "birth_rate": 0.0199
        },
        {
            "cn": "毛里塔尼亚",
            "en": "Mauritania",
            "continent": "AF",
            "position": [
                -10.940835,
                21.00789
            ],
            "birth_rate": 0.1157
        },
        {
            "cn": "密克罗尼西亚联邦",
            "en": "Micronesia Fed. Sts.",
            "continent": "OA",
            "position": [
                158.09,
                6.55
            ],
            "birth_rate": 0.002
        },
        {
            "cn": "黑山",
            "en": "Montenegro",
            "continent": "EU",
            "position": [
                19.37439,
                42.708678
            ],
            "birth_rate": 0.005
        },
        {
            "cn": "新喀里多尼亚",
            "en": "New Caledonia",
            "continent": "OA",
            "position": [
                165.618042,
                -20.904305
            ],
            "birth_rate": 0.0028
        },
        {
            "cn": "马其顿",
            "en": "North Macedonia",
            "continent": "EU",
            "position": [
                21.745275,
                41.608635
            ],
            "birth_rate": 0.0136
        },
        {
            "cn": "帕劳",
            "en": "Palau",
            "continent": "OA",
            "position": [
                134.28,
                7.2
            ],
            "birth_rate": 0.0001
        },
        {
            "cn": "卢旺达",
            "en": "Rwanda",
            "continent": "AF",
            "position": [
                29.873888,
                -1.940278
            ],
            "birth_rate": 0.3022
        },
        {
            "cn": "南苏丹",
            "en": "South Sudan",
            "continent": "AF",
            "position": [
                31.3069788,
                6.876991899999999
            ],
            "birth_rate": 0.2841
        },
        {
            "cn": "圣基茨和尼维斯",
            "en": "St. Kitts and Nevis",
            "continent": "NA",
            "position": [
                -62.43,
                17.17
            ],
            "birth_rate": 0.0004
        },
        {
            "cn": "圣文森特和格林纳丁斯",
            "en": "St. Vincent and the Grenadines",
            "continent": "NA",
            "position": [
                -61.1,
                13.1
            ],
            "birth_rate": 0.0011
        },
        {
            "cn": "美属维尔京群岛",
            "en": "Virgin Islands (U.S.)",
            "continent": "NA",
            "position": [
                -64.56,
                18.21
            ],
            "birth_rate": 0.0009
        },
        {
            "cn": "东帝汶",
            "en": "Timor-Leste",
            "continent": "AS",
            "position": [
                125.727539,
                -8.874217
            ],
            "birth_rate": 0.0286
        },
        {
            "cn": "瓦努阿图",
            "en": "Vanuatu",
            "continent": "OA",
            "position": [
                166.959158,
                -15.376706
            ],
            "birth_rate": 0.0067
        },
        {
            "cn": "台湾（中国）",
            "en": "Taiwan",
            "continent": "AS",
            "position": [
                120.967428,
                23.880654
            ],
            "birth_rate": 0.1428
        }
    ]

    const populations = {
        "Afghanistan": 39835.43,
        "Albania": 2811.67,
        "Algeria": 44616.63,
        "American Samoa": 55.10,
        "Andorra": 77.35,
        "Angola": 33933.61,
        "Antigua and Barbuda": 98.73,
        "Argentina": 45808.75,
        "Armenia": 2968.13,
        "Aruba": 107.19,
        "Australia": 25739.26,
        "Austria": 8956.28,
        "Azerbaijan": 10145.21,
        "Bahamas The": 396.91,
        "Bahrain": 1748.30,
        "Bangladesh": 166303.49,
        "Barbados": 287.71,
        "Belarus": 9340.31,
        "Belgium": 11587.88,
        "Belize": 404.92,
        "Benin": 12451.03,
        "Bermuda": 63.87,
        "Bhutan": 779.90,
        "Bolivia": 11832.94,
        "Bosnia and Herzegovina": 3263.46,
        "Botswana": 2397.24,
        "Brazil": 213993.44,
        "Brunei Darussalam": 441.53,
        "Bulgaria": 6899.13,
        "Burkina Faso": 21497.10,
        "Burundi": 12255.43,
        "Cabo Verde": 561.90,
        "Cambodia": 16946.45,
        "Cameroon": 27224.26,
        "Canada": 38246.11,
        "Cayman Islands": 66.50,
        "Central African Republic": 4919.99,
        "Chad": 16914.99,
        "Channel Islands": 175.24,
        "Chile": 19212.36,
        "China": 1411100.00,
        "Colombia": 51265.84,
        "Comoros": 888.46,
        "Congo Dem. Rep.": 92377.99,
        "Congo Rep.": 5657.02,
        "Costa Rica": 5139.05,
        "Cote d'Ivoire": 27053.63,
        "Croatia": 3899.00,
        "Cuba": 11317.50,
        "Cyprus": 1215.59,
        "Czechia": 10703.45,
        "Denmark": 5856.73,
        "Djibouti": 1002.20,
        "Dominican Republic": 10953.71,
        "Ecuador": 17888.47,
        "Egypt Arab Rep.": 104258.33,
        "El Salvador": 6518.50,
        "Equatorial Guinea": 1449.89,
        "Eritrea": 3213.97,
        "Estonia": 1329.25,
        "Eswatini": 1172.37,
        "Ethiopia": 117876.23,
        "Faroe Islands": 49.05,
        "Fiji": 902.90,
        "Finland": 5541.70,
        "France": 67499.34,
        "French Polynesia": 282.53,
        "Gabon": 2278.83,
        "Gambia The": 2486.94,
        "Georgia": 3708.61,
        "Germany": 83129.29,
        "Ghana": 31732.13,
        "Greece": 10664.57,
        "Greenland": 56.65,
        "Grenada": 113.02,
        "Guam": 170.18,
        "Guatemala": 17109.75,
        "Guinea": 13497.24,
        "Guinea-Bissau": 2015.49,
        "Guyana": 790.33,
        "Haiti": 11541.68,
        "Honduras": 10062.99,
        "Hong Kong SAR China": 7413.10,
        "Hungary": 9709.89,
        "Iceland": 372.30,
        "India": 1393409.03,
        "Indonesia": 276361.79,
        "Iran Islamic Rep.": 85028.76,
        "Iraq": 41179.35,
        "Ireland": 5028.23,
        "Israel": 9364.00,
        "Italy": 59066.22,
        "Jamaica": 2973.46,
        "Japan": 125681.59,
        "Jordan": 10269.02,
        "Kazakhstan": 19002.59,
        "Kenya": 54985.70,
        "Kiribati": 121.39,
        "Korea Dem. People's Rep.": 25887.04,
        "Korea Rep.": 51744.88,
        "Kosovo": 1806.28,
        "Kuwait": 4328.55,
        "Kyrgyz Republic": 6694.20,
        "Lao PDR": 7379.36,
        "Latvia": 1883.16,
        "Lebanon": 6769.15,
        "Lesotho": 2159.07,
        "Liberia": 5180.21,
        "Libya": 6958.54,
        "Liechtenstein": 38.25,
        "Lithuania": 2795.32,
        "Luxembourg": 639.07,
        "Macao SAR China": 658.39,
        "Madagascar": 28427.33,
        "Malawi": 19647.68,
        "Malaysia": 32776.19,
        "Maldives": 543.62,
        "Mali": 20855.72,
        "Malta": 516.87,
        "Mauritania": 4775.11,
        "Mauritius": 1266.06,
        "Mexico": 130262.22,
        "Micronesia Fed. Sts.": 116.25,
        "Monaco": 39.52,
        "Moldova": 2573.93,
        "Mongolia": 3329.28,
        "Montenegro": 620.17,
        "Morocco": 37344.79,
        "Mozambique": 32163.04,
        "Myanmar": 54806.01,
        "Namibia": 2587.34,
        "Nepal": 29674.92,
        "Netherlands": 17533.40,
        "New Caledonia": 272.62,
        "New Zealand": 5122.60,
        "Nicaragua": 6702.38,
        "Niger": 25130.81,
        "Nigeria": 211400.70,
        "North Macedonia": 2065.09,
        "Northern Mariana Islands": 57.91,
        "Norway": 5408.32,
        "Oman": 5223.38,
        "Pakistan": 225199.93,
        "Palau": 18.17,
        "Panama": 4381.58,
        "Papua New Guinea": 9119.00,
        "Paraguay": 7219.64,
        "Peru": 33359.42,
        "Philippines": 111046.91,
        "Poland": 37781.02,
        "Portugal": 10299.42,
        "Puerto Rico": 3263.58,
        "Qatar": 2930.52,
        "Romania": 19115.15,
        "Russian Federation": 143446.06,
        "Rwanda": 13276.52,
        "Samoa": 200.14,
        "San Marino": 34.01,
        "Sao Tome and Principe": 223.36,
        "Saudi Arabia": 35340.68,
        "Senegal": 17196.31,
        "Serbia": 6844.08,
        "Seychelles": 99.20,
        "Sierra Leone": 8141.34,
        "Singapore": 5453.57,
        "Slovak Republic": 5447.25,
        "Slovenia": 2107.01,
        "Solomon Islands": 704.00,
        "Somalia": 16359.50,
        "South Africa": 60042.00,
        "South Sudan": 11381.38,
        "Spain": 47326.69,
        "Sri Lanka": 22156.00,
        "St. Kitts and Nevis": 53.55,
        "St. Lucia": 184.40,
        "St. Martin (French part)": 39.24,
        "St. Vincent and the Grenadines": 111.27,
        "Sudan": 44909.35,
        "Suriname": 591.80,
        "Sweden": 10415.81,
        "Switzerland": 8697.72,
        "Syrian Arab Republic": 18275.70,
        "Tajikistan": 9749.63,
        "Tanzania": 61498.44,
        "Thailand": 69950.84,
        "Timor-Leste": 1343.88,
        "Togo": 8478.24,
        "Tonga": 106.76,
        "Trinidad and Tobago": 1403.37,
        "Tunisia": 11935.76,
        "Turkiye": 85042.74,
        "Turkmenistan": 6117.93,
        "Uganda": 47123.53,
        "Ukraine": 43814.58,
        "United Arab Emirates": 9991.08,
        "United Kingdom": 67326.57,
        "United States": 331893.74,
        "Uruguay": 3485.15,
        "Uzbekistan": 34915.10,
        "Vanuatu": 314.46,
        "Venezuela RB": 28704.95,
        "Vietnam": 98168.83,
        "Virgin Islands (U.S.)": 105.87,
        "Yemen Rep.": 30490.64,
        "Zambia": 18920.66,
        "Zimbabwe": 15092.17,
        "Taiwan": 23186.28
    }

// creates a marker for a country at given longitude and latitude
function createMarker(country, coordinates){
    const el = document.createElement('div');
    el.className = 'marker';

    const marker = new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(`<h3>${country}</p>`)
        )
        .addTo(map);

    return marker;
}

function nextBirth(){
    let country = result();
    let chance = chanceCountry(country);
    document.getElementById('displayCountry').innerHTML = "You were born in: " + country + " with a chance of " + chance + "%!";

    return createMarker(country, getCountryPosition(country));
}

function chanceCountry(country){
    let total = 45162387.26644802;
    let num = getPopulation(country) * getBirthRate(country);
    return (num / total * 100).toFixed(2);
}

// removes previously generated marker
function deleteMarker(marker){
    marker.remove();
}

// generates random integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// finds population given country name
function getPopulation(country){

    for (var i in populations){
        if (country == i){
            return populations[i];
        }
    }
    return 0;
}

function getBirthRate(country){

    for (var i = 0; i < countries2.length; i++){
        if (country == countries2[i].en){
            return countries2[i].birth_rate;
        }
    }
    return 0;
}

// generates a random country
function result(){
    let result;
    let max = 45162387.26644802;
    let tmpName;
    let num = getRandomInt(0,max);

    let tmp = 0;
    for (let i = 0; i < countries2.length; i++){
        tmpName = countries2[i].en;
        tmp += getPopulation(tmpName) * countries2[i].birth_rate;
        if (num <= tmp){
            console.log(countries2[i].en);
            return countries2[i].en;
        }
    }
    return result;
}

function getCountryPosition(country){
    position = [0,0];
    for (let i = 0; i < countries2.length; i++){
        if (country == countries2[i].en){
            return countries2[i].position;
        }
    }
    return position;
}
