<script context="module">
  export const prerender = true
</script>

<script>
  // urql initialization
  import Post from '$lib/components/post.svelte'
  import { gql, operationStore, query } from '@urql/svelte'

  const postsQuery = gql`
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
  `

  // request policy is cache-first (default)
  const posts = operationStore(postsQuery)

  query(posts)
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
