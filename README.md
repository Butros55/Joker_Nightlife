# Joker Nightlife

[![React Native](https://img.shields.io/badge/React_Native-0.74-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.4-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Joker Nightlife** ist eine mobile App für die Joker Nightlife Diskothek in Lingen: eine **React Native + Expo App** mit **Firebase Backend**.  
Die App bietet Clubgästen eine verbesserte Party-Erfahrung mit Coupons, Event-Benachrichtigungen, VIP-Buchungen und mehr.

> **Hinweis:** Die App wird bald im AppStore und PlayStore verfügbar sein.

---

## Inhalt

- [Überblick](#überblick)
- [Features](#features)
- [Projektstruktur](#projektstruktur)
- [Voraussetzungen](#voraussetzungen)
- [Quickstart](#quickstart)
- [NPM Scripts](#npm-scripts)
- [Wie es funktioniert](#wie-es-funktioniert)
- [Nutzung](#nutzung)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Autoren](#autoren)
- [License](#license)

---

## Überblick

- **Frontend:** React Native 0.74 + Expo SDK 51 mit React Navigation
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Styling:** Styled Components + React Native Elements UI
- **Plattformen:** iOS, Android, Web

## Features

- **Login & Authentifizierung** – Anmeldung per E-Mail oder Apple Sign-In mit Firebase Auth
- **Home Dashboard** – Personalisierte Begrüßung mit Karussell-Ansicht der wichtigsten Inhalte
- **Events** – Übersicht aller kommenden Veranstaltungen im Club
- **Coupons** – Digitale Gutscheine für Getränke und Angebote
- **VIP-Buchungen** – VIP-Bereiche direkt über die App reservieren
- **Bildergalerie** – Fotos von vergangenen Events durchstöbern
- **Muttizettel** – Digitales Ausfüllen und Drucken des Muttizettels für Minderjährige
- **Onboarding** – Einführung für neue Nutzer mit animiertem Walkthrough
- **Dark/Light Mode** – Anpassbares Theme für die App

## Projektstruktur

```text
.
├─ App.js               # Haupt-Einstiegspunkt der App
├─ screens/             # Alle Screen-Komponenten
│  ├─ Home.js           # Home-Dashboard
│  ├─ Login.js          # Login & Registrierung
│  ├─ Coupons.js        # Coupon-Übersicht
│  ├─ Pictures.js       # Bildergalerie
│  ├─ VIP.js            # VIP-Bereich
│  └─ settings/         # Einstellungen-Screens
├─ components/          # Wiederverwendbare Komponenten
│  ├─ firebaseConfig.js # Firebase-Konfiguration
│  ├─ carousel.js       # Karussell-Komponente
│  └─ asyncStorage.js   # Lokale Datenspeicherung
├─ navigators/          # Navigation (Tabs, Drawer)
├─ context/             # React Context (Theme, User Data)
├─ Items/               # Daten-Listen und Konfigurationen
├─ assets/              # Bilder, Videos, Fonts, Animationen
├─ theme/               # Theme-Konfiguration
├─ app.json             # Expo-Konfiguration
└─ package.json         # Dependencies und Scripts
```

## Voraussetzungen

- **Node.js** (empfohlen: v18 oder neuer)
- **npm** oder **yarn**
- **Expo CLI** (wird automatisch mit npx verwendet)
- **Expo Go App** auf deinem Smartphone (für die Entwicklung)

## Quickstart

### 1. Repository klonen

```bash
git clone https://github.com/Butros55/Joker_Nightlife.git
cd Joker_Nightlife
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. App starten

```bash
npm start
```

### 4. App öffnen

- **Smartphone:** Scanne den QR-Code mit der Expo Go App
- **Android Emulator:** Drücke `a` im Terminal
- **iOS Simulator:** Drücke `i` im Terminal (nur macOS)
- **Web Browser:** Drücke `w` im Terminal

---

## NPM Scripts

| Script | Beschreibung |
|--------|--------------|
| `npm start` | Metro Bundler starten (Expo) |
| `npm run android` | App auf Android starten |
| `npm run ios` | App auf iOS starten (nur macOS) |
| `npm run web` | App im Browser starten |

## Wie es funktioniert

1. **Registrierung/Login** – Nutzer erstellen ein Konto mit E-Mail oder nutzen Apple Sign-In
2. **E-Mail-Verifizierung** – Nach der Registrierung wird eine Verifizierungsmail gesendet
3. **Profil einrichten** – Vorname, Nachname und optionaler Zweitername werden gespeichert
4. **Features nutzen** – Zugriff auf Events, Coupons, VIP-Buchungen und Bildergalerie
5. **Daten** – Nutzerdaten werden sicher in Firebase Firestore gespeichert

## Nutzung

| Schritt | Aktion |
|---------|--------|
| **Start** | App öffnen → Login oder Registrierung |
| **Home** | Übersicht mit personalisierten Inhalten und Event-Karussell |
| **Events** | Kommende Events ansehen und Benachrichtigungen erhalten |
| **Coupons** | Verfügbare Gutscheine einlösen |
| **VIP** | VIP-Bereich buchen und Details einsehen |
| **Bilder** | Galerie vergangener Events durchstöbern |
| **Einstellungen** | Profil bearbeiten, Benachrichtigungen, Impressum |

## Roadmap

- [x] **Screens**
  - [x] Login Screen
  - [x] Home Screen
  - [x] Coupon Screen
  - [x] Event Screen
  - [ ] News Screen
  - [x] Image Screen
- [x] **Login Funktionalität**
  - [x] Login mit E-Mail
  - [x] Login mit Apple
  - [ ] Login mit Facebook
  - [ ] Login mit Google
- [x] **Muttizettel** – Druck-Funktionalität
- [ ] **Facebook Integration** – News, Events und Bilder von Facebook laden
- [ ] **Neues Design** – Überarbeitetes App-Design

Siehe die [offenen Issues](https://github.com/Butros55/Joker_Nightlife/issues) für eine vollständige Liste der geplanten Features.

## Contributing

Wenn du einen Vorschlag hast, der die App verbessern würde:

1. Fork das Projekt
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

Vergiss nicht, dem Projekt einen Stern zu geben! ⭐

## Autoren

- **Maciej**
- **Leonie**
- **Alina**
- **Geret Wessling**

📌 **Projekt-Link:** [https://github.com/Butros55/Joker_Nightlife](https://github.com/Butros55/Joker_Nightlife)

---

## License

Für dieses Projekt ist aktuell keine separate Lizenzdatei hinterlegt.
