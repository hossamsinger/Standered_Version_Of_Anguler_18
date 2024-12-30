export interface Question {
  id: number;
  title: string;
  category: string;
  choices: string[];
  correctAnswer?: number;
  level?: number;
  progress?: number;
}

export const questions: Question[] = [
  {
    "id": 1,
    "title": "What is the capital of France?",
    "category": "Geography",
    "choices": ["London", "Berlin", "Paris", "Madrid"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 0
  },
  {
    "id": 2,
    "title": "Which planet is known as the Red Planet?",
    "category": "Science",
    "choices": ["Venus", "Mars", "Jupiter", "Saturn"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 10
  },
  {
    "id": 3,
    "title": "What is the chemical symbol for gold?",
    "category": "Chemistry",
    "choices": ["Ag", "Fe", "Au", "Cu"],
    "correctAnswer": 2,
    "level": 2,
    "progress": 20
  },
  {
    "id": 4,
    "title": "Who wrote 'To Kill a Mockingbird'?",
    "category": "Literature",
    "choices": ["Mark Twain", "Harper Lee", "J.K. Rowling", "Ernest Hemingway"],
    "correctAnswer": 1,
    "level": 3,
    "progress": 30
  },
  {
    "id": 5,
    "title": "What is 5 + 7?",
    "category": "Math",
    "choices": ["10", "12", "13", "15"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 40
  },
  {
    "id": 6,
    "title": "What is the largest mammal?",
    "category": "Biology",
    "choices": ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 12
  },
  {
    "id": 7,
    "title": "What year did World War II end?",
    "category": "History",
    "choices": ["1940", "1945", "1950", "1939"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 60
  },
  {
    "id": 8,
    "title": "What is the square root of 64?",
    "category": "Math",
    "choices": ["6", "7", "8", "9"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 22
  },
  {
    "id": 9,
    "title": "What is the capital of Japan?",
    "category": "Geography",
    "choices": ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 80
  },
  {
    "id": 10,
    "title": "Who painted the Mona Lisa?",
    "category": "Art",
    "choices": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    "correctAnswer": 1,
    "level": 3,
    "progress": 90
  },
  {
    "id": 11,
    "title": "What is the smallest planet in our solar system?",
    "category": "Science",
    "choices": ["Mercury", "Mars", "Earth", "Pluto"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 100
  },
  {
    "id": 12,
    "title": "What is the capital of Italy?",
    "category": "Geography",
    "choices": ["Rome", "Milan", "Venice", "Naples"],
    "correctAnswer": 0,
    "level": 2,
    "progress": 5
  },
  {
    "id": 13,
    "title": "Which gas do plants absorb from the atmosphere?",
    "category": "Biology",
    "choices": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "correctAnswer": 2,
    "level": 2,
    "progress": 120
  },
  {
    "id": 14,
    "title": "Who discovered gravity?",
    "category": "Physics",
    "choices": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 55
  },
  {
    "id": 15,
    "title": "What is the speed of light?",
    "category": "Physics",
    "choices": ["299,792 km/s", "300,000 km/s", "250,000 km/s", "280,000 km/s"],
    "correctAnswer": 0,
    "level": 3,
    "progress": 2
  },
  {
    "id": 16,
    "title": "What is the capital of Canada?",
    "category": "Geography",
    "choices": ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 99
  },
  {
    "id": 17,
    "title": "What is the freezing point of water?",
    "category": "Science",
    "choices": ["0°C", "32°F", "100°C", "212°F"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 74
  },
  {
    "id": 18,
    "title": "What is the capital of Australia?",
    "category": "Geography",
    "choices": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 22
  },
  {
    "id": 19,
    "title": "What is the chemical formula for water?",
    "category": "Chemistry",
    "choices": ["H2O", "CO2", "NaCl", "O2"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 35
  },
  {
    "id": 20,
    "title": "Who wrote '1984'?",
    "category": "Literature",
    "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
    "correctAnswer": 0,
    "level": 3,
    "progress": 66
  },
  {
    "id": 21,
    "title": "What is the capital of France?",
    "category": "Geography",
    "choices": ["London", "Berlin", "Paris", "Madrid"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 0
  },
  {
    "id": 22,
    "title": "Which planet is known as the Red Planet?",
    "category": "Science",
    "choices": ["Venus", "Mars", "Jupiter", "Saturn"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 10
  },
  {
    "id": 23,
    "title": "What is the chemical symbol for gold?",
    "category": "Chemistry",
    "choices": ["Ag", "Fe", "Au", "Cu"],
    "correctAnswer": 2,
    "level": 2,
    "progress": 20
  },
  {
    "id": 24,
    "title": "Who wrote 'To Kill a Mockingbird'?",
    "category": "Literature",
    "choices": ["Mark Twain", "Harper Lee", "J.K. Rowling", "Ernest Hemingway"],
    "correctAnswer": 1,
    "level": 3,
    "progress": 30
  },
  {
    "id": 25,
    "title": "What is 5 + 7?",
    "category": "Math",
    "choices": ["10", "12", "13", "15"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 40
  },
  {
    "id": 26,
    "title": "What is the largest mammal?",
    "category": "Biology",
    "choices": ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 12
  },
  {
    "id": 27,
    "title": "What year did World War II end?",
    "category": "History",
    "choices": ["1940", "1945", "1950", "1939"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 60
  },
  {
    "id": 28,
    "title": "What is the square root of 64?",
    "category": "Math",
    "choices": ["6", "7", "8", "9"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 22
  },
  {
    "id": 29,
    "title": "What is the capital of Japan?",
    "category": "Geography",
    "choices": ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 80
  },
  {
    "id": 30,
    "title": "Who painted the Mona Lisa?",
    "category": "Art",
    "choices": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    "correctAnswer": 1,
    "level": 3,
    "progress": 90
  },
  {
    "id": 31,
    "title": "What is the smallest planet in our solar system?",
    "category": "Science",
    "choices": ["Mercury", "Mars", "Earth", "Pluto"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 100
  },
  {
    "id": 32,
    "title": "What is the capital of Italy?",
    "category": "Geography",
    "choices": ["Rome", "Milan", "Venice", "Naples"],
    "correctAnswer": 0,
    "level": 2,
    "progress": 5
  },
  {
    "id": 33,
    "title": "Which gas do plants absorb from the atmosphere?",
    "category": "Biology",
    "choices": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "correctAnswer": 2,
    "level": 2,
    "progress": 120
  },
  {
    "id": 34,
    "title": "Who discovered gravity?",
    "category": "Physics",
    "choices": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    "correctAnswer": 1,
    "level": 2,
    "progress": 55
  },
  {
    "id": 35,
    "title": "What is the speed of light?",
    "category": "Physics",
    "choices": ["299,792 km/s", "300,000 km/s", "250,000 km/s", "280,000 km/s"],
    "correctAnswer": 0,
    "level": 3,
    "progress": 2
  },
  {
    "id": 36,
    "title": "What is the capital of Canada?",
    "category": "Geography",
    "choices": ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    "correctAnswer": 1,
    "level": 1,
    "progress": 99
  },
  {
    "id": 37,
    "title": "What is the freezing point of water?",
    "category": "Science",
    "choices": ["0°C", "32°F", "100°C", "212°F"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 74
  },
  {
    "id": 38,
    "title": "What is the capital of Australia?",
    "category": "Geography",
    "choices": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "correctAnswer": 2,
    "level": 1,
    "progress": 22
  },
  {
    "id": 39,
    "title": "What is the chemical formula for water?",
    "category": "Chemistry",
    "choices": ["H2O", "CO2", "NaCl", "O2"],
    "correctAnswer": 0,
    "level": 1,
    "progress": 35
  },
  {
    "id": 40,
    "title": "Who wrote '1984'?",
    "category": "Literature",
    "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
    "correctAnswer": 0,
    "level": 3,
    "progress": 66
  },
];
