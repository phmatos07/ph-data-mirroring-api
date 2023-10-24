import { UserEntity } from "./models/user.entity";

export class UserBuilder {

  user!: UserEntity;

  constructor(user: Partial<UserEntity>) {
    this.reset();
    if (user.id) this.upadateId(user.id);
    if (user.name) this.upadateName(user.name);
    if (user.email) this.upadateEmail(user.email);
    if (user.password) this.upadatePassword(user.password);
  }

  upadateId(id: string): this {
    this.user = { ...this.user, id };
    return this;
  }

  upadateName(name: string): this {
    this.user = { ...this.user, name };
    return this;
  }

  upadateEmail(email: string): this {
    this.user = { ...this.user, email };

    return this;
  }

  upadatePassword(password: string): this {
    this.user = { ...this.user, password };
    return this;
  }

  reset(): void {
    this.user = new UserEntity();
  }
}
