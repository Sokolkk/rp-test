var platforms;
class MainLvl extends Phaser.Scene
{
    preload ()
    {
        this.load.image('фон', 'l1.jpeg');
    }

    create ()
    {
        this.add.image(400, 300, 'фон').setScale(0.2);
        platforms = this.physics.add.staticGroup();
    }

    update ()
    {
    }
}
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-MainLvl',
    width: 1200,
    height: 700,
    scene: MainLvl
};

const game = new Phaser.Game(config);