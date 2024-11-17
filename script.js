// Emoji quiz data: Array of questions and answers
const quizData = [
  { emoji: "🌍🚀🌙", answer: "Chandrayaan-3" },
  { emoji: "🎥👻", answer: "The Exorcist" },
  { emoji: "🍎📱", answer: "Apple iPhone" },
  { emoji: "🦁👑", answer: "Lion King" },
  { emoji: "⚡🧙‍♂️", answer: "Harry Potter" }
];

// Variables to track current question and score
let currentQuestionIndex = 0;
let score = 0;

// Select DOM elements
const emojiDisplay = document.getElementById("emoji-display");
const userAnswer = document.getElementById("user-answer");
const submitButton = document.getElementById("submit-button");
const feedbackMessage = document.getElementById("feedback-message");
const scoreDisplay = document.getElementById("score-display");

// Function to load the current question
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  emojiDisplay.textContent = currentQuestion.emoji;
  userAnswer.value = ""; // Clear previous input
  feedbackMessage.textContent = ""; // Clear feedback
}

// Function to check the user's answer
function checkAnswer() {
  const userGuess = userAnswer.value.trim().toLowerCase();
  const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();

  if (userGuess === correctAnswer) {
    feedbackMessage.textContent = "Correct! 🎉";
    feedbackMessage.style.color = "green";
    score++; // Increase score for correct answer
  } else {
    feedbackMessage.textContent = "Oops! Try again. 😅";
    feedbackMessage.style.color = "red";
  }

  // Update score display
  scoreDisplay.textContent = `Score: ${score}`;

  // Move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      // End of quiz
      emojiDisplay.textContent = "Quiz Over! 🎉";
      feedbackMessage.textContent = `Your final score is ${score}/${quizData.length}.`;
      submitButton.disabled = true; // Disable further submissions
    }
  }, 1500);
}

// Event listener for submit button
submitButton.addEventListener("click", checkAnswer);

// Load the first question on page load
loadQuestion();
