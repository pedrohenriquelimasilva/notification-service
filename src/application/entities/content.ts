export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  //segundo parametro das funções com construtores no ts é o valor de retorno
  private validationContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  // metodo para criar validações internas antes de manter a independencia do objeto
  constructor(content: string) {
    const isContentLengthValid = this.validationContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length is invalid!');
    }

    this.content = content;
  }
}
