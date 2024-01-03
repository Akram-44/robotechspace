export async function getAboutData() {
    try {
      const res = await fetch(`http://localhost:1337/api/about-contents?populate=*`);
      const response = await res.json();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  