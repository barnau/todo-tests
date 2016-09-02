describe('TodoController', function() {

	var todoController;

	sinon.stub(window,'confirm').returns(true);

	beforeEach(function() {
		bard.appModule('app');
		bard.inject('$controller', '$q', '$rootScope', 'todoFactory');
	});

	beforeEach(function() {
		sinon.stub(todoFactory, 'getAll').returns($q.when([{},{},{}]));
		sinon.stub(todoFactory, 'add').returns($q.when({}));
		sinon.stub(todoFactory, 'remove').returns($q.when());

		todoController = $controller('TodoController');

		$rootScope.$apply();
	});

	bard.verifyNoOutstandingHttpRequests(); 

	describe('controller', function() {
		it('should be created successfully', function() {
			expect(todoController).toBeDefined();
		});
	});

	describe('after getAllTodos is called', function() {
		it('should have 3 todos in the array', function() {
			expect(todoController.todos.length).toEqual(3);
		})
	});

	describe('after adding a todo', function() {
		it('should have 4 todos in the array', function() {
			todoController.blankTodo.name = 'Fake todo';
			todoController.blankTodo.priority = 1;
			todoController.addTodo();

			$rootScope.$apply();
			expect(todoController.todos.length).toEqual(4);
			expect(todoController.blankTodo === {});
		})
	})	

	describe('after deleting a todo and user confirms deletion ', function() {
		
		it('it shoud have 2 todos ', function() {
			todoController.removeTodo({});
			$rootScope.$apply();

			expect(todoController.todos.length).toEqual(2);
		});
	});

	// describe('after deleting a todo and user cancels deletion ', function() {
	// 	sinon.stub(window,'confirm').returns(false);
		
	// 	it('shoud have 3 todos ', function() {
	// 		expect(todoController.todos.length).toEqual(3);
	// 	});
	// });

	


	


});