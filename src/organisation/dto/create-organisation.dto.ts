export class CreateOrgDto {
    readonly name: string;
    readonly description?: string;
    readonly tags: string[];
}
