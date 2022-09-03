$(document).ready(function () {
  let promoText = [
    "VIEW OUR RANGE OF ROLLER BLINDS",
    "VIEW OUR COLLECTION OF SHUTTERS",
    "VIEW OUR SELECTION OF WOODEN BLINDS",
    "VIEW OUR CURRENT OFFERS",
  ];

  let glide = new Glide(".glide", {
    type: "carousel",
    perView: 1,
    peek: 220,
    gap: 30,
  }).mount();

  glide.on("move", () => {
    $(".btn-container button.active").removeClass("active");
    $("#btn-slide-" + glide.index).addClass("active");
    glide.index === 3
      ? $("#btn-promo").text("VIEW OFFERS")
      : $("#btn-promo").text("VIEW RANGE");
    $(".promo-text").text(promoText[glide.index]);
  });
});
