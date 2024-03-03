# ディレクトリ
- gas-display-text-part
  - テキストパートを表示する
- gas-show-email-service
  - 利用しているメールサービスを表示する

# 利用方法
## GASでコードをコピーして使う
### GASの共有リンクを知っている場合
1. 共有リンクにアクセスします
1. 左の縦枠の概要（iマークのアイコン）をクリックします
1. 右に「コピーを作成」のアイコンがあるので、クリックします
1. 上部右側のデプロイボタンをクリックし、「デプロイをテスト」をクリックします
1. デプロイの枠に「Test latest code」と表示されていることを確認し、下の「インストール」をクリックします
1. 完了ボタンをクリックします
1. Gmailの画面をリロードします
1. Gmailの画面の一番右の縦枠にアイコンが追加されていることを確認します
1. アイコンをクリックし、認可設定を行います
1. 設定が完了したら、メールを開いて動作することを確認します

### GASの共有リンクを知らない場合
1. https://script.google.com/home にアクセスします
1. 左上の「新しいプロジェクト」から新しいプロジェクトを作成します
1. 名前が「無題のプロジェクト」のままなので、プロジェクト名をクリックして変更します
1. 「コード.gs」の編集画面で、このリポジトリの「script.gs」の内容をコピーして貼り付けます
1. 「プロジェクトの設定」（歯車マーク）をクリックし、『「appsscript.json」マニフェスト ファイルをエディタで表示する』にチェックを入れます
1. エディタに戻ります（メニューの「< >」アイコン）
1. `appsscript.json`を開き、このリポジトリの`appsscript.json`の内容をコピーして貼り付けます
1. 保存します
1. 「GASの共有リンクを知っている場合」の4番以降の手順を実施します

# 管理者向け情報
## アプリの追加
1. ディレクトリを切る
1. `clasp create --type standalone`
1. `appsscript.json`と`script.gs`を編集する
1. `clasp push`
## アイコンの探し方
1. https://fonts.google.com/icons でアイコンを探す
1. その名前からURLを作成する: https://www.gstatic.com/images/icons/material/system/1x/text_fields_googblue_48dp.png
1. そのURLを`appsscript.json`に貼り付ける