# App - Customer Feedback System

A simple and beautiful customer feedback system that allows customers to submit feedback using emojis and provides a dashboard for viewing and managing feedback entries.

## 🎯 Project Overview

- **Purpose:** Simple feedback system for customers
- **Features:**
  - Customer feedback form with emoji selection (😃😐😞)
  - Comment and name/company input fields
  - Admin dashboard showing all feedback grouped by emoji
  - Contact/resolution tracking for each feedback entry
- **Requirements:** Simple, beautiful UI for both feedback form and dashboard

## 🛠 Tech Stack Decisions

### Frontend
- **Framework:** React 18 with TypeScript
  - *Why:* Type safety, better developer experience, scalability
- **Styling:** Tailwind CSS
  - *Why:* Rapid UI development, utility-first approach, beautiful default components
- **Form Handling:** React Hook Form
  - *Why:* Simple, performant, minimal re-renders
- **HTTP Client:** Axios
  - *Why:* Simple API, good error handling, widely used

### Backend/Database
- **Database:** Google Sheets via SheetDB
  - *Why:* No backend code needed, easy to manage, free tier available
  - **API Endpoint:** `https://sheetdb.io/api/v1/17t5w5az6pz4b`

### Development Tools
- **Linting:** ESLint (included with Create React App)
- **Code Formatting:** Prettier (included with Create React App)
- **Package Manager:** npm
- **Version Control:** Git with GitHub

### Deployment
- **Platform:** Firebase Hosting
  - *Why:* Free tier, fast CDN, easy deployment, supports custom domains

## 📁 Project Structure

```
App/
├── frontend/                    # React application
│   ├── public/                 # Static assets
│   │   ├── src/
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── pages/             # Page components
│   │   │   │   ├── FeedbackForm.tsx
│   │   │   │   └── Dashboard.tsx
│   │   │   ├── hooks/             # Custom React hooks
│   │   │   ├── utils/             # Utility functions
│   │   │   ├── App.tsx            # Main app component
│   │   │   └── main.tsx           # App entry point
│   │   ├── tests/                 # Test files
│   │   ├── tailwind.config.js     # Tailwind configuration
│   │   ├── package.json           # Dependencies and scripts
│   │   └── tsconfig.json          # TypeScript configuration
├── README.md                  # Project documentation
└── .gitignore                # Git ignore rules
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/keyb10/app.git
   cd app
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📊 Google Sheets Setup

### Required Columns
Your Google Sheet should have the following columns:
- `emoji` - The selected emoji value (happy, neutral, sad)
- `comment` - Customer's feedback comment
- `name` - Customer's name or company
- `contacted` - Whether customer has been contacted (yes/no)
- `resolved` - Whether issue has been resolved (yes/no)
- `timestamp` - When feedback was submitted

### SheetDB Integration
- **API Endpoint:** `https://sheetdb.io/api/v1/17t5w5az6pz4b`
- **Permissions:** Ensure your Google Sheet is accessible via SheetDB
- **Rate Limits:** Check SheetDB's free tier limits

## 🌐 Deployment to Firebase Hosting

### Prerequisites
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase account

### Deployment Steps

1. **Login to Firebase**
   ```bash
   firebase login
   ```

2. **Initialize Firebase in your project**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project or create a new one
   - Set public directory to: `frontend/build`
   - Configure as single-page app: `Yes`
   - Don't overwrite index.html: `No`

3. **Build your React app**
   ```bash
   cd frontend
   npm run build
   ```

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

5. **Access your app**
   Your app will be available at: `https://your-project-id.web.app`

### Custom Domain (Optional)
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## 🔧 Available Scripts

In the `frontend` directory:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📝 API Endpoints

### SheetDB API
- **Base URL:** `https://sheetdb.io/api/v1/17t5w5az6pz4b`
- **GET** `/` - Fetch all feedback entries
- **POST** `/` - Submit new feedback entry

### Example Feedback Entry
```json
{
  "emoji": "happy",
  "comment": "Great service!",
  "name": "John Doe",
  "contacted": "",
  "resolved": "",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🎨 UI Components

### Feedback Form
- Emoji selection (😃😐😞)
- Required comment field
- Required name/company field
- Form validation with error messages
- Success confirmation

### Dashboard
- Feedback grouped by emoji
- Contact/resolution checkboxes (UI only)
- Timestamp display
- Responsive grid layout

## 🔮 Future Enhancements

- [ ] Add React Router for navigation between pages
- [ ] Implement authentication for dashboard access
- [ ] Add filtering and search functionality
- [ ] Export feedback data to CSV/Excel
- [ ] Email notifications for new feedback
- [ ] Analytics and reporting features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check the [GitHub Issues](https://github.com/keyb10/app/issues)
2. Create a new issue with detailed information
3. Contact the development team

---

**Last Updated:** January 2024
**Version:** 1.0.0 