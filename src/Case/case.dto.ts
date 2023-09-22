export class CreateCaseDTO {
  readonly title: string;
  readonly image: string;
  readonly logo: string;
  readonly desc: string;
  readonly type: number;
  readonly html: string;
  readonly url: string;
  readonly date: number;
  readonly dateStr: string;
}

export class SaveCaseDTO {
  readonly title: string;
  readonly logo: string;
  readonly desc: string;
  readonly image: string;
  readonly type: number;
  readonly html: string;
  readonly url: string;
  readonly date: number;
  readonly dateStr: string;
}
