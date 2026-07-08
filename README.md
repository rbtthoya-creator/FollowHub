# Bensphere - Modern Messaging App

## Overview

Bensphere is a premium, modern messaging application with a clean, mobile-first design. It combines the best features of contemporary messaging apps with unique innovations and a stunning user interface.

## Features

### Core Messaging
- **Direct Messages** - Seamless one-to-one conversations
- **Message Reactions** - Express yourself with emoji reactions
- **Read Receipts** - Know when your messages are read
- **Typing Indicator** - See when others are typing
- **Online/Offline Status** - Real-time presence awareness
- **Voice Notes** - Send audio messages
- **Media Sharing** - Images, videos, and documents
- **Message Search** - Find messages quickly
- **Message Editing & Deletion** - Modify sent messages

### Unique Identity System
- **Unique Usernames** - Create @username during signup (e.g., @john254)
- **Searchable Usernames** - Find users by their unique username
- **Verification Badges** - Verified users display a badge
- **Rich Profiles** - Bio, profile photo, cover image, and social links

### Advanced Features
- **Status/Stories** - Share photos, videos, music, and text (24-hour expiry)
- **Channels** - For creators and businesses to broadcast content
- **Communities** - Group chats with admin tools and settings
- **Group Chats** - Admin tools for member management
- **Emoji Picker** - Easy emoji selection
- **Stickers** - Expressive sticker support

### Privacy & Settings
- **Privacy Controls** - Last seen, online status, profile visibility
- **Block Users** - Prevent unwanted contacts
- **Read Receipts Control** - Choose if others see read receipts
- **Dark Mode** - Comfortable viewing in low light
- **Light Mode** - Clean daytime experience

### Performance
- **Mobile-First Design** - Optimized for mobile devices
- **Fast & Responsive** - Smooth animations and transitions
- **Low Data Usage** - Optimized for bandwidth-conscious users
- **Offline Support** - Basic functionality when offline

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Zustand
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **UI Components**: React Icons, Emoji Picker
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion

## Color Scheme

- **Primary**: Premium Blue (#0284c7)
- **Secondary**: Clean Gray (#1e293b)
- **Background**: White (#ffffff) / Dark (#0f172a)
- **Accents**: Sky Blue (#0ea5e9)

## Getting Started

### Prerequisites
- Node.js 16+
- PostgreSQL
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rbtthoya-creator/bensphere.git
cd bensphere

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Update .env.local with your database URL and NextAuth secret

# Set up database
npm run db:push

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

## Project Structure

```
bensphere/
├── app/                    # Next.js app directory
├── components/             # Reusable UI components
├── lib/                    # Utility functions and stores
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── styles/                 # Global styles
├── types/                  # TypeScript type definitions
└── middleware.ts           # Authentication middleware
```

## Database Schema

The application includes the following models:
- **User** - User accounts with profiles and settings
- **Conversation** - Direct message conversations
- **Message** - Individual messages with reactions
- **Status** - User status/stories
- **Channel** - Broadcast channels for creators
- **Group** - Group chats with admin controls
- **PrivacySettings** - User privacy configurations
- **Notification** - User notifications

## API Routes

Key API endpoints:
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users/[username]` - Get user profile
- `POST /api/messages` - Send message
- `GET /api/conversations` - List conversations
- `POST /api/status` - Create status
- `GET /api/channels` - List channels

## Authentication

Bensphere uses NextAuth.js with:
- Credentials provider for email/password login
- JWT-based sessions
- Secure password hashing with bcryptjs
- 30-day session duration

## State Management

The app uses Zustand for state management:
- **authStore** - Authentication state
- **chatStore** - Chat and message state
- **uiStore** - UI preferences and modals

## Styling

- Tailwind CSS for utility-first styling
- Custom animations and transitions
- Responsive design with mobile-first approach
- Dark mode support with class-based theme switching

## Performance Optimizations

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Efficient database queries
- WebSocket for real-time updates
- Minimized bundle size

## Contributing

Contributions are welcome! Please:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.

---

**Made with ❤️ by Bensphere Team**