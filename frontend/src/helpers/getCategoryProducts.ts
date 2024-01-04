export async function getCategoryProducts(categoryName:string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[$and][0][categories][title][$eq]=${categoryName}&populate=*`
    );
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
