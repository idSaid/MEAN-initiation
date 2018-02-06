var app = angular.module("client-angluar",["ngRoute","chart.js"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/home.html", 
        controller : "HomeController"
    })
    .otherwise({
        templateUrl : "template/home.html"
    });
});


app.controller('HomeController', function($scope) {
    $scope.actions = [
        {
            nom : "APL",
            prix : 52,
            symbol : "$"
        },
        {
            nom : "NIXON",
            prix : 52,
            symbol : "$"
        },
        {
            nom : "BLUE",
            prix : 52,
            symbol : "$"
        }
    ];

    $scope.portfolio = [];
    $scope.detail = {};

    $scope.buy = function(a){
        console.log(a);
        var exist = false;
        
        for (i in $scope.portfolio) {
            if($scope.portfolio[i].action.nom == a.nom){                
                $scope.portfolio[i].quantite++;
                exist = true;
            }
        }

        if(!exist){
            $scope.portfolio.push({
                action : a,
                quantite : 1
            });
        }


        // chart builder
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
          console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
          scales: {
            yAxes: [
              {
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
              },
              {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
              }
            ]
          }        
        };
    };

    $scope.showDetail = function(action){        
        $scope.detail=action;
        console.log(">>>>>> detail :"+this.detail.action.nom)
        console.log(">>>>>> detail :"+this.detail.quantite)
    };
});




