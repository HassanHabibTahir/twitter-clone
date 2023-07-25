import axios from "axios";
import { prismaClient } from "../../client/db/db";
import JWTService from "../../services/jwt";
import { GraphqlContext } from "../../interfaces";
import { User } from "@prisma/client";
const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googleToken = token;
    const googleOauthUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
    googleOauthUrl.searchParams.set("id_token", googleToken);
    const { data } = await axios.get(googleOauthUrl.toString(), {
      responseType: "json",
    });

    const user = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      let client = await prismaClient.user.create({
        data: {
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
          profileImageUrl: data.picture,
        },
      });
    }
    const userInDb = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!userInDb) throw new Error("User with Email not found");
    const userToken = JWTService.generateTokenForUser(userInDb);
    return userToken;
  },
  getCurrentUser: async (parent: any, args: any, ctx: GraphqlContext) => {
    const id = ctx.user?.id;
    if (!id) return null;
    const user = prismaClient.user.findUnique({ where: { id } });
    return user;
  },
};

const extraResolvers = {
  User: {
    tweets: (parent: User) =>
      prismaClient.tweet.findMany({ where: { author: { id: parent.id } } }),
  },
};

export const resolvers = { queries, extraResolvers };
