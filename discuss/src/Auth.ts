import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import GitHubProvider from "next-auth/providers/github"
import { prisma } from "./lib"

