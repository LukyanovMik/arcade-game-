namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
e e e e e e e e e e e e e e e e 
e f f e e e e e e e e e e e e e 
f e e f e e e e e e e e e e e e 
f e e e e e e e e e e e e e e e 
f e e e e e e e e e e e e f f f 
f e e e e f f f e f e f e f e f 
f e e f e f e f e f e f e f f f 
e f f e e f f f f e f e e f e e 
e e e e e e e e e e e e e f f f 
9 9 9 9 9 9 9 e e e 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e e 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e e 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e e 9 9 9 9 9 9 
9 9 9 9 9 9 9 e e e 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e f e e e f e e e f e e f f f e 
e f e e e f e e f e f e e f e f 
e f e f e f e e f e f e e f e f 
e f e f e f e e f f f e e f e f 
e f e f e f e f e e e f e f e f 
e e f e f e e f e e e f e f e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f e e e 
f f f f f f f f f f f f f e e e 
f f f f f f f f f f f f f e e e 
f f f f f f f f f f f f f e e e 
f f f f f f f f f f f f f e e e 
f f f f f f f f f f f f f e e e 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f e f e f e f f f e f e f f f f 
e e f e f e f e f e f e f e f e 
e e f f f e f e f e f e f e f e 
e e f e f e f e f e f e f e f e 
f e f e f e f f f e f f f e f e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e f f f f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
`
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    game.over(true)
    mySprite.startEffect(effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorth, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.startEffect(effects.fire, 500)
})
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(
            hex`32003200181818181818181818181818181818181818181818181818181818181818181818181818181818181818180b0b0b0b0b0b0b18181818181818181818181818181818181818181818181818181818181818181818181818181818181818191a070707071518181818181818181818181818181818181818181818181818181818181818181818181818181818181818191a070707071518181818181818181818181818181818181818181818181818181818181818181818181818181818181b18191a070707071501010101010101010101010101010132010101010101010101010101010101010101010101010101010101010b0b0b0b07150203030303030303030303032403031c07030303031c03030303031c03031c03031c03030303030303031c03031c030307150407070707070707070707071c07071c071c1c24071c07071c0707070707240707070707070707071c072507073007070715040707070707292a07070707070707240707071c070707072407072507071c07071c0707070707071c070707071c070707150407070707221d1d1d1d0707240707070707071c071c07071c07071c07070707071c07071c1c300724071c070707070b0b0b04070707071f1d1d1d1d09091c09241c1c09091c091c09090909092409091c09091c09091c1c1c091c091c09091c1c1c1c1c04070707071d1f1d1d1d201d1d1d221f1d1d1d1d201d1d1d1d1f1d1d221d1d1d1d201d1f1d1d22221d1d1d201d1d1d1d1d2204070707071d261c261d1d26261d262626261d1d26261d262626262626261d2626261d261d1d26262626262626262626261d040707070707072407070707071c07070707070707071c0707071c0707071c0707071c07070707070707070707070707071c040707070707072407071c07072407071c07071c07072407072407070707070707072407071c070707070707241c0707071c040707070707071c07071c07071c07070707071c07070707071c070707071c0707071c07071c0707070707071c1c0707071c230707070707070707072407070707071c07072407071c070707070707071c0707070707071c07070707070707070707071c25261c261c09090909091c091c1c09092409091c09091c091c1c1c0909090909091c1c09091c09090909091c1c240707071c1c1c1c1c1c1c24091c1c1c1c1c1c251c1c1c1c1c1c1c301c1c1c241c1c1c091c1c1c091c1c1c1c241c1c301c1c1c0707071c1c0707070707070907070707070907070707070707070707090707070707090707070907070707070707070707070707071c1c0707070707070907070707070907070707070707070707090707070707090707070907070707070707070707070707071c1c0707070707070907070707070907070707070707070707070707070707090707070907070707070707070707070707071c1c0707070707070907070707070707070707070707070707070707070707070707070907070707070709070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070907070707070709070707070707071c1c0707070707070707070707070707070707070707070707090707070707070707070707070707070709070707070707071c1c0707070707070707070707070707070907070707070707090707070707070707070707070707070709070707070707071c1c0707070707070707070707070707070907070707070707090707070707070707070707070707070709070707070707071c1c07070707071c241c1c1c1c251c1c24091c1c1c1c301c1c091c1c251c1c1c1c1c1c1c1c1c1c1c1c1c091c1c1c1c1c1c1c1c1c07070707071c262626262626262626262626262626262626262626262626262626262626262626262626262626262626251c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c250909090909090909090909090909090909090909090909090909090909090909090909090909090909092407070707071c1c1c1c1c1c1c241c1c1c301c1c1c1c1c1c1c241c1c1c1c1c1c251c1c1c1c241c1c1c1c1c1c1c1c1c1c241c1c07070707071c1c2626262626262626262626262626262626262626262626262626262626262626262626262626262626261c07070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c0707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707071c1c07070707071c090909090909090909090909090909090909090909090909090909090909090909090909090909090909241c07070707071c1c1c241c1c1c1c1c1c1c1c1c1c1c1c1c241c1c1c1c301c1c1c1c1c1c1c1c1c1c1c251c1c241c1c1c1c1c1c1c0707070707260707070707260707070707260707070707260707070707260707070707260707070707070707070707072e1c0707070707070707260707070707260707070707260707070707260707070707260707070707070707070707070707072e1c1c1c1c1c1c1c1c1c1c1c1c1c09091c1c1c1c09091c1c1c1c09091c1c1c1c09091c1c1c1c0909090909090909090909091c`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . 2 . . 2 . . . . . 2 . . . . . 2 . . 2 . . 2 . . . . . . . . 2 . . 2 . . . . 
. . . . . . . . . . . . 2 . . 2 . 2 2 2 . 2 . . 2 . . . . . 2 . . . . . . . . . 2 . 2 . . 2 . . . . 
. . . . . . . . . . . . . . . 2 . . . 2 . . . . 2 . . 2 . . 2 . . 2 . . . . . . 2 . . . . 2 . . . . 
. . . . . 2 2 2 2 2 . . 2 . . . . . . 2 . 2 . . 2 . . 2 . . . . . 2 . . 2 2 2 . 2 . 2 . . . . 2 2 2 
. . . . . 2 2 2 2 2 . . 2 . 2 2 2 . . 2 . 2 . . . . . 2 . . 2 . . 2 . . 2 2 2 . 2 . 2 . . 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . 2 . 2 2 . . 2 . . . . 2 2 . . 2 . . . . . . . 2 . . . 2 . 2 2 . . . . . . . . . . . 2 
. . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . 2 . . . 2 . . . 2 . . . . . . . . . . . . . . 2 
. . . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . . . . . . . 2 . . 2 . . . . . . 2 2 . . . 2 
. . . . . . . 2 . . 2 . . 2 . . . . . 2 . . . . . 2 . . . . 2 . . . 2 . . 2 . . . . . . 2 2 . . . 2 
. . . . . . . . . . 2 . . . . . 2 . . 2 . . 2 . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . 2 
2 2 2 2 2 . . . . . 2 . 2 2 . . 2 . . 2 . . 2 . 2 2 2 . . . . . . 2 2 2 . 2 . . . . . 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . 2 . . . . . 2 . . . . . . . . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . 2 . . . . . . . . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles3,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles8,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.builtin.forestTiles12,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles16,sprites.builtin.forestTiles20,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.builtin.forestTiles19,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.dungeon.stairSouth,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,myTiles.tile1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest1,myTiles.tile2,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.builtin.forestTiles13,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,myTiles.tile3,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.buttonPink,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.buttonTealDepressed,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.floorLightMoss,sprites.builtin.forestTiles0,sprites.builtin.forestTiles2],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . a a a a a a a a a a . . . 
. . a 1 1 1 1 1 1 1 1 1 1 a . . 
. . a 1 1 1 1 1 1 1 1 1 1 a . . 
. a 1 1 1 1 1 1 1 1 1 1 1 1 a . 
. a 1 1 1 1 1 1 1 1 1 1 1 1 a . 
5 a 4 4 5 4 4 4 4 4 4 5 4 4 a 5 
a a 4 4 4 4 4 4 4 4 4 4 4 4 a a 
. a a 4 4 4 4 4 4 4 4 4 4 a a . 
. . a a a a a a a a a a a a . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 3))
info.setLife(5)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . c c c c c c c c c c . . . 
. . c f f f c c c c f f f c . . 
. . c c c c f c c f c c c c . . 
. . c c 1 f c c c c f 1 c c . . 
. . . c c c c c c c c c c . . . 
. . . . c c c c c c c c . . . . 
. . . . c c f f f f c c . . . . 
. . . . c f c c c c f c . . . . 
. . . c c c c c c c c c c . . . 
. . . c c c c c c c c c c . . . 
. . . c c c c c c c c c c . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(25, 20))
mySprite2.follow(mySprite, 65)
game.onUpdateInterval(2000, function () {
    mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . 4 4 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 5 5 5 5 5 5 5 5 5 5 5 4 
4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 4 4 5 5 5 5 5 5 5 5 5 5 5 4 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . . . . . 4 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite3.setVelocity(-73, 0)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(48, 29))
})
game.onUpdateInterval(2000, function () {
    mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . 4 4 
. . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 
4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
. 4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 
. . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . . . . . 4 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite4.setVelocity(-50, 0)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(48, 32))
})
game.onUpdateInterval(2000, function () {
    mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite5.setVelocity(50, 0)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(1, 38))
})
game.onUpdateInterval(2000, function () {
    mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 1 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite6.setVelocity(50, 0)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(1, 41))
})
game.onUpdateInterval(2000, function () {
    mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite7.setVelocity(50, 0)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(1, 44))
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite2, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
    projectile.vx = 110
})
