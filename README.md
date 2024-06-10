## Arknights_Charcter_Sheets
これはアークナイツTRPGで使用するキャラクターシートを web上で制作及び管理するためのアプリケーションです。


## 使ったもの
* header, sidebar : [Flowbite](https://flowbite.com/docs/components/sidebar/#sidebar-with-navbar)をReact仕様に編集

## 環境構築
### 1. git の install
ターミナル上で、以下のコマンドを入力。
```bash
git --version
```
version が表示されなければ、[こちら](https://prog-8.com/docs/git-env-win) を参考に install

### 2. node.js の install
ターミナル上で node.js が install されているか確かめる。
```bash
node --version
```
これで ```v20.10.0``` 等のバージョンが表示されれば OK！ <br>
node.js の install については [こちら](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

### 3. プロジェクトの clone
緑の ```code``` ボタンから https の url をコピーし、ターミナル上で以下のコマンドを入力
```bash
cd /任意のコードを配置するフォルダ
git clone https://github.com/kouki928/Arknights_Charcter_Sheets.git
```
.zip ファイルが現在の階層にダウンロードされているか確認し展開する。

### 4. 必要なライブラリの install
```package.json```がある階層で以下のコマンドを入力する。
```bash
npm i
```

### 5. Firebase のセッティング
```package.json``` と同じ階層に、```.env.local``` という名前のファイルを作成、または共有されたファイルを配置する。
これは firebase に値を格納するための key であるため、公開はしない。
