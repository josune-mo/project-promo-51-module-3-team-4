import GetAvatar from "../refactorcomponent/GetAvatar";

function Form({
  profileAvatar,
  setProfileAvatar,
  projectAvatar,
  setProjectAvatar,
}) {
  return (
    <>
      <div>
        <h2>Información</h2>
        <p>Cuéntanos mas sobre tu proyecto</p>
      </div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Nombre del proyecto"
            id="projectName"
            name="projectName"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Slogan"
            id="projectSlogan"
            name="projectSlogan"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Repositorio"
            id="projectRepository"
            name="projectRepository"
            required
          />

          <input
            type="text"
            placeholder="Demo"
            id="projectDemo"
            name="projectDemo"
            required
          />
        </div>
        <div>
          <select name="tecnologia" id="tecnologia" defaultValue="">
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
        <div>
          <textarea
            id="description"
            name="description"
            placeholder="Descripción"
            required
          ></textarea>
        </div>

        <div>
          <h3>Cuéntanos sobre la autora</h3>

          <input
            type="text"
            placeholder="Nombre"
            id="authorName"
            name="authorName"
            required
          />
          <input
            type="text"
            placeholder="Trabajo"
            id="authorJob"
            name="authorJob"
            required
          />
          {/* Foto de perfil */}
          <GetAvatar
            avatar={profileAvatar}
            updateAvatar={setProfileAvatar}
            text="Sube tu foto de perfil"
          />
        </div>
        {/* Foto del proyecto */}
        <div>
          <GetAvatar
            avatar={projectAvatar}
            updateAvatar={setProjectAvatar}
            text="Sube la imagen de tu proyecto"
          />
        </div>
        <button>Subir proyecto</button>
      </form>
    </>
  );
}
export default Form;
