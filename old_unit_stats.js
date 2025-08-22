// unit_stats.js

const characterData = {
    "Michishibo": {
        MaxCost: 67000,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/unbound_units/kokushiboU_icon.png',
        Element: "Purple",
        Rarity: "Unbound",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "420", "770", "1170", "4335", "5695", "6910", "11425", "13490", "15920"
            ],
            Range: [
                "10", "10", "15", "30", "35", "40", "30", "30", "33"
            ],
            SPA: [
                "3", "3", "3", "8", "8", "8", "8", "11", "11"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "Line (16)", "Line (16)", "Line (16)", "Cone (115)", "Cone (115)", "Cone (115)"
            ],
            Cost: [
                "2000", "2500", "4150", "6785", "7450", "9525", "10800", "11400", "12390"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Etri": {
        MaxCost: 62250,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/unbound_units/esdeathU_icon.png',
        Element: "Blue",
        Rarity: "Unbound",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "1050", "1460", "1950", "2845", "3645", "4405", "6295", "7685", "9480"
            ],
            Range: [
                "15", "16", "17", "20", "25", "30", "15", "20", "25"
            ],
            SPA: [
                "5", "5", "5", "6", "6", "6", "7", "7", "7"
            ],
            AOE: [
                "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (6)", "EAOE (6)", "EAOE (6)", "Line (4)", "Line (4)", "Line (4)"
            ],
            Cost: [
                "2500", "3000", "3750", "4750", "5375", "5875", "7250", "10500", "16250"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Airren (Summoner)": {
        MaxCost: 52000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/eren5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        "Spawns": [
        {
            "unitName": "Airren (Titan)", 
            "spawnAtUpgrade": 0,
            "SeperateUnit": false,
        }],
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "300", "750", "1400", "2500", "4000", "6000", "9250", "14000"
            ],
            Range: [
                "13", "13", "13", "13", "13", "13", "13", "13"
            ],
            SPA: [
                "45", "45", "45", "45", "45", "45", "45", "45"
            ],
            AOE: [
                "Summoner", "Summoner", "Summoner", "Summoner", "Summoner", "Summoner", "Summoner", "Summoner"
            ],
            Cost: [
                "1650", "2500", "4000", "6000", "7750", "8475", "10500", "11125"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Airren (Titan)": {
        MaxCost: 47900,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/eren5_icon.png',
        Element: "Green", 
        Rarity: "5 Star", 
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "355", "730", "1215", "1885", "1825", "2435", "3065", "3715"
            ],
            Range: [
                "12", "13.5", "15", "22", "22", "22", "30", "30"
            ],
            SPA: [
                "4", "4", "4", "7", "7", "7", "7", "7"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (7)"
            ],
            Cost: [
                "1650", "2500", "3500", "5500", "7650", "8400", "9200", "9500"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Blackstache": {
        MaxCost: 31500,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/blackbeard5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "360", "600", "1500", "2025", "2695", "2995", "4120"
            ],
            Range: [
                "26", "27", "28", "29", "30", "30", "28"
            ],
            SPA: [
                "6", "6", "10", "10", "10", "8", "8"
            ],
            AOE: [
                "Line (9)", "Line (9)", "EAOE (7)", "EAOE (7)", "EAOE (7)", "Line (10)", "Line (10)"
            ],
            Cost: [
                "1000", "1500", "2500", "3000", "3500", "5000", "15000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Dark Wing": {
        MaxCost: 46730,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/ulq5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "585", "875", "1285", "1495", "2525", "5315", "6540"
            ],
            Range: [
                "20", "20", "20", "25", "25", "30", "30"
            ],
            SPA: [
                "5", "5", "5", "6", "6", "7", "7"
            ],
            AOE: [
                "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (8)", "EAOE (8)", "Line (8)", "Line (8)"
            ],
            Cost: [
                "1350", "2225", "3150", "4400", "6925", "13000", "15680"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Explosion Artist": {
        MaxCost: 35000,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/deidara5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid"
        ],
        Stats: {
            Damage: [
                "305", "515", "770", "1075", "3560", "4435", "5600"
            ],
            Range: [
                "10", "10", "10", "10", "15", "15", "15"
            ],
            SPA: [
                "2", "2", "2", "2", "5", "5", "5"
            ],
            AOE: [
                "Patrol (10)", "Patrol (10)", "Patrol (10)", "Patrol (10)", "Patrol (15)", "Patrol (15)", "Patrol (15)"
            ],
            Cost: [
                "1000", "1750", "2500", "3360", "7150", "8500", "10750"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Ikki (Hollow)": {
        MaxCost: 47400,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/ichigo5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "490", "1145", "2300", "3420", "4650", "6710", "8495", "10450"
            ],
            Range: [
                "12", "12", "15", "22.5", "30", "30", "35", "35"
            ],
            SPA: [
                "7", "7", "7", "8", "8", "9", "9", "9"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Line (8)", "Line (8)", "Line (8)", "Line (10)", "Line (10)", "Line (10)"
            ],
            Cost: [
                "1800", "2250", "3500", "4550", "6300", "8800", "9250", "10950"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Jin Sung": {
        MaxCost: 49750,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/sjw5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        "Spawns": [
        {
            "unitName": "Blood Commander",
            "spawnAtUpgrade": 5,
            "SeperateUnit": true
        }],
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "235", "470", "1215", "1600", "2515", "2925", "3510", "7200"
            ],
            Range: [
                "12", "12", "19", "21", "28", "30", "30", "34"
            ],
            SPA: [
                "2", "2", "2", "4", "5", "5", "5", "8"
            ],
            AOE: [
                "Single", "Single", "EAOE (7)", "EAOE (7)", "Line (10)", "Line (10)", "Line (10)", "EAOE (10)"
            ],
            Cost: [
                "1250", "1800", "3000", "4000", "6000", "13000", "7900", "12000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Blood Commander": {
        MaxCost: 34000,
        PlacementCount: 3,
        MaxUpgrades: 4,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "735", "900", "1145", "3365", "4485"
            ],
            Range: [
                "25", "25", "25", "32", "32"
            ],
            SPA: [
                "3.5", "3.5", "3.5", "8", "8"
            ],
            AOE: [
                "Line (5)", "Line (5)", "Line (5)", "Line (10)", "Line (10)"
            ],
            Cost: [
                "3500", "5500", "11000", "14000"
            ],
            DoT: [
                "Bleed", "Bleed", "Bleed", "Bleed", "Bleed"
            ],
            AttackCount: []
        }
    },
    "King Kaoe": {
        MaxCost: 22500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/kingkai5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "4", "8", "12", "16", "20", "20"
            ],
            Range: [
                "7", "7", "7", "7", "7", "7"
            ],
            SPA: [
                "16", "16", "16", "16", "16", "16"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Full AOE"
            ],
            Cost: [
                "1000", "1000", "1000", "1000", "1000", "17500"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Kujo": {
        MaxCost: 33950,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/ginjo5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "880", "1695", "2675", "3900", "5190", "4660", "5710"
            ],
            Range: [
                "25", "25", "25", "25", "25", "15", "15"
            ],
            SPA: [
                "7", "7", "7", "7", "7", "5", "5"
            ],
            AOE: [
                "EAOE (6)", "EAOE (6)", "EAOE (6)", "EAOE (6)", "EAOE (6)", "Cone (115)", "Cone (115)"
            ],
            Cost: [
                "900", "1500", "3100", "4700", "6200", "8750", "8800"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Mysterious X": {
        MaxCost: 45150,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/gojo5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "325", "560", "615", "810", "1120", "3080", "4060", "5320"
            ],
            Range: [
                "10", "14", "18", "22", "26", "30", "30", "30"
            ],
            SPA: [
                "4", "4", "3", "3", "3", "6", "6", "6"
            ],
            AOE: [
                "Full AOE", "Full AOE", "EAOE (8)", "EAOE (8)", "EAOE (8)", "Line (9)", "Line (9)", "Line (9)"
            ],
            Cost: [
                "1500", "2000", "3000", "4100", "5600", "8700", "9000", "11250"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Nighty": {
        MaxCost: 47000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/sunny5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "175", "330", "515", "770", "3220", "4340", "6020"
            ],
            Range: [
                "13", "13", "18", "18", "23", "23", "33"
            ],
            SPA: [
                "2", "2", "2", "2", "6", "6", "6"
            ],
            AOE: [
                "Cone (80)", "Cone (80)", "Cone (80)", "Cone (80)", "Line (20)", "Line (20)", "Line (20)"
            ],
            Cost: [
                "1300", "2000", "3150", "4675", "8750", "10525", "16600"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Onwin": {
        MaxCost: 26500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/erwin5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "120", "240", "20", "20", "20", "20"
            ],
            Range: [
                "20", "30", "30", "30", "30", "30"
            ],
            SPA: [
                "7", "7", "5", "5", "5", "5"
            ],
            AOE: [
                "EAOE (8)", "EAOE (8)", "Full AOE", "Full AOE", "Full AOE", "Full AOE"
            ],
            Cost: [
                "1100", "1100", "2800", "4000", "7500", "10000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Onwin (Summon)": {
        MaxCost: 26500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/erwin5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "120", "240", "750", "1750", "3250", "6000"
            ],
            Range: [
                "20", "30", "30", "30", "30", "30"
            ],
            SPA: [
                "7", "7", "45", "45", "45", "45"
            ],
            AOE: [
                "EAOE (8)", "EAOE (8)", "Summoner", "Summoner", "Summoner", "Summoner"
            ],
            Cost: [
                "1100", "1100", "2800", "4000", "7500", "10000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Slayer Mage": {
        MaxCost: 53000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/frieren5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "945", "1090", "2910", "4165", "5475", "6875", "8295", "10190"
            ],
            Range: [
                "25", "25", "31", "31", "31", "31", "38", "38"
            ],
            SPA: [
                "7.8", "7.8", "7.8", "7.8", "7.8", "7.8", "7.8", "7.8"
            ],
            AOE: [
                "EAOE (5)", "EAOE (5)", "EAOE (5)", "EAOE (5)", "EAOE (5)", "EAOE (5)", "EAOE (15)", "EAOE (15)"
            ],
            Cost: [
                "1450", "2800", "3500", "5550", "6700", "8000", "10300", "14700"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Super Borul": {
        MaxCost: 57500,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/broly5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "585", "1120", "1400", "1960", "2615", "3410", "6305", "6655"
            ],
            Range: [
                "25", "25", "25", "28", "28", "28", "36", "36"
            ],
            SPA: [
                "5", "5", "5", "4", "4", "4", "6", "6"
            ],
            AOE: [
                "EAOE (5)", "EAOE (5)", "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (10)", "EAOE (10)"
            ],
            Cost: [
                "1100", "2600", "4100", "6000", "7650", "9850", "12350", "13850"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Super God Koku": {
        MaxCost: 39250,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/goku5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "310", "490", "700", "725", "1005", "1310", "5135"
            ],
            Range: [
                "24", "27", "30", "35", "37.5", "40", "40"
            ],
            SPA: [
                "3", "3", "3", "3", "2", "2", "5"
            ],
            AOE: [
                "Single", "Single", "Single", "EAOE (5)", "EAOE (5)", "EAOE (5)", "Line (7)"
            ],
            Cost: [
                "750", "1500", "2400", "3000", "5500", "8250", "17850"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "The Strongest One": {
        MaxCost: 40325,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/sukuna5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "785", "1385", "1865", "2600", "3415", "4295", "6910"
            ],
            Range: [
                "25", "26", "27", "28", "30", "30", "40"
            ],
            SPA: [
                "8", "8", "7", "7", "7", "7", "9"
            ],
            AOE: [
                "EAOE (7)", "EAOE (7)", "EAOE (8)", "EAOE (8)", "EAOE (8)", "EAOE (8)", "EAOE (9)"
            ],
            Cost: [
                "1750", "2250", "3675", "5700", "7500", "8450", "11000"
            ],
            DoT: [
                "Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "Burn"
            ],
            AttackCount: []
        }
    },
    "Venus": {
        MaxCost: 72500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/ishtar5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "235", "440", "705", "1015", "1350", "6835", "9145", "11770"
            ],
            Range: [
                "20", "20", "22.5", "22.5", "25", "25", "25", "25"
            ],
            SPA: [
                "2.5", "2.5", "2.5", "2.5", "2.5", "9", "9", "9"
            ],
            AOE: [
                "EAOE (2)", "EAOE (2)", "EAOE (2)", "EAOE (2)", "EAOE (2)", "EAOE (12)", "EAOE (12)", "EAOE (12)"
            ],
            Cost: [
                "1400", "1800", "2450", "3900", "5450", "27500", "14000", "16000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Water Goddess": {
        MaxCost: 52500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/aqua5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "730", "1120", "1820", "2605", "3445", "4480", "5740", "7420"
            ],
            Range: [
                "15", "15", "15", "20", "20", "20", "32", "32"
            ],
            SPA: [
                "6", "6", "6", "6", "6", "7", "7", "7"
            ],
            AOE: [
                "EAOE (6)", "EAOE (6)", "Line (10)", "Line (10)", "Line (10)", "EAOE (8)", "EAOE (8)", "EAOE (8)"
            ],
            Cost: [
                "1200", "2000", "3400", "4600", "6700", "9500", "12000", "13100"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Whitestache": {
        MaxCost: 45000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/whitebeard5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "350", "735", "1635", "2370", "3155", "3970", "6240", "7500"
            ],
            Range: [
                "12", "15", "18", "22", "26", "30", "25", "25"
            ],
            SPA: [
                "5", "5", "8", "8", "8", "8", "9", "9"
            ],
            AOE: [
                "Line (5)", "Line (5)", "EAOE (8)", "EAOE (8)", "EAOE (8)", "EAOE (8)", "Full AOE", "Full AOE"
            ],
            Cost: [
                "950", "1950", "2600", "3150", "3800", "4700", "12850", "15000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Xero": {
        MaxCost: 5000,
        PlacementCount: 4,
        MaxUpgrades: 4,
        Image: './images/units/5_star_units/lelouche5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "3.71", "7.44", "11.17", "14.9", "18.67"
            ],
            Range: [
                "16", "16", "16", "16", "16"
            ],
            SPA: [
                "7", "7", "7", "7", "7"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Full AOE"
            ],
            Cost: [
                "1000", "1000", "1000", "1000", "1000"
            ],
            DoT: [
                "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Xerxes": {
        MaxCost: 45000,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/edward5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "860", "1805", "2445", "2880", "3410", "4275", "5225"
            ],
            Range: [
                "15", "15", "15", "15", "15", "15", "15"
            ],
            SPA: [
                "7.5", "7.5", "6.5", "6.5", "5.5", "5", "5"
            ],
            AOE: [
                "Trap (3)", "Trap (3)", "Trap (3)", "Trap (3)", "Trap (5)", "Trap (5)", "Trap (5)"
            ],
            Cost: [
                "1000", "1500", "3000", "5000", "9500", "11000", "14000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Yuni": {
        MaxCost: 21500,
        PlacementCount: 4,
        MaxUpgrades: 4,
        Image: './images/units/5_star_units/yuno5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "305", "430", "615", "745", "315"
            ],
            Range: [
                "4.75", "5", "5.25", "5.75", "6"
            ],
            SPA: [
                "2", "1.75", "1.5", "1", "0.25"
            ],
            AOE: [
                "Single", "Single", "Single", "Single", "Single"
            ],
            Cost: [
                "1250", "2000", "2500", "5000", "10750"
            ],
            DoT: [
                "Bleed", "Bleed", "Bleed", "Bleed", "Bleed"
            ],
            AttackCount: []
        }
    },
    "Zaruto (Beast Cloak)": {
        MaxCost: 37400,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/naruto5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "375", "645", "1700", "2470", "3320", "2690", "3500"
            ],
            Range: [
                "15", "17", "17", "20", "24", "29", "33"
            ],
            SPA: [
                "4", "4", "7", "7", "7", "4", "4"
            ],
            AOE: [
                "Line (3)", "Line (3)", "EAOE (7)", "EAOE (7)", "EAOE (7)", "EAOE (6)", "EAOE (6)"
            ],
            Cost: [
                "1250", "2575", "3700", "4800", "6225", "8250", "10600"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Zorro": {
        MaxCost: 36750,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/mihawk5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "900", "1405", "1515", "2155", "3030", "2445", "3215"
            ],
            Range: [
                "25", "25", "25", "30", "35", "40", "50"
            ],
            SPA: [
                "7", "7", "5", "5", "5", "3", "3"
            ],
            AOE: [
                "Line (11)", "Line (11)", "Line (11)", "Line (11)", "Line (11)", "Line (2)", "Line (2)"
            ],
            Cost: [
                "1750", "2250", "3500", "4350", "5950", "8600", "10350"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Magma Marine": {
        MaxCost: 66400,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "Unbound",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "266","557","873","3352","4456","5600","4328","5206","5403"
            ],
            Range: [
                "15", "15", "15", "28", "28", "30", "30", "30", "30"
            ],
            SPA: [
                "3", "3", "3", "8", "8", "8", "5", "5", "5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1200", "1600", "2400", "2400", "3800", "7000", "9000", "14000", "25000"
            ],
            DoT: [
                "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn"
            ],
            AttackCount: []
        }
    },
    "Spider Boss": {
        MaxCost: 70000,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "Unbound",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "177","937","1410","1932","2514","3204","5028","7118","10150"
            ],
            Range: [
                "15", "20", "20", "20", "25", "30", "35", "35", "35"
            ],
            SPA: [
                "2", "6", "6", "6", "6", "6", "7", "7", "7"
            ],
            AOE: [
                "Single", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "Line", "Line", "Line"
            ],
            Cost: [
                "800", "1500", "1900", "2800", "4500", "6500", "10000", "15000", "27000"
            ],
            DoT: [
                "Poison", "Poison", "Poison", "Poison", "Poison", "Poison", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Alligator": {
        MaxCost: 61000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "463","877","1326","5102","7035","9006","6906","8518"
            ],
            Range: [
                "25", "25", "25", "28", "28", "28", "30", "30"
            ],
            SPA: [
                "3", "3", "3", "8", "8", "8", "5", "5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "Line", "Line", "Line", "EAOE", "EAOE"
            ],
            Cost: [
                "1500", "2000", "2350", "5750", "7000", "8400", "15000", "19000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Killer (Serious)": {
        MaxCost: 42500,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "140","315","525","2235","2925","3650","3935","4085"
            ],
            Range: [
                "25", "25", "25", "28", "28", "28", "30", "30"
            ],
            SPA: [
                "1.5", "1.5", "1.5", "4.5", "4.5", "4.5", "4", "4"
            ],
            AOE: [
                "Single", "Single", "Single", "EAOE", "EAOE", "EAOE", "Full AOE", "Full AOE"
            ],
            Cost: [
                "700", "950", "1250", "1600", "5000", "8000", "11000", "14000"
            ],
            DoT: [
                "Shock", "Shock", "Shock", "Shock", "Shock", "Shock", "Shock", "Shock"
            ],
            AttackCount: []
        }
    },
    "Mercury Guardian": {
        MaxCost: 34000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "725","1287","2011","2761","2977","5245","4511"
            ],
            Range: [
                "12", "12", "12", "15", "15", "15", "15"
            ],
            SPA: [
                "7", "7", "6", "6", "6", "6", "6"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1600", "1800", "2375", "3600", "5150", "7250", "12225"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Shark Ninja": {
        MaxCost: 39700,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "276","414","646","1380","1863","2415","5063","6443"
            ],
            Range: [
                "10", "10", "10", "20", "20", "20", "22", "22"
            ],
            SPA: [
                "2", "2", "3", "3", "3", "5", "5", "5"
            ],
            AOE: [
                "Single", "Single", "Single", "EAOE", "EAOE", "EAOE", "Cone", "Cone"
            ],
            Cost: [
                "950", "1250", "1750", "2500", "3250", "5000", "10000", "15000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Silent Swordsman": {
        MaxCost: 50000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "414","863","1346","4432","5832","7345","11806"
            ],
            Range: [
                "20", "22", "25", "28", "29", "30", "35"
            ],
            SPA: [
                "3", "3", "3", "7", "7", "7", "9"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "Line"
            ],
            Cost: [
                "900", "1000", "1600", "3500", "9000", "14000", "20000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Spade": {
        MaxCost: 44100,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "330","532","828","1494","2125","2815","3564","2623"
            ],
            Range: [
                "20", "23", "26", "30", "32", "34", "36", "40"
            ],
            SPA: [
                "4", "4", "4", "5", "5", "5", "5", "3"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "875", "1575", "2100", "3400", "5150", "7875", "9500", "13625"
            ],
            DoT: [
                "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn"
            ],
            AttackCount: []
        }
    },
    "Ziek (Beast Giant)": {
        MaxCost: 58500,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid"
        ],
        Stats: {
            Damage: [
                "645","1345","2100","2910","3806","9546","12886","16941"
            ],
            Range: [
                "14", "14", "14", "14", "14", "19", "19", "19"
            ],
            SPA: [
                "6", "6", "6", "6", "6", "12", "12", "12"
            ],
            AOE: [
                "Ring EAOE", "Ring EAOE", "Ring EAOE", "Ring EAOE", "Ring EAOE", "Ring Cone", "Ring Cone", "Ring Cone"
            ],
            Cost: [
                "900", "1300", "2100", "3700", "6500", "10000", "15000", "19000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Supreme Leader": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "235", "375", "540", "725", "935", "1170", "1405", "1635", "1870"
            ],
            Range: [
                "30", "30", "31", "31", "32", "32", "33", "33", "34"
            ],
            SPA: [
                "2", "2", "2", "2", "2", "2", "2", "2", "2"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1200", "1750", "2400", "3575", "5200", "8050", "12500", "17500", "25000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Supreme Leader (2nd Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "375", "598", "861", "1156", "1490", "1865", "2239", "2606", "2980"
            ],
            Range: [
                "34", "34", "35", "35", "36", "36", "37", "37", "38"
            ],
            SPA: [
                "3", "3", "3", "3", "3", "3", "3", "3", "3"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1200", "1750", "2400", "3575", "5200", "8050", "12500", "17500", "25000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Supreme Leader (3rd Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "662", "1055", "1519", "2040", "2629", "3291", "3951", "4699", "5259"
            ],
            Range: [
                "38", "38", "39", "39", "40", "40", "41", "41", "42"
            ],
            SPA: [
                "5", "5", "5", "5", "5", "5", "5", "5", "5"
            ],
            AOE: [
                "Line", "Line", "Line", "Line", "Line", "Line", "Line", "Line", "Line"
            ],
            Cost: [
                "1200", "1750", "2400", "3575", "5200", "8050", "12500", "17500", "25000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Supreme Leader (Final Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "1236", "1969", "2836", "3808", "4908", "6143", "7375", "8585", "9817"
            ],
            Range: [
                "42", "42", "43", "43", "44", "44", "45", "45", "46"
            ],
            SPA: [
                "7.5", "7.5", "7.5", "7.5", "7.5", "7.5", "7.5", "7.5", "7.5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1200", "1750", "2400", "3575", "5200", "8050", "12500", "17500", "25000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Zesty General": {
        MaxCost: 55000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "495", "934", "1400", "3366", "4379", "5686", "6415", "8663"
            ],
            Range: [
                "29", "29", "32", "32", "37", "37", "39", "42"
            ],
            SPA: [
                "4", "4", "4", "4", "4", "4", "6", "6"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "950", "1350", "2200", "4000", "7500", "9000", "13000", "17000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Sky God": {
        MaxCost: 44560,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "542", "812", "1157", "2507", "3487", "4566", "4797", "5709", "6898"
            ],
            Range: [
                "25", "27", "29", "32", "35", "37", "40", "42", "45"
            ],
            SPA: [
                "4", "4", "4", "6", "6", "6", "5", "5", "5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1350", "1600", "2200", "3375", "4150", "5475", "7250", "8675", "10505"
            ],
            DoT: [
                "Shock", "Shock", "Shock", "Shock", "Shock", "Shock", "Shock", "Shock", "Shock"
            ],
            AttackCount: []
        }
    },
    "Masochist Lady": {
        MaxCost: 50000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "210", "357", "525", "2268", "3062", "3969", "3430", "4573"
            ],
            Range: [
                "10", "12", "14", "17", "19", "22", "24", "30"
            ],
            SPA: [
                "1.5", "1.5", "1.5", "4.5", "4.5", "4.5", "3.5", "3.5"
            ],
            AOE: [
                "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Full AOE", "Line", "Line"
            ],
            Cost: [
                "950", "1500", "2250", "4750", "5250", "7000", "12300", "16000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Future T": {
        MaxCost: 48500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: [
            "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"
        ],
        Stats: {
            Damage: [
                "315", "588", "903", "989", "1315", "1707", "3402", "4262"
            ],
            Range: [
                "25", "27", "29", "32", "32", "37", "42", "45"
            ],
            SPA: [
                "4.5", "4.5", "4.5", "3.5", "3.5", "3.5", "5.5", "5.5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "950", "1500", "2400", "4250", "6000", "8400", "11000", "14000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Freezer (Final Form)": {
        MaxCost: 70000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "193", "420", "665", "2836", "3782", "5042", "5310", "7189"
            ],
            Range: [
                "30", "32", "34", "37", "37", "37", "37", "40"
            ],
            SPA: [
                "1.5", "1.5", "1.5", "4.5", "4.5", "4.5", "3.5", "3.5"
            ],
            AOE: [
                "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"
            ],
            Cost: [
                "1050", "1350", "2500", "3500", "5600", "12500", "18500", "25000"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "BOX": {
        MaxCost: 39990,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: [
            "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"
        ],
        Stats: {
            Damage: [
                "564", "850", "1683", "2205", "3676", "4569", "5987"
            ],
            Range: [
                "15", "16", "17", "18", "19", "20", "20"
            ],
            SPA: [
                "3.5", "3.5", "3.5", "3.5", "3.5", "4.5", "4.5"
            ],
            AOE: [
                "Line", "Line", "Line", "Line", "Line", "Line", "Line"
            ],
            Cost: [
                "1150", "2000", "3350", "4450", "7875", "8600", "12565"
            ],
            DoT: [
                "None", "None", "None", "None", "None", "None", "None"
            ],
            AttackCount: []
        }
    },
    "Benimaru": {
        MaxCost: 63000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["233", "481", "742", "2579", "3373", "6583", "8347", "9841"],
            Range: ["15", "15", "15", "20", "20", "40", "40", "40"],
            SPA: ["2", "2", "2", "5", "5", "8", "8", "8"],
            AOE: ["EAOE", "EAOE", "EAOE", "Cone", "Cone", "EAOE", "EAOE", "EAOE"],
            Cost: ["1400", "2000", "3500", "5500", "8600", "10000", "13000", "19000"],
            DoT: ["Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn", "Burn"],
            AttackCount: []
        }
    },
    "Kuroma": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        "Spawns": [
        {
            "unitName": "Kuroma (Hybrid Form)", 
            "spawnAtUpgrade": 2,
            "SeperateUnit": false,
        },
        {
            "unitName": "Kuroma (Full AOE Form)", 
            "spawnAtUpgrade": 2,
            "SeperateUnit": false,
        }
        ],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["420", "875", "1386", "1954", "2577", "3340", "4341", "5602"],
            Range: ["12", "12", "14", "16", "16", "18", "18", "19"],
            SPA: ["3", "3", "3", "3", "3", "3", "3", "3"],
            AOE: ["Cone", "Cone", "Cone", "Cone", "Cone", "Cone", "Cone", "Cone"],
            Cost: ["800", "1200", "2500", "4500", "9000", "12000", "15000", "30000"],
            DoT: ["None", "None", "None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Kuroma (Hybrid Form)": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["1538", "2169", "2860", "3707", "4819", "6218"],
            Range: ["31.5", "31.5", "36", "36", "40.5", "42.75"],
            SPA: ["3", "3", "3", "3", "3", "3"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["800", "4500", "4500", "9000", "12000", "15000"],
            DoT: ["None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Kuroma (Full AOE Form)": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["4435", "6253", "8246", "10688", "13891", "17926"],
            Range: ["23.52", "23.52", "26.88", "26.88", "30.24", "31.92"],
            SPA: ["9", "9", "9", "9", "9", "9"],
            AOE: ["AOE", "AOE", "AOE", "AOE", "AOE", "AOE"],
            Cost: ["800", "4500", "4500", "9000", "12000", "15000"],
            DoT: ["None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Inumaki": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        "Spawns": [
        {
            "unitName": "Inumaki (Stop)", 
            "spawnAtUpgrade": 2,
            "SeperateUnit": false,
        },
        {
            "unitName": "Inumaki (Cut)", 
            "spawnAtUpgrade": 2,
            "SeperateUnit": false,
        },
        {
            "unitName": "Inumaki (Explode)", 
            "spawnAtUpgrade": 2,
            "SeperateUnit": false,
        }
        ],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["243", "523", "831", "1186", "1587", "2082", "2670", "3501"],
            Range: ["10", "11", "12", "14", "15", "17", "18", "20"],
            SPA: ["2", "2", "2", "2", "2", "2", "2", "2"],
            AOE: ["Cone", "Cone", "Cone", "Cone", "Cone", "Cone", "Cone", "Cone"],
            Cost: ["725", "1300", "2500", "7500", "7225", "9750", "14000", "17000"],
            DoT: ["None", "None", "None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Inumaki (Stop)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["997", "1423", "1904", "2498", "3204", "4201"],
            Range: ["30", "35", "37.5", "42.5", "45", "50"],
            SPA: ["3", "3", "3", "3", "3", "3"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["4525", "7500", "7225", "9750", "14000","17000"],
            DoT: ["None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Inumaki (Cut)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["998", "1424", "1906", "2500", "3207", "4205"],
            Range: ["27", "31.5", "33.75", "38.25", "40.5", "45"],
            SPA: ["2", "2", "2", "2", "2", "2"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["4525", "7500", "7225", "9750", "14000","17000"],
            DoT: ["Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "Bleed"],
            AttackCount: []
        }
    },
    "Inumaki (Explode)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["1903", "2716", "3634", "4768", "6114", "8017"],
            Range: ["24", "28", "30", "34", "36", "40"],
            SPA: ["4", "4", "4", "4", "4", "4"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["4525", "7500", "7225", "9750", "14000","17000"],
            DoT: ["None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Reigen": {
        MaxCost: 49000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["567", "945", "1342", "1606", "2054", "2987", "5134", "7081"],
            Range: ["20", "24", "28", "32", "36", "40", "40", "40"],
            SPA: ["4.5", "4.5", "4.5", "4", "4", "4", "5", "5"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["1111", "1350", "1859", "3680", "4500", "8800", "10000", "17700"],
            DoT: ["None", "None", "None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Starrk": {
        MaxCost: 59000,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["496", "788", "1167", "4097", "5234", "6524", "6303", "8053", "10307"],
            Range: ["17", "20", "23", "18", "20", "22", "32", "38", "45"],
            SPA: ["2.5", "2.5", "2.5", "6.5", "6.5", "6.5", "5", "5", "5"],
            AOE: ["Cone", "Cone", "Cone", "Line", "Line", "Line", "Line", "Line", "Line"],
            Cost: ["1075", "1300", "1875", "3450", "5250", "6800", "9250", "12750", "17250"],
            DoT: ["None", "None", "None", "None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Tobi": {
        MaxCost: 65000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["448", "980", "1568", "2213", "4855", "7190", "9757", "12838"],
            Range: ["23", "24", "25", "27", "32", "35", "40", "45"],
            SPA: ["3", "3", "3", "3", "5", "5", "5", "5"],
            AOE: ["EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["950", "1550", "2600", "3900", "8000", "12000", "15000", "21000"],
            DoT: ["None", "None", "None", "None", "None", "None", "None", "None"],
            AttackCount: []
        }
    },
    "Toji": {
        MaxCost: 40000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["195","410","639","1424","1890","2534","3360","4989"],
            Range: ["20", "22", "25", "30", "30", "32", "36", "40"],
            SPA: ["2","2","2","2.75","2.75","2.75","2.75","3.25"],
            AOE: ["Line", "Line", "Line", "Line", "EAOE", "EAOE", "EAOE", "EAOE"],
            Cost: ["950", "1400", "2800", "3500", "4350", "6500", "8000", "12500"],
            DoT: ["Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "Bleed", "None"],
            AttackCount: []
        }
    },
    "Yami": {
        MaxCost: 60000,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        Stats: {
            Damage: ["116", "270", "452", "686", "947", "1227", "4172", "5071", "6098"],
            Range: ["10", "12", "15", "22", "27", "32", "38", "38", "38"],
            SPA: ["2", "2", "2", "2", "2", "2", "5.5", "5.5", "5.5"],
            AOE: ["Single", "Single", "Single", "EAOE", "EAOE", "EAOE", "Line", "Line", "Line"],
            Cost: ["1000", "1300", "2200", "3235", "4400", "5875", "9475", "12750", "19765"],
            DoT: ["BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames", "BlackFlames"],
            AttackCount: []
        }
    }
};
