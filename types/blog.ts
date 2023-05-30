interface News {
  id: number;
  category: string;
  author: string;
  title: string;
  newsMainDescription: string;
  description: string;
}

interface Spotlight {
  issueNumber: number;
  mainTitle: string;
  mainDescription: string;
  description: string;
  mainAuthor: string;
  imageUrl: string;
  news: News[];
}

const Blog: Spotlight[] = [
  {
    issueNumber: 1,
    mainTitle: "Olivine weathering",
    mainDescription:
      "Olivine is a green mineral that reacts with CO2 in the ocean to form a harmless silt. This reaction might be the key to slowing down climate change, or reversing it altogether.",
    description:
      "A long cycle – as powerful as it is slow – is at work in the rocks, rainwater and air of Earth. Over eons, it moderates the planet’s temperature, makes molehills of mountains, and smooths out fluctuations in the climate.",
    mainAuthor: "Campbell Nilsen",
    imageUrl:
      "https://wip.gatspress.com/wp-content/uploads/2023/05/olivine-final-2048x1364.png",
    news: [
      {
        id: 1,
        category: "euismod",
        author: "Nellie Tommei",
        title:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        newsMainDescription:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        description:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
      {
        id: 2,
        category: "morbi",
        author: "Tudor Dommersen",
        title: "Fusce consequat.",
        newsMainDescription:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        id: 3,
        category: "luctus",
        author: "Gayle Yakebovich",
        title: "Suspendisse potenti.",
        newsMainDescription:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        description:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        id: 4,
        category: "molestie",
        author: "Parrnell Knowlson",
        title: "Maecenas ut massa quis augue luctus tincidunt.",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
  },
];

export default Blog;
