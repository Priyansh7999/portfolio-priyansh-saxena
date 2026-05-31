
export const SKILLS = {
  frontend: [
    {
      id: 1,
      name: "HTML",
      src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white",
    },
    {
      id: 2,
      name: "CSS3",
      src: "https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white",
    },
    {
      id: 3,
      name: "JavaScript",
      src: "https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      id: 4,
      name: "TypeScript",
      src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white",
    },
    {
      id: 5,
      name: "React.js",
      src: "https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB",
    },
    {
      id: 6,
      name: "Next.js",
      src: "https://img.shields.io/badge/Next-black?style=plastic&logo=next.js&logoColor=white",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white",
    },
  ],

  mobile: [
    {
      id: 8,
      name: "React Native",
      src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB",
    },
    {
      id: 9,
      name: "Expo",
      src: "https://img.shields.io/badge/expo-1C1E24?style=plastic&logo=expo&logoColor=#D04A37",
    },
  ],

  backend: [
    {
      id: 10,
      name: "Node.js",
      src: "https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white",
    },
    {
      id: 11,
      name: "Express.js",
      src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB",
    },
    {
      id: 12,
      name: "Java",
      src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=plastic&logo=openjdk&logoColor=white",
    },
    {
      id: 13,
      name: "Spring Boot",
      src: "https://img.shields.io/badge/spring-%236DB33F.svg?style=plastic&logo=spring&logoColor=white",
    },
  ],

  databases: [
    {
      id: 14,
      name: "PostgreSQL",
      src: "https://img.shields.io/badge/postgres-%23316192.svg?style=plastic&logo=postgresql&logoColor=white",
    },
    {
      id: 15,
      name: "Firebase",
      src: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=plastic&logo=firebase",
    },
    {
      id: 16,
      name: "Supabase",
      src: "https://img.shields.io/badge/Supabase-3ECF8E?style=plastic&logo=supabase&logoColor=white",
    },
    {
      id: 25,
      name: "MongoDB",
      src: "https://img.shields.io/badge/MongoDB-%234ea148.svg?style=plastic&logo=mongodb&logoColor=white",
    }
  ],

  tools: [
    {
      id: 22,
      name: "Postman",
      src: "https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white",
    },
    {
      id: 23,
      name: "Jira",
      src: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=plastic&logo=jira&logoColor=white",
    },
    {
      id: 24,
      name: "Clerk",
      src: "https://img.shields.io/badge/clerk-%23000000.svg?style=plastic&logo=clerk&logoColor=white",
    },
    {
      id: 17,
      name: "Jest",
      src: "https://img.shields.io/badge/-jest-%23C21325?style=plastic&logo=jest&logoColor=white",
    },
    {
      id: 18,
      name: "Vitest",
      src: "https://img.shields.io/badge/-Vitest-252529?style=plastic&logo=vitest&logoColor=FCC72B",
    },
    {
      id: 19,
      name: "Git",
      src: "https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white",
    },
    {
      id: 20,
      name: "GitHub",
      src: "https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white",
    },
    {
      id: 21,
      name: "Vercel",
      src: "https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white",
    },
  ],
};
export const SkillCategories = [
  {
    title: "Frontend Development",
    skills: SKILLS.frontend,
  },
  {
    title: "Backend Development",
    skills: SKILLS.backend,
  },
  {
    title: "Databases",
    skills: SKILLS.databases,
  },
  {
    title: "Mobile App Development",
    skills: SKILLS.mobile,
  },
  {
    title: "Tools & Platforms",
    skills: SKILLS.tools,
  },
];