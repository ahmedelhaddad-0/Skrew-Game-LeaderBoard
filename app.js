// Translations Dictionary
const translations = {
  ar: {
    title: "سكرو - لوحة الصدارة",
    howToPlayTitle: "كيفية الاستخدام واللعب 📖",
    instruction1: "🏆 الهدف هو الحصول على <strong>أقل مجموع نقاط</strong> بعد 5 جولات.",
    instruction2: "👥 أضف لاعبين اثنين على الأقل لبدء اللعبة.",
    instruction3: "1️⃣ الجولة 1 و 2: لعب عادي (سجل النقاط كما هي).",
    instruction4: "2️⃣ الجولة 3 (صامتة 🤫): يمنع الكلام تماماً أثناء اللعب! من يتكلم يضاف له نقاط عقاب.",
    instruction5: "3️⃣ الجولة 4 (عمياني 🙈): تلعب دون رؤية كروتك في البداية.",
    instruction6: "4️⃣ الجولة 5 (دبل/تربل ✖️): <strong>اكتب النقاط الأساسية فقط</strong> واختر المضاعف (دبل ×2 أو تربل ×3)، سيقوم التطبيق بضربها تلقائياً لتجنب الحساب المزدوج!",
    start: "بدء اللعب 🎮",
    playersSetup: "إعداد اللاعبين",
    addPlayer: "إضافة لاعب",
    playerNamePlaceholder: "اسم اللاعب...",
    minPlayersWarning: "يجب إضافة لاعبين اثنين على الأقل لبدء اللعبة!",
    round: "الجولة",
    roundName1: "عادية 🃏",
    roundName2: "عادية 🃏",
    roundName3: "صامتة 🤫",
    roundName4: "عمياني 🙈",
    roundName5: "دبل أو تربل ✖️",
    roundDesc1: "جولة عادية - ركز على حفظ كروتك وتقليل مجموعك.",
    roundDesc2: "جولة عادية ثانية - حاول التخلص من الكروت العالية.",
    roundDesc3: "جولة صامتة! يمنع الكلام والهمس تماماً. تواصل بالإشارة فقط.",
    roundDesc4: "جولة عمياني! تلعب دون رؤية كروتك في البداية. الذاكرة هي سلاحك.",
    roundDesc5: "الجولة الأخيرة! اختر مضاعف كل لاعب (دبل أو تربل) واكتب مجموع كروته الأصلي.",
    multiplierWarning: "⚠️ تنبيه هام: اكتب النقاط العادية (الأساسية) للاعب دون مضاعفتها بنفسك، التطبيق سيقوم بمضاعفتها تلقائياً حسب اختيارك!",
    enterScores: "سجل نقاط الجولة",
    nextRound: "الجولة التالية ➡️",
    finishGame: "إنهاء اللعبة وإعلان الفائز 🏆",
    double: "دبل (×2)",
    triple: "تربل (×3)",
    leaderboard: "لوحة الصدارة 📊",
    overallLeaderboard: "الترتيب الحالي",
    noScoresYet: "لم يتم تسجيل نقاط بعد. ابدأ اللعب لرؤية الترتيب!",
    winnerCongrats: "تهانينا للاعب الفائز! 🎉",
    winnerIs: "الفائز هو الكينج 👑",
    score: "النقاط",
    totalScore: "المجموع الكلي",
    playAgain: "لعبة جديدة (بنفس اللاعبين) 🔄",
    resetAll: "مسح الكل والبدء من جديد 🧹",
    editPlayers: "تعديل اللاعبين 👥",
    confirmReset: "هل أنت متأكد من مسح جميع البيانات واللاعبين؟",
    pointsPlaceholder: "النقاط",
    rank: "الترتيب",
    backToSetup: "العودة لتعديل اللاعبين",
    total: "الإجمالي",
    roundHistory: "تفاصيل النقاط بالجولات 📋",
    historyTitle: "نقاط اللاعبين في كل جولة",
    playerExist: "هذا اللاعب مضاف بالفعل!",
    emptyName: "من فضلك اكتب اسم اللاعب!",
    pts: "نقطة",
    winnerBadge: "البطل 👑",
    showLeaderboard: "لوحة الصدارة 🏆",
    close: "إغلاق",
    editNamePrompt: "تعديل اسم اللاعب:",
    setupHeading: "سجل لاعبيك وابدأ التحدي!"
  },
  en: {
    title: "Skrew - Leaderboard",
    howToPlayTitle: "How to Play & Use 📖",
    instruction1: "🏆 The goal is to get the <strong>lowest score</strong> after 5 rounds.",
    instruction2: "👥 Add at least 2 players to start the game.",
    instruction3: "1️⃣ Rounds 1 & 2: Normal play (enter scores as they are).",
    instruction4: "2️⃣ Round 3 (Silent 🤫): No talking allowed during play! Punish speakers with points.",
    instruction5: "3️⃣ Round 4 (Blind 🙈): Play without seeing your 2 cards at start.",
    instruction6: "4️⃣ Round 5 (Double/Triple ✖️): <strong>Enter base score only</strong> and select multiplier (×2 or ×3). The app multiplies it automatically!",
    start: "Start Game 🎮",
    playersSetup: "Players Setup",
    addPlayer: "Add Player",
    playerNamePlaceholder: "Player name...",
    minPlayersWarning: "Please add at least 2 players to start!",
    round: "Round",
    roundName1: "Normal 🃏",
    roundName2: "Normal 🃏",
    roundName3: "Silent 🤫",
    roundName4: "Blind 🙈",
    roundName5: "Double/Triple ✖️",
    roundDesc1: "Normal round - focus on memorizing your cards and lowering your score.",
    roundDesc2: "Second normal round - try to get rid of high cards.",
    roundDesc3: "Silent round! No talking or whispering. Communicate only with gestures.",
    roundDesc4: "Blind round! Play without seeing your cards at start. Memory is your key.",
    roundDesc5: "Final round! Choose double or triple for each player and enter their base score.",
    multiplierWarning: "⚠️ Important: Enter the normal base score. Do not multiply it yourself, the app will do it automatically!",
    enterScores: "Enter Round Scores",
    nextRound: "Next Round ➡️",
    finishGame: "Finish & Declare Winner 🏆",
    double: "Double (×2)",
    triple: "Triple (×3)",
    leaderboard: "Leaderboard 📊",
    overallLeaderboard: "Current Standings",
    noScoresYet: "No scores recorded yet. Start playing to see rankings!",
    winnerCongrats: "Congratulations to the Winner! 🎉",
    winnerIs: "The Winner is 👑",
    score: "Score",
    totalScore: "Total Score",
    playAgain: "New Game (Same Players) 🔄",
    resetAll: "Reset & Delete All 🧹",
    editPlayers: "Edit Players 👥",
    confirmReset: "Are you sure you want to delete all data and players?",
    pointsPlaceholder: "Pts",
    rank: "Rank",
    backToSetup: "Back to Edit Players",
    total: "Total",
    roundHistory: "Round Breakdown 📋",
    historyTitle: "Scores breakdown per round",
    playerExist: "Player already exists!",
    emptyName: "Please enter a player name!",
    pts: "pts",
    winnerBadge: "Winner 👑",
    showLeaderboard: "Show Leaderboard 🏆",
    close: "Close",
    editNamePrompt: "Edit player name:",
    setupHeading: "Add your players to start the challenge!"
  }
};

// Initial state
let state = {
  players: [],
  scores: {}, // { playerId: [r1, r2, r3, r4, r5] }
  multipliers: {}, // { playerId: 2 or 3 for round 5 }
  currentRound: 1, // 1, 2, 3, 4, 5, or 6 (Winner screen)
  view: 'setup', // 'setup', 'game', 'winner'
  lang: 'ar' // default language is Arabic
};

// Cache DOM elements
const el = {
  html: document.documentElement,
  title: document.getElementById('app-title'),
  setupView: document.getElementById('setup-view'),
  gameView: document.getElementById('game-view'),
  winnerView: document.getElementById('winner-view'),
  langToggle: document.getElementById('lang-toggle'),
  playersList: document.getElementById('players-list'),
  addPlayerForm: document.getElementById('add-player-form'),
  playerNameInput: document.getElementById('player-name-input'),
  addPlayerBtn: document.getElementById('add-player-btn'),
  startGameBtn: document.getElementById('start-game-btn'),
  gameRoundNum: document.getElementById('game-round-num'),
  gameRoundName: document.getElementById('game-round-name'),
  gameRoundDesc: document.getElementById('game-round-desc'),
  gameScoreInputs: document.getElementById('game-score-inputs'),
  submitScoresBtn: document.getElementById('submit-scores-btn'),
  gameWarningContainer: document.getElementById('game-warning-container'),
  
  // Leaderboard Modal / Sidebar
  leaderboardModal: document.getElementById('leaderboard-modal'),
  leaderboardModalContent: document.getElementById('leaderboard-modal-content'),
  showLeaderboardBtn: document.getElementById('show-leaderboard-btn'),
  closeLeaderboardBtn: document.getElementById('close-leaderboard-btn'),
  leaderboardModalTitle: document.getElementById('leaderboard-modal-title'),
  
  // Winner page
  winnerCongrats: document.getElementById('winner-congrats'),
  winnerName: document.getElementById('winner-name'),
  winnerScore: document.getElementById('winner-score'),
  winnerStandings: document.getElementById('winner-standings'),
  winnerHistoryTitle: document.getElementById('winner-history-title'),
  winnerHistoryTable: document.getElementById('winner-history-table'),
  playAgainBtn: document.getElementById('play-again-btn'),
  resetAllBtn: document.getElementById('reset-all-btn'),
  editPlayersBtn: document.getElementById('edit-players-btn'),
  
  // Translations static targets
  setupHeading: document.getElementById('setup-heading'),
  howToPlayTitle: document.getElementById('how-to-play-title'),
  instructionsList: document.getElementById('instructions-list')
};

// Save state to LocalStorage
function saveState() {
  localStorage.setItem('skrew_state', JSON.stringify(state));
}

// Load state from LocalStorage
function loadState() {
  const saved = localStorage.getItem('skrew_state');
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing saved state, resetting...", e);
    }
  }
}

// Initialize application
function init() {
  loadState();
  
  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registered successfully.', reg.scope))
        .catch(err => console.error('Service Worker registration failed:', err));
    });
  }

  // Bind Events
  el.langToggle.addEventListener('click', toggleLanguage);
  el.addPlayerForm.addEventListener('submit', handleAddPlayer);
  el.startGameBtn.addEventListener('click', startGame);
  el.submitScoresBtn.addEventListener('click', handleSubmitScores);
  el.showLeaderboardBtn.addEventListener('click', openLeaderboard);
  el.closeLeaderboardBtn.addEventListener('click', closeLeaderboard);
  el.playAgainBtn.addEventListener('click', playAgain);
  el.resetAllBtn.addEventListener('click', resetAll);
  el.editPlayersBtn.addEventListener('click', editPlayers);
  
  // Close leaderboard when clicking outside content
  el.leaderboardModal.addEventListener('click', (e) => {
    if (e.target === el.leaderboardModal) closeLeaderboard();
  });

  // Render initial language and views
  updateLanguageUI();
  render();
}

// Translate text and change document direction
function updateLanguageUI() {
  const t = translations[state.lang];
  
  // Set document direction
  el.html.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
  el.html.setAttribute('lang', state.lang);
  
  // Toggle button text
  el.langToggle.textContent = state.lang === 'ar' ? 'English 🇺🇸' : 'العربية 🇪🇬';
  
  // Static translations
  el.title.textContent = t.title;
  el.setupHeading.textContent = t.setupHeading;
  el.playerNameInput.placeholder = t.playerNamePlaceholder;
  el.addPlayerBtn.textContent = t.addPlayer;
  el.startGameBtn.textContent = t.start;
  el.showLeaderboardBtn.textContent = t.showLeaderboard;
  el.closeLeaderboardBtn.textContent = t.close;
  el.leaderboardModalTitle.textContent = t.leaderboard;
  
  el.howToPlayTitle.textContent = t.howToPlayTitle;
  
  // How to play list
  el.instructionsList.innerHTML = `
    <li class="flex items-start gap-2">${t.instruction1}</li>
    <li class="flex items-start gap-2">${t.instruction2}</li>
    <li class="flex items-start gap-2">${t.instruction3}</li>
    <li class="flex items-start gap-2">${t.instruction4}</li>
    <li class="flex items-start gap-2">${t.instruction5}</li>
    <li class="flex items-start gap-2">${t.instruction6}</li>
  `;

  el.winnerCongrats.textContent = t.winnerCongrats;
  el.winnerHistoryTitle.textContent = t.roundHistory;
  el.playAgainBtn.textContent = t.playAgain;
  el.resetAllBtn.textContent = t.resetAll;
  el.editPlayersBtn.textContent = t.editPlayers;
}

function toggleLanguage() {
  state.lang = state.lang === 'ar' ? 'en' : 'ar';
  saveState();
  updateLanguageUI();
  render();
}

// Router & Main Render
function render() {
  // Hide all views
  el.setupView.classList.add('hidden');
  el.gameView.classList.add('hidden');
  el.winnerView.classList.add('hidden');
  el.showLeaderboardBtn.classList.add('hidden');

  if (state.view === 'setup') {
    el.setupView.classList.remove('hidden');
    renderSetup();
  } else if (state.view === 'game') {
    el.gameView.classList.remove('hidden');
    el.showLeaderboardBtn.classList.remove('hidden');
    renderGame();
  } else if (state.view === 'winner') {
    el.winnerView.classList.remove('hidden');
    renderWinner();
  }
}

// View 1: Setup View
function renderSetup() {
  const t = translations[state.lang];
  el.playersList.innerHTML = '';

  state.players.forEach((player, idx) => {
    const li = document.createElement('div');
    li.className = "flex items-center justify-between p-4 bg-skrew-card border border-white/5 rounded-2xl shadow-lg transition duration-200 hover:scale-[1.01]";
    
    // Avatar initials
    const initials = player.name.trim().substring(0, 2).toUpperCase();
    
    li.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-tr from-purple-500 to-indigo-600 text-white select-none">
          ${initials}
        </div>
        <span class="font-semibold text-lg text-gray-200 cursor-pointer" onclick="handleEditPlayerName('${player.id}')">
          ${player.name}
        </span>
      </div>
      <button onclick="handleRemovePlayer('${player.id}')" class="text-red-400 hover:text-red-500 p-2 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    `;
    el.playersList.appendChild(li);
  });

  // Enable/Disable Start button
  if (state.players.length >= 2) {
    el.startGameBtn.removeAttribute('disabled');
    el.startGameBtn.className = "w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white font-bold text-lg text-center shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer";
  } else {
    el.startGameBtn.setAttribute('disabled', 'true');
    el.startGameBtn.className = "w-full py-4 px-6 rounded-2xl bg-gray-700 text-gray-400 font-bold text-lg text-center cursor-not-allowed select-none opacity-50";
  }
}

function handleAddPlayer(e) {
  e.preventDefault();
  const name = el.playerNameInput.value.trim();
  const t = translations[state.lang];

  if (!name) {
    alert(t.emptyName);
    return;
  }

  // Duplicate Check
  const exist = state.players.some(p => p.name.toLowerCase() === name.toLowerCase());
  if (exist) {
    alert(t.playerExist);
    return;
  }

  const playerId = 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
  state.players.push({ id: playerId, name: name });
  state.scores[playerId] = [null, null, null, null, null];
  state.multipliers[playerId] = 2; // Default multiplier for round 5 is 2 (Double)

  el.playerNameInput.value = '';
  saveState();
  renderSetup();
  // Scroll to bottom of player list
  el.playersList.scrollTop = el.playersList.scrollHeight;
}

function handleRemovePlayer(id) {
  state.players = state.players.filter(p => p.id !== id);
  delete state.scores[id];
  delete state.multipliers[id];
  saveState();
  renderSetup();
}

function handleEditPlayerName(id) {
  const player = state.players.find(p => p.id === id);
  if (!player) return;
  const t = translations[state.lang];
  
  const newName = prompt(t.editNamePrompt, player.name);
  if (newName && newName.trim()) {
    player.name = newName.trim();
    saveState();
    renderSetup();
  }
}

function startGame() {
  if (state.players.length < 2) return;
  state.view = 'game';
  state.currentRound = getCurrentUnfilledRound();
  if (state.currentRound > 5) {
    state.view = 'winner';
  }
  saveState();
  render();
}

// Find first round that is not filled for all players
function getCurrentUnfilledRound() {
  for (let r = 1; r <= 5; r++) {
    const roundIndex = r - 1;
    const allFilled = state.players.every(p => state.scores[p.id][roundIndex] !== null);
    if (!allFilled) return r;
  }
  return 6; // All filled
}

// View 2: Active Game View
function renderGame() {
  const t = translations[state.lang];
  const r = state.currentRound;
  
  el.gameRoundNum.textContent = `${t.round} ${r}`;
  el.gameRoundName.textContent = t[`roundName${r}`];
  el.gameRoundDesc.textContent = t[`roundDesc${r}`];

  // Show Warning on Round 5
  if (r === 5) {
    el.gameWarningContainer.classList.remove('hidden');
    el.gameWarningContainer.innerHTML = `
      <div class="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 flex gap-3 text-amber-200">
        <span class="text-2xl select-none">⚠️</span>
        <p class="text-sm leading-relaxed">${t.multiplierWarning}</p>
      </div>
    `;
  } else {
    el.gameWarningContainer.classList.add('hidden');
  }

  // Render input fields for each player
  el.gameScoreInputs.innerHTML = '';
  const roundIndex = r - 1;

  state.players.forEach(player => {
    const div = document.createElement('div');
    div.className = "bg-skrew-card border border-white/5 p-4 rounded-2xl shadow-lg flex flex-col gap-4";

    const savedVal = state.scores[player.id][roundIndex];
    const displayVal = savedVal !== null ? savedVal : '';
    
    // For Round 5, add double/triple selectors
    let multiplierHtml = '';
    if (r === 5) {
      const activeMult = state.multipliers[player.id] || 2;
      multiplierHtml = `
        <div class="flex items-center gap-2 mt-1">
          <button type="button" onclick="setMultiplier('${player.id}', 2)" id="btn-mult-2-${player.id}" class="flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${activeMult === 2 ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}">
            ${t.double}
          </button>
          <button type="button" onclick="setMultiplier('${player.id}', 3)" id="btn-mult-3-${player.id}" class="flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${activeMult === 3 ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}">
            ${t.triple}
          </button>
        </div>
      `;
    }

    div.innerHTML = `
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-tr from-violet-500 to-indigo-600 text-white select-none">
            ${player.name.trim().substring(0,2).toUpperCase()}
          </div>
          <span class="font-bold text-gray-200 text-lg">${player.name}</span>
        </div>
        <div class="w-28">
          <input type="number" 
                 pattern="[0-9]*" 
                 inputmode="numeric" 
                 value="${displayVal}"
                 placeholder="${t.pointsPlaceholder}" 
                 id="score-${player.id}" 
                 class="w-full text-center py-3 px-4 rounded-xl bg-skrew-bg border border-white/10 text-white font-bold text-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition" />
        </div>
      </div>
      ${multiplierHtml}
    `;
    
    el.gameScoreInputs.appendChild(div);
  });

  el.submitScoresBtn.textContent = r === 5 ? t.finishGame : t.nextRound;
}

// Set round 5 multiplier
window.setMultiplier = function(playerId, mult) {
  state.multipliers[playerId] = mult;
  saveState();

  // Toggle active button UI classes immediately
  const btn2 = document.getElementById(`btn-mult-2-${playerId}`);
  const btn3 = document.getElementById(`btn-mult-3-${playerId}`);

  const activeAr = "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md";
  const activeEn = "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md";
  const inactive = "bg-gray-800 text-gray-400 hover:bg-gray-700";

  if (mult === 2) {
    btn2.className = `flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${activeAr}`;
    btn3.className = `flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${inactive}`;
  } else {
    btn2.className = `flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${inactive}`;
    btn3.className = `flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition duration-150 cursor-pointer text-center ${activeEn}`;
  }
};

function handleSubmitScores() {
  const r = state.currentRound;
  const roundIndex = r - 1;
  let allValid = true;

  // Read and validate inputs
  state.players.forEach(player => {
    const input = document.getElementById(`score-${player.id}`);
    const scoreVal = parseInt(input.value, 10);
    
    if (isNaN(scoreVal)) {
      allValid = false;
      input.classList.add('border-red-500', 'ring-2', 'ring-red-500/20');
    } else {
      input.classList.remove('border-red-500', 'ring-2', 'ring-red-500/20');
      // For Round 5, we apply the multiplier selected
      if (r === 5) {
        const mult = state.multipliers[player.id] || 2;
        state.scores[player.id][roundIndex] = scoreVal * mult;
      } else {
        state.scores[player.id][roundIndex] = scoreVal;
      }
    }
  });

  if (!allValid) {
    return;
  }

  if (r < 5) {
    state.currentRound = r + 1;
    saveState();
    renderGame();
  } else {
    // End of game
    state.currentRound = 6;
    state.view = 'winner';
    saveState();
    render();
    triggerConfetti();
  }
}

// Calculate scores helper
function getSortedLeaderboard() {
  return state.players.map(player => {
    const playerScores = state.scores[player.id] || [];
    const totalScore = playerScores.reduce((acc, s) => acc + (s !== null ? s : 0), 0);
    return {
      ...player,
      scoresArray: playerScores,
      totalScore: totalScore
    };
  }).sort((a, b) => a.totalScore - b.totalScore); // lowest score wins!
}

// View 3: Winner View
function renderWinner() {
  const t = translations[state.lang];
  const sorted = getSortedLeaderboard();
  
  if (sorted.length === 0) return;

  const winner = sorted[0];
  el.winnerName.textContent = winner.name;
  el.winnerScore.textContent = `${winner.totalScore} ${t.pts}`;

  // Render Podium for Winner standings
  el.winnerStandings.innerHTML = '';
  
  // Arrange top 3 for podium visualization: [Rank 2, Rank 1, Rank 3]
  const podiumOrder = [];
  if (sorted[1]) podiumOrder.push({ player: sorted[1], rank: 2 });
  podiumOrder.push({ player: sorted[0], rank: 1 });
  if (sorted[2]) podiumOrder.push({ player: sorted[2], rank: 3 });

  // If we only have 2 players, podiumOrder length is 2. Center Rank 1.
  const podiumContainer = document.createElement('div');
  podiumContainer.className = "flex items-end justify-center gap-4 py-8 mb-6 overflow-hidden min-h-[220px]";

  podiumOrder.forEach(item => {
    const p = item.player;
    const rank = item.rank;
    const initials = p.name.trim().substring(0,2).toUpperCase();
    
    let heightClass = "h-28";
    let colorClass = "from-skrew-accent/30 to-skrew-accent/10 border-indigo-500/20";
    let badgeColor = "bg-indigo-600 text-white";
    let crownHtml = "";

    if (rank === 1) {
      heightClass = "h-40";
      colorClass = "from-yellow-600/30 to-yellow-600/10 border-yellow-500/40";
      badgeColor = "bg-skrew-gold text-skrew-bg";
      crownHtml = `
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span class="text-3xl">👑</span>
        </div>
      `;
    } else if (rank === 2) {
      heightClass = "h-32";
      colorClass = "from-blue-600/30 to-blue-600/10 border-blue-500/30";
      badgeColor = "bg-skrew-silver text-skrew-bg";
    } else if (rank === 3) {
      heightClass = "h-24";
      colorClass = "from-orange-600/30 to-orange-600/10 border-orange-500/30";
      badgeColor = "bg-skrew-bronze text-white";
    }

    const podDiv = document.createElement('div');
    podDiv.className = "flex flex-col items-center flex-1 max-w-[100px] relative";
    podDiv.innerHTML = `
      ${crownHtml}
      <div class="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-tr from-violet-500 to-indigo-600 text-white border-2 ${rank === 1 ? 'border-skrew-gold ring-4 ring-skrew-gold/20' : 'border-white/10'} mb-2 shadow-lg">
        ${initials}
      </div>
      <div class="w-full ${heightClass} ${colorClass} border border-b-0 rounded-t-2xl flex flex-col justify-end p-3 text-center shadow-lg relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${badgeColor}">
          ${rank}
        </div>
        <p class="font-bold text-sm text-gray-200 truncate w-full mb-1">${p.name}</p>
        <p class="font-extrabold text-xs text-gray-400">${p.totalScore} ${t.pts}</p>
      </div>
    `;
    podiumContainer.appendChild(podDiv);
  });

  el.winnerStandings.appendChild(podiumContainer);

  // Render overall scores in a regular list for ranks > 3
  if (sorted.length > 3) {
    const listDiv = document.createElement('div');
    listDiv.className = "flex flex-col gap-2 mt-4";
    
    sorted.slice(3).forEach((p, idx) => {
      const rankNum = idx + 4;
      const initials = p.name.trim().substring(0,2).toUpperCase();
      
      const itemDiv = document.createElement('div');
      itemDiv.className = "flex items-center justify-between p-4 bg-skrew-card/60 border border-white/5 rounded-2xl shadow-md";
      itemDiv.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-gray-500 w-5 text-center">${rankNum}</span>
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-gray-700 text-gray-300">
            ${initials}
          </div>
          <span class="font-semibold text-gray-300">${p.name}</span>
        </div>
        <span class="font-bold text-gray-400 text-sm">${p.totalScore} ${t.pts}</span>
      `;
      listDiv.appendChild(itemDiv);
    });
    
    el.winnerStandings.appendChild(listDiv);
  }

  // Render Detailed Scores History Table
  renderHistoryTable();
}

function renderHistoryTable() {
  const t = translations[state.lang];
  const sorted = getSortedLeaderboard();

  let headerHtml = `
    <th class="px-3 py-3 text-start text-xs font-semibold text-gray-400 uppercase tracking-wider">${t.playerNamePlaceholder.replace('...', '')}</th>
    <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">ج1</th>
    <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">ج2</th>
    <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">ج3 🤫</th>
    <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">ج4 🙈</th>
    <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">ج5 ✖️</th>
    <th class="px-3 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider font-bold">${t.total}</th>
  `;

  if (state.lang === 'en') {
    headerHtml = `
      <th class="px-3 py-3 text-start text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
      <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">R1</th>
      <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">R2</th>
      <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">R3 🤫</th>
      <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">R4 🙈</th>
      <th class="px-2 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">R5 ✖️</th>
      <th class="px-3 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider font-bold">${t.total}</th>
    `;
  }

  let bodyHtml = '';
  sorted.forEach(p => {
    bodyHtml += `
      <tr class="border-b border-white/5 hover:bg-white/5">
        <td class="px-3 py-4 whitespace-nowrap text-sm font-semibold text-gray-200 truncate max-w-[100px]">${p.name}</td>
        <td class="px-2 py-4 whitespace-nowrap text-sm text-center text-gray-400">${p.scoresArray[0] !== null ? p.scoresArray[0] : '-'}</td>
        <td class="px-2 py-4 whitespace-nowrap text-sm text-center text-gray-400">${p.scoresArray[1] !== null ? p.scoresArray[1] : '-'}</td>
        <td class="px-2 py-4 whitespace-nowrap text-sm text-center text-gray-400">${p.scoresArray[2] !== null ? p.scoresArray[2] : '-'}</td>
        <td class="px-2 py-4 whitespace-nowrap text-sm text-center text-gray-400">${p.scoresArray[3] !== null ? p.scoresArray[3] : '-'}</td>
        <td class="px-2 py-4 whitespace-nowrap text-sm text-center text-gray-400">${p.scoresArray[4] !== null ? p.scoresArray[4] : '-'}</td>
        <td class="px-3 py-4 whitespace-nowrap text-sm text-center text-violet-300 font-bold">${p.totalScore}</td>
      </tr>
    `;
  });

  el.winnerHistoryTable.innerHTML = `
    <table class="min-w-full divide-y divide-white/10 select-none">
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody class="divide-y divide-white/5 bg-transparent">${bodyHtml}</tbody>
    </table>
  `;
}

// Reset functions
function playAgain() {
  // Reset scores and multipliers
  state.players.forEach(p => {
    state.scores[p.id] = [null, null, null, null, null];
    state.multipliers[p.id] = 2;
  });
  state.currentRound = 1;
  state.view = 'game';
  saveState();
  render();
}

function resetAll() {
  const t = translations[state.lang];
  if (confirm(t.confirmReset)) {
    state.players = [];
    state.scores = {};
    state.multipliers = {};
    state.currentRound = 1;
    state.view = 'setup';
    saveState();
    render();
  }
}

function editPlayers() {
  state.view = 'setup';
  saveState();
  render();
}

// Leaderboard Side drawer
function openLeaderboard() {
  const t = translations[state.lang];
  el.leaderboardModal.classList.remove('hidden');
  // Slide animation trigger
  setTimeout(() => {
    el.leaderboardModalContent.classList.remove('translate-y-full');
  }, 10);

  const sorted = getSortedLeaderboard();
  
  if (sorted.length === 0 || sorted.every(p => p.scoresArray.every(s => s === null))) {
    el.leaderboardModalContent.querySelector('.leaderboard-body').innerHTML = `
      <div class="text-center py-12 text-gray-400 font-medium">${t.noScoresYet}</div>
    `;
    return;
  }

  // Draw standings list
  let html = '<div class="flex flex-col gap-3 py-4">';
  
  sorted.forEach((p, idx) => {
    const rank = idx + 1;
    const initials = p.name.trim().substring(0,2).toUpperCase();
    
    let rankColor = "text-gray-400";
    let rankBg = "bg-gray-800";
    let crown = "";

    if (rank === 1) {
      rankColor = "text-skrew-bg font-extrabold";
      rankBg = "bg-skrew-gold";
      crown = "👑";
    } else if (rank === 2) {
      rankColor = "text-skrew-bg font-extrabold";
      rankBg = "bg-skrew-silver";
    } else if (rank === 3) {
      rankColor = "text-white font-extrabold";
      rankBg = "bg-skrew-bronze";
    }

    html += `
      <div class="flex items-center justify-between p-4 bg-skrew-card border border-white/5 rounded-2xl shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs ${rankBg} ${rankColor}">
            ${rank}
          </div>
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs bg-gradient-to-tr from-violet-500 to-indigo-600 text-white">
            ${initials}
          </div>
          <div>
            <span class="font-bold text-gray-200 block text-base">${p.name} ${crown}</span>
            <span class="text-xs text-gray-400">${p.scoresArray.filter(s => s !== null).join(' + ') || '0'}</span>
          </div>
        </div>
        <div class="text-end">
          <span class="font-extrabold text-violet-300 text-lg block">${p.totalScore}</span>
          <span class="text-[10px] text-gray-500 block uppercase font-semibold">${t.score}</span>
        </div>
      </div>
    `;
  });

  html += '</div>';

  el.leaderboardModalContent.querySelector('.leaderboard-body').innerHTML = html;
}

function closeLeaderboard() {
  el.leaderboardModalContent.classList.add('translate-y-full');
  setTimeout(() => {
    el.leaderboardModal.classList.add('hidden');
  }, 300);
}

// CONFETTI ANIMATION (Pure CSS & JS Canvas elements fallback)
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = "confetti-canvas";
  canvas.className = "fixed inset-0 pointer-events-none z-50 w-full h-full";
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  const colors = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#22c55e', '#84cc16', '#eab308', '#f97316'];
  const pieces = [];
  
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      r: Math.random() * 6 + 4,
      d: Math.random() * height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }
  
  let animationFrameId;
  function update() {
    ctx.clearRect(0, 0, width, height);
    
    let finished = true;
    pieces.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - p.r/2) * 15;
      
      if (p.y < height) {
        finished = false;
      }
      
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });
    
    if (finished) {
      cancelAnimationFrame(animationFrameId);
      canvas.remove();
    } else {
      animationFrameId = requestAnimationFrame(update);
    }
  }
  
  update();
  
  // Clean up canvas after 7 seconds in case it keeps running
  setTimeout(() => {
    cancelAnimationFrame(animationFrameId);
    if (canvas.parentNode) canvas.remove();
  }, 7000);
}

// Start
document.addEventListener('DOMContentLoaded', init);
