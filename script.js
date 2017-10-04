var locations = []; // this array will hold your objects

// object constructor

var State = function (state,revenue,locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;


  this.averageRevenue = function() {
    return Math.round(this.revenue/this.locationCount);
  };
};

// object instances
 var location0 = new State ('IL', 5000, 12);
 var location1 = new State ('MN', 300 , 3);
 var location2 = new State ('NV', 25000,1);


// push object instances to locations array
locations.push(location0, location1, location2);

console.log(locations);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
