/**
 * OpenAgriMap France - Seeded Spatial Datasets (Couverture Nationale Complète)
 * - Parcelles représentatives réparties sur tous les bassins agricoles de France
 * - Plus de 160 signalements de mildiou, rouille et ravageurs géoréférencés
 */

const DEFAULT_CENTER = {
  lat: 47.2600,
  lng: -0.0760,
  zoom: 10
};

const CROP_PARCELS = [
  {
    "id": "RPG-NAT-2026-0001",
    "name": "Parcelle Les Hauts de Dampierre",
    "farm": "Domaine de la Chevalerie",
    "region": "Pays de la Loire",
    "currentCrop": "Vigne AOP Saumur-Champigny",
    "cropCode": "VRC",
    "variety": "Cabernet Franc (Sélection massale)",
    "areaHa": 4.8,
    "organicCertified": false,
    "coords": [
      [
        47.245,
        -0.025
      ],
      [
        47.255,
        -0.015
      ],
      [
        47.25,
        0.005
      ],
      [
        47.238,
        -0.005
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne enherbée 1 rang sur 2",
        "status": "En cours"
      },
      {
        "year": 2025,
        "crop": "Vigne (Couvert féverole / seigle)",
        "yield": "42 hL/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne (Couvert trèfle)",
        "yield": "38 hL/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0002",
    "name": "Le Grand Clos Maraîcher",
    "farm": "Ferme Bio du Val de Loire",
    "region": "Pays de la Loire",
    "currentCrop": "Légumes plein champ (Solanacées)",
    "cropCode": "MLG",
    "variety": "Tomate Coeur de Boeuf & Noire de Crimée",
    "areaHa": 2.1,
    "organicCertified": true,
    "coords": [
      [
        47.262,
        -0.082
      ],
      [
        47.268,
        -0.075
      ],
      [
        47.264,
        -0.065
      ],
      [
        47.258,
        -0.072
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Tomates & Aubergines",
        "status": "Sensible mildiou"
      },
      {
        "year": 2025,
        "crop": "Pois chiches & Féveroles",
        "status": "Fixation azote"
      },
      {
        "year": 2024,
        "crop": "Choux d hiver",
        "yield": "28 t/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0003",
    "name": "Coteau Sud de Saint-Émilion",
    "farm": "Château Grand Terroir",
    "region": "Nouvelle-Aquitaine",
    "currentCrop": "Vigne AOP Saint-Émilion Grand Cru",
    "cropCode": "VRC",
    "variety": "Merlot (80%) / Cabernet Franc (20%)",
    "areaHa": 9.4,
    "organicCertified": false,
    "coords": [
      [
        44.885,
        -0.165
      ],
      [
        44.905,
        -0.145
      ],
      [
        44.895,
        -0.125
      ],
      [
        44.875,
        -0.145
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne avec couverts végétaux",
        "status": "Floraison"
      },
      {
        "year": 2025,
        "crop": "Vigne (Couvert Avoine / Trèfle)",
        "yield": "46 hL/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne enherbée",
        "yield": "41 hL/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0004",
    "name": "Plat de Graves Médocaines",
    "farm": "Domaine de Margaux",
    "region": "Nouvelle-Aquitaine",
    "currentCrop": "Vigne AOP Margaux / Médoc",
    "cropCode": "VRC",
    "variety": "Cabernet Sauvignon",
    "areaHa": 14.2,
    "organicCertified": true,
    "coords": [
      [
        45.035,
        -0.685
      ],
      [
        45.055,
        -0.665
      ],
      [
        45.045,
        -0.645
      ],
      [
        45.025,
        -0.665
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne travaillée sous le rang",
        "status": "Nouaison"
      },
      {
        "year": 2025,
        "crop": "Vigne (Couvert seigle)",
        "yield": "44 hL/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne",
        "yield": "40 hL/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0005",
    "name": "Clos Légumier de Rennes",
    "farm": "Maraîchage d Ille",
    "region": "Bretagne",
    "currentCrop": "Pommes de terre primeur & Choux",
    "cropCode": "PTT",
    "variety": "Charlotte & Chou de Lorient",
    "areaHa": 5.8,
    "organicCertified": false,
    "coords": [
      [
        48.09,
        -1.64
      ],
      [
        48.11,
        -1.62
      ],
      [
        48.1,
        -1.595
      ],
      [
        48.08,
        -1.615
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Pommes de terre primeur",
        "status": "Tubérisation"
      },
      {
        "year": 2025,
        "crop": "Engrais vert (Seigle / Vesce)",
        "status": "Enfouissement"
      },
      {
        "year": 2024,
        "crop": "Carottes plein champ",
        "yield": "35 t/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0006",
    "name": "Ceinture Dorée du Léon",
    "farm": "GAEC des Légumes Côtiers",
    "region": "Bretagne",
    "currentCrop": "Artichauts Camus & Échalotes",
    "cropCode": "MLG",
    "variety": "Artichaut Camus de Bretagne",
    "areaHa": 12.0,
    "organicCertified": true,
    "coords": [
      [
        48.61,
        -3.98
      ],
      [
        48.635,
        -3.955
      ],
      [
        48.62,
        -3.93
      ],
      [
        48.595,
        -3.95
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Artichauts plein champ",
        "status": "Récolte en cours"
      },
      {
        "year": 2025,
        "crop": "Choux-fleurs d hiver",
        "yield": "18 000 têtes/ha"
      },
      {
        "year": 2024,
        "crop": "Échalotes traditionnelles",
        "yield": "22 t/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0007",
    "name": "La Grande Pièce de Beauce",
    "farm": "Exploitation Céréalière de Chartres",
    "region": "Centre-Val de Loire",
    "currentCrop": "Blé tendre d hiver",
    "cropCode": "BTH",
    "variety": "Rubisko (Catalogue GEVES)",
    "areaHa": 42.0,
    "organicCertified": false,
    "coords": [
      [
        48.42,
        1.51
      ],
      [
        48.445,
        1.54
      ],
      [
        48.435,
        1.575
      ],
      [
        48.405,
        1.545
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Blé tendre d hiver",
        "status": "Épiaison"
      },
      {
        "year": 2025,
        "crop": "Colza d hiver (Architect)",
        "yield": "38 q/ha"
      },
      {
        "year": 2024,
        "crop": "Orge de printemps",
        "yield": "72 q/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0008",
    "name": "Terre à Pommes de Terre de Flandre",
    "farm": "Ferme d Artois",
    "region": "Hauts-de-France",
    "currentCrop": "Pommes de terre fécule & Bintje",
    "cropCode": "PTT",
    "variety": "Bintje & Innovator",
    "areaHa": 18.4,
    "organicCertified": true,
    "coords": [
      [
        50.42,
        2.87
      ],
      [
        50.445,
        2.9
      ],
      [
        50.435,
        2.93
      ],
      [
        50.41,
        2.9
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Pommes de terre de conservation",
        "status": "Végétation dense"
      },
      {
        "year": 2025,
        "crop": "Blé d hiver",
        "yield": "88 q/ha"
      },
      {
        "year": 2024,
        "crop": "Betterave sucrière",
        "yield": "92 t/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0009",
    "name": "Coteau d Aÿ Champagne",
    "farm": "Vignoble de la Montagne de Reims",
    "region": "Grand Est",
    "currentCrop": "Vigne AOP Champagne",
    "cropCode": "VRC",
    "variety": "Chardonnay / Pinot Noir",
    "areaHa": 6.5,
    "organicCertified": false,
    "coords": [
      [
        49.04,
        4.0
      ],
      [
        49.06,
        4.025
      ],
      [
        49.05,
        4.05
      ],
      [
        49.03,
        4.025
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne AOP Champagne",
        "status": "Floraison"
      },
      {
        "year": 2025,
        "crop": "Vigne (Enherbement naturel)",
        "yield": "11 500 kg/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne",
        "yield": "10 800 kg/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0010",
    "name": "Climat Premier Cru de Beaune",
    "farm": "Domaine des Grands Climats",
    "region": "Bourgogne-Franche-Comté",
    "currentCrop": "Vigne AOP Bourgogne",
    "cropCode": "VRC",
    "variety": "Pinot Noir sélection fine",
    "areaHa": 4.2,
    "organicCertified": true,
    "coords": [
      [
        47.02,
        4.82
      ],
      [
        47.04,
        4.845
      ],
      [
        47.03,
        4.865
      ],
      [
        47.01,
        4.84
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne conduite en bio",
        "status": "Nouaison"
      },
      {
        "year": 2025,
        "crop": "Vigne (Labour cheval)",
        "yield": "38 hL/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne",
        "yield": "35 hL/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0011",
    "name": "Coteau Viticole de Riquewihr",
    "farm": "Domaine d Alsace",
    "region": "Grand Est",
    "currentCrop": "Vigne AOP Alsace Grand Cru",
    "cropCode": "VRC",
    "variety": "Riesling / Gewurztraminer",
    "areaHa": 5.1,
    "organicCertified": false,
    "coords": [
      [
        48.16,
        7.29
      ],
      [
        48.18,
        7.315
      ],
      [
        48.17,
        7.34
      ],
      [
        48.15,
        7.315
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Vigne en biodynamie",
        "status": "Floraison"
      },
      {
        "year": 2025,
        "crop": "Vigne",
        "yield": "48 hL/ha"
      },
      {
        "year": 2024,
        "crop": "Vigne",
        "yield": "45 hL/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0012",
    "name": "Les Terres Blanches de Villefranche",
    "farm": "GAEC du Lauragais",
    "region": "Occitanie",
    "currentCrop": "Tournesol oléique & Blé dur",
    "cropCode": "TRN",
    "variety": "Tournesol LG5478 & Blé dur Miradoux",
    "areaHa": 24.0,
    "organicCertified": true,
    "coords": [
      [
        43.39,
        1.71
      ],
      [
        43.415,
        1.735
      ],
      [
        43.4,
        1.765
      ],
      [
        43.375,
        1.74
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Tournesol oléique",
        "status": "6 feuilles"
      },
      {
        "year": 2025,
        "crop": "Blé dur (Miradoux)",
        "yield": "54 q/ha"
      },
      {
        "year": 2024,
        "crop": "Pois chiche de printemps",
        "yield": "22 q/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0013",
    "name": "Verger d Abricotiers de la Drôme",
    "farm": "Exploitation Fruitière Rhodanienne",
    "region": "Auvergne-Rhône-Alpes",
    "currentCrop": "Verger d abricotiers & Pêchers",
    "cropCode": "VRG",
    "variety": "Bergeron (Inscrit GEVES)",
    "areaHa": 7.5,
    "organicCertified": false,
    "coords": [
      [
        44.92,
        4.88
      ],
      [
        44.945,
        4.905
      ],
      [
        44.935,
        4.93
      ],
      [
        44.91,
        4.905
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Verger enherbé",
        "status": "Grossissement fruits"
      },
      {
        "year": 2025,
        "crop": "Verger abricots",
        "yield": "16 t/ha"
      },
      {
        "year": 2024,
        "crop": "Verger abricots",
        "yield": "14 t/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0014",
    "name": "Plateau de Lin Textile de Caux",
    "farm": "Coopérative Linière Normande",
    "region": "Normandie",
    "currentCrop": "Lin textile de printemps",
    "cropCode": "LIN",
    "variety": "Aretha & Bolchoï (GEVES)",
    "areaHa": 16.5,
    "organicCertified": true,
    "coords": [
      [
        49.63,
        0.83
      ],
      [
        49.655,
        0.855
      ],
      [
        49.645,
        0.88
      ],
      [
        49.62,
        0.855
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Lin textile",
        "status": "Floraison bleue"
      },
      {
        "year": 2025,
        "crop": "Blé d hiver",
        "yield": "86 q/ha"
      },
      {
        "year": 2024,
        "crop": "Colza d hiver",
        "yield": "39 q/ha"
      }
    ]
  },
  {
    "id": "RPG-NAT-2026-0015",
    "name": "La Sole de Blé de la Brie",
    "farm": "Ferme Céréalière Briarde",
    "region": "Île-de-France",
    "currentCrop": "Blé meunier de qualité",
    "cropCode": "BTH",
    "variety": "Chevignon (Catalogue GEVES)",
    "areaHa": 31.0,
    "organicCertified": false,
    "coords": [
      [
        48.93,
        2.86
      ],
      [
        48.955,
        2.89
      ],
      [
        48.945,
        2.915
      ],
      [
        48.92,
        2.885
      ]
    ],
    "history": [
      {
        "year": 2026,
        "crop": "Blé meunier d hiver",
        "status": "Gonflement"
      },
      {
        "year": 2025,
        "crop": "Betterave sucrière",
        "yield": "90 t/ha"
      },
      {
        "year": 2024,
        "crop": "Orge d hiver",
        "yield": "76 q/ha"
      }
    ]
  }
];

const INITIAL_OUTBREAK_REPORTS = [
  {
    "id": "rep-auto-1",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.089,
    "lng": -0.175,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-2",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.3236,
    "lng": 0.0966,
    "date": "Il y a 12h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-3",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 47.0907,
    "lng": -0.1998,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-4",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 47.1516,
    "lng": -0.0101,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-5",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 47.2921,
    "lng": 0.0601,
    "date": "Il y a 1h",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-6",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 47.2025,
    "lng": -0.2276,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-7",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 47.1148,
    "lng": 0.0769,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-8",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 47.273,
    "lng": 0.1322,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-9",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 47.3786,
    "lng": -0.0239,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-10",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 47.0965,
    "lng": -0.1957,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-11",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.2168,
    "lng": -0.0965,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-12",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 47.1554,
    "lng": -0.1785,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-13",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 47.2723,
    "lng": -0.1883,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-14",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 47.1591,
    "lng": -0.1533,
    "date": "Il y a 8h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-15",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 47.2244,
    "lng": -0.2669,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-16",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 47.316,
    "lng": -0.1219,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-17",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 47.1303,
    "lng": 0.0318,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-18",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 47.4191,
    "lng": -0.1263,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-19",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 47.0964,
    "lng": -0.3024,
    "date": "Il y a 16h",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-20",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 47.3768,
    "lng": -0.1149,
    "date": "Il y a 10h",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-21",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "low",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 47.2711,
    "lng": 0.1313,
    "date": "Il y a 5h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-22",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 47.3553,
    "lng": 0.0422,
    "date": "Il y a 3 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-23",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 44.7869,
    "lng": -0.4586,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-24",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 45.0043,
    "lng": -0.2366,
    "date": "Il y a 14h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-25",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 44.9492,
    "lng": -0.3928,
    "date": "Il y a 21h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-26",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 44.9456,
    "lng": -0.245,
    "date": "Il y a 15h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-27",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 44.7509,
    "lng": -0.0737,
    "date": "Il y a 11h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-28",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 45.0238,
    "lng": -0.0297,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-29",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 45.0709,
    "lng": -0.3873,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-30",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 45.0644,
    "lng": -0.1277,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-31",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 44.8736,
    "lng": -0.1645,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-32",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 44.7736,
    "lng": -0.3611,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-33",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 44.8128,
    "lng": -0.3631,
    "date": "Il y a 10h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-34",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 44.8124,
    "lng": -0.0616,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-35",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 44.8303,
    "lng": -0.2464,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-36",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 44.8175,
    "lng": -0.2519,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-37",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 44.9736,
    "lng": -0.3129,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-38",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 44.9793,
    "lng": 0.0021,
    "date": "Il y a 14h",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-39",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 45.0242,
    "lng": -0.4119,
    "date": "Il y a 2 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-40",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 44.8803,
    "lng": -0.3374,
    "date": "Il y a 2 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-41",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 44.7572,
    "lng": -0.1731,
    "date": "Il y a 6h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-42",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "medium",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 44.8744,
    "lng": -0.2482,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-43",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 47.9308,
    "lng": -1.7182,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-44",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 48.1683,
    "lng": -1.6759,
    "date": "Il y a 1 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-45",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.1385,
    "lng": -1.6514,
    "date": "Il y a 4 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-46",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.1403,
    "lng": -1.6687,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-47",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 47.9588,
    "lng": -1.8082,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-48",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.0754,
    "lng": -1.4757,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-49",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.153,
    "lng": -1.7055,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-50",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 48.2665,
    "lng": -1.8001,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-51",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.0725,
    "lng": -1.5945,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-52",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 47.9334,
    "lng": -1.6167,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-53",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 48.0067,
    "lng": -1.7733,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-54",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.0326,
    "lng": -1.6972,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-55",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 47.9328,
    "lng": -1.5305,
    "date": "Il y a 1 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-56",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 48.0252,
    "lng": -1.4985,
    "date": "Il y a 4 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-57",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.0314,
    "lng": -1.7973,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-58",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.1119,
    "lng": -1.7795,
    "date": "Il y a 7h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-59",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 48.2417,
    "lng": -1.898,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-60",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 47.9746,
    "lng": -1.6991,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-61",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.9486,
    "lng": -1.5014,
    "date": "Il y a 1 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-62",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.1414,
    "lng": -1.8248,
    "date": "Il y a 1 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-63",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "high",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.2616,
    "lng": -1.5397,
    "date": "Il y a 13h",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-64",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "low",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.1734,
    "lng": -1.7344,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-65",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.2486,
    "lng": -1.4605,
    "date": "Il y a 2 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-66",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 48.1999,
    "lng": -1.7438,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-67",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "medium",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 47.9805,
    "lng": -1.5814,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-68",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 47.9958,
    "lng": -1.4859,
    "date": "Il y a 3 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-69",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.2685,
    "lng": 1.345,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-70",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.3864,
    "lng": 1.4841,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-71",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 48.3015,
    "lng": 1.687,
    "date": "Il y a 23h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-72",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.2834,
    "lng": 1.4473,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-73",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 48.2863,
    "lng": 1.6798,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-74",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 48.2407,
    "lng": 1.6928,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-75",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 48.3857,
    "lng": 1.265,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-76",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 48.5054,
    "lng": 1.2923,
    "date": "Il y a 4 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-77",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 48.5068,
    "lng": 1.3931,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-78",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 48.3167,
    "lng": 1.5625,
    "date": "Il y a 2 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-79",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 48.4862,
    "lng": 1.3805,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-80",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 48.3241,
    "lng": 1.6229,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-81",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 48.4167,
    "lng": 1.5678,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-82",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 48.5035,
    "lng": 1.3719,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-83",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 48.2774,
    "lng": 1.706,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-84",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "high",
    "crop": "Céréales diverses",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.5626,
    "lng": 1.3037,
    "date": "Il y a 7h",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-85",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "high",
    "crop": "Céréales diverses",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 48.4222,
    "lng": 1.6731,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-86",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 48.4019,
    "lng": 1.3249,
    "date": "Il y a 4h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-87",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.3168,
    "lng": 1.6815,
    "date": "Il y a 5 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-88",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 48.3447,
    "lng": 1.6333,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-89",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 50.6256,
    "lng": 2.942,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-90",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 50.4236,
    "lng": 3.079,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-91",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 50.432,
    "lng": 3.0108,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-92",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 50.4956,
    "lng": 2.8008,
    "date": "Il y a 10h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-93",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 50.3678,
    "lng": 2.8207,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-94",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 50.3533,
    "lng": 2.9853,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-95",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 50.4167,
    "lng": 2.9187,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-96",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 50.4102,
    "lng": 3.0187,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-97",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 50.4417,
    "lng": 3.0948,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-98",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "high",
    "crop": "Céréales diverses",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 50.549,
    "lng": 2.9231,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-99",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 50.3592,
    "lng": 2.8928,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-100",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 50.5397,
    "lng": 3.0703,
    "date": "Il y a 4 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-101",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 50.2608,
    "lng": 2.847,
    "date": "Il y a 3 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-102",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 50.5042,
    "lng": 2.7397,
    "date": "Il y a 5 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-103",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "high",
    "crop": "Pommes de terre et aubergines",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 50.4041,
    "lng": 2.7731,
    "date": "Il y a 3 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-104",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 50.5458,
    "lng": 3.046,
    "date": "Il y a 2 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-105",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 50.5446,
    "lng": 2.7029,
    "date": "Il y a 3 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-106",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 50.5466,
    "lng": 3.0978,
    "date": "Il y a 2 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-107",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 50.308,
    "lng": 2.9746,
    "date": "Il y a 2 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-108",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 50.3238,
    "lng": 2.9472,
    "date": "Il y a 1 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-109",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "high",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 50.4799,
    "lng": 3.0887,
    "date": "Il y a 4 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-110",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "medium",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 50.485,
    "lng": 3.0455,
    "date": "Il y a 2 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-111",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "high",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 50.5626,
    "lng": 2.929,
    "date": "Il y a 13h",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-112",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 50.2862,
    "lng": 2.9649,
    "date": "Il y a 6h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-113",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "low",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 50.4247,
    "lng": 2.8394,
    "date": "Il y a 5 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-114",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 48.9334,
    "lng": 4.0296,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-115",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 49.1489,
    "lng": 4.0045,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-116",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 49.1766,
    "lng": 4.1655,
    "date": "Il y a 12h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-117",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 49.1402,
    "lng": 4.0507,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-118",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 49.048,
    "lng": 3.943,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-119",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.9925,
    "lng": 4.1873,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-120",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 49.056,
    "lng": 3.8841,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-121",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 49.0699,
    "lng": 3.9057,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-122",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 49.0313,
    "lng": 3.8076,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-123",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.9802,
    "lng": 4.0559,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-124",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 49.0232,
    "lng": 4.1282,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-125",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 48.9675,
    "lng": 3.9106,
    "date": "Il y a 16h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-126",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 48.8978,
    "lng": 4.0379,
    "date": "Il y a 4 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-127",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 48.9366,
    "lng": 4.0121,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-128",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 49.1764,
    "lng": 3.9303,
    "date": "Il y a 3 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-129",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 49.129,
    "lng": 3.8557,
    "date": "Il y a 14h",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-130",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 49.1024,
    "lng": 4.1312,
    "date": "Il y a 1 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-131",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "high",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 49.0419,
    "lng": 3.9499,
    "date": "Il y a 16h",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-132",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.146,
    "lng": 4.7963,
    "date": "Il y a 10h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-133",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 46.9046,
    "lng": 4.9769,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-134",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 47.0509,
    "lng": 4.8031,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-135",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 46.9869,
    "lng": 5.0197,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-136",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 47.0547,
    "lng": 4.6465,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-137",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 46.9453,
    "lng": 4.6557,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-138",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 46.9064,
    "lng": 4.7997,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-139",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 46.8618,
    "lng": 4.7468,
    "date": "Il y a 1 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-140",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 47.0975,
    "lng": 5.0265,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-141",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 47.0031,
    "lng": 4.8596,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-142",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 46.8757,
    "lng": 4.693,
    "date": "Il y a 1 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-143",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 47.0057,
    "lng": 4.8243,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-144",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "low",
    "crop": "Buis et cultures de plein champ",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 47.0302,
    "lng": 4.8373,
    "date": "Il y a 23h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-145",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 47.1191,
    "lng": 4.8856,
    "date": "Il y a 9h",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-146",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "low",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 47.2198,
    "lng": 4.9158,
    "date": "Il y a 2 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-147",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 47.0188,
    "lng": 4.9067,
    "date": "Il y a 3 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-148",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 47.2082,
    "lng": 4.8268,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-149",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 48.2288,
    "lng": 7.2751,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-150",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 48.2129,
    "lng": 7.372,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-151",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 48.0364,
    "lng": 7.5569,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-152",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 48.0863,
    "lng": 7.1538,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-153",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 48.1451,
    "lng": 7.4644,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-154",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 48.254,
    "lng": 7.3228,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-155",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 48.2703,
    "lng": 7.3979,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-156",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 48.1183,
    "lng": 7.373,
    "date": "Il y a 12h",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-157",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 48.2788,
    "lng": 7.4239,
    "date": "Il y a 21h",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-158",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 48.1035,
    "lng": 7.2367,
    "date": "Il y a 4 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-159",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "low",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.0836,
    "lng": 7.1936,
    "date": "Il y a 2 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-160",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 48.015,
    "lng": 7.4776,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-161",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 48.0175,
    "lng": 7.2614,
    "date": "Il y a 5 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-162",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 48.094,
    "lng": 7.2763,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-163",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 48.2827,
    "lng": 7.2351,
    "date": "Il y a 4 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-164",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.0309,
    "lng": 7.3381,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-165",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 43.4983,
    "lng": 1.4463,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-166",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 43.6347,
    "lng": 1.6237,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-167",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 43.4676,
    "lng": 1.7181,
    "date": "Il y a 20h",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-168",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 43.4419,
    "lng": 1.7348,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-169",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 43.4568,
    "lng": 1.5693,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-170",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 43.5423,
    "lng": 1.5333,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-171",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 43.4736,
    "lng": 1.4492,
    "date": "Il y a 3 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-172",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 43.3665,
    "lng": 1.5497,
    "date": "Il y a 5h",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-173",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "high",
    "crop": "Céréales diverses",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 43.4173,
    "lng": 1.5874,
    "date": "Il y a 20h",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-174",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 43.5264,
    "lng": 1.7963,
    "date": "Il y a 23h",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-175",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 43.5479,
    "lng": 1.5204,
    "date": "Il y a 4 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-176",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 43.4845,
    "lng": 1.527,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-177",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 43.6605,
    "lng": 1.7388,
    "date": "Il y a 22h",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-178",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 43.6951,
    "lng": 1.5496,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-179",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 43.6381,
    "lng": 1.4996,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-180",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 43.4525,
    "lng": 1.5795,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-181",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 43.6816,
    "lng": 1.7196,
    "date": "Il y a 3 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-182",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 43.6265,
    "lng": 1.8273,
    "date": "Il y a 2 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-183",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "low",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 43.5519,
    "lng": 1.7032,
    "date": "Il y a 1 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-184",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 43.4274,
    "lng": 1.624,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-185",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "medium",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 43.6557,
    "lng": 1.5738,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-186",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "low",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 43.6089,
    "lng": 1.8156,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-187",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "high",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 43.4076,
    "lng": 1.7929,
    "date": "Il y a 5 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-188",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "low",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 43.488,
    "lng": 1.4631,
    "date": "Il y a 2 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-189",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 43.449,
    "lng": 1.7779,
    "date": "Il y a 6h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-190",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 43.4501,
    "lng": 1.7596,
    "date": "Il y a 2 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-191",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "low",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 43.3512,
    "lng": 1.5329,
    "date": "Il y a 9h",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-192",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 45.0795,
    "lng": 4.7674,
    "date": "Il y a 9h",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-193",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 44.9837,
    "lng": 4.7213,
    "date": "Il y a 6h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-194",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 44.7918,
    "lng": 4.7733,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-195",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 44.8836,
    "lng": 5.0877,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-196",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 45.0687,
    "lng": 4.9582,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-197",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 44.7618,
    "lng": 4.833,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-198",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "medium",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 44.7858,
    "lng": 4.9717,
    "date": "Il y a 2 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-199",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 44.8893,
    "lng": 4.7349,
    "date": "Il y a 17h",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-200",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 44.9867,
    "lng": 4.9386,
    "date": "Il y a 4h",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-201",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "high",
    "crop": "Céréales diverses",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 45.1255,
    "lng": 5.0335,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-202",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "low",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Julien V.",
    "reporterRole": "farmer",
    "lat": 45.049,
    "lng": 4.7725,
    "date": "Il y a 1 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-203",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "GAEC de la Plaine",
    "reporterRole": "farmer",
    "lat": 45.0662,
    "lng": 4.7337,
    "date": "Il y a 1 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-204",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 44.7818,
    "lng": 5.0512,
    "date": "Il y a 1 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-205",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 44.9638,
    "lng": 4.6769,
    "date": "Il y a 2 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-206",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 44.9399,
    "lng": 4.9981,
    "date": "Il y a 5 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-207",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "low",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 44.9656,
    "lng": 4.8689,
    "date": "Il y a 2 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-208",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 44.8546,
    "lng": 4.9531,
    "date": "Il y a 10h",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-209",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 44.902,
    "lng": 4.7175,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-210",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "low",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 44.9712,
    "lng": 4.6989,
    "date": "Il y a 3 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-211",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "low",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 45.118,
    "lng": 4.9034,
    "date": "Il y a 4 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-212",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 45.0414,
    "lng": 4.7203,
    "date": "Il y a 2 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-213",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 44.8972,
    "lng": 5.0341,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-214",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "medium",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 44.9022,
    "lng": 4.9626,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-215",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 44.7747,
    "lng": 4.7076,
    "date": "Il y a 4 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-216",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 49.7622,
    "lng": 0.8748,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-217",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 49.7112,
    "lng": 0.8108,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-218",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 49.8186,
    "lng": 0.8942,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-219",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 49.5466,
    "lng": 0.919,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-220",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 49.6023,
    "lng": 0.9655,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-221",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 49.8208,
    "lng": 0.9901,
    "date": "Il y a 3 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-222",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 49.4795,
    "lng": 1.0388,
    "date": "Il y a 3 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-223",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 49.5684,
    "lng": 0.9655,
    "date": "Il y a 1 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-224",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Association Jardins Vivants",
    "reporterRole": "gardener",
    "lat": 49.7979,
    "lng": 0.8832,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-225",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Marc D.",
    "reporterRole": "gardener",
    "lat": 49.4867,
    "lng": 0.8652,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-226",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 49.513,
    "lng": 0.7558,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-227",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 49.8033,
    "lng": 0.6778,
    "date": "Il y a 4 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-228",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Pierre G.",
    "reporterRole": "gardener",
    "lat": 49.5588,
    "lng": 0.931,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-229",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 49.5593,
    "lng": 0.9775,
    "date": "Il y a 16h",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-230",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 49.5633,
    "lng": 0.9392,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-231",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 49.5438,
    "lng": 1.0632,
    "date": "Il y a 17h",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-232",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Chambre d Agriculture (BSV)",
    "reporterRole": "advisor",
    "lat": 49.8192,
    "lng": 0.9676,
    "date": "Il y a 2 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-233",
    "disease": "other_pest",
    "diseaseName": "Oïdium foliaire (Erysiphe / Podosphaera)",
    "severity": "medium",
    "crop": "Courgettes, concombres et vigne",
    "reporter": "Claire M.",
    "reporterRole": "gardener",
    "lat": 49.4629,
    "lng": 0.9587,
    "date": "Il y a 1 jour(s)",
    "notes": "Poudre blanche feutrée sur face supérieure des feuilles."
  },
  {
    "id": "rep-auto-234",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "medium",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Nathalie B.",
    "reporterRole": "gardener",
    "lat": 49.7274,
    "lng": 0.8501,
    "date": "Il y a 3 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-235",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "high",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Sylvie B.",
    "reporterRole": "gardener",
    "lat": 48.927,
    "lng": 2.8623,
    "date": "Il y a 10h",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-236",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Martine H.",
    "reporterRole": "gardener",
    "lat": 48.9764,
    "lng": 2.9722,
    "date": "Il y a 2 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-237",
    "disease": "mildew",
    "diseaseName": "Mildiou de la tomate (Phytophthora infestans)",
    "severity": "high",
    "crop": "Tomates Coeur de Boeuf / Roma",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 48.7775,
    "lng": 2.8029,
    "date": "Il y a 3 jour(s)",
    "notes": "Taches d huile brunes sur feuilles avec feutrage blanc au revers suite aux pluies."
  },
  {
    "id": "rep-auto-238",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "high",
    "crop": "Vigne et treille de jardin",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.8017,
    "lng": 3.0316,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-239",
    "disease": "mildew",
    "diseaseName": "Mildiou de la vigne (Plasmopara viticola)",
    "severity": "medium",
    "crop": "Vigne et treille de jardin",
    "reporter": "François K.",
    "reporterRole": "gardener",
    "lat": 48.9586,
    "lng": 2.8341,
    "date": "Il y a 1 jour(s)",
    "notes": "Sortie massive de taches d huile sur jeunes feuilles après humidité orageuse."
  },
  {
    "id": "rep-auto-240",
    "disease": "mildew",
    "diseaseName": "Mildiou de la pomme de terre",
    "severity": "medium",
    "crop": "Pommes de terre Charlotte / Bintje",
    "reporter": "Gwendal L.",
    "reporterRole": "farmer",
    "lat": 48.8899,
    "lng": 2.734,
    "date": "Il y a 2 jour(s)",
    "notes": "Foyer virulent sur plusieurs rangs contigus. Flétrissement rapide des fanes."
  },
  {
    "id": "rep-auto-241",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 48.954,
    "lng": 3.083,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-242",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "high",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 48.8445,
    "lng": 2.7032,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-243",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Alain R.",
    "reporterRole": "gardener",
    "lat": 49.0541,
    "lng": 2.9578,
    "date": "Il y a 1 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-244",
    "disease": "rust",
    "diseaseName": "Rouille brune des céréales (Puccinia recondita)",
    "severity": "medium",
    "crop": "Céréales diverses",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 49.0518,
    "lng": 3.0099,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules brunes dispersées sur limbe des feuilles supérieures."
  },
  {
    "id": "rep-auto-245",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 49.0957,
    "lng": 2.9436,
    "date": "Il y a 21h",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-246",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "medium",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Collectif Jardin Partagé",
    "reporterRole": "gardener",
    "lat": 48.9269,
    "lng": 2.7814,
    "date": "Il y a 1 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-247",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.9529,
    "lng": 2.7852,
    "date": "Il y a 2 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-248",
    "disease": "rust",
    "diseaseName": "Rouille jaune du blé (Puccinia striiformis)",
    "severity": "high",
    "crop": "Blé tendre d hiver / Blé dur",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 49.0827,
    "lng": 2.6684,
    "date": "Il y a 4 jour(s)",
    "notes": "Pustules jaunes linéaires sur F3 et F2. Alerte BSV émise sur la plaine."
  },
  {
    "id": "rep-auto-249",
    "disease": "rust",
    "diseaseName": "Rouille du poireau et alliacées",
    "severity": "medium",
    "crop": "Poireaux et ails de jardin",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 48.9038,
    "lng": 2.9202,
    "date": "Il y a 4 jour(s)",
    "notes": "Petites pustules orange vif sur feuilles extérieures."
  },
  {
    "id": "rep-auto-250",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "high",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Laurent B.",
    "reporterRole": "gardener",
    "lat": 49.1054,
    "lng": 2.9115,
    "date": "Il y a 2 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-251",
    "disease": "other_pest",
    "diseaseName": "Pyrale / Chenille défoliatrice",
    "severity": "high",
    "crop": "Buis et cultures de plein champ",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 48.8173,
    "lng": 2.6872,
    "date": "Il y a 1 jour(s)",
    "notes": "Défoliation rapide et tissage soyeux bien visible."
  },
  {
    "id": "rep-auto-252",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "high",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Stéphane C.",
    "reporterRole": "farmer",
    "lat": 49.0055,
    "lng": 2.6772,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  },
  {
    "id": "rep-auto-253",
    "disease": "aphids",
    "diseaseName": "Pucerons colonisateurs (Aphidoidea)",
    "severity": "high",
    "crop": "Légumes maraîchers et fruitiers",
    "reporter": "Élodie F.",
    "reporterRole": "gardener",
    "lat": 48.9017,
    "lng": 2.7845,
    "date": "Il y a 4 jour(s)",
    "notes": "Colonies denses sur l apex des tiges avec présence de miellat et fumagine."
  },
  {
    "id": "rep-auto-254",
    "disease": "colorado_beetle",
    "diseaseName": "Doryphore de la pomme de terre (Leptinotarsa)",
    "severity": "high",
    "crop": "Pommes de terre et aubergines",
    "reporter": "Didier P.",
    "reporterRole": "gardener",
    "lat": 48.785,
    "lng": 2.7016,
    "date": "Il y a 4 jour(s)",
    "notes": "Nombreuses grappes d oeufs orange sous feuilles et adultes défoliateurs."
  }
];
