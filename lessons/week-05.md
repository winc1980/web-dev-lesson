---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 05"
footer: "WINC - Identity Dashboard Project"
---
<style>
section {
    background-color: #fff7ed;
    color: #292524;
    font-family: "Inter", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif;
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
code, pre {
    background-color: #292524 !important;
    color: #ff9c11 !important;
}
.hljs-string, .token.string {
    color: #7dd3fc !important;
}
.hljs-keyword, .token.keyword {
    color: #fb7185 !important;
}
</style>

# 第5週: JavaScript & DOM 入門
## 〜 ブラウザの裏側を覗いて、ページを自由に操ろう 〜

<!-- 
【講師用台本】
お疲れ様です！今日からPhase 2、いよいよJavaScript（JS）に入ります。
これまでの4週間で、見た目が綺麗なダッシュボードができましたね。
でも、今のページはまだ「動かないポスター」みたいな状態です。
今日からはJSを使って、そのポスターに「動き」をつけていきます。
ボタンを押したら反応する、中身が書き換わる。
「プログラムで画面を操る」感覚を、まずは根本の仕組みから掴んでいきましょう！
-->

---

## 本日のメニュー

1. **JSの役割:** HTML/CSSとどう関わってる？
2. **DOMの深淵:** HTMLは「木」である
3. **レンダリングの裏側:** HTMLが画面に映るまで
4. **狙い撃ち:** querySelector と Node の概念
5. **動的操作:** プロパティ書き換やクラス操作
6. **対話の始まり:** イベントリスナー (addEventListener)
7. **実践タイム:** 自分のページをインタラクティブに！

---

## 1-1. JavaScript は「振る舞い」の担当

Web制作におけるJSの立ち位置を整理しましょう。

- **HTML:** 構造（骨組み、部屋の間取り）
- **CSS:** 装飾（壁紙、インテリア）
- **JS:** **振る舞い（ドアが開く、照明がつく、エアコンが動く）**

**💡 なぜJSが必要？**
今のWebサイトは「読み込んだら終わり」ではなく、ユーザーの操作に合わせてリアルタイムで変化します。その「変化」を司るのがJSの役割です。

---

## 2-1. DOM (Document Object Model) の本質

「DOM」とは、ブラウザがHTMLを読み込んだ後に作る **「プログラムから操作するための地図」** です。

- **HTMLファイル:** ただのテキストデータ
- **DOM:** JSから触れる「オブジェクト（部品）」の集まり

### **重要なイメージ：DOM Tree**
HTMLの入れ子構造は、根(Root)から枝分かれする **「木構造（ツリー構造）」** としてブラウザ内部で管理されています。

---

## 2-2. DOM Tree を可視化してみる

```javascript
// document (根っこ)
//   html
//     body
//       header -> h1 (子要素)
//       main -> p (子要素)
```

**💡 全ては「ノード (Node)」:**
タグだけでなく、中のテキストも全てこの木の中に「ノード」として存在しています。JSはこの木を登ったり降りたりして、特定の場所を書き換えます。

---

## 3-1. ブラウザが画面を描くまでの流れ

1. **解析 (Parsing):** HTMLを読み込んで DOM Tree を作る。
2. **スタイル適用:** CSSを読み込んで適用ルールを決める。
3. **レイアウト計算:** どこに、どのサイズで配置するか決める。
4. **描画 (Painting):** 実際にピクセルとして画面に映す。

**★ JSの凄いところ:**
JSはこの **「1」で作られた DOM Tree を直接いじることができます**。家系図を書き換えるようなものです。書き換わると、ブラウザは即座に「3」「4」をやり直し、画面が更新されます。

---

## 4-1. ターゲットを指定する：querySelector

DOM Treeの中から、操作したい特定の部品を捕まえる方法です。

```javascript
const title = document.querySelector("#main-title");
const bioText = document.querySelector(".bio-description");
```

**💡 「オブジェクト」として捕まえる:**
`const title` の中には、単なる文字列ではなく **「h1タグが持つ全ての情報と、操作用のスイッチ」** が詰まった塊（オブジェクト）が入ります。

---

## 5-1. 実際に書き換えてみる

捕まえた部品のプロパティをいじります。

- **textContent:** 中のテキストを書き換える。
- **classList:** クラスを付け外しする（これが一番綺麗！）。

```javascript
const box = document.querySelector(".profile-card");
box.textContent = "名前を書き換えたよ";
box.classList.add("active-style");
```

---

## 6-1. 反応させる：addEventListener

「いつ」処理を実行するか、きっかけ（イベント）を登録します。

```javascript
const btn = document.querySelector("#theme-button");
btn.addEventListener("click", () => {
  console.log("ボタンが押されました");
  document.body.classList.toggle("dark-mode");
});
```

**💡 よく使うイベント:**
`click`, `input`, `mouseover`

---

## 7. 実践：ダッシュボードを改造しよう！

1. **名前を書き換え:** 自分の名前をクリックしたら、別の肩書きに変わるようにしてみる。
2. **コンソールで確認:** `console.dir(document.body)` と打ってみて、DOMオブジェクトの中にどれだけのデータが詰まっているか覗いてみる。
3. **色を変える:** ボタンを用意して、押すたびに背景色が変わるようにしてみる。

---

## 9. 今週の宿題 (Homework)

1. 自分のページに「自己紹介を隠す/出す」ボタンを実装する。
2. `addEventListener` を使って、クリック以外のイベントを1つ試す。
3. **チャレンジ:** 3秒後に自動で背景が変わるなど、setTimeout（タイマー）を調べて使ってみる。