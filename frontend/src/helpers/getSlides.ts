export async function getSlides() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sliders?populate=*`);
    console.log('resp', res)
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
