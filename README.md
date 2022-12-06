# fastify-type-provider-zod-report

# Installation & Running
if you have nix just run nix-shell it will install the dependencies

## dependencies
Node 18.x
pnpm latest

## install & run
1. pnpm install 
2. pnpm compile:watch
3. pnpm debug

# Error
Navigate to http://localhost:4949/documentation, you will see the error 
![20221206_15h16m11s_grim](https://user-images.githubusercontent.com/23149166/205935671-751ed3e2-50d0-4a24-8936-4d870e7d96e8.png)
to make the error go away comment one of the duplicates in the loginResponse in src/routes/login.ts
