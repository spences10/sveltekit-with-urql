<script lang="ts">
	import {
		Client,
		cacheExchange,
		fetchExchange,
		setContextClient,
	} from '@urql/svelte'
	import '../app.postcss'

	const client = new Client({
		url: `https://rickandmortyapi.com/graphql`,
		exchanges: [cacheExchange, fetchExchange],
	})
	setContextClient(client)
</script>

<main
	class="container max-w-3xl mx-auto prose prose-xl prose-h1:text-primary prose-h2:text-primary"
>
	<slot />
</main>
