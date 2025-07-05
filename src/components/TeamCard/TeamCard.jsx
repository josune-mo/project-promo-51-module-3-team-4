

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
      <article className="cardStyle">
        <section className="cardStyle__header">
           {/* ESTE ES EL CORRECTO, BORRAR EL DE ABAJO, SOLO LO NECESITABA PARA EL FORMATO FOTO --> <img src={photo} alt={`Foto de ${name}`} className="profile-pic" /> */}
          <img src={"https://placehold.co/400"} alt={`Foto de ${name}`} className="cardStyle__profile-pic" />
          <div className="cardStyle__body">
            <p className="cardStyle__role">{role}</p>
            <h2 className="cardStyle__name">{name}</h2>
          </div>
        </section>

        <section className="cardStyle__content">
          <p className="cardStyle__personal-project">Personal Project Card</p>
          <h3 className="cardStyle__title">{projectTitle}</h3>
          <h4 className="cardStyle__subtitle">Diseños Exclusivos</h4>
          {/*  ESTE ES EL CORRECTO, BORRAR EL DE ABAJO, SOLO LO NECESITABA PARA EL FORMATO --> <p className="description">{description}</p> */}
          <p className="cardStyle__description">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>

          <div className="cardStyle__tech-list">
            {technologies.map((tech, i) => (
              <span key={i} className="cardStyle__tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="cardStyle__contact-links">
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
        </section>
      </article>
    </>

  );
}

export default TeamCard;
