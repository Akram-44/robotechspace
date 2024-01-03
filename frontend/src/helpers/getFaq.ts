export async function getFaq() {
    try {
      const res = await fetch(`http://localhost:1337/api/faqs?populate=*`);
      const response = await res.json();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  