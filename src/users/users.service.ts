import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@test.com' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@test.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie.brown@test.com' },
    { id: 4, name: 'Diana Prince', email: 'diana.prince@test.com' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan.hunt@test.com' },
    { id: 6, name: 'Fiona Gallagher', email: 'fiona.gallagher@test.com' },
    { id: 7, name: 'George Martin', email: 'george.martin@test.com' },
    { id: 8, name: 'Hannah Lee', email: 'hannah.lee@test.com' },
    { id: 9, name: 'Ian Wright', email: 'ian.wright@test.com' },
    { id: 10, name: 'Julia Roberts', email: 'julia.roberts@test.com' },
    { id: 11, name: 'Kevin Durant', email: 'kevin.durant@test.com' },
    { id: 12, name: 'Laura Palmer', email: 'laura.palmer@test.com' },
    { id: 13, name: 'Michael Scott', email: 'michael.scott@test.com' },
    { id: 14, name: 'Nina Dobrev', email: 'nina.dobrev@test.com' },
    { id: 15, name: 'Oscar Isaac', email: 'oscar.isaac@test.com' },
    { id: 16, name: 'Paula Gomez', email: 'paula.gomez@test.com' },
    { id: 17, name: 'Quentin Blake', email: 'quentin.blake@test.com' },
    { id: 18, name: 'Rachel Green', email: 'rachel.green@test.com' },
    { id: 19, name: 'Steve Rogers', email: 'steve.rogers@test.com' },
    { id: 20, name: 'Tony Stark', email: 'tony.stark@test.com' },
    { id: 21, name: 'Uma Thurman', email: 'uma.thurman@test.com' },
    { id: 22, name: 'Victor Stone', email: 'victor.stone@test.com' },
    { id: 23, name: 'Wanda Maximoff', email: 'wanda.maximoff@test.com' },
    { id: 24, name: 'Xavier Woods', email: 'xavier.woods@test.com' },
    { id: 25, name: 'Yara Greyjoy', email: 'yara.greyjoy@test.com' },
    { id: 26, name: 'Zack Morris', email: 'zack.morris@test.com' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(data: Omit<User, 'id'>): User {
    const id = this.users.length ? Math.max(...this.users.map((u) => u.id)) + 1 : 1;
    const user: User = { id, ...data };
    this.users.push(user);
    return user;
  }

  update(id: number, data: Partial<Omit<User, 'id'>>): User | undefined {
    const user = this.findOne(id);
    if (!user) return undefined;
    Object.assign(user, data);
    return user;
  }

  remove(id: number): boolean {
    const before = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);
    return this.users.length < before;
  }
}
