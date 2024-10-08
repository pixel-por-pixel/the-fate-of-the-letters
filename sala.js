export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.spritesheet('personagem', 'assets/personagem.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.anims.create({
      key: 'parado',
      frames: [{ key: 'personagem', frame: 15 }],
      frameRate: 1
    })

    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('personagem', { start: 89, end: 95 }),
      frameRate: 10,
      repeat: -1
    })

    this.personagem = this.physics.add.sprite(50, 225, 'personagem', 15)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.personagem.body.velocity.x === 0) {
          this.personagem.setVelocityX(100)
          this.personagem.anims.play('andar-direita')
        } else {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('parado')
        }
      })
  }
}