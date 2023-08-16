app.service("rgtrPodService", ["$http", function ($http) {
    this.rgtrProduct = function (product) {
        console.log(product);
        $http({
            method: "POST",
            url: "http://localhost:3000/products",
            data: product
        }).then(function (response) {
            console.log(response);
            alert(`${response.data.name} is registerred`);
        }, function (e) {
            alert(e.data.error.message)
            console.log(e);
        })
    }
}])

app.service("getProducts", ["$http", function ($http) {
    this.getProducts = function (allprod) {
        $http({
            method: "GET",
            url: "http://localhost:3000/products"
        }).then(function (response) {
            allprod(response.data);
        }, function (e) {
            console.log(e);
            alert(e.data.error.message);
        }
        )
    }
}])