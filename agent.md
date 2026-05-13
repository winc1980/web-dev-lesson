# 17-Week Web Development Workshop: Project Specification

## 1. プロジェクト概要
- **タイトル:** ディアゴスティーニ方式で作る「マイ・ポートフォリオ」
- **コンセプト:** 17週間かけて**一つのプロジェクト**を継続的に成長させる。毎週新しい「パーツ（機能・デザイン）」を組み上げ、最終的にモダンなWebアプリケーションを完成させる。
- **ターゲット:** プログラミング初学者〜中級者
- **最終成果物:** Vercelにデプロイされた、自分専用の高度なダッシュボード。

---

## 2. フェーズ構成

### Phase 1: HTML & CSS (Weeks 1-4)
- **目標:** セマンティックHTMLとレスポンシブデザインの習得。
- **成果物:** 静的なダッシュボードの骨組みと外装。

### Phase 2: JavaScript & Git (Weeks 5-9)
- **目標:** DOM操作、非同期通信（API）、バージョン管理の習得。
- **成果物:** ライブデータ（GitHub/天気等）を統合した動的サイト。

### Phase 3: React & Next.js (Weeks 10-13)
- **目標:** モダンフロントエンド（Next.js, TypeScript）への移行。
- **成果物:** Vanilla版をNext.jsへフルリプレース。

### Phase 4: Specialization (Weeks 14-17)
- **目標:** カスタマイズと最終デプロイ。

---

## 3. リポジトリ構成 (Milestone-based Structure)

AIエージェントは以下の構造に従ってファイルを管理してください。

```text
/workshop-curriculum
  ├── README.md                 # ロードマップ
  ├── /lessons                  # 講義資料
  │   ├── week-01.md            # Marp形式のスライド案
  │   └── ...
  ├── /project-core             # 学生のメイン作業場（常に最新状態を維持）
  │   ├── index.html
  │   ├── style.css
  │   └── main.js
  └── /milestones               # 各週の「完成スナップショット」
      ├── week-01               # 第1週終了時の状態
      ├── week-02               # 第2週終了時の状態
      └── ...
```

---

## 4. 教材作成のルール

新しい週の教材を作成する際は、以下の3点を更新・作成してください。

1.  **Lessons (`/lessons/week-X.md`):**
    - 講義のキーメッセージとスライド構成。
2.  **Milestone (`/milestones/week-X/`):**
    - その週の課題をすべてクリアした**「完全なスナップショット」**。
    - 前週の成果を引き継ぎ、新機能を追記した状態で保存する。
    - コード内には `[Week X 新規追加]` とコメントを入れ、変更箇所を明示する。
3.  **Project Core (`/project-core/`):**
    - Milestone と同期させ、常に「今教わっている最新の状態」を維持する。

---

## 5. 技術スタック・ルール
- **Vanilla Phase:** 素のHTML/CSS/JS。ライブラリは最小限。
- **Next.js Phase:** TypeScript + Tailwind CSS。
- **Git:** 毎週の進捗をコミットすることを推奨する。

---

## 6. AIエージェントへの指示（プロンプト例）

> **"第10週の React 移行カリキュラムを作成してください。`lessons/week-10.md` に講義案を、`milestones/week-10/` に Next.js への初期移行完了コードを作成してください。既存の Vanilla 版のデザインを崩さずにコンポーネント化すること。"**
