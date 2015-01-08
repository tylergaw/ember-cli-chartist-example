import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      chartOpts: {
        // Don't draw the line chart points
        showPoint: false,
        // Disable line smoothing
        lineSmooth: false,
        // X-Axis specific configuration
        axisX: {
          // We can disable the grid for this axis
          showGrid: false,
          // and also don't show the label
          showLabel: false
        },
        // Y-Axis specific configuration
        axisY: {
          // Lets offset the chart a bit from the labels
          offset: 40,
          // The label interpolation function enables you to modify the values
          // used for the labels on each axis. Here we are converting the
          // values into million pound.
          labelInterpolationFnc: function(value) {
            return '$' + value + 'm';
          }
        }
      },
      lineChartData: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
        series: [
          [5, 4, 3, 7, 5, 10],
          [3, 2, 9, 5, 4, 6],
          [2, 1, -3, -4, -2, 0]
        ]
      },

      pieChartOpts: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      },

      pieChartData: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
      }
    };
  }
});
