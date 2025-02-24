import FAQListItem from "@/components/FAQListItem";
import ListItem from "@/components/ListItem";
import productDemo from "@/public/assets/productDemo.jpeg";
import Image from "next/image";
import { auth } from "@/auth";
import LoginButton from "@/components/LoginButton";

const Home = async () => {
  const session = await auth();
  console.log(session);

  const pricingFeatures = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];

  const faqs = [
    {
      question: "How does Bek SaaS work?",
      answer:
        "Bek SaaS is a customer feedback tool that helps you collect feedback from your customers and prioritize features based on their feedback.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can get started by creating a free account on our website and creating your first feedback board.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds within 30 days of your purchase.",
    },
  ];

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">
          <div className="font-bold">Bek SaaS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <LoginButton session={session} />
        </div>
      </section>
      <section className="px-8 py-32 lg:text-left font-extrabold text-center max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          className="w-96 rounded-lg"
          src={productDemo}
          alt="Product Demo"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl  font-extra-bold mb-6">
            Collect customer feedback to build better products
          </h1>
          <div className="opacity-90">
            Create a feedback board in minutes, prioritize features and build
            products your customers will love.
          </div>
          <LoginButton session={session} />
        </div>
      </section>
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-xs uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold lg:text-4xl font-extra-bold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="card bg-base-100 max-w-96 mx-auto shadow-xl">
            <div className="card-body">
              <div className="card-title gap-2 items-baseline">
                <div className="font-black text-4xl">19$</div>
                <div className="uppercase font-medium text-xs opacity-60">
                  /month
                </div>
              </div>
              <ul className="space-y-2">
                {pricingFeatures.map((feature) => (
                  <ListItem text={feature} key={feature} />
                ))}
              </ul>
              <LoginButton extraClass="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-100" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-xs uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold lg:text-4xl font-extra-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <ul className="max-w-lg mx-auto">
              {faqs.map((qa) => (
                <FAQListItem key={qa.question} qa={qa} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
