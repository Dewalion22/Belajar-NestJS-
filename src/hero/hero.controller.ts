
import {Controller, Get, Post, HttpCode, Res, Req, Param, Body} from "@nestjs/common";
import {CreateHeroDto} from "./dto/CreateHeroDto";


let heroes = [
    {
        id: 1,
        name: "Zilong",
        type: "Fighter",
        gambar : "Zilong.jpg"
    },
    {
        id: 2,
        name: "Akai",
        type: "Tank",
        gambar : "akai.jpg"
    },
    {
        id: 3,
        name: "Aurora",
        type: "mage",
        gambar : "aurora.jpg"
    }
]
@Controller("hero")
export class HeroController {
    @Get("index")//hero/index
    @HttpCode(200)
    index(@Res() response) {
        response.json(
            heroes[1]
        )
    }

    @Get("detail/:id")
    show(@Param("id") id: number, @Res() response) {
        response.json(
            heroes[id]
        )
    }


    @Get('create')
    create(@Res({passthrough: true}) response): string {
        response.cookie("name", "tobi")
        return "hero create"
    }

    @Post("store")
    @HttpCode(201)
    store(
        @Req() req,
        @Body() createHeroDto: CreateHeroDto,
        @Res({ passthrough: true }) res,
    ) {
        try {
            // const {id, name, type, gambar } =req.body;
            //      heroes.push({
            //     id,
            //     name,
            //     type,
            //     gambar,
            // });
            //
            // return heroes;
            return createHeroDto;
        } catch (err) {
            res.status(500).json({ message : err });
        }
    }

}