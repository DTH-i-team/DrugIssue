
$(function() {
    /*adapted from Joe Kuan, https://joekuan.wordpress.com/2012/09/30/making-a-pictograph-with-highcharts/ 
     * @method fill in the series array
     * @param {object} config - icon layout
     * @param {object} dataArr- an array of pictograph arrays. A pictograph array is [ value,  "url(./image.png)" ]
     */

    createPictoPoints = function(config, dataArray) {
        var limit = config.max, y = 0;
        var seriesArray = [];
        var categoryArray = dataArray;
        
        for (var i = 0; i < categoryArray.length; i++) {
            var value = categoryArray[i][0];
            var icon = categoryArray[i][1];
            var quit = false;
            for (var x = 0; x < value;) {
                var newRow = [];
                for (; y < limit; y++, x++) {
                    if (x >= value) {quit = true; break;}
                    newRow.push({x: config.row, y: y, marker: {symbol: icon} });
                }
                if (y >= limit) { //start a new row
                    y = 0;
                    config.row++;
                }
                seriesArray.push({ data: newRow});
                if (quit) {break;}
            }
        }
        return seriesArray;
    };

/*SETUP CHART*/

    config = {row: 0, xCategories: [], max: 10};

    var series = createPictoPoints(config, [[0, ''],
        [100, 'url(blank-icon.png)']]);

/*MAKE CHART*/

	$('#consequence_chart').highcharts({
        chart: {
            renderTo: 'consequence_chart',
            type: 'scatter',
            inverted: true,
	   // animation: true,
        },
        title: {text: 'Consequences of Drug and Alcohol Use'},
 	subtitle: {text: "Percent of people who reported that they'd..."},
        legend: {enabled: false},
        xAxis: {
            title: {text: null},
            gridLineWidth: 0,
            labels: { enabled: false },
            tickWidth: 0,
            offset: 40,
	    categories: config.xCategories,
            min: 0,
            max: 9,    //set vertical packing
            lineColor: '#FFFFFF' 
        },
        yAxis: {
            gridLineWidth: 0,
            labels: { enabled: false },
            min: 0,
            max: 9,    //set horizontal packing
            title: {text: null,}
        },
        tooltip: {enabled: false},
        plotOptions: {
	    bar: {dataLabels: {enabled: false} },
            //series: { animation: {duration: 1000}}
 	},
        series: series
    });
});
