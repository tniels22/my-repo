import { Flavor } from "src/cocoas/entities/flavor.entity";
import { Cocoa } from "src/cocoas/entities/cocoa.entity";
import { DataSource } from "typeorm"
import { CocoaRefactor1734728713819 } from "src/migrations/1734728713819-CocoaRefactor";


export default new DataSource({
    type: "postgres",
    host: '127.0.0.1',
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "cocoa_db",
    entities: [Cocoa, Flavor],
    migrations: [CocoaRefactor1734728713819],
});