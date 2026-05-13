---
marp: true
theme: default
paginate: true
---
<style>
section {
    background-color: #fff7ed;
    color: #292524;
    font-family: 'Inter', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', sans-serif;
}
h1, h2, h3 {
    color: #ea580c;
}
footer, header {
    color: #292524;
    opacity: 0.7;
}
a {
    color: #ea580c;
}
code {
    background-color: #292524;
    color: #00fbff
}
</style>

# Phase 4: Specialization (第14週〜第17週) ガイド

第13週までで、Next.js によるモダンなダッシュボードの基盤が完成しました。

最後の4週間は、以下の3つの専門ルートから1つを選び、自分だけの「究極のパーツ」を組み込みます。

---

## 🚀 ルート選択

### A: Tech News Hub
**「情報収集のプロフェッショナルへ」**
- **概要:** Zenn, Qiita, はてなブックマークなどの技術記事を統合して表示します。
- **身につくスキル:** 複雑なデータの取得、検索・フィルタリング、ローカルストレージ活用。
- **難易度:** ★★☆（ロジック重視）

### B: Three.js Design
**「視覚表現の限界を突破する」**
- **概要:** ダッシュボードにインタラクティブな3Dオブジェクトを配置します。
- **身につくスキル:** React Three Fiber, 3Dモデリング, ライティング, アニメーション。
- **難易度:** ★★★（数学・センス重視）

### C: Simple Web Game
**「遊び心と高度な状態管理」**
- **概要:** ダッシュボード内で動くミニゲーム（クリックゲームやアクション）を構築します。
- **身につくスキル:** ゲームループ、当たり判定、高度な React State 管理。
- **難易度:** ★★☆（アルゴリズム重視）

---

## 📅 4週間のロードマップ

| 週 | A: News Hub | B: Three.js | C: Web Game |
| :--- | :--- | :--- | :--- |
| **Week 14** | API統合・データ正規化 | 3D空間の構築 (Box/Sphere) | ゲームループと基本移動 |
| **Week 15** | 検索・フィルタリング | マテリアルとライティング | 当たり判定とスコア |
| **Week 16** | お気に入り・永続化 | マウス追従・インタラクション | ステート遷移 (Start/Over) |
| **Week 17** | **最終調整・デプロイ** | **最終調整・デプロイ** | **最終調整・デプロイ** |

---

## 🛠 進め方
1. 自分の興味があるルートを1つ選びます。
2. `milestones/week-14/route-[a\|b\|c]` のスターターコードを参考に実装を始めます。
3. 最後のデモデイに向けて、自分の個性をさらに追加してみましょう！
