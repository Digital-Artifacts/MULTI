import { Stream, Prisma, StreamTargets } from '@prisma/client';

export const transformLivepeerResponse = async (
  data: any,
  streamTargets: [StreamTargets],
): Promise<Prisma.StreamUncheckedCreateInput> => {
  console.log('transformer', data);
  return {
    name: data.name,
    id: data.id,
    creatorId: data.userId,
    lastSeen: data.lastSeen.toString(),
    isActive: data.isActive,
    isHealthy: data.isHealthy || false,
    parentId: data.parentId || '',
    streamKey: data.streamKey,
    playbackId: data.playbackId,
    playbackPolicy: data.playbackPolicy,
    profiles: data.profiles,
    record: data.record,
    suspended: data.suspended,
    createdAt: data.createdAt.toString(),
    multistreamTargets: {
      connect: streamTargets.map((elem) => ({ targetId: elem.targetId })),
    },
  };
};

// export const transform = async (
//   data: any,
// ): Promise<Prisma.StreamTargetsUncheckedCreateInput> => {
//   return {};
// };
