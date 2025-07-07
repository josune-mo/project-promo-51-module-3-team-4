import GetAvatar from "../refactorcomponent/GetAvatar";

function Form({ formData, setFormData }) {
  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <>
      <div className="form__wrapper">
        <form className="form__container">
          <div className="form__title">
            <h2>Información</h2>
            <p>Cuéntanos mas sobre tu proyecto</p>
          </div>
          <div className="form__divider"></div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Nombre del proyecto"
              id="projectName"
              name="projectName"
              required
              className="form__input"
              value={formData.projectName}
              onChange={handleInput}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Slogan"
              id="projectSlogan"
              name="projectSlogan"
              required
              className="form__input"
              value={formData.projectSlogan}
              onChange={handleInput}
            />
          </div>
          <div className="form__group2">
            <input
              type="text"
              placeholder="Repositorio"
              id="projectRepository"
              name="projectRepository"
              required
              className="form__input"
              value={formData.projectRepository}
              onChange={handleInput}
            />

            <input
              type="text"
              placeholder="Demo"
              id="projectDemo"
              name="projectDemo"
              required
              className="form__input"
              value={formData.projectDemo}
              onChange={handleInput}
            />
          </div>
          <div className="form__group">
            <select
              className="form__select"
              name="tecnologia"
              id="tecnologia"
              defaultValue=""
              value={formData.technology}
              onChange={handleInput}
            >
              <option value="" disabled>
                Tecnología
              </option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
              <option value="go">Go (Golang)</option>
              <option value="typescript">TypeScript</option>
            </select>
          </div>
          <div className="form__group">
            <textarea
              id="description"
              name="description"
              placeholder="Descripción"
              required
              className="form__textarea"
              value={formData.description}
              onChange={handleInput}
              rows="5"
            ></textarea>
          </div>

          <div className="form__group">
            <h3 className="form__author">Cuéntanos sobre la autora</h3>

            <input
              type="text"
              placeholder="Nombre"
              id="authorName"
              name="authorName"
              required
              className="form__input"
              value={formData.authorName}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Trabajo"
              id="authorJob"
              name="authorJob"
              required
              className="form__input"
              value={formData.authorJob}
              onChange={handleInput}
            />

            <div className="form__btns">
              {/* Foto de perfil */}
              <GetAvatar
                avatar={formData.profileAvatar}
                updateAvatar={(img) =>
                  setFormData({ ...formData, profileAvatar: img })
                }
                text="Sube tu foto de perfil"
              />
            </div>
            {/* Foto del proyecto */}
            <div className="form__group">
              <GetAvatar
                avatar={formData.profileAvatar}
                updateAvatar={(img) =>
                  setFormData({ ...formData, profileAvatar: img })
                }
                text="Sube la imagen de tu proyecto"
              />
            </div>
            <button className="genericBtn">Subir proyecto</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;
