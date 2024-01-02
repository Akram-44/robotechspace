export async function getSlides() {
  try {
    const res = await fetch(`http://localhost:1337/api/sliders?populate=*`);
    console.log('resp', res)
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
