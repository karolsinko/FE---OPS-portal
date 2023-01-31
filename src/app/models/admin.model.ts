export class admin{
   id?: number;
   username: string;
   password: string;


  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

export class zoznamAdminov{
   id?: number;
   username: string;
   password: string;


  constructor(admin :zoznamAdminov) {
    this.id = admin.id;
    this.username = admin.username;
    this.password = admin.password;
  }
}
