/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    /* When we only have a small number of components to test
     we can include the HTML to be tested, as follows:
    document.body.innerHTML = "<p id='par'></p>";
    */
   // When we have a whole file to test, we can include the file
   // in this script
   // Read the file into memory
   let fs = require("fs");
   let fileContents = fs.readFileSync("index.html", "utf-8");
   // Add the contents to the DOM
   document.open();
   document.write(fileContents);
   document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick(); // The javascript function to be tested that updates to html
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("Expect one h1 tag, to check html document loaded", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});