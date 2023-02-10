/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/backend/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const hero_controller_1 = __webpack_require__("./apps/backend/src/app/hero.controller.ts");
const hero_service_1 = __webpack_require__("./apps/backend/src/app/hero.service.ts");
const sequelize_1 = __webpack_require__("@nestjs/sequelize");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
const appearance_model_1 = __webpack_require__("./apps/backend/src/app/models/appearance.model.ts");
const biography_model_1 = __webpack_require__("./apps/backend/src/app/models/biography.model.ts");
const connections_model_1 = __webpack_require__("./apps/backend/src/app/models/connections.model.ts");
const image_model_1 = __webpack_require__("./apps/backend/src/app/models/image.model.ts");
const powerstats_model_1 = __webpack_require__("./apps/backend/src/app/models/powerstats.model.ts");
const work_model_1 = __webpack_require__("./apps/backend/src/app/models/work.model.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([hero_model_1.Hero]),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'sqlite',
                storage: 'db/database.sqlite',
                logging: false,
                models: [appearance_model_1.Appearance, biography_model_1.Biography, connections_model_1.Connections, hero_model_1.Hero, image_model_1.Image, powerstats_model_1.Powerstats, work_model_1.Work],
                synchronize: true,
            }),
        ],
        controllers: [hero_controller_1.HeroController],
        providers: [hero_service_1.HeroService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/backend/src/app/dtos/appearance.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApperanceDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class ApperanceDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender',
        example: 'Male',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Race',
        example: 'Human',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "race", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Height',
        example: '170cm',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "height", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Weight',
        example: '86kg',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "weight", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Eye Color',
        example: 'Blue',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "eye-color", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hair Color',
        example: 'Black',
    }),
    tslib_1.__metadata("design:type", String)
], ApperanceDto.prototype, "hair-color", void 0);
exports.ApperanceDto = ApperanceDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/biography.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BiographyDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class BiographyDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name',
        example: 'Bruce Wayne',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "full-name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alter egos',
        example: 'No alter egos found.',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "alter-egos", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Place of Birth',
        example: 'Crest Hill, Bristol Township; Gotham County',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "place-of-birth", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'First Apperance',
        example: 'Detective Comics #27',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "first-appearance", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'First Apperance',
        example: 'DC Comics',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "publisher", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alignment',
        example: 'good',
    }),
    tslib_1.__metadata("design:type", String)
], BiographyDto.prototype, "alignment", void 0);
exports.BiographyDto = BiographyDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/connections.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionsDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class ConnectionsDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Relatives',
        example: 'Brian Xavier (father, deceased), Sharon Xavier (mother, deceased), Cassandra Nova (sister), Kurt Marko (stepfather, deceased), Cain Marko (Juggernaut, stepbrother), Lilandra (ex-wife), David Charles Haller (Legion, son, deceased)',
    }),
    tslib_1.__metadata("design:type", String)
], ConnectionsDto.prototype, "relatives", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Group Affiliation',
        example: 'Formerly X-Men (founder; formerly teacher & leader), Illuminati, Genoshan Excalibur, Brotherhood of Evil Mutants (leader), Cadre K, Generation X (founder), Starjammers, The Twelve, New Mutants (founder, teacher & leader), United States Army, X-Corporation',
    }),
    tslib_1.__metadata("design:type", String)
], ConnectionsDto.prototype, "group-affiliation", void 0);
exports.ConnectionsDto = ConnectionsDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/hero.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const powerstats_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/powerstats.dto.ts");
const biography_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/biography.dto.ts");
const appearance_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/appearance.dto.ts");
const work_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/work.dto.ts");
const connections_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/connections.dto.ts");
const image_dto_1 = __webpack_require__("./apps/backend/src/app/dtos/image.dto.ts");
class HeroDto {
    static transform(hero) {
        return Object.fromEntries(Object.entries(hero.toJSON()).map(([key, attributes]) => {
            if (typeof attributes == 'object') {
                delete attributes.id;
                delete attributes.heroId;
            }
            return [key, attributes];
        }));
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique Id of the hero', example: '12345' }),
    tslib_1.__metadata("design:type", String)
], HeroDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the hero', example: 'Batman' }),
    tslib_1.__metadata("design:type", String)
], HeroDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: powerstats_dto_1.PowerstatsDto }),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IPowerstats !== "undefined" && lib_types_1.IPowerstats) === "function" ? _a : Object)
], HeroDto.prototype, "powerstats", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: biography_dto_1.BiographyDto }),
    tslib_1.__metadata("design:type", typeof (_b = typeof lib_types_1.IBiography !== "undefined" && lib_types_1.IBiography) === "function" ? _b : Object)
], HeroDto.prototype, "biography", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: appearance_dto_1.ApperanceDto }),
    tslib_1.__metadata("design:type", typeof (_c = typeof lib_types_1.IAppearance !== "undefined" && lib_types_1.IAppearance) === "function" ? _c : Object)
], HeroDto.prototype, "appearance", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: work_dto_1.WorkDto }),
    tslib_1.__metadata("design:type", typeof (_d = typeof lib_types_1.IWork !== "undefined" && lib_types_1.IWork) === "function" ? _d : Object)
], HeroDto.prototype, "work", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: connections_dto_1.ConnectionsDto }),
    tslib_1.__metadata("design:type", typeof (_e = typeof lib_types_1.IConnections !== "undefined" && lib_types_1.IConnections) === "function" ? _e : Object)
], HeroDto.prototype, "connections", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: image_dto_1.ImageDto }),
    tslib_1.__metadata("design:type", typeof (_f = typeof lib_types_1.IImage !== "undefined" && lib_types_1.IImage) === "function" ? _f : Object)
], HeroDto.prototype, "image", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hour rate to book the hero',
        example: 123,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroDto.prototype, "price", void 0);
exports.HeroDto = HeroDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/image.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class ImageDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL',
        example: 'https://www.superherodb.com/pictures2/portraits/10/100/113.jpg',
    }),
    tslib_1.__metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
exports.ImageDto = ImageDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/appearance.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/hero.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/biography.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/image.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/connections.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/powerstats.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/dtos/work.dto.ts"), exports);


/***/ }),

/***/ "./apps/backend/src/app/dtos/powerstats.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PowerstatsDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class PowerstatsDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intelligence (0-100)',
        minimum: 0,
        maximum: 100,
        example: 75,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "intelligence", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Strength (0-100)',
        minimum: 0,
        maximum: 100,
        example: 55,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "strength", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Speed (0-100)',
        minimum: 0,
        maximum: 100,
        example: 25,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "speed", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Durability (0-100)',
        minimum: 0,
        maximum: 100,
        example: 45,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "durability", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overall Power (0-100)',
        minimum: 0,
        maximum: 100,
        example: 15,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "power", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Combat Power (0-100)',
        minimum: 0,
        maximum: 100,
        example: 35,
    }),
    tslib_1.__metadata("design:type", Number)
], PowerstatsDto.prototype, "combat", void 0);
exports.PowerstatsDto = PowerstatsDto;


/***/ }),

/***/ "./apps/backend/src/app/dtos/work.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class WorkDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupation', example: 'Journalist' }),
    tslib_1.__metadata("design:type", String)
], WorkDto.prototype, "occupation", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base',
        example: 'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    }),
    tslib_1.__metadata("design:type", String)
], WorkDto.prototype, "base", void 0);
exports.WorkDto = WorkDto;


/***/ }),

/***/ "./apps/backend/src/app/hero.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const dtos_1 = __webpack_require__("./apps/backend/src/app/dtos/index.ts");
const hero_service_1 = __webpack_require__("./apps/backend/src/app/hero.service.ts");
let HeroController = class HeroController {
    constructor(heroService) {
        this.heroService = heroService;
    }
    findMany(take = 9, skip = 0) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.heroService.findMany(take, skip).then((heros) => heros.map(dtos_1.HeroDto.transform));
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('heros'),
    (0, swagger_1.ApiOperation)({
        summary: 'Finds many heros',
        description: 'Yields many heros, optionally paginated.',
    }),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.HeroDto, isArray: true }),
    (0, swagger_1.ApiQuery)({
        name: 'take',
        description: 'Number of records to fetch',
        example: 9,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'skip',
        description: 'Number of records to skip',
        example: 0,
    }),
    tslib_1.__param(0, (0, common_1.Query)('take')),
    tslib_1.__param(1, (0, common_1.Query)('skip')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], HeroController.prototype, "findMany", null);
HeroController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof hero_service_1.HeroService !== "undefined" && hero_service_1.HeroService) === "function" ? _a : Object])
], HeroController);
exports.HeroController = HeroController;


/***/ }),

/***/ "./apps/backend/src/app/hero.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sequelize_1 = __webpack_require__("@nestjs/sequelize");
const models_1 = __webpack_require__("./apps/backend/src/app/models/index.ts");
let HeroService = class HeroService {
    constructor(heroModel) {
        this.heroModel = heroModel;
    }
    findMany(take, skip) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.heroModel.findAll({
                include: [models_1.Biography, models_1.Appearance, models_1.Connections, models_1.Image, models_1.Powerstats, models_1.Work],
                limit: take,
                offset: skip,
            });
        });
    }
};
HeroService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, sequelize_1.InjectModel)(models_1.Hero)),
    tslib_1.__metadata("design:paramtypes", [Object])
], HeroService);
exports.HeroService = HeroService;


/***/ }),

/***/ "./apps/backend/src/app/models/appearance.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Appearance = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Appearance = class Appearance extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "gender", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "race", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "height", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "weight", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "eye-color", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "hair-color", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Appearance.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Appearance.prototype, "hero", void 0);
Appearance = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Appearance);
exports.Appearance = Appearance;


/***/ }),

/***/ "./apps/backend/src/app/models/biography.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Biography = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Biography = class Biography extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "full-name", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "alter-egos", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "aliases", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "place-of-birth", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "first-appearance", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "publisher", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "alignment", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Biography.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Biography.prototype, "hero", void 0);
Biography = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Biography);
exports.Biography = Biography;


/***/ }),

/***/ "./apps/backend/src/app/models/connections.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connections = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Connections = class Connections extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Connections.prototype, "group-affiliation", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Connections.prototype, "relatives", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Connections.prototype, "alignment", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Connections.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Connections.prototype, "hero", void 0);
Connections = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Connections);
exports.Connections = Connections;


/***/ }),

/***/ "./apps/backend/src/app/models/hero.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hero = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const powerstats_model_1 = __webpack_require__("./apps/backend/src/app/models/powerstats.model.ts");
const appearance_model_1 = __webpack_require__("./apps/backend/src/app/models/appearance.model.ts");
const biography_model_1 = __webpack_require__("./apps/backend/src/app/models/biography.model.ts");
const work_model_1 = __webpack_require__("./apps/backend/src/app/models/work.model.ts");
const connections_model_1 = __webpack_require__("./apps/backend/src/app/models/connections.model.ts");
const image_model_1 = __webpack_require__("./apps/backend/src/app/models/image.model.ts");
let Hero = class Hero extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => powerstats_model_1.Powerstats, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IPowerstats !== "undefined" && lib_types_1.IPowerstats) === "function" ? _a : Object)
], Hero.prototype, "powerstats", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => biography_model_1.Biography, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof lib_types_1.IBiography !== "undefined" && lib_types_1.IBiography) === "function" ? _b : Object)
], Hero.prototype, "biography", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => appearance_model_1.Appearance, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof lib_types_1.IAppearance !== "undefined" && lib_types_1.IAppearance) === "function" ? _c : Object)
], Hero.prototype, "appearance", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => work_model_1.Work, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof lib_types_1.IWork !== "undefined" && lib_types_1.IWork) === "function" ? _d : Object)
], Hero.prototype, "work", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => connections_model_1.Connections, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_e = typeof lib_types_1.IConnections !== "undefined" && lib_types_1.IConnections) === "function" ? _e : Object)
], Hero.prototype, "connections", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => image_model_1.Image, { onDelete: 'cascade', hooks: true }),
    tslib_1.__metadata("design:type", typeof (_f = typeof lib_types_1.IImage !== "undefined" && lib_types_1.IImage) === "function" ? _f : Object)
], Hero.prototype, "image", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Hero.prototype, "price", void 0);
Hero = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Hero);
exports.Hero = Hero;


/***/ }),

/***/ "./apps/backend/src/app/models/image.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Image = class Image extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Image.prototype, "url", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Image.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Image.prototype, "hero", void 0);
Image = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Image);
exports.Image = Image;


/***/ }),

/***/ "./apps/backend/src/app/models/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/appearance.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/hero.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/biography.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/image.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/connections.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/powerstats.model.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/backend/src/app/models/work.model.ts"), exports);


/***/ }),

/***/ "./apps/backend/src/app/models/powerstats.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Powerstats = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Powerstats = class Powerstats extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "intelligence", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "strength", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "speed", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "durability", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "power", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Powerstats.prototype, "combat", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Powerstats.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Powerstats.prototype, "hero", void 0);
Powerstats = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Powerstats);
exports.Powerstats = Powerstats;


/***/ }),

/***/ "./apps/backend/src/app/models/work.model.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Work = void 0;
const tslib_1 = __webpack_require__("tslib");
const sequelize_typescript_1 = __webpack_require__("sequelize-typescript");
const lib_types_1 = __webpack_require__("./libs/lib-types/src/index.ts");
const hero_model_1 = __webpack_require__("./apps/backend/src/app/models/hero.model.ts");
let Work = class Work extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Work.prototype, "occupation", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Work.prototype, "base", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hero_model_1.Hero),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Work.prototype, "heroId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hero_model_1.Hero),
    tslib_1.__metadata("design:type", typeof (_a = typeof lib_types_1.IHero !== "undefined" && lib_types_1.IHero) === "function" ? _a : Object)
], Work.prototype, "hero", void 0);
Work = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Work);
exports.Work = Work;


/***/ }),

/***/ "./libs/lib-types/src/index.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/sequelize":
/***/ ((module) => {

module.exports = require("@nestjs/sequelize");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "sequelize-typescript":
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const cors = __webpack_require__("cors");
const app_module_1 = __webpack_require__("./apps/backend/src/app/app.module.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.use(cors());
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Everyhero API')
            .setDescription('Everyhero API documentation')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        yield app.listen(port);
        common_1.Logger.log(`🚀 Everyhero API is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map