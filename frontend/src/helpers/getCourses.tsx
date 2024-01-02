export async function getCourses() {
    try {
      const res = await fetch(`http://localhost:1337/api/courses?populate=*`);
      const response = await res.json();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  