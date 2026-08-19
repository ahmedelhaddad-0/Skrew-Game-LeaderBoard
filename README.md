# 🃏 Skrew Game Scoreboard & Leaderboard (حاسبة نقاط سكرو)

A mobile-first, offline-capable Progressive Web Application (PWA) designed to track scores and manage the leaderboard for the popular card game **Skrew (سكرو)**. 

The website does not play the game online; instead, it simplifies the tedious task of manual score tracking, calculating totals, applying multipliers, and instantly declaring the winner.

---

## ✨ Features

- **📱 Mobile-First Design**: Optimized for touchscreens, notched phones, and quick hand-held navigation.
- **🌐 Dual Language (Arabic/English)**: Dynamic RTL (Right-to-Left) and LTR layout switching. Arabic version uses the beautiful **Cairo** font with clean padding and readable sizes.
- **📶 100% Offline Support (PWA)**: 
  - Works entirely without internet after the first visit.
  - Bundles the Tailwind CSS script (`tailwind.js`) locally to compile styles offline.
  - Caches all code, layouts, and assets using a Cache-First Service Worker (`sw.js`).
- **🏆 Lowest Score Wins Leaderboard**: Automatically ranks players dynamically. Displays a podium visualization at the end of the game with a golden crown for the champion.
- **💾 LocalStorage Sync**: Automatically saves setup names, active scores, and multipliers on any input, preventing progress loss if the page is closed or refreshed.
- **🔄 Game Flow & Explanations**:
  - **Round 1 & 2 (عادية)**: Normal score tracking.
  - **Round 3 (صامتة 🤫)**: Silent round reminder.
  - **Round 4 (عمياني 🙈)**: Blind round reminder.
  - **Round 5 (دبل/تربل ✖️)**: Final round multiplier. Offers ×2 (Double) and ×3 (Triple) options for each player. Contains warning banners telling users to type their base scores only to avoid double-multiplication errors.

---

## 🗂️ File Structure

```bash
├── index.html       # The single-page application structure & UI elements
├── style.css        # Cairo font setups, custom scrollbars, safe areas, & keyframe animations
├── app.js           # Score calculations, PWA setup, states, translations, & confetti engine
├── manifest.json    # PWA configuration for adding to device Home Screens
├── sw.js            # Service Worker for local resource caching
├── tailwind.js      # Bundled compiler script for Tailwind CSS (offline-friendly)
├── icon-192.png     # Local app icon (192px)
├── icon-512.png     # Local app icon (512px)
└── README.md        # Project documentation
```

---

## 🎮 How to Play & Use

1. **إعداد اللاعبين (Setup)**:
   - Add at least 2 players in the setup screen.
   - Click player names to edit or tap the trash icon to remove them.
   - Expand the **كيفية الاستخدام واللعب (How to Play)** card if you need to review the game rules.
2. **تسجيل النقاط (Gameplay)**:
   - Play each round, then input the score for each player.
   - Click the floating **لوحة الصدارة (Leaderboard) 🏆** button at the bottom of the screen at any time to see the active standings.
   - In **Round 5**, select whether each player ended on a **Double (دبل)** or **Triple (تربل)**. Enter their **base score only** (e.g., if their cards sum to 5 and they chose double, type `5` - the app will calculate it as `10`).
3. **تتويج البطل (Winner Celebration)**:
   - After Round 5, enjoy the confetti!
   - View the top-3 podium standing.
   - View the detailed history table containing the round-by-round point breakdown for all players.
   - Click **لعبة جديدة (New Game)** to keep the current players but wipe the scores, or click **تعديل اللاعبين (Edit Players)** to make roster changes.

---

## 🛠️ Local Development & Deployment

To run the application:
1. Clone or download this repository.
2. Double-click `index.html` to open it in any web browser, or serve it locally using a server (e.g., `npx serve .` or VS Code Live Server) to register the Service Worker.
3. For mobile phones, access the hosted link on Safari or Chrome, tap **Share/Options**, and choose **Add to Home Screen** to install it.