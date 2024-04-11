//import consola from 'consola';
const consola = require('consola')

export enum Status{
  success = 'success',
  error = 'error',
  info = 'info'
}

export class Message{
  
  constructor(private content: string){
    
  }

  public show():void{
    console.log(this.content)
  }
  public capitalize():void{
     this.content = this.content[0].toUpperCase() + this.content.slice(1).toLowerCase()
    
  }
  public toUpperCase(){
    this.content = this.content.toUpperCase()
  }
  public toLowerCase(){
    this.content = this.content.toLowerCase()
  }
  public static showColorized(status: Status , text: string ):void{
    switch(status){
      case Status.success: consola.success(text)
        break
      case Status.error : consola.error(text)
        break
      case Status.info : consola.info(text)
        break
    }
  }
  
}





