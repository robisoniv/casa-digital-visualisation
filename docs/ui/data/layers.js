console.log('loading layers data')

var layersData = [
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
      return '<h5 class="text-center mb-0">' + _data.properties.name +
        '</h5><p class="text-center mb-0">Total Exports (million USD):<br />' +
         _data.properties.all_commodities_export + '</p>';
    }
  },
  {
    "name": "export-countries-highlighted",
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
        "visibility": "visible"
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
        "fill-opacity": 1,
        "fill-outline-color": "rgb(0, 0, 0)",
        'fill-translate': [0,-7]
      },
      "filter": ["==", "iso3", ""]
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
      // pop tooltip with data.
      return '<h5 class="text-center mb-0">' + _data.properties.name +
        '</h5><p class="text-center mb-0">Total Imports (million USD):<br />' +
         _data.properties.all_commodities_import + '</p>';
    }
  },
  {
    "name": "import-countries-highlighted",
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
        "visibility": "visible"
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
        "fill-opacity": 1,
        "fill-outline-color": "rgb(0, 0, 0)",
        'fill-translate': [0,-7]
      },
      "filter": ["==", "iso3", ""]
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  },
  // {
  //   "name": "airports-mapbox-data",
  //   "type": "mapbox",
  //   "path": "none",
  //   "addLayerParams": {
  //     "default": {
  //       "id": "airports-mapbox-data",
  //       "type": "circle",
  //       "source": {
  //         "type": "vector",
  //         "url": "mapbox://kristianln.cjvlf8v0y0tca2rl9kgp0zoq3-8xp3c"
  //       },
  //       "source-layer": "Global_airports",
  //
  //       "paint": {
  //         "circle-color": "#6991c7",
  //         "circle-opacity": 0.8,
  //         "circle-radius": 5
  //       }
  //     },
  //     "dim_a": {}
  //   },
  //   tooltip: function(_data) {
  //     return '<h5 class="mb-0">' + _data.properties.abbrev + '</h5>';
  //     // pop tooltip with data.
  //   }
  // },
  {
    "name": "airports-mapbox-data-busiest",
    "type": "mapbox",
    "path": "none",
    "addLayerParams": {
      "default": {
        "id": "airports-mapbox-data-busiest",
        "type": "circle",
        "source": {
          "type": "vector",
          "url": "mapbox://kristianln.cjvlf8v0y0tca2rl9kgp0zoq3-8xp3c"
        },
        "source-layer": "Global_airports",

        "paint": {
          "circle-color": "#6991c7",
          "circle-opacity": 0.8,
          "circle-radius": 5
        },
        "filter": ["==", "top_20_busiest_airports", ""]
      },
      "dim_a": {}
    },
    tooltip: function(_data) {
      return '<p>' + _data.properties.abbrev + '</p>';
      // pop tooltip with data.
    }
  },
  {
    "name": "airports-mapbox-data-uk",
    "type": "mapbox",
    "path": "none",
    "addLayerParams": {
      "default": {
        "id": "airports-mapbox-data-uk",
        "type": "circle",
        "source": {
          "type": "vector",
          "url": "mapbox://kristianln.cjvlf8v0y0tca2rl9kgp0zoq3-8xp3c"
        },
        "source-layer": "Global_airports",

        "paint": {
          "circle-color": "#6991c7",
          "circle-opacity": 0.8,
          "circle-radius": 5
        },
        "filter": ["==", "iso3", ""]
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
          "circle-radius": 10,
          "circle-color": "blue"
        }
      }
    }},
       {
      "name": "UKairports-mapbox-data",
      "type": "mapbox",
      "path": "none",
      "addLayerParams": {
        "default": {
          "id": "UKairports-mapbox-data",
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://kristianln.cjvne9hos03qt2xmbc389p414-253yc"
          },
          "source-layer": "UKFreightAirports",

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
        'circle-stroke-width': 1
        }

      },

    tooltip: function(_data) {
      console.log(_data);
    }

  }},
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
        "dim_a":{}
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
          "circle-color": "gray"
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
          "circle-color": "brown"
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
      return "Transit station"
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
        return "School"
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
      return "Restaurant";
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
    "name": "UKports",
    "path": "./data/uk-ports.json",
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
             'coastal', '#f83600',
             'lake', '#ff5858',
             'river', '#fee140',


             /* other */ '#cfd9df'
         ]
        ,
        'circle-stroke-color':
            [
            'match',
            ['get', 'harbortype'],
             'coastal', '#ccc',
             'lake', '#ccc',
             'river', '#ccc',

            /* other */ '#ccc'
        ]
        ,
        'circle-stroke-width': 0.5
        }

      }
    },
    tooltip: function(_data) {
      console.log(_data);

      // Could deal with hyphenated words too ...
      var portName = _data.properties.port_name.toLowerCase().split(' ');

      portName = portName.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      return "<p class='mb-0'>"  + portName + "</p>";
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
             'coastal', '#f83600',
             'lake', '#ff5858',
             'river', '#fee140',


             /* other */ '#808080'
         ]
        ,
        'circle-stroke-color':
            [
            'match',
            ['get', 'harbortype'],
             'coastal', '#ccc',
             'lake', '#ccc',
             'river', '#ccc',

            /* other */ '#ccc'
        ]
        ,
        'circle-stroke-width': 0.5
        }

      }
    },
    tooltip: function(_data) {
      console.log(_data);

      // Could deal with hyphenated words too ...
      var portName = _data.properties.port_name.toLowerCase().split(' ');

      portName = portName.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      // portName.charAt(portName.indexOf('-') + 1).toUpperCase()

      return "<h5 class='mb-0'>"  + portName + "</h5>";
    }
  },
  {
    "name": "ports-busiest",
    "path": "./data/ports.json",
    "type": "geojson",
    "addLayerParams": {
      "default": {
        "type": "circle",
        "paint": {
          "circle-radius": 3,
          "circle-color": "#537895"
        },
        "filter": ["==", "top_20_busiest_ports", ""]
      }
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  },
  {
    "name": "ports-uk",
    "path": "./data/ports.json",
    "type": "geojson",
    "addLayerParams": {
      "default": {
        "type": "circle",
        "paint": {
          "circle-radius": 3,
          "circle-color": "#537895"
        },
        "filter": ["==", "iso3", ""]
      }
    },
    tooltip: function(_data) {
      console.log(_data);
      // pop tooltip with data.
    }
  },
  {
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
    "name": "3d-buildings",
    "path": "none",
    "type": "mapbox",
    "addLayerParams": {
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 10,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          "interpolate", ["linear"],
          ["zoom"],
          15, 0,
          15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"],
          ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }
    }
  },

];
