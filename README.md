# Build with Brilliance - Creative Portfolio Template

A modern, AI-powered Next.js template for creative professionals to showcase their work, connect with clients, and automate their workflow.

## 🧠 Vision

Build a modular, AI-powered personal site where **creatives and visionaries** can showcase their story, connect through rich media, and spark new collaborations through automation and innovation.

## 🎭 Archetype: The Creator

This template is designed for the **Creator** archetype:
- Values: originality, imagination, self-expression
- Voice: visionary, inspiring, artistic
- Visuals: vibrant colors, abstract or design-forward elements

## 🛠 Core Features

- 🎨 **Creator Archetype Engine**: Shapes site tone, visuals, chatbot, and social content
- 🧠 **AI Media Generator**: Generates creative bios, visuals, taglines, and more
- 🤖 **Zapier Chatbot**: Welcomes users and guides them to action in a casual, expressive tone
- 📅 **Calendly Scheduler**: Books creative sessions or intro calls
- 📢 **Social Content Engine**: Templates for inspirational or behind-the-scenes social posts
- 🌐 **Responsive Site**: Deployed and customized with your creative identity in mind

## ⚙️ Tech Stack

- **Frontend**: Next.js + TailwindCSS
- **AI**: OpenAI, DALL·E, Suno
- **Automation**: Zapier
- **Scheduling**: Calendly
- **Hosting**: Vercel / DigitalOcean

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/build-with-brilliance.git
cd build-with-brilliance
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Customization

### Personalization

1. Update the site content in `src/app/page.tsx` with your own information
2. Replace placeholder images in the `public` folder with your own
3. Customize colors and styling in `tailwind.config.js`
4. Update the Calendly link in `src/components/CalendlyEmbed.tsx`

### AI Integration

1. For OpenAI integration, add your API key to the environment variables
2. For Zapier chatbot, connect your Zapier account and update the webhook URLs

## 📦 Project Structure

```
build-with-brilliance/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # Next.js app router
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/      # Reusable components
│       ├── Chatbot.tsx  # Interactive chatbot
│       ├── CalendlyEmbed.tsx # Calendly integration
│       └── SocialContent.tsx # Social media content
├── .documentation/      # Project documentation
├── package.json         # Dependencies
├── tailwind.config.js   # TailwindCSS configuration
└── README.md            # Project documentation
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- OpenAI for the AI capabilities
- Calendly for the scheduling integration
