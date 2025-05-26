import { useState } from 'react'
import './App.css'
import { BlogVerification } from './components/BlogVerification'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'verification'>('home')

  if (currentView === 'verification') {
    return <BlogVerification onBack={() => setCurrentView('home')} />
  }

  return (
    <>
      <header>
        <h1>UI設計プロセスにおけるコーディングエージェントの役割と設計情報伝達の最適化</h1>
        <p className="subtitle">TinyBase状態スキーマとデザイン原則を活用した実証的検証</p>
      </header>
      
      <main className="main-content">
        <section className="project-overview">
          <h2>🔬 検証プロジェクト概要</h2>
          <p>
            このプロジェクトでは、TinyBaseを使ったユーザー情報管理ストアを実装し、
            コーディングエージェントへの設計情報提供レベルがUI品質に与える影響を実証的に検証します。
          </p>
          
          <div className="project-highlights">
            <div className="highlight-card">
              <h3>📊 検証内容</h3>
              <p>コーディングエージェントへの設計情報提供レベルがUI品質に与える影響を比較分析</p>
            </div>
            <div className="highlight-card">
              <h3>🎯 実証方法</h3>
              <p>同一スキーマで設計情報の提供レベルを変えた2つのケースを実装・比較</p>
            </div>
            <div className="highlight-card">
              <h3>📈 期待成果</h3>
              <p>設計情報の構造的提供がUI実装品質向上に与える効果の定量的実証</p>
            </div>
          </div>
          
          <div className="action-section">
            <button 
              onClick={() => setCurrentView('verification')}
              className="primary-button"
            >
              📊 検証結果を確認する
            </button>
          </div>
        </section>

        <section className="implementation-status">
          <h3>✅ 実装完了項目</h3>
          <div className="status-grid">
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>TinyBaseスキーマ定義とモックデータ</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>ケースA: 高密度設計情報伝達のUI実装</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>ケースB: 低密度設計情報伝達のUI実装</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>両ケースの比較検証ページ</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>リアクティブなデータ更新機能</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>型安全なヘルパー関数</span>
            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
          header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
          }

          header h1 {
            margin: 0 0 16px 0;
            font-size: 2.2rem;
            font-weight: 600;
            line-height: 1.3;
          }

          .subtitle {
            margin: 0;
            font-size: 1.1rem;
            opacity: 0.9;
            font-weight: 300;
          }

          .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .project-overview {
            margin-bottom: 48px;
          }

          .project-overview h2 {
            color: #2c3e50;
            margin-bottom: 16px;
            font-size: 1.8rem;
          }

          .project-overview > p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #495057;
            margin-bottom: 32px;
          }

          .project-highlights {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 32px 0;
          }

          .highlight-card {
            padding: 24px;
            border: 1px solid #e1e5e9;
            border-radius: 12px;
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .highlight-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .highlight-card h3 {
            margin: 0 0 12px 0;
            color: #2c3e50;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .highlight-card p {
            margin: 0;
            color: #495057;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .action-section {
            text-align: center;
            margin: 40px 0;
          }

          .primary-button {
            padding: 16px 32px;
            font-size: 18px;
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.3);
          }

          .primary-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);
          }

          .implementation-status {
            text-align: left;
            padding: 32px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            border-left: 6px solid #28a745;
          }

          .implementation-status h3 {
            margin: 0 0 24px 0;
            color: #2c3e50;
            font-size: 1.4rem;
            font-weight: 600;
          }

          .status-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 16px;
          }

          .status-item {
            display: flex;
            align-items: center;
            padding: 16px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e1e5e9;
            transition: transform 0.2s ease;
          }

          .status-item:hover {
            transform: translateX(4px);
          }

          .status-item.completed {
            border-left: 4px solid #28a745;
          }

          .status-icon {
            margin-right: 16px;
            font-size: 1.2rem;
          }

          .status-item span:last-child {
            color: #495057;
            font-size: 0.95rem;
            line-height: 1.4;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            header h1 {
              font-size: 1.8rem;
            }

            .subtitle {
              font-size: 1rem;
            }

            .project-highlights {
              grid-template-columns: 1fr;
            }
            
            .status-grid {
              grid-template-columns: 1fr;
            }
            
            .primary-button {
              width: 100%;
              padding: 14px 24px;
              font-size: 16px;
            }

            .implementation-status {
              padding: 24px 20px;
            }
          }
        `
      }} />
    </>
  )
}

export default App
