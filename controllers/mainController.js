angular.module('myApp')
    .controller('mainController', ["$scope", "$rootScope", function ($scope, $rootScope) {
    
    function checkUncheck() {

        let index = this.getAttribute("data-index");
        if (this.checked === true) {
            $rootScope.itemsToBeReplaced.push({
                "name": $rootScope.items[index].name,
                "description": $rootScope.items[index].description,
                "price": $rootScope.items[index].price,
                "id": $rootScope.items[index].id,
                "room": $rootScope.pageTitle,
                "index": index
            });
        } else {
            let itemId = this.getAttribute("data-item-id");
            console.log(itemId)
            for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
                if ($rootScope.itemsToBeReplaced[i].id == itemId) {
                    $rootScope.itemsToBeReplaced.splice(i, 1);
                }
            }
        }
    }
    setTimeout(() => {
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        if (checkboxes.length) {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener("click", checkUncheck);
            }
        }
    }, 500);   
    }])
    .directive("completedBtn", ["$rootScope", function($rootScope) {

        return {

            link: ($scope, element) => {

                element.on("click", () => {
                    // remove duplicates
                    console.log($rootScope.itemsToBeReplaced);
                    console.log($rootScope.apartmentInfo);
                });
            }
        };
    }]);