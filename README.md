# Rotex HPSU Schema Card für Home Assistant

Eine benutzerdefinierte Lovelace-Karte (Custom Card) für Home Assistant zur dynamischen Visualisierung des Anlagenschemas einer **Rotex HPSU** Wärmepumpe.

![Vorschau](Rotex_Dashboard.png)

## 🌟 Features
* **Dynamische Ansicht:** Interaktives SVG-Anlagenschema für die Rotex HPSU.
* **HACS-Integration:** Einfache Installation und automatische Updates über HACS.
* **Kein Caching-Problem:** Automatisches Neuladen des Schemas für immer aktuelle Daten.

---

## 📋 Voraussetzungen

Damit die Karte das Schema anzeigen kann, muss die Datei `hpsu-schema.html` auf deinem Home-Assistant-System im `www`-Ordner liegen:

* **Speicherort:** `/config/www/hpsu-schema.html`
* **Erreichbarkeit:** Über den Webserver unter `/local/hpsu-schema.html`

> **Hinweis:** Falls der Ordner `www` in deinem `/config/`-Verzeichnis noch nicht existiert, erstelle ihn einfach manuell (z. B. über den *Studio Code Server*, *File Editor* oder via *Samba Share*).

---

## 🚀 Schnellinstallation

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Trunks1982&repository=hpsu-schema-card&category=dashboard)

1. Klicke auf den Button oben (My Home Assistant). Beim ersten Mal gibst du die Adresse deiner HA-Instanz ein.
2. Bestätige **Herunterladen** in HACS.
3. Lade die Oberfläche neu (Strg+F5).
4. Erstelle ein neues Dashboard. Dann klicke auf Dashboard bearbeiten und stelle das Layout auf Panel um. Wenn dies nicht funktioniert lösche vorher alle Abschnitte oder Kacheln die sich auf dem Dashboard befinden. Jetzt solltest du das Layout ändern können. Jetzt füge eine neue karte hinzu. Suche nach der Karte "Rotex HPSU Schema-Karte", klicke drauf und speicher Sie.



## 📦 Installation über HACS

1. Öffne **HACS** in deinem Home Assistant.
2. Gehe auf **Dashboard** (oder *Frontend*).
3. Klicke oben rechts auf die drei Punkte (⋮) und wähle **Benutzerdefinierte Repositories**.
4. Trage folgende Daten ein:
   * **Repository:** `https://github.com/Trunks1982/hpsu-schema-card`
   * **Typ / Kategorie:** `Dashboard`
5. Klicke auf **Hinzufügen**.
6. Suche in HACS nach **Rotex HPSU Schema Card** und klicke unten rechts auf **Herunterladen**.
7. Lade die Benutzeroberfläche neu, wenn Home Assistant dich dazu auffordert.

---

## ⚙️ Nutzung im Dashboard

Erstelle ein neues Dashboard. Dann klicke auf Dashboard bearbeiten und stelle das Layout auf Panel um. Wenn dies nicht funktioniert lösche vorher alle Abschnitte oder Kacheln die sich auf dem Dashboard befinden. Jetzt solltest du das Layout ändern können. Jetzt füge eine neue karte hinzu. Suche nach der Karte "Rotex HPSU Schema-Karte", klicke drauf und speicher Sie.
