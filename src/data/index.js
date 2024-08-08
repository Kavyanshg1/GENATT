import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "Homme",
    title: "Home",
  },
  {
    id: "GUAC",
    title: "GUAC",
  },
  {
    id: "Timeline",
    title: "Timeline",
  },
  {
    id: " ",
    title: " ",
  },
];

const experiences = [
  {
    title: "Conceptualization and Syntax Design",
    company_name: "Notion, Figma",
    date: "July-September, 2024",
    details: [
      "This phase involves <span style='color: white;'>brainstorming </span> and  <span style='color: white;'>solidifying</span> the core ideas behind GUAC.The syntax will be crafted to align with <span style='color: white;'>Gen Z culture</span>, emphasizing creativity, ease of use, and relevance. Tools like Notion and Figma will help in documenting and visualizing the language's design.",
    ],
  },
  {
    title: "Compiler/Interpreter Development",
    company_name: "Python, LLVM",
    date: "September-December, 2024",
    details: [
      "The <span style='color: white;'>core</span> of GUAC is built during this period, with a focus on <span style='color: white;'>developing</span> the compiler or interpreter. Python will be used for rapid <span style='color: white;'>prototyping</span>, and LLVM will be utilized for optimizing the <span style='color: white;'>low-level execution</span> of the language, bringing the design to life.",
    ],
  },
  {
    title: "Beta Testing and Debugging",
    company_name: "PyTest, Jenkins",
    date: "January- March, 2025",
    details: [
      "Extensive <span style='color: white;'>Beta testing and debugging</span> will be conducted to ensure the language functions as intended. <span style='color: white;'>Automated testing</span> using PyTest and <span style='color: white;'>continuous integration</span> with Jenkins will facilitate iterative <span style='color: white;'>improvements and bug fixes</span>.",
    ],
  },
  {
    title: "Launch and Community Building",
    company_name: "GitHub, Discord",
    date: "April, 2025",
    details: [
      " The official launch of <span style='color: white;'> GUAC </span> will be accompanied by span style='color: white;'>comprehensive documentation</span> and <span style='color: white;'>community outreach</span>. GitHub will be used to manage the codebase and encourage contributions, while Discord will serve as a platform for engaging with the community, offering support, and fostering collaboration.",
    ],
  },
];

const portfolio = [
  {
    name: "Gen-Z-Friendly Syntax",
    description:
      "GUAC features a syntax that blends modern slang, abbreviations, and emojis, making coding intuitive and relatable for the Gen-Z crowd.",
    image: oscs,
  },
  {
    name: "Interactive Debugging",
    description:
      "GUAC offers real-time error detection with contextual feedback, including tips, hints, and even memes, making the debugging process both efficient and enjoyable.",
    image: devnotes,
  },
  {
    name: "Seamless Collaboration",
    description:
      "GUAC supports real-time collaborative coding, enabling teams to work together smoothly, mirroring the social connectivity that Gen-Z thrives on",
    image: algorithms,
  },
];

export { experiences, portfolio };

