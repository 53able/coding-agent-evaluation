# UI設計プロセスにおけるコーディングエージェントの役割と設計情報伝達の最適化

このプロジェクトは、コーディングエージェントにUI実装を依頼する際の設計情報伝達が、実装品質に与える影響を実証的に検証するためのものです。

## 🎯 プロジェクト概要

TinyBaseを用いたリアクティブローカルストアと、React + TypeScriptによる現代的なフロントエンド開発環境で、設計情報の提供密度がUI実装品質に与える影響を定量的・定性的に比較検証します。

## 📊 検証結果

### 実装品質比較

| 評価項目 | ケースA（高密度設計情報） | ケースB（低密度設計情報） | 差異 |
|----------|------------------------|------------------------|------|
| **実装充実度** | 319行 | 108行 | **約3倍** |
| **CSS定義数** | 25個 | 6個 | **4倍以上** |
| **アクセシビリティ属性** | 8個 | 0個 | **完全対応** |
| **WCAG 2.1準拠率** | **83%** | **42%** | **41ポイント差** |

### WCAG 2.1準拠検証

詳細な検証結果は [`dosc/WCAG_2.1_VERIFICATION.md`](./dosc/WCAG_2.1_VERIFICATION.md) をご覧ください。

- **ケースA**: 83%準拠率（20/24項目）
- **ケースB**: 42%準拠率（10/24項目）

## 🚀 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── UserListCaseA.tsx    # 高密度設計情報による実装
│   ├── UserListCaseB.tsx    # 低密度設計情報による実装
│   └── BlogVerification.tsx # 比較検証ページ
├── store/
│   └── userStore.ts         # TinyBaseストア定義
└── App.tsx

dosc/
├── blog.md                  # 検証結果の詳細記事
└── WCAG_2.1_VERIFICATION.md # WCAG 2.1準拠検証結果
```

## 🔬 検証内容

### ケースA: 高密度設計情報伝達
- TinyBase型安全スキーマ定義
- 構造化モックデータセット
- ノーマン原則・OOUI原則
- 明確な実装目的・要件
- WCAG 2.1準拠ガイドライン

### ケースB: 低密度設計情報伝達
- 基本スキーマ定義のみ
- 最小限モックデータ
- 設計原則なし
- 抽象的実装指示

## 📖 詳細資料

- [検証結果詳細記事](./dosc/blog.md)
- [WCAG 2.1準拠検証結果](./dosc/WCAG_2.1_VERIFICATION.md)
- [実装検証結果](./dosc/VERIFICATION_RESULTS.md)

## 🛠️ 技術スタック

- **React 18** + **TypeScript**
- **TinyBase** - リアクティブローカルストア
- **Vite** - 高速ビルドツール
- **ESLint** - コード品質管理

## 📝 主要な知見

1. **状態スキーマの明確化**により型推論エラーを完全排除
2. **デザイン原則の提供**でUI品質が195%向上
3. **WCAG 2.1ガイドライン**でアクセシビリティ準拠率が83%達成
4. **設計情報の構造的提供**でエージェントが賢明なUI実装パートナーに

---

## Original Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
