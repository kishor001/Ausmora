import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Your Birth Chart Shapes Your Destiny",
    paragraph:
      "Explore how your sun, moon, and rising signs influence your personality and life path, and how to use that knowledge for personal growth.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Astrologer & Life Coach",
    },
    tags: ["birth chart", "astrology"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mercury Retrograde Explained — What to Expect",
    paragraph:
      "Learn how Mercury Retrograde impacts communication, travel, and technology, and how to navigate these cosmic shifts with grace.",
    image: "/images/blog/blog-05.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Cosmic Insights Editor",
    },
    tags: ["retrograde", "planets"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Top 5 Astrology Myths—Busted!",
    paragraph:
      "Think astrology is just your zodiac sign? Think again. We debunk the most common misconceptions and reveal what astrology really offers.",
    image: "/images/blog/blog-06.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Astro Researcher",
    },
    tags: ["zodiac","myths"],
    publishDate: "2025",
  },
];
export default blogData;
