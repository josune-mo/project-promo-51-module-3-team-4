import defaultAvatar from "../../images/default-avatar.svg";
import defaultProject from "../../images/project-default.png";
import PropTypes from "prop-types";

function CardPreview({ formData }) {
  const {
    name,
    slogan,
    image,
    photo,
    autor,
    job,
    desc,
    technologies,
    repo,
    demo,
  } = formData;

  return (
    <div className="styleCardPreview">
      <article className="cardStyle">
        <section className="cardStyle__header">
          <div className="cardStyle__avatar">
            <img
              src={image || defaultAvatar}
              alt="Foto de perfil"
              className="cardStyle__avatar-img"
            />
          </div>
          <div className="cardStyle__body">
            <p className="cardStyle__role">
              {job || "Full Stack Developer"}
            </p>
            <h2 className="cardStyle__name">
              {autor || "Emmelie Björklund"}
            </h2>
          </div>
        </section>

        <section className="cardStyle__content">
          <p className="cardStyle__personal-project">Personal Project Card</p>
          <h3 className="cardStyle__title">
            {name || "Elegant Workspace"}
          </h3>
          <h4 className="cardStyle__subtitle">
            {slogan || "Diseños exclusivos"}
          </h4>
          <p className="cardStyle__description">
            {desc ||
              "Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
          </p>

          <div className="cardStyle__project-img-container">
            <img
              src={photo || defaultProject}
              alt="Imagen del proyecto"
              className="cardStyle__project-img"
            />
          </div>

          <div className="cardStyle__tech-list">
            <p className="cardStyle__tech-tag">
              {technologies && technologies.length > 0
                ? technologies.map((tech) => tech.label).join(", ")
                : "HTML, CSS, JavaScript"}
            </p>
            <div className="cardStyle__contact-links">
              {repo && (
                <a href={repo} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

CardPreview.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    slogan: PropTypes.string,
    image: PropTypes.string,
    photo: PropTypes.string,
    autor: PropTypes.string,
    job: PropTypes.string,
    desc: PropTypes.string,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    repo: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
};
export default CardPreview;
