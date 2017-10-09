import { testB } from './moduleA';

export class Startup {
  public static testA() {
    this.testB()
    testB()
  }

  public static testB() {
    console.log('TS: Hello world!');
  }  
}