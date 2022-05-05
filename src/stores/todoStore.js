import { writable } from 'svelte/store';

export const todos = writable([]);

export const addTodo = (text) => {
	todos.update((todos) => {
		return [...todos, { text, completed: false, id: Date.now() }];
	});
};

export const deleteTodo = (id) => {
	todos.update((todos) => {
		return todos.filter((todo) => todo.id !== id);
	});
};

export const toggleTodoComplete = (id) => {
	todos.update((todos) => {
		return todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	});
};
