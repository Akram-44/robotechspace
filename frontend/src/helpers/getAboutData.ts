export async function getAboutData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about-contents?populate=*`
    );
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
}