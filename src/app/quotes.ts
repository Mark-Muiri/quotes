export class Quote {
  showDescription: boolean = false;
  constructor(public id:number, public author:string, public quote:string, public submitDate: Date) {
     this.showSubmitDate=false;
  }
  showSubmitDate: boolean;
}
