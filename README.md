# react-wedding-card
A mobile wedding invitation card built with React.

## Page Structure / Features
<details>
  <summary>1. Cover</summary>
  <div>- Displays cover photo, names, time, and location</div>
  <div>- Implements an animated heart effect</div>
  <div>- Plays music when clicking the play button</div>
  <img src="https://github.com/user-attachments/assets/fde29201-b9ad-4aff-805f-dd5b7384ea3b" />
</details>

<details>
  <summary>2. Invitation</summary>
  <div>- Displays invitation message</div>
  <div>- Opens contact details modal on button click</div>
  <div>- Supports direct calls and SMS from mobile devices by clicking icons</div>
  <img src="https://github.com/user-attachments/assets/6bc1789b-dc86-424f-9b10-e48f1de2d77c" />
</details>

<details>
  <summary>3. Calendar</summary>
  <div>- Highlights the wedding date with a heart icon</div>
  <div>- Displays a countdown timer showing the remaining time until the wedding</div>
  <img src="https://github.com/user-attachments/assets/705119ba-c7f2-4b23-ac8b-c2618004deb9" />
</details>

<details>
  <summary>4. Gallery</summary>
  <div>- Uses the react-image-gallery library</div>
  <div>- Supports swiping left/right to browse images</div>
  <div>- Allows clicking thumbnails to view specific photos</div>
  <div>- Provides arrow buttons for navigation</div>
  <img src="https://github.com/user-attachments/assets/aa0ae524-4db2-4ea4-bf78-f83793d57c5e" />
</details>

<details>
  <summary>5. Location / Map</summary>
  <div>- Implements Naver Map API</div>
  <div>- Integrates external links to Naver Map and Kakao Map</div>
  <img src="https://github.com/user-attachments/assets/417cb4db-d1c1-41bc-811a-2d265190a6f7" />
</details>

<details>
  <summary>6. Quiz</summary>
  <div>- Includes 3 questions with 5 multiple-choice options each</div>
  <div>- Provides correct and incorrect feedback messages</div>
  <div>- Calculates and displays the final score</div>
  <div>- Supports restarting the quiz</div>
  <img src="https://github.com/user-attachments/assets/f47a9f19-7512-4c7e-872d-01ecbc8b1fcd" />
</details>

<details>
  <summary>7. Account / Registry Info</summary>
  <div>- Displays account information modal when registry icon is clicked</div>
  <div>- Supports copying the account number to the clipboard</div>
  <div>- Provides links to send gifts via KakaoPay transfer</div>
  <img src="https://github.com/user-attachments/assets/43885095-0389-49ab-9161-083144600365" />
</details>

<details>
  <summary>8. Guestbook</summary>
  <div>- Stores data persistently using Firebase Firestore</div>
  <div>- Allows users to write messages by entering a Name, Password, and Congratulatory Message</div>
  <div>- Supports deleting entries by entering the correct password</div>
  <div>- Collapses comments beyond the first 5 with a "Show More" toggle</div>
  <div>- Sorts entries by newest first</div>
  <img src="https://github.com/user-attachments/assets/a1574921-27bc-4001-ba45-bf24569bc273" />
</details>

## Installation and Setup
### Clone Project
```bash
git clone https://github.com/YOUNGEUN100/react-wedding-card.git
```
### Navigate to Project Directory
```bash
cd react-wedding-card
```
### Install Dependencies
```bash
npm install
```
### Run Development Server
```bash
npm start
```
