import { motion } from "framer-motion";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { PricingPlan } from "@/shared/types";
import { useTranslation } from "react-i18next";

// Mock pricing data
const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 12.99,
    period: "month",
    description: "Perfect for getting started with your fitness journey",
    features: [
      "Access to gym equipment",
      "2 group classes per week",
      "Basic workout plans",
      "Locker room access",
      "Mobile app access"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 24.99,
    period: "month",
    description: "Most popular plan for serious fitness enthusiasts",
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "Personal training session (1/month)",
      "Nutrition consultation",
      "Premium locker",
      "Guest passes (2/month)",
      "Mobile app premium features"
    ],
    popular: true
  },
  {
    id: "elite",
    name: "Elite",
    price: 49.99,
    period: "month",
    description: "Ultimate fitness experience with premium perks",
    features: [
      "24/7 gym access",
      "Unlimited premium classes",
      "Weekly personal training",
      "Monthly massage therapy",
      "Nutrition meal planning",
      "VIP locker room",
      "Unlimited guest passes",
      "Priority class booking",
      "Exclusive member events"
    ]
  }
];

const Pricing = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const calculatePrice = (plan: PricingPlan) => {
    if (!isAnnual) return plan.price;
    return Math.round(plan.price * 12 * 0.85); // 15% discount for annual
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <section id="pricing" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            {t('pricing.title')}
          </h1>
          <p className="my-5 text-sm">
            {t('pricing.description')}
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                !isAnnual ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                isAnnual ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl ${
                plan.popular
                  ? 'border-2 border-secondary-500 bg-white'
                  : 'border border-gray-200 bg-white'
              } ${
                selectedPlan === plan.id ? 'ring-2 ring-primary-500' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${calculatePrice(plan)}
                  </span>
                  <span className="text-gray-600">/{isAnnual ? 'year' : 'month'}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } ${
                  selectedPlan === plan.id ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;