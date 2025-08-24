// script.js

const newlyAddedUnits = [
    "Dark","Sorcerer Killer","Expert Sorcerer (Serious)","Tomi","Tony Stark","Cursed Talker","Kuroma","Fire Officer"
];

const banlist = [
    "Cursed Talker (Stop)", "Cursed Talker (Cut)", "Cursed Talker (Explode)", "Kuroma (Hybrid Form)", "Kuroma (Full AOE Form)", "Airren (Titan)"
];



document.addEventListener('DOMContentLoaded', () => {
    // Check if data is loaded before initializing
    if (typeof characterData !== 'undefined' && typeof traitsData !== 'undefined' && typeof skillTreeData !== 'undefined') {
        calculatorApp.init();
    } else {
        console.error("Data files (unit_stats.js, data.js) failed to load or are not defined.");
        document.getElementById('unitGrid').innerHTML = '<p style="color: red; text-align: center;">Error: Could not load unit data.</p>';
    }

    const disclaimerPopup = document.getElementById('disclaimerPopup');
    const closeDisclaimerBtn = document.getElementById('closeDisclaimerBtn');

    if (!sessionStorage.getItem('disclaimerShown')) {
        disclaimerPopup.style.display = 'flex';
    }

    closeDisclaimerBtn.addEventListener('click', () => {
        disclaimerPopup.style.display = 'none';
        sessionStorage.setItem('disclaimerShown', 'true');
    });

    // Check if data is loaded before initializing
    if (typeof characterData !== 'undefined' && typeof traitsData !== 'undefined' && typeof skillTreeData !== 'undefined') {
        calculatorApp.init();
    } else {
        console.error("Data files (unit_stats.js, data.js) failed to load or are not defined.");
        document.getElementById('unitGrid').innerHTML = '<p style="color: red; text-align: center;">Error: Could not load unit data.</p>';
    }

     const testerBtn = document.getElementById('testerBtn');
    if (testerBtn) {
        testerBtn.addEventListener('click', () => {
            const password = prompt("Enter password:");
            if (password === "koishi") {
                window.location.href = "unitVisualizer/test.html";
            } else if (password !== null) {
                alert("Incorrect password!");
            }
        });
    }
});

const calculatorApp = {
    // --- STATE ---
    state: {
        selectedUnit: null,
        activeOutputUnit: null, 
        spawnedUnits: [],
        unitLevel: 1,
        selectedTrait: 'Traitless',
        dmgRoll: 0,
        rngRoll: 0,
        spaRoll: 0,
        selectedSkillTree: 'None',
        selectedBuff: 'None',
        currentUpgradeIndexes: {}, 
        rollCount: 0,
        isVisualizerReady: false, 
        specialAbilities: {
            boxDeterminationActive: false,
            michishiboTransparentWorldActive: false,
            michishiboLunarBlessingActive: false,
            tojiHeavenlyRestrictionStacks: 0,
            explosionArtistAoeMode: 'scouter1',
        },
        previousCalculations: {},
    },

    // --- DOM ELEMENTS ---
    elements: {
        unitGrid: null,
        currentUnitDisplay: null,
        unitLevelControl: null,
        traitSelectionControl: null,
        statRollsControl: null,
        skillTreeControl: null,
        onFieldBuffsControl: null,
        outputTabsContainer: null,
        dpsOutputSection: null,
        combinedDpsSection: null,
        dmgRollInput: null,
        rngRollInput: null,
        spaRollInput: null,
        rollTraitBtn: null,
        rollCounter: null,
        unitSearchInput: null,
        specialControls: null,
        visualizerFrame: null,
        visualizerContainer: null,
        resetSelectionBtn: null,
        traitRollContainer: null,
    },

    // --- INITIALIZATION ---
    init() {
        this.cacheDOMElements();
        this.populateUI();
        this.bindEvents();
        this.render();
    },

    cacheDOMElements() {
        this.elements.unitGrid = document.getElementById('unitGrid');
        this.elements.currentUnitDisplay = document.getElementById('currentUnitDisplay');
        this.elements.unitLevelControl = document.getElementById('unitLevelControl');
        this.elements.traitSelectionControl = document.getElementById('traitSelectionControl');
        this.elements.statRollsControl = document.getElementById('statRollsControl');
        this.elements.skillTreeControl = document.getElementById('skillTreeControl');
        this.elements.onFieldBuffsControl = document.getElementById('onFieldBuffsControl');
        this.elements.outputTabsContainer = document.getElementById('outputTabsContainer');
        this.elements.dpsOutputSection = document.getElementById('dpsOutputSection');
        this.elements.combinedDpsSection = document.getElementById('combined-dps-section');
        this.elements.dmgRollInput = document.getElementById('dmgRollInput');
        this.elements.rngRollInput = document.getElementById('rngRollInput');
        this.elements.spaRollInput = document.getElementById('spaRollInput');
        this.elements.unitSearchInput = document.getElementById('unitSearchInput');
        this.elements.specialControls = document.getElementById('special-controls');
        this.elements.visualizerFrame = document.getElementById('aoeVisualizerFrame');
        this.elements.visualizerContainer = document.getElementById('visualizer-container');
        this.elements.resetSelectionBtn = document.getElementById('resetSelectionBtn');
        this.elements.traitRollContainer = document.getElementById('traitRollContainer'); 
        this.elements.resetSelectionBtn = document.getElementById('resetSelectionBtn');
    },

    populateUI() {
        this.populateUnitGrid();
        this.createLevelSlider();
        this.populateTraitsDropdown();
        this.populateSkillTreeDropdown();
        this.populateOnFieldBuffsDropdown();
    },

    bindEvents() {
        this.elements.unitGrid.addEventListener('click', (event) => {
            const card = event.target.closest('.unit-card');
            if (card) this.selectUnit(card.dataset.unit);
        });

        this.elements.dmgRollInput.addEventListener('input', (e) => this.handleStatRollInput(e, 'dmgRoll'));
        this.elements.rngRollInput.addEventListener('input', (e) => this.handleStatRollInput(e, 'rngRoll'));
        this.elements.spaRollInput.addEventListener('input', (e) => this.handleStatRollInput(e, 'spaRoll'));

        this.elements.dmgRollInput.addEventListener('blur', (e) => this.handleStatRollBlur(e, 'dmgRoll'));
        this.elements.rngRollInput.addEventListener('blur', (e) => this.handleStatRollBlur(e, 'rngRoll'));
        this.elements.spaRollInput.addEventListener('blur', (e) => this.handleStatRollBlur(e, 'spaRoll'));
        
        if (this.elements.rollTraitBtn) {
            this.elements.rollTraitBtn.addEventListener('click', () => this.rollForTrait());
        }

        if (this.elements.resetSelectionBtn) {
            this.elements.resetSelectionBtn.addEventListener('click', () => this.resetSelection());
        }

        this.elements.unitSearchInput.addEventListener('input', () => this.filterUnits());
        
        this.elements.outputTabsContainer.addEventListener('click', (event) => {
            const tab = event.target.closest('.tab-btn');
            if (tab && !tab.classList.contains('active')) {
                this.state.activeOutputUnit = tab.dataset.unit;
                this.render();
            }
        });

        if (this.elements.visualizerFrame) {
            this.elements.visualizerFrame.addEventListener('load', () => {
                this.updateVisualizer();
            });
        }
    },

    animateValue(element, from, to, options = {}) {
        if (!element || typeof anime === 'undefined') return;

        const formatValue = (val) => {
            if (isNaN(val)) return '';
            let displayValue;
            if (options.toLocaleString) {
                displayValue = Math.round(val).toLocaleString();
            } else {
                displayValue = val.toFixed(options.toFixed || 0);
            }
            return (options.prefix || '') + displayValue + (options.suffix || '');
        };
        
        if (isNaN(to)) {
            element.textContent = to;
            return;
        }

        let startValue = from;
        if (typeof startValue !== 'number' || isNaN(startValue)) {
            const currentText = element.textContent.replace(/[^0-9.-]+/g, "");
            startValue = parseFloat(currentText);
            if (isNaN(startValue)) {
                startValue = to; 
            }
        }
        
        if (startValue === to) {
            element.textContent = formatValue(to);
            return;
        }
        
        let proxy = { value: startValue };
        anime.remove(element);
        
        anime({
            targets: proxy,
            value: to,
            duration: 500,
            easing: 'easeOutExpo',
            update: () => {
                element.textContent = formatValue(proxy.value);
            },
            'element-target': element 
        });
    },

    // --- RENDER & UPDATE ---
    render() {
        this.updateCurrentUnitDisplay();
        this.updateSpawnedState();
        this.renderOutputTabs();
        this.updateOutputDisplay();
        this.renderCombinedDpsSection();
        this.renderSpecialControls(); 
        this.updateVisualizerVisibility();
        this.updateVisualizer();
    },

    updateVisualizerVisibility() {
        const { visualizerContainer } = this.elements;
        const hasSelection = !!this.state.selectedUnit;

        if (visualizerContainer) {
            visualizerContainer.classList.toggle('hidden', !hasSelection);
        }
    },

    updateVisualizer() {
        const { activeOutputUnit, currentUpgradeIndexes, rngRoll, selectedTrait, selectedSkillTree, selectedUnit, specialAbilities } = this.state;
        const { visualizerFrame } = this.elements;
        
        if (!activeOutputUnit || !visualizerFrame || !visualizerFrame.contentWindow) return;

        const unitData = characterData[activeOutputUnit];
        if (!unitData || !unitData.upgrades) return;

        const index = currentUpgradeIndexes[activeOutputUnit] || 0;
        const upgrade = unitData.upgrades[index];
        if (!upgrade || !upgrade.AOE) return;

        const traitBonus = traitsData.find(t => t.Traits === selectedTrait);
        const skillTreeBonus = skillTreeData[selectedSkillTree];
        const baseRange = upgrade.Range;

        const totalRangeMultiplier = 1 + (rngRoll / 100) + traitBonus.Range + skillTreeBonus.Range;
        let finalRange = baseRange * totalRangeMultiplier;
        
        if (selectedUnit === 'Michishibo' && specialAbilities.michishiboLunarBlessingActive) {
            finalRange *= 1.04;
        }
        
        // --- FIX FOR EXPLOSION ARTIST ABILITY ---
        // Determine the correct AOE type based on the unit and its current special ability state
        const aoeType = (activeOutputUnit === 'Explosion Artist')
            ? specialAbilities.explosionArtistAoeMode
            : upgrade.AOE.type.toLowerCase();

        const visualizerData = {
            range: finalRange,
            aoeType: aoeType,
            params: upgrade.AOE.params || {}
        };
        
        visualizerFrame.contentWindow.postMessage(visualizerData, '*');
    },

    updateCurrentUnitDisplay() {
        const { currentUnitDisplay, resetSelectionBtn } = this.elements;
        const { selectedUnit } = this.state;
        const hasSelection = !!selectedUnit;

        if (resetSelectionBtn) {
            resetSelectionBtn.classList.toggle('visible', hasSelection);
        }
        
        currentUnitDisplay.classList.toggle('placeholder', !hasSelection);
        currentUnitDisplay.innerHTML = hasSelection
            ? `Current Unit: <span>${selectedUnit.replace(/_/g, ' ')}</span>`
            : 'Select a unit by clicking its image.';
    },
    
    getStatGrade(value, max) {
        const percentage = (value / max) * 100;
        if (percentage >= 98.9) return 'SSS';
        if (percentage >= 76.9) return 'SS';
        if (percentage >= 55) return 'S';
        if (percentage >= 30.9) return 'A';
        if (percentage >= 0.89) return 'B';
        return 'C';
    },

    formatAoeToString(aoeObject) {
        if (!aoeObject || !aoeObject.type) return 'N/A';
        const type = aoeObject.type.toLowerCase();
        const params = aoeObject.params || {};
        
        let formattedType = type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        if (formattedType === 'Circle') formattedType = 'EAOE';
        if (formattedType === 'Scouter1') formattedType = 'Scouter 1';
        if (formattedType === 'Scouter2') formattedType = 'Scouter 2';

        let paramString = '';
        if (params.lineWidth) paramString = `(${params.lineWidth})`;
        else if (params.coneAngle) paramString = `(${params.coneAngle})`;
        else if (params.circleRadius) paramString = `(${params.circleRadius})`;
        else if (params.patrolRadius) paramString = `(${params.patrolRadius})`;
        else if (params.trapCount) paramString = `(${params.trapCount})`;
        
        return `${formattedType} ${paramString}`.trim();
    },

    updateOutputDisplay() {
        const { dpsOutputSection } = this.elements;
        const { selectedUnit, activeOutputUnit, unitLevel, dmgRoll, rngRoll, spaRoll, selectedTrait, selectedSkillTree, selectedBuff } = this.state;

        const displayUnitName = activeOutputUnit || selectedUnit;
    
        if (!displayUnitName) {
            dpsOutputSection.innerHTML = `<p class="placeholder-text">Select a unit to view its stats.</p>`;
            dpsOutputSection.className = 'dps-output-section placeholder';
            this.elements.specialControls.innerHTML = '';
            if (this.state.previousCalculations[displayUnitName]) {
                delete this.state.previousCalculations[displayUnitName];
            }
            return;
        }
    
        dpsOutputSection.className = 'dps-output-section';
    
        const unitData = characterData[displayUnitName];
        if (!unitData) {
            console.error(`Data not found for unit: ${displayUnitName}`);
            dpsOutputSection.innerHTML = `<p style="color: red; text-align: center;">Error: Could not find data for ${displayUnitName}.</p>`;
            return;
        }

        const prevCalcs = this.state.previousCalculations[displayUnitName];
        const newCalcs = this.calculateFinalStats(displayUnitName);
        
        const initialDisplay = {
            finalDamage: (prevCalcs ? prevCalcs.finalDamage : newCalcs.finalDamage).toLocaleString(),
            finalRange: (prevCalcs ? prevCalcs.finalRange : newCalcs.finalRange).toFixed(1),
            finalSpa: (prevCalcs ? prevCalcs.finalSpa : newCalcs.finalSpa).toFixed(2) + 's',
            unitDps: (prevCalcs ? prevCalcs.unitDps : newCalcs.unitDps).toLocaleString(),
            dotDps: (prevCalcs ? prevCalcs.dotDps : newCalcs.dotDps).toLocaleString(),
            groupDps: (prevCalcs ? prevCalcs.groupDps : newCalcs.groupDps).toLocaleString(),
            totalCost: '$' + (prevCalcs ? prevCalcs.totalCost : newCalcs.totalCost).toLocaleString(),
        };
        
        const currentUpgradeIndex = this.state.currentUpgradeIndexes[displayUnitName] || 0;
        const currentUpgrade = unitData.upgrades[currentUpgradeIndex];
    
        const upgradeLabel = currentUpgradeIndex === 0 ? 'Placement' : `Upgrade ${currentUpgradeIndex}`;
        const placementStatus = (unitData.PlacementStatus && unitData.PlacementStatus[currentUpgradeIndex]) 
            ? unitData.PlacementStatus[currentUpgradeIndex] 
            : 'N/A';
        const placementStatusClass = placementStatus.toLowerCase().split(' ')[0];
        const rarity = unitData.Rarity || 'N/A';
        
        const element = unitData.Element || 'N/A';
        const elementClass = element.toLowerCase();
        let elementImageHTML = '';

        if (element !== 'N/A') {
            elementImageHTML = `<img src="images/elements/${elementClass}.png" alt="${element}" class="element-icon">`;
        }

        let displayDotType = currentUpgrade.DoT || 'None';
        if (selectedUnit === 'Michishibo' && (this.state.currentUpgradeIndexes[selectedUnit] || 0) >= 8 && this.state.specialAbilities.michishiboTransparentWorldActive) {
            displayDotType = 'Bleed';
        }
        
        // --- FIX FOR EXPLOSION ARTIST ABILITY ---
        let aoeObject = currentUpgrade.AOE;
        if (displayUnitName === 'Explosion Artist') {
            aoeObject = { type: this.state.specialAbilities.explosionArtistAoeMode };
        }
        const aoeString = this.formatAoeToString(aoeObject);
    
        let nextUpgradeCost;
        if (currentUpgradeIndex < unitData.MaxUpgrades) {
            let cost = unitData.upgrades[currentUpgradeIndex + 1].Cost;
            if (selectedTrait === 'All Star') {
                cost = Math.round(cost * 1.75);
            }
            nextUpgradeCost = `$${cost.toLocaleString()}`;
        } else {
            nextUpgradeCost = 'N/A';
        }
        
        const dmgGrade = this.getStatGrade(dmgRoll, 15);
        const rngGrade = this.getStatGrade(rngRoll, 12.5);
        const spaGrade = this.getStatGrade(spaRoll, 10);

        const traitName = selectedTrait;
        let traitClass = 'traitless';
        let traitImageHTML = '';

        if (traitName && traitName !== 'Traitless') {
            const tempName = traitName.replace(/\s*\(.*\)$/, '');
            const baseName = tempName.replace(/\s*\d*$/, '').replace(/\s+/g, '');
            const imageName = (baseName === 'Corrupted') ? 'Corrupt' : baseName;
            traitClass = baseName.toLowerCase();
            traitImageHTML = `<img src="images/traits/${imageName}.png" alt="${traitName}" class="trait-icon">`;
        }
    
        dpsOutputSection.innerHTML = `
            <div class="hiragana-background">
                <div class="text-container">
                    <div class="text-layer layer-1"><span>あいうえおかきくけこさしすせそ</span><span>あいうえおかきくけこさしすせそ</span></div>
                    <div class="text-layer layer-2"><span>タチツテトナニヌネノハヒフヘホ</span><span>タチツテトナニヌネノハヒフヘホ</span></div>
                    <div class="text-layer layer-3"><span>マミムメモヤユヨラリルレロ</span><span>マミムメモヤユヨラリルレロ</span></div>
                    <div class="text-layer layer-4"><span>ワヲンアイウエオカキクケコサ</span><span>ワヲンアイウエオカキクケコサ</span></div>
                </div>
            </div>
            <div class="output-content-wrapper">
                <div class="unit-card-header">
                    <h2 class="unit-title">${displayUnitName.replace(/_/g, ' ')}</h2>
                    <div class="unit-sub-info"><span>${rarity}</span> • <span class="type-${placementStatusClass}">${placementStatus}</span></div>
                </div>
                <div class="unit-details-row">
                    <div class="level-display">Lv. ${unitLevel}</div>
                    <div class="element-display element-${elementClass}">${elementImageHTML}<span>${element}</span></div>
                    <div class="trait-display trait-display--${traitClass}">${traitImageHTML}<span>${traitName}</span></div>
                    ${(selectedUnit === 'BOX' && (this.state.currentUpgradeIndexes[selectedUnit] || 0) >= 2 && this.state.specialAbilities.boxDeterminationActive) ? `<div class="ability-display">Determination</div>` : ''}
                    ${(selectedUnit === 'Michishibo' && (this.state.currentUpgradeIndexes[selectedUnit] || 0) >= 8 && this.state.specialAbilities.michishiboTransparentWorldActive) ? `<div class="ability-display">Transparent World</div>` : ''}
                    ${(selectedUnit === 'Michishibo' && this.state.specialAbilities.michishiboLunarBlessingActive) ? `<div class="ability-display">Lunar Blessing</div>` : ''}
                    ${selectedSkillTree !== 'None' ? `<div class="skill-tree-display">${selectedSkillTree}</div>` : ''}
                    ${selectedBuff !== 'None' ? `<div class="buff-display">${selectedBuff}</div>` : ''}
                </div>
                <div class="stats-display">
                    <div class="stat-bar-row dmg-bar">
                        <span class="stat-grade grade-${dmgGrade}">${dmgGrade}</span><span class="stat-roll-value">(${dmgRoll.toFixed(2)}%)</span>
                        <span class="stat-label">DMG:</span><span class="stat-value" id="output-dmg">${initialDisplay.finalDamage}</span>
                    </div>
                    <div class="stat-bar-row rng-bar">
                        <span class="stat-grade grade-${rngGrade}">${rngGrade}</span><span class="stat-roll-value">(${rngRoll.toFixed(2)}%)</span>
                        <span class="stat-label">RNG:</span><span class="stat-value" id="output-rng">${initialDisplay.finalRange}</span>
                    </div>
                    <div class="stat-bar-row spa-bar">
                        <span class="stat-grade grade-${spaGrade}">${spaGrade}</span><span class="stat-roll-value">(${spaRoll.toFixed(2)}%)</span>
                        <span class="stat-label">SPD:</span><span class="stat-value" id="output-spa">${initialDisplay.finalSpa}</span>
                    </div>
                </div>
                <div class="dps-summary ${newCalcs.dotDps > 0 ? 'has-dot' : ''}">
                    <div class="dps-item"><h3>Unit DPS</h3><p id="output-unit-dps">${initialDisplay.unitDps}</p></div>
                    ${newCalcs.dotDps > 0 ? `<div class="dps-item"><h3>DoT DPS</h3><p id="output-dot-dps">${initialDisplay.dotDps}</p></div>` : ''}
                    <div class="dps-item"><h3>Group DPS</h3><p id="output-group-dps">${initialDisplay.groupDps}</p></div>
                </div>
                <div class="additional-stats">
                    <h4>Stats for ${upgradeLabel}</h4>
                    <div class="additional-stats-grid">
                        <div class="stat-block"><span class="stat-block-label">AOE</span><span class="stat-block-value">${aoeString}</span></div>
                        <div class="stat-block"><span class="stat-block-label">DoT Type</span><span class="stat-block-value">${displayDotType}</span></div>
                        <div class="stat-block"><span class="stat-block-label">Placement</span><span class="stat-block-value">${newCalcs.totalPlacementCount}</span></div>
                        <div class="stat-block"><span class="stat-block-label">Total Cost</span><span class="stat-block-value" id="output-total-cost">${initialDisplay.totalCost}</span></div>
                        <div class="stat-block"><span class="stat-block-label">Next Cost</span><span class="stat-block-value">${nextUpgradeCost}</span></div>
                    </div>
                </div>
                <div class="upgrade-nav bottom-nav">
                    <button id="prevUpgradeBtn" class="nav-btn" ${currentUpgradeIndex === 0 ? 'disabled' : ''}>◄ Prev</button>
                    <button id="nextUpgradeBtn" class="nav-btn" ${currentUpgradeIndex >= unitData.MaxUpgrades ? 'disabled' : ''}>Next ►</button>
                    <button id="maxUpgradeBtn" class="nav-btn max-btn" ${currentUpgradeIndex >= unitData.MaxUpgrades ? 'disabled' : ''}>Max Upgrade</button>
                </div>
            </div>
        `;
        
        this.animateValue(dpsOutputSection.querySelector('#output-dmg'), prevCalcs?.finalDamage, newCalcs.finalDamage, { toLocaleString: true });
        this.animateValue(dpsOutputSection.querySelector('#output-rng'), prevCalcs?.finalRange, newCalcs.finalRange, { toFixed: 1 });
        this.animateValue(dpsOutputSection.querySelector('#output-spa'), prevCalcs?.finalSpa, newCalcs.finalSpa, { toFixed: 2, suffix: 's' });
        
        this.animateValue(dpsOutputSection.querySelector('#output-unit-dps'), prevCalcs?.unitDps, newCalcs.unitDps, { toLocaleString: true });
        if (newCalcs.dotDps > 0) {
            this.animateValue(dpsOutputSection.querySelector('#output-dot-dps'), prevCalcs?.dotDps, newCalcs.dotDps, { toLocaleString: true });
        }
        this.animateValue(dpsOutputSection.querySelector('#output-group-dps'), prevCalcs?.groupDps, newCalcs.groupDps, { toLocaleString: true });
        
        const totalCostElement = dpsOutputSection.querySelector('#output-total-cost');
        if (totalCostElement) {
            this.animateValue(totalCostElement, prevCalcs?.totalCost, newCalcs.totalCost, { toLocaleString: true, prefix: '$' });
        }
        
        this.state.previousCalculations[displayUnitName] = newCalcs;
        
        dpsOutputSection.querySelector('#prevUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(-1));
        dpsOutputSection.querySelector('#maxUpgradeBtn').addEventListener('click', () => this.goToMaxUpgrade());
        dpsOutputSection.querySelector('#nextUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(1));
    },

    updateSpawnedState() {
        const { selectedUnit } = this.state;
        const mainUnitUpgradeIndex = this.state.currentUpgradeIndexes[selectedUnit] || 0;
        const unitData = selectedUnit ? characterData[selectedUnit] : null;

        if (!unitData || !unitData.Spawns) {
            this.state.spawnedUnits = [];
            if (this.state.activeOutputUnit !== this.state.selectedUnit) {
                this.state.activeOutputUnit = this.state.selectedUnit;
            }
            return;
        }

        const currentlySpawned = unitData.Spawns
            .filter(spawn => mainUnitUpgradeIndex >= spawn.spawnAtUpgrade)
            .map(spawn => spawn.unitName);
        
        currentlySpawned.forEach(spawnName => {
            if (!this.state.currentUpgradeIndexes.hasOwnProperty(spawnName)) {
                this.state.currentUpgradeIndexes[spawnName] = 0;
            }
        });

        this.state.spawnedUnits = currentlySpawned;
        
        if (this.state.activeOutputUnit !== selectedUnit && !currentlySpawned.includes(this.state.activeOutputUnit)) {
            this.state.activeOutputUnit = selectedUnit;
        }
    },
    
    renderOutputTabs() {
        const { outputTabsContainer } = this.elements;
        const { selectedUnit, spawnedUnits, activeOutputUnit } = this.state;

        if (!selectedUnit || spawnedUnits.length === 0) {
            outputTabsContainer.innerHTML = '';
            outputTabsContainer.style.display = 'none';
            return;
        }

        outputTabsContainer.style.display = 'flex';
        
        let tabsHTML = `<button class="tab-btn ${activeOutputUnit === selectedUnit ? 'active' : ''}" data-unit="${selectedUnit}">${selectedUnit.replace(/_/g, ' ')}</button>`;
        
        spawnedUnits.forEach(spawnedName => {
            tabsHTML += `<button class="tab-btn ${activeOutputUnit === spawnedName ? 'active' : ''}" data-unit="${spawnedName}">${spawnedName.replace(/_/g, ' ')}</button>`;
        });

        outputTabsContainer.innerHTML = tabsHTML;
    },

    renderCombinedDpsSection() {
        const { combinedDpsSection } = this.elements;
        const { selectedUnit, spawnedUnits } = this.state;

        if (!selectedUnit) {
            combinedDpsSection.style.display = 'none';
            return;
        }

        const mainUnitData = characterData[selectedUnit];
        const activeSeparateSpawns = spawnedUnits.filter(spawnName => {
            const spawnInfo = mainUnitData.Spawns?.find(s => s.unitName === spawnName);
            return spawnInfo?.SeperateUnit;
        });

        if (activeSeparateSpawns.length === 0) {
            combinedDpsSection.style.display = 'none';
            return;
        }

        combinedDpsSection.style.display = 'block';

        let combinedTotalDps = 0;
        let combinedGroupDps = 0;

        const mainUnitCalcs = this.calculateFinalStats(selectedUnit);
        combinedTotalDps += mainUnitCalcs.totalIndividualDps * mainUnitCalcs.totalPlacementCount;
        combinedGroupDps += mainUnitCalcs.groupDps;

        activeSeparateSpawns.forEach(spawnName => {
            const spawnCalcs = this.calculateFinalStats(spawnName);
            combinedTotalDps += spawnCalcs.totalIndividualDps * spawnCalcs.totalPlacementCount;
            combinedGroupDps += spawnCalcs.groupDps;
        });

        combinedDpsSection.innerHTML = `
            <div class="dps-summary">
                <div class="dps-item">
                    <h3>Total Individual DPS</h3>
                    <p>${combinedTotalDps.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                </div>
                <div class="dps-item">
                    <h3>Total Group DPS</h3>
                    <p>${combinedGroupDps.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                </div>
            </div>
        `;
    },

    renderSpecialControls() {
        const { specialControls } = this.elements;
        const { activeOutputUnit, selectedUnit, specialAbilities } = this.state;
        
        const mainUnitUpgradeIndex = this.state.currentUpgradeIndexes[selectedUnit] || 0;
        const unitForControls = activeOutputUnit === selectedUnit ? selectedUnit : null;
        
        specialControls.innerHTML = ''; 

        if (unitForControls === 'BOX' && mainUnitUpgradeIndex >= 2) {
            const isActive = specialAbilities.boxDeterminationActive;
            specialControls.innerHTML = `
                <div class="special-ability-control">
                    <h4>Special Ability</h4>
                    <p class="ability-desc"><strong>Determination:</strong> Reduces BOX's SPA by 25% for 25 Seconds. (50s CD)</p>
                    <button id="boxDeterminationBtn" class="ability-btn ${isActive ? 'active' : ''}">${isActive ? 'Determination Active' : 'Activate Determination'}</button>
                </div>
            `;
            document.getElementById('boxDeterminationBtn').addEventListener('click', () => {
                this.state.specialAbilities.boxDeterminationActive = !isActive;
                this.render();
            });
        }
        else if (unitForControls === 'Michishibo') {
            let htmlContent = '';
            const lbIsActive = specialAbilities.michishiboLunarBlessingActive;
            htmlContent += `
                <div class="special-ability-control">
                    <h4>Passive Ability</h4>
                    <p class="ability-desc"><strong>Lunar Blessing:</strong> Gains -4% SPA and +4% Range on Night maps.</p>
                    <button id="michishiboLbBtn" class="ability-btn ${lbIsActive ? 'active' : ''}">${lbIsActive ? 'Lunar Blessing Active' : 'Activate Lunar Blessing'}</button>
                </div>
            `;

            if (mainUnitUpgradeIndex >= 8) {
                const twIsActive = specialAbilities.michishiboTransparentWorldActive;
                htmlContent += `
                    <div class="special-ability-control" style="margin-top: 1rem;">
                        <h4>Special Ability</h4>
                        <p class="ability-desc"><strong>Transparent World:</strong> Gains the Bleed DOT Effect along with a 20% SPA reduction for 60 seconds. (120s CD)</p>
                        <button id="michishiboTwBtn" class="ability-btn ${twIsActive ? 'active' : ''}">${twIsActive ? 'Transparent World Active' : 'Activate Transparent World'}</button>
                    </div>
                `;
            }

            specialControls.innerHTML = htmlContent;

            const lbBtn = document.getElementById('michishiboLbBtn');
            if(lbBtn) {
                lbBtn.addEventListener('click', () => {
                    this.state.specialAbilities.michishiboLunarBlessingActive = !lbIsActive;
                    this.render();
                });
            }

            const twBtn = document.getElementById('michishiboTwBtn');
            if (twBtn) {
                twBtn.addEventListener('click', () => {
                    this.state.specialAbilities.michishiboTransparentWorldActive = !this.state.specialAbilities.michishiboTransparentWorldActive;
                    this.render();
                });
            }
        }
        else if (unitForControls === 'Sorcerer Killer' && mainUnitUpgradeIndex >= 7) {
            const stacks = specialAbilities.tojiHeavenlyRestrictionStacks || 0;
            const currentBonus = (stacks * 6.66).toFixed(2);
            specialControls.innerHTML = `
                <div class="special-ability-control">
                    <h4>Passive Ability</h4>
                    <p class="ability-desc"><strong>Heavenly Restriction:</strong> Sacrifices up to 10 5-Star units (Upg. 3+) in range to gain a 6.66% stat boost per unit, capping at 66.6%.</p>
                    <div class="slider-control-group">
                        <label for="tojiStacksSlider" id="tojiStacksLabel">Sacrificed Units: <span>${stacks}</span> (${currentBonus}% Dmg)</label>
                        <input type="range" id="tojiStacksSlider" min="0" max="10" value="${stacks}" step="1">
                    </div>
                </div>
            `;
            document.getElementById('tojiStacksSlider').addEventListener('input', (e) => {
                this.state.specialAbilities.tojiHeavenlyRestrictionStacks = parseInt(e.target.value, 10);
                this.updateDynamicStats(); 
            });
        }
        else if (unitForControls === 'Explosion Artist') {
            const currentAoeMode = specialAbilities.explosionArtistAoeMode;
            const nextAoeModeLabel = currentAoeMode === 'scouter1' ? 'Figure-Eight' : 'Circular';
            const currentAoeModeLabel = currentAoeMode === 'scouter1' ? 'Circular (Scouter 1)' : 'Figure-Eight (Scouter 2)';

            specialControls.innerHTML = `
                <div class="special-ability-control">
                    <h4>Special Ability</h4>
                    <p class="ability-desc">
                        <strong>Route Change:</strong> Switches the unit's flight and attack path.
                        <br>
                        Current Mode: <strong>${currentAoeModeLabel}</strong>
                    </p>
                    <button id="explosionArtistAoeBtn" class="ability-btn">Switch to ${nextAoeModeLabel}</button>
                </div>
            `;

            document.getElementById('explosionArtistAoeBtn').addEventListener('click', () => {
                this.state.specialAbilities.explosionArtistAoeMode = currentAoeMode === 'scouter1' ? 'scouter2' : 'scouter1';
                this.render(); // Re-render to update the button text and visualizer
            });
        }
    },

    updateDynamicStats() {
        const { activeOutputUnit, selectedUnit } = this.state;
        const displayUnitName = activeOutputUnit || selectedUnit;
        if (!displayUnitName) return;

        const tojiLabel = document.getElementById('tojiStacksLabel');
        if (tojiLabel) {
            const stacks = this.state.specialAbilities.tojiHeavenlyRestrictionStacks;
            const currentBonus = (stacks * 6.66).toFixed(2);
            tojiLabel.innerHTML = `Sacrificed Units: <span>${stacks}</span> (${currentBonus}% Dmg)`;
        }

        const prevCalcs = this.state.previousCalculations[displayUnitName];
        const newCalcs = this.calculateFinalStats(displayUnitName);
        
        const dpsOutputSection = this.elements.dpsOutputSection;

        this.animateValue(dpsOutputSection.querySelector('.dmg-bar .stat-value'), prevCalcs?.finalDamage, newCalcs.finalDamage, { toLocaleString: true });
        this.animateValue(dpsOutputSection.querySelector('.rng-bar .stat-value'), prevCalcs?.finalRange, newCalcs.finalRange, { toFixed: 1 });
        this.animateValue(dpsOutputSection.querySelector('.spa-bar .stat-value'), prevCalcs?.finalSpa, newCalcs.finalSpa, { toFixed: 2, suffix: 's' });

        this.animateValue(dpsOutputSection.querySelector('.dps-summary .dps-item:nth-child(1) p'), prevCalcs?.unitDps, newCalcs.unitDps, { toLocaleString: true });
        this.animateValue(dpsOutputSection.querySelector('.dps-summary .dps-item:last-child p'), prevCalcs?.groupDps, newCalcs.groupDps, { toLocaleString: true });
        
        this.state.previousCalculations[displayUnitName] = newCalcs;
        this.renderCombinedDpsSection();
    },

    handleStatRollInput(e, statKey) {
        const value = parseFloat(e.target.value);
        this.state[statKey] = isNaN(value) ? 0 : value;
        this.render();
    },

    handleStatRollBlur(e, statKey) {
        const input = e.target;
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        let value = parseFloat(input.value);

        if (isNaN(value)) value = 0;
        value = Math.max(min, Math.min(value, max));
        const roundedValue = Math.round(value * 100) / 100;
        input.value = roundedValue === 0 ? '' : roundedValue.toFixed(2);
        this.state[statKey] = roundedValue;
        this.render();
    },

    calculateFinalStats(unitNameToCalc) {
        const { unitLevel, dmgRoll, rngRoll, spaRoll, selectedTrait, selectedSkillTree, selectedBuff, selectedUnit } = this.state;
        
        const unitData = characterData[unitNameToCalc];
        const currentUpgradeIndex = this.state.currentUpgradeIndexes[unitNameToCalc] || 0;
        const currentUpgrade = unitData.upgrades[currentUpgradeIndex];
        const { Element: unitElement } = unitData;

        const baseDamage = currentUpgrade.Damage;
        const baseSpa = currentUpgrade.SPA;
        const baseRange = currentUpgrade.Range;

        const traitBonus = traitsData.find(t => t.Traits === selectedTrait);
        const skillTreeBonus = skillTreeData[selectedSkillTree];
        const levelAdjustedDamage = unitLevel > 1 ? Math.round(baseDamage + (unitLevel * (baseDamage / 70))) : baseDamage;

        let totalDamageMultiplier = 1 + (dmgRoll / 100) + traitBonus.Damage + skillTreeBonus.Damage;

        const mainUnitUpgradeIndexForCalc = this.state.currentUpgradeIndexes[selectedUnit] || 0;
        
        let finalDamage = Math.round(levelAdjustedDamage * totalDamageMultiplier);

        let passiveMultiplier = 0;
        const mainUnitUpgradeIndex = this.state.currentUpgradeIndexes[selectedUnit] || 0;
        let finalSpa = baseSpa;
        let finalRange = baseRange;

        if (this.state.selectedUnit === 'BOX' && this.state.specialAbilities.boxDeterminationActive && mainUnitUpgradeIndex >= 2) {
            finalSpa *= 0.75;
        }
        
        if (this.state.selectedUnit === 'Michishibo') {
            if (this.state.specialAbilities.michishiboLunarBlessingActive) {
                finalSpa *= 0.96;
                finalRange *= 1.04;
            }
            if (this.state.specialAbilities.michishiboTransparentWorldActive && mainUnitUpgradeIndex >= 8) {
                finalSpa *= 0.80;
            }
        }
        
        if (unitNameToCalc === 'Sorcerer Killer' && mainUnitUpgradeIndexForCalc >= 7) {
            const stacks = this.state.specialAbilities.tojiHeavenlyRestrictionStacks || 0;
            const tojiBonus = stacks * 0.0666;
            passiveMultiplier += tojiBonus;
        }
        finalDamage *= (1 + passiveMultiplier);

        let buffMultiplier = 1.0;
        switch (selectedBuff) {
            case 'Shinzou Wo Sasageyo': buffMultiplier = (unitElement === 'Green') ? 1.50 : 1.40; break;
            case 'Xero Requiem': buffMultiplier = (unitElement === 'Purple') ? 1.50 : 1.40; break;
            case 'Red Spirit': buffMultiplier = (unitElement === 'Red') ? 1.50 : 1.40; break;
            case 'Red Spirit x4': buffMultiplier = 1.75; break;
        }
        finalDamage = Math.round(finalDamage * buffMultiplier);

        const totalSpaMultiplier = 1 - ((spaRoll / 100) + traitBonus.Spa + skillTreeBonus.SPA);
        finalSpa = Math.max(0, finalSpa * totalSpaMultiplier);
        
        const totalRangeMultiplier = 1 + (rngRoll / 100) + traitBonus.Range + skillTreeBonus.Range;
        finalRange = finalRange * totalRangeMultiplier;
        
        let dotMultiplier = 0;
        const effect = (currentUpgrade.DoT || '').toLowerCase();
        
        // --- START: FIX FOR TEMPEST DOT BUG ---
        // First, check if the unit has a base DoT effect.
        if (effect && effect !== 'none') {
            if (effect.includes("burn")) dotMultiplier = 0.1;
            else if (effect.includes("bleed")) dotMultiplier = 0.0833;
            else if (effect.includes("poison")) dotMultiplier = 0.05;
            else if (effect.includes("shock")) dotMultiplier = 0.025;
            else if (effect.includes("blackflames")) dotMultiplier = 0.125;

            // CRITICAL: Only check for Tempest *after* a base DoT has been confirmed and applied.
            if (dotMultiplier > 0 && traitBonus.Traits === "Tempest") {
                dotMultiplier += 0.3;
            }
        }
        // --- END: FIX FOR TEMPEST DOT BUG ---
        
        // This handles cases where an ability GRANTS a DoT.
        if (this.state.selectedUnit === 'Michishibo' && this.state.specialAbilities.michishiboTransparentWorldActive && mainUnitUpgradeIndex >= 8) {
            dotMultiplier = 0.0833; 
            // Optional: If Tempest should also buff this ability-granted DoT, you would add the check here as well.
            // if (traitBonus.Traits === "Tempest") dotMultiplier += 0.3;
        }
        
        const dotDps = (finalDamage * dotMultiplier) / 2;
        const unitDps = finalSpa > 0 ? (finalDamage / finalSpa) : 0;
        const totalIndividualDps = unitDps + dotDps;

        let newPlacementCount = unitData.PlacementCount;
        if (traitBonus.Traits === "All Star") newPlacementCount = 1;
        else if (traitBonus.Traits === "Companion") newPlacementCount += 1;

        let groupDps = totalIndividualDps * newPlacementCount;

        let isSeparateUnit = false;
        if (unitNameToCalc !== selectedUnit) {
            const mainUnitData = characterData[selectedUnit];
            const spawnInfo = mainUnitData.Spawns?.find(s => s.unitName === unitNameToCalc);
            if (spawnInfo?.SeperateUnit) {
                isSeparateUnit = true;
            }
        }

        let totalCost = 0;
        for (let i = 0; i <= currentUpgradeIndex; i++) {
            let costOfUpgrade = unitData.upgrades[i].Cost || 0;
            if (i === 0 && isSeparateUnit) {
                costOfUpgrade = 0;
            }
            totalCost += costOfUpgrade;
        }
        
        if (traitBonus.Traits === "All Star") {
            totalCost = Math.round(totalCost * 1.75);
        }

        return {
            finalDamage: Math.round(finalDamage),
            finalSpa: Math.round(finalSpa * 100) / 100,
            finalRange: Math.round(finalRange * 10) / 10,
            unitDps: Math.round(unitDps * 100) / 100,
            dotDps: Math.round(dotDps * 100) / 100,
            totalIndividualDps: Math.round(totalIndividualDps * 100) / 100,
            groupDps: Math.round(groupDps * 100) / 100,
            totalCost: totalCost,
            totalPlacementCount: newPlacementCount,
        };
    },

    // --- ACTIONS ---
    selectUnit(unitName) {
        this.state.selectedUnit = unitName;
        this.state.activeOutputUnit = unitName;
        this.state.spawnedUnits = [];
        this.state.currentUpgradeIndexes = { [unitName]: 0 };
        
        document.querySelectorAll('.unit-card.selected').forEach(card => card.classList.remove('selected'));
        const selectedCard = this.elements.unitGrid.querySelector(`[data-unit="${unitName}"]`);
        if (selectedCard) selectedCard.classList.add('selected');

        this.state.specialAbilities = {
            boxDeterminationActive: false,
            michishiboTransparentWorldActive: false,
            michishiboLunarBlessingActive: false,
            tojiHeavenlyRestrictionStacks: 0,
            explosionArtistAoeMode: 'scouter1',
        };

        this.state.rollCount = 0;
        if (this.elements.rollCounter) {
            this.elements.rollCounter.textContent = '0';
        }
        
        this.state.previousCalculations = {};

        this.render();
    },

    resetSelection() {
        this.state.activeOutputUnit = null;
        this.state.spawnedUnits = [];
        this.state.unitLevel = 1;
        this.state.selectedTrait = 'Traitless';
        this.state.dmgRoll = 0;
        this.state.rngRoll = 0;
        this.state.spaRoll = 0;
        this.state.selectedSkillTree = 'None';
        this.state.selectedBuff = 'None';
        this.state.currentUpgradeIndexes = {};
        this.state.rollCount = 0;
        this.state.specialAbilities = {
            boxDeterminationActive: false,
            michishiboTransparentWorldActive: false,
            michishiboLunarBlessingActive: false,
            tojiHeavenlyRestrictionStacks: 0,
            explosionArtistAoeMode: 'scouter1',
        };
        
        const levelSlider = this.elements.unitLevelControl.querySelector('#unitLevelSlider');
        if (levelSlider) levelSlider.value = 1;
        
        const levelValue = this.elements.unitLevelControl.querySelector('#unitLevelValue');
        if (levelValue) levelValue.textContent = '1';
  
        const traitDropdown = this.elements.traitSelectionControl.querySelector('#traitSelection');
        if (traitDropdown) traitDropdown.value = 'Traitless';
  
        this.elements.dmgRollInput.value = '';
        this.elements.rngRollInput.value = '';
        this.elements.spaRollInput.value = '';
  
        if (this.elements.rollCounter) this.elements.rollCounter.textContent = '0';
  
        const skillTreeDropdown = this.elements.skillTreeControl.querySelector('#skillTreeSelection');
        if(skillTreeDropdown) skillTreeDropdown.value = 'None';
  
        const buffDropdown = this.elements.onFieldBuffsControl.querySelector('#onFieldBuffsSelection');
        if (buffDropdown) buffDropdown.value = 'None';

        if (this.state.selectedUnit) {
            delete this.state.previousCalculations[this.state.selectedUnit];
        }
        
        this.render();
    },

    navigateUpgrade(direction) {
        const activeUnitName = this.state.activeOutputUnit;
        if (!activeUnitName) return;
        
        const unitData = characterData[activeUnitName];
        let newIndex = (this.state.currentUpgradeIndexes[activeUnitName] || 0) + direction;
        newIndex = Math.max(0, Math.min(newIndex, unitData.MaxUpgrades));
        
        this.state.currentUpgradeIndexes[activeUnitName] = newIndex;
        this.render();
    },

    goToMaxUpgrade() {
        const activeUnitName = this.state.activeOutputUnit;
        if (!activeUnitName) return;

        const unitData = characterData[activeUnitName];
        this.state.currentUpgradeIndexes[activeUnitName] = unitData.MaxUpgrades;
        this.render();
    },

    filterUnits() {
        const searchTerm = this.elements.unitSearchInput.value.toLowerCase().trim();
        const unitCards = this.elements.unitGrid.querySelectorAll('.unit-card');
        const rarityHeaders = this.elements.unitGrid.querySelectorAll('.rarity-header');

        unitCards.forEach(card => {
            const unitName = card.dataset.unit.replace(/_/g, ' ').toLowerCase();
            const isVisible = unitName.includes(searchTerm);
            card.style.display = isVisible ? 'flex' : 'none';
        });

        rarityHeaders.forEach(header => {
            let nextElement = header.nextElementSibling;
            let sectionHasVisibleUnits = false;

            while (nextElement && !nextElement.classList.contains('rarity-header')) {
                if (nextElement.classList.contains('unit-card') && nextElement.style.display !== 'none') {
                    sectionHasVisibleUnits = true;
                    break;
                }
                nextElement = nextElement.nextElementSibling;
            }

            header.style.display = sectionHasVisibleUnits ? 'block' : 'none';
        });
    },
    
    rollForTrait() {
    // Disable the button immediately to prevent spamming
    this.elements.rollTraitBtn.disabled = true;

    const traitOdds = [
        { name: 'Tank', odds: 12 }, { name: 'Perception 1', odds: 11.5 },
        { name: 'Perception 2', odds: 9 }, { name: 'Perception 3', odds: 7 },
        { name: 'Dexterity 1', odds: 10 }, { name: 'Dexterity 2', odds: 7.5 },
        { name: 'Dexterity 3', odds: 6 }, { name: 'Prodigy', odds: 10 },
        { name: 'Zenkai 1', odds: 5 }, { name: 'Zenkai 2', odds: 7 },
        { name: 'Zenkai 3', odds: 10 }, { name: 'Midas', odds: 5 },
        { name: 'Sharpshooter', odds: 4 }, { name: 'Tempest', odds: 3 },
        { name: 'Companion', odds: 2 }, { name: 'Bloodlust', odds: 0.8 },
        { name: 'Corrupted', odds: 0.8 }, { name: 'Genesis', odds: 0.7 },
        { name: 'All Star', odds: 0.2 },
    ];

    const totalOdds = traitOdds.reduce((sum, trait) => sum + trait.odds, 0);
    let random = Math.random() * totalOdds;

    let selected;
    for (const trait of traitOdds) {
        if (random < trait.odds) { selected = trait.name; break; }
        random -= trait.odds;
    }
    
    this.state.rollCount++;
    this.elements.rollCounter.textContent = this.state.rollCount;
    this.state.selectedTrait = selected;
    this.elements.traitSelectionControl.querySelector('#traitSelection').value = selected;

    let animationColor = null;
    let animationDuration = 1200;

    switch (selected) {
        case 'Corrupted':
            animationColor = 'rgba(200, 99, 249, 0.7)'; // Purple
            break;
        case 'Bloodlust':
            animationColor = 'rgba(255, 77, 77, 0.7)'; // Red
            break;
        case 'Genesis':
            animationColor = 'rgba(0, 255, 163, 0.7)'; // Green
            break;
        case 'All Star':
            animationColor = 'rainbow';
            animationDuration = 2000;
            break;
    }

    if (animationColor) {
        // Trigger the animation, and re-enable the button on completion
        this.triggerGlowAnimation(animationColor, animationDuration, () => {
            this.elements.rollTraitBtn.disabled = false;
        });
    } else {
        // If no special trait, re-enable the button after a short delay
        setTimeout(() => {
            this.elements.rollTraitBtn.disabled = false;
        }, 200);
    }
    
    this.render();
},

triggerGlowAnimation(color, duration, onComplete) {
    const container = this.elements.traitRollContainer;

    // Stop any previous animations on this element
    anime.remove(container);

    if (color === 'rainbow') {
        // --- START: FINAL RAINBOW ANIMATION WITH FADE-IN/OUT ---

        // We create a proxy object to animate multiple properties independently
        const glowProxy = {
            blur: 0,
            spread: 0,
            color: '#ff2400'
        };

        // This timeline will manage both the glow size and color change
        const timeline = anime.timeline({
            duration: duration,
            easing: 'easeOutExpo',
            update: () => {
                // On each frame, build the boxShadow style from the proxy's current values
                container.style.boxShadow = `0 0 ${glowProxy.blur}px ${glowProxy.spread}px ${glowProxy.color}`;
            },
            complete: onComplete // Re-enable the button when the entire timeline finishes
        });

        // Animation 1: The Glow Size (Flash in, hold, fade out)
        timeline.add({
            targets: glowProxy,
            blur: [0, 25, 25, 0],   // Start at 0, flash to 25, hold at 25, fade to 0
            spread: [0, 8, 8, 0],     // Same for spread
            easing: 'easeInOutSine',
            duration: duration,
        }, 0); // Start at time 0 of the timeline

        // Animation 2: The Color Cycle
        timeline.add({
            targets: glowProxy,
            color: ['#ff2400', '#e8b71d', '#1de840', '#1ddde8', '#dd00f3', '#ff2400'],
            easing: 'linear',
            duration: duration,
        }, 0); // Start at time 0 of the timeline

        // --- END: FINAL RAINBOW ANIMATION WITH FADE-IN/OUT ---

    } else {
        // --- Single Color Pulse (this was already working well) ---
        const transparentColor = color.replace(/[^,]+(?=\))/, '0');

        anime({
            targets: container,
            boxShadow: [
                { value: `0 0 0px 0px ${transparentColor}`, duration: 0 },
                { value: `0 0 25px 8px ${color}`, duration: 150, easing: 'easeOutQuad' },
                { value: `0 0 25px 8px ${color}`, duration: duration - 650 },
                { value: `0 0 0px 0px ${transparentColor}`, duration: 500, easing: 'easeInQuad' }
            ],
            complete: onComplete
        });
    }
},

    populateUnitGrid() {
        let finalHTML = '';
        const remainingUnits = { ...characterData };

        if (newlyAddedUnits && newlyAddedUnits.length > 0) {
            finalHTML += `<h3 class="rarity-header rarity-header--newly-added">New Units!</h3>`;
            const newUnitCardsHTML = newlyAddedUnits
                .filter(unitName => characterData[unitName] && !banlist.includes(unitName))
                .sort((a, b) => a.localeCompare(b))
                .map(unitName => {
                    const unitData = characterData[unitName];
                    const fallbackImg = `https://via.placeholder.com/90x90/666/fff?text=${encodeURIComponent(unitName.substring(0, 3).toUpperCase())}`;
                    delete remainingUnits[unitName];
                    return `<div class="unit-card" data-unit="${unitName}"><img src="${unitData.Image}" alt="${unitName.replace(/_/g, ' ')}" onerror="this.onerror=null;this.src='${fallbackImg}';"><p>${unitName.replace(/_/g, ' ')}</p></div>`;
                }).join('');
            finalHTML += newUnitCardsHTML;
        }

        const groupedUnits = {};
        for (const unitName in remainingUnits) {
            if (banlist.includes(unitName)) continue;
            const unit = remainingUnits[unitName];
            if (unit.IsSpawnedOnly) continue;
            const rarity = unit.Rarity || 'Uncategorized';
            if (!groupedUnits[rarity]) { groupedUnits[rarity] = []; }
            groupedUnits[rarity].push(unitName);
        }

        for (const rarity in groupedUnits) {
            groupedUnits[rarity].sort((a, b) => a.localeCompare(b));
        }

        const rarityOrder = ['Unbound', '5 Star'];
        Object.keys(groupedUnits).forEach(rarity => {
            if (!rarityOrder.includes(rarity)) { rarityOrder.push(rarity); }
        });

        rarityOrder.forEach(rarity => {
            if (groupedUnits[rarity]) {
                const rarityClass = `rarity-header--${rarity.toLowerCase().replace(/\s+/g, '-')}`;
                finalHTML += `<h3 class="rarity-header ${rarityClass}">${rarity}s</h3>`;
                const unitCardsHTML = groupedUnits[rarity].map(unitName => {
                    const unitData = characterData[unitName];
                    const fallbackImg = `https://via.placeholder.com/90x90/666/fff?text=${encodeURIComponent(unitName.substring(0, 3).toUpperCase())}`;
                    return `<div class="unit-card" data-unit="${unitName}"><img src="${unitData.Image}" alt="${unitName.replace(/_/g, ' ')}" onerror="this.onerror=null;this.src='${fallbackImg}';"><p>${unitName.replace(/_/g, ' ')}</p></div>`;
                }).join('');
                finalHTML += unitCardsHTML;
            }
        });

        this.elements.unitGrid.innerHTML = finalHTML;
    },

    createLevelSlider() {
        this.elements.unitLevelControl.innerHTML = `
            <div class="level-info">
                <label for="unitLevelSlider">Unit Level:</label>
                <span id="unitLevelValue">${this.state.unitLevel}</span>
            </div>
            <input type="range" id="unitLevelSlider" min="1" max="80" value="${this.state.unitLevel}">
        `;
        const slider = this.elements.unitLevelControl.querySelector('#unitLevelSlider');
        const valueDisplay = this.elements.unitLevelControl.querySelector('#unitLevelValue');
        slider.addEventListener('input', () => {
            this.state.unitLevel = parseInt(slider.value, 10);
            valueDisplay.textContent = this.state.unitLevel;
            this.render();
        });
    },

    populateTraitsDropdown() {
        const optionsHTML = traitsData.map(trait => `<option value="${trait.Traits}">${trait.Traits}</option>`).join('');
        // --- MODIFIED: Added id="traitRollContainer" to the div ---
        this.elements.traitSelectionControl.innerHTML = `
            <label for="traitSelection">Select a Trait:</label>
            <div id="traitRollContainer" class="trait-roll-container">
                <div class="select-wrapper"><select id="traitSelection">${optionsHTML}</select></div>
                <button id="rollTraitBtn" class="roll-btn">Roll</button>
                <div class="roll-counter-wrapper">Rolls: <span id="rollCounter">${this.state.rollCount}</span></div>
            </div>`;
        
        this.elements.rollTraitBtn = document.getElementById('rollTraitBtn');
        this.elements.rollCounter = document.getElementById('rollCounter');

        // This needs to be re-cached here because we just created it.
        this.elements.traitRollContainer = document.getElementById('traitRollContainer');

        this.elements.traitSelectionControl.querySelector('#traitSelection').addEventListener('change', (e) => {
            this.state.selectedTrait = e.target.value;
            this.render();
        });
    },

    populateSkillTreeDropdown() {
        const optionsHTML = Object.keys(skillTreeData).map(opt => `<option value="${opt}">${opt}</option>`).join('');
        this.elements.skillTreeControl.innerHTML = `
            <label for="skillTreeSelection">Select Skill Tree:</label>
            <div class="select-wrapper"><select id="skillTreeSelection">${optionsHTML}</select></div>`;
        
        const skillTreeSelect = this.elements.skillTreeControl.querySelector('#skillTreeSelection');
        skillTreeSelect.value = this.state.selectedSkillTree;

        skillTreeSelect.addEventListener('change', (e) => {
            this.state.selectedSkillTree = e.target.value;
            this.render();
        });
    },

    populateOnFieldBuffsDropdown() {
        const buffs = ['None', 'Shinzou Wo Sasageyo', 'Xero Requiem', 'Red Spirit', 'Red Spirit x4'];
        const optionsHTML = buffs.map(buff => `<option value="${buff}">${buff}</option>`).join('');
        this.elements.onFieldBuffsControl.innerHTML = `
            <label for="onFieldBuffsSelection">On Field Buffs:</label>
            <div class="select-wrapper"><select id="onFieldBuffsSelection">${optionsHTML}</select></div>`;

        const buffSelect = this.elements.onFieldBuffsControl.querySelector('#onFieldBuffsSelection');
        buffSelect.value = this.state.selectedBuff;

        buffSelect.addEventListener('change', (e) => {
            this.state.selectedBuff = e.target.value;
            this.render();
        });
    }
};