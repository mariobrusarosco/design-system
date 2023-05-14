export interface MyInterface {
  name: string;
}

export const mySubModuleTwo = (test: MyInterface) => {
  console.log("Hello World Two/sub", test);
};
