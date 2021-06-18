import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((studyNote) => (
        <Note
          key={studyNote.key}
          title={studyNote.title}
          content={studyNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
