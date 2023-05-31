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
        category: "Housing",
        author: "Nellie Tommei",
        title: "Why Britain doesn’t build",
        newsMainDescription:
          "The history of attempts to reform planning in Britain is proof that political willpower is not enough: you need to be smart, not just brave.",
        description:
          "Since the Second World War, housing in Britain has become increasingly expensive and scarce. Following a pre-war housing boom in the 1930s, during which decade more houses were built than ever before or since, between 1947 and 1955, Labour and Conservative governments enacted strict new planning rules controlling development. These rules gave local councils the power to block nearly all housebuilding, with little incentive to permit it.",
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
        title: "Maecenas ut massa",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        id: 5,
        category: "molestie",
        author: "Parrnell Knowlson",
        title: "Maecenas ut massa quis",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        id: 6,
        category: "molestie",
        author: "Parrnell Knowlson",
        title: "Maecenas ut massa",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
  },
  {
    issueNumber: 2,
    mainTitle: "France’s baby bust",
    mainDescription:
      "France was once Europe’s superpower, thanks above all to its enormous population. Its decline coincided with a collapse in its birth rate – now we know why.",
    description:
      "A long cycle – as powerful as it is slow – is at work in the rocks, rainwater and air of Earth. Over eons, it moderates the planet’s temperature, makes molehills of mountains, and smooths out fluctuations in the climate.",
    mainAuthor: "Guillaume Blanc",
    imageUrl:
      "https://wip.gatspress.com/wp-content/uploads/2023/02/Stripe-Illustration_Large-1.jpg",
    news: [
      {
        id: 1,
        category: "Housing",
        author: "Nellie Tommei",
        title: "Why Britain doesn’t build",
        newsMainDescription:
          "The history of attempts to reform planning in Britain is proof that political willpower is not enough: you need to be smart, not just brave.",
        description:
          "Since the Second World War, housing in Britain has become increasingly expensive and scarce. Following a pre-war housing boom in the 1930s, during which decade more houses were built than ever before or since, between 1947 and 1955, Labour and Conservative governments enacted strict new planning rules controlling development. These rules gave local councils the power to block nearly all housebuilding, with little incentive to permit it.",
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
        title: "Maecenas ut massa",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        id: 5,
        category: "molestie",
        author: "Parrnell Knowlson",
        title: "Maecenas ut massa quis",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        id: 6,
        category: "molestie",
        author: "Parrnell Knowlson",
        title: "Maecenas ut massa",
        newsMainDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
  },
];

export default Blog;
