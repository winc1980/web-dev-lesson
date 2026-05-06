---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 09"
footer: "WINC - Identity Dashboard Project"
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
    color: #fff7ed;
}
</style>

# 第9週: 世界へ公開する (Git & Deployment)
## 〜 制作物を「資産」に変える 〜

---

## 1. なぜ Git が必要か？

- **バックアップ:** 壊してもいつでも戻せる。
- **履歴管理:** 「昨日何をしたか」が明確になる。
- **チーム開発:** 複数人で同じファイルを編集しても衝突を防げる。
- **ポートフォリオ:** GitHub に置くことで、自分の技術を証明できる。

---

## 2. 基本コマンド 4選

1. `git init`: フォルダを Git 管理下におく（最初だけ）。
2. `git add .`: 変更したファイルを「ステージ」に上げる（準備）。
3. `git commit -m "メッセージ"`: 変更を記録する（保存）。
4. `git push`: 自分のPCの記録を GitHub へ送る（同期）。

---

## 3. GitHub へのアップロード

1. GitHub で新規リポジトリを作成。
2. 画面に表示されるコマンドをコピーして、ターミナルで実行。
3. コードが Web 上に表示される！

---

## 4. デプロイ (Deployment)

「自分のPCの中」ではなく「インターネット上」で誰でも見られる状態にすること。

- **Netlify / Vercel:** 
  - GitHub と連携するだけで、`push` するたびに自動でサイトを更新してくれます。
  - **無料**で使えます。

---

## 5. Phase 2 完了！

これで、あなたのダッシュボードは「動く」ようになり、さらに「世界中に公開」されました。

- HTML/CSS で形を作り
- JavaScript で命を吹き込み
- Git で記録・公開した。

来週からは、いよいよ **Phase 3: React & Next.js** への換装が始まります！

---

## 宿題 (Homework)

1. 自分のダッシュボードを GitHub に push し、Netlify または Vercel で公開する。
2. 公開したURLをシェアしよう！
3. これまでのコードを振り返り、読みにくい場所がないか整理してみる。
