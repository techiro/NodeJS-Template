function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello(process.env.NAME!));
