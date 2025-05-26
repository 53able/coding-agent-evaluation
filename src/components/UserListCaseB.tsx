import React from 'react';
import { userStore, userStoreHelpers } from '../store/userStore';
import type { Row } from 'tinybase';

/**
 * ケースB: デザインルールや実装目的を十分に与えなかった場合のユーザー一覧コンポーネント
 * 
 * 特徴:
 * - 最低限のデータ表示のみ
 * - 情報構造がフラット
 * - 操作性やアクセシビリティへの配慮が不足
 * - 単なるリスト表示で意味や意図が伝わりにくい
 */
export const UserListCaseB: React.FC = () => {
  const [users, setUsers] = React.useState<Record<string, Row>>({});

  React.useEffect(() => {
    // 初期データを取得
    setUsers(userStoreHelpers.getAllUsers());

    // ユーザーテーブルの変更をリッスン
    const listener = userStore.addTableListener('users', () => {
      setUsers(userStoreHelpers.getAllUsers());
    });

    return () => {
      userStore.delListener(listener);
    };
  }, []);

  return (
    <div className="user-list-case-b">
      <h2>ユーザー一覧（ケースB: デザインルールなし）</h2>
      <p className="description">
        最低限のデータ表示のみの実装例
      </p>
      
      <div className="user-list">
        {Object.entries(users).map(([userId, user]) => (
          <div key={userId} className="user-item">
            {/* 情報が平坦に並ぶ */}
            <div>
              {user.name} ({user.email})
            </div>
            <div>
              Age: {user.age}, Role: {user.role}
            </div>
            <div>
              Location: {user.location}
            </div>
            <div>
              Bio: {user.bio}
            </div>
            <div>
              Status: {user.isActive ? 'Active' : 'Inactive'}
            </div>
            {/* 操作要素がないか、区別が曖昧 */}
            <div>
              <button onClick={() => console.log('Edit', userId)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .user-list-case-b {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .user-list-case-b .description {
            color: #666;
            margin-bottom: 24px;
            font-style: italic;
          }

          .user-list-case-b .user-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .user-list-case-b .user-item {
            border: 1px solid #ccc;
            padding: 16px;
            background: #f9f9f9;
          }

          .user-list-case-b .user-item div {
            margin-bottom: 8px;
          }

          .user-list-case-b button {
            padding: 4px 8px;
            border: 1px solid #999;
            background: #eee;
            cursor: pointer;
          }
        `
      }} />
    </div>
  );
}; 
