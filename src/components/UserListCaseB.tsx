import React from 'react';
import { userStore, userStoreHelpers } from '../store/userStore';
import type { Row } from 'tinybase';

/**
 * ケースB: 低密度設計情報伝達による実装例
 * 
 * 【ブログ検証結果】
 * - 実装充実度: 108行（ケースAの約1/3）
 * - CSS定義数: 6個（ケースAの約1/4）
 * - アクセシビリティ対応: 0個（ケースAは8個）
 * - 情報構造階層: 2レベル（ケースAは4レベル）
 * - ユーザーインタラクション要素: 3個（ケースAの約1/4）
 * 
 * 【提供された設計情報】
 * - 基本的なスキーマ定義のみ
 * - 最小限のモックデータ
 * - デザイン原則の明示なし
 * - 抽象的な実装指示
 * - アクセシビリティ要件なし
 * 
 * 【実装の特徴と問題点】
 * - 情報構造がフラット（主従や強調がない）
 * - 操作性への配慮不足（ボタンの区別が曖昧）
 * - アクセシビリティ配慮なし（ARIAラベルやセマンティックHTMLの欠如）
 * - 単なるリスト表示（意味や意図が伝わりにくい）
 * - 次に何をすべきかが分からない
 * - 使いやすさが考慮されていない
 * 
 * 【実証された課題】
 * - 情報の優先順位なし
 * - 操作導線が不明確
 * - ユーザー体験への配慮不足
 * - 視覚的魅力の欠如
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
      <h2>ケースB: 低密度設計情報伝達</h2>
      <p className="description">
        基本スキーマのみ、デザイン原則なし、抽象的指示による実装例
        <br />
        <strong>検証結果: 108行、6個のCSS定義、0個のアクセシビリティ属性</strong>
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
