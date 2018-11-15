import $x from "jquery";

const URLs = {
  baten: "https://rl6330qqqo.codesandbox.io/",
  lasten: "https://rl6330qqqo.codesandbox.io/"
};

$x(".lasten").click(function() {
  $x("iframe.baten_all, .main1, .cognos_portaal").css("display", "none");
  $x(".main2").css("display", "block");
  if ($x("iframe.lasten_all").length > 0) {
    $x("iframe.lasten_all").css("display", "block");
  } else {
    iframe("lasten_all", URLs.lasten);
  }
});

$x(".baten").click(function() {
  $x("iframe.lasten_all, .main1, .cognos_portaal").css("display", "none");
  $x(".main2").css("display", "block");

  if ($x("iframe.baten_all").length > 0) {
    $x("iframe.baten_all").css("display", "block");
  } else {
    iframe("baten_all", URLs.baten);
  }
});

$x(".fa.fa-home").click(function() {
  $x(".main2").css("display", "none");
  $x(".main1, .cognos_portaal").css("display", "block");
});

$x(".buttonsb").click(function() {
  $x(".sidebar").toggle(300);
});

function iframe(naam, url) {
  var iframe = document.createElement("iframe");
  iframe.className = naam;
  iframe.src = url;
  $x(".wrapper").append(iframe);
}
