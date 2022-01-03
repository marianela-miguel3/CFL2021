export default class Usuario{
private id:number;
private nombre:string;
private email:string;
private direccion:string;


public constructor(id:number,nombre:string,email:string,direccion:string){
this.id=id;
this.nombre=nombre;
this.email=email;
this.direccion=direccion;
}

public getId():number{
    return this.id;
}
public getNombre():string{
    return this.nombre;
}
public getEmail():string{
    return this.email;
}
public getDireccion():string{
    return this.direccion;
}
public setId(id:number):void{
    this.id=id;
}
public setNombre(nombre:string):void{
    this.nombre=nombre;
}
public setEmail(email:string):void{
    this.email=email;
}
public setDireccion(direccion:string):void{
    this.direccion=direccion;
}
}