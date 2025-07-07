import BtnListProjects from "../botons/BtnListProjects";
import Form from "../functions/Form";
import CardPreview from "../functions/CardPreview";

function FormPage({
  profileAvatar,
  setProfileAvatar,
  projectAvatar,
  setProjectAvatar,
}) {
  return (
    <>
      <BtnListProjects />

      <section className="formPageStyle">
        <CardPreview
          profileAvatar={profileAvatar}
          projectAvatar={projectAvatar}
          className="leftContent"
        />
        <Form
          profileAvatar={profileAvatar}
          setProfileAvatar={setProfileAvatar}
          projectAvatar={projectAvatar}
          setProjectAvatar={setProjectAvatar}
          className="rightContent"
        />
      </section>
    </>
  );
}
export default FormPage;
