import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Number, } from "mongoose";
// Data 
import { UUID } from "mongodb";
// Otros
//import { Product } from "src/product/interfaces/product.interface";

// Document means entity of a no-relational DB
@Schema()
export class Order extends Document{

    @Prop({
        unique: true,
        index: true,
    })
    id_order : UUID;

    // Relación con otro documento
    @Prop({
        unique: true,
        index: true,
    })
    id_user : UUID;

    settled : boolean;

    total_cost : Number;

    // Relación con otro documento
    // items : Product[];
}

export const OrderSchema = SchemaFactory.createForClass( Order );