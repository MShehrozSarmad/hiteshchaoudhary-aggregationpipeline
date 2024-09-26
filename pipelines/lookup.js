[
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "auhor_details",
    },
  },
];

// //////////////////////////////////////////////

// as it always return an array even having a single object, so we can bring it out as 

[
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details",
    },
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ['$author_details', 0],
        // or // $first: "$author_details",
      },
    },
  },
];
