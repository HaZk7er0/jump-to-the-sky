var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var start = false
var speed = 100;
var score = 0;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('cielo', 'assets/cielo.png');
    this.load.image('suelo', 'assets/suelo.png');
    this.load.image('nube', 'assets/nube.png');
    this.load.image('plata', 'assets/plataforma.png');
    this.load.image('player'
        ,'assets/cubo.png');    
}

function create ()
{
    this.add.image(200, 300, 'cielo');
    nube1 = this.physics.add.sprite(100, 100, 'nube');
    nube = this.physics.add.sprite(300, 250, 'nube');

    plata = this.physics.add.sprite(300, 600    , 'plata').setImmovable();
    plata2 = this.physics.add.sprite(200, 400, 'plata').setImmovable();
    plata3 = this.physics.add.sprite(100, 200, 'plata').setImmovable();
    suelo = this.physics.add.sprite(200, 610, 'suelo').setImmovable();
    player = this.physics.add.sprite(200, 550, 'player'); 

    cursors = this.input.keyboard.createCursorKeys();

    player.setGravityY(550);

    this.physics.add.collider(player, plata);
    this.physics.add.collider(player, plata2);
    this.physics.add.collider(player, plata3);
    this.physics.add.collider(player, suelo);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FB2C00' });
}

function update ()
{
    this.physics.world.wrap(player, 10);

    if (cursors.left.isDown)
{
    player.setVelocityX(-200);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(200);
}
else
{
    player.setVelocityX(0);
}
if (start == false)
{

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-400);
    start = true;
    suelo.destroy();
}
}
    nube1.setVelocityY(speed);
    nube.setVelocityY(speed);

if (nube1.y >700) 
{
    nube1.y = -70;
    nube1.x = 50;
}  
if (nube.y >700)
{
    nube.y = -200;
    nube.x = 300;
}
if (start == true)
{
    if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-400);
}
    plata.setVelocityY(speed);
    plata3.setVelocityY(speed);
    plata2.setVelocityY(speed);

if (player.y >595)
{
    this.physics.pause();
}    
}       
if (plata.y >610)  
{
    plata.y = -10;
    plata.x = Phaser.Math.Between(0, 400);
    score += 1;
    scoreText.setText('Score: ' + score);
}   

if (plata2.y >610) 
{
    plata2.y = -10;
    plata2.x = Phaser.Math.Between(0, 400)
    score += 1;
    scoreText.setText('Score: ' + score);
}   

if (plata3.y >610)
{
    plata3.y = -10;
    plata3.x = Phaser.Math.Between(0, 400)
    score += 1;
    scoreText.setText('Score: ' + score);
}
if (score == 5)
{
    speed = 130;
    player.setGravityY(640);
}
if (score == 20)
{
    speed = 190;
    player.setGravityY(750);
}    
if (score == 30)
{
    speed = 230;
    player.setGravityY(900);    
}
if (score == 50)
{
    speed = 290;
    player.setGravityY(1100);    
}
if (score == 70)
{
    speed = 340;
    player.setGravityY(1400);    
}
}