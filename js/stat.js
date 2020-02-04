// Здесь будет писаться код для улучшения игры
window.renderStatistics = function(ctx,names,times) {


  var WHITE_CLOUD_WIDTH = 420;
  var WHITE_CLOUD_HEIGHT = 270;

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(110, 20, WHITE_CLOUD_WIDTH, WHITE_CLOUD_HEIGHT);
    ctx.fillStyle = "white";
    ctx.fillRect(100, 10, WHITE_CLOUD_WIDTH, WHITE_CLOUD_HEIGHT);
    ctx.fillText(’Ура вы победили! \nСписок результатов: ’, 0, 0);
};
