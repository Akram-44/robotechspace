import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ProductType } from "../../../../type";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;
console.log('item image',`http://127.0.0.1:1337${items[0]?.attributes?.image?.data[0]?.attributes?.url}`)
    const extractingItems = await items.map((item: ProductType) => ({
      quantity: item?.attributes?.quantity,
      price_data: {
        currency: "egp",
        unit_amount: item?.attributes?.price * 100,
        product_data: {
          name: item?.attributes?.title,
          description: item?.attributes?.description[0].children[0].text,
          images: [`http://127.0.0.1:1337${item?.attributes?.image?.data[0]?.attributes?.url}`],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });
    return NextResponse.json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};
