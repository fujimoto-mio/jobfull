//ボタンを押すごとに画面が切り替わる関数
$(function () {
  $(".btn").on("click", function () {
    //btnクラスをクリック後の関数処理
    $(this).closest("div").css("display", "none");
    //質問画面にあたらる親要素divをdisplay:none;にする
    id = $(this).attr("href");
    //次の質問hrefをidに格納
    $(id).addClass("fit").fadeIn("slow").show();
    //次の質問にfitをつけて出力。
  });
});
//選択ボタンデータを配列に入れてカウントする関数
var countA;
var countB;
var box = [];
$(".btn").each(function () {
  $(this).on('click', function () {
    var value = $(this).data("value");
    box.push(value);

    countA = box.filter(function (x) {
      return x === "a"
    }).length;
    countB = box.filter(function (y) {
      return y === "b"
    }).length;
    countC = box.filter(function (y) {
      return y === "c"
    }).length;
    countD = box.filter(function (y) {
      return y === "d"
    }).length;
  });
});


//結果を出力する関数
$('.end').on('click', function () {
  if (countA > countB) {
    $('#answer_01').css("display", ""); //回答1
  } else if (countB > countC) {
    $('#answer_02').css("display", "");//回答2
  } else if (countC > countD) {
    $('#answer_03').css("display", "");//回答3
  }else {
  $('#answer_04').css("display", "");//回答4
}
});
