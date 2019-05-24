//data
var lanes = ["生物","气候","地质", "代", "宙"],
  laneLength = lanes.length,
  items = [
      //
      {"lane": 0, "id": "生命出现", "start": -4200, "end": -4000,"type":1, "label":"生命出现"},
      {"lane": 0, "id": "最初的化石", "start": -3500, "end": -3300,"type":1, "label":""},
      {"lane": 0, "id": "光合作用出现", "start": -3200, "end": -3000,"type":1, "label":"光合作用"},
      {"lane": 0, "id": "有性繁殖", "start": -1200, "end": -1000,"type":1, "label":""},
      {"lane": 0, "id": "多细胞生物", "start": -1000, "end": -850,"type":1, "label":"多细胞生物"},
      {"lane": 0, "id": "淮南动物群", "start": -850, "end": -800,"type":1, "label":""},
      {"lane": 0, "id": "埃迪卡拉动物群", "start": -680, "end": -600,"type":1, "label":""},
      {"lane": 0, "id": "寒武纪生命大爆发", "start": -540, "end": -500,"type":1, "label":"生命大爆发"},
      {"lane": 0, "id": "恐龙时代", "start": -220, "end": -65,"type":1, "label":"恐龙"},
      {"lane": 0, "id": "人类", "start": -3, "end": 0,"type":1, "label":"人类"},
      //
      {"lane": 1, "id": "原始大气逃逸", "start": -4500, "end": -4450,"type":1 , "label":""},
      {"lane": 1, "id": "水的出现", "start": -4400, "end": -4350,"type":1, "label":"水的出现"},
      {"lane": 1, "id": "推测原始海洋形成", "start": -3500, "end": -3200,"type":1, "label":"原始海洋"},
      {"lane": 1, "id": "第二大气形成", "start": -4000, "end": -3800,"type":1, "label":""},
      {"lane": 1, "id": "第三大气形成", "start": -3000, "end": -2800,"type":1, "label":""},
      {"lane": 1, "id": "中太古代冰期", "start": -2900, "end": -2780,"type":1, "label":""},
      {"lane": 1, "id": "大氧化事件", "start": -2600, "end": -2500,"type":1, "label":"大氧化"},
      {"lane": 1, "id": "休伦冰期（第一次雪球地球）", "start": -2400, "end": -2100,"type":1, "label":"雪球地球1"},
      {"lane": 1, "id": "成冰纪冰期（第二次雪球地球）", "start": -850, "end": -600,"type":1, "label":"雪球地球2"},
      {"lane": 1, "id": "第四纪冰期", "start": -3, "end": 0,"type":1, "label":""},

      //
      {"lane": 2, "id": "地球形成", "start": -4600, "end": -4500,"type":1, "label":"地球形成"},
      {"lane": 2, "id": "忒亚星撞击事件，月球形成", "start": -4500, "end": -4400,"type":1, "label":""},
      {"lane": 2, "id": "后期重星体撞击时代", "start": -4000, "end": -3900,"type":1, "label":""},
      {"lane": 2, "id": "陆地出现", "start": -3400, "end": -3300,"type":1, "label":"陆地出现"},
      {"lane": 2, "id": "哥伦比亚超级大陆", "start":-1800, "end": -1500,"type":1, "label":"哥伦比亚大陆"},
      {"lane": 2, "id": "罗迪尼亚超级大陆", "start": -1100, "end": -750, "type":1, "label":"罗迪尼亚大陆"},
      {"lane": 2, "id": "泛非造山运动", "start": -650, "end": -600,"type":1, "label":""},
      {"lane": 2, "id": "加里东造山运动", "start": -570, "end": -500,"type":1, "label":""},
      {"lane": 2, "id": "盘古超级大陆（泛大陆）", "start": -335, "end": -150,"type":1, "label":"泛大陆"},
      //
      {"lane": 3, "id": "古生代", "start": -540, "end": -250,"type":0, "label":"古生代"},
      {"lane": 3, "id": "中生代", "start": -250, "end": -65,"type":0, "label":"中生代"},
      {"lane": 3, "id": "新生代", "start": -65, "end": 0, "type":0, "label":""},

      //
      {"lane": 4, "id": "冥古宙", "start": -4600, "end": -4000,"type":0, "label":"冥古宙"},
      {"lane": 4, "id": "太古宙", "start": -4000, "end": -2500,"type":0, "label":"太古宙"},
      {"lane": 4, "id": "元古宙", "start": -2500, "end": -540,"type":0, "label":"元古宙"},
      {"lane": 4, "id": "显生宙", "start": -540, "end": 0, "type":0, "label":"显生宙"}
    ]
  timeBegin = -4600,
  timeEnd = 0;
