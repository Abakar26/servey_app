# Survey App

## Overview

This project is a simple survey application built with React. The user is guided through 5 survey questions about personal information, work performance, stress sources, and work-life balance. The user's responses are saved in `localStorage` as JSON upon completing the survey. The app follows best coding practices and standards.

## Features

- **React-based frontend** with reusable components.
- **Dynamic survey flow**: Questions and options loaded from a JSON file.
- **Form validation** for each question:
  - Dropdown for selecting a title.
  - Date of birth input with validation.
  - Button group for rating questions.
  - Text input for open-ended answers with character limit.
- **Navigation**: Users can navigate between questions.
- **LocalStorage saving**: User responses are saved as JSON after submission.
- **Information tooltips**: Guidance provided for specific questions.

## Survey Questions

| #   | Question Title | Question Type   | Options/Validations                                   | Info Button                                         |
| --- | -------------- | --------------- | ----------------------------------------------------- | --------------------------------------------------- |
| 1   | Title          | Dropdown        | Mr, Ms, Mrs, Miss, Dr, NA                             | NA                                                  |
| 2   | Date of Birth  | Input Field     | DD (1-31), MM (1-12), YYYY (1920-2006)                | Your date of birth is required to calculate your health age. |
| 3   | Performance    | Button Group    | 1-10                                                  | NA                                                  |
| 4   | Stress Sources | Text Input Field| 250 characters max                                    | Knowing other stress drivers helps counter these factors. |
| 5   | Work-Life Balance | Button Group | A. Ideal, B. Satisfactory, C. Challenging, D. Extremely Challenging, E. Unmanageable | NA                                                  |

## Components

- **Dropdown**: For title selection.
- **DateOfBirthInput**: Input fields for day, month, and year with validation.
- **ButtonGroup**: For selecting ratings and work-life balance options.
- **TextInput**: For free-text answers (e.g., sources of stress).
- **SurveyPage**: Main survey component handling logic and rendering.

## How to Run the Project

### Prerequisites

- Node.js and npm installed on your machine.
- Familiarity with JavaScript, React, and JSON.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Abakar26/servey_app
   cd survey_app
   npm install
   npm start

### Saving Responses to JSON

The responses are saved in `localStorage` after completing the survey. You can access the saved data through the browser’s developer tools:

1. Open your browser's Developer Tools.
2. Navigate to the **Application** tab.
3. In the left sidebar, under **Storage**, expand the **Local Storage** section.
4. Select `http://localhost:3000` (or your domain if deployed).
5. The saved responses will be available under the key `surveyResponses`.

### Testing

1. Complete each question in the survey to verify the input validation.
2. Once all questions are answered, click the **Submit** button.
3. Confirm that the responses are saved in `localStorage` after submission:
   - Open the Developer Tools as described above.
   - Check the saved survey responses in `localStorage`.
4. The responses are stored as a JSON object, and you can inspect or export them as needed.
