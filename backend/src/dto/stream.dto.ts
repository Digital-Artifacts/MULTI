export class GetUserStreamsDto {
  public username: string;
}

export class LivepeerCreateStreamDto {
  public userId: string;
  public name: string;
  public creatorId: string;
  public playbackPolicy: {
    type: string;
    webhookId: string;
    webhookContext: string;
  };
  public multistream: {
    targets: [
      {
        name: string;
      },
    ];
  };
}

export class CreateStreamTargetDto {
  public userId: string;
  public name: string;
  public url: string;
}

export class CreateStreamDto {
  public stream_name: string;
  public type: string;
  public webhookId: string;
  public webhookContext: string;
  public record: boolean;
  public multistream: {
    targets: [
      {
        id: string;
        profile: string;
        videoOnly: boolean;
        spec: {
          name: string;
          url: string;
        };
      },
    ];
  };
}

export class LivepeerCreateStreamTargetDto {
  public name: string;
  public url: string;
  public diabled: boolean;
}
