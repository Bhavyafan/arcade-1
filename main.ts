namespace SpriteKind {
    export const Plane2Enemy = SpriteKind.create()
    export const Plane1Enemy = SpriteKind.create()
    export const Plane1Bullet = SpriteKind.create()
    export const Plane2bullet = SpriteKind.create()
    export const Plane1Bigbullet = SpriteKind.create()
    export const Plane2BigBullet = SpriteKind.create()
    export const Heal = SpriteKind.create()
    export const Damageboost = SpriteKind.create()
    export const Sharkbullets = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    timer.throttle("shoot", 500, function () {
        projectile3 = sprites.createProjectileFromSprite(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, Plane_2, 50, 0)
        projectile3.setKind(SpriteKind.Plane1Bullet)
    })
})
sprites.onOverlap(SpriteKind.Plane1Enemy, SpriteKind.Damageboost, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Damageboost, effects.warmRadial, 200)
    timer.after(500, function () {
        Plane2Sharkbullets = sprites.createProjectileFromSprite(img`
            ..........fffcc...fffffff...........
            ..........fbbbbcffbbbbbbbf..........
            ...........fbffbbbbb111bbf..........
            ...........ffbbbbff11111bf..........
            .........ffcbbbbbff1cccc1f..........
            ........fcccbcbcbb1c1c1cff..........
            ccccc..fcccbcbcbbb1333ccf...........
            cbbddcfccccbcbcbbb1c333c............
            .ccbddcccccbbbbbbb1c333c............
            ..ccbbccccccbbbbb11c333c............
            ..fccbfccccccbbbb11c133cc...........
            ..fccfcbbcccccbbbc11c31cc...........
            .fcbbf.cdddddfbbbc111111c...........
            .fbbf...cdddfbbdbf1111cc............
            fbbf.....ccfbbdbfffccc..............
            fff........fffff....................
            `, Plane_1, -100, 0)
        Plane2Sharkbullets.setKind(SpriteKind.Plane2BigBullet)
        timer.after(500, function () {
            Plane2Sharkbullets = sprites.createProjectileFromSprite(img`
                ..........fffcc...fffffff...........
                ..........fbbbbcffbbbbbbbf..........
                ...........fbffbbbbb111bbf..........
                ...........ffbbbbff11111bf..........
                .........ffcbbbbbff1cccc1f..........
                ........fcccbcbcbb1c1c1cff..........
                ccccc..fcccbcbcbbb1333ccf...........
                cbbddcfccccbcbcbbb1c333c............
                .ccbddcccccbbbbbbb1c333c............
                ..ccbbccccccbbbbb11c333c............
                ..fccbfccccccbbbb11c133cc...........
                ..fccfcbbcccccbbbc11c31cc...........
                .fcbbf.cdddddfbbbc111111c...........
                .fbbf...cdddfbbdbf1111cc............
                fbbf.....ccfbbdbfffccc..............
                fff........fffff....................
                `, Plane_1, -100, 0)
            Plane2Sharkbullets.setKind(SpriteKind.Plane2bullet)
            timer.after(500, function () {
                Plane2Sharkbullets = sprites.createProjectileFromSprite(img`
                    ..........fffcc...fffffff...........
                    ..........fbbbbcffbbbbbbbf..........
                    ...........fbffbbbbb111bbf..........
                    ...........ffbbbbff11111bf..........
                    .........ffcbbbbbff1cccc1f..........
                    ........fcccbcbcbb1c1c1cff..........
                    ccccc..fcccbcbcbbb1333ccf...........
                    cbbddcfccccbcbcbbb1c333c............
                    .ccbddcccccbbbbbbb1c333c............
                    ..ccbbccccccbbbbb11c333c............
                    ..fccbfccccccbbbb11c133cc...........
                    ..fccfcbbcccccbbbc11c31cc...........
                    .fcbbf.cdddddfbbbc111111c...........
                    .fbbf...cdddfbbdbf1111cc............
                    fbbf.....ccfbbdbfffccc..............
                    fff........fffff....................
                    `, Plane_1, -100, 0)
                Plane2Sharkbullets.setKind(SpriteKind.Plane2BigBullet)
                timer.after(500, function () {
                    Plane2Sharkbullets = sprites.createProjectileFromSprite(img`
                        ..........fffcc...fffffff...........
                        ..........fbbbbcffbbbbbbbf..........
                        ...........fbffbbbbb111bbf..........
                        ...........ffbbbbff11111bf..........
                        .........ffcbbbbbff1cccc1f..........
                        ........fcccbcbcbb1c1c1cff..........
                        ccccc..fcccbcbcbbb1333ccf...........
                        cbbddcfccccbcbcbbb1c333c............
                        .ccbddcccccbbbbbbb1c333c............
                        ..ccbbccccccbbbbb11c333c............
                        ..fccbfccccccbbbb11c133cc...........
                        ..fccfcbbcccccbbbc11c31cc...........
                        .fcbbf.cdddddfbbbc111111c...........
                        .fbbf...cdddfbbdbf1111cc............
                        fbbf.....ccfbbdbfffccc..............
                        fff........fffff....................
                        `, Plane_1, -100, 0)
                    Plane2Sharkbullets.setKind(SpriteKind.Plane1Bigbullet)
                    timer.after(500, function () {
                        Plane2Sharkbullets = sprites.createProjectileFromSprite(img`
                            ..........fffcc...fffffff...........
                            ..........fbbbbcffbbbbbbbf..........
                            ...........fbffbbbbb111bbf..........
                            ...........ffbbbbff11111bf..........
                            .........ffcbbbbbff1cccc1f..........
                            ........fcccbcbcbb1c1c1cff..........
                            ccccc..fcccbcbcbbb1333ccf...........
                            cbbddcfccccbcbcbbb1c333c............
                            .ccbddcccccbbbbbbb1c333c............
                            ..ccbbccccccbbbbb11c333c............
                            ..fccbfccccccbbbb11c133cc...........
                            ..fccfcbbcccccbbbc11c31cc...........
                            .fcbbf.cdddddfbbbc111111c...........
                            .fbbf...cdddfbbdbf1111cc............
                            fbbf.....ccfbbdbfffccc..............
                            fff........fffff....................
                            `, Plane_1, -100, 0)
                        Plane2Sharkbullets.setKind(SpriteKind.Plane2BigBullet)
                    })
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Plane1Bullet, SpriteKind.Plane1Enemy, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 20, function () {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Plane_2, 200, 0)
        projectile.setKind(SpriteKind.Plane1Bullet)
    })
})
sprites.onOverlap(SpriteKind.Plane1Enemy, SpriteKind.Heal, function (sprite, otherSprite) {
    info.player2.changeLifeBy(10)
    sprites.destroyAllSpritesOfKind(SpriteKind.Heal, effects.warmRadial, 200)
})
sprites.onOverlap(SpriteKind.Plane2BigBullet, SpriteKind.Plane2Enemy, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-2)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 20, function () {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Plane_1, -200, 0)
        projectile2.setKind(SpriteKind.Plane2bullet)
    })
})
sprites.onOverlap(SpriteKind.Plane2Enemy, SpriteKind.Heal, function (sprite, otherSprite) {
    info.player1.changeLifeBy(10)
    sprites.destroyAllSpritesOfKind(SpriteKind.Heal, effects.warmRadial, 200)
})
info.player1.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.smiles)
})
info.player2.onLifeZero(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
})
sprites.onOverlap(SpriteKind.Plane2Enemy, SpriteKind.Damageboost, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Damageboost, effects.warmRadial, 200)
    timer.after(500, function () {
        Plane1SharkBullet = sprites.createProjectileFromSprite(img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `, Plane_2, 100, 0)
        Plane1SharkBullet.setKind(SpriteKind.Plane1Bigbullet)
        timer.after(500, function () {
            Plane1SharkBullet = sprites.createProjectileFromSprite(img`
                ...........fffffff...ccfff..........
                ..........fbbbbbbbffcbbbbf..........
                ..........fbb111bbbbbffbf...........
                ..........fb11111ffbbbbff...........
                ..........f1cccc1ffbbbbbcff.........
                ..........ffc1c1c1bbcbcbcccf........
                ...........fcc3331bbbcbcbcccf..ccccc
                ............c333c1bbbcbcbccccfcddbbc
                ............c333c1bbbbbbbcccccddbcc.
                ............c333c11bbbbbccccccbbcc..
                ...........cc331c11bbbbccccccfbccf..
                ...........cc13c11cbbbcccccbbcfccf..
                ...........c111111cbbbfdddddc.fbbcf.
                ............cc1111fbdbbfdddc...fbbf.
                ..............cccfffbdbbfcc.....fbbf
                ....................fffff........fff
                `, Plane_2, 100, 0)
            Plane1SharkBullet.setKind(SpriteKind.Plane1Bigbullet)
            timer.after(500, function () {
                Plane1SharkBullet = sprites.createProjectileFromSprite(img`
                    ...........fffffff...ccfff..........
                    ..........fbbbbbbbffcbbbbf..........
                    ..........fbb111bbbbbffbf...........
                    ..........fb11111ffbbbbff...........
                    ..........f1cccc1ffbbbbbcff.........
                    ..........ffc1c1c1bbcbcbcccf........
                    ...........fcc3331bbbcbcbcccf..ccccc
                    ............c333c1bbbcbcbccccfcddbbc
                    ............c333c1bbbbbbbcccccddbcc.
                    ............c333c11bbbbbccccccbbcc..
                    ...........cc331c11bbbbccccccfbccf..
                    ...........cc13c11cbbbcccccbbcfccf..
                    ...........c111111cbbbfdddddc.fbbcf.
                    ............cc1111fbdbbfdddc...fbbf.
                    ..............cccfffbdbbfcc.....fbbf
                    ....................fffff........fff
                    `, Plane_2, 100, 0)
                Plane1SharkBullet.setKind(SpriteKind.Plane1Bigbullet)
                timer.after(500, function () {
                    Plane1SharkBullet = sprites.createProjectileFromSprite(img`
                        ...........fffffff...ccfff..........
                        ..........fbbbbbbbffcbbbbf..........
                        ..........fbb111bbbbbffbf...........
                        ..........fb11111ffbbbbff...........
                        ..........f1cccc1ffbbbbbcff.........
                        ..........ffc1c1c1bbcbcbcccf........
                        ...........fcc3331bbbcbcbcccf..ccccc
                        ............c333c1bbbcbcbccccfcddbbc
                        ............c333c1bbbbbbbcccccddbcc.
                        ............c333c11bbbbbccccccbbcc..
                        ...........cc331c11bbbbccccccfbccf..
                        ...........cc13c11cbbbcccccbbcfccf..
                        ...........c111111cbbbfdddddc.fbbcf.
                        ............cc1111fbdbbfdddc...fbbf.
                        ..............cccfffbdbbfcc.....fbbf
                        ....................fffff........fff
                        `, Plane_2, 100, 0)
                    Plane1SharkBullet.setKind(SpriteKind.Plane1Bigbullet)
                    timer.after(500, function () {
                        Plane1SharkBullet = sprites.createProjectileFromSprite(img`
                            ...........fffffff...ccfff..........
                            ..........fbbbbbbbffcbbbbf..........
                            ..........fbb111bbbbbffbf...........
                            ..........fb11111ffbbbbff...........
                            ..........f1cccc1ffbbbbbcff.........
                            ..........ffc1c1c1bbcbcbcccf........
                            ...........fcc3331bbbcbcbcccf..ccccc
                            ............c333c1bbbcbcbccccfcddbbc
                            ............c333c1bbbbbbbcccccddbcc.
                            ............c333c11bbbbbccccccbbcc..
                            ...........cc331c11bbbbccccccfbccf..
                            ...........cc13c11cbbbcccccbbcfccf..
                            ...........c111111cbbbfdddddc.fbbcf.
                            ............cc1111fbdbbfdddc...fbbf.
                            ..............cccfffbdbbfcc.....fbbf
                            ....................fffff........fff
                            `, Plane_2, 100, 0)
                        Plane1SharkBullet.setKind(SpriteKind.Plane1Bigbullet)
                    })
                })
            })
        })
    })
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(Plane_2)
    info.player2.setLife(20)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 1000, function () {
        Projectile4 = sprites.createProjectileFromSprite(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, Plane_1, -50, 0)
        Projectile4.setKind(SpriteKind.Plane2bullet)
    })
})
sprites.onOverlap(SpriteKind.Plane1Bigbullet, SpriteKind.Plane1Enemy, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Plane2bullet, SpriteKind.Plane2Enemy, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    controller.player1.moveSprite(Plane_1)
    info.player1.setLife(20)
})
let DamageboostSprite: Sprite = null
let HealSprite: Sprite = null
let Projectile4: Sprite = null
let Plane1SharkBullet: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let Plane2Sharkbullets: Sprite = null
let projectile3: Sprite = null
let Plane_2: Sprite = null
let Plane_1: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
    d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
    ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
    bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
    bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
Plane_1 = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Plane1Enemy)
Plane_2 = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Plane2Enemy)
Plane_2.setPosition(17, 71)
Plane_1.setPosition(132, 71)
Plane_1.setStayInScreen(true)
Plane_2.setStayInScreen(true)
game.onUpdateInterval(7000, function () {
    HealSprite = sprites.create(img`
        ....................
        ....................
        ....................
        ....2222...2222.....
        ...222222.222222....
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ...2222222222222....
        ....22222222222.....
        .....222222222......
        ......2222222.......
        .......22222........
        ........222.........
        .........2..........
        .........2..........
        ....................
        `, SpriteKind.Heal)
    HealSprite.setPosition(randint(0, 10), randint(0, scene.screenHeight()))
})
forever(function () {
	
})
game.onUpdateInterval(10000, function () {
    DamageboostSprite = sprites.create(img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
        .ffbb1111fffbbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `, SpriteKind.Damageboost)
    DamageboostSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
