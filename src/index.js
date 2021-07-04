const onClickAdd = () => {
  //テキストの値を取得する
  const inputText = document.getElementById("add-text").value;
  //テキストの値を初期化する
  document.getElementById("add-text").value = "";
  addImcompleteList(inputText);
};
//イベントを定義する
//追加ボタンを押した時のイベント

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストに作成する関数
const addImcompleteList = (target) => {
  //新規のdivを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //新規のliを生成する
  const li = document.createElement("li");
  li.innerText = target;

  //新規のbuttn（完了）タグの生成
  const compleateButton = document.createElement("button");
  compleateButton.innerText = "完了";
  compleateButton.addEventListener("click", () => {
    const completeTarget = compleateButton.parentNode;
    //不要になったリストを削除する
    deletFormImcompleteList(completeTarget);

    //押された完了ボタンの親要素を完了リストに移動させる

    const text = completeTarget.firstChild.innerText;

    //div以下を初期化
    completeTarget.textContent = null;
    //新規のliを生成する
    const li = document.createElement("li");
    li.innerText = text;
    //新規のbuttn（戻す）タグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタンを押下したタイミングのイベント
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      const text = backTarget.firstChild.innerText;
      addImcompleteList(text);
    });

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    //完了リストに子要素を追加する
    document.getElementById("complete-list").appendChild(completeTarget);
  });
  //新規のbuttn（削除）タグの生成
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  deleateButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を削除する
    const deleateTarget = deleateButton.parentNode;
    deletFormImcompleteList(deleateTarget);
  });

  //divの子要素にliタグを設定する
  div.appendChild(li);
  div.appendChild(compleateButton);
  div.appendChild(deleateButton);

  //未完了listに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deletFormImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
