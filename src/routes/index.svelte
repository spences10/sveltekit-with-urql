<script>
  // urql initialization
  import {
    gql,
    initClient,
    operationStore,
    query,
  } from '@urql/svelte'

  initClient({
    url: 'https://api-eu-central-1.graphcms.com/v2/ckuh5n3l909qh01z6flerahr2/master',
  })

  const postsQuery = gql`
    query Posts {
      posts {
        title
        slug
        date
        excerpt
        tags
        coverImage {
          url
        }
      }
    }
  `
  const posts = operationStore(postsQuery)
  query(posts)
  console.log(posts)
</script>

{#if $posts.fetching}
  <p>Loading...</p>
{:else if $posts.error}
  <p>Oopsie! {$posts.error.message}</p>
{:else}
  {#each $posts.data.posts as post}
    <h1>{post.title}</h1>
  {/each}
{/if}
