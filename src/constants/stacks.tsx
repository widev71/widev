import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiNginx,
  SiGithub,
  SiHtml5,
  SiAdobephotoshop,
  SiLaragon,
  SiBootstrap,
  SiJavascript,
  SiCss3,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiElementor,
  SiTailwindcss,
  SiVite,
  SiEnvato,
  SiAdobelightroom,
  SiWordpress,
  SiFigma,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  Wordpress: <SiWordpress size={ICON_SIZE} color="#3858E9" />,
  Express: <SiExpress size={ICON_SIZE} />,
  Adobelightroom: <SiAdobelightroom size={ICON_SIZE} color="#3858E9" />,
  "Next.js": <SiNextdotjs size={ICON_SIZE} color="" />,
  Adobephotoshop: <SiAdobephotoshop size={ICON_SIZE} color="#3858E9" />,
  Nginx: <SiNginx size={ICON_SIZE} color="" />,
  "React.js": <SiReact size={ICON_SIZE} color="#149FCB" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  Elementor: <SiElementor size={ICON_SIZE} color="#FF7BE5" />,
  Laragon: <SiLaragon size={ICON_SIZE} color="#38ACFF" />,
  Bootstrap: <SiBootstrap size={ICON_SIZE} color="#8709FB" />,
  Firebase: <SiFirebase size={ICON_SIZE} color="#FFCA2F" />,
  "Framer Motion": <SiFramer size={ICON_SIZE} />,
  HTML: <SiHtml5 size={ICON_SIZE} color="#F06525" />,
  Vite: <SiVite size={ICON_SIZE} color="#F6BB17" />,
  CSS: <SiCss3 size={ICON_SIZE} color="#214CE5" />,
  Figma: <SiFigma size={ICON_SIZE} color="#8709FB" />,
  "Node JS": <SiNodedotjs size={ICON_SIZE} color="#418A3F" />,
  Github: <SiGithub size={ICON_SIZE} />,
  Envato: <SiEnvato size={ICON_SIZE} color="#87E64B"/>,
};
