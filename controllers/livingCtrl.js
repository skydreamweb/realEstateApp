myApp.controller('livingCtrl', ['$scope', function($scope) {
  $scope.data = [
    {
      name: "Door",
      description: "Adjust door  hinge",
      price: 0,
      id: 0051
    }, {
      name: "Door",
      description: "Replace front door",
      price: 0,
      id: 0052
    }, {
      name: "Door",
      description: "Repair front door",
      price: 0,
      id: 0053,
    }, {
      name: "Ceiling",
      description: "Ceiling fan light glass cover (Parts + 10% + ,3.) (Parts + 10% + ,3.00)",
      price: 0,
      id: 0054
    }, {
      name: "Door",
      description: "Door stopper 1/2 moon",
      price: 0,
      id: 0055
    }, {
      name: "Window",
      description: "Replace broken window glass (Cost + 10% + ,30.00)",
      price: 0,
      id: 0056
    }, {
      name: "Electric",
      description: "Decora plate",
      price: 2.20,
      id: 0057
    }, {
      name: "Electric",
      description: "Ligth switch or outlet plate",
      price: 2.20,
      id: 0058
    }, {
      name: "Light",
      description: "Regular light bulbs",
      price: 2.20,
      id: 0059
    }, {
      name: "Closet",
      description: "Replace regular light bulb",
      price: 2.48,
      id: 0060
    }, {
      name: "Cabinet",
      description: "Catch clip remove and install new",
      price: 4.40,
      id: 0061
    }, {
      name: "Door",
      description: "Door stopper solid stick",
      price: 4.68,
      id: 0062
    }, {
      name: "Blind",
      description: "Remove blinds and brackets",
      price: 5.50,
      id: 099
    }, {
      name: "Electric",
      description: "Ligth switch or outlet double plate",
      price: 5.50,
      id: 099
    }, {
      name: "Lock",
      description: "Remove chain from main entrance door and frame",
      price: 5.50,
      id: 099
    }, {
      name: "Mirror",
      description: "Remove plastic framed mirror from door or wall",
      price: 5.50,
      id: 099
    }, {
      name: "Smoke Alarm",
      description: "Reinstall/Adjust",
      price: 5.50,
      id: 099
    }, {
      name: "Smoke Alarm",
      description: "Smoke alarm Battery",
      price: 5.50,
      id: 099
    }, {
      name: "Vents",
      description: "Adjust vent screen",
      price: 5.50,
      id: 099
    }, {
      name: "Window",
      description: "Remove window blinds and brakets",
      price: 5.50,
      id: 099
    }, {
      name: "Door",
      description: "Replace wood molding inside around door frame, top molding only",
      price: 6.60,
      id: 099
    }, {
      name: "Electric",
      description: "Regular outlet",
      price: 6.60,
      id: 099
    }, {
    name: "Cabinet",
    description: "Cabinet doors and drawers Individual Knob / Handles ",
    price: 7.70,
    id: 099
    }, {
    name: "Electric",
      description: "Regular Light switch",
      price: 8.25,
      id: 099
    }, {
      name: "Electric",
      description: "Decora outlets",
      price: 9.90,
      id: 099
    }, {
      name: "Electric",
      description: "Decora switch",
      price: 9.90,
      id: 099
    }, {
      name: "Cabinet",
      description: "Seal gaps inside the wall cabinet",
      price: 11.00,
      id: 099
    }, {
      name: "Light",
      description: "4' Fluorecent light bulb",
      price: 16.50,
      id: 099
    }, {
      name: "Wire",
      description: "Remove extra cable wires (Cable and phone wires)",
      price: 11.00,
      id: 099
    }, {
      name: "A/C",
      description: "Replace Central Air Conditioner Filter",
      price: 16.50,
      id: 099
    }, {
      name: "Door",
      description: "Replace wood molding inside around door frame, side molding only",
      price: 16.50,
      id: 099
    }, {
      name: "Window",
      description: "Adjust window loose frame",
      price: 16.50,
      id: 099
    }, {
      name: "Window",
      description: "Install window lock",
      price: 16.50,
      id: 099
    }, {
      name: "Cabinet",
      description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
      price: 17.88,
      id: 099
    }, {
      name: "Door",
      description: "Door knob",
      price: 20.90,
      id: 0099
    }, {
      name: "Drawer",
      description: "Guide",
      price: 22.00,
      id: 0099
    }, {
      name: "A/C",
      description: "Pig Tail on air conditioner / Reduce air conditioner wire",
      price: 27.50,
      id: 0099
    }, {
      name: "A/C",
      description: "Reduce electric cord on Air Conditioner",
      price: 27.50,
      id: 0099
    }, {
      name: "Ceiling",
      description: "Remove ceiling fan extension pipe",
      price: 27.50,
      id: 0099
    }, {
      name: "Door",
      description: "Adjust sliding glass door",
      price: 27.50,
      id: 0099
    }, {
      name: "Door",
      description: "Replacer portion of broken door frame up to 6",
      price: 27.50,
      id: 0099
    }, {
      name: "Electric",
      description: "Remove exterior electric box & recess the box inside the wall",
      price: 27.50,
      id: 0099
    }, {
      name: "Smoke",
      description: "Alarm	Smoke Alarm (existing wiring)",
      price: 27.50,
      id: 0099
    }, {
      name: "Wall heater",
      description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
      price: 30.80
    }, {
      name: "Door",
      description: "New hinges pair rounded or square finished cut",
      price: 33.00,
      id: 0099
    }, {
      name: "Door",
      description: "Cabinet door Cut / Trim",
      price: 33.00,
      id: 0099
    }, {
      name: "Window",
      description: "New window screen",
      price: 33.00,
      id: 0099
    }, {
      name: "Door",
      description: "Replace Threshold",
      price: 38.50,
      id: 0099
    }, {
      name: "Door",
      description: "Replace wood moldings inside around door frame, sides and top",
      price: 38.50,
      id: 0099
    }, {
      name: "Door",
      description: "Install or replace weather strip",
      price: 44.0,
      id: 0099
    }, {
      name: "Light",
      description: "Dimmer",
      price: 39.60
    }, {
      name: "Door",
      description: "New front door locks",
      price: 44.00,
      id: 0099
    }, {
      name: "Light",
      description: "'6' LED Light fixture on existing can",
      price: 44.00,
      id: 0099
    }, {
      name: "Switch",
      description: "Double Dimmer Switch",
      price: 55.00,
      id: 0099
    }, {
      name: "A/C",
      description: "Install an electric outlet next to air conditioner",
      price: 55.00,
      id: 0099
    }, {
      name: "Door",
      description: "New front door locks Kwikset longer latch",
      price: 55.00,
      id: 0099
    }, {
      name: "Light",
      description: "New Electric Box",
      price: 55.00,
      id: 0099
    }, {
      name: "Wall heater",
      description: "Digital Thermostat",
      price: 55.00,
      id: 0099
    }, {
      name: "Smoke Alarm",
      description: "Smoke Alarm and CO2 Combo (existing wiring)",
      price: 71.50,
      id: 0099
    }, {
      name: "Smoke Alarm",
      description: "Smoke Alarm (new wiring)",
      price: 72.60,
      id: 0099
    }, {
      name: "Light",
      description: "Install Track light x 3 bulbs",
      price: 1.75,
      id: 0099
    }, {
      name: "Light",
      description: "'6' LED Light (connection, can)",
      price: 104.50,
      id: 0099
    }, {
      name: "Smoke",
      description: "Alarm	Smoke Alarm and CO2 Combo (new wiring including the box)",
      price: 124.30,
      id: 0099
    }, {
      name: "A/C",
      description: "Install New Air Conditioner",
      price: 159.50,
      id: 0099
    }, {
      name: "Wall heater",
      description: "Wall heater cover replace including 4 mounting brackets",
      price: 247.50,
      id: 0099
    }, {
      name: "Ceiling",
      description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
      price: 275.00,
      id: 0099
    }, {
      name: "Door",
      description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+,200.00)",
      price: 302.50,
      id: 0099
    }, {
      name: "Ceiling",
      description: "Smooth ceiling in living room",
      price: 440.00,
      id: 0099
    }, {
      name: "Wall heater",
      description: "Wall gas heater (25,000 btus) with digital thermostat",
      price: 770.00,
      id: 0099
    }
  ]
}]);
