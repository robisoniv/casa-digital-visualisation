console.log('loading layers data')

var layersData = [
    // // We already have airports loaded, below
    // {
    //   "name": "airports-json",
    //   "path": "./data/airports.json",
    //   "type": "geojson",
    //   "addLayerParams": {
    //     "default": {
    //       "type": "circle",
    //       "paint": {
    //         "circle-radius": [
    //           "match",
    //           ["get", "type"],
    //           "small", 3,
    //           "mid", 5,
    //           "major", 9,
    //           2
    //         ],
    //         "circle-color": [
    //           "match",
    //           ["get", "type"],
    //           "small", "#fbb03b",
    //           "mid", "#223b53",
    //           "major", "yellow",
    //           "#ccc"
    //         ]
    //       }
    //     },
    //     "dim_a": {}
    //   },
    //   tooltip: function(_data) {
    //
    //     console.log( _data.properties.abbrev);
    //     // console.log( _data);
    //     // pop tooltip with data.
    //   }
    // },
    {
      "name": "export-countries",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "id": "export-countries",
        "type": "fill",
        "source": {
          "type": "vector",
          "url": "mapbox://kristianln.cjvl9zsp80snn33po4igmbs80-1uw2l"
        },
        "layout": {
          "visibility": "none"
        },
        "source-layer": "Global_data",
        "paint": {
          "fill-color": [
            "interpolate-hcl",
            ["exponential", 1.1],
            ["get", "normalised_export_2017"],
            2.00,
            ["to-color", "#deebf7"],
            15.00,
            ["to-color", "#537895"]
          ],
          "fill-opacity": 0.8,
          "fill-outline-color": "rgb(250, 250, 250)"
        }
      },
      tooltip: function(_data) {
        console.log(_data);
        // pop tooltip with data.
      }
    },
    {
      "name": "import-countries",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "id": "import-countries",
        "type": "fill",
        "source": {
          "type": "vector",
          "url": "mapbox://kristianln.cjvl9zsp80snn33po4igmbs80-1uw2l"
        },
        "layout": {
          "visibility": "none"
        },
        "source-layer": "Global_data",
        "paint": {
          "fill-color": [
            "interpolate-hcl",
            ["exponential", 1.1],
            ["get", "normalised_import_2017"],
            4.98,
            ["to-color", "#fff7bc"],
            15.00,
            ["to-color", "#d95f0e"]
          ],
          "fill-opacity": 0.75,
          "fill-outline-color": "rgb(250, 250, 250)"
        }
      },
      tooltip: function(_data) {
        console.log(_data);
        // pop tooltip with data.
      }
    },
    {
      "name": "airports-mapbox-data",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "airports-mapbox-data",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://kristianln.cjvlf8v0y0tca2rl9kgp0zoq3-8xp3c"
          },
          "source-layer": "Global_airports",

          "paint": {
        // make circles larger as the user zooms from z12 to z22
        'circle-radius': [
            'match',
            ['get', 'size'],
            'small', 2,
            'mid', 4,
            'major', 6,
            /* other */ 4
        ],
        //                 {
        //     'base': 1.75,
        //     'stops': [[2, 2], [12, 180]]
        // },
        // color circles by ethnicity, using a match expression
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
        'circle-color': [
            'match',
            ['get', 'usage'],
            'civilian', '#5769D3',
            'military/civilian', '#38f9d7',
            'military', '#6f86d6',
            'spaceport', '#48c6ef',
            /* other */ '#ccc'
        ],
        'circle-stroke-color': [
            'match',
            ['get', 'usage'],
            'civilian', '#ccc',
            'military/civilian', '#ccc',
            'military', '#ccc',
            'spaceport', '#ccc',
            /* other */ '#ccc'
        ],
        'circle-stroke-width': 0.5
        }
        },
        "dim_a": {}
      },
      tooltip: function(_data) {
        return '<p>' + _data.properties.abbrev + '</p>';
        // pop tooltip with data.
      }
    },
    {
      "name": "heathrow-point",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "heathrow-point",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.0o2mnjq1"
          },
          "source-layer": "Heathrow-3p4trr",
          "paint": {
            "circle-radius": 4,
            "circle-color": "blue"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }
    },
    {
      "name": "heathrow-stations",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "heathrow-stations",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.5xepc2ho"
          },
          "source-layer": "Heathrow_Station-20t8o9",
          "paint": {
            "circle-radius": 4,
            "circle-color": "#B51C97"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "heathrow-hotels",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "heathrow-hotels",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.5c940sk4"
          },
          "source-layer": "Heathrow_Hotel-10lk8m",
          "paint": {
            "circle-radius": 4,
            "circle-color": "#FFD104"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "heathrow-restaurants",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "heathrow-restaurants",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.5zqbtsdc"
          },
          "source-layer": "Heathrow_restaurant-drs6o5",
          "paint": {
            "circle-radius": 4,
            "circle-color": "#5841D8"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "heathrow-buffer",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "heathrow-buffer",
          "type": "fill",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.0wo2dyp3"
          },
          "source-layer": "Heathrow-7fyjdj",
          "paint": {
            "fill-color": "#9795f0",
            "fill-opacity": 0.2
          }

          // "paint": {
          //   "line-color": "#ff69b4",
          //   "line-width": 1
          // }
        }
      },
    tooltip: function(_data) {
      console.log(_data);
    }

  },
    {
      "name": "tilbury-point",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "tilbury-point",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.2uwuevhf"
          },
          "source-layer": "Port_of_Tilbury-7w0i1u",
          "paint": {
            "circle-radius": 10,
            "circle-color": "green"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "tilbury-stations",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "tilbury-stations",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.d31i56v7"
          },
          "source-layer": "Tilbury_Station-0r7h8t",
          "paint": {
            "circle-radius": 4,
            "circle-color": "red"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "tilbury-schools",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "tilbury-schools",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.9wglwlup"
          },
          "source-layer": "Tilbury_School-1s7kw8",
          "paint": {
            "circle-radius": 4,
            "circle-color": "blue"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "tilbury-restaurants",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "tilbury-restaurants",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.01nbv3qq"
          },
          "source-layer": "Tilbury_Restaurant-9m8bys",
          "paint": {
            "circle-radius": 4,
            "circle-color": "brown"
          }
        }
      },
      tooltip: function(_data) {
        console.log(_data);
      }

    },
    {
      "name": "tilbury-buffer",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "tilbury-buffer",
          "type": "fill",
          "source": {
            "type": "vector",
            "url": "mapbox://ucfnlei.bw1fkj0o"
          },
          "source-layer": "port-a1biar",
          "paint": {
            "fill-color": "#a3bded",
            "fill-opacity": 0.2
          }

          // "paint": {
          //   "line-color": "#ff69b4",
          //   "line-width": 1
          // }
        }
      },
    tooltip: function(_data) {
      console.log(_data);
    }

  },

  {
    "name": "ports",
    "path": "./data/ports.json",
    "type": "geojson",
    "addLayerParams": {
      "default": {
        "type": "circle",
        "paint":{
        // make circles larger as the user zooms from z12 to z22
        'circle-radius': [
            'match',
            ['get', 'harborsize'],
            'V', 2,
            'S', 4,
            'M', 6,
            'L', 8,
            /* other */ 5
        ],
        //                 {
        //     'base': 1.75,
        //     'stops': [[2, 2], [12, 180]]
        // },
        // color circles by ethnicity, using a match expression
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
        'circle-color':
         [
             'match',
            ['get', 'harbortype'],
             'CB', '#f83600',
             'CN', '#f83600',
             'CT', '#f83600',
             'LC', '#ff5858',
             'RB', '#fee140',
             'RN', '#fee140',
             'RT', '#fee140',
             
             /* other */ '#808080'
         ]
        ,
        'circle-stroke-color':
            [
            'match',
            ['get', 'harbortype'],
             'CB', '#ccc',
             'CN', '#ccc',
             'CT', '#ccc',
             'LC', '#ccc',
             'RB', '#ccc',
             'RN', '#ccc',
             'RT', '#ccc',
            
            /* other */ '#ccc'
        ]
        ,
        'circle-stroke-width': 0.5
        }

      }
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  }, {
    "name": "us-states",
    "path": "./data/us-states.json",
    "type": "geojson",
    "addLayerParams": {
      "type": "fill",
      "layout": {},
      "paint": {
        "fill-color": "#088",
        "fill-opacity": 0.8
      }
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  },

  {
    "name": "china-demo-poly",
    "path": "./data/china-demo-poly.json",
    "type": "geojson",
    "addLayerParams": {
      "type": "fill",
      "layout": {},
      "paint": {
        "fill-color": "#088",
        "fill-opacity": 0.8
      }
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  }
];
