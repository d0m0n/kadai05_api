# ① 課題番号-プロダクト名

たびのしおり

## ② 課題内容（どんな作品か）

- 旅行のしおりを作成するアプリです。
- 入力フォームに住所を入力すると国土地理院の Geolocation API で緯度と経度に変換して Google Map API に渡して表示させるようにしています。
- 目的地の吹き出しをクリックすると、その場所が改めて地図画面に表示されます。

## ③DEMO

https://d0m0n.github.io/kadai04_chat/

## ④ 作ったアプリケーション用の ID または Password がある場合

- ID: なし
- PW: なし

## ⑤ 工夫した点・こだわった点

-

## ⑥ 難しかった点・次回トライしたいこと(又は機能)

- 国土地理院の Geocoding だと、施設名を入力しても正確に変換してくれないことが多いので、代わりに Google の Geocoding API を試してみたい。
- Google Map の Places API を利用してプレイスフォトを読み込んで表示させるようにしたい。
- 項目をドラッグアンドドロップで入れ替えるようにしたい。
- 管理画面と閲覧用の画面を独立させたい。
- マップピンを設定したい。
- 上部のタイトル部分に設定している写真を目的地に合わせて変化するよう画像表示 API を組み合わせたい。

## ⑦ 質問・疑問・感想、シェアしたいこと等なんでも

- [質問]
- [感想]
  少しずつ css と仲良くなってきているような気がします。反復して続けることが大事だと実感しました。

- [参考記事]
- Google Maps API を使ってみた（https://qiita.com/Haruka-Ogawa/items/997401a2edcd20e61037）
- 国土地理院の API を使用して無料でジオコーディング(住所 → 経度緯度)を行う方法（https://taitan916.info/blog/archives/3186）
- HTML の input の date で日付の入力欄を作る【初期値や期間の制限】（https://web.skipjack.tokyo/html/html_input-date/）
- table 表のレスポンシブ方法と CSS デザインテクニック（https://leqturez.jp/css-table-responsive/）
- CSS のみ 画像トリミングのサンプルまとめ。角丸・丸い円・縮小…object-fit で自由自在に切り抜き！ | KodoCode
  （https://kodocode.net/design-css-trim-image/）
- 画像の上におしゃれに文字やボタンをのせる方法（CSS）（https://saruwakakun.com/html-css/reference/image-text）
- CSS だけで背景画像を暗くしたり img 画像を暗くする方法！（https://dezanari.com/css-img-darken/）
