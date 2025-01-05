// 日付入力フォームの初期設定を今日にする
window.onload = function () {
  let getToday = new Date();
  let y = getToday.getFullYear();
  let m = getToday.getMonth() + 1;
  let d = getToday.getDate();
  let today =
    y +
    "-" +
    m.toString().padStart(2, "0") +
    "-" +
    d.toString().padStart(2, "0");
  document.getElementById("datepicker").setAttribute("value", today);
};

// firebaseのスクリプト
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
  remove,
  onChildRemoved,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "{APIキー}",
  authDomain: "{APIキー}",
  projectId: "{APIキー}",
  storageBucket: "{APIキー}",
  messagingSenderId: "{APIキー}",
  appId: "{APIキー}",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); //RealtimeDBに接続
const dbRef = ref(db, "location"); //RealtimeDB内の"location"を使う

$(function () {
  //データ登録(Click)
  $("#sendPlace").on("click", function () {
    const msg = {
      date: $("#datepicker").val(),
      address: $("#address").val(),
      note: $("#note").val(),
    };
    // 入力欄を空欄にする（クリア）
    $("#address").val("");
    $("#note").val("");
    console.log(msg);
    const newPostRef = push(dbRef); //ユニークKEYを生成
    set(newPostRef, msg); //"chat"にユニークKEYをつけてオブジェクトデータを登録
    // 音を鳴らす
  });
});

//最初にデータ取得＆onSnapshotでリアルタイムにデータを取得
onChildAdded(dbRef, function (data) {
  const msg = data.val(); //オブジェクトデータを取得し、変数msgに代入
  const key = data.key; //データのユニークキー（削除や更新に使用可能）
  //表示用テキスト・HTMLを作成
  let h;
  h = `
        <div id="${key}" class="balloon">
        <div>
          <p class="date">${msg.date}</p>
        </div>
        <div class="destination">
          <p class="address">${msg.address}</p>
          <img id="delete" class="delete" data-key="${key}" src="./img/x.svg" alt="バツボタン">
        </div>
        <div>
          <p class="note">${msg.note}</p>
        </div>
      </div>
        `;
  // jQueryを使って画面に表示する
  $("#output").append(h);
});

// データ削除(Click)
$(document).on("click", ".delete", function () {
  const key = $(this).data("key");
  const deleteRef = ref(db, `location/${key}`);
  remove(deleteRef)
    .then(() => {
      $(`#${key}`).remove(); // 画面から削除
    })
    .catch((error) => {
      console.error("削除エラー:", error);
    });
});

// 場所を入力したら地図を表示する
$(document).on("click", ".balloon", function () {
  let address = $(this).find(".address").text();
  //国土地理院GeolocationAPIを使って住所から緯度経度を取得
  $.ajax({
    url: "https://msearch.gsi.go.jp/address-search/AddressSearch?q=" + address,
  }).done(function (res, textStatus, jqXHR) {
    if (res.length) {
      let latlng = res[0].geometry.coordinates;
      $("#lat").val(latlng[0]);
      $("#lng").val(latlng[1]);

      // Google Mapのスクリプト
      let MyLatLng = new google.maps.LatLng(latlng[1], latlng[0]);
      let Options = {
        zoom: 15, //地図の縮尺値
        center: MyLatLng, //地図の中心座標
        mapTypeId: "roadmap", //地図の種類
      };
      var map = new google.maps.Map(document.getElementById("map"), Options);
    }
  });
});
