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
    
    updateOutputDisplay() {
        const { dpsOutputSection } = this.elements;
        const { selectedUnit, currentUpgradeIndex, selectedTrait } = this.state;

        if (!selectedUnit) {
            dpsOutputSection.innerHTML = `<p class="placeholder-text">Select a unit to see its stats and calculated DPS.</p>`;
            dpsOutputSection.classList.add('placeholder');
            return;
        }

        dpsOutputSection.classList.remove('placeholder');
        
        const unitData = characterData[selectedUnit];
        const stats = unitData.Stats;
        
        const calculated = this.calculateFinalStats(unitData);
        
        const upgradeLabel = currentUpgradeIndex === 0 ? 'Placement' : `Upgrade ${currentUpgradeIndex}`;
        const nextUpgradeCost = currentUpgradeIndex < stats.Cost.length
            ? `$${Number(stats.Cost[currentUpgradeIndex]).toLocaleString()}`
            : 'N/A';
        
        let displayPlacementLimit = unitData.PlacementCount;
        if (selectedTrait === "All Star") displayPlacementLimit = 1;
        if (selectedTrait === "Companion") displayPlacementLimit += 1;
        
        dpsOutputSection.innerHTML = `
            <div class="upgrade-nav">
                <button id="prevUpgradeBtn" class="nav-btn" ${currentUpgradeIndex === 0 ? 'disabled' : ''}>◄ Prev</button>
                <span class="upgrade-level-display">${upgradeLabel}</span>
                <button id="nextUpgradeBtn" class="nav-btn" ${currentUpgradeIndex === unitData.MaxUpgrades ? 'disabled' : ''}>Next ►</button>
            </div>
            <div class="dps-grid">
                <div class="dps-item">
                    <h3>Total DPS (Unit)</h3>
                    <p>${calculated.finalDps.toLocaleString()}</p>
                </div>
                <div class="dps-item">
                    <h3>Group DPS (Max)</h3>
                    <p>${calculated.groupDps.toLocaleString()}</p>
                </div>
            </div>
            <ul class="output-stats-list-detailed">
                <li><strong>Base Damage:</strong><span class="value">${calculated.finalDamage.toLocaleString()}</span></li>
                <li><strong>Range:</strong><span class="value">${calculated.finalRange}</span></li>
                <li><strong>SPA:</strong><span class="value">${calculated.finalSpa}s</span></li>
                <li><strong>AOE:</strong><span class="value">${stats.AOE[currentUpgradeIndex]}</span></li>
                <li><strong>DoT Type:</strong><span class="value">${stats.DoT[currentUpgradeIndex]}</span></li>
                ${calculated.dotDps > 0 ? `<li><strong>DoT DPS:</strong><span class="value">${calculated.dotDps.toLocaleString()}</span></li>` : ''}
                <li><strong>Next Upgrade Cost:</strong><span class="value">${nextUpgradeCost}</span></li>
                <li><strong>Placement Limit:</strong><span class="value">${displayPlacementLimit}</span></li>
            </ul>
        `;

        dpsOutputSection.querySelector('#prevUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(-1));
        dpsOutputSection.querySelector('#nextUpgradeBtn').addEventListener('click', () => this.navigateUpgrade(1));
    },

    // --- CALCULATIONS ---
    calculateFinalStats(unitData) {
        const { currentUpgradeIndex, unitLevel, dmgRoll, rngRoll, spaRoll, selectedTrait, selectedSkillTree } = this.state;
        const { Stats: stats, PlacementCount } = unitData;

        const baseDamage = parseFloat(stats.Damage[currentUpgradeIndex]);
        const baseSpa = parseFloat(stats.SPA[currentUpgradeIndex]);
        const baseRange = parseFloat(stats.Range[currentUpgradeIndex]);
        const dotEffect = stats.DoT[currentUpgradeIndex];

        const traitBonus = traitsData.find(t => t.Traits === selectedTrait);
        const skillTreeBonus = skillTreeData[selectedSkillTree];

        // Level-based damage bonus
        const levelAdjustedDamage = unitLevel > 1
            ? Math.round(baseDamage + (unitLevel * (baseDamage / 70)))
            : baseDamage;

        // Final Stat Calculations
        const totalDamageMultiplier = 1 + (dmgRoll / 100) + traitBonus.Damage + skillTreeBonus.Damage;
        const finalDamage = Math.round(levelAdjustedDamage * totalDamageMultiplier);
        
        const totalSpaMultiplier = 1 - ((spaRoll / 100) + traitBonus.Spa + skillTreeBonus.SPA);
        const finalSpa = Math.max(0, baseSpa * totalSpaMultiplier);
        
        const totalRangeMultiplier = 1 + (rngRoll / 100) + traitBonus.Range + skillTreeBonus.Range;
        const finalRange = Math.round(baseRange * totalRangeMultiplier * 10) / 10;
        
        // DoT DPS
        let dotMultiplier = 0;
        const effect = (dotEffect || '').toLowerCase();
        if (effect.includes("burn")) dotMultiplier = 0.1;
        else if (effect.includes("bleed")) dotMultiplier = 0.0833;
        else if (effect.includes("poison")) dotMultiplier = 0.05;
        else if (effect.includes("shock")) dotMultiplier = 0.025;
        if (traitBonus.Traits === "Tempest") dotMultiplier += 0.3;
        const dotDps = (finalDamage * dotMultiplier) / 2;

        // Final DPS
        const baseDps = finalSpa > 0 ? (finalDamage / finalSpa) : 0;
        const finalDps = baseDps + dotDps;

        // Group DPS
        let groupDps;
        if (traitBonus.Traits === "All Star") groupDps = finalDps;
        else if (traitBonus.Traits === "Companion") groupDps = finalDps * (PlacementCount + 1);
        else groupDps = finalDps * PlacementCount;
        
        return {
            finalDamage: finalDamage,
            finalSpa: Math.round(finalSpa * 100) / 100,
            finalRange: finalRange,
            dotDps: Math.round(dotDps * 100) / 100,
            finalDps: Math.round(finalDps * 100) / 100,
            groupDps: Math.round(groupDps * 100) / 100
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