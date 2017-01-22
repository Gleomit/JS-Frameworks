var videoSystemApp = videoSystemApp || angular.module('videoSystem', ['ngRoute']);

videoSystemApp.controller('VideoController', ['$scope', 'VideoService',
	function($scope, VideoService) {
		$scope.today = new Date();

		$scope.createVideo = function() {
			var data = {
				title: $scope.newVideo.title,
				category: $scope.newVideo.newCategory,
				date: $scope.newVideo.date,
				haveSubtitles: $scope.newVideo.haveSubtitles,
				pictureUrl: $scope.newVideo.pictureURL,
				length: $scope.newVideo.length,
				comments: [],
				subscribers: 0
			};

			VideoService.createVideo(data);
			window.location = '#/';
		};

		$scope.subscribe = function(obj) {
			VideoService.subscribe(obj.target.getAttribute("data-id"));
			window.location = '#/subscribe';
		};

		$scope.removeVideo = function(obj) {
			VideoService.removeVideo(obj.target.getAttribute("data-id"));
			window.location = '#/removeVideo';
		};

		$scope.comment = function(obj) {
			var commentData = {
				username: $(obj.target).prev().prev().prev().val(),
				content: $(obj.target).prev().prev().val(),
				date: new Date(),
				likes: 0,
				websiteUrl: $(obj.target).prev().val()
			};

			VideoService.comment(obj.target.getAttribute("data-id"), commentData);
			window.location = '#/comment';
		};

		$scope.toggleComments = function(obj){
			$(obj.target).parent().next().toggle();
		};

		$scope.newVideoCategorySelect = function() {
			if ($scope.newVideo.selectedCategory != "notSelected") {
				$scope.newVideo.newCategory = $scope.newVideo.selectedCategory;
			} else {
				$scope.newVideo.newCategory = "";
			}
		};

		$scope.getVideos = function() {
			return VideoService.getVideos();
		};

		$scope.clearVideos = function() {
			VideoService.empty();
			window.location = '#/emptyVideos';
		};

		$scope.getCategories = function() {
			return VideoService.getCategories();
		};
	}
]);