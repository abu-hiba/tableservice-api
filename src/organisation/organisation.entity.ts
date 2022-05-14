import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Org {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ unique: true, type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar" })
    password: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "timestamp with time zone", nullable: true })
    subscriptionEndDate?: Date;
}
