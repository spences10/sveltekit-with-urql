/** @type {import('@sveltejs/kit').Load} */

export const load = async ({ params }) => {
	const { id } = params;
	return { id };
};
