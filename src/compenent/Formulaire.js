import React from "react";
import { useState } from "react";

const Formulaire = () => {
  const [nom, setName] = useState("");
  const [prenom, setCompany] = useState("");
  const [telephone, setPhone] = useState("+33");
  const [email, setEmail] = useState("");
  const [sujet, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] =useState(false);
  
  const checkboxHandler = () => {
    setAgree(!agree);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("input-nom");
    let emailS = document.getElementById("input-mail");
    let messageS = document.getElementById("input-message");
    let formMess = document.querySelector(".form-message");
    let agreeS = document.getElementById("checkbox");

    const isEmail = () => {
      let isMail = document.getElementById("input-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        return true;
      } else {
        isMail.style.borderColor = "red";
        return false;
      }
    };

    if (nom && isEmail() && message && agree) {

      
      const templateId = "template_3gdls1c";

      nameS.classList.remove("error");
      emailS.classList.remove("error");
      messageS.classList.remove("red");
      

      sendFeedback(templateId, {
        nom,
        prenom,
        telephone,
        sujet,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.color = "red";

      if (!nom) {
        nameS.classList.add("error");
      } else {
        nameS.classList.remove("error");
      }
      if (!email) {
        emailS.classList.add("error");
      } else {
        emailS.classList.remove("error");
      }
      if (!message) {
        messageS.classList.add("error");
      } else {
        messageS.classList.remove("error");
      }
      if (!agree) {
        agreeS.classList.add("error");
      } else {
        agreeS.classList.remove("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.color = "green";

        document.getElementById("nom").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div className="formulaire-content">
      <div className="form-texte">
        <h4>Sodales aliquam </h4>
        <h2>Odio mauris diam </h2>
        <p>
          Phasellus risus turpis, pretium sit amet magna non, molestie ultricies
          enim. Nullam pulvinar felis at metus malesuada.
        </p>
      </div>
      <div className="formulaire">
        <form className="contact-form">
          <div className="form-content">
            <div className="form-input input-nom" id="input-nom">
              <p> Nom </p>
              <input
                type="text"
                name="nom"
                id="nom"
                required
                onChange={(e) => setName(e.target.value)}
                value={nom}
              />
            </div>
            <div className="form-input input-prenom">
              <p> Prénom </p>
              <input
                type="text"
                id="prenom"
                name="prenom"
                onChange={(e) => setCompany(e.target.value)}
                value={prenom}
              />
            </div>

            <div className="email-content input-mail">
              <label id="not-mail">Email non valide</label>
              <div className="form-input" id="input-mail">
                <p> Adresse email </p>
                <input
                  type="mail"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="form-input input-tel">
              <p>
                {" "}
                Téléphone <p>(facultatif)</p>{" "}
              </p>
              <input
                type="text"
                id="telephone"
                name="telephone"
                onChange={(e) => setPhone(e.target.value)}
                value={telephone}
              />
            </div>
            <div className="sperateur">
              {" "}
              <p></p>
            </div>

            <div className="form-input input-sujet">
              <p> Sujet </p>
              <select
                id="sujet"
                name="sujet"
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="" defaultValue>
                  Choisissez un sujet
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="form-input input-message" id="input-message">
              <p> Message </p>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>

            <div id="checkbox">
              <input className="checkbox" type="checkbox"  onChange={checkboxHandler}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor.</p>
            </div>
            <input
              className="button hover"
              type="submit"
              value="Envoyer"
              onClick={handleSubmit}
            />
            <div className="form-message"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
