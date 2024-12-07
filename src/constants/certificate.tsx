import {
    SiNodedotjs,
    SiJavascript,
    SiVultr,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiGit
  } from "react-icons/si";
  
  const ICON_SIZE: number = 24;
  
  export const TECH_STACK_JS = [
    {
      label: "Javascript",
      icon: <SiJavascript size={ICON_SIZE} color="#38BDF8" />,
    },
  ];

export const TECH_STACK_JSX = [
    {
      label: "Javascript",
      icon: <SiReact size={ICON_SIZE} color="#38BDF8" />,
    },
  ];

export const TECH_STACK_GIT = [
    {
      label: "GIT",
      icon: <SiGit size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
  
  export const TECH_STACK_AWS = [
    {
      label: "AWS",
      icon: <SiVultr size={ICON_SIZE} color="#38BDF8" />,
    },
  ];
   export const TECH_STACK_BE = [
        {
          label: "Node JS",
          icon: <SiNodedotjs size={ICON_SIZE} color="#38BDF8" />,
        },
  ];

  export const TECH_STACK_LOMBA = [
    {
      label: "React JS",
      icon: <SiReact size={ICON_SIZE} color="#38BDF8" />,
    },
    {
      label: "Html5",
      icon: <SiHtml5 size={ICON_SIZE} color="" />,
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={ICON_SIZE} color="" />,
    }
];

 export const TECH_STACK_WEB = [
        {
          label: "HTML5",
          icon: <SiHtml5 size={ICON_SIZE} color="#38BDF8" />,
        },
     {
          label: "CSS3",  
          icon: <SiCss3 size={ICON_SIZE} color="39BDF8" />,
        },
  ];
  
  export const PROJECTCARD_CONTENTS = [
    {
      url: "",
      name: "Coming soon",
      description:
        "Coming soon",
      techStack: TECH_STACK_LOMBA,
      image:
        "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733311775/25515_c8n1ap.jpg",
      imageAlt: "Javascript",
    },
  ];
