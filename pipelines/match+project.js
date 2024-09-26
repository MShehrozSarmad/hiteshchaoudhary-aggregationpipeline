// how many user have enim as one of their tag

[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "usersWithEnim",
  },
];

// what are the names and ages of uers who are inactive and have velit as a tag

[
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
];

// how many users have phone number starting with +1(940)

[
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  { $count: "userWithSpecialPhone" },
];
