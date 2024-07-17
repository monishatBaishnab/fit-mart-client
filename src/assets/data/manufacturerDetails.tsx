const manufacturerDetails = [
  {
    key: "TheraRelief",
    manufacturerDetails: {
      contactInfo: {
        phone: "666-123-7890",
        email: "info@therarelief.com",
        address: "789 Relaxation Rd, Therapy Town, USA",
      },
      name: "TheraRelief LLC",
    },
  },
  {
    key: "FlexBand",
    manufacturerDetails: {
      contactInfo: {
        phone: "555-987-6543",
        email: "info@flexband.com",
        address: "321 Flex St, Stretchville, USA",
      },
      name: "FlexBand LLC",
    },
  },
  {
    key: "ZenFitYoga",
    manufacturerDetails: {
      contactInfo: {
        phone: "555-123-4567",
        email: "support@zenfit.com",
        address: "789 Peaceful Way, Harmony City, USA",
      },
      name: "ZenFit Yoga",
    },
  },
  {
    key: "PowerHouse",
    manufacturerDetails: {
      contactInfo: {
        phone: "777-123-4567",
        email: "info@powerhouse.com",
        address: "123 Strength Ln, Muscle Town, USA",
      },
      name: "PowerHouse Fitness",
    },
  },
  {
    key: "IronMax",
    manufacturerDetails: {
      contactInfo: {
        phone: "222-456-7890",
        email: "info@ironmax.com",
        address: "789 Iron St, Gym City, USA",
      },
      name: "IronMax Equipment",
    },
  },
  {
    key: "StrongLift",
    manufacturerDetails: {
      contactInfo: {
        phone: "987-654-3210",
        email: "info@stronglift.com",
        address: "456 Strength Blvd, Muscle Town, USA",
      },
      name: "StrongLift Co.",
    },
  },
  {
    key: "RowPro",
    manufacturerDetails: {
      contactInfo: {
        phone: "333-987-1234",
        email: "support@rowpro.com",
        address: "654 Row Ln, Fit City, USA",
      },
      name: "RowPro Fitness",
    },
  },
  {
    key: "EnduranceFit",
    manufacturerDetails: {
      contactInfo: {
        phone: "444-987-6543",
        email: "support@endurancefit.com",
        address: "321 Endurance Ave, Cardio City, USA",
      },
      name: "EnduranceFit Inc.",
    },
  },
  {
    key: "CycleMax",
    manufacturerDetails: {
      contactInfo: {
        phone: "888-123-4567",
        email: "support@cyclemax.com",
        address: "654 Cycle Ln, Pedal City, USA",
      },
      name: "CycleMax Industries",
    },
  },
  {
    key: "FitTech",
    manufacturerDetails: {
      contactInfo: {
        phone: "123-456-7890",
        email: "support@fittech.com",
        address: "123 Fitness St, Workout City, USA",
      },
      name: "FitTech Inc.",
    },
  },
];

export const brandsArray = manufacturerDetails.map(item => ({
    key: item.key,
    label: item.key
  }));
  

export default manufacturerDetails;
