// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`6400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505000000000000000005000000000000000a0a0a090900000000000000000002000000000000000000000000000000000000030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303000000000000000005000000000000000a0a0a090900000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000004000000000000000000000000000300000000000000000000000000000000000000000a0a0909090000000000000000000000000000000000000000000000000303030000000000000000000000000500030300000000000000000004000000000000030303000000000000000000000003000000000000000000040000030303000000000000000000000000000000000000010101010101010101010000000000000000000000000000000000050000000303000000000000000000000007070700000000000000000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000101010101010101010101010101000000000000000000020000000000000000000000000000000000000000070707000000000000000000000004040404040400000000000000000000000000000003030300000000080808080808080808080808000001010101010101010101010101010101010101010101060601010101010101010101010101010101010606010101010101010101010101010101010101010101010101010101010101010101010101010101010101010108080808080808080101010101`, img`
....................................................................................................
....................................................................................................
.....................222.............................................222............................
...................................................................2................................
.................222..............22................222...........2............222..................
2222222222.....................22...........222................................222..................
22222222222222..............................222................................222..................
2222222222222222222222..22222222222222222..222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,sprites.builtin.forestTiles0,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.castle.tileDarkGrass2,sprites.swamp.swampTile3,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
