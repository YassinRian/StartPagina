import $x from "jquery";

const URLs = {
  baten: "https://yjjo0zq49.codesandbox.io",
  lasten:
    "?b_action=cognosViewer&ui.action=run&ui.object=CAMID(%22Haagnet%3au%3a19c7760545dd164f9fbadf6d8830de2f%22)%2ffolder%5b%40name%3d%27Persoonlijke%20mappen%27%5d%2ffolder%5b%40name%3d%27BudgetUitputiing%20Package%27%5d%2ffolder%5b%40name%3d%27Yassin%27%5d%2ffolder%5b%40name%3d%27laatste%20versie%27%5d%2ffolder%5b%40name%3d%27TEST%20FOLDER%27%5d%2freport%5b%40name%3d%27Lasten_dashboard%27%5d&ui.name=Lasten_dashboard&run.outputFormat=&run.prompt=true"
};

$x(".lasten").click(function() {
  if ($x("iframe.lasten_all").length > 0) {
    $x("iframe.baten_all").hide();
    $x("iframe.lasten_all").show();
    $x(".main1").hide(300);
    $x(".main2").show(300);
  } else {
    $x(".main1").hide(200);
    $x(".main2").show(300);
    if ($x("iframe.baten_all").length > 0) {
      $x("iframe.baten_all").hide();
      $x(".filters")
        .not(".budget")
        .hide();
      lasten("lasten_all", URLs.lasten);
    } else {
      $x(".filters")
        .not(".budget")
        .hide();
      lasten("lasten_all", URLs.lasten);
    }
  }
});

$x(".baten").click(function() {
  if ($x("iframe.baten_all").length > 0) {
    $x("iframe.lasten_all").hide();
    $x("iframe.baten_all").show();
    $x(".main1").hide(300);
    $x(".main2").show(300);
  } else {
    $x(".main1").hide(200);
    $x(".main2").show(300);
    if ($x("iframe.lasten_all").length > 0) {
      $x("iframe.lasten_all").hide();
      $x(".filters")
        .not(".budget")
        .hide();
      lasten("baten_all", URLs.baten);
    } else {
      $x(".filters")
        .not(".budget")
        .hide();
      lasten("baten_all", URLs.baten);
    }
  }
});

$x(".fa.fa-home").click(function() {
  $x(".main2").hide(300);
  $x(".main1").show(300);
});

$x(".buttonsb").click(function() {
  $x(".sidebar").toggle(300);
});

function lasten(naam, url) {
  var iframe = document.createElement("iframe");
  iframe.className = naam;
  iframe.src = url;
  $x(".wrapper").append(iframe);
}
