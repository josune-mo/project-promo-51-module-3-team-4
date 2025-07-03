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
    <div className="team-card">
      <img src={photo} alt={`Foto de ${name}`} className="profile-pic" />
      <div className="card-body">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <h3>{projectTitle}</h3>
        <p className="description">{description}</p>

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
  );
}

export default TeamCard;
