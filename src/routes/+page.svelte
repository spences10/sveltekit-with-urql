<script lang="ts">
	// urql initialization
	import { getContextClient, gql, queryStore } from '@urql/svelte'

	const charactersQueryStore = queryStore({
		client: getContextClient(),
		query: gql`
			query AllCharacters {
				characters {
					results {
						name
						id
						image
					}
				}
			}
		`,
	})
</script>

<h1>The World of Rick and Morty</h1>

<p>Example of using the URQL Svelte bindings.</p>
<p>
	Click any of the images to see the data returned from the <a
		href="https://rickandmortyapi.com/graphql"
		class="link link-primary"
	>
		Rick and Morty GraphQL API
	</a>
</p>

<div class="flex flex-wrap justify-between">
	{#if $charactersQueryStore.fetching}
		<p>Loading...</p>
	{:else if $charactersQueryStore.error}
		<p>Oopsie! {$charactersQueryStore.error.message}</p>
	{:else}
		{#each $charactersQueryStore.data.characters.results as character}
			<section class="w-52">
				<a
					href={`/character/${character?.id}`}
					class="link link-primary"
				>
					<img
						src={character?.image}
						alt={character?.name}
						class="w-full mb-2"
					/>
					<h2 class="my-0">{character?.name}</h2>
				</a>
			</section>
		{/each}
	{/if}
</div>
