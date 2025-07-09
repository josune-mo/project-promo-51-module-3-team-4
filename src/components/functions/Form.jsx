import { useState } from "react";
import GetAvatar from "../refactorcomponent/GetAvatar";
import PropTypes from "prop-types";
import Select from "react-select";
import { Link } from "react-router-dom";

function Form({ formData, setFormData }) {
  const [showMessage, setShowMessage] = useState(false); // Nuevo estado

  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataAEnviar = {
      ...formData,
      technologies: formData.technologies.map((tech) => tech.value),
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(dataAEnviar),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        setShowMessage(true); // Mostrar mensaje
        setTimeout(() => setShowMessage(false), 5000); // Ocultar mensaje después de 5s
      });
  };

  const techOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "typescript", label: "TypeScript" },
  ];

  return (
    <>
      <div className="form__wrapper">
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="form__title">
            <h2>Información</h2>
            <p>Cuéntanos más sobre tu proyecto</p>
          </div>
          <div className="form__divider"></div>

          <div className="form__group">
            <input
              type="text"
              placeholder="Nombre del proyecto"
              id="name"
              name="name"
              required
              className="form__input"
              value={formData.name}
              onChange={handleInput}
            />
          </div>

          <div className="form__group">
            <input
              type="text"
              placeholder="Slogan"
              id="slogan"
              name="slogan"
              required
              className="form__input"
              value={formData.slogan}
              onChange={handleInput}
            />
          </div>

          <div className="form__group2">
            <input
              type="text"
              placeholder="Repo ejemplo: https://github.com/tuusuario/tu-repo"
              id="repo"
              name="repo"
              required
              className="form__input"
              value={formData.repo}
              onChange={handleInput}
            />

            <input
              type="text"
              placeholder="Demo"
              id="demo"
              name="demo"
              required
              className="form__input"
              value={formData.demo}
              onChange={handleInput}
            />
          </div>

          <Select
            placeholder="Tecnologías"
            options={techOptions}
            isMulti
            closeMenuOnSelect={false}
            isSearchable={false}
            name="technologies"
            className="form__select"
            classNamePrefix="select"
            value={formData.technologies}
            onChange={(selectedOptions) =>
              setFormData({
                ...formData,
                technologies: selectedOptions,
              })
            }
          />

          <div className="form__group">
            <textarea
              id="desc"
              name="desc"
              placeholder="Descripción"
              required
              className="form__textarea"
              value={formData.desc}
              onChange={handleInput}
              rows="5"
            ></textarea>
          </div>

          <div className="form__group">
            <h3 className="form__author">Cuéntanos sobre la autora</h3>

            <input
              type="text"
              placeholder="Nombre"
              id="autor"
              name="autor"
              required
              className="form__input"
              value={formData.autor}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Trabajo"
              id="job"
              name="job"
              required
              className="form__input"
              value={formData.job}
              onChange={handleInput}
            />

            <div className="btnContainer">
              <GetAvatar
                avatar={formData.image}
                updateAvatar={(img) =>
                  setFormData({ ...formData, image: img })
                }
                text="Sube tu foto de perfil"
                hidePreview={true}
              />
            </div>

            <div className="btnContainer">
              <GetAvatar
                avatar={formData.photo}
                updateAvatar={(img) =>
                  setFormData({ ...formData, photo: img })
                }
                text="Sube la imagen de tu proyecto"
                hidePreview={true}
              />
            </div>

            <div className="btnContainer">
              <button type="submit" className="genericBtn">
                Subir proyecto
              </button>
              <Link to="/cardpreview">
                <button className="genericBtn">Ver proyecto</button>
              </Link>
            </div>

            {/* ✅ Mensaje de éxito */}
            {showMessage && (
              <p className="form__success-message">
                ¡Proyecto subido con éxito!
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    slogan: PropTypes.string,
    repo: PropTypes.string,
    demo: PropTypes.string,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    desc: PropTypes.string,
    autor: PropTypes.string,
    job: PropTypes.string,
    image: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
