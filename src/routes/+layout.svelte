<script>
	import { createClient, setContextClient } from '@urql/svelte'
	import '../global.css'

	const client = createClient({
		url: `https://rickandmortyapi.com/graphql`,
	})
	setContextClient(client)
</script>

<main class="container">
	<slot />
</main>

<style>
	.container {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		max-width: 48rem /* 768px */;
		padding-left: 1rem /* 16px */;
		padding-right: 1rem /* 16px */;
	}
	@media (min-width: 475px) {
		.container {
			max-width: 475px;
		}
	}
	@media (min-width: 640px) {
		.container {
			max-width: 640px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 768px;
		}
	}
	@media (min-width: 1024px) {
		.container {
			max-width: 1024px;
		}
	}
	@media (min-width: 1280px) {
		.container {
			max-width: 1280px;
		}
	}
	@media (min-width: 1536px) {
		.container {
			max-width: 1536px;
		}
	}
</style>
