import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	const { id } = params
	return { id }
}
