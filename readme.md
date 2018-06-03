# docker-composeを使ったwordpress環境

## 必要なもの

- [docker for mac](https://www.docker.com/docker-mac)

## 手順

- このリポジトリをクローン
- ターミナルで `docker-compose up -d` でwordpressを起動
- ブラウザでlocalhost:8080にアクセス
  - 初回はwordpressのインストールを行う
- テーマ開発をするときは、ブラウザをリロードするだけでテーマが反映される
- コンテナを停止させるときは、`docker-compose down`