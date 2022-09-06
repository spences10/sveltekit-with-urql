<script>
  // urql initialization
  import Post from '$lib/components/post.svelte'
  import { getContextClient, gql, queryStore } from '@urql/svelte'

  const posts = queryStore({
    client: getContextClient(),
    query: gql`
      query Posts {
        posts {
          title
          slug
          date
          excerpt
          tags
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: clip, width: 600 } }
              }
            )
          }
          content {
            html
          }
        }
      }
    `,
  })
</script>

{#if $posts.fetching}
  <p>Loading...</p>
{:else if $posts.error}
  <p>Oopsie! {$posts.error.message}</p>
{:else}
  <ul>
    {#each $posts.data.posts as post}
      <li>
        <a href={`/posts/${post.slug}`}>
          <Post {post} copy={false} />
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
  li {
    list-style: none;
    margin-bottom: 5rem;
  }
</style>
