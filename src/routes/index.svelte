<script context="module">
  export const prerender = true
</script>

<script>
  // urql initialization
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
          url
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
          <figure>
            <img src={post.coverImage.url} alt={post.title} />
          </figure>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          {#if post.tags}
            {#each post.tags as tag}
              <div>
                <span>{tag}</span>
              </div>
            {/each}
          {/if}
        </a>
      </li>
    {/each}
  </ul>
{/if}
