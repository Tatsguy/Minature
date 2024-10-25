import React, { Component } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiParagraphFill } from "react-icons/pi";
import { MdList } from "react-icons/md";
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { MdFormatStrikethrough } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { IoColorFilterSharp } from "react-icons/io5";
import { FaHighlighter } from "react-icons/fa";
import { MdFormatColorReset } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { MdDirectionsRun } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";
class EditorPage extends Component {
  state = {};
  render() {
    return (
      <div className="application">
        <div className="application-wrap">
          <header className="toolbar">
            <div className="toolbar-content">
              <Link to={".."} className="returnBtn">
                <button className="transBtn">
                  <IoMdArrowRoundBack />
                </button>
              </Link>
              <div className="text-center mx-auto mt-small">
                <button>
                  <span className="reloj">24 de Octubre de 2024</span>
                </button>
                <div className="carrousel-container">
                  <div className="carrousel">
                    <div className="carrousel-item">
                      <div className="btn-group">
                        <button className="btn-loot">
                          <FaPlus /><IoMdArrowDropdown/>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn-loot">
                          <PiParagraphFill /><IoMdArrowDropdown/>
                        </button>
                        <button className="btn-loot">
                          <MdList /><IoMdArrowDropdown/>
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn-loot">
                          <MdFormatBold />
                        </button>
                        <button className="btn-loot">
                          <MdFormatItalic />
                        </button>
                        <button className="btn-loot">
                          <MdFormatStrikethrough />
                        </button>
                        <button className="btn-loot">
                          <MdFormatUnderlined />
                        </button>
                      </div>
                      <div className="btn-group">
                        <button className="btn-loot">
                          <IoColorFilterSharp />
                        </button>
                        <button className="btn-loot">
                          <FaHighlighter />
                        </button>
                        <button className="btn-loot">
                          <MdFormatColorReset />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="main-app">
            <div className="embed-container">
              <textarea
                placeholder="Enter something funny."
                id="text"
                rows="4"
              ></textarea>
            </div>
            <footer className="footer">
              <div className="carrousel-container">
                <div className="carrousel">
                  <div className="carrousel-item mx-auto">
                    <button className="round-foot-btn"><IoMdPhotos/></button>
                    <button className="round-foot-btn"><IoLocationSharp/></button>
                    <button className="round-foot-btn"><IoSunnySharp/></button>
                    <button className="round-foot-btn"><MdEmojiEmotions/></button>
                    <button className="round-foot-btn"><MdDirectionsRun/></button>
                    <button className="round-foot-btn"><FaTag/></button>
                    <span className="counter">Palabras 0 | Caracteres 0</span>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    );
  }
}

export default EditorPage;
