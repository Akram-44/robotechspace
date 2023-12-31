export async function getCategoryProducts(categoryName:string) {
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/products?filters[$and][0][categories][title][$eq]=${categoryName}`
    );
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
