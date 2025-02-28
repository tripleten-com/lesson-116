export default class SubmitForm {
  constructor({ formSelector }) {
    this._formSelector = formSelector;
  }

  _getTemplate() {
  	const formElement = document
      .querySelector(this._formSelector)
      .content
      .querySelector(".form")
      .cloneNode(true);

    return formElement;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._element.reset();
    })
  }


  generateForm() {
    this._element = this._getTemplate();
    this._setEventListeners();

  	return this._element;
  }
}