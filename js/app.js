angular.module('myApp', [
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/login.html',
      controller: 'loginController'
    })
    .when("/rooms", {
        templateUrl: "pages/roomsIndex.html",
        controller: "mainController"
    })
    .when("/rooms/:room", {
      templateUrl: "pages/room.html",
      controller: "mainController"
    });
}).run( function ($rootScope) {

$rootScope.allItems = {
        "livingRoom": [{
            name: "Door",
            description: "Adjust door  hinge",
            price: 0,
            id: 051
        }, {
            name: "Door",
            description: "Replace front door",
            price: 0,
            id: 052
        }, {
            name: "Door",
            description: "Repair front door",
            price: 0,
            id: 053,
        }, {
            name: "Ceiling",
            description: "Ceiling fan light glass cover (Parts + 10% + ,3.) (Parts + 10% + ,3.00)",
            price: 0,
            id: 054
        }, {
            name: "Door",
            description: "Door stopper 1/2 moon",
            price: 0,
            id: 055
        }, {
            name: "Window",
            description: "Replace broken window glass (Cost + 10% + ,30.00)",
            price: 0,
            id: 056
        }, {
            name: "Electric",
            description: "Decora plate",
            price: 2.20,
            id: 057
        }, {
            name: "Electric",
            description: "Ligth switch or outlet plate",
            price: 2.20,
            id: 060
        }, {
            name: "Light",
            description: "Regular light bulbs",
            price: 2.20,
            id: 061
        }, {
            name: "Closet",
            description: "Replace regular light bulb",
            price: 2.48,
            id: 062
        }, {
            name: "Cabinet",
            description: "Catch clip remove and install new",
            price: 4.40,
            id: 063
        }, {
            name: "Door",
            description: "Door stopper solid stick",
            price: 4.68,
            id: 064
        }, {
            name: "Blind",
            description: "Remove blinds and brackets",
            price: 5.50,
            id: 065
        }, {
            name: "Electric",
            description: "Ligth switch or outlet double plate",
            price: 5.50,
            id: 066
        }, {
            name: "Lock",
            description: "Remove chain from main entrance door and frame",
            price: 5.50,
            id: 067
        }, {
            name: "Mirror",
            description: "Remove plastic framed mirror from door or wall",
            price: 5.50,
            id: 070
        }, {
            name: "Smoke Alarm",
            description: "Reinstall/Adjust",
            price: 5.50,
            id: 071
        }, {
            name: "Smoke Alarm",
            description: "Smoke alarm Battery",
            price: 5.50,
            id: 072
        }, {
            name: "Vents",
            description: "Adjust vent screen",
            price: 5.50,
            id: 073
        }, {
            name: "Window",
            description: "Remove window blinds and brakets",
            price: 5.50,
            id: 074
        }, {
            name: "Door",
            description: "Replace wood molding inside around door frame, top molding only",
            price: 6.60,
            id: 075
        }, {
            name: "Electric",
            description: "Regular outlet",
            price: 6.60,
            id: 076
        }, {
            name: "Cabinet",
            description: "Cabinet doors and drawers Individual Knob / Handles ",
            price: 7.70,
            id: 077
        }, {
            name: "Electric",
            description: "Regular Light switch",
            price: 8.25,
            id: 080
        }, {
            name: "Electric",
            description: "Decora outlets",
            price: 9.90,
            id: 081
        }, {
            name: "Electric",
            description: "Decora switch",
            price: 9.90,
            id: 082
        }, {
            name: "Cabinet",
            description: "Seal gaps inside the wall cabinet",
            price: 11.00,
            id: 083
        }, {
            name: "Light",
            description: "4' Fluorecent light bulb",
            price: 16.50,
            id: 084
        }, {
            name: "Wire",
            description: "Remove extra cable wires (Cable and phone wires)",
            price: 11.00,
            id: 085
        }, {
            name: "A/C",
            description: "Replace Central Air Conditioner Filter",
            price: 16.50,
            id: 086
        }, {
            name: "Door",
            description: "Replace wood molding inside around door frame, side molding only",
            price: 16.50,
            id: 087
        }, {
            name: "Window",
            description: "Adjust window loose frame",
            price: 16.50,
            id: 088
        }, {
            name: "Window",
            description: "Install window lock",
            price: 16.50,
            id: 089
        }, {
            name: "Cabinet",
            description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
            price: 17.88,
            id: 091
        }, {
            name: "Door",
            description: "Door knob",
            price: 20.90,
            id: 092
        }, {
            name: "Drawer",
            description: "Guide",
            price: 22.00,
            id: 093
        }, {
            name: "A/C",
            description: "Pig Tail on air conditioner / Reduce air conditioner wire",
            price: 27.50,
            id: 094
        }, {
            name: "A/C",
            description: "Reduce electric cord on Air Conditioner",
            price: 27.50,
            id: 095
        }, {
            name: "Ceiling",
            description: "Remove ceiling fan extension pipe",
            price: 27.50,
            id: 096
        }, {
            name: "Door",
            description: "Adjust sliding glass door",
            price: 27.50,
            id: 097
        }, {
            name: "Door",
            description: "Replacer portion of broken door frame up to 6",
            price: 27.50,
            id: 098
        }, {
            name: "Electric",
            description: "Remove exterior electric box & recess the box inside the wall",
            price: 27.50,
            id: 099
        }, {
            name: "Smoke",
            description: "Alarm	Smoke Alarm (existing wiring)",
            price: 27.50,
            id: 100
        }, {
            name: "Wall heater",
            description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
            price: 30.80,
            id: 101
        }, {
            name: "Door",
            description: "New hinges pair rounded or square finished cut",
            price: 33.00,
            id: 102
        }, {
            name: "Door",
            description: "Cabinet door Cut / Trim",
            price: 33.00,
            id: 103
        }, {
            name: "Window",
            description: "New window screen",
            price: 33.00,
            id: 104
        }, {
            name: "Door",
            description: "Replace Threshold",
            price: 38.50,
            id: 105
        }, {
            name: "Door",
            description: "Replace wood moldings inside around door frame, sides and top",
            price: 38.50,
            id: 106
        }, {
            name: "Door",
            description: "Install or replace weather strip",
            price: 44.0,
            id: 107
        }, {
            name: "Light",
            description: "Dimmer",
            price: 39.60,
            id: 108
        }, {
            name: "Door",
            description: "New front door locks",
            price: 44.00,
            id: 109
        }, {
            name: "Light",
            description: "'6' LED Light fixture on existing can",
            price: 44.00,
            id: 110
        }, {
            name: "Switch",
            description: "Double Dimmer Switch",
            price: 55.00,
            id: 111
        }, {
            name: "A/C",
            description: "Install an electric outlet next to air conditioner",
            price: 55.00,
            id: 112
        }, {
            name: "Door",
            description: "New front door locks Kwikset longer latch",
            price: 55.00,
            id: 113
        }, {
            name: "Light",
            description: "New Electric Box",
            price: 55.00,
            id: 114
        }, {
            name: "Wall heater",
            description: "Digital Thermostat",
            price: 55.00,
            id: 115
        }, {
            name: "Smoke Alarm",
            description: "Smoke Alarm and CO2 Combo (existing wiring)",
            price: 71.50,
            id: 116
        }, {
            name: "Smoke Alarm",
            description: "Smoke Alarm (new wiring)",
            price: 72.60,
            id: 117
        }, {
            name: "Light",
            description: "Install Track light x 3 bulbs",
            price: 1.75,
            id: 118
        }, {
            name: "Light",
            description: "'6' LED Light (connection, can)",
            price: 104.50,
            id: 119
        }, {
            name: "Smoke",
            description: "Alarm	Smoke Alarm and CO2 Combo (new wiring including the box)",
            price: 124.30,
            id: 120
        }, {
            name: "A/C",
            description: "Install New Air Conditioner",
            price: 159.50,
            id: 121
        }, {
            name: "Wall heater",
            description: "Wall heater cover replace including 4 mounting brackets",
            price: 247.50,
            id: 122
        }, {
            name: "Ceiling",
            description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
            price: 275.00,
            id: 123
        }, {
            name: "Door",
            description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+,200.00)",
            price: 302.50,
            id: 124
        }, {
            name: "Ceiling",
            description: "Smooth ceiling in living room",
            price: 440.00,
            id: 125
        }, {
            name: "Wall heater",
            description: "Wall gas heater (25,000 btus) with digital thermostat",
            price: 770.00,
            id: 126
        }],
        "entrance": [{
                name: "Ceiling",
                description: "Ceiling fan light glass cover (Parts + 10% + 3.00)",
                price: 1,
                id: 127
            },
            {
                name: "Window",
                description: "Replace broken window glass (Cost + 10% + 30.00)",
                price: 1,
                id: 128
            },
            {
                name: "Electric",
                description: "Decora plate",
                price: 2.20,
                id: 129
            },
            {
                name: "Electric",
                description: "Ligth switch or outlet plate",
                price: 2.20,
                id: 130
            },
            {
                name: "Electric",
                description: "Ligth switch or outlet double plate",
                price: 5.50,
                id: 131
            },
            {
                name: "Ligth",
                description: "Regular light bulbs",
                price: 2.20,
                id: 132
            },
            {
                name: "Closet",
                description: "Replace regular light bulb",
                price: 2.48,
                id: 133
            },
            {
                name: "Door",
                description: "Catch clip remove and install new",
                price: 4.40,
                id: 134
            },
            {
                name: "Cabinet",
                description: "Catch clip remove and install new",
                price: 4.40,
                id: 135
            },
            {
                name: "Door",
                description: "Door stopper solid stick",
                price: 4.68,
                id: 136
            },
            {
                name: "Blinds",
                description: "Remove blinds and brackets",
                price: 5.50,
                id: 137
            },
            {
                name: "Lock",
                description: "Remove chain from main entrance door and frame",
                price: 5.50,
                id: 138
            },
            {
                name: "Mirror",
                description: "Remove plastic framed mirror from door or wall",
                price: 5.50,
                id: 139
            },
            {
                name: "Smoke Alarm",
                description: "Reinstall/Adjust",
                price: 5.50,
                id: 140
            },
            {
                name: "Smoke Alarm",
                description: "Smoke alarm Battery",
                price: 5.50,
                id: 141
            },
            {
                name: "Vents",
                description: "Adjust vent screen",
                price: 5.50,
                id: 142
            },
            {
                name: "Window",
                description: "Remove window blinds and brakets",
                price: 5.50,
                id: 143
            },
            {
                name: "Door",
                description: "Replace wood molding inside around door frame, top molding only",
                price: 6.60,
                id: 144
            },
            {
                name: "Electric",
                description: "Regular outlet",
                price: 6.60,
                id: 144
            },
            {
                name: "Cabinet",
                description: "Cabinet doors and drawers Individual Knob/Handles",
                price: 7.70,
                id: 145
            },
            {
                name: "Electric",
                description: "Regular Light switch",
                price: 8.25,
                id: 146
            },
            {
                name: "Electric",
                description: "Decora outlets",
                price: 9.90,
                id: 147
            },
            {
                name: "Cabinet",
                description: "Seal gaps inside the wall cabinet",
                price: 11.00,
                id: 148
            },
            {
                name: "Wire",
                description: "Remove extra cable wires (Cable and phone wires)",
                price: 11.00,
                id: 149
            },
            {
                name: "Light",
                description: "4' Fluorecent light bulb",
                price: 16.50,
                id: 150
            },
            {
                name: "Door",
                description: "Door stopper 1/2 moon",
                price: 16.50,
                id: 151
            },
            {
                name: "A/C",
                description: "Replace Central Air Conditioner Filter",
                price: 16.50,
                id: 152
            },
            {
                name: "Door",
                description: "Replace wood molding inside around door frame, side molding only",
                price: 16.50,
                id: 153
            },
            {
                name: "Window",
                description: "Adjust window loose frame",
                price: 16.50,
                id: 154
            },
            {
                name: "Window",
                description: "Install window lock",
                price: 16.50,
                id: 155
            },
            {
                name: "Cabinet",
                description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
                price: 17.88,
                id: 156
            },
            {
                name: "Door",
                description: "Door knob",
                price: 20.90,
                id: 157
            },
            {
                name: "Drawer",
                description: "Guide",
                price: 22.00,
                id: 158
            },
            {
                name: "A/C",
                description: "Pig Tail on air conditioner / Reduce air conditioner wire",
                price: 27.50,
                id: 159
            },
            {
                name: "A/C",
                description: "Reduce electric cord on Air Conditioner",
                price: 27.50,
                id: 160
            },
            {
                name: "Ceiling",
                description: "Remove ceiling fan extension pipe",
                price: 27.50,
                id: 161
            },
            {
                name: "Door",
                description: "Adjust sliding glass door",
                price: 27.50,
                id: 162
            },
            {
                name: "Door",
                description: "Replacer portion of broken door frame up to 6''",
                price: 27.50,
                id: 163
            },
            {
                name: "Electric",
                description: "Remove exterior electric box & recess the box inside the wall",
                price: 27.50,
                id: 164
            },
            {
                name: "Smoke Alarm",
                description: "Smoke Alarm (existing wiring)",
                price: 27.50,
                id: 165
            },
            {
                name: "Wall heater",
                description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
                price: 30.80,
                id: 166
            },
            {
                name: "Door",
                description: "New hinges pair rounded or square finished cut",
                price: 33.00,
                id: 167
            },
            {
                name: "Door",
                description: "Cabinet door Cut / Trim	",
                price: 33.00,
                id: 168
            },
            {
                name: "Window",
                description: "New window screen",
                price: 33.00,
                id: 169
            },
            {
                name: "Door",
                description: "Replace Threshold",
                price: 38.50,
                id: 170
            },
            {
                name: "Door",
                description: "Replace wood moldings inside around door frame, sides and top",
                price: 38.50,
                id: 171
            },
            {
                name: "Door",
                description: "Replace Threshold",
                price: 38.50,
                id: 172
            },
            {
                name: "Door",
                description: "Install or replace weather strip",
                price: 39.60,
                id: 173
            },
            {
                name: "Light",
                description: "Dimmer",
                price: 39.60,
                id: 174
            },
            {
                name: "Door",
                description: "New front door locks",
                price: 44.00,
                id: 175
            },
            {
                name: "Light",
                description: "6'' LED Light fixture on existing can",
                price: 44.00,
                id: 176
            },
            {
                name: "Switch",
                description: "Double Dimmer Switch",
                price: 55.00,
                id: 177
            },
            {
                name: "A/C",
                description: "Install an electric outlet next to air conditioner",
                price: 55.00,
                id: 178
            },
            {
                name: "Door",
                description: "New front door locks Kwikset longer latch",
                price: 55.00,
                id: 179
            },
            {
                name: "Light",
                description: "New Electric Box",
                price: 55.00,
                id: 180
            },
            {
                name: "Wall heater",
                description: "Digital Thermostat",
                price: 55.00,
                id: 181
            },
            {
                name: "Smoke Alarm",
                description: "Smoke Alarm and CO2 Combo (existing wiring)",
                price: 71.50,
                id: 182
            },
            {
                name: "Smoke Alarm",
                description: "Smoke Alarm (new wiring)",
                price: 72.60,
                id: 183
            },
            {
                name: "Light",
                description: "Install Track light x 3 bulbs",
                price: 101.75,
                id: 184
            },
            {
                name: "Light",
                description: "6'' LED Light (connection, can)",
                price: 104.50,
                id: 185
            },
            {
                name: "Smoke Alarm",
                description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
                price: 124.30,
                id: 186
            },
            {
                name: "A/C",
                description: "Install New Air Conditioner",
                price: 159.50,
                id: 187
            },
            {
                name: "Door",
                description: "Replace front door",
                price: 242.00,
                id: 188
            },
            {
                name: "Wall heater",
                description: "Wall heater cover replace including 4 mounting brackets",
                price: 247.50,
                id: 189
            },
            {
                name: "Ceiling",
                description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
                price: 275.00,
                id: 190
            },
            {
                name: "Door",
                description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+200.00)",
                price: 302.50,
                id: 191
            },
            {
                name: "Ceiling",
                description: "Smooth ceiling in living room",
                price: 440.00,
                id: 192
            },
            {
                name: "Wall heater",
                description: "Wall gas heater (25,000 btus) with digital thermostat",
                price: 770.00,
                id: 193
            },
            {
                name: "Door",
                description: "Adjust door hinge",
                price: 0,
                id: 194
            },
            {
                name: "Door",
                description: "Repair front door",
                price: 0,
                id: 195
            }

        ]
  };

  $rootScope.pageTitle = "Login";
  $rootScope.items = [];
  $rootScope.itemsToBeReplaced = [];
  $rootScope.apartmentInfo = {
    "buildingNum": "",
    "apartmentNum": ""
  };


  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    // collecting checked field items  
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    if (checkboxes.length) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          let index = checkboxes[i].getAttribute("data-item");
          $rootScope.itemsToBeReplaced.push({
            "name": $rootScope.items[index].name,
            "description": $rootScope.items[index].description,
            "price": $rootScope.items[index].price,
            "id": $rootScope.items[index].id,
            "room": $rootScope.pageTitle
          });
        }
      }
    }
    // rendering a new list of items
    let room = next.split("rooms")[1];
    switch (room) {

        case "":
            $rootScope.pageTitle = "Rooms Index";
            break;
        case "/:living":
            $rootScope.items = $rootScope.allItems.livingRoom;
            $rootScope.pageTitle = "Living Room";
            break;
        case "/:entrance":
            $rootScope.items = $rootScope.allItems.entrance;
            $rootScope.pageTitle = "Entrance";
            break;
        default:
            break;
    }
    // re-check relevvant checkboxes    
  });
});