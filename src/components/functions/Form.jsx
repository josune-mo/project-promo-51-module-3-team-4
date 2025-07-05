function Form() {
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
          <select name="tecnologia" id="tecnologia">
            <option value="" selected disabled>
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
            id="projectName"
            name="projectName"
            required
          />
          <input
            type="text"
            placeholder="Trabajo"
            id="projectJob"
            name="projectJob"
            required
          />
        </div>
        <form action="/subir" method="post" encType="multipart/form-data">
          <input type="file" id="foto1" name="foto1" accept="image/*" />

          <input type="file" id="foto2" name="foto2" accept="image/*" />

          <button>Subir proyecto</button>
        </form>
      </form>
    </>
  );
}
export default Form;
