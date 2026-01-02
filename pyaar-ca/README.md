# Pyaar.ca - Love Language Compatibility Test 💕

A modern, interactive love language compatibility quiz built with Next.js and deployed on Cloudflare. Discover how you and your partner express love through the 5 love languages.

## 🌟 Features

- **Interactive Quiz**: Take a comprehensive love language assessment
- **Compatibility Testing**: Compare love languages with your partner
- **Instant Results**: Get immediate insights into your relationship dynamics
- **Mobile Responsive**: Beautiful design that works on all devices
- **Fast & Secure**: Powered by Cloudflare's global network
- **Privacy-Focused**: No personal data storage required

## 🚀 Live Demo

Visit [https://pyaar.ca](https://pyaar.ca) to try the quiz!

## 📋 The 5 Love Languages

1. **Words of Affirmation** - Verbal compliments and encouragement
2. **Quality Time** - Undivided attention and meaningful moments
3. **Receiving Gifts** - Thoughtful presents and tokens of love
4. **Acts of Service** - Helpful actions that make life easier
5. **Physical Touch** - Hugs, kisses, and physical affection

Based on Dr. Gary Chapman's research on how people express and receive love.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages with [OpenNext](https://opennext.js.org/cloudflare)
- **Monetization**: Google AdSense

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pyaar-ca.git
cd pyaar-ca
```

2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Development Commands
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
  - `npm start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues
- `npm run format`: Format code using Prettier
- `npm run test`: Run unit tests with Jest
- `npm run test:watch`: Run tests in watch mode

## 📁 Project Structure
```
pyaar-ca/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── quiz/         # Quiz page
│   │   ├── results/      # Results page
│   │   └── privacy-policy/ # Privacy policy
│   ├── components/       # React components
│   └── lib/              # Utility functions
├── public/               # Static assets
│   ├── robots.txt       # SEO configuration
│   └── ads.txt          # Ad network verification
└── README.md
```

##  🔐 Privacy & Data
We take privacy seriously:
No personal information is stored
Quiz results are client-side only
GDPR compliant with cookie consent
See our [Privacy Policy](https://pyaar.ca/privacy-policy) for details

## 🎨 Customization Guide

### Modifying Quiz Questions
To modify the quiz questions, edit the `questions.ts` file located in the `src/lib/` directory. This file contains all the quiz questions and their corresponding answer options. Follow these steps:

1. Open `src/lib/questions.ts`.
2. Locate the question you want to change.
3. Update the question text or answer options as needed.
4. Save your changes.

### Adjusting Scoring Logic
The scoring logic is implemented in the `calculateResults.ts` file in the `src/lib/` directory. To adjust how scores are calculated:
1. Open `src/lib/calculateResults.ts`.
2. Review the scoring functions and logic.
3. Modify the scoring criteria as needed.
4. Save your changes.

## 🚀 Deployment
To deploy the application to Cloudflare Pages:
1. Push your code to a GitHub repository.
2. Log in to your Cloudflare account and navigate to Pages.
3. Create a new project and connect your GitHub repository.
4. Set the build command to `npm run build` and the build output directory to `.open-next`.
5. Click "Save and Deploy".

Or use the OpenNext CLI:
```bash
npm run deploy
```
## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License.

## 🙏 Acknowledgments
- Dr. Gary Chapman for the 5 Love Languages concept
- Next.js and Tailwind CSS communities
- Cloudflare for their hosting services
- Google AdSense for advertising solutions

## 📞 Contact
Questions or feedback? Visit [https://pyaar.ca](https://pyaar.ca) or open an issue on GitHub.

Made with ❤️ for love and relationships!

```aiignore
This README includes:
- Project overview
- Getting started guide
- Development commands
- Project structure
- Privacy and data handling
- Customization guide
- Deployment instructions
- Contributing guidelines
- License information
- Acknowledgments
- Contact information
```