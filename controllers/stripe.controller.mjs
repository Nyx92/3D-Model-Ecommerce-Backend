import Stripe from "stripe";

class StripeController {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  postPaymentIntent = async (request, response) => {
    const stripe = new Stripe(this.secretKey);
    const amount = request.body.amount;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "sgd",
      });

      response.status(200).json({
        client_secret: paymentIntent.client_secret,
        message: "sucessfully created payment intent",
      });
    } catch (err) {
      console.log(err);
      response.status(500).json({ statusCode: 500, message: err.message });
    }
  };
}

export default StripeController;
