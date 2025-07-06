import CardPreview from "../functions/CardPreview";
function CardPreviewPage({ profileAvatar, projectAvatar }) {
  return (
    <>
      <CardPreview
        profileAvatar={profileAvatar}
        projectAvatar={projectAvatar}
      />
    </>
  );
}
export default CardPreviewPage;
