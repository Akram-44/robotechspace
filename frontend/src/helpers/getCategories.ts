export async function getCategories() {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/categories`);
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
