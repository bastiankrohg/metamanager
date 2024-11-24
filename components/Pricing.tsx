import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 55,
    features: [
      '1 website',
      '200 pages',
      'A/B Split Testing',
      'Meta Tag Optimization',
      'Schema Automation',
    ],
    addOn: 'Add 200 pages for +$30/month',
    trial: '7-day free trial',
  },
  {
    name: 'Business',
    price: 165,
    features: [
      '1 website',
      '1000 pages',
      'A/B Split Testing',
      'Meta Tag Optimization',
      'Schema Automation',
    ],
    addOn: 'Add 1000 pages for +$80/month',
    trial: '7-day free trial',
  },
  {
    name: 'Power',
    price: 415,
    features: [
      '1 website',
      '5000 pages',
      'A/B Split Testing',
      'Meta Tag Optimization',
      'Schema Automation',
    ],
    addOn: 'Add 5000 pages for +$200/month',
    trial: '7-day free trial',
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-lg rounded-lg p-6 m-4 w-full md:w-1/3 lg:w-1/4"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>/month
              </p>
              <ul className="text-left mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mb-4">{plan.addOn}</p>
              <p className="text-gray-600 mb-4">{plan.trial}</p>
              <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-all">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;