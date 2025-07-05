import "../../styles/components/TeamCard.scss";

function TeamCard({
  name,
  role,
  projectTitle,
  description,
  technologies,
  photo,
  links,
}) {
  return (
    <>
      <div className="team-card">
        <div className="card-header">
          {/* ES EL CORRECTO, BORRAR EL DE ABAJO, SOLO LO NECESITABA PARA EL FORMATO FOTO<img src={photo} alt={`Foto de ${name}`} className="profile-pic" /> */}
          <img src={"https://placehold.co/400"} alt={`Foto de ${name}`} className="profile-pic" />
          <div className="card-body">
            <p className="role">{role}</p>
            <h2>{name}</h2>
          </div>
        </div>

        <div className="card-content">
          <p className="personalProjectCard"> Personal Project Card </p>
          <h3>{projectTitle}</h3>
          {/*  ES EL CORRECTO, BORRAR EL DE ABAJO, SOLO LO NECESITABA PARA EL FORMATO <p className="description">{description}</p> */}
          <p className="description">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>

          <div className="tech-list">
            {technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="contact-links">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
