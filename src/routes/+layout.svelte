<script>
	import { createClient, setContextClient } from '@urql/svelte'
	import '../app.postcss'

	const client = createClient({
		url: `https://rickandmortyapi.com/graphql`,
	})
	setContextClient(client)
</script>

<main>
	<slot />
</main>
