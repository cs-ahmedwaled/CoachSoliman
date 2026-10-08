/* =====================================================================
   LIGHTBOX  |  عرض الصور بالحجم الكبير
   Click a photo to open it; arrows / keyboard to move; Esc to close.
   ===================================================================== */

function initLightbox() {
  const box = $("#lb"), image = $("#lbImg"), caption = $("#lbCap");
  let list = [], index = 0;

  function open(photos, i) {
    list = photos;
    index = i;
    image.src = photos[i].src;
    image.alt = photos[i].caption;
    caption.textContent = photos[i].caption;
    box.classList.add("on");
  }
  const close = () => box.classList.remove("on");
  const step  = d => open(list, (index + d + list.length) % list.length);

  /* data-list = "gallery" or "results", data-i = position in that list */
  $$(".gcard").forEach(card => {
    card.onclick = () => open(CONTENT[card.dataset.list], Number(card.dataset.i));
  });

  $("#lbClose").onclick = close;
  $("#lbPrev").onclick  = () => step(-1);
  $("#lbNext").onclick  = () => step(1);
  box.addEventListener("click", e => { if (e.target === box) close(); });

  addEventListener("keydown", e => {
    if (!box.classList.contains("on")) return;
    if (e.key === "Escape")     close();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft")  step(-1);
  });
}
