<script>
	import { todos } from '../stores/todoStore.js';
	import TodoForm from '$lib/TodoForm.svelte';
	import Todo from '$lib/Todo.svelte';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos</h1>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} index={todo.id} />
	{/each}
</main>
