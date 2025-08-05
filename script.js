document.addEventListener('DOMContentLoaded', () => {
    // Check if data is loaded before initializing
    if (typeof characterData !== 'undefined' && typeof traitsData !== 'undefined' && typeof skillTreeData !== 'undefined') {
        calculatorApp.init();
    } else {
        console.error("Data files (unit_stats.js, data.js) failed to load or are not defined.");
        document.getElementById('unitGrid').innerHTML = '<p style="color: red; text-align: center;">Error: Could not load unit data.</p>';
    }
});

const calculatorApp = {
    // --- STATE ---
    state: {
        selectedUnit: null,
        unitLevel: 1,
        selectedTrait: 'Traitless',
        dmgRoll: 0,
        rngRoll: 0,
        spaRoll: 0,
        selectedSkillTree: 'None',
        currentUpgradeIndex: 0,
    },

    // --- DOM ELEMENTS ---
    elements: {
        unitGrid: null,
        currentUnitDisplay: null,
        unitLevelControl: null,
        traitSelectionControl: null,
        statRollsControl: null,
        skillTreeControl: null,
        dpsOutputSection: null,
        dmgRollInput: null,
        rngRollInput: null,
        spaRollInput: null,
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
        this.elements.dpsOutputSection = document.getElementById('dpsOutputSection');
        this.elements.dmgRollInput = document.getElementById('dmgRollInput');
        this.elements.rngRollInput = document.getElementById('rngRollInput');
        this.elements.spaRollInput = document.getElementById('spaRollInput');
    },

    populateUI() {
        this.populateUnitGrid();
        this.createLevelSlider();
        this.populateTraitsDropdown();
        this.populateSkillTreeDropdown();
    },

    bindEvents() {
        // Event delegation for unit selection
        this.elements.unitGrid.addEventListener('click', (event) => {
            const card = event.target.closest('.unit-card');
            if (card) {
                this.selectUnit(card.dataset.unit);
            }
        });

        // Event handler for stat roll inputs
        const handleStatRollInput = (e, statKey) => {
            const input = e.target;
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);
            let value = parseFloat(input.value);

            if (isNaN(value) || value < min) value = min;
            if (value > max) value = max;
            
            input.value = value || ''; // Show placeholder if value is 0
            this.state[statKey] = value || 0;
            this.render();
        };

        this.elements.dmgRollInput.addEventListener('input', (e) => handleStatRollInput(e, 'dmgRoll'));
        this.elements.rngRollInput.addEventListener('input', (e) => handleStatRollInput(e, 'rngRoll'));
        this.elements.spaRollInput.addEventListener('input', (e) => handleStatRollInput(e, 'spaRoll'));
    },

    // --- RENDER & UPDATE ---
    render() {
        this.updateCurrentUnitDisplay();
        this.updateOutputDisplay();
    },

    updateCurrentUnitDisplay() {
        const { currentUnitDisplay } = this.elements;
        const { selectedUnit } = this.state;
        const hasSelection = !!selectedUnit;

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

// Replace the entire updateOutputDisplay function with this one.
updateOutputDisplay() {
    const { dpsOutputSection } = this.elements;
    const { selectedUnit, currentUpgradeIndex, selectedTrait, unitLevel, dmgRoll, rngRoll, spaRoll } = this.state;

    if (!selectedUnit) {
        dpsOutputSection.innerHTML = `<p class="placeholder-text">Select a unit to view its stats.</p>`;
        dpsOutputSection.classList.add('placeholder');
        return;
    }

    dpsOutputSection.classList.remove('placeholder');

    const unitData = characterData[selectedUnit];
    const stats = unitData.Stats;
    const calculated = this.calculateFinalStats(unitData);

    const upgradeLabel = currentUpgradeIndex === 0 ? 'Placement' : `Upgrade ${currentUpgradeIndex}`;
    
    const nextUpgradeCost = (currentUpgradeIndex + 1) < stats.Cost.length
        ? `$${Number(stats.Cost[currentUpgradeIndex + 1]).toLocaleString()}`
        : 'N/A';
    
    const dmgGrade = this.getStatGrade(dmgRoll, 15);
    const rngGrade = this.getStatGrade(rngRoll, 12.5);
    const spaGrade = this.getStatGrade(spaRoll, 10);

    dpsOutputSection.innerHTML = `
        <div class="unit-card-header">
            <h2 class="unit-title">${selectedUnit.replace(/_/g, ' ')}</h2>
            <div class="unit-sub-info">
                <span>${unitData.Rarity || '5 Star'}</span> • 
                <span class="type-${(unitData.Type || 'HILL').toLowerCase()}">${unitData.Type || 'HILL'}</span>
            </div>
        </div>

        <div class="unit-details-row">
            <div class="level-display">Lv. ${unitLevel}</div>
            <div class="trait-display">${selectedTrait}</div>
        </div>

        <div class="stats-display">
            <div class="stat-bar-row dmg-bar">
                <span class="stat-grade grade-${dmgGrade}">${dmgGrade}</span>
                <span class="stat-roll-value">(${dmgRoll.toFixed(1)}%)</span>
                <span class="stat-label">DMG:</span>
                <span class="stat-value">${calculated.finalDamage.toLocaleString()}</span>
            </div>
            <div class="stat-bar-row rng-bar">
                <span class="stat-grade grade-${rngGrade}">${rngGrade}</span>
                <span class="stat-roll-value">(${rngRoll.toFixed(1)}%)</span>
                <span class="stat-label">RNG:</span>
                <span class="stat-value">${calculated.finalRange}</span>
            </div>
            <div class="stat-bar-row spa-bar">
                <span class="stat-grade grade-${spaGrade}">${spaGrade}</span>
                <span class="stat-roll-value">(${spaRoll.toFixed(1)}%)</span>
                <span class="stat-label">SPD:</span>
                <span class="stat-value">${calculated.finalSpa}s</span>
            </div>
        </div>
        
        <div class="dps-summary ${calculated.dotDps > 0 ? 'has-dot' : ''}">
            <div class="dps-item">
                <h3>Unit DPS</h3>
                <p>${calculated.finalDps.toLocaleString()}</p>
            </div>
            ${calculated.dotDps > 0 ? `
            <div class="dps-item">
                <h3>DoT DPS</h3>
                <p>${calculated.dotDps.toLocaleString()}</p>
            </div>` : ''}
            <div class="dps-item">
                <h3>Group DPS</h3>
                <p>${calculated.groupDps.toLocaleString()}</p>
            </div>
        </div>
        
        <!-- MODIFIED: "DoT Type" is now included here -->
        <div class="additional-stats">
            <h4>Stats for ${upgradeLabel}</h4>
            <div class="additional-stats-grid">
                <div class="stat-block">
                    <span class="stat-block-label">AOE</span>
                    <span class="stat-block-value">${stats.AOE[currentUpgradeIndex]}</span>
                </div>
                <div class="stat-block">
                    <span class="stat-block-label">DoT Type</span>
                    <span class="stat-block-value">${stats.DoT[currentUpgradeIndex]}</span>
                </div>
                <div class="stat-block">
                    <span class="stat-block-label">Total Cost</span>
                    <span class="stat-block-value">$${calculated.totalCost.toLocaleString()}</span>
                </div>
                <div class="stat-block">
                    <span class="stat-block-label">Next Cost</span>
                    <span class="stat-block-value">${nextUpgradeCost}</span>
                </div>
            </div>
        </div>

        <div class="upgrade-nav bottom-nav">
            <button id="prevUpgradeBtn" class="nav-btn" ${currentUpgradeIndex === 0 ? 'disabled' : ''}>◄ Prev</button>
            <button id="nextUpgradeBtn" class="nav-btn" ${currentUpgradeIndex === unitData.MaxUpgrades ? 'disabled' : ''}>Next ►</button>
        </div>
    `;

    // Re-bind events for the new buttons
    dpsOutputSection.querySelector('#prevUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(-1));
    dpsOutputSection.querySelector('#nextUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(1));
},

    // --- CALCULATIONS ---
    calculateFinalStats(unitData) {
    const { currentUpgradeIndex, unitLevel, dmgRoll, rngRoll, spaRoll, selectedTrait, selectedSkillTree } = this.state;
    const { Stats: stats, PlacementCount } = unitData;

    // --- Base Stats for Current Level ---
    const baseDamage = parseFloat(stats.Damage[currentUpgradeIndex]);
    const baseSpa = parseFloat(stats.SPA[currentUpgradeIndex]);
    const baseRange = parseFloat(stats.Range[currentUpgradeIndex]);
    const dotEffect = stats.DoT[currentUpgradeIndex];

    // --- Bonuses ---
    const traitBonus = traitsData.find(t => t.Traits === selectedTrait);
    const skillTreeBonus = skillTreeData[selectedSkillTree];

    // --- Calculations ---
    const levelAdjustedDamage = unitLevel > 1
        ? Math.round(baseDamage + (unitLevel * (baseDamage / 70)))
        : baseDamage;

    const totalDamageMultiplier = 1 + (dmgRoll / 100) + traitBonus.Damage + skillTreeBonus.Damage;
    const finalDamage = Math.round(levelAdjustedDamage * totalDamageMultiplier);
    
    const totalSpaMultiplier = 1 - ((spaRoll / 100) + traitBonus.Spa + skillTreeBonus.SPA);
    const finalSpa = Math.max(0, baseSpa * totalSpaMultiplier);
    
    const totalRangeMultiplier = 1 + (rngRoll / 100) + traitBonus.Range + skillTreeBonus.Range;
    const finalRange = Math.round(baseRange * totalRangeMultiplier * 10) / 10;
    
    let dotMultiplier = 0;
    const effect = (dotEffect || '').toLowerCase();
    if (effect.includes("burn")) dotMultiplier = 0.1;
    else if (effect.includes("bleed")) dotMultiplier = 0.0833;
    else if (effect.includes("poison")) dotMultiplier = 0.05;
    else if (effect.includes("shock")) dotMultiplier = 0.025;
    if (traitBonus.Traits === "Tempest") dotMultiplier += 0.3;
    const dotDps = (finalDamage * dotMultiplier) / 2;

    const baseDps = finalSpa > 0 ? (finalDamage / finalSpa) : 0;
    const finalDps = baseDps + dotDps;

    let groupDps;
    if (traitBonus.Traits === "All Star") groupDps = finalDps;
    else if (traitBonus.Traits === "Companion") groupDps = finalDps * (PlacementCount + 1);
    else groupDps = finalDps * PlacementCount;
    
    // NEW: Calculate total cost up to the current upgrade
    let totalCost = 0;
    for (let i = 0; i <= currentUpgradeIndex; i++) {
        if (stats.Cost[i] !== undefined) {
            totalCost += parseFloat(stats.Cost[i]);
        }
    }

    return {
        finalDamage: finalDamage,
        finalSpa: Math.round(finalSpa * 100) / 100,
        finalRange: finalRange,
        dotDps: Math.round(dotDps * 100) / 100,
        finalDps: Math.round(finalDps * 100) / 100,
        groupDps: Math.round(groupDps * 100) / 100,
        totalCost: totalCost, // NEW: Export total cost
    };
},

    // --- ACTIONS ---
    selectUnit(unitName) {
        this.state.selectedUnit = unitName;
        this.state.currentUpgradeIndex = 0;
        
        document.querySelectorAll('.unit-card.selected').forEach(card => card.classList.remove('selected'));
        const selectedCard = this.elements.unitGrid.querySelector(`[data-unit="${unitName}"]`);
        if (selectedCard) selectedCard.classList.add('selected');

        this.render();
    },

    navigateUpgrade(direction) {
        if (!this.state.selectedUnit) return;
        const unitData = characterData[this.state.selectedUnit];
        
        let newIndex = this.state.currentUpgradeIndex + direction;
        newIndex = Math.max(0, Math.min(newIndex, unitData.MaxUpgrades));
        
        this.state.currentUpgradeIndex = newIndex;
        this.render();
    },

    // --- UI POPULATION HELPERS ---
    populateUnitGrid() {
        const sortedUnitNames = Object.keys(characterData).sort();
        const unitCardsHTML = sortedUnitNames.map(unitName => {
            const unitData = characterData[unitName];
            const fallbackImg = `https://via.placeholder.com/90x90/666/fff?text=${encodeURIComponent(unitName.substring(0, 3).toUpperCase())}`;
            return `
                <div class="unit-card" data-unit="${unitName}">
                    <img src="${unitData.Image}" alt="${unitName.replace(/_/g, ' ')}" onerror="this.onerror=null;this.src='${fallbackImg}';">
                    <p>${unitName.replace(/_/g, ' ')}</p>
                </div>`;
        }).join('');
        this.elements.unitGrid.innerHTML = unitCardsHTML;
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
        this.elements.traitSelectionControl.innerHTML = `
            <label for="traitSelection">Select a Trait:</label>
            <div class="select-wrapper">
                <select id="traitSelection">${optionsHTML}</select>
            </div>`;
        this.elements.traitSelectionControl.querySelector('#traitSelection').addEventListener('change', (e) => {
            this.state.selectedTrait = e.target.value;
            this.render();
        });
    },

    populateSkillTreeDropdown() {
        const optionsHTML = Object.keys(skillTreeData).map(opt => `<option value="${opt}">${opt}</option>`).join('');
        this.elements.skillTreeControl.innerHTML = `
            <label for="skillTreeSelection">Select Skill Tree:</label>
            <div class="select-wrapper">
                <select id="skillTreeSelection">${optionsHTML}</select>
            </div>`;
        this.elements.skillTreeControl.querySelector('#skillTreeSelection').addEventListener('change', (e) => {
            this.state.selectedSkillTree = e.target.value;
            this.render();
        });
    }
};