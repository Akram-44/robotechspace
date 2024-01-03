export async function getPrintServices() {
    try {
      const res = await fetch(`http://localhost:1337/api/print-services?populate=*`);
      const response = await res.json();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  