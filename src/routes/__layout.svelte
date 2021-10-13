<script>
  import { initClient } from '@urql/svelte'

  initClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
  })
</script>

<main>
  <slot />
</main>
