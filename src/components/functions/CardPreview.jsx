import Profile from "../refactorcomponent/Profile";
import defaultAvatar from "../../images/default-avatar.svg";
import PropTypes from "prop-types";

function CardPreview({ formData }) {
  const {
    projectName,
    projectSlogan,
    profileAvatar,
    projectAvatar,
    authorName,
    authorJob,
    description,
    technology,
    projectRepository,
    projectDemo,
  } = formData;

  return (
    <div className="styleCardPreview">
      <article className="cardStyle">
        <section className="cardStyle__header">
          <Profile avatar={profileAvatar} />
          <div className="cardStyle__body">
            <p className="cardStyle__role">{authorJob}</p>
            <h2 className="cardStyle__name">{authorName}</h2>
          </div>
        </section>

        <section className="cardStyle__content">
          <p className="cardStyle__personal-project">Personal Project Card</p>
          <h3 className="cardStyle__title">{projectName}</h3>
          <h4 className="cardStyle__subtitle">{projectSlogan}</h4>
          <p className="cardStyle__description">{description}</p>

          <div className="cardStyle__project-img-container">
            <img
              src={projectAvatar || defaultAvatar}
              alt="Imagen del proyecto"
              className="cardStyle__project-img"
            />
          </div>

          <div className="cardStyle__tech-list">
            <p className="cardStyle__tech-tag">
              {technology.map((tech) => tech.label).join(", ")}
            </p>
            <div className="cardStyle__contact-links">
              {projectRepository && (
                <a href={projectRepository} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
              {projectDemo && (
                <a href={projectDemo} target="_blank" rel="noreferrer">
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
    projectName: PropTypes.string,
    projectSlogan: PropTypes.string,
    profileAvatar: PropTypes.string,
    projectAvatar: PropTypes.string,
    authorName: PropTypes.string,
    authorJob: PropTypes.string,
    description: PropTypes.string,
    technology: PropTypes.string,
    projectRepository: PropTypes.string,
    projectDemo: PropTypes.string,
  }).isRequired,
};
export default CardPreview;
