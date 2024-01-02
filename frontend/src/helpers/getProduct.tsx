export async function getProduct(id:number, prefix:string) {
  try {
    if (prefix! === 'cr') {
      const res = await fetch(`http://127.0.0.1:1337/api/courses/${id}?populate=*`);
      const response = await res.json();
      return response.data;
    }
    if (prefix! === 'pr') {
      const res = await fetch(`http://127.0.0.1:1337/api/products/${id}?populate=*`);
      const response = await res.json();
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
