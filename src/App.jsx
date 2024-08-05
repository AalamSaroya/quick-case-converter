import "./App.css";
import { Container } from "react-bootstrap";
import FormText from "./components/form_text/FormText";

const App = () => {
  return (
    <div className="page-wrap sec-padding">
      <Container>
        <h1>Quick Case Converter</h1>
        <h6>
          Quickly and easily convert your text to any case style. Choose from
          Sentence case, lower case, UPPER CASE, Capitalized Case, and more.
          Perfect for social media, content creation, or any text formatting
          needs.
        </h6>
      </Container>
      <FormText />
    </div>
  );
};

export default App;
