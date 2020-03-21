//data
var lanes = ["Place","Drank","Alcohol", "Emotion", "Risk"],
minilanes = ["Time"],
  laneLength = lanes.length,
  items_mini = items = [
  {
    "lane": 0,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "CAFE",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "C",
    "time": ""
  },
  {
    "lane": 0,
    "id": "GYM",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "G",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "PARK",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "PK",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "GYM",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "G",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "F",
    "time": "Oct 5"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "BAR",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "BAR",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "ERRANDS",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "E",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "H",
    "time": ""
  }],
  items = [
  {
    "lane": 0,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "CAFE",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "C",
    "time": ""
  },
  {
    "lane": 0,
    "id": "GYM",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "G",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "PARK",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "PK",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "GYM",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "G",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "F",
    "time": "Oct 5"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "BAR",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "BAR",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "ERRANDS",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "E",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "WORK",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "W",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME OF FRIEND",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "F",
    "time": ""
  },
  {
    "lane": 0,
    "id": "RESTAURANT",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "R",
    "time": ""
  },
  {
    "lane": 0,
    "id": "HOME",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "H",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NO",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NO",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NO",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "Y",
    "time": "Oct 5"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NO",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "N",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 1,
    "id": "YES",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "Y",
    "time": "Oct 5"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NO",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "N",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 2,
    "id": "YES",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "Y",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "M",
    "time": "Oct 5"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "MIXED",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 3,
    "id": "PLEASANT",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538503772,
    "end": 1538509879,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 2"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538509879,
    "end": 1538510124,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538510124,
    "end": 1538510365,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538510365,
    "end": 1538510790,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1538510790,
    "end": 1538514923,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1538514923,
    "end": 1538519678,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538519678,
    "end": 1538521958,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538521958,
    "end": 1538522079,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538522079,
    "end": 1538522498,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538522498,
    "end": 1538572255,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538572255,
    "end": 1538572483,
    "type": "",
    "label": "",
    "time": "Oct 3"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538572483,
    "end": 1538572724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538572724,
    "end": 1538573181,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538573181,
    "end": 1538576704,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538576704,
    "end": 1538577069,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538577069,
    "end": 1538577393,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538577393,
    "end": 1538577651,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538577651,
    "end": 1538577739,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538577739,
    "end": 1538588769,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538588769,
    "end": 1538589097,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538589097,
    "end": 1538589413,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538589413,
    "end": 1538606465,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538606465,
    "end": 1538606721,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538606721,
    "end": 1538607108,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538607108,
    "end": 1538607226,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538607226,
    "end": 1538607688,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538607688,
    "end": 1538607985,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1538607985,
    "end": 1538608587,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538608587,
    "end": 1538653624,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538653624,
    "end": 1538654110,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 4"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538654110,
    "end": 1538655066,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538655066,
    "end": 1538655307,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538655307,
    "end": 1538655548,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538655548,
    "end": 1538655926,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538655926,
    "end": 1538656023,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538656023,
    "end": 1538656606,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538656606,
    "end": 1538656854,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538656854,
    "end": 1538657147,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538657147,
    "end": 1538671868,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538671868,
    "end": 1538672126,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538672126,
    "end": 1538672368,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538672368,
    "end": 1538672617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538672617,
    "end": 1538673102,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538673102,
    "end": 1538673360,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538673360,
    "end": 1538673529,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538673529,
    "end": 1538686707,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538686707,
    "end": 1538687123,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538687123,
    "end": 1538687369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538687369,
    "end": 1538687617,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538687617,
    "end": 1538688113,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1538688113,
    "end": 1538694491,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538694491,
    "end": 1538694616,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538694616,
    "end": 1538694859,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538694859,
    "end": 1538695271,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538695271,
    "end": 1538744318,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538744318,
    "end": 1538744803,
    "type": "Health",
    "label": "M",
    "time": "Oct 5"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538744803,
    "end": 1538745044,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538745044,
    "end": 1538745299,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538745299,
    "end": 1538745671,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538745671,
    "end": 1538758270,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758270,
    "end": 1538758345,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758345,
    "end": 1538758421,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758421,
    "end": 1538758497,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758497,
    "end": 1538758573,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758573,
    "end": 1538758648,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758648,
    "end": 1538758724,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758724,
    "end": 1538758801,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758801,
    "end": 1538758876,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758876,
    "end": 1538758951,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538758951,
    "end": 1538759027,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538759027,
    "end": 1538759077,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538759077,
    "end": 1538759369,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538759369,
    "end": 1538759445,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538759445,
    "end": 1538759812,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538759812,
    "end": 1538761266,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538761266,
    "end": 1538761913,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538761913,
    "end": 1538773870,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538773870,
    "end": 1538774298,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774298,
    "end": 1538774447,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774447,
    "end": 1538774522,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774522,
    "end": 1538774598,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774598,
    "end": 1538774674,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774674,
    "end": 1538774750,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774750,
    "end": 1538774825,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774825,
    "end": 1538774900,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774900,
    "end": 1538774976,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538774976,
    "end": 1538775052,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775052,
    "end": 1538775127,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775127,
    "end": 1538775202,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775202,
    "end": 1538775277,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775277,
    "end": 1538775352,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775352,
    "end": 1538775377,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538775377,
    "end": 1538775637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538775637,
    "end": 1538778187,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538778187,
    "end": 1538778673,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538778673,
    "end": 1538778914,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538778914,
    "end": 1538784071,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538784071,
    "end": 1538784110,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538784110,
    "end": 1538784252,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538784252,
    "end": 1538784637,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538784637,
    "end": 1538784767,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538784767,
    "end": 1538785266,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538785266,
    "end": 1538785547,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1538785547,
    "end": 1538785910,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538785910,
    "end": 1538841394,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538841394,
    "end": 1538841506,
    "type": "",
    "label": "",
    "time": "Oct 6"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538841506,
    "end": 1538842913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538842913,
    "end": 1538845277,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538845277,
    "end": 1538845507,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538845507,
    "end": 1538845913,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538845913,
    "end": 1538846554,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538846554,
    "end": 1538846645,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538846645,
    "end": 1538846893,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538846893,
    "end": 1538847381,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538847381,
    "end": 1538855755,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538855755,
    "end": 1538856066,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538856066,
    "end": 1538866285,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538866285,
    "end": 1538868545,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538868545,
    "end": 1538869613,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538869613,
    "end": 1538870198,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538870198,
    "end": 1538870513,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538870513,
    "end": 1538874605,
    "type": "Entertainment",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538874605,
    "end": 1538874905,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538874905,
    "end": 1538875566,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538875566,
    "end": 1538925101,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538925101,
    "end": 1538925350,
    "type": "",
    "label": "",
    "time": "Oct 7"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538925350,
    "end": 1538925604,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538925604,
    "end": 1538932656,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538932656,
    "end": 1538933227,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538933227,
    "end": 1538933233,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538933233,
    "end": 1538933321,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538933321,
    "end": 1538948111,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1538948111,
    "end": 1538948315,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538948315,
    "end": 1538948801,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538948801,
    "end": 1538949042,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1538949042,
    "end": 1538949378,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1538949378,
    "end": 1539005247,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539005247,
    "end": 1539005487,
    "type": "",
    "label": "",
    "time": "Oct 8"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539005487,
    "end": 1539007013,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539007013,
    "end": 1539007245,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539007245,
    "end": 1539011307,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539011307,
    "end": 1539011794,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539011794,
    "end": 1539012048,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539012048,
    "end": 1539018036,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539018036,
    "end": 1539025591,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539025591,
    "end": 1539025659,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539025659,
    "end": 1539025902,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539025902,
    "end": 1539026156,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539026156,
    "end": 1539026600,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539026600,
    "end": 1539027116,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539027116,
    "end": 1539034089,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539034089,
    "end": 1539034268,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539034268,
    "end": 1539034512,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539034512,
    "end": 1539035187,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539035187,
    "end": 1539035442,
    "type": "",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539035442,
    "end": 1539035690,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539035690,
    "end": 1539035944,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539035944,
    "end": 1539036371,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539036371,
    "end": 1539089196,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539089196,
    "end": 1539090097,
    "type": "Entertainment",
    "label": "",
    "time": "Oct 9"
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539090097,
    "end": 1539090338,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539090338,
    "end": 1539091482,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539091482,
    "end": 1539091723,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539091723,
    "end": 1539092050,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539092050,
    "end": 1539092465,
    "type": "Entertainment",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539092465,
    "end": 1539092717,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539092717,
    "end": 1539093012,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539093012,
    "end": 1539102837,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539102837,
    "end": 1539103282,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539103282,
    "end": 1539103788,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539103788,
    "end": 1539104213,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539104213,
    "end": 1539111225,
    "type": "Others",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539111225,
    "end": 1539111713,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539111713,
    "end": 1539113358,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539113358,
    "end": 1539116216,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539116216,
    "end": 1539119181,
    "type": "Others",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539119181,
    "end": 1539119466,
    "type": "",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539119466,
    "end": 1539119914,
    "type": "Entertainment",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539119914,
    "end": 1539125289,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539125289,
    "end": 1539125667,
    "type": "Health",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NA",
    "start": 1539125667,
    "end": 1539126030,
    "type": "Others",
    "label": "",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539126030,
    "end": 1539126249,
    "type": "",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "LOW",
    "start": 1539126249,
    "end": 1539126677,
    "type": "Health",
    "label": "M",
    "time": ""
  },
  {
    "lane": 4,
    "id": "NO",
    "start": 1539126677,
    "end": 1539128506,
    "type": "Health",
    "label": "P",
    "time": ""
  },
  {
    "lane": 4,
    "id": "MEDIUM",
    "start": 1539128506,
    "end": 1539128510,
    "type": "Health",
    "label": "P",
    "time": ""
  }
]
  timeBegin = 1538503772,
  timeEnd = 1538695271;
