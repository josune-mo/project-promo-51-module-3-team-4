import BtnListProjects from "../botons/BtnListProjects";
import Form from "../functions/Form";
import CardPreview from "../functions/CardPreview";

function FormPage({ formData, setFormData }) {
  const { profileAvatar, projectAvatar } = formData;
  return (
    <>
      <BtnListProjects />

      <section className="formPageStyle">
        <CardPreview
          formData={formData}
          setFormData={setFormData}
          className="leftContent"
        />
        <Form
          formData={formData}
          setFormData={setFormData}
          className="rightContent"
        />
      </section>
    </>
  );
}
export default FormPage;
