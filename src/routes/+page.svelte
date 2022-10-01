<script>
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
<div class="wrapper">
	{#if $charactersQueryStore.fetching}
		<p>Loading...</p>
	{:else if $charactersQueryStore.error}
		<p>Oopsie! {$charactersQueryStore.error.message}</p>
	{:else}
		{#each $charactersQueryStore.data.characters.results as character}
			<section>
				<a sveltekit:prefetch href={`/character/${character?.id}`}>
					<img src={character?.image} alt={character?.name} />
					<h2>{character?.name}</h2>
				</a>
			</section>
		{/each}
	{/if}
</div>

<style>
	h1 {
		font-size: 3em;
		text-align: center;
	}
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	section {
		width: 200px;
		margin: 0 10px;
	}
	img {
		width: 100%;
	}
	h2 {
		margin: 0;
	}
</style>
