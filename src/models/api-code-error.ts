export class ApiCodeError {

  readonly code!: string;
  private readonly PROJECT_CODE = 'PDM';

  constructor(code: string) {
    this.code = `${this.PROJECT_CODE}-${code}`;
  }
}
