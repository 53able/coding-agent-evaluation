import React, { useState } from 'react';
import { UserListCaseA } from './UserListCaseA';
import { UserListCaseB } from './UserListCaseB';
import { initializeUserStore } from '../store/userStore';

interface BlogVerificationProps {
  onBack?: () => void;
}

/**
 * UI設計プロセスにおけるコーディングエージェントの役割と設計情報伝達の最適化を検証するための比較ページ
 * 
 * ケースAとケースBの実装を並べて表示し、
 * 設計情報の提供レベルがUI実装品質に与える影響を視覚的に比較できる
 */
export const BlogVerification: React.FC<BlogVerificationProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'analysis' | 'conclusion'>('overview');

  React.useEffect(() => {
    // ストアを初期化
    initializeUserStore();
  }, []);

  const renderOverview = () => (
    <section className="overview-section">
      <div className="overview-grid">
        <div className="overview-card">
          <h3>🎯 検証の目的</h3>
          <p>
            UI設計プロセスにおけるコーディングエージェントの役割を明確化し、
            設計情報の伝達方法がUI実装品質に与える影響を実証的に検証します。
          </p>
        </div>
        
        <div className="overview-card">
          <h3>🔬 検証方法</h3>
          <p>
            同一のTinyBaseスキーマを基盤とし、設計情報の伝達密度を段階的に変化させた
            2つの実装ケースを作成し、品質指標による定量的・定性的比較分析を実施します。
          </p>
        </div>
        
        <div className="overview-card">
          <h3>📊 評価指標</h3>
          <ul>
            <li>情報アーキテクチャの構造化度</li>
            <li>ユーザビリティの直感性</li>
            <li>アクセシビリティ準拠度</li>
            <li>視覚的一貫性と魅力</li>
            <li>実装コードの保守性</li>
          </ul>
        </div>
        
        <div className="overview-card">
          <h3>🎨 技術フレームワーク</h3>
          <ul>
            <li>TinyBase（型安全状態管理）</li>
            <li>React + TypeScript（UI実装）</li>
            <li>ノーマン原則（認知工学）</li>
            <li>OOUI原則（オブジェクト指向UI）</li>
            <li>WCAG 2.1（アクセシビリティ標準）</li>
          </ul>
        </div>
      </div>
    </section>
  );

  const renderComparison = () => (
    <section className="comparison-section">
      <div className="case-comparison">
        <div className="case-section">
          <div className="case-header case-a-header">
            <h2>ケースA: 高密度設計情報伝達</h2>
            <div className="case-details">
              <h3>設計情報伝達内容:</h3>
              <ul>
                <li>✅ TinyBase型安全スキーマ定義</li>
                <li>✅ 構造化モックデータセット</li>
                <li>✅ 認知工学原則（ノーマン・OOUI）</li>
                <li>✅ 明確な実装目的・要件仕様</li>
                <li>✅ WCAG 2.1準拠ガイドライン</li>
              </ul>
            </div>
          </div>
          <UserListCaseA />
        </div>

        <div className="case-section">
          <div className="case-header case-b-header">
            <h2>ケースB: 低密度設計情報伝達</h2>
            <div className="case-details">
              <h3>設計情報伝達内容:</h3>
              <ul>
                <li>⚠️ 基本スキーマ定義のみ</li>
                <li>⚠️ 最小限モックデータ</li>
                <li>❌ 設計原則の明示なし</li>
                <li>❌ 抽象的実装指示</li>
                <li>❌ アクセシビリティ要件なし</li>
              </ul>
            </div>
          </div>
          <UserListCaseB />
        </div>
      </div>
      
      <div className="metrics-comparison">
        <h3>📊 実装品質指標の定量的比較</h3>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>指標</th>
              <th>ケースA</th>
              <th>ケースB</th>
              <th>改善率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>コード行数</td>
              <td>319行</td>
              <td>108行</td>
              <td>+195%</td>
            </tr>
            <tr>
              <td>CSS定義数</td>
              <td>25個</td>
              <td>6個</td>
              <td>+317%</td>
            </tr>
            <tr>
              <td>アクセシビリティ属性</td>
              <td>8個</td>
              <td>0個</td>
              <td>+∞%</td>
            </tr>
            <tr>
              <td>情報階層レベル</td>
              <td>4レベル</td>
              <td>2レベル</td>
              <td>+100%</td>
            </tr>
            <tr>
              <td>インタラクション要素</td>
              <td>12個</td>
              <td>3個</td>
              <td>+300%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderAnalysis = () => (
    <section className="analysis-section">
      <div className="analysis-grid">
        <div className="analysis-item">
          <h3>🏗️ 構造設計（What）</h3>
          <p>
            <strong>TinyBaseのスキーマ定義</strong>により、両ケースともデータ構造は明確に定義されています。
            これにより、エージェントはデータの型推論に悩むことなく、正確なUIコンポーネントを構築できました。
          </p>
          <div className="code-example">
            <pre>{`// 明確なスキーマ定義
const tablesSchema = {
  users: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    // ...
  }
};`}</pre>
          </div>
        </div>

        <div className="analysis-item">
          <h3>🎨 デザイン原則（How）</h3>
          <p>
            <strong>ケースA</strong>では、ノーマン原則やOOUI原則を明示することで、
            情報階層、操作性、アクセシビリティが大幅に改善されました。
          </p>
          <ul>
            <li><strong>アフォーダンス:</strong> 操作可能な要素の視覚的区別</li>
            <li><strong>シグニファイア:</strong> 操作方法の明確な示唆</li>
            <li><strong>フィードバック:</strong> 操作結果の適切な表示</li>
            <li><strong>情報階層:</strong> 主要情報と補助情報の明確な区別</li>
          </ul>
        </div>

        <div className="analysis-item">
          <h3>🎯 実装目的（Why）</h3>
          <p>
            <strong>ケースA</strong>では「ユーザー情報を素早く確認し、必要に応じて編集する」という
            明確な目的により、名前の強調、編集ボタンの配置、状態表示などが適切に実装されました。
          </p>
        </div>

        <div className="analysis-item">
          <h3>🔍 品質評価</h3>
          <table className="quality-table">
            <thead>
              <tr>
                <th>評価項目</th>
                <th>ケースA</th>
                <th>ケースB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>情報階層の明確さ</td>
                <td>🟢 優秀</td>
                <td>🔴 不十分</td>
              </tr>
              <tr>
                <td>操作性の直感性</td>
                <td>🟢 優秀</td>
                <td>🟡 普通</td>
              </tr>
              <tr>
                <td>アクセシビリティ</td>
                <td>🟢 配慮あり</td>
                <td>🔴 配慮なし</td>
              </tr>
              <tr>
                <td>視覚的魅力</td>
                <td>🟢 高い</td>
                <td>🟡 普通</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  const renderConclusion = () => (
    <section className="conclusion-section">
      <div className="conclusion-content">
        <h2>🎯 検証結果</h2>
        <p>
          この検証により、<strong>UI設計プロセスにおけるコーディングエージェントの効果的活用には、
          データ構造の定義に加えて、認知工学原則と実装目的の体系的伝達が
          UI品質の向上に決定的な影響を与える</strong>ことが実証されました。
        </p>
        
        <div className="key-insights">
          <h3>🔑 重要な洞察</h3>
          <ol>
            <li>
              <strong>TinyBaseのスキーマ定義</strong>は、エージェントにとって明確な「設計図」として機能し、
              データ構造の推測による不安定性を排除します。
            </li>
            <li>
              <strong>デザイン原則の明示</strong>により、単なるデータ表示から
              「意図を持った、構造的で意味のあるUI」へと質的に変化します。
            </li>
            <li>
              <strong>実装目的の明確化</strong>により、エージェントは適切な優先順位と
              情報の強調点を判断できるようになります。
            </li>
            <li>
              <strong>設計情報は、エージェントにとっての思考の素材</strong>であり、
              判断のフレームワークであり、対話のための共通言語です。
            </li>
          </ol>
        </div>

        <div className="recommendations">
          <h3>💡 推奨事項</h3>
          <div className="recommendation-grid">
            <div className="recommendation-item">
              <h4>📋 スキーマ設計</h4>
              <p>TinyBaseなどの型安全なスキーマ定義ツールを活用し、データ構造を明確に定義する</p>
            </div>
            <div className="recommendation-item">
              <h4>🎨 デザイン原則</h4>
              <p>ノーマン原則、OOUI原則などの確立されたデザイン原則を明示的に指定する</p>
            </div>
            <div className="recommendation-item">
              <h4>🎯 目的明確化</h4>
              <p>UIの使用目的、ユーザーの行動フロー、期待される成果を具体的に説明する</p>
            </div>
            <div className="recommendation-item">
              <h4>♿ アクセシビリティ</h4>
              <p>WCAG準拠、ARIAラベル、キーボードナビゲーションなどの要件を明記する</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="blog-verification">
      <header className="verification-header">
        <h1>UI設計プロセスにおけるコーディングエージェントの役割と設計情報伝達の最適化</h1>
        <p className="subtitle">
          TinyBase状態スキーマとデザイン原則を活用した実証的検証
        </p>
        
        <nav className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📋 概要
          </button>
          <button 
            className={`tab-button ${activeTab === 'comparison' ? 'active' : ''}`}
            onClick={() => setActiveTab('comparison')}
          >
            🔍 比較検証
          </button>
          <button 
            className={`tab-button ${activeTab === 'analysis' ? 'active' : ''}`}
            onClick={() => setActiveTab('analysis')}
          >
            📊 分析
          </button>
          <button 
            className={`tab-button ${activeTab === 'conclusion' ? 'active' : ''}`}
            onClick={() => setActiveTab('conclusion')}
          >
            🎯 結論
          </button>
        </nav>
      </header>

      <main className="verification-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'comparison' && renderComparison()}
        {activeTab === 'analysis' && renderAnalysis()}
        {activeTab === 'conclusion' && renderConclusion()}
      </main>

      <footer className="verification-footer">
        <button 
          onClick={onBack || (() => window.location.reload())}
          className="back-button"
        >
          🏠 ホームに戻る
        </button>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
          .blog-verification {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            min-height: 100vh;
          }

          .verification-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 20px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .verification-header h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
            font-weight: 700;
          }

          .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            font-weight: 300;
            margin-bottom: 32px;
          }

          .tab-navigation {
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
          }

          .tab-button {
            padding: 12px 24px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border-radius: 25px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .tab-button:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
          }

          .tab-button.active {
            background: white;
            color: #667eea;
            border-color: white;
            font-weight: 600;
          }

          .verification-content {
            background: white;
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 40px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .overview-section {
            max-width: 1000px;
            margin: 0 auto;
          }

          .overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }

          .overview-card {
            padding: 24px;
            border: 1px solid #e1e5e9;
            border-radius: 12px;
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .overview-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .overview-card h3 {
            color: #2c3e50;
            margin-bottom: 16px;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .overview-card p {
            line-height: 1.6;
            color: #495057;
            margin-bottom: 0;
          }

          .overview-card ul {
            margin: 0;
            padding-left: 20px;
            color: #495057;
          }

          .overview-card li {
            margin-bottom: 8px;
            line-height: 1.5;
          }

          .case-comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .case-section {
            border: 2px solid #e1e5e9;
            border-radius: 12px;
            overflow: hidden;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .case-header {
            padding: 24px;
            color: white;
          }

          .case-a-header {
            background: linear-gradient(135deg, #28a745, #20c997);
          }

          .case-b-header {
            background: linear-gradient(135deg, #ffc107, #fd7e14);
          }

          .case-header h2 {
            margin: 0 0 16px 0;
            font-size: 1.5rem;
          }

          .case-details h3 {
            font-size: 1rem;
            margin: 16px 0 8px 0;
            font-weight: 600;
          }

          .case-details ul {
            margin: 0;
            padding-left: 20px;
          }

          .case-details li {
            margin-bottom: 4px;
            font-size: 0.9rem;
          }

          .metrics-comparison {
            background: #f8f9fa;
            padding: 32px;
            border-radius: 12px;
            margin-top: 40px;
          }

          .metrics-comparison h3 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 24px;
            font-size: 1.5rem;
          }

          .metrics-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .metrics-table th,
          .metrics-table td {
            padding: 16px;
            text-align: center;
            border-bottom: 1px solid #dee2e6;
          }

          .metrics-table th {
            background: #2c3e50;
            color: white;
            font-weight: 600;
          }

          .metrics-table tr:last-child td {
            border-bottom: none;
          }

          .metrics-table tr:nth-child(even) {
            background: #f8f9fa;
          }

          .analysis-section {
            max-width: 1200px;
            margin: 0 auto;
          }

          .analysis-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          }

          .analysis-item {
            padding: 24px;
            border: 1px solid #e1e5e9;
            border-radius: 12px;
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          }

          .analysis-item h3 {
            color: #2c3e50;
            margin-bottom: 16px;
            font-size: 1.2rem;
          }

          .analysis-item p {
            line-height: 1.6;
            color: #495057;
            margin-bottom: 16px;
          }

          .analysis-item ul {
            margin: 0;
            padding-left: 20px;
            color: #495057;
          }

          .analysis-item li {
            margin-bottom: 8px;
            line-height: 1.5;
          }

          .code-example {
            background: #2d3748;
            color: #e2e8f0;
            padding: 16px;
            border-radius: 6px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.85rem;
            overflow-x: auto;
            margin-top: 16px;
          }

          .quality-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
            font-size: 0.9rem;
          }

          .quality-table th,
          .quality-table td {
            padding: 8px 12px;
            text-align: left;
            border-bottom: 1px solid #dee2e6;
          }

          .quality-table th {
            background: #f8f9fa;
            font-weight: 600;
            color: #495057;
          }

          .conclusion-section {
            max-width: 1000px;
            margin: 0 auto;
          }

          .conclusion-content h2 {
            color: #2c3e50;
            margin-bottom: 24px;
            font-size: 2rem;
            text-align: center;
          }

          .conclusion-content p {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #495057;
            margin-bottom: 32px;
            text-align: center;
          }

          .key-insights {
            background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
            padding: 32px;
            border-radius: 12px;
            margin-bottom: 32px;
            border-left: 4px solid #2196f3;
          }

          .key-insights h3 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 1.3rem;
          }

          .key-insights ol {
            padding-left: 20px;
          }

          .key-insights li {
            margin-bottom: 16px;
            line-height: 1.6;
            color: #495057;
          }

          .key-insights strong {
            color: #2c3e50;
          }

          .recommendations {
            background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e8 100%);
            padding: 32px;
            border-radius: 12px;
            border-left: 4px solid #4caf50;
          }

          .recommendations h3 {
            color: #2c3e50;
            margin-bottom: 24px;
            font-size: 1.3rem;
            text-align: center;
          }

          .recommendation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .recommendation-item {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e1e5e9;
          }

          .recommendation-item h4 {
            color: #2c3e50;
            margin-bottom: 12px;
            font-size: 1rem;
          }

          .recommendation-item p {
            color: #495057;
            line-height: 1.5;
            margin: 0;
            font-size: 0.9rem;
          }

          .verification-footer {
            text-align: center;
            padding: 20px;
          }

          .back-button {
            padding: 12px 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          }

          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }

          @media (max-width: 1024px) {
            .case-comparison {
              grid-template-columns: 1fr;
            }
            
            .verification-header h1 {
              font-size: 2rem;
            }
            
            .tab-navigation {
              gap: 4px;
            }
            
            .tab-button {
              padding: 8px 16px;
              font-size: 0.8rem;
            }
          }

          @media (max-width: 768px) {
            .blog-verification {
              padding: 10px;
            }
            
            .verification-content {
              padding: 20px;
            }
            
            .overview-grid {
              grid-template-columns: 1fr;
            }
            
            .analysis-grid {
              grid-template-columns: 1fr;
            }
            
            .recommendation-grid {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
    </div>
  );
}; 
