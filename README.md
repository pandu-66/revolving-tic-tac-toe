# 🎮 Revolving Tic Tac Toe

A twist on the classic game: the board keeps revolving — old moves disappear after a few turns unless someone wins first. Survival of the smartest.

---

## 🔧 Features
- Supports 2/3/4 players
- Repeating gameplay: earlier moves disappear after a few turns
- Win condition: exactly 3 matching symbols in a row
- Smooth UI inspired by [playtriangles.com](https://playtriangles.com/)
- Dynamic highlighting of cells about to disappear

---

## 💻 Tech Stack
- React.js (with Hooks)
- HTML5/CSS3
- Functional component design
- No external state libraries

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/pandu-66/revolving-tic-tac-toe.git
cd revolving-tic-tac-toe
npm install
npm run dev
```

---

## 🧠 How the Logic Works

- **Dynamic Turns**: Supports variable number of players (`X`, `O`, `△`, etc.)
- **Revolving Board**: Keeps a track of all move indices; deletes the oldest after `players.length * 3` moves.
- **Win Check**: Scans only for 3-in-a-row horizontally, vertically, and diagonally.

---

## 📄 License

MIT License

---

## 🙌 Author

- **Ejjineni Panduraj**
- GitHub: [@pandu-66](https://github.com/pandu-66)

