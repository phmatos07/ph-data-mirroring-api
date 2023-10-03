export interface ErrorObject {
  code: number;
  message: string;
}

export const Error0001: ErrorObject = {
  code: 0o1,
  message: 'Usuário cadastrado com sucesso!'
}

export const Error0002: ErrorObject = {
  code: 0o2,
  message: 'Usuário não está cadastrado no banco de dados!'
}
