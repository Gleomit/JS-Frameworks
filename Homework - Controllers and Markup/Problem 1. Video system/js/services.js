var videoSystemApp = videoSystemApp || angular.module('videoSystem', ['ngRoute']);

videoSystemApp.factory('VideoService', function() {
	function createVideo(data) {
		var videos = (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);
		data.objectId = videos.length;
		videos.push(data);

		localStorage['videos'] = JSON.stringify(videos);
	}

	function getVideos() {
		return (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);
	}

	function removeVideo(id) {
		var videos = (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);

		for (var i = 0; i < videos.length; i += 1) {
			if (videos[i].objectId == id) {
				videos.splice(i, 1);
				break;
			}
		}

		localStorage['videos'] = JSON.stringify(videos);
	}

	function getCategories() {
		var videos = (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);

		if (videos.length > 0) {
			var categories = [];

			videos.forEach(function(video) {
				if (categories.indexOf(video.category.toLowerCase()) <= -1) {
					categories.push(video.category.toLowerCase());
				}
			});

			return categories;
		} else {
			return [];
		}
	}

	function comment(id, commentData) {
		var videos = (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);

		for (var i = 0; i < videos.length; i += 1) {
			if (videos[i].objectId == id) {
				videos[i].comments.push(commentData);
				break;
			}
		}

		localStorage['videos'] = JSON.stringify(videos);
	}

	function subscribe(id) {
		var videos = (localStorage['videos'] ? JSON.parse(localStorage['videos']) : []);

		for (var i = 0; i < videos.length; i += 1) {
			if (videos[i].objectId == id) {
				videos[i].subscribers += 1;
				break;
			}
		}

		localStorage['videos'] = JSON.stringify(videos);
	}

	function empty() {
		localStorage['videos'] = JSON.stringify([]);
	}

	return {
		getVideos: getVideos,
		createVideo: createVideo,
		removeVideo: removeVideo,
		getCategories: getCategories,
		empty: empty,
		subscribe: subscribe,
		comment: comment
	};
});