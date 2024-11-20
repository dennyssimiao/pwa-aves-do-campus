import { Timestamp } from 'firebase/firestore';

export const mockUserStats = {
  id: "userStats1",
  userId: process.env.REACT_APP_MOCK_USER_ID || "defaultUserId",
  totalBirdwatchPoints: 100,
};

export const mockBirdwatching = [
  {
    id: "birdwatch1",
    userId: process.env.REACT_APP_MOCK_USER_ID || "defaultUserId",
    birdIds: ["bird001", "bird002", "bird003", "bird004"],
    date: Timestamp.fromDate(new Date("2024-11-01T02:22:00Z")),
    totalPoints: 80,
  },
  {
    id: "birdwatch2",
    userId: process.env.REACT_APP_MOCK_USER_ID || "defaultUserId",
    birdIds: ["bird001", "bird002", "bird003", "bird004"],
    date: Timestamp.fromDate(new Date("2024-12-12T09:42:00Z")),
    totalPoints: 70,
  },
  {
    id: "birdwatch3",
    userId: process.env.REACT_APP_MOCK_USER_ID || "defaultUserId",
    birdIds: ["bird001", "bird002", "bird003", "bird004"],
    date: Timestamp.fromDate(new Date("2024-12-15T10:30:00Z")),
    totalPoints: 60,
  }
];

export const mockBirds = [
  {
    "id": "bird001",
    "name": "Periquito de encontro amarelo",
    "scientificName": "Brotogeris chiriri",
    "otherNames": [
      "Periquito-d'asa-amarela",
      "Periquito-estrela",
      "Maritaca"
    ],
    "description": "A espécie mede cerca de 24 cm de comprimento. Possui a coloração verde, sendo que o destaque da espécie é a ponta superior das asas que é amarela. O bico possui uma cor branco amarronzada e ao redor dos seus olhos possui um anel branco formado apenas pela pele do animal.",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "frutas",
      "grãos"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "Menos preocupante",
    "imageUrl": "https://s3.amazonaws.com/media.wikiaves.com.br/images/6211/1126446_00e925b68e1db8f3679fa346e263c3c6.jpg"
  },
  {
    "id": "bird002",
    "name": "Rolinha roxa",
    "scientificName": "Columbina talpacoti",
    "otherNames": [

    ],
    "description": "Rolinha-roxa é uma ave columbiforme da família Columbidae. historicamente uma das primeiras espécies brasileiras a se adaptar ao meio urbano, ainda é a espécie nativa mais comum em boa parte das grandes cidades brasileiras. É curioso notar que costuma ser encontrada em maior quantidade em locais alterados pelo homem do que em seu próprio habitat original que são as áreas de cerrados e campos. Conhecida também como rolinha-barreirinha, rola-cabocla (Paraíba), rola-caldo-de-feijão, rolinha-caldo-de-feijão (Paraíba e Ceará), sangue-de-boi (Piauí), picuí-peão, rola, pomba-rola, rola-grande, rola-roxa, rola-sangue-de-boi (Pernambuco e Bahia), rolinha-comum, rolinha-vermelha, rolinha-juruti, rolinha-roxa e pomba-café. Em várias áreas do Nordeste do Brasil o nome “rolinha-vermelha” é usado tanto para se referir a Columbina talpacoti e a fêmea da pararu-azul Claravis pretiosa e, portanto, sugere-se que este nome popular seja evitado. A sua vocalização é uma sequencia de “uú-uú-uú”.",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "grãos"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://s3.amazonaws.com/media.wikiaves.com.br/images/5732/2375086g_56b16d82d73b59c72bb0de540fbd61c4.jpg"
  },
  {
    "id": "bird003",
    "name": "Rolinha cascavel",
    "scientificName": "Columbina squammata",
    "otherNames": [
      "Fogo-apagou", "rolinha-pedrês", "rolinha-carijó", "rola-pintada", "picui-pinima", "paruru", "felix-cafofo"
    ],
    "description": "Rolinha-fogo-apagou é uma ave columbiforme da família Columbidae. O nome popular fogo-apagou é sem dúvida a melhor tradução escrita para o canto desta ave, um dos sons mais típicos da “roça”. Recebe os nomes populares de rolinha-carijó, fogo-pagô (onomatopeico), rola-pedrês, rolinha-cascavel, felix-cafofo (Paraíba), paruru e galinha-de-deus. Na região mais setentrional do Nordeste brasileiro, precisamente no interior dos estados do Rio Grande do Norte, Paraíba e Pernambuco, Columbina squammata é chamada pelos moradores locais de rolinha-cascavel ou rolinha-cascavilinha, devido ao padrão da plumagem lembrar o aspecto das escamas da cobra cascavel (Crotalus durissus). Além disso, o som que a ave emite ao voar lembra o som do “chocalho” da cobra cascavel.",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "grãos"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Columbina_squammata.4.jpg/1024px-Columbina_squammata.4.jpg"
  },
  {
    "id": "bird004",
    "name": "Suiriri",
    "scientificName": " Tyrannus melancholicus",
    "otherNames": [

    ],
    "description": "O suiriri é encontrado em todo o Brasil. Adapta-se até aos maiores conglomerados urbanos, desde que haja alguma arborização. Pode ser visto no meio de São Paulo ou Rio de Janeiro, por exemplo. A população do sul do Brasil, Argentina, Uruguai e Paraguai (parte) é completa ou parcialmente migratória. Seu nome popular, de origem onomatopeica, origina-se de sua vocalização “si-ri-ri”.",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos",
      "frutas"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://s3.amazonaws.com/media.wikiaves.com.br/images/958/859399g_b49f7954352b8c44871c238f3bc3e60d.jpg"
  },
  {
    "id": "bird005",
    "name": "Bem-te-vi",
    "scientificName": "Pitangus sulphuratus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos",
      "frutas"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pitangus_sulphuratus_3.jpg/1024px-Pitangus_sulphuratus_3.jpg"
  },
  {
    "id": "bird006",
    "name": "Sibite",
    "scientificName": "Coereba flaveola",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos",
      "frutas"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://s3.amazonaws.com/media.wikiaves.com.br/images/1152/2511161g_f8577c8b538e666465f6ce8d2a2e8f51.jpg"
  },
  {
    "id": "bird007",
    "name": "Bentevizinho-de-penacho-vermelho",
    "scientificName": "Myiozetetes similis",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos",
      "frutas"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/614819834/900"
  },
  {
    "id": "bird008",
    "name": "Periquitão-maracanã",
    "scientificName": "Psittacara leucophthalmus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "raro",
    "activity": "diurno",
    "diet": [
      "grãos",
      "frutas"
    ],
    "habitat": [
      "floresta"
    ],
    "movement": "",
    "conservationStatus": "NT",
    "imageUrl": "https://s3.amazonaws.com/media.wikiaves.com.br/images/762/267285g_3c187d8c26304f473d62582d3788e534.jpg"
  },
  {
    "id": "bird009",
    "name": "Sanhaço-cinzento",
    "scientificName": "Thraupis sayaca",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "frutas"
    ],
    "habitat": [
      "ambiente aberto",
      "borda de mata"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://s3.animalia.bio/animals/photos/full/original/flickr-dario-sanches-sanhac387u-cinzento-28thraupis-sayaca29.webp"
  },
  {
    "id": "bird010",
    "name": "Lavadeira-mascarada",
    "scientificName": "Fluvicula nengeta",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos"
    ],
    "habitat": [
      "ambiente aberto",
      "ambiente aquático"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgh8GhtIVS0kK0xFgOBG_pB3oDsNMaZhMk3g1upbYx9-3VGKKNI60ZnbQXUe06IifKmEi0Bb1M0Ub4dJXxVYfG8McpcG8RbRRlTCGv10SRnavAcZDGnPaRlWtF0OUPcyAmzTc6BaEn3Q/s1600/lavadeira-mascarada+1.JPG"
  },
  {
    "id": "bird011",
    "name": "Andorinhão-do-buriti",
    "scientificName": "Tachornis squamata",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird012",
    "name": "Urubu preto",
    "scientificName": "Coragyps atratus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "carnívoro"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird013",
    "name": "Urubu-de-cabeça-vermelha",
    "scientificName": "Cathartes aura",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "carnívoro"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird014",
    "name": "Gavião-carijó",
    "scientificName": "Rupornis magnirostris",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "médio",
    "activity": "diurno",
    "diet": [
      "carnívoro"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird015",
    "name": "Anu-preto",
    "scientificName": "Crotophaga ani",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos",
      "carnívoro"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird016",
    "name": "Carcará",
    "scientificName": "Caracara plancus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "carnívoro"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird017",
    "name": "Tesourinha",
    "scientificName": "Tyrannus savana",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "médio",
    "activity": "diurno",
    "diet": [
      "frutas"
    ],
    "habitat": [
      "ambiente aberto"
    ],
    "movement": "migratório",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird018",
    "name": "Sanhaço-do-coqueiro",
    "scientificName": "Thraupis palmarum",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "frutas"
    ],
    "habitat": [
      "ambiente aberto",
      "borda de mata"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird019",
    "name": "Ferreirinho-relógio",
    "scientificName": "Todirostrum cinereum",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "insetos"
    ],
    "habitat": [
      "ambiente aberto",
      "borda de mata"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird020",
    "name": "Fim-fim",
    "scientificName": "Euphonia chlorotica",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "comum",
    "activity": "diurno",
    "diet": [
      "frutas"
    ],
    "habitat": [
      "floresta",
      "borda de mata"
    ],
    "movement": "",
    "conservationStatus": "LC",
    "imageUrl": ""
  },
  {
    "id": "bird021",
    "name": "Corruíra",
    "scientificName": "Troglodytes musculus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird022",
    "name": "Beija-flor de banda branca",
    "scientificName": "Chrysuronia leucogaster",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird023",
    "name": "Beija-flor tesoura",
    "scientificName": "Eupetomena macroura",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird024",
    "name": "Beija-flor de garganta verde",
    "scientificName": "Amazilia fimbriata",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird025",
    "name": "Saí-azul",
    "scientificName": "Dacnis cayana",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird026",
    "name": "Guaracava-de-barriga-amarela",
    "scientificName": "Elaenia flavogaster",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird027",
    "name": "Balança-rabo-do-nordeste",
    "scientificName": "Polioptila atricapilla",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird028",
    "name": "Rapazinho-dos-velhos",
    "scientificName": "Nystalus maculatus",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird029",
    "name": "Caburé",
    "scientificName": "Glaucidium brasilannum",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird030",
    "name": "Choró-boi",
    "scientificName": "Taraba major",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird031",
    "name": "Pitiguari",
    "scientificName": "Cyclarhis gujanensis",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird032",
    "name": "Maria-cavaleira-do-rabo-enferrujado",
    "scientificName": "Myiarchus tyrannulus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird033",
    "name": "Alma de gato",
    "scientificName": "Piaya cayana",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird034",
    "name": "Pica-pau-pequeno",
    "scientificName": "Veniliornis passerinus",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird035",
    "name": "Arapaçu-de-bico-branco",
    "scientificName": "Dendroplex picus",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird036",
    "name": "Pica-pau-verde-barrado",
    "scientificName": "Colaptes melanochloros",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird037",
    "name": "Choca-barrada-do-nordeste",
    "scientificName": "Thamnophilus capistratus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird038",
    "name": "Risadinha",
    "scientificName": "Camptostoma obsoletum",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird039",
    "name": "Gavião peneira",
    "scientificName": "Elanus leucurus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird040",
    "name": "Gavião-caracoleiro",
    "scientificName": "Chondrohierax uncinatus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird041",
    "name": "Saíra-de-chapéu-preto",
    "scientificName": "Nemosia pileata",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird042",
    "name": "Tico-tico-rei-cinza",
    "scientificName": "Coryphospingus pileatus",
    "otherNames": [

    ],
    "description": "",
    "points": 100,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird043",
    "name": "Bem-te-vi-rajado",
    "scientificName": "Myiodynastes maculatus",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird044",
    "name": "Bico-chato-amarelo",
    "scientificName": "Tolmomyias flaviventris",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird045",
    "name": "Gaviãozinho",
    "scientificName": "Gampsonyx swainsonii",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird046",
    "name": "Periquito-do-sertão",
    "scientificName": "Eupsittula cactorum",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird047",
    "name": "Chupim",
    "scientificName": "Molothrus bonariensis",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird048",
    "name": "Pica-pauzinho-anão-da-caatinga",
    "scientificName": "Picumnus limae",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird049",
    "name": "Coruja-buraqueira",
    "scientificName": "Athene cunicularia",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird050",
    "name": "Quero-quero",
    "scientificName": "Vanellus chilensis",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird051",
    "name": "Suiriri-cavaleiro",
    "scientificName": "Machetornis rixosa",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird052",
    "name": "Tiziu",
    "scientificName": "Volatinia jacarina",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird053",
    "name": "Canário-da-terra",
    "scientificName": "Sicalis flaveola",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird054",
    "name": "Galo-campina",
    "scientificName": "Paroaria dominicana",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird055",
    "name": "Andorinha-do-rio",
    "scientificName": "Tachycineta albiventer",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird056",
    "name": "Casaca-de-couro-da-lama",
    "scientificName": "Furnarius figulos",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird057",
    "name": "Mergulhão-caçador",
    "scientificName": "Podilymbus podiceps",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird058",
    "name": "Mergulhão-pequeno",
    "scientificName": "Tachybaptus dominicus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird059",
    "name": "Garça-branca-grande",
    "scientificName": "Ardea alba",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird060",
    "name": "Socozinho",
    "scientificName": "Butorides striata",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird061",
    "name": "Carão",
    "scientificName": "Aramus guarauna",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird062",
    "name": "Jaçanã",
    "scientificName": "Jacana jacana",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird063",
    "name": "Garça-branca-pequena",
    "scientificName": "Egretta thula",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird064",
    "name": "Curutié",
    "scientificName": "Certhiaxis cinnamomeus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird065",
    "name": "Socó-boi",
    "scientificName": "Tigrisoma lineatum",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird066",
    "name": "Freirinha",
    "scientificName": "Arundinicola leucocephala",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird067",
    "name": "Galinha d'água",
    "scientificName": "Gallinula galeata",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird068",
    "name": "Biguá",
    "scientificName": "Nannopterum brasilianum",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird069",
    "name": "Frango d'água azul",
    "scientificName": "Porphyrio martinicus",
    "otherNames": [

    ],
    "description": "",
    "points": 10,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird070",
    "name": "Martim-pescador-grande",
    "scientificName": "Megaceryle torquata",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird071",
    "name": "Martim-pescador-verde",
    "scientificName": "Chloroceryle amazona",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird072",
    "name": "Talha-mar",
    "scientificName": "Rynchops niger",
    "otherNames": [

    ],
    "description": "",
    "points": 100,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird073",
    "name": "Garça-moura",
    "scientificName": "Ardea cocoi",
    "otherNames": [

    ],
    "description": "",
    "points": 99,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird074",
    "name": "Mexeriqueira",
    "scientificName": "Vanellus cayanus",
    "otherNames": [

    ],
    "description": "",
    "points": 100,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird075",
    "name": "Jandaia-verdadeira",
    "scientificName": "Aratinga Jandaya",
    "otherNames": [

    ],
    "description": "",
    "points": 100,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird076",
    "name": "Sabiá-do-campo",
    "scientificName": "Mimus saturninus",
    "otherNames": [

    ],
    "description": "",
    "points": 49,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird077",
    "name": "Carrapateiro",
    "scientificName": "Milvago chimachima",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird078",
    "name": "Bagageiro",
    "scientificName": "Phaeomyias murina",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird079",
    "name": "Socoí-vermelho",
    "scientificName": "Ixobrychus exilis",
    "otherNames": [

    ],
    "description": "",
    "points": 50,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird080",
    "name": "Anu-branco",
    "scientificName": "Guira guira",
    "otherNames": [

    ],
    "description": "",
    "points": 100,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  },
  {
    "id": "bird081",
    "name": "Gralha-cancã",
    "scientificName": "Cyanocorax cyanopogon",
    "otherNames": [

    ],
    "description": "",
    "points": 30,
    "rarity": "",
    "activity": "",
    "diet": [

    ],
    "habitat": [

    ],
    "movement": "",
    "conservationStatus": "",
    "imageUrl": ""
  }
  // {
  //   id: "bird1",
  //   name: "Beija-flor",
  //   scientificName: "Trochilidae",
  //   otherNames: ["Colibri", "Hummingbird"],
  //   description: "Os beija-flores, também denominados colibris, são termos comuns que se referem à qualquer uma de 362 espécies classificadas dentro de 113 gêneros reconhecidos, e se encontrando distribuídos desde o sul do Alasca ao extremo sul da Patagônia, no arquipélago da Terra do Fogo; embora grande parte das espécies se encontre na região dos trópicos equatorianos. São aves pequenas, com uma parcela significativa de suas espécies medindo entre 7,5 e 13 centímetros de comprimento, embora algumas sejam muito maiores ou, até muito menores.",
  //   points: 10,
  //   rarity: "comum",
  //   activity: "diurno",
  //   diet: ["néctar", "insetos"],
  //   habitat: ["floresta", "aquático"],
  //   movement: "",
  //   conservationStatus: "pouco preocupante",
  //   imageUrl: "https://cdn.alochapada.com.br/storage/webdisco/2023/08/25/560x420/258573fd19454f921ab81c0e90141ce7.jpg"
  // },
  // {
  //   id: "bird2",
  //   name: "Papagaio",
  //   scientificName: "Psittacidae",
  //   otherNames: ["Parrot"],
  //   description: "Psittacidae é uma família de aves pertencentes à ordem dos Psittaciformes, que compreende a espécies de papagaios e periquitos e as araras, entre outros. É uma das três famílias dos chamados \"papagaios verdadeiros\". Compreende 37 gêneros e 175 espécies das subfamílias Psittacinae e Arinae.",
  //   points: 15,
  //   rarity: "médio",
  //   activity: "diurno",
  //   diet: ["frutas", "grãos"],
  //   habitat: ["floresta"],
  //   movement: "voo",
  //   conservationStatus: "pouco preocupante",
  //   imageUrl: "https://www.parquedasaves.com.br/wp-content/uploads/2022/05/papagaio-charao.jpg"
  // },
  // {
  //   id: "bird3",
  //   name: "Águia",
  //   scientificName: "Aquila",
  //   otherNames: ["Eagle"],
  //   description: "A águia é o nome comum dado algumas aves de rapina da família Accipitridae, geralmente de grande porte, carnívoras, de grande acuidade visual. O nome é atribuído a animais pertencentes a gêneros diversos e não corresponde a nenhum clade taxonômico. Por vezes, dentro de um mesmo gênero ocorrem espécies conhecidas popularmente por gavião ou búteo. Suas principais presas são: coelhos, esquilos, cobras, marmotas e outros animais, principalmente roedores, de pequeno porte. Algumas espécies alimentam-se de ovos de outros pássaros e peixes.",
  //   points: 25,
  //   rarity: "raro",
  //   activity: "dioturno",
  //   diet: ["carnívoro", "vegetais"],
  //   habitat: ["montanhas", "florestas"],
  //   movement: "voo alto",
  //   conservationStatus: "ameaçado",
  //   imageUrl: "https://iguinho.com.br/canalnatureza/images/selvagens/aves/aguiaamericana01.jpg"
  // },
  // {
  //   id: "bird4",
  //   name: "Coruja",
  //   scientificName: "Strigiformes",
  //   otherNames: ["Owl"],
  //   description: "Estrigiformes são aves da ordem Strigiformes, que inclui aves de rapina, tais como corujas, mochos e murucututu. São caçadoras eficientes, usando sobretudo seus olhos extremamente aguçados e movimentos rápidos. Além disso, são extremamente atentas ao ambiente, têm grande capacidade de girar o pescoço e voar silenciosamente devido a penas especiais muito macias e numerosas que compõem suas asas. São providas, muitas vezes, de penachos na zona superior da cabeça, olhos grandes e frontais. Tais aves possuem, em sua maioria, hábitos notívagos, alimentando-se de pequenos mamíferos (principalmente de roedores e morcegos), insetos, aranhas, peixes e outras aves. Engolem suas refeições por inteiro e depois regurgitam os restos alimentares que não puderam ser digeridos em pelotas com pelos e fragmentos de ossos.",
  //   points: 20,
  //   rarity: "lendário",
  //   activity: "noturno",
  //   diet: ["peixes", "anfíbios"],
  //   habitat: ["florestas", "áreas rurais"],
  //   movement: "voo silencioso",
  //   conservationStatus: "pouco preocupante",
  //   imageUrl: "https://cultura.jundiai.sp.gov.br/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-01-at-20.05.51.jpeg"
  // },
];


