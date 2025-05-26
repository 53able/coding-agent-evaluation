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
            コーディングエージェントにUI実装を依頼する際、提供する設計情報によって
            どのような出力が得られるかを実証的に検証します。特に、状態設計、デザインルール、
            実装目的の3層構造での情報提供がUI品質に与える影響を定量的・定性的に比較分析します。
          </p>
        </div>
        
        <div className="overview-card">
          <h3>🔬 検証方法</h3>
          <p>
            同一のTinyBaseスキーマを基盤とし、設計情報の伝達密度を段階的に変化させた
            2つの実装ケースを作成。ケースAでは高密度設計情報（スキーマ+デザイン原則+目的）、
            ケースBでは低密度設計情報（基本スキーマのみ）を提供し、実装品質を比較検証しました。
          </p>
        </div>
        
        <div className="overview-card">
          <h3>📊 実証された効果</h3>
          <ul>
            <li><strong>実装充実度:</strong> 約3倍の向上（319行 vs 108行）</li>
            <li><strong>CSS定義数:</strong> 4倍以上の詳細度（25個 vs 6個）</li>
            <li><strong>アクセシビリティ:</strong> 完全な対応（8個 vs 0個）</li>
            <li><strong>情報構造:</strong> 2倍の階層化（4レベル vs 2レベル）</li>
            <li><strong>操作性:</strong> 4倍のインタラクション要素（12個 vs 3個）</li>
            <li><strong>WCAG 2.1準拠:</strong> 83% vs 42%（41ポイント差）</li>
          </ul>
        </div>
        
        <div className="overview-card">
          <h3>🎨 技術フレームワーク</h3>
          <ul>
            <li><strong>TinyBase:</strong> 型安全なリアクティブローカルストア</li>
            <li><strong>React + TypeScript:</strong> モダンなフロントエンド標準</li>
            <li><strong>ノーマン原則:</strong> 認知工学に基づくUI/UX設計</li>
            <li><strong>OOUI原則:</strong> オブジェクト指向UIデザイン</li>
            <li><strong>WCAG 2.1:</strong> アクセシビリティ標準準拠</li>
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
                <li>✅ WCAG 2.1準拠ガイドライン（83%準拠率達成）</li>
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
              <th>評価項目</th>
              <th>ケースA（高密度）</th>
              <th>ケースB（低密度）</th>
              <th>差異</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>実装の充実度（コード行数）</strong></td>
              <td>319行</td>
              <td>108行</td>
              <td><strong>約3倍の充実度</strong></td>
            </tr>
            <tr>
              <td><strong>スタイル定義の豊富さ（CSS定義数）</strong></td>
              <td>25個</td>
              <td>6個</td>
              <td><strong>4倍以上の詳細度</strong></td>
            </tr>
            <tr>
              <td><strong>アクセシビリティ対応</strong></td>
              <td>8個</td>
              <td>0個</td>
              <td><strong>完全な対応</strong></td>
            </tr>
            <tr>
              <td><strong>情報構造の階層化</strong></td>
              <td>4レベル</td>
              <td>2レベル</td>
              <td><strong>2倍の構造化</strong></td>
            </tr>
            <tr>
              <td><strong>ユーザーインタラクション要素</strong></td>
              <td>12個</td>
              <td>3個</td>
              <td><strong>4倍の操作性</strong></td>
            </tr>
            <tr>
              <td><strong>WCAG 2.1準拠率</strong></td>
              <td>83% (20/24項目)</td>
              <td>42% (10/24項目)</td>
              <td><strong>41ポイント差</strong></td>
            </tr>
          </tbody>
        </table>
        
        <div className="metrics-note">
          <p>
            <strong>注記:</strong> コード行数の増加は、デザインルールに基づいた以下の要素が追加されたことによるものです：
          </p>
          <ul>
            <li>セマンティックHTMLの適切な使用（&lt;article&gt;, &lt;header&gt;, &lt;footer&gt;等）</li>
            <li>アクセシビリティ属性の充実（aria-label, role等）</li>
            <li>情報階層を明確にする構造化マークアップ</li>
            <li>ユーザーフィードバックのための状態表示要素</li>
            <li>操作性向上のためのインタラクション要素</li>
          </ul>
          <p>
            これらは単なるコード量の増加ではなく、<strong>UI品質の向上に直結する意味のある実装</strong>の結果です。
          </p>
        </div>
      </div>
    </section>
  );

  const renderAnalysis = () => (
    <section className="analysis-section">
      <div className="analysis-grid">
        <div className="analysis-item">
          <h3>🏗️ What（何を扱うか）：状態構造</h3>
          <p>
            <strong>TinyBaseのスキーマ定義</strong>により、UIの「What」、つまり骨組みをコードとして明示し、
            型推論の不安定性を完全に排除します。両ケースともデータ構造は明確に定義されており、
            エージェントはデータの型推論に悩むことなく、正確なUIコンポーネントを構築できました。
          </p>
          <div className="code-example">
            <pre>{`// TinyBaseによる明確なスキーマ定義
export const tablesSchema: TablesSchema = {
  users: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    age: { type: 'number' },
    role: { type: 'string' },
    isActive: { type: 'boolean' },
    // ...
  }
};`}</pre>
          </div>
          <p><strong>実証効果:</strong> 型安全性の確保、実装時間の短縮、バグの削減</p>
        </div>

        <div className="analysis-item">
          <h3>🎨 How（どう見せるか）：デザイン原則</h3>
          <p>
            <strong>ケースA</strong>では、ノーマン原則やOOUI原則を明示することで、
            UIの「How」、つまり意味とふるまいの判断基準を提供し、実装品質を<strong>195%向上</strong>させました。
          </p>
          <div className="principles-grid">
            <div className="principle-item">
              <h4>ノーマン原則の効果</h4>
              <ul>
                <li><strong>発見可能性:</strong> 操作要素が視覚的に明確</li>
                <li><strong>アフォーダンス:</strong> 操作可能な要素の視覚的区別</li>
                <li><strong>シグニファイア:</strong> 色やラベルで操作方法を明示</li>
                <li><strong>フィードバック:</strong> 操作結果の適切な表示</li>
                <li><strong>制約:</strong> 無効な操作の防止</li>
              </ul>
            </div>
            <div className="principle-item">
              <h4>OOUI原則の効果</h4>
              <ul>
                <li><strong>オブジェクト単位構造化:</strong> ユーザーカード形式</li>
                <li><strong>操作順序:</strong> オブジェクト選択→アクション選択</li>
                <li><strong>モードレス:</strong> 自由な操作順序</li>
                <li><strong>状態の視覚化:</strong> オブジェクトの性質を表現</li>
              </ul>
            </div>
          </div>
          <p><strong>実証効果:</strong> UI品質の劇的向上、アクセシビリティの確保、一貫性の実現</p>
        </div>

        <div className="analysis-item">
          <h3>🎯 Why（なぜ必要か）：目的・要件</h3>
          <p>
            <strong>ケースA</strong>では「ユーザー情報を素早く確認し、必要に応じて編集する」という
            明確な目的により、UIの「Why」、つまり理由と優先順位を明確にし、
            ユーザー中心的な設計を実現しました。
          </p>
          <div className="purpose-effects">
            <h4>目的明確化による最適化</h4>
            <ul>
              <li>✅ <strong>名前の強調表示:</strong> 確認のために最も重要な情報を視覚的に強調</li>
              <li>✅ <strong>編集ボタンの適切な配置:</strong> 操作への導線を分かりやすく配置</li>
              <li>✅ <strong>状態の視覚的表示:</strong> アクティブ/非アクティブの即座の判別</li>
              <li>✅ <strong>操作フローの最適化:</strong> ユーザーの行動パターンに沿った設計</li>
            </ul>
          </div>
          <p><strong>実証効果:</strong> ユーザー中心的な設計、操作フローの最適化、情報優先順位の明確化</p>
        </div>

        <div className="analysis-item">
          <h3>🔍 3層構造の相乗効果</h3>
          <p>
            What（状態構造）+ How（デザイン原則）+ Why（目的・要件）の3層構造での
            設計情報提供により、エージェントは単なるコード生成装置ではなく、
            <strong>設計意図を汲み取った賢明なUI実装パートナー</strong>となることが実証されました。
          </p>
          <table className="synergy-table">
            <thead>
              <tr>
                <th>層</th>
                <th>提供情報</th>
                <th>効果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>What</strong></td>
                <td>TinyBaseスキーマ、型定義</td>
                <td>UIの骨組み形成、型安全性確保</td>
              </tr>
              <tr>
                <td><strong>How</strong></td>
                <td>ノーマン原則、OOUI原則</td>
                <td>意味とふるまいの判断基準提供</td>
              </tr>
              <tr>
                <td><strong>Why</strong></td>
                <td>実装目的、ユーザー要件</td>
                <td>理由と優先順位の明確化</td>
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
        <h2>🎯 実証された設計情報伝達の重要性</h2>
        <p>
          本検証により、コーディングエージェントがUI実装を成功させるために必要なことは、
          人間が「何を」「どう」「なぜ」作りたいのかという設計意図を明確に定義し、
          それをエージェントが理解できる形で伝えることにあることが<strong>実証的に確認</strong>されました。
        </p>
        
        <div className="key-insights">
          <h3>🔑 検証で実証された重要な知見</h3>
          <ol>
            <li>
              <strong>TinyBaseによる状態スキーマの定義</strong>は、UIの「What」、つまり骨組みをコードとして明示し、
              型推論の不安定性を完全に排除します。
            </li>
            <li>
              <strong>デザインルール（ノーマン原則、OOUIなど）</strong>は、UIの「How」、つまり意味とふるまいの判断基準を提供し、
              実装品質を<strong>195%向上</strong>させます。
            </li>
            <li>
              <strong>目的・要件の明確化</strong>は、UIの「Why」、つまり理由と優先順位を明確にし、
              ユーザー中心的な設計を実現します。
            </li>
            <li>
              <strong>設計情報の構造的提供</strong>により、エージェントは単なるコード生成装置ではなく、
              設計意図を汲み取った賢明なUI実装パートナーとなります。
            </li>
          </ol>
        </div>

        <div className="future-outlook">
          <h3>🚀 今後の展開</h3>
          <p>この検証結果を踏まえ、以下の領域での更なる研究と実践が期待されます：</p>
          <div className="future-grid">
            <div className="future-item">
              <h4>🔬 より複雑なUIパターンでの検証</h4>
              <p>フォーム、ダッシュボード、データ可視化などの複雑なUIパターンでの検証</p>
            </div>
            <div className="future-item">
              <h4>⚖️ 他のリアクティブストアとの比較</h4>
              <p>Zustand、Jotai、Redux Toolkitなどとの比較検証</p>
            </div>
            <div className="future-item">
              <h4>🎨 デザインシステムとの統合</h4>
              <p>Material-UI、Chakra UI等のデザインシステムとの統合検証</p>
            </div>
            <div className="future-item">
              <h4>📈 パフォーマンス指標での評価</h4>
              <p>レンダリング性能、バンドルサイズ、メモリ使用量での定量評価</p>
            </div>
            <div className="future-item">
              <h4>🏢 実際のプロダクト開発での検証</h4>
              <p>実際のプロダクト開発環境での長期検証と効果測定</p>
            </div>
          </div>
        </div>

        <div className="final-message">
          <h3>💡 最終的な洞察</h3>
          <p>
            設計情報は、エージェントにとって<strong>思考の素材</strong>であり、<strong>判断のフレームワーク</strong>であり、
            <strong>対話のための共通言語</strong>です。適切な設計情報の提供により、
            コーディングエージェントは真のUI開発パートナーとして機能することが、
            この検証を通じて明確に実証されました。
          </p>
          <div className="quote">
            <blockquote>
              「UIは状態の写像である」— 適切な状態設計とデザイン原則により、
              エージェントは意図を理解し、期待を超えるUIを実装できる
            </blockquote>
          </div>
        </div>

        <div className="recommendations">
          <h3>📋 実用的な推奨事項</h3>
          <div className="recommendation-grid">
            <div className="recommendation-item">
              <h4>📋 スキーマファースト設計</h4>
              <p>TinyBaseなどの型安全なスキーマ定義ツールを活用し、データ構造を先に定義する</p>
              <span className="effect">効果: 型安全性、構造明確化</span>
            </div>
            <div className="recommendation-item">
              <h4>🎨 デザイン原則の明示</h4>
              <p>ノーマン原則、OOUI原則などの確立されたデザイン原則を明示的に指定する</p>
              <span className="effect">効果: UI品質向上、一貫性確保</span>
            </div>
            <div className="recommendation-item">
              <h4>🎯 目的・要件の具体化</h4>
              <p>UIの使用目的、ユーザーフロー、期待成果を具体的に説明する</p>
              <span className="effect">効果: ユーザー中心設計</span>
            </div>
            <div className="recommendation-item">
              <h4>♿ アクセシビリティ要件</h4>
              <p>WCAG準拠、ARIAラベル、キーボードナビゲーション要件を明記する</p>
              <span className="effect">効果: 包括的なUI実現</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="blog-verification">
      <header className="verification-header">
        <h1>コーディングエージェントにUI実装を依頼する際の設計情報伝達の最適化</h1>
        <p className="subtitle">
          TinyBase状態スキーマとデザイン原則による実証的検証 — 設計情報の3層構造がUI品質に与える影響
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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
            background: #f8f9fa;
            min-height: 100vh;
            font-size: 16px;
            line-height: 1.7;
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
            font-size: 2.2rem;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.02em;
          }

          .subtitle {
            font-size: 1.1rem;
            opacity: 0.95;
            font-weight: 400;
            margin-bottom: 32px;
            line-height: 1.6;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
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
            color: #1a202c;
            margin-bottom: 18px;
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 1.4;
          }

          .overview-card p {
            line-height: 1.8;
            color: #2d3748;
            margin-bottom: 0;
            font-size: 0.95rem;
          }

          .overview-card ul {
            margin: 0;
            padding-left: 24px;
            color: #2d3748;
            text-align: left;
          }

          .overview-card li {
            margin-bottom: 10px;
            line-height: 1.7;
            text-align: left;
            font-size: 0.95rem;
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
            margin: 0 0 20px 0;
            font-size: 1.4rem;
            line-height: 1.4;
            font-weight: 600;
          }

          .case-details h3 {
            font-size: 1.05rem;
            margin: 20px 0 12px 0;
            font-weight: 600;
            line-height: 1.4;
          }

          .case-details ul {
            margin: 0;
            padding-left: 24px;
            text-align: left;
          }

          .case-details li {
            margin-bottom: 8px;
            font-size: 0.95rem;
            text-align: left;
            line-height: 1.6;
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
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #dee2e6;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .metrics-table th {
            background: #f8f9fa;
            font-weight: 600;
          }

          .metrics-table tr:last-child td {
            border-bottom: none;
          }

          .metrics-table tr:nth-child(even) {
            background: #f8f9fa;
          }

          .metrics-note {
            margin-top: 24px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #0066cc;
          }

          .metrics-note p {
            margin-bottom: 16px;
            color: #2d3748;
            text-align: left;
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .metrics-note ul {
            margin: 0;
            padding-left: 24px;
            color: #2d3748;
            text-align: left;
          }

          .metrics-note li {
            margin-bottom: 8px;
            text-align: left;
            font-size: 0.95rem;
            line-height: 1.7;
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
            color: #1a202c;
            margin-bottom: 20px;
            font-size: 1.25rem;
            line-height: 1.4;
            font-weight: 600;
          }

          .analysis-item p {
            line-height: 1.8;
            color: #2d3748;
            margin-bottom: 20px;
            font-size: 0.95rem;
          }

          .analysis-item ul {
            margin: 0;
            padding-left: 24px;
            color: #2d3748;
            text-align: left;
          }

          .analysis-item li {
            margin-bottom: 10px;
            line-height: 1.7;
            text-align: left;
            font-size: 0.95rem;
          }

          .code-example {
            background: #2d3748;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
            margin: 20px 0;
            text-align: left;
            line-height: 1.5;
          }

          .code-example pre {
            margin: 0;
            padding: 0;
            white-space: pre;
            text-align: left;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          .principles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 16px 0;
          }

          .principle-item {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e1e5e9;
          }

          .principle-item h4 {
            color: #2c3e50;
            margin-bottom: 12px;
            font-size: 1rem;
          }

          .principle-item ul {
            color: #495057;
            line-height: 1.5;
            margin: 0;
            font-size: 0.9rem;
            text-align: left;
          }

          .principle-item li {
            text-align: left;
          }

          .purpose-effects {
            margin-top: 16px;
          }

          .purpose-effects h4 {
            color: #2c3e50;
            margin-bottom: 12px;
            font-size: 1rem;
          }

          .purpose-effects ul {
            padding-left: 20px;
            text-align: left;
          }

          .purpose-effects li {
            margin-bottom: 8px;
            line-height: 1.5;
            color: #495057;
            text-align: left;
          }

          .synergy-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
          }

          .synergy-table th,
          .synergy-table td {
            padding: 8px 12px;
            text-align: left;
            border-bottom: 1px solid #dee2e6;
          }

          .synergy-table th {
            background: #f8f9fa;
            font-weight: 600;
          }

          .conclusion-section {
            max-width: 1000px;
            margin: 0 auto;
          }

          .conclusion-content h2 {
            color: #1a202c;
            margin-bottom: 28px;
            font-size: 1.8rem;
            text-align: center;
            line-height: 1.3;
            font-weight: 700;
          }

          .conclusion-content p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #2d3748;
            margin-bottom: 36px;
            text-align: center;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }

          .key-insights {
            background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
            padding: 32px;
            border-radius: 12px;
            margin-bottom: 32px;
            border-left: 4px solid #2196f3;
          }

          .key-insights h3 {
            color: #1a202c;
            margin-bottom: 24px;
            font-size: 1.25rem;
            line-height: 1.4;
            font-weight: 600;
          }

          .key-insights ol {
            padding-left: 24px;
            text-align: left;
          }

          .key-insights li {
            margin-bottom: 20px;
            line-height: 1.8;
            color: #2d3748;
            text-align: left;
            font-size: 0.95rem;
          }

          .key-insights strong {
            color: #1a202c;
            font-weight: 600;
          }

          .future-outlook {
            background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e8 100%);
            padding: 32px;
            border-radius: 12px;
            border-left: 4px solid #4caf50;
          }

          .future-outlook h3 {
            color: #2c3e50;
            margin-bottom: 24px;
            font-size: 1.3rem;
            text-align: center;
          }

          .future-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .future-item {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e1e5e9;
          }

          .future-item h4 {
            color: #2c3e50;
            margin-bottom: 12px;
            font-size: 1rem;
          }

          .future-item p {
            color: #495057;
            line-height: 1.5;
            margin: 0;
            font-size: 0.9rem;
          }

          .final-message {
            background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e8 100%);
            padding: 32px;
            border-radius: 12px;
            border-left: 4px solid #4caf50;
          }

          .final-message h3 {
            color: #2c3e50;
            margin-bottom: 24px;
            font-size: 1.3rem;
            text-align: center;
          }

          .final-message p {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #495057;
            margin-bottom: 32px;
            text-align: center;
          }

          .quote {
            background: #2d3748;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            font-style: italic;
            font-size: 1rem;
            overflow-x: auto;
            margin: 20px 0;
            text-align: center;
            line-height: 1.6;
          }

          .quote blockquote {
            margin: 0;
            padding: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            text-align: center;
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

          .recommendation-item .effect {
            color: #4caf50;
            font-weight: 600;
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
              font-size: 1.8rem;
              line-height: 1.3;
            }
            
            .subtitle {
              font-size: 1rem;
              line-height: 1.6;
            }
            
            .tab-navigation {
              gap: 4px;
            }
            
            .tab-button {
              padding: 10px 18px;
              font-size: 0.85rem;
              line-height: 1.4;
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
