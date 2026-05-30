
def write_week_05():
    content = """---
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
これまでの4週間で、見た目が綺麗なダッシュボードができましたよね。
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
5. **動的操作:** プロパティ書き換えやクラス操作
6. **対話の始まり:** イベントリスナー (addEventListener)
7. **実践タイム:** 自分のページをインタラクティブに！

---

## 1-1. JavaScript は「振る舞い」の担当

Web制作におけるJSの立ち位置を整理しておきましょう。

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

### **大事なイメージ：DOM Tree**
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

**★ JSができること:**
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
- **classList:** クラスを付け外しする（これが一番スマート！）。

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
"""
    with open('lessons/week-05.md', 'w', encoding='utf-8') as f:
        f.write(content.strip())

def write_week_12():
    content = """---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 12"
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

# 第12週: Hooksを極める (React Hooks Mastery)
## 〜 React 19 対応：モダンな「状態」と「副作用」の管理 〜

<!-- 
【講師用台本】
お疲れ様です！経験者班の第12週です。
先週はコンポーネント分割をやりましたが、今日はReactの核となる「Hooks」を深掘りします。
useState くらいなら皆さんも使ったことがあると思いますが、今日はそれだけじゃありません。
React 19の新機能も含め、プロがどうやって Hooks を使い分け、堅牢なアプリを作っているのか。
その設計思想まで一緒に学んでいきましょう！
-->

---

## 本日のメニュー

1. **Hooksの宇宙:** なぜHooksが必要なのか？
2. **基本と最新:** useState と useActionState (React 19)
3. **副作用の扱い:** useEffect の正しい使い道と注意点
4. **データの共有:** useContext でバケツリレーを卒業する
5. **参照と最適化:** useRef とメモ化の使いどころ
6. **React 19 新次元:** useOptimistic で爆速UIを作る
7. **実践:** 非同期処理とUIをシームレスに繋ぐ

---

## 1-1. Hooksの本質

Hooksとは、**「関数コンポーネントに、Reactの状態やライフサイクルを接続(Hook)するための関数」** です。

- **これまで:** 複雑なクラスを書かないと状態が持てなかった。
- **これから:** シンプルな関数の中に、必要なフックを刺すだけで高機能になる。

**💡 鉄の掟:**
1. **トップレベルでのみ呼ぶこと**（if文やループの中はNG）。
2. **Reactの関数内でのみ呼ぶこと。**

---

## 2-1. 状態管理の進化

### **useState** (基本)
```tsx
const [value, setValue] = useState(initial);
```

### **useActionState** (React 19 / 旧 useFormState)
フォーム送信などの「非同期処理」のために生まれた最新のHookです。
```tsx
const [state, formAction, isPending] = useActionState(updateName, null);
```
- **ここが凄い:** 「送信中かどうか (isPending)」や「サーバーからのエラー結果」をReactが勝手に管理してくれます。

---

## 3-1. 副作用：useEffect の真実

「画面が描画された後に、外部の世界と通信する」ための道具です。

```tsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer);
}, [deps]);
```

**⚠️ メンターからの助言:** 
React 18以降、**「単なるデータ取得のために useEffect を使うこと」はあまり推奨されません**。Server Componentsや use APIを使うのが今の主流です。

---

## 4-1. 共有：useContext

コンポーネントが何階層あっても、一気に値を届けられる「ワープホール」です。

1. **Contextを作成:** `const ThemeContext = createContext();`
2. **Providerで包む:** `<ThemeContext.Provider value="dark">`
3. **使う:** `const theme = useContext(ThemeContext);`

**💡 よく使う場面:** ログインユーザーの情報、アプリ全体のテーマ設定など。

---

## 5-1. 参照とメモ化

### **useRef**
- 「書き換えても画面を更新（再レンダリング）させたくない値」を保持する。
- input要素にフォーカスを当てるなど、DOMを直接触りたい時に使う。

### **useMemo / useCallback**
- 計算結果や関数をキャッシュして、余計な再計算を防ぐ。
- **朗報:** 将来的に **React Compiler** が導入されれば、これらは自動化されて書かなくて済むようになります。

---

## 6-1. React 19 の目玉：useOptimistic

**「楽観的更新」** を実現するHook。サーバーの返事を待たずに、画面を先に変えてしまいます。

```tsx
const [optimisticLikes, addOptimisticLike] = useOptimistic(
  currentLikes,
  (state, _) => state + 1
);
```

**UXの劇的向上:** 「いいね」を押した瞬間、0.1秒の遅れもなくカウントが増える心地よさ。もしサーバー側で失敗したら、Reactが自動で元の数字に戻してくれます。

---

## 7. 実践：最強のダッシュボードへ

1. **useActionState を実装:** プロフィール更新フォームを作り、送信中の Loading 表示を実装しよう。
2. **useOptimistic を導入:** 「いいね」ボタンを、ネットが遅くても爆速で動くようにしよう。
3. **useRef で操作:** 編集ボタンを押した瞬間に、入力欄にパッとフォーカスが当たるようにしよう。
"""
    with open('lessons/week-12.md', 'w', encoding='utf-8') as f:
        f.write(content.strip())

if __name__ == "__main__":
    write_week_05()
    write_week_12()
