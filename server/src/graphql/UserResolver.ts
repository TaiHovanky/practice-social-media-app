import bcrypt, { compare } from 'bcryptjs';
import { errorHandler } from '../utils/errorHandler';
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { User } from '../entity/User';
import { sendRefreshToken } from '../utils/sendRefreshToken';
import { createAccessToken, createRefreshToken } from '../utils/createTokens';
import { requestContext } from '../types/context';
import { isAuthenticated } from '../utils/isAuthenticated';
import { Like } from 'typeorm';

@ObjectType()
class LoginResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}

@Resolver()
export class UserResolver {

  @Query(() => [User])
  users() {
    return User.find({ relations: ['likedPosts']})
      .catch((err) => console.log(err));
  }

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    /* Hash the password and then insert the user data and hashed password into db. */
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.insert({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })
    .catch((err) => {
      errorHandler('User registration failed', err);
      return false;
    });
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: requestContext
  ) {
    /* Get the user from database using the email, then compare the password that was entered
    to the password from the db. Sign a JWT and return that. */
    const user = await User.findOne({ where: { email }});

    if (user) {
      const isPasswordValid: boolean = await compare(password, user.password);

      if (isPasswordValid) {
        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);

        sendRefreshToken(res, refreshToken);
        return { token: accessToken, user };
      }
    } else {
      return errorHandler('Invalid password', res);
    }
    return errorHandler('Login failed', res);
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: any) {
    sendRefreshToken(res, '');
    return true;
  }

  @Query(() => User, { nullable: true }) // Query type needs to have its return type defined - can't infer type
  @UseMiddleware(isAuthenticated)
  async homePage(
    @Ctx() { payload }: requestContext
  ) {
    if (payload) {
      return User.findOne({ where: { email: payload.email }})
        .catch((err) => {
          console.log('catch err', err);
          return null;
        });
    }
    return null;
  }

  @Query(() => [User], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async searchUsers(
    @Arg('name') name: string
  ) {
    if (name) {
      return User.find({ where: { firstName: Like(`%${name}%`) }})
        .catch((err) => {
          console.log('error finding user', err);
        });
    }
    return null;
  }

  @Mutation(() => User, { nullable: true })
  async followUser(
    @Arg('userToBeFollowed') userToBeFollowed: number,
    @Arg('loggedInUser') loggedInUser: number,
    @Ctx() { res }: requestContext
  ) {
    try {
      
    } catch (err) {
      errorHandler('Failed to like post', res);
      return null;
    }
  }
}