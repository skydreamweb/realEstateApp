angular.module('myApp')
    .controller('mainController', [function () {}])
    .directive("completedBtn", ["$rootScope", function($rootScope) {

        return {

            link: ($scope, element) => {

                element.on("click", () => {

                    console.log($rootScope.itemsToBeReplaced);
                    console.log($rootScope.apartmentInfo);
                })
            }
        };
    }]);