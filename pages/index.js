import Section from "../components/Section.js";
import SubmitForm from "../components/SubmitForm.js";
import UserCard from "../components/UserCard.js";
import DefaultCard from "../components/DefaultCard.js";
import {
  messageList,
  cardListSection,
  formSection
} from "../utils/constants.js";

const cardList = new Section({
  data: messageList,
  renderer: (item) => {
    const card = item.isOwner
      ? new UserCard(item, ".card-template_type_user")
      : new DefaultCard(item, ".card-template_type_default");

    const cardElement = card.generateCard();

    cardList.setItem(cardElement);
    },
  },
  cardListSection
);

cardList.renderItems();

const form = new SubmitForm({
  formSelector: ".form-template",
});

// initializing the form
const formRenderer = new Section({
	data: []
}, formSection);

const formElement = form.generateForm();

formRenderer.setItem(formElement);