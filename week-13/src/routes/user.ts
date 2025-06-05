import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {signupInput,signinInput} from '@dawoodalam057/meduim-common'
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_Secret: string;
  };
}>();







userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  let {success} = signupInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      msg:"input are incorect"
    })
  }

  try {
    let user1 = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    
    let token = await sign({ id: user1.id }, c.env.JWT_Secret);
    
    return c.json({ jwt: token });
  } catch (e) {
    c.status(411);

    return c.text("The user is already exists");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  let {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      msg:"input are incorect"
    })
  }

  try {
    let user1 = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user1) {
      c.status(403);
      return c.text("User is not exists");
    }
    let token = await sign({ id: user1.id }, c.env.JWT_Secret);

    return c.json({ jwt: token });
  } catch (e) {
    c.status(411);

    return c.text("The user is already exists");
  }
});


