# Salon AURA – Beauty Salon Website

Salon AURA to nowoczesna aplikacja webowa prezentująca ofertę salonu kosmetycznego oraz umożliwiająca rezerwację wizyt online. Projekt został stworzony jako aplikacja typu full-stack z wykorzystaniem Node.js oraz Express po stronie serwera oraz HTML, CSS i JavaScript po stronie klienta.

Strona została zaprojektowana w stylu premium, z naciskiem na estetykę, prostotę obsługi oraz doświadczenie użytkownika.

## Gotowy link
https://salon-aura.onrender.com

---
## Wykonawca

Bohdana Haiduk – klasa 4D  
---

## Demo

Aplikacja działa lokalnie po uruchomieniu serwera:

```

[http://localhost:3000](http://localhost:3000)

```

---

## Funkcjonalności

- Strona główna prezentująca salon i ofertę  
- Podstrona usług z możliwością przejścia do rezerwacji  
- Formularz rezerwacji wizyty  
- Obsługa formularza bez przeładowania strony (Fetch API)  
- Powiadomienie o zapisanej rezerwacji (toast notification)  
- Strona klientów z tabelą danych  
- Responsywny układ strony  
- Nowoczesny interfejs użytkownika  

---

## Technologie

### Backend
- Node.js  
- Express.js  

### Frontend
- HTML5  
- CSS3  
- JavaScript (Fetch API)  

### Inne
- JSON (package.json)  

---

## Struktura projektu

```

beauty-salon/
├── server.js
├── package.json
├── public/
│   ├── style.css
│   ├── script.js
│   ├── images/
└── views/
├── index.html
├── services.html
├── booking.html
├── clients.html

```

---

## Instalacja i uruchomienie

1. Sklonuj repozytorium:
```

git clone <repo-url>

```

2. Przejdź do folderu projektu:
```

cd beauty-salon

```

3. Zainstaluj zależności:
```

npm install

```

4. Uruchom aplikację:
```

npm start

```

5. Otwórz przeglądarkę:
```

[http://localhost:3000](http://localhost:3000)

```

---

## Jak działa rezerwacja

Formularz rezerwacji działa asynchronicznie:
- dane są wysyłane do serwera za pomocą Fetch API  
- strona nie przeładowuje się  
- pojawia się komunikat o zapisaniu rezerwacji  
- dane są logowane w konsoli serwera  

---

## Możliwe rozszerzenia

- integracja z bazą danych (MongoDB, MySQL)  
- system logowania użytkowników  
- panel administratora  
- kalendarz wizyt  
- powiadomienia email lub SMS  

---

## Autor

Projekt wykonany jako projekt szkolny.

---

## Status

Projekt ukończony w podstawowej wersji i gotowy do dalszej rozbudowy.
```
