import Phaser from 'phaser'

import MainScene from './MainScene'
import HelloWorldScene from './HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true
        },
    },
    scene: [MainScene, HelloWorldScene]
}

export default new Phaser.Game(config)
