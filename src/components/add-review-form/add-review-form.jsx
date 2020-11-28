import React from "react";
import AddReviewFormProps from "./add-review-form-props";
import {connect} from "react-redux";
import {commentFilm} from "../../store/api-actions";
import {ReviewTextLength, ErrorMessageMap} from "../../const";
import {getReviewStatus} from "../../store/selectors";

const validate = ({reviewText, ratingInput})=>{
  let isValid = true;
  const messages = [];

  if (reviewText.length < ReviewTextLength.MIN) {
    isValid = false;
    messages.push(`Minimun message length ${ReviewTextLength.MIN} symbols. Current lenght ${reviewText.length}.`);
  }

  if (reviewText.length > ReviewTextLength.MAX) {
    isValid = false;
    messages.push(`Maximum message length ${ReviewTextLength.MAX} symbols. Need to delete ${reviewText.length - ReviewTextLength.MAX}.`);
  }

  if (!ratingInput) {
    isValid = false;
    messages.push(`Please, select the rating score.`);
  }

  return {isValid, messages};
};

const AddReviewForm = (props) => {
  const {handleFieldChange, ratingInput, reviewText, onSubmit, id, reviewStatus} = props;
  const {isValid, messages} = validate({reviewText, ratingInput});

  return (
    <div className="add-review">
      <form action="#" className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit(id, {
            rating: ratingInput,
            comment: reviewText,
          });
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked={true}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleFieldChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isValid}
            >Post</button>
          </div>
        </div>
        {reviewStatus && <div>{ErrorMessageMap[reviewStatus]}</div>}
        {!isValid && messages.map((message, i)=><div key={i}>{message}</div>)}
      </form>
    </div>
  );
};

AddReviewForm.propTypes = AddReviewFormProps.propTypes;

const mapStateToProps = (state) => ({
  reviewStatus: getReviewStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentData) {
    dispatch(commentFilm(id, commentData));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
