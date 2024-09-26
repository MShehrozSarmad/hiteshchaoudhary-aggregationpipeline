// who has registered most recently

[
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 1,
  },
];

// ctaegorize users on based of their favourite fruit

[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
    },
  },
];

// how many users have ad as the second tag in their list of tags

[
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "users",
  },
];

// find user who have both enim and id as their tag

[
  {
    $match: {
      tags: {
        $all: ["id", "enim"],
      },
    },
  },
  {
    $count: "users",
  },
];

// list all the companies located in usa with their corresponding user count

[
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: { $sum: 1 },
    },
  },
];
