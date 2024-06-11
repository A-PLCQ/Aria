export class User {
    uid: string;
    email: string;
    fullName: string;
    address: string;
  
    constructor(uid: string, email: string, fullName: string, address: string) {
      this.uid = uid;
      this.email = email;
      this.fullName = fullName;
      this.address = address;
    }
  }
  