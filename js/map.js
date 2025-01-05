// 場所を入力したら地図を表示する
$("#sendPlace").on("click", function () {
  let address = $("#address").val();
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
      let map = new google.maps.Map(document.getElementById("map"), Options);
    }
  });
});
