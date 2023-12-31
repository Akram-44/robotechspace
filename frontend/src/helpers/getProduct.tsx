export async function getProduct(id) {
    try {
      const res = await fetch(`http://127.0.0.1:1337/api/products?populate=*/${id}`);
      const response = await res.json();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  