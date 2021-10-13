<script context="module">
  export const load = async ({ page: { params } }) => {
    const { slug } = params
    return { props: { slug } }
  }
</script>

<script>
  export let slug
  import { gql, operationStore, query } from '@urql/svelte'

  const productQuery = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        title
        date
        tags
        author {
          name
          authorTitle: title
          picture {
            url(
              transformation: {
                image: {
                  resize: { fit: clip, height: 50, width: 50 }
                }
              }
            )
          }
        }
        markdownContent
        coverImage {
          url
        }
      }
    }
  `
  const post = operationStore(productQuery, { slug })

  query(post)
</script>

<pre>{JSON.stringify($post, null, 2)}</pre>
