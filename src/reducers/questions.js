const initialState = [
    {
    title: "Who sang on Taxman?",
    answers: ["John", "Paul", "George", "Ringo"],
    correct: 'George'
    },
    {
    title: "Who sang on Let It Be?",
    answers: ["John", "Paul", "George", "Ringo"],
    correct: 'Paul'
    },
    {
    title: "Who sang on Yellow Submarine?",
    answers: ["John", "Paul", "George", "Ringo"],
    correct: 'Ringo'
    },
    {
    title: "Who sang on Lucy In The Sky With Diamonds?",
    answers: ["John", "Paul", "George", "Ringo"],
    correct: 'John'
    }
];

export default function questions(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}