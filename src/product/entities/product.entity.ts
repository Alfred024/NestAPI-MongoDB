import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document,  } from "mongoose";

@Schema()
export class Product extends Document{

    @Prop({
        unique: true,
        index: true,
    })
    product : string
    @Prop({
        index: true,
    })
    price : number
    @Prop({
        unique: true,
        index: true,
    })
    category : string
    @Prop({
        index: true,
    })
    description: string
    @Prop({
        index: true,
    })
    quantity : number
}

export const ProductSchema = SchemaFactory.createForClass(Product);