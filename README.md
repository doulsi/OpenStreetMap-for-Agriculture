# OpenAgriMap France 🌾🇫🇷
> **L'OpenStreetMap pour l'Agriculture et la Vigilance Écologique en France**

Plateforme cartographique collaborative et ouverte dédiée au monde agricole et aux jardiniers. Elle unifie les données pédologiques (sols), la biodiversité fonctionnelle (pollinisateurs, oiseaux, auxiliaires), le cadastre cultural (RPG, assolement, variétés) et un **moteur d'alerte sanitaire participatif de proximité** (*"Le mildiou a été signalé par 17 jardiniers dans un rayon de 30 km"*).

---

## 🗺️ Les 4 Couches Fondatrices & Sources Open Data

### 1. 🌱 Couche Sols & Pédologie
- **ISRIC SoilGrids 2.0 (API REST)** : pH H₂O, granulométrie (argile, limon, sable), carbone organique et densité apparente à résolution 250m.
- **INRAE / GIS Sol (RMQS & BDAT)** : Réseau de Mesure de la Qualité des Sols et Banque d'analyses de terre.
- **Hub'Eau / BRGM** : Suivi piézométrique des nappes souterraines et conductivité pour évaluer la capacité de drainage.
- *Fonctionnalité clé dans l'app* : Sondeur de sol instantané interrogeant l'API REST en direct au clic sur n'importe quel point du territoire français.

### 2. 🐝 Couche Biodiversité & Auxiliaires
- **GBIF France / INPN MNHN** : Occurrences géoréférencées pour les oiseaux régulateurs (*Aves*, ex: rapaces chasseurs de rongeurs) et insectes utiles.
- **Spipoll (Vigie-Nature / MNHN)** : Suivi photographique participatif des insectes pollinisateurs (*Apis mellifera*, *Bombus*, syrphes, osmies).
- **OpenObs (SINP / OFB)** : Inventaire national du patrimoine naturel.

### 3. 🌾 Couche Cultures & Parcelles (RPG)
- **IGN Géoplateforme & ASP** : Registre Parcellaire Graphique (RPG) millésimé (2015–2024+) sous Licence Ouverte 2.0.
- **ApiCarto IGN** : Requêtage ponctuel et spatial des parcelles PAC sans téléchargement lourd.
- **GEVES & SEMAE** : Catalogue officiel des espèces et variétés végétales cultivées en France.
- *Fonctionnalité clé dans l'app* : Historique d'assolement pluriannuel et rotation culturale affichée par parcelle.

### 4. 🦠 Couche Vigilance Sanitaire & Épidémies (Crowdsourced OSM Model)
- **Bulletins de Santé du Végétal (BSV / DRAAF)** : Archives et bulletins hebdomadaires de surveillance phytosanitaire.
- **Météo-France Open Data** : Indicateurs hygrométriques et thermiques alimentant les modèles de risque mildiou et rouille.
- **Moteur d'Alerte Communautaire OpenAgriMap** :
  - **Bannière dynamique de proximité** : *"Le mildiou a été signalé par 17 jardiniers dans un rayon de 30 km."*
  - **Sélecteur de rayon interactif** : de 5 km à 80 km avec recalcul spatial temps réel (Turf.js).
  - **Formulaire de signalement citoyen** : Ajout d'observations (mildiou, rouille, doryphores, pucerons) avec mise à jour instantanée du cercle de veille et du flux d'alerte.

---

## 🚀 Démarrage Rapide

### Prérequis
Aucune installation complexe n'est requise. Le projet utilise des technologies web natives (HTML5, Vanilla CSS, Vanilla JavaScript, Leaflet, Turf.js).

### Lancer l'application
Ouvrez un terminal dans le répertoire du projet et lancez un serveur local HTTP :

```bash
# Avec Python :
python -m http.server 8085

# Ou avec Node.js :
npx serve -l 8085 .
```

Puis ouvrez votre navigateur sur : **[http://localhost:8085](http://localhost:8085)**

---

## 📂 Structure du Projet

```text
├── index.html               # Interface utilisateur principale
├── css/
│   └── styles.css           # Design system moderne (Thème sombre émeraude, glassmorphism)
├── js/
│   ├── app.js               # Orchestration Leaflet, gestionnaire d'événements & UI
│   ├── data-sources.js      # Annuaire des sources Open Data & métadonnées
│   ├── services.js          # Clients API (ISRIC SoilGrids, IGN Géocodage)
│   ├── outbreak-engine.js   # Moteur spatial de calcul de proximité (Turf.js)
│   └── mock-parcels.js      # Jeux de données d'amorçage géoréférencés
└── README.md                # Documentation générale
```

---

## 🗺️ Fonds de Carte 100% Libres & Gratuits (Zéro Clé API)

L'application n'utilise aucun service commercial propriétaire et intègre 4 fonds cartographiques entièrement libres :
1. **OpenStreetMap France (`osmfr`)** : `https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png`
   - Hébergé par l'association OpenStreetMap France, style de rendu adapté à la toponymie et aux terroirs français.
2. **OpenTopoMap (`opentopo`)** : `https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png`
   - Affiche les courbes de niveau, le relief SRTM et la végétation, indispensable pour l'analyse des écoulements et des versants agricoles.
3. **IGN Géoplateforme Orthophoto (`ign`)** : `https://data.geopf.fr/wmts`
   - Imagerie satellite et aérienne haute résolution de la France, accessible gratuitement sous Licence Ouverte 2.0.
4. **OpenStreetMap Standard (`osm`)** : `https://tile.openstreetmap.org/{z}/{x}/{y}.png`
   - Le fond mondial officiel de la fondation OpenStreetMap.

---

## 📜 Licences des données
- **Fonds de carte** : OpenStreetMap (ODbL), OpenTopoMap (CC-BY-SA), IGN (Licence Ouverte 2.0)
- **ISRIC SoilGrids** : CC-BY 4.0
- **IGN & RPG** : Licence Ouverte 2.0 (Etalab)
- **GBIF / INPN** : CC-BY 4.0 / Licence Ouverte SINP
- **Données participatives OpenAgriMap** : Open Database License (ODbL)

