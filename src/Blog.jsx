import React from 'react';
import Article from './Article';
import Hoge from './Component/Hoge';
//ファイルをインポートしています。
// import {Foo, Bar} from './Component/FooBar'
import * as FooBar from './Component/FooBar'//上記と同じ書き方です。
//関数の名前をインポートしています

//下記はReactHooksで記述
const Blog = () => {
  return(
    <div>
      <Article 
      title={'公開状態を確認する'}
      // order = {this.state.order}
      />
      <Hoge />
      <FooBar.Foo />
      <FooBar.Bar />
    </div>
  )
  
}


//下記はクラスコンポーネントで記述
/* class Blog extends React.Component {
  constructor(props) {//con~とsuper~は定型文になる。
    super(props);
    this.state = {//オブジェクトで記述。stateはconstructorの中に記述する。
      isPublished: false,
      order: 0,
      count: 0
    }
  }
  componentDidMount() {
    //関数を呼び出すときには関数型で記述するか関数として書くかのどっちか
    //()=>this.CountUp()　か　this.CountUp [()]は付けない
    document.getElementById('counter').addEventListener('click', () => this.CountUp())
  };

  componentDidUpdate() {//render毎に再描画される
    if(this.state.count > 10) {
      this.setState({
        count: 0,
      })
    }
  };
  componentWillUnmount() {//コンポーネントの解除の時に使用する最後のライフサイクル
    document.getElementById('counter').removeEventListener('click', this.CountUp)
  };

  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished,
    })
  };

  toggleOrder = () => {
    this.setState( {
      order: this.state.order + 1,
    })
  };

  CountUp = () => {
    this.setState({
      count: this.state.count +1,
    })
  };


  render() {
    return(
      <div>
        <Article 
        title={'公開状態を確認する'}
        isPublished={this.state.isPublished}
        toggle={()=> this.togglePublished()}
        order = {this.state.order}
        toggl = {this.toggleOrder}
        count= {this.state.count}//Blogに初期値を渡す
        />
        <Hoge />
        <FooBar.Foo />
        <FooBar.Bar />
      </div>
    )
  }
  
} */
export default Blog;

//1propsではなんでも渡すことができる。2再利用ができる.関数の記述はconstructorの中ではなく外に記述
//setStateで変更された関数を子コンポーネントに渡す時はアロー関数で渡す（コールバック関数）。→基本的に無限ループを防ぐためにsetStateで変更された値は関数型で渡してあげる
//クラスコンポーネントの中の関数式は変数化しなくても良い「let toggleName✖︎　toggleName○」
//関数型を渡す時は[() => this.関数式() またはthis.関数式]のどちらかで記述しなければならない。



/* <FormDialog 
open={opne}
handleClose={handleClose}
/> */ */








/* 
//初めてのGitとGithubについて
gitはバージョン管理システム（最新ファイルを見つけるため）
⇨「どのファイルの何を」「誰が」「いつ」「何のために」変更したのかわかる。ファイルを元に戻すこともできる。

//Gitの仕組み
・変更履歴を順々に記録する
・記録する際はメッセージを付ける
//個人開発の流れ
ファイルの変更
個人のファイル☞[commit] 個人[ローカルレポジトリ]☞[push] 共有

// 複数開発の流れ 
共有⇨[pull] 個人のファイル☞[commit] 個人[ローカルレポジトリ]☞[push] 共有

リポジトリ‥変更履歴を記録する場所
commit‥個人リポジトリに変更履歴を記録
push‥共有リポジトリに変更を共有
pull‥共有リポジトリの情報を同期

// GitHubとは
gitのコードをオンライン上で保管する場所

// Githubの特徴
・プルリクエストの複数の開発
⇨修正したコードの変更をリクエストができる仕組み
・世界中の開発環境をみることができる。

//Gitのイメージ
 
githubでやること
1.git remote レポジトリを作成
2.git remote push -u origin master
3.gitに作成される

ターミナルでやること
1.ローカルレポジトリの新規作成
git init
2.gitディレクトリが作られる
3.ファイルの変更をステージングエリアへ追加
git add　ファイル名　or add.
4.ローカルレポジトリにコミットする（メッセージ付き）
git commit -m 'コメント'
5.リモートレポジトリにプッシュする
git push

//注意事項
1作業1コミットが原則になる
1行目　変更内容のようやく
2行目　空行
3行目　変更した理由

git 頻出コマンド
git --oneline　変更したlogを1行で取得
git log 
git status　sute-zo 

git -n 3　最新の上から3つ目までを取得
git rm ファイル名　指定されたファイルを削除
git rm -r ディレクトリ名 

git diff ローカルとステージング領域の差分を表示
git diff HEAD ステージ領と最新の部分の差分を表示

リモートレポジトリ（git hub）に登録する
git remote add origin URL

リモートリポジトリへ送信
コマンドでローカルレポジトリへ送信する
git push　origin master */