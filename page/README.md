# DARK RELEASE V3 — «Electric Blue»

Ίδιο site με το V2, **άλλα χρώματα και φόντο**, παρμένα από το JPEG που έδωσες (`DARK RELEASE V3.jpg`
και το μεγάλο export `5200×2230.jpg`). Άνοιξε το `index.html` — δουλεύει με διπλό κλικ.

## Background — τελική ρύθμιση
- Χρησιμοποιείται το **`5200×2230.jpg`** (1,68 MB) ως `assets/images/bg/v3-bg-5200.jpg`.
- Με `background-size: cover` **σμικρύνεται πάντα** — ακόμα και σε 4K (χρειάζεται 5041×2160 και το αρχείο έχει 5200×2230). Άρα **δεν θολώνει πουθενά**.
- Μπαίνει σε δύο σημεία: `body` (πίσω από όλη τη σελίδα, σκούρο gradient 62–92%) και στη ζώνη των κατηγοριών (πιο ανοιχτό πέπλο 55–70%).
- Το πρώτο, μικρό (`assets/images/bg/v3-bg.jpg`, 2000×857) μένει ως εφεδρικό — δεν χρησιμοποιείται.

## Χρώματα (μετρημένα από το JPEG)
| Ρόλος | Χρώμα | Από το JPEG |
|---|---|---|
| Βάθος σελίδας | `#000308` | `#000000 / #010013 / #010026` |
| Επιφάνειες / κάρτες | `#03080F`, `#05101F` | `#010026` |
| Γραμμές | `#0B1626`, `#10233C` | `#01125D` |
| **Accent** | `#0B6BE0` | `#024AA4` → `#027AE3` |
| Hover / λάμψη | `#2E9BFF` | `#027AE3` |
| Neon λεπτομέρειες | `#02B4FC` | κορυφή λάμψης `#02B4FC` |

## Τι άλλαξε σε σχέση με το V2
- Ξεχωριστό αρχείο **`assets/css/v3-blue.css`** (φορτώνεται μετά το `dark2.css`) — μόνο χρώμα/φόντο.
- Κάρτες προϊόντων: σκούρο ναυτικό σώμα με λευκό πλακίδιο πίσω από τη φωτογραφία (στο V2 ήταν ολόλευκες).
- Κουμπιά / κουκκίδες / badges με μπλε gradient + απαλή λάμψη, neon λεπτομέρειες.
- Δομή, κείμενα, μεγέθη, καρουζέλ, panels, κατηγορίες: **ίδια με το V2**.

## Δομή φακέλου
```
DARK RELEASE V3/
├─ index.html                      ← η αρχική
├─ 5200×2230.jpg                   ← το μεγάλο export σου (πηγή του background)
├─ DARK RELEASE V3.jpg             ← το πρώτο JPEG (πηγή χρωμάτων)
├─ assets/css/v3-blue.css          ← ΕΔΩ αλλάζεις χρώματα/φόντο
├─ assets/css/dark2.css            ← η δομή/σκούρο του V2
├─ assets/js/dark2.js              ← καρουζέλ, panels, mobile menu
├─ assets/images/bg/v3-bg-5200.jpg ← ΤΟ BACKGROUND
├─ assets/images/bg/v3-bg.jpg      ← εφεδρικό (2000×857)
├─ screenshots/                    ← v3_5200_top, v3_5200_cats_2560, 01-desktop-full, 02-mobile-part1-3
└─ README.md
```

## Σημειώσεις
- Για δοκιμές χρωμάτων αλλάζεις **μόνο** το `v3-blue.css`.
- Το λογότυπο είναι 128×55 px — για καθαρή εμφάνιση θέλει μεγαλύτερο export.
- Η 3η μπάντα είναι ακόμα διπλότυπο της 1ης, όπως στο V2.
- Οι άλλες 24 σελίδες (`about.html`, `services.html`, …) παραμένουν όπως στο V2 (ανοιχτό template).
- `index-2.html` / `index-3.html` = οι εναλλακτικές αρχικές του template (ανοιχτές).


---

## ΤΥΠΟΓΡΑΦΙΑ — UBUNTU (όλα τα κείμενα)
- Τοπικά αρχεία: `assets/fonts/ubuntu/` — 24 woff2 (greek + latin subsets) + `ubuntu.css` με @font-face. **Χωρίς Google / χωρίς internet**.
- Overrides: `assets/css/v3-fonts.css` (φορτώνεται τελευταίο).

| Ζητούμενο βάρος | Ubuntu face |
|---|---|
| 300 light | Ubuntu Light |
| 400 regular | Ubuntu Regular |
| 500 medium | Ubuntu Medium |
| 600 semibold | Ubuntu Medium (alias) — η οικογένεια δεν έχει 600 |
| 700 bold | Ubuntu Bold |
| 800 | Ubuntu Bold (alias) |

- Τα εικονίδια (themify / flaticon) **δεν** άλλαξαν γραμματοσειρά.
- Η οικογένεια **Ubuntu Condensed** υπάρχει μόνο σε regular· δεν χρησιμοποιήθηκε ώστε να μη δημιουργηθεί ψεύτικο bold στους τίτλους.
- Διορθώθηκε και το **πλάτος container**: το template ήταν Bootstrap 3 (1170px), τώρα όλα τα sections είναι **1240px** και ευθυγραμμίζονται με το header.
