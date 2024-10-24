import React, { Component } from "react";
class EditorPage extends Component {
  state = {};
  render() {
    return (
      <div className="application">
        <div className="application-wrap">
          <header className="toolbar">
            <div className="toolbar-content">
                <button></button>
                <div></div>
            </div>
          </header>
          <main className="main">
            <div className="embed-container"></div>
            <footer className="footer"></footer>
          </main>
        </div>
      </div>
    );
  }
}

export default EditorPage;
