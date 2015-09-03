/* global angular */
var app = angular.module('PageApp', []);

app.controller('MainController', function() {
	this.test = "test";
	
	this.posts = [
		{
			main: {
				title: "Institute Notes",
				dateTime: "September 2, 2015 at 7:33pm"
			},
			talks: {
				title: "Speakers",
				speakers: [
					{
						name: "President Heaton",
						notes: [
							"He spoke about the purpose of the scriptures and the importance of studying them.",
							"JS-Matthew 1:22, 37",
							"He hopes that we have received what we needed to hear as we've come here.  He hopes that the light in us \"will grow brighter and brighter until the perfect day.\" "
						]
					}
				]
			},
			otherThoughts: {
				name: "Other Thoughts",
				publicNotes: [
					{
						notes: [
							"I need to study my scriptures more often.  What I should do is also study with a question in my mind.  Pray for the gift of asking questions.  I believe that I will receive that blessing and that the Lord will hear my prayer."
						]
					}
				],
				privateNotes: [
					{
						notes: [
							"I pray that I will someday not fail to do what I am supposed to do in studying the scriptures"
						]
					}
				]
			}
		}
	];
});