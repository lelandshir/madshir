const app = angular.module(`myApp`, []);
app.controller(`MyController`, [
  `$http`,
  function ($http) {
    this.message = `Madshir Wines & Spirits!`;
    this.createdDrink = "";
    this.addNewLiquor = () => {
      $http({
        url: `/drinks`,
        method: `POST`,
        data: {
          brand: this.brand,
          type: this.type,
          abv: this.abv,
        },
      }).then((response) => {
        console.log(response);
        this.createdDrink = response.data;
      });
    };
  },
]);
