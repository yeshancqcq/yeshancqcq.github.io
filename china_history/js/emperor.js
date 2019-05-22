// Durée couverte par la frise
var debutFrise = -2100;
var finFrise = 2014;

// Dates des périodes historiques
var periodes = [[1,"Xia Dynasty", -2100, -1600, "http://en.wikipedia.org/wiki/Xia_Dynasty"],
        [2, "Shang Dynasty", -1700, -1046, "http://en.wikipedia.org/wiki/Shang_Dynasty"],
        [3, "Zhou Dynasty", -1045, -256, "http://en.wikipedia.org/wiki/Zhou_Dynasty"],
        [4, "Spring and Autumn Period", -722, -476, "http://en.wikipedia.org/wiki/Spring_and_Autumn_Period"],
        [5, "Warring States Period", -475, -221, "http://en.wikipedia.org/wiki/Warring_States_Period"],
        [6, "Qin Dynasty", -220, -206, "http://en.wikipedia.org/wiki/Qin_Dynasty"],
        [7, "Han Dynasty", -202, 220, "http://en.wikipedia.org/wiki/Han_Dynasty"],
        [8, "Three Kingdoms", 221, 280, "http://en.wikipedia.org/wiki/Three_Kingdoms"],
        [9, "Wei and Jin Period", 265, 420, "http://en.wikipedia.org/wiki/Chinese_history#Wei_and_Jin_Period"],
        [10, "Wu Hu Period", 304, 439, "http://en.wikipedia.org/wiki/Chinese_history#Wu_Hu_Period"],
        [11, "Southern and Northern Dynasties", 421, 589, "http://en.wikipedia.org/wiki/Southern_and_Northern_Dynasties"],
        [12, "Sui Dynasty", 590, 618, "http://en.wikipedia.org/wiki/Sui_Dynasty"],
        [13, "Tang Dynasty", 619, 907, "http://en.wikipedia.org/wiki/Tang_Dynasty"],
        [14, "Five Dynasties and Ten Kingdoms", 908, 960, "http://en.wikipedia.org/wiki/Five_Dynasties_and_Ten_Kingdoms"],
        [15, "Song, Liao, Jin, and Western Xia Dynasties", 961, 1270, "http://en.wikipedia.org/wiki/Chinese_history#Song.2C_Liao.2C_Jin.2C_and_Western_Xia_Dynasties"],
        [16, "Yuan Dynasty", 1271, 1368, "http://en.wikipedia.org/wiki/Yuan_Dynasty"],
        [17, "Ming Dynasty", 1369, 1644, "http://en.wikipedia.org/wiki/Ming_Dynasty"],
        [18, "Qing Dynasty", 1645, 1911, "http://en.wikipedia.org/wiki/Qing_Dynasty"],
        [19, "Republic of China", 1912, 1949, "http://en.wikipedia.org/wiki/History_of_the_Republic_of_China"],
        [20, "People's Republic of China", 1950, 2014, "http://en.wikipedia.org/wiki/History_of_the_People%27s_Republic_of_China"]
        ];

// Films
var films = [[-227, "Hero", 2002, "http://www.imdb.com/title/tt0299977/"],
       [208, "Red Cliff", 2008, "http://www.imdb.com/title/tt0425637/"],
       [1935, "Ip Man", 2008, "http://www.imdb.com/title/tt1220719"],
       [689, "Detective Dee", 2010, "http://www.imdb.com/title/tt1123373/"],
       [859, "House of Flying Daggers", 2004, "http://www.imdb.com/title/tt0385004/"],
       [928, "Curse of the Golden Flower", 2006, "http://www.imdb.com/title/tt0473444/"],
       [1267, "Tai-Chi Master", 1993, "http://www.imdb.com/title/tt0108281/"],
       [1375, "The Warrior", 2001, "http://www.imdb.com/title/tt0275083/"],
       [1453, "New Dragon Gate Inn", 1992, "http://www.imdb.com/title/tt0105859/"],
       [1650, "Seven Swords", 2005, "http://www.imdb.com/title/tt0429078/"],
       [1700, "Wing Chun", 1994, "http://www.imdb.com/title/tt0111800/"],
       [1779, "Crouching Tiger, Hidden Dragon", 2000, "http://www.imdb.com/title/tt0190332/"],
       [1850, "Iron Monkey", 1993, "http://www.imdb.com/title/tt0108148/"],
       [1895, "Once Upon a Time in China", 1991, "http://www.imdb.com/title/tt0103285/"],
      [-1075,"The Last Woman of Shang",1964,""],
      [-607,"Sacrifice",2010,""],
      [-551,"Confucius",1940,""],
      [-505,"Confucius",2010,""],
      [-475,"Little Big Soldier",2010,""],
      [-375,"A Battle of Wits",2006,""],
      [-475,"An Empress and the Warriors",2008,""],
      [-316,"The Warring States",2011,""],
      [-259,"The Emperor's Shadow",1996,""],
      [-227,"The Emperor and the Assassin",1998,""],
      [-206,"The Great Conqueror's Concubine",1994,""],
      [-206,"White Vengeance",2011,""],
      [-206,"The Last Supper",2012,""],
      [219,"The Lost Bladesman",2011,""],
      [229,"Three Kingdoms: Resurrection of the Dragon",2008,""],
      [567,"Mulan Joins the Army",1939,""],
      [386,"Mulan",2009,""],
      [619,"Shaolin Temple",1982,""],
      [650,"The Empress Wu Tse-tien",1939,""],
      [700,"Warriors of Heaven and Earth",2003,""],
      [880,"General Stone",1976,""],
      [880,"The Heroic Ones",1970,""],
      [950,"All the King's Men",1983,""],
      [969,"Great Liao's Empress Dowager",1995,""],
      [980,"Saving General Yang",2013,""],
      [980,"The Eight Diagram Pole Fighter",1983,""],
      [980,"The Eight Diagram Cudgel Fighter",1985,""],
      [980,"Generals of the Yang Family",1984,""],
      [1026,"The Silk Road",1988,""],
      [1030,"The 14 Amazons",1972,""],
      [1030,"Legendary Amazons",2011,""],
      [1087,"The Journey to Xixia Empire",1997,""],
      [1254,"Marco Polo",1982,""],
      [1645,"The Sino-Dutch War 1661",2000,""],
      [1839,"The Opium War",1997,""],
      [1850,"The Warlords",2007,""],
      [1835,"The Empress Dowager",1975,""],
      [1848,"Li Lianying: The Imperial Eunuch",1991,""],
      [1868,"Fearless",2006,""],
      [1899,"Empire of Silver",2009,""],
      [1875,"The Woman Knight of Mirror Lake",2011,""],
      [1911,"1911",2011,""],
      [1921,"The Founding of a Party",2011,""],
      [1930,"Warriors of the Rainbow: Seediq Bale",2011,""],
      [1937,"The Flowers of War",2011,""],
      [1938,"The Children of Huang Shi",2008,""],
      [1906,"The Last Emperor",1987,""],
      [1927,"Assembly",2007,""],
      [1911,"The Soong Sisters",1997,""],
      [1949,"The Founding of a Republic",2009,""],
      [1958,"24 City",2008,""],
      [1894,"Forever Enthralled",2008,""],
      [1904,"Tokyo Trial",2006,""],
       ];

// On associe chaque film à une période
for (var i = 0; i < films.length; i++) {
  for (var j = 0; j < periodes.length; j++) {
    if (films[i][0] >= periodes[j][2] && films[i][0] <= periodes[j][3]) {
      films[i].push(periodes[j][0]);
      break;
    }
  }
}
// On ordonne le tableau selon les dates
films.sort(function(a, b) { return (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0)); });

// On détermine l'ordre d'affichage des films
var order = 1; var oldVar;
for (var i = 0; i < films.length; i++) {
  order++;
  if (films[i][0] - oldVar > 100 || order >= 27) {
    order = 1;
  }
  films[i].push(order);
  oldVar = films[i][0];
}

//~ // On calcule le nombre de films par période
//~ for (var i = 0; i < periodes.length; i++) {
  //~ var nbFilms = 0;
  //~ for (var j = 0; j < films.length; j++) {
    //~ if (films[j][4] == periodes[i][0])
      //~ nbFilms++;
  //~ }
  //~ periodes[i].push(nbFilms);
//~ }
//~

// Positionnement de la frise
var margin = {top: 20, right: 150, bottom: 20, left: 1},
  width = 4000 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

// Frise
var formatNumber = d3.format(" 1f");

var x = d3.scale.linear()
  .domain([debutFrise, finFrise])
  .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 30])
    .range([0, height]);

var xAxis = d3.svg.axis()
  .scale(x)
  .ticks(50)
  .tickFormat(formatNumber)
  .orient("bottom");

var svg = d3.select("#emperor-svg").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var gx = svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

var bar = 30;
// Affichage des périodes
svg.append("g").selectAll("periode")
    .data(periodes)
    .enter().append("rect")
    .attr("class", "periode")
    .attr("x", function(d) {return x(d[2]);})
    .attr("y", function(d) {if (d[0] % 2 == 0) return height - (bar + 4); else return height - (bar + 4) * 2;}  )
    .attr("width", function(d) {return x(d[3]) - x(d[2]);})
    .attr("height", bar)
    .attr("fill", function(d) {  return "hsl(" + (360 - d[0] * 19) + ",50%,50%)" });
    //~ .on("mouseover", function(d) { d3.select("#nomPeriode" + d[0]).style("display", "block");})
    //~ .on("mouseout", function(d) { d3.select("#nomPeriode" + d[0]).style("display", "none");});

// Affichage des noms de période
svg.append("g").selectAll(".nomPeriode")
    .data(periodes)
    .enter().append("a")
    .attr("xlink:href", function(d) {return d[4];})
    .append("text")
    .text(function(d) {return d[1];})
    .attr("class", "nomPeriode")
    .attr ("id", function(d) {return "nomPeriode" + d[0];})
    .attr("text-anchor", "middle")
    .attr("x", function(d) {return x((d[2] + d[3]) / 2);})
    .attr("y", function(d) {if (d[0] % 2 == 0) return height - (bar + 4); else return height - (bar + 4) * 2;}  )
    .attr("dy", "1.5em")
    .attr("font-weight", "bold");
    //~ .on("mouseover", function(d) { d3.select("#nomPeriode" + d[0]).style("display", "block");})
    //~ .on("mouseout", function(d) { d3.select("#nomPeriode" + d[0]).style("display", "none");});

// On génère des lignes pour les films
svg.append("g").selectAll("ligneFilm")
    .data(films)
    .enter().append("line")
    .attr("class", "ligneFilm")
    .attr("x1", function(d) {return x(d[0]);})
    .attr("y1", function(d) {if (d[4] % 2 == 0) return height - bar; else return height - bar * 2;})
    .attr("x2", function(d) {return x(d[0]);})
    .attr("y2", function(d) {return y(d[5]);})
    .attr("stroke", "grey");

// Affichage des titres de films
var titres = svg.append("g").selectAll("titreFilm")
    .data(films)
    .enter().append("a")
    .attr("xlink:href", function(d){if (d[3] === "") return "http://www.imdb.com/find?q=" + d[1] + " " + d[2] + "&s=tt"; else return d[3];})
    .attr("class", function(d) {return "titreFilm";});
titres.append("text")
    .text(function(d) {return d[1] + " (" +  d[2] + ")";})
    .attr("text-anchor", "left")
    .attr("x", function(d) {return x(d[0]);}  )
    .attr("y", function(d) {return y(d[5]);} )
    .attr("dy", "0.75em")
    .attr("dx", "0.25em");
