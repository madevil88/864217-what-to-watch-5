import PropTypes from "prop-types";

const AddReviewFormProps = () => {
  return ({
    handleSubmit: PropTypes.func.isRequired,
    handleFieldChange: PropTypes.func.isRequired,
  });
};

export default AddReviewFormProps;
