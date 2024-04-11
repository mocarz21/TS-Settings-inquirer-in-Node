import { Message, Status } from "./Message";

interface User{
  name:string,
  age:number,
}

export class UsersData{

  data: User[]

  constructor(){
    this.data = []
  }

  showAll(){
    Message.showColorized(Status.info, 'Users data')
    this.data.length === 0 ? console.log('No data...') : console.table(this.data)
  }

  add(user:User){
    if(user.name.length > 0 && user.age > 0 ){
      this.data.push(user) 
      Message.showColorized(Status.success, 'User has been successfuly added!')
    }else{
      Message.showColorized(Status.error, 'incorect data inject') 
    }  
  }
  remove(user:string){
    const isUser = this.data.findIndex( e => e.name === user )
    if( isUser !== -1){
      this.data.splice(isUser,1)
      Message.showColorized(Status.success,'User delete')
    }else{
      Message.showColorized(Status.error, 'Somthing go wrong')
    }
  }

  edit(index:number,user:User){

    this.data.splice(index,1,user)
  }
  
}

