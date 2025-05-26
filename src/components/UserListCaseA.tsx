import React from 'react';
import { userStore, userStoreHelpers } from '../store/userStore';
import type { Row } from 'tinybase';

/**
 * ケースA: デザインルール、実装目的を明確に与えた場合のユーザー一覧コンポーネント
 * 
 * 適用されたデザイン原則:
 * - ノーマン原則: アフォーダンス、シグニファイア、フィードバック
 * - OOUI原則: オブジェクト単位での情報構造化
 * - アクセシビリティ配慮: ARIAラベル、セマンティックHTML
 * 
 * 実装目的:
 * - ユーザー情報を素早く確認できる
 * - 必要に応じて編集操作に導ける
 * - 情報の優先順位を視覚的に明確にする
 */
export const UserListCaseA: React.FC = () => {
  const [users, setUsers] = React.useState<Record<string, Row>>({});
  const [editingUser, setEditingUser] = React.useState<string | null>(null);

  React.useEffect(() => {
    // 初期データを取得
    setUsers(userStoreHelpers.getAllUsers());

    // ユーザーテーブルの変更をリッスン（リアクティブ）
    const listener = userStore.addTableListener('users', () => {
      setUsers(userStoreHelpers.getAllUsers());
    });

    return () => {
      userStore.delListener(listener);
    };
  }, []);

  const handleEdit = (userId: string) => {
    setEditingUser(userId);
    // 実際の編集処理はここに実装
    console.log(`編集開始: ${userId}`);
  };

  const handleToggleActive = (userId: string) => {
    const user = userStoreHelpers.getUser(userId);
    if (user) {
      userStoreHelpers.updateUser(userId, {
        isActive: !user.isActive
      });
    }
  };

  return (
    <div className="user-list-case-a">
      <h2>ユーザー一覧（ケースA: デザインルールあり）</h2>
      <p className="description">
        明確な設計原則に基づいた実装例
      </p>
      
      <div className="user-grid" role="list" aria-label="ユーザー一覧">
        {Object.entries(users).map(([userId, user]) => (
          <article 
            key={userId} 
            className={`user-card ${user.isActive ? 'active' : 'inactive'}`}
            role="listitem"
            aria-labelledby={`user-name-${userId}`}
          >
            {/* 主情報（名前）の強調 - 情報階層の明確化 */}
            <header className="user-header">
              <h3 id={`user-name-${userId}`} className="user-name">
                {user.name}
              </h3>
              <span 
                className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}
                aria-label={`状態: ${user.isActive ? 'アクティブ' : '非アクティブ'}`}
              >
                {user.isActive ? '●' : '○'}
              </span>
            </header>

            {/* 補助情報 - 視覚的階層の明確化 */}
            <div className="user-details">
              <p className="user-email">
                <span className="label">Email:</span>
                <a href={`mailto:${user.email}`} className="email-link">
                  {user.email}
                </a>
              </p>
              <p className="user-role">
                <span className="label">Role:</span>
                <span className={`role-badge ${user.role}`}>
                  {user.role}
                </span>
              </p>
              <p className="user-location">
                <span className="label">Location:</span>
                {user.location}
              </p>
            </div>

            {/* プロフィール情報 */}
            <div className="user-bio">
              <p>{user.bio}</p>
            </div>

            {/* 操作ボタン - アフォーダンスとシグニファイアの明確化 */}
            <footer className="user-actions">
              <button 
                className="edit-button primary-action"
                aria-label={`${user.name}さんの情報を編集`}
                onClick={() => handleEdit(userId)}
                disabled={editingUser === userId}
              >
                {editingUser === userId ? '編集中...' : '編集'}
              </button>
              
              <button 
                className={`toggle-button ${user.isActive ? 'deactivate' : 'activate'}`}
                aria-label={`${user.name}さんを${user.isActive ? '非アクティブ' : 'アクティブ'}にする`}
                onClick={() => handleToggleActive(userId)}
              >
                {user.isActive ? '無効化' : '有効化'}
              </button>
            </footer>
          </article>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .user-list-case-a {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .user-list-case-a .description {
            color: #666;
            margin-bottom: 24px;
            font-style: italic;
          }

          .user-list-case-a .user-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 20px;
          }

          .user-list-case-a .user-card {
            border: 2px solid #e1e5e9;
            border-radius: 12px;
            padding: 20px;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
            position: relative;
          }

          .user-list-case-a .user-card:hover {
            border-color: #0066cc;
            box-shadow: 0 4px 16px rgba(0, 102, 204, 0.15);
            transform: translateY(-2px);
          }

          .user-list-case-a .user-card.active {
            border-left: 4px solid #28a745;
          }

          .user-list-case-a .user-card.inactive {
            border-left: 4px solid #dc3545;
            opacity: 0.8;
          }

          .user-list-case-a .user-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            border-bottom: 1px solid #eee;
            padding-bottom: 12px;
          }

          .user-list-case-a .user-name {
            font-size: 1.25rem;
            font-weight: 700;
            color: #2c3e50;
            margin: 0;
          }

          .user-list-case-a .status-badge {
            font-size: 1.2rem;
            font-weight: bold;
          }

          .user-list-case-a .status-badge.active {
            color: #28a745;
          }

          .user-list-case-a .status-badge.inactive {
            color: #dc3545;
          }

          .user-list-case-a .user-details {
            margin-bottom: 16px;
          }

          .user-list-case-a .user-details p {
            margin: 8px 0;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .user-list-case-a .label {
            font-weight: 600;
            color: #495057;
            min-width: 60px;
          }

          .user-list-case-a .email-link {
            color: #0066cc;
            text-decoration: none;
          }

          .user-list-case-a .email-link:hover {
            text-decoration: underline;
          }

          .user-list-case-a .role-badge {
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .user-list-case-a .role-badge.admin {
            background: #ffeaa7;
            color: #d63031;
          }

          .user-list-case-a .role-badge.user {
            background: #ddd6fe;
            color: #7c3aed;
          }

          .user-list-case-a .user-bio {
            margin-bottom: 16px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 6px;
            font-style: italic;
            color: #6c757d;
          }

          .user-list-case-a .user-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
          }

          .user-list-case-a .edit-button, .user-list-case-a .toggle-button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.9rem;
          }

          .user-list-case-a .edit-button {
            background: #0066cc;
            color: white;
          }

          .user-list-case-a .edit-button:hover:not(:disabled) {
            background: #0052a3;
            transform: translateY(-1px);
          }

          .user-list-case-a .edit-button:disabled {
            background: #6c757d;
            cursor: not-allowed;
          }

          .user-list-case-a .toggle-button.activate {
            background: #28a745;
            color: white;
          }

          .user-list-case-a .toggle-button.deactivate {
            background: #dc3545;
            color: white;
          }

          .user-list-case-a .toggle-button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
          }

          @media (prefers-reduced-motion: reduce) {
            .user-list-case-a .user-card, .user-list-case-a .edit-button, .user-list-case-a .toggle-button {
              transition: none;
            }
            
            .user-list-case-a .user-card:hover, .user-list-case-a .edit-button:hover, .user-list-case-a .toggle-button:hover {
              transform: none;
            }
          }

          .user-list-case-a .edit-button:focus, .user-list-case-a .toggle-button:focus {
            outline: 2px solid #0066cc;
            outline-offset: 2px;
          }
        `
      }} />
    </div>
  );
}; 
