<script>
  export let data
  let { slug } = data

  import { getContextClient, gql, queryStore } from '@urql/svelte'
  const post = queryStore({
    client: getContextClient(),
    variables: { slug },
    query: gql`
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
    `,
  })
</script>

<pre>{JSON.stringify($post, null, 2)}</pre>
