export async function getCategories() {
  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories");
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
