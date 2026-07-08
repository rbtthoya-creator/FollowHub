// User Types
export interface User {
  id: string
  email: string
  username: string
  displayName: string
  profilePhoto?: string
  coverImage?: string
  bio?: string
  isVerified: boolean
  onlineStatus: boolean
  lastSeen: Date
  twitter?: string
  instagram?: string
  linkedin?: string
  website?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile extends User {
  privacySettings?: PrivacySettings
}

export interface PrivacySettings {
  lastSeenVisible: boolean
  onlineStatusVisible: boolean
  profileVisible: boolean
  readReceiptsEnabled: boolean
}

// Message Types
export interface Message {
  id: string
  conversationId: string
  senderId: string
  sender?: User
  receiverId?: string
  receiver?: User
  content?: string
  mediaUrls?: string[]
  voiceNoteUrl?: string
  documentUrl?: string
  documentName?: string
  isEdited: boolean
  editedAt?: Date
  isDeleted: boolean
  reactions?: Reaction[]
  readReceipts?: ReadReceipt[]
  createdAt: Date
  updatedAt: Date
}

export interface Reaction {
  id: string
  messageId: string
  emoji: string
  userId: string
  createdAt: Date
}

export interface ReadReceipt {
  id: string
  messageId: string
  userId: string
  readAt: Date
}

// Conversation Types
export interface Conversation {
  id: string
  participantIds: string[]
  participants?: User[]
  messages?: Message[]
  lastMessageAt: Date
  createdAt: Date
  updatedAt: Date
}

// Chat Types
export interface Chat {
  id: string
  name: string
  description?: string
  icon?: string
  memberIds: string[]
  members?: User[]
  createdAt: Date
  updatedAt: Date
}

// Group Types
export interface Group {
  id: string
  name: string
  description?: string
  icon?: string
  memberIds: string[]
  members?: User[]
  adminIds: string[]
  admins?: User[]
  createdAt: Date
  updatedAt: Date
}

// Channel Types
export interface Channel {
  id: string
  name: string
  description?: string
  icon?: string
  creatorId: string
  creator?: User
  isVerified: boolean
  category?: string
  subscribers?: User[]
  createdAt: Date
  updatedAt: Date
}

export interface ChannelMessage {
  id: string
  channelId: string
  senderId: string
  content: string
  mediaUrls?: string[]
  createdAt: Date
  updatedAt: Date
}

// Status Types
export interface Status {
  id: string
  userId: string
  user?: User
  content: string
  mediaUrl?: string
  musicUrl?: string
  viewedBy?: string[]
  createdAt: Date
  expiresAt: Date
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: string
  title: string
  message: string
  actionUrl?: string
  isRead: boolean
  createdAt: Date
  expiresAt: Date
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  email: string
  displayName: string
  username: string
  password: string
  confirmPassword: string
}

export interface ProfileUpdateData {
  displayName?: string
  bio?: string
  profilePhoto?: string
  coverImage?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  website?: string
}