describe('todoFactory', function() {
	beforeEach(function() {
		bard.appModule('app');
		bard.inject('todoFactory', 'apiUrl', "$httpBackend")
	});

	describe('when getAll is called', function() {
		it('should return data on succes', function() {
			var response = {
				data: [{}]
			};

			$httpBackend.whenGET(apiUrl + '/todos').respond(response);
			todoFactory.getAll().then(
				function(data) {
					expect(data.length).toEqual(1);
				}),
			function(error) {
				expect(1).toEqual(2);
			}
		});

		it('should return error on fail', function() {
			$httpBackend.whenGET(apiUrl + '/todos').respond(500);

			todoFactory.getAll().then(
					function(data){
						expect(1).toBe(2);
					},
					function(error) {
						expect(error).toBeDefined();
					}
				)
		});
	});
	describe('when getById is called', function() {
		it('should return one list item', function() {

			var response = {};

			$httpBackend.whenGET(apiUrl + / todos/ + 2, {}).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(data.length).toBe(1);
					console.log(data)
				},
				function(error) {
					expect(2).toBe(1);
				}

			);

		});

		it('should return error', function() {
			var response = [{},{}];
			$httpBackend.whenGET(apiUrl + / todos/ + 2, {}).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(1).toBe(2);
					console.log(data)
				},
				function(error) {
					expect(error).toBeDefined();
				}

			);
		})
	})

	describe('when remove is called', function() {
		it('should return one list item', function() {

			var response= {};

			$httpBackend.whenDELETE(apiUrl + '/todo/' + 2).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(data.length).toBe(1);
					console.log(data)
				},
				function(error) {
					expect(2).toBe(1);
				}

			);

		});

		it('should return error', function() {
			var response = [{},{}];
			$httpBackend.whenDELETE(apiUrl + '/todo/' + 2).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(1).toBe(2);
					console.log(data)
				},
				function(error) {
					expect(error).toBeDefined();
				}

			);
		})
	})

	

	

	describe('when add is called', function() {
		it('should return one list item', function() {

			var response= {};

			$httpBackend.whenPOST(apiUrl + '/todos/' + 2, {}).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(data.length).toBe(1);
					console.log(data)
				},
				function(error) {
					expect(2).toBe(1);
				}

			);

		});

		it('should return error', function() {
			var response = [{},{}];
			$httpBackend.whenPOST(apiUrl + '/todo/' + 2).respond(response);

			todoFactory.getById().then(
				function(data) {
					expect(1).toBe(2);
					console.log(data)
				},
				function(error) {
					expect(error).toBeDefined();
				}

			);
		})
	})
})



