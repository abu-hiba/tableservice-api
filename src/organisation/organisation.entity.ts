import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Org {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 150 })
    name: string;

    @Column({ unique: true, type: "varchar", length: 150 })
    email: string;

    @Column({ type: "varchar", length: 150 })
    password: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "timestamp with time zone", nullable: true })
    subscriptionEndDate?: Date;
}
