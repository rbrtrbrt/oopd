const agenda = {}

agenda.currentLesson = [1,1]  // [ week, lesson in week ] 1-based 

// All strings in this data will be preprocessed by a Markdown converter.
// So you can use **bold**, _italic_ and [hyperlinks](http://www.example.com).
agenda.lessonWeeks =
[
  // a week is just an array of objects
  [
    {  // a lesson is an object
      date: "Monday Aug 30th",
      title: "Kick-off", // title is optional
      content: [ // content is optional
        "Kick-off",
        "Getting the Arduino to work with your laptop",
        "Getting your browser to work with mail-links",
        "Start with [chapter 1: introduction to the Arduino](/ch1-intro-arduino/index.html)",
      ]
    },
    { date: "Tuesday Aug 31st",
      title: "[chapter 1: introduction to the Arduino](/ch1-intro-arduino/index.html)",
      // content: [
      //   "Assignments 1.3 - 1.10",
      //   "_assignment 1.11 is left for the next day_",
      // ]
      content: 
        "Assignments 1.3 - 1.10",
      //   "_assignment 1.11 is left for the next day_",
      // ]
    }, 
    { date: "Wednesday Sept 1st",
      title: "[chapter 2: intro to JavaScript](/ch2-intro-javascript/index.html)",
      content: [
        "assignment 1.11 of [chapter 1](/ch1-intro-arduino/index.html)",
        "assignments 2.3 - 2.10",
      ]
    }, 
    { date: "Thursday Sept 2nd",
      title: "[chapter 3: interactivity in JavaScript with _functions_](/ch3-interactivity-functions/index.html)",
      content: [
        "Assignments 3.3 - 3.11",
        "_(assignment 3.12 is left for the next lesson)_",
      ],
    }, 
  ],
  [
    { date: "Monday Sept 6th",
      title: "[chapter 4: calculations and storing results in _variables_](ch4-calculations-variables/index.html)",
      content: [
        "Assignment 3.12",
        "Assignments 4.2 - 4.7",
      ],
    }, 
    { date: "Tuesday Sept 7th",
      title: "[ch5: russian dolls for data: variables _inside_ variables](/ch5-variables-inside-variables/index.html')",
      content: [
        "assignments 5.2 - 5.12",
      ],
    }, 
    { date: "Wednesday Sept 8th",
      title: "[ch6: _debugging_ code that doesn't work](/ch6-debugging/index.html')",
      content: [
        "assignments 6.2 - 6.6",
      ],
    }, 
    { date: "Thursday Sept 9th",
      title: "[chapter 7 - how functions communicate: _parameters_ and _return values_](/ch7-more-about-functions/index.html)",
      content: [
        "assignments 7.2 - 7.11 ",
      ],
    }
  ], 
  [
    { date: "Monday Sept 13th",
      title: "[chapter 7](/ch7-more-about-functions/index.html) and [chapter 8: _true_, _false_, and choosing with _if-statements_](/ch8-true-false-if/index.html)",
      content: [
        "assignment 8.1,",
        "first:/ assignment 8.2",
        "then:/ assignment 7.12,",
        "assignments 8.3 - 8.6",
      ],
    }, 
    { date: "Tuesday Sept 14th",
      title: "[chapter 8: _true_, _false_, and choosing with _if-statements_ (continued)](/ch8-true-false-if/index.html)",
      content: [
        "assignment 8.6,",
        "assignments 8.7 - 8.9",
        "assignments 8.10 - 8.12 ",
      ],
    },
    { date: "Wednesday Sept 15th",
      title: "[chapter 9: more about if-statements and _conditions_](/ch9-more-if-conditions/index.html)",
      content: [
        "video 9a, video 9b,",
        "_aandachtig lezen:_ tekstblok over logical operators,",
        "en opdracht 9.1 (summary, questions)",
        "assignments 9.2, and 9.3,",
        "[assignments 8.10 - 8.11, als je die nog niet af had],",
        "[assignments 8.10 - 8.11, als je die nog niet af hebt],",
        "assignment 8.12,",
        "asignments 9.4 - 9.8.",
      ],
    },{
      date: "Thursday Sept 16th",
      title: "[10: more about functions: _local variables_ and _side effects_](/ch10-locals-and-side-effects/index.html), and chapter [11: fun with data types](/ch11-fun-with-datatypes/index.html)",
      content: [
        "9:00 - 9:30: video 10a en opdracht 10.1 ",
        "opdrachten 9.7 and 9.8.",
        "video 10b and opdracht 10.2,",
        "opdrachten 10.3 en 10.4,",
        "_aandachtig lezen:_ tekstblok over side effects versus return values,",
        "opdrachten 10.5 en 10.6 ",
      ],
    },
    { date: "Monday Sept 20th",
      title: "[11: fun with data types](/ch11-fun-with-datatypes/index.html)",
      content: [
        "9:00 - 9:30: opdracht 10.7",
        "opdrachten 11.1,",
        "_aandachtig lezen:_ tekstblok over datatypes,",
        "opdrachten 11.2 - 11.4,",
        "opdrachten 11.5 en 11.6 ",
      ],
    }
  ],
  [
    { date: "Tuesday Sept 21st",
      title: "[12: recap: let&apos;s review what you&apos;ve learned by now](/ch12-recap/index.html)",
      content: [
        "leeswerk: [What is a concept map?](https://cmap.ihmc.us/docs/conceptmap.php) (alleen inleiding),",
        "leeswerk: [How people learn](https://cmap.ihmc.us/docs/howpeoplelearn.php) (helemaal, is kort),",
        "instruction-box over installeren CMap tools,",
        "opdrachten 12.1 and 12.2",
        "opdrachten 12.3 - 12.5 ",
      ],
    },
    { date: "Wednesday Sept 22nd",
      title: "[13: loops for repeating commands](/ch13-loops/index.html)",
      content: [
        "assignments 13.2 and 13.3",
        "read carefully: the text box about for-loops",
        "assignments 13.4 - 13.7",
      ],
    },
    { date: "Thursday Sept 23rd",
      title: "[13: loops for repeating commands _(continued)_](/ch13-loops/index.html)",
      content: [
        "9:00 - 9:30: geen video; gebruik je tijd om de laatste opdrachten van gisteren af te maken of te verbeteren n.a.v. de les.",
        "assignment 13.8",
        "assignments 13.9 - 13.12",
      ],
    }
  ],
  // [
  //   { date: "Monday Sept 27th",
  //     title: "[13: loops for repeating commands _(continued 2)_](/ch13-loops/index.html) and [14: visuals with canvas and animation](/ch14-canvas-animation/index.html)",
  //     content: [
  //       "b Geen aftrap",
  //       "lees aandachtig: text box &quot;loops in Arduino&quot;, en _voer het tweede programma uit in je Arduino_",
  //       "oefeningen 13.9 - 13.10, _(niet 13.11)_",
  //       "en",
  //       "video 14a en oefening 14.1, en",
  //       "video &quot;The best stats you&apos;ve ever seen&quot; (i.i.g. stukje tussen 3:07 and 5:14)",
  //       "oefeningen 14.2 tot 14.4.a",
  //     ],
  //   },
  //   { date: "Tuesday Sept 28th",
  //     title: "[14: visuals with canvas and animation (continued)](/ch14-canvas-animation/index.html)",
  //     content: [
  //       "oefening 14.2 (als je die nog niet hebt) ",
  //       "oefening 14.3 - 14.7,",
  //     ],
  //   },
  //   { date: "Wednesday Sept 29th",
  //     title: "[15: active objects do it with _methods_](/ch15-methods/index.html)",
  //   },
  //   { date: "Thursday Sept 30th",
  //     title: "[15: active objects do it with _methods_ (continued)](/ch15-methods/index.html)",
  //     content: [
  //       "video 15b and assignment 15.4 ",
  //       "10:00 - 16:00: assignments 15.5 - 15.7",
  //     ],
  //   }
  // ],
  // [
  //   { date: "Monday Oct. 4th",
  //     title: "[16: final assignment _javascript_: Battleships](_javascript-battleships_index.html)",
  //     content: [
  //       // "9:00 - 9:30: video 15c en assignment 15.8",
  //       // "assignments 15.9 - 15.11",
  //       "_introductie Battle Ships eindopdracht_",
  //       "Video battleships code walkthrough",
  //       "assignments 16.1 and 16.2",
  //     ],
  //   },
    // { date: "Tuesday Oct. 5th",
    //   title: "[16: final assignment _javascript_: Battleships](/javascript-battleships/index.html)",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
    // { date: "Wednesday Oct. 6th",
    //   title: "",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
    // { date: "Thursday Oct. 7th",
    //   title: "",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
  //   { date: "_Sunday_ Oct. 10th",
  //     title: "23:00: _deadline_ [Zeeslag](/javascript-battleships/index.html)",
  //     content: [],
  //   }
  // ],
  // [
  //   { date: "Monday Oct. 11th",
  //     title: "[17: final assignment _Arduino_: Inbraakalarm](/arduino-burglar-alarm/index.html)",
  //     content: [
  //       "regular meeting schedule where we support making the assignment",
  //     ],
  //   },
    // { date: "Tuesday Oct. 12th",
    //   title: "",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
    // { date: "Wednesday Oct. 13th",
    //   title: "",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
    // { date: "Thursday Oct. 14th",
    //   title: "",
    //   content: [
    //     "regular meeting schedule where we support making the assignment",
    //   ],
    // },
  //   { date: "Sunday Oct. 17th",
  //     title: "23:00: _deadline_ [Inbraakalarm](/arduino-burglar-alarm/index.html)",
  //     content: [],
  //   }
  // ]
]