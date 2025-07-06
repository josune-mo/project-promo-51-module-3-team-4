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
      photo: "/Josune.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/josune",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/josune",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Chiara",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/Chiara.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/cusichia",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/chiara-cusi-493b5a216",
          icon: "/linkedin.svg",
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
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/montse",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Sandra",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/Sandra.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Sandra",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/sandra",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Joana",
      role: "Full Stack Developer",
      projectTitle: "Elegant Workspace",
      description: "Detail.",
      technologies: ["React", "HTML", "CSS"],
      photo: "/Joana.jpg",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Joana2617",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/joana-nunes-8915b113a/",
          icon: "/linkedin.svg",
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
