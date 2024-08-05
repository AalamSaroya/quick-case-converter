import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./FormText.css";
import { Container } from "react-bootstrap";
import iconClipboard from "../../assets/icons/clipboard.svg";

const FormText = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCopyToClipBoard = () => {
    var copyText = document.getElementById("text");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  };

  const handleSentenceCase = () => {
    const sentenceCase = text
      .split(".")
      .map((sentence) => {
        if (sentence.length > 0) {
          if (sentence.at(0) !== " ") {
            return (
              sentence.at(0).toUpperCase() + sentence.slice(1).toLowerCase()
            );
          } else {
            return (
              " " +
              sentence.at(1).toUpperCase() +
              sentence.slice(2).toLowerCase()
            );
          }
        }
      })
      .join(".");
    setText(sentenceCase);
  };

  const handleLowerCase = (e) => {
    setText(text.toLowerCase());
  };

  const handleUpperCase = (e) => {
    setText(text.toUpperCase());
  };
  const handleCapitaliszedCase = (e) => {
    if (text.length > 0) {
      const capitalizedText = text
        .split(" ")
        .map((word) => {
          return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
      setText(capitalizedText);
    }
  };
  const handleAlternatingCase = (e) => {
    const alternatedText = text
      .split("")
      .map((alphabet, index) => {
        if (index === 0 || index % 2 === 0) {
          return alphabet.toLowerCase();
        } else {
          return alphabet.toUpperCase();
        }
      })
      .join("");
    setText(alternatedText);
  };

  const handleClearField = () => {
    setText("");
  };
  return (
    <form className="form-text" onSubmit={handleSubmit}>
      <Container>
        <img src={iconClipboard} alt="" onClick={handleCopyToClipBoard} />
        <textarea
          id="text"
          rows={6}
          value={text}
          onChange={handleChange}
          placeholder="Enter some text here..."
        ></textarea>
        <Button type="submit" onClick={handleSentenceCase}>
          Sentence case
        </Button>
        <Button type="submit" onClick={handleLowerCase}>
          lower case
        </Button>
        <Button type="submit" onClick={handleUpperCase}>
          UPPER CASE
        </Button>
        <Button type="submit" onClick={handleCapitaliszedCase}>
          Capitalized Case
        </Button>
        <Button type="submit" onClick={handleAlternatingCase}>
          aLtErNaTiNg cAsE
        </Button>
        <Button type="reset" onClick={handleClearField}>
          Clear
        </Button>
      </Container>
    </form>
  );
};

export default FormText;
