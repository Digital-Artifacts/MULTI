import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Stream, StreamTargets, User } from '@prisma/client';

@Injectable()
export class StreamService {
  constructor(private prisma: PrismaService) { }

  async Stream(
    StreamWhereUniqueInput: Prisma.StreamWhereUniqueInput,
  ): Promise<Stream | null> {
    return this.prisma.stream.findUnique({
      where: StreamWhereUniqueInput,
    });
  }

  async Streams(
    username: Prisma.UserWhereUniqueInput,
    onlyPastLives: string,
  ): Promise<any | null> {
    if (onlyPastLives === 'yes') {
      return this.prisma.user.findUnique({
        where: username,
        include: {
          Stream: {
            where: {
              lastSeen: {
                gt: '0',
              },
            },
          },
        },
      });
    }

    return this.prisma.user.findUnique({
      where: username,
      include: {
        Stream: true,
      },
    });
  }

  async streamForUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<any | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        multistreamTargets: {
          select: {
            targetId: true,
          },
        },
      },
    });
  }

  async StreamTarget(
    where: Prisma.StreamTargetsWhereUniqueInput,
  ): Promise<StreamTargets | null> {
    return this.prisma.streamTargets.findUnique({
      where,
    });
  }

  async streamTargetsForUser(
    where: any,
    select: Prisma.UserSelect,
  ): Promise<any | null> {
    return this.prisma.user.findFirst({
      where,
      select,
    });
  }

  async createUser(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async createStream(data: Prisma.StreamUncheckedCreateInput): Promise<Stream> {
    return this.prisma.stream.create({
      data,
    });
  }

  async createStreamTarget(
    data: Prisma.StreamTargetsUncheckedCreateInput,
  ): Promise<StreamTargets> {
    return this.prisma.streamTargets.create({
      data,
    });
  }

  async updateStream(args: Prisma.StreamUpdateArgs): Promise<Stream> {
    return this.prisma.stream.update(args);
  }
}
