// find the average no of tags per user

[
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      tagsCount: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNoOfTags: {
        $avg: "$tagsCount",
      },
    },
  },
];

// smarter way

[
  {
    $addFields: {
      tagsCount: {
        // $size: "$tags"
        // to tackle situation if tags field is not present in a document
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNoOfTags: {
        $avg: "$tagsCount",
      },
    },
  },
];
