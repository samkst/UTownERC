var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc-near-escalator",
      "name": "ERC Near Escalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9015169442685558,
        "pitch": 0.11988543806481289,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5322001225828963,
          "pitch": 0.10880008280646791,
          "rotation": 0.7853981633974483,
          "target": "1-tembusu-tree"
        },
        {
          "yaw": -1.0361345421221149,
          "pitch": 0.062071929757657074,
          "rotation": 11.780972450961727,
          "target": "2-starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1377708779553277,
          "pitch": 0.06970745693470803,
          "title": "NUS U Town Benefactors",
          "text": "This wall displays the various benefactors that contributed to the development of NUS U Town"
        }
      ]
    },
    {
      "id": "1-tembusu-tree",
      "name": "Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.10921727128023662,
        "pitch": 0.18795005638622442,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6854638397386665,
          "pitch": 0.1429470984679213,
          "rotation": 0.7853981633974483,
          "target": "0-erc-near-escalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.084366253649878,
          "pitch": 0.10785594840342583,
          "title": "Tembusu Tree",
          "text": "The Tembusu Tree can be found in our very own five-dollar bill!"
        }
      ]
    },
    {
      "id": "2-starbucks",
      "name": "Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5725831619432178,
        "pitch": 0.04314344022926164,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3104764524083414,
          "pitch": -0.14973128553925363,
          "rotation": 0.7853981633974483,
          "target": "0-erc-near-escalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9434081488971628,
          "pitch": 0.27602014211749193,
          "title": "NUSL Express Machine",
          "text": "This is a fully automated self-service book lending and returning machine which allows students to save on time travelling to other libraries."
        }
      ]
    }
  ],
  "name": "ERC Tour (Sam)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
