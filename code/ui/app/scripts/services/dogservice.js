angular.module('uiApp').service('dogService', function ($http) {

  var url = 'http://localhost:3000/dogs';

  return {

    list: function () {
      //return [
      //  {
      //    name: 'Jon', breed: 'lab', age: 9
      //  },
      //  {
      //    name: 'bob', breed: 'collie', age: 3
      //  }
      //]

      return $http.get(url).then (function (response) {
        return response.data;
      });
    },

    save: function (dog) {
      return $http.post(url, dog).then (function (response) {
        return response.data;
      });
    }

  };


});
