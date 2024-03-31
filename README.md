GASで作成したGmailのアドオンを管理しているリポジトリです。
# ディレクトリ
ディレクトリごとに1つのアプリケーションに対応しています。
## gas-display-text-part
テキストパートを表示するアドオン
## gas-show-email-service
利用しているメールサービス等を表示するアドオン

- メールサービス、List-Unsubscribe-Postヘッダの有無、メールヘッダを表示
- 対応しているメールサービス
  - Amazon SES
  - SendGrid
  - Mailgun
  - Postmark
  - SparkPost
  - Mailchimp
  - Mailjet
  - Zendesk
  - Marketo
  - Account Engagement (Pardot)
  - HubSpot
  - Shopify
  - Klaviyo
  - Cuenote
  - ラクス
  - EmberPoint
  - Will Mail
  - PHM
  - アララ
  - SHANNON MARKETING PLATFORM
  - シナジーマーケティング

# 利用方法
## GASでコードをコピーして使う
### GASのアドオンの共有リンクを知っている場合
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

### GASのアドオンの共有リンクを知らない場合
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
[clasp](https://github.com/google/clasp)でGitHub連携している。
## アプリの追加
1. ディレクトリを切る
1. `clasp create --type standalone`
1. `appsscript.json`と`script.gs`を編集する
1. `clasp push`
## アイコンの探し方
1. https://fonts.google.com/icons でアイコンを探す
1. その名前からURLを作成する: https://www.gstatic.com/images/icons/material/system/1x/text_fields_googblue_48dp.png
1. そのURLを`appsscript.json`に貼り付ける