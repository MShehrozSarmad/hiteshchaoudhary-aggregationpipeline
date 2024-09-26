[
    {
      $match: {
        isActive: true,
      },
    },
    {
      $count: "activeUSers",
    },
  ]