// unit_stats.js

const characterData = {
    "Michishibo": {
        MaxCost: 67000,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/unbound_units/kokushiboU_icon.png',
        Element: "Purple",
        Rarity: "Unbound",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 420, "Range": 10, "SPA": 3, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2000, "DoT": null },
            { "Damage": 770, "Range": 10, "SPA": 3, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2500, "DoT": null },
            { "Damage": 1170, "Range": 15, "SPA": 3, "AOE": { "type": "full aoe", "params": {} }, "Cost": 4150, "DoT": null },
            { "Damage": 4335, "Range": 30, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 16 } }, "Cost": 6785, "DoT": null },
            { "Damage": 5695, "Range": 35, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 16 } }, "Cost": 7450, "DoT": null },
            { "Damage": 6910, "Range": 40, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 16 } }, "Cost": 9525, "DoT": null },
            { "Damage": 11425, "Range": 30, "SPA": 8, "AOE": { "type": "cone", "params": { "coneAngle": 115 } }, "Cost": 10800, "DoT": null },
            { "Damage": 13490, "Range": 30, "SPA": 11, "AOE": { "type": "cone", "params": { "coneAngle": 115 } }, "Cost": 11400, "DoT": null },
            { "Damage": 15920, "Range": 33, "SPA": 11, "AOE": { "type": "cone", "params": { "coneAngle": 115 } }, "Cost": 12390, "DoT": null }
        ]
    },
    "Etri": {
        MaxCost: 62250,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/unbound_units/esdeathU_icon.png',
        Element: "Blue",
        Rarity: "Unbound",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 1050, "Range": 15, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 2500, "DoT": null },
            { "Damage": 1460, "Range": 16, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3000, "DoT": null },
            { "Damage": 1950, "Range": 17, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3750, "DoT": null },
            { "Damage": 2845, "Range": 20, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 4750, "DoT": null },
            { "Damage": 3645, "Range": 25, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 5375, "DoT": null },
            { "Damage": 4405, "Range": 30, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 5875, "DoT": null },
            { "Damage": 6295, "Range": 15, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 4 } }, "Cost": 7250, "DoT": null },
            { "Damage": 7685, "Range": 20, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 4 } }, "Cost": 10500, "DoT": null },
            { "Damage": 9480, "Range": 25, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 4 } }, "Cost": 16250, "DoT": null }
        ]
    },
    "Airren (Summoner)": {
        MaxCost: 52000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/eren5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        "Spawns": [{ "unitName": "Airren (Titan)", "spawnAtUpgrade": 0, "SeperateUnit": false }],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 300, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 1650, "DoT": null },
            { "Damage": 750, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 2500, "DoT": null },
            { "Damage": 1400, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 4000, "DoT": null },
            { "Damage": 2500, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 6000, "DoT": null },
            { "Damage": 4000, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 7750, "DoT": null },
            { "Damage": 6000, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 8475, "DoT": null },
            { "Damage": 9250, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 10500, "DoT": null },
            { "Damage": 14000, "Range": 13, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 11125, "DoT": null }
        ]
    },
    "Airren (Titan)": {
        MaxCost: 47900,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/eren5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 355, "Range": 12, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1650, "DoT": null },
            { "Damage": 730, "Range": 13.5, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2500, "DoT": null },
            { "Damage": 1215, "Range": 15, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 3500, "DoT": null },
            { "Damage": 1885, "Range": 22, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 5500, "DoT": null },
            { "Damage": 1825, "Range": 22, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 7650, "DoT": null },
            { "Damage": 2435, "Range": 22, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 8400, "DoT": null },
            { "Damage": 3065, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 9200, "DoT": null },
            { "Damage": 3715, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 9500, "DoT": null }
        ]
    },
    "Blackstache": {
        MaxCost: 31500,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/blackbeard5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 360, "Range": 26, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 9 } }, "Cost": 1000, "DoT": null },
            { "Damage": 600, "Range": 27, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 9 } }, "Cost": 1500, "DoT": null },
            { "Damage": 1500, "Range": 28, "SPA": 10, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 2500, "DoT": null },
            { "Damage": 2025, "Range": 29, "SPA": 10, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3000, "DoT": null },
            { "Damage": 2695, "Range": 30, "SPA": 10, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3500, "DoT": null },
            { "Damage": 2995, "Range": 30, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 5000, "DoT": null },
            { "Damage": 4120, "Range": 28, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 15000, "DoT": null }
        ]
    },
    "Dark Wing": {
        MaxCost: 46730,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/ulq5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 585, "Range": 20, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 1350, "DoT": null },
            { "Damage": 875, "Range": 20, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 2225, "DoT": null },
            { "Damage": 1285, "Range": 20, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3150, "DoT": null },
            { "Damage": 1495, "Range": 25, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 4400, "DoT": null },
            { "Damage": 2525, "Range": 25, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 6925, "DoT": null },
            { "Damage": 5315, "Range": 30, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 8 } }, "Cost": 13000, "DoT": null },
            { "Damage": 6540, "Range": 30, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 8 } }, "Cost": 15680, "DoT": null }
        ]
    },
    "Explosion Artist": {
        MaxCost: 35000,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/deidara5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid"],
        "upgrades": [
            { "Damage": 305, "Range": 10, "SPA": 2, "AOE": { "type": "patrol", "params": { "patrolRadius": 10 } }, "Cost": 1000, "DoT": null },
            { "Damage": 515, "Range": 10, "SPA": 2, "AOE": { "type": "patrol", "params": { "patrolRadius": 10 } }, "Cost": 1750, "DoT": null },
            { "Damage": 770, "Range": 10, "SPA": 2, "AOE": { "type": "patrol", "params": { "patrolRadius": 10 } }, "Cost": 2500, "DoT": null },
            { "Damage": 1075, "Range": 10, "SPA": 2, "AOE": { "type": "patrol", "params": { "patrolRadius": 10 } }, "Cost": 3360, "DoT": null },
            { "Damage": 3560, "Range": 15, "SPA": 5, "AOE": { "type": "patrol", "params": { "patrolRadius": 15 } }, "Cost": 7150, "DoT": null },
            { "Damage": 4435, "Range": 15, "SPA": 5, "AOE": { "type": "patrol", "params": { "patrolRadius": 15 } }, "Cost": 8500, "DoT": null },
            { "Damage": 5600, "Range": 15, "SPA": 5, "AOE": { "type": "patrol", "params": { "patrolRadius": 15 } }, "Cost": 10750, "DoT": null }
        ]
    },
    "Ikki (Hollow)": {
        MaxCost: 47400,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/ichigo5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 490, "Range": 12, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1800, "DoT": null },
            { "Damage": 1145, "Range": 12, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2250, "DoT": null },
            { "Damage": 2300, "Range": 15, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 8 } }, "Cost": 3500, "DoT": null },
            { "Damage": 3420, "Range": 22.5, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 8 } }, "Cost": 4550, "DoT": null },
            { "Damage": 4650, "Range": 30, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 8 } }, "Cost": 6300, "DoT": null },
            { "Damage": 6710, "Range": 30, "SPA": 9, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 8800, "DoT": null },
            { "Damage": 8495, "Range": 35, "SPA": 9, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 9250, "DoT": null },
            { "Damage": 10450, "Range": 35, "SPA": 9, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 10950, "DoT": null }
        ]
    },
    "Jin Sung": {
        MaxCost: 49750,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/sjw5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        "Spawns": [{ "unitName": "Blood Commander", "spawnAtUpgrade": 5, "SeperateUnit": true }],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 235, "Range": 12, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1250, "DoT": null },
            { "Damage": 470, "Range": 12, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1800, "DoT": null },
            { "Damage": 1215, "Range": 19, "SPA": 2, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3000, "DoT": null },
            { "Damage": 1600, "Range": 21, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 4000, "DoT": null },
            { "Damage": 2515, "Range": 28, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 6000, "DoT": null },
            { "Damage": 2925, "Range": 30, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 13000, "DoT": null },
            { "Damage": 3510, "Range": 30, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 7900, "DoT": null },
            { "Damage": 7200, "Range": 34, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 10 } }, "Cost": 12000, "DoT": null }
        ]
    },
    "Blood Commander": {
        MaxCost: 34000,
        PlacementCount: 3,
        MaxUpgrades: 4,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 735, "Range": 25, "SPA": 3.5, "AOE": { "type": "line", "params": { "lineWidth": 5 } }, "Cost": 0, "DoT": "Bleed" },
            { "Damage": 900, "Range": 25, "SPA": 3.5, "AOE": { "type": "line", "params": { "lineWidth": 5 } }, "Cost": 3500, "DoT": "Bleed" },
            { "Damage": 1145, "Range": 25, "SPA": 3.5, "AOE": { "type": "line", "params": { "lineWidth": 5 } }, "Cost": 5500, "DoT": "Bleed" },
            { "Damage": 3365, "Range": 32, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 11000, "DoT": "Bleed" },
            { "Damage": 4485, "Range": 32, "SPA": 8, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 14000, "DoT": "Bleed" }
        ]
    },
    "King Kaoe": {
        MaxCost: 22500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/kingkai5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 4, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 8, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 12, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 16, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 20, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 20, "Range": 7, "SPA": 16, "AOE": { "type": "full aoe", "params": {} }, "Cost": 17500, "DoT": null }
        ]
    },
    "Kujo": {
        MaxCost: 33950,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/ginjo5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 880, "Range": 25, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 900, "DoT": null },
            { "Damage": 1695, "Range": 25, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 1500, "DoT": null },
            { "Damage": 2675, "Range": 25, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 3100, "DoT": null },
            { "Damage": 3900, "Range": 25, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 4700, "DoT": null },
            { "Damage": 5190, "Range": 25, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 6200, "DoT": null },
            { "Damage": 4660, "Range": 15, "SPA": 5, "AOE": { "type": "cone", "params": { "coneAngle": 115 } }, "Cost": 8750, "DoT": null },
            { "Damage": 5710, "Range": 15, "SPA": 5, "AOE": { "type": "cone", "params": { "coneAngle": 115 } }, "Cost": 8800, "DoT": null }
        ]
    },
    "Mysterious X": {
        MaxCost: 45150,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/gojo5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 325, "Range": 10, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1500, "DoT": null },
            { "Damage": 560, "Range": 14, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2000, "DoT": null },
            { "Damage": 615, "Range": 18, "SPA": 3, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 3000, "DoT": null },
            { "Damage": 810, "Range": 22, "SPA": 3, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 4100, "DoT": null },
            { "Damage": 1120, "Range": 26, "SPA": 3, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 5600, "DoT": null },
            { "Damage": 3080, "Range": 30, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 9 } }, "Cost": 8700, "DoT": null },
            { "Damage": 4060, "Range": 30, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 9 } }, "Cost": 9000, "DoT": null },
            { "Damage": 5320, "Range": 30, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 9 } }, "Cost": 11250, "DoT": null }
        ]
    },
    "Nighty": {
        MaxCost: 47000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/sunny5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 175, "Range": 13, "SPA": 2, "AOE": { "type": "cone", "params": { "coneAngle": 80 } }, "Cost": 1300, "DoT": null },
            { "Damage": 330, "Range": 13, "SPA": 2, "AOE": { "type": "cone", "params": { "coneAngle": 80 } }, "Cost": 2000, "DoT": null },
            { "Damage": 515, "Range": 18, "SPA": 2, "AOE": { "type": "cone", "params": { "coneAngle": 80 } }, "Cost": 3150, "DoT": null },
            { "Damage": 770, "Range": 18, "SPA": 2, "AOE": { "type": "cone", "params": { "coneAngle": 80 } }, "Cost": 4675, "DoT": null },
            { "Damage": 3220, "Range": 23, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 20 } }, "Cost": 8750, "DoT": null },
            { "Damage": 4340, "Range": 23, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 20 } }, "Cost": 10525, "DoT": null },
            { "Damage": 6020, "Range": 33, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 20 } }, "Cost": 16600, "DoT": null }
        ]
    },
    "Onwin": {
        MaxCost: 26500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/erwin5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 120, "Range": 20, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 1100, "DoT": null },
            { "Damage": 240, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 1100, "DoT": null },
            { "Damage": 20, "Range": 30, "SPA": 5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2800, "DoT": null },
            { "Damage": 20, "Range": 30, "SPA": 5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 4000, "DoT": null },
            { "Damage": 20, "Range": 30, "SPA": 5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 7500, "DoT": null },
            { "Damage": 20, "Range": 30, "SPA": 5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 10000, "DoT": null }
        ]
    },
    "Onwin (Summon)": {
        MaxCost: 26500,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/5_star_units/erwin5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 120, "Range": 20, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 1100, "DoT": null },
            { "Damage": 240, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 1100, "DoT": null },
            { "Damage": 750, "Range": 30, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 2800, "DoT": null },
            { "Damage": 1750, "Range": 30, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 4000, "DoT": null },
            { "Damage": 3250, "Range": 30, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 7500, "DoT": null },
            { "Damage": 6000, "Range": 30, "SPA": 45, "AOE": { "type": "summoner", "params": {} }, "Cost": 10000, "DoT": null }
        ]
    },
    "Slayer Mage": {
        MaxCost: 53000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/frieren5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 945, "Range": 25, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 1450, "DoT": null },
            { "Damage": 1090, "Range": 25, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 2800, "DoT": null },
            { "Damage": 2910, "Range": 31, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 3500, "DoT": null },
            { "Damage": 4165, "Range": 31, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 5550, "DoT": null },
            { "Damage": 5475, "Range": 31, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 6700, "DoT": null },
            { "Damage": 6875, "Range": 31, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 8000, "DoT": null },
            { "Damage": 8295, "Range": 38, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 15 } }, "Cost": 10300, "DoT": null },
            { "Damage": 10190, "Range": 38, "SPA": 7.8, "AOE": { "type": "circle", "params": { "circleRadius": 15 } }, "Cost": 14700, "DoT": null }
        ]
    },
    "Super Borul": {
        MaxCost: 57500,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/broly5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 585, "Range": 25, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 1100, "DoT": null },
            { "Damage": 1120, "Range": 25, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 2600, "DoT": null },
            { "Damage": 1400, "Range": 25, "SPA": 5, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 4100, "DoT": null },
            { "Damage": 1960, "Range": 28, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 6000, "DoT": null },
            { "Damage": 2615, "Range": 28, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 7650, "DoT": null },
            { "Damage": 3410, "Range": 28, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 9850, "DoT": null },
            { "Damage": 6305, "Range": 36, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 10 } }, "Cost": 12350, "DoT": null },
            { "Damage": 6655, "Range": 36, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 10 } }, "Cost": 13850, "DoT": null }
        ]
    },
    "Super God Koku": {
        MaxCost: 39250,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/goku5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 310, "Range": 24, "SPA": 3, "AOE": { "type": "single", "params": {} }, "Cost": 750, "DoT": null },
            { "Damage": 490, "Range": 27, "SPA": 3, "AOE": { "type": "single", "params": {} }, "Cost": 1500, "DoT": null },
            { "Damage": 700, "Range": 30, "SPA": 3, "AOE": { "type": "single", "params": {} }, "Cost": 2400, "DoT": null },
            { "Damage": 725, "Range": 35, "SPA": 3, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 3000, "DoT": null },
            { "Damage": 1005, "Range": 37.5, "SPA": 2, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 5500, "DoT": null },
            { "Damage": 1310, "Range": 40, "SPA": 2, "AOE": { "type": "circle", "params": { "circleRadius": 5 } }, "Cost": 8250, "DoT": null },
            { "Damage": 5135, "Range": 40, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 7 } }, "Cost": 17850, "DoT": null }
        ]
    },
    "The Strongest One": {
        MaxCost: 40325,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/sukuna5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 785, "Range": 25, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 1750, "DoT": "Bleed" },
            { "Damage": 1385, "Range": 26, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 2250, "DoT": "Bleed" },
            { "Damage": 1865, "Range": 27, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 3675, "DoT": "Bleed" },
            { "Damage": 2600, "Range": 28, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 5700, "DoT": "Bleed" },
            { "Damage": 3415, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 7500, "DoT": "Bleed" },
            { "Damage": 4295, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 8450, "DoT": "Bleed" },
            { "Damage": 6910, "Range": 40, "SPA": 9, "AOE": { "type": "circle", "params": { "circleRadius": 9 } }, "Cost": 11000, "DoT": "Burn" }
        ]
    },
    "Venus": {
        MaxCost: 72500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/ishtar5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 235, "Range": 20, "SPA": 2.5, "AOE": { "type": "circle", "params": { "circleRadius": 2 } }, "Cost": 1400, "DoT": null },
            { "Damage": 440, "Range": 20, "SPA": 2.5, "AOE": { "type": "circle", "params": { "circleRadius": 2 } }, "Cost": 1800, "DoT": null },
            { "Damage": 705, "Range": 22.5, "SPA": 2.5, "AOE": { "type": "circle", "params": { "circleRadius": 2 } }, "Cost": 2450, "DoT": null },
            { "Damage": 1015, "Range": 22.5, "SPA": 2.5, "AOE": { "type": "circle", "params": { "circleRadius": 2 } }, "Cost": 3900, "DoT": null },
            { "Damage": 1350, "Range": 25, "SPA": 2.5, "AOE": { "type": "circle", "params": { "circleRadius": 2 } }, "Cost": 5450, "DoT": null },
            { "Damage": 6835, "Range": 25, "SPA": 9, "AOE": { "type": "circle", "params": { "circleRadius": 12 } }, "Cost": 27500, "DoT": null },
            { "Damage": 9145, "Range": 25, "SPA": 9, "AOE": { "type": "circle", "params": { "circleRadius": 12 } }, "Cost": 14000, "DoT": null },
            { "Damage": 11770, "Range": 25, "SPA": 9, "AOE": { "type": "circle", "params": { "circleRadius": 12 } }, "Cost": 16000, "DoT": null }
        ]
    },
    "Water Goddess": {
        MaxCost: 52500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/aqua5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 730, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 1200, "DoT": null },
            { "Damage": 1120, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 2000, "DoT": null },
            { "Damage": 1820, "Range": 15, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 3400, "DoT": null },
            { "Damage": 2605, "Range": 20, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 4600, "DoT": null },
            { "Damage": 3445, "Range": 20, "SPA": 6, "AOE": { "type": "line", "params": { "lineWidth": 10 } }, "Cost": 6700, "DoT": null },
            { "Damage": 4480, "Range": 20, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 9500, "DoT": null },
            { "Damage": 5740, "Range": 32, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 12000, "DoT": null },
            { "Damage": 7420, "Range": 32, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 13100, "DoT": null }
        ]
    },
    "Whitestache": {
        MaxCost: 45000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/5_star_units/whitebeard5_icon.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 350, "Range": 12, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 5 } }, "Cost": 950, "DoT": null },
            { "Damage": 735, "Range": 15, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 5 } }, "Cost": 1950, "DoT": null },
            { "Damage": 1635, "Range": 18, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 2600, "DoT": null },
            { "Damage": 2370, "Range": 22, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 3150, "DoT": null },
            { "Damage": 3155, "Range": 26, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 3800, "DoT": null },
            { "Damage": 3970, "Range": 30, "SPA": 8, "AOE": { "type": "circle", "params": { "circleRadius": 8 } }, "Cost": 4700, "DoT": null },
            { "Damage": 6240, "Range": 25, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 12850, "DoT": null },
            { "Damage": 7500, "Range": 25, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 15000, "DoT": null }
        ]
    },
    "Xero": {
        MaxCost: 5000,
        PlacementCount: 4,
        MaxUpgrades: 4,
        Image: './images/units/5_star_units/lelouche5_icon.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 3.71, "Range": 16, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 7.44, "Range": 16, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 11.17, "Range": 16, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 14.9, "Range": 16, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null },
            { "Damage": 18.67, "Range": 16, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1000, "DoT": null }
        ]
    },
    "Xerxes": {
        MaxCost: 45000,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/edward5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 860, "Range": 15, "SPA": 7.5, "AOE": { "type": "trap", "params": { "trapCount": 3 } }, "Cost": 1000, "DoT": null },
            { "Damage": 1805, "Range": 15, "SPA": 7.5, "AOE": { "type": "trap", "params": { "trapCount": 3 } }, "Cost": 1500, "DoT": null },
            { "Damage": 2445, "Range": 15, "SPA": 6.5, "AOE": { "type": "trap", "params": { "trapCount": 3 } }, "Cost": 3000, "DoT": null },
            { "Damage": 2880, "Range": 15, "SPA": 6.5, "AOE": { "type": "trap", "params": { "trapCount": 3 } }, "Cost": 5000, "DoT": null },
            { "Damage": 3410, "Range": 15, "SPA": 5.5, "AOE": { "type": "trap", "params": { "trapCount": 5 } }, "Cost": 9500, "DoT": null },
            { "Damage": 4275, "Range": 15, "SPA": 5, "AOE": { "type": "trap", "params": { "trapCount": 5 } }, "Cost": 11000, "DoT": null },
            { "Damage": 5225, "Range": 15, "SPA": 5, "AOE": { "type": "trap", "params": { "trapCount": 5 } }, "Cost": 14000, "DoT": null }
        ]
    },
    "Yuni": {
        MaxCost: 21500,
        PlacementCount: 4,
        MaxUpgrades: 4,
        Image: './images/units/5_star_units/yuno5_icon.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 305, "Range": 4.75, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1250, "DoT": "Bleed" },
            { "Damage": 430, "Range": 5, "SPA": 1.75, "AOE": { "type": "single", "params": {} }, "Cost": 2000, "DoT": "Bleed" },
            { "Damage": 615, "Range": 5.25, "SPA": 1.5, "AOE": { "type": "single", "params": {} }, "Cost": 2500, "DoT": "Bleed" },
            { "Damage": 745, "Range": 5.75, "SPA": 1, "AOE": { "type": "single", "params": {} }, "Cost": 5000, "DoT": "Bleed" },
            { "Damage": 315, "Range": 6, "SPA": 0.25, "AOE": { "type": "single", "params": {} }, "Cost": 10750, "DoT": "Bleed" }
        ]
    },
    "Zaruto (Beast Cloak)": {
        MaxCost: 37400,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/naruto5_icon.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 375, "Range": 15, "SPA": 4, "AOE": { "type": "line", "params": { "lineWidth": 3 } }, "Cost": 1250, "DoT": null },
            { "Damage": 645, "Range": 17, "SPA": 4, "AOE": { "type": "line", "params": { "lineWidth": 3 } }, "Cost": 2575, "DoT": null },
            { "Damage": 1700, "Range": 17, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 3700, "DoT": null },
            { "Damage": 2470, "Range": 20, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 4800, "DoT": null },
            { "Damage": 3320, "Range": 24, "SPA": 7, "AOE": { "type": "circle", "params": { "circleRadius": 7 } }, "Cost": 6225, "DoT": null },
            { "Damage": 2690, "Range": 29, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 8250, "DoT": null },
            { "Damage": 3500, "Range": 33, "SPA": 4, "AOE": { "type": "circle", "params": { "circleRadius": 6 } }, "Cost": 10600, "DoT": null }
        ]
    },
    "Zorro": {
        MaxCost: 36750,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/5_star_units/mihawk5_icon.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 900, "Range": 25, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 11 } }, "Cost": 1750, "DoT": null },
            { "Damage": 1405, "Range": 25, "SPA": 7, "AOE": { "type": "line", "params": { "lineWidth": 11 } }, "Cost": 2250, "DoT": null },
            { "Damage": 1515, "Range": 25, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 11 } }, "Cost": 3500, "DoT": null },
            { "Damage": 2155, "Range": 30, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 11 } }, "Cost": 4350, "DoT": null },
            { "Damage": 3030, "Range": 35, "SPA": 5, "AOE": { "type": "line", "params": { "lineWidth": 11 } }, "Cost": 5950, "DoT": null },
            { "Damage": 2445, "Range": 40, "SPA": 3, "AOE": { "type": "line", "params": { "lineWidth": 2 } }, "Cost": 8600, "DoT": null },
            { "Damage": 3215, "Range": 50, "SPA": 3, "AOE": { "type": "line", "params": { "lineWidth": 2 } }, "Cost": 10350, "DoT": null }
        ]
    },
    "Magma Marine": {
        MaxCost: 66400,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "Unbound",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 266, "Range": 15, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 1200, "DoT": "Burn" },
            { "Damage": 557, "Range": 15, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 1600, "DoT": "Burn" },
            { "Damage": 873, "Range": 15, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 2400, "DoT": "Burn" },
            { "Damage": 3352, "Range": 28, "SPA": 8, "AOE": { "type": "circle", "params": {} }, "Cost": 2400, "DoT": "Burn" },
            { "Damage": 4456, "Range": 28, "SPA": 8, "AOE": { "type": "circle", "params": {} }, "Cost": 3800, "DoT": "Burn" },
            { "Damage": 5600, "Range": 30, "SPA": 8, "AOE": { "type": "circle", "params": {} }, "Cost": 7000, "DoT": "Burn" },
            { "Damage": 4328, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 9000, "DoT": "Burn" },
            { "Damage": 5206, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 14000, "DoT": "Burn" },
            { "Damage": 5403, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 25000, "DoT": "Burn" }
        ]
    },
    "Spider Boss": {
        MaxCost: 70000,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "Unbound",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 177, "Range": 15, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 800, "DoT": "Poison" },
            { "Damage": 937, "Range": 20, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 1500, "DoT": "Poison" },
            { "Damage": 1410, "Range": 20, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 1900, "DoT": "Poison" },
            { "Damage": 1932, "Range": 20, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 2800, "DoT": "Poison" },
            { "Damage": 2514, "Range": 25, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 4500, "DoT": "Poison" },
            { "Damage": 3204, "Range": 30, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 6500, "DoT": "Poison" },
            { "Damage": 5028, "Range": 35, "SPA": 7, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 10000, "DoT": null },
            { "Damage": 7118, "Range": 35, "SPA": 7, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 15000, "DoT": null },
            { "Damage": 10150, "Range": 35, "SPA": 7, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 27000, "DoT": null }
        ]
    },
    "Alligator": {
        MaxCost: 61000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 463, "Range": 25, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 1500, "DoT": null },
            { "Damage": 877, "Range": 25, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 2000, "DoT": null },
            { "Damage": 1326, "Range": 25, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 2350, "DoT": null },
            { "Damage": 5102, "Range": 28, "SPA": 8, "AOE": { "type": "line", "params": {"lineWidth":5} }, "Cost": 5750, "DoT": null },
            { "Damage": 7035, "Range": 28, "SPA": 8, "AOE": { "type": "line", "params": {"lineWidth":5} }, "Cost": 7000, "DoT": null },
            { "Damage": 9006, "Range": 28, "SPA": 8, "AOE": { "type": "line", "params": {"lineWidth":5} }, "Cost": 8400, "DoT": null },
            { "Damage": 6906, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 15000, "DoT": null },
            { "Damage": 8518, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 19000, "DoT": null }
        ]
    },
    "Killer (Serious)": {
        MaxCost: 42500,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 140, "Range": 25, "SPA": 1.5, "AOE": { "type": "single", "params": {} }, "Cost": 700, "DoT": "Shock" },
            { "Damage": 315, "Range": 25, "SPA": 1.5, "AOE": { "type": "single", "params": {} }, "Cost": 950, "DoT": "Shock" },
            { "Damage": 525, "Range": 25, "SPA": 1.5, "AOE": { "type": "single", "params": {} }, "Cost": 1250, "DoT": "Shock" },
            { "Damage": 2235, "Range": 28, "SPA": 4.5, "AOE": { "type": "circle", "params": {} }, "Cost": 1600, "DoT": "Shock" },
            { "Damage": 2925, "Range": 28, "SPA": 4.5, "AOE": { "type": "circle", "params": {} }, "Cost": 5000, "DoT": "Shock" },
            { "Damage": 3650, "Range": 28, "SPA": 4.5, "AOE": { "type": "circle", "params": {} }, "Cost": 8000, "DoT": "Shock" },
            { "Damage": 3935, "Range": 30, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 11000, "DoT": "Shock" },
            { "Damage": 4085, "Range": 30, "SPA": 4, "AOE": { "type": "full aoe", "params": {} }, "Cost": 14000, "DoT": "Shock" }
        ]
    },
    "Mercury Guardian": {
        MaxCost: 34000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 725, "Range": 12, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1600, "DoT": null },
            { "Damage": 1287, "Range": 12, "SPA": 7, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1800, "DoT": null },
            { "Damage": 2011, "Range": 12, "SPA": 6, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2375, "DoT": null },
            { "Damage": 2761, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 3600, "DoT": null },
            { "Damage": 2977, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 5150, "DoT": null },
            { "Damage": 5245, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 7250, "DoT": null },
            { "Damage": 4511, "Range": 15, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 12225, "DoT": null }
        ]
    },
    "Shark Ninja": {
        MaxCost: 39700,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 276, "Range": 10, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 950, "DoT": null },
            { "Damage": 414, "Range": 10, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1250, "DoT": null },
            { "Damage": 646, "Range": 10, "SPA": 3, "AOE": { "type": "single", "params": {} }, "Cost": 1750, "DoT": null },
            { "Damage": 1380, "Range": 20, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 2500, "DoT": null },
            { "Damage": 1863, "Range": 20, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 3250, "DoT": null },
            { "Damage": 2415, "Range": 20, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 5000, "DoT": null },
            { "Damage": 5063, "Range": 22, "SPA": 5, "AOE": { "type": "cone", "params": {} }, "Cost": 10000, "DoT": null },
            { "Damage": 6443, "Range": 22, "SPA": 5, "AOE": { "type": "cone", "params": {} }, "Cost": 15000, "DoT": null }
        ]
    },
    "Silent Swordsman": {
        MaxCost: 50000,
        PlacementCount: 4,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 414, "Range": 20, "SPA": 3, "AOE": { "type": "line", "params": {"lineWidth":2} }, "Cost": 900, "DoT": null },
            { "Damage": 863, "Range": 22, "SPA": 3, "AOE": { "type": "line", "params": {"lineWidth":2} }, "Cost": 1000, "DoT": null },
            { "Damage": 1346, "Range": 25, "SPA": 3, "AOE": { "type": "line", "params": {"lineWidth":2} }, "Cost": 1600, "DoT": null },
            { "Damage": 4432, "Range": 28, "SPA": 7, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 3500, "DoT": null },
            { "Damage": 5832, "Range": 29, "SPA": 7, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 9000, "DoT": null },
            { "Damage": 7345, "Range": 30, "SPA": 7, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 14000, "DoT": null },
            { "Damage": 11806, "Range": 35, "SPA": 9, "AOE": { "type": "line", "params": {"lineWidth":9} }, "Cost": 20000, "DoT": null }
        ]
    },
    "Spade": {
        MaxCost: 44100,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 330, "Range": 20, "SPA": 4, "AOE": { "type": "circle", "params": {} }, "Cost": 875, "DoT": "Burn" },
            { "Damage": 532, "Range": 23, "SPA": 4, "AOE": { "type": "circle", "params": {} }, "Cost": 1575, "DoT": "Burn" },
            { "Damage": 828, "Range": 26, "SPA": 4, "AOE": { "type": "circle", "params": {} }, "Cost": 2100, "DoT": "Burn" },
            { "Damage": 1494, "Range": 30, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 3400, "DoT": "Burn" },
            { "Damage": 2125, "Range": 32, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 5150, "DoT": "Burn" },
            { "Damage": 2815, "Range": 34, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 7875, "DoT": "Burn" },
            { "Damage": 3564, "Range": 36, "SPA": 5, "AOE": { "type": "circle", "params": {} }, "Cost": 9500, "DoT": "Burn" },
            { "Damage": 2623, "Range": 40, "SPA": 3, "AOE": { "type": "circle", "params": {} }, "Cost": 13625, "DoT": "Burn" }
        ]
    },
    "Ziek (Beast Giant)": {
        MaxCost: 58500,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid", "Hybrid"],
        "upgrades": [
            { "Damage": 645, "Range": 14, "SPA": 6, "AOE": { "type": "ring circle", "params": {} }, "Cost": 900, "DoT": null },
            { "Damage": 1345, "Range": 14, "SPA": 6, "AOE": { "type": "ring circle", "params": {} }, "Cost": 1300, "DoT": null },
            { "Damage": 2100, "Range": 14, "SPA": 6, "AOE": { "type": "ring circle", "params": {} }, "Cost": 2100, "DoT": null },
            { "Damage": 2910, "Range": 14, "SPA": 6, "AOE": { "type": "ring circle", "params": {} }, "Cost": 3700, "DoT": null },
            { "Damage": 3806, "Range": 14, "SPA": 6, "AOE": { "type": "ring circle", "params": {} }, "Cost": 6500, "DoT": null },
            { "Damage": 9546, "Range": 19, "SPA": 12, "AOE": { "type": "ring cone", "params": {} }, "Cost": 10000, "DoT": null },
            { "Damage": 12886, "Range": 19, "SPA": 12, "AOE": { "type": "ring cone", "params": {} }, "Cost": 15000, "DoT": null },
            { "Damage": 16941, "Range": 19, "SPA": 12, "AOE": { "type": "ring cone", "params": {} }, "Cost": 19000, "DoT": null }
        ]
    },
    "Supreme Leader": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 235, "Range": 30, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1200, "DoT": null },
            { "Damage": 375, "Range": 30, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1750, "DoT": null },
            { "Damage": 540, "Range": 31, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 2400, "DoT": null },
            { "Damage": 725, "Range": 31, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 3575, "DoT": null },
            { "Damage": 935, "Range": 32, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 5200, "DoT": null },
            { "Damage": 1170, "Range": 32, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 8050, "DoT": null },
            { "Damage": 1405, "Range": 33, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 12500, "DoT": null },
            { "Damage": 1635, "Range": 33, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 17500, "DoT": null },
            { "Damage": 1870, "Range": 34, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 25000, "DoT": null }
        ]
    },
    "Supreme Leader (2nd Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 375, "Range": 34, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 1200, "DoT": null },
            { "Damage": 598, "Range": 34, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 1750, "DoT": null },
            { "Damage": 861, "Range": 35, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 2400, "DoT": null },
            { "Damage": 1156, "Range": 35, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 3575, "DoT": null },
            { "Damage": 1490, "Range": 36, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 5200, "DoT": null },
            { "Damage": 1865, "Range": 36, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 8050, "DoT": null },
            { "Damage": 2239, "Range": 37, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 12500, "DoT": null },
            { "Damage": 2606, "Range": 37, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 17500, "DoT": null },
            { "Damage": 2980, "Range": 38, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 25000, "DoT": null }
        ]
    },
    "Supreme Leader (3rd Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 662, "Range": 38, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 1200, "DoT": null },
            { "Damage": 1055, "Range": 38, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 1750, "DoT": null },
            { "Damage": 1519, "Range": 39, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 2400, "DoT": null },
            { "Damage": 2040, "Range": 39, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 3575, "DoT": null },
            { "Damage": 2629, "Range": 40, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 5200, "DoT": null },
            { "Damage": 3291, "Range": 40, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 8050, "DoT": null },
            { "Damage": 3951, "Range": 41, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 12500, "DoT": null },
            { "Damage": 4699, "Range": 41, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 17500, "DoT": null },
            { "Damage": 5259, "Range": 42, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 25000, "DoT": null }
        ]
    },
    "Supreme Leader (Final Form)": {
        MaxCost: 77175,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "Unbound",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 1236, "Range": 42, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 1200, "DoT": null },
            { "Damage": 1969, "Range": 42, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 1750, "DoT": null },
            { "Damage": 2836, "Range": 43, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 2400, "DoT": null },
            { "Damage": 3808, "Range": 43, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 3575, "DoT": null },
            { "Damage": 4908, "Range": 44, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 5200, "DoT": null },
            { "Damage": 6143, "Range": 44, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 8050, "DoT": null },
            { "Damage": 7375, "Range": 45, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 12500, "DoT": null },
            { "Damage": 8585, "Range": 45, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 17500, "DoT": null },
            { "Damage": 9817, "Range": 46, "SPA": 7.5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 25000, "DoT": null }
        ]
    },
    "Zesty General": {
        MaxCost: 55000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 495, "Range": 29, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 950, "DoT": null },
            { "Damage": 934, "Range": 29, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1350, "DoT": null },
            { "Damage": 1400, "Range": 32, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 2200, "DoT": null },
            { "Damage": 3366, "Range": 32, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 4000, "DoT": null },
            { "Damage": 4379, "Range": 37, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 7500, "DoT": null },
            { "Damage": 5686, "Range": 37, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 9000, "DoT": null },
            { "Damage": 6415, "Range": 39, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 13000, "DoT": null },
            { "Damage": 8663, "Range": 42, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 17000, "DoT": null }
        ]
    },
    "Sky God": {
        MaxCost: 44560,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 542, "Range": 25, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1350, "DoT": "Shock" },
            { "Damage": 812, "Range": 27, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1600, "DoT": "Shock" },
            { "Damage": 1157, "Range": 29, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 2200, "DoT": "Shock" },
            { "Damage": 2507, "Range": 32, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":6} }, "Cost": 3375, "DoT": "Shock" },
            { "Damage": 3487, "Range": 35, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":6} }, "Cost": 4150, "DoT": "Shock" },
            { "Damage": 4566, "Range": 37, "SPA": 6, "AOE": { "type": "circle", "params": {"circleRadius":6} }, "Cost": 5475, "DoT": "Shock" },
            { "Damage": 4797, "Range": 40, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 7250, "DoT": "Shock" },
            { "Damage": 5709, "Range": 42, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 8675, "DoT": "Shock" },
            { "Damage": 6898, "Range": 45, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 10505, "DoT": "Shock" }
        ]
    },
    "Masochist Lady": {
        MaxCost: 50000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 210, "Range": 10, "SPA": 1.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 950, "DoT": null },
            { "Damage": 357, "Range": 12, "SPA": 1.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 1500, "DoT": null },
            { "Damage": 525, "Range": 14, "SPA": 1.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 2250, "DoT": null },
            { "Damage": 2268, "Range": 17, "SPA": 4.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 4750, "DoT": null },
            { "Damage": 3062, "Range": 19, "SPA": 4.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 5250, "DoT": null },
            { "Damage": 3969, "Range": 22, "SPA": 4.5, "AOE": { "type": "full aoe", "params": {} }, "Cost": 7000, "DoT": null },
            { "Damage": 3430, "Range": 24, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 12300, "DoT": null },
            { "Damage": 4573, "Range": 30, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 16000, "DoT": null }
        ]
    },
    "Future T": {
        MaxCost: 48500,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill", "Hill"],
        "upgrades": [
            { "Damage": 315, "Range": 25, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 950, "DoT": null },
            { "Damage": 588, "Range": 27, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 1500, "DoT": null },
            { "Damage": 903, "Range": 29, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 2400, "DoT": null },
            { "Damage": 989, "Range": 32, "SPA": 3.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 4250, "DoT": null },
            { "Damage": 1315, "Range": 32, "SPA": 3.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 6000, "DoT": null },
            { "Damage": 1707, "Range": 37, "SPA": 3.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 8400, "DoT": null },
            { "Damage": 3402, "Range": 42, "SPA": 5.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 11000, "DoT": null },
            { "Damage": 4262, "Range": 45, "SPA": 5.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 14000, "DoT": null }
        ]
    },
    "Freezer (Final Form)": {
        MaxCost: 70000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 193, "Range": 30, "SPA": 1.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 1050, "DoT": null },
            { "Damage": 420, "Range": 32, "SPA": 1.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 1350, "DoT": null },
            { "Damage": 665, "Range": 34, "SPA": 1.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 2500, "DoT": null },
            { "Damage": 2836, "Range": 37, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 3500, "DoT": null },
            { "Damage": 3782, "Range": 37, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 5600, "DoT": null },
            { "Damage": 5042, "Range": 37, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 12500, "DoT": null },
            { "Damage": 5310, "Range": 37, "SPA": 3.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 18500, "DoT": null },
            { "Damage": 7189, "Range": 40, "SPA": 3.5, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 25000, "DoT": null }
        ]
    },
    "BOX": {
        MaxCost: 39990,
        PlacementCount: 3,
        MaxUpgrades: 6,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 564, "Range": 15, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 1150, "DoT": null },
            { "Damage": 850, "Range": 16, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 2000, "DoT": null },
            { "Damage": 1683, "Range": 17, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 3350, "DoT": null },
            { "Damage": 2205, "Range": 18, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":8} }, "Cost": 4450, "DoT": null },
            { "Damage": 3676, "Range": 19, "SPA": 3.5, "AOE": { "type": "line", "params": {"lineWidth":9} }, "Cost": 7875, "DoT": null },
            { "Damage": 4569, "Range": 20, "SPA": 4.5, "AOE": { "type": "line", "params": {"lineWidth":9} }, "Cost": 8600, "DoT": null },
            { "Damage": 5987, "Range": 20, "SPA": 4.5, "AOE": { "type": "line", "params": {"lineWidth":9} }, "Cost": 12565, "DoT": null }
        ]
    },
    "Benimaru": {
        MaxCost: 63000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 233, "Range": 15, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 1400, "DoT": "Burn" },
            { "Damage": 481, "Range": 15, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 2000, "DoT": "Burn" },
            { "Damage": 742, "Range": 15, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 3500, "DoT": "Burn" },
            { "Damage": 2579, "Range": 20, "SPA": 5, "AOE": { "type": "cone", "params": {"coneAngle":140} }, "Cost": 5500, "DoT": "Burn" },
            { "Damage": 3373, "Range": 20, "SPA": 5, "AOE": { "type": "cone", "params": {"coneAngle":140} }, "Cost": 8600, "DoT": "Burn" },
            { "Damage": 6583, "Range": 40, "SPA": 8, "AOE": { "type": "circle", "params": {"circleRadius":12} }, "Cost": 10000, "DoT": "Burn" },
            { "Damage": 8347, "Range": 40, "SPA": 8, "AOE": { "type": "circle", "params": {"circleRadius":12} }, "Cost": 13000, "DoT": "Burn" },
            { "Damage": 9841, "Range": 40, "SPA": 8, "AOE": { "type": "circle", "params": {"circleRadius":12} }, "Cost": 19000, "DoT": "Burn" }
        ]
    },
    "Kuroma": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        "Spawns": [
            { "unitName": "Kuroma (Hybrid Form)", "spawnAtUpgrade": 2, "SeperateUnit": false },
            { "unitName": "Kuroma (Full AOE Form)", "spawnAtUpgrade": 2, "SeperateUnit": false }
        ],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 420, "Range": 12, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 800, "DoT": null },
            { "Damage": 875, "Range": 12, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 1200, "DoT": null },
            { "Damage": 1386, "Range": 14, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 2500, "DoT": null },
            { "Damage": 1954, "Range": 16, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 4500, "DoT": null },
            { "Damage": 2577, "Range": 16, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 9000, "DoT": null },
            { "Damage": 3340, "Range": 18, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 12000, "DoT": null },
            { "Damage": 4341, "Range": 18, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 15000, "DoT": null },
            { "Damage": 5602, "Range": 19, "SPA": 3, "AOE": { "type": "cone", "params": {"coneAngle":90} }, "Cost": 30000, "DoT": null }
        ]
    },
    "Kuroma (Hybrid Form)": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 1538, "Range": 31.5, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 800, "DoT": null },
            { "Damage": 2169, "Range": 31.5, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 4500, "DoT": null },
            { "Damage": 2860, "Range": 36, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 4500, "DoT": null },
            { "Damage": 3707, "Range": 36, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 9000, "DoT": null },
            { "Damage": 4819, "Range": 40.5, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 12000, "DoT": null },
            { "Damage": 6218, "Range": 42.75, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 15000, "DoT": null }
        ]
    },
    "Kuroma (Full AOE Form)": {
        MaxCost: 75000,
        PlacementCount: 3,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Green",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 4435, "Range": 23.52, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 800, "DoT": null },
            { "Damage": 6253, "Range": 23.52, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 4500, "DoT": null },
            { "Damage": 8246, "Range": 26.88, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 4500, "DoT": null },
            { "Damage": 10688, "Range": 26.88, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 9000, "DoT": null },
            { "Damage": 13891, "Range": 30.24, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 12000, "DoT": null },
            { "Damage": 17926, "Range": 31.92, "SPA": 9, "AOE": { "type": "full aoe", "params": {} }, "Cost": 15000, "DoT": null }
        ]
    },
    "Inumaki": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        "Spawns": [
            { "unitName": "Inumaki (Stop)", "spawnAtUpgrade": 2, "SeperateUnit": false },
            { "unitName": "Inumaki (Cut)", "spawnAtUpgrade": 2, "SeperateUnit": false },
            { "unitName": "Inumaki (Explode)", "spawnAtUpgrade": 2, "SeperateUnit": false }
        ],
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 243, "Range": 10, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 725, "DoT": null },
            { "Damage": 523, "Range": 11, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 1300, "DoT": null },
            { "Damage": 831, "Range": 12, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 2500, "DoT": null },
            { "Damage": 1186, "Range": 14, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 7500, "DoT": null },
            { "Damage": 1587, "Range": 15, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 7225, "DoT": null },
            { "Damage": 2082, "Range": 17, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 9750, "DoT": null },
            { "Damage": 2670, "Range": 18, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 14000, "DoT": null },
            { "Damage": 3501, "Range": 20, "SPA": 2, "AOE": { "type": "cone", "params": {"coneAngle":55} }, "Cost": 17000, "DoT": null }
        ]
    },
    "Inumaki (Stop)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 997, "Range": 30, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 4525, "DoT": null },
            { "Damage": 1423, "Range": 35, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 7500, "DoT": null },
            { "Damage": 1904, "Range": 37.5, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 7225, "DoT": null },
            { "Damage": 2498, "Range": 42.5, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 9750, "DoT": null },
            { "Damage": 3204, "Range": 45, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 14000, "DoT": null },
            { "Damage": 4201, "Range": 50, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 17000, "DoT": null }
        ]
    },
    "Inumaki (Cut)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 998, "Range": 27, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 4525, "DoT": "Bleed" },
            { "Damage": 1424, "Range": 31.5, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 7500, "DoT": "Bleed" },
            { "Damage": 1906, "Range": 33.75, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 7225, "DoT": "Bleed" },
            { "Damage": 2500, "Range": 38.25, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 9750, "DoT": "Bleed" },
            { "Damage": 3207, "Range": 40.5, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 14000, "DoT": "Bleed" },
            { "Damage": 4205, "Range": 45, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":3} }, "Cost": 17000, "DoT": "Bleed" }
        ]
    },
    "Inumaki (Explode)": {
        MaxCost: 60000,
        PlacementCount: 4,
        MaxUpgrades: 5,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 1903, "Range": 24, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 4525, "DoT": null },
            { "Damage": 2716, "Range": 28, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 7500, "DoT": null },
            { "Damage": 3634, "Range": 30, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 7225, "DoT": null },
            { "Damage": 4768, "Range": 34, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 9750, "DoT": null },
            { "Damage": 6114, "Range": 36, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 14000, "DoT": null },
            { "Damage": 8017, "Range": 40, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius":8} }, "Cost": 17000, "DoT": null }
        ]
    },
    "Reigen": {
        MaxCost: 49000,
        PlacementCount: 4,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Orange",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 567, "Range": 20, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 1111, "DoT": null },
            { "Damage": 945, "Range": 24, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 1350, "DoT": null },
            { "Damage": 1342, "Range": 28, "SPA": 4.5, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 1859, "DoT": null },
            { "Damage": 1606, "Range": 32, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 3680, "DoT": null },
            { "Damage": 2054, "Range": 36, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 4500, "DoT": null },
            { "Damage": 2987, "Range": 40, "SPA": 4, "AOE": { "type": "circle", "params": {"circleRadius" : 7} }, "Cost": 8800, "DoT": null },
            { "Damage": 5134, "Range": 40, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius" : 10} }, "Cost": 10000, "DoT": null },
            { "Damage": 7081, "Range": 40, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius" : 10} }, "Cost": 17700, "DoT": null }
        ]
    },
    "Starrk": {
        MaxCost: 59000,
        PlacementCount: 4,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Blue",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 496, "Range": 17, "SPA": 2.5, "AOE": { "type": "cone", "params": {"coneAngle":40} }, "Cost": 1075, "DoT": null },
            { "Damage": 788, "Range": 20, "SPA": 2.5, "AOE": { "type": "cone", "params": {"coneAngle":40} }, "Cost": 1300, "DoT": null },
            { "Damage": 1167, "Range": 23, "SPA": 2.5, "AOE": { "type": "cone", "params": {"coneAngle":40} }, "Cost": 1875, "DoT": null },
            { "Damage": 4097, "Range": 18, "SPA": 6.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 3450, "DoT": null },
            { "Damage": 5234, "Range": 20, "SPA": 6.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 5250, "DoT": null },
            { "Damage": 6524, "Range": 22, "SPA": 6.5, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 6800, "DoT": null },
            { "Damage": 6303, "Range": 32, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":10} }, "Cost": 9250, "DoT": null },
            { "Damage": 8053, "Range": 38, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":10} }, "Cost": 12750, "DoT": null },
            { "Damage": 10307, "Range": 45, "SPA": 5, "AOE": { "type": "line", "params": {"lineWidth":10} }, "Cost": 17250, "DoT": null }
        ]
    },
    "Tobi": {
        MaxCost: 65000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 448, "Range": 23, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 950, "DoT": null },
            { "Damage": 980, "Range": 24, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 1550, "DoT": null },
            { "Damage": 1568, "Range": 25, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 2600, "DoT": null },
            { "Damage": 2213, "Range": 27, "SPA": 3, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 3900, "DoT": null },
            { "Damage": 4855, "Range": 32, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 8000, "DoT": null },
            { "Damage": 7190, "Range": 35, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 12000, "DoT": null },
            { "Damage": 9757, "Range": 40, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 15000, "DoT": null },
            { "Damage": 12838, "Range": 45, "SPA": 5, "AOE": { "type": "circle", "params": {"circleRadius":9} }, "Cost": 21000, "DoT": null }
        ]
    },
    "Toji": {
        MaxCost: 40000,
        PlacementCount: 3,
        MaxUpgrades: 7,
        Image: './images/units/placeholder.png',
        Element: "Red",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 195, "Range": 20, "SPA": 2, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 950, "DoT": "Bleed" },
            { "Damage": 410, "Range": 22, "SPA": 2, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 1400, "DoT": "Bleed" },
            { "Damage": 639, "Range": 25, "SPA": 2, "AOE": { "type": "line", "params": {"lineWidth":7} }, "Cost": 2800, "DoT": "Bleed" },
            { "Damage": 1424, "Range": 30, "SPA": 2.75, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 3500, "DoT": "Bleed" },
            { "Damage": 1890, "Range": 30, "SPA": 2.75, "AOE": { "type": "circle", "params": {"circleRadius":5} }, "Cost": 4350, "DoT": "Bleed" },
            { "Damage": 2534, "Range": 32, "SPA": 2.75, "AOE": { "type": "circle", "params": {"circleRadius":11} }, "Cost": 6500, "DoT": "Bleed" },
            { "Damage": 3360, "Range": 36, "SPA": 2.75, "AOE": { "type": "circle", "params": {"circleRadius":11} }, "Cost": 8000, "DoT": "Bleed" },
            { "Damage": 4989, "Range": 40, "SPA": 3.25, "AOE": { "type": "circle", "params": {"circleRadius":12} }, "Cost": 12500, "DoT": null }
        ]
    },
    "Yami": {
        MaxCost: 60000,
        PlacementCount: 3,
        MaxUpgrades: 8,
        Image: './images/units/placeholder.png',
        Element: "Purple",
        Rarity: "5 Star",
        PlacementStatus: ["Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground", "Ground"],
        "upgrades": [
            { "Damage": 116, "Range": 10, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1000, "DoT": "BlackFlames" },
            { "Damage": 270, "Range": 12, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 1300, "DoT": "BlackFlames" },
            { "Damage": 452, "Range": 15, "SPA": 2, "AOE": { "type": "single", "params": {} }, "Cost": 2200, "DoT": "BlackFlames" },
            { "Damage": 686, "Range": 22, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 3235, "DoT": "BlackFlames" },
            { "Damage": 947, "Range": 27, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 4400, "DoT": "BlackFlames" },
            { "Damage": 1227, "Range": 32, "SPA": 2, "AOE": { "type": "circle", "params": {"circleRadius":7} }, "Cost": 5875, "DoT": "BlackFlames" },
            { "Damage": 4172, "Range": 38, "SPA": 5.5, "AOE": { "type": "line", "params": {"lineWidth":6} }, "Cost": 9475, "DoT": "BlackFlames" },
            { "Damage": 5071, "Range": 38, "SPA": 5.5, "AOE": { "type": "line", "params": {"lineWidth":6} }, "Cost": 12750, "DoT": "BlackFlames" },
            { "Damage": 6098, "Range": 38, "SPA": 5.5, "AOE": { "type": "line", "params": {"lineWidth":6} }, "Cost": 19765, "DoT": "BlackFlames" }
        ]
    }
};