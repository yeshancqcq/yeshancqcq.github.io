//data
var lanes = ["Biology","Climate","Geology", "Era", "Eon"],
  laneLength = lanes.length,
  items = [
      //0
      {"lane": 0, "id": "Life Origin", "start": -4200, "end": -4000,"type":1, "label":"Life Origin"},
      {"lane": 0, "id": "First fossils", "start": -3500, "end": -3300,"type":1, "label":""},
      {"lane": 0, "id": "Photosynthesis", "start": -3200, "end": -3000,"type":1, "label":"Photosynthesis"},
      {"lane": 0, "id": "Sexual reproduction", "start": -1200, "end": -1000,"type":1, "label":""},
      {"lane": 0, "id": "Multicellular organisms", "start": -1000, "end": -850,"type":1, "label":"Multicellular"},
      {"lane": 0, "id": "Huainan Biota", "start": -850, "end": -800,"type":1, "label":""},
      {"lane": 0, "id": "Edicarian Biota", "start": -680, "end": -600,"type":1, "label":""},
      {"lane": 0, "id": "Cambrian Explosion", "start": -540, "end": -500,"type":1, "label":"Trilobites"},
      {"lane": 0, "id": "Dinosaurs", "start": -220, "end": -65,"type":1, "label":"Dino"},
      {"lane": 0, "id": "Human", "start": -3, "end": 0,"type":1, "label":"Human"},
      //1
      {"lane": 1, "id": "Primary atmosphere gone", "start": -4500, "end": -4450,"type":1 , "label":""},
      {"lane": 1, "id": "Water on earth", "start": -4400, "end": -4350,"type":1, "label":"Water"},
      {"lane": 1, "id": "Proto-oceans", "start": -3500, "end": -3200,"type":1, "label":"Oceans"},
      {"lane": 1, "id": "Secondary atmosphere formed", "start": -4000, "end": -3800,"type":1, "label":""},
      {"lane": 1, "id": "The Third atmosphere formed", "start": -3000, "end": -2800,"type":1, "label":""},
      {"lane": 1, "id": "Mid Archean Ice Ages", "start": -2900, "end": -2780,"type":1, "label":""},
      {"lane": 1, "id": "Great Oxidation Event", "start": -2600, "end": -2500,"type":1, "label":"BIF"},
      {"lane": 1, "id": "First Snowball Earth", "start": -2400, "end": -2100,"type":1, "label":"Snowball-1"},
      {"lane": 1, "id": "Second Snowball Earth", "start": -850, "end": -600,"type":1, "label":"Snowball-2"},
      {"lane": 1, "id": "Pleistocene Ice Age", "start": -3, "end": 0,"type":1, "label":""},

      //2
      {"lane": 2, "id": "Earth formed", "start": -4600, "end": -4500,"type":1, "label":"Earth formed"},
      {"lane": 2, "id": "Moon formed", "start": -4500, "end": -4400,"type":1, "label":""},
      {"lane": 2, "id": "LHB", "start": -4000, "end": -3900,"type":1, "label":""},
      {"lane": 2, "id": "Early lands", "start": -3400, "end": -3300,"type":1, "label":"Lands"},
      {"lane": 2, "id": "Supercontinent Columbia", "start":-1800, "end": -1500,"type":1, "label":"Columbia"},
      {"lane": 2, "id": "Supercontinent Rodinia", "start": -1100, "end": -750, "type":1, "label":"Rodinia"},
      {"lane": 2, "id": "Trans-African Orogeny", "start": -650, "end": -600,"type":1, "label":""},
      {"lane": 2, "id": "Caledonian Orogeny", "start": -570, "end": -500,"type":1, "label":""},
      {"lane": 2, "id": "Supercontinent Pangaea", "start": -335, "end": -150,"type":1, "label":"Pangaea"},
      //3
      {"lane": 3, "id": "Paleozoic", "start": -540, "end": -250,"type":0, "label":"P"},
      {"lane": 3, "id": "Mesozoic", "start": -250, "end": -65,"type":0, "label":"M"},
      {"lane": 3, "id": "Cenozoic", "start": -65, "end": 0, "type":0, "label":"C"},

      //4
      {"lane": 4, "id": "Hadean", "start": -4600, "end": -4000,"type":0, "label":"Hadean"},
      {"lane": 4, "id": "Archean", "start": -4000, "end": -2500,"type":0, "label":"Archean"},
      {"lane": 4, "id": "Proterozoic", "start": -2500, "end": -540,"type":0, "label":"Proterozoic"},
      {"lane": 4, "id": "Phanerzoic", "start": -540, "end": 0, "type":0, "label":"Phanerzoic"}
    ]
  timeBegin = -4600,
  timeEnd = 0;
