<script lang="ts">
	export let data
	let { id } = data

	import { getContextClient, gql, queryStore } from '@urql/svelte'
	const characterQueryStore = queryStore({
		client: getContextClient(),
		variables: { id },
		query: gql`
			query GetCharacter($id: ID!) {
				character(id: $id) {
					name
					image
					status
					species
					location {
						name
						type
					}
					episode {
						name
					}
				}
			}
		`,
	})
</script>

<div class="mockup-code my-5">
  <pre>{JSON.stringify($characterQueryStore, null, 2)}</pre>
</div>
