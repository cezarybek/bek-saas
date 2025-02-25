import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const { data, type } = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    await connectMongo();
    let user;

    switch (type) {
      case "checkout.session.completed":
        user = await User.findById(data.object.client_reference_id);
        user.hasAccess = true;
        user.customerId = data.object.customer;

        await user.save();
        break;

      case "customer.subscription.deleted":
        user = await User.findOne({
          customerId: data.object.customer,
        });
        user.hasAccess = false;
        await user.save();
        break;

      default:
        break;
    }
  } catch (e) {
    console.error("Stripe error: " + e?.message);
  }

  return NextResponse.json({});
}
