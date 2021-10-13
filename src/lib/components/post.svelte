<script>
  export let post
</script>

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
