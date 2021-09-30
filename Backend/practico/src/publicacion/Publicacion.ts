export default class Publicacion{
    private userId:number;
    private id:number;
    private titulo:string;
    private cuerpo:string;

    public constructor(userId:number,id:number,titulo:string,cuerpo:string){
        this.userId=userId;
        this.id=id;
        this.titulo=titulo;
        this.cuerpo=cuerpo;
    }
    public getUserId():number{
        return this.userId;
    }
    public getId():number{
        return this.id;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public getCuerpo():string{
        return this.cuerpo;
    }
    public setUserId(userId:number):void{
        this.userId=userId;
    }
    public setId(id:number):void{
        this.id=id;
    }
    public setTitulo(titulo:string):void{
        this.titulo=titulo;
    }
    public setCuerpo(cuerpo:string):void{
        this.cuerpo=cuerpo;
    }

}