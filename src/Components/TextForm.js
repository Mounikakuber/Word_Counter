import React, {useState} from "react";
const TextForm = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Enter Your Paragraph</h1>
      <div className="input-group">
        <textarea
          className="form-control rounded shadow-sm"
          aria-label="With textarea"
          rows={8}
          value={text}
          onChange={onChangeHandler}
          placeholder="Type your text here..."
        ></textarea>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-success mx-2" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mx-2" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container mt-4 bg-light p-3 rounded shadow-sm">
        <h2 className="text-primary">Text Summary</h2>
        <p>
          <strong>Total Characters:</strong> {text.length}
        </p>
        <p>
          <strong>Total Words:</strong> {text.trim() ? text.split(/\s+/).length : 0}
        </p>
        <h2 className="text-primary">Final Text</h2>
        <p className="bg-white p-2 rounded border">{text}</p>
      </div>
    </div>
  );
};
export default TextForm