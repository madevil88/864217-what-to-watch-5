import React, {PureComponent} from "react";

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingInput: 3,
      reviewText: ``
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    if (evt.target.type === `radio`) {
      this.setState({ratingInput: evt.target.value});
    } else {
      this.setState({reviewText: evt.target.value});
    }
  }

  render() {
    return (
      <div className="add-review">
        <form action="#" className="add-review__form"
          onSubmit={this.handleSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                onChange={this.handleFieldChange}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                onChange={this.handleFieldChange}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked={true}
                onChange={this.handleFieldChange}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                onChange={this.handleFieldChange}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                onChange={this.handleFieldChange}
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
              onChange={this.handleFieldChange}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;
