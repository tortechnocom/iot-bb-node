import {Entity, model, property}from '@loopback/repository'; 

@model()
export class Party extends Entity {

@property( {
type:'string', 
id:true, 
required:true

  })
partyId:string; 

@property( {
type:'string', 
required:true

  })
partyTypeId:string; 

@property( {
type:'string'

})
statusId?:string; 

constructor(data?:Partial < Party > ) {
super(data); 
}
}
