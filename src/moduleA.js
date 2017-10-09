import { Startup } from './moduleB'

export function testA() {
  testB()
  Startup.testB()
}

export function testB() {
  console.log('JS: Hello world!')
}