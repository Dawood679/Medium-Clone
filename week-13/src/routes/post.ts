import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {  verify } from "hono/jwt";

import{createblogINput,updatebloginput} from '@dawoodalam057/meduim-common'

export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_Secret: string;
  },
  Variables: {
    userId: string;
  };
}>();

postRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  const token = authHeader?.split(" ")[0];

  if (!token) {
    c.status(401);
    return c.text("No token provided");
  }

  try {
    const user = await verify(token, c.env.JWT_Secret);
    //@ts-ignore
    c.set("userId", user.id);
    return next();
  } catch (err) {
    
    c.status(401);
    return c.text("Invalid or expired token");
  }
});


postRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  let {success} = createblogINput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      msg:"input are incorect"
    })
  }

  try {
    let userId = c.get("userId")
    let post1 = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        author_id: userId,
      },
    });

    return c.json({ id: post1.id });
  } catch (e) {
    c.status(411);

    return c.text("The post is already exists");
  }
});

postRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());


  
  const body = await c.req.json();
  let {success} = updatebloginput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      msg:"input are incorect"
    })
  }

  try {
    let userId = c.get("userId")
    
    let post1 = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        
      },
    });

    return c.json({ post1 });
  } catch (e) {
    c.status(411);

    return c.text("There is an error");
  }
});

postRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  

  try {
    let post1 = await prisma.post.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        createdAt:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    

    return c.json({ post1 });
  } catch (e) {
    c.status(411);

    return c.text("The post is already exists");
  }
});

postRouter.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  
  
  

  try {
    let userId = c.get("userId")
    let user1 = await prisma.user.findFirst({
      where:{
        id:userId
      },
      select:{
        name:true,
        email:true,
        
      }
    });
    
    
    
    return c.json({ user1 });
  } catch (e) {
    c.status(411);

    return c.text("The user is already exists");
  }
});





postRouter.delete("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  
  
  let userId1 = c.req.param('id')

  try {
    let userId = c.get("userId")
    let user1 = await prisma.post.findFirst({
      where:{
        id:userId1
      },
      select:{
        author_id:true
      }
    })


    // let post1 = await prisma.post.delete({
    //   where: {
    //     id: userId1,
    //   }
    // });
    let final = user1?.author_id
    // return c.json({ final,userId });
    if(final === userId){
      let post1 = await prisma.post.delete({
        where: {
          id: userId1,
        }
      });
      return c.json({ post1 });
    }else{
      return c.text("you are not the owner of this post")
    }
    // 

    
  } catch (e) {
    c.status(411);

    return c.text("There is an error");
  }
});


postRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  
  let userId = c.req.param('id')

  try {
    let post1 = await prisma.post.findFirst({
      where: {
        id: userId,
      },
      select:{
        title:true,
        content:true,
        published:true,
        createdAt:true,
        author:{
          select:{
              name:true
          }
        }
      }
    });

    return c.json({ post1 });
  } catch (e) {
    c.status(411);

    return c.text("The post is already exists");
  }
});

