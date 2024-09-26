// average age of all users

[
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age",
      },
    },
  },
];




// top 5 most common fruits among users

[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 5,
  },
];




// find the total no of males and females

[
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  },
];




// which country has highest no of registered users

[
  {
    $group: {
      _id: "$company.location.country",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 1,
  },
];




// list all unique eye colors present in users

[
  {
    $group: {
      _id: "$eyeColor",
    },
  },
];

