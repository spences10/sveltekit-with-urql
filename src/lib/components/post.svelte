<script>
  export let post
  export let copy
</script>

<figure>
  <img src={post.coverImage.url} alt={post.title} />
</figure>
<h2>{post.title}</h2>
{#if !copy}
  <p>{post.excerpt}</p>
{/if}
{#if post.tags}
  {#each post.tags as tag}
    <div>
      <span>{tag}</span>
    </div>
  {/each}
{/if}
{#if copy}
  {@html post.markdownContent}
{/if}

<style>
  figure {
    margin: 0;
  }
</style>
