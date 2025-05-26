import { createStore } from 'tinybase';
import type { TablesSchema, ValuesSchema } from 'tinybase';

// テーブルスキーマの定義
export const tablesSchema: TablesSchema = {
  users: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    age: { type: 'number' },
    avatar: { type: 'string' },
    role: { type: 'string' },
    isActive: { type: 'boolean' },
    createdAt: { type: 'string' },
    lastLoginAt: { type: 'string' },
    bio: { type: 'string' },
    location: { type: 'string' },
    website: { type: 'string' },
  },
  userPreferences: {
    userId: { type: 'string' },
    theme: { type: 'string' },
    language: { type: 'string' },
    notifications: { type: 'boolean' },
    emailUpdates: { type: 'boolean' },
  }
};

// バリュースキーマの定義
export const valuesSchema: ValuesSchema = {
  currentUserId: { type: 'string' },
  isLoggedIn: { type: 'boolean', default: false },
  appVersion: { type: 'string', default: '1.0.0' },
};

// ストアの作成
export const userStore = createStore();

// スキーマをストアに適用
userStore.setTablesSchema(tablesSchema);
userStore.setValuesSchema(valuesSchema);

// モックデータの定義
export const mockUserData = {
  users: {
    'user-1': {
      id: 'user-1',
      name: '田中太郎',
      email: 'tanaka@example.com',
      age: 28,
      avatar: 'https://via.placeholder.com/150/0000FF/808080?text=T',
      role: 'admin',
      isActive: true,
      createdAt: '2023-01-15T09:00:00Z',
      lastLoginAt: '2024-01-20T14:30:00Z',
      bio: 'フロントエンド開発者として5年の経験があります。',
      location: '東京都',
      website: 'https://tanaka-dev.com'
    },
    'user-2': {
      id: 'user-2',
      name: '佐藤花子',
      email: 'sato@example.com',
      age: 32,
      avatar: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=S',
      role: 'user',
      isActive: true,
      createdAt: '2023-03-22T10:15:00Z',
      lastLoginAt: '2024-01-19T16:45:00Z',
      bio: 'デザイナーとしてUI/UXに情熱を注いでいます。',
      location: '大阪府',
      website: 'https://sato-design.jp'
    },
    'user-3': {
      id: 'user-3',
      name: '鈴木一郎',
      email: 'suzuki@example.com',
      age: 25,
      avatar: 'https://via.placeholder.com/150/00FF00/000000?text=S',
      role: 'user',
      isActive: false,
      createdAt: '2023-06-10T08:30:00Z',
      lastLoginAt: '2023-12-15T11:20:00Z',
      bio: 'バックエンド開発に興味があります。',
      location: '福岡県',
      website: ''
    }
  },
  userPreferences: {
    'pref-1': {
      userId: 'user-1',
      theme: 'dark',
      language: 'ja',
      notifications: true,
      emailUpdates: true,
    },
    'pref-2': {
      userId: 'user-2',
      theme: 'light',
      language: 'ja',
      notifications: true,
      emailUpdates: false,
    },
    'pref-3': {
      userId: 'user-3',
      theme: 'light',
      language: 'en',
      notifications: false,
      emailUpdates: false,
    }
  }
};

// モックバリューデータの定義
export const mockValueData = {
  currentUserId: 'user-1',
  isLoggedIn: true,
  appVersion: '1.0.0',
};

// モックデータをストアに設定
export const initializeUserStore = () => {
  userStore.setTables(mockUserData);
  userStore.setValues(mockValueData);
};

// ユーザーデータの型定義
export interface UserData {
  id: string;
  name: string;
  email: string;
  age: number;
  avatar: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string;
  bio: string;
  location: string;
  website: string;
}

export interface UserPreferenceData {
  userId: string;
  theme: string;
  language: string;
  notifications: boolean;
  emailUpdates: boolean;
}

// ユーザー関連のヘルパー関数
export const userStoreHelpers = {
  // 全ユーザーを取得
  getAllUsers: () => userStore.getTable('users'),
  
  // 特定のユーザーを取得
  getUser: (userId: string) => userStore.getRow('users', userId),
  
  // アクティブなユーザーのみを取得
  getActiveUsers: () => {
    const users = userStore.getTable('users');
    return Object.fromEntries(
      Object.entries(users).filter(([, user]) => user.isActive)
    );
  },
  
  // ユーザーの設定を取得
  getUserPreferences: (userId: string) => {
    const preferences = userStore.getTable('userPreferences');
    return Object.values(preferences).find(pref => pref.userId === userId);
  },
  
  // 新しいユーザーを追加
  addUser: (userData: Partial<UserData>) => {
    const userId = `user-${Date.now()}`;
    userStore.setRow('users', userId, {
      ...userData,
      id: userId,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    });
    return userId;
  },
  
  // ユーザー情報を更新
  updateUser: (userId: string, updates: Partial<UserData>) => {
    userStore.setPartialRow('users', userId, updates);
  },
  
  // ユーザーを削除
  deleteUser: (userId: string) => {
    userStore.delRow('users', userId);
    // 関連する設定も削除
    const preferences = userStore.getTable('userPreferences');
    Object.entries(preferences).forEach(([prefId, pref]) => {
      if (pref.userId === userId) {
        userStore.delRow('userPreferences', prefId);
      }
    });
  },

  // 現在のユーザーIDを取得
  getCurrentUserId: () => userStore.getValue('currentUserId'),
  
  // ログイン状態を取得
  getIsLoggedIn: () => userStore.getValue('isLoggedIn'),
  
  // ログイン状態を設定
  setIsLoggedIn: (isLoggedIn: boolean) => {
    userStore.setValue('isLoggedIn', isLoggedIn);
  },
  
  // 現在のユーザーIDを設定
  setCurrentUserId: (userId: string) => {
    userStore.setValue('currentUserId', userId);
  }
}; 
