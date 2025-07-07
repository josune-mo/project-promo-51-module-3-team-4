import CardPreview from "../functions/CardPreview";
import PropTypes from 'prop-types';

function CardPreviewPage({projectData}) {
  return (
    <>
      <CardPreview formData={projectData} />

    </>
  );
}
CardPreviewPage.propTypes = {
  projectData: PropTypes.object.isRequired,
};
export default CardPreviewPage;
