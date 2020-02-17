// Здесь будет писаться код для улучшения игры
window.renderStatistics = function(ctx,names,times) {

  var WHITE_CLOUD_WIDTH = 420;
  var WHITE_CLOUD_HEIGHT = 270;

    // ============= Статистика участников по очкам ========================

    //Тень облака
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(110, 20, WHITE_CLOUD_WIDTH, WHITE_CLOUD_HEIGHT);
    //Само облако
    ctx.fillStyle = "white";
    ctx.fillRect(100, 10, WHITE_CLOUD_WIDTH, WHITE_CLOUD_HEIGHT);
    ctx.fillStyle = "black";

    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили! \nСписок результатов: ", 120, 50);

    //Гистограмма
    gameStatistics("Наиля", 100, 100, 130, 100, 300, 50, "#000");
};

var gameStatistics = function(gamer, gamer_x, gamer_y, x, y, width, height, color){
    ctx.fillText(gamer, gamer_x, gamer_y);
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = color;
}
