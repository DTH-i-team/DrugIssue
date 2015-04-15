
consequences = {
	arrested: 0.5,
	driven: 20,
	argument: 25,
	suicide: 0.5,
	suicidal: 4,
	injured: 15.5,
	wasraped: 9.5,
	raped: 2.5,
	problem: 9,
	stop: 3.5,
	test: 17.5, 
	class: 33,
	criticize: 29,
	regret: 37.5,
	memory: 34.5,
	nausea: 51.5,
	hangover: 57
}; 

$(document).ready(function(){

$(".consequence").click(function(){
	
	$('.selected').removeClass("selected");
	$(this).addClass('selected');

	var percent = consequences[$(this).attr("id")];
	var half = (Math.floor(percent)<percent);
	if (half) percent=Math.floor(percent);
	var config = {row: 0, xCategories: [], max: 10};

	var chart = $('#consequence_chart').highcharts();
	
	while(chart.series.length > 0){
    		chart.series[0].remove();
	}
	var newseries = createPictoPoints(config, [
		[percent, 'url(full-icon.png)'],   
		[half, 'url(half-icon.png)'],
		[100-percent-half, 'url(blank-icon.png)'],
	]);

	for (var i=0;i<newseries.length;i++){
		chart.addSeries(newseries[i]);
	};
});
});

