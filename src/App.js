import { useState } from "react";
import "./styles.css";
//NOTE: this code is created to have maximum reusability, so hope it helps
export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20} // displaying only 20 words
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div> //to be able to get info's from this 'TextExpander' we must write in the "function TextExpander" the prop {children}, see the function from bellow ... this is how we will display our text, this is how we get acces to the content inside of this content
  );
}

function TextExpander({
  collapsedNumWords = 10, // here we definde how much words to be displayed, in our case we specified "10" words to be displayed
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded); //setting the "useState" to "false" we set by default the test to be hidden, we implemented the prop here and we can make changes in the prop from above

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."; //this variable has the meaning if the "isExpanded" is true than display the {children} (text), otherwise "children.split(" ")" will separate the text here "slice(0, collapsedNumWords)" (this collapsedNumWords) is setted to 10 words, so after those words will cut the rest of the text, also the text now is an Arrat so we need to make a string "join(" ")", also we added those 3 dots at the end"+ "...""

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  }; // this is a reusable button

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div> //we changed the button from "Show more" to "Show less" ... also here we set the "setIsExpanded" in the useState to "expanded"="true", so every time when the user will click our function "onClick" will change from true to false openning the text and closing
  );
}
