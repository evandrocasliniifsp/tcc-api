export class CreatePrizeInputDto {
  public readonly id?: string;

  public readonly year!: number;

  public readonly category!: string;

  public readonly share!: number;

  public readonly motivation!: string;
}