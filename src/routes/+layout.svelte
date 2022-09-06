<script>
  import { createClient, setContextClient } from '@urql/svelte'

  const client = createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
  })
  setContextClient(client)
</script>

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 640px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
