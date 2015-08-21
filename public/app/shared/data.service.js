(function(){
	'use static';

	angular
		.module('responsiveGrid')
		.factory('DataService', DataService);

	DataService.$inject = ['$log'];

	function DataService($log) {
		//Data
		var data = [
			{
				content: {
					imageUrl: "http://i.guim.co.uk/img/media/ced0a7dc482f3a252e3ff7ffcf52b9d3c1cbc5f6/0_0_5760_4320/master/5760.jpg?w=620&q=85&auto=format&sharp=10&s=a50b358f96a9de429f8b699027a75dd2",
					header: "Existence of cosmic neutrinos confirmed by Antarctic scientists",
					body: "Antarctic scientists have confirmed the existence of cosmic neutrinos – ghostly particles that have traveled from the Milky Way and beyond. These particles carry messages from distant galaxies, and could potentially help solve several cosmic puzzles.",
					url: "http://www.theguardian.com/science/2015/aug/20/existence-of-cosmic-neutrinos-confirmed-by-antarctic-scientists"
				}
			},
			{
				content: {
					imageUrl: "http://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/20/1440084421494/658509dc-71ec-4329-a44a-65a8968f31eb-2060x1236.jpeg?w=620&q=85&auto=format&sharp=10&s=c67c01bbda168979e31e6cad2239a2cd",
					header: "The sky pool: London prepares for a flood of bathing oligarchs",
					body: "From an all-glass swimming bridge to ‘the highest residential pool in London’, developers are vying for the fanciest pools to flog their projects to overseas investors.",
					url: "http://www.theguardian.com/artanddesign/architecture-design-blog/2015/aug/20/london-sky-pool-trend-swimming-oligarch"
				}
			},
			{
				content: {
					imageUrl: "http://i.guim.co.uk/img/media/dc2d8bbab6e944b174677c44f279579f6a377a65/2_291_4366_2620/master/4366.jpg?w=620&q=85&auto=format&sharp=10&s=63ab13befd04056c4f80a80bca710620",
					header: "Pesticides linked to bee decline for first time in a countrywide field study",
					body: "Landscape-wide research by former UK government agency on oilseed fields in England and Wales shows link between neonicotinoids and honeybee colony losses",
					url: "http://www.theguardian.com/environment/2015/aug/20/pesticides-neonicotinoids-linked-bee-decline-first-time-large-scale-field-study"
				}
			},
			{
				content: {
					imageUrl: "http://i.guim.co.uk/img/media/72363ab865c89520961b4af4ff7dd42ab758558a/0_0_3378_2028/master/3378.jpg?w=620&q=85&auto=format&sharp=10&s=b0e8a655651b0fc121c3e688479b4f58",
					header: "As use of drones takes off, so will risks, says Lloyd's insurers",
					body: "A sharp escalation in the use of drones will bring increasingly complex risks from cyberattack, reckless pilots and privacy issues, a new report from the Lloyd’s of London insurance market has warned. Spending on unmanned aerial vehicles is likely to double to more than $90bn by 2024, Lloyd’s predicted, but makers and users of the machines, as well as insurers, are relatively unprepared for the emerging consequences.",
					url: "http://www.theguardian.com/technology/2015/aug/20/as-use-of-drones-takes-off-so-will-risks-says-lloyds-insurers"
				}
			},
			{
				content: {
					imageUrl: "http://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/18/1439916885096/aa1ecf89-1fd8-47b3-9644-58322e2b8be3-2060x1236.jpeg?w=620&q=85&auto=format&sharp=10&s=1b13513d522eb1f6eb84b905002f714d",
					header: "Can the humble fruit fly help create a African scientific community?",
					body: "A small institute in Kampala is cultivating a regional network of researchers, using an inexpensive lab model based on the fruit fly ",
					url: "http://www.theguardian.com/global-development-professionals-network/2015/aug/20/fruit-fly-african-scientific-research-kampala"
				}
			}
		];

		//Service
		var service = {
			data: data
		}; //service()

		return service;
	} //DataService()

} ()); //IIFE