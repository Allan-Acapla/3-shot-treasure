# 🏴‍☠️ 3 Shot Treasure

A gamified affiliate landing page built as an interactive treasure chest experience. Players get **3 chances** to open chests and discover a casino welcome bonus offer.

---

## How the Game Works

1. **Welcome Modal** — On load, a modal greets the player and explains the game: you have 3 shots to open treasure chests.
2. **The Board** — A 3×3 grid of 9 locked treasure chests is displayed inside a premium casino-style frame.
3. **Pick a Chest** — Click any closed chest to open it. Each click counts as one of your 3 shots:
   - **Shot 1** → Chest opens empty. A "Try Again" modal appears.
   - **Shot 2** → Chest opens with gold — you've "found" a welcome bonus. Another modal confirms.
   - **Shot 3** → Chest opens with the jackpot 🎉 — the full offer (2,500 Reward Credits + $10 Sign-Up + 100% Deposit Match up to $1,000) is revealed.
4. **Claim** — After Shot 3, a **CLAIM** button appears. Clicking it redirects the player to the partner casino offer page.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS (CDN) |
| Routing | React Router v7 |
| Deployment | Vercel |

---

## Run Locally

**Prerequisites:** Node.js v18+

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
3-shot-treasure/
├── components/
│   ├── pages/           # Legal pages (Privacy, Terms, About, Contact)
│   ├── Chest.tsx        # Individual chest with animations
│   ├── ChestGrid.tsx    # 3x3 grid of chests
│   ├── GameFrame.tsx    # Casino-style decorative frame
│   ├── GameLayout.tsx   # Main game page & state machine
│   ├── HeaderLogo.tsx   # "3 SHOT Treasure" logo
│   ├── LegalLayout.tsx  # Shared layout for legal pages
│   ├── Modal.tsx        # Game modals (welcome, results, claim)
│   └── Footer.tsx       # Footer with legal disclaimers
├── App.tsx              # Router setup
├── index.tsx            # React entry point
├── types.ts             # Shared TypeScript types
├── vercel.json          # Vercel deployment config
└── vite.config.ts       # Vite build config
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Main game |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/about` | About Us |
| `/contact` | Contact page |

---

## Responsible Gaming

This site is an independent informational portal and not a gambling operator. All users must be **21+**. If you or someone you know has a gambling problem, call **1-800-GAMBLER**.
