angular.module('appModule')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/home', {
				template: '<home></home>'
			})
			.when('/contact', {
				template: '<contact></contact>'
			})
			.when('/register', {
				template: '<register></register>'
			})
			.when('/login', {
				template: '<login></login>'
			})
			.when('/registerBusiness', {
				template: '<register-business></register-business>'
			})
			.when('/loginBusiness', {
				template: '<business-login></business-login>'
			})
			.when('/logout', {
				template: '<logout></logout>'
			})
			.when('/business/:busId', {
				template: '<business-component></business-component>'
			})
			.when('/business/:bid/quote', {
				template: '<quote></quote>'
			})
			.when('/business/:bid/acceptedQuotes', {
				template: '<accepted-quotes></accepted-quotes>'
			})
			.when('/business/:bid/pendingQuotes', {
				template: '<pending-quotes></pending-quotes>'
			})
			.when('/business/:bid/completedQuotes', {
				template: '<completed-quotes></completed-quotes>'
			})
			.when('/business/:bid/certification', {
				template: '<certification></certification>'
			})
			.when('/business/:bid/certification/:certid', {
				template: '<certification-detail></certification-detail>'
			})
			.when('/business/:bid/settings', {
				template: '<business-settings></business-settings>'
			})
			.when('/user/:id/vehicle', {
				template: '<vehicle></vehicle>'
			})
			.when('/user/:id/request', {
				template: '<request></request>'
			})
			.when('/user/:id/notification', {
				template: '<notification></notification>'
			})
			.when('/business/:bid/businessNotification', {
				template: '<business-notification></business-notification>'
			})
			.when('/business/:id/request', {
				template: '<business-request></business-request>'
			})
			.when('/user/:uid/business/:bid', {
				template: '<business-detail></business-detail>'
			})
			.when('/user/:uid/request/:rid', {
				template: '<request-detail></request-detail>'
			})
			.when('/business/:bid/quote/:qid', {
				template: '<quote-detail></quote-detail>'
			})
			.when('/user/:uid/vehicle/:vid', {
				template: '<vehicle-detail></vehicle-detail>'
			})
			.when('/user/:uid/request/:rid/quote', {
				template: '<quote></quote>'
			})
			.when('/user/:uid/request/:rid/quote/:qid', {
				template: '<quote-detail></quote-detail>'
			})
			.when('/user/:id', {
				template: '<user-component></user-component>'
			})
			.when('/user/:id/settings', {
				template: '<settings></settings>'
			})
			.otherwise({
				template: '<not-found></not-found>'
			})
	});
