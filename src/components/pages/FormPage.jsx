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
      <CardPreview
        profileAvatar={profileAvatar}
        projectAvatar={projectAvatar}
      />
      <Form
        profileAvatar={profileAvatar}
        setProfileAvatar={setProfileAvatar}
        projectAvatar={projectAvatar}
        setProjectAvatar={setProjectAvatar}
      />
    </>
  );
}
export default FormPage;
