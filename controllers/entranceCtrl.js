myApp.controller('entranceCtrl', ['$scope', function($scope) {

  $scope.data = [{
      name: "Ceiling",
      description: "Ceiling fan light glass cover (Parts + 10% + 3.00)",
      price: 1,
      id: 0001
    },
    {
      name: "Window",
      description: "Replace broken window glass (Cost + 10% + 30.00)",
      price: 1,
      id: 0002
    },
    {
      name: "Electric",
      description: "Decora plate",
      price: 2.20,
      id: 0003
    },
    {
      name: "Electric",
      description: "Ligth switch or outlet plate",
      price: 2.20,
      id: 0004
    },
    {
      name: "Electric",
      description: "Ligth switch or outlet double plate",
      price: 5.50,
      id: 0005
    },
    {
      name: "Ligth",
      description: "Regular light bulbs",
      price: 2.20,
      id: 0006
    },
    {
      name: "Closet",
      description: "Replace regular light bulb",
      price: 2.48,
      id: 0007
    },
    {
      name: "Door",
      description: "Catch clip remove and install new",
      price: 4.40,
      id: 0008
    },
    {
      name: "Cabinet",
      description: "Catch clip remove and install new",
      price: 4.40,
      id: 0009
    },
    {
      name: "Door",
      description: "Door stopper solid stick",
      price: 4.68,
      id: 0010
    },
    {
      name: "Blinds",
      description: "Remove blinds and brackets",
      price: 5.50,
      id: 0011
    },
    {
      name: "Lock",
      description: "Remove chain from main entrance door and frame",
      price: 5.50,
      id: 0013
    },
    {
      name: "Mirror",
      description: "Remove plastic framed mirror from door or wall",
      price: 5.50,
      id: 0014
    },
    {
      name: "Smoke Alarm",
      description: "Reinstall/Adjust",
      price: 5.50,
      id: 0015
    },
    {
      name: "Smoke Alarm",
      description: "Smoke alarm Battery",
      price: 5.50,
      id: 0016
    },
    {
      name: "Vents",
      description: "Adjust vent screen",
      price: 5.50,
      id: 0017
    },
    {
      name: "Window",
      description: "Remove window blinds and brakets",
      price: 5.50,
      id: 0018
    },
    {
      name: "Door",
      description: "Replace wood molding inside around door frame, top molding only",
      price: 6.60,
      id: 0019
    },
    {
      name: "Electric",
      description: "Regular outlet",
      price: 6.60,
      id: 0020
    },
    {
      name: "Cabinet",
      description: "Cabinet doors and drawers Individual Knob/Handles",
      price: 7.70,
      id: 0021
    },
    {
      name: "Electric",
      description: "Regular Light switch",
      price: 8.25
    },
    {
      name: "Electric",
      description: "Decora outlets",
      price: 9.90
    },
    {
      name: "Cabinet",
      description: "Seal gaps inside the wall cabinet",
      price: 11.00
    },
    {
      name: "Wire",
      description: "Remove extra cable wires (Cable and phone wires)",
      price: 11.00
    },
    {
      name: "Light",
      description: "4' Fluorecent light bulb",
      price: 16.50
    },
    {
      name: "Door",
      description: "Door stopper 1/2 moon",
      price: 16.50
    },
    {
      name: "A/C",
      description: "Replace Central Air Conditioner Filter",
      price: 16.50
    },
    {
      name: "Door",
      description: "Replace wood molding inside around door frame, side molding only",
      price: 16.50
    },
    {
      name: "Window",
      description: "Adjust window loose frame",
      price: 16.50
    },
    {
      name: "Window",
      description: "Install window lock",
      price: 16.50
    },
    {
      name: "Cabinet",
      description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
      price: 17.88
    },
    {
      name: "Door",
      description: "Door knob",
      price: 20.90
    },
    {
      name: "Drawer",
      description: "Guide",
      price: 22.00
    },
    {
      name: "A/C",
      description: "Pig Tail on air conditioner / Reduce air conditioner wire",
      price: 27.50
    },
    {
      name: "A/C",
      description: "Reduce electric cord on Air Conditioner",
      price: 27.50
    },
    {
      name: "Ceiling",
      description: "Remove ceiling fan extension pipe",
      price: 27.50
    },
    {
      name: "Door",
      description: "Adjust sliding glass door",
      price: 27.50
    },
    {
      name: "Door",
      description: "Replacer portion of broken door frame up to 6''",
      price: 27.50
    },
    {
      name: "Electric",
      description: "Remove exterior electric box & recess the box inside the wall",
      price: 27.50
    },
    {
      name: "Smoke Alarm",
      description: "Smoke Alarm (existing wiring)",
      price: 27.50
    },
    {
      name: "Wall heater",
      description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
      price: 30.80
    },
    {
      name: "Door",
      description: "New hinges pair rounded or square finished cut",
      price: 33.00
    },
    {
      name: "Door",
      description: "Cabinet door Cut / Trim	",
      price: 33.00
    },
    {
      name: "Window",
      description: "New window screen",
      price: 33.00
    },
    {
      name: "Door",
      description: "Replace Threshold",
      price: 38.50
    },
    {
      name: "Door",
      description: "Replace wood moldings inside around door frame, sides and top",
      price: 38.50
    },
    {
      name: "Door",
      description: "Replace Threshold",
      price: 38.50
    },
    {
      name: "Door",
      description: "Install or replace weather strip",
      price: 39.60
    },
    {
      name: "Light",
      description: "Dimmer",
      price: 39.60
    },
    {
      name: "Door",
      description: "New front door locks",
      price: 44.00
    },
    {
      name: "Light",
      description: "6'' LED Light fixture on existing can",
      price: 44.00
    },
    {
      name: "Switch",
      description: "Double Dimmer Switch",
      price: 55.00
    },
    {
      name: "A/C",
      description: "Install an electric outlet next to air conditioner",
      price: 55.00
    },
    {
      name: "Door",
      description: "New front door locks Kwikset longer latch",
      price: 55.00
    },
    {
      name: "Light",
      description: "New Electric Box",
      price: 55.00
    },
    {
      name: "Wall heater",
      description: "Digital Thermostat",
      price: 55.00
    },
    {
      name: "Smoke Alarm",
      description: "Smoke Alarm and CO2 Combo (existing wiring)",
      price: 71.50
    },
    {
      name: "Smoke Alarm",
      description: "Smoke Alarm (new wiring)",
      price: 72.60
    },
    {
      name: "Light",
      description: "Install Track light x 3 bulbs",
      price: 101.75
    },
    {
      name: "Light",
      description: "6'' LED Light (connection, can)",
      price: 104.50
    },
    {
      name: "Smoke Alarm",
      description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
      price: 124.30
    },
    {
      name: "A/C",
      description: "Install New Air Conditioner",
      price: 159.50
    },
    {
      name: "Door",
      description: "Replace front door",
      price: 242.00
    },
    {
      name: "Wall heater",
      description: "Wall heater cover replace including 4 mounting brackets",
      price: 247.50
    },
    {
      name: "Ceiling",
      description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
      price: 275.00
    },
    {
      name: "Door",
      description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+200.00)",
      price: 302.50
    },
    {
      name: "Ceiling",
      description: "Smooth ceiling in living room",
      price: 440.00
    },
    {
      name: "Wall heater",
      description: "Wall gas heater (25,000 btus) with digital thermostat",
      price: 770.00
    },
    {
      name: "Door",
      description: "Adjust door hinge",
      price: 0
    },
    {
      name: "Door",
      description: "Repair front door",
      price: 0
    }

  ]
}]);
