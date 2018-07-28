import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  
  @property({
    type: 'string',
    required: true,
    
  })
  firstname: string;
  
  @property({
    type: 'string',
    
  })
  lastname?: string;
  
  constructor(data?: Partial<Person>) {
    super(data);
  }
}
