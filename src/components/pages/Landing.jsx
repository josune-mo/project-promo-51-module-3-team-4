import BtnNewProject from "../botons/BtnNewProject";
import TeamCard from "../TeamCard/TeamCard";

function Landing() {
  const team = [
    {
      name: "Josune",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/assets/fotos/joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/josune",
          icon: "/assets/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/josune",
          icon: "/assets/icons/linkedin.svg",
        },
      ],
    },
    {
      name: "Chiara",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/assets/fotos/joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/chiara",
          icon: "/assets/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/chiara",
          icon: "/assets/icons/linkedin.svg",
        },
      ],
    },
    {
      name: "Montse",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/assets/fotos/joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/montse",
          icon: "/assets/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/montse",
          icon: "/assets/icons/linkedin.svg",
        },
      ],
    },
    {
      name: "Sandra",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/assets/fotos/joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Sandra",
          icon: "/assets/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/sandra",
          icon: "/assets/icons/linkedin.svg",
        },
      ],
    },
    {
      name: "Joana",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/assets/fotos/joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Joana2617",
          icon: "/assets/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/joana",
          icon: "/assets/icons/linkedin.svg",
        },
      ],
    },
  ];

  return (
    <>
      <BtnNewProject />

      <section className="team-section">
        <div className="cards-flex">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
