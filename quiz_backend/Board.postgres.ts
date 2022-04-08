import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: Number;
  @Column({ type: "text" })
  name!: string;

  @Column({ type: "timestamp", default: new Date(), nullable: true })
  deletedAt!: Date;
}
