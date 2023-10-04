# Work day scheduler

## About this project

This project was done as the fifth assignment of a codind bootcamp as part of the process to learn about javascript and third party APIs. I was given an HTML file and CSS file and created a javascript file to meet the following criteria:

- the current day is displayed at the top of the calendar
- I view the timeblocks for that day (from 9 to 5)
- each timeblock is color coded to indicate whether it is in the past, present, or future
- Can enter an event
- Click the save button to save the event in local storage
- the saved event persists after the page refresh

## Installation

- Deployed URL: https://mitsukaichi.github.io/work-day-scheduler/
- [Screnshot](https://github.com/mitsukaichi/work-day-scheduler/assets/45612744/0d689ff4-2fd9-4390-904b-a488015c70ea) 

## Things I learnt from this challenge

1. Some types of common date time formattings such as adding Ordinal Number Suffixes (-st, -nd, -rd, and -th) to the dates are not available with datejs and you need to write your own function to handle it.
2. When there is another element such as icon image inside of the button element, event.target will point to the specific element that was clicked on (it can be icon or the button outside of the icon). I addressed this by writing a if statement to retreive the input text and the class ID of the sibling / parent element depending on what element was clicked on, but later I realized I could have used [.each()](https://api.jquery.com/each/) function to handle this more nicely.
3. By storing user input objects in an array to store in a Local Storage, the items are ordered and the latest input will be pushed to the end of the array. When retrieving the existing data in the Local Storage and display them on the page, the latest data will override the older data for the same hour and I didn't have to handle the logic to override the existing data for the same hour. This makes it easy to meet the acceptance critria, but it will keep storeing older data forever and not the best way to handle if the size of the data becomes larger. 

## Resources referred to

- [How to Format Dates with Ordinal Number Suffixes (-st, -nd, -rd, and -th) in JavaScript](https://www.freecodecamp.org/news/format-dates-with-ordinal-number-suffixes-javascript/)
- [How to Get Class List of an Element with jQuery](https://www.tutorialrepublic.com/faq/how-to-get-class-list-of-an-element-with-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20attr,class%20names%20are%20space%20separated.)
- [JavaScript String substring()](https://www.w3schools.com/jsref/jsref_substring.asp)
- [JavaScript String includes()](https://www.w3schools.com/jsref/jsref_includes.asp)

## License 

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

