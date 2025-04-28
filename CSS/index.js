$(document).ready(() => {
  // Mark all as read
  $("nav p").click(() => {
    $("#num").text("0"); // Set notification count to 0
    $(".container").css("backgroundColor", "#fff"); // Change background to white
    $(".dot").hide(); // Hide red dots
  });

  // Click handler for any unread message container
  $(".unread-message .container").click(function () {
    // Only proceed if the container hasn't been marked as read (still has visible dot)
    if ($(this).find(".dot").is(":visible")) {
      // Change background to white
      $(this).css("backgroundColor", "#fff");
      // Hide the red dot
      $(this).find(".dot").hide();
      // Decrease notification count
      let currentCount = parseInt($("#num").text());
      if (currentCount > 0) {
        $("#num").text(currentCount - 1);
      }
    }
  });
});
