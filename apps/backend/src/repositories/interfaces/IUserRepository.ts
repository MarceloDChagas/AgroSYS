export interface IUserRepository {
  findByEmail(email: string): Promise<any>;
  create(data: { email: string; password: string; name: string }): Promise<any>;
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any>;
}
// Passar tudo isso aqui como DTO dps
