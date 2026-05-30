---
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