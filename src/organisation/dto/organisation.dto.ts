export class OrgDto {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly email: string;
    readonly subscriptionEndDate?: Date;
}
