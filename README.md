# Maliris — Dark Release V4

Στατικό site (HTML/CSS/JS, χωρίς server-side). Άνοιγμα: διπλό κλικ στο `index.html`.

## Δομή
- `index.html` — αρχική (hero καρουζέλ, 3 μπάντες, κατηγορίες, mega-menus)
- `category.html` — κατηγορία (hero φωτογραφία, φίλτρα, λίστα προϊόντων)
- `product.html` — σελίδα προϊόντος
- `page/` — 25 εσωτερικές σελίδες (about, contact, blog, projects, services, …)
- `assets/` — css, js, fonts (Ubuntu τοπικά), images

## Σημειώσεις
- Γραμματοσειρά: Ubuntu (τοπικά, `assets/fonts/ubuntu`)
- Σκούρο θέμα: `assets/css/dark2.css` + `assets/css/v3-blue.css` (ισχύει στο `index`, `category`, `product`)
- Οι σελίδες στο `page/` φορτώνουν ακόμη το αρχικό template CSS (επόμενη φάση: πέρασμα dark theme)
- Εικόνες κατηγοριών που λείπουν: `ergaleia.jpg`, `kinoumena.jpg`, `xronismos.jpg` (`assets/img/shop/categories/`)
