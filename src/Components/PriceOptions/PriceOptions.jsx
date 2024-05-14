import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

      

        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": "29.99",
            "features": [
              "Access to cardio and weightlifting areas",
              "Group fitness classes (limited)",
              "Locker room access",
              "One personal training session per month",
              "Monthly fitness assessment",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": "49.99",
            "features": [
              "Access to all gym facilities 24/7",
              "Unlimited group fitness classes",
              "Locker and towel service",
              "Two personal training sessions per month",
              "Monthly fitness assessment",
              "Discounts on gym merchandise",
              "Access to swimming pool and sauna"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": "79.99",
            "features": [
              "Access to all gym facilities 24/7",
              "Unlimited group fitness classes",
              "Locker and towel service",
              "Four personal training sessions per month",
              "Monthly fitness assessment",
              "Discounts on gym merchandise",
              "Access to swimming pool, sauna, and steam room",
              "Free smoothie or protein shake daily",
              "Exclusive member events and workshops"
            ]
          }
        ];
      


    return (
        <div className="mr-12">
          <h2 className="text-5xl my-12 font-extrabold"><span className="text-orange-600">Best Price</span> in The Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;