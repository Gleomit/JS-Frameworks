var videoSystemApp = videoSystemApp || angular.module('videoSystem', ['ngRoute']);

videoSystemApp.filter('videoFilter', function() {
	return function(items, filterType, search) {
		if (!search || search === '') {
			return items;
		}

		return items.filter(function(element, index, array) {
			if (filterType === "haveSubtitles") {
				if ((element.haveSubtitles == true && search.toLowerCase() === "yes") || (element.haveSubtitles == false && search.toLowerCase() === "no")) {
					return true;
				} else {
					return false;
				}
			} else {
				if (element[filterType].length >= search.length) {
					if (element[filterType].slice(0, search.length).toLowerCase() == search.toLowerCase()) {
						return true;
					} else {
						return false;
					}
				}
			}
		});
	};
});