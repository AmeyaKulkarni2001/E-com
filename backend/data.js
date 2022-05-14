import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "ak",
      email: "ak@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "test",
      email: "test@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Yankees Cap",
      slug: "yankees-cap",
      category: "Caps",
      image: "/images/p2.webp",
      price: "250",
      countInStock: 0,
      brand: "Olympus",
      rating: 4,
      numReviews: 1,
      description: "Cap that makes you invisible",
    },
    {
      name: "Invisibility Cap",
      slug: "invisible-cap",
      category: "Caps",
      image: "/images/p1.jpeg",
      price: "250",
      countInStock: 10,
      brand: "Olympus",
      rating: 5,
      numReviews: 1,
      description: "Cap that makes you invisible",
    },
  ],
};

export default data;
