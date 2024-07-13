# Wallet Manager

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [License](#license)

## Overview
Wallet Manager is a web application designed to manage wallet transactions efficiently. Users can add, edit, delete, and view transactions, ensuring a seamless experience in managing their financial records.

## Features
- Add new transactions
- Edit existing transactions
- Delete transactions
- View a list of transactions
- User authentication and authorization

## Tech Stack
- **Frontend**: React, Next.js
- **Backend**: Nextjs server
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Authentication**: Clerk

## Installation
Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/uwambajeddy/wallet-manager.git
    cd wallet-manager
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    MONGODB_URI=<your-mongodb-uri>
    CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    ```

4. **Run the application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and go to `http://localhost:3000`.

## Usage
1. **Adding a Transaction:**
    - Navigate to the transactions page.
    - Click on the "Add a new transaction record" button.
    - Fill out the form and submit.

2. **Editing a Transaction:**
    - Click on the "Edit" button next to the transaction you want to edit.
    - Update the details and save.

3. **Deleting a Transaction:**
    - Click on the "Remove" button next to the transaction you want to delete.
  
  
## Screenshot

o. **Authentication:**
![image](https://github.com/user-attachments/assets/95dc5e30-2121-4da7-9a5b-deb4ae831219)


1. **Dashboard:**
   ![image](https://github.com/user-attachments/assets/50eec83d-12a3-40cc-a750-30ec568ad671)


2. **Create a Transaction:**
   ![image](https://github.com/user-attachments/assets/17b06618-e6b1-4f1b-a628-0418cb1535ae)


3. **Update a Transaction:**
    ![image](https://github.com/user-attachments/assets/c6080439-75b6-4eb4-9e2c-53a905181dac)




## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
