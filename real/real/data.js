var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "路邊",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4624231150464517,
        "pitch": -0.48068586526067136,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.025253816455768,
          "pitch": 0.23922151095355204,
          "rotation": 11.780972450961727,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2174037385730365,
          "pitch": -0.4571355201304037,
          "title": "台北文創",
          "text": "<span style=\"font-family: __Montserrat_b8f562, __Montserrat_Fallback_b8f562, __Noto_Sans_TC_fd1d27, __Noto_Sans_TC_Fallback_fd1d27, sans-serif; font-size: 16px;\">台灣第一個為文化創意產業量身打造的BOT案，</span><span style=\"font-family: __Montserrat_b8f562, __Montserrat_Fallback_b8f562, __Noto_Sans_TC_fd1d27, __Noto_Sans_TC_Fallback_fd1d27, sans-serif; font-size: 16px;\">共創城市光榮感與幸福感。</span><img src=\"data:image/png;base64,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\" alt=\"\">"
        }
      ]
    },
    {
      "id": "1-",
      "name": "野地",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.734532202299647,
        "pitch": -0.45219297171790807,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0270477743925053,
          "pitch": 0.1547271270616104,
          "rotation": 0.7853981633974483,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6838656395829847,
          "pitch": -0.0035747871383442487,
          "title": "<p class=\"MsoNormal\"><span style=\"font-size:10.5pt;font-family:&quot;新細明體&quot;,serif;\nmso-ascii-font-family:Arial;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\nArial;mso-bidi-font-family:Arial;color:black;mso-themecolor:text1\">阿勒泰塔彎柏</span><em><span style=\"font-family:&quot;新細明體&quot;,serif;mso-ascii-font-family:Arial;\nmso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Arial;mso-bidi-font-family:\nArial;font-style:normal\">格多國家公園</span></em></p>",
          "text": "<p class=\"MsoNormal\"><span style=\"font-size:10.5pt;font-family:&quot;新細明體&quot;,serif;\nmso-ascii-font-family:Arial;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\nArial;mso-bidi-font-family:Arial;color:black;mso-themecolor:text1\">阿勒泰塔彎柏</span><em><span style=\"font-family:&quot;新細明體&quot;,serif;mso-ascii-font-family:Arial;\nmso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Arial;mso-bidi-font-family:\nArial;font-style:normal\">格多國家公園</span></em>是蒙古國的<em><span style=\"font-family:&quot;新細明體&quot;,serif;mso-ascii-font-family:\nArial;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Arial;\nmso-bidi-font-family:Arial;font-style:normal\">國家公園</span></em>，位於該國西部，處於巴彥烏列蓋省，成立於<span lang=\"EN-US\" style=\"font-size:10.5pt;font-family:&quot;Arial&quot;,sans-serif;color:black;\nmso-themecolor:text1\">1996</span><span style=\"font-size:10.5pt;font-family:\n&quot;新細明體&quot;,serif;mso-ascii-font-family:Arial;mso-fareast-theme-font:minor-fareast;\nmso-hansi-font-family:Arial;mso-bidi-font-family:Arial;color:black;mso-themecolor:\ntext1\">年，面積</span><span lang=\"EN-US\" style=\"font-size:10.5pt;font-family:&quot;Arial&quot;,sans-serif;\ncolor:black;mso-themecolor:text1\">6,362</span><span style=\"font-size:10.5pt;\nfont-family:&quot;新細明體&quot;,serif;mso-ascii-font-family:Arial;mso-fareast-theme-font:\nminor-fareast;mso-hansi-font-family:Arial;mso-bidi-font-family:Arial;\ncolor:black;mso-themecolor:text1\">平方公里</span><span lang=\"EN-US\" style=\"font-size:10.5pt;font-family:&quot;Arial&quot;,sans-serif;color:black;mso-themecolor:\ntext1\"><o:p></o:p></span></p>"
        }
      ]
    },
    {
      "id": "2-",
      "name": "花東海岸公路",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.2809224647704873,
        "pitch": -0.1829554961103561,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.18171352366715965,
          "pitch": 0.14761791346427344,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6845256604577745,
          "pitch": -0.7656991508048083,
          "title": "<span style=\"color: rgb(0, 0, 0); font-family: &quot;Segoe UI&quot;, Arial, Helvetica, &quot;Microsoft JhengHei Correct&quot;, &quot;Microsoft JhengHei&quot;, PMingLiU, sans-serif; font-size: 17px; background-color: rgba(58, 68, 84, 0.8);\">花東海岸公路</span>",
          "text": "<span style=\"color: rgb(0, 0, 0); font-family: &quot;Segoe UI&quot;, Arial, Helvetica, &quot;Microsoft JhengHei Correct&quot;, &quot;Microsoft JhengHei&quot;, PMingLiU, sans-serif; font-size: 17px;\">又稱東成公路、東濱公路</span><span style=\"color: rgb(0, 0, 0); font-family: &quot;Segoe UI&quot;, Arial, Helvetica, &quot;Microsoft JhengHei Correct&quot;, &quot;Microsoft JhengHei&quot;, PMingLiU, sans-serif; font-size: 17px;\">，並與省道台9線交界，緊臨太平洋，沿途處處是美景，是常令遊客留連的美麗公路。</span>"
        }
      ]
    },
    {
      "id": "3-",
      "name": "加拿大",
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
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.83234421051446,
        "pitch": -0.417009813543201,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.03006992008636189,
          "pitch": -0.07187710235473688,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.060507549236556,
          "pitch": 0.5486684644901079,
          "title": "<b style=\"color: rgb(32, 33, 34); font-family: sans-serif; background-color: rgb(255, 255, 255);\">北極群島</b>",
          "text": "對 <font color=\"#202122\" face=\"sans-serif\"><span style=\"font-size: 16px; background-color: rgb(255, 255, 255);\"><b>就這樣</b></span></font>"
        }
      ]
    },
    {
      "id": "4-",
      "name": "山上",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6365458242119555,
        "pitch": -0.21136522580151862,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.6960540992185003,
          "pitch": 0.6694202585027789,
          "title": "法屬玻里尼西亞",
          "text": "<b style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Aʻakapa</b><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">&nbsp;is a small village on&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Nuku_Hiva\" title=\"Nuku Hiva\" style=\"color: var(--color-progressive,#36c); background: none rgb(255, 255, 255); border-radius: 2px; overflow-wrap: break-word; font-family: sans-serif; font-size: 16px; font-weight: 400;\">Nuku Hiva</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">, in the&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Marquesas_Islands\" title=\"Marquesas Islands\" style=\"color: var(--color-progressive,#36c); background: none rgb(255, 255, 255); border-radius: 2px; overflow-wrap: break-word; font-family: sans-serif; font-size: 16px; font-weight: 400;\">Marquesas Islands</a><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">.</span><sup id=\"cite_ref-1\" class=\"reference\" style=\"line-height: 1; unicode-bidi: isolate; text-wrap: nowrap; font-size: 12.8px; color: rgb(32, 33, 34); font-family: sans-serif; background-color: rgb(255, 255, 255);\"><a href=\"https://en.wikipedia.org/wiki/A%CA%BBakapa#cite_note-1\" style=\"color: var(--color-progressive,#36c); background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; border-radius: 2px; overflow-wrap: break-word;\"><span class=\"cite-bracket\" style=\"pointer-events: none;\">[</span>1<span class=\"cite-bracket\" style=\"pointer-events: none;\">]</span></a></sup><span style=\"color: rgb(32, 33, 34); font-family: sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">&nbsp;It lies on Aʻakapa Bay.</span>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
